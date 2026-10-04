# Lokální implementace auditu NATURCHEM, 2.–3. října 2026

## Stav a ochrana produkce

Pouze lokální návrh na větvi `codex/audit-quality-2026-10-02`, základ `83793e1d72751c6f4e8432a2fc64238d0b80af3a` shodný s ověřeným GitHub main a produkčním publication-state při zahájení práce. Nebyl vytvořen commit, push, merge ani deployment. Nebyl odeslán e-mail, poptávka nebo zpráva v chatu.

Původní checkout `C:/Users/natur/naturchem-web` s rozpracovanými změnami Cursoru nebyl upravován. Použit existující samostatný worktree. Jeho dřívější reporty a rozpracovaná evidence byly zachovány; regenerované článkové indexy odpovídají aktuálním publikovaným datům v repozitáři.

## Návrhy a výsledek implementace

| Návrh auditu | Lokální realizace | Výchozí stav / hypotéza a měření |
|---|---|---|
| Odlišit kolaudaci a novou halu | Dvě nové tematické generované ilustrace, správné přiřazení i na cílových stránkách | Obě karty používaly dokumentační fallback. Lepší rozlišení nabídky; měřit přechod na službu a následné skutečné poptávky. |
| Odlišit článkové ilustrace | Samostatné obrázky článků o kolaudaci, povolení zdroje a skladování chemikálií, včetně frontmatter pro CMS | Dva páry článků měly totožné ilustrace a chemie obecný fallback. Ověřit homepage, poradnu i detail článku. |
| Sjednotit redundantní kartu chemických látek | Odstraněna druhá karta se stejnou cílovou URL v CS/EN/DE | Zůstává odkaz na chemické látky i samostatné školení legislativy. Žádná indexovaná adresa odstraněna. |
| Zklidnit chat | Malé tlačítko vpravo na desktopu po marketingovém souhlasu. Tawk se načte a otevře až na kliknutí; po minimalizaci opět malé tlačítko | Automatická výzva zakrývala obsah. WhatsApp vlevo zachován. Na mobilu a na kontaktu původní pravidlo potlačení Tawk zachováno. |
| Ochránit titulky | Úzký filtr chatového titulku s čítačem zpráv; skutečné nové titulky navigace se zachovají | GA4 obsahovalo „1 nová zpráva“. Příčina nebyla definitivně prokázána; ochrana neopraví stará data a nevytváří další page_view. |
| Kompaktnější přehledy | Kratší úvody ve třech jazycích; nižší hero katalogu a poradny; navigace šesti kategorií; měření standardně otevřená; mobilní poradna má kompaktní výběr tématu místo řad tlačítek, desktop zachovává více témat | Původní úvod přibližně 425 px a zavřené služby. Nabídku ukázat dříve, nerozbalovat vše. |
| Přehledné mobilní karty | Menší fotografie vedle názvu, popis přes celou šířku, celý název i text; kontrastní jednotné odkazy v klidu i při hover/focus | Nezkracovat důležité názvy pomocí ořezů. Měřit přechody katalog → detail → form_start → generate_lead. |
| Jeden cílený SEO návrh | Pouze meta description českých hlukových studií: účel, průmyslové použití, cena podle rozsahu a podkladů, ověřená reakce do 24 h. H1/title i odborný obsah zachovány | 1 kliknutí / 172 zobrazení, CTR 0,58 %, průměrná pozice 10,7. Jde o test hypotézy, ne potvrzené zlepšení. |
| Kontextové článkové odkazy | Stávající relevantní odkazy na služby zkontrolovány a zachovány, nepřidány další obecné CTA | EIA, provozní řády a kotelny již měly cesty na relevantní služby. Přidané měření využití, nikoli duplicity výzev. |
| Výkon | 27 předkódovaných katalogových ilustrací ve dvou šířkách, bez runtime image optimization; nový chat bez úvodního vendor scriptu; kontrola hash navigace 500 ms místo 100 ms | Obě šířky všech náhledů dohromady 913 308 B, jednotlivě nejvýše 37 722 B. Vercel ISR konfigurace nebyla rozšířena; budoucí usage se musí měřit. |
| Úspěšné odeslání vs. doručení | Stávající serverové lead_id, providerMessageIds, nezávislé hlavní/záložní doručení a generate_lead až po přijetí validovány testy | Reálné doručení a obchodní kvalifikaci nelze potvrdit bez správného Resend workspace a firemního potvrzení. Žádný další produkční test nebyl odeslán. |

Oblíbené homepage ilustrace hlukových/rozptylových studií a EIA, Cursorův LCP a malé homepage fotografie zůstaly zachovány. Generované ilustrace neprokazují skutečné zaměstnance, zákazníky ani konkrétní zakázky.

## SEO baseline a plán experimentu

Zdroj: GSC, filtr české URL `https://www.naturchem.cz/sluzby/hlukove-studie/`, poslední kompletní období 2.–29. 9. 2026. Tabulka viditelných dotazů nemusí obsahovat všechny anonymizované dotazy.

| Dotaz | Zobrazení | Kliknutí | Pozice |
|---|---:|---:|---:|
| hluková studie | 24 | 0 | 11,6 |
| hluková studie cena | 23 | 0 | 15,2 |
| hlukové studie | 21 | 0 | 16,8 |
| hluková studie tepelné čerpadlo | 4 | 0 | 18,0 |
| hluková studie pro stavební povolení | 2 | 0 | 19,5 |

Nízké CTR souvisí i s nízkými pozicemi; nelze tvrdit, že ho způsoboval popis nebo že úprava description zajistí lepší pozice. Google může popis přepsat. Návrh neuvádí smyšlenou cenu.

SEO změna je LOKÁLNÍ a není aktivním produkčním experimentem. Vyhodnotit až po schváleném nasazení a alespoň 28 úplných dnech, podle objemu zobrazení případně delší dobu. Porovnat stejně dlouhá období, podobné dotazy a pozice; rozdělit zařízení. Hlavní obchodní výsledek jsou kvalifikované doručené poptávky, nikoli CTR samotné. Současný design služeb nasazený 27. 9. má příliš krátkou historii; při společném nasazení dalších UI změn nelze čistě oddělit jejich příčinný dopad.

## Měření konverzní cesty

- Nová ne-konverzní událost `select_service` pro skutečné odkazy z katalogu a ze souvisejících služeb pod článkem; parametry `service_path`, `placement`, `page_path`. Jen po statistickém souhlasu, bez query parametrů a osobních údajů.
- Nezaměňovat `select_service`, `click_inquiry_cta`, telefon či e-mail za hotovou poptávku.
- Stávající `form_start` a `generate_lead` zůstávají beze změny. `generate_lead` až po úspěšné odpovědi serveru s ID poptávky.
- Párování: GA4 lead_id → serverově přijaté ID a providerMessageIds → Resend stav doručení → interní stav relevance/zakázky. Do GA4 ani Git repozitáře neposílat jména, e-maily, obsah zpráv nebo cenové nabídky.
- Produkční kontrola správného Resend účtu, aktuálních Vercel kvót a firemní kvalifikace zůstává otevřená. Nulová historie v nesprávném workspace neprokazuje nefunkční formulář.

## Obrázky a reprodukovatelnost

Pět originálních generací (režim generate, neprůhledné pozadí) je uchováno v původní složce generátoru. Webové výstupy: `public/hero/generated-2026-10/`, 1600×900 a 640×360, souhrn 783 590 B. Katalogové odvozené náhledy: `public/hero/service-cards-2026-10/`, 320×180 a 640×360.

Celé zadání všech pěti generací a původní cesty: `C:/Users/natur/Documents/Codex/2026-08-12/m/outputs/naturchem-audit-2026-10-02/image-prompts.json`. Nejde o pět nových zákaznických referencí. Již zveřejněné immutable assety se nepřepisují; test chrání 231 stávajících adres.

## Ověření

- Finální `npm run verify` úspěšný: lint bez chyb (16 stávajících varování), kontrola typů, všechny testy včetně nové `test:audit-quality` a produkční build 566 statických výstupů.
- `test:audit-quality` kontroluje také skutečné hash obsahu náhledů, nikoli jen rozdílná jména, rozměrové vyplnění rámečku, výchozí otevření měření, všechna témata mobilního filtru, neosobní parametry výběru služby a ochranu titulku při navigaci.
- Lokální úplný SEO smoke přes Node fetch: 504 unikátních sitemap cest / 506 testovaných stránek a 227 dalších interních odkazů, žádné závady. HTTP stav, právě jeden H1, canonical shodný s produkční adresou, description, robots a JSON-LD syntax. Podklad: `outputs/naturchem-audit-2026-10-02/local-seo-smoke.json`.
- Stávající routing smoke: 0 chyb; CS/EN/DE canonical a hreflang, přesměrování, assety, 404 noindex a validační odpověď kontaktního API. Šlo o prázdný neplatný lokální formulář, nikoli o odeslání poptávky.
- Pythonová kontrola všech URL při souběžném čtení opakovaně občas zaznamenala Windows transportní reset 10054 u velkých stránek FAQ/poradny. Samostatné čtení i nezávislá úplná Node kontrola všech cest prošly; tyto transportní výpadky se neoznačují za opravenou produkční chybu. Před nasazením zopakovat obvyklý smoke v cílovém prostředí.
- Zkontrolované skutečné layouty v lokálním same-origin iframe: šířky 1280 a 390 px (obsahové šířky 1265 / 375 po odečtení scrollbarů), bez vodorovného přetékání na kontrolovaných obrazovkách. Nejde o test fyzického telefonu ani všech 503 produkčních obrazovek.
- Mobilní filtr „Rozptylové studie“ ukázal odpovídající článek; hledání „kolaudace“ a návrat na všechny články fungovaly. Nový výběr je dostupný klávesnicí jako nativní select.
- Tawk: před kliknutím po souhlasu 0 vendor scriptů/iframe; po kliknutí viditelný funkční panel; po minimalizaci zpět malé tlačítko a původní title. WhatsApp zůstal dostupný. Nebyla odeslána zpráva.
- Diff zkontrolován, `git diff --check` bez chyb; 231 publikovaných immutable assetů chráněno.
- GitHub main znovu ověřen 3. 10., stále `83793e1`. Šlo pouze o čtení repozitáře.
- Náhled běží na `http://127.0.0.1:3116/`; responzivní náhled `http://127.0.0.1:3117/responsive-preview`.
- Snímky: `outputs/naturchem-audit-2026-10-02/catalog-desktop.jpg`, `catalog-mobile.jpg`, `poradna-mobile.jpg` pod `C:/Users/natur/Documents/Codex/2026-08-12/m/`.

Build hlásil také existující warning metadataBase u zvláštních generovaných rout. Ověřené viditelné OG adresy reprezentativních stránek míří na `https://www.naturchem.cz/`, nikoli localhost; canonical celé sitemap byl ověřen. Nelze z toho odvozovat úplnou validaci všech social image rout.

## Nasazení a rollback

Nasazení není součástí této realizace. Před případným merge znovu ověřit aktuální main, Cursorovy souběžné změny, všechny testy a skutečný diff. Nezahrnout automaticky starší rozpracované reporty z worktree.

Rollback: poslední známá produkční verze `83793e1`; případně cílený revert nového izolovaného commitu. Žádný reset nebo mazání Cursorových změn. Před produkcí ověřit aktuální Vercel usage/ISR a zohlednit uživatelův zákaz placené změny. Není zaručeno vysoké umístění v Google ani ve všech AI systémech.
