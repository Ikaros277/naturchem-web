# Loguje casovou aktivitu pro odhad prace v /report (bez obsahu promptu).
param(
    [Parameter(Mandatory = $true)]
    [ValidateSet("user_prompt", "agent_stop")]
    [string]$EventType
)

$ErrorActionPreference = "SilentlyContinue"

$root = Resolve-Path (Join-Path $PSScriptRoot "..\..")
$logPath = Join-Path $root ".agents\session-activity.jsonl"
$logDir = Split-Path -Parent $logPath

if (-not (Test-Path $logDir)) {
    New-Item -ItemType Directory -Path $logDir -Force | Out-Null
}

$entry = [ordered]@{
    ts    = (Get-Date).ToString("yyyy-MM-ddTHH:mm:ssK")
    event = $EventType
    tool  = "cursor"
}

$line = ($entry | ConvertTo-Json -Compress)
Add-Content -Path $logPath -Value $line -Encoding UTF8

if ($EventType -eq "user_prompt") {
    Write-Output '{"permission":"allow"}'
}

exit 0
