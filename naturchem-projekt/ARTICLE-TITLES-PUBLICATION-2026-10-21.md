# Kratší nadpisy a obnovení plánované publikace — 21. 10. 2026

## Zjištění a schválení

V produkčním main 46a7fcb je všech 12 připravených českých článků označeno jako draft. První, měření vibrací řidičů VZV, má plánované datum 19. 10. 2026. Datum samo nepřebíjí koncept; nejde o chybu zpožděného ISR. Přihlášený GitHub navíc ukázal pravidelné běhy Publish due articles ve stavu skipped, chybějící aktivační proměnnou a žádné repository secrets. Vercel neobsahoval žádný deploy hook.

Majitel nyní výslovně odborně schválil všech 12 článků a jejich zveřejňování podle původních pondělních termínů, včetně splatného prvního článku. Samostatně schválil vytvoření omezeného napojení Vercel web-naturchem / main, jeho chráněné uložení do Ikaros277/naturchem-web a zapnutí stávajícího plánovače. Není to změna oprávnění uživatelů, tarifu nebo plošné vypnutí ochran. Nový hook není ve veřejném kódu, výstupech nebo tomto dokumentu. Secret VERCEL_DEPLOY_HOOK je uložen přes určené chráněné pole GitHubu, nikoli jako veřejná proměnná.

## Rozsah

Všechny existující článkové titulky CS/EN/DE včetně konceptů a budoucích dat byly projity. Nadměrné nadpisy dostávají celé, výstižné znění, ne výpustku. Hlavní hledaná témata jsou na začátku. Krátké již vyhovující názvy zůstávají. Stejný CMS nadpis nyní řídí H1, karty, Article headline a vyhledávací metadata; odstraněna skrytá přepisovací tabulka podle slugů, která dříve bránila tomu, aby změna v CMS opravila titulek pro Google.

Interní redakční rozpočet je nejvýše 50 znaků a přibližně 560 px včetně suffixu NATURCHEM. Šířka je orientační výpočet 20px Arial, ne tvrzení o univerzální hranici Google nebo zaručeném neořezávání. Nadpisy jsou ručně formulované; fallback pro novou dlouhou položku je pouze bezpečnostní síť. CMS seznam ukazuje stav a u nadpisu vysvětluje omezení. [Google uvádí, že titulky zkracuje podle šířky zařízení a může vybrat jiné znění](https://developers.google.com/search/docs/appearance/title-link); změna ve výsledcích vyžaduje opětovné zpracování stránek. Zdroj ověřen 21. 10. 2026.

U přesně 12 odborně schválených článků se mění draft na published. Původní data, adresy, perexy, fotografie, autor, témata a celý odborný obsah zůstávají. Dnešní nasazení dodatečně zpřístupní článek plánovaný na 19. 10.; nejde o tvrzení, že byl dostupný již 19. 10. Ostatní zůstávají neveřejné do pondělků 26. 10. 2026 až 4. 1. 2027. Jiné koncepty se obecně automaticky neschvalují.

Stávající plánovač kontroluje termíny dvakrát denně a nasazení žádá jen při nově splatném článku. Zachována shoda schváleného main a produkčního SHA, zdravý poslední Vercel status, ochrana proti starému chybějícímu článku, jeden pokus bez nejasného retry, souběžnost a read-only GitHub token. Datum je v Europe/Prague. Úvodní balík se vydá jedním Git buildem; aktivační proměnná ENABLE_SCHEDULED_PUBLICATION=true se uloží až po potvrzení Ready, aby kontrola nevyvolala druhý build. Následné ruční spuštění plánovače má být potvrzený no-op, nikoli další deployment.

## Ověření a měření

Soukromý neměnný source baseline 46a7fcb chrání všechny článkové texty a ostatní frontmatter údaje. Víceřádkové YAML nadpisy byly upraveny jako celý jediný údaj; původní konce řádků i přítomnost finálního newline zachovány, těla porovnána byte-for-byte. Žádná nová právní tvrzení, limity, autorizace nebo popis realizace nebyly přidány.

Nový test chrání úplnost a jedinečnost všech 246 nadpisů, CS/EN/DE, budoucí data, CMS jako zdroj pravdy a přibližný šířkový rozpočet včetně brandu. Dále ověřit celý verify/build, sitemap a interní odkazy, novou první URL /poradna/mereni-vibraci-ridicu-vzv-priprava-smeny/, její homepage kartu a neviditelnost budoucího bezpečnostního listu. Finální Ready a SHA se zapisují až po skutečném vydání; tento přípravný dokument je nepotvrzuje.

Před vydáním dokončeno: celý npm run verify včetně produkčního buildu 643 routes, článkových a SEO regresních testů prošel (9 existujících lint warnings, 0 errors). Lokální smoke na portu 3133 ověřil 585 URL a dalších 302 interních odkazů bez chyby; routing, canonicals, hreflang, redirecty a ochrany 404 prošly. Nezávislé porovnání všech 246 zdrojů potvrdilo byte-identická těla a nezměněná ostatní metadata mimo přesně 12 schválených stavů. Kalendář připouští 21. 10. jen první článek a další teprve 26. 10. V prohlížeči ověřen nový článek v desktopu a na šířce 390 px, načtená fotografie, čitelný nadpis a žádný horizontální přetok. Vzdálený main před vydáním stále 46a7fcb.

Rollback je zachovaný Ready 46a7fcb / AdA1euAzSee3NV3SQw9RfgqbnB7L; při vážné potíži lze vypnout jen aktivační proměnnou a vrátit předchozí deployment. Cursor checkout a .agents/ nedotčené. Žádný placený tarif, DNS, testovací poptávka, e-mail nebo hromadný produkční crawl.

Cíl: dostupnost schváleného odborného obsahu a srozumitelnější vyhledávací nabídka, ne již doložený růst pozic. Nová společná obsahová/CTR fáze, nikoli izolovaný důkaz předchozích experimentů. Po zpracování Google porovnávat stejné 28/56denní intervaly konkrétních stránek a dotazů, CTR při srovnatelné pozici, přechody na služby a skutečně doručené kvalifikované poptávky. Nepřisuzovat zkrácení titulků automaticky růst zobrazení nebo garantovanou první stránku.
