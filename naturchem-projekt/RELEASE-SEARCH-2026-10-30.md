# Schválené vydání návaznosti vyhledávání na poptávku — 30. 10. 2026

## Souhlas a výchozí stav

Externí správce NATURCHEMu po předložení konkrétní místní sady, jejího náhledu a žádosti o commit, push/sloučení do main v Ikaros277/naturchem-web a jediné nasazení odpověděl: „Tak to nahoď, a pak mi zhodnoť jak si stojíme proti relevantní konkurenci v našem kraji.“ Souhlas se vztahuje na tuto sadu, nikoli na další změny vyplývající z následného konkurenčního auditu.

Pracovní větev `codex/search-conversion-2026-10-26`, oddělený worktree. GitHub main a skutečný veřejný publication-state před vydáním shodně `d74d11a9c25cd2655c78b550ddbe2f33dc772247`. Přihlášený Vercel potvrzuje Ready / Production, doménu www.naturchem.cz a deployment `Az85rA4yKkKT7U6YgiFhBffLJrn8` (`web-naturchem-nqz0li4ey-ikaros277s-projects.vercel.app`). Tento deployment ponechat jako návratový bod.

## Rozsah a ochrany

- Relevantnější související služby z článků o provozních řádech, EIA a kolaudaci celé haly. Hlukově zaměřené články nadále vedou na hlukové měření. Žádný přepis odborného těla článků, jejich titulků nebo termínů publikace.
- Nepřidávat další článkovou poptávku, pokud článek už skutečný odkaz na formulář obsahuje. Stávající služby a odkazy zůstávají dostupné.
- Stručná nabídka vibrací, informace k podkladům nabídky a odpovídající předvyplnění vibrací/mikroklimatu. Přesné již veřejné fotografie existujících ověřených realizací u těchto dvou služeb, statické WebP/AVIF bez nových transformací.
- Jeden přímý přechod na hlukové studie z již existujícího rozlišení měření/studie na české pražské stránce. Nezakládat nové městské stránky ani neupravovat titulky nezralého experimentu.
- Pravdivé katalogové WebPage místo Product bez skutečné cenové nabídky či recenzí; 69 jazykových detailů přístrojů. Ceny na dotaz, žádné vymyšlené offers/price/review.
- Stabilní sitemap revize pouze skutečně dotčených služeb, pražské stránky a katalogových detailů. Žádná plošná data aktuálního buildu.

Hypotézy a baseline v [SEARCH-CONVERSION-2026-10-26.md](SEARCH-CONVERSION-2026-10-26.md). Přesné soukromé GSC/GA4 a doručovací údaje nejsou součástí veřejného repozitáře. Očekáváním je relevantnější cesta k poptávce; růst pořadí či leadů nebyl touto místní sadou prokázán.

Adresy, přesměrování, canonical, hreflang, robots, H1 a metadata zachovat. Formulářové API, skutečné adresáty, souhlasy, Turnstile, význam generate_lead, hosting/ISR konfiguraci, DNS, tarif a produkční proměnné neměnit. Žádný hostingový prototyp, změna poskytovatele, nová závislost nebo práce Cursoru. Nové právní či technické požadavky se netvoří.

## Předprodukční ověření a jediné vydání

Před commitem 30. 10. nové celé `npm run verify` včetně build/postbuild **PASS**, 643 sestavených cest. Čerstvý místní SEO smoke na portu 3143: **586 sitemap URL + 305 dalších interních adres, 891 GET kontrol, 0 chyb**. Uložený baseline potvrzuje zachování všech 593 původních title/meta/H1/canonical/hreflang/robots a ostatních JSON-LD mimo zamýšlených 69 katalogových detailů. Celý vydávaný diff přezkoumán. Do indexu patří pouze výslovně vyjmenované zdrojové/testovací soubory a dokumentace, bez .env, hostingového prototypu nebo souborů Cursoru; těsně před commitem sken citlivých hodnot. Známých devět původních lint upozornění a 17 dříve zjištěných anglických těl německých článků nejsou touto sadou opravovány ani prezentovány jako nové regrese. Nejde o nové měření Lighthouse ani obchodního účinku.

Po úspěchu jeden commit v codex větvi a normální fast-forward push `HEAD:main`. Bez force push a bez samostatného preview push; Git integrace Vercelu spustí jedno produkční nasazení. Nevytvářet paralelně ruční redeploy nebo deploy hook. Těsně před push ověřit nezměněný vzdálený main; při rozdílu nejprve sladit a znovu ověřit.

Po vydání ověřit Vercel Ready / Current, doménu, veřejný commit a pouze omezené skutečné GET a vizuální kontroly dotčených cest. Žádnou poptávku neodesílat. Konečné SHA, deployment, čas a výsledky zaznamenat soukromě bez dalšího nasazení jen kvůli reportu.

## Návrat a vyhodnocení

Při regresi návrat na zachovaný produkční deployment nebo nedestruktivní revert tohoto jediného commitu; nepřepisovat souběžné změny. Sada je společná fáze, nikoli čistý izolovaný A/B test. Po skutečném vydání a novém crawlu vyhodnotit 28 úplných dní, při nízkém objemu 56; relevantní české dotazy a vstupní stránky, úspěšné odeslání a firmou potvrzená kvalita. Proklik nepočítat jako nového klienta a neodvozovat účinek z pouhého nasazení.
