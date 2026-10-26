# Obnovení mapy v úvodu Kontaktu — lokální změna, 24. 10. 2026

## Zadání a výchozí stav

Vlastník výslovně schválil návrat přepínatelné mapy provozoven nahoru při zachování odloženého načtení mapových podkladů a nastavení cookies. Ve výchozím kódu produkce `6e87fdd` je mapa až dole v rozbalovacím bloku u provozoven; úvod obsahuje telefon a e-mail. Přesun dolů vznikl dřívější úpravou `39d9b63`.

## Lokální řešení

- Jedna mapa v úvodním bloku vedle přímých kontaktů, na úzké obrazovce pod nimi; odstraněna druhá cesta k duplicitní mapě dole.
- Před souhlasem se stejnou dosavadní kategorií cookies zůstávají dostupné všechny tři adresy, externí odkazy na navigaci a otevření nastavení cookies. Žádný automatický souhlas ani změna jeho kategorií.
- Dynamický modul mapy se připojí teprve po souhlasu, vstupu bloku do zorného pole a odložené úloze po načtení dokumentu. Externí mapové skripty a podklady nejsou součástí prvního serverového HTML.
- Vyhrazená výška mapy brání posunu formuláře při přechodu z adres na mapu. Nevrací se dekorativní fotografie ani její přednačítání.
- Přepínání tří provozoven funguje v existující variantě Leaflet i alternativě s Google Maps. Rychlá volba ještě před dokončením načítání se zachová.
- Běžné kolečko myši neposouvá zoom mapy; Leaflet respektuje omezení animací. Při chybě načítání knihovny zůstávají adresy namísto prázdné plochy.

## Hypotéza a měření

Mapa pomůže návštěvníkům hledajícím konkrétní provozovnu, aniž by museli hledat skrytý blok dole. Jde o obnovu uživatelem požadovaného prvku, nikoli o prokázané zvýšení konverzí. Nemění se úspěšné odeslání formuláře, parametry událostí ani definice `generate_lead`. Po případném schváleném nasazení sledovat dokončené poptávky a kontaktové akce, rozděleně desktop/mobil; výsledky posuzovat v kontextu souběžných změn.

## Ochrany a kontrola

Beze změny zůstávají adresy URL, canonical, hreflang, metadata, JSON-LD, kontaktní údaje, pole a doručování formuláře. Nový offline test používá skutečné komponenty se simulovanými prohlížečovými rozhraními: kombinace souhlasu/viditelnosti/idle, odvolání souhlasu, náhradní časovače a úklid, tři jazykové verze adres, přepínání obou poskytovatelů, předčasný klik a nedostupné podklady. Žádný skutečný formulář ani analytická událost se při něm neodesílají.

Finální úplné `npm run verify` včetně sestavení a všech následných kontrol skončilo 0. Devět známých upozornění lint, žádná nová chyba. GET smoke: 585 adres a 302 dalších interních odkazů, bez chyb. Srovnání 592 veřejných HTML potvrdilo zachování SEO údajů a přesně stejné celé formuláře všech tří jazyků; ostatních 197 českých dokumentů má shodné normalizované viditelné HTML. Předchozí článkové změny se vyhodnocují samostatně.

V Chrome ověřen desktop, mobil 390 px a úzký mobil 320 px: jedna živá mapa, správná aktivní adresa při přepnutí, žádný vodorovný přesah stránky a 44px ovládací tlačítka se zalamováním názvů. Při odmítnutých cookies nebyl vložen žádný mapový skript, stylesheet ani dlaždice. Povolení pouze statistiky v lokálním náhledu mapu načetlo. Produkční volby cookies zůstaly nedotčené. Náhled běží na `http://127.0.0.1:3137/kontakt/`.

Odložení externích podkladů není tvrzení o nulovém výkonovém dopadu mapy po souhlasu. Lokální model prvního gzip přenosu HTML/CSS/JS Kontaktu vzrostl přibližně o 2,5 kB; nejde o PageSpeed, skutečný LCP ani účtování Vercelu. Mapa na ostatní stránky nepřidává své podklady.

## Stav a návrat

Následná kontrola 24. 10. upřesnila odložení první aktivace při přímém příchodu k poptávce; původní vizuální návrat mapy zůstává zachovaný. Samostatná baseline, nové testy a limity měření jsou v [CONTACT-MAP-DEFER-2026-10-24.md](CONTACT-MAP-DEFER-2026-10-24.md).

Zatím lokálně v `codex/article-topic-quality-2026-10-24`, vedle již rozpracovaných oprav článků; nejsou přepsány změny Cursoru v hlavní pracovní kopii. Bez commitu, push, merge a produkčního nasazení. Případný rollback této samostatné úpravy vrátí úvod bez mapy a původní spodní rozbalovací blok; ostatní opravy článků nemusí měnit.
