# Grafický audit — naturchem.cz
**Datum:** 2026-05-30  
**Rozsah:** Vizuální obsah webu — ikony, ilustrace, fotografie, layout, vizuální hierarchie  
**Klíčový kontext:** Fotografie od klienta nejsou k dispozici. Řešení bez fotografií = stock jako placeholder + ilustrace + ikony + layout.

> **Implementační track:** Doporučení z tohoto auditu jsou sloučena do UX roadmapy jako **P5** v `../03-ux-audit/ux-audit-roadmapa.md` a sledována v `../ROADMAPA.md`. Tento soubor zůstává referencí pro strategii Fáze A/B a stock zdroje.

---

## Souhrnná diagnóza

Web má **správnou vizuální identitu** (navy + forest, IBM Plex Sans, ostré rohy), ale trpí jedním zásadním problémem:

> **Web je velká změť textu bez vizuálních přestávek.**

Zákazník skenuje stránky — jeho zrak potřebuje kotvy, pauzy a vizuální hierarchii. Aktuálně web nabízí převážně textové bloky s ikonami a kartami, ale téměř žádné vizuální prvky, které by:
- Ukázaly reálnou práci firmy
- Dodaly „průmyslový" charakter prostředí
- Přerušily tok textu a pomohly se orientovat

---

## 1. Inventář aktuálního vizuálního obsahu

### Co existuje

| Vizuální prvek | Umístění | Kvalita |
|---------------|----------|---------|
| Logo (SVG + PNG) | Hlavička, favicon | ✅ OK |
| Naturchem mark (diamond) | Grafiky, brand | ✅ OK |
| Hero gradient (tmavý navy) | Hero sekce | ✅ OK — ale bez vizuálu |
| Service ikony (SVG) | Karty na service pages | 🔄 Existují, konzistenci ověřit |
| Zákaznická loga (19 JPG/PNG) | /reference | ✅ Právě přidáno, grayscale+hover |
| Akreditační dokumenty (PDF) | /akreditace | ✅ Ke stažení |
| Favicon | Browser tab | 🔲 Ověřit kvalitu |

### Co chybí (přehled)

| Prvek | Kde chybí | Dopad |
|-------|-----------|-------|
| Hero vizuál (ilustrace nebo stock foto) | Homepage, service pages hero | Velmi vysoký |
| Sekce „Jak probíhá zakázka" vizuál | Homepage nebo /o-spolecnosti | Vysoký |
| Portréty týmu | /o-spolecnosti, /odborna-garance | Vysoký — důvěra |
| Terénní fotografie (měřicí práce) | Service pages, /pristrojove-vybaveni | Vysoký |
| Ilustrace procesů | Service pages, homepage | Střední |
| OG/social preview obrázky | Všechny stránky | Střední |
| Infografiky | Blog/poradna | Nízký |

---

## 2. Strategie vizuálního obsahu bez fotografií

Protože fotografie od klienta zatím nejsou k dispozici, pracujeme ve dvou fázích:

### Fáze A — Bez fotografií (lze udělat teď)

| Přístup | Popis | Kde použít |
|---------|-------|-----------|
| **Průmyslový stock** | Royalty-free stock fotky průmyslových provozů, komínů, kotelén, laboratoří — ne generické lidi v oblecích | Homepage hero, service page heroes |
| **SVG ilustrace** | Abstraktní technické ilustrace — molekuly, schémata, průmyslové siluety | Hero sekce, featury |
| **Ikony rozšíření** | Systematická sada ikon pro všechny oblasti (Lucide/Heroicons jsou v projektu) | Service pages, FAQ, kroky procesu |
| **Data/statistiky vizuálně** | Čísla jako velké typografické prvky s navy pozadím | Stats band, homepage |
| **Barvy a sekce** | Střídání bílé/surface-muted/navy pro vizuální rytmus | Všechny stránky |

### Fáze B — S fotografiemi od klienta (po dohodě s Hezinou)

| Prvek | Co potřebujeme od klienta |
|-------|--------------------------|
| Terénní foto | Ing. Hezina nebo tým při měření u průmyslového zdroje |
| Laboratoř foto | Laboratorní vybavení, práce s přístroji |
| Portréty | Profesionální portrét Ing. Heziny, ideálně tým |
| Přístrojové vybavení | Konkrétní přístroje z webu /pristrojove-vybaveni |

---

## 3. Konkrétní problémy a doporučení

### G1 — Hero sekce (homepage + service pages)

**Problém:** Hero je tmavý navy gradient bez jakéhokoliv vizuálního prvku. Výsledek: „prázdná tmavá plocha s textem a tlačítky."

**Dopad:** První dojem neřekne zákazníkovi nic o tom, čím se firma zabývá. Ekome.cz a konkurence mají hero s vizuálem průmyslového prostředí.

**Doporučení (Fáze A — stock):**
- Najít 3–4 kvalitní stock fotky průmyslového charakteru (komín se závodem, laboratorní prostředí, terénní měření) bez lidí v popředí nebo s průmyslovými pracovníky (ne obchodníci v oblecích)
- Hero: foto na pozadí s navy overlay (např. `overlay: rgba(7, 24, 39, 0.72)`) — text zůstane čitelný
- Různé fotky pro různé kategorie stránek: měření emisí vs. hluk vs. EIA

**Zdroje stock fotek (zdarma):**
- Unsplash.com — hledat: industrial plant, chimney, laboratory, environmental measurement
- Pexels.com — stejná klíčová slova
- Pixabay.com

---

### G2 — Proces „Jak probíhá zakázka" — vizuální forma

**Problém:** „Jak probíhá zakázka" je sekce s 4 kroky — pravděpodobně jako textový timeline. Lidé netouží číst proces, chtějí ho vidět.

**Doporučení:**
- Vizuální timeline s čísly/ikonami a krátkými popisky (max 15 slov na krok)
- Každý krok s jinou ikonou (Lucide: FileText, Beaker, BarChart, CheckCircle nebo podobné)
- Alternativa: SVG ilustrace procesu (horizontální flow) — odlišuje web od konkurence

**Kde:** Homepage nebo /o-spolecnosti (ne obojí — je to duplicita, dle UX auditu)

---

### G3 — Service pages — vizuální hierarchie

**Problém:** Service pages jsou sekce textu za sebou bez vizuální přestávky. Decision panel (3 karty: Rozsah / Co dostanete / Jak začít) je správný, ale ostatní sekce jsou čistě textové.

**Doporučení:**
- Každá service page: přidat 1 relevantní vizuál (stock nebo ilustrace) do hero oblasti — menší než homepage, ale přítomný
- Accordion sekce (doplňující informace): přidat ikony k nadpisům skupin
- FAQ teaser: přidat ikonu otazníku nebo vizuální element k nadpisu

---

### G4 — /pristrojove-vybaveni — chybí fotografie přístrojů

**Problém:** Stránka přístrojového vybavení je textový seznam 50+ položek. Zákazník nemá šanci vizuálně posoudit, čím firma disponuje.

**Doporučení:**
- Fáze A: Ke každé kategorii přidat malou ikonku (laboratorní váha, zvukoměr, spektrometr apod.) — buď z ikonsetu nebo nalezeno volně
- Fáze B: Reálné fotky přístrojů (velmi silný trust signal pro technické zákazníky)

---

### G5 — /o-spolecnosti — tým bez fotografií

**Problém:** B2B zákazník nakupuje od lidí, ne od firem. Sekce týmu bez fotografií je slabá.

**Doporučení:**
- Fáze A: Placeholder grayscale siluety nebo abstraktní „member card" design bez fotky (čisté jméno + funkce + kontakt)
- Fáze B: Profesionální portréty (minimum: Ing. Hezina + 2–3 klíčoví spolupracovníci)
- Priorita: Ing. Hezina jako odborná garance — ideálně foto v terénu nebo laboratoři, ne v kanceláři

---

### G6 — Stats band — vizuální potenciál

**Co existuje:** Stats band s čísly (zakázky, měření, roky) — dobrý element.

**Problém:** Čísla nejsou ověřena (viz copy audit CC3). Vizuálně pravděpodobně prostý text s čísly.

**Doporučení:**
- Po ověření čísel s Hezinou: vizuálně zvýraznit — velké typografické číslo + popis pod ním
- Přidat ikonu ke každému číslu
- Navy nebo forest pozadí = oddělení od okolí

---

### G7 — Vizuální konzistence ikon

**Problém:** Ikony pravděpodobně pocházejí z více zdrojů (Lucide v různých místech, vlastní SVG v ServiceIcon.tsx, různé styly v různých sekcích).

**Doporučení:**
- Audit: zmapovat odkud ikony pocházejí
- Standardizovat na 1 ikonsadu (doporučeno: Lucide — je v projektu, konzistentní linestroke)
- Velikostní standard: 40px pro karty, 24px pro inline, 20px pro navigace
- Barvy: vždy `--primary` nebo `--secondary` (ne smíšené)

---

### G8 — OG/social preview obrázky

**Problém:** Pravděpodobně chybí nebo jsou generické. Sdílení odkazu na LinkedIn (kde zákazníci Tomáš, Pavel) ukáže generický obrázek nebo nic.

**Doporučení:**
- Vytvořit 1–2 OG image šablony (1200×630px):
  - Logo na navy pozadí + claim textu
  - Varianta s stock průmyslovým pozadím
- Různé OG pro homepage vs. service pages vs. blog (nebo alespoň homepage + generická service + blog)

---

### G9 — Mobile vizuální audit

**Doporučení (systematicky projít):**
- Homepage: hero na mobilech — přečitelnost textu na stock pozadí
- Karty: správné přeskládání do 1 sloupce
- Zákaznická loga: přelijí se nebo se zmenší? (grid responsive?)
- Formuláře: vizuálně přehledné na malé obrazovce

---

## 4. Vizuální sprint — doporučené pořadí

### Sprint V1 — Layout a ikony (bez fotografií, 1 sezení)

| ID | Úkol | Dopad |
|----|------|-------|
| G-V1-1 | Audit ikon: zmapovat zdroje, standardizovat sadu | Střední |
| G-V1-2 | Stats band: vizuálně vylepšit s ikonami a typografií | Střední |
| G-V1-3 | Service pages: přidat ikony do accordion nadpisů | Nízký |
| G-V1-4 | Vizuální rytmus: ověřit střídání barevných sekcí napříč webem | Střední |

### Sprint V2 — Stock fotografie do hero (1–2 sezení)

| ID | Úkol | Dopad |
|----|------|-------|
| G-V2-1 | Vybrat 4–6 stock fotek: průmysl/lab/terén (Unsplash, Pexels) | Velmi vysoký |
| G-V2-2 | Homepage hero: přidat foto pozadí s navy overlay | Velmi vysoký |
| G-V2-3 | Service page hero: kategorie-specifické foto (emise, hluk, EIA) | Vysoký |
| G-V2-4 | OG image: vytvořit šablonu pro sdílení | Střední |

### Sprint V3 — Ilustrace a procesy (1–2 sezení)

| ID | Úkol | Dopad |
|----|------|-------|
| G-V3-1 | „Jak probíhá zakázka" — vizuální timeline/flow | Vysoký |
| G-V3-2 | Ilustrace pro homepage sekce (volitelné) | Střední |
| G-V3-3 | /pristrojove-vybaveni: ikony ke kategoriím přístrojů | Nízký |

### Sprint V4 — S fotografiemi od klienta

| ID | Úkol |
|----|------|
| G-V4-1 | Hero: nahradit stock fotky reálnými terenními fotografiemi |
| G-V4-2 | /o-spolecnosti: doplnit portréty týmu |
| G-V4-3 | /pristrojove-vybaveni: reálné fotky přístrojů |
| G-V4-4 | /odborna-garance: portrét Ing. Heziny |

---

## 5. Checklist před spuštěním (grafika)

- [ ] Favicon — správná kvalita na mobilech a retina (16×16, 32×32, 180×180 apple-touch)
- [ ] OG image — existuje a je relevantní (1200×630px)
- [ ] Homepage hero — má vizuální prvek (ne jen text na tmavém gradientu)
- [ ] Zákaznická loga — správně zobrazena na mobilech
- [ ] Žádné rozbité obrázky (404)
- [ ] Všechny obrázky mají `width` a `height` (prevence CLS)
- [ ] Next.js `<Image>` komponenta použita pro optimalizaci

---

*Soubor: 06-graficky-audit/graficky-audit.md*  
*Navazuje na: 00-strategie/brand-manual.md, 03-ux-audit/ux-audit-roadmapa.md, ROADMAPA.md*  
*Fáze A (bez fotek) lze zahájit okamžitě. Fáze B čeká na Ing. Hezinu.*
