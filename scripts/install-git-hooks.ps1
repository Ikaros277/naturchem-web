# Nainstaluje post-commit hook pro automatickou synchronizaci reportu.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$hooksDir = Join-Path $root ".git\hooks"
$hookPath = Join-Path $hooksDir "post-commit"
$scriptRel = "scripts/update-report-from-git.ps1"

if (-not (Test-Path (Join-Path $root ".git"))) {
    Write-Error "Neni git repozitar: $root"
}

if (-not (Test-Path $hooksDir)) {
    New-Item -ItemType Directory -Path $hooksDir -Force | Out-Null
}

$hookContent = @"
#!/bin/sh
# naturchem.cz — automaticky report po produktovem commitu (viz scripts/update-report-from-git.ps1)
cd "`$(git rev-parse --show-toplevel)" || exit 0
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "$scriptRel" -AutoCommit
exit 0
"@

[System.IO.File]::WriteAllText($hookPath, $hookContent.Replace("`r`n", "`n"), [System.Text.UTF8Encoding]::new($false))
Write-Host "OK  post-commit -> $hookPath"
Write-Host ""
Write-Host "Po kazdem produktovem commitu se aktualizuje reports/report.md,"
Write-Host "vytvori se commit Report: auto-sync a push na origin (lze vypnout v .agents/report-config.json)."
Write-Host ""
Write-Host "Test bez zapisu:  pwsh scripts/update-report-from-git.ps1 -DryRun"
