# UX Audit — naturchem.cz
**Datum:** 2026-05-25  
**Rozsah:** Celý web (homepage + ~24 service pages + 10 sector pages + 12 podpůrných stránek)  
**Metodika:** Analýza zdrojového kódu (Next.js/TSX), mapování sekcí, počtu informačních prvků a konverzní logiky

---

## Souhrnná diagnóza

Web trpí **systematickým informačním přetížením** — každá stránka obsahuje o 30–50 % více sekcí, karet a textu, než je potřeba pro konverzní účel. Problém není v jednom místě, ale ve vzorci, který se opakuje napříč celým webem: _přidávání obsahu bez mazání_.

Čtyři hlavní symptomy:
1. **Příliš mnoho sekcí na stránku** — průměrná service page má 7+ logických bloků, homepage 8 sekcí
2. **Tři „related" sekce na konci každé service page** — odvádějí návštěvníka od konverze v momentě, kdy byl nejblíže k akci
3. **Klíčové stránky bez primárního CTA** — o-nas, odborna-garance, akreditace nemají jasnou výzvu k akci
4. **Chybí vizuální přestávky** — stránky jsou textové bloky bez hero vizuálů, ilustrací procesu a konzistentních ikon; návštěvník se v obsahu špatně orientuje

Dobrou zprávou je, že **konverzní jádro webu je správně navrženo** (decision panel na service pages, trust band, hero se třemi úrovněmi záměru). Úpravy P1–P4 jsou převážně o _mazání_; P5 přidává _vizuální scanovatelnost_ jako navazující vrstvu.

---

## Globální problémy (cross-cutting)

Tyto problémy se vyskytují na více místech najednou — oprava šablony je opraví všude.

### G1 — Tři „related" sekce na konci service pages
Každá service page (ServicePage.tsx) završuje obsah třemi sekcemi:
- Navazující témata a dokumentace
- Typické provozy a technologie (sector cross-links)
- Související služby

V praxi to znamená 6–9 karet za sebou, všechny říkající „jdi jinam". Návštěvník, který dočetl až sem, je na hranici rozhodnutí — místo CTA ho web odvede do navigace. **Oprava: sjednotit do jedné sekce, max 3 karty, pod názvem „Mohlo by Vás zajímat".**

### G2 — Accordion detailGroups (5 skupin za collapse)
Za tlačítkem „Doplňující informace" se skrývá až 5 karet: Pro koho, Typické úřady, Příklady zakázek, Jak probíhá zakázka, Časté chyby. To je kompletní sekundární stránka skrytá za jedním elementem. **Oprava: ponechat max 1–2 skupiny (doporučeno: Příklady zakázek + Časté chyby), zbytek smazat.**

### G3 — Intro texty service pages jsou příliš dlouhé
Průměrná délka intro odstavce: 30–47 slov (optimum pro konverzní web je 15–25 slov, max 2 věty). Intro texty jsou technicky přesné, ale věty jsou komplexní a vrstvené. **Oprava: zkrátit každé intro na max 2 věty / 25 slov.**

### G4 — Nekonzistentní práce s CTA
Některé stránky mají 8+ CTA (kontakt), jiné mají 1 nebo žádný (odborna-garance, o-nas konec). Neexistuje jednotný vzor: „primární tlačítko nahoře, sekundární nahoře, jeden CTA strip dole". **Oprava: standardizovat na vzor: 1 primary + 1 secondary v hero, 1 CTA strip na konci.**

### G5 — Stránky fungující jako přesměrování bez obsahu
`/o-nas` → `/o-spolecnosti-naturchem`, `/akreditace-a-autorizace` → `/akreditace-autorizace-dokumenty`, `/redakce` → `/poradna` — tyto redirecty jsou v pořádku, ale ukazují, že některé URL existují jen jako aliasy. Nutno ověřit, zda jsou správně označeny jako 301 a zda jsou vyloučeny ze sitemapy.

### G6 — Chybí vizuální scanovatelnost (wall-of-text)
Web po P1–P3 redukcích textu **stále působí jako souvislý text bez vizuálních kotvy** — chybí přestávky mezi sekcemi, hero vizuály a konzistentní ikonografie. Návštěvník (persony Tomáš, Martin) potřebuje rychlý scan: hero vizuál → karty → čísla → CTA. Bez fotek od klienta lze řešit **Fázi A** (stock, ikony, typografie, střídání sekcí) — detailní strategie v `../06-graficky-audit/graficky-audit.md`. **Oprava: viz P5 (většina ✅); zbývá P5-B reálné fotky.**

### G7 — Příliš velké vertikální mezery mezi sekcemi
Globální padding `.section` / `.home-section` byl `clamp(4rem, 7vw, 6.5rem)` — až 208 px mezi obsahem sekcí. **Oprava: P6-1 — token `--section-padding-y: clamp(2rem, 3.5vw, 3.25rem)`.**

---

## 1. Homepage

**Aktuální struktura (6 sekcí, po Sprintu 10):**
1. Hero (foto + H1 + CTA)
2. Trust band (akreditace, ISO, autorizace…)
3. Kompaktní stats (3 čísla bez nadpisu — `ExperienceStats variant="compact"`)
4. Co zajišťujeme (3 karty)
5. Reference teaser + CTA strip + loga zákazníků

**Poznámka k P5-12:** Původní implementace vložila plnou sekci „Odborná garance“ mezi hero a trust band — to oddálilo akreditace od hero. Sprint 10 obnovil pořadí Hero → Trust → Stats.

**Poznámka k P5-14–16 (mobilní fold, 2026-05-31):** Na desktopu zůstává Hero → Trust → Stats. Na mobilu (`<1024px`, scope `.home-page`) se trust band skrývá, hero má zkrácený eyebrow („Akreditovaná laboratoř · ISO 17025") a jednovětý lead, stats jsou 3 kompaktní karty vedle sebe s ikonami a zkrácenou textací.

### Problémy (historické + zbývající)

| # | Sekce | Problém | Dopad |
|---|-------|---------|-------|
| H1 | Pro koho pracujeme | 6 karet segmentů duplicitně pokrývají to, co říkají karty „Co zajišťujeme". Návštěvník vidí dvakrát tutéž informaci jinak zformulovanou. | Prodlužuje scroll o ~700 px bez přidané hodnoty |
| H2 | Jak probíhá zakázka | Přichází na pozici #5 — návštěvník ještě nerozhodl, zda firmu vůbec chce. Procesní sekce patří na /o-nas nebo na spodek stránky po referenci. | Předčasné — snižuje zájem místo aby ho budoval |
| H3 | Reference teaser | Sekce obsahuje pouze tagy segmentů + 3 generické příklady zakázek. Nestaví skutečnou důvěru, protože příklady nejsou konkrétní. | Slabé social proof — ztracená příležitost |
| H4 | Hero lead paragraph | 40+ slov, věta s mnoha čárkami. Málokdo ji dočte celou. | První dojem oslaben |

### Doporučená struktura homepage (6 sekcí — implementováno Sprint 10)

```
[Hero]           H1 + lead + 2 CTA + "nevím co potřebuji"
[Trust band]     akreditace, autorizace, ČIŽP, KHS…
[Stats compact]  3 čísla bez nadpisu (plná verze na /o-spolecnosti)
[Co zajišťujeme] 3 karty: Měření / Studie / Dokumentace
[Reference]      teaser + CTA "Zobrazit reference"
[CTA + loga]     PageCtaStrip + loga zákazníků
```

---

## 2. Service pages — šablona ServicePage.tsx

ServicePage.tsx je sdílenou šablonou pro všechny service stránky. Problémy v šabloně se projeví na všech ~24 stránkách najednou. Konverzní jádro šablony (**decision panel se třemi kartami: Rozsah / Co dostanete / Jak začít**) je správně navrženo — nesahat.

### Problémy šablony

| # | Problém | Kde | Dopad |
|---|---------|-----|-------|
| S1 | 3 sekce „related" za sebou | Konec každé stránky | Odvádí od CTA |
| S2 | Accordion detailGroups s 5 skupinami | Za decision panelem | Přetěžuje i „skrytý" obsah |
| S3 | CTA strip na konci slabý | Sekce „Poptávka" | Opakuje to, co hero — OK, ale copy je generické |

### Doporučená struktura service page

```
[Breadcrumb]
[Hero]            H1 + intro (2 věty max) + 2 CTA + panel "Typické důvody"
[Decision panel]  3 karty — zachovat
[Doplnění]        details/accordion — max 2 skupiny (Příklady zakázek + Časté chyby)
[FAQ teaser]      zachovat kde je
[Related]         1 sekce, max 3 karty (buď témata NEBO provozy — ne obojí)
[CTA strip]       zachovat
```

---

## 2a. Měřicí služby

### /mereni-emisi — Měření emisí ze stacionárních zdrojů
**Stav:** V pořádku. Nejkomplexnější service page (6 praktických situací, 4 autority). Dobře napsaná intro (35 slov — trochu dlouhá, ale věcná).  
**Problém:** 6 practicalSituations se zobrazí v detailGroups — příliš mnoho.  
**Oprava:** Omezit na 3 příklady (jsou tak nakódovány `.slice(0, 3)`  ✓ — zkontrolovat zda se všechny renderují).

### /pracovni-prostredi — Měření pracovního prostředí
**Stav:** V pořádku. Intro 21 slov — správná délka.  
**Problém:** 6 relatedLinks — na spodku stránky pak vznikají 4 sekce karet za sebou (6 related + sector links + 3 similar services = potenciálně 12+ karet).  
**Oprava:** Omezit relatedLinks na 3, aplikovat G1.

### /mereni-vibraci — Měření vibrací
**Stav:** DedicatedServiceRoute, data v centrálním souboru. Intro ~20 slov — správná délka.  
**Problém:** Sdílí problémy šablony (G1, G2).  
**Poznámka:** Tato stránka a další z DedicatedServiceRoute mají sdílená data — úprava v jednom místě.

### /mereni-mikroklimatu — Měření mikroklimatu
**Stav:** DedicatedServiceRoute. Intro ~30 slov.  
**Problém:** Sdílí problémy šablony.

### /mereni-osvetleni — Měření osvětlení
**Stav:** DedicatedServiceRoute. Intro ~47 slov — **nejdelší intro v kategorii, nad limitem**.  
**Oprava:** Zkrátit intro na 2 věty, max 25 slov.

### /mereni-hluku-hlukove-studie — Měření hluku a akustika
**Stav:** Inline ServicePage. Intro ~44 slov — nad limitem.  
**Problém:** Stránka existuje jako „hub" pro hluk + studie, ale /hlukove-studie a /akusticke-posudky jsou samostatné stránky. Hrozí obsahová duplicita.  
**Doporučení:** Zřetelněji odlišit: tato stránka = terénní měření hluku; /hlukove-studie = modelové výpočty pro povolení. Zkrátit intro.

### /imisni-a-hlukove-dopady-zameru — Imisní a hlukové dopady záměrů
**Stav:** DedicatedServiceRoute. Intro ~26 slov — v pořádku.  
**Problém:** Sdílí problémy šablony.

---

## 2b. Studie a výpočty

### /hlukove-studie — Hlukové studie
**Stav:** DedicatedServiceRoute. Intro ~31 slov — na hranici.  
**Problém:** Viz výše — překryv s /mereni-hluku-hlukove-studie. Nutno mít jasné odlišení v intro textu.

### /rozptylove-studie — Rozptylové studie
**Stav:** Inline ServicePage. Intro ~43 slov — nad limitem.  
**Problém:** 5 practicalSituations (zobrazuje se 3 z nich — OK).  
**Oprava:** Zkrátit intro.

### /modelove-vypocty — Modelové výpočty
**Stav:** DedicatedServiceRoute. Intro ~25 slov — OK.  
**Problém:** Sdílí problémy šablony.

### /akusticke-posudky — Akustické posudky
**Stav:** DedicatedServiceRoute. Intro ~27 slov — OK.  
**Problém:** Sdílí problémy šablony.

---

## 2c. Dokumentace a povolování

### /eia-posudky-poradenstvi — EIA, posudky, provozní řády a IPPC
**Stav:** Největší dokumentační hub, 5 položek v scope (ostatní mají 4). Přímé kódování v page.tsx.  
**Problém:** scope má 5 položek → decision panel zobrazuje jen 4 (slice) — 5. položka se ztratí. Zkontrolovat.  
**Oprava:** Zvážit, zda 5. položka scope patří do textu, ne do seznamu.

### /eia-oznameni-zameru, /zjistovaci-rizeni-eia
**Stav:** DedicatedServiceRoute.  
**Poznámka:** Dvě stránky pokrývající EIA proces — správné oddělení. Intro texty ~36–38 slov — zkrátit.

### /ippc-integrovana-povoleni — IPPC a integrovaná povolení
**Stav:** DedicatedServiceRoute. Intro ~31 slov — na hranici.

### /ispop-souhrnna-provozni-evidence — ISPOP
**Stav:** DedicatedServiceRoute. Intro ~25 slov — OK. Nemá nastaveno faqCategoryId — chybí FAQ teaser.  
**Oprava:** Přidat faqCategoryId pokud existují FAQ k ISPOP.

### /ghg-overovani-emisi-sklenikovych-plynu — GHG
**Stav:** DedicatedServiceRoute. Intro ~24 slov — OK. Nemá faqCategoryId.

### /odborne-posudky — Odborné posudky
**Stav:** DedicatedServiceRoute. Intro ~38 slov — nad limitem. Zkrátit.

### /povoleni-provozu-zdroje — Povolení provozu
**Stav:** DedicatedServiceRoute. Intro ~36 slov — zkrátit.

### /provozni-rady — Provozní řády
**Stav:** DedicatedServiceRoute. Intro ~27 slov — OK.

### /bezpecnostni-listy — Bezpečnostní listy
**Stav:** DedicatedServiceRoute. Intro ~28 slov — OK. Nemá faqCategoryId.

### /chemicke-latky-v-provozu — Chemické látky v provozu
**Stav:** DedicatedServiceRoute. Intro ~28 slov — OK. Nemá faqCategoryId.

### /technicke-prilohy-pro-investory — Technické přílohy pro investory
**Stav:** DedicatedServiceRoute. Intro ~35 slov — zkrátit.

---

## 2d. Školení a podpora

### /skoleni-chemicke-legislativy — Školení chemické legislativy
**Stav:** ⚠️ **Výjimka — nepoužívá ServicePage komponent.** Má vlastní layout s jinak pojmenovanými poli (audience, scope, inputs, outputs místo forWhom, scope, docs, outputs).  
**Problémy:**
- Nekonzistentní s ostatními service pages (různý vizuální jazyk)
- Chybí whenNeeded a commonMistakes sekce
- Nemá faqCategoryId
- Intro ~42 slov — nad limitem

**Oprava (střednědobá):** Migrovat na ServicePage šablonu nebo vytvořit sdílenou SchoolingPage šablonu. Short-term: zkrátit intro, přidat CTA strip.

---

## 3. Provozy a technologie (sector pages)

Všechny sector pages používají SectorPage šablonu, která je **konzistentní a konverzně správná** — každá stránka obsahuje CTA, typické problémy, výstupy a FAQ. Template je dobře navržen.

### Přehled 10 unikátních stránek

| Stránka | Téma | Poznámka |
|---------|------|----------|
| /automotive | Automotive a technické textilie | OK |
| /bioplyn-biometan | Bioplyn a biometan | OK |
| /drevozpracujici | Dřevozpracující provozy | OK |
| /kotelny | Kotelny a spalovací zdroje | Kanonická URL, OK |
| /lakovny | Lakovny | OK |
| /odpady-recyklace | Odpady a recyklace | Kanonická URL, OK |
| /sklarstvi | Sklářské provozy | Kanonická URL, OK |
| /svarovny | Svařovny | OK |
| /tepelna-cerpadla-vzt | Tepelná čerpadla a VZT | OK |
| /zemedelske-provozy | Zemědělské provozy | OK |

### Redirect aliasy (správně nastaveny)

| Alias URL | Cíl |
|-----------|-----|
| /kotelny-spalovaci-zdroje | → /kotelny |
| /recyklace-odpady | → /odpady-recyklace |
| /sklarske-provozy | → /sklarstvi |

### Problémy sector pages

| # | Problém | Dopad |
|---|---------|-------|
| T1 | Všechny stránky mají přesně 4/4/4/3/3/2 položek — přílišná uniformita | Stránky vypadají identicky, obsah se splývá |
| T2 | FAQ má jen 2 otázky na každé stránce | Příliš málo pro reálnou informační hodnotu |
| T3 | Related services jsou 3 linky — u některých stránek se vrší s dalšími linky z jiných sekcí | Viz G1 |

**Hlavní doporučení:** Sector pages jsou nejlépe navržená část webu — hlavní zásah je přes G1 (related sekce). Konkrétní obsah jednotlivých stránek je věcně správný.

---

## 4. Ostatní stránky z hlavního menu

### /sluzby — Přehled služeb
**Struktura:** Minimální — header + ServiceGroupsIndex komponenta + 1 CTA  
**Stav:** V pořádku jako index stránka.  
**Problém:** Jen 1 CTA (kontakt) dole. Zvážit přidání CTA bližší k horní části pro uživatele, kteří neví, co hledají.  
**Oprava:** Přidat krátkou intro větu + „Nevíte, co potřebujete?" link hned pod header.

---

### /o-nas → /o-spolecnosti-naturchem
`/o-nas` je 301 redirect — správně.

### /o-spolecnosti-naturchem — O společnosti NATURCHEM
**Struktura (10 sekcí):**
1. Hero s proof panelem
2. Zkušenosti v číslech (stats)
3. Kdo jsme (2 sloupce + linky)
4. Měření, studie a dokumentace v jednom procesu
5. Technické a přístrojové zázemí (panel s CTA)
6. Odborná garance (profil osoby)
7. Tým
8. Typičtí zákazníci (checklist + link)
9. Jak pracujeme (4 kroky)

**Problémy:**

| # | Problém | Dopad |
|---|---------|-------|
| O1 | 9–10 sekcí na jedné stránce — obsah pro „firemní web", ne pro konverzní stránku | Visitor se ztratí, nezapamatuje nic |
| O2 | Stránka **nemá primární CTA** — končí procesním timelinenem bez výzvy k akci | Ztracená konverze |
| O3 | Sekce „Jak pracujeme" je duplicitní s homepage selekcí „Jak probíhá zakázka" (pokud ta zůstane) | Redundance |
| O4 | Sekce „Odborná garance" + samostatná stránka /odborna-garance — duplicita obsahu | Dezorientující IA |

**Doporučená struktura:**
```
[Hero]           Krátký positioning statement + 1 CTA
[Kdo jsme]       Max 3 odstavce (ne 2 sloupce plné textu)
[Čísla]          Stats band — zachovat
[Tým]            Zachovat
[Zákazníci]      Zachovat (segmenty)
[CTA strip]      Kontaktovat / Zobrazit reference
```

---

### /reference — Reference a zkušenosti
**Struktura (5 sekcí):**
1. Hero header
2. Reference podle oblastí (semantic cards s CTAs)
3. „Vybrané zkušenosti" — heading + intro odstavec (bez karet)
4. Anonymizované příklady zakázek (ReferenceExampleCard grid)
5. „Další krok" (3 CTA tlačítka)

**Problémy:**

| # | Problém | Dopad |
|---|---------|-------|
| R1 | Sekce „Vybrané zkušenosti" obsahuje jen nadpis + intro — **bez skutečného obsahu/karet** | Vypadá nedokončeně |
| R2 | 3 CTA tlačítka na konci míří na stejný formulář s různými parametry | Zmatení uživatele |
| R3 | „Reference podle oblastí" = semantic cards + „Anonymizované příklady" = jiné karty — dva různé formáty vedle sebe | Nekonzistentní vizuální jazyk |

**Oprava:** Sekci „Vybrané zkušenosti" buď naplnit konkrétními kartami nebo smazat. 3 CTA tlačítka zredukovat na 1 primární.

---

### /kontakt — Kontakt
**Struktura (7 sekcí):**
1. Hero s 3 akčními tlačítky (telefon, email, link na formulář)
2. Quick contact sidebar (telefon, email, adresa + 2 tlačítka)
3. Kontaktní formulář
4. Co je vhodné přiložit (7 položek s ikonami)
5. Rychlé poptávkové cesty (7 semantic karet)
6. Tým
7. Firemní info panel (3 sloupce: kontakty + pobočky)

**Problémy:**

| # | Problém | Dopad |
|---|---------|-------|
| K1 | Telefon a email se opakuje **4× na jedné stránce** (hero, sidebar, tým, firemní info) | Vizuální šum, neprofesionální dojem |
| K2 | 7 semantic karet „Rychlé poptávkové cesty" — návštěvník, který přišel z konkrétní service page, nepotřebuje vybírat znovu | Přetěžuje a opakuje navigaci |
| K3 | Sekce „Co je vhodné přiložit" má 7 položek — správný obsah, ale příliš velký blok před formulářem | Odkládá hlavní CTA (formulář) |
| K4 | Tým na stránce kontakt — relevantní, ale přidává scroll | Není kritické, ale přidává délku |

**Doporučená struktura:**
```
[Hero]          Stručný heading + telefon + email (1× každý)
[Formulář]      Hlavní konverzní prvek — co nejvýše
[Co přiložit]   Zkrátit na 4 body, umístit vedle/pod formulář
[Pobočky]       Jednoduché textové info, ne sekce
```
Odstranit: „Rychlé poptávkové cesty" (duplikuje navigaci), tým (patří na /o-nas).

---

### /poradna — Odborná poradna
**Struktura (4 sekce):**
1. Hero header
2. Topic filter pills (7 kategorií)
3. Article grid (dynamický)
4. „Chystaná témata k chemické legislativě" (karta s 5 plánovanými tématy + CTA)
5. „Máte konkrétní dotaz?" (final CTA karta)

**Problémy:**

| # | Problém | Dopad |
|---|---------|-------|
| P1 | **Filter pills jsou `<span>` elementy — nejsou klikatelné.** Vizuálně vypadají jako buttony, ale nefungují. | Frustruje uživatele |
| P2 | „Chystaná témata" sekce — zobrazuje obsah, který ještě neexistuje | Podkopává důvěryhodnost |
| P3 | Dvě CTA sekce za sebou (Chystaná témata + Máte dotaz?) — redundantní | Slabá UX |

**Oprava:**
- Filter pills: buď implementovat filtrování NEBO smazat
- „Chystaná témata": smazat nebo přesunout do interní poznámky
- Sjednotit na 1 final CTA

---

### /faq — Časté otázky
**Struktura:** Jen breadcrumbs + FaqPageContent komponenta.  
**Stav:** Nelze plně auditovat bez vidění FaqPageContent. Ověřit: má stránka primární CTA? Je obsah accordion nebo flat list?  
**Doporučení:** Přidat CTA strip pod FAQ list (typicky: „Nenašli jste odpověď? Zeptejte se nás").

---

## 5. Podpůrné stránky

### /akreditace-autorizace-dokumenty — Akreditace a autorizace
**Struktura (7 sekcí):**
1. Hero header
2. 2 sloupce: fakta o akreditaci + benefity pro zákazníka
3. Rozsah laboratoře (6 scope karet + odkaz na PDF)
4. Přístrojové vybavení (panel s odkazem + CTA)
5. Autorizace (4 karty)
6. Ke stažení (download karty + poznámka + CTA)

**Problémy:**

| # | Problém | Dopad |
|---|---------|-------|
| A1 | 7 sekcí s různými formáty (2sl., 6sl., 4sl. mřížka) — vizuální chaos | Stránka vypadá jako výpis databáze |
| A2 | Scope karet + ke stažení PDF — duplicita obsahu (karty jsou výtah z PDF) | Matoucí |
| A3 | Chybí primární CTA — „Kontaktovat nás" je sekundární button | Stránka buduje důvěru, ale nikam neodvede |

**Doporučená struktura:**
```
[Hero]          Heading + 1 věta + primární CTA
[Klíčová fakta] Max 2 karty: Akreditace ČIA + Autorizace MŽP
[Ke stažení]    Listovník dokumentů (čisté, ne grid karet)
[CTA strip]     Kontaktovat / Zobrazit služby
```

---

### /odborna-garance — Odborná garance
**Struktura:** Breadcrumbs + H1 + 2 sloupce (odborný profil + jak přemýšlíme) + 1 link.  
**Stav:** ⚠️ Stránka je příliš řídká — vypadá jako stub.

**Problémy:**
- Chybí foto osoby, certifikáty, reference
- 1 link místo CTA tlačítka
- Duplicita s sekcí „Odborná garance" na /o-spolecnosti-naturchem

**Doporučení (dvě možnosti):**
1. **Smazat stránku** + obsah integrovat do /o-spolecnosti-naturchem jako sekci → čistší IA
2. **Rozšířit stránku** o foto, životopis, certifikáty, citát — pak stránka má smysl jako „expert profile"

---

### /pristrojove-vybaveni — Přístrojové vybavení
**Struktura:** Hero + EquipmentAccordion (5 skupin, ~50+ položek) + CTA banner  
**Stav:** Účelná stránka pro due diligence — správná existence.

**Problémy:**

| # | Problém | Dopad |
|---|---------|-------|
| V1 | Accordion neuvádí počet položek v každé skupině — uživatel neví, co ho čeká | Snižuje ochotu expandovat |
| V2 | Technický žargon bez vysvětlení (izokinetická aparatura apod.) | OK pro odborníky, ale ne pro investory/projektanty |
| V3 | CTA „Poptat měření" je generický | Slabá relevance k obsahu stránky |

**Oprava:** Přidat počty za nadpisy skupin (např. „Měřicí přístroje — 12 položek"). CTA změnit na „Ověřit dostupnost měřicího vybavení".

---

### /typicke-zakazky — Typické zakázky
**Struktura:** Header + link na reference + TypicalScenarios komponenta + CaseStudiesView komponenta + „Kam dál" (4 linky) + CTA  
**Stav:** Závisí na dynamických komponentách — nelze plně auditovat.

**Problémy:**
- Stránka nemá vlastní intro text vysvětlující účel (proč existuje vedle /reference?)
- „Kam dál" sekce se 4 linky na konci — navigace jako výplň

**Doporučení:** Přidat krátký intro odstavec (2 věty: co tato stránka nabízí a proč). Sekci „Kam dál" nahradit 1 CTA tlačítkem.

---

### /provozy-a-technologie — Provozy a technologie (index)
**Struktura:** Hero + SectorGroupsIndex + „Nejste si jistí?" (10 položek + CTA)  
**Stav:** Dobrá index stránka.

**Problémy:**
- Checklist 10 položek je na konci stránky — uživatelé ho pravděpodobně nevidí
- Hero obsahuje link na reference — trochu off-topic pro navigační stránku

**Oprava:** Checklist přesunout výše (nebo smazat) — pokud slouží jako „pomoc při výběru", patří hned za nadpis, ne na konec.

---

## 6. Redirect stránky (přehled)

| URL | Cíl | Stav |
|-----|-----|------|
| /o-nas | /o-spolecnosti-naturchem | OK — 301 |
| /akreditace-a-autorizace | /akreditace-autorizace-dokumenty | OK — 301 |
| /redakce | /poradna | OK — 301 |
| /provozy-a-technologie/kotelny-spalovaci-zdroje | /provozy-a-technologie/kotelny | OK — 301 |
| /provozy-a-technologie/recyklace-odpady | /provozy-a-technologie/odpady-recyklace | OK — 301 |
| /provozy-a-technologie/sklarske-provozy | /provozy-a-technologie/sklarstvi | OK — 301 |

**Doporučení:** Ověřit, že redirect stránky jsou vyloučeny ze sitemapy (nesmí být indexovány).

---

## Roadmapa oprav

### P1 — Kritické (přímý vliv na konverze)
_Tyto úpravy nejvíce ovlivní, zda visitor poptá nebo odejde._

| ID | Úprava | Soubor | Obtížnost |
|----|--------|--------|-----------|
| P1-1 | ServicePage.tsx: sjednotit 3 „related" sekce na konci na 1 sekci, max 3 karty | `components/ServicePage.tsx` | Střední |
| P1-2 | ServicePage.tsx: v accordion detailGroups ponechat max 2 skupiny (Příklady zakázek + Časté chyby), zbytek smazat | `components/ServicePage.tsx` | Nízká |
| P1-3 | Homepage: smazat sekci „Pro koho pracujeme" (6 karet) | `app/page.tsx` | Nízká |
| P1-4 | Homepage: smazat sekci „Jak probíhá zakázka" nebo přesunout za reference teaser | `app/page.tsx` | Nízká |
| P1-5 | /o-spolecnosti-naturchem: přidat primární CTA tlačítko na konec stránky | `app/o-spolecnosti-naturchem/page.tsx` | Nízká |
| P1-6 | /kontakt: odstranit redundantní telefon/email opakování (uchovat 1×), smazat sekci „Rychlé poptávkové cesty" | `app/kontakt/page.tsx` | Střední |

---

### P2 — Vysoká priorita (UX a důvěryhodnost)

| ID | Úprava | Soubor | Obtížnost |
|----|--------|--------|-----------|
| P2-1 | /poradna: filter pills — implementovat funkční filtrování NEBO smazat `<span>` elementy | `app/poradna/page.tsx` | Střední |
| P2-2 | /poradna: smazat sekci „Chystaná témata" nebo ji skrýt do interní draft sekce | `app/poradna/page.tsx` | Nízká |
| P2-3 | /reference: naplnit sekci „Vybrané zkušenosti" kartami nebo sekci smazat | `app/reference/page.tsx` | Střední (content) |
| P2-4 | /reference: 3 CTA tlačítka na konci → zredukovat na 1 primární | `app/reference/page.tsx` | Nízká |
| P2-5 | /akreditace-autorizace-dokumenty: přidat primární CTA, redukovat z 7 sekcí na 4 | `app/akreditace-autorizace-dokumenty/page.tsx` | Střední |
| P2-6 | /odborna-garance: rozhodnutí — rozšířit na plnohodnotnou stránku NEBO obsah integrovat do /o-spolecnosti-naturchem a stránku smazat | obě stránky | Střední |
| P2-7 | /o-spolecnosti-naturchem: redukovat z 10 sekcí na 6, smazat duplikáty (Jak pracujeme) | `app/o-spolecnosti-naturchem/page.tsx` | Střední |

---

### P3 — Střední priorita (copy a drobné UX)

| ID | Úprava | Soubor | Obtížnost |
|----|--------|--------|-----------|
| P3-1 | Homepage hero lead: zkrátit na max 2 věty / 30 slov | `app/page.tsx` | Nízká |
| P3-2 | Zkrátit intro texty service pages nad 30 slov (prioritně: mereni-emisi, mereni-osvetleni, rozptylove-studie, mereni-hluku, eia-oznameni, odborne-posudky) | různé soubory | Nízká |
| P3-3 | /pristrojove-vybaveni: přidat počty položek do accordion nadpisů | `components/EquipmentAccordion.tsx` | Nízká |
| P3-4 | /faq: přidat CTA strip pod FAQ obsah | `app/faq/page.tsx` nebo `components/FaqPageContent.tsx` | Nízká |
| P3-5 | /typicke-zakazky: přidat intro text + smazat „Kam dál" navigaci | `app/typicke-zakazky/page.tsx` | Nízká |
| P3-6 | /skoleni-chemicke-legislativy: zkrátit intro + přidat CTA strip (short-term před migrací na ServicePage) | `app/skoleni-chemicke-legislativy/page.tsx` | Nízká |
| P3-7 | Homepage reference teaser: nahradit generické příklady konkrétními (po dohodě s Hezinou) | `app/page.tsx` | Střední (content) |

---

### P4 — Nízká priorita (technická hygiena)

| ID | Úprava | Soubor | Obtížnost |
|----|--------|--------|-----------|
| P4-1 | /skoleni-chemicke-legislativy: migrace na ServicePage komponent pro konzistenci | `app/skoleni-chemicke-legislativy/page.tsx` | Vysoká |
| P4-2 | Ověřit, že redirect stránky jsou vyloučeny ze sitemapy | `sitemap.ts` nebo `robots.txt` | Nízká |
| P4-3 | Přidat faqCategoryId ke stránkám, kde chybí (ispop, ghg, bezpecnostni-listy, chemicke-latky) | dedicated-service-pages.ts | Nízká |
| P4-4 | /provozy-a-technologie: přesunout „Nejste si jistí?" checklist výše na stránku | `app/provozy-a-technologie/page.tsx` | Nízká |
| P4-5 | Ověřit, že scope[5. položka] na /eia-posudky-poradenstvi se skutečně renderuje (slice(0,4) ji může useknout) | `app/eia-posudky-poradenstvi/page.tsx` | Nízká |

---

### P6 — Layout, spacing a hero (Sprint 10–12)

| ID | Úprava | Stav |
|----|--------|------|
| P6-1 | Token `--section-padding-y`, sjednocení vertikálních mezer | ✅ |
| P6-2 | `PageHeroBand` min-height varianty standard / service | ✅ |
| P6-3 | Regrese `.container` — obnovit `margin-inline: auto` | ✅ |
| P6-4 | Hero flush pod fixed header — `padding-top: 0` u stránek s `PageHeroBand` | ✅ |

**P1-7 (navigace):** ≥1280 px plné menu · 1024–1279 px zkrácené menu + dropdown „Další" · &lt;1024 px hamburger. Implementace: `Header.tsx`, `navigation.ts` (`headerTabletMoreLinks`).

---

### P5 — Vizuální scanovatelnost

_Navazuje na G6. Sloučeno z grafického auditu (`06-graficky-audit/graficky-audit.md`). Fáze A = bez fotek od klienta._

| ID | Úprava | Soubor | Obtížnost | Závislost |
|----|--------|--------|-----------|-----------|
| P5-1 | Homepage hero: stock foto + navy overlay (ne jen gradient) | `app/page.tsx`, `globals.css` | Střední | Výběr 1 stock fotky |
| P5-2 | Service page heroes: kategorie-specifické pozadí (emise / hluk / EIA) | `components/ServicePage.tsx`, `globals.css` | Střední | 3–4 stock fotky |
| P5-3 | Stats band: velká typografie + ikony u čísel | `components/ExperienceStats.tsx`, `globals.css` | Nízká | Ověření čísel s Hezinou |
| P5-4 | Accordion nadpisy: ikony u skupin (ServicePage + EquipmentAccordion) | `components/ServicePage.tsx`, `components/EquipmentAccordion.tsx` | Nízká | — |
| P5-5 | Vizuální rytmus sekcí: audit střídání white / surface-muted / navy | `globals.css`, stránky | Nízká | — |
| P5-6 | Ikony: audit zdrojů, sjednotit na Lucide (40/24/20 px) | `components/ServiceIcon.tsx`, komponenty | Střední | — |
| P5-7 | „Jak probíhá zakázka": vizuální timeline s ikonami (1 místo — homepage NEBO o-spolecnosti) | `app/page.tsx` nebo `app/o-spolecnosti-naturchem/page.tsx` | Střední | UX rozhodnutí umístění |
| P5-8 | OG image šablony (1200×630) pro homepage + služby | `app/opengraph-image.tsx`, per-page OG | Střední | — |
| P5-9 | /o-spolecnosti tým: placeholder design bez fotek (Fáze A) | `components/TeamSection.tsx` | Nízká | — |
| P5-10 | /pristrojove-vybaveni: ikony ke kategoriím přístrojů | `components/EquipmentAccordion.tsx` | Nízká | — |
| P5-14 | Mobilní homepage hero: kratší eyebrow + lead (desktop copy beze změny) | `app/page.tsx`, `globals.css` | Nízká | — |
| P5-15 | Mobilní homepage: skrýt trust band (desktop 5 sloupců zachován) | `app/page.tsx`, `globals.css` | Nízká | — |
| P5-16 | Mobilní homepage stats: jednořádkový inline layout bez ikon | `globals.css` | Nízká | — |
| P5-17 | Mobilní fold follow-up: sloučit stats do hero nebo snížit padding | `globals.css` | Nízká | Po QA P5-14–16 |

#### P5-B — Fáze B (čeká na fotografie od Heziny)

| ID | Úprava | Soubor | Poznámka |
|----|--------|--------|----------|
| P5-B1 | Hero: nahradit stock fotky reálnými terénními fotografiemi | `app/page.tsx`, service heroes | Po dodání fotek |
| P5-B2 | /o-spolecnosti: doplnit portréty týmu | `components/TeamSection.tsx` | Min. Ing. Hezina |
| P5-B3 | /pristrojove-vybaveni: reálné fotky přístrojů | `app/pristrojove-vybaveni/page.tsx` | Trust signal pro technické zákazníky |
| P5-B4 | /odborna-garance: portrét Ing. Heziny | `app/odborna-garance/page.tsx` | Ideálně foto v terénu/laboratoři |

---

## Doporučené pořadí implementace

```
Sprint 1 (1–2 dny): P1-1, P1-2, P1-3, P1-4
  → Oprava šablony ServicePage + homepage = největší dopad, nejméně práce

Sprint 2 (1 den): P1-5, P1-6, P2-2, P2-4
  → Rychlé opravy jednotlivých stránek bez přepisování obsahu

Sprint 3 (2–3 dny): P2-1, P2-3, P2-5, P2-6, P2-7
  → Větší obsahové a strukturální úpravy (vyžadují rozhodnutí/content)

Sprint 4 (průběžně): P3-1 až P3-7
  → Copy zkrácení, drobná UX vylepšení

Sprint 5 (pozdější): P4-1 až P4-5
  → Technická hygiena a konsolidace

Sprint 6 (1 sezení): P5-4, P5-5, P5-6
  → Ikony + layout rytmus — rychlé, bez fotek, celý web
  → Rozhodnutí: ServiceIcon bez lucide-react; .section-surface globální utility; pilot homepage + o-spolecnosti; P5-10 (EquipmentAccordion) už hotovo

Sprint 7 (1–2 sezení): P5-1, P5-2, P5-3
  → Stock hero + stats band — největší vizuální dopad

Sprint 8 (průběžně): P5-7, P5-8, P5-9, P5-10
  → Timeline, OG, tým placeholder, přístroje

Sprint 9 (po Hezinovi): P5-B1 až P5-B4
  → Nahradit stock reálnými fotografiemi
```

---

## P5 — Prioritizovaná doporučení pro implementaci

_Výstup `/ux vizuální scanovatelnost` sezení (2026-05-30). Seřazeno dle dopadu vs. náročnosti._

### Okamžitě (Sprint 6) — bez závislosti na klientovi

| Pořadí | ID | Problém | Dopad | Oprava | Soubor |
|--------|-----|---------|-------|--------|--------|
| 1 | P5-6 | Ikony z více zdrojů (ServiceIcon.tsx, Lucide inline, různé velikosti) | Nekonzistentní vizuální jazyk | Audit zdrojů, standardizovat Lucide: 40px karty, 24px inline, 20px navigace | `ServiceIcon.tsx`, komponenty |
| 2 | P5-5 | Sekce za sebou bez vizuálního rytmu (většinou bílá) | Wall-of-text dojem i po redukci obsahu | Ověřit střídání `.section`, `.section-muted`, `.hero-band` napříč stránkami | `globals.css`, page templates |
| 3 | P5-4 | Accordion nadpisy bez ikon — „Doplňující informace" je textový blok | Slabá scanovatelnost | Přidat ikonu ke každé skupině accordion (FileText, AlertTriangle apod.) | `ServicePage.tsx`, `EquipmentAccordion.tsx` |

### Vysoký vizuální dopad (Sprint 7)

| Pořadí | ID | Problém | Dopad | Oprava | Soubor |
|--------|-----|---------|-------|--------|--------|
| 4 | P5-1 | Homepage hero = tmavý gradient bez vizuálu | První dojem neříká, čím se firma zabývá | Stock foto průmyslu + `overlay: rgba(7, 24, 39, 0.72)` | `page.tsx`, `globals.css` |
| 5 | P5-2 | Service heroes stejný prázdný gradient | 24 stránek vypadá identicky | 3–4 kategorie stock fotek (emise, hluk/lab, EIA/dokumentace) mapované na slug | `ServicePage.tsx` |
| 6 | P5-3 | Stats band = prostý text s čísly | Ztracená příležitost pro trust anchor | Velké typografické číslo + ikona + popis; navy/forest pozadí | `ExperienceStats.tsx` |

### Střední priorita (Sprint 8)

| Pořadí | ID | Problém | Dopad | Oprava | Soubor |
|--------|-----|---------|-------|--------|--------|
| 7 | P5-7 | Proces zakázky chybí nebo je textový | Návštěvník nechce číst proces, chce ho vidět | Vizuální timeline 4 kroků s ikonami — pouze na /o-spolecnosti (homepage sekce smazána v P1-4) | `o-spolecnosti-naturchem/page.tsx` |
| 8 | P5-8 | OG image generická nebo chybí | Slabé sdílení na LinkedIn (persona Pavel, Tomáš) | Šablona 1200×630: logo + claim + volitelně stock pozadí | `opengraph-image.tsx` |
| 9 | P5-9 | Tým bez fotografií = slabá důvěra | B2B nakupuje od lidí | Fáze A: member card s jménem/funkcí/kontaktem, bez prázdného placeholderu | `TeamSection.tsx` |
| 10 | P5-10 | Přístrojové vybavení = textový seznam 50+ položek | Technický zákazník nemá vizuální kotvu | Ikona ke každé kategorii accordion | `EquipmentAccordion.tsx` |

### Po dodání fotek (Sprint 9 — P5-B)

- **P5-B1–B4:** Nahradit stock, doplnit portréty — čeká na Hezinu (viz ROADMAPA otevřené otázky).

### Rozhodnutí Fáze A vs. B

| Prvek | Fáze A (teď) | Fáze B (po klientovi) |
|-------|--------------|----------------------|
| Hero | Stock Unsplash/Pexels (průmysl, lab, komín) | Reálné terénní foto NATURCHEM |
| Tým | Textové member cards | Profesionální portréty |
| Přístroje | Ikony kategorií | Fotky konkrétních přístrojů |
| Odborná garance | Abstraktní profil bez fotky | Portrét Ing. Heziny v terénu |

---

## Co nesahat — funguje dobře

- **Decision panel** na service pages (3 karty: Rozsah / Co dostanete / Jak začít) — konverzní jádro
- **Trust band** na homepage — správné místo na desktopu; na mobilu skryt (P5-15), akreditační signál v krátkém hero eyebrow
- **Hero s třemi úrovněmi záměru** (měření / studie / nevím co potřebuji)
- **SectorPage šablona** — sektor stránky jsou nejkonzistentnější část webu
- **Strukturovaná data (JSON-LD)** — dobře implementovány na všech stránkách
- **DedicatedServiceRoute vzor** — centralizace dat service pages je správná architektura
