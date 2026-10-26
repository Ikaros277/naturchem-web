# Německý obsah a stabilní adresy kapitol — 24. 10. 2026

## Stav a konverzní účel

Lokální navazující etapa ve větvi `codex/article-topic-quality-2026-10-24`, základ produkce `6e87fdd`. Po prvním článku jsou nově připraveny i překlady mikroklimatu a chemických látek na pracovišti: celkem 3 z 20 potvrzených anglických těl, dalších 17 zůstává k opravě. Produkce dosud obsahuje původní texty. Bez commitu, push, CMS publikace nebo deploymentu. Níže je zachován protokol první etapy; rozsah, primární zdroje a stav navazujících dvou textů jsou v [ARTICLE-WORKPLACE-DE-2026-10-24.md](ARTICLE-WORKPLACE-DE-2026-10-24.md). Mapa Kontaktu je samostatná pozdější schválená lokální změna.

Cílem je, aby německy čtoucí investor nebo odborník připravující provoz v Česku dostal srozumitelný přehled podkladů a mohl poslat odpovídající zadání. Nejde o rozšiřování jazykových URL ani tvrzení o již dosaženém růstu návštěvnosti nebo zakázek. Česká komerční návštěvnost zůstává prioritou.

## Připravený překlad

Článek `/de/poradna/co-poslat-pro-rychle-posouzeni-zameru/` měl německý titulek a úvod, ale anglické kapitoly, tabulky i celý hlavní text. Nyní má německé tělo včetně všech 14 kapitol a šesti tabulek, stručnější přirozený úvod a jeden navazující odkaz na německý poptávkový formulář. V úvodu je výslovně řečeno, že jde o záměry v Česku.

Titulek, slug, původní datum vydání, autor, téma a obrázek zůstávají. Nebyla přidána nová čísla limitů, právní lhůty, ceny, měřicí postupy, reference či garance výsledku. Obecný přehled není vydáván za úplný seznam povinných příloh. Kategorická tvrzení typu „kapacita sama určuje“ jsou přeložena věcně s odpovídajícím rozlišením dalších podmínek. Nejde o nový úplný právní audit starého článku.

Praktický rozsah vstupů byl při kontrole porovnán s primárními podklady: přehledem ČHMÚ ke zpracování rozptylové studie a zveřejněnými náležitostmi oznámení EIA na portálu ministerstva. Soukromý ověřovací podklad obsahuje odkazy a hranice kontroly. Do článku se nepřebíraly prahové hodnoty, paragrafy, výsledky jiné zakázky ani tvrzení o oprávněních ČHMÚ jako oprávnění NATURCHEM.

## Zachování odkazů na kapitoly

Přeložením H2 se obvykle změní automaticky vytvořený fragment URL. Aby staré odkazy nepřestaly fungovat, článek nově může mít volitelné `headingIds`: mapu viditelného názvu kapitoly na její dosavadní `kapitola-*` ID.

- Hodnoty se ověřují při čtení článku; nepřijímá se HTML, libovolné atributy ani ID mimo vyhrazený formát.
- Duplicitní názvy/ID a mapování na neexistující kapitolu odmítá kontrola.
- Obsah článku používá nové německé názvy, jeho odkazy míří na všech 14 původních ID.
- Články bez mapy mají původní chování a stejné adresy kapitol.
- Zachován jeden serverový Markdown parse; žádný nový balíček, klientský skript, dodatečný síťový požadavek nebo interaktivní widget.

Regresní testy pokrývají bezpečné ID, přeložený název, neplatná data, duplicity, neexistující kapitolu a skutečný přeložený článek se všemi 14 starými fragmenty. Odborná formulace a kvalita jazyka nejsou dokazovány samotným zeleným testem.

## Ověření aktuálního stavu

- Kompletní `npm run verify` po překladu a zavedení stabilních kapitol: PASS včetně buildu a vykreslených kontrol. Devět starších lint warnings, žádná chyba; starší metadataBase upozornění zůstávají zaznamenána.
- Porovnání s immutable baseline stejného produkčního SHA: stejných 592 veřejných HTML, stejné H1 a indexační pokyny; českých 198 HTML má stejný normalizovaný obsah. U jediného přeloženého článku je záměrně odlišný německý popis v metadatech/Article; identita, datum, canonical a hreflang jsou zachovány. Dřívější oprava 113 témat EN/DE zůstává odděleným zamýšleným rozdílem.
- Přeložený článek: všech 14 původních ID kapitol a všech šest tabulek zachováno ve skutečně sestaveném HTML. Proklik starého fragmentu v prohlížeči skočil na odpovídající kapitolu.
- Lokální GET smoke znovu 585 URL a 302 dalších interních odkazů bez chyby. Žádné odeslání formuláře, analytického testovacího leadu či e-mailu.
- Model přenosu přeložené stránky: stejné JS/CSS, gzip HTML 35 085 → 34 972 B. Rozdíl 113 B není naměřené zrychlení ani PageSpeed skóre.
- Mobilní kontrola při nastavení viewportu 390 × 844: původní německý DOM, šest tabulek, šířka dokumentu 375 px při dostupném viewportu 390 px; bez vodorovného přetékání celé stránky. Původní velikost okna poté obnovena. Chrome automaticky překládá část později načtených náhledů, proto byl jazyk posouzen také ze zdroje a sestaveného HTML, ne jen z přeloženého DOM.
- Žádné změny českých/anglických zdrojů článků, schváleného pondělního plánu, formulářového API, sledování, tarifů, DNS nebo mapy na kontaktu.

## Další postup

Přeložit zbývající potvrzené anglické texty s kontrolou terminologie a zachováním existujících fragmentů. Případné zjištěné právní nebo odborné nepřesnosti nepřenášet automaticky do nového jazyka; před publikací je samostatně ověřit a nejisté tvrzení nepublikovat bez odborného potvrzení.

Pro případné společné vydání je potřeba nový výslovný souhlas, kontrola aktuálního main/produkce, diffu a testů. Neprovádět samostatný produkční deployment kvůli každému jednotlivému překladu. Rollback má vrátit jen izolované změny a odvozené indexy, nikoli rušit jazykové URL nebo již naplánované schválené články. Zatím nevzniká nová produkční fáze měření.
