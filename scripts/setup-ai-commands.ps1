# Propojí .agents/commands s Cursor (.cursor/commands) a Claude Code (.claude/commands).
# Spusť po klonu repozitáře:  pwsh scripts/setup-ai-commands.ps1

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$source = Join-Path $root ".agents\commands"

if (-not (Test-Path $source)) {
    Write-Error "Chybí zdrojová složka: $source"
}

function Link-CommandsDir {
    param(
        [string]$LinkPath,
        [string]$Label
    )

    $parent = Split-Path -Parent $LinkPath
    if (-not (Test-Path $parent)) {
        New-Item -ItemType Directory -Path $parent -Force | Out-Null
    }

    if (Test-Path $LinkPath) {
        $item = Get-Item $LinkPath -Force
        if ($item.Attributes -band [IO.FileAttributes]::ReparsePoint) {
            Remove-Item $LinkPath -Force -Recurse
        } else {
            Remove-Item $LinkPath -Force -Recurse
        }
    }

    $target = (Resolve-Path $source).Path
    New-Item -ItemType Junction -Path $LinkPath -Target $target | Out-Null
    Write-Host "OK  $Label -> .agents/commands"
}

Link-CommandsDir (Join-Path $root ".cursor\commands") "Cursor"
Link-CommandsDir (Join-Path $root ".claude\commands") "Claude Code"

Write-Host ""
Write-Host "Hotovo. Upravuj prikazy jen v .agents/commands/"
Write-Host ""
Write-Host "Poznamka: Cursor hooky pro logovani casu jsou v .cursor/hooks.json"
Write-Host "         (nepotrebuji junction — nacitaji se automaticky po restartu Cursoru)."
