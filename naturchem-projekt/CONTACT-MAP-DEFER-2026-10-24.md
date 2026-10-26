# Odložená mapa při přímé poptávce — lokální kontrola, 24. 10. 2026

## Důvod a výchozí stav

Navazuje na vlastníkem schválený návrat přepínatelné mapy do úvodu Kontaktu, nikoli na nový redesign. Při mobilním příchodu přímo na `#poptavkovy-formular` zůstalo z mapy pod horní lištou pouze 54 px. Původní lokální odložení přesto připojilo mapový skript, stylesheet a čtyři dlaždice: krátký nebo minulý průnik bloku do výhledu stačil k aktivaci. Jde o pozorované uzly DOM, ne naměřený objem přenosu či vyúčtování Vercelu.

## Změna

- První aktivace čeká na načtení dokumentu, volnější okamžik prohlížeče a 600 ms od posledního posunu. Poté znovu ověří skutečnou viditelnou část mapy, ne jen dřívější událost pozorovatele.
- Tenký zbytek mapy u horního okraje nespouští externí podklady. Podmínka se přizpůsobuje výšce bloku a velmi malé obrazovce.
- Když se návštěvník vrátí nahoru, mapa se sama načte. Jednou aktivovaná mapa zůstává připojená i při dalším posouvání; neztrácí se vybraná provozovna.
- Dosavadní souhlas s cookies zůstává nutný. Odmítnutí nebo odvolání souhlasu vrací adresní náhradu. Již stažené externí soubory samozřejmě nelze tímto krokem stáhnout zpět.
- Žádná změna textů, kontaktních údajů, formuláře, jeho doručování, definice `generate_lead`, indexace nebo vzhledu karet.

## Hypotéza a měření

Návštěvník přecházející ze služby rovnou k zadání nebude současně načítat mapu, kterou právě nepotřebuje. To je technicky ověřené omezení zbytečné práce, nikoli prokázaný nárůst poptávek. Po případném schváleném nasazení porovnat stejně dlouhá úplná období, mobil a desktop, skutečné úspěšné poptávky a návazné potvrzení firmou. Výsledek nelze připsat samostatně této úpravě při souběžných změnách.

## Ověření

- Úplné `npm run verify`, včetně sestavení a následných kontrol: úspěšné. Devět dosavadních upozornění lint, žádná nová chyba.
- GET smoke: 585 adres a 302 dalších interních odkazů, celkem 887 kontrol bez chyby; bez odeslání formuláře.
- Nový deterministický test skutečného aktivátoru: načtení dokumentu, idle i náhrada, krátký průnik, průběžné posouvání, zastaralá událost pozorovatele, pozadí prohlížeče, návrat do výhledu, malé obrazovky a úklid odložených úloh. Samostatně testováno napojení na souhlas a existující mapové poskytovatele.
- Normalizované zákaznické HTML všech tří Kontaktů je přesně shodné s předchozím lokálním stavem s vrácenou mapou. Srovnání vůči původní produkční baseline zachovalo 592 veřejných adres, SEO údaje a celé formuláře.
- Lokální model počátečního gzip JS Kontaktu: 225 050 → 225 312 B, tedy +262 B; CSS beze změny. Cena řídicí logiky není nulová. Nejde o měření Lighthouse ani přenos externích dlaždic.
- Chrome, mobil 390 px: přímý formulář po ustálení bez vloženého mapového skriptu, stylesheetu a dlaždic. Po návratu k mapě automatická aktivace a přepínání na Prahu 5; jedna instance, výběr se zachovává.
- Skutečná cesta z hlavního tlačítka služby Měření emisí do formuláře zachovala zvolenou službu. Na mobilu nevznikl vodorovný přesah; externí mapa při přímém zadání nenačtena. Pole nebyla vyplněna ani odeslána. Odvolání místního souhlasu mapu odpojilo; původní místní volba byla obnovena. Produkční cookies beze změny.

Neslibuje skóre 100, zlepšení pozic, vyřešení kvót Vercelu ani růst kvalifikovaných poptávek bez následných dat.

## Stav a návrat

Pouze lokálně v `codex/article-topic-quality-2026-10-24`, náhled `http://127.0.0.1:3137/kontakt/`. Bez commitu, push, merge, CMS publikace či produkčního nasazení. Změny Cursoru v hlavní kopii nedotčeny. Samostatný rollback vrátí předchozí podmínku aktivace v `ContactPageMedia`, odstraní pomocný aktivátor a jeho test z ověřovacího řetězce; vrácení mapy nahoru ani opravy článků není nutné rušit.
