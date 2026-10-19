# Společné vydání po úpravách Cursoru — 19. 10. 2026

## Souhlas a výchozí verze

Majitel výslovně požádal aplikovat odsouhlasené místní úpravy také na současný web, se zachováním mezitím provedené práce Cursoru. Vydání je připravováno z aktuálního main `c2c5d7cff673548c7f9850bf2c040d3dd2dd6ca8`, nikoli ze starší místní větve ab3e4fb. Vyhrazený worktree a větev `codex/service-message-release-2026-10-19`; rozpracovaná hlavní složka, `.agents/` a předchozí lokální návrh zůstávají nedotčené.

Předchozí produkce byla v přihlášeném Vercelu skutečně Ready: deployment `5kdVuvz53Zvt48eBJyZARSz1z1Vj`, doména `www.naturchem.cz`, commit c2c5d7c. Tentýž SHA potvrzen veřejným publication-state. To je výchozí rollback pro tento izolovaný balík, ne starý ab3e4fb.

## Rozsah a ochrany

- Přesun celého původního barevného přehledu na `/sluzby/pracovni-prostredi/` nad „Co pro Vás zajistíme“, s rozestupem 40 px na PC / 28 px na mobilu. Bez nových tvrzení, přepisování rozsahu nebo obrázků.
- Globálně posílat pouze společné klientské texty; texty formulářů, mapy, katalogů a filtrů předávat jen příslušným stránkám. Žádná nová knihovna, požadavek, formulářová logika nebo změna souhlasů/antispamu.
- Nový regresní test ovládacích textů pro CS/EN/DE a všech 591 sestavených stránek, zahrnutý do verify a postbuild.
- Zachovat nové titulky Cursoru, celé `messages/*.json`, monitoringové workflow, soukromé určení týdenních reportů, jejich test i příkazy. V package.json doplnit pouze nové kontroly, nikoli nahradit novější soubor starým.
- **Všechny články, včetně kotelny, zůstávají přesně na obsahu současného main.** Čekající právní revize, její pomocné testy, změna article-content-version a generované změny vyhledávacích indexů z původního worktree nejsou součástí vydání. Revize zůstává v původním místním návrhu pro odborné odsouhlasení Ing. Hezinou.
- Nezasahovat do EXP-008/011/013/014, URL, canonical, hreflang, schema, cache politiky, DNS, formulářového směrování nebo placených služeb.

## Baseline a očekávaný obchodní přínos

Nezměněný c2c5d7c byl nejdříve místně sestaven a teprve potom uložen nový neměnný baseline: 591 úspěšných lokalizovaných statických stránek, celý sitemap a 271 chráněných zdrojových souborů včetně všech článků, SEO textů, monitoringu a API. Předchozí měření vůči ab3e4fb se nepoužívá jako důkaz zachování novějších titulků.

Hypotéza: návštěvník dříve rozpozná hledaný typ měření a menší první dokument sníží čekání před orientací či poptávkou. Nejde o potvrzený růst pozic, kvalifikovaných poptávek nebo zaručenou úsporu účtovaných ISR jednotek. Historicky spotřebovaná kvóta se nasazením nevrací.

Soukromé vstupy a úplné výsledky jsou mimo veřejný repozitář: `verify-naturchem-c2-release-2026-10-19.cjs`, `naturchem-c2-release-before-2026-10-19.json.gz`, `naturchem-c2-release-results-2026-10-19.json`. Přihlášený Vercel byl zkontrolován pouze čtením; tarif se nemění. Do veřejného repozitáře nepatří autentizační údaje, skutečné poptávky ani neveřejné exporty analytiky.

## Stav ověření a vydání

Nezměněný výchozí c2c5d7c: build a všechny dosavadní post-build kontroly prošly. Po přenosu prošlo nové celé `npm run verify`, exit 0, včetně zachovaného testu monitoringu a finálního buildu 631 cest. Devět již existujících lint upozornění, žádné nové lint chyby. Test všech 591 dokumentů potvrdil správné předávání klientských textů; rychlostní, obsahové, CSS a obrázkové rozpočty prošly.

Porovnání všech 591 stránek proti novému baseline c2c5d7c potvrdilo shodné SEO a zákaznický markup, s jedinou povolenou změnou pořadí celé původní sekce pracovního prostředí. Zachováno všech 271 chráněných zdrojových souborů i byte-identický sitemap. Při porovnání vyňaty pouze frameworkové transportní skripty, verzované odkazy na jeho JS a přesný prázdný React oddělovač `<!-- -->`; neignoruje se text, whitespace, elementy, atributy, JSON-LD ani consent. Baseline nebyl přepsán po změně.

Celkem raw HTML 82 802 307 → 76 789 945 B (jedna kopie každé stránky, nikoli měsíční provoz). Lokální gzip homepage 27 478 → 23 894 B (−13,0 %), měření emisí 29 757 → 26 160 B (−12,1 %), pracovní prostředí 32 251 → 28 834 B. Není to potvrzená úspora účtovaných ISR jednotek nebo stejný procentní růst rychlosti celého načtení.

SEO smoke: 584 místních URL a 302 navazujících interních odkazů bez selhání. Routing, jazykové adresy, canonical/hreflang, 404/noindex i odmítnutí prázdného formuláře prošly. V prohlížeči zkontrolován PC přehled, skutečný službový odkaz → předvyplnění formuláře a opožděné načtení mapy. Mobilní viewporty 390/320 px bez vodorovného přetékání, původní velikost vrácena. Žádná skutečná poptávka ani dotazník se neodesílaly. Přesný diff revidován. Nový produkční Ready se potvrzuje následně, není tímto zápisem předpokládán.

Plán vydání: bez preview pushe vytvořit jeden úzce vymezený commit v codex větvi a jedním běžným fast-forward pushem jej doručit do tehdy znovu ověřeného main v `Ikaros277/naturchem-web`. Vercel Git integrace vyvolá jediný produkční build; nespouštět souběžně deploy hook, ruční Redeploy nebo druhý CLI deployment. Při změně remote main neprovádět force push, ale bezpečně znovu sladit a ověřit.

Po vydání potvrdit Ready, skutečný produkční SHA, přesun přehledu a základní stránky/SEO/ovládání bez odesílání skutečné poptávky. Post-release zápis ponechat soukromě nebo místně bez druhého deploymentu jen kvůli reportu. Při závažné regresi použít zachovaný c2c5d7c deployment jako návrat; nevracet ostatní mezitím publikované úpravy Cursoru.

## Měření výsledku

Společný technický/prezentační zásah tvoří další fázi a rušivý faktor dosavadních obsahových experimentů; nepřipisovat mu automaticky předchozí růst. Od skutečného nasazení sledovat shodné celé týdenní intervaly ISR/Fast Origin/CDN a 28/56denní segmenty GSC/GA4 s `form_start`, úspěšným `generate_lead`, potvrzeným doručením a kvalifikací. Kliknutí na kontakt není dokončená poptávka. V den vydání nelze prokázat obchodní uplift.
