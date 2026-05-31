# Report prací — naturchem.cz

## Přehled projektu
| Položka | Hodnota |
|---|---|
| Projekt | naturchem.cz |
| Zahájení spolupráce | 25. 5. 2026 |
| Počet sezení celkem | 12 |
| Celkový odhadovaný čas | ~15,3 hodiny |
| Aktuální fáze | UX revize homepage fold (P5-17); patička P5-23 hotovo |

*Poznámka: ke každému sezení se k odhadu přičítá +5 min před začátkem (tvorba prvního zadání) a +5 min po konci kvůli testu nasazené úpravy (`report-config.json`).*

---

## Sezení: 31. 5. 2026, 14:18–14:23

### Přehled
Dokončení P5-17 — těsnější mobilní fold po zkrácení hero copy (P5-21). Přidána varianta `BrandLogo` pro tmavé pozadí (SVG wordmark). Aktualizace audit docs, ROADMAPA a reportu.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### P5-17 — mobilní fold padding
**Co bylo uděláno:** Snížení paddingu hero, stats a první sekce offer na mobilu (`globals.css`). P5-17 označeno jako hotové v ROADMAPA a ux-audit-roadmapa.  
**Proč:** Po zkrácení hero copy zůstal nadbytečný vertikální prostor — fold byl příliš nízko.

#### BrandLogo `onDark`
**Co bylo uděláno:** Nová prop `variant="onDark"` — SVG značka + text NATURCHEM bez PNG filtru pro tmavé pozadí.  
**Proč:** Připraveno pro použití na tmavých plochách (patička byla redesignována bez loga).

#### Dokumentace
**Co bylo uděláno:** copy-audit (P5-23 footer copy), ux-audit-roadmapa (P5-17, P5-23), status šablona s odkazem na ROADMAPA.  
**Proč:** Synchronizace stavu projektu s implementací.

### Časová náročnost
**Odhadovaná doba práce:** ~12 min  
**Rozložení:** 31. 5. 2026 14:18–14:25 (~12 min)  
**Metoda odhadu:** konverzace  

---

## Sezení: 31. 5. 2026, 13:48–14:10

### Přehled
Kompletní redesign patičky webu — z původní nefunkční čtyřsloupcové verze na kompaktní třísloupcovou strukturu (Společnost · Služby · Kontakt). Logo z patičky odstraněno kvůli zbytečné výšce; nadpisy sloupců vizuálně odděleny. Commitnuto a pushnuto na GitHub.

**Zdroj popisu:** AI konverzace + git commit

### Provedené změny

#### Redesign patičky — 3 sloupce
**Co bylo uděláno:** Patička postavena od nuly: sloupec Společnost (O nás, Reference, Akreditace, Poradna, FAQ), sloupec Služby (přehled + 3 klíčové služby), sloupec Kontakt (města Budějovice · Praha · Brod, oba telefony, e-mail, odkaz na formulář). Odstraněn accordion `<details>`, který na desktopu schovával odkazy ve sloupcích Služby a O webu.  
**Proč:** Původní patička na desktopu nezobrazovala navigaci; klient požadoval vyváženou, kompaktní strukturu bez duplicitního obsahu.

#### Obsah a vyvážení sloupců
**Co bylo uděláno:** Ze sloupce Služby odstraněny Provozy, Typické zakázky a Akreditace; akreditace přesunuta do sloupce Společnost. Zkrácen kontaktní sloupec — bez ulic a PSČ, detail na stránce Kontakt.  
**Proč:** Sloupec Služby má obsahovat jen služby; patička má být přehledná mapa webu, ne duplikát celého menu.

#### Vizuální nadpisy sloupců
**Co bylo uděláno:** Nadpisy Služby, Společnost a Kontakt — sage barva, uppercase, spodní linka — jednotný styl napříč sloupci.  
**Proč:** Tučný text splýval s odkazy; klient potřeboval jasné oddělení sekcí.

#### Odstranění loga z patičky
**Co bylo uděláno:** Logo NATURCHEM odstraněno z prvního sloupce včetně bílého boxu a CSS zarovnání, které nafukovalo výšku celé patičky. Logo zůstává v hlavičce.  
**Proč:** Logo v patičce zdvojovalo značku a vytvářelo prázdný prostor ve sloupcích Služby a Kontakt; patička má sloužit navigaci a kontaktu.

#### Commit a nasazení
**Co bylo uděláno:** Produktová změna commitnutá (`434cb01`) a pushnutá na `origin/main`.  
**Proč:** Nasazení nové patičky na Vercel.

### Časová náročnost
**Odhadovaná doba práce:** ~27 min  
**Rozložení:** 31. 5. 2026 13:48–14:10 (~27 min)  
**Metoda odhadu:** konverzace  
**Počet výměn s AI:** ~8  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — log konverzace (Cursor hook). Každý blok má +5 min před začátkem a +5 min po konci.*

### Technická poznámka
`src/components/Footer.tsx`, `src/lib/footer-nav.ts`, `src/app/globals.css` — commit `434cb01`.

---

## Sezení: 31. 5. 2026, 13:26–13:45

### Přehled
Úpravy homepage hero copy (vrstvené texty H1/lead) a cap log zákazníků na 2 řádky i na desktopu.

**Zdroj popisu:** Git commity (automatická synchronizace + AI konverzace)

### Provedené změny

#### UX: cap log zákazníků na 2 řádky i na desktopu
**Co bylo uděláno:** ClientLogosGrid s limitem dle viewportu, 19 log + text „a mnoho dalších..“ na desktopu; na Referencích rozbalení všech log po kliknutí.  
**Proč:** Přehlednější homepage a reference bez nekonečné mřížky log.

#### Homepage hero: vrstvené copy, sitewide skrytí eyebrow na mobilu
**Co bylo uděláno:** Zkrácený H1 a lead bez zdvojení služeb, jednotný text pro mobil i desktop. Pravidla hero zapsána do ux-role a copy-role (P5-21, P5-22).  
**Proč:** Hero musí okamžitě sdělit hodnotu; duplicitní copy a dlouhý lead oslabovaly první dojem.

### Časová náročnost
**Odhadovaná doba práce:** ~20 min  
**Rozložení:** 31. 5. 2026 13:26–13:45 (~20 min)  
**Metoda odhadu:** git  
**Počet výměn s AI:** —  
*Poznámka: commity `186bc6b`, `279512b`.*

### Technická poznámka
Commity: `186bc6b`, `279512b`.

---

## Sezení: 31. 5. 2026, 12:48–13:02

### Přehled
Doplňková UX úprava mobilního zobrazení — trust band s akreditačními údaji (laboratoř 1599, ISO, KHS/ČIŽP, EIA) se skryje na všech stránkách do šířky 1023 px, nejen na homepage. Na desktopu zůstává beze změny. Commitnuto a pushnuto na GitHub.

**Zdroj popisu:** AI konverzace + git commity

### Provedené změny

#### Trust band skrytý na mobilu napříč webem
**Co bylo uděláno:** CSS pravidlo pro skrytí `.trust-band` rozšířeno z homepage na celý web — stránky služeb, O společnosti i homepage. Blok se pod hero na telefonu a tabletu vůbec nezobrazuje. Odstraněny nepotřebné mobilní styly pro vertikální skládání trust bandu.  
**Proč:** Na stránkách služeb blok čtyř akreditačních řádků zbytečně odsouval hlavní obsah dolů; na homepage už byl skrytý, chování teď sjednoceno.

#### Akreditace na mobilu zachována v topbaru
**Co bylo uděláno:** Informace o akreditaci zůstávají dostupné v horní liště webu — trust band pod hero se na mobilu neopakuje.  
**Proč:** Důvěryhodnostní signál zůstává viditelný, ale bez duplicity a bez ztráty místa v hlavním obsahu.

#### Commit a nasazení
**Co bylo uděláno:** Produktová změna commitnutá (`10ea068`) a pushnutá na `origin/main`.  
**Proč:** Nasazení sjednoceného mobilního chování na Vercel.

### Časová náročnost
**Odhadovaná doba práce:** ~14 min  
**Rozložení:** 31. 5. 2026 12:48–13:02 (~14 min)  
**Metoda odhadu:** konverzace  
**Počet výměn s AI:** ~3  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci.*

### Technická poznámka
`src/app/globals.css` — commit `10ea068`.

---

## Sezení: 31. 5. 2026, 11:09–11:21

### Přehled
Navazující UX úpravy mřížky log zákazníků na mobilu — sjednocení limitu 4 řádků na homepage i stránce Reference, náhrada posledního slotu textovou buňkou naznačující další zákazníky a finální schválení copy „a mnoho dalších..“. Commitnuto a pushnuto na GitHub.

**Zdroj popisu:** AI konverzace + git commity

### Provedené změny

#### Mobilní preview log — stejný limit na obou stránkách
**Co bylo uděláno:** Komponenta `ClientLogosGrid` s limitem 4×3 buněk na mobilu rozšířena i na `/reference` (dříve jen homepage). Zobrazuje se 11 log; 12. slot nahrazuje textová buňka místo dalšího loga.  
**Proč:** Na mobilu působila mřížka 19 log rozházeně a zabírala příliš scrollu; na stránce referencí stejný problém.

#### Textová buňka overflow
**Co bylo uděláno:** Na homepage buňka odkazuje na `/reference#zakaznici`, na stránce Reference po tapnutí rozbalí zbývající loga. Vizuálně sladěno s logy (šedá, stejná výška buňky).  
**Proč:** Návštěvník má signal, že jde o výběr, ne kompletní seznam — bez nutnosti zobrazit všech 19 log najednou.

#### Finální copy — „a mnoho dalších..“
**Co bylo uděláno:** Po copy iteraci (dvouřádkový návrh → jeden řádek) schválena a implementována textace **„a mnoho dalších..“** v `client-logos.ts`, doplněn `aria-label` pro přístupnost.  
**Proč:** Krátký text se vejde do buňky loga a přirozeně naznačuje širší okruh zákazníků bez uvádění konkrétních jmen.

#### Commit a nasazení
**Co bylo uděláno:** Produktové změny commitnuty (`7a52ea1`) a pushnuty na `origin/main`.  
**Proč:** Uzavření ladění mobilní mřížky log před nasazením na Vercel.

### Časová náročnost
**Odhadovaná doba práce:** ~11 min  
**Rozložení:** 31. 5. 2026 11:09–11:21 (~11 min)  
**Metoda odhadu:** konverzace  
**Počet výměn s AI:** ~6  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci.*

### Technická poznámka
`src/components/ClientLogosGrid.tsx`, `src/lib/client-logos.ts`, `src/app/globals.css` — commit `7a52ea1`.

---

## Sezení: 31. 5. 2026, 10:40–11:17

### Přehled
Navazující UX sezení na homepage — nejdřív optimalizace mobilního foldu (hero, trust lišta, stats), poté vizuální zvýraznění sekce „Co zajišťujeme“ (Sprint 14) a úprava layoutu karet (nadpis vedle ikony, P5-18). Průběžně několik kol ladění spacingu a zarovnání na mobilu. Změny commitnuty a pushnuty na GitHub.

**Zdroj popisu:** AI konverzace + git commity

### Provedené změny

#### UX audit — mobilní homepage (P5-14–16)
**Co bylo uděláno:** Proveden UX audit mobilní homepage — diagnóza přetíženého foldu (dlouhý hero text, vertikální trust lišta, vysoké stats karty). Na mobilu zkrácen eyebrow a lead (desktop beze změny), trust band skryt, akreditační signál v krátkém eyebrow „Akreditovaná laboratoř · ISO 17025“. Stats zkráceny na „14 000+ zakázek“, „6 000+ měření“, „36 let praxe“ ve třech kompaktních kartách s ikonami.  
**Proč:** Návštěvník na telefonu scrolloval přes ~1000 px důvěryhodnostního obsahu, než uviděl nabídku služeb.

#### Ladění spacingu a stats na mobilu
**Co bylo uděláno:** Iterativně doladěny mezery mezi hero, USP stats a sekcí „Co zajišťujeme“ — odstraněn skrytý `margin-top` u stats gridu, sjednoceny symetrické mezery (hero spodní padding + stats padding + padding následující sekce). Stats karty: ikony vycentrovány, číslo a popisek na dva řádky, vertikální zarovnání nadpisu s ikonou.  
**Proč:** Po první implementaci působily karty „ujeté“ nahoru nebo měly nevyrovnané mezery nad/pod stats pruhem.

#### Sprint 14 — vizuální zvýraznění pilířů služeb
**Co bylo uděláno:** Sekce „Co zajišťujeme“ přepnuta na bílé pozadí s eyebrow „Naše služby“. Tři pilíře dostaly bílé karty se stínem, forest accent horním okrajem, větší ikony (52 px), tag pills (KHS, EIA, ČIŽP…), primary CTA místo ghost tlačítek. Celá karta zůstává klikací.  
**Proč:** Stats karty měly box styling, pilíře ne — vizuální hierarchie byla obrácená.

#### P5-18 — nadpis vedle ikony v offer kartách
**Co bylo uděláno:** UX konzultace a implementace — ikona a nadpis sloučeny do řádku `.home-offer-card-head` (stejný vzor jako decision panel na service pages). Na mobilu menší ikony (40 px), vertikální centrování nadpisu vůči ikoně.  
**Proč:** Vertikální stack ikona → nadpis zbytečně prodlužoval karty (~50–80 px na kartu); horizontální head zrychluje scan.

#### Kompaktní mřížka log zákazníků
**Co bylo uděláno:** Nová komponenta `ClientLogosGrid` — sjednocená 3sloupcová mřížka na mobilu s pevnou výškou buněk, reset wide log, těsnější mezery. Na mobilu preview 11 log + 12. slot pro overflow hint; na desktopu plná mřížka 10 sloupců. Použito na homepage i stránce Reference.  
**Proč:** 19 log na mobilu působilo rozházeně (wide loga rozbíjela řádky) a zabíralo příliš místa.

#### Commit a nasazení
**Co bylo uděláno:** Produktové změny commitnuty (`a930750`, `bfcb660`) a pushnuty na `origin/main`. Aktualizována ROADMAPA a UX audit dokumentace (P5-14–18).  
**Proč:** Uzavření Sprintu 13–14 a nasazení na Vercel.

### Časová náročnost
**Odhadovaná doba práce:** ~38 min  
**Rozložení:** 31. 5. 2026 10:40–11:17 (~38 min)  
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** ~12  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci.*

### Technická poznámka
`src/app/page.tsx`, `src/app/globals.css`, `src/lib/company-stats.ts`, `src/components/ClientLogosGrid.tsx`, `src/lib/client-logos.ts` — commity `a930750`, `bfcb660`.

---

## Sezení: 31. 5. 2026, 09:42–10:36

### Přehled
Dopolední sezení začalo status briefingem a UX konzultací struktury stránek služeb. Po schválení plánu S7 proběhla přestavba šablony ServicePage, úpravy mobilní hlavičky (CTA, logo, odstranění spodní lišty) a sjednocení výšky ovládacích prvků. Změny commitnuty a pushnuty na GitHub.

**Zdroj popisu:** AI konverzace + git commity

### Provedené změny
#### Upgrade mobilního hamburger menu (P5-14)
**Co bylo uděláno:** Logo s tagline místo textu „Menu“, plochý accordion bez boxů, sticky CTA dole v menu a oprava šipek u vnořených sekcí Služeb (commit `e0be408`).  
**Proč:** Původní mobilní menu působilo genericky a špatně navigovalo ve vnořené struktuře služeb.

#### Status briefing a UX plán S7 — service pages
**Co bylo uděláno:** Příkaz `/status` shrnul stav projektu; následovala UX konzultace šablony služeb — diagnóza „dvojí mřížky karet“ (hero panel + decision panel) a chybějícího vizuálního rytmu. Sestaven a schválen plán S7: odstranit hero panel, decision sekce vertikálně, trust pruh, ikony u nadpisů, kategorie-specifická fotografie.  
**Proč:** Klient hlásil špatnou scanovatelnost stránek služeb — příliš textu v hero a matoucí dvousloupcový layout pod ním.

#### Sprint S7 — přestavba šablony služeb
**Co bylo uděláno:** Z hero odstraněn pravý panel „Typické důvody poptávky“ — zůstal H1, perex a 2 CTA v jednom sloupci. Pod hero přidán kompaktní trust pruh (akreditace, ISO, výstupy pro úřady). Sekce Co zajišťujeme / Co dostanete / Jak začít přeuspořádány vertikálně pod sebe v muted bloku, u každého nadpisu ikona. Nová komponenta `ServiceContextPhoto` pro tematickou fotografii dle kategorie služby.  
**Proč:** Vertikální flow zrychluje orientaci; ikony a střídání pozadí rozbíjí „wall of text“ bez mazání konverzního obsahu.

#### Umístění kontextové fotografie
**Co bylo uděláno:** Po kontrole klienta přesunuta horizontální fotografie z pozice hned pod hero na konec decision bloku — pod tři karty, před accordion a FAQ. Mírně snížena výška stripu.  
**Proč:** Dvě fotografie za sebou (hero + strip) působily redundantně; fotka lépe slouží jako přestávka před doplňujícím obsahem.

#### Copy a CTA v hlavičce
**Co bylo uděláno:** Globální text hlavního tlačítka sjednocen na **„Nezávazně poptat“** (copy sprint, schváleno klientem). Stejný text v desktopové hlavičce, mobilním tlačítku i mobilním menu.  
**Proč:** „Poptat službu“ bylo vágní; „Nezávazně poptat“ snižuje bariéru u B2B zákazníků a lépe sedí k formuláři na /kontakt.

#### Mobilní hlavička — logo a konverze
**Co bylo uděláno:** Na mobilu zobrazeno plné logo včetně textace „Měření · studie · dokumentace“ — wordmark centrovaný nad tagline. Odstraněna spodní sticky lišta „Zavolat / Poptávka“ (pill tlačítka mimo brand manual). CTA a hamburger zmenšeny, aby nepřebíjely logo; sjednocena výška obou prvků na 36 px (na úzkých displejích 34 px).  
**Proč:** Spodní lišta duplikovala hlavičkové CTA a vizuálně neseděla k designu (zaoblené pill, jiná barva). Příliš velké ovládací prvky v hlavičce potlačovaly identitu značky.

#### Commit a nasazení
**Co bylo uděláno:** Produktové změny commitnuty (`fc828fd`, `9ef9d3e`) a pushnuty na `origin/main`.  
**Proč:** Uzavření sprintu S7 a nasazení na Vercel preview/produkci.

### Časová náročnost
**Odhadovaná doba práce:** ~54 min
**Rozložení:** 31. 5. 2026 09:42–10:36 (~54 min)
**Metoda odhadu:** git
**Počet výměn s AI:** ~18 kol konverzace  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci.*

### Technická poznámka
`ServicePage.tsx`, `ServiceContextPhoto.tsx`, `globals.css`, `Footer.tsx`, `Header.tsx`, `cta.ts` — commity `fc828fd`, `9ef9d3e`.

---

## Sezení: 30. 5. 2026, 17:17–20:09

### Přehled
Večerní sprint navázal na Sprinty 11–12 (SEO, hero layout, responzivní menu) a pokračoval copy sprintem podle tone of voice. Zaveden příkaz `/copy`, dokončeny dávky C1–C2. Následovala UX revize a copy follow-up stránky O NATURCHEM — zjednodušení struktury, lidskější texty, redesign hlavního menu, oprava loga v hlavičce a sjednocení šířky sekcí.

**Zdroj popisu:** AI konverzace + git commity

### Provedené změny

#### UX revize stránky O NATURCHEM (follow-up)
**Co bylo uděláno:** Stránka O společnosti zjednodušena — pod hero trust lišta a kompaktní statistiky (jako na homepage) místo panelu „Odborná autorita". Odstraněny sekce Typičtí zákazníci a Jak probíhá zakázka; proces přesunut na stránku Typické zakázky. Zmenšeny vertikální mezery mezi bloky.  
**Proč:** Příliš mnoho důvěryhodnostních vrstev posouvalo klíčovou sekci „Kdo jsme" níže ve scrollu; popis průběhu zakázky patří spíš k nákupní cestě u typických scénářů.

#### Copy follow-up — hero a Kdo jsme
**Co bylo uděláno:** Přepsán hero lead — představení týmu a odborné garance Ing. Františka Heziny místo čistě výstupového textu. Sekce „Kdo jsme" začíná identitou firmy (NATURCHEM, s.r.o., působnost). Eyebrow „Akreditovaná měřicí a poradenská firma", aktualizováno SEO description.  
**Proč:** Klient potřeboval, aby stránka O nás nejdřív představila firmu a lidi, ne jen seznam služeb.

#### Menu a jednosloupcové Kdo jsme
**Co bylo uděláno:** UX konzultace a redesign hlavního menu — položka Odbornost sloučena do dropdownu O nás (O společnosti, Akreditace, Přístroje, Poradna, FAQ), zachovány top-level položky Služby, Provozy, Typické zakázky, Reference, Kontakt a tlačítko Poptat. Odstraněn tablet režim „Další", sjednoceno menu od 1024 px. Sekce Kdo jsme převedena z dvousloupcového layoutu na jeden sloupec; navigační odkazy přesunuty pod text s vizuálním oddělením.  
**Proč:** Menu se na běžných noteboocích (1366 px) nepřeplňovalo a skrývalo položky; dva sloupce v Kdo jsme matou pořadí čtení.

#### Oprava loga a tagline v hlavičce
**Co bylo uděláno:** Opraveno občasné zalamování tagline „Měření · studie · dokumentace" na dva řádky při zoomu nebo změně šířky okna — tagline má `white-space: nowrap`, logo blok se už nestahuje pod 210 px a grid hlavičky nechává logo sloupci přirozenou šířku.  
**Proč:** Po úpravách menu pro úzké displeje se logo vizuálně rozbíjelo; tagline musí být vždy na jednom řádku pod logem NATURCHEM.

#### Sjednocení šířky sekcí O společnosti
**Co bylo uděláno:** Sekce Kdo jsme, Odborná garance a Tým sdílejí stejnou šířku containeru jako statistiky nad nimi — odstraněno omezení 980 px u textu a karty garance.  
**Proč:** Užší bloky působily vizuálně rozhozeně a levé hrany sekcí neseděly.

#### Sprint 11 — SEO a prolinkování poradna ↔ služby
**Co bylo uděláno:** Proveden audit meta title/description na klíčových stránkách (dokument `05-seo/meta-audit-sprint11.md`). Přidáno obousměrné prolinkování: u každého článku poradny blok souvisejících služeb, u stránek služeb teaser souvisejících článků. Dokončena technická hygiena P4 — migrace stránky školení na šablonu ServicePage, FAQ teaser u ISPOP/GHG/chemických služeb, přesun checklistu „Nejste si jistí?" výše na indexu provozů.  
**Proč:** Lepší SEO a navigace mezi odborným obsahem a konverzními stránkami služeb; konzistentní struktura service pages.

#### Sprint 10 — homepage a dokumentace (doplnění večera)
**Co bylo uděláno:** Trust lišta hned pod hero, kompaktní statistiky bez duplicitního nadpisu, redukce vertikálních mezer (−50 %). Projektová dokumentace (`naturchem-projekt/`) zahrnuta do repozitáře.  
**Proč:** Posílení důvěry hned pod hero a sjednocení spacingu dle UX roadmapy.

#### Sprint 12 — hero layout a responzivní menu (doplnění večera)
**Co bylo uděláno:** Opravena regrese zarovnání — `.container` znovu centruje obsah. Hero pás na podstránkách začíná bez bílé mezery pod fixed hlavičkou. Sjednocena min-height hero (`standard` / `service` varianty). Původní tablet režim menu s dropdownem „Další" (P1-7) byl večer nahrazen finálním redesignem menu (viz výše).  
**Proč:** Klient hlásil nestabilní výšku hero a text u levého okraje monitoru; první iterace menu řešila překryv CTA, finální verze zredukovala počet položek v liště.

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
**Odhadovaná doba práce:** ~2 hod 52 min  
**Rozložení:** 30. 5. 2026 17:17–20:09 (~2 hod 52 min)  
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** ~35 kol konverzace  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci.*

### Technická poznámka
UX O společnosti: `o-spolecnosti-naturchem/page.tsx`, `typicke-zakazky/page.tsx`, `globals.css` — commity `9abb16a`, `4d0e23e`, `cebecfe`. Copy follow-up: `be3f7ef`. Menu a logo v hlavičce: `Header.tsx`, `navigation.ts`, `globals.css` — commity `4d0e23e`, `cebecfe`. Dříve večer: S11–S12, copy C1–C2 (`ebbae75`), `.agents/commands/copy.md`. Build prošel bez chyb.

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

## Sezení: 18. 5. 2026, ~19:00–21:00

### Přehled
Úvodní klientská schůzka před zahájením implementace — společné navnímání představ klienta o webu, projednání cílových skupin, struktury obsahu a způsobu spolupráce. Schůzka proběhla formou videohovoru / osobního setkání, bez práce v kódu; sloužila jako podklad pro následné strategické dokumenty a UX audit.

**Zdroj popisu:** poznámky ze schůzky s klientem

### Projednaná témata

#### Představení a rámec spolupráce
**Co bylo projednáno:** Stručné představení obou stran, očekávání od spolupráce a způsob komunikace (schůzky, zpětná vazba, schvalování změn). Dohodnuto, že web má primárně podporovat získávání poptávek od provozů a firem s environmentálními povinnostmi, ne sloužit jako katalog bez konverze.  
**Proč:** Sjednocení očekávání před vstupem do technické fáze — klient potřeboval vědět, jak bude probíhat iterace, a dodavatel získat mandát pro zjednodušení obsahu tam, kde původní web přebíral.

#### Firma, služby a diferenciace
**Co bylo projednáno:** Představení NATURCHEM jako akreditované měřicí a poradenské firmy — měření emisí, hluku, EIA, ISPOP, chemické služby, dokumentace pro úřady. Klient zdůraznil dlouholetou praxi (36+ let), akreditace, autorizaci Ing. Františka Heziny a komplexní pokrytí potřeb provozu „od měření po studii“.  
**Proč:** Bez sdíleného obrazu firmy nelze správně navrhnout hierarchii služeb ani důvěryhodnostní prvky — akreditace a odborná garance mají být viditelné, ne schované v patičce.

#### Současný web a důvody změny
**Co bylo projednáno:** Klient popsal stávající web jako obsahově bohatý, ale pro návštěvníka matoucí — příliš textu, nejasná navigace mezi službami, chybějící jasná cesta k poptávce. Cílem není „větší web“, ale přehlednější a důvěryhodnější prezentace s rychlejší orientací.  
**Proč:** Definice problému určila směr dalších sprintů — redukce redundance, sjednocení šablon služeb a posílení CTA místo dalšího rozšiřování obsahu.

#### Cílové skupiny a typické scénáře
**Co bylo projednáno:** Společně vytipovány hlavní persony: provozní manažer / technik provozu (řeší termíny a povinnosti), environmentální specialista ve firmě, projektant nebo investor u EIA, menší firma, která „neví, co přesně potřebuje“. Projednány typické vstupy na web — konkrétní služba, oblast (emise / hluk / chemie), nebo obecný dotaz přes kontakt.  
**Proč:** Persony a scénáře později promítnuty do struktury menu, stránky Typické zakázky a tone of voice — web má vést i nejistého návštěvníka, ne předpokládat odbornou znalost oboru.

#### Struktura webu a obsahové priority
**Co bylo projednáno:** Náčrt požadované struktury: homepage s přehledem nabídky, katalog služeb (s logickým členěním), O společnosti včetně týmu a odborné garance, akreditace a vybavení, reference, poradna, FAQ, kontakt. Klient preferoval méně top-level položek v menu a seskupení odborného obsahu pod „O nás“. Priorita obsahu: služby a důvěra (reference, akreditace) před rozšiřováním poradny.  
**Proč:** První verze sitemap a navigační logiky vzešla z této schůzky — pozdější sloučení položek menu a redesign dropdownů navazovaly na dohodnutý princip „nejdřív orientace, pak detail“.

#### Vizuální směr a tón komunikace
**Co bylo projednáno:** Klient chce působit odborně, ale srozumitelně — ne suchý úřední jazyk, ale ani marketingové superlativy. Barvy a logo vycházejí ze stávající identity NATURCHEM; fotografie zatím spíše obecné (provoz, měření, dokumentace), reálné fotky týmu a zakázek dodá klient postupně. Důraz na čitelnost, zejména na mobilech.  
**Proč:** Zadání pro tone of voice a brand manuál — copy sprinty C1–C2 později explicitně přepisovaly texty z „katalogového“ stylu do zákaznicky orientovaného jazyka.

#### Materiály, termíny a další kroky
**Co bylo projednáno:** Klient poskytne seznam referencí a log zákazníků, podklady k akreditacím a autorizacím, texty k týmu a případně upřesnění u vybraných služeb. Dohodnuto, že nejdřív proběhne technický průzkum stávajícího webu a UX audit, teprve potom implementační sprinty. Orientační horizont: iterativní vylepšování po blocích, ne jednorázový redesign „na slepo“.  
**Proč:** Realistický plán — bez auditu by se opakovaly chyby starého webu; klient věděl, jaké podklady má připravit, než se spustí copy a reference.

### Výstupy schůzky
- Sdílená představa o účelu webu (poptávky + důvěra, ne jen brožura)
- První návrh obsahové struktury a priorit sekcí
- Vytipované cílové skupiny a typické nákupní cesty
- Zadání pro tone of voice a vizuální směr
- Seznam podkladů, které klient dodá do další fáze

### Časová náročnost
**Odhadovaná doba práce:** ~2 hodiny  
**Rozložení:** 18. 5. 2026, cca 14:00–16:00 (~2 hod)  
**Metoda odhadu:** manuální odhad (klientská schůzka)  
**Počet výměn s AI:** —  
*Poznámka: schůzka proběhla mimo vývojové prostředí; zápis slouží jako kontext pro následné sezení 25.–26. 5.*

---

## Sezení: 25.–26. 5. 2026

### Přehled
Zahajovací implementační sezení zaměřené na přípravu projektu — stažení a zprovoznění klientovy pracovní verze webu, průzkum existujícího kódu a obsahu a provedení UX auditu jako základ pro další sprinty. Navazuje na úvodní klientskou schůzku z 18. 5.

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
