# Report prací — naturchem.cz

## Přehled projektu
| Položka | Hodnota |
|---|---|
| Projekt | naturchem.cz |
| Zahájení spolupráce | 25. 5. 2026 |
| Počet sezení celkem | 5 |
| Celkový odhadovaný čas | ~12,2 hodiny |
| Aktuální fáze | Copy sprint C1–C2 hotovo; další C3 (akreditace) a launch checklist |

*Poznámka: ke každému sezení se k odhadu přičítá +5 min před začátkem (tvorba prvního zadání) a +5 min po konci kvůli testu nasazené úpravy (`report-config.json`).*

---

## Sezení: 30. 5. 2026, 17:17–20:06

### Přehled
Večerní sprint navázal na Sprinty 11–12 (SEO, hero layout, responzivní menu) a pokračoval copy sprintem podle tone of voice. Naplánován rozsah C1–C9, zaveden příkaz `/copy`, doplněn sprint log v copy-audit. Implementovány dávky C1 (homepage) a C2 (O společnosti, odborná garance) včetně úprav layoutu homepage po schválení klienta.

**Zdroj popisu:** AI konverzace + git commity

### Provedené změny
#### UX: sjednotit ┼í├ş┼Öku sekc├ş na O spole─Źnosti.
**Co bylo uděláno:** UX: sjednotit ┼í├ş┼Öku sekc├ş na O spole─Źnosti. - Kdo jsme, garance a t├Żm sd├şlej├ş container bez omezen├ş na 980 px.  Co-authored-by: Cursor <cursoragent@cursor.com> (commit `cebecfe`). Dotcene oblasti: app, o-spolecnosti-naturchem.  
**Proč:** Kdo jsme, garance a t├Żm sd├şlej├ş container bez omezen├ş na 980 px.  Co-authored-by: Cursor <cursoragent@cursor.com>.

#### Zredukovat hlavn├ş menu a zjednodu┼íit sekci Kdo jsme.
**Co bylo uděláno:** Zredukovat hlavn├ş menu a zjednodu┼íit sekci Kdo jsme. - Slou─Źen├ş Odbornost do dropdownu O n├ís, odstran─Ťn├ş tablet re┼żimu Dal┼í├ş a ├║prava CSS pro notebook 1366 px; sekce Kdo jsme na O spole─Źnosti bez dvousloupcov├ęho layoutu.  Co-authored-by: Cursor <cursoragent@cursor.com> (commit `4d0e23e`). Dotcene oblasti: app, components, lib, o-spolecnosti-naturchem.  
**Proč:** Slou─Źen├ş Odbornost do dropdownu O n├ís, odstran─Ťn├ş tablet re┼żimu Dal┼í├ş a ├║prava CSS pro notebook 1366 px; sekce Kdo jsme na O spole─Źnosti bez dvousloupcov├ęho layoutu.  Co-authored-by: Cursor <cursoragent@cursor.com>.

#### Copy: lidsk─Ťj┼í├ş hero a Kdo jsme na O spole─Źnosti.
**Co bylo uděláno:** Copy: lidsk─Ťj┼í├ş hero a Kdo jsme na O spole─Źnosti. - Hero p┼Öedstavuje t├Żm a garanci Heziny; sekce Kdo jsme za─Ź├şn├í identitou firmy m├şsto v├Żstupy.  Co-authored-by: Cursor <cursoragent@cursor.com> (commit `be3f7ef`). Dotcene oblasti: o-spolecnosti-naturchem, report, workflow.  
**Proč:** Hero p┼Öedstavuje t├Żm a garanci Heziny; sekce Kdo jsme za─Ź├şn├í identitou firmy m├şsto v├Żstupy.  Co-authored-by: Cursor <cursoragent@cursor.com>.

#### Zjednodu┼íit O spole─Źnosti a p┼Öesunout proces na Typick├ę zak├ízky.
**Co bylo uděláno:** Zjednodu┼íit O spole─Źnosti a p┼Öesunout proces na Typick├ę zak├ízky. - Trust li┼íta a compact statistiky nahrazuj├ş p┼Öepln─Ťn├Ż hero; sekce Kdo jsme je v├Ż┼í na str├ínce.  Co-authored-by: Cursor <cursoragent@cursor.com> (commit `9abb16a`). Dotcene oblasti: app, lib, o-spolecnosti-naturchem, typicke-zakazky.  
**Proč:** Trust li┼íta a compact statistiky nahrazuj├ş p┼Öepln─Ťn├Ż hero; sekce Kdo jsme je v├Ż┼í na str├ínce.  Co-authored-by: Cursor <cursoragent@cursor.com>.


#### Sprint 11 — SEO a prolinkování poradna ↔ služby
**Co bylo uděláno:** Proveden audit meta title/description na klíčových stránkách (dokument `05-seo/meta-audit-sprint11.md`). Přidáno obousměrné prolinkování: u každého článku poradny blok souvisejících služeb, u stránek služeb teaser souvisejících článků. Dokončena technická hygiena P4 — migrace stránky školení na šablonu ServicePage, FAQ teaser u ISPOP/GHG/chemických služeb, přesun checklistu „Nejste si jistí?" výše na indexu provozů.  
**Proč:** Lepší SEO a navigace mezi odborným obsahem a konverzními stránkami služeb; konzistentní struktura service pages.

#### Sprint 10 — homepage a dokumentace (doplnění večera)
**Co bylo uděláno:** Trust lišta hned pod hero, kompaktní statistiky bez duplicitního nadpisu, redukce vertikálních mezer (−50 %). Projektová dokumentace (`naturchem-projekt/`) zahrnuta do repozitáře.  
**Proč:** Posílení důvěry hned pod hero a sjednocení spacingu dle UX roadmapy.

#### Sprint 12 — hero layout a responzivní menu
**Co bylo uděláno:** Opravena regrese zarovnání — `.container` znovu centruje obsah. Hero pás na podstránkách začíná bez bílé mezery pod fixed hlavičkou. Sjednocena min-height hero (`standard` / `service` varianty). Hlavní menu: od 1280 px plné menu, na 1024–1279 px zkrácená verze s dropdownem „Další" (Typické zakázky, O NATURCHEM, FAQ, Poradna, Akreditace, Přístrojové vybavení) — řeší překryv tlačítka „Poptat službu" s položkou Kontakt.  
**Proč:** Klient hlásil nestabilní výšku hero, text u levého okraje monitoru a přeplněné menu na středně širokých displejích.

#### UX konzultace — hero fotky a výška
**Co bylo uděláno:** Odsouhlaseno: homepage může mít vyšší hero (landing), podstránky mají být mezi sebou konzistentní. Tématické stock fotky podle kategorií služeb (emise / hluk / dokumentace) ponechány — ne jedna fotka všude, ne 24 unikátních variant.  
**Proč:** Kompromis mezi orientací návštěvníka na správné službě a udržitelností údržby webu.

#### Oprava zarovnání hero textu (doplnění po kontrole)
**Co bylo uděláno:** Odstraněno `width: 100%` z vnitřního wrapperu hero pásu, které přepisovalo šířku containeru a tlačilo text k levému okraji obrazovky (např. stránka Reference). Text hero nyní začíná ve stejné linii jako obsah pod ním a jako na homepage.  
**Proč:** Po první opravě containeru zůstala vizuální regrese — klient ji ověřil na screenshotu stránky Reference.

#### Plánování copy sprintu a příkaz `/copy`
**Co bylo uděláno:** Po status briefingu sestaven plán copy sprintu C1–C9 (poradna články odloženy do P-COPY). Vytvořen Cursor příkaz `.agents/commands/copy.md` s pravidly faktické přesnosti (TOV §0). Do `01-copy-audit/copy-audit.md` doplněn sprint log a mapování na starší CC položky.  
**Proč:** Systematický TOV pass napříč webem s jasným workflow návrh → schválení → implementace.

#### Copy sprint C1 — homepage
**Co bylo uděláno:** Přepsány hero texty (H1 s důrazem na komplexní pokrytí potřeb provozu), intro sekce „Co zajišťujeme" a texty tří pilířů nabídky. Odstraněn reference teaser, hero CTA tlačítka, odkaz „Nevím co potřebuji" a spodní uncertain CTA pás — konverze zůstává v hlavičce. Loga zákazníků ponechána.  
**Proč:** Homepage má být přehlednější, copy zákaznicky orientované dle TOV; méně duplicitních CTA.

#### Copy sprint C2 — O společnosti a odborná garance
**Co bylo uděláno:** Přepsány hero, sekce „Kdo jsme", garance a stránka `/odborna-garance` (profil Ing. Heziny, konzistentní autorizace). Aktualizovány sdílené texty: stats intro („řešíme déle než 36 let"), garance, proces zakázky, tým (popisy u obchodního kontaktu), působnost a CTA spolupráce.  
**Proč:** Klíčové důvěryhodnostní stránky musí mluvit jazykem zákazníka, ne firemním katalogem.

### Časová náročnost
**Odhadovaná doba práce:** ~2 hod 49 min
**Rozložení:** 30. 5. 2026 17:17–20:06 (~2 hod 49 min)
**Metoda odhadu:** git
**Počet výměn s AI:** ~25 kol konverzace  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci.*

### Technická poznámka
UX: `PageHeroBand.tsx`, `Header.tsx`, `globals.css`, `poradna-service-links.ts` — commity S11–S12 (`401f312`, `2714920`, `650f64a`). Copy: `page.tsx`, `o-spolecnosti-naturchem/page.tsx`, `odborna-garance/page.tsx`, `.agents/commands/copy.md`, `01-copy-audit/copy-audit.md`, lib (`company-stats`, `team`, `guarantee-copy`, `work-process`, `nationalMessaging`, `cta`) — commit `ebbae75`. Build prošel bez chyb.

---

## Sezení: 30. 5. 2026, 13:15–15:21

### Přehled
Odpolední implementační sprint navázal na status briefing a dokončil zbývající úkoly z oblastí P1–P3. Proveden technický úklid šablony služeb, zkrácena stránka akreditace, sjednoceny konverzní pásy a opravena hlavička při scrollu. Následovala rozsáhlá oprava log zákazníků na homepage a stránce Reference a dokončení Sprintů 6–8 (vizuální scanovatelnost P5). Zavedena automatická synchronizace klientského reportu po produktových commitech.

**Zdroj popisu:** AI konverzace + git commity

### Provedené změny

#### P1 — ověření a úklid ServicePage + homepage
**Co bylo uděláno:** Potvrzeno, že šablona služeb už má jednu sekci „Mohlo by Vás zajímat“ (max 3 karty) a accordion jen s Příklady a Chybami. Odstraněna mrtvá data `forWhom` / `authorities` z 18 definic služeb a 5 ručně psaných stránek, smazán soubor `home-audience.ts`, odstraněny nepoužívané CSS pro timeline procesu na homepage.  
**Proč:** Úkoly P1 byly hotové od dřívějších sprintů, ale data a roadmapa neodpovídaly skutečnému stavu — úklid zjednodušuje údržbu a předchází zmatku při dalších úpravách.

#### Akreditace — redukce struktury (P2-5)
**Co bylo uděláno:** Na stránce `/akreditace-autorizace-dokumenty` sloučena sekce přístrojového vybavení do bloku akreditovaného rozsahu (odstavec + odkaz na vybavení). Autorizace a dokumenty ke stažení jsou v jedné sekci „Autorizace, oprávnění a dokumenty“.  
**Proč:** Stránka měla příliš mnoho samostatných sekcí se stejným účelem (důvěryhodnost) — kratší struktura zrychluje orientaci a posiluje závěrečné CTA.

#### Univerzální PageCtaStrip a fixed hlavička (P3-6, P4-6)
**Co bylo uděláno:** Nová komponenta `PageCtaStrip` sjednotila konverzní pásy na informačních stránkách (O společnosti, FAQ, poradna, reference, akreditace, typické zakázky a další). Hlavička přešla z nefunkčního `sticky` na `position: fixed` — původní chování rozbíjelo `overflow-x` na `body`.  
**Proč:** Chyběla konzistentní výzva k akci na stránkách bez poptávkového panelu; hlavička přestávala držet nahoře při scrollu.

#### Copy intro texty (P3-1, P3-2)
**Co bylo uděláno:** Úvodní texty na homepage a stránkách služeb přepsány do popisného stylu — konkrétnější formulace místo obecných frází, sjednocený tón napříč 24 službami.  
**Proč:** Splnění copy úkolů z roadmapy; návštěvník rychleji pochopí, co firma dělá a pro koho.

#### Loga referencí — konzistentní grid zákazníků
**Co bylo uděláno:** Rasterová loga s bílým nebo černým pozadím nahrazena SVG/PNG s průhledností. Opravena neviditelná loga (ČEZ, Swietelsky, teplárny) — CSS třídy a text v inline SVG se v `<img>` tagu nevykreslují, proto přepsány na `path` s `fill` atributy nebo oficiální wordmarky. Grid na homepage a `/reference` uspořádán do dvou řádků (10 sloupců na desktopu). Horizontálním logům (Teplárna ČB, Swietelsky, Teplárny Písek a Strakonice) přidán širší slot ve gridu a varianty s názvem firmy.  
**Proč:** Loga na světlém pozadí webu mizela nebo byla nečitelná; různé poměry stran rozbíjely vizuální řád gridu.

#### Sprint 6–8 — vizuální scanovatelnost (P5)
**Co bylo uděláno:** Stock hero fotky podle kategorií služeb, stats band s firemními čísly, globální vizuální rytmus sekcí (střídání bílého a muted pozadí), ikony u accordion karet a sjednocené velikosti ikon, timeline pracovního procesu, OG image šablony pro sdílení a iniciály místo fotek v týmové sekci.  
**Proč:** Web působil jako „wall of text“ bez vizuálních přestávek — P5 z auditu grafiky a UX roadmapy; řešení bez reálných fotografií od klienta (placeholder stock + ikony + layout).

#### Workflow — automatická synchronizace reportu
**Co bylo uděláno:** Post-commit hook po každém produktovém commitu doplní report ze gitu, uloží stav do `report-state.json` a volitelně pushne commit `Report: auto-sync`. Součást instalace přes `setup-ai-commands.ps1`.  
**Proč:** Klientský report nemusí být ručně doplňován po každé práci z Cursoru nebo Claude Code.

### Časová náročnost
**Odhadovaná doba práce:** ~2 hod 6 min  
**Rozložení:** 30. 5. 2026 13:15–15:21 (~2 hod 6 min)  
**Metoda odhadu:** git  
**Počet výměn s AI:** ~18 kol konverzace  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci.*

### Technická poznámka
`ServicePage.tsx`, `PageCtaStrip.tsx`, `client-logos.ts`, `HeroPhoto.tsx`, `WorkProcessTimeline.tsx`, `globals.css`, `akreditace-autorizace-dokumenty/page.tsx`; skripty `process-logos.mjs`, `update-report-from-git.ps1`. Commity `f260dca` (P1 + akreditace), `ec19e3d` (CTA + hlavička), `78876a3` (intro texty), `af84c90` (P5 Sprint 6–8). Build prošel bez chyb.

---

## Sezení: 30. 5. 2026, 09:53–11:40

### Přehled
Sezení navázalo na předchozí den a dokončilo čtvrtý UX sprint — opravy designového systému, přepracování stránky Reference, doplnění log zákazníků a jejich zobrazení i na homepage. Odpoledne proběhlo nastavení projektového workflow — sjednocení AI příkazů pro Cursor i Claude Code a zavedení klientského reportu prací.

**Zdroj popisu:** AI konverzace + git commity

### Provedené změny

#### Opravy designového systému a navigace
**Co bylo uděláno:** Sekundární tlačítka (tzv. „ghost" styl s bílým pozadím) byla vizuálně posílena — nyní mají světlé navy tónované pozadí, díky čemuž jsou dobře viditelná na bílém podkladu. Položka „FAQ" v navigaci přejmenována na „Časté dotazy".  
**Proč:** Bílá tlačítka na bílém pozadí splývala s okolím a vypadala jako chybějící obsah. Přejmenování FAQ zlepšuje srozumitelnost pro návštěvníky, kteří neznají anglický zkratkový výraz.

#### Stránky služeb — odstranění nadbytečného CTA
**Co bylo uděláno:** Z každé stránky služby byl odstraněn opakující se blok s poptávkovým tlačítkem na spodku stránky.  
**Proč:** Tlačítko „Poptat" je trvale viditelné v horní navigaci (sticky hlavička), takže spodní copy bylo nadbytečné a zbytečně prodlužovalo stránku.

#### Stránka FAQ — redukce a přehlednost
**Co bylo uděláno:** Z hlavičky FAQ stránky zredukována 3 různě stylizovaná CTA tlačítka na jediné „Poslat podklady k posouzení". Odstraněna také opakující se poptávková tlačítka pod každou FAQ kategorií. Kategoriové dlaždice přearanžovány do jednoho řádku (8 sloupců) s kompaktnějšími ikonami a textem.  
**Proč:** Tři tlačítka se stejnou funkcí ale různým stylem vytvářela dojem aktivního filtru místo CTA. Zbytečná opakování rozptylovaly čtenáře. Dlaždice na více řádcích zabíraly příliš místa.

#### Přístrojové vybavení — statické karty
**Co bylo uděláno:** Rozbalovací/sbalovací systém karet byl nahrazen statickými kartami. Do nadpisů každé skupiny přidány počty položek v závorce (např. „Měřicí přístroje — 13 položek").  
**Proč:** Původní rozbalovací karty neměly viditelný indikátor (šipku) a při nesouměrném obsahu způsobovaly bílé mezery. Zobrazení všeho najednou odpovídá záměru stránky — zákazník chce přehled vybavení celý.

#### Přepracování stránky Reference
**Co bylo uděláno:** Odstraněna sekce „Reference podle oblastí" (obsahovala karty vedoucí na poptávkový formulář, nikoliv skutečné reference). Sekce „Anonymizované příklady řešených zakázek" přejmenována na „Příklady z praxe" a přepracována — každý příklad je na samostatném řádku, ve výchozím stavu sbalený, po rozbalení zobrazí rozsah prací, výstup a popis, plus tlačítko „Poptat podobnou zakázku".  
**Proč:** Stránka Reference má za cíl budovat důvěru — původní sekce zbytečně duplikovala stránku /typicke-zakazky a vedla na formuláře místo na reálný důkaz praxe.

#### Sekce Naši zákazníci s logy a prokliky
**Co bylo uděláno:** Na stránce Reference přidána sekce s logy 19 zákazníků NATURCHEM (přejmenováno z „Vybraní zákazníci" na „Naši zákazníci"). Logo každé společnosti bylo dohledáno a staženo z oficiálních webů. Každé logo je prokliknutelné (otevírá homepage firmy v novém okně) a zobrazuje se v šedé — při najetí myší přechází na barevnou verzi. Stejný pruh s logy byl přidán i na homepage nad patičku.  
**Proč:** Reálné zákaznické reference s logy firem (Škoda Auto, ČEZ, České dráhy, E.ON, Strabag a další) jsou silný důkaz odborné praxe. Zobrazení na homepage i na stránce Reference posiluje důvěryhodnost hned při prvním kontaktu s webem.

#### Nastavení projektového workflow a AI příkazů
**Co bylo uděláno:** Vylepšen příkaz `/report` pro práci napříč nástroji (Cursor i VS Code + Claude Code) — odhad času z git commitů funguje bez ohledu na nástroj, popis změn se doplní i z commitů, pokud v daném nástroji neproběhla konverzace. Příkazy `/report` a `/status` sjednoceny do jedné složky `.agents/commands/` s automatickým propojením do Cursoru a Claude Code (junction skript). Klientský report prací zaveden v repozitáři (`reports/report.md`) a commitnut na GitHub. Doplněn skript `estimate-session-time.ps1` (git + log konverzace, pauza 30 min) a automatický commit a push po každé aktualizaci reportu.  
**Proč:** Klient pracuje střídavě z různých AI nástrojů — duplicitní údržba příkazů v `.cursor/` a `.claude/` by vedla k rozpory. Sjednocený zdroj zajišťuje konzistentní `/report` a `/status` odkudkoliv, report prací slouží jako průběžná evidence pro klienta.

### Časová náročnost
**Odhadovaná doba práce:** ~1 hod 47 min
**Rozložení:** 30. 5. 2026 09:53–11:40 (~1 hod 47 min)
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** ~30 kol konverzace  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — dopolední blok dne 30. 5. (UX sprint 4 a reference). Odpolední práce (P1, akreditace) je v sezení „30. 5. 2026, 13:20–13:53".*

### Technická poznámka
UX: upraveno 8+ komponent a stránek (`ServicePage`, `FaqPageContent`, `EquipmentAccordion`, `ReferenceExampleCard`, `reference/page.tsx`, `page.tsx`, `globals.css`, `navigation.ts`, `faq.ts`), datová vrstva `src/lib/client-logos.ts`, 19 log v `public/loga-referenci/`. Workflow: `.agents/commands/`, `scripts/setup-ai-commands.ps1`, `reports/report.md`. Nasazeno na `web-naturchem.vercel.app`.

---

## Sezení: 29. 5. 2026, 21:31–22:50

### Přehled
Hlavní implementační sezení — provedeny tři UX sprinty zahrnující přechod na novou URL strukturu, redukci obsahu na klíčových stránkách, zprovoznění filtrování na poradně a sérii strukturálních oprav napříč celým webem.

### Provedené změny

#### Sprint 1 — přesun service pages na strukturu /sluzby/
**Co bylo uděláno:** Všech 24 stránek služeb přesunuto z plochých URL (např. `/mereni-emisi`) na hierarchickou strukturu `/sluzby/mereni-emisi`. Stará URL zůstávají funkční přes 301 přesměrování.  
**Proč:** Sjednocení struktury webu, lepší SEO hierarchie a příprava na finální obsahový sprint.

#### Sprint 2 — redukce redundantního obsahu
**Co bylo uděláno:** Odstraněny duplicitní nebo nadbytečné sekce na čtyřech stránkách: `/kontakt` (sekce „Rychlé poptávkové cesty", opakující se telefonní číslo), `/poradna` (sekce „Chystaná témata"), `/reference` (redukce 3 CTA tlačítek na 1), `/o-spolecnosti` (doplněno chybějící CTA na konci stránky).  
**Proč:** UX audit identifikoval, že stránky obsahovaly o 30–50 % více obsahu než bylo potřeba, což odvádělo pozornost od konverzního cíle.

#### Funkční filtrování na stránce /poradna
**Co bylo uděláno:** Vizuální štítky témat (Emise, Hluk, EIA…) přeměněny na funkční multi-select filtry — kliknutím se zobrazí jen relevantní články, aktivní štítek se vizuálně odliší.  
**Proč:** Štítky vypadaly jako filtry, ale nefungovaly — frustrující UX pro návštěvníky. Opraven také technický problém s hydratací způsobující nefunkčnost na produkci (rozdíl formátování dat mezi serverem a prohlížečem).

#### Sprint 3 — strukturální UX opravy napříč webem
**Co bylo uděláno:** 10 strukturálních oprav najednou: zkráceny intro texty na 6 stránkách služeb, přidány CTA sekce na `/akreditace` a `/faq`, odstraněna sekce „Kam dál" na `/typicke-zakazky`, opravena sitemap (zobrazovala staré redirect URL místo kanonických), doplněny chybějící FAQ sekce na 4 stránkách služeb, opravena neviditelná 5. položka na `/eia-posudky`.  
**Proč:** Systematická revize webu dle UX audit roadmapy — každá z oprav přispívá ke konverzi nebo důvěryhodnosti.

### Časová náročnost
**Odhadovaná doba práce:** ~1 hod 19 min  
**Rozložení:** 29. 5. 2026, 21:31–22:50 (~1 hod 19 min)  
**Metoda odhadu:** git  
**Počet výměn s AI:** ~15 kol konverzace  
*Poznámka: čas odhadován ze součtu mezer mezi git commity (21:36–22:45, 4 commity); včetně +5 min před a po bloku.*

---

## Sezení: 25.–26. 5. 2026

### Přehled
Zahajovací sezení zaměřené na přípravu projektu — stažení a zprovoznění klientovy pracovní verze webu, průzkum existujícího kódu a obsahu a provedení UX auditu jako základ pro další sprinty.

### Provedené změny

#### Příprava projektu a zprovoznění pracovní verze
**Co bylo uděláno:** Stažení klientovy pracovní verze webu naturchem.cz, zprovoznění projektu v lokálním prostředí (Next.js), inicializace repozitáře.  
**Proč:** Nutný základ před zahájením jakýchkoliv úprav — projekt musí fungovat lokálně i na produkci.

#### Průzkum existujícího webu a obsahu
**Co bylo uděláno:** Detailní průzkum stávající struktury webu, stránek, komponent a obsahu. Zmapování URL struktury, navigace, typů stránek a datových zdrojů.  
**Proč:** Porozumění stávajícímu stavu je nezbytné pro správné plánování UX změn bez rizika nefunkčnosti.

#### UX audit a sestavení roadmapy
**Co bylo uděláno:** Provedení UX auditu webu — identifikace problémů v návaznosti stránek, redundantního obsahu, chybějících CTA, nesouladu URL struktury a dalších UX nedostatků. Sestavení prioritizované roadmapy oprav rozdělené do sprintů.  
**Proč:** Strukturovaný audit zajišťuje, že změny jsou prováděny systematicky dle priority dopadu na konverzi a důvěryhodnost, nikoliv nahodile.

#### Definice AI rolí a pravidel projektu
**Co bylo uděláno:** Vytvořeny 4 specializované AI role pro práci na projektu: **UX specialista**, **CMO / marketingový stratég**, **Copywriter** a **SEO specialista**. Každá role má definovaný způsob uvažování, priority a pravidla chování odpovídající danému oboru. Zároveň byly připraveny strategické dokumenty projektu: persony zákazníků, analýza konkurence, tone of voice, brand manuál a sitemap.  
**Proč:** AI role umožňují klientovi kdykoli v budoucnu konzultovat konkrétní téma (texty, SEO, marketingová strategie, UX) s AI nastavenou přesně pro daný kontext projektu — bez nutnosti opakovat zadání od začátku. Strategické dokumenty slouží jako základ pro veškerou další práci na webu i komunikaci.

### Časová náročnost
**Odhadovaná doba práce:** ~4 hod 10 min
**Počet výměn s AI:** ~20 kol konverzace  
*Poznámka: čas zadán manuálně (4 hod) + padding před/po sezení; v tomto sezení nebyly vytvořeny git commity (průzkum a audit probíhaly bez změn kódu).*
