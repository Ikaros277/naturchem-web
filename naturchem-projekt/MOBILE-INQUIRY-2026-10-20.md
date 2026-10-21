# Mobilní cesta k poptávce — místní návrh, 20. 10. 2026

## Výchozí stav a zadání

Vlastník po konverzním auditu požádal rovnou opravit mobil. Samotný rozdíl mobilních odeslání není důkazem poruchy: jde o malý vzorek před posledním vydáním a o návštěvníky zahrnuté v analytice. Detailní obchodní data zůstávají v soukromém výstupu mimo repozitář.

Současný produkční web a vzdálený main při přípravě odpovídají `dd9a751`. Pracujeme v izolované `codex/service-message-release-2026-10-19`, nikoli v rozpracovaném Cursor checkoutu. Předchozí lokální oprava analytického souhlasu je zachována, ale má vlastní dokumentaci a není vydána.

Skutečný prohlížeč při 390 ×844 px: hlavní CTA je viditelné i po posunu a přejde na formulář. Formulář má v základním stavu výšku přibližně 1 173 px; první tři vstupy jen 41 px. Nepovinné místo a termín přerušují povinné údaje a popis situace; přílohy a jejich nápověda dále oddalují odeslání. To je pozorované prezentační tření, ne prokázaná příčina nulových leadů.

## Úzká úprava

- Jméno, kontaktní údaje a popis situace bez nepovinné sekce uprostřed.
- Přílohy, místo a termín pod jediným nativním rozbalením za hlavními poli. Nic není odstraněno, hodnoty i soubory se dál odesílají stejným způsobem.
- Výběr služby, předvolení z URL i možnost uvést pouze e-mail nebo pouze telefon zachovány. Bez nového povinného pole nebo více kroků.
- Na mobilu hlavní vstupy a odeslání minimálně 48 px, informační ovladač 44 ×44 px, čitelný odesílací text a větší souhlasový checkbox. Pole mají čitelných 16 px a odsazení při posunu pod záhlaví.
- Chyba chybějícího kontaktu přímo u e-mailu/telefonu, provázaná přes `aria-describedby`; doplnění kontaktu chybu odstraní. Při chybě příloh se jejich sekce nejprve otevře, pak se přesune fokus.
- Krátká instrukce „Stačí e-mail nebo telefon.“ Konzistentní rozbalovací popisky CS/EN/DE.

Beze změny: API, doručovací adresy, Turnstile, antispam, limity příloh, definice `generate_lead`, obchodní tvrzení, služby, články, URL, metadata, canonical/hreflang, strukturovaná data, sitemap, robots, cache/ISR a tarif. Bez nových knihoven, obrázků či externích požadavků.

## Hypotéza a měření

Kratší základní formulář a srozumitelná validace sníží tření při mobilním kontaktu. Přínos na skutečné kvalifikované poptávky zatím není naměřen a není slíbena konkrétní konverze, rychlostní skóre nebo pozice.

Případné samostatně schválené nasazení označit skutečným datem a jako rušivý faktor dosavadní společné fáze a EXP-008/011/013/014, nikoli jejich izolované vítězství. Porovnat stejně dlouhá úplná 28denní období po zpracování, při malém vzorku doplnit 56 dnů. Vedle mobilního vstupu, CTA a form_start použít především `generate_lead`, doručení poskytovatelem a obchodní kvalifikaci; telefonní klik zůstává sekundární, ne uzavřená zakázka.

## Ověření a hranice

Ověření izolovaným klientským/API testem zahrnuje zachování úspěchu, telefonu bez e-mailu, neplatných/nadměrných příloh, dvojitého kliknutí, antispamu, Turnstile a stávající analytiky. Přidána kontrola skutečné stromové struktury formuláře, otevření příloh před zaměřením chyby a chyby kontaktu u pole včetně vymazání po doplnění.

Finální celé `npm run verify` včetně produkčního sestavení 631 cest prošlo, 9 dosavadních lint upozornění bez chyby. Po posledním zpřesnění nativního rozbalení znovu prošel izolovaný doručovací test a cílený lint; finální build obsahuje toto zpřesnění. Neměnný předchozí baseline potvrdil identické zákaznické tělo 588 stránek mimo Kontakt a shodná SEO metadata, canonical/hreflang, sitemap a robots všech 591 úspěšných stránek. Tři kontaktní varianty mají jediný formulář, správné pořadí a výchozí zavření doplňků. Výkonové, CSS, obrazové a klientské překladové rozpočty prošly bez nových externích závislostí.

Místní URL smoke: 584 URL +302 dalších interních odkazů, bez chyby; routing včetně canonical/hreflang/redirectů/404 a prázdné neplatné API žádosti bez chyby. API validace nic obchodně neodešle; nejde o skutečnou kontrolní poptávku.

Skutečný prohlížeč: 390/320 px bez horizontálního přetékání, také EN/DE při 320 px; desktop 1366 px zachovává dvě pole vedle sebe. Při 390 px výška základního formuláře 1 173 →867 px (−26 %), vstupy 48 px a odeslání přibližně 50 px, infobutton 44 ×44 px. Krátká nápověda se při 320 px vejde bez vlastního posuvníku; text ve vstupech již nedědí tučnost popisků. Ověřeny CTA z homepage, služba emise → skutečně předvolený formulář a uchování volitelné hodnoty po zavření sekce. Místní klientská validace bez e-mailu i telefonu zastavila odeslání před sítí, oznámila chybu a zaměřila e-mail; doplnění telefonu chybu odstranilo. Koncová konzole prohlížeče bez chyb. Dočasná velikost viewportu vrácena na běžnou.

Žádná skutečná poptávka, změna GA4 konfigurace, commit, push, merge nebo produkční nasazení není tímto zadáním provedeno. Před případným vydáním znovu ověřit aktuální Cursor/main; návratová verze je dosavadní Ready `dd9a751`. Místní náhled na portu 3131 a průkazný snímek jsou soukromé pracovní výstupy, nikoli produkční publikace.
