# TECH-012 — mobilní práce prohlížeče, 5. 10. 2026

## Výchozí stav a interpretace

Aktuální produkce i GitHub main byly při zahájení na `f004d29cb83fc484eea4a49ae7020ec35211399f` (publication-state builtAt `2026-10-05T07:38:17.703Z`). Nešlo o mezitím nasazenou cizí verzi. Původní Cursor checkout zůstává nedotčený; lokální větev `codex/mobile-performance-2026-10-05` ve stávajícím odděleném worktree.

Uživatel požaduje výkon 100; toto číslo zatím není doložené pro mobil ani pro nový návrh. Laboratorní test kolísá a report nemá dostatek CrUX dat. Žádný výsledek nepovažovat za prokázaný růst poptávek nebo lepší umístění.

| Stejná produkční verze, mobil | Skóre | FCP | LCP | TBT | CLS | Speed Index |
|---|---:|---:|---:|---:|---:|---:|
| [Report uživatele 10:09 SELČ](https://pagespeed.web.dev/analysis/https-www-naturchem-cz/vs7zm3h1uc?form_factor=mobile) | 64 | 1,651 s | 2,752 s | 1 500 ms | 0,008 | 6,115 s |
| [Kontrolní běh 10:23 SELČ](https://pagespeed.web.dev/analysis/https-www-naturchem-cz/yn3g6059es?form_factor=mobile) | 96 | 1,501 s | 2,776 s | 26 ms | 0,009 | 2,302 s |

Kontrolní desktop: 100, FCP 361 ms, LCP 681 ms, TBT 0, CLS 0,003, SI 508 ms. Přístupnost, doporučené postupy a SEO 100; procházení agenty 3/3. **Běh 96/100 proběhl před novým nasazením a není výsledkem TECH-012.** Předchozí tři mobilní měření po TECH-011 byla 87, 88 a 94; desktop třikrát 100. Nevybírat pouze nejlepší měření.

Report 64: CPU celkem 6,4 s, vyhodnocování skriptů 1 838 ms, analýza/kompilace 801 ms, Style & Layout 1 734 ms, 20 dlouhých úloh. Hlavní zátěž je ve vlastním Next/React runtime, nikoli velký načtený Tawk nebo GA vendor. DOM 461 prvků není nadměrný. LCP obrázek: TTFB 10 ms, zpoždění požadavku 260 ms, přenos 160 ms, čekání na vykreslení 1 920 ms. Přesnou příčinu tak velkého rozdílu CPU mezi laboratorními běhy samotný report neprokazuje.

## Lokální změna a hypotéza

1. Homepage karty, články, důvěryhodnostní a partnerský odkaz i běžná navigace patičky jsou server-renderované HTML odkazy, nikoli samostatné Next Link klientské komponenty. Zachovány přesné adresy, query/hash předvyplnění, atributy delegované analytiky, klávesnice a indexovatelnost.
2. `content-visibility: auto` pouze na spodních homepage sekcích. Obsah, nadpisy a odkazy zůstávají v HTML i accessibility tree. Neodkládá se hero, hlavička, cookie volba nebo formulář. Rezervy výšky podle mobilního a desktopového uspořádání omezují změny rozvržení; po zobrazení si prohlížeč pamatuje skutečný rozměr.
3. Statistické buňky mají lokální layout/style containment. Počítání od nuly i konečná přístupná hodnota zůstávají; nepřepisuje se širší rozvržení při každém dekorativním kroku.
4. Nové zdrojové a post-build ochranné testy: nula serializovaných Next Link props na homepage, úplné obchodní cesty a přednostní LCP, realistické HTML rozpočty odvozené od baseline. Přidané měření payloadů odlišuje objem od laboratorní rychlosti.

Hypotéza: méně hydratačních instancí a méně počátečního layout/paint sníží práci mobilního CPU a riziko dlouhých úloh. To může zlepšit použití stránky a dokončení poptávek; efekt není předem jistý.

Kompromis: odkazy v těle a patičce přecházejí běžným načtením dokumentu místo SPA navigace. Sdílené JS/CSS zůstávají v browser cache; nepřednačítají se všechny cílové stránky. Hlavní menu a poptávkové tlačítko používají dosavadní klientskou navigaci. Delegovaná analytika reaguje i na nativní HTML odkazy; `generate_lead` zůstává pouze po úspěšném přijetí formuláře.

## Měřitelné lokální rozpočty

Stejné Node gzip měření, nejde o fakturaci Vercelu ani procento zrychlení:

| Česká homepage | Před | Po |
|---|---:|---:|
| Obsluhované Next Link instance v serializovaném obsahu | 38 | 0 |
| HTML | 133 883 B | 133 129 B |
| HTML gzip | 27 792 B | 27 774 B |
| CSS gzip | 14 206 B | 14 296 B |
| Odkazovaný JS gzip | 214 404 B | 214 389 B |

Objem JS se téměř nezměnil — základní framework je stále potřebný pro menu a formulář. Neočekávat, že odstranění 38 instancí znamená odstranění celého frameworku. CSS narostlo o 90 B gzip kvůli containment pravidlům. CS/EN/DE homepage, kontakt, emise a poradna mají před/po totožné sady skutečných HTML odkazů, obrázků a canonical. Žádné nové ISR, placený upgrade, doména, WAF, změna indexace nebo odstranitelný obsah. Společné cacheable CSS a immutable obrázky zůstávají.

## Ověření a další postup

Ověření dokončeno:

- Úplné `npm run verify`: exit 0, 580 sestavených cest, kontrola 527 statických obsahových dokumentů; 16 existujících lint varování, žádná nová lint chyba. Všechny původní i nové testy a CSS/HTML rozpočty prošly. Původní metadataBase varování na zvláštních cestách nejsou opravou TECH-012.
- Lokální sitemap smoke: 520 URL + 230 dalších interních odkazů, 0 chyb. Routing smoke: 0 chyb včetně canonical, hreflang, přesměrování, 404 a neodesílající validace API.
- Browser QA skutečného produkčního sestavení na `http://127.0.0.1:3118/`: mobilní viewport 390 × 844 (clientWidth i scrollWidth 375 px), hero, počítadla, obrázky a nabídka bez horizontálního přetékání. Spodní články se při scrollu zpřístupnily v accessibility tree; všechny tři byly v DOM už před scrollem. Mobilní menu se otevře/zavře, seznam služeb funguje.
- Skutečný proklik nativní homepage karty → emise → poptávkový formulář předvyplněný „Měření emisí“. Žádné odeslání testovací poptávky. Desktop clientWidth/scrollWidth 1265 px, mega menu 8/8/8 položek, otevření klávesnicí a Escape ověřeny, WhatsApp přítomen. Tawk ani consent se kódem nemění.
- Browser error log při dokončení prázdný. Náhledy `C:/Users/natur/Documents/Codex/2026-08-12/m/outputs/mobile-performance-2026-10-05-home.png` a `mobile-performance-2026-10-05-desktop.png`; mobilní override resetován.
- `git diff --check`: exit 0. Původní checkout a jeho Cursor práce zachovány; žádný commit, push, merge nebo deployment.

První sestavení odhalilo příliš ambiciózní nový vlastní HTML limit 126 kB, ne chybu webu. Rozpočty byly stanoveny podle skutečné baseline, bez tvrzení neexistující velké úspory.

Uživatel 5. 10. 2026 odpovědí „schvaluji“ na přesnou žádost výslovně schválil commit, push do main v `Ikaros277/naturchem-web` a jeden produkční deployment přes Vercel. Schválení není důkazem dokončeného vydání; přesný nový commit, Ready stav a post-release měření se zapisují až po ověření. Po nasazení změřit nejméně tři mobilní a tři desktopové běhy, uvést celé rozpětí a medián. Cíl mobil 100 hodnotit až z měření; nevyřazovat nízké běhy jako „chybu Google“ bez důkazu. Sledujte skutečné CWV v GA4/Vercel/CrUX, až budou data dostupná, a stejná 28/56denní období formulářových konverzí s potvrzeným přijetím.

Rollback před nasazením: návrat předchozího Ready deploymentu `f004d29` (Vercel `G5cjn6Rb98Av1dpZYQwfYGapqNDP`) nebo revert pouze TECH-012. Původní Cursor změny nejsou součástí návrhu.

Technické principy: [Next.js — Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components), [Google — content-visibility](https://web.dev/articles/content-visibility), [Google — dlouhé úlohy](https://web.dev/articles/optimize-long-tasks).
