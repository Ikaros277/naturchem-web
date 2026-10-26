# Výraznější katalog služeb — místní návrh 26. 10. 2026

## Zadání, baseline a hypotéza

Vlastník odmítl nevýrazná tlačítka a karty v katalogu. Po předchozím odstranění hledání žádá přehlednější vizuální vedení, nikoli další text nebo rozšíření nabídky. V lokálním prohlížeči byla hlavní navigace katalogu téměř bílá s tenkou barevnou hranou; běžné služby měly bílé tělo, fotografii přecházející do bílé a drobnou textovou akci. První zelená karta při pozorování odpovídala hoveru, ne trvalému zvýraznění všech služeb.

Hypotéza: důslednější barevné rozlišení oblastí a trvale viditelný proklik urychlí rozpoznání vhodné služby. Nejde o naměřené zvýšení poptávek ani o nový SEO ranking experiment. Obchodní pořadí služeb zůstává podle potvrzených priorit vlastníka; čerstvá GA4 data nebyla tímto grafickým krokem získána.

## Místní úprava

- Tři hlavní oblasti mají syté zelené, modré a hnědozlaté pozadí, bílý čitelný text a směrové šipky. Podskupiny dokumentace jsou jasně vymezené odkazy v téže ploše. Barva doplňuje názvy a ikony, nenahrazuje je.
- Těla karet jednotlivých služeb jsou trvale podbarvená podle oblasti, nikoli pouze na hover. Ponechány původní nadpisy, popisy, pořadí i celé karty jako jediné nativní odkazy. Vizuální akce Zobrazit službu je plná kontrastní plocha, ne nový vnořený button nebo další CTA k formuláři.
- Fotografie se již nerozpouštějí do bílé; název a popis jsou na jednolité ploše pod fotografií, nikoli přes složité pozadí. Použity stávající unikátní statické WebP a jejich správné sizes.
- Kolaudace a nová hala dostaly vlastní dosud připravené jedinečné náhledy. Nejde o kopie jiných služeb nebo nový generovaný obraz. Obrázek je dekorativní a popis služby zůstává textem odkazu.
- Mobilní náhled 96 px; na nejmenších telefonech 80 px, aby zůstalo místo pro celý název. Popis skupiny má celou šířku, vedle názvu zůstávají symbol a rozbalení. Při kontrole 320 px odstraněno nežádoucí rozdělení slova „pracovního“.
- Hledání zůstává odstraněné. Nepřidán marketingový text, javascriptová knihovna, závislost, on-demand transformace obrázků, nové URL nebo nové sledování.

## Ochrany a ověření

Rozšířená kontrola katalogu ověřuje všech 27 českých /25 anglických a německých cílů, unikátnost i skutečnou přítomnost jejich náhledů v HTML a kontrast podle deklarovaných CSS barev. U malého textu a plných akcí požaduje poměr nejméně 4,5:1; u kategorií zahrnuje také nejjasnější dekorativní a hover vrstvu. Tento konkrétní test není tvrzení, že celý web prošel kompletním WCAG auditem. První test odhalil slabší barvu vedlejšího textu a vedl k její úpravě na bílou.

Vývojový náhled prověřen na desktopu a 390/320 px. Finální `npm run verify` včetně build a postbuild dokončen s kódem 0 (běh 38359). Devět dřívějších lint upozornění, nula lint chyb; dřívější metadataBase upozornění se tímto neoznačuje za vyřešené. Lokální GET smoke: 586 adres +303 dalších interních odkazů, nula selhání (běh 48359). `git diff --check` bez chyby. Finální sestavená verze znovu vizuálně ověřena: syté oblasti, plné akce a fotografie se skutečně vykreslují; Enter otevírá kategorii a zachovává kotvu. Mobil 390 px bez přetékání a s celými názvy; 320 px prověřeno ve vývojovém náhledu po posledním CSS doladění. Dočasný viewport resetován. Náhled běží na `http://127.0.0.1:3137/sluzby/`; vývojový server 3138 ukončen.

Srovnání výsledného HTML se zachovanou veřejnou základnou 6e87fdd z 23. 10.: všech 592 původních veřejných dokumentů existuje, žádná změna českých title/meta/canonical/hreflang, formulářů či H1 služeb. Dvě starší německé změny popisů patří dřívějším překladům, ne této grafice. Veřejný rozsah 593 stránek zohledňuje již schválený pondělní článek; nové katalogové adresy nevznikly. Hledání není ani v jednom z 624 vygenerovaných lokalizovaných HTML včetně přesměrovacích/budoucích zástupných cest.

Hlavní pracovní kopie Cursoru zachována, práce pouze ve stávající samostatné větvi. Žádný commit, push, merge nebo produkční deployment není součástí tohoto zadání.

## Stav posledního UX auditu, ne tvrzení o dokončení celého webu

Lokálně připravené: oddělení situací a konkrétních služeb; kratší mobilní menu; prioritní pořadí po potvrzení vlastníkem; přesnější související služby a VZV poptávka; srozumitelný vstup Reference a fotografické realizace před logy; oprava dolní meze počítadel; dva prototypy služeb bez opakovaných seznamů. Textové hledání bylo na pokyn vlastníka z původního doporučení vyřazeno a nevydává se za chybějící krok.

Není dokončené: plošné převedení ostatních služeb podle schválených prototypů, úkolový test se skutečnými B2B návštěvníky, tři výrazněji propracované veřejně schválené případové studie a zbývajících 17 německých článků se známým anglickým tělem. Homepage se nepřepisuje přes souběžné změny Cursoru ani bez vyhodnocení. Nové klientské výroky či jména se nevymýšlejí. Místní připravenost není produkční nasazení nebo důkaz konverzního výsledku.

Po případném schváleném vydání zaznamenat datum a respektovat dosavadní vyhodnocovací okno. Hodnotit `generate_lead`, zvolenou službu a obchodní vhodnost; výběr služby či klik není dokončená poptávka. Při malém počtu událostí nevyhlašovat vítěznou variantu. Rollback grafiky je omezen na komponentu katalogu, náhledové sizes a příslušné styly; nezávislé úpravy mapy, poradny a navigace není nutné rušit.
