# Autentické fotografie – lokální návrh, 4. 10. 2026

## Stav a podklad

Výslovná žádost uživatele o zapojení vybraných fotografií z jeho Google Fotek a vkusné vizuální dopracování. Doplnění existující lokální větve `codex/audit-quality-2026-10-02` na základu `83793e1`. Bez commitu, push, merge, produkčního deploymentu a testovací poptávky. Původní checkout a Cursorovy změny nebyly upravovány.

Výchozí lokální návrh: šest kompaktních karet služeb, z toho tři SVG ilustrace studií/dokumentace; převážně ilustrační hero a náhledy měření. Katalog již měl odlišné názvy obrazových souborů, ale samotné landing pages kolaudace a nové haly sdílely `heroTheme: pracovni-prostredi`. Tato nesrovnalost byla zjištěna až ve skutečně vykresleném prohlížeči a opravena.

Srovnávací vizuální audit 3. 10. hodnotil lokální návrh subjektivně: vizuál 8,5/10, orientace 9/10, kontakt 9/10, konkrétní práce/zázemí 7,5/10. Není to měřený konverzní benchmark a v této změně není přepočítán na údajně dosažené obchodní výsledky.

## Změny

Osm fotografií je přiřazeno podle viditelného prostředí a techniky:

| Soukromé výběrové ID | Veřejný asset | Umístění |
|---|---|---|
| A05 | prumyslove-mereni | Homepage: výrazný průmyslový úvod s hlukoměrem |
| B04 | emise-provoz | Emise: homepage karta, katalog, detail |
| A10 | hluk-provoz | Hluk: homepage karta, katalog, detail |
| B01 | pracovni-prostredi | Pracovní prostředí: homepage karta, katalog, detail |
| A09 | mereni-interier | Kolaudace: katalog a landing page |
| A08 | prumyslova-hala | Nová hala: katalog a landing page |
| A06 | mikroklima-sestava | Mikroklima: katalog a detail |
| A02 | prenosna-technika | Přístrojové vybavení: hero |

- Hlavní záběr zvýrazňuje měřicí techniku a provoz, nikoli osobní portrét. Výřez hlukoměru neukazuje obličeje pracovníků; mikroklima je oříznuté bez osoby na okraji a formuláře na levé straně stolu. Nic nebylo generativně retušováno nebo doplněno.
- Nenápadný popisek úvodní fotografie, jednotné čitelné popisky v detailech v CS/EN/DE. Popisky pouze popisují viditelný přístroj/prostředí. Neuvádějí zákazníka, datum, účel konkrétní zakázky, její výsledek, konkrétní měřenou látku ani neověřenou autorizaci.
- Kompaktní struktura homepage a služeb zachována. Nepřibyly dlouhé sekce, galerie, karusel, procesní blok ani anonymizovaná případová studie.
- Oblíbené SVG ilustrace hlukových a rozptylových studií a EIA na homepage beze změny. Nejde o plošné nahrazení všech odborných ilustrací fotografiemi.
- Kolaudace a nová hala nyní mají odlišný obrázek i v detailu, nejen v katalogu.
- Obrázky článků, adresy, H1, canonical, hreflang, redirects, structured data, definice `generate_lead`, kontaktní formulář, Tawk/WhatsApp a ISR konfigurace tímto krokem neměněny.

## Rychlost, soukromí a reprodukovatelnost

Pouze nové URL pod `public/hero/authentic-2026-10/`. Všech 231 dříve publikovaných immutable souborů zachováno. Celkem 64 variant (8 na fotografii): AVIF/WebP hero, mobilní AVIF/WebP, malé 192/384px a katalogové 320/640px náhledy. Dohromady 1 998 138 B. Žádné EXIF, GPS, XMP ani IPTC metadata; kontrola všech výstupů přes Sharp.

Původní fotografie a soukromé Google Photos URL nejsou v repozitáři. A05, A02 a A06 byly získány standardním stažením původního JPG. U zbývajících snímků selhávalo stažení originálu přes prohlížeč; použity skutečné 1280×720px fotografické soubory načtené v přiblíženém pohledu Google Fotek. Nejde o screenshoty nebo náhledy se záhlavím prohlížeče. Exporty bez zvětšování nad dostupné rozlišení. Po soukromí chránícím výřezu má fotografie hluku 660×372px; tuto kvalitu dále nevydáváme za původní 4K rozlišení.

Soukromý encoder s přesným seznamem vstupů a výřezů: `outputs/naturchem-foto-vyber-2026-10-03/encode-authentic.cjs` v lokálním adresáři výstupů. Neobsahuje cloudové přístupové klíče; odmítá přepsání existujícího souboru.

Nové fotografie jsou předem exportované a neposílají se do Vercel Image Optimization. Statické `picture/srcset`, bez nového karuselu nebo animační knihovny. Mobilní homepage náhledy tří měření mají dohromady 9 940 B; skutečné `currentSrc` 192px ověřeno v prohlížeči. Hlavní mobilní AVIF má 38 423 B oproti předchozím 15 702 B: jde o vědomý obsahový kompromis (+22 721 B), nikoli o prokázané zrychlení. Největší mobilní AVIF všech fotografií je pod 40 KB. Aktuální produkční Core Web Vitals a Vercel usage tímto lokálním ověřením nebyly změřeny.

## Hypotéza a vyhodnocení

Skutečná technika a prostředí sníží dojem obecné ilustrační prezentace, zvýší důvěru relevantních B2B zadavatelů a podpoří přechod od služby k poptávce. Není to prokázaný růst konverzí ani přímý slib lepší pozice v Googlu nebo odpovědích AI.

Není spuštěn nový produkční experiment. Po případném schváleném nasazení porovnat nejméně 28 úplných dnů s odpovídajícím předchozím obdobím, podle zařízení a vstupní stránky. `select_service` a `form_start` jsou mezikroky; primární výsledek je serverem přijatá, skutečně doručená a obchodně kvalifikovaná poptávka. Oddělit tento zásah od balíku dřívějších lokálních úprav a od redesignu služeb nasazeného 27. 9. Přesný rozsah zakázky, výstup a zákazníka doplnit až po doložení firmou; fotografie samotná nenahrazuje případovou studii.

## Ověření a další nasazení

- `npm run verify`: typy, všechny stávající testy, nová kontrola autentických fotografií a produkční build; žádné nové lint problémy, 16 dříve existujících varování. Build 566 výstupů.
- Regresní kontrola skutečného `heroTheme` obou landing pages, unikátních katalogových obrazových obsahů a zachování SVG studií.
- Prohlížeč: osm dotčených stránek na 1280 a 390 px; navíc homepage a hluk na 320 px, emise DE na 320 px a homepage na 768 px. V ověřených stavech žádné horizontální přetékání. Fotografie jsou načtené, mobilní karty čitelné, formulář nebyl odeslán. Nejde o úplný audit všech stránek ani fyzických zařízení.
- SEO routing smoke: 0 chyb. Sitemap smoke po sestavení: 506 URL plus 230 dodatečných interních odkazů bez závad v sekvenčním běhu. Některé souběžné 4worker běhy na místním Windows serveru vykázaly přerušené přenosy velkých HTML stránek (FAQ/poradna); neopravováno spekulativním zásahem do routingu. Ověření produkce před nasazením zůstává samostatnou podmínkou.
- `git diff --check` a ochrana immutable assetů v pořádku.

Živý lokální návrh: `http://127.0.0.1:3116/`; mobilní/desktopová sada stránek v již existujícím soukromém náhledu `http://127.0.0.1:3117/responsive-preview?page=home`. Snímky pro kontrolu v soukromé složce výběru fotografií.

Před případným nasazením znovu ověřit tehdejší main, projít diff celého rozpracovaného balíku, produkční chování a usage, získat souhlas a určit rollback commit. Cílený revert změny přiřazení fotografií je vratný; původní veřejné assety nebyly odstraněny. Do produkce nyní nic nepřešlo.
