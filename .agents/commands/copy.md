Spusť copy návrhy nebo audit textů pro naturchem.cz. Bez zápisu do kódu, pokud uživatel výslovně nepožádá o implementaci (`implement`).

**Role:** Načti a dodržuj `naturchem-projekt/04-ai-role/copy-role.md`.

**Povinné zdroje (vždy přečíst):**
- `naturchem-projekt/00-strategie/tone-of-voice.md` — **sekce 0 (faktická přesnost) má absolutní prioritu** nad stylem
- `naturchem-projekt/04-ai-role/copy-role.md` — pravidla psaní, šablony, checklist
- `naturchem-projekt/00-strategie/personas.md` — cílové persony

**Doplňkové zdroje (podle tématu):**
- Diagnóza copy problémů → `naturchem-projekt/01-copy-audit/copy-audit.md`
- Stav úkolů → `naturchem-projekt/ROADMAPA.md` (Oblast 2: Copy)
- Konkrétní stránka → příslušný `src/app/**/page.tsx` nebo `src/lib/*.ts`
- Služby → `src/lib/dedicated-service-pages.ts` + inline `src/app/sluzby/**/page.tsx`

**Mimo scope tohoto sprintu:** `content/articles/*.md` (33 článků poradny) — úkol **P-COPY** později. U `/poradna` jen hero lead (C8).

---

## Princip faktické přesnosti (TOV §0) — anti-halucinace

Copy sprint = **přeformulování**, ne **doplňování faktů**. Styl je až druhý.

| Režim | Kdy | Co smíš |
|-------|-----|---------|
| **Styl only** | FAQ, legislativní pasáže, seznamy podkladů, instrumenty | Zkrátit větu, aktivní sloveso, odstranit kličé — **význam a fakta beze změny** |
| **Parafráze** | Služby, corporate, reference | Přeformulovat existující tvrzení — **nesmíš přidat nový fakt, číslo, termín ani závazek** |
| **Zakázáno** | Vše bez podkladu | Vymýšlení metodik, termínů dodání, rozsahů akreditace, jmen zákazníků, citátů Heziny |

**Nikdy:**
- Nepřidávej nová čísla, procenta, roky, termíny dodání (metriky v `company-stats.ts` neměnit)
- Nepřidávej technické detaily, které nejsou ve stávajícím textu
- Nevymýšlej citáty Ing. Heziny ani biografie týmu
- Nepřekrucuj legislativní tvrzení ve FAQ
- Při nejistotě: `[OVĚŘIT S HEZINOU]` + ponech originál — **nikdy nespekuluj**

**Citlivé oblasti:** `company-stats.ts` (metriky), `accreditation-scope.ts`, `faq.ts` (legal refs), `team.ts`, `reference-content.ts` (anonymizace).

---

**Režim podle zadání uživatele:**

| Zadání | Co udělat |
|--------|-----------|
| bez argumentu / „audit" | Porovnat web s copy-audit.md a TOV; vypsat zbývající problémy (C-G*, zakázané fráze) |
| `sprint C1` … `sprint C9` | Návrhy copy pro danou dávku — viz tabulka sprintů níže |
| `[stránka nebo URL]` | Návrhy copy jen pro danou stránku / soubor |
| `grep fráze` | Hledat zakázané fráze z TOV sekce 5 napříč `src/` |
| `implement` | **Jen po schválení** — zapsat schválené návrhy do kódu |
| `poradna` / P-COPY | Odmítnout nebo upozornit — mimo scope; až samostatný úkol |

**Sprintové dávky (scope):**

| Sprint | Rozsah |
|--------|--------|
| **C1** | Homepage: `page.tsx`, `home-hero-metrics.ts`, `company-stats.ts` (intro/note), `cta.ts` |
| **C2** | O společnosti, odborná garance, `guarantee-copy.ts`, `work-process.ts`, `team.ts`, `nationalMessaging.ts` |
| **C3** | Akreditace, `accreditation-scope.ts`, `accreditation-documents.ts`, přístrojové vybavení (úvody) |
| **C4** | Služby měření (7 slugů) — body copy, ne intro (P3-2 hotovo) |
| **C5** | Služby studie (6 slugů) |
| **C6** | Služby povolování/EIA (11 slugů) |
| **C7** | `service-groups.ts`, provozy 13×, reference, typické zakázky, `seo-landings.ts` |
| **C8** | `faq.ts` (styl only), `poradna/page.tsx` hero |
| **C9** | Kontakt, formulář, Footer, UI labely + grep QA |

---

**Postup návrhů:**
1. Zjisti rozsah z dotazu (sprint / stránka).
2. Načti stávající texty z kódu — **nejdřív čti, pak navrhuj**.
3. U každého bloku urči typ úpravy (styl only / parafráze / [OVĚŘIT S HEZINOU]).
4. Formuluj návrhy ve formátu níže — **nepiš do kódu** bez `implement`.

**Formát každého návrhu:**

```
### [soubor] — [sekce/pole]
- **Persona:** Tomáš / Lucie / Martin / vše
- **Typ úpravy:** styl only / parafráze / [OVĚŘIT S HEZINOU]
- **Stávající:** „…"
- **Navrh:** „…"
- **Fakta zachována:** ano — význam stejný / ne — vysvětlení
- **TOV check:** aktivní sloveso / bez zakázané fráze / max délka věty
```

**Výstup — strukturovaný report v češtině:**

```
## Copy návrhy — [rozsah] [datum]

### Shrnutí
[2–3 věty — kolik bloků, hlavní typ úprav]

### Návrhy
[seznam ve formátu výše]

### Blokováno / [OVĚŘIT S HEZINOU]
[pokud něco nelze přepsat bez podkladu od Heziny]

### Doporučený další krok
[implement po schválení / další sprint]
```

**Pravidla:**
- Výstup pouze v češtině.
- Oslovuj zákazníka **Vy** (velké V).
- Zakázané fráze (TOV sekce 5): „komplexní služby", „profesionální přístup", „neváhejte nás kontaktovat", „v nejkratším možném termínu", „rádi Vám pomůžeme", „kvalita je naší prioritou" — automaticky přeformulovat.
- Věty max. 20 slov v těle; intro služeb max. 25 slov.
- Nepřepisuj automaticky `copy-audit.md` ani `ROADMAPA.md` — navrhni aktualizaci, uživatel schválí.
- Po implementaci navrhni aktualizaci sprint logu v `copy-audit.md` (sekce C1–C9).
