# Dotazový audit Google a GSC — dokončená matice 7. 10. 2026

Pouze audit a lokální evidence na `codex/seo-services-evidence-2026-10-06`; aplikace ani produkce dnes nebyly změněny. Původní Cursor checkout zachován. Žádný nový experiment, commit, push, merge, deployment, žádost o indexaci nebo testovací poptávka.

## Baseline

GSC Česko, Web, všechna zařízení, 7. 9.–4. 10. proti 10. 8.–6. 9. 2026: 199 / 136 kliknutí, 5 325 / 3 847 zobrazení, CTR 3,7 / 3,5 %, průměrná pozice 5,9 / 7,4. Google AI 2 026 / 1 196 zobrazení odkazů; není to součet k Web ani počet leadů. Dnešní GA4 a přijetí kvalifikovaných poptávek nebyly nově ověřeny.

Pracovní manifest: 93 frází pro 27 aktuálních katalogových činností + prašnost + prodej přístrojů. Skutečný český desktopový Google bez personalizace, IP lokalita České Budějovice. Dokončeno všech 93 dotazů; 45 s NATURCHEMem mezi hlavními výsledky první stránky, 48 bez nalezeného našeho hlavního výsledku. Ve 22 z 29 tematických skupin alespoň jedna sledovaná varianta má první stránku. Obě CAPTCHA vyřešil uživatel ručně; nebyly obcházeny. Poslední část ověřena 10:26–10:29 SELČ. Není to univerzální národní/mobilní ranking, počet úspěšných služeb nebo tržně vážené skóre. Hledanost celého seznamu nebyla změřena. Nezůstává nezměřené heslo.

Všech 29 cílových stránek dnes HTTP 200, správný self-canonical, jeden H1, bez noindex, v produkční sitemapě (518 URL). Nalezené dvojité lomítko v BreadcrumbList je normalizační nedostatek, ne potvrzená příčina slabých pozic. CS-only jazyková dostupnost kolaudace a nové haly je záměrná. Starších šest obsahových 404 příkladů už na produkci přesměrovává správně na HTTP 200.

Individuální GSC kontrola: vibrace a osvětlení jsou indexované, HTTPS a breadcrumb platné. Červencové články IPPC a tepelná zátěž stále „objeveno, neindexováno“, bez evidovaného crawl. Celkem sedm českých článků ve stejné skupině dnes funguje a má správný canonical, bez noindex a v sitemapě. Zjištění neprokazuje příčinu neindexace; další krok je diagnóza kvality/odkazů/Googlebot přístupu, ne masová výroba nových textů.

## Priorita a ochrana experimentů

Vibrace (18 zobrazení / 0 kliknutí, průměr 43,7), mikroklima a osvětlení jsou slabiny; obecné hlukové/rozptylové studie a IPPC mají rovněž obchodní mezery. Některé konkrétní B2B fráze již vedou na první výsledky (diisokyanáty, bioplyn, kolaudace, práce, akustické posudky). Silné URL chránit a nehonit automobilový STK záměr hesla „měření emisí“.

Dokončená poslední část: chemické látky v provozu a školení chemického zákona 1., PCF Elettronica 2., FID 4., GHG 6., PID 7., souhrnná provozní evidence 9. Širší varianty chemické legislativy/školení, komerční zpracování ISPOP, bezpečnostní listy a zjišťovací řízení EIA mají mezery. U GHG i chemie ověřit skutečný nabízený rozsah a doložit realizace, nikoli vymýšlet oprávnění. Bezpečnostní listy: 0/3 sledované varianty v první stránce; starší GSC zobrazení nejsou aktuální pořadí.

Návrh mikroklimatu/vibrací z 6. 10. zůstává lokální; jeho nasazení není tímto auditem schváleno ani potvrzeno. EXP-004 má plánované 56denní okno do 19. 10.; další zásah označit jako ukončení/přechod fáze, ne izolovaný účinek původního odkazu. EXP-013/014 nezasahovat bez vyhodnocení a zápisu.

Měřit přesné skupiny/URL ve stejně dlouhých úplných 28/56denních obdobích, úspěšné generate_lead a skutečně přijaté kvalifikované zakázky. Chybějící GSC řádek není nulová poptávka. První stránku všech hesel ani AI citace nelze garantovat.

Podrobná matice všech 93 dotazů, souhrn 29 oblastí, metodika, omezení a prioritní plán: lokální výstupy `naturchem-google-ai-audit-2026-10-07.md`, `naturchem-google-keywords-2026-10-07.json`, `naturchem-google-observations-2026-10-07.json` a `naturchem-gsc-baseline-2026-10-07.json` v uživatelských Codex outputs. Vzdálený main byl posledně ověřen 6. 10. jako `ea31548`; dnešní nové vzdálené čtení se zastavilo na lokálním TLS ověření, nikoli novém ověřeném commitu. Ověření certifikátů nebylo vypnuto.
