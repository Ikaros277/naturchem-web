# Schválený společný release — 4. 10. 2026

Uživatel výslovně schválil nasazení celého lokálního návrhu včetně zrychlení a optimalizace Vercelu za podmínky funkčnosti a zachování SEO/GEO. Toto je přednasazovací evidence, nikoli potvrzení živého výsledku.

## Zdroj, ochrana a cesta nasazení

- Správný repozitář: `https://github.com/Ikaros277/naturchem-web.git`.
- Větev návrhu: `codex/audit-quality-2026-10-02`. Původní checkout a Cursorovy nesouvisející změny se neupravují.
- GitHub main ověřen systémově ověřeným HTTPS: `83793e1d72751c6f4e8432a2fc64238d0b80af3a`.
- Vercel produkce i veřejný publication-state potvrzují stejný commit. Projekt `web-naturchem`, tým `ikaros277s-projects`; produkční větev `main`.
- Nasazení jediným fast-forward push schváleného commitu do main ze samostatné codex větve. Žádný force push, samostatný preview deploy nebo následný deployment jen kvůli ponasazovací dokumentaci.
- Součástí je schválený audit/B2B/UX návrh, osm autentických fotografií, unikátní ilustrace a balík TECH-009/TECH-010. Žádné nové odborné články nebo změny odborného těla článků; pouze jejich obrazová přiřazení a dostupnost již vydaného obsahu.
- `.env*`, privátní Google Photos odkazy, originální soukromé fotografie, obsah poptávek a `.agents/` nepatří do commitu. Starší nepřipojené ponasazovací reporty se automaticky nezařazují.

## Kontrola před vydáním

- Znovu kompletní `npm run verify`: PASS, 16 předexistujících lint upozornění, žádná chyba; build 580 výstupů, 527 skutečných obsahových statických stránek.
- Lokální SEO smoke: 520 URL a 230 dalších interních odkazů, 0 chyb. Routing, canonical/hreflang, assety, 404/noindex a kontaktní kotva PASS.
- Doručení je ověřeno simulací; žádná testovací nebo skutečná poptávka nebyla odeslána.
- Po stránkování zůstává všech 187 publikovaných článků dosažitelných bez JavaScriptu. Původní URL, přesměrování, H1/title služeb, odborný obsah a definice generate_lead zůstávají zachovány.
- Google/Bing/OpenAI vyhledávání/Perplexity nejsou globálně blokovány. Cíleně blokován pouze Meta-ExternalAgent, interní vyhledávací JSON není veřejnou indexační cílovou stránkou.

## Aktuální kapacita Vercelu před pushem

Vercel UI: posledních 30 dní 4. 9. 14:00–4. 10. 14:00. ISR Reads 1 100 771 / 1 000 000; Fast Origin Transfer 8,66 / 10 GB; ISR Writes 0 / 200 000; Deployment Storage 1,87 / 10 GB. Cílený WAF zákaz Meta-ExternalAgent aktivní, globální AI Bots nastavení Allow. Historické překročení zůstává; nové zrychlení je nesmaže. Jediný build má rezervu pro uložiště. Bez placené změny, DNS zásahu a nového časového ISR.

## Rollback a přejímka

Ověřený dosavadní produkční deployment: https://vercel.com/ikaros277s-projects/web-naturchem/DEoSAfi5JcRQUXUNdF1WBqyxKzqW (`83793e1`). Při závažném regresním problému vrátit jeho produkční alias nebo cíleně revertovat nový izolovaný commit; neprovádět reset uživatelských změn.

Po novém stavu Ready zkontrolovat skutečný nový commit v produkčním publication-state, veřejné URL a interní odkazy, canonical/hreflang, schema, robots/sitemap/llms, nové obrazové a hledací assety, mobilní/desktopovou homepage a cestu k formuláři. Neslibovat dosažené vyšší pozice ani nepřekročení kvót. Další měření je v [RYCHLOST-VERCEL-2026-10-04.md](RYCHLOST-VERCEL-2026-10-04.md); ponasazovací výsledek uložit lokálně bez druhého deploymentu.
