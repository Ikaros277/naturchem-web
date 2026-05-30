# Report prací — naturchem.cz

## Přehled projektu
| Položka | Hodnota |
|---|---|
| Projekt | naturchem.cz |
| Zahájení spolupráce | 25. 5. 2026 |
| Počet sezení celkem | 3 |
| Celkový odhadovaný čas | ~7 hodin |
| Aktuální fáze | UX revize a obsahový sprint |

---

## Sezení: 30. 5. 2026

### Přehled
Sezení navázalo na předchozí den a dokončilo čtvrtý UX sprint — opravy designového systému, přepracování stránky Reference a doplnění sekce s logy zákazníků. Všechny změny byly nasazeny na produkci.

### Provedené změny

#### Opravy designového systému a navigace
**Co bylo uděláno:** Sekundární tlačítka (tzv. „ghost" styl s bílým pozadím) byla vizuálně posílena — nyní mají světlé navy tónované pozadí, díky čemuž jsou dobře viditelná na bílém podkladu. Položka „FAQ" v navigaci přejmenována na „Časté dotazy".  
**Proč:** Bílá tlačítka na bílém pozadí splývala s okolím a vypadala jako chybějící obsah. Přejmenování FAQ zlepšuje srozumitelnost pro návštěvníky, kteří neznají anglický zkratkový výraz.

#### Stránky služeb — odstranění nadbytečného CTA
**Co bylo uděláno:** Z každé stránky služby byl odstraněn opakující se blok s poptávkovým tlačítkem na spodku stránky.  
**Proč:** Tlačítko „Poptat" je trvale viditelné v horní navigaci (sticky hlavička), takže spodní copy bylo nadbytečné a zbytečně prodlužovalo stránku.

#### Stránka FAQ — redukce a přehlednost
**Co bylo uděláno:** Z hlavičky FAQ stránky zredukována 3 různě stylizovaná CTA tlačítka na jediné „Poslat podklady k posouzení". Odstraněna také opakující se poptávková tlačítka pod každou FAQ kategorií. Kategoriové dlaždice přearanžovány do jednoho řádku (8 sloupců) s kompaktnějšími ikonami a textem.  
**Proč:** Tři tlačítka se stejnou funkcí ale různým stylem vytvářela dojem aktivního filtru místo CTA. Zbytečná opakování rozptylovaly čtenáře. Dlaždice na více řádcích zabíraly příliš místa.

#### Přístrojové vybavení — statické karty
**Co bylo uděláno:** Rozbalovací/sbalovací systém karet byl nahrazen statickými kartami. Do nadpisů každé skupiny přidány počty položek v závorce (např. „Měřicí přístroje — 13 položek").  
**Proč:** Původní rozbalovací karty neměly viditelný indikátor (šipku) a při nesouměrném obsahu způsobovaly bílé mezery. Zobrazení všeho najednou odpovídá záměru stránky — zákazník chce přehled vybavení celý.

#### Přepracování stránky Reference
**Co bylo uděláno:** Odstraněna sekce „Reference podle oblastí" (obsahovala karty vedoucí na poptávkový formulář, nikoliv skutečné reference). Sekce „Anonymizované příklady řešených zakázek" přejmenována na „Příklady z praxe" a přepracována — každý příklad je na samostatném řádku, ve výchozím stavu sbalený, po rozbalení zobrazí rozsah prací, výstup a popis, plus tlačítko „Poptat podobnou zakázku".  
**Proč:** Stránka Reference má za cíl budovat důvěru — původní sekce zbytečně duplikovala stránku /typicke-zakazky a vedla na formuláře místo na reálný důkaz praxe.

#### Sekce Vybraní zákazníci s logy a prokliky
**Co bylo uděláno:** Na stránce Reference přidána nová sekce s logy 19 zákazníků NATURCHEM. Logo každé společnosti bylo dohledáno a staženo z jejich oficiálních webů. Každé logo je prokliknutelné (otevírá homepage firmy v novém okně) a zobrazuje se v šedé — při najetí myší přechází na barevnou verzi.  
**Proč:** Reálné zákaznické reference s logy firem (Škoda Auto, ČEZ, České dráhy, E.ON, Strabag a další) jsou silný důkaz odborné praxe a zvyšují důvěryhodnost webu.

### Časová náročnost
**Odhadovaná doba práce:** přibližně 1,5 hodiny  
**Počet výměn s AI:** ~20 kol konverzace  
*Poznámka: čas odhadován ze součtu mezer mezi git commity (09:58–11:17, 5 commitů). Skutečná doba může být vyšší.*

### Technická poznámka
Upraveno 8 komponent a stránek (`ServicePage`, `FaqPageContent`, `EquipmentAccordion`, `ReferenceExampleCard`, `reference/page.tsx`, `globals.css`, `navigation.ts`, `faq.ts`) a přidána nová datová vrstva pro zákaznická loga (`src/lib/client-logos.ts`) s 19 soubory log v `public/loga-referenci/`. Nasazeno na `web-naturchem.vercel.app`.

---

## Sezení: 29. 5. 2026

### Přehled
Hlavní implementační sezení — provedeny tři UX sprinty zahrnující přechod na novou URL strukturu, redukci obsahu na klíčových stránkách, zprovoznění filtrování na poradně a sérii strukturálních oprav napříč celým webem.

### Provedené změny

#### Sprint 1 — přesun service pages na strukturu /sluzby/
**Co bylo uděláno:** Všech 24 stránek služeb přesunuto z plochých URL (např. `/mereni-emisi`) na hierarchickou strukturu `/sluzby/mereni-emisi`. Stará URL zůstávají funkční přes 301 přesměrování.  
**Proč:** Sjednocení struktury webu, lepší SEO hierarchie a příprava na finální obsahový sprint.

#### Sprint 2 — redukce redundantního obsahu
**Co bylo uděláno:** Odstraněny duplicitní nebo nadbytečné sekce na čtyřech stránkách: `/kontakt` (sekce „Rychlé poptávkové cesty", opakující se telefonní číslo), `/poradna` (sekce „Chystaná témata"), `/reference` (redukce 3 CTA tlačítek na 1), `/o-spolecnosti` (doplněno chybějící CTA na konci stránky).  
**Proč:** UX audit identifikoval, že stránky obsahovaly o 30–50 % více obsahu než bylo potřeba, což odvádělo pozornost od konverzního cíle.

#### Funkční filtrování na stránce /poradna
**Co bylo uděláno:** Vizuální štítky témat (Emise, Hluk, EIA…) přeměněny na funkční multi-select filtry — kliknutím se zobrazí jen relevantní články, aktivní štítek se vizuálně odliší.  
**Proč:** Štítky vypadaly jako filtry, ale nefungovaly — frustrující UX pro návštěvníky. Opraven také technický problém s hydratací způsobující nefunkčnost na produkci (rozdíl formátování dat mezi serverem a prohlížečem).

#### Sprint 3 — strukturální UX opravy napříč webem
**Co bylo uděláno:** 10 strukturálních oprav najednou: zkráceny intro texty na 6 stránkách služeb, přidány CTA sekce na `/akreditace` a `/faq`, odstraněna sekce „Kam dál" na `/typicke-zakazky`, opravena sitemap (zobrazovala staré redirect URL místo kanonických), doplněny chybějící FAQ sekce na 4 stránkách služeb, opravena neviditelná 5. položka na `/eia-posudky`.  
**Proč:** Systematická revize webu dle UX audit roadmapy — každá z oprav přispívá ke konverzi nebo důvěryhodnosti.

### Časová náročnost
**Odhadovaná doba práce:** přibližně 1,5 hodiny  
**Počet výměn s AI:** ~15 kol konverzace  
*Poznámka: čas odhadován ze součtu mezer mezi git commity (21:36–22:45, 4 commity). Skutečná doba může být vyšší.*

---

## Sezení: 25.–26. 5. 2026

### Přehled
Zahajovací sezení zaměřené na přípravu projektu — stažení a zprovoznění klientovy pracovní verze webu, průzkum existujícího kódu a obsahu a provedení UX auditu jako základ pro další sprinty.

### Provedené změny

#### Příprava projektu a zprovoznění pracovní verze
**Co bylo uděláno:** Stažení klientovy pracovní verze webu naturchem.cz, zprovoznění projektu v lokálním prostředí (Next.js), inicializace repozitáře.  
**Proč:** Nutný základ před zahájením jakýchkoliv úprav — projekt musí fungovat lokálně i na produkci.

#### Průzkum existujícího webu a obsahu
**Co bylo uděláno:** Detailní průzkum stávající struktury webu, stránek, komponent a obsahu. Zmapování URL struktury, navigace, typů stránek a datových zdrojů.  
**Proč:** Porozumění stávajícímu stavu je nezbytné pro správné plánování UX změn bez rizika nefunkčnosti.

#### UX audit a sestavení roadmapy
**Co bylo uděláno:** Provedení UX auditu webu — identifikace problémů v návaznosti stránek, redundantního obsahu, chybějících CTA, nesouladu URL struktury a dalších UX nedostatků. Sestavení prioritizované roadmapy oprav rozdělené do sprintů.  
**Proč:** Strukturovaný audit zajišťuje, že změny jsou prováděny systematicky dle priority dopadu na konverzi a důvěryhodnost, nikoliv nahodile.

#### Definice AI rolí a pravidel projektu
**Co bylo uděláno:** Vytvořeny 4 specializované AI role pro práci na projektu: **UX specialista**, **CMO / marketingový stratég**, **Copywriter** a **SEO specialista**. Každá role má definovaný způsob uvažování, priority a pravidla chování odpovídající danému oboru. Zároveň byly připraveny strategické dokumenty projektu: persony zákazníků, analýza konkurence, tone of voice, brand manuál a sitemap.  
**Proč:** AI role umožňují klientovi kdykoli v budoucnu konzultovat konkrétní téma (texty, SEO, marketingová strategie, UX) s AI nastavenou přesně pro daný kontext projektu — bez nutnosti opakovat zadání od začátku. Strategické dokumenty slouží jako základ pro veškerou další práci na webu i komunikaci.

### Časová náročnost
**Odhadovaná doba práce:** přibližně 4 hodiny  
**Počet výměn s AI:** ~20 kol konverzace  
*Poznámka: čas zadán manuálně — v tomto sezení nebyly vytvořeny git commity (průzkum a audit probíhaly bez změn kódu).*
