# Zpetne aplikuje session padding na vsechna sezeni v reports/report.md.
# Predpoklad: casy v nadpisech jsou bez paddingu (surove z gitu / puvodniho odhadu).
param(
    [switch]$DryRun
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$configPath = Join-Path $root ".agents\report-config.json"
$reportPath = Join-Path $root "reports\report.md"
$statePath = Join-Path $root ".agents\report-state.json"

$config = @{
    minBlockMinutes             = 5
    sessionPaddingMinutesBefore = 5
    sessionPaddingMinutesAfter  = 5
}

if (Test-Path $configPath) {
    $loaded = Get-Content $configPath -Raw | ConvertFrom-Json
    $config.minBlockMinutes = $loaded.minBlockMinutes
    if ($null -ne $loaded.sessionPaddingMinutesBefore) {
        $config.sessionPaddingMinutesBefore = [int]$loaded.sessionPaddingMinutesBefore
    }
    if ($null -ne $loaded.sessionPaddingMinutesAfter) {
        $config.sessionPaddingMinutesAfter = [int]$loaded.sessionPaddingMinutesAfter
    }
}

function Format-DurationLabel {
    param([int]$Minutes)
    if ($Minutes -lt 60) { return "~$Minutes min" }
    $hours = [math]::Floor($Minutes / 60)
    $mins = $Minutes % 60
    if ($mins -eq 0) { return "~$hours hod" }
    return "~$hours hod $mins min"
}

function Format-TotalHoursLabel {
    param([int]$Minutes)
    if ($Minutes -lt 60) { return "~$Minutes min" }
    $hours = $Minutes / 60.0
    $rounded = [math]::Round($hours, 1)
    $text = "$rounded".Replace(".", ",")
    return "~$text hodiny"
}

function Get-PaddedSpan {
    param([DateTime]$RawStart, [DateTime]$RawEnd)
    $displayStart = $RawStart.AddMinutes(-$config.sessionPaddingMinutesBefore)
    $displayEnd = $RawEnd.AddMinutes($config.sessionPaddingMinutesAfter)
    $minutes = [math]::Max(
        $config.minBlockMinutes,
        [math]::Round(($displayEnd - $displayStart).TotalMinutes)
    )
    return @{
        DisplayStart = $displayStart
        DisplayEnd   = $displayEnd
        Minutes      = $minutes
        DateLabel    = $RawStart.ToString("d. M. yyyy", [System.Globalization.CultureInfo]::GetCultureInfo("cs-CZ"))
    }
}

function Parse-ManualDurationMinutes {
    param([string]$Text)
    $t = $Text.ToLowerInvariant()
    if ($t -match 'priblizne|přibližně') { $t = $t -replace 'priblizne|přibližně', '' }
    if ($t -match '(\d+),(\d+)\s*hodiny') {
        return [math]::Round([double]($Matches[1] + "." + $Matches[2]) * 60)
    }
    if ($t -match '(\d+)\s*hod(?:iny|in)?(?:\s+(\d+)\s*min)?') {
        $h = [int]$Matches[1]
        $m = if ($Matches[2]) { [int]$Matches[2] } else { 0 }
        return $h * 60 + $m
    }
    if ($t -match '(\d+)\s*min') { return [int]$Matches[1] }
    if ($t -match '(\d+),(\d+)\s*hod') {
        return [math]::Round([double]($Matches[1] + "." + $Matches[2]) * 60)
    }
    return $null
}

function Get-GitDaySpan {
    param([DateTime]$Day)
    $dayStart = $Day.Date
    $dayEnd = $dayStart.AddDays(1)
    Push-Location $root
    try {
        $lines = git log --format="%aI|%s" --since="$($dayStart.ToString('yyyy-MM-dd'))" --until="$($dayEnd.ToString('yyyy-MM-dd'))" 2>$null
        $times = @()
        foreach ($line in $lines) {
            if (-not $line) { continue }
            $parts = $line -split '\|', 2
            if ($parts.Count -ge 2 -and $parts[1].Trim().StartsWith("Report:")) { continue }
            $times += [DateTimeOffset]::Parse($parts[0]).LocalDateTime
        }
        $times = @($times | Where-Object { $_.Date -eq $dayStart.Date })
        if ($times.Count -eq 0) { return $null }
        return @{
            RawStart = ($times | Measure-Object -Minimum).Minimum
            RawEnd   = ($times | Measure-Object -Maximum).Maximum
        }
    } finally {
        Pop-Location
    }
}

function Read-Utf8File {
    param([string]$Path)
    return [System.IO.File]::ReadAllText($Path, [System.Text.UTF8Encoding]::new($true))
}

function Write-Utf8File {
    param([string]$Path, [string]$Content)
    [System.IO.File]::WriteAllText($Path, $Content.TrimEnd() + "`n", [System.Text.UTF8Encoding]::new($true))
}

$body = Read-Utf8File $reportPath
$sessionHeaderRx = [regex]'(?m)^(## Sezen[^\n]*: )(.+?)(\r?\n)'
$matches = $sessionHeaderRx.Matches($body)
if ($matches.Count -eq 0) {
    Write-Error "Zadna sezeni v reportu."
}

$totalMinutes = 0
$timeRangeRx = [regex]'^(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4}),\s*(\d{1,2}):(\d{2})[-\u2013\u2014](\d{1,2}):(\d{2})$'
$dateOnlyRx = [regex]'^(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})$'
$dateRangeRx = [regex]'^(\d{1,2})\.[\u2013\u2014](\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})$'

$updates = New-Object System.Collections.Generic.List[object]

for ($mi = 0; $mi -lt $matches.Count; $mi++) {
    $m = $matches[$mi]
    $headerLine = $m.Groups[2].Value.Trim()
    $padded = $null

    $tm = $timeRangeRx.Match($headerLine)
    if ($tm.Success) {
        $y = [int]$tm.Groups[3].Value
        $mo = [int]$tm.Groups[2].Value
        $d = [int]$tm.Groups[1].Value
        $rawStart = Get-Date -Year $y -Month $mo -Day $d -Hour ([int]$tm.Groups[4].Value) -Minute ([int]$tm.Groups[5].Value) -Second 0
        $rawEnd = Get-Date -Year $y -Month $mo -Day $d -Hour ([int]$tm.Groups[6].Value) -Minute ([int]$tm.Groups[7].Value) -Second 0
        if ($rawEnd -lt $rawStart) { $rawEnd = $rawStart }
        $padded = Get-PaddedSpan -RawStart $rawStart -RawEnd $rawEnd
    } else {
        $dm = $dateOnlyRx.Match($headerLine)
        if ($dm.Success) {
            $day = Get-Date -Year ([int]$dm.Groups[3].Value) -Month ([int]$dm.Groups[2].Value) -Day ([int]$dm.Groups[1].Value)
            $gitSpan = Get-GitDaySpan -Day $day
            if ($gitSpan) {
                $padded = Get-PaddedSpan -RawStart $gitSpan.RawStart -RawEnd $gitSpan.RawEnd
            }
        } else {
            $drm = $dateRangeRx.Match($headerLine)
            if ($drm.Success) {
                $blockStart = $m.Index
                $blockEnd = if ($mi + 1 -lt $matches.Count) { $matches[$mi + 1].Index } else { $body.Length }
                $block = $body.Substring($blockStart, $blockEnd - $blockStart)
                $durMatch = [regex]::Match($block, '(?m)^\*\*Odhadovan[^\r\n]*:\*\*\s*(.+)$')
                if ($durMatch.Success) {
                    $rawMins = Parse-ManualDurationMinutes $durMatch.Groups[1].Value.Trim()
                    if ($rawMins) {
                        $mins = $rawMins + $config.sessionPaddingMinutesBefore + $config.sessionPaddingMinutesAfter
                        $padded = @{ Minutes = $mins; DateLabel = $null; DisplayStart = $null; DisplayEnd = $null }
                    }
                }
            }
        }
    }

    if (-not $padded) {
        Write-Warning "Preskoceno sezeni: $headerLine"
        continue
    }

    $totalMinutes += $padded.Minutes
    $blockStart = $m.Index
    $blockEnd = if ($mi + 1 -lt $matches.Count) { $matches[$mi + 1].Index } else { $body.Length }
    $dash = [char]0x2013

    if ($padded.DateLabel -and $padded.DisplayStart) {
        $newHeader = "$($padded.DateLabel), $($padded.DisplayStart.ToString('HH:mm'))$dash$($padded.DisplayEnd.ToString('HH:mm'))"
        $durationLabel = Format-DurationLabel -Minutes $padded.Minutes
        $rozlozeni = "$($padded.DateLabel) $($padded.DisplayStart.ToString('HH:mm'))$dash$($padded.DisplayEnd.ToString('HH:mm')) ($durationLabel)"
    } else {
        $newHeader = $headerLine
        $durationLabel = Format-DurationLabel -Minutes $padded.Minutes
        $rozlozeni = $null
    }

    $updates.Add([ordered]@{
        HeaderIndex    = $m.Groups[2].Index
        HeaderLength   = $m.Groups[2].Length
        NewHeader      = $newHeader
        BlockStart     = $blockStart
        BlockEnd       = $blockEnd
        DurationLabel  = $durationLabel
        Rozlozeni      = $rozlozeni
        HasTimeRange   = ($null -ne $padded.DisplayStart)
    })
}

# Apply from end to start so indices stay valid
foreach ($u in ($updates | Sort-Object { $_.BlockStart } -Descending)) {
    $block = $body.Substring($u.BlockStart, $u.BlockEnd - $u.BlockStart)
    $block = $block.Remove($u.HeaderIndex - $u.BlockStart, $u.HeaderLength).Insert($u.HeaderIndex - $u.BlockStart, $u.NewHeader)
    $block = [regex]::Replace($block, '(?m)^(\*\*Odhadovan[^\r\n]*:\*\* ).+$', "`${1}$($u.DurationLabel)", 1)
    if ($u.Rozlozeni) {
        $block = [regex]::Replace($block, '(?m)^(\*\*Rozlo[^\r\n]*:\*\* ).+$', "`${1}$($u.Rozlozeni)", 1)
    }
    $body = $body.Remove($u.BlockStart, $u.BlockEnd - $u.BlockStart).Insert($u.BlockStart, $block)
}

$sessionCount = $matches.Count
$totalLabel = Format-TotalHoursLabel -Minutes $totalMinutes
$body = [regex]::Replace($body, '(?m)^(\| Po[^\|]*et sezen[^\|]*\| )[^|]+(\|)', "`${1}$sessionCount `${2}", 1)
$body = [regex]::Replace($body, '(?m)^(\| Celkov[^\|]*\| )[^|]+(\|)', "`${1}$totalLabel `${2}", 1)

$paddingNote = "*Poznamka: ke kazdemu sezeni se k odhadu pricita +$($config.sessionPaddingMinutesBefore) min pred zacatkem a +$($config.sessionPaddingMinutesAfter) min po konci (report-config.json).*"
if ($body -notmatch 'report-config\.json\)\.\*') {
    $insertAt = [regex]::Match($body, '(?m)^\r?\n---\r?\n\r?\n## Sezen').Index
    if ($insertAt -gt 0) {
        $body = $body.Insert($insertAt, "`n$paddingNote`n")
    }
}

if ($DryRun) {
    Write-Host "Sezeni: $sessionCount, celkem: $totalMinutes min ($totalLabel)"
    Write-Output $body
    exit 0
}

Write-Utf8File $reportPath $body

if (Test-Path $statePath) {
    $state = Get-Content $statePath -Raw | ConvertFrom-Json
    $state.totalMinutesTracked = $totalMinutes
    $state.sessionCount = $sessionCount
    $state | ConvertTo-Json | Set-Content $statePath -Encoding UTF8
}

Write-Host "OK  padding zpetne aplikovan: $sessionCount sezeni, celkem $totalLabel ($totalMinutes min)"
