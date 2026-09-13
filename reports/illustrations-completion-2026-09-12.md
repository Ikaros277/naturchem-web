# Náhrada ilustračních obrázků — 11.–12. 9. 2026

Stav: dokončeno pouze lokálně, bez commitu, pushe či nasazení. Náhled: http://127.0.0.1:3108/.

## Rozsah a účel

Před změnou nemělo 36 ze 71 českých článků vlastní přiřazený obrázek; překlady používaly stejné tematické náhrady. Dvanáct tematických klíčů odkazovalo na lokální stock JPG. Typická zakázka „pyrolýza kalů“ přebírala obrázek odvětví.

Vzniklo 37 samostatných ilustrací pomocí vestavěného image_gen: 36 pro články a jedna pro pyrolýzu kalů. Celkem 100 přiřazení heroImage (36 CS, 32 EN, 32 DE). Nyní má každý ze 71 CS / 56 EN / 56 DE článků vlastní ilustraci v rámci svého jazyka; překlady téhož článku sdílejí odpovídající obrázek. Zachováno všech 83 dříve explicitně přiřazených obrázků článků.

Ilustrace mají usnadnit rozlišení témat a navázat na existující průmyslový vizuální styl. Nejde o autentické fotografie zaměstnanců či realizovaných zakázek NATURCHEM. Skutečné fotografie týmu, produktů, loga a tři schválené kreslené ilustrace na homepage se neměnily. Historické soubory zůstávají dostupné kvůli cache a starým URL, ale aktivní stock odkazy byly přepojeny.

## Technické řešení

- 74 předem připravených WebP: 1600 × 900 a 640 × 360, dohromady 5 140 116 bajtů.
- Náhledy 16–56 kB; větší obrázky 58–333 kB. Responsivní srcset, rozměry, lazy loading mimo úvodní obrázek.
- Nové obrázky nevyužívají dynamické Next Image transformace. Nejde o záruku celkových limitů Vercelu.
- Opravena zjištěná stará cache seznamu článků: oba persistentní klíče nyní obsahují hash článkových souborů, generovaný při prebuild/preverify. Změna pouze obrázku tak při dalším sestavení zneplatní stará data. Žádné periodické ISR.
- URL, data vydání, texty a ostatní metadata článků zachovány. Sociální obrázky a JSON-LD využívají nové přiřazení.

## Ověření

- npm run verify: úspěšné, včetně sestavení 559 statických stránek; 16 existujících lint varování, žádná chyba. Existující upozornění metadataBase beze změny.
- Cílený lint doplněných souborů: bez chyb.
- verify_generated_illustrations.js --preservation --preview http://127.0.0.1:3108: 37 unikátních ilustrací, 74 dostupných souborů, 100 funkčních článkových stránek včetně sociálních obrázků, správné obrázky na homepage.
- Hash kontrola všech 183 článkových textů a 257 chráněných souborů: beze změny.
- B2B preview: 24 CS/EN/DE stránek, H1, canonicals, JSON-LD, jazyk a odkazy.
- SEO smoke: 502 sitemap URL a 227 dalších interních odkazů, žádná chyba; routing test bez chyb.
- Vizuálně ověřena homepage, poradna a detail článku na desktopu a v šířce 390 px; kontrolované obrázky načtené, bez vodorovného přetékání.
- Dotazník spokojenosti zůstává v patičce ve sloupci Společnost, pod Častými dotazy; ověřen na desktopu i mobilu.

## Podklady

- Prompty, přiřazení a výchozí kontrolní součty: [generated-illustrations-2026-09-11.json](C:/Users/natur/Documents/Codex/2026-08-12/m/outputs/naturchem-b2b-local-2026-09-09/reports/generated-illustrations-2026-09-11.json).
- Vybrané zdrojové PNG a cesty k WebP: [generated-illustration-outputs-2026-09-11.json](C:/Users/natur/Documents/Codex/2026-08-12/m/outputs/naturchem-b2b-local-2026-09-09/reports/generated-illustration-outputs-2026-09-11.json).
- Finální soubory: [public/hero/generated-2026-09](C:/Users/natur/Documents/Codex/2026-08-12/m/outputs/naturchem-b2b-local-2026-09-09/public/hero/generated-2026-09).

Očekávaný přínos pro poptávky je hypotéza, nikoliv naměřený SEO výsledek. Po případném schváleném nasazení porovnat prokliky z homepage/poradny k relevantním službám a skutečně odeslané poptávky generate_lead; žádné nové sledovací události nebyly přidány. Jednorázový přepínač --preservation slouží jen k tomuto auditu, nemá blokovat budoucí schválené redakční úpravy.
