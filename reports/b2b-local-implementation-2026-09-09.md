# NATURCHEM — lokální implementace auditu B2B / SEO / GEO

Datum: 9. 9. 2026. Větev: `codex/b2b-local-2026-09-09`. Výchozí revize: `9a6fa6faef7c31981dc1bf74b3acabf7b9fcec0d`.

## Stav

Změny jsou pouze v samostatném pracovním stromu. Neproběhl commit, push, merge, nasazení, změna DNS, CMS ani nastavení účtů. Rozpracované soubory v původním Cursor projektu zůstaly nedotčené.

Náhled sestavené aplikace: [http://127.0.0.1:3108/](http://127.0.0.1:3108/).

## Co se změnilo a proč

### Vizuální revize podle zpětné vazby z 9. 9.

Uživatel označil první lokální návrh za textově přeplněný a vizuálně nevýrazný. Následující úprava nahrazuje původní řešení homepage:

- Odstraněny celé homepage sekce „Měření a podklady v praxi“ a „Průběh zakázky“. Reference a odborné detaily zůstávají na příslušných stránkách.
- Tři fotografické vstupy na měření emisí, hluku a pracovního prostředí. Popisy zkráceny na věcné heslovité řádky.
- Tři odlišné technické SVG ilustrace u studií a dokumentace: akustické pole, proudění ovzduší a projektové podklady. Jde o dekorativní motivy, nikoliv o skutečné výpočty nebo výsledky zakázek.
- Kontrastní blok zákaznických situací: tři samostatné volby s ikonami a směrovými šipkami, bez číslování a vysvětlujících odstavců.
- Ke všem třem článkům vráceny tematické náhledy. Tři nejnovější české články mají výslovné přiřazení odpovídajícího tématu obrázku.
- Na mobilu jsou fotografie vedle názvů služeb a obrázky článků nad titulkem. Důležité texty nejsou přes fotografie ani zkrácené pomocí line-clamp.
- Všechny fotografie jsou existující soubory projektu. Žádný již publikovaný soubor nebyl přepsán a nevznikly další rastrové kopie. Nové náhledy jsou statické, lazy-loaded, s rezervovaným poměrem stran; nepoužívají Vercel Image Optimization. Přenos obrázků však nadále spotřebovává běžný datový provoz.

Hypotéza: méně bloků a výraznější vizuální rozlišení usnadní nalezení vhodné služby. Přínos pro poptávky ani SEO zatím není změřen; výchozí GSC a způsob vyhodnocení jsou níže.

Ověření této revize: opět prošlo celé `npm run verify` včetně buildu (559 výstupů), 24stránkový preview test a oba SEO smoke testy (502 + 227 URL, žádné chyby). Doplněny regrese pro tři fotografie měření, tři SVG motivy, obrázky u článků včetně HTTP/content-type a odstranění obou nadbytečných oddílů. Finální český build zkontrolován na 320/390/1440 px; dále německá verze na 320/768 px a anglická na 390 px. Kontrolované texty nepřetékají. Na 390 px začíná sekce služeb přibližně na 841 px od začátku stránky. Náhled na portu 3108 běží z nového buildu; vývojový server 3107 byl vypnut.

| Oblast / výchozí problém | Implementace | Očekávaný obchodní efekt |
|---|---|---|
| Homepage: přehled služeb byl na mobilu až přibližně po 2 000 px | Šest konkrétních služeb hned po úvodu, číslech a kompaktních logách. Kratší H1 a úvod, stabilní fotografie, karty s fotografiemi a technickými ilustracemi | Rychlejší nalezení správné služby. Při kontrole revidovaného návrhu na 390 px začínala sekce kolem 841 px; poloha závisí na šířce a zalomení |
| Mobilní nadpis přetékal; některé prvky neměly dost místa | Samostatný CSS modul homepage, zmenšitelné mřížky, zalamování nadpisů a dlouhých německých slov, odstranění zděděné maximální šířky seznamů | Čitelnost bez vodorovného posunu |
| Na mobilu nebylo vidět konkrétní oprávnění | Odkaz na laboratoř č. 1599 a ČSN EN ISO/IEC 17025 přímo v úvodu | Snazší ověření odbornosti |
| Hero automaticky měnilo obsah a používalo nesprávnou sémantiku záložek | Serverově vykreslený stabilní úvod, tři běžné odkazy na měření, studie a dokumentaci; bez rotace a zbytečného klientského přepínání | Předvídatelné ovládání a méně rušení |
| Čísla a CTA | Zachované načítání čísel včetně omezení animací dle preference uživatele; samostatné styly rezervují prostor. Jedno viditelné hlavní poptávkové tlačítko v záhlaví. Mobilní ovládání má výšku 44 px a větší text | Zachování požadovaného vizuálního prvku bez opakovaného nátlaku |
| Kolaudace měla nepodloženou vizuální převahu | Tři rovnocenné situační karty bez číslování. EN/DE používají existující jazykové cíle, nikoliv nepřeložené české kampaně | Přehledná volba pro provozovatele i projektanta |
| Loga odváděla návštěvníka ven a důkazy byly hluboko | Kompaktní loga odkazují na interní přehled zákazníků; příklady zakázek zůstávají v referencích a u služeb | Důvěryhodnost bez dalšího dlouhého bloku na homepage |
| Příliš rozsáhlý průběh zakázky a aktuality | Průběh z homepage odstraněn; tři aktuální články s fotografiemi, bez opakovaných dlouhých perexů | Menší textová zátěž a vizuálně rozpoznatelné odborné pokračování |
| Desktopové menu se objevilo až po hydrataci | Hlavní odkazy jsou už v serverovém HTML, breakpointy řídí CSS. Přidané zavření klávesou Escape a zavření mobilního panelu při přechodu na desktop | Stabilnější záhlaví a ovládání klávesnicí |
| Nepřesná navigační označení a patička | Kratší název měřicí techniky; IPPC odkaz označuje skutečně IPPC. Emise, pracovní prostředí a rozptylové studie v patičce odkazují na hlavní služby. Dotazník spokojenosti je běžný odkaz | Přesnější interní propojení a méně konkurenčních výzev |
| EN/DE poptávka ze služby směřovala na český kontakt | Lokalizace výsledku `contactUrl()` se zachováním služby a kotvy formuláře | Nepřerušená cesta k poptávce v odpovídajícím jazyce |
| Detaily služeb zahazovaly položky kvůli `.slice()` | Krátký přehled zůstává; zbývající rozsah, podklady, výstupy a situace jsou dostupné v rozbalovacím detailu a serverovém HTML | Stručnost bez ztráty odborných informací pro lidi a vyhledávače |
| Opakovaný obecný odstavec o firmě na každé službě | Kompaktní odkazy na oprávnění, reference a telefon. Měření hluku má samostatný vstup na hlukovou studii. Kde existuje přímo přiřazený publikovaný příklad, zobrazuje se u služby | Snazší rozlišení služby a konkrétnější důvěra |
| Související odkazy potlačovaly odborné návaznosti; schema neodpovídalo výpisu | Kontextové odkazy a služby mají přednost, další relevantní odkazy zůstávají v kompaktním seznamu; deduplikace a ItemList ze stejného seznamu jako viditelný obsah | Lepší tematické propojení a konzistentní strukturovaná data |
| Formulář znovu ukazoval celý výběr a mnoho volitelných polí | Viditelné shrnutí předvybrané služby; rozbalovací změna služeb a lokalita/termín; kratší, věcný úvod a nižší textové pole | Menší vnímaná náročnost vyplnění |
| Chat mohl zasahovat do formuláře | WhatsApp a Tawk se nezobrazují na homepage ani kontaktu. U již načteného Tawk widgetu se aktualizuje viditelnost při změně stránky | Nerušené dokončení poptávky |
| Roční immutable cache u nehashovaných souborů | Kontrola 231 již publikovaných obrázků a dokumentů při každém buildu: změna obsahu pod starou adresou build zastaví | Ochrana před zastaralými podklady bez plošného zkracování cache a bez nových kopií médií v tomto vydání |
| Článek plánovaný na 8. 9. nebyl v předchozí produkční verzi | Čerstvý lokální build jej obsahuje v detailu, homepage, Poradně, sitemapě, vyhledávání, článkovém AI indexu a publikačním přehledu | Připravené konzistentní vydání; produkce se bez nasazení nezmění |

Příklady zakázek jsou převzaty z již publikovaných anonymizovaných referencí. Nepřiřazoval jsem je k logům konkrétních klientů a nevymýšlel úspory, termíny, úřední výsledky ani nové fotografie.

## Ověření

### Úprava megamenu 10. 9. 2026

Na výslovný požadavek uživatele odstraněny pouze dvě položky z českého megamenu Služby: „Měření pro kolaudaci“ a „Měření nové haly“. Počty položek se mění z 10/8/8 na 8/8/8; stejný datový zdroj používá mobilní nabídka. Samotné landing pages, jejich metadata a ostatní odkazy (homepage, přehled služeb, související stránky) zůstávají beze změny. Hypotéza: menší vizuální nerovnováha a rychlejší orientace; nejde o prokázaný růst konverzí. Přidána regresní kontrola počtu položek a vyřazených odkazů.

- `npm run verify` prošel: lint, TypeScript, předvyplnění, cache/ISR, routování článků, doručovací logika, publikování, veřejné soubory, nové B2B regrese a build.
- Poslední drobná úprava zalamování německých slov následně prošla dalším úspěšným buildem a opakováním B2B testů.
- Build vytvořil 559 statických výstupů. Nebylo přidáno časové ISR, nová produkční funkce ani externí knihovna.
- SEO smoke: **502 sitemapových adres + 227 dalších interních odkazů, 0 chyb**.
- Routing smoke: 0 chyb; canonicals, hreflang, přesměrování, česká 404/noindex, statické prostředky, GET API a neplatný lokální POST.
- `node scripts/verify_b2b_preview.js http://127.0.0.1:3108`: **24 CS/EN/DE stránek**, H1, jazyk, canonical, syntakticky platné JSON-LD, správně lokalizované poptávky, serverové menu a všechny publikační výstupy článku.
- Skutečné vykreslení homepage: CS 320/360/390/430/768/1024/1440 px; EN/DE 320/390/1440 px. Zachycené přetečení německých referencí bylo opraveno a znovu ověřeno.
- V prohlížeči zkontrolováno desktopové menu včetně zalamování a Escape, mobilní otevření/zavření, anglická cesta služba → předvyplněný formulář, zavřené volitelné položky a absence WhatsApp na kontaktu.
- Nebyla odeslána skutečná poptávka ani e-mail. Doručovací a publikační testy používají simulace; lokální routing zkouší pouze odmítnutí neplatného požadavku.

Lint končí bez chyb, ale uvádí 16 upozornění ve stávajících komponentách. Build také vypisuje upozornění na metadataBase; výsledné ověřované stránky mají správné produkční canonical adresy a v sestavených HTML souborech nebyl nalezen odkaz na `http://localhost:3000`. Netvrdím naměřené zlepšení Core Web Vitals — v tomto kroku nebyl získán nový spolehlivý terénní vzorek.

## Provozní poznámky

Časové publikování není v produkci zapnuté. Existující plánovací workflow zůstává opt-in a vyžaduje samostatné schválení a nastavení. Datum článku samo nepřestaví statický produkční web. Před jakýmkoliv nasazením znovu ověřit Vercel usage, diff a rollback.

Immutable soubory: původní publikovaný soubor nepřepisovat. Aktualizaci uložit pod novým verzovaným názvem a změnit odkazy; k nové adrese doplnit kontrolní hash. Nikdy neaktualizovat hash staré adresy jen proto, aby prošel test. SVG při kontrole normalizuje pouze konce řádků kvůli Windows/Linux checkoutům. Cache hlavičky zůstaly beze změny.

Publikační generátor změnil také vyhledávací index CS, mapu jazyků článků a `llms-articles.txt`; jde o očekávané zahrnutí již datovaného článku, nikoliv nově napsaný obsah.

Technické podklady: [Next.js — cache hlavičky](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers) a [Tawk — řízení viditelnosti widgetu](https://developer.tawk.to/jsapi/).

## Co vyžaduje součinnost firmy

1. Dodat vlastní fotografie pracovníků při měření a konkrétních realizací s oprávněním k použití.
2. Potvrdit 2–3 pojmenovatelné realizace: klient/souhlas, rok, skutečný rozsah a předaný výstup. Současné anonymizované příklady tyto podklady nenahrazují.
3. Potvrdit odborného garanta a přesný rozsah oprávnění u jednotlivých služeb; automaticky nepřiřazuji kontaktní osobě všechny specializace.
4. Poskytnout přehled kvalifikovaných a získaných zakázek podle služby. Teprve potom měnit obchodní prioritu měřicí techniky nebo výrazně zvýhodnit jednu situační kartu.
5. Schválit případné produkční nasazení a provozní pravidlo časovaného publikování až po prohlídce této lokální verze.

## Jak vyhodnotit přínos po případném nasazení

Výchozí GSC z auditu (10. 8.–6. 9. 2026): 153 kliknutí, 5 780 zobrazení, CTR 2,6 %, průměrná pozice 9,6; homepage 22 kliknutí. To není počet poptávek ani pozice všech obchodních dotazů.

Primárně porovnat **úspěšné odeslání `generate_lead` a následnou kvalifikaci poptávek**, podle vstupní služby a zařízení. Zachována podmínka skutečně úspěšné odpovědi s identifikátorem poptávky; kliknutí na tlačítko není lead. Sekundárně sledovat telefon/e-mail, GSC nebrandové obchodní dotazy a vstupní stránky. Vyhodnotit nejméně srovnatelných 28 dní po nasazení a zohlednit sezónnost a malý počet poptávek.

Lepší konverze, SEO a použitelnost informací pro AI jsou očekávané přínosy, nikoliv zatím prokázané výsledky nebo záruka pozic.
