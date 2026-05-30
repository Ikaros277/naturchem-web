Vytvoř nebo aktualizuj klientský report prací v souboru `reports/report.md`.

**Postup:**

0. **Synchronizace repozitáře (cross-tool):** Spusť `git status`. Pokud existuje remote a větev zaostává, spusť `git pull`. Report funguje z Cursoru i VS Code + Claude Code — commity jsou společné, stačí mít aktuální historii.

1. Spusť `git log --format="%H %ai %s" -30` abys zjistil hash, časy a popis commitů.

2. Přečti existující `reports/report.md` (pokud existuje). Z tabulky „Přehled projektu" vyextrahuj:
   - Datum zahájení spolupráce
   - Dosavadní počet sezení
   - Dosavadní celkový čas (součet všech předchozích sezení)
   - Datum posledního zaznamenaného sezení (z nadpisu `## Sezení: …`)

3. **Urči rozsah tohoto sezení:**
   - Commity **novější než poslední zaznamenané sezení** v reportu patří do aktuálního reportu — i když v konverzaci neproběhla implementace (typicky práce z jiného nástroje).
   - Pokud report neexistuje, ber všechny commity od Initial commit.

4. **Detekce režimu popisu:**
   - **Režim konverzace:** Konverzace obsahuje skutečnou implementaci nebo opravy (ne jen dotaz na /report). Primární zdroj = průběh konverzace; git slouží k ověření a doplnění.
   - **Režim git:** Konverzace je krátká, jen dotaz, nebo neobsahuje implementaci — popis odvoď z commitů v rozsahu sezení:
     - `git log --oneline` pro přehled
     - `git show --stat <hash>` a u větších commitů i `git show <hash>` pro pochopení změn
     - Seskup související commity do logických oblastí podle commit messages a diffů
     - U každé oblasti odvoď „Proč" z kontextu commit message a typu změny (UX oprava, nová sekce, bugfix…)
   - V sezení uveď **Zdroj popisu:** „AI konverzace" nebo „Git commity (práce z jiného nástroje / bez AI konverzace v tomto nástroji)".

5. Identifikuj v rozsahu sezení:
   - Co bylo změněno nebo opraveno
   - Proč se to dělalo (záměr, kontext, zadání)
   - Kolik kol výměny (user → asistent) proběhlo v **této** konverzaci (v režimu git může být 1–2)

6. **Pokud není co reportovat** (žádné nové commity od posledního sezení a žádná implementace v konverzaci): neupravuj report, informuj uživatele, že vše je aktuální.

7. Odhadni časovou náročnost tohoto sezení:
   - Použij **jen commity v rozsahu sezení**. Seřaď časy vzestupně. Spočítej součet mezer **jen mezi po sobě jdoucími commity kratšími než 2 hodiny** (větší mezery = pauza, nezapočítávat).
   - Pokud v rozsahu sezení není commit nebo je jen jeden: odhad z počtu výměn (1 výměna ≈ 2–5 minut).
   - Vypiš každý pracovní blok zvlášť s datem (např. „29. 5. večer ~1,5 hod + 30. 5. odpoledne ~1,5 hod").

8. Aktualizuj tabulku „Přehled projektu":
   - Počet sezení: předchozí + 1 (nebo beze změny, pokud jen doplňuješ stejné dne)
   - Celkový čas: předchozí součet + čas tohoto sezení
   - Aktuální fáze: odvoď z obsahu sezení; volitelně ověř v `naturchem-projekt/ROADMAPA.md`

9. Přidej nový blok sezení **hned pod tabulku „Přehled projektu"** (před ostatní sezení — nejnovější nahoře). Pokud sezení stejného dne již existuje a obsahuje stejnou práci, **doplň ho** místo duplicity. Pokud tentýž den pokračuje práce z jiného nástroje, **slouč** do jednoho sezení daného dne.

10. Pokud složka `reports/` neexistuje, vytvoř ji.

11. Ulož zpět do `reports/report.md`.

12. **Automatický commit a push** (pouze pokud byl report skutečně změněn v kroku 11):
    - `git add reports/report.md`
    - Commit se zprávou: `Report: aktualizace sezení [DD. M. YYYY]` — přidej stručný doplněk z přehledu sezení, pokud je výstižný (max. ~60 znaků v prvním řádku).
    - `git push` na aktuální větev (typicky `main`).
    - Pokud push selže kvůli zaostávající větvi: `git pull --rebase`, pak znovu `git push`.
    - Po úspěchu uveď hash commitu a potvrzení pushnutí.
    - Pokud nebyl report změněn (krok 6), commit ani push neprováděj.

**Formát výstupního souboru:**

```markdown
# Report prací — naturchem.cz

## Přehled projektu
| Položka | Hodnota |
|---|---|
| Projekt | naturchem.cz |
| Zahájení spolupráce | [datum prvního sezení] |
| Počet sezení celkem | [N] |
| Celkový odhadovaný čas | [součet všech sezení] |
| Aktuální fáze | [stručně — např. "UX revize a obsahový sprint"] |

---

## Sezení: DD. M. YYYY

### Přehled
[2–3 věty shrnující záměr a výsledek tohoto sezení.]

**Zdroj popisu:** [AI konverzace | Git commity (práce z jiného nástroje / bez AI konverzace v tomto nástroji)]

### Provedené změny

#### [Název oblasti nebo funkce]
**Co bylo uděláno:** [Konkrétní popis změny bez kódu, srozumitelný pro polotechnického čtenáře.]  
**Proč:** [Kontext a záměr — proč to bylo potřeba, jaký problém to řeší.]

[Opakuj pro každou oblast změn.]

### Časová náročnost
**Odhadovaná doba práce:** [např. přibližně 2–3 hodiny]  
**Rozložení:** [pracovní bloky s datem, např. "29. 5. večer ~1,5 hod + 30. 5. odpoledne ~1,5 hod"]  
**Počet výměn s AI:** [počet kol konverzace]  
*Poznámka: čas odhadován součtem mezer mezi git commity kratšími než 2 hodiny; delší mezery se jako přestávky nezapočítávají. Commity jsou nástrojově neutrální — fungují z Cursoru i VS Code + Claude Code.*

### Technická poznámka
[Volitelně: stručná zmínka o ovlivněných souborech nebo komponentách. Vynech, pokud není přínosná.]

---

[Starší sezení zůstávají níže beze změny]
```

**Pravidla pro obsah:**
- Zpráva musí být celá v češtině.
- Cílová skupina: polotechnický klient — rozumí webu a technologiím obecně, ale nepotřebuje znát konkrétní kód.
- Zahrň pouze to, co bylo skutečně provedeno v rozsahu sezení (konverzace nebo nezreportované commity).
- Nezahrnuj nedokončené věci, plány do budoucna ani hypotézy.
- V režimu konverzace: primární zdroj = konverzace, git = ověření.
- V režimu git: primární zdroj = commit messages + diff; „Proč" odvoď rozumně z kontextu změn.
- Pokud $ARGUMENTS obsahuje text, použij ho jako volitelný podtitulek nebo poznámku v reportu.

Po uložení, commitu a pushu řekni uživateli, že report byl aktualizován a odeslán do repozitáře, a uveď aktuální celkový čas projektu. Pokud nebylo co reportovat, jen informuj, že vše je aktuální.
