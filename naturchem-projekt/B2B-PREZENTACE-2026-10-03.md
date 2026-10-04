# B2B prezentace – lokální dopracování, 3. 10. 2026

Pozdější lokální revize téhož dne zjednodušila B2B panel a dopracovala formulář a kontaktní ovladače. Aktuální návrh a finální ověření jsou v [UX-POLISH-2026-10-03.md](UX-POLISH-2026-10-03.md). Níže je evidence předchozího kroku, nikoli popis poslední varianty rolí.

## Rozsah a stav

Doplnění již připraveného auditu na větvi `codex/audit-quality-2026-10-02`, základ `83793e1`. Pouze lokální práce. Bez commitu, push, merge, deploymentu nebo testovací poptávky. Cursorův původní checkout zůstává nedotčený. Není to nový aktivní produkční experiment.

## Podklad a hypotéza

Podkladem je výslovný požadavek uživatele na profesionální B2B prezentaci, aktuální vykreslená homepage a již provedený audit. Nejde o nově prokázaný růst poptávek. Původní homepage ukazovala šest služeb a tři situace, ale externí ekolog nebo environmentální servis neměl výslovně popsanou cestu pro zakázky svých klientů. Nejnovější článek o bezpečnostních listech používal obecný dokumentační fallback.

Hypotéza: jasné rozlišení zadavatelů a stručný popis odpovídajících výstupů usnadní identifikaci vhodného dodavatele a následnou poptávku. Po případném schváleném nasazení posuzovat nejméně 28 úplných dnů proti stejně dlouhému období, rozdělit zařízení a vstupní stránky. Primární výsledek jsou skutečně přijaté, doručené a obchodně kvalifikované poptávky; kliknutí jsou pouze mezikrok. Nepřisuzovat této změně výsledky dřívějšího redesignu služeb z 27. 9. ani dalších současně nasazených úprav.

## Konkrétní úpravy

- Stávající blok situací rozšířen na jedno soudržné B2B rozcestí: podniky a EHS/BOZP; externí ekologové a environmentální firmy; projektanti, investoři a veřejná správa. Jedna stručná věta u každé skupiny, jasná klikací plocha, vlastní ikonový akcent.
- Odkaz pro environmentální partnery vede přímo na existující formulář. Netvrdí white-label spolupráci, výhradnost, smluvní termíny, neoslovování klienta nebo jiné neověřené závazky.
- Akreditace je dostupná přímo v kontextu B2B rozcestí. Číslo 1599 převzato ze stávající prezentace, bez změny rozsahu oprávnění.
- Zachovány všechny tři komerční cesty: kolaudace, kategorizace prací a projektová dokumentace. Nejsou číslované jako navazující proces.
- Oblíbené SVG ilustrace studií a EIA zachovány; jemné barevné rozlišení studií a dokumentace odpovídá kategoriím nabídky. Úvodní H1, fotografie, LCP preloads a malé měřicí fotografie nebyly měněny.
- Dva dlouhé názvy článků zkráceny pouze na kartách homepage. Plné H1 článků, metadata, odborný text, datum publikace a URL beze změny.
- Na mobilu články mají menší obrázek vedle čitelného nadpisu; nejsou tři další velké obrazové bloky. Nové 192px statické náhledy mají dohromady 14 862 B a nespouštějí Vercel Image Optimization.
- Článek o bezpečnostních listech dostal unikátní ilustrační scénu, nikoli fotografii skutečného pracoviště nebo zaměstnance. Přiřazení v článku i slug mapě, použitelné na homepage, v poradně i detailu.
- Tawk/WhatsApp, footer dokumenty, počet úspěšných leadů, ISR konfigurace, canonical, hreflang a přesměrování zachovány.

## Měření

`select_service` doplněno i na šest karet homepage (`placement=home_service_index`). `select_audience` pro tři role má pouze veřejný identifikátor audience, placement a page_path, nikdy obsah formuláře nebo osobní údaje. Obě události pouze po statistickém souhlasu. Nejsou primární konverzí. Stávající `form_start` a serverově potvrzené `generate_lead` nemění definici.

## Generovaný obrázek a reprodukovatelnost

Použit vestavěný generátor, režim nové generace, bez průhlednosti. Originál: `C:/Users/natur/.codex/generated_images/019ff56b-950f-7870-8751-d01a6bcc7126/exec-7b818a21-bf8c-4ce1-97b4-4f30fdd8c223.png`.

Finální soubory ve worktree `C:/Users/natur/.codex/visualizations/2026/08/12/019ff56b-950f-7870-8751-d01a6bcc7126/naturchem-b2b-quality-2026-09-22`:

- `public/hero/generated-2026-10/bezpecnostni-listy-clanek.webp` (1600×900, 98 546 B)
- `public/hero/generated-2026-10/bezpecnostni-listy-clanek-640.webp` (640×360, 30 180 B)
- `public/hero/generated-2026-10/bezpecnostni-listy-clanek-192.webp` (192×192, 5 922 B)
- `public/hero/generated-2026-10/skladovani-chemie-192.webp` (4 196 B)
- `public/hero/generated-2026-10/povoleni-zdroje-clanek-192.webp` (4 744 B)

Pouze nové verze assetů, žádný publikovaný immutable soubor nebyl přepsán. Reprodukovatelný encoder (odmítá přepsání): `C:/Users/natur/Documents/Codex/2026-08-12/m/outputs/naturchem-audit-2026-10-02/encode-b2b-polish.cjs`.

Úplný prompt:

```text
Use case: photorealistic-natural
Asset type: unique editorial illustration for a Czech B2B environmental laboratory website article about applying safety data sheets in the workplace.
Primary request: a refined realistic industrial still life where a clearly recognizable safety data sheet binder and an open documentation page are the main subject, with protective nitrile gloves and safety spectacles resting beside it, and two sealed small chemical containers in a secondary position.
Scene/backdrop: clean practical desk at the edge of a European industrial maintenance workshop; background softly out of focus. No people.
Composition: landscape 16:9, medium close view at a slight elevated angle, binder and protective equipment grouped centrally so the subject remains clear in a square thumbnail. Generous uncluttered margins.
Style: photorealistic editorial illustration, natural material textures, precise grounded proportions, understated professional B2B imagery rather than advertising. Soft neutral daylight; navy, cool grey and muted green accents consistent with Naturchem's industrial imagery.
Text: only the exact Czech binder label 'BEZPEČNOSTNÍ LIST'. On the document, small content is deliberately out of focus and not readable, no invented legal or technical data.
Constraints: fictional illustrative scene, not a claimed real NATURCHEM facility or employee. No brand logos, no watermark, no certificate, no accreditation mark, no exaggerated glow, no infographic overlays, no spills or open containers.
```

## Ověření a předání

- Finální `npm run verify` úspěšný: žádné lint chyby, 16 již existujících varování; typy a všechny testy včetně testů rolí, lokalizovaných odkazů, zachování SVG, zkrácení pouze homepage titulků a rozměrově úsporných náhledů. Produkční sestavení 566 výstupů.
- Lokální úplný SEO smoke: 504 sitemap cest / 506 stránek a dalších 227 interních odkazů, žádné závady. Kontrola HTTP, H1, canonical, description, robots a JSON-LD. `local-seo-smoke.json` v níže uvedené složce obsahuje poslední finální výsledek.
- Standardní routing smoke úspěšný, 0 chyb: jazykové alternativy, přesměrování, 404, assety a lokální validační odpověď prázdného API požadavku. Nebyla odeslána poptávka.
- Skutečná prohlížečová kontrola ve vlastním same-origin iframe při nominálních šířkách 320, 390, 768 a 1280 px. Bez horizontálního přetékání v ověřených stavech; dlouhé německé názvy se na 320 px zalamují. Na tabletu ikony situací nezabírají celý řádek. Nejde o kontrolu fyzických zařízení ani úplné nové vizuální ověření každé podstránky.
- Mobilní obrázky všech tří aktuálních českých článků byly viditelně načtené; `currentSrc` skutečně používá 192px soubory při 88px zobrazované šířce. Originální úvodní obrázek a preloads zůstaly beze změny.
- Proklik environmentálního partnera ověřen na existující kontaktní formulář; bez vyplnění a bez odeslání. Lokální kontrolovaná stránka neměla načtený Google Analytics script. Keyboard focus zůstává viditelný, klikací plochy rolí na 390px náhledu mají přes 100 px výšky.
- `git diff --check` bez chyb. Všech 231 dříve publikovaných immutable assetů zůstalo nezměněno. Vercel tarif, runtime image transformation a ISR konfigurace nebyly rozšířeny; aktuální usage zůstává k ověření ve správném účtu před nasazením.

Náhled: `http://127.0.0.1:3116/`; desktop `http://127.0.0.1:3117/responsive-preview?page=home&mode=desktop`, mobil `http://127.0.0.1:3117/responsive-preview?page=home`.

Snímky v `C:/Users/natur/Documents/Codex/2026-08-12/m/outputs/naturchem-audit-2026-10-02/`: `home-b2b-before.jpg`, `home-b2b-desktop.jpg`, `home-b2b-mobile.jpg`, `home-articles-polish-mobile.jpg`. Původní screenshot je výchozí lokální návrh, nikoli nový audit výkonu produkce.

Pro případné nasazení znovu ověřit tehdy aktuální main, diff všech lokálních změn (včetně dříve připraveného auditu) a kvóty Vercelu. Produkční rollout není tímto lokálním požadavkem autorizovaný. Rollback: cílený revert izolovaného schváleného commitu nebo návrat na aktuálně ověřenou předchozí produkční verzi; žádný reset původních Cursorových změn.
