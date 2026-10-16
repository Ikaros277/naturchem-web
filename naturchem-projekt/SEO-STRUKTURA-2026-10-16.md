# Zpřehlednění služeb při ochraně SEO — 16. 10. 2026

## Rozsah a stav

Implementace připravena lokálně na výslovný pokyn vlastníka po auditu šíře webu. Navazuje na předchozí lokální nabídku a návaznost článků, ve stejné oddělené větvi `codex/serp-commercial-evidence-2026-10-14`. Produkce, hlavní Cursor checkout, CMS, DNS ani hostování se nemění. Příprava proběhla bez commitu, push, merge, publikace, produkčního deploymentu nebo testovací poptávky.

Následný pokyn vlastníka 16. 10. 2026 schvaluje commit a push připravených změn do pracovní větve repozitáře `Ikaros277/naturchem-web`. Sloučení do `main` ani produkční nasazení nejsou součástí tohoto pokynu. Před pushem znovu ověřeno, že vzdálený `main` odpovídá uvedenému základu, a zopakovány cílené komerční, navigační a SEO ochranné kontroly. Dřívější kompletní `npm run verify` a HTTP smoke v této neměněné implementaci zůstávají platné.

## Výchozí stav a podklady

- Produkční základ `8a96cf02b71a057e8eede67b3f6361ac7930adac`; živá sitemap při auditu 579 URL, 193 v každém jazyce. Lokálně 582 URL, 194/jazyk; rozdíl jeden již naplánovaný článek o zápachu ve třech jazycích.
- V lokální české verzi žádná osiřelá sitemap adresa, žádný chybějící/nesprávný canonical, nechtěný meta noindex nebo počet H1 odlišný od jednoho. Žádné přesné duplicity titulů či celého hlavního textu. Samotný překryv názvů nedokládá škodlivou kanibalizaci.
- GSC odečet 16. 10.: Česko/Web/všechna zařízení, 16. 9.–13. 10. vs. 19. 8.–15. 9. Karty ukazují 174 vs. 158 kliknutí a 5 769 vs. 4 293 zobrazení. Odečtená tabulka 106 URL se však na karty nesčítá; proto není podkladem pro rušení URL ani odhad konverzí.
- Pro přesný dotaz „hluková studie“ hlavní služba 41 vs. 7 zobrazení, průměrná pozice 5,2 vs. 15,3; dvě další URL po jediném zobrazení. Žádný z těchto tří řádků nemá kliknutí. Takto malý vzorek neopravňuje ke slučování.
- Audit 14. 10. doložil hodnotu specializovaných vstupů, článků i typických zakázek. Neproběhlo nové měření všech Google/AI dotazů ani párování GA4 s přijatými poptávkami.

## Provedené změny a hypotéza

1. **Srozumitelnost podobných služeb.** Osm českých služeb má místo obecných horních souhrnů tři konkrétní body: modelové výpočty, imisní/hlukové dopady, akustické posudky, oznámení EIA, podklady pro zjišťovací řízení, technické přílohy, koordinované EIA/posudky/poradenství a povolení provozu. Jde o shrnutí jejich existujícího rozsahu. Tituly, H1, úvody, technické seznamy a FAQ zůstávají zachované. Nevzniká další dlouhá sekce ani další CTA.
2. **Přehled služeb.** Tři hlavní okruhy odpovídají hlavičce: Měření; Studie a výpočty; Dokumentace a povolení. Ponecháno všech šest původních podskupin, nativní odkazy na jejich kotvy a všechny původní cíle: 27 v češtině a 25 v EN/DE. Doklady a specializované detaily se nemažou ani nepřesouvají na nové adresy.
3. **Potvrzený rozsah nabídky.** Karty CS/EN/DE uvádějí tvorbu nových SDS i revize, kompletní žádosti a podání IPPC/povolení a zmocněné podání ISPOP. Český přehled i vysvětlující texty menu lépe odlišují studie, výpočty a posudky. Bez nových autorizací, cen, lhůt či záruk výsledku řízení.
4. **Koordinovaná dokumentace.** Stránka EIA/posudky/poradenství nově vede přímo na oznámení EIA, IPPC a ISPOP. Původní odkazy na studie a posudky zůstávají v serverovém HTML.
5. **Tři cílené obsahové odkazy.** Článek o dřevozpracujícím provozu odkazuje z existující tabulky sušení na emise sušáren; svařovna z pasáže o výduchu na těžké kovy v emisích; článek o záložním dieselagregátu z nabídky na odpovídající měření. Nejde o přidání velkého plošného seznamu ani náhradu dosavadní primární cesty. Právní a technické pasáže, čísla, odkazy na zdroje, data a frontmatter těchto tří článků nebyly přepsány.

Hypotéza: zákazník rychleji rozliší službu a připraví relevantní zadání; specializované vstupy získají srozumitelnou vnitřní návaznost. Vyšší pořadí ani více poptávek tímto lokálním krokem nejsou prokázány.

## Ochrany a záměrně neprovedené zásahy

- Žádné mazání či slučování URL, redirecty, nové místní stránky, noindex, změny robots, hreflang nebo canonical.
- Žádné přepisování vítězných titulů/H1, rušení poradny, FAQ, typických zakázek, katalogu přístrojů či překladů.
- Původní odborný obsah služeb zůstává v HTML a nativních rozbalovacích blocích. Shrnutí pouze nahrazují stávající tři body.
- Žádné nové obrázky, knihovny, analytické události, API požadavky, ISR či další externí widgety. Nová shrnutí jsou serverová data; navigace používá existující ovládání a nativní odkazy.
- Všech 12 redakčních draftů nadále neveřejných. Nepřidány jiné statistiky, případy ani jména klientů. GHG není prezentováno jako nezávislé akreditované ověření EU ETS.
- Předchozí lokální komerční úpravy zachovány. Návrh není novým aktivním produkčním experimentem.

## Ověření

Nový `test:service-structure` kontroluje tři okruhy a šest nativních podskupin ve všech jazycích, původní cíle rozcestníku, osm stručných shrnutí, úplnost původních odborných seznamů, dvě existující poptávkové akce a tři cílené odkazy. Je součástí `npm run verify`.

Finální `npm run verify` včetně sestavení a všech postbuild kontrol: **PASS**. Lint bez chyb, devět původních upozornění; sestavení také hlásí původní metadataBase upozornění, kontrola všech sitemap canonical/hreflang je však bez chyb. Zachováno všech 337 immutable obrázkových URL. Nejde o nové měření Lighthouse ani slib skóre 100.

Dodatečné porovnání se stavem před tímto zpřehledněním: všech 582 lokálních sitemap adres zkontrolováno na indexovatelnost, jeden H1, správný canonical, jazykové alternativy a syntaxi JSON-LD. Všech 579 produkčních sitemap URL zůstává. U všech 194 českých stránek zůstaly titul, H1, canonical a meta indexace beze změny; žádný dosavadní český interní cíl nezmizel. Přibyly pouze tři cíle koordinované dokumentace a tři popsané článkové odkazy. Jde o ochranu technických a obsahových předpokladů, nikoli garanci budoucího pořadí.

Lokální HTTP smoke: 584 hlavních URL a 302 dalších interních odkazů bez chyby; routing smoke bez chyby včetně canonical, hreflang, přesměrování, CMS, formulářové kotvy a chybových odpovědí. Žádná skutečná poptávka nebyla odeslána.

Rozcestník vizuálně ověřen na desktopu a při 375 px. Rozcestníky CS/EN/DE a odlišené služby zkontrolovány také při 320 px bez vodorovného přetékání. Ověřeny klikací kotvy Evidence a chemie, EIA, Školení a Studie, které otevřou odpovídající původní podskupinu. Náhled běží na `http://127.0.0.1:3125/sluzby/`; před produkcí je nutný další výslovný souhlas, kontrola aktuálního main/produkce a rollback cesta.

## Měření po případném vydání

Zaznamenat datum společného vydání i předchozí lokální obchodní přípravy; nepřisuzovat společný dopad jedné úpravě. Srovnávat úplná 28/56denní období a při malých objemech delší. Vyhodnotit celé tematické skupiny i jednotlivé vstupní URL, přechody na relevantní službu, form_start a potvrzené generate_lead. Kliknutí na poptávku není dokončená poptávka. Před případným rušením stránek doplnit alespoň 90denní query–URL data, obchodní přínos a ověřit nesoulad dat GSC.

Návrat: odebrat pouze tuto malou sadu změn proti předchozímu lokálnímu stavu; nevracet ani nemazat rozpracovanou práci jiných větví. Při technické regresi po schváleném vydání použít ověřený předchozí produkční deployment.
