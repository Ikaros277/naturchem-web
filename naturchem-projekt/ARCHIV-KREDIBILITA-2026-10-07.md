# Hlubší využití archivu — lokální návrh, 7. 10. 2026

## Zadání a baseline

Uživatel chce konkrétní doložení odbornosti z dostupné podnikové evidence. Návrh navazuje na lokální implementaci slabších dotazových skupin; nenahrazuje současnou produkci ani nevstupuje do aktivních experimentů. Před tímto doplněním měl lokální návrh šest doložených případů na deseti stránkách služeb; IPPC, SDS a ISPOP ještě vlastní archivní ukázku neměly. Reference byly převážně obecné, bez rozlišení dokladové síly výstupu.

Průzkum: metadata 4 292 složek, soubory ve 101 vybraných složkách, obsahový výběr 21 dokumentů. To nejsou počty hotových zakázek. Nejde o úplné přečtení archivu ani odbornou revizi správnosti všech historických výpočtů a právních pasáží. Jeden dokument nebo jeden případ použitý na více stránkách není několik realizací.

## Připravené změny

- 11 dalších anonymních případů: dvě žádosti IPPC, bezpečnostní listy směsí, posouzení lepidel, dvě hlášení ISPOP s potvrzením podání, revize dat GHG, aktualizované oznámení EIA, aktualizace provozního řádu zdroje ovzduší, odběry diisokyanátů v lakovně a posudek/žádost pro dieselový motorgenerátor.
- Kompaktní poznámka praxe u příslušných služeb: celkem 19 stránek s poznámkou. Bez samostatné dlouhé sekce, nového obrázku nebo opakovaných tlačítek; původní dvě inquiry CTA zachovány. U diisokyanátů a pracovního prostředí jde o tentýž případ.
- Český přehled referencí: 24 karet místo 16; osm nových karet, tři obecné starší nahrazeny doloženými zněními. Všech 11 nových archivních ukázek se dostane do jedné dosavadní tematické skupiny. Původní ID a odkazy jsou zachovány. Nové příklady nemají nové indexovatelné URL.
- U ověřených karet explicitní a čitelný „Výstup“. Nová data se sdílejí se službovými poznámkami, takže texty nejsou dvě nezávislé verze téhož případu.
- Tři opravené starší případy ISPOP, GHG a provozního řádu také v EN/DE; ostatní nové poznámky CS-only, bez úniku nepřeloženého textu.
- GHG formulované jako revize podkladů/výpočtů, nikoli akreditované EU ETS ověřování. Z profilu jednatele odstraněna neověřená položka GHG autorizace; jiná oprávnění se tímto krokem nepřidávají.

## Důkazní a publikační ochrany

Podání ISPOP ověřeno podle odpovídajícího hlášení a systémového potvrzení. Žádost IPPC/povolení neznamená získané povolení. U provozního řádu doložena naše aktualizace, nikoli autorství původního díla. Neúplný návrh EIA, plán školení, dodavatelské SDS a řády s nejasným autorstvím nebyly použity jako hotové vlastní realizace.

Veřejný modul neobsahuje názvy klientů, interní cesty, čísla zakázek, přihlašovací identifikátory, celé zdrojové dokumenty, individuální expozice ani emisní/finanční hodnoty. Přesné primární zdroje a citace jsou v soukromé matici mimo repozitář. Historické klasifikace a metodické návody nebyly převzaty jako současné odborné rady. Souhlas s čtením archivu není automatický souhlas zákazníka s jmenovanou referencí.

Word byl ověřen textově a strukturálně, včetně metadat a výslovného zpracovatele; dostupný balík neobsahuje dokumentový renderer. Vzhled zdrojových DOCX nebyl certifikován a tyto soubory se nezveřejňují. Vybrané PDF stránky byly vizuálně kontrolovány.

## Ověření

- Finální npm run verify: PASS; 0 lint chyb / 16 existujících varování mimo tento obsah.
- Nové guardy: 22 služeb, 19 stručných poznámek, 11 archivních případů, shoda služba/reference, dosah všech karet, žádné vícenásobné vykazování případu v přehledu, ochrana osobních údajů a přesného GHG rozsahu.
- Build a dosavadní výkonové, CSS, assetové a cache rozpočty PASS bez uvolnění limitů. Stále 528 statických HTML stránek; homepage 133 251 B, kontakt 101 807 B, emise 128 715 B — stejné jako před tímto archivním doplněním. Není to PageSpeed ani Vercel účtování.
- SEO smoke: 521 sitemap/extras URL + 237 dalších odkazů, žádné chyby. Routing, canonical, hreflang, locale redirects, 404 a prázdný nevalidní lokální API payload PASS. Žádná skutečná poptávka/e-mail nebyla odeslána.
- Desktop IPPC a mobilní SDS vizuálně kontrolovány; při 320 px GHG, EIA, ISPOP a diisokyanáty bez vodorovného přetékání. Otevření karet referencí s konkrétními výstupy ověřeno v prohlížeči.
- Mobilní přehled referencí 375 px bez přetékání; otevřená dokumentace má šest konkrétních výstupů. Skutečná cesta reference průmyslového ISPOP → služba ISPOP → formulář se zaškrtnutou položkou ISPOP ověřena bez odeslání.

## Hypotéza, měření a vydání

Hypotéza: konkrétní provoz, provedená práce a doložený typ výstupu sníží nejistotu EHS/BOZP/ekologa a zvýší kvalitu přechodu služba → poptávka. Nové rankingy nebo lead uplift zatím naměřeny nebyly. Anonymní ukázka sama nenahrazuje veřejně ověřitelné oprávnění nebo jmenovanou referenci se souhlasem klienta.

Zatím pouze lokálně v codex/seo-services-evidence-2026-10-06. Žádný commit, push, merge, CMS publikace ani produkční deployment. Homepage, indexované URL, formulářové události, statický režim a ISR politika se tímto doplněním nemění. Cursor checkout zachován.

Před případným vydáním: schválení krátkých anonymních znění a náhledu, konečný diff/verify, ověření main a produkce a výslovná instrukce k nasazení. Vyhodnotit či přefázovat EXP-004/013/014 podle předchozího lokálního plánu. Rollback: revert samostatného schváleného release, případně návrat na ověřený ea31548 bez změny existujících assetových URL.

Po vydání: úplná stejně dlouhá 28denní období v GSC pro cílové stránky; u malého vzorku 56 dní. Konverze form_start → úspěšný generate_lead a firmou potvrzené kvalifikované poptávky, nikoli kliknutí. Společný release neumožní izolovat obchodní účinek jednotlivé poznámky.
