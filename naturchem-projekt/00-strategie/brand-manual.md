# Brand Manual — NATURCHEM, s.r.o.

**Verze:** 1.1 (aktualizováno z kódu projektu)  
**Datum:** 2026-05-25  
**Status:** K odsouhlasení klientem — sekce označené `[DOPLNIT]` čekají na podklady

> Tento dokument popisuje vizuální a verbální identitu NATURCHEM. Vychází z existujícího designu webu naturchem.cz (Next.js projekt). Vše je závazné pro web, tisk, prezentace i digitální komunikaci.

---

## 1. Firma — základ

### 1.1 Právní forma
**NATURCHEM, s.r.o.**  
IČO: 27504379 | DIČ: CZ27504379  
Sídlo: Ledečská 3015, 580 01 Havlíčkův Brod  
Laboratoř: Rudolfovská 119/57, 370 01 České Budějovice  
Pobočka: Lesnická 1214/5, 150 00 Praha 5  
Jednatel: Ing. František Hezina  
Tel: +420 603 216 983 | +420 774 100 570  
E-mail: naturchem@naturchem.cz

### 1.2 Mise
Propojujeme terénní měření, odborné studie a povolovací dokumentaci do jednoho obhajitelného postupu — pro průmyslové provozy, investory, projektanty a veřejnou správu.

### 1.3 Vize
Být prvním odborným partnerem, kterého průmyslové firmy, investoři a úřady kontaktují, když potřebují měřicí, studijní nebo povolovací výstupy z jednoho místa.

### 1.4 Hodnoty
| Hodnota | Co to znamená v praxi |
|---------|----------------------|
| **Odborná obhajitelnost** | Každý výstup obstojí před KHS, ČIŽP, krajským úřadem nebo soudem |
| **Propojení služeb** | Měření, studie i dokumentace jako jeden koordinovaný proces |
| **Přesnost** | Akreditovaná laboratoř, autorizované osoby, správné metodiky |
| **Lokální znalost** | Česká firma, tři pracoviště, osobní komunikace s úřady |

### 1.5 Positioning statement
> „NATURCHEM propojuje akreditovaná měření, výpočtové studie, odborné posudky, EIA a povolovací dokumentaci do jednoho odborně obhajitelného procesu pro průmysl, investory a veřejnou správu."

### 1.6 UVP (Unique Value Proposition)
> **Měření, studie a dokumentace pro úřady — v jednom procesu.**  
> Nemusíte koordinovat více dodavatelů. NATURCHEM zvládne od terénního měření přes odborný posudek po EIA nebo IPPC podklady — a vše spolu funguje.

---

## 2. Logo

### 2.1 Dostupné soubory
- `Podklady/file.svg` — vektorové SVG logo (full wordmark + mark)
- `Podklady/Naturchem_Logo.png` — rastrová verze
- `public/graphics/naturchem-logo.png` — verze použitá na webu
- `public/graphics/naturchem-mark.svg` — samostatný geometrický symbol

### 2.2 Anatomie loga
Logo se skládá ze dvou částí:
1. **Geometrický symbol** (diamond/krystal) — vlevo, bílý, na tmavém nebo barevném pozadí
2. **Wordmark „NATURCHEM"** — vpravo od symbolu, verzálky

### 2.3 Barvy loga
| Prvek | HEX | Poznámka |
|-------|-----|----------|
| Geometrický symbol | `#FFFFFF` | Bílý — funguje na tmavém pozadí |
| Wordmark (část písmen) | `#1B1E20` | Tmavě antracitová |
| Wordmark (část písmen) | `#272974` | Tmavě modrá/navy |

> **Poznámka:** Na webu se používá monochromatická verze loga přizpůsobená pozadí.

### 2.4 Pravidla použití
- Minimální velikost: 120px šířka (web), 30mm (tisk)
- Ochranná zóna: minimálně výška písmene „N" na každé straně
- Logo nikdy: roztáhnout do stran, přebarvit mimo schválené varianty, umístit na rušný vzor

### 2.5 Varianty
- **Tmavá varianta** — wordmark tmavý (`#1B1E20` + `#272974`) na světlém pozadí
- **Světlá varianta** — pro tmavá pozadí, footer, hero sekce `[DOPLNIT: ověřit s klientem]`

---

## 3. Barevná paleta

> Barvy vycházejí přímo z CSS proměnných v `src/app/globals.css`. Toto jsou závazné hodnoty.

### 3.1 Primární barvy (CSS proměnné)

| Název | CSS proměnná | HEX | Použití |
|-------|-------------|-----|---------|
| **Navy** | `--primary` | `#0b1f35` | Tlačítka, nadpisy, footer pozadí, klíčové UI prvky |
| **Navy Dark** | `--primary-dark` | `#071827` | Hover stavy tlačítek, tmavší varianta |
| **Forest** | `--secondary` | `#2f6f5e` | Eyebrow texty, tagy, hover na odkazech, akcenty |
| **Sage** | `--accent` | `#8aa18f` | Jemné akcenty, dekorativní prvky |

### 3.2 Neutrální barvy

| Název | CSS proměnná | HEX | Použití |
|-------|-------------|-----|---------|
| **Background** | `--bg` | `#f4f6f8` | Pozadí celé stránky |
| **Surface** | `--surface` | `#ffffff` | Pozadí karet, formulářů |
| **Surface Muted** | `--surface-muted` | `#eef2f5` | Alternativní sekce |
| **Text** | `--text` | `#101923` | Primární tělo textu |
| **Muted** | `--muted` | `#536273` | Vedlejší texty, popisky |
| **Border** | `--border` | `#d8dee6` | Okraje karet a oddělení |

### 3.3 Hero gradient
```css
background: linear-gradient(135deg, #071827 0%, #0b1f35 58%, #102c47 100%);
```
Používá se pro hero sekce a tmavé CTA bannery.

### 3.4 Tag barva (zelená průhledná)
```css
background: rgba(47, 111, 94, 0.08);
border: 1px solid rgba(47, 111, 94, 0.22);
color: #2a5f51;
```

### 3.5 Přístupnost (WCAG AA)
- Bílý text na `#0b1f35`: ✅ kontrast ~15:1
- `#101923` text na `#f4f6f8`: ✅ kontrast ~14:1
- `#2f6f5e` na bílé: ✅ kontrast ~5.5:1 (min. AA pro velký text)

---

## 4. Typografie

### 4.1 Display font — IBM Plex Sans
**Zdroj:** Google Fonts (zdarma, open-source)  
**CSS proměnná:** `--font-display`  
**Použití:** Všechny nadpisy (H1–H4), navigace, tlačítka, eyebrow texty, karetní nadpisy

| Řez | Váha | Použití |
|-----|------|---------|
| IBM Plex Sans SemiBold | 600 | H3, navigace |
| IBM Plex Sans Bold | 700 | H1, H2, tlačítka |

> **Charakteristika:** IBM Plex Sans dodává webu technický, institucionální charakter. Není zaoblená a přátelská — je precizní a odborná.

### 4.2 Body font — Source Sans 3
**Zdroj:** Google Fonts (zdarma, open-source)  
**CSS proměnná:** `--font-body`  
**Použití:** Tělo textu, odstavce, formulářové prvky, metadata

| Řez | Váha | Použití |
|-----|------|---------|
| Source Sans 3 Regular | 400 | Tělo textu, odstavce |
| Source Sans 3 SemiBold | 600 | Zvýraznění, perex |
| Source Sans 3 Bold | 700 | Silné zvýraznění |

### 4.3 Typografická stupnice (web)

| Element | Font | Velikost (clamp) | Řádkování |
|---------|------|-----------------|-----------|
| H1 (hero) | IBM Plex Sans 700 | clamp(2.75rem, 4vw, 3.25rem) | 1.1 |
| H2 (sekce) | IBM Plex Sans 700 | clamp(1.7rem, 3vw, 2.35rem) | 1.12 |
| H3 | IBM Plex Sans 600/700 | clamp(1.25rem, 1.7vw, 1.5rem) | 1.25 |
| Perex/Lead | Source Sans 3 600 | clamp(1.05rem, 1.5vw, 1.22rem) | 1.65 |
| Tělo textu | Source Sans 3 400 | 16px | 1.65 |
| Eyebrow | IBM Plex Sans 800 | 0.78rem | — |
| Tlačítko | IBM Plex Sans 700 | inherit | — |

---

## 5. Tvarový jazyk

### 5.1 Zaoblení (border-radius)
```css
--radius-sharp: 0;   /* Karty, hlavní plochy — žádné zaoblení */
--radius-ui: 2px;    /* Tlačítka, formuláře — minimální zaoblení */
```

> **Důležité:** Web záměrně používá **ostré rohy**. To je volba — vytváří institucionální, technický charakter typický pro poradentské a odborné firmy. Nejde o nedostatek designu.

### 5.2 Stíny
```css
--shadow-soft: 0 18px 45px rgba(12, 26, 42, 0.08);
--shadow-card: 0 14px 34px rgba(12, 26, 42, 0.07);
```

### 5.3 Tlačítka
- Primární: `background: #0b1f35`, bílý text, `border-radius: 2px`, shadow
- Sekundární: bílé pozadí, `border: rgba(11, 31, 53, 0.22)`, tmavý text
- Ghost: průhledné, bílý border — pro použití na tmavém pozadí (hero)

---

## 6. Imagery — fotografie a vizuály

### 6.1 Styl fotografií
- **Reálné fotky z provozu** — terénní měření, laboratoř, přístrojové vybavení
- Průmyslový kontext: komíny, závody, kotelny, výrobní haly, odběry vzorků
- Lidé při práci — ne pózující, ale skutečná činnost
- Barevný tón: přirozený, mírně chladnější (odpovídá navy+grey paletě)
- **Žádné generické stockové obrázky** s usmívajícími se lidmi v oblecích

### 6.2 Co je potřeba dodat
`[DOPLNIT: organizovat fotografické session nebo vybrat z archivu]`
- Terénní měření (měřicí přístroje u výduchu/zdroje)
- Tým při práci v laboratoři
- Portréty Ing. Heziny a klíčových spolupracovníků
- Přístrojové vybavení (viz `/pristrojove-vybaveni` na webu)

### 6.3 Ikony
- Styl: vlastní SVG ikony v `src/components/ServiceIcon.tsx` a `public/graphics/`
- Barvy: primárně `--primary` (`#0b1f35`) nebo `--secondary` (`#2f6f5e`)
- Velikost: standardně 40–48px pro service/audience ikony, 20px pro inline

---

## 7. Vizuální charakter — shrnutí

NATURCHEM vizuálně komunikuje jako **přední odborná poradenská firma**, nikoli jako startup nebo spotřebitelský e-shop.

| Vlastnost | Ano | Ne |
|-----------|-----|-----|
| Rohy karet | Ostré (0px radius) | Zaoblené (8–16px) |
| Tón palety | Tmavý navy + studená zeleň | Teplá oranžová, jasné barvy |
| Typografie | Přesná, technická (IBM Plex) | Zaoblená, přátelská (Rounded) |
| Fotografie | Průmysl, reálná práce | Stock, pózy, šťastní lidé |
| Animace | Subtilní, funkční | Dekorativní, rozsáhlé |

---

## 8. Checklist před každým výstupem

- [ ] Barvy odpovídají CSS proměnným (`--primary`, `--secondary`, `--bg`…)?
- [ ] Použity pouze IBM Plex Sans a Source Sans 3?
- [ ] Karty a bloky mají ostré rohy (radius: 0)?
- [ ] Logo ve správném formátu a s ochrannou zónou?
- [ ] Text prošel kontrolou Tone of Voice?
- [ ] Fotografie jsou reálné (ne stock)?
- [ ] Tlačítka CTA jsou v `--primary` (#0b1f35)?

---

## 9. Podklady stále potřebné od klienta

- [ ] Potvrzení: světlá varianta loga (pro tmavé pozadí/hero) — existuje?
- [ ] Fotografie týmu (Ing. Hezina a spolupracovníci)
- [ ] Fotografie z terénu a laboratoře
- [ ] Reference: konkrétní jména firem nebo typ provozu pro sekci reference
- [ ] Přehled certifikátů (čísla akreditací) — PDF jsou v `public/dokumenty/`

---

*Soubor: 00-strategie/brand-manual.md*  
*Projekt: NATURCHEM, s.r.o. — web 2026*  
*Navazuje na: competitive-analysis.md, personas.md, tone-of-voice.md*  
*Zdroj dat: src/app/globals.css, src/lib/site.ts, Podklady/file.svg*
