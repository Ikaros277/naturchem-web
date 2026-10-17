# Drobné vizuální doladění — 17. 10. 2026

Stav: vlastník 17. 10. 2026 výslovně schválil produkční nasazení lokálního náhledu na portu 3128. Tento balíček je připraven nad produkčním commitem `6c104fa`; obsahuje pouze tři níže popsaná vizuální doladění a jejich kontroly. Příprava i commit probíhají v oddělené větvi `codex/serp-commercial-evidence-2026-10-14`.

## Pozorovaný výchozí stav

- Odkazy „Měření pro kolaudaci“, „Kategorizace prací“ a „Dokumentace k projektu“ jsou až za katalogem šesti služeb, segmenty zákazníků a partnerskou poptávkou.
- Panel „Co nám poslat“ u měření osvětlení měří při šířce obsahu 375 px celkem 639 px. Velkou část zabírají oddělená ikona a nadpis, odsazení a mezery mezi položkami.
- Ilustrace článků o změně IPPC a EU ETS/GHG jsou složité koláže. V malých náhledech je sdělení nejasné a grafika obsahuje drobné vysvětlující prvky.

## Lokální změna a hypotéza

1. Tři existující situační odkazy přesunout před katalog služeb, za zákaznická loga. Neopakovat je v dolní části stránky. Hypotéza: návštěvník, který zná svůj úkol, ale ne název služby, rychleji zvolí správnou cestu.
2. Pouze na mobilu spojit ikonu a nadpis panelu do jednoho řádku, snížit odsazení a ponechat všechny texty, dokumenty i přímou poptávku viditelné. Nezkracovat odborný obsah ani jej neskrývat dalším kliknutím.
3. U dvou článků použít již schválené, skutečné fotografie průmyslového objektu a technologie kotelny bez přidaných vysvětlivek. Kontrola originálů proběhla v plné velikosti. Jde o tematické ilustrace, nikoli tvrzení, že konkrétní vyobrazené zařízení podléhá IPPC nebo EU ETS. Každý z těchto obrázků používá jen jeden článek; stejná výměna platí pro CS/EN/DE. Staré veřejné URL obrázků zůstávají dostupné a soubory se nepřepisují.

## Ochrana SEO, výkonu a měření

- Beze změny adres, titulů, H1, canonical, hreflang, redirektů a odborných textů. Article schema a Open Graph přebírají odpovídající novou fotografii.
- Existující odkazy, šest služeb, tři ilustrace studií, kontaktní předvyplnění a analytické atributy zůstávají zachované.
- Žádný nový klientský JavaScript, externí skript, závislost ani runtime transformace obrázků. Fotografické náhledy mají statické WebP/AVIF varianty.
- Dvanáct připravených článků zůstává v režimu draft. Tato úprava neslouží k jejich publikaci.
- `npm run verify`: PASS (včetně sestavení, ochrany 337 neměnných assetů, čtení článků, kontaktů a výkonových rozpočtů). Pouze 9 již existujících upozornění lintu, bez chyb.
- SEO kontrola sestavených 582 indexovaných adres: správný canonical, hreflang a jediný H1; všechny dosavadní interní cíle zachované. U 194 českých stránek beze změny title/H1/canonical. U všech 6 jazykových variant dotčených článků se změnil pouze obrázek, nikoli text či další údaje.
- Místní HTTP smoke: 584 základních kontrol a 302 navazujících interních odkazů bez chyby; routing, 404/noindex a validace kontaktu bez chyby. Žádná testovací poptávka nebyla odeslána.
- Mobilní panel osvětlení: při šířce obsahu 375 px výška 639 → 488 px, úspora 151 px (24 %); shoda celého textu a odkazu před/po. Při šířce obsahu 305 px výška 554 px, tlačítko 49 px a žádné vodorovné přetékání.
- Rozcestník homepage zkontrolován na šířkách viewportu 320 a 390 px i v desktopu. Všechny tři situační cesty jsou před nabídkou služeb a bez duplicity. Drobné zvýšení kontrastu ikony panelu bylo ověřeno v závěrečném sestavení i mobilním náhledu. Oba nové obrázky se správně načítají také v detailu článků.
- Finální schválený náhled: `http://127.0.0.1:3128/`. Po závěrečném barevném doladění znovu proběhlo úspěšné `npm run build` včetně všech kontrol sestavených stránek. Před vydáním se znovu spouští `npm run verify`; výsledek produkčního ověření se zapíše do soukromého výstupního protokolu, aby jeho doplnění nespustilo druhé nasazení.

## Vydání a návrat

Výchozí GitHub main byl znovu ověřen na `6c104fa10650aa9240c01c106d8833678680830a`. Schválen je jeden běžný fast-forward push tohoto balíčku do main a jeden produkční deployment přes stávající Git integraci Vercelu. Samostatný push pracovní větve by vytvářel nadbytečný preview deployment, proto se neprovádí. Žádný force push, nový tarif, změna DNS/proměnných ani testovací poptávka.

Bod návratu: předchozí produkční commit `6c104fa10650aa9240c01c106d8833678680830a`, deployment `DtYewLzVA8WjyvdHoFVsYTMrtYv7` v projektu `web-naturchem`. Původní deployment i všechny dříve publikované soubory zůstávají zachované. Při regresi lze vrátit produkční doménu na předchozí deployment nebo připravit nedestruktivní revert. Ostatní worktree a původní Cursor checkout se nemění.

## Vyhodnocení po nasazení

Změna zatím nemá změřený konverzní výsledek. Po nasazení zaznamenat datum a sledovat `select_service`, `form_start` a hlavně úspěšný `generate_lead` odděleně podle zařízení a vstupní stránky. Po dostatečném vzorku porovnat stejně dlouhá úplná období; vzhledem k nedávným souběžným úpravám nepřisuzovat případný růst jen této drobné změně. Nejde o příslib lepší pozice ve vyhledávání.
