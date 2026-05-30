# Rychle overeni post-commit report workflow (bez noveho produktoveho commitu).
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Push-Location $root
$fail = 0

function Assert-True {
    param([bool]$Cond, [string]$Name)
    if ($Cond) { Write-Host "OK  $Name" } else { Write-Host "FAIL $Name"; $script:fail++ }
}

powershell -NoProfile -ExecutionPolicy Bypass -File scripts/update-report-from-git.ps1 | Out-Null
Assert-True ($LASTEXITCODE -eq 0) "script exit 0"
$log = Get-Content .agents/report-hook.log -Tail 5 -ErrorAction SilentlyContinue
Assert-True ([bool]($log | Select-String "skip: already processed")) "idempotence skip"

$config = Get-Content .agents/report-config.json -Raw | ConvertFrom-Json
Assert-True ($null -ne $config.sessionPaddingMinutesBefore) "sessionPaddingMinutesBefore in config"
Assert-True ($null -ne $config.sessionPaddingMinutesAfter) "sessionPaddingMinutesAfter in config"
$skipReport = $false
foreach ($p in @($config.skipCommitMessagePrefixes)) {
    if ("Report: auto-sync test".StartsWith($p)) { $skipReport = $true }
}
Assert-True $skipReport "skip Report: prefix logic"

$reportOnly = @("reports/report.md", ".agents/report-state.json")
$nonReport = $reportOnly | Where-Object {
    $_ -notin @("reports/report.md", ".agents/session-activity.jsonl", ".agents/report-state.json")
}
Assert-True ($nonReport.Count -eq 0) "only report-related files -> skip"

powershell -NoProfile -ExecutionPolicy Bypass -File scripts/install-git-hooks.ps1 | Out-Null
Assert-True (Test-Path .git/hooks/post-commit) "post-commit hook exists"
$hook = Get-Content .git/hooks/post-commit -Raw
Assert-True ($hook -match "update-report-from-git") "hook calls update script"

$scriptBody = Get-Content scripts/update-report-from-git.ps1 -Raw
Assert-True ($scriptBody -match "REPORT_HOOK_TEST_PUSH_FAIL") "push fail test hook"
Assert-True ($scriptBody -match "push failed after rebase") "push fail logging"
Assert-True ($scriptBody -match "REPORT_HOOK_RUNNING") "loop guard env"
Assert-True ($scriptBody -match "report-auto-why.ps1") "auto-why integration"

. (Join-Path $root "scripts\report-auto-why.ps1")
$why = Get-AutoCommitWhy -Subject "Opravit zarovnani hero textu" -Body "" -Areas "app"
Assert-True ($why -notmatch '/report') "why not placeholder"
Assert-True ($why -match 'hero|zarovn') "why hero heuristic"

Pop-Location
if ($fail -gt 0) { exit 1 }
Write-Host ""
Write-Host "Vsechny testy prosly."
exit 0
