# Report prací — naturchem.cz

## Přehled projektu
| Položka | Hodnota |
|---|---|
| Projekt | naturchem.cz |
| Zahájení spolupráce | 25. 5. 2026 |
| Počet sezení celkem | 47 |
| Celkový odhadovaný čas | ~38,3 hodiny |
| Aktuální fáze | Tým a fotografie — sekce /o-spolecnosti-naturchem |

*Poznámka: ke každému sezení se k odhadu přičítá +5 min před začátkem (tvorba prvního zadání) a +5 min po konci kvůli testu nasazené úpravy (`report-config.json`). Do reportu se započítávají jen commity Martina (`Zluti`, `zluti90@gmail.com`); práce Fandy (`Ikaros27`) a reportové commity se nepočítají.*

---

## Sezení: 24. 6. 2026, 23:44–00:02

### Přehled
Automaticky založené sezení po commitu `7174c4f`.

**Zdroj popisu:** Git commit (automatická synchronizace)

### Provedené změny
#### Fix mobile hero clipping, full CTA text, remove service counts on /sl...
**Co bylo uděláno:** Fix mobile hero clipping, full CTA text, remove service counts on /sluzby. (commit `7e9ca0f`). Dotcene oblasti: app, components, report, workflow.  
**Proč:** Oprava zarovnani a rozlozeni hero sekce - konzistentni prvni dojem a lepsi citelnost na vsech zarizenich.

#### Fix mobile header overlap and hero spacing; unify breakpoints to 768/...
**Co bylo uděláno:** Fix mobile header overlap and hero spacing; unify breakpoints to 768/1024. (commit `7174c4f`). Dotcene oblasti: app, components, cs.json, de.json, en.json.  
**Proč:** Oprava zarovnani a rozlozeni hero sekce - konzistentni prvni dojem a lepsi citelnost na vsech zarizenich.

### Časová náročnost
**Odhadovaná doba práce:** ~18 min
**Rozložení:** 24. 6. 2026 23:44–00:02 (~18 min)
**Metoda odhadu:** git
**Počet výměn s AI:** —  
*Poznámka: automatický záznam z post-commit hooku.*

### Technická poznámka
Commit: `7174c4f94a7b45b504e6ee91fab07b71626dd2bf`

---

## Sezení: 24. 6. 2026, 22:44-22:54

### Přehled
Automaticky založené sezení po commitu `f95744f`.

**Zdroj popisu:** Git commit (automatická synchronizace)

### Provedené změny
#### fix: Decap CMS repo path after GitHub transfer to Ikaros277
**Co bylo uděláno:** fix: Decap CMS repo path after GitHub transfer to Ikaros277 (commit `f95744f`). Dotcene oblasti: config.yml.  
**Proč:** Technicka nebo vizualni oprava - stabilnejsi a srozumitelnejsi web pro navstevniky.

### Časová náročnost
**Odhadovaná doba práce:** ~10 min  
**Rozložení:** 24. 6. 2026 22:44-22:54 (~10 min)  
**Metoda odhadu:** git  
**Počet výměn s AI:** —  
*Poznámka: automatický záznam z post-commit hooku.*

### Technická poznámka
Commit: `f95744fecd275439387a0fb72d702494b4f3444c`

---

## Sezení: 16. 6. 2026, 09:46–10:40

### Přehled
Sekce Tým na stránce `/o-spolecnosti-naturchem` dostala fotografie všech tří členů, kontaktní údaje a upravenou strukturu kartiček. Souběžně opraveny dva vizuální bugy — spodní border u gridových karet a zelená linka CTA pásu těsně pod týmem.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Fotografie členů týmu
**Co bylo uděláno:** Do složky `public/team/` přidány tři portréty (Hezina, Žilková, Svátová). Datová struktura `TeamMember` rozšířena o volitelné pole `photo`. Komponenta `TeamCard` zobrazuje fotografii v kruhovém avataru místo iniciál, pokud je fotka k dispozici; jinak zůstávají iniciály jako záloha.  
**Proč:** Kartičky týmu zobrazovaly jen iniciály — přidání fotek zvyšuje důvěryhodnost a osobní charakter prezentace firmy.

#### Zvětšení avataru ze 56 na 80px
**Co bylo uděláno:** CSS třída `.team-card-avatar` upravena z `width/height: 56px` na `80px`, velikost písma iniciál zvýšena z `1rem` na `1.2rem`.  
**Proč:** Původní velikost 56px byla v kontextu karty těžko viditelná — fotka na 56px nevypadala jako fotografie.

#### Kontaktní údaje v kartičkách týmu
**Co bylo uděláno:** Do `TeamMember` přidána pole `phones?: string[]` a `email?: string`. Každý člen doplněn o telefony a e-mail. Komponenta `TeamCard` vykresluje kontakty jako klikatelné odkazy (`tel:` / `mailto:`).  
**Proč:** Návštěvník na stránce O společnosti hledá konkrétní osobu a chce hned vidět, kam zavolat nebo napsat — dosud musel přejít na `/kontakt`.

#### Přestrukturování kartiček: jméno → role → kontakty → popis
**Co bylo uděláno:** Pořadí prvků v kartičce změněno tak, aby kontakty byly přímo za rolí, popis osoby až pod nimi. Role Ing. Heziny zkrácena z původní delší varianty na „Jednatel společnosti".  
**Proč:** Původní rozložení s popisem před kontakty vypadalo nelogicky — primárním cílem návštěvníka je kontakt, ne životopis.

#### Oprava vizuálního bugu — spodní border u gridových karet
**Co bylo uděláno:** Do CSS přidáno `border-bottom-width: 0` pro `.team-card` i `.sector-card`. Vizuální ohraničení spodní části karty zůstává zachováno přes `box-shadow`.  
**Proč:** Kartičky v CSS gridu se roztahují na stejnou výšku (`align-items: stretch`), čímž se jejich spodní bordery seřadily do jedné vizuální horizontální linky přes celou šířku řady. Nebylo to záměrné, ale výsledek vypadal jako chyba grafiky.

#### Oprava mezery mezi kartami týmu a CTA pásem
**Co bylo uděláno:** Na `.team-member-cards` přidán `margin-bottom: var(--section-padding-y)`.  
**Proč:** CSS pravidlo `section.content-block:has(+ .container)` ruší `padding-bottom` sekci, za níž bezprostředně následuje `.container`. `PageCtaStrip` má `border-top: 3px solid var(--forest)` — po zrušení paddingu se tento zelený border zobrazil těsně pod kartami týmu. `margin-bottom` na vnitřním prvku gridu přežije kolaps vnějšího paddingu a zachová správnou mezeru.

### Časová náročnost
**Odhadovaná doba práce:** ~54 min  
**Rozložení:** 16. 6. 2026 09:46–10:40 (~54 min)  
**Metoda odhadu:** git  
**Počet výměn s AI:** ~10  

### Technická poznámka
Dotčené soubory: `src/lib/team.ts`, `src/components/TeamSection.tsx`, `src/app/globals.css`, `public/team/` (3 fotografie).

---

## Sezení: 15. 6. 2026, 21:28–21:44

### Přehled
UX audit sekundárního tlačítka „Jaké podklady poslat“ na stránkách služeb: label sliboval seznam podkladů, ale vedl na kontaktní formulář stejně jako primární CTA — přitom seznam je už v buňce „Jak začít“. Tlačítko odstraněno ze sdílené šablony, tedy na všech ~24 service pages najednou.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Odstranění matoucího CTA na service pages
**Co bylo uděláno:** Ze sekce „Stručně o službě“ odstraněno sekundární tlačítko „Jaké podklady poslat“, které odkazovalo na `/kontakt#podklady` (neexistující kotva, bez předvyplněné služby). Zůstává jedno primární CTA v panelu (desktop) nebo v buňce „Jak začít“ (mobil) a spodní `PageCtaStrip`. Seznam podkladů zůstává v buňce „Jak začít“. Commit `c57bd3e`, push na `main`.  
**Proč:** Dva formulářové CTA vedle sebe matou návštěvníka; sekundární label evokoval informační obsah, který stránka už zobrazuje — zbytečná duplicita a špatná affordance.

### Časová náročnost
**Odhadovaná doba práce:** ~19 min  
**Rozložení:** 15. 6. 2026 21:28–21:44 (~19 min)  
**Metoda odhadu:** výměny  
**Počet výměn s AI:** 3  
*Poznámka: samostatný blok konverzace (UX audit + implementace); čas odhadnut jako 3 výměny × 3 min + padding 5 min před/po (`report-config.json`).*

### Technická poznámka
Commit: `c57bd3e`. Dotčený soubor: `src/components/ServicePage.tsx` (sdílená šablona pro všechny stránky služeb včetně `DedicatedServiceRoute`).

---

## Sezení: 15. 6. 2026, 21:08–21:37

### Přehled
Nasazeno deset nových hero fotografií pro obecné stránky a rozcestníky webu (služby, reference, kontakt, poradna aj.). Po analýze skrytých služeb v navigaci doplněno megamenu o imisní dopady a povolení provozu včetně zkrácených URL redirectů; popisek imisních dopadů zkrácen kvůli délce v menu. Aktualizován klientský checklist — zbývá 13 povinných fotek (3 služby + 10 detailních provozů).

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Hero fotky pro rozcestníky a obecné stránky
**Co bylo uděláno:** Z podkladů `Podklady/WEBP` (nové soubory ze 15. 6.) zkopírováno 10 WEBP do `public/hero/` a namapováno v `hero-images.ts` na: `/sluzby`, `/reference`, `/o-spolecnosti-naturchem`, `/kontakt`, `/akreditace-autorizace-dokumenty`, `/pristrojove-vybaveni`, `/poradna`, `/faq`, `/typicke-zakazky`, `/provozy-a-technologie`. Místo generických placeholderů se na těchto stránkách zobrazují tematické fotky. Commit `e3ca066`, push na `main`.  
**Proč:** Klient dodal chybějící podklady pro hero sekce obecných stránek; dosud měly jen 4 sdílené placeholder fotky.

#### Analýza navigace skrytých služeb
**Co bylo uděláno:** Porovnány tři služby mimo megamenu — imisní dopady, povolení provozu a technické přílohy — včetně vztahu povolení provozu k EIA. Doporučeno zařadit do menu imisní dopady a povolení provozu; technické přílohy ponechat jen na přehledu služeb a v EIA clusteru.  
**Proč:** Klient hlásil stránky, na které nejde prokliknout z menu; bylo potřeba rozlišit skrytou navigaci od chybějící stránky a vyhnout se duplicitě s EIA.

#### Megamenu — imisní dopady a povolení provozu
**Co bylo uděláno:** Do megamenu služeb přidány položky Imisní a hlukové dopady a Povolení provozu zdroje. V `redirects.ts` nastaveny zkrácené cesty (`/imisni-dopady`, `/povoleni-provozu`, `/technicke-prilohy`) na kanonické URL pod `/sluzby/`. Popisek imisních dopadů v menu zkrácen na „Imisní a hlukové dopady“ (bez slova „záměrů“). Commity `35fa463`, push na `main`.  
**Proč:** Stránky existovaly, ale nebyly snadno dohledatelné z navigace; klient testoval URL bez prefixu `/sluzby/` a dlouhý popisek v megamenu přetékal layout.

#### Aktualizace checklistu pro klienta
**Co bylo uděláno:** Soubor `Podklady/chybejici-fotografie.md` zkrácen — sekce obecných stránek přesunuta do „hotovo“. Zbývá 3 služby bez fotky, 10 detailních stránek provozů a volitelně 6 druhých fotek u služeb.  
**Proč:** Klient potřebuje aktuální seznam k dalšímu kolu dodávky materiálů.

### Časová náročnost
**Odhadovaná doba práce:** ~28 min  
**Rozložení:** 15. 6. 2026 21:08–21:37 (~28 min)  
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** 6  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci (`sessionPaddingMinutesBefore` / `After` v `report-config.json`).*

### Technická poznámka
Commity: `e3ca066`, `35fa463`. Dotčené soubory: `src/lib/hero-images.ts`, `src/lib/service-megamenu.ts`, `src/lib/redirects.ts`, `public/hero/*.webp` (10 nových), `Podklady/chybejici-fotografie.md`.

---

## Sezení: 14. 6. 2026, 19:16–19:37

### Přehled
Kontrola dokumentu `chybejici-fotografie.md` oproti skutečné struktuře webu: ověřeno, které uvedené stránky existují, které nejdou snadno prokliknout z menu a kde klient testuje špatnou URL (např. `/imisni-dopady` místo `/sluzby/imisni-dopady`). Navrženy úpravy dokumentu, megamenu a redirectů.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Revize checklistu chybějících fotografií
**Co bylo uděláno:** Projity všechny URL v dokumentu pro klienta a porovnány s routami webu, megamenu Služby, rozcestníkem `/sluzby` a přesměrováními ze starých adres. Potvrzeno, že stránky v dokumentu reálně existují — problém není ve falešných URL, ale v navigaci a zkrácených adresách.  
**Proč:** Klient hlásil, že na některé položky ze seznamu (např. imisní dopady) nejde „prokliknout“ — bylo potřeba oddělit chybějící stránku od špatné cesty nebo skryté položky v menu.

#### Imisní dopady, povolení provozu, technické přílohy — dostupnost
**Co bylo uděláno:** U tří služeb z checklistu zjištěno: stránka funguje na `/sluzby/…`, je v akordeonu na `/sluzby`, ale chybí v megamenu hlavičky; zkrácená URL `/imisni-dopady` (bez `/sluzby/`) vrací 404 — na rozdíl od jiných služeb nemá redirect. Stejný stav u `/povoleni-provozu` a `/technicke-prilohy` (fungují jen delší aliasy ze starého webu).  
**Proč:** Bez vysvětlení by klient v dokumentu nebo v prohlížeči testoval neexistující adresu a usoudil, že fotka je pro neexistující stránku.

#### Další stránky se skrytou navigací
**Co bylo uděláno:** Identifikovány i služby mimo checklist s podobným problémem: `/sluzby/zjistovaci-rizeni-eia` (jen `/sluzby`, ne megamenu) a `/sluzby/eia-posudky-poradenstvi` (ani v indexu služeb — jen odkaz z homepage a referencí). Provozy a obecné stránky z dokumentu jsou proklikatelné z menu.  
**Proč:** Kompletní přehled pro rozhodnutí, zda upravit dokument, megamenu, nebo redirecty před dalším kolem dodávky fotek.

#### Doporučené další kroky (bez implementace v tomto bloku)
**Co bylo uděláno:** Navrženy čtyři varianty: upravit dokument pro klienta (plné URL + poznámka k navigaci), doplnit položky do megamenu, přidat redirecty ze zkrácených adres, případně zařadit EIA rozcestník do indexu služeb.  
**Proč:** Klient potřebuje jednoznačný seznam k dodání fotek; současně musí být jasné, kam se fotka na webu zobrazí a jak se na stránku dostane návštěvník.

### Časová náročnost
**Odhadovaná doba práce:** ~21 min  
**Rozložení:** 14. 6. 2026 19:16–19:37 (~21 min)  
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** 2  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci (`sessionPaddingMinutesBefore` / `After` v `report-config.json`).*

### Technická poznámka
Bez produktových commitů. Kontrolované soubory: `service-megamenu.ts`, `service-groups.ts`, `redirects.ts`, `Podklady/chybejici-fotografie.md`.

---

## Sezení: 14. 6. 2026, 17:54–18:36

### Přehled
Vyšetřena a opravena redakce poradny (`/admin`): úpravy článků se po Publish neprojevovaly na webu, protože Decap CMS zapisoval do jiného GitHub repozitáře než ten, ze kterého Vercel web nasazuje. Srovnána konfigurace, doplněn klientský provozní návod, do editoru přidána pole **Téma** a **Úvodní obrázek** a ověřeno, že Publish nyní vytváří commity do správného repa.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Diagnostika — proč se článek na webu lišil od editoru
**Co bylo uděláno:** Porovnán obsah článku o odborném posudku na produkci, v administraci a v souboru `content/articles/` v GitHubu. Zjištěno, že web zobrazuje poslední verzi z repozitáře `Zluti/naturchem-web`, zatímco CMS bylo nastavené na `Ikaros277/naturchem-web` (původní konfigurace od klienta). Vysvětlen workflow: Publish → commit → automatický deploy Vercelu (~1–3 min); přístup klienta do Vercelu není potřeba, stačí write oprávnění na GitHub.  
**Proč:** Klient přepisoval články v `/admin`, ale změny se na `www.naturchem.cz` neobjevovaly — působilo to jako chyba webu, ve skutečnosti se ukládalo jinam nebo vůbec necommitovalo.

#### Oprava Decap CMS — správné GitHub repo
**Co bylo uděláno:** V `public/admin/config.yml` a `public/config.yml` změněno repo na `Zluti/naturchem-web` (stejné jako Vercel deploy). Doplněn provozní návod `naturchem-projekt/PROVOZ-ADMIN-CMS.md` a aktualizován checklist předání klientovi. Commit `d5d9487`, nasazeno na produkci.  
**Proč:** Bez shody repo ↔ Vercel nemůže Publish automaticky publikovat obsah na live web.

#### Ověření Publish a přístupů
**Co bylo uděláno:** Po opravě configu ověřeno v Network panelu, že Publish vytváří commit do `Zluti/naturchem-web` (např. úprava článku automotive — commity `883570a`, `751a1ba`). Doporučeno přidat klienta (`Ikaros277`) jako collaboratora na GitHubu; vysvětleno, že pozvánka jde podle GitHub username, ne firemního e-mailu.  
**Proč:** Po srovnání repa musel klient znovu Publishnout články a mít write přístup — jinak CMS commit selže.

#### Poradna — úvodní obrázek a téma v CMS editoru
**Co bylo uděláno:** Do Decap CMS přidána pole **Téma** (select) a **Úvodní obrázek** (upload do `public/uploads`). Web načítá `heroImage` z frontmatter a zobrazí ho v hero pruhu detailu článku i v náhledu karty na `/poradna` a homepage; bez vlastního obrázku zůstává stock fotka podle mapování. Pole **Téma** zabrání tomu, aby Publish smazal existující metadata, která dřív v configu chyběla. Commit `6c98a88`.  
**Proč:** V editoru chyběla možnost nahrát úvodní fotku; Decap ukládá jen pole definovaná v configu — chybějící `topic` mohlo při Publish poškodit frontmatter článků.

#### Provozní vysvětlení — deploy po každém článku
**Co bylo uděláno:** Vysvětleno, že u současné architektury (Markdown v gitu + statický build Next.js) je po každém Publish nutný automatický deploy Vercelu (~1–3 min) — klient nic nespouští ručně. Alternativy bez deploye by vyžadovaly jiný obsahový backend (DB, headless CMS).  
**Proč:** Očekávání okamžité změny na webu bez prodlevy; u git-based CMS je krátké čekání na deploy normální.

### Časová náročnost
**Odhadovaná doba práce:** ~42 min  
**Rozložení:** 14. 6. 2026 17:54–18:36 (~42 min)  
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** 7  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci (`sessionPaddingMinutesBefore` / `After` v `report-config.json`).*

### Technická poznámka
Commity: `d5d9487`, `883570a`, `751a1ba`, `6c98a88`. Dotčené oblasti: `public/admin/config.yml`, `PROVOZ-ADMIN-CMS.md`, `src/lib/articles.ts`, hero/karty poradny, testovací úprava článku automotive přes CMS.

---

## Sezení: 12. 6. 2026, 12:06–13:04

### Přehled
Odpolední blok spojil čtyři oblasti: UX audit přehlednosti karet na rozcestnících (forest lišta), sekci „Aktuální odborné články“ na homepage, sjednocení mobilního layoutu poradny a nahrazení opakujících se generických náhledů u článků tematickými fotografiemi podle obsahu každého textu.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Poradna — jedinečné náhledové fotky u článků
**Co bylo uděláno:** U všech 33 článků v poradně byly nahrazeny opakující se generické fotky (zejména stejný záběr nákladních aut u tématu Emise) individuálním mapováním podle slugu článku. Doplněno 13 nových tematických fotek (měření ovzduší, kotelna, dieselagregát, automotive, recyklace, HVAC, dokumenty aj.) a využity existující fotky ze stránek služeb tam, kde tematicky sedí. Změna platí na přehledu `/poradna`, na detailu článku i v sekci na homepage. Commit `08950c4`.  
**Proč:** Přehled článků působil vizuálně monotónně a nereflektoval obsah jednotlivých textů — u odborné poradny to snižovalo důvěryhodnost a přehlednost.

#### UX audit — přehlednost karet na /sluzby
**Co bylo uděláno:** Proveden UX audit rozbalených skupin služeb (zejména mobil 375 px): diagnostika, že vnitřní karty po rozbalení accordionu vizuálně splývají, zatímco nadřazená skupina už měla forest lištu. Navržen sitewide vzor přes existující třídu `institutional-card` a mapování sdílených CSS selektorů pro /provozy-a-technologie, /typické zakázky, /reference, /o-spolecnosti-naturchem a /akreditace-autorizace-dokumenty.  
**Proč:** Návštěvník se v dlouhém seznamu podobných bílých boxů ztrácel; rychlé skenování bez „ztracení místa“ ve scrollu je klíčové na mobilu i u B2B rozcestníků.

#### Forest lišta na navigačních kartách (sitewide CSS)
**Co bylo uděláno:** V `globals.css` rozšířen blok navigačních karet o 3px forest lištu nahoře: vnitřní karty v accordionu (služby, provozy, reference), karty typických zakázek a kategorií příkladů, scope/autorizace/download karty na akreditaci, karty týmu na O společnosti. Při rozbalení accordionu dostala mřížka jemné `--forest-tint` pozadí a na mobilu větší mezery mezi kartami. Hover provozních karet sjednocen s forest paletou. Commit `8a33464`.  
**Proč:** Stejný vizuální jazyk jako homepage — bez úprav markupu na jednotlivých stránkách, jedním CSS pravidlem pro všechny rozcestníky.

#### Homepage — sekce Aktuální odborné články
**Co bylo uděláno:** Po UX konzultaci (/ux) vznikla nová sekce před logy zákazníků se třemi nejnovějšími články z poradny. Desktop: plná šířka kontejneru, tři karty s náhledovými fotkami (stejný vzor jako index poradny). Mobil: kompaktní řádek — náhled vlevo (1/3), text vpravo (2/3), mezera mezi obrázkem a obsahem. Nadpis „Aktuální odborné články“, tlačítko „Všechny odborné články“ pod kartami (desktop vlevo, mobil na střed). CTA na kartách: „Přečíst článek“. Commit `4296969`.  
**Proč:** Web potřeboval živý obsahový most mezi službami a poradnou — informovat o novinkách bez přetížení homepage plnou sekcí, která byla dříve záměrně odstraněna (P3-8).

#### Poradna — sjednocení mobilních karet
**Co bylo uděláno:** Stejný kompaktní mobilní layout (`article-card--mobile-row`) nasazen na seznam všech článků na `/poradna` — místo vysokých karet s velkým náhledem nahoře. Textace odkazu sjednocena na „Přečíst článek“. Commit `5b5b50e`.  
**Proč:** Na mobilu byly karty na poradně nepřehledné (příliš velké fotky, málo textu na první pohled); stejné řešení jako na homepage zrychluje skenování dlouhého seznamu 33+ článků.

### Časová náročnost
**Odhadovaná doba práce:** ~59 min  
**Rozložení:** 12. 6. 2026 12:06–13:04 (~59 min)  
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** 14  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci (`sessionPaddingMinutesBefore` / `After` v `report-config.json`).*

### Technická poznámka
Commity: `8a33464`, `4296969`, `5b5b50e`, `08950c4`. Nové soubory: `HomePoradnaStrip.tsx`, `poradna-hero-images.ts`, `public/hero/poradna/*`. Úpravy: `PoradnaFilterableList.tsx`, `hero-images.ts`, `globals.css`.

---

## Sezení: 12. 6. 2026, 10:45–11:34

### Přehled
Doplnění tematických fotografií do hero sekcí a přehledových bloků na stránkách služeb z dodaných WEBP podkladů. U kategorií typických zakázek se znovu využily fotky navázaných služeb; pro klienta vznikl přehled chybějících motivů k dodání.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Hero fotky služeb a homepage
**Co bylo uděláno:** Z podkladů ve složce `Podklady/WEBP` bylo 35 fotek zkopírováno do `public/hero/` a namapováno na 22 služeb a 3 pilíře homepage (Měření, Studie, EIA). U služeb s více variantami se v hero a v přehledové sekci na stránce zobrazují různé záběry. Stránky bez vlastního podkladu (3 služby, provozy, obecné stránky) zůstaly u generických placeholderů. Commity `2e6fc90`, push na `main`.  
**Proč:** Web měl u většiny stránek jen čtyři generické placeholder fotky; klient dodal tematické snímky podle činností a bylo potřeba je zapojit do hero i do vizuálního přehledu u služeb.

#### Typické zakázky — sdílení fotek se službami
**Co bylo uděláno:** Osm kategorií na `/typicke-zakazky/…` bylo napojeno na existující fotky příslušných služeb (přímý slug nebo alias, např. hygienická měření → pracovní prostředí, EIA → dokumentace EIA). Není třeba dodávat samostatné fotky pro tyto kategorie. Commit `a2524fa`.  
**Proč:** Kategorie typických zakázek tematicky odpovídají existujícím službám; duplicitní podklady by pro klienta zbytečně zvyšovaly rozsah dodávky.

#### Checklist chybějících fotografií pro klienta
**Co bylo uděláno:** Vytvořen soubor `Podklady/chybejici-fotografie.md` — tabulkový přehled 23 stránek, kde ještě chybí vlastní fotka, plus 6 služeb s volitelnou druhou fotkou (včetně poznámky, že přehledová fotka může být na výšku). Commit `8879e1e`.  
**Proč:** Klient potřebuje jednoznačný seznam k doplnění zbývajících podkladů (provozy, obecné stránky, 3 chybějící služby) pro předání a doplnění do Wordu.

### Časová náročnost
**Odhadovaná doba práce:** ~49 min  
**Rozložení:** 12. 6. 2026 10:45–11:34 (~49 min)  
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** 7  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci (`sessionPaddingMinutesBefore` / `After` v `report-config.json`).*

### Technická poznámka
Commity: `2e6fc90` (hero WEBP + mapování), `a2524fa` (typické zakázky), `8879e1e` (checklist). Klíčové soubory: `src/lib/hero-images.ts`, `ServiceContextPhoto.tsx`, `home-hero-pillars.ts`, `public/hero/*.webp`.

---

## Sezení: 10. 6. 2026, 21:49–22:12

### Přehled
Po předchozí optimalizaci PageSpeed (skóre ~76, LCP ~5,2 s) byla homepage hero sekce rozdělena na server a client část, aby úvodní fotka a text byly v prvním HTML bez čekání na JavaScript. Změna byla nasazena na produkci; při deployi na Vercel se build zasekl ve frontě, po zrušení byl spuštěn znovu.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Server-side hero pro rychlejší LCP
**Co bylo uděláno:** Hero na homepage rozděleno na dvě části: `HomeHeroSection` (server) renderuje nadpis H1, úvodní odstavec a prioritní úvodní fotku přímo v HTML; `HomeHeroShell` (client island) obsluhuje pill chipy (Měření / Studie / EIA), autoplay rotaci a výměnu fotek. U priority fotky snížena kvalita JPEG (`quality=70`) pro menší datový objem na mobilu. Commit `05883a3`, push na `main`.  
**Proč:** PageSpeed Insights ukazoval LCP ~5,2 s — hlavní brzda byla úvodní hero fotka renderovaná až po načtení a hydrataci client komponenty. Server-side render má fotku v prvním HTML s `fetchpriority=high` a preloadem.

#### Vercel deploy — zaseklá fronta
**Co bylo uděláno:** Po pushi commit `05883a3` zůstal deploy ve stavu Queued bez postupu. Diagnostika: produkce stále běžela na starším commitu (`fc99e3a`), globální stav Vercelu byl v pořádku — typicky zaseklý build slot nebo zrušený deploy ve frontě. Doporučen postup: Cancel u visícího deploye, Redeploy nebo nový trigger. Po zrušení uživatelem byl odeslán commit `1c0a015` pro znovuspuštění webhooku.  
**Proč:** Bez úspěšného deploye by optimalizace LCP nebyla na produkci viditelná.

### Časová náročnost
**Odhadovaná doba práce:** ~23 min  
**Rozložení:** 10. 6. 2026 21:49–22:12 (~23 min)  
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** 5  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci (`sessionPaddingMinutesBefore` / `After` v `report-config.json`).*

### Technická poznámka
Commity: `05883a3` (hero refactor), `1c0a015` (retrigger deploy). Nové soubory: `HomeHeroShell.tsx`. Upraveno: `HomeHeroSection.tsx`, `HeroPhoto.tsx`.

---

## Sezení: 10. 6. 2026, 17:39–21:02

### Přehled
Doplnění launch checklistu po nasazení: diagnostika apex domény `naturchem.cz` (konfliktní starý A záznam u Forpsi), ověření produkčního `robots.txt` a `sitemap.xml`, shrnutí zbývajících kroků po spuštění webu.

**Zdroj popisu:** AI konverzace

### Provedené změny
#### Perf: mobiln├ş LCP hero + optimalizace log referenc├ş, SEO redirecty ...
**Co bylo uděláno:** Perf: mobiln├ş LCP hero + optimalizace log referenc├ş, SEO redirecty ze star├ęho webu (commit `fc99e3a`). Dotcene oblasti: app, components, lib, package.json.  
**Proč:** Prubezna uprava webu naturchem.cz v ramci dohodnutych UX a obsahovych ukolu.


#### Apex doména naturchem.cz — DNS u Forpsi
**Co bylo uděláno:** Vysvětleno, proč Vercel hlásil Invalid Configuration: u apex zůstal starý A záznam `81.2.194.244` (Forpsi hosting) vedle nového Vercel A (`216.198.79.1`). Postup: smazat starý záznam, nechat jen Vercel IP. Popis ověření (nslookup, Vercel Domains, redirect na www). Po úpravě DNS apex míří na Vercel a přesměrovává na `www`.  
**Proč:** Dva A záznamy způsobovaly, že část návštěvníků viděla starý web; Vercel nemohl doménu plně ověřit.

#### Post-launch kontrola (robots.txt, sitemap)
**Co bylo uděláno:** Ověřeno na produkci — `robots.txt` dostupný, blokuje `/admin/` a `/api/`, obsahuje odkaz na sitemap. `sitemap.xml` vrací HTTP 200.  
**Proč:** Kontrola, že crawlery a Search Console mají správné instrukce pro indexaci nového webu.

### Časová náročnost
**Odhadovaná doba práce:** ~3 hod 23 min
**Rozložení:** 10. 6. 2026 17:39–21:02 (~3 hod 23 min)
**Metoda odhadu:** git
**Počet výměn s AI:** 3  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci (`sessionPaddingMinutesBefore` / `After` v `report-config.json`).*

### Technická poznámka
Produkční `robots.txt` generuje `src/app/robots.ts`. Apex DNS ověřeno: `naturchem.cz` → `216.198.79.1`, redirect 308 na `www`.

---

## Sezení: 10. 6. 2026, 15:21–17:18

### Přehled
Produkční launch webu na `www.naturchem.cz`: napojení domény (DNS u Forpsi → Vercel), Resend, oprava přihlášení do redakce `/admin`, nastavení GA4 a ověření Search Console. Část konfigurace (DNS záznamy, env ve Vercelu, GA4 stream) proběhla mimo Cursor; v repozitáři byl nasazen fix Decap CMS pro produkční URL.

**Zdroj popisu:** AI konverzace + git commit

### Provedené změny

#### Launch — doména a DNS (Forpsi → Vercel)
**Co bylo uděláno:** Průvodce pořadím kroků pro launch. U Forpsi řešeno nahrazení starého A záznamu u `www` novým CNAME na Vercel (`5b4007b8477bd037.vercel-dns-017.com`), úprava apex A záznamu (prázdný hostname, ne `@`) a zachování mailových CNAME. Ověřeno, že `www.naturchem.cz` běží na Vercelu; apex `naturchem.cz` čeká na propagaci DNS.  
**Proč:** Bez správných DNS záznamů by produkční doména neukazovala nový web na Vercelu a launch by nebyl dokončený.

#### Resend a produkční env (mimo Cursor)
**Co bylo uděláno:** Fáze 2 dokončena — ověřená doména v Resend, env proměnné ve Vercelu, kontaktní formulář na produkci.  
**Proč:** Poptávky z webu musí chodit z ověřené domény na firemní e-mail.

#### GitHub OAuth a redakce `/admin`
**Co bylo uděláno:** Diagnostika nefunkčního přihlášení — produkční `config.yml` měl `base_url` na staging (`web-naturchem.vercel.app`), OAuth tedy běžel na jiné doméně než `www.naturchem.cz`. Commit a deploy: `base_url` změněn na `https://www.naturchem.cz` v `public/admin/config.yml` a `public/config.yml`. Vysvětleno, že OAuth secret se kvůli změně domény nemění a ve Vercelu ho zpětně nevidíte.  
**Proč:** Bez správné `base_url` Decap CMS nemohl dokončit GitHub OAuth handshake a klient by nemohl editovat články v poradně.

#### Google Analytics 4
**Co bylo uděláno:** Postup v českém rozhraní GA4 (Administrátor → Datové streamy → Web), použití existující property klienta, doplnění `NEXT_PUBLIC_GA_MEASUREMENT_ID` ve Vercelu, redeploy. Sběr dat ověřen v Realtime po souhlasu se statistickými cookies.  
**Proč:** Měření návštěvnosti na novém webu s respektováním cookie souhlasu (Consent Mode v2).

#### Google Search Console
**Co bylo uděláno:** Ověřeno, že existující propojení GA4 ↔ GSC (doména `naturchem.cz`, od 3/2023) zůstává platné — není potřeba přelinkovávat. Doporučeno odeslat sitemap `https://www.naturchem.cz/sitemap.xml` a požádat o indexaci homepage.  
**Proč:** Po redesignu musí Google indexovat nové URL; staré propojení služeb na stejné doméně stačí.

### Časová náročnost
**Odhadovaná doba práce:** ~1 hod 57 min  
**Rozložení:** 10. 6. 2026 15:21–17:18 (~1 hod 57 min)  
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** 14  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci (`sessionPaddingMinutesBefore` / `After` v `report-config.json`).*

### Technická poznámka
Commit: `591ee04` — `public/admin/config.yml`, `public/config.yml`.

---

## Sezení: 9. 6. 2026, 22:28–22:45

### Přehled
UX a marketingové posouzení návrhu hero karuselu na homepage, následná implementace interaktivního hero s pill chipy (Měření / Studie / EIA): střídání pozadí, kontextový text pod chipy, autoplay každých 5 s a fade-in animace při načtení. Eyebrow v hero odstraněno.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Homepage hero — pill chipy a rotace pozadí
**Co bylo uděláno:** Statický H1 a lead zůstávají; pod nimi tři pill chipy přepínají fotografii v pozadí (crossfade). Nová komponenta `HomeHeroSection` a data pilířů v `home-hero-pillars.ts`. Fade-in animace hero obsahu a navazujících sekcí při načtení stránky.  
**Proč:** Homepage působila staticky; chipy oživují fold bez klasického autoplay banneru a mapují tři pilíře nabídky (měření, studie, EIA).

#### Autoplay a interakce
**Co bylo uděláno:** Pilíře se automaticky střídají každých 5 sekund. Rotace se pozastaví při najetí myší, focusu klávesnicí nebo ručním výběru chipu (následná 10s pauza). U `prefers-reduced-motion` autoplay vypnut.  
**Proč:** Jemný pohyb bez nutnosti ruční navigace; návštěvník může chipy kdykoli převzít.

#### Kontextový text místo CTA v hero
**Co bylo uděláno:** Odstraněno ghost tlačítko pod chipy. Místo něj jedna věta pod chipy s aktivním slovesem — „Změříme…“, „Připravíme…“, „Zpracujeme…“ — synchronizovaná s aktivním pilířem.  
**Proč:** Tlačítko v hero konkursovalo sticky poptávce v hlavičce; kontextový text vysvětluje pilíř bez další konverzní vrstvy.

#### Eyebrow v homepage hero
**Co bylo uděláno:** Eyebrow („Akreditovaná měření · studie…“) z homepage hero odstraněno z markupu.  
**Proč:** Na úvodní stránce zbytečně zabíralo místo ve foldu; důvěra zůstává v topbaru a trust liště.

### Časová náročnost
**Odhadovaná doba práce:** ~32 min  
**Rozložení:** 9. 6. 2026 22:28–22:45 (~32 min)  
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** 5  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci (`sessionPaddingMinutesBefore` / `After` v `report-config.json`).*

### Technická poznámka
Soubory: `src/components/HomeHeroSection.tsx`, `src/lib/home-hero-pillars.ts`, `src/app/page.tsx`, `src/app/globals.css`. Commit: `12abc96`.

---

## Sezení: 9. 6. 2026, 22:04–22:27

### Přehled
UX audit a úpravy mobilní homepage a hlavičky: odstranění duplicitního CTA v hero, vyrovnání mezer v hero pásu a postupné doladění loga a akčních tlačítek ve sticky hlavičce (velikost, zarovnání, touch target 44 px).

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Homepage hero (mobil)
**Co bylo uděláno:** Z hero sekce na úvodní stránce odstraněno tlačítko „Nezávazně poptat“ — na mobilu i tabletu zůstává jen ve sticky hlavičce. Upraven vertikální padding hero pásu a zarovnání textu od horní hrany (symetrický prostor, obsah už není „zavěšený“ uprostřed s větší mezerou nad H1).  
**Proč:** Duplicitní CTA zbytečně zabíralo místo ve foldu a opakovalo stejnou akci z hlavičky; asymetrické mezery působily nevyváženě při prvním dojmu.

#### Mobilní hlavička — logo
**Co bylo uděláno:** Logo se na mobilu zvětšilo (velikost podle výšky místo limitu v `vw`, který ho fyzicky zmenšoval). Tagline „Měření · studie · dokumentace“ je na mobilu/tabletu skrytá (na desktopu zůstává). Logo zarovnané vlevo, vertikálně vycentrované v řádku hlavičky.  
**Proč:** Po první úpravě logo stále působilo malé a posunuté nahoru; tagline v úzkém prostoru stejně nebyla dobře čitelná a zabírala výšku řádku.

#### Mobilní hlavička — tlačítka
**Co bylo uděláno:** Tlačítko poptávky i hamburger menu zvětšeny na 44×44 px (standardní touch target), větší text CTA a úprava ikony menu. Upraven `--site-header-offset`, aby obsah nelezl pod vyšší hlavičku.  
**Proč:** Původní tlačítka (~34–36 px) byla na dotykovém displeji malá a vizuálně slabá vedle loga.

### Časová náročnost
**Odhadovaná doba práce:** ~23 min  
**Rozložení:** 9. 6. 2026 22:04–22:27 (~23 min)  
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** 6  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci (`sessionPaddingMinutesBefore` / `After` v `report-config.json`).*

### Technická poznámka
Soubory: `src/app/page.tsx`, `src/app/globals.css`, `src/components/BrandLogo.tsx`. Commity: `65d8140`, `9e22626`.

---

## Sezení: 9. 6. 2026, 20:35–21:25

### Přehled
Příprava webu na launch z hlediska GDPR a měření: cookie lišta s volbou kategorií, dvě právní stránky (ochrana údajů a zásady cookies), Google Consent Mode v2 a načítání analytických/marketingových tagů až po souhlasu. Kontaktní formulář doplněn o odkaz na zásady ochrany údajů; patička o právní navigaci.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Cookie lišta a správa souhlasu
**Co bylo uděláno:** Přidána cookie lišta s tlačítky Přijmout vše, Odmítnout volitelné a Nastavení. Návštěvník může zvlášť povolit statistické (GA4) a marketingové (Google Ads, Meta, LinkedIn) cookies. Volba se ukládá do local storage; z patičky jde kdykoli otevřít „Spravovat cookies“.  
**Proč:** Web musí před spuštěním měření splnit požadavky EU na informovaný souhlas — bez lišty by GA4 a reklamní pixely nemohly legálně běžet.

#### Právní stránky — GDPR a cookies
**Co bylo uděláno:** Nové stránky `/ochrana-osobnich-udaju` a `/zasady-cookies` s údaji správce, účely zpracování, tabulkou cookies, právy subjektů údajů a odkazem na Google Consent Mode. Sdílená šablona `LegalPageLayout`, centrální konstanty v `legal.ts`. Stránky zařazeny do sitemap.  
**Proč:** Cookie lišta i kontaktní formulář musí vést na konkrétní právní texty; bez nich by souhlas nebyl informovaný a audit by web označil jako nekompletní.

#### Consent Mode v2 a měření po souhlasu
**Co bylo uděláno:** Nahrazena stará komponenta `Analytics` za `ConsentAwareTracking` a `GoogleConsentModeInit`. Výchozí stav všech úložišť je „denied“; po volbě v liště se aktualizuje přes `gtag('consent', 'update', …)`. GA4 a Google Ads se načtou přes gtag.js (s anonymizací IP); Meta Pixel a LinkedIn Insight Tag až po marketingovém souhlasu. Eventy `generate_lead` a outbound telemetrie zůstávají, ale GA běží jen se statistikami.  
**Proč:** Příprava na nasazení `NEXT_PUBLIC_GA_MEASUREMENT_ID` ve Vercelu — měření musí respektovat souhlas ještě před prvním pageview, jak vyžaduje Google Consent Mode v2.

#### Patička a kontaktní formulář
**Co bylo uděláno:** V patičce nový právní řádek s odkazy na ochranu údajů, zásady cookies a tlačítkem správy souhlasu. U kontaktního formuláře povinný checkbox se souhlasem a odkazem na zásady ochrany osobních údajů.  
**Proč:** Právní odkazy musí být dostupné z každé stránky; formulář zpracovává osobní údaje a potřebuje výslovný souhlas se zpracováním.

### Časová náročnost
**Odhadovaná doba práce:** ~51 min  
**Rozložení:** 9. 6. 20:35–21:25 (~51 min)  
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** 2  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci (`sessionPaddingMinutesBefore` / `After` v `report-config.json`). V Claude Code bez hooku se použijí jen commity.*

### Technická poznámka
Soubory: `CookieConsentBanner`, `ConsentAwareTracking`, `GoogleConsentModeInit`, `legal.ts`, `ochrana-osobnich-udaju/page.tsx`, `zasady-cookies/page.tsx`, `FooterLegalBar`, `globals.css`, `layout.tsx`. Commit: `bd70d7c`.

---

## Sezení: 9. 6. 2026, 20:04–20:43

### Přehled
Dokončení hero sekce napříč webem: sjednocená výška modrého pruhu na 430 px, spolehlivé vertikální centrování textového bloku (drobečkovka, eyebrow, H1, lead) a odstranění ikon nad nadpisy na stránkách služeb a provozů. Po prvních pokusech s centrováním došlo k regresi — text se odtlačil ke spodnímu okraji; finální oprava spočívala v přesunu diagonálního spaceru mimo layout.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Hero — sjednocená výška 430 px
**Co bylo uděláno:** Modrý hero pruh má na desktopu pevnou výšku 430 px na homepage, interních stránkách i detailech služeb. Výška je řízena CSS proměnnými `--hero-band-min-height-standard` a `--hero-band-min-height-service`; na mobilu zůstává `height: auto` podle obsahu.  
**Proč:** Klient požadoval konzistentní první dojem — hero pruh měl být na všech stránkách stejně vysoký, ne lišit se podle délky textu.

#### Hero — vertikální centrování textu
**Co bylo uděláno:** Textový blok v hero je vertikálně vycentrovaný v rámci 430px pruhu. Upraven řetězec výšek (sekce → container → grid → textová kolona) a centrování přes CSS grid (`align-content: center`). Diagonální spacer u šikmého řezu fotky je absolutně pozicovaný, aby nezasahoval do flex/grid layoutu — předchozí verze ho počítala jako flex položku na plnou výšku a odtlačila text dolů mimo viditelnou oblast.  
**Proč:** Po první opravě centrování text seděl u horního okraje, po druhé u spodního (část H1 byla ořezaná). Kořenem byl spacer, který flexbox bral jako plnohodnotný prvek layoutu.

#### Hero — odstranění ikon u služeb a provozů
**Co bylo uděláno:** Z hero sekcí na stránkách `/sluzby/*` a `/provozy-a-technologie/*` odstraněny ikony nad nadpisem H1. V hero zůstává drobečková navigace, nadpis a úvodní text (lead).  
**Proč:** Ikony v hero působily rušivě a duplicitně — stejné služby je mají na kartách a v indexech; v modrém pruhu má dominovat text, ne grafický symbol.

### Časová náročnost
**Odhadovaná doba práce:** ~39 min  
**Rozložení:** 9. 6. 20:04–20:43 (~39 min)  
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** 6  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci (`sessionPaddingMinutesBefore` / `After` v `report-config.json`). V Claude Code bez hooku se použijí jen commity.*

### Technická poznámka
Soubory: `src/app/globals.css`, `src/components/ServicePage.tsx`, `src/components/SectorPage.tsx`. Commity: `b5d0f26` … `ba55c85`.

---

## Sezení: 9. 6. 2026, 17:52–18:57

### Přehled
Velká úprava hero sekce na celém webu: nový split layout s diagonální fotkou, diagonální zalamování textu pomocí CSS `shape-outside`, finální doladění výšky a vertikálního centrování obsahu, obnova mobilního foto pozadí a UX doladění paddingu. Cílem bylo sjednotit první dojem na desktopu i mobilu — kompaktní hero pruh s centrovaným textem a foto pozadím na mobilu.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Hero — výška a vertikální centrování
**Co bylo uděláno:** Homepage hero omezen na max 400 px (`min-height: clamp(340px, 42vh, 400px)`). Opraveno vertikální centrování — sekce přepnuta na `flex-direction: column; justify-content: center`, čímž se obsah skutečně centruje ve výšce sekce (předchozí `align-items: stretch` nefungovalo). Stejné výšky nastaveny i pro interní stránky (service max 400 px, standard max 380 px). Padding `.hero-band-text` symetrizován a snížen.  
**Proč:** Hero bylo příliš vysoké (~500 px) a obsah seděl u horního okraje místo uprostřed.

#### Mobil — obnova foto pozadí
**Co bylo uděláno:** Na mobilu obnovena fotka jako plné pozadí celé hero sekce s tmavým navy gradientem (0.82–0.60 opacity). Předchozí stav měl fotku skrytou (`display: none`), takže mobil neodpovídal zamýšlenému designu.  
**Proč:** Bez fotky bylo mobilní hero jen prázdný navy pás — méně vizuálně atraktivní a bez kontextu průmyslového záběru.

#### Hero — diagonální zalamování textu
**Co bylo uděláno:** Text v hero sloupci nyní zalamuje podél diagonály fotky — řádky nahoře jsou delší, směrem dolů se zkracují podle stejného sklonu jako diagonální řez fotky. Implementováno přes CSS `shape-outside` na floatovaném prázdném elementu uvnitř textového sloupce. Na mobilu je efekt vypnutý.  
**Proč:** Samotný `max-width` svíral text na pevnou šíři bez vizuální vazby na fotografii. Diagonální zalamování opticky propojuje textový sloupec s fotkou a dává layoutu živější, dynamičtější charakter.

#### Hero — split layout a systém fotek
**Co bylo uděláno:** Přestavba hero na všechny stránky: tmavý gradient přes celou šířku, fotka absolutně vpravo s diagonálním řezem, na mobilu tmavé pozadí. Přidáno přiřazení fotek podle stránky (slug), focal point pro každou fotku a nová homepage fotka (forge-worker).  
**Proč:** Hero mělo působit profesionálněji a konzistentně — vizuální kotva pro B2B návštěvníka, ne generický tmavý pás bez fotky.

#### Hero — zarovnání textu vůči fotce (desktop)
**Co bylo uděláno:** Opraveno přetékání textu do foto oblasti (max-width 50 % containeru) a regrese, kdy text na vnitřních stránkách začínal od okraje viewportu místo od containeru.  
**Proč:** Po zavedení split layoutu text „lezl“ pod fotku nebo mimo mřížku stránky — horší čitelnost a neprofesionální dojem.

#### P6-5 — kompaktnější hero pruh a stats lišta
**Co bylo uděláno:** Snížen vnitřní padding modrého hero pruhu (sjednocení s ostatními stránkami), mírně zkompaktněn zelený stats pruh pod hero. Vyrovnané horní a spodní okraje textu v modrém pruhu (optická kompenzace line-height u leadu). Trust band beze změny.  
**Proč:** Pod hero bylo zbytečně moc prázdného místa — obsah „Co zajišťujeme“ byl příliš nízko; úprava posouvá klíčový obsah výš na fold.

#### Mobil — logo a hero text
**Co bylo uděláno:** Logo a tagline v hlavičce na mobilu ve stejných rozměrech a centrování jako na desktopu (bez zmenšeného nebo ořezaného wordmarku). Hero nadpis a lead na plnou šířku kontejneru — zrušeno desktopové omezení na polovinu šířky a zalamování podle úzkého sloupce.  
**Proč:** Na mobilu logo působilo jinak než na desktopu a hero text zůstal jen v levé části obrazovky; návštěvník neviděl sdělení přes celou šířku jako v cílovém mobilním návrhu.

### Časová náročnost
**Odhadovaná doba práce:** ~1 hod 6 min
**Rozložení:** 9. 6. 2026 17:52–18:57 (~1 hod 6 min)
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** ~15  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci.*

### Technická poznámka
Soubory: `globals.css`, `HeroPhoto.tsx`, `PageHeroBand.tsx`, `hero-images.ts`, `page.tsx`. Commity: `efd2ffe` … `4d7a877`.

---

## Sezení: 5. 6. 2026, 19:18–19:39

### Přehled
Úpravy sekce „Co zajišťujeme“ na homepage: zkrácený nadpis třetího pilíře a funkční hluboké odkazy na přehled služeb. Po kliknutí na „Zobrazit měření / studie / dokumentaci“ se na `/sluzby` automaticky rozbalí odpovídající accordion skupina a stránka k ní scrolluje.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Homepage — nadpis pilíře dokumentace
**Co bylo uděláno:** Nadpis třetí karty zkrácen z „Povolovací dokumentace a EIA“ na „Dokumentace a EIA“, aby se vešel na jeden řádek.  
**Proč:** Dlouhý nadpis se lámal na dva řádky a vizuálně narušoval rovnoměrnost tří karet v řadě.

#### Homepage → /sluzby — auto-rozbalení accordionu podle kotvy
**Co bylo uděláno:** Tlačítka a karty pilířů vedou na `/sluzby#mericke-sluzby`, `#studie-vypocty` a `#povolovaci-podklady`. Na stránce služeb se příslušná skupina (měření, studie, povolovací dokumentace) při příchodu přes kotvu automaticky rozbalí a stránka k ní plynule scrolluje. Řešení zahrnuje řízený stav accordionu, sledování hashe v URL (včetně navigace Next.js bez události `hashchange`) a vypnutí výchozího scrollu na začátek stránky u odkazů s kotvou.  
**Proč:** Uživatel z homepage očekává, že po kliknutí na „Zobrazit studie“ nebo „Zobrazit dokumentaci“ uvidí rovnou obsah dané skupiny služeb — ne jen zavřený accordion u správné kotvy.

### Časová náročnost
**Odhadovaná doba práce:** ~21 min  
**Rozložení:** 5. 6. 2026 19:18–19:39 (~21 min)  
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** 4  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — log konverzace a commit `05f417e` včetně paddingu (+5 min před/po bloku).*

### Technická poznámka
`src/app/page.tsx`, `src/components/HomeOfferCard.tsx`, `src/components/ServiceGroupsIndex.tsx`, `src/lib/use-accordion-hash-open.ts`. Commit: `05f417e`.

---

## Sezení: 5. 6. 2026, 19:16–19:29

### Přehled
Doplnění vizuálního akcentu na horizontálních accordion kartách ve výpisech (provozy, služby, přístrojové vybavení) — stejný zelený pruh nahoře jako u karet na homepage, včetně jemné změny barvy při najetí myší. Opraven hover, který dříve zvýrazňoval jen střed řádku a působil nevyváženě.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Accordion indexy — horní barevný pruh a hover
**Co bylo uděláno:** U horizontálních accordion karet na stránkách `/provozy-a-technologie`, `/sluzby` a `/pristrojove-vybaveni` nahrazen levý zelený okraj tenkým pruhem nahoře (stejný princip jako u karet „Co zajišťujeme“ na homepage). Při najetí myší se pruh mírně zesvětlí, celá karta dostane jemný stín a u zavřených položek velmi subtilní gradient — bez přehnaných barev. Hover už neobarvuje jen vnitřní oblast summary řádku.  
**Proč:** Klient chtěl sjednotit vizuální jazyk s homepage a odstranit „divný“ efekt, kdy se při hoveru zvýraznilo jen středové pole karty místo celého boxu.

### Časová náročnost
**Odhadovaná doba práce:** ~18 min  
**Rozložení:** 5. 6. 2026 19:16–19:29 (~18 min)  
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** 2  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — log konverzace a commit `f0bc4f5` včetně paddingu (+5 min před/po bloku).*

### Technická poznámka
`src/app/globals.css` — třída `.service-group-details`. Commit: `f0bc4f5`.

---

## Sezení: 5. 6. 2026, 19:02–19:21

### Přehled
Audit a sjednocení vizuálního jazyka napříč webem — zaoblené rohy přes CSS tokeny, ikony bez rámečků (větší a čitelnější) a elegantní oddělovače ve zeleném stats pruhu na homepage. Souběžně dokončena vizuální vrstva accordion indexů (P5-26–P5-28) a copy sprint stránky Přístrojové vybavení.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Zaoblené rohy sitewide (design tokeny)
**Co bylo uděláno:** V `globals.css` zavedeny tokeny `--radius-sharp` (12px), `--radius-ui` (10px) a `--radius-pill` (999px). Karty, tlačítka, formuláře, tagy a další prvky napříč webem je používají místo mixu ostrých rohů a různých hardcoded hodnot.  
**Proč:** Audit ukázal nekonzistenci — někde zakulacené rohy (FAQ, dlaždice), jinde ostré (tlačítka). Klient preferuje modernější zakulacený vzhled; centralizace přes tokeny umožňuje úpravu celého webu z jednoho místa bez procházení stránek.

#### Ikony bez rámečků sitewide
**Co bylo uděláno:** Třída `.card-symbol` už nepoužívá border ani pozadí — stejný vzhled jako „čisté“ ikony u nadpisů FAQ. Komponenta `ServiceIcon` sjednocena na větší výchozí velikosti (28–32px v kartách a accordionech). Accordion indexy služeb, sektorů a referencí používají stejnou variantu.  
**Proč:** Na webu se střídaly ikony v rámečcích a větší ikony bez boxu; požadavek bylo sjednotit na variantu bez rámečků pro čitelnější a modernější dojem.

#### Stats pruh homepage — oddělovače
**Co bylo uděláno:** Po zavedení zaoblených rohů vypadaly svislé oddělovače mezi třemi metrikami zakulaceně. Statistiky v zeleném pruhu mají `border-radius: 0` a místo `border-left` na celé výšce karty jsou tenké centrované svislé čáry (`::before`, cca polovina výšky pruhu).  
**Proč:** Původní jednoduché oddělovače byly vizuálně narušeny zaoblením karet; nové dělení působí čistěji a lépe sedí k layoutu tří sloupců.

#### Přístrojové vybavení — copy a obsah
**Co bylo uděláno:** Nový H1 „Čím měříme v terénu i v laboratoři“, aktualizovaná meta description, zkrácené titulky skupin přístrojů, odkazy na služby ve tvaru „Měření emisí →“ místo „Související služba: …“. Z collapsed řádků accordionu odstraněny redundantní podtitulky (P5-30).  
**Proč:** Stránka měla působit katalogově a summary řádky byly zbytečně vysoké — text měl lépe odpovídat účelu stránky (orientace před zakázkou / ve výběrovém řízení) a být scanovatelný na první pohled.

#### Accordion indexy — vizuální sjednocení (P5-26–P5-28)
**Co bylo uděláno:** Accordion sekce obaleny do šedého surface pásu (`.section-surface`), karty mají 3px forest border-left, silnější hover stín a jemné zelené podbarvení při hoveru/rozbalení. Sitewide sjednoceno „Zobrazit více“ / „Zobrazit méně“ včetně typických zakázek.  
**Proč:** Bílé karty na bílém pozadí působily monotónně na čtyřech index stránkách; surface a akcent dávají vizuální rytmus bez změny struktury obsahu.

#### Accordion summary — zarovnání ikony a textu
**Co bylo uděláno:** Nadpis a počet položek v summary řádku opticky vycentrovány vůči ikoně (úprava line-height a zarovnání title row). Mapování ikon skupin přístrojů přes `id` místo titulku.  
**Proč:** Text v summary řádku působil nevyváženě vůči ikoně; změny titulků skupin už nemají rozbíjet přiřazení ikon.

### Časová náročnost
**Odhadovaná doba práce:** ~18 min  
**Rozložení:** 5. 6. 2026 19:02–19:21 (~18 min)  
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** ~8  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — commity a log konverzace od `f8af277` včetně paddingu (+5 min před/po bloku).*

### Technická poznámka
`src/app/globals.css`, `src/components/ServiceIcon.tsx`, accordion indexy, `src/app/pristrojove-vybaveni/page.tsx`, `src/lib/equipment-content.ts`. Commit: `3585f95`.

---

## Sezení: 5. 6. 2026, 16:47–18:23

### Přehled
**Odpolední UX blok:** sjednocení hero na detailech provozů a sitewide zavedení forest zelené jako primární konverzní barvy (navy pro sekundární akce a institucionální prvky). Stats pruh na homepage dostal zelené pozadí, větší ikony bez rámečku a centrované zarovnání sladěné s kartami služeb pod ním.

**Zdroj popisu:** AI konverzace

### Provedené změny
#### Fix mobiln├ş layout detailu ─Źl├ínk┼» v poradn─Ť.
**Co bylo uděláno:** Fix mobiln├ş layout detailu ─Źl├ínk┼» v poradn─Ť. - Opravuje p┼Öet├ęk├ín├ş obsahu mimo viewport a zp┼Öehled┼łuje tabulky na mobilu men┼í├şm p├şsmem a lep┼í├şm zalamov├ín├şm textu.  Co-authored-by: Cursor <cursoragent@cursor.com> (commit `cd5e81f`). Dotcene oblasti: app, components, poradna.  
**Proč:** Opravuje p┼Öet├ęk├ín├ş obsahu mimo viewport a zp┼Öehled┼łuje tabulky na mobilu men┼í├şm p├şsmem a lep┼í├şm zalamov├ín├şm textu.  Co-authored-by: Cursor <cursoragent@cursor.com>.

#### Docs: checklist p┼Öed├ín├ş klientovi a hosting alternativy.
**Co bylo uděláno:** Docs: checklist p┼Öed├ín├ş klientovi a hosting alternativy. - P┼Öid├ín kompletn├ş postup p┼Öevodu Vercel, GitHub, OAuth, Vedosu a Resend; srovn├ín├ş free hostingu s komer─Źn├şm provozem.  Co-authored-by: Cursor <cursoragent@cursor.com> (commit `1001a2c`). Dotcene oblasti: HOSTING-ALTERNATIVY.md, PREDANI-KLIENTOVI.md, report, ROADMAPA.md, workflow.  
**Proč:** P┼Öid├ín kompletn├ş postup p┼Öevodu Vercel, GitHub, OAuth, Vedosu a Resend; srovn├ín├ş free hostingu s komer─Źn├şm provozem.  Co-authored-by: Cursor <cursoragent@cursor.com>.

#### Fix Decap CMS OAuth login and robots.txt for staging deploy.
**Co bylo uděláno:** Fix Decap CMS OAuth login and robots.txt for staging deploy. - Align CMS base_url with web-naturchem.vercel.app, repair the GitHub OAuth callback handshake, and block /admin and /api from crawlers.  Co-authored-by: Cursor <cursoragent@cursor.com> (commit `a91ee67`). Dotcene oblasti: .env.example, api, app, config.yml, README.md.  
**Proč:** Align CMS base_url with web-naturchem.vercel.app, repair the GitHub OAuth callback handshake, and block /admin and /api from crawlers.  Co-authored-by: Cursor <cursoragent@cursor.com>.

#### UX: odstran─Ťn├ş redundantn├şch eyebrow label┼» na homepage.
**Co bylo uděláno:** UX: odstran─Ťn├ş redundantn├şch eyebrow label┼» na homepage. - Na┼íe slu┼żby a Na┼íi z├íkazn├şci duplikovaly nadpisy sekc├ş a zbyte─Źn─Ť posouvaly karty a loga n├ş┼ż; u z├íkazn├şk┼» z┼»st├ív├í skryt├Ż H2 pro p┼Ö├şstupnost.  Co-authored-by: Cursor <cursoragent@cursor.com> (commit `1411dd8`). Dotcene oblasti: app.  
**Proč:** Na┼íe slu┼żby a Na┼íi z├íkazn├şci duplikovaly nadpisy sekc├ş a zbyte─Źn─Ť posouvaly karty a loga n├ş┼ż; u z├íkazn├şk┼» z┼»st├ív├í skryt├Ż H2 pro p┼Ö├şstupnost.  Co-authored-by: Cursor <cursoragent@cursor.com>.

#### UX: odstran─Ťn├ş redundantn├şch eyebrow label┼» na homepage.
**Co bylo uděláno:** UX: odstran─Ťn├ş redundantn├şch eyebrow label┼» na homepage. - Na┼íe slu┼żby a Na┼íi z├íkazn├şci duplikovaly nadpisy sekc├ş a zbyte─Źn─Ť posouvaly karty a loga n├ş┼ż; u z├íkazn├şk┼» z┼»st├ív├í skryt├Ż H2 pro p┼Ö├şstupnost.  Co-authored-by: Cursor <cursoragent@cursor.com> (commit `6022a6b`). Dotcene oblasti: app, report, workflow.  
**Proč:** Na┼íe slu┼żby a Na┼íi z├íkazn├şci duplikovaly nadpisy sekc├ş a zbyte─Źn─Ť posouvaly karty a loga n├ş┼ż; u z├íkazn├şk┼» z┼»st├ív├í skryt├Ż H2 pro p┼Ö├şstupnost.  Co-authored-by: Cursor <cursoragent@cursor.com>.

#### UX: p┼Öestavba /poradna ÔÇö ┼íablona ─Źl├ínk┼», fulltext a topic fron...
**Co bylo uděláno:** UX: p┼Öestavba /poradna ÔÇö ┼íablona ─Źl├ínk┼», fulltext a topic frontmatter. - Nov├í ┼íablona detailu s hero a TL;DR, n├íhledov├ę fotky na indexu, vyhled├ív├ín├ş v textu ─Źl├ínk┼» a explicitn├ş topic u v┼íech 33 ─Źl├ínk┼»; CTA p├ísy z detailu odstran─Ťny.  Co-authored-by: Cursor <cursoragent@cursor.com> (commit `0e95434`). Dotcene oblasti: ...a-a-plynovy-kotel-kdy-se-meri-emise-co-a-nox.md, ...acovniho-prostredi-kdy-ho-muze-pozadovat-khs.md, ...ach-kovy-odsavani-pracovni-prostredi-a-emise.md, ...ake-environmentalni-podklady-se-obvykle-resi.md, ...anym-zdrojum-co-ma-provozovatel-zkontrolovat.md, ...covnim-ovzdusi-co-rozhoduje-o-rozsahu-mereni.md, ...dii-laeq-lafmax-chraneny-prostor-a-nejistota.md, ...e-ovzdusi-kdy-je-potreba-a-co-musi-obsahovat.md, ...eselagregat-emise-hluk-a-povolovaci-podklady.md, ...e-voc-provozni-rad-mereni-a-povoleni-provozu.md, ...i-proc-mohou-zmenit-povinnosti-provozovatele.md, ...i-protokolu-prakticky-dopad-na-provozovatele.md, ...je-potreba-hlukova-studie-a-kdy-mereni-hluku.md, ...-kdy-je-povinna-a-jake-podklady-jsou-potreba.md, ...-kdy-zapojit-odbornika-na-ovzdusi-hluk-a-eia.md, ...ne-environmentalni-stanovisko-spolecne-s-eia.md, ...odborny-posudek-i-u-zmeny-stavajiciho-zdroje.md, ...omotive-provoz-co-se-typicky-meri-a-posuzuje.md, ...o-stavebnich-odpadu-hluk-prach-doprava-a-eia.md, ...otreba-mereni-emisi-a-kdy-staci-jiny-podklad.md, ...oveho-provozu-z-hlediska-zivotniho-prostredi.md, ...padel-a-vzt-jednotek-co-resit-pred-kolaudaci.md, ...-praci-jake-mereni-je-potreba-jako-podklad-1.md, ...prach-piliny-odsavani-hluk-a-povoleni-zdroje.md, ...-provozovny-co-delat-kdyz-si-sousede-stezuji.md, ...stitut-minimalni-vzdalenosti-ochrana-ovzdusi.md, ...talogovy-udaj-zarizeni-pro-hlukove-posouzeni.md, ...vani-zdroju-znecistovani-ovzdusi-v-roce-2026.md, ...vyduchu-proc-je-dulezite-uz-ve-fazi-projektu.md, ...y-prach-respirabilni-frakce-a-oxid-kremicity.md, app, components, co-poslat-pro-rychle-posouzeni-zameru.md, copy-audit.md, emise-vs-imise-proc-provozovatel-resi-oboji.md, lib, novela-zakona-o-ochrane-ovzdusi-2025.md, poradna, ROADMAPA.md.  
**Proč:** Nov├í ┼íablona detailu s hero a TL;DR, n├íhledov├ę fotky na indexu, vyhled├ív├ín├ş v textu ─Źl├ínk┼» a explicitn├ş topic u v┼íech 33 ─Źl├ínk┼»; CTA p├ísy z detailu odstran─Ťny.  Co-authored-by: Cursor <cursoragent@cursor.com>.

#### Docs: GA4 do launch checklistu v ROADMAPA.
**Co bylo uděláno:** Docs: GA4 do launch checklistu v ROADMAPA. - Dopln─Ťn ├║kol nasazen├ş a ov─Ť┼Öen├ş GA4 na produkci p┼Öed spu┼ít─Ťn├şm na naturchem.cz.  Co-authored-by: Cursor <cursoragent@cursor.com> (commit `584b9ed`). Dotcene oblasti: ROADMAPA.md.  
**Proč:** Dopln─Ťn ├║kol nasazen├ş a ov─Ť┼Öen├ş GA4 na produkci p┼Öed spu┼ít─Ťn├şm na naturchem.cz.  Co-authored-by: Cursor <cursoragent@cursor.com>.


#### UX audit — hero na detailech provozů
**Co bylo uděláno:** Proveden UX audit hero sekce na stránkách jednotlivých provozů. Porovnání s indexem provozů, reference, službami a dalšími informačními stránkami ukázalo, že tlačítko „Poptat posouzení provozu“ v hero je sitewide nekonzistentní a na mobilu zbytečně zabírá fold. Doporučení P5-24: hero bez CTA, konverze dole.  
**Proč:** Návštěvník na detailu provozu nejdřív potřebuje potvrdit relevanci (H1 + lead), ne okamžitě konvertovat; duplicitní výzva k akci matla a lišila se copy od spodního pásu.

#### UX — odstranění hero CTA z detailů provozů
**Co bylo uděláno:** Ze sdílené šablony `SectorPage` odstraněno tlačítko z hero — platí pro všech 10 detailů provozů. Hero obsahuje jen ikonu, nadpis a úvodní text.  
**Proč:** Sjednocení vzoru s ostatními stránkami; konverze zůstává dostupná přes sticky „Nezávazně poptat“ a `PageCtaStrip` na konci stránky.

#### UX a grafika — forest zelená sitewide (P5)
**Co bylo uděláno:** Zavedeny design tokeny (`--forest`, `--navy`, `--cta`). Primární tlačítka jsou forest zelená, sekundární plná navy (na tmavém hero zůstávají bílé ghost). Topbar a patička navy; eyebrow, odkazy a card akcenty forest. Stats pruh sitewide na zeleném pozadí — ikony větší, bez rámečku, vedle čísel, centrované v sloupcích sladěných s kartami „Co zajišťujeme“. Jemný forest tint u sekce zákazníků a service overview; horní linka u CTA pásu a karet.  
**Proč:** Zelená působí výrazněji než navy a lépe vede ke konverzi; navy drží institucionální tón. Stats pruh měl původně rušivé bílé boxy ikon a špatné zarovnání oproti kartám pod ním.

#### Docs — launch checklist
**Co bylo uděláno:** Do `ROADMAPA.md` (Oblast 5) doplněn úkol nasazení Google Analytics 4 na produkci s odkazem na Oblast 4.  
**Proč:** GA4 patří do launch checklistu před ostrým spuštěním na naturchem.cz.

### Časová náročnost
**Odhadovaná doba práce:** ~1 hod 36 min
**Rozložení:** 5. 6. 2026 16:47–18:23 (~1 hod 36 min)
**Metoda odhadu:** git
**Počet výměn s AI:** ~12  
*Poznámka: čas ze skriptu `estimate-session-time.ps1` (blok od commitu `fb14769` včetně paddingu).*

### Technická poznámka
`src/components/SectorPage.tsx`, `src/app/globals.css`, `src/app/page.tsx`, `src/components/ServicePage.tsx`, `naturchem-projekt/ROADMAPA.md`. Commity: `a1264c5`, `2eb1df7`.

---

## Sezení: 5. 6. 2026, 16:25–16:55

### Přehled
**UX revize mobilní homepage** podle auditu: výraznější hero s primárním CTA, pruh statistik, zabalitelné karty „Co zajišťujeme“ s úvodním teaserem a oprava desktopu (karty vždy plně rozbalené). Doplňkově zmenšen prázdný prostor v patičce na mobilu.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### UX audit a mobilní homepage — hero a konverze
**Co bylo uděláno:** Proveden UX audit mobilního foldu. Hero na mobilu má větší vizuální váhu, jedno primární CTA „Nezávazně poptat“ (výjimka oproti desktopu, kde konverze zůstává v hlavičce). Odstraněn duplicitní úvodní text pod nadpisem sekce „Co zajišťujeme“ (opakoval hero lead) — platí pro celý web.  
**Proč:** Na mobilu byl fold přetížený textem, chyběla jedna jasná akce a hero působilo utlačeně oproti desktopu.

#### UX — statistiky a sekce služeb (mobil)
**Co bylo uděláno:** Tři metriky převedeny na kompaktní tmavý pruh pod hero. Sekce služeb má na mobilu světle šedé pozadí; karty jsou accordion — zavřeno: nadpis, šipka a dvouřádkový teaser s „…“; rozbaleno: tagy, popis, odkazy a tlačítko. Šipka je součástí řádku s nadpisem a zůstává viditelná i po rozbalení.  
**Proč:** Návštěvník měl rychle pochopit nabídku bez wall-of-text; na desktopu zůstávají plné karty bez sbalení.

#### UX — oprava desktopu a patičky
**Co bylo uděláno:** Nová komponenta `HomeOfferCard` — oddělený statický obsah pro desktop a `<details>` jen pro mobil. Spodní padding patičky snížen z rezervy 88 px pro neexistující sticky lištu.  
**Proč:** Desktop nesmí mít sbalitelné karty; patička na mobilu měla zbytečně velkou prázdnou plochu.

### Časová náročnost
**Odhadovaná doba práce:** ~30 min  
**Rozložení:** 5. 6. 2026 16:25–16:55 (~30 min)  
**Metoda odhadu:** konverzace  
**Počet výměn s AI:** ~8  
*Poznámka: čas ze skriptu `estimate-session-time.ps1`.*

### Technická poznámka
`src/app/page.tsx`, `src/app/globals.css`, `src/components/HomeOfferCard.tsx`. Commit: `68ede2b`.

---

## Sezení: 5. 6. 2026, 15:15–16:32

### Přehled
Kompletní **UX revize stránky /kontakt** podle schváleného auditu: zjednodušený formulář, nový box kontaktních údajů, sjednocená šířka s hlavičkou a oddělené chování menu „Kontakt“ vs. poptávkových tlačítek. Doplňkově mobilní accordion u provozů a služeb ze stejného commitu. Copy sprint C9 (texty formuláře a e-mailů).

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Copy C9 — kontakt a formulář v lidském tónu
**Co bylo uděláno:** Přepsány texty hero, formuláře, potvrzovacího e-mailu a chybových hlášek podle tone of voice — bez změny boxu kontaktních údajů.  
**Proč:** Sjednocení komunikace s ostatními copy sprinty před spuštěním.

#### UX — přestavba stránky /kontakt
**Co bylo uděláno:** Hero bez CTA; pořadí hero → formulář → kontaktní údaje. Formulář zkrácen (dropdown kategorií místo pěti radio karet, odstraněná rozšířená pole a šedý box tipů). Dvousloupcový layout formuláře uvnitř jedné karty. Odstraněny sekce rychlých cest, sidebar a odborné garance. Kontaktní údaje s ikonami a `getCompanyOffices()` (HB, ČB, Praha). Header CTA vede na formulář.  
**Proč:** Stránka byla dlouhá a redundantní; zákazník má rychle poslat podklady, kontakty dohledat pod formulářem.

#### UX — šířka obsahu a box kontaktních údajů
**Co bylo uděláno:** Opraveno přepisování `.container` pravidlem `width: 100 %` — boxy formuláře i kontaktů zarovnány s logem a tlačítkem v hlavičce. Kontaktní box rozdělen na tři sloupce **Společnost / Kontakt / Provozovny** se sjednocenými nadpisy (ikona + dělící čára); provozovny bez ikon u jednotlivých položek; na tabletu provozovny v řádku pod dvěma sloupci.  
**Proč:** Levý sloupec působil přeplněně, pravý prázdně; čtyři mapové špendlíky pod sebou působily rušivě; šířka neseděla se zbytkem webu.

#### UX — navigace a scroll na formulář
**Co bylo uděláno:** Položka menu **Kontakt** (`/kontakt`) zobrazuje hero nahoře. Všechna poptávková CTA napříč webem vedou na `contactFormHref` (`/kontakt#poptavkovy-formular`) — hlavička, `PageCtaStrip`, FAQ, typické zakázky, články poradny atd. Opraven automatický scroll při načtení (výchozí kategorie „nevím“ už nespouští posun). Posluchač `hashchange` pro scroll při opakovaném kliknutí na CTA na stejné stránce.  
**Proč:** Konverzní tlačítka mají vést rovnou na formulář; informační odkaz „Kontakt“ má ukázat celou stránku včetně hero.

#### UX — mobilní accordion (provozy a služby)
**Co bylo uděláno:** V rámci stejného UX kola doladěn mobilní accordion u skupin provozů a služeb (`globals.css`).  
**Proč:** Konzistentní chování rozbalovacích sekcí na malých obrazovkách.

#### Nasazení
**Co bylo uděláno:** Commity `98c3865`, `6b77bc3` a `fe33c4c` na `main`.  
**Proč:** Uzavření UX fáze kontaktu a copy C9.

### Časová náročnost
**Odhadovaná doba práce:** ~1 hod 17 min  
**Rozložení:** 5. 6. 2026 15:15–16:32 (~1 hod 17 min)  
**Metoda odhadu:** git  
**Počet výměn s AI:** ~11  
*Poznámka: čas ze skriptu `estimate-session-time.ps1`.*

### Technická poznámka
`kontakt/page.tsx`, `ContactForm.tsx`, `ContactFormSection.tsx`, `globals.css`, `contact-url.ts`, `cta.ts`, `Header.tsx`, `site.ts`, `ServiceIcon.tsx`. Commity: `98c3865`, `6b77bc3`, `fe33c4c`.

---

## Sezení: 4. 6. 2026, 22:33–22:56

### Přehled
Uzavřen **copy sprint C8**: přepsané hero a texty **FAQ**, sekce **Odborné články** (dříve „Odborná poradna“) v menu i na webu, aktivnější formulace vybraných odpovědí ve FAQ. Změny commitnuty a pushnuty na `main`. Doplňkově přidané příkazy `/cmo` a `/seo` a podkladová loga referencí.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Copy sprint C8 — FAQ
**Co bylo uděláno:** Zkrácen nadpis stránky na „Časté dotazy“, odstraněna duplicitní podtitulková vrstva, jeden lead pod hero. Ve `faq.ts` stylistické úpravy (aktivnější slovesa u vybraných otázek, beze změny legislativních bloků).  
**Proč:** Hero měl tři vrstvy se stejným významem; tělo FAQ mělo sjednotit tón s ostatními copy sprinty bez zásahu do právních citací.

#### Copy sprint C8 — Odborné články (/poradna)
**Co bylo uděláno:** Nový hero lead zaměřený na orientaci v oboru a články z praxe (ne na podklady pro úřad). Sekce přejmenována na **Odborné články** v `articlesNav` — menu, patička, drobečky, JSON-LD, detaily článků a teaser na službách. Upraveny meta popisy a prázdný stav filtru témat.  
**Proč:** „Poradna“ slibovala osobní konzultaci; stránka je katalog článků. Lead po zpětné vazbě bez věty o filtrování.

#### Workflow — příkazy a reference
**Co bylo uděláno:** Přidány Cursor příkazy `/cmo` a `/seo` a zdrojové podklady log referencí (TPI, TCB, teplárny) do `public/loga-referenci/`.  
**Proč:** Příprava marketingového a SEO workflow vedle vývoje webu.

#### Nasazení
**Co bylo uděláno:** Commit `60276d0` a push na `origin/main`.  
**Proč:** Uzavření C8 v repozitáři pro nasazení na Vercel.

### Časová náročnost
**Odhadovaná doba práce:** ~23 min  
**Rozložení:** 4. 6. 2026 22:33–22:56 (~23 min)  
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** ~12  
*Poznámka: čas ze skriptu `estimate-session-time.ps1`; navazuje na večerní blok C7 po pauze pod 30 min.*

### Technická poznámka
`faq.ts`, `faq/page.tsx`, `poradna/page.tsx`, `poradna/[slug]/page.tsx`, `navigation.ts`, `ServicePoradnaTeaser.tsx`, `PoradnaFilterableList.tsx`, `dedicated-service-pages.ts`. Commit: `60276d0`, `dcf2184`.

---

## Sezení: 4. 6. 2026, 20:55–22:39

### Přehled
Večerní blok dokončil **copy C5–C6**, úpravy navigace a celý **C7**: index služeb i provozů, sjednocený UX detailů provozů a FAQ, přestavbu **Reference** na skupiny zakázek s kartami jako u služeb, plus zápis v projektu — **C7 uzavřen**, SEO landingy odloženy až po odevzdání webu.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### C7 — index služeb (/sluzby)
**Co bylo uděláno:** Šest tematických skupin včetně „Školení a odborná podpora“ s úvodním textem zákazníkovi. Accordion na desktopu i mobilu (první skupina otevřená), ikony u nadpisů skupin i u karet služeb, správné skloňování počtu služeb. Místo obecných „Rozbalit / Sbalit“ kontextové štítky (např. „Zobrazit měření“ / „Skrýt měření“). Sjednocené bílé pozadí sekcí a zarovnání štítků KHS/ČIŽP u karet.  
**Proč:** Katalog 30+ služeb byl na jedné stránce nepřehledný; skupiny mají vysvětlit účel bloku a zkrátit scroll bez ztráty přímých odkazů.

#### Copy — sprint C5 (studie)
**Co bylo uděláno:** Schválené texty zapsány u rozptylových studií a čtyř služeb ve skupině studií (hlukové studie, akustické posudky, modelové výpočty, imisní dopady): lead se situací zákazníka, aktivní odrážky v přehledu, sjednocené „Kdy službu potřebujete“.  
**Proč:** Stejný konverzní vzor jako u měření (C4); nejdřív návrhy k review, pak implementace.

#### Copy — sprint C6 (dokumentace a povolování)
**Co bylo uděláno:** Přeformulovány intro, scope, whenNeeded a commonMistakes u odborných posudků, provozních řádů, IPPC, EIA oznámení, zjišťovacího řízení, technických příloh, povolení provozu, ISPOP, GHG a přehledové stránky EIA / posudky / IPPC.  
**Proč:** Katalogový tón nahrazen jazykem zákazníka (úřad, změna provozu, reporting) bez nových faktů.

#### UX — „Mohlo by Vás zajímat“ a provozy
**Co bylo uděláno:** U karet odkazujících na `/provozy-a-technologie/…` se popis bere z `sectors.ts` (ne generovaný text). U karty odpadů / recyklace na stránce EIA oznámení doplněn chybějící popis. Na provozní kartě štítek **Provozy a technologie**; CTA služeb sjednoceno na „Zobrazit službu“.  
**Proč:** Třetí karta u EIA záměrně vede na oborový přehled (logika záměru), ale uživatel musí vidět, že mění sekci webu.

#### Navigace — IPPC, ISPOP, GHG
**Co bylo uděláno:** V megamenu, patičkovém seznamu služeb a `site.ts` nahrazeny samotné zkratky plnými názvy (např. „ISPOP a provozní evidence“, „Emise skleníkových plynů (GHG)“).  
**Proč:** Zkratky bez kontextu nejsou srozumitelné pro netechnické publikum; v oboru se používají, ale menu má vysvětlit obsah.

#### C7 — index provozů (/provozy-a-technologie)
**Co bylo uděláno:** Deset oborů ve skupinách s accordionem (všechny skupiny výchozí sbalené), nový lead a úvody skupin, kontextové štítky rozbalení. U všech deseti detailů provozu přepsané úvodní texty podle schváleného tónu.  
**Proč:** Stejná logika přehledu jako u služeb — zákazník nejdřív vidí tematické bloky, ne dlouhý seznam odkazů.

#### UX — detail provozu (SectorPage)
**Co bylo uděláno:** U všech stránek provozů stejný vzor jako u služeb: panel „Stručně o provozu“ 2×2 s kontextovou fotografií a horizontální časová osa průběhu spolupráce.  
**Proč:** Provozy a služby mají na webu jednotný konverzní layout; uživatel nemusí přecházet mezi odlišnými šablonami.

#### UX — FAQ u provozů
**Co bylo uděláno:** Sekce častých dotazů na detailu provozu používá stejný accordion jako u služeb (sdílená komponenta).  
**Proč:** Konzistentní chování a vzhled napříč webem; menší údržba dvou vzorů.

#### C7 — reference (/reference)
**Co bylo uděláno:** Hero a lead („36 let na trhu…“), úprava úvodu zákazníků, šest skupin příkladů zakázek s accordionem a mřížkou karet (jako u služeb), štítky „Zobrazit zakázky“ / „Sbalit zakázky“, přepsání 16 příkladů; odstraněn vnořený accordion u jednotlivých zakázek.  
**Proč:** Reference mají být přehledné a důvěryhodné bez zbytečného klikání; skupiny odpovídají oborům práce firmy.

#### Projektová dokumentace — uzavření C7 a SEO
**Co bylo uděláno:** V `copy-audit.md` a `ROADMAPA.md` označeno C7 jako hotové; SEO landingy (C7-seo) odloženy na samostatný projekt po odevzdání webu.  
**Proč:** Dodávka webu se soustředí na hlavní strukturu a copy; sedm SEO stránek zůstane v repu, ale není součástí aktuálního předání.

### Časová náročnost
**Odhadovaná doba práce:** ~1 hod 44 min  
**Rozložení:** 4. 6. 2026 20:55–22:39 (~1 hod 44 min)  
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** ~14  
*Poznámka: čas ze skriptu `estimate-session-time.ps1`; mezera nad 30 min od odpoledního bloku (služby 2×2 / C4).*

### Technická poznámka
Commity: `17a751a` … `e45c5a3`. Soubory: `service-groups.ts`, `ServiceGroupsIndex.tsx`, `sector-groups.ts`, `SectorGroupsIndex.tsx`, `SectorPage.tsx`, `ReferenceExamplesIndex.tsx`, `reference-content.ts`, `reference-example-groups.ts`, `copy-audit.md`, `ROADMAPA.md`.

---

## Sezení: 4. 6. 2026, 19:15–20:35

### Přehled
Službové stránky — nový přehled „Stručně o službě“ (panel 2×2, foto vpravo na desktopu), sekce Kdy službu potřebujete, CTA pás pod mřížkou na desktopu / v buňce Jak začít na mobilu, copy sprint C4 na všech šesti měřicích službách podle vzoru měření emisí. Opravy card-head u souvisejících karet a mezer v sekci Jak začít.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### UX — přehled služby (ServicePage)
**Co bylo uděláno:** Čtyři informační bloky sloučeny do jednoho panelu s mřížkou 2×2 (tablet/desktop) a jedním sloupcem na mobilu; kontextová fotka vpravo od panelu na šířkách ≥1024 px, pod panelem na menších displejích. Nadpis sekce „Stručně o službě“. Pořadí: Kdy → Co zajišťujeme → Co dostanete → Jak začít.  
**Proč:** Původní čtyři samostatné karty na plné šířce působily prázdně a monotonně; mřížka lépe využívá horizont a zkracuje scroll.

#### UX — CTA v přehledu
**Co bylo uděláno:** Na desktopu primární tlačítko a odkaz „Jaké podklady poslat“ v pásu pod celou mřížkou (ne uprostřed panelu). Na mobilu tlačítko zůstává na konci buňky Jak začít. Hero služeb bez tlačítek (konverze jinde). Spodní PageCtaStrip beze změny.  
**Proč:** Tlačítko v pravém dolním kvadrantu na desktopu působilo nepřirozeně uprostřed layoutu.

#### Copy — sprint C4 (všechny měřicí služby)
**Co bylo uděláno:** Stejný styl jako u měření emisí — lead se situací zákazníka, aktivní slovesa v odrážkách, přeformulované „Kdy službu potřebujete“, sjednocené chyby. Upraveno: měření emisí, pracovní prostředí, měření hluku, vibrace, osvětlení, mikroklima. Globální text podkladů v `service-copy.ts`.  
**Proč:** Jednotný konverzní a obsahový vzor pro celou skupinu měření (C4); ostatní služby (studie, povolování) dostávají stejnou šablonu přehledu, copy C5–C6 navazuje.

#### UX — související karty a drobné opravy
**Co bylo uděláno:** IndexCard s prop `icon` — ikona a nadpis v jednom řádku bez rámečku u „Mohlo by Vás zajímat“ a u provozů. Oprava mezer u úvodní věty v Jak začít (margin u odstavce).  
**Proč:** Konzistence se sitewide vzorem card-head; odstranění dvojité mezery pod nadpisem.

### Časová náročnost
**Odhadovaná doba práce:** ~1 hod 20 min  
**Rozložení:** 4. 6. 2026 19:15–20:35 (~1 hod 20 min)  
**Metoda odhadu:** konverzace (implementace bez mezilehlých commitů; log od posledního commitu ~37 min + dokončení v tomto sezení)  
**Počet výměn s AI:** ~14  
*Poznámka: čas zahrnuje návrh UX (P4-S5), implementaci, iterace layoutu a CTA a rollout C4.*

### Technická poznámka
Commit `164e914`. Soubory: `ServicePage.tsx`, `globals.css`, `service-copy.ts`, `IndexCard.tsx`, `mereni-emisi/page.tsx`, `pracovni-prostredi/page.tsx`, `mereni-hluku/page.tsx`, `dedicated-service-pages.ts` (vibrace, osvětlení, mikroklima).

---

## Sezení: 4. 6. 2026, 18:25–19:10

### Přehled
Stránka Typické zakázky — copy podle účelu stránky (inspirace v hero, scénáře bez „Potřebuji…“), modál místo podstránek u příkladů zakázek a přepracovaný horizontální postup spolupráce na plnou šířku. Doplněna pravidla copy (účel stránky před textem). Commit `0a2a664`.

**Zdroj popisu:** AI konverzace

### Provedené změny
#### UX: jedna ┼íipka u odkazu Zobrazit p┼Ö├şklady na typick├Żch zak├ízk├ích.
**Co bylo uděláno:** UX: jedna ┼íipka u odkazu Zobrazit p┼Ö├şklady na typick├Żch zak├ízk├ích. (commit `cc570c6`). Dotcene oblasti: components.  
**Proč:** Prubezna uprava webu naturchem.cz v ramci dohodnutych UX a obsahovych ukolu.


#### Copy — hero a struktura textů
**Co bylo uděláno:** Sloučený hero lead (jedna věta o tom, co pro provozy měříme a zpracováváme), nový eyebrow, odstraněn odkaz na Reference. Sekce scénářů přejmenována na „Co řešíme“, titulky karet přeformulovány (např. „Měření emisí z lakovny“ místo „Potřebuji…“). Úprava ROADMAPA a copy-audit (C7 částečně hotovo).  
**Proč:** Stránka má návštěvníka inspirovat rozsahem měření a studií, ne vést katalogovým jazykem ani opakovat „Potřebuji“ v každé kartě.

#### Copy — pravidla pro další práce
**Co bylo uděláno:** Do copy-role a příkazu `/copy` doplněn princip „účel stránky před psaním“ — text se navrhuje podle toho, co má stránka dělat, ne jen přeformulováním starého copy.  
**Proč:** Aby copy sprinty nevedly na špatný kontext (orientační stránka vs. reference).

#### UX — příklady zakázek v modálu
**Co bylo uděláno:** Kategorie příkladů otevírají modál na stejné stránce se třemi příběhy zakázek; fixní hlavička modálu, zaoblené rohy, zavření Esc / backdrop. Kompaktnější karty kategorií a správná velikost nadpisů.  
**Proč:** Odchod na samostatnou URL byl matoucí — zákazník ztratil kontext stránky.

#### UX — Jak probíhá zakázka
**Co bylo uděláno:** Postup přes celou šířku: kolej s čísly 1–4 a spojnicemi (včetně dojezdu u kroku 4), pod ní čtyři sloupce s ikonou bez rámečku a popisem těsně pod nadpisem.  
**Proč:** Původní úzké boxy splývaly a kroky nepůsobily jako navazující cesta.

### Časová náročnost
**Odhadovaná doba práce:** ~46 min
**Rozložení:** 4. 6. 2026 18:25–19:10 (~46 min)
**Metoda odhadu:** git
**Počet výměn s AI:** ~12  
*Poznámka: čas ze skriptu `estimate-session-time.ps1` od posledního zpracovaného commitu; auto-záznam hooku nahrazen klientským přehledem.*

### Technická poznámka
`typicke-zakazky/page.tsx`, `typicke-zakazky-content.ts`, `CaseStudiesCategoryGrid.tsx`, `WorkProcessTimeline.tsx`, `globals.css` — commit `0a2a664`.

---

## Sezení: 4. 6. 2026, 18:24–18:35

### Přehled
Automaticky založené sezení po commitu `fbba8c6`.

**Zdroj popisu:** Git commit (automatická synchronizace)

### Provedené změny
#### Dokon─Źen├ş roadmapy vzor┼»: hero p┼Ö├şstrojov├ę vybaven├ş, markup ka...
**Co bylo uděláno:** Dokon─Źen├ş roadmapy vzor┼»: hero p┼Ö├şstrojov├ę vybaven├ş, markup kategori├ş zak├ízek. - Posledn├ş polo┼żky F a E u podstr├ínek typick├Żch zak├ízek; roadmapa p┼Öepnuta na procesn├ş kontrolu nov├Żch str├ínek.  Co-authored-by: Cursor <cursoragent@cursor.com> (commit `4b51611`). Dotcene oblasti: pristrojove-vybaveni, report, typicke-zakazky, vzory-aplikace-roadmapa.md, workflow.  
**Proč:** Posledn├ş polo┼żky F a E u podstr├ínek typick├Żch zak├ízek; roadmapa p┼Öepnuta na procesn├ş kontrolu nov├Żch str├ínek.  Co-authored-by: Cursor <cursoragent@cursor.com>.

#### Sitewide UI vzory: spacing po hero, hero leads, card-head a rytmus se...
**Co bylo uděláno:** Sitewide UI vzory: spacing po hero, hero leads, card-head a rytmus sekc├ş. - Aplikace vzor┼» z akreditace na informa─Źn├ş str├ínky, sjednocen├ş mezer mezi sekcemi na standard Reference a dokumentace v ux-role a roadmap─Ť.  Co-authored-by: Cursor <cursoragent@cursor.com> (commit `fbba8c6`). Dotcene oblasti: app, components, faq, kontakt, lib, poradna, pristrojove-vybaveni, provozy-a-technologie, reference, report, typicke-zakazky, ux-role.md, vzory-aplikace-roadmapa.md, workflow.  
**Proč:** Aplikace vzor┼» z akreditace na informa─Źn├ş str├ínky, sjednocen├ş mezer mezi sekcemi na standard Reference a dokumentace v ux-role a roadmap─Ť.  Co-authored-by: Cursor <cursoragent@cursor.com>.

### Časová náročnost
**Odhadovaná doba práce:** ~11 min
**Rozložení:** 4. 6. 2026 18:24–18:35 (~11 min)
**Metoda odhadu:** git
**Počet výměn s AI:** —  
*Poznámka: automatický záznam z post-commit hooku.*

### Technická poznámka
Commit: `fbba8c6660e915ba119a67201827b21a86765811`

---

## Sezení: 4. 6. 2026 — sitewide mezery mezi sekcemi

### Přehled
Oprava nadměrných vertikálních mezer mezi sekcemi napříč webem — standard jako stránka Reference (jedna mezera `--section-padding-y`).

**Zdroj popisu:** AI konverzace + screenshot Typické zakázky

### Provedené změny

#### Sitewide CSS — rytmus sekcí
**Co bylo uděláno:** V `globals.css` pravidla pro sousedící `.section` / `.content-block` (padding-bottom 0, mezera jen padding-top následníka), první vnořená sekce v `.page-first-section`, `.section + .container`, zmenšen gap `.sector-group-stack`.  
**Proč:** Dvojitý padding u vnořených sekcí (např. Typické zakázky) dělal obří mezery.

#### Typické zakázky — markup
**Co bylo uděláno:** Flat `section.content-block.container` pod `<main>` jako Reference, bez wrapperu `div.container`.  
**Proč:** Stejná struktura jako etalon + spolehlivé chování globálních pravidel.

#### Dokumentace
**Co bylo uděláno:** `ux-role.md`, `vzory-aplikace-roadmapa.md`.  
**Proč:** Sitewide standard pro další stránky.

### Časová náročnost
**Odhadovaná doba práce:** ~45 min  
**Metoda odhadu:** konverzace

### Technická poznámka
`src/app/globals.css`, `src/app/typicke-zakazky/page.tsx`, `naturchem-projekt/04-ai-role/ux-role.md`, `naturchem-projekt/07-sitewide-vzory/vzory-aplikace-roadmapa.md`

---

## Sezení: 4. 6. 2026 — sitewide aplikace UI vzorů

### Přehled
Aplikace vzorů z `/akreditace` napříč informačními stránkami: spacing po hero (Vzor E), hero leads (Vzor F), card-head a ikony na přístrojovém vybavení a service pages (A, B), ověření CTA karet na typických zakázkách (C).

**Zdroj popisu:** AI konverzace + plán sitewide UI vzorů

### Provedené změny

#### Vzor E — spacing po PageHeroBand
**Co bylo uděláno:** Sitewide třída `.page-first-section` v `globals.css` (`clamp(2rem, 4vw, 3rem)` pod hero). Přidána na 7 stránek: reference, kontakt, typické zakázky, FAQ, poradna, provozy, přístrojové vybavení. Sjednocen margin u kontaktního layoutu.  
**Proč:** Konzistentní dýchací prostor mezi hero a prvním obsahem jako na akreditaci.

#### Vzor F — hero leads
**Co bylo uděláno:** Přepsány `.page-lead` / intro copy na reference, typické zakázky, FAQ, poradna, provozy — jedna věta, zákaznický benefit, konkrétní úřady (ČIŽP, KHS, stavební úřad).  
**Proč:** Vzor konverzního copy z akreditace a O společnosti.

#### Vzory A a B — card-head a ikony bez rámečku
**Co bylo uděláno:** Přístrojové vybavení — `.equipment-card-head` v accordionu. Service pages — override rámečku u decision/extra card-head, `flex-start` u nadpisů.  
**Proč:** Vizuální sjednocení s akreditací a homepage offer kartami.

#### Vzor C — typické zakázky
**Co bylo uděláno:** Ověřeno — scénáře a kategorie používají `SemanticCard` s `margin-top: auto` na CTA; úprava kódu nebyla potřeba.  
**Proč:** Roadmapa — zarovnání CTA ve spodní hraně karet.

#### Dokumentace
**Co bylo uděláno:** Aktualizována `vzory-aplikace-roadmapa.md` — většina položek ✅ nebo ➖.  
**Proč:** Evidence pro další práce na webu.

### Časová náročnost
**Odhadovaná doba práce:** ~1 hodina  
**Metoda odhadu:** konverzace  
**Počet výměn s AI:** —

### Technická poznámka
`src/app/globals.css`, `src/app/reference/page.tsx`, `src/app/kontakt/page.tsx`, `src/app/typicke-zakazky/page.tsx`, `src/app/faq/page.tsx`, `src/app/poradna/page.tsx`, `src/app/provozy-a-technologie/page.tsx`, `src/app/pristrojove-vybaveni/page.tsx`, `src/lib/reference-content.ts`, `src/lib/faq.ts`, `src/components/EquipmentAccordion.tsx`, `naturchem-projekt/07-sitewide-vzory/vzory-aplikace-roadmapa.md`

---

## Sezení: 4. 6. 2026, 18:01–18:17

### Přehled
Automaticky založené sezení po commitu `92eedd5`.

**Zdroj popisu:** Git commit (automatická synchronizace)

### Provedené změny
#### UX role + roadmapa: padding vzory a sitewide aplikace vzoru komponent.
**Co bylo uděláno:** UX role + roadmapa: padding vzory a sitewide aplikace vzoru komponent. (commit `4c172b8`). Dotcene oblasti: report, ux-role.md, vzory-aplikace-roadmapa.md, workflow.  
**Proč:** Uprava procesu reportovani prace - pruhledna evidence casu a zmen pro klienta.

#### UX role: zavedene vzory komponent z implementace akreditace (card-hea...
**Co bylo uděláno:** UX role: zavedene vzory komponent z implementace akreditace (card-head, ikony, download karty). (commit `92eedd5`). Dotcene oblasti: ux-role.md.  
**Proč:** Prubezna uprava webu naturchem.cz v ramci dohodnutych UX a obsahovych ukolu.

### Časová náročnost
**Odhadovaná doba práce:** ~17 min
**Rozložení:** 4. 6. 2026 18:01–18:17 (~17 min)
**Metoda odhadu:** git
**Počet výměn s AI:** —  
*Poznámka: automatický záznam z post-commit hooku.*

### Technická poznámka
Commit: `92eedd5b57ef074e8bb4a5871d8dd0ae90606b70`

---

## Sezení: 4. 6. 2026, 17:30–17:40

### Přehled
Copy sprint C3 — kompletní přepis stránky /akreditace-autorizace-dokumenty dle TOV, navazující UX opravy ikony a layout. Hero lead přepsán ze tří iterací na finální variantu zaměřenou na zákazníkův výsledek (obstojí při kontrole ČIŽP, KHS, stavební řízení). Commitnuto a nasazeno na Vercel.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Copy — hero lead
**Co bylo uděláno:** Původní technický popis „Přehled akreditovaného rozsahu…" nahrazen zákaznicky orientovanou větou: „Výsledky z NATURCHEM obstojí při kontrole ČIŽP, KHS i v stavebním řízení — tady jsou osvědčení, která za nimi stojí." Po třech iteracích variant (technická, benefit-first, přímá, důkaz) schválena varianta zaměřená na výsledek pro zákazníka. Hero lead sloučen do jedné věty s em-dash — výsledek se nezalomí na samostatné slovo.  
**Proč:** Původní text byl katalogový a suchý; zákazník (Tomáš, EHS manažer) potřebuje vědět, že výstup obstojí při reálné kontrole, ne že stránka přehledově vysvětluje rozsah osvědčení.

#### Copy — customerBenefits (Co akreditace znamená pro zákazníka)
**Co bylo uděláno:** Čtyři benefity přepsány z vágních frází na konkrétní: „Výsledky dohledatelné a obhajitelné při kontrole", „Protokoly přímo pro ČIŽP, KHS nebo stavební úřad", „Odborný výklad výsledků — nejen čísla", „Vždy v souladu s platným osvědčením a jeho přílohou". Přidány ikony ze stávajícího systému ServiceIcon (štít, dokument s checkmarkem, školení, ověřovací odznak).  
**Proč:** Původní text jmenoval správní orgány vágně jako „správní orgány"; pojmenování ČIŽP, KHS a stavebního úřadu přímo odpovídá situacím, ve kterých zákazník akreditaci potřebuje.

#### Copy — autorizace a CTA
**Co bylo uděláno:** Intro odstavec sekce autorizací přepsán — „jsou kryty samostatnými autorizacemi Ing. Heziny" místo pasivní formulace. EIA autorizace zkrácena na „podklady a oznámení záměru pro EIA řízení". CTA strip aktualizován na zákaznickou otázku: „Nejste si jistí, zda Váš případ akreditace pokrývá? Pošlete popis zdroje nebo záměru — odpovíme."  
**Proč:** Kratší, aktivní formulace odpovídá TOV; jméno Heziny v autorizacích propojuje s profilem O společnosti.

#### UX — ikony a karty
**Co bylo uděláno:** Autorizační karty přepracovány: ikona + nadpis ve stejném řádku (`.authorization-card-head`), ikony bez rámečku. Scope karty (Emise, Hluk, Osvětlení…) dostaly odpovídající ikony vedle nadpisu ze stávajícího mapování `getAccreditationScopeIconKey`. Download karty přestavěny z celé karty jako odkazu na kartu s tlačítkem „Stáhnout PDF" — tlačítko vždy na stejné výšce dole ve všech kartách díky flex `margin-top: auto`.  
**Proč:** Vizuální konzistence se zbytkem webu; zákazník potřebuje jasný prvek ke stažení dokumentu, ne celou kartu jako link.

#### UX — spacing a zarovnání
**Co bylo uděláno:** Snížen `padding-top` karet v sekci overview. Odstraněny rámečky (border/background) z ikon v mini-kartách i autorizačních kartách — ikony čistší bez dekorativního boxu. Zmenšen h3 font-size v autorizačních kartách (0.9 rem) aby tituly nepřetékaly přes ikony. `align-items: flex-start` pro konzistentní zarovnání ikony s horním okrajem textu.  
**Proč:** Zákazník upozornil na zbytečné rámečky, velké mezery a nezarovnané řádky — vizuální detaily, které snižují dojem odbornosti stránky.

### Časová náročnost
**Odhadovaná doba práce:** ~1 hod 15 min  
**Rozložení:** 4. 6. 2026 17:30–17:40 (git: 1 commit) — celé sezení proběhlo v Claude Code bez Cursor activity logu  
**Metoda odhadu:** výměny (~25 kol × 3 min = fallback; skript naměřil jen 10 min z 1 commitu)  
**Počet výměn s AI:** ~25  
*Poznámka: Claude Code neprodukuje activity log pro skript — čas odvozen z počtu výměn. Skript `estimate-session-time.ps1` naměřil 10 min (1 git event bez padding bloku konverzace).*

### Technická poznámka
`src/app/akreditace-autorizace-dokumenty/page.tsx`, `src/app/globals.css`, `src/lib/accreditation-scope.ts`, `src/lib/cta.ts` — commit `496cfaf`.

---

## Sezení: 31. 5. 2026, 14:19–14:27

### Přehled
Srovnání vertikální mezery pod mřížkou log zákazníků — na homepage i na stránce Reference byla mezera k další sekci („Příklady z praxe“ / patička) výrazně větší než mezera nad nadpisem „Naši zákazníci“. Úprava v CSS, commitnuto a pushnuto na GitHub.

**Zdroj popisu:** AI konverzace

### Provedené změny

#### Mezera pod logy zákazníků
**Co bylo uděláno:** U sousedících sekcí `.section.content-block` se přestalo sčítat spodní padding a margin — mezera k následující sekci odpovídá jen hornímu paddingu (stejně jako nad prvním nadpisem). Na homepage má patička `margin-top` podle `--section-padding-y` místo pevných 3 rem, takže mezera pod logy odpovídá mezeře nad eyebrow „Naši zákazníci“.  
**Proč:** Klient vizuálně ověřil na mobilu i desktopu, že bílý prostor pod logy působil nadměrně a narušoval rytmus stránky.

#### Commit a nasazení
**Co bylo uděláno:** Produktová změna commitnutá (`73744a8`) a pushnutá na `origin/main`.  
**Proč:** Nasazení opravy spacingu na Vercel.

### Časová náročnost
**Odhadovaná doba práce:** ~13 min  
**Rozložení:** 31. 5. 2026 14:19–14:27 (~13 min)  
**Metoda odhadu:** git + konverzace  
**Počet výměn s AI:** 3  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. Každý blok má +5 min před začátkem a +5 min po konci (`sessionPaddingMinutesBefore` / `After` v `report-config.json`).*

### Technická poznámka
Soubor `src/app/globals.css` — pravidla pro sousedící `.content-block` a `main.home-page + .site-footer`.

---

## Sezení: 31. 5. 2026, 14:18–14:19

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
**Rozložení:** 31. 5. 2026 14:18–14:19 (~12 min)  
**Metoda odhadu:** konverzace  
**Počet výměn s AI:** 2  

---

## Sezení: 31. 5. 2026, 14:12–14:17

### Přehled
Uzavření otevřených položek z ROADMAPA — ověřené metriky a odstranění duplicitní stránky Odborná garance. Úprava mřížky log zákazníků: Dura zpět na desktopu, chování buňky „a mnoho dalších..“ bez falešného rozbalení.

**Zdroj popisu:** AI konverzace + git commity

### Provedené změny

#### Odstranění /odborna-garance (P2-6)
**Co bylo uděláno:** Smazána samostatná stránka `/odborna-garance`, odstraněn redirect a odkaz „Více o odborné garanci“ ze stránky O společnosti — obsah garance tam už je. ROADMAPA aktualizována.  
**Proč:** Obsah byl duplicitní; klient potvrdil, že samostatná stránka není potřeba.

#### Ověření metrik s Hezinou
**Co bylo uděláno:** V ROADMAPA označeno jako hotové: „36 let odborné činnosti“, počty zakázek, měření a certifikátů.  
**Proč:** Před publikací webu musí být čísla na homepage a ve stats ověřená — klient je potvrdil.

#### Loga zákazníků — Dura a chování overflow
**Co bylo uděláno:** Na desktopu zobrazeno všech 19 log včetně Dury; buňka „a mnoho dalších..“ je statická, pokud nejsou skrytá loga. Na stránce Reference rozbalení zbývajících log jen při reálném overflow (`expandable`).  
**Proč:** Po capu na 2 řádky chyběla Dura na desktopu; na mobilu působilo kliknutí na „více“ matoucí, když nebylo co rozbalit.

### Časová náročnost
**Odhadovaná doba práce:** ~13 min  
**Rozložení:** 31. 5. 2026 14:12–14:17 (~13 min)  
**Metoda odhadu:** git  
**Počet výměn s AI:** ~4  
*Poznámka: commity `0ec29c4`, `a2ab851`.*

### Technická poznámka
`src/lib/redirects.ts`, `src/app/o-spolecnosti-naturchem/page.tsx`, `ClientLogosGrid.tsx`, `client-logos.ts` — commity `0ec29c4`, `a2ab851`.

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
