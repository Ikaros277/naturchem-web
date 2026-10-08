# Fotografické reference — lokální rozšíření všech měřicích ukázek, 8. 10. 2026

## Aktuální rozsah — devět ověřených fotografických realizací

Vlastník požádal rozšířit tři prověřené fotografie alespoň na všechny vypsané měřicí zakázky. Nyní je připraveno devět jedinečných fotografických karet, všechny s ověřenou vazbou na konkrétní zakázku, nikoli tematické ilustrace. Každá samostatná měřicí ukázka českého přehledu má fotografii. Zbývajících 16 studijních a dokumentačních příkladů zůstává v kompaktním přehledu; bez ověřené vazby se k nim fotografie nepřidává.

1. Lakovací boxy — TOC na pěti výduších, 2018; fotografie lakovacích boxů z této zakázky.
2. BPS — jedna kogenerační jednotka, 2025; dosavadní prověřený snímek.
3. BPS — dvě kogenerační jednotky v jednom areálu, 2025; fotografie z vlastního protokolu k této zakázce, nikoli tvrzení o datu pořízení fotografie.
4. Centrální kotelna — měření emisí dvou kotlů na biomasu, 2025; fotografie technologie této kotelny, ne neověřený popis konkrétního zařízení jako kotle.
5. Automobilová výroba — mikroklima, hluk a organické látky, 2026; fotografie mikroklimatického měření z příslušného pracoviště. Tři protokoly stejné zakázky nejsou vydávány za tři klienty ani tři realizace.
6. Lakovna — odběr diisokyanátů, 2025; dosavadní prověřený snímek vzorkovací kazety.
7. Kovovýroba — hluk na pozici svářeče, 2025; dosavadní prověřený snímek.
8. Kovovýroba — vibrace přenášené na ruce, 2025; nový samostatně doložený případ a fotografie nářadí se snímačem. Nejde o brusku; text nespecifikuje neověřený model ani výsledek expozice.
9. Tepelné čerpadlo — provozní hluk v chráněném venkovním prostoru, 2026; výřez venkovní jednotky z dané zakázky, bez širšího soukromého okolí.

Celkem 25 českých příkladů: původních 24 plus jeden nový skutečně doložený případ vibrací. Devět fotografických a 16 kompaktních karet bez duplicitního těla. EN/DE mají nadále 16 vlastních příkladů; pět zpřesněných případů je věcně aktualizováno i v překladech, české fotografie ani nový nepřeložený případ se do nich nepřenášejí. URL, původní ID a tematické kotvy zůstávají zachovány.

Pět starších obecných příkladů bylo nově ukotveno v konkrétních vlastních protokolech, nikoli prohlášeno bez důkazu za tutéž historickou realizaci: lakovna měřila TOC při lakování leteckých dílů (bez neprokázaného TZL či automobilového určení); dvě kogenerace byly v jednom areálu (bez tvrzení o sérii více provozů či ISPOP); měřené kotle spalovaly biomasu (nikoli plyn); pracovní prostředí mělo tři doložené faktory (bez tvrzení o prachu); u tepelného čerpadla se nedokládá vyřešení sporu se sousedy. Starší ID jsou pouze stabilní technické identifikátory, ne popis nynějšího doloženého případu.

Soukromé protokoly byly přečteny a příslušné fotografické/technické stránky také vizuálně porovnány. Zdrojová matice a originály jsou pouze v soukromých výstupech vlastníka mimo veřejný repozitář. Výřezy neobsahují obličeje, soukromé interiéry, klientské adresy, SPZ, dokumenty, měřené výsledky ani nastavení řídicích systémů. Zveřejňované varianty jsou bez EXIF/GPS; nebyl generován ani pozměněn věcný obsah fotografií.

54 statických AVIF/WebP variant devíti fotografií zabírá celkem 1 335 603 B; šest nových fotografií přidává 965 759 B. Pro každý snímek jsou připraveny šířky 384/640/960 px, pevné rozměry a lazy loading s nízkou prioritou. Žádný nový klientský runtime, závislost, indexovatelná stránka, transformace obrázků přes Vercel ani změna ISR. Vše zatím lokálně; bez commitu/push/merge/deploymentu. Před publikací schválit konkrétní snímky a anonymní texty; samotný archivní přístup nezaručuje souhlas klienta se zveřejněním.

Cílený test párování a rozpočtu PASS pro všech devět měřicích ukázek. Baseline této fáze: tři fotografie, 24 případů a HTML referencí 214 790 B. Hypotéza: důvěryhodnější posouzení konkrétního rozsahu práce a cesta k odpovídající poptávce; obchodní ani SEO přínos zatím není změřen.

## Ověření aktuálního rozšíření na devět karet

Finální npm run verify PASS po poslední mobilní opravě, včetně sestavení, testů párování a kontextu formuláře, všech výkonových rozpočtů a ochrany 231 dosavadních immutable assetových URL. Nadále 16 existujících neblokujících lint varování mimo nový fotografický přehled. HTML referencí 235 097 B proti mezistavu 214 790 B (+20 307 B); homepage 133 251 B, kontakt 101 807 B a měření emisí 128 715 B beze změny této fáze. Počet statických stránek beze změny (528 podle rozpočtového testu); žádná nová službová URL kvůli fotografiím.

Finální SEO smoke: 521 adres sitemap/extras plus 237 dalších interních odkazů, bez chyby. Routing, canonicals, hreflang, přesměrování, 404 a neplatný lokální API payload PASS. Skutečná poptávka ani e-mail nebyly odeslány.

Desktop 1366 × 900: všechny fotografie načtené, tři řady po třech, devět různých obrazů a odpovídající titulky; bez vodorovného přetékání. Mobil 375 × 900 a 320 × 900: čitelná fotografie, popisek, rozsah, výstup i akce. Skutečný odkaz nové reference vibrací otevřel kontakt s viditelným předvolením Měření vibrací, bez vyplnění a odeslání. Tematický přehled má všech šest skupin a devět odkazů k fotografickým kartám. Zjištěné překrytí delšího názvu skupiny šipkou na 320 px opraveno rezervou 52 px pouze u referencí; oprava ověřena v prohlížeči i vypočteném stylu.

Náhled zůstává na http://127.0.0.1:3122/reference/#fotograficke-reference v nové kontrolní kartě, protože stará karta nedokázala obnovit spojení. Původní uživatelská karta nesmazána. Dočasný viewport resetován. Snímek celé devítikartové sekce a desktopové/mobilní důkazy uloženy v soukromých lokálních výstupech mimo repo. Vše bez commitu, push nebo nasazení; schvalování publikace a klientských práv zůstává samostatným krokem.

## Historie — mezistav se třemi kartami po opravě chybných vazeb

První návrh níže byl odmítnut pro nesoulad obrázků a realizací. Označení snímku jako ilustračního tuto obsahovou chybu neřeší. Pět tematických vazeb bylo odstraněno, nikoli přesunuto pod jiné popisky. Výběr zatím obsahuje jen tři skutečně prověřené páry foto–realizace: kogenerace BPS, diisokyanáty v lakovně a hluk na pozici svářeče. Původní cíl osmi řádně doložených fotografických referencí tedy zatím není splněn.

U lakovny byla obecná sorpční trubice nahrazena fotografií kazety označené Isokyanáty ze stejného pracoviště. Strana 3 původního vlastního protokolu byla vizuálně porovnána s fotografií: lakovna P5, diisokyanáty a odběr na impregnované médium. Popisek neslibuje víc než snímek vzorkovací kazety z této zakázky. BPS a hluk svářeče ponechány po opětovné vizuální kontrole již doložených snímků. Soukromá zdrojová matice obsahuje přesné vazby; originály nejsou zveřejněny.

Ostatních 21 příkladů zůstává v dosavadním kompaktním přehledu bez nesouvisejících fotografií. Celkem stále 24 referencí, stejné URL a tematické kotvy, žádné nové vymyšlené realizace. Tři karty na širokém desktopu tvoří jednu řadu, na mobilu jeden sloupec. Všechny mají konkrétní výstup a odpovídající cestu k poptávce.

Test nově odmítá tematické ilustrační náhrady, kontroluje přesný schválený seznam párování a zachování pěti vrácených textových karet. Test automaticky nenahrazuje lidskou odbornou kontrolu vazby. Ve veřejném adresáři zůstává pouze 18 skutečně používaných AVIF/WebP variant tří snímků, 369 844 B; šest nepoužitých lokálních exportů původní trubice odstraněno. Soukromý originál i fotografie obecného vybavení jinde na webu zůstávají beze změny.

Pouze lokální oprava, bez commitu/push/merge/deploymentu, bez změny homepage/ISR/analytiky. Přínos pro důvěru a poptávky je hypotéza, ne naměřený obchodní nebo SEO výsledek. Níže jsou historické parametry a výsledky prvního návrhu; neplatí jako ověření této opravy.

## Ověření opravy

Aktuální npm run verify PASS, včetně cíleného testu párování, sestavení a výkonových rozpočtů; 16 existujících neblokujících lint varování mimo nový přehled. HTML referencí 214 790 B proti 224 775 B odmítnutého návrhu; homepage 133 251 B, kontakt 101 807 B a emise 128 715 B beze změny. Ochrana 231 immutable URL PASS. SEO smoke 521 adres a 237 interních odkazů bez chyby; routing smoke PASS, včetně canonicals/hreflang/404 a neplatného lokálního API payloadu.

Desktop 1366 × 900: všechny tři správné snímky načtené a odpovídající titulku/popisům, bez vodorovného přetékání. Mobil 375 × 900 i 320 × 900: čitelná kazeta, popisek, text a akce, bez přetékání. Skutečný odkaz z lakovny otevře formulář s vybraným měřením pracovního prostředí; nic vyplněno ani odesláno. Ostatní kontexty chrání cílený test. Náhled znovu ponechán na http://127.0.0.1:3122/reference/#fotograficke-reference, viewport resetován. Aktuální důkazní desktopový a mobilní snímek soukromě mimo repo.

## Historie prvního návrhu — již neplatný rozsah osmi karet

## Baseline a hypotéza

Výslovné zadání vlastníka: osm dobře zpracovaných fotografických ukázek místo obrázku u všech 24 příkladů. Dosavadní lokální české reference měly 24 textových karet v šesti rozbalovacích skupinách. HTML přehledu mělo 204 157 B. Zvětšení čitelnosti a konkrétnosti má usnadnit B2B návštěvníkovi posouzení dodavatele a přechod ke službě/poptávce. Dopad na leady ani Google/AI pořadí zatím nebyl naměřen.

## Návrh

- Osm výraznějších karet: kogenerace BPS, pracovní ovzduší lakovny, pracovní prostředí výrobní haly, hluk na pozici svářeče, hlukové posouzení VZT, rozptylová studie kotelny, ISPOP průmyslového areálu a provozní řád zkušebních pecí.
- Každá má jiný autentický snímek, krátký popis provedené práce, viditelný výstup a samostatné odkazy ke službě a odpovídající poptávce.
- Tři fotografie mají prověřenou vazbu na konkrétní případ (BPS, lakovna, hluk svářeče); pět dalších je výslovně ilustračních z naší praxe. Nejsou vydávány za snímek popsaného klienta. Rok 2025 se uvádí jen u tří doložených vazeb.
- BPS a hluk svářeče nově ukotveny v původních vlastních protokolech. Starší obecná tvrzení o ISPOP u této BPS a dalších chemických faktorech ve svařovně nejsou přebírána bez přímé vazby na vybraný případ. Upravené znění je stejné věcně v CS/EN/DE.
- Stále celkem 24 případů, nikoli 32 realizací. Šestnáct zůstává kompaktních bez snímku. V dosavadních skupinách jsou odkazy k osmi fotografickým kartám, takže tematické anchor adresy nepřestaly fungovat.
- Fotografický přehled je zatím CS-only. EN/DE si ponechávají vlastní přehled a nepřebírají české popisky.
- Jmenovaní zákazníci zůstávají před delším fotografickým přehledem; fotografie nejsou náhradou veřejné identity klientů. Odkaz „další zákazníci“ nyní skutečně rozbaluje seznam místo návratu na stejnou kotvu. Fotokarty mají stabilní layout pro přímé fragmentové odkazy; nejde o jednu odhadovanou content-visibility plochu.

## Soukromí a rychlost

Žádný originál, soukromá adresa Fotek, GPS/EXIF/XMP/IPTC, klientská identita, výsledek expozice, snímek dokumentu nebo obličej není přidán do veřejných assetů. Výřezy vylučují papíry a obličej; nedošlo k AI úpravě skutečného obsahu fotografií. Identita klientů, původní protokoly a přesná zdrojová matice zůstávají jen v soukromých podkladech vlastníka.

Pět již připravených fotografií je použito bez další kopie. Tři nové mají 18 statických AVIF/WebP variant (384/640/960 px), dohromady 384 945 B. Žádná nová závislost, klientská galerie, on-demand obrazová transformace, nový indexovatelný URL ani změna ISR. Obrázky mají pevné rozměry, responsive sizes/srcset, lazy loading a nízkou prioritu; nový styl je izolovaný na stránku referencí.

## Vydání a vyhodnocení

Pouze lokální větev codex/seo-services-evidence-2026-10-06; žádný commit/push/merge/CMS publikace/deployment. Před vydáním schválit náhled, anonymní texty a publikovatelnost snímků provozů. Samotný archivní přístup nezaručuje souhlas klienta se zveřejněním.

Po případném schváleném vydání porovnávat stejně dlouhá úplná období: cesta reference → relevantní služba/poptávka a úspěšné generate_lead s potvrzenými kvalifikovanými zakázkami. Kliknutí není úspěšná poptávka. GSC dotazy sledovat jako podpůrné měřítko, ne tvrdit SEO uplift z fotografie. Nevytvářet nový překryv aktivních EXP-004/013/014. Rollback samostatným revertem schváleného balíku; dosavadní immutable assety zůstávají beze změny.

## Ověření

Cílený test kontroluje osm různých fotografií, 24 jedinečných příkladů bez duplicitního těla, konkrétní výstupy, pravdivé popisky, rok jen u doložené vazby, metadata/rozměry/rozpočet variant, předvolení služby ve formuláři a zachování EN/DE.

Finální npm run verify PASS, včetně sestavení a všech výkonových rozpočtů; dosavadní neblokující varování mimo nový přehled trvají. 528 statických stránek, homepage 133 251 B / kontakt 101 807 B / měření emisí 128 715 B beze změny proti baseline této fáze. Reference 224 775 B proti 204 157 B (navíc 20 618 B serverového HTML); žádný nově autorovaný klientský runtime. Immutable ochrana 231 dosavadních assetových URL PASS.

SEO smoke finálního preview: 521 sitemap/extras adres a 237 dalších interních odkazů, žádná chyba. Routing/canonical/hreflang/locale přesměrování/404 a nevalidní lokální API payload PASS. Nebyla odeslána skutečná poptávka ani e-mail.

Vizuální kontrola v prohlížeči: desktop 1366 × 900, mobil 375 × 900 a úzký mobil 320 × 900 bez vodorovného přetékání. Doložené/ilustrační popisky čitelné; výstup a oba odkazy viditelné, na 320 px se akce řadí pod sebe. Všechny varianty dostupné. Tematická skupina dokumentace se otevře z dosavadní kotvy, odkaz k fotografické kartě funguje. Reálná cesta karta ISPOP → formulář s vybraným ISPOP a karta VZT → formulář s vybranými Hlukovými studiemi potvrzena bez vyplnění a odeslání. Mobilní rozbalení zákazníků ukáže všech 19 existujících log.

Náhled ponechán na http://127.0.0.1:3122/reference/#fotograficke-reference. Viewport resetován. Desktop a mobilní důkazní snímky v soukromých lokálních výstupech; soukromá zdrojová evidence obsahuje přesné vazby a omezení. Cursor checkout, produkce, CMS a aktivní experimenty beze zásahu.
