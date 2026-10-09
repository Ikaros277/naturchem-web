# Mobilní rychlost a následný B2B audit — 8. 10. 2026

## Stav a oprávnění
Schválený návrh na codex/mobile-lcp-audit-2026-10-08 z b3d2ee0. Dne 9. 10. 2026 vlastník výslovně zadal „Tak to nahoď.“: autorizovaný commit, fast-forward push na main do Ikaros277/naturchem-web a jeden produkční deployment přes existující GitHub integraci. Aktuální origin/main i ostrý publication-state před vydáním potvrzují b3d2ee0. Nový finální verify a post-release kontrola probíhají; Ready není předpokládán. Cursor checkout a .agents beze změny. Žádný placený tarif, DNS, reálná testovací poptávka nebo klientské údaje.

## Baseline a hypotéza
Ostrý b3d2ee0: cloud PageSpeed homepage 87/100, reference 99/100, osvětlení mobil 84 a 80 /desktop 100. Mobilní služby zbytečně načítaly celou sadu globálních stylů. Samostatná deklarace písma v global-not-found měla odlišné parametry od locale layoutu; na homepage se skutečně stahovaly čtyři místo dvou WOFF2 URL (182 344 B). Hypotéza: zmenšení blokujících stylů a odstranění duplicitního písma sníží objem přenosu a zrychlí první smysluplné zobrazení, bez změny veřejného obsahu a konverzního toku.

## Implementace
- Ze zdrojového globals.css generována samostatná službová sada. 27 page.tsx ve sluzby importuje services.generated.css; ostatní stránky si ponechávají dosavadní styly. Zachované pořadí selektorů, média, dynamické stavy a module CSS. Žádné velké inline CSS v ISR HTML.
- Jediná sdílená deklarace Source Sans 3 pro locale layout i standalone 404. Variable font, české znaky, font-display: swap, upravený fallback a preload:false zachovány. Dílčí pokus s optional fontem nepřinesl jasné zrychlení homepage; do finálního návrhu nebyl ponechán.
- Statické odkazy v ServiceDetailLayout a související odkazy FaqAccordionList nativní, bez routeru na každé položce. Stejné href/předvolby/kotvy. FAQ a odborný obsah stále v serverovém HTML; žádné kliknutí nepřeklasifikováno na generate_lead. Delegovaná telemetry zachována.
- Regresní testy chrání jedinou font deklaraci, nepřítomnost duplicitního font preloadu, nativní odkazy a všechny vykreslené službové CSS tří jazyků. Nový službový gzip rozpočet 22 KB oproti dřívějšímu obecnému 35 KB, ochrany neoslabeny.

## Přímo ověřené přenosy
| Metrika | Před | Finální návrh |
| --- | ---: | ---: |
| Home mobil, fonty | 182 344 B /4 požadavky | 91 172 B /2 požadavky |
| Detail služby, gzip CSS | 32 470 B | 16 171 B |
| Katalog služeb, gzip CSS | 29 965 B | 16 171 B |
| Homepage mobil, celkový přenos LH | 555 314 B | 464 038 B |
| Osvětlení mobil, celkový přenos LH | 665 471 B | 503 178 /503 187 B |

HTML homepage 136 265 → 135 808 B, osvětlení 124 248 → 123 426 B. Immutable asset guard 337 PASS. Cache/ISR politika a URL nepozměněny; pokles Vercel účtovaných jednotek ani nepřekročení kvót není tímto prokázáno.

## Laboratorní evidence
Lighthouse 13.5.0, vlastní čisté Chrome profily, localhost production build s procesním testovacím GA identifikátorem pro stejnou consent bootstrap variantu. Žádné Vercel/env hodnoty změněny. Nezaměňovat tato CPU/HTTP měření s cloud PageSpeed ani s reálnými Core Web Vitals.

| Stránka | Před mobil /PC | Finální mobil, dva běhy | Finální PC, dva běhy | LCP mobil před → po |
| --- | --- | --- | --- | --- |
| Homepage | 64 /99 | 72 /69 | 96 /99 | 4,309 → 3,868 /4,018 s |
| Osvětlení | 55 /99 | 68 /63 | 99 /100 | 5,440 → 2,190 /3,268 s |

Všechny běhy zachovány. Osvětlení TBT 662 ms před → 2 703 /1 862 ms po, přesto rychlejší FCP/LCP; nelze tvrdit univerzální zlepšení všech metrik. První pokus jen se subset CSS/optional fontem: home 61/99, osvětlení 69/100, zachovaný také. Finální optimalizace je podložená zejména přesnou byte úsporou a odstraněním duplicate fontů. Cíl 100 všude nedosažen, bez dostatku CrUX dat není ověřen polní dopad.

Soukromé nezkrácené LH JSON: C:/Users/natur/Documents/Codex/2026-08-12/m/outputs/nc-lighthouse-*-mobile2-{before,after,final,final-repeat}-2026-10-08.json. Srovnání CSS: naturchem-css-mobile2-before/after/final-2026-10-08.json ve stejném adresáři. Exporty nemazány ani přepisovány.

## Ověření a další krok
- Kompletní npm run verify exit 0; lint 0 errors/15 dřívějších warnings, typecheck, obsah/SEO/konverzní/unit guardy a production build PASS.
- CSS coverage: 3 home /81 službových stránek CS/EN/DE, přesná regenerace a dynamické menu/cookies/footer/hero styly PASS.
- 758 sitemap/odkazových kontrol finálního sestavení bez chyby (521 URL +237 odkazů); finální routing/canonical/hreflang/404/form validation bez chyby. Stejný výsledek také u prvního návrhu.
- Vizuálně desktop 1280 a Chrome mobil 375/320 px; homepage, emise, osvětlení a DE vibrace bez horizontálního přetékání. Menu/FAQ fungují, osvětlení CTA skutečně předvolí Měření osvětlení ve formuláři; nic neodesláno.
- B2B srovnání EKOME/ENVIFORM/ENVING/Amentum CZ čerstvě ověřené, starší obecná tvrzení o absenci článků a případových studií nepřebírána. Prezentační hodnocení 8,7/10, nikoli rankingový nebo konverzní výsledek. Uživatelský report: C:/Users/natur/Documents/Codex/2026-08-12/m/outputs/NATURCHEM-AUDIT-KONKURENCE-2026-10-08.md.

Po výslovném schválení nasazení: aktuální main/aktivní deployment/env/quota preflight, diff a nový verify, známý b3d2ee0 rollback (Ready deployment Hc8mqV2nUK1E5QyitqSuEHhUHjbL), jeden produkční build a cloud PSI stejných stránek opakovaně. Naostro prověřit správné CTA/předvolby bez neautorizované testovací poptávky. Staré font URL ani dosavadní služby neodstraňovat.

## Měření obchodního dopadu
Nepřepisovat společnou obsahovou fázi b3d2ee0 ani EXP-004/013/014. Případné vydání TECH-013 označit jako sdílený technický rušivý faktor, ne izolovaný SEO obsahový experiment. Stejně dlouhá úplná 28/56denní období po schváleném release: mobilní návštěvy relevantních služeb, form_start → skutečně úspěšné generate_lead, potvrzené přijetí a kvalifikace poptávek. Ranking/leady zatím bez nových dat, žádný uplift prohlašovaný předem.

## Finální předprodukční ověření 9. 10. 2026
Nový kompletní verify exit 0, lint 0 chyb /15 dosavadních varování, sestavení 580 rout /528 statických stránek. Přesné CSS coverage 3 homepage /81 služeb ve třech jazycích PASS; 337 immutable assetů nezměněno. Lokální production server: 521 sitemap URL +237 interních odkazů bez chyby, routing/canonical/hreflang/404 a formulářová validace bez chyby. Testy doručování a publikace pouze mock, žádná skutečná poptávka.

Vercel před vydáním: b3d2ee0 Ready Hc8mqV2nUK1E5QyitqSuEHhUHjbL na produkčních doménách, integrace výslovně označuje main jako produkční větev. Usage UI interval Sep 9, 5:00–Oct 9, 5:00: ISR Reads 1 101 994 /1 000 000, Fast Origin Transfer 8,65 GB /10 GB, Deployment Storage overview 1,42 GB. Historické překročení ISR trvá; žádné tvrzení, že tento release zresetuje či garantuje kvóty. Jediný fast-forward push na main bez preview branch pushe a bez následného vercel --prod. Rollback zachovaný b3d2ee0 Ready. Po vydání omezená reprezentativní kontrola, nikoli opakování 758 požadavků proti produkci.
