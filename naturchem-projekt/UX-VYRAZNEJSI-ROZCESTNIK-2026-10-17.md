# Výraznější situační rozcestník — lokální návrh 17. 10. 2026

Výchozí produkční verze: `2989d4e`. Vlastník po jejím nasazení upozornil, že tři bílé situační karty pod „Co potřebujete vyřešit?“ zanikají. Tento navazující návrh je pouze lokální; předchozí souhlas s nasazením se na něj automaticky nevztahuje.

## Pozorování a hypotéza

Dosavadní karty mají bílý podklad, tenký světlý okraj, názvy 18 px a malou samostatnou šipku. Na bílé homepage mají nízkou vizuální prioritu. Jde o kvalitativní zjištění z vizuální revize a zpětné vazby vlastníka, nikoli o naměřenou míru přehlédnutí nebo důkaz, že právě tyto tři služby mají nejvyšší poptávku.

Hypotéza: zřetelnější tři cesty umožní návštěvníkovi, který zná svou situaci, snáze vybrat odpovídající podklady a následně vytvořit kvalifikovanou poptávku.

## Návrh

- Tři sytější tlumené barevné plochy z dosavadní zelené, modré a okrové palety. Stejná vizuální váha všech tří cest, bez nepodložené značky „nejhledanější“ nebo pořadových čísel.
- Větší bílé názvy 22 px na PC / 21 px na telefonu, zřetelnější ikony a kruhové šipky. Podtržený krátký odkaz, celá plocha karty nadále funguje jako jeden běžný odkaz.
- Viditelný hover a keyboard focus, bez pohybových efektů, nových fotografií, fontů nebo knihoven. Kontrast bílého textu je automaticky kontrolován na všech šesti normálních/aktivních barevných podkladech (alespoň 4,5 : 1).
- Přizpůsobení tří sloupců užšímu PC/tabletu a jednosloupcové verzi telefonu; bez skrývání názvů nebo nečitelných zkratek.
- Názvy, doplňkové texty a cíle tří odkazů beze změny. Žádná další poptávková tlačítka, nové odborné tvrzení ani změna SEO obsahu.

## Měření a ochrany

Dosud neměly tyto tři karty vlastní `select_service` umístění. Nový identifikátor `home_situation_paths` na společném navigačním kontejneru využívá již existující delegovanou analytiku. Zaznamenává pouze veřejnou cestu a umístění, bez parametrů dotazu nebo obsahu formuláře a pouze se statistickým souhlasem. Starší umístění šesti služeb a všech dalších odkazů zůstávají funkční. Kliknutí není `generate_lead`.

Před případným schváleným nasazením: `npm run verify`, relevantní SEO smoke, kontrola desktopu / tabletu / mobilu, kontrastu a zaostření klávesnicí. Zaznamenat výsledky lokálního ověření. Po nasazení teprve zahájit měření těchto kliků; neexistující historická data nepovažovat za nulové kliky. Porovnávat úspěšné poptávky a návazné zakázky při dostatečném vzorku, ne samotnou četnost kliknutí. Předchozí změna polohy rozcestníku byla nasazena tentýž den, proto nelze její vliv spolehlivě oddělit od zvýraznění barev.

Žádný commit, push nebo produkční deployment není součástí této lokální přípravy. Adresy, canonical, hreflang, JSON-LD, odborné texty i publikační pravidla se nemění.

## Výsledek lokálního ověření

- `npm run verify`: PASS, včetně sestavení a všech obsahových, výkonových a konverzních kontrol. Pouze 9 dříve existujících upozornění lintu, bez chyb.
- Po sjednocení zarovnání nadpisů a krátkých CTA ještě samostatné `npm run build`: PASS se všemi kontrolami sestavených stránek.
- Všechny původní interní cíle, metadata 194 českých stránek a správná struktura 582 sitemap adres zachovány. HTTP smoke 584 základních kontrol + 302 interních odkazů bez chyby.
- Kontrast bílého textu na všech šesti použitých barvách je 5,62–8,79 : 1. Klávesová navigace správně přechází mezi kartami a zobrazuje 3px focus outline.
- Vizuálně ověřeno PC (obsah 1905 px), tablet (1009 a 753 px), telefon (375 a 305 px), včetně dlouhých německých názvů. Bez horizontálního přetékání. PC karty mají shodnou výšku 136 px; na úzkém telefonu 114 px a čitelné 21px názvy.
- Tři cesty mají beze změny názvy i cíle. Ověřeno rozlišení nové analytické pozice, odstranění query/hash z události, statistický souhlas a zachování ostatních umístění. Žádná reálná poptávka nebyla odeslána.
- Český homepage HTML má proti výchozímu sestavení navíc pouze 98 B (133 254 → 133 352 B), stávající rozpočet nebyl zvyšován. Žádný nový obrázek, font, externí tracker nebo knihovna.
- Aktualizován a znovu načten také existující náhled v aplikaci: `http://127.0.0.1:3128/#home-needs-heading`. Dočasné nastavení velikosti prohlížeče vráceno.

Závěr: návrh připraven k vizuálnímu posouzení vlastníkem. Přínos pro skutečné poptávky zatím nelze považovat za změřený; tato nová varianta zůstává pouze lokálně.
