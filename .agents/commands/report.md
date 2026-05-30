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

6. **Pokud není co reportovat** (žádné nové commity od posledního sezení — ověř i `lastProcessedCommit` v `.agents/report-state.json` — a žádná implementace v konverzaci): neupravuj report, informuj uživatele, že vše je aktuální.

7. **Odhadni časovou náročnost** spuštěním skriptu (primární zdroj — deterministický výpočet):
   ```
   powershell -NoProfile -ExecutionPolicy Bypass -File scripts/estimate-session-time.ps1 -Since "YYYY-MM-DD"
   ```
   - `-Since`: datum posledního zaznamenaného sezení z reportu (formát `YYYY-MM-DD`, např. `2026-05-29` pro sezení před dnešním).
   - Skript vrátí JSON s poli: `totalLabel`, `blocksLabel`, `method`, `totalMinutes`, `hasGit`, `hasActivityLog`.
   - **Metoda odhadu** z `method`:
     - `git + konverzace` — commity + log z Cursor hooku (mezera nad 30 min = pauza)
     - `git` — jen commity (typicky Claude Code / bez hooku)
     - `konverzace` — jen log konverzace
   - **Fallback pořadí:** skript → odhad z počtu výměn (`počet × 3 min` z config `fallbackExchangeMinutes`).
   - Do reportu zapiš hodnoty ze skriptu — neodhaduješ čas „od oka".

8. Aktualizuj tabulku „Přehled projektu":
   - Počet sezení: předchozí + 1 (nebo beze změny, pokud jen doplňuješ stejné dne)
   - Celkový čas: předchozí součet + čas tohoto sezení
   - Aktuální fáze: odvoď z obsahu sezení; volitelně ověř v `naturchem-projekt/ROADMAPA.md`

9. Přidej nový blok sezení **hned pod tabulku „Přehled projektu"** (před ostatní sezení — nejnovější nahoře). Pokud sezení stejného dne již existuje a obsahuje stejnou práci, **doplň ho** místo duplicity. Pokud tentýž den pokračuje práce z jiného nástroje s **pauzou nad 30 min** (jiný blok ze skriptu), vytvoř **samostatné sezení** se stejným datem, ale jiným časovým rozsahem.

   **Pojmenování sezení (povinné):**
   - Nadpis ve tvaru `## Sezení: DD. M. YYYY, HH:MM–HH:MM` — časy **vždy z git commitů** nebo z pole `blocks[].label` / `blocksLabel` skriptu `estimate-session-time.ps1`.
   - **Nikdy** nepoužívej „ráno“, „dopoledne“, „odpoledne“, „večer“ v nadpisu — neodpovídají skutečnému času práce a matou klienta (např. práce ve 13:50 není večer).
   - Pokud je v daný den jen jeden souvislý blok, stačí `## Sezení: DD. M. YYYY, HH:MM–HH:MM` z prvního a posledního commitu bloku.
   - Starší sezení bez časů v nadpisu při úpravě reportu **oprav** podle `git log`, pokud commity existují.

10. Pokud složka `reports/` neexistuje, vytvoř ji.

11. Ulož zpět do `reports/report.md`.

12. **Automatický commit a push** (pouze pokud byl report skutečně změněn v kroku 11 a **neproběhla** automatická synchronizace z post-commit hooku — viz níže):
    - `git add reports/report.md .agents/report-state.json .agents/session-activity.jsonl`
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

## Sezení: DD. M. YYYY, HH:MM–HH:MM

### Přehled
[2–3 věty shrnující záměr a výsledek tohoto sezení.]

**Zdroj popisu:** [AI konverzace | Git commity (práce z jiného nástroje / bez AI konverzace v tomto nástroji)]

### Provedené změny

#### [Název oblasti nebo funkce]
**Co bylo uděláno:** [Konkrétní popis změny bez kódu, srozumitelný pro polotechnického čtenáře.]  
**Proč:** [Kontext a záměr — proč to bylo potřeba, jaký problém to řeší.]

[Opakuj pro každou oblast změn.]

### Časová náročnost
**Odhadovaná doba práce:** [např. ~1 hod 20 min — ze skriptu `totalLabel`]  
**Rozložení:** [ze skriptu `blocksLabel`, např. "30. 5. 09:58–11:17 (~1 hod 15 min) + 30. 5. 13:00–13:25 (~25 min)"]  
**Metoda odhadu:** [git + konverzace | git | konverzace | výměny]  
**Počet výměn s AI:** [počet kol konverzace]  
*Poznámka: čas počítá skript `estimate-session-time.ps1` — sloučí git commity a log konverzace (Cursor hook). Mezera nad 30 minut = pauza. V Claude Code bez hooku se použijí jen commity.*

### Technická poznámka
[Volitelně: stručná zmínka o ovlivněných souborech nebo komponentách. Vynech, pokud není přínosná.]

---

[Starší sezení zůstávají níže beze změny]
```

**Automatický režim (post-commit hook):**

Po instalaci (`pwsh scripts/install-git-hooks.ps1`, součást `setup-ai-commands.ps1`) běží po každém **produktovém** commitu skript `scripts/update-report-from-git.ps1`:

- Doplní `reports/report.md` a `.agents/report-state.json` (čas, commit message, dotčené soubory).
- Commit `Report: auto-sync [datum, čas] — …` a push na `origin` (vypnutí: `autoSyncOnCommit` / `autoPush` v `.agents/report-config.json`).
- **Přeskočí:** commity s prefixem `Report:`, pouze změny reportu/activity logu, už zpracovaný commit (`lastProcessedCommit`), běh uvnitř `REPORT_HOOK_RUNNING`.

**Kdy volat `/report` navíc:** větší sezení s kvalitním „Proč“ pro klienta, sloučení více commitů do jednoho přehledu, oprava auto-záznamu. Před zápisem zkontroluj `lastProcessedCommit` v `report-state.json` — neopakuj stejný commit. Auto-blok lze **přepsat** bohatším textem v nejnovějším sezení.

**Pravidla pro obsah:**
- Nadpis sezení = datum + **skutečný časový rozsah práce** (z git / skriptu), ne část dne slovy.
- Zpráva musí být celá v češtině.
- Cílová skupina: polotechnický klient — rozumí webu a technologiím obecně, ale nepotřebuje znát konkrétní kód.
- Zahrň pouze to, co bylo skutečně provedeno v rozsahu sezení (konverzace nebo nezreportované commity).
- Nezahrnuj nedokončené věci, plány do budoucna ani hypotézy.
- V režimu konverzace: primární zdroj = konverzace, git = ověření.
- V režimu git: primární zdroj = commit messages + diff; „Proč" odvoď rozumně z kontextu změn.
- Pokud $ARGUMENTS obsahuje text, použij ho jako volitelný podtitulek nebo poznámku v reportu.

Po uložení, commitu a pushu řekni uživateli, že report byl aktualizován a odeslán do repozitáře, a uveď aktuální celkový čas projektu. Pokud nebylo co reportovat, jen informuj, že vše je aktuální.
