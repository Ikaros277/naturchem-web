# Přehlednější nabídka a cesta k poptávce — místní návrh 26. 10. 2026

## Aktualizace po připomínce vlastníka: web bez textového hledání

Vlastník odmítl pole Hledat službu a požádal o web vedený zákaznickými potřebami namísto zadávání dotazů. Novější místní úprava proto odstraňuje textové hledání z katalogu, poradny i FAQ ve všech třech jazycích. Původní níže popsaný návrh hledání a jeho vizuální QA je historický mezikrok, nikoli aktuální podoba.

Zachovány viditelné situační vstupy, prioritní služby, všech šest kategorií, všechny cílové adresy, úplné odpovědi FAQ a právní odkazy. Poradna má nadále volbu tématu a statické stránkování, FAQ odkazy na témata a kompaktní mobilní výběr. Starý fragment `#faq-search` zůstává jako kompatibilní kotva k tématům, nikoli jako vyhledávací pole. Nepoužívaný klientský fulltextový hook odstraněn; návštěvnická navigace již nestahuje fulltextový index. Dříve zveřejněné soubory indexů zůstávají kvůli kompatibilitě existujících URL a publikačních testů, ne jako doporučená návštěvnická cesta. Žádná nová analytika nebo závislost.

Pořadí vychází z potvrzené kapacity a obchodních priorit vlastníka, nikoli z vydávané domněnky o nejklikavějších službách. Soukromý GA4 rozpad z 20. 10. za 19. 9.–16. 10. ukazuje pouze sedm měřených odeslání a souvislosti pracovního prostředí, kolaudace a hluku; nejde o dostatečný vzorek pro přesné dlouhodobé pořadí všech služeb ani o čerstvý odečet z 26. 10. Osvětlení je potvrzená růstová priorita vlastníka. Další řazení vyhodnocovat podle skutečných `generate_lead` / `service_interest`, relevantního výběru služby a obchodního potvrzení, ne podle samotných kliků nebo vstupních URL. Neodstraňovat slabě navštěvované indexované služby.

Nový test chrání absenci vyhledávacích polí na celém vygenerovaném veřejném webu, zachování odkazů na služby, přesných FAQ odpovědí, právních zdrojů, témat a stránkování. Následná verze: úplné `npm run verify` včetně build a postbuild dokončeno s kódem 0; 624 jazykových HTML dokumentů včetně přesměrovacích/budoucích zástupných cest bez textového hledání. Lokální smoke 586 adres +303 dalších odkazů bez chyby. Srovnání původních 592 veřejných dokumentů potvrzuje zachované české SEO značky, H1 služeb a formuláře; dvě starší německé změny popisů nadále patří předchozím překladům. V Chrome ověřena témata FAQ na desktopu i mobilu, stránkování poradny uvnitř tématu (18 pracovních článků, 12+6) i návrat ke všem 80 článkům; katalog na 390/320 px bez přetékání. Starý fragment FAQ funkční, dočasný viewport vrácen. Zůstává pouze místní návrh bez commitu či produkčního zásahu; hlavní Cursor checkout beze změny.

## Zadání a ověřená obchodní priorita

Vlastník po auditu 25. 10. schválil místní implementaci zlepšení a doplnil pořadí zájmu: pracovní prostředí, měření pro kolaudaci, hluk, vibrace a osvětlení. Prodej měřicí techniky není významnou prioritou; hlavní jsou měření, studie a dokumentace. Nejde o pokyn ke commitu, push, sloučení nebo nasazení.

Pracovní základ `6e87fdd` odpovídá vzdálenému main ověřenému 26. 10. čtecím dotazem. Hlavní checkout obsahuje rozpracované změny Cursoru včetně úvodní stránky, služeb a referenčních podkladů; ponechán beze změny. Úpravy vznikají v již připojené větvi `codex/article-topic-quality-2026-10-24` společně s předchozími nevydanými opravami článků a vrácenou mapou. Před případným vydáním je nutná aktuální kontrola překryvů, nikoli přepsání hlavního adresáře touto kopií.

## Baseline a hypotéza

Audit ověřil čtyři klepnutí od mobilní homepage přes menu k mikroklimatu, dvě situační nabídky smíchané mezi konkrétními měřeními a opakované seznamy ve službách. VZV článek nabízel také obecnou administrativu chemických látek a přímá poptávka nenesla jeho téma. Reference začínaly logy; z devíti fotografických případů vedly emise, pracovní prostředí a hluk.

Hypotéza: snazší volba služby, menší potřeba hledání a přesnější zadání z článku. Oprava navigace ani kliknutí nejsou samy úspěšnou poptávkou. Zvýšení organických pozic a kvalifikovaných zadání zatím není naměřeno.

## Připravené změny

- Mobilní menu: tři kategorie rovnou po otevření, bez nadřazeného rozbalování Služby. Každá služba je v nabídce jednou; zachována animace, ovládání klávesnicí, přehled i jazykové varianty.
- Pořadí konkrétních měření v katalogu a menu vychází z potvrzených priorit. Kolaudace a nová hala mají vlastní viditelné situační vstupy, nejsou zaměňované s jednotlivými faktory měření.
- Lokální vyhledávání katalogu se synonymy, diakritikou a jasným stavem bez výsledku. Bez externího vyhledávače, nových závislostí, zápisu hledaného textu do analytiky nebo další URL pro každou frázi. Běžné odkazy zůstávají v počátečním HTML i bez hledání.
- Reference mají přímý název a cíl v navigaci. Měřicí technika zůstává dostupná za hlavními obchodními cestami a bez zvýraznění hlavní priority.
- Spodní poptávkové tlačítko katalogu zachovává jazyk návštěvníka; stará anglická a německá cesta vedla na český kontakt. České zadání a všechny parametry zůstávají beze změny.
- U českých referencí jsou fotografické případy před logy; vybrané případy pracovního prostředí, hluku a vibrací odpovídají prioritám vlastníka. Všech devět původních případů, odpovídající fotografie, údaje a původní fragmenty zůstávají. Nezveřejňují se nová jména či citace.
- Dvě ukázkové služby, české pracovní prostředí a mikroklima: úplný rozsah a výstupy čitelné přímo v nabídce, úplný seznam podkladů pouze u poptávky. Odstraněny dvě opakované vrstvy rozbalování; původní odborné položky zůstávají. FAQ včetně odpovídajících strukturovaných dat ponechána. Jde o lokální prototyp pro kontrolu, ne plošné přepisování právně-technických textů.
- U úzce zaměřených článků se související služby nedoplňují obecnými odkazy jen do počtu tří. VZV článek vede na vibrace a pracovní prostředí; vlastní poptávka přenáší službu a zadání VZV. Datum, status a odborný text článku se nemění.
- Počítadla mají dolní mez nula i při časové odchylce prvního animačního snímku; zachováno 1,5 s, zpomalování, konečné hodnoty a omezení animací.

## Ochrany a kontrola

Nové testy kontrolují úplnost a neměnnost všech 27 českých /25 EN a DE cílů katalogu, šest původních kotev, správné pořadí, synonyma, přesné související odkazy, předvyplnění VZV, zachování odborných položek a jediný seznam podkladů u obou vzorových služeb. Rozšířen test počítadel o snímek starší než okamžik spuštění. Aktualizované starší kontroly odlišují 25 konkrétních českých služeb od dvou zachovaných situačních vstupů; nezmenšují ochranu cílových adres nebo fotografií.

Nejsou měněny canonical, hreflang, H1, hlavní vyhledávací titulky, robots, přesměrování, oprávnění, ceny, požadované lhůty, pole/doručování poptávky ani definice `generate_lead`. Nevznikají nové skutečnosti o práci pro klienta.

Finální `npm run verify` dokončeno 26. 10. s návratovým kódem 0 včetně sestavení a kontrol výsledného HTML. Zůstává 9 dřívějších lint upozornění a dřívější upozornění na metadataBase, nejde o tvrzení, že celý projekt nemá žádný dluh. Lokální SEO smoke ověřil 586 adres a 303 dalších interních odkazů: 0 chyb. `git diff --check` bez chyby, bez nových závislostí.

Srovnání se zachovaným veřejným HTML základu `6e87fdd` z 23. 10.: všech 592 původních veřejných dokumentů existuje, žádné změněné formuláře nebo H1 služeb. Po normalizaci pořadí značek jsou české titulky, meta, canonical a hreflang totožné. Dvě změny německých popisů patří již dříve připraveným překladům, nikoli tomuto UX zásahu. Nové sestavení má 593 veřejných dokumentů kvůli již schválenému pondělnímu článku, nikoli nové katalogové URL.

V Chrome ověřen desktop a mobil 390/320 px: hledání VZV a světlo, stav bez výsledku a vymazání hledání, zachované rozbalení kategorie přes kotvu, zkrácené menu a jeho ovládání Enter/Escape s návratem fokusu, cesta menu → vibrace → předvyplněná poptávka, článek VZV → služba a téma formuláře, dvě vzorové služby, referenční odkazy včetně staré emisní kotvy a anglická verze katalogu. U kontrolovaných pohledů bez vodorovného přetékání. Formulář nebyl odeslán. Dočasné rozměry prohlížeče vráceny. Lokální náhled: `http://127.0.0.1:3137/sluzby/`.

Pondělní článek o bezpečnostních listech se v novém lokálním sestavení posuzuje podle již schváleného termínu 26. 10. Není tímto znovu odborně schvalován ani ručně publikován; produkční plánovač a jeho oprávnění se nemění.

## Vyhodnocení a další hranice

Zachovat stávající vyhodnocovací okno vydání z 21. 10. a nepřipisovat jeho dosavadní výsledky tomuto neveřejnému návrhu. Případné budoucí vydání zaznamenat jako samostatnou událost; porovnávat stejně dlouhá úplná období s rozdělením zařízení a služeb. Primárně měřit úspěšné odeslání a firmou potvrzenou vhodnost zakázky, nikoli počet kliků.

Pro jmenované klientské výroky a nové veřejné příklady je nutné konkrétní oprávnění a kontrola dokumentace; nejsou doplňovány z domněnek. Sedmnáct zbývajících známých anglických těl v německé poradně je oddělený nedokončený obsahový úkol, ne oprava provedená tímto UX balíkem. České komerční titulky hlukové studie a homepage se nyní znovu nepřepisují.

Rollback tohoto balíku znamená vrácení dotčených navigačních komponent, katalogového helperu a stylů, dvou prezentačních větví služeb, pořadí reference, článkového odkazu a řazení souvisejících služeb; nezávislá vrácená mapa a tři překlady nemusí být rušeny. Bez nových závislostí či změny tarifu.
