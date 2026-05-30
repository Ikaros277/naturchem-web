# Automaticka synchronizace reports/report.md po produktovem commitu.
param(
    [switch]$AutoCommit,
    [switch]$DryRun
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$configPath = Join-Path $root ".agents\report-config.json"
$statePath = Join-Path $root ".agents\report-state.json"
$reportPath = Join-Path $root "reports\report.md"
$logPath = Join-Path $root ".agents\report-hook.log"
$changeTemplatePath = Join-Path $root ".agents\templates\auto-change-block.md"
$newSessionTemplatePath = Join-Path $root ".agents\templates\auto-new-session.md"

$config = @{
    pauseThresholdMinutes        = 30
    minBlockMinutes              = 5
    sessionPaddingMinutesBefore  = 5
    sessionPaddingMinutesAfter   = 5
    autoSyncOnCommit             = $true
    autoPush                     = $true
    skipCommitMessagePrefixes    = @("Report:")
}

if (Test-Path $configPath) {
    $loaded = Get-Content $configPath -Raw | ConvertFrom-Json
    $config.pauseThresholdMinutes = $loaded.pauseThresholdMinutes
    $config.minBlockMinutes = $loaded.minBlockMinutes
    if ($null -ne $loaded.sessionPaddingMinutesBefore) {
        $config.sessionPaddingMinutesBefore = [int]$loaded.sessionPaddingMinutesBefore
    }
    if ($null -ne $loaded.sessionPaddingMinutesAfter) {
        $config.sessionPaddingMinutesAfter = [int]$loaded.sessionPaddingMinutesAfter
    }
    if ($null -ne $loaded.autoSyncOnCommit) { $config.autoSyncOnCommit = [bool]$loaded.autoSyncOnCommit }
    if ($null -ne $loaded.autoPush) { $config.autoPush = [bool]$loaded.autoPush }
    if ($loaded.skipCommitMessagePrefixes) { $config.skipCommitMessagePrefixes = @($loaded.skipCommitMessagePrefixes) }
}

function Get-PaddedSessionSpan {
    param(
        [DateTime]$RawStart,
        [DateTime]$RawEnd
    )
    $displayStart = $RawStart.AddMinutes(-$config.sessionPaddingMinutesBefore)
    $displayEnd = $RawEnd.AddMinutes($config.sessionPaddingMinutesAfter)
    $minutes = [math]::Max(
        $config.minBlockMinutes,
        [math]::Round(($displayEnd - $displayStart).TotalMinutes)
    )
    return @{
        DisplayStart = $displayStart
        DisplayEnd     = $displayEnd
        Minutes        = $minutes
    }
}

function Write-HookLog {
    param([string]$Message)
    $line = "[{0}] {1}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $Message
    Add-Content -Path $logPath -Value $line -Encoding UTF8
}

function Exit-Quiet {
    param([string]$Reason = "")
    if ($Reason) { Write-HookLog "skip: $Reason" }
    exit 0
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

function Read-Utf8File {
    param([string]$Path)
    if (-not (Test-Path $Path)) { return "" }
    return [System.IO.File]::ReadAllText($Path, [System.Text.UTF8Encoding]::new($true))
}

function Write-Utf8File {
    param([string]$Path, [string]$Content)
    [System.IO.File]::WriteAllText($Path, $Content, [System.Text.UTF8Encoding]::new($true))
}

function Expand-Template {
    param([string]$Template, [hashtable]$Vars)
    $result = $Template
    foreach ($key in $Vars.Keys) {
        $result = $result.Replace("{{$key}}", [string]$Vars[$key])
    }
    return $result
}

function Split-ReportFirstSession {
    param([string]$Body)
    $firstSession = [regex]::Match($Body, '(?m)^## Sezen')
    if (-not $firstSession.Success) {
        return @{ Preamble = $Body; Session = ""; Rest = "" }
    }
    $start = $firstSession.Index
    $afterFirst = $Body.Substring($start + 1)
    $nextBreak = [regex]::Match($afterFirst, '(?m)^---\r?\n\r?\n## Sezen')
    if ($nextBreak.Success) {
        $sessionEnd = $start + 1 + $nextBreak.Index
        return @{
            Preamble = $Body.Substring(0, $start)
            Session  = $Body.Substring($start, $sessionEnd - $start)
            Rest     = $Body.Substring($sessionEnd)
        }
    }
    return @{
        Preamble = $Body.Substring(0, $start)
        Session  = $Body.Substring($start)
        Rest     = ""
    }
}

if (-not $config.autoSyncOnCommit) {
    Exit-Quiet "autoSyncOnCommit=false"
}

if ($env:REPORT_HOOK_RUNNING -eq "1") {
    Exit-Quiet "REPORT_HOOK_RUNNING"
}

. (Join-Path $root "scripts\report-auto-why.ps1")

Push-Location $root
try {
    $headHash = (git rev-parse HEAD 2>$null).Trim()
    if (-not $headHash) { Exit-Quiet "no HEAD" }

    $subject = (git -c i18n.logOutputEncoding=utf-8 log -1 --encoding=UTF-8 --format="%s" $headHash 2>$null).Trim()
    if (-not $subject) { $subject = (git log -1 --format="%s" $headHash).Trim() }
    $commitBody = (git -c i18n.logOutputEncoding=utf-8 log -1 --encoding=UTF-8 --format="%b" $headHash 2>$null).Trim()
    foreach ($prefix in $config.skipCommitMessagePrefixes) {
        if ($subject.StartsWith($prefix)) {
            Exit-Quiet "commit prefix $prefix"
        }
    }

    $changedFiles = @(git diff-tree --no-commit-id --name-only -r $headHash 2>$null)
    $reportOnlyFiles = @("reports/report.md", ".agents/session-activity.jsonl", ".agents/report-state.json")
    if ($changedFiles.Count -gt 0) {
        $nonReport = $changedFiles | Where-Object {
            $f = $_ -replace '\\', '/'
            $reportOnlyFiles -notcontains $f
        }
        if ($nonReport.Count -eq 0) {
            Exit-Quiet "only report-related files"
        }
    }

    $state = @{
        lastProcessedCommit = ""
        sessionCount          = 0
        totalMinutesTracked   = 0
    }
    if (Test-Path $statePath) {
        $loadedState = Get-Content $statePath -Raw | ConvertFrom-Json
        $state.lastProcessedCommit = "$($loadedState.lastProcessedCommit)"
        if ($loadedState.sessionCount) { $state.sessionCount = [int]$loadedState.sessionCount }
        if ($loadedState.totalMinutesTracked) { $state.totalMinutesTracked = [int]$loadedState.totalMinutesTracked }
    }

    if ($state.lastProcessedCommit -eq $headHash) {
        Exit-Quiet "already processed $headHash"
    }

    $authorDateIso = (git log -1 --encoding=UTF-8 --format="%aI" $headHash).Trim()
    $commitLocal = [DateTimeOffset]::Parse($authorDateIso).LocalDateTime
    $dateLabel = $commitLocal.ToString("d. M. yyyy", [System.Globalization.CultureInfo]::GetCultureInfo("cs-CZ"))
    $timeLabel = $commitLocal.ToString("HH:mm")

    $statLines = @(git show --stat --format="" $headHash 2>$null)
    $areas = [System.Collections.Generic.HashSet[string]]::new([StringComparer]::OrdinalIgnoreCase)
    foreach ($line in $statLines) {
        if ($line -match '^\s*([^|]+?)\s+\|\s+\d+') {
            $path = $Matches[1].Trim()
            if ($path -match '^src/(?:app|components|lib)/(.+?)/') {
                [void]$areas.Add($Matches[1])
            } elseif ($path -match '^src/(.+?)/') {
                [void]$areas.Add(($Matches[1] -split '/')[0])
            } elseif ($path -match '^reports/') {
                [void]$areas.Add("report")
            } elseif ($path -match '^\.agents/') {
                [void]$areas.Add("workflow")
            } else {
                $base = Split-Path -Leaf $path
                if ($base) { [void]$areas.Add($base) }
            }
        }
    }
    $areasText = if ($areas.Count -gt 0) { ($areas | Sort-Object) -join ", " } else { "web" }

    $shortHash = $headHash.Substring(0, 7)
    $changeTitle = if ($subject.Length -gt 72) { $subject.Substring(0, 69) + "..." } else { $subject }
    $changeTemplate = Read-Utf8File $changeTemplatePath
    $whyText = Get-AutoCommitWhy -Subject $subject -Body $commitBody -Areas $areasText
    $doneText = Get-AutoCommitDone -Subject $subject -Body $commitBody -ShortHash $shortHash -Areas $areasText
    $changeBlock = Expand-Template $changeTemplate @{
        TITLE = $changeTitle
        DONE  = $doneText
        WHY   = $whyText
    }

    if (-not (Test-Path $reportPath)) {
        $padded = Get-PaddedSessionSpan -RawStart $commitLocal -RawEnd $commitLocal
        $durationLabel = Format-DurationLabel -Minutes $padded.Minutes
        $newSessionTemplate = Read-Utf8File $newSessionTemplatePath
        $reportBody = "# Report prac" + [char]0xED + " - naturchem.cz`n`n" + (Expand-Template $newSessionTemplate @{
            DATE        = $dateLabel
            TIME_START  = $padded.DisplayStart.ToString("HH:mm")
            TIME_END    = $padded.DisplayEnd.ToString("HH:mm")
            HASH        = $shortHash
            FULL_HASH   = $headHash
            CHANGE_BLOCK = $changeBlock.Trim()
            DURATION    = $durationLabel
        })
        $state.sessionCount = 1
        $state.totalMinutesTracked = $padded.Minutes
    } else {
        $reportBody = Read-Utf8File $reportPath

        $sessionHeaderPattern = '(?m)^## Sezen[^\n]*: (.+?)\r?\n'
        $firstSessionMatch = [regex]::Match($reportBody, $sessionHeaderPattern)
        $mergeIntoExisting = $false
        $sessionStart = $null
        $sessionEnd = $null

        if ($firstSessionMatch.Success) {
            $headerLine = $firstSessionMatch.Groups[1].Value.Trim()
            $headerTimeMatch = [regex]::Match(
                $headerLine,
                '^(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})(?:,\s*(\d{1,2}):(\d{2})[-\u2013\u2014](\d{1,2}):(\d{2}))?'
            )
            if ($headerTimeMatch.Success) {
                $day = [int]$headerTimeMatch.Groups[1].Value
                $month = [int]$headerTimeMatch.Groups[2].Value
                $year = [int]$headerTimeMatch.Groups[3].Value
                $sessionDate = Get-Date -Year $year -Month $month -Day $day
                if ($commitLocal.Date -eq $sessionDate.Date) {
                    if ($headerTimeMatch.Groups[4].Success) {
                        $sessionStart = Get-Date -Year $year -Month $month -Day $day -Hour ([int]$headerTimeMatch.Groups[4].Value) -Minute ([int]$headerTimeMatch.Groups[5].Value) -Second 0
                        $sessionEnd = Get-Date -Year $year -Month $month -Day $day -Hour ([int]$headerTimeMatch.Groups[6].Value) -Minute ([int]$headerTimeMatch.Groups[7].Value) -Second 0
                    } else {
                        $sessionStart = $sessionDate
                        $sessionEnd = $sessionDate.AddHours(12)
                    }
                    $sessionEndRaw = $sessionEnd.AddMinutes(-$config.sessionPaddingMinutesAfter)
                    $gap = $commitLocal - $sessionEndRaw
                    if ($gap.TotalMinutes -le $config.pauseThresholdMinutes -and $gap.TotalMinutes -ge -5) {
                        $mergeIntoExisting = $true
                    }
                }
            }
        }

        if ($mergeIntoExisting) {
            $rawEnd = $commitLocal
            if ($rawEnd -lt $sessionStart) {
                $rawEnd = $sessionStart.AddMinutes($config.minBlockMinutes)
            }
            # sessionStart v hlavicce je uz display start (s paddingem), neodecitame znovu
            $displayStart = $sessionStart
            $displayEnd = $rawEnd.AddMinutes($config.sessionPaddingMinutesAfter)
            $newStartStr = $displayStart.ToString("HH:mm")
            $newEndStr = $displayEnd.ToString("HH:mm")
            $timeDash = [char]0x2013
            $spanMinutes = [math]::Max(
                $config.minBlockMinutes,
                [math]::Round(($displayEnd - $displayStart).TotalMinutes)
            )

            $parts = Split-ReportFirstSession -Body $reportBody
            $sessionBlock = $parts.Session

            $sessionBlock = [regex]::Replace(
                $sessionBlock,
                '(?m)^(## Sezen[^\n]*: ).+$',
                "`${1}$dateLabel, ${newStartStr}${timeDash}${newEndStr}",
                1
            )

            $changesMatch = [regex]::Match($sessionBlock, '(?s)(### Proveden[^\r\n]*\r?\n)')
            if ($changesMatch.Success) {
                $insertAt = $changesMatch.Index + $changesMatch.Groups[1].Length
                $sessionBlock = $sessionBlock.Insert($insertAt, $changeBlock + "`n")
            } else {
                Write-HookLog "warn: Provedene zmeny section not found in first session"
            }

            $durationLabel = Format-DurationLabel -Minutes $spanMinutes
            $sessionBlock = [regex]::Replace(
                $sessionBlock,
                '(?m)^(\*\*Odhadovan[^\r\n]*:\*\* ).+$',
                "`${1}$durationLabel",
                1
            )
            $sessionBlock = [regex]::Replace(
                $sessionBlock,
                '(?m)^(\*\*Rozlo[^\r\n]*:\*\* ).+$',
                "`${1}$dateLabel ${newStartStr}${timeDash}${newEndStr} ($durationLabel)",
                1
            )
            $sessionBlock = [regex]::Replace(
                $sessionBlock,
                '(?m)^(\*\*Metoda odhadu:\*\* ).+$',
                '${1}git',
                1
            )

            $reportBody = $parts.Preamble + $sessionBlock + $parts.Rest

            $oldSpanMinutes = [math]::Max(
                $config.minBlockMinutes,
                [math]::Round(($sessionEnd - $sessionStart).TotalMinutes)
            )
            $delta = $spanMinutes - $oldSpanMinutes
            if ($delta -gt 0) { $state.totalMinutesTracked += $delta }
        } else {
            $padded = Get-PaddedSessionSpan -RawStart $commitLocal -RawEnd $commitLocal
            $durationLabel = Format-DurationLabel -Minutes $padded.Minutes
            $newSessionTemplate = Read-Utf8File $newSessionTemplatePath
            $newSession = Expand-Template $newSessionTemplate @{
                DATE         = $dateLabel
                TIME_START   = $padded.DisplayStart.ToString("HH:mm")
                TIME_END     = $padded.DisplayEnd.ToString("HH:mm")
                HASH         = $shortHash
                FULL_HASH    = $headHash
                CHANGE_BLOCK = $changeBlock.Trim()
                DURATION     = $durationLabel
            }
            $newSession = $newSession + "`n"
            $insertMatch = [regex]::Match($reportBody, '(?s)---\r?\n\r?\n(?=## Sezen)')
            if ($insertMatch.Success) {
                $insertAt = $insertMatch.Index + $insertMatch.Length
                $reportBody = $reportBody.Insert($insertAt, $newSession)
            } else {
                Write-HookLog "error: cannot find insert point for new session"
                exit 0
            }

            $state.sessionCount += 1
            $state.totalMinutesTracked += $padded.Minutes
        }

        $totalLabel = Format-TotalHoursLabel -Minutes $state.totalMinutesTracked
        $reportBody = [regex]::Replace(
            $reportBody,
            '(?m)^(\| Po[^\|]*et sezen[^\|]*\| )[^|]+(\|)',
            "`${1}$($state.sessionCount) `${2}",
            1
        )
        $reportBody = [regex]::Replace(
            $reportBody,
            '(?m)^(\| Celkov[^\|]*\| )[^|]+(\|)',
            "`${1}$totalLabel `${2}",
            1
        )
    }

    $state.lastProcessedCommit = $headHash

    if ($DryRun) {
        Write-Output $reportBody
        exit 0
    }

    Write-Utf8File $reportPath ($reportBody.TrimEnd() + "`n")
    $stateJson = @{
        lastProcessedCommit = $state.lastProcessedCommit
        sessionCount        = $state.sessionCount
        totalMinutesTracked = $state.totalMinutesTracked
    } | ConvertTo-Json
    Write-Utf8File $statePath $stateJson

    Write-HookLog "updated report for $shortHash"

    if ($AutoCommit) {
        $env:REPORT_HOOK_RUNNING = "1"
        git add $reportPath $statePath 2>$null
        $commitMsg = "Report: auto-sync [$dateLabel, $timeLabel] - $changeTitle"
        git commit -m $commitMsg 2>&1 | Out-Null
        if ($LASTEXITCODE -ne 0) {
            Write-HookLog "commit failed (nothing to commit?)"
        } else {
            Write-HookLog "committed report"
            if ($config.autoPush) {
                $branch = (git rev-parse --abbrev-ref HEAD 2>$null).Trim()
                if (-not $branch) { $branch = "main" }
                if ($env:REPORT_HOOK_TEST_PUSH_FAIL -eq "1") {
                    Write-HookLog "push failed (test mode)"
                } else {
                git push origin $branch 2>&1 | Out-Null
                if ($LASTEXITCODE -ne 0) {
                    git pull --rebase origin $branch 2>&1 | Out-Null
                    git push origin $branch 2>&1 | Out-Null
                    if ($LASTEXITCODE -ne 0) {
                        Write-HookLog "push failed after rebase"
                    } else {
                        Write-HookLog "pushed to origin/$branch"
                    }
                } else {
                    Write-HookLog "pushed to origin/$branch"
                }
                }
            }
        }
        Remove-Item Env:REPORT_HOOK_RUNNING -ErrorAction SilentlyContinue
    }
} catch {
    Write-HookLog "error: $($_.Exception.Message)"
} finally {
    Pop-Location
}

exit 0
