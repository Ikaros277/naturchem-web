Spusť UX audit nebo doporučení pro naturchem.cz. Bez implementace kódu, pokud uživatel výslovně nepožádá o změny.

**Role:** Načti a dodržuj `naturchem-projekt/04-ai-role/ux-role.md`.

**Povinné zdroje (vždy přečíst):**
- `naturchem-projekt/03-ux-audit/ux-audit-roadmapa.md` — stávající diagnóza a roadmapa P1–P5
- `naturchem-projekt/ROADMAPA.md` — aktuální stav úkolů
- `naturchem-projekt/00-strategie/personas.md` — cílové persony

**Doplňkové zdroje (podle tématu):**
- Vizuální scanovatelnost / P5 → `naturchem-projekt/06-graficky-audit/graficky-audit.md`
- Konkrétní stránka → příslušný `src/app/**/page.tsx` a sdílené komponenty
- Copy → `naturchem-projekt/01-copy-audit/copy-audit.md`

**Režim podle zadání uživatele:**

| Zadání | Co udělat |
|--------|-----------|
| bez argumentu / „audit" | Projít web (kód + struktura), porovnat s ux-audit-roadmapa, vypsat nová nebo nevyřešená doporučení |
| „vizuální" / „P5" / „scanovatelnost" | Fokus G6 + P5: hero, ikony, layout rytmus, obrázky; navázat na grafický audit |
| „[stránka nebo URL]" | Audit jedné stránky: struktura sekcí, CTA, scanovatelnost, konverzní cesta |
| „prioritizace" | Seřadit zbývající P-ID dle dopadu vs. náročnosti, navrhnout sprint |

**Postup auditu:**
1. Zjisti rozsah z uživatelova dotazu.
2. Projdi relevantní TSX/CSS — mapuj sekce, CTA, vizuální prvky.
3. Porovnej s existujícími P-ID v ux-audit-roadmapa — neopakuj hotové (✅ v ROADMAPA).
4. Formuluj doporučení ve formátu níže.

**Formát každého doporučení:**

```
### [P-ID nebo nové ID] — Název
- **Problém:** …
- **Dopad:** …
- **Oprava:** …
- **Soubor:** `cesta/k/souboru`
- **Obtížnost:** Nízká / Střední / Vysoká
- **Závislost:** (volitelně — content od klienta, stock fotky…)
```

**Výstup — strukturovaný report v češtině:**

```
## UX audit — [rozsah] [datum]

### Shrnutí
[2–3 věty — hlavní diagnóza]

### Doporučení (seřazeno dle priority)
[tabulka nebo seznam ve formátu výše]

### Navrhované aktualizace dokumentace
- ux-audit-roadmapa.md: [co doplnit]
- ROADMAPA.md: [co změnit stav]

### Doporučený další krok
[1 konkrétní úkol pro implementační sezení]
```

**Pravidla:**
- Výstup pouze v češtině.
- Nepřepisuj automaticky ux-audit-roadmapa.md ani ROADMAPA.md — navrhni změny, uživatel schválí.
- Nová doporučení čísluj jako P5-X nebo rozšiř existující ID; nekoliduj s hotovými položkami.
- U vizuálních témat rozliš Fázi A (stock/ikony teď) vs. Fázi B (fotky od Heziny).
