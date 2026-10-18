# Jazyková revize: mluvíme jako dodavatel služeb

Stav: pouze lokálně, ve větvi `codex/service-lower-visual-2026-10-18`. Bez commitu, push, CMS publikace nebo nasazení. Zachovává předchozí rozpracované vizuální úpravy a úplné přehledy měření.

## Zadání, výchozí stav a očekávaný efekt

Majitel odmítl zejména označení „Doložený rozsah laboratoře“. Web nemá hodnotit firmu z pozice auditora. Má přirozeně a sebevědomě popisovat vlastní služby, zkušenosti a práci pro zákazníka.

Před úpravou zachyceno sestavení všech 582 sitemap URL, jejich H1, metadata, schémata, interní cíle a kotvy. Samostatně zachyceny kontrolní součty 90 českých zdrojů článků v `content/articles`. Záloha a srovnávací skript jsou v soukromých místních výstupech mimo repo.

Hypotéza: přímé aktivní formulace, konkrétní názvy služeb a odstranění metakomunikace usnadní B2B návštěvníkům pochopení nabídky a posílí dojem odborného dodavatele. Nejde o dosud naměřený růst konverzí nebo umístění.

## Rozsah revize

- Společné texty českých služeb a poptávkových stránek: první osoba množného čísla, přímý popis nabídky a výstupů, stručné pokyny k podkladům.
- 15 nadpisů „Od … k …“ nahrazeno věcným názvem: např. „Měření emisí lakoven“, „Měření pro kategorizaci prací“, „Odborný posudek pro povolení provozu“.
- „Doložený rozsah laboratoře“ -> „Rozsah služeb naší laboratoře“, „Doložené realizace“ -> „Naše realizace“, „Další doložené ukázky“ -> „Další reference“.
- Autorizace a akreditace: mluvíme o našich oprávněních a měřeních, nikoli o vlastním prověřování tvrzení. Rozsah ČIA a MŽP zůstává oddělený.
- Reference a typické zakázky: odstraněny nadbytečné auditní štítky. Ochrana jmen zákazníků a citlivých údajů zůstává jednou vysvětlená v úvodu. Konkrétní reference, počty, fotografie a výstupy se nenahrazují vymyšlenými příběhy.
- O společnosti, Proč NATURCHEM, oborový rozcestník, přístrojové vybavení, FAQ úvod, Kontakt, dotazník a společné výzvy: kratší věty, aktivní slovesa a jasná role dodavatele. Oborový rozcestník nevysvětluje sám sebe dlouhým textem „Na této stránce zjistíte…“.
- Navigační štítky a stručné doprovodné texty; česká 404 bez původních strojových vtipů o měření adresy. Indexované H1 a SEO metadata se nemění.
- Pravidlo firemního hlasu zapsáno do AGENTS.md. Nový `test:company-voice` kontroluje 440 TS/TSX zdrojů a české zprávy a brání návratu konkrétních odmítnutých formulací.

## Hranice změny

Neodstraňujeme měřicí nejistotu, podmínění podle typu provozu, plnou moc pro podání, externí laboratorní stanovení, ochranu důvěrných údajů ani skutečnost, že o povolení rozhoduje úřad. Sebevědomé vystupování není zárukou schválení povolení, splnění limitů nebo akreditací pro další činnosti.

Neměněny paragrafy, normy, limity, analyty, termíny publikace článků, číselné reference, kontakty, technika ani logika poptávkového formuláře. Slib reakce do 24 hodin je dříve výslovně potvrzený majitelem, nikoli nově stanovená lhůta zpracování nabídky.

České odborné články se nepřepisují plošně kvůli výskytu slov jako „nejistota“, „obvykle“ nebo „doložení“. V právních a metodických souvislostech mají takové výrazy vlastní význam. Zachováváme těla článků a jejich kotvy, zdrojové odkazy i technické výčty. Překlady EN/DE ponechány.

## Ověření

Dokončeno:

- Celé `npm run verify` prošlo včetně nového jazykového testu, TypeScriptu, ochrany měření a technických textů, obrázků, publikace a sestavení. Devět dřívějších lint upozornění, nula lint chyb. Stávající upozornění buildu na `metadataBase` zůstává mimo rozsah této copy revize.
- Porovnáno všech 582 veřejných URL s výchozím sestavením tohoto kroku: text hlavního obsahu se změnil na 59 českých stránkách. Všechny URL, indexované H1, title, description/robots/OG/Twitter, canonical, hreflang, interní cíle a kotvy zachovány. EN/DE hlavní texty beze změny.
- JSON-LD zůstává stejné s jedinou záměrnou textovou výjimkou: `WebPage.description` na `/proc-naturchem/` odpovídá novému firemnímu úvodu. Typy schémat, entity, odkazy, identifikátory a všechna ostatní pole i schémata zachovány. Změna nemá představovat doplnění nového oprávnění.
- Všech 90 zdrojů českých článků v `content/articles` má stejné kontrolní součty. Projektový test dále ověřil 246 zdrojových článků napříč jazyky, úplnost textu/odkazů a 234 vykreslených publikovaných článků. Původní paragrafy, zdroje a vnitřní kotvy článků neměníme.
- Místní HTTP smoke: 584 stránek a 302 dalších interních cílů, celkem 886 kontrol bez chyby. Bez testovacího odeslání poptávky, dotazníku nebo zatěžování produkčního Vercelu.
- Prohlížeč: nový přehled pracovních měření zkontrolován na 320, 390 a 1440 px. Dále Kontakt, oborový rozcestník, Reference, Akreditace a oprávnění, měření dřevozpracujících provozů a O společnosti na 320 a 1440 px. Bez vodorovného přetékání. Text „Rozsah služeb naší laboratoře“ se vešel i na úzkém mobilu. Naše realizace a nové poptávkové pokyny se skutečně vykreslují.
- Bez nového klientského kódu, obrázků či sledovacích požadavků. Výkonnostní a cache rozpočty prošly; 337 neměnných veřejných souborů zachováno. Nejde o nové měření PageSpeed nebo garanci umístění.
- Desktopový snímek a SEO/responzivní výsledky uloženy v soukromých místních výstupech. Uživateli ponechán aktualizovaný náhled `/sluzby/pracovni-prostredi/#akreditovany-rozsah` na portu 3128. Dočasná velikost prohlížeče vrácena.

Změny nebyly commitovány, pushovány ani nasazeny. Sdílený checkout Cursoru nebyl měněn.

Po případném samostatně schváleném nasazení sledovat kvalifikované poptávky a přechod `form_start` -> `generate_lead`. Textové změny samotné nedokládají zlepšení pozic ve vyhledávání.
