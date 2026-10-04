# Rychlost a ochrana Vercel kvót — lokální balík 4. 10. 2026

## Stav a rozsah

Na výslovné zadání uživatele jsou zrychlení zapracována do existujícího fotografického/B2B návrhu ve větvi `codex/audit-quality-2026-10-02`, založené na `83793e1d72751c6f4e8432a2fc64238d0b80af3a`. Nic nebylo commitováno, pushnuto, sloučeno ani nasazeno. Žádná změna placeného tarifu, DNS nebo produkční odeslání formuláře neproběhly.

Nejde o další redesign ani prokázané zvýšení konverzí. Cílem je menší opakovaný přenos, nižší nároky na vykreslení a provoz, při zachování již připravené prezentace, autentických fotografií a obchodní cesty. Původní checkout a nesouvisející změny Cursoru zůstaly nedotčené.

Lokální produkční build běží na http://127.0.0.1:3116/; mobilní náhled na http://127.0.0.1:3117/responsive-preview?page=articles. Mobilní wrapper je pouze pomocný náhled mimo produkční aplikaci.

## Měřený baseline a výsledek

Srovnání dvou lokálních produkčních buildů: fotografický návrh těsně před tímto zrychlením vs. výsledný společný návrh. Není to měření současné produkce ani nová hodnota PageSpeed. Hodnoty jsou skutečné bajty HTML, nikoli procento zrychlení celé stránky.

| Stránka | HTML před (B) | HTML po (B) | Pokles HTML | Gzip HTML před → po (B) |
|---|---:|---:|---:|---:|
| Homepage | 508 569 | 133 446 | 73,8 % | 95 534 → 27 789 |
| Poradna | 663 506 | 128 307 | 80,7 % | 116 450 → 27 659 |
| Časté dotazy | 663 126 | 250 510 | 62,2 % | 134 563 → 52 171 |
| Kontakt | 465 640 | 102 076 | 78,1 % | 90 248 → 23 312 |
| Měření emisí | 491 195 | 133 337 | 72,9 % | 93 140 → 27 781 |

Celkový součet úspěšných statických HTML souborů: 254 371 565 → 77 092 645 B, přibližně −69,7 %. Počet skutečných obsahových stránek s HTTP 200 je 513 → 527; rozdíl tvoří 14 potřebných stránkovaných přehledů, nikoli nové obsahové landing pages.

Po přesunu stylů do externích verzovaných souborů je při studené návštěvě potřeba načíst také zhruba 31–34 kB gzip CSS podle stránky. Při dalších návštěvách se soubor může znovu použít z cache. JavaScript se dramaticky nezmenšil: homepage gzip přibližně 213 822 → 214 310 B, poradna 224 716 → 228 796 B a kontakt 222 932 → 229 197 B. Nové filtrování a responzivní komponenty mají malou klientskou cenu; nelze proto vydávat úsporu samotného HTML za totožnou úsporu celého prvního načtení.

Podklady mimo repozitář:
- `naturchem-bloat-photo-draft-2026-10-04.json`
- `naturchem-bloat-optimized-2026-10-04.json`
- `audit-naturchem-bloat-2026-10-04.cjs`

Jsou uložené v `C:/Users/natur/Documents/Codex/2026-08-12/m/outputs/`.

## Implementace

### Opakované styly a načítání odkazů

- Vypnuto `experimental.inlineCss`. Všech 527 úspěšných statických HTML má nyní externí existující verzované CSS a 0 B vloženého CSS.
- 26 pravidel používaných jen poradnou přesunuto ze společných stylů do jejího layoutu; ostatní sdílené styly se nemažou naslepo.
- Automatické přednačítání vypnuto u rozsáhlých seznamů, článků, souvisejících odkazů, vedlejších odkazů patičky a katalogových karet. Hlavní kontaktní cesta zůstává rychlá.
- Zachováno statické publikování `revalidate = false`; nebyla zavedena časová ISR obnova.

### Poradna: menší první stránka, úplná dostupnost obsahu

- Přehled vykresluje nejvýše 12 článků, ne všech 75 českých karet najednou.
- Statické skutečné odkazy na další stránky: český přehled má 7 stran, anglický a německý po 5. Všech 187 publikovaných článků je dostupných i bez JavaScriptu.
- Filtrování a hledání nad úplným obsahem zůstává zachováno. Celý katalog/hledací index se načte až při použití; není vložen do každého HTML.
- Statické JSON indexy mají verzi odvozenou od publikovaného obsahu, aby nový build nečekal na vypršení staré cache.
- Výpisy mají self-canonical a odpovídající hreflang. Strany, které v jiném jazyce neexistují, se nevydávají za dostupné.
- Budoucí články a drafty nadále nejsou dostupné před datem publikace. Příprava indexů a obrázků běží před buildem i ověřením.
- Ošetřena chyba načtení katalogu, možnost opakování a správné H1 → H2 nadpisy. Mobilní ovládání má čitelné popisky a dostatečné dotykové cíle.

### Obrázky bez zbytečné transformace za běhu

- Pro aktuálně používané publikované články a registrovaná hero témata připraveny statické AVIF/WebP varianty. Karty používají šířky 192/384/640/960, hero 640/1280, bez umělého zvětšování malého zdroje.
- Prohlížeč vybírá velikost podle skutečného rozvržení. Při vizuální kontrole mobilní náhled článku široký asi 103 px načetl variantu 192 px; desktopový náhled variantu 640 px.
- Obsahově hashované názvy dovolují dlouhou cache. Sdílená varianta stejného zdroje se neduplikuje mezi kartou a hero.
- Odstraněna metadata výstupních variant; originály i dříve nasazené neměnné obrazové URL jsou zachovány.
- Osm schválených autentických fotografií a jejich existující optimalizované varianty mají přednost; SVG studií/EIA zůstávají beze změny.
- Klientská mapa obsahuje pouze náhledy, nikoli celý serverový hero katalog.

Důležitý kompromis: veřejné soubory na disku rostou z 92 746 088 na 117 472 655 B, tedy asi o 24,7 MB. To je úmyslná cena za předem připravené menší obrázky bez transformace při každém požadavku; návštěvník nestahuje všechny varianty. Není to snížení Deployment Storage. Ve vznikajících nových variantách odstraněno 18 nepoužívaných souborů (491 418 B) a 150 bajtově identických duplicit (3 338 863 B). Nešlo o staré nebo uživatelské assety; varianty lze obnovit generátorem z ponechaných originálů. Výsledek obsahuje 902 unikátních nových variant.

### Časté dotazy

- Zachováno všech 77 viditelných odpovědí v každém jazyce.
- JSON-LD obsahuje 8 reprezentativních otázek, po jedné z kategorie, místo druhé kopie celé znalostní báze.
- Strukturované údaje nejsou příslibem FAQ rich results; Google jejich podporu v roce 2026 ukončil. Viz [oficiální changelog](https://developers.google.com/search/updates#june-2026).
- Upraven kontrast počtů v kategoriích.

## Vercel: co je již aktivní a co čeká na společný release

Předcházející kontrola Vercelu 4. 10. 2026: tým `ikaros277s-projects`, projekt `web-naturchem`, Hobby. Zobrazené 30denní období 4. 9. 5:00–4. 10. 5:00:
- ISR Reads 1 093 696 / 1 000 000.
- Fast Origin Transfer 8,61 / 10 GB.
- ISR Writes 0 / 200 000.
- Deployment Storage 1,87 / 10 GB.
- V předchozích 12 hodinách přibližně 31 tisíc ISR read units a 10 tisíc požadavků Meta-ExternalAgent.

Cílené již dříve aktivované WAF pravidlo blokuje Meta-ExternalAgent (kontrola přibližně 13:45 SELČ). Běžní návštěvníci, Google/Bing, OpenAI vyhledávání, Perplexity a běžné Facebook načítání zůstaly dostupné; cílený agent vracel 403. Tato operace není novým nasazením aplikace v tomto zrychlovacím kroku.

Do společného lokálního návrhu integrováno:
- odpovídající cílené robots pravidlo, nikoli globální zákaz AI vyhledávání;
- ochrana interních vyhledávacích indexů před explicitně povolenými roboty;
- externí cachovatelné CSS, omezení vedlejšího prefetch a statické obrazové varianty;
- automatické kontroly proti návratu časového ISR a objemného vloženého CSS.

Nižší objem HTML sám nezaručuje nižší počet ISR read units. Úspora transferu závisí také na cache, chování robotů a návštěvnosti. Historický klouzavý součet se nasazením nevynuluje a nelze garantovat, že již nedojde k dalšímu překročení limitu. Předchozí report kvót je v referenčním worktree `reports/vercel-quota-protection-2026-10-04.md`.

Dříve zjištěná vhodnost Hobby plánu pro komerční web není vyřešena optimalizací kódu. Žádný placený upgrade ani migrace nebyly autorizovány nebo provedeny.

## SEO, rozsah a odstranění stránek

Žádná původní obsahová URL nebyla odstraněna. Zachovány články, služby, lokality, přesměrování, canonicaly, jazykové varianty a kontaktní formulář. Nevytvářejí se filtrované indexovatelné URL pro každou kombinaci hledání.

Předchozí audit zjistil 100 vstupních relací na články, zhruba 31,25 % všech 320 relací v posledním kompletním GA4 okně. Hromadné odstranění poradny by proto nebylo podložené. Objem PDF není totéž co přenos při otevření homepage. Sloučení slabých či osiřelých stránek vyžaduje samostatné posouzení konkrétních URL podle GSC/GA4 a zachování relevantních přesměrování; nebylo provedeno jako součást „zrychlení“.

## Ověření

- Kompletní `npm run verify` úspěšné: lint, typy, kontaktní předvyplnění, cache rozpočty, routování článků, simulované doručení, publikace, veřejné assety, B2B kontrola, vizuální regresní pravidla, autentické fotografie, výkonové guardy a produkční build.
- 16 existujících lint upozornění, žádná lint chyba; při buildování zůstávají existující metadataBase upozornění u některých chybových/přesměrovacích výstupů.
- Všechny publikované články dosažitelné přes serverově vykreslené stránkování; menší HTML, statické obrázky, správné canonicaly a FAQ rozpočty ověřeny po buildu.
- 231 dříve nasazených neměnných assetů beze změny.
- Lokální SEO smoke: 520 kontrolovaných URL a dalších 230 interních odkazů, žádná chyba.
- Routing smoke: jazyky, canonical/hreflang, přesměrování, assety, 404/noindex, kontaktní kotva a validační chybová odpověď API prošly. Neplatný prázdný lokální požadavek neodesílá poptávku.
- Skutečný prohlížeč: desktop 1280 px a mobilní wrapper 390 px (vnitřní šířka 375 px po scrollbar), bez vodorovného přetékání. Filtrování, hledání starších článků, přechod na stranu 2 a mobilní CTA → formulář ověřeny.
- Hlavní text „Ozveme se do 24 h“, WhatsApp a desktopový chat zachovány.
- Konzole kontrolované desktopové stránky bez chyb.
- Po posledním plném ověření změněna jen příprava obrázků v preverify a doplněna kontrola statické stránkované routy; příprava i cache test znovu prošly.

Screenshoty v outputs: `naturchem-optimalizace-desktop-2026-10-04.jpg`, `naturchem-optimalizace-mobil-2026-10-04.jpg`.

## Hypotéza, další měření a rollback

Pozorovaný výsledek: menší HTML, menší odpovídající obrazové varianty, zachovaná dostupnost stránek a bezchybný lokální build. Hypotéza: nižší přenos a plynulejší cesta zejména na mobilu může snížit odchody a zvýšit podíl dokončených relevantních poptávek. Růst Google/AI pozic ani klientů zatím nebyl prokázán.

Po samostatném schválení společného release:
1. Zapsat přesný commit a čas jediného produkčního deploymentu; před ním zkontrolovat celý společný diff a znovu spustit verify, pokud se změní kód/obsah.
2. Produkční URL/routing smoke a vizuální kontrola desktopu/mobilu; bez testovací poptávky, dokud nebude výslovně povolena.
3. Stejné URL měřit třemi mobilními PageSpeed běhy, vyhodnotit medián LCP/CLS/TBT a celkový přenos; neporovnávat jeden místní běh s jedním produkčním.
4. Po 12 a 24 hodinách porovnat stejně dlouhá Vercel okna: ISR read/write units, origin transfer, boty, cache a chyby. Rozlišit účinek WAF od účinku nového buildu.
5. Po 28 úplných dnech porovnat stejně dlouhá období GA4/GSC. `form_start` je začátek, `generate_lead` až úspěšné přijetí formuláře. Obchodní výsledek potvrdit ve skutečně přijatých e-mailech a podle kvalifikace firmou; při malém vzorku prodloužit na 56 dní.

Lokální rollback: jednotlivé nové úpravy v samostatné větvi jsou reverzibilní; žádný reset původních uživatelských změn. Při budoucím nasazení lze vrátit poslední ověřený předchozí produkční deployment založený na `83793e1`. Staré veřejné assety jsou zachovány, takže jejich cache a odkazy nezůstanou rozbité.

Technické primární reference: [Next.js prefetch](https://nextjs.org/docs/app/guides/prefetching), [Next.js inlineCss](https://nextjs.org/docs/app/api-reference/config/next-config-js/inlineCss).
