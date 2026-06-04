Spusť SEO audit nebo on-page návrhy pro naturchem.cz. Bez implementace kódu, pokud uživatel výslovně nepožádá o změny.

**Role:** Načti a dodržuj `naturchem-projekt/04-ai-role/seo-role.md`.

**Povinné zdroje (vždy přečíst):**
- `naturchem-projekt/05-seo-audit/seo-audit.md` — hlavní backlog (SEO-P1…P13, SEO-IL*)
- `naturchem-projekt/05-seo/meta-audit-sprint11.md` — aktuální stav meta (S11 hotovo)
- `naturchem-projekt/ROADMAPA.md` — Oblast 4: SEO a analytika
- `naturchem-projekt/00-strategie/personas.md` — cílové persony (Tomáš, Martin)
- `naturchem-projekt/00-strategie/sitemap.md` — URL struktura

**Doplňkové zdroje (podle tématu):**
- Klíčová slova → `naturchem-projekt/00-strategie/competitive-analysis.md` § klíčová slova
- Konkrétní stránka → `src/app/**/page.tsx` metadata, `src/lib/dedicated-service-pages.ts`
- SEO landingy → `src/lib/seo-landings.ts`
- Technické → `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/layout.tsx`
- Prolinkování → `src/lib/poradna-service-links.ts`, `ServicePage`, `ArticleRelatedServices`

---

## Aktuální stav (nezopakovat hotové)

Před doporučením vždy zkontroluj ROADMAPA a meta-audit S11:
- Meta title/description na klíčových stránkách — ✅ S11
- Interní prolinkování poradna ↔ služby — ✅ S11
- Sitemap kanonické URL — ✅ sprint 3

Neopakuj hotové položky. Zaměř se na 🔲 v ROADMAPA a seo-audit.

---

**Režim podle zadání uživatele:**

| Zadání | Co udělat |
|--------|-----------|
| bez argumentu / „audit" | Porovnat web + docs s seo-audit; vypsat nevyřešené položky (respektovat ✅ v ROADMAPA/S11) |
| `sprint SEO-P1` … `SEO-P13` | Návrhy pro danou dávku dle roadmapy v seo-audit § Roadmapa oprav |
| `meta` | Audit title/description konkrétních stránek (formát seo-role + meta-audit S11) |
| `technické` | Sitemap, robots, schema, Core Web Vitals, GBP checklist |
| `keyword gap` | Tier 1–3 z seo-role vs. aktuální pokrytí webu |
| `prolinkování` | Audit interních odkazů poradna ↔ služby — hledat zbývající mezery (S11 hotovo) |
| `[stránka nebo URL]` | On-page SEO jedné stránky: title, description, H1, keywords, interní odkazy |

**Sprintové dávky (scope):**

| Sprint | Rozsah |
|--------|--------|
| **SEO-P1** | Google Analytics 4 — implementace a testování |
| **SEO-P2** | Google Search Console — ověření domény + odeslání sitemapy |
| **SEO-P3** | Robots.txt — ověřit existenci a správnost |
| **SEO-P4** | Meta tituly — klíčové stránky (formát: `[Klíčové slovo] \| NATURCHEM`, max 60 znaků) |
| **SEO-P5** | Meta descriptions — klíčové stránky (max 155 znaků, CTA) |
| **SEO-P6** | Lighthouse audit — Core Web Vitals na produkci |
| **SEO-P7** | Rich Results Test — ověřit schema markup (JSON-LD) |
| **SEO-P8** | Blog → service pages: inline CTA do 10 nejrelevantnějších článků |
| **SEO-P9** | ALT texty — ověřit po přidání vizuálního obsahu |
| **SEO-P10** | H1 audit — struktura nadpisů na všech stránkách |
| **SEO-P11** | GSC: klíčová slova s impressions, nízký CTR → opravit meta tituly |
| **SEO-P12** | Články s vysokým traffic → inline CTA + propojení |
| **SEO-P13** | Nové blog články dle keyword gap analysis |

**Postup návrhů:**
1. Zjisti rozsah z dotazu (sprint / stránka / audit).
2. Načti stávající metadata a obsah z kódu — **nejdřív čti, pak navrhuj**.
3. Porovnej s seo-audit a ROADMAPA — neopakuj hotové.
4. Formuluj návrhy ve formátu níže — **nepiš do kódu** bez výslovné žádosti.

**Formát každého návrhu:**

```
### [soubor/URL] — [pole]
- **Klíčové slovo:** …
- **Persona:** Tomáš / Martin / vše
- **Stávající:** „…"
- **Navrh:** „…"
- **Délka:** X znaků
- **[OVĚŘIT S HEZINOU]:** ano / ne
- **TOV/SEO check:** H1 unikátní / klíčové slovo v title / CTA v description
```

**Výstup — strukturovaný report v češtině:**

```
## SEO report — [rozsah] [datum]

### Shrnutí
[2–3 věty — hlavní SEO diagnóza, kolik položek zbývá]

### Návrhy / doporučení
[seznam ve formátu výše]

### Keyword gap (pokud relevantní)
[Tier 1–3: pokryté / chybí / tenké stránky]

### Blokováno / [OVĚŘIT S HEZINOU]
[termíny dodání, technické závazky v meta — vždy označit]

### Navrhované aktualizace dokumentace
- seo-audit.md: [co doplnit]
- ROADMAPA.md: [co změnit stav]

### Doporučený další krok
[1 konkrétní sprint nebo stránka]
```

**Pravidla:**
- Výstup pouze v češtině.
- Title formát: `[Klíčové slovo] | NATURCHEM` (Next.js template `%s | NATURCHEM`).
- Meta description max. 155 znaků — klíčové slovo + benefit + CTA.
- Konkrétní termíny v meta description vždy označit `[OVĚŘIT S HEZINOU]`.
- Každá stránka: právě 1 H1, obsahuje primární klíčové slovo.
- Nepřepisuj automaticky seo-audit.md ani ROADMAPA.md — navrhni aktualizaci, uživatel schválí.
- Nová doporučení čísluj jako SEO-P* nebo SEO-IL*; nekoliduj s hotovými položkami.
