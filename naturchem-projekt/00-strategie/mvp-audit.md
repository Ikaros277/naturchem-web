# MVP Audit — NATURCHEM web

**Verze:** 1.0  
**Datum auditu:** 2026-05-25  
**Auditor:** AI (na základě čtení zdrojového kódu)  
**Status:** Hotovo — čeká na review s klientem

> Audit vychází ze čtení zdrojového kódu Next.js projektu, nikoliv z živého nasazení.  
> Vizuální hodnocení layoutu a mobilní verze vyžaduje spuštěný dev server.  
> Referenční benchmark: **ekome.cz** jako nejlepší příklad v segmentu.

---

## Rychlé hodnocení (přehled)

| Stránka | Silné stránky | Slabiny | Hodnocení |
|---------|--------------|---------|-----------|
| **Homepage** | Trust band, hero metriky, 3-pilířová struktura, final CTA | Audience karty bez odkazu na služby | ★★★★☆ |
| **Service pages** (ServicePage) | 3 CTA pozice, scope + outputs + docs struktura, FAQ sekce | Details element skrývá obsah | ★★★★☆ |
| **Kontakt** | 3 kontaktní cesty hned v hero, quick paths, team sekce | Formulář pod fold (hero je delší) | ★★★★☆ |
| **Měření emisí** | Konkrétní scope, legislativní reference, related links | — (ServicePage pattern) | ★★★★☆ |
| **Reference** | Stránka existuje (`/reference`) | Obsah neauditován | N/A |

**Celkový závěr:** MVP je solidní základ. Hlavní priority nejsou redesign, ale: (1) ověření metrik v hero, (2) přidání CTA na audience karty, (3) vizuální otestování fold-line formuláře.

---

## 1. Homepage

### Co funguje ✅

**Hero sekce:**
- H1 jasný: „Měření, studie a dokumentace pro provozy, investory a úřady" — benefit-first, bez marketingového balastu
- Eyebrow: „Akreditovaná měření · odborné studie · dokumentace pro úřady" — konkrétní
- 2 primární CTA: „Poptat měření emisí" + „Poptat odborný posudek"
- Třetí cesta: „Nevím, co potřebuji – poslat podklady k posouzení" — klíčové pro personu Martin
- **Proof panel v hero** (`hero-proof-panel`): metriky vedle headlinu, autorizace
- **Trust band** pod hero: Akreditovaná laboratoř č. 1599, ISO 17025, Autorizace EIA, Soudní znalec — silný trust signál hned po hero

**Struktura obsahu:**
- 3-pilířová struktura „Co zajišťujeme" se sub-linky — přehledné
- „Jak probíhá zakázka" — 4 kroky, nastavuje očekávání
- Reference teaser se segmenty — dobrý bez konkrétních klientů
- Latest poradna articles — propojuje editorial s homepage
- Final CTA banner — konkrétní nabídka: „Pošlete rozhodnutí, výzvu nebo popis záměru"

### Slabiny ⚠️

**1. Metriky v hero — nutné ověřit [OVĚŘIT S HEZINOU]**
```
"36 let odborné činnosti"  →  IČO 27504379 registrováno ~2004 = ~22 let?
"14 000+ realizovaných zakázek"
"6 000+ měření v terénu"
```
Tato čísla jsou v `src/lib/home-hero-metrics.ts`. Musí být ověřena PŘED spuštěním. Pokud jsou nepřesná, poškozují důvěryhodnost.

**2. Audience karty bez CTA**
Sekce „Pro koho pracujeme" (6 karet: Průmysl, Energetika, Investoři, Odpady, Veřejný sektor, Budovy) jsou **pouze informativní** — bez odkazu na konkrétní službu nebo kontakt. Uživatel, který se v nich najde, nemá jasný next step.

**Doporučení:** Každá karta by měla mít odkaz na relevantní `/provozy-a-technologie/[segment]` nebo na `/kontakt?sector=[...]`.

**3. Reference sekce — prázdné sliby**
Sekce teaser ukazuje segmenty a 3 příklady zakázek, ale odkaz „Zobrazit reference" vede na `/reference` — tuto stránku jsem neauditoval. Pokud je prázdná nebo slabá, je lepší ji zatím neslibovat.

---

## 2. Service Pages (ServicePage komponenta)

Všech 14 service pages používá sdílenou komponentu `ServicePage.tsx`. Audit platí pro všechny.

### Co funguje ✅

**3 CTA body na každé service page:**
1. Hero `btn-row`: primární CTA + „Jaké podklady poslat"
2. „Jak začít" karta (`service-start-card`): scope + docs + CTA uprostřed stránky
3. `cta-strip` banner na konci stránky

Toto je správná konverzní architektura — CTA na vrchu, uprostřed i na dně.

**Side panel v hero:**
- Levý sloupec: H1 + intro + CTA
- Pravý panel: „Typické důvody poptávky" (3 položky z `whenNeeded`) — rychlý scan pro zákazníka, který si chce ověřit, že je na správném místě

**Přehledná struktura obsahu:**
- `service-decision-panel`: scope, outputs, docs — tři klíčové otázky zodpovězeny nad foldem
- Navazující témata + sektorové crosslinky + „Související služby" — interlinking pro SEO i UX

**FAQ sekce** (`ServiceFaqTeaser`) — pokud je `faqCategoryId` vyplněno, zobrazuje se FAQ přímo pod service obsahem

### Slabiny ⚠️

**1. `<details>` element skrývá důležitý obsah**
Sekce „Doplňující informace pro přípravu zakázky" je schovaná za `<summary>` toggle. Obsahuje:
- Pro koho je služba
- Typické úřady a řízení
- Příklady zakázek z praxe
- Jak probíhá zakázka
- Časté chyby

Toto je hodnotný obsah jak pro uživatele (Tomáš hledá právě tyto detaily), tak pro SEO (long-tail klíčová slova). Skrytí za `<details>` snižuje jeho efekt.

**Doporučení:** Zvážit, zda alespoň „Pro koho" a „Příklady zakázek" nezobrazit přímo (ne schované). Google `<details>` indexuje, ale UX se zhorší.

---

## 3. Kontaktní stránka (`/kontakt`)

### Co funguje ✅

- Hero má 3 okamžité CTA: `Zavolat` / `Poslat e-mail` / `Vyplnit poptávku`
- Side panel s kontaktními údaji viditelný hned vedle formuláře
- „Co je vhodné přiložit" — snižuje anxietu, Martin ví, co poslat
- 7 quick paths s konkrétními CTAs (Poptat měření / Poptat studii / Poslat podklady k posouzení)
- Team sekce (`TeamSectionContact`) — osobní kontakt buduje důvěru
- Kompletní firemní kontaktní údaje (IČO, DIČ, všechny adresy)

### Slabiny ⚠️

**Formulář pod fold**
Hero sekce (H1 + perex + 3 tlačítka) je před formulářem. Uživatel musí scrollovat k formuláři, nebo kliknout na „Vyplnit poptávku" anchor link. Na desktopu to není problém (formulář je vedle side panelu), ale na mobilu může být hero příliš dlouhý.

**Doporučení:** Testovat na mobilu. Pokud je fold příliš hluboko, zkrátit hero text nebo přesunout formulář výše.

---

## 4. Měření emisí (`/mereni-emisi`)

Konkrétní příklad nejdůležitější service page.

### Co funguje ✅

- Intro velmi konkrétní: „Akreditované měření emisí z komínů, výduchů a technologií. Ověřujeme vhodnost měřicího místa, reprezentativnost provozního režimu..."
- Scope: NOx, CO, SO₂, O₂, TOC/VOC, TZL, HCl, kovy — konkrétní látky, ne vágní popis
- `whenNeeded` odkazuje na vyhlášku č. 415/2012 Sb. — legislativní přesnost pro Tomáše
- `commonMistakes` — unikátní obsah, buduje autoritu (nikdo jiný toto nemá)
- `relatedLinks` na ISPOP, posudky, rozptylové studie — logická navigace

### Co ověřit ⚠️

- Odkaz na `/ispop-souhrnna-provozni-evidence`, `/odborne-posudky`, `/rozptylove-studie` — tyto stránky musí existovat

---

## 5. Technické aspekty

### Co funguje ✅

- Schema markup (JSON-LD) na každé stránce — Service, BreadcrumbList, ItemList
- Canonical URL na každé stránce
- SEO metadata (title + description) s `next/head`
- Next.js App Router — SSR/SSG ready
- Decap CMS pro správu obsahu v `/poradna`
- Resend API pro formuláře

### Co ověřit ⚠️

- **`/akreditace-autorizace-dokumenty`** — Předchozí audit indikoval, že stránka `/akreditace` přesměrovává na tento slug. Ověřit, zda stránka existuje a je dostupná.
- **`/reference`** — Existuje stránka, ale obsah neauditován. Pokud je prázdná, odebrat odkaz z homepage.
- **OpenGraph** — Ověřit, zda jsou OG obrázky definovány (pro sdílení na LinkedIn, které je relevantní pro cílové persony).

---

## 6. Srovnání s ekome.cz (benchmark)

| Oblast | ekome.cz | NATURCHEM MVP | Hodnocení |
|--------|---------|---------------|-----------|
| Trust signály v hero | Loga klientů, certifikace nad foldem | Trust band hned po hero | ✅ Srovnatelné |
| Redundantní kontakty | Telefon/mail vždy viditelné v navigaci | V kontaktu silné, v nav neověřeno | ⚠️ Ověřit nav |
| Service card clarity | Jasné karty se zanořenými linky | Pilíře + sub-linky na homepage | ✅ Srovnatelné |
| Inline CTA na service pages | Ano | Ano (3 pozice) | ✅ MVP má víc! |
| Audience segmentation | Obecná | 6 segmentů + 4 persony | ✅ MVP lepší |
| Blog/obsah | Minimální | 35+ článků v /poradna | ✅ MVP výrazně lepší |
| Hierarchie služeb | 3 pilíře (Emise / Hygienická / Studie) | 3 pilíře (stejná logika) | ✅ Stejné |

**Závěr srovnání:** NATURCHEM MVP je v konverzní architektuře a obsahu silnější nebo srovnatelný s ekome.cz. Hlavní výhoda ekome.cz je v jednoduchosti — méně informací, jasněji strukturováno. NATURCHEM má tendenci k větší komplexitě.

---

## 7. Prioritizovaný akční plán

### Priorita 1 — Ověřit před spuštěním (blocker)

- [ ] **Metriky v hero**: „36 let odborné činnosti", „14 000+ zakázek", „6 000+ měření" — ověřit s Ing. Hezinou nebo upravit
- [ ] **Stránka `/reference`** — auditovat obsah, nebo odebrat odkaz z homepage
- [ ] **Stránka `/akreditace-autorizace-dokumenty`** — ověřit dostupnost a obsah

### Priorita 2 — Konverzní vylepšení

- [ ] **Audience karty na homepage**: přidat odkaz/CTA na relevantní sekci služeb nebo `/kontakt?sector=...`
- [ ] **Fold-test formuláře na mobilu**: změřit, kde je fold na nejčastějším zařízení cílové skupiny, zkrátit hero text pokud potřeba
- [ ] **`<details>` sekce**: zvážit zobrazení alespoň „Pro koho" a „Příklady" přímo (ne schované)

### Priorita 3 — Obsah a copy

- [ ] **Copy audit stránek**: přejít service pages dle TOV checklistu — pasivum, zakázané fráze, benefit-first struktura
- [ ] **Blog CTA**: ověřit, zda každý článek v `/poradna` má CTA na konci (kritické pro personu Martin)
- [ ] **Navigace**: ověřit, zda jsou kontaktní cesty (telefon/mail) viditelné v navigaci nebo headeru

---

## 8. Co nebylo auditováno

- Vizuální design a mobilní layout (vyžaduje spuštěný dev server)
- Rychlost načítání (Core Web Vitals)
- Obsah stránek `/reference`, `/provozy-a-technologie/*`, `/poradna/*` (35+ článků)
- Funkčnost Resend formuláře v produkci
- Decap CMS — správa obsahu a OAuth flow
- Cookie lišta a GDPR

---

*Soubor: 00-strategie/mvp-audit.md*  
*Projekt: NATURCHEM, s.r.o. — web 2026*  
*Navazuje na: PROJEKT-STATUS.md, brand-manual.md, personas.md, tone-of-voice.md*
