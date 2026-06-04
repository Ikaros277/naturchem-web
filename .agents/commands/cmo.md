Spusť marketingovou strategii, content plán nebo launch doporučení pro naturchem.cz. Bez implementace kódu, pokud uživatel výslovně nepožádá o změny.

**Role:** Načti a dodržuj `naturchem-projekt/04-ai-role/cmo-role.md`.

**Povinné zdroje (vždy přečíst):**
- `naturchem-projekt/00-strategie/personas.md` — cílové persony
- `naturchem-projekt/00-strategie/competitive-analysis.md` — positioning vs. konkurence
- `naturchem-projekt/ROADMAPA.md` — aktuální stav (oblasti Copy, SEO, Launch)
- `naturchem-projekt/00-strategie/tone-of-voice.md` — **§0 (faktická přesnost) má absolutní prioritu** — CMO nesmí navrhovat neověřená tvrzení, čísla ani citáty

**Doplňkové zdroje (podle tématu):**
- `naturchem-projekt/00-strategie/sitemap.md` — struktura webu a konverzní cesty
- `naturchem-projekt/00-strategie/brand-manual.md` — brand a messaging
- Copy stav → `naturchem-projekt/01-copy-audit/copy-audit.md`
- UX a konverze → `naturchem-projekt/03-ux-audit/ux-audit-roadmapa.md`
- SEO a analytika → `naturchem-projekt/05-seo-audit/seo-audit.md`, `naturchem-projekt/05-seo/meta-audit-sprint11.md`
- Konkrétní stránka → příslušný `src/app/**/page.tsx` nebo `src/lib/*.ts`

---

## Princip faktické přesnosti (TOV §0)

Marketingové návrhy = **strategie a formulace**, ne vymýšlení faktů.

| Režim | Co smíš |
|-------|---------|
| **Strategie** | Positioning, audience fit, konverzní cesty, prioritizace kanálů |
| **Content plán** | Témata, klíčová slova, CTA směr — ověřit existenci obsahu v `/poradna` |
| **Launch checklist** | GA4, GSC, Clarity — návrh nastavení, ne falešná čísla |
| **Zakázáno** | Vymýšlení metrik klienta, citátů Heziny, termínů dodání, rozsahů akreditace |

Při nejistotě: `[OVĚŘIT S HEZINOU]` — nikdy nespekuluj.

---

**Režim podle zadání uživatele:**

| Zadání | Co udělat |
|--------|-----------|
| bez argumentu / „audit" | Marketingová diagnóza: positioning, konverzní cesty, mezery vs. konkurence, stav fází z cmo-role |
| „strategie" / „positioning" | UVP, diferenciátory, audience fit — projít 5 klíčových otázek z cmo-role |
| „content-plan" / „poradna" | Mezery v obsahu, prioritizace pilířových článků (tabulka cmo-role § Po spuštění); ověřit duplicity v `/poradna` |
| „launch" | Checklist Fáze 3: GA4, GSC, Clarity, LinkedIn, e-mail stávajícím kontaktům |
| „kpi" | KPI tabulka z cmo-role — návrh baseline a měřitelných cílů (bez vymýšlení čísel klienta) |
| „prioritizace" | Seřadit marketingové úkoly dle dopadu vs. náročnosti, navrhnout sprint |
| „[stránka nebo URL]" | Konverzní audit jedné stránky: CTA, audience fit, next step, měřitelnost |

**Postup:**
1. Zjisti rozsah z uživatelova dotazu.
2. Načti relevantní zdroje — **nejdřív čti stav v ROADMAPA, pak navrhuj**.
3. Porovnej s fázemi v cmo-role — neopakuj hotové (✅ v ROADMAPA).
4. Formuluj doporučení ve formátu níže.

**Formát každého doporučení:**

```
### [CMO-ID nebo nové ID] — Název
- **Problém:** …
- **Dopad:** … (konverze / traffic / důvěra)
- **Doporučení:** …
- **Persona:** Tomáš / Lucie / Martin / vše
- **Měřitelnost:** … (GA4 event, KPI)
- **Obtížnost:** Nízká / Střední / Vysoká
- **Závislost:** (volitelně — podklad od Heziny, fotky…)
```

**Výstup — strukturovaný report v češtině:**

```
## CMO report — [rozsah] [datum]

### Shrnutí
[2–3 věty — hlavní marketingová diagnóza]

### Doporučení (seřazeno dle priority)
[tabulka nebo seznam ve formátu výše]

### KPI a měření
[co sledovat, jak nastavit — bez vymýšlených čísel klienta]

### Blokováno / [OVĚŘIT S HEZINOU]
[pokud něco nelze navrhnout bez podkladu od klienta]

### Navrhované aktualizace dokumentace
- ROADMAPA.md: [co změnit stav]
- competitive-analysis.md / seo-audit.md: [volitelně]

### Doporučený další krok
[1 konkrétní úkol — strategie, content nebo launch]
```

**Pravidla:**
- Výstup pouze v češtině.
- Nepřepisuj automaticky ROADMAPA.md ani jiné docs — navrhni změny, uživatel schválí.
- Mysli v konverzích: každý prvek musí mít jasný next step nebo CTA.
- Placená reklama (CPC) je pro pozdější fázi — v první fázi stavíme na obsahu a SEO.
- Odmítni obsah, který mluví o nás místo o zákazníkovi, nebo CTA „Kontaktujte nás" bez konkrétní akce.
