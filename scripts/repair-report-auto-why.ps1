# Opravi genericke Proc v reports/report.md podle git commitu.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
. (Join-Path $root "scripts\report-auto-why.ps1")
$reportPath = Join-Path $root "reports\report.md"
$n = Repair-ReportGenericWhyBlocks -ReportPath $reportPath -Root $root
Write-Host "Opraveno bloku: $n"
