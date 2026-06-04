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
| Service pages — decision karty | ✅ | `.service-decision-card-head` — flex-start + menší h2 (6. 2026) |
| Homepage — offer karty | ✅ | `.home-offer-card-head` hotovo P5-18 |
| `/pristrojove-vybaveni` — skupiny přístrojů | ✅ | `.equipment-card-head` — ikona + nadpis (6. 2026) |
| `/o-spolecnosti` — guarantee card | ✅ | Textová karta bez ikony — konzistentní `.card` padding, card-head neplatí |

---

## Vzor B — Ikona bez rámečku (inline kontext)

Override `.card-symbol` bez border/background v kontextu card-head a mini-karet.

| Stránka / komponenta | Stav | Poznámka |
|---|---|---|
| `/akreditace` — mini-karty benefitů | ✅ | Hotovo 4. 6. |
| `/akreditace` — autorizační ikony | ✅ | Hotovo 4. 6. |
| `/akreditace` — scope ikony | ✅ | Hotovo 4. 6. |
| `/kontakt` — inline ikony v checklistu | ✅ | Používá `variant="inline"` — bez rámečku OK |
| Service pages — decision/extra card ikony | ✅ | Override v `.service-decision-card-head` a `.service-extra-card-head` (6. 2026) |
| `/pristrojove-vybaveni` — accordion ikony | ✅ | `.equipment-card-head .card-symbol` (6. 2026) |
| Každá nová stránka s kartami | 🔲 | Vždy zkontrolovat kontext — viz pravidlo v ux-role.md |

---

## Vzor C — Download / action karty — tlačítko dole

`display: flex; flex-direction: column` + `margin-top: auto` na tlačítku. Karta nesmí být celá `<a>`.

| Stránka / komponenta | Stav | Poznámka |
|---|---|---|
| `/akreditace` — dokumenty ke stažení | ✅ | Hotovo 4. 6. — `<div>` + `<a class="button secondary">` |
| `/typicke-zakazky` — scénáře a kategorie | ✅ | `SemanticCard` + `.card-inline-link { margin-top: auto }` — bez samostatného tlačítka v case kartách |
| `/reference` — příklady z praxe (accordion) | ➖ | Expandovatelné detaily, ne karty — neplatí |
| Případné future stránky s PDF nebo dokumenty | 🔲 | Aplikovat vzor při vzniku |

---

## Vzor D — Mini-karty s benefity (2×2 grid)

`display: flex; align-items: flex-start; gap: 0.6rem`, ikona `size={32}` bez rámečku, konkrétní text.

| Stránka / komponenta | Stav | Poznámka |
|---|---|---|
| `/akreditace` — „Co akreditace znamená pro zákazníka" | ✅ | Hotovo 4. 6. — ikony, velká písmena, konkrétní úřady |
| `/o-spolecnosti` — případná sekce benefitů | ➖ | Sekce neexistuje — vzor neplatí |
| Ostatní stránky | ➖ | Vzor se zatím jinde nevyskytuje |

---

## Vzor E — Spacing po PageHeroBand + padding karet

`margin-top: clamp(2rem, 4vw, 3rem)` na první sekci. `padding-top: 1rem` pro karty v overview sekcích.

| Stránka / komponenta | Stav | Poznámka |
|---|---|---|
| `/akreditace` — overview sekce | ✅ | `margin-top` + `padding-top: 1rem` hotovo 4. 6. |
| `/o-spolecnosti` — trust band + stats pod hero | ✅ | Záměrně těsnější spacing (stejný vzor jako homepage) |
| `/reference` — první sekce pod hero | ✅ | `.page-first-section` (6. 2026) |
| `/typicke-zakazky` — první sekce pod hero | ✅ | Flat `section.content-block.container` + `.page-first-section` (6. 2026) |
| `/typicke-zakazky/[kategorie]` — první sekce pod hero | ✅ | Stejný markup jako index (6. 2026) |
| `/faq` — první sekce pod hero | ✅ | `.page-first-section` (6. 2026) |
| `/provozy-a-technologie` — první sekce pod hero | ✅ | `.page-first-section` (6. 2026) |
| `/kontakt` — layout pod hero | ✅ | `.page-first-section` + sitewide clamp (6. 2026) |
| `/poradna` — první sekce pod hero | ✅ | `.page-first-section` (6. 2026) |
| `/pristrojove-vybaveni` — první sekce pod hero | ✅ | `.page-first-section` (6. 2026) |

**Sitewide CSS:** `.page-hero-band + .page-first-section`, `.overview-section-po-hero .card` v `globals.css`.

**Mezery mezi sekcemi (6. 2026):** Sitewide rytmus jako `/reference` — sousedící `.section` bez dvojitého paddingu; viz `ux-role.md` sekce „Mezery mezi sekcemi".

---

## Vzor F — Hero lead na informačních stránkách

1 věta, zákazníkův výsledek, konkrétní úřady, em-dash místo dvou vět.

| Stránka | Stav | Poznámka |
|---|---|---|
| `/akreditace` | ✅ | „Výsledky obstojí při kontrole ČIŽP, KHS…" — hotovo 4. 6. |
| `/o-spolecnosti` | ✅ | Copy sprint C2 — zákaznicky orientovaný lead |
| `/reference` | ✅ | `referenceIntro` — zákaznický lead s ČIŽP, KHS (6. 2026) |
| `/typicke-zakazky` | ✅ | Jedna věta s em-dash (6. 2026) |
| `/faq` | ✅ | `faqPageIntro` — zákaznický výsledek (6. 2026) |
| `/poradna` | ✅ | Lead s úřady před poptávkou (6. 2026) |
| `/provozy-a-technologie` | ✅ | Lead podle provozu, ne katalog služeb (6. 2026) |
| `/pristrojove-vybaveni` | ✅ | Zákaznický lead — protokol/studie, ČIŽP, KHS (6. 2026) |

---

## Prioritní pořadí pro další sezení

Sitewide vzory A–F jsou **implementované**. Procesní kontrola (ne kódové úkoly):

1. **Nové stránky s kartami** — při každé nové stránce zkontrolovat Vzor A/B (řádek „Každá nová stránka" v tabulce B).
2. **Future download karty** — Vzor C aplikovat při vzniku stránek s PDF/dokumenty (stejný vzor jako akreditace).

---

*Soubor: naturchem-projekt/07-sitewide-vzory/vzory-aplikace-roadmapa.md*  
*Poslední aktualizace: 4. 6. 2026 (sitewide implementace)*  
*Navazuje na: `04-ai-role/ux-role.md` (vzory), `ROADMAPA.md` (celkový stav)*
