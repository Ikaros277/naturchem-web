# Odhad casove narocnosti sezeni z git commitu a logu konverzace.
param(
    [string]$Since = "",
    [string]$SinceCommit = ""
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$configPath = Join-Path $root ".agents\report-config.json"
$activityPath = Join-Path $root ".agents\session-activity.jsonl"

$config = @{
    pauseThresholdMinutes       = 30
    minBlockMinutes             = 5
    sessionPaddingMinutesBefore = 5
    sessionPaddingMinutesAfter  = 5
    fallbackExchangeMinutes     = 3
    includeGitAuthors           = @()
    skipCommitMessagePrefixes   = @("Report:")
}

if (Test-Path $configPath) {
    $loaded = Get-Content $configPath -Raw | ConvertFrom-Json
    $config.pauseThresholdMinutes = $loaded.pauseThresholdMinutes
    $config.minBlockMinutes = $loaded.minBlockMinutes
    $config.fallbackExchangeMinutes = $loaded.fallbackExchangeMinutes
    if ($null -ne $loaded.sessionPaddingMinutesBefore) {
        $config.sessionPaddingMinutesBefore = [int]$loaded.sessionPaddingMinutesBefore
    }
    if ($null -ne $loaded.sessionPaddingMinutesAfter) {
        $config.sessionPaddingMinutesAfter = [int]$loaded.sessionPaddingMinutesAfter
    }
    if ($loaded.includeGitAuthors) {
        $config.includeGitAuthors = @($loaded.includeGitAuthors)
    }
    if ($loaded.skipCommitMessagePrefixes) {
        $config.skipCommitMessagePrefixes = @($loaded.skipCommitMessagePrefixes)
    }
}

function Test-GitCommitIncluded {
    param(
        [string]$AuthorName,
        [string]$AuthorEmail,
        [string]$Subject
    )

    foreach ($prefix in $config.skipCommitMessagePrefixes) {
        if ($Subject.StartsWith($prefix)) { return $false }
    }

    if ($config.includeGitAuthors.Count -eq 0) { return $true }

    foreach ($author in $config.includeGitAuthors) {
        if ($AuthorName -eq $author -or $AuthorEmail -eq $author) { return $true }
    }

    return $false
}

function Get-SinceDateTime {
    if ($SinceCommit) {
        Push-Location $root
        try {
            $commitDate = git log -1 --format="%aI" $SinceCommit 2>$null
            if ($commitDate) {
                return [DateTimeOffset]::Parse($commitDate).UtcDateTime
            }
        } finally {
            Pop-Location
        }
    }

    if ($Since) {
        $sinceText = $Since.Trim()
        if ($sinceText -match '^(\d{4})-(\d{2})-(\d{2})$') {
            $parsed = Get-Date -Year $Matches[1] -Month $Matches[2] -Day $Matches[3] -Hour 0 -Minute 0 -Second 0
            return $parsed.ToUniversalTime()
        }
        $parsed = [DateTime]::Parse($sinceText, [Globalization.CultureInfo]::InvariantCulture)
        return $parsed.ToUniversalTime()
    }

    return (Get-Date).AddDays(-1).ToUniversalTime()
}

function Format-CzechDuration {
    param([int]$TotalMinutes)

    if ($TotalMinutes -lt 60) {
        return "~$TotalMinutes min"
    }

    $hours = [math]::Floor($TotalMinutes / 60)
    $mins = $TotalMinutes % 60
    if ($mins -eq 0) {
        return "~$hours hod"
    }
    return "~$hours hod $mins min"
}

function Format-CzechBlockLabel {
    param(
        [DateTime]$Start,
        [DateTime]$End,
        [int]$Minutes
    )

    $datePart = $Start.ToString("d.M.")
    $startTime = $Start.ToString("HH:mm")
    $endTime = $End.ToString("HH:mm")
    $duration = Format-CzechDuration -TotalMinutes $Minutes
    return "$datePart ${startTime}-${endTime} ($duration)"
}

$sinceUtc = Get-SinceDateTime
$events = @()

Push-Location $root
try {
    $gitArgs = @("log", "--format=%aI|%an|%ae|%s", "--since=$($sinceUtc.ToString('yyyy-MM-ddTHH:mm:ssZ'))")
    if ($SinceCommit) {
        $gitArgs += "$SinceCommit..HEAD"
    }

    $gitLines = & git @gitArgs 2>$null
    foreach ($line in $gitLines) {
        if (-not $line) { continue }
        $parts = $line -split '\|', 4
        if ($parts.Count -lt 4) { continue }
        if (-not (Test-GitCommitIncluded -AuthorName $parts[1] -AuthorEmail $parts[2] -Subject $parts[3])) {
            continue
        }
        $events += [PSCustomObject]@{
            Time  = [DateTimeOffset]::Parse($parts[0]).UtcDateTime
            Type  = "git_commit"
            Local = [DateTimeOffset]::Parse($parts[0]).LocalDateTime
        }
    }
} finally {
    Pop-Location
}

$hasActivityLog = $false
if (Test-Path $activityPath) {
    Get-Content $activityPath -Encoding UTF8 | ForEach-Object {
        if (-not $_) { return }
        try {
            $row = $_ | ConvertFrom-Json
            $ts = [DateTimeOffset]::Parse($row.ts)
            if ($ts.UtcDateTime -ge $sinceUtc) {
                $hasActivityLog = $true
                $events += [PSCustomObject]@{
                    Time  = $ts.UtcDateTime
                    Type  = $row.event
                    Local = $ts.LocalDateTime
                }
            }
        } catch {
            # skip malformed lines
        }
    }
}

$events = $events | Sort-Object Time

if ($events.Count -eq 0) {
    $result = [ordered]@{
        totalMinutes   = 0
        totalLabel     = "0 min"
        blocks         = @()
        blocksLabel    = "žádná aktivita v rozsahu"
        method         = "bez dat"
        hasGit         = $false
        hasActivityLog = $false
        eventCount     = 0
    }
    Write-Output ($result | ConvertTo-Json -Depth 5 -Compress)
    exit 0
}

$hasGit = ($events | Where-Object { $_.Type -eq "git_commit" }).Count -gt 0
$pauseThreshold = [TimeSpan]::FromMinutes($config.pauseThresholdMinutes)
$minBlock = [TimeSpan]::FromMinutes($config.minBlockMinutes)

$blocks = @()
$currentBlock = @($events[0])

for ($i = 1; $i -lt $events.Count; $i++) {
    $gap = $events[$i].Time - $events[$i - 1].Time
    if ($gap -gt $pauseThreshold) {
        $blocks += ,@($currentBlock)
        $currentBlock = @($events[$i])
    } else {
        $currentBlock += $events[$i]
    }
}
$blocks += ,@($currentBlock)

$blockResults = @()
$totalMinutes = 0

foreach ($block in $blocks) {
    $rawStart = $block[0].Local
    $rawEnd = $block[-1].Local
    $displayStart = $rawStart.AddMinutes(-$config.sessionPaddingMinutesBefore)
    $displayEnd = $rawEnd.AddMinutes($config.sessionPaddingMinutesAfter)
    $minutes = [math]::Max(
        $config.minBlockMinutes,
        [math]::Round(($displayEnd - $displayStart).TotalMinutes)
    )

    $totalMinutes += $minutes
    $blockResults += [ordered]@{
        startLocal = $displayStart.ToString("yyyy-MM-ddTHH:mm:ss")
        endLocal   = $displayEnd.ToString("yyyy-MM-ddTHH:mm:ss")
        minutes    = $minutes
        label      = (Format-CzechBlockLabel -Start $displayStart -End $displayEnd -Minutes $minutes)
        eventCount = $block.Count
    }
}

if ($hasGit -and $hasActivityLog) {
    $method = "git + konverzace"
} elseif ($hasGit) {
    $method = "git"
} elseif ($hasActivityLog) {
    $method = "konverzace"
} else {
    $method = "bez dat"
}

$blocksLabel = ($blockResults | ForEach-Object { $_.label }) -join " + "

$output = [ordered]@{
    totalMinutes      = $totalMinutes
    totalLabel        = (Format-CzechDuration -TotalMinutes $totalMinutes)
    blocks            = $blockResults
    blocksLabel       = $blocksLabel
    method            = $method
    hasGit            = $hasGit
    hasActivityLog    = $hasActivityLog
    eventCount        = $events.Count
    pauseThresholdMin          = $config.pauseThresholdMinutes
    sessionPaddingMinutesBefore = $config.sessionPaddingMinutesBefore
    sessionPaddingMinutesAfter  = $config.sessionPaddingMinutesAfter
}

Write-Output ($output | ConvertTo-Json -Depth 5 -Compress)
