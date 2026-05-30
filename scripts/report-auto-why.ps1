# Deterministicke Proc a Co bylo udelano pro auto-report z git commitu (bez LLM).

function Ensure-SentenceEnd {
    param([string]$Text)
    $t = $Text.Trim()
    if (-not $t) { return $t }
    if ($t -notmatch '[.!?]$') { return "$t." }
    return $t
}

function Get-CommitContext {
    param([string]$Hash, [string]$Root)
    Push-Location $Root
    try {
        $subject = (git -c i18n.logOutputEncoding=utf-8 log -1 --encoding=UTF-8 --format="%s" $Hash 2>$null).Trim()
        if (-not $subject) { $subject = (git log -1 --format="%s" $Hash).Trim() }
        $body = (git -c i18n.logOutputEncoding=utf-8 log -1 --encoding=UTF-8 --format="%b" $Hash 2>$null).Trim()
        $areas = [System.Collections.Generic.HashSet[string]]::new([StringComparer]::OrdinalIgnoreCase)
        $statLines = @(git show --stat --format="" $Hash 2>$null)
        foreach ($line in $statLines) {
            if ($line -match '^\s*([^|]+?)\s+\|\s+\d+') {
                $path = $Matches[1].Trim() -replace '\\', '/'
                if ($path -match '^src/(?:app|components|lib)/([^/]+)') {
                    [void]$areas.Add($Matches[1])
                } elseif ($path -match '^src/([^/]+)') {
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
        return @{ Subject = $subject; Body = $body; Areas = $areasText }
    } finally {
        Pop-Location
    }
}

function Get-AutoCommitWhy {
    param(
        [string]$Subject,
        [string]$Body,
        [string]$Areas
    )

    $bodyLine = ($Body -split "\r?\n" | ForEach-Object { $_.Trim() } | Where-Object {
        $_ -and $_ -notmatch '^Co-authored-by:'
    } | Select-Object -First 1)

    if ($bodyLine -and $bodyLine.Length -ge 20 -and $bodyLine.Length -le 300) {
        return (Ensure-SentenceEnd $bodyLine)
    }

    $s = $Subject
    $a = $Areas.ToLowerInvariant()
    $dash = ' - '

    if ($s -match 'Sprint\s+(\d+)') {
        return "Dokonceni bodu ze Sprintu $($Matches[1]) roadmapy${dash}systematicke zlepsovani UX, obsahu a provazanosti webu podle planu s klientem."
    }
    if ($s -match 'P(\d+)\s*[-/]\s*(\d+)') {
        return "Splneni ukolu P$($Matches[1])-$($Matches[2]) z roadmapy${dash}posun webu k cilove podobe pro klienta."
    }
    if ($s -match 'aktualizovat report|Report:') {
        return "Aktualizace klientskeho reportu praci${dash}prehledny zapis casu a zmen pro klienta."
    }
    if ($s -match 'Opravit|oprava|\bfix\b') {
        if ($s -match 'hero|zarovn|align') {
            return "Oprava zarovnani a rozlozeni hero sekce${dash}konzistentni prvni dojem a lepsi citelnost na vsech zarizenich."
        }
        if ($s -match 'logo|log ') {
            return "Oprava zobrazeni log partneru${dash}spolehlive a citelne reference pro navstevniky."
        }
        if ($s -match 'menu|navig|hlavick|header') {
            return "Oprava navigace a menu${dash}snazsi orientace na webu na mobilu i desktopu."
        }
        if ($s -match 'build') {
            return "Oprava buildu a nasazeni${dash}spolehlive publikovani zmen na produkci."
        }
        return "Technicka nebo vizualni oprava${dash}stabilnejsi a srozumitelnejsi web pro navstevniky."
    }
    if ($s -match 'Pridat|Rozsirit|Sjednotit|doplnit|Nahradit') {
        if ($s -match 'hero|photo') {
            return "Sjednoceni nebo rozsireni hero sekce${dash}jednotny vizualni styl a profesionalnejsi dojem z webu."
        }
        if ($s -match 'meta|prolink|poradna') {
            return "Uprava metadat a prolinkovani stranek${dash}lepsi dohledatelnost a provazanost obsahu."
        }
        if ($s -match 'homepage') {
            return "Uprava uvodni stranky${dash}silnejsi prvni dojem a cesta k poptavce."
        }
        return "Rozsireni nebo sjednoceni funkcionality podle roadmapy${dash}konzistentnejsi zazitek pro uzivatele."
    }
    if ($s -match 'redukc|zjednodus|uklid|hygiena') {
        return "Zjednoduseni struktury a odstraneni nadbytecneho obsahu${dash}rychlejsi orientace a silnejsi konverzni CTA."
    }
    if ($a -match 'workflow|report') {
        return "Uprava procesu reportovani prace${dash}pruhledna evidence casu a zmen pro klienta."
    }
    if ($a -match 'reference|logo') {
        return "Posileni duveryhodnosti prostrednictvim referenci a znacek zakazniku."
    }
    if ($a -match 'sluzby') {
        return "Upravy na strankach sluzeb${dash}jasnejsi prezentace nabidky NATURCHEM."
    }
    if ($a -match 'akreditace') {
        return "Uprava stranky akreditace a opravneni${dash}posileni duveryhodnosti firmy."
    }

    return "Prubezna uprava webu naturchem.cz v ramci dohodnutych UX a obsahovych ukolu."
}

function Get-AutoCommitDone {
    param(
        [string]$Subject,
        [string]$Body,
        [string]$ShortHash,
        [string]$Areas
    )

    $bodyLine = ($Body -split "\r?\n" | ForEach-Object { $_.Trim() } | Where-Object {
        $_ -and $_ -notmatch '^Co-authored-by:'
    } | Select-Object -First 1)

    $hashPart = "(commit ``$ShortHash``)"
    if ($bodyLine -and $bodyLine.Length -ge 15 -and $bodyLine -ne $Subject) {
        return ($Subject + ' - ' + $bodyLine + ' ' + $hashPart + '. Dotcene oblasti: ' + $Areas + '.')
    }
    return ($Subject + ' ' + $hashPart + '. Dotcene oblasti: ' + $Areas + '.')
}

function Repair-ReportGenericWhyBlocks {
    param(
        [string]$ReportPath,
        [string]$Root
    )

    if (-not (Test-Path $ReportPath)) { return 0 }

    $encoding = [System.Text.UTF8Encoding]::new($true)
    $body = [System.IO.File]::ReadAllText($ReportPath, $encoding)
    if ($body -notmatch 'automaticky po commitu') { return 0 }

    $pattern = '(?s)\*\*Co bylo ud[^\r\n]*:\*\*[^\r\n]*commit `([a-f0-9]{7})`[^\r\n]*\r?\n\*\*Pro[^\r\n]*:\*\* Z[^\r\n]*automaticky[^\r\n]*'
    $script:repairRoot = $Root
    $script:repairCount = 0
    $newBody = [regex]::Replace($body, $pattern, {
        param($m)
        $script:repairCount++
        $ctx = Get-CommitContext -Hash $m.Groups[1].Value -Root $script:repairRoot
        $why = Get-AutoCommitWhy -Subject $ctx.Subject -Body $ctx.Body -Areas $ctx.Areas
        $done = Get-AutoCommitDone -Subject $ctx.Subject -Body $ctx.Body -ShortHash $m.Groups[1].Value -Areas $ctx.Areas
        return "**Co bylo uděláno:** $done`n**Proč:** $why"
    })

    if ($script:repairCount -gt 0) {
        [System.IO.File]::WriteAllText($ReportPath, $newBody.TrimEnd() + "`n", $encoding)
    }
    return $script:repairCount
}
