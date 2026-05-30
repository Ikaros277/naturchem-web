# Meta audit a interní prolinkování — Sprint 11

> **Datum:** 2026-05-30  
> **Rozsah:** title/description na klíčových stránkách, prolinkování poradna ↔ služby

---

## Shrnutí

| Oblast | Stav | Poznámka |
|--------|------|----------|
| Meta title/description | ✅ Audit hotov | Většina stránek v pořádku; drobné úpravy poradny |
| Poradna → služby | ✅ | `ArticleRelatedServices` na každém článku |
| Služby → poradna | ✅ | `ServicePoradnaTeaser` v `ServicePage` |
| P4-3 FAQ teaser | ✅ | `faqCategoryId` v `dedicated-service-pages.ts` |
| P4-4 Provozy checklist | ✅ | Sekce přesunuta pod hero |
| P4-1 Školení | ✅ | Migrace na `ServicePage` |

---

## Konvence meta title

- **Root layout** (`layout.tsx`): template `%s | NATURCHEM`
- **Homepage, kontakt, reference, FAQ, akreditace, školení:** `title.absolute` — vlastní branding bez duplicity
- **Service pages:** krátký popisný title + template suffix
- **Poradna články:** `generateMetadata` — title = název článku

### Doporučená délka

| Pole | Cíl | Poznámka |
|------|-----|----------|
| Title | 50–60 znaků (s brandem) | Google zkracuje ~60 znaků |
| Description | 140–160 znaků | Unikátní per stránka |

---

## Klíčové stránky — audit

| URL | Title | Description | Poznámka |
|-----|-------|-------------|----------|
| `/` | absolute, OK | 155 znaků, OK | |
| `/sluzby/` | OK | OK | |
| `/sluzby/mereni-emisi` | OK | OK | |
| `/sluzby/pracovni-prostredi` | OK | OK | |
| `/sluzby/mereni-hluku` | OK | OK | |
| `/sluzby/rozptylove-studie` | OK | OK | |
| `/sluzby/eia-posudky-poradenstvi` | OK | OK | Hub stránka |
| `/sluzby/ispop` | z dedicated data | OK | FAQ kategorie `ispop` |
| `/sluzby/ghg-overovani` | z dedicated data | OK | FAQ kategorie `ispop` (sdílená GHG/ISPOP) |
| `/sluzby/bezpecnostni-listy` | z dedicated data | OK | FAQ `pracovni-prostredi` |
| `/sluzby/chemicke-latky` | z dedicated data | OK | FAQ `pracovni-prostredi` |
| `/sluzby/skoleni-chemicke-legislativy` | absolute, OK | OK | ServicePage od S11 |
| `/poradna/` | **upraveno S11** | **upraveno S11** | Delší title pro SEO |
| `/poradna/[slug]` | dynamický | excerpt | |
| `/provozy-a-technologie/` | OK | OK | |
| `/reference/` | absolute, OK | OK | |
| `/kontakt/` | absolute, OK | OK | |
| `/o-spolecnosti-naturchem/` | absolute, OK | OK | |
| `/akreditace-autorizace-dokumenty/` | absolute, OK | OK | |
| `/faq/` | absolute, OK | OK | |

### Stránky bez zásahu (OK)

Dedicated service routes (`DedicatedServiceRoute`) čerpají meta z `dedicatedServiceMetadata()` — konzistentní.

Sector pages (`/provozy-a-technologie/*`) čerpají z `sectors.ts` — konzistentní.

---

## Interní prolinkování — implementace S11

### Nové soubory

- `src/lib/poradna-service-links.ts` — mapování témat/klíčových slov → služby
- `src/components/ArticleRelatedServices.tsx` — blok na konci článku
- `src/components/ServicePoradnaTeaser.tsx` — 0–2 články na service page

### Logika párování

1. Téma z `topicForArticle()` → primární služby
2. Klíčová slova v title/slug → doplnění (emise, hluk, EIA, ISPOP, chemie…)
3. Max 3 služby na článek, max 2 články na službu

### Manuální doplnění (volitelné, copy sprint)

- Frontmatter `relatedServices` v markdown článcích pro explicitní override
- Odkazy uvnitř těla článků na konkrétní služby (editoriální úprava)

---

## Co zůstává na produkci (mimo S11)

- Google Analytics 4 + Search Console
- Robots.txt finální kontrola
- Lighthouse / Core Web Vitals na `naturchem.cz`
- Rich Results Test na produkční URL

---

*Soubor: naturchem-projekt/05-seo/meta-audit-sprint11.md*
