# Přehled měření: vizuální hierarchie

18. 10. 2026 — místní návrh na výslovnou zpětnou vazbu majitele.

## Výchozí stav a cíl

Přehled pracovního prostředí tvořil jeden zelený panel s řádky. Názvy měření byly menší a méně kontrastní než jejich popisy. Majitel tuto podobu označil za příliš jednolitou. Cílem je rychlejší nalezení konkrétního měření, nikoli přidávání marketingového textu.

## Změna

- Samostatné kompaktní karty na bílém podkladu místo jednoho celoplošného zeleného panelu. Výraznější název před klidnějším doplňujícím popisem.
- Stávající serverově vykreslené SVG ikony. Tři střídmé akcenty pro ovzduší, fyzikální faktory a odběry, bez nových bitmap nebo knihoven.
- Na širokém počítači čtyři sloupce, v užší ploše dva a na telefonu jeden. V emisním vzoru vedle fotografie dvě karty v řádku, bez zásahu do samotné reference.
- Úplné seznamy látek zůstávají v HTML a otevírají se nativním rozkliknutím. Výraznější značení plus/minus pouze u skutečně interaktivních seznamů; samotné karty nejsou falešnými tlačítky.
- Stejný komponent pro pracovní prostředí a kategorizaci prací; samostatně označená autorizace MŽP u emisí včetně HF zůstává. Dokumentační podoba na stránce akreditací si zachovává původní tabulkový přehled, metodické poznámky a zdroje.
- Beze změn odborných textů, nabídky, metadat, URL, kotev, schémat a poptávkových cest. Žádný nový klientský JavaScript nebo požadavek na externí API.

## Očekávaný účinek

Snazší vizuální orientace v úplném rozsahu měření. Jde o návrhovou hypotézu; růst poptávek ani pozic zatím nebyl prokázán. Po samostatně schváleném nasazení sledovat relevantní poptávky a poměr `form_start` -> `generate_lead`, nikoli samotné kliknutí na kartu.

Není schválen ani proveden commit, push nebo produkční nasazení této grafické varianty.

## Dokončené ověření

- Celé `npm run verify` včetně sestavení a post-build kontrol prošlo. Devět stávajících lint upozornění mimo změnu, nula lint chyb; původní upozornění `metadataBase` beze změny.
- Místní HTTP smoke zkontroloval 584 stránek a 302 dalších interních cílů: všech 886 kontrol bez chyby. Bez testovací poptávky nebo zatížení produkčního Vercelu.
- Hash hlavního textu všech čtyř dotčených stránek je shodný s verzí před touto grafickou změnou. SEO porovnání potvrzuje zachování H1, title, popisů/robots/OG/Twitter, canonical, hreflang, JSON-LD, kotev, měření a odkazů. Předchozí samostatně vyžádané odstranění opakované přílohy PDF zde není vráceno.
- Prohlížeč: 1920, 1440, 1024, 768, 390 a 320 px; správné 4/2/1 sloupce, všech osm pracovních skupin a žádné vodorovné přetékání. Oba pracovní seznamy otevřeny klávesnicí Enter, všech 20 + 27 položek přítomno a funkční focus. Emise ověřeny vedle skutečné referenční fotografie na PC a na 320 px včetně oddělené autorizace MŽP/HF. Dočasné změny šířky prohlížeče vráceny.
- Původní dokumentační podoba stránky akreditací je textově shodná. Test zajišťuje, že se v ní neobjeví obchodní kartová varianta.
- Místní sestavené výkonnostní rozpočty prošly; například emise mají odhad gzip HTML 29 768 B, bez nové bitmapy, klientské knihovny a vzdálených transformačních požadavků. Nejde o měření PageSpeed ani účtovaných přenosů Vercelu.
- Soukromé výstupy: `naturchem-scope-cards-desktop-2026-10-18.png`, `naturchem-scope-cards-mobile-2026-10-18.png` a `naturchem-scope-cards-responsive-2026-10-18.json`.

Aktuální náhled: `http://127.0.0.1:3128/sluzby/pracovni-prostredi/#akreditovany-rozsah`.

## Další iterace: skutečný fotografický a grafický prvek

Majitel po prohlédnutí samotných karet požádal o výraznější vizuální prvek. Doplněno pouze na dva české obchodní přehledy pracovního prostředí a kategorizace; nikoli na stránku akreditací nebo další měření s již existující fotografickou referencí.

- Záhlaví kombinuje tmavě modrou plochu, velký čitelný název a skutečný detail hlukoměru na pracovišti. Střídmý motiv vln je dekorativní SVG bez čísel, os, měřených dat nebo animace. Nejde o graf výsledků ani schéma navazujících kroků.
- Tři krátká označení oblastí (pracovní ovzduší, fyzikální faktory, odběry) pomáhají orientaci. Nepřidává se reklamní odstavec, nový slib, oprávnění nebo případová studie.
- Fotografie `kovovyroba-mereni` odpovídá přístroji a pracovišti z ověřené reference `svarovna-pp`. Před použitím prohlédnut celý snímek 960 × 540 bez popisků. Popisek zní pouze „Hlukoměr na pracovišti“; snímek není vydáván za fotografii všech osmi druhů měření ani z konkrétní jiné zakázky.
- Recyklují se původní statické AVIF/WebP varianty, nikoli soubor hlavní fotografie dané stránky. AVIF 384 px má 6 862 B, 640 px 16 175 B, 960 px 30 332 B. Příslušný mezilehlý 768px soubor zůstává v již existujících responzivních zdrojích. Lazy načítání s nízkou prioritou, pevná geometrie a 158px obrazová plocha na telefonu chrání rychlost a stabilitu rozložení.
- Žádné úpravy fotografií, nové obrazové soubory, externí transformace, další klientský JavaScript nebo změny metadat/URL/odkazů. Úplná nabídka, metodická přesnost a rozlišení ČIA/MŽP zůstávají stejné.

Očekávání: výraznější orientační bod a autentická ukázka práce. Konverzní účinek není zatím měřen. Stále pouze lokálně, bez commitu, pushe nebo nasazení.

Ověření fotografické iterace dokončeno:

- Celé `npm run verify` prošlo včetně produkčního sestavení a všech post-build kontrol. Stávajících devět lint upozornění a upozornění `metadataBase` nezměněno. Původní test jedné fotografie na všech poptávkových stránkách dostal přesně omezenou výjimku pouze pro tento český přehled kategorizace; kontroluje dva různé zdroje a konkrétní ověřený lazy snímek. Nejde o povolení libovolných dalších obrázků.
- Porovnání sestavených stránek znovu potvrdilo zachovaná H1, metadata, canonical, hreflang, JSON-LD, kotvy a kompletní rozsah činností. Celý hlavní text stránky akreditací je stále shodný. Odborná nabídka nebyla zkrácena; novým viditelným textem jsou pouze tři orientační názvy oblastí a pravdivý popisek fotografie.
- Prohlížeč: 1920, 1440, 1024, 768, 390 a 320 px, bez vodorovného přetékání. Ověřen i delší nadpis kategorizace na 320 px. Text nadpisu zůstává bílý a čitelný v obou variantách; fotografie má na mobilu 158 px. Skutečné načtené statické zdroje v kontrolním prohlížeči: PC AVIF 768 px, mobil AVIF 640 px. Dočasná šířka prohlížeče vrácena.
- Soukromé podklady: `naturchem-scope-photo-desktop-2026-10-18.png`, `naturchem-scope-photo-mobile-2026-10-18.png`, `naturchem-scope-photo-responsive-2026-10-18.json` a znovu úspěšný čtyřstránkový SEO report. Náhled je obnoven na portu 3128.

Bez commitu, pushe, skutečné testovací poptávky nebo produkčního nasazení.

## Celoplošné podbarvení karet

Další výslovná zpětná vazba majitele: bílé orámované karty jsou nevýrazné. Tato iterace proto mění pouze místní CSS modulu přehledu:

- Modrá plocha pro pracovní ovzduší / chemické látky, zelená pro fyzikální faktory a písková pro odběry a samostatně označenou autorizaci. Nejen barevná horní linka.
- Bílá SVG ikona na sytém akcentu a tmavší doprovodný text. Používají se stejné ikony, fotografie, texty i pořadí.
- Rozbalovací seznam má vlastní světlejší plochu, nejméně 44px ovládací prvek a výrazný tmavý klávesnicový focus. Karty samotné nedostávají falešný klikací efekt.
- Žádný nový obsah, obrázek, JavaScript, událost, URL nebo externí požadavek. Úplné výčty měření a stránky akreditací beze změny. Hypotéza je zlepšení vizuální orientace; konverzní přínos zatím není měřen.

Pouze lokálně, bez commitu, pushe a nasazení.

Ověření této čistě barevné iterace:

- Prošly cílené testy rozsahu akreditace a výkonu i nové produkční sestavení se všemi post-build kontrolami. Nejde o nové spuštění celého `npm run verify`; to úspěšně proběhlo u předchozí fotografické iterace. Před případným návrhem na merge je potřeba celé ověření zopakovat podle AGENTS.md.
- Otisky hlavního textu všech čtyř dotčených stránek jsou před/po barevné změně shodné. Samostatné porovnání zachovaných metadat, H1, canonical, hreflang, JSON-LD, kotev, odkazů a měřených činností opět prošlo.
- Skutečný vypočtený kontrast v prohlížeči: text popisů nejméně 8,05 : 1, názvy nejméně 11,31 : 1 a bílé ikony na akcentu nejméně 5,96 : 1. Nejde o celkový audit přístupnosti webu.
- Šířky 1440, 1024, 768, 390 a 320 px bez přetékání. Oba celé pracovní seznamy otevřeny klávesnicí; na 320 px všech 20 + 27 položek bez vodorovného přetékání a viditelný tmavý focus. Ověřeny i tři barevné plochy emisního přehledu se samostatným označením MŽP/HF. Dočasné šířky prohlížeče vráceny.
- Soukromé výstupy `naturchem-scope-tinted-desktop-2026-10-18.png`, `naturchem-scope-tinted-mobile-2026-10-18.png`, `naturchem-scope-tinted-verification-2026-10-18.json`. Aktualizovaný místní náhled běží na portu 3128, bez nové fotografie, JavaScriptu a dalšího dopadu na cloudové prostředky.
