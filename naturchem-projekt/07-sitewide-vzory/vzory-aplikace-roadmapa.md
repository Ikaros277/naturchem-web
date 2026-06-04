# Roadmapa: sitewide aplikace UI vzorů

> **Účel:** Reference pro aplikaci vzorů odladěných na stránce /akreditace (4. 6. 2026) napříč celým webem.  
> **Vzory jsou zdokumentovány v:** `04-ai-role/ux-role.md` sekce „Zavedené vzory komponent"  
> **Jak číst:** ✅ Hotovo · 🔲 Čeká · ➖ Neplatí

---

## Vzor A — Card-head: ikona + nadpis v jednom řádku

Ikona a h3 ve flex řádku místo vertikálního stacku. Třída `*.card-head` s `align-items: flex-start`, h3 font-size 0.9–0.95rem.

| Stránka / komponenta | Stav | Poznámka |
|---|---|---|
| `/akreditace` — autorizační karty | ✅ | `.authorization-card-head` hotovo 4. 6. |
| `/akreditace` — scope karty (Emise, Hluk…) | ✅ | `.scope-card-head` hotovo 4. 6. |
| Service pages — decision karty | ✅ | `.service-decision-card-head` hotovo dříve |
| Homepage — offer karty | ✅ | `.home-offer-card-head` hotovo P5-18 |
| `/pristrojove-vybaveni` — skupiny přístrojů | 🔲 | Accordion nadpisy — ověřit jestli mají ikony, případně přidat |
| `/o-spolecnosti` — guarantee card | 🔲 | Ověřit vizuální konzistenci s ostatními kartami |

---

## Vzor B — Ikona bez rámečku (inline kontext)

Override `.card-symbol` bez border/background v kontextu card-head a mini-karet.

| Stránka / komponenta | Stav | Poznámka |
|---|---|---|
| `/akreditace` — mini-karty benefitů | ✅ | Hotovo 4. 6. |
| `/akreditace` — autorizační ikony | ✅ | Hotovo 4. 6. |
| `/akreditace` — scope ikony | ✅ | Hotovo 4. 6. |
| `/kontakt` — inline ikony v checklistu | ✅ | Používá `variant="inline"` — bez rámečku OK |
| Service pages — decision/extra card ikony | 🔲 | Ověřit jestli mají rámeček nebo ne — `.service-decision-card-head .card-symbol` už override má |
| Každá nová stránka s kartami | 🔲 | Vždy zkontrolovat kontext — viz pravidlo v ux-role.md |

---

## Vzor C — Download / action karty — tlačítko dole

`display: flex; flex-direction: column` + `margin-top: auto` na tlačítku. Karta nesmí být celá `<a>`.

| Stránka / komponenta | Stav | Poznámka |
|---|---|---|
| `/akreditace` — dokumenty ke stažení | ✅ | Hotovo 4. 6. — `<div>` + `<a class="button secondary">` |
| `/typicke-zakazky` — case study karty | 🔲 | Mají CTA „Poptat podobnou zakázku" — ověřit výšku tlačítka |
| `/reference` — příklady z praxe (accordion) | ➖ | Expandovatelné detaily, ne karty — neplatí |
| Případné future stránky s PDF nebo dokumenty | 🔲 | Aplikovat vzor při vzniku |

---

## Vzor D — Mini-karty s benefity (2×2 grid)

`display: flex; align-items: flex-start; gap: 0.6rem`, ikona `size={32}` bez rámečku, konkrétní text.

| Stránka / komponenta | Stav | Poznámka |
|---|---|---|
| `/akreditace` — „Co akreditace znamená pro zákazníka" | ✅ | Hotovo 4. 6. — ikony, velká písmena, konkrétní úřady |
| `/o-spolecnosti` — případná sekce benefitů | 🔲 | Ověřit jestli existuje podobný blok; pokud ano, sjednotit |
| Ostatní stránky | ➖ | Vzor se zatím jinde nevyskytuje |

---

## Vzor E — Spacing po PageHeroBand + padding karet

`margin-top: clamp(2rem, 4vw, 3rem)` na první sekci. `padding-top: 1rem` pro karty v overview sekcích.

| Stránka / komponenta | Stav | Poznámka |
|---|---|---|
| `/akreditace` — overview sekce | ✅ | `margin-top` + `padding-top: 1rem` hotovo 4. 6. |
| `/o-spolecnosti` — trust band + stats pod hero | ✅ | Záměrně těsnější spacing (stejný vzor jako homepage) |
| `/reference` — první sekce pod hero | 🔲 | Ověřit spacing od hero k první sekci |
| `/typicke-zakazky` — první sekce pod hero | 🔲 | Ověřit spacing |
| `/faq` — první sekce pod hero | 🔲 | Ověřit spacing |
| `/provozy-a-technologie` — první sekce pod hero | 🔲 | Ověřit spacing |
| `/kontakt` — layout pod hero | 🔲 | Agent hlásil sekci bez explicitního padding-top |
| `/poradna` — první sekce pod hero | 🔲 | Ověřit spacing |
| `/pristrojove-vybaveni` — první sekce pod hero | 🔲 | Ověřit spacing |

---

## Vzor F — Hero lead na informačních stránkách

1 věta, zákazníkův výsledek, konkrétní úřady, em-dash místo dvou vět.

| Stránka | Stav | Poznámka |
|---|---|---|
| `/akreditace` | ✅ | „Výsledky obstojí při kontrole ČIŽP, KHS…" — hotovo 4. 6. |
| `/o-spolecnosti` | ✅ | Copy sprint C2 — zákaznicky orientovaný lead |
| `/reference` | 🔲 | Ověřit stávající lead — je zákaznicky orientovaný? |
| `/typicke-zakazky` | 🔲 | Ověřit |
| `/faq` | 🔲 | C8 sprint — na seznamu |
| `/poradna` | 🔲 | C8 sprint — na seznamu |
| `/provozy-a-technologie` | 🔲 | Ověřit |

---

## Prioritní pořadí pro další sezení

Doporučené pořadí — kombinace dopadu a rozsahu:

1. **Spacing po hero (Vzor E)** — `/reference`, `/kontakt`, `/typicke-zakazky` — vizuálně nejviditelnější, CSS změny
2. **Hero leads (Vzor F)** — `/reference`, `/typicke-zakazky` — přímý dopad na konverzi
3. **Typicke zakázky CTA výška (Vzor C)** — tlačítka na stejné výšce v kartách
4. **Pristrojové vybavení ikony (Vzor A)** — pokud accordion nadpisy nemají ikony
5. **O společnosti — benefit blok (Vzor D)** — pokud existuje

---

*Soubor: naturchem-projekt/07-sitewide-vzory/vzory-aplikace-roadmapa.md*  
*Poslední aktualizace: 4. 6. 2026*  
*Navazuje na: `04-ai-role/ux-role.md` (vzory), `ROADMAPA.md` (celkový stav)*
