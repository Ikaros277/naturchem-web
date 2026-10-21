# Jemný pohyb v rozhraní — pouze lokálně, 21. 10. 2026

## Zadání, baseline a hypotéza

Vlastník po dokončení mobilního formuláře požádal postupné rozvíjení mobilního menu a vkusné organické reakce tlačítek a seznamů. První úkol je uzavřen v MOBILE-INQUIRY-2026-10-20.md; tato druhá vrstva je samostatná prezentační změna. Aktuální vzdálený main znovu čtením ověřen jako dd9a751. Cursor checkout a dosavadní místní návrh analytických souhlasů jsou zachovány.

Baseline: hlavní mobilní panel již má nástupovou animaci, ale vnořené nativní details mění výšku skokově. Tlačítka a karty mají nejednotně krátké přechody; některé hover efekty se u dotykového zařízení mohou přidržet. Hypotéza: krátký, předvídatelný pohyb lépe ukáže vztah mezi ovladačem a odhaleným obsahem. Není to naměřený konverzní nebo rankingový přínos.

## Rozsah a ochrany

- Mobilní menu: výška skutečného nativního details se rozvírá i sbaluje po dobu 280 ms s mírným zpomalením na konci. Bez pevné maximální výšky, obalů navíc nebo čekání na jednotlivé položky.
- Jediný delegovaný posluchač na otevřeném panelu; žádná hydratační komponenta pro každou položku. Dokončení/otočení animace, vnořené kategorie, resize, změna preference i odstranění panelu uvolní dočasné styly a posluchače.
- Klikatelné nadpisy zůstávají skutečnými odkazy, včetně modifikovaných kliknutí. Enter/mezerník dále používají nativní summary aktivaci; Escape/focus trap/odkazy spravuje dosavadní hlavička.
- Seznamy v obsahu (FAQ, rozsah, volitelné údaje atd.): čisté CSS přechody skutečné automatické výšky v podporujících prohlížečích. Starší prohlížeče zachovají okamžité nativní rozbalení, ne skrytý nebo rozbitý obsah. Existující samostatná animace HomeOfferCard se nepřepisuje.
- Tlačítka: krátké přechody barev/stínu a přirozené stisknutí. Hlavní karty homepage se při přesném kurzoru lehce zvednou o 2 px, šipka posune o 2 px. Žádné parallax, nekonečné smyčky, odložené zobrazení hero, animované scrollování celé stránky nebo těžká knihovna.
- Respektování prefers-reduced-motion: menu neodchytává nativní rozbalení, výškové přechody v obsahu se nezapnou a nové hover/stisk efekty se vypnou. Dotykové ovládání nemá přidržovaný hover posun/zoom.

Bez nových závislostí, externích požadavků, obrázků, právních/odborných textů, přesměrování, URL, SEO titulků, canonical/hreflang, JSON-LD, nových událostí nebo změny cache/ISR. Nativní obsah zůstává v serverovém HTML a ovladatelný bez této dekorace.

## Primární technické zdroje

[Element.animate](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate), [nativní details](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details), [details-content](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::details-content), [interpolate-size](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/interpolate-size), [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion). Přístup ke zdrojům 21. 10. 2026; dostupnost moderního CSS je záměrně ověřena feature query, nikoli předpokládána pro starší telefony.

## Testy a další krok

Izolovaný test používá skutečnou funkci a syntetické DOM/animation objekty bez sítě: otevření/zavření, změna směru uprostřed pohybu, vnořený obsah bez oříznutí, odkazy/modifikátory, změna preference, resize, nepodporované/selhávající API a cleanup. Je součástí npm run verify přes rychlostní/kvalitativní testy.

Celé npm run verify a produkční sestavení 631 cest prošly; dosavadních 9 lint upozornění, žádná nová chyba. Výsledné rodiny CSS si zachovaly rozpočty, všechny potřebné selektory a přesnou regeneraci. Neměnný dd9a751 baseline znovu potvrdil nezměněné zákaznické tělo 588 stránek mimo Kontakt, SEO metadata/canonical/hreflang všech 591 úspěšných stránek, sitemap a robots. Tři kontaktní varianty mají jen schválenou místní úpravu předchozího zadání. Lokální sitemap smoke 584 URL +302 dalších interních odkazů a routing bez chyby; prázdná neplatná API žádost nic neodesílá.

Skutečný prohlížeč: 320/390 px a desktop 1366 px bez horizontálního přetékání. Na mobilu služby v zavřeném stavu 72 px, při Enter aktivaci zachycena mezivýška 513 px se stavem opening a finále 663 px bez dočasného overflow. Zachyceno také closing; vnořené měření se rozvírá bez ořezu rodičem a mezerník je sbalí. Escape vrací fokus na spouštěč. Skutečný nadpisový odkaz Měření přešel na /sluzby/#mericke-sluzby, menu zmizelo a body lock se uvolnil. Rozbalení příloh v obsahu má v načteném CSS skutečné výškové/content-visibility přechody 280 ms a zůstává ovladatelné. Desktopový CTA má 220ms přechody, konzole bez chyb. Ověření preference omezeného pohybu je izolovaným testem a CSS media pravidly, nikoli ruční změnou nastavení uživatelova systému nebo testem na fyzickém iPhonu.

Moderní CSS a nativní přechody jsou progresivní; starší prohlížeče nejsou prohlášeny za fyzicky otestované. Mobilní menu používá široce dostupné animate API se zachováním okamžité nativní funkce při absenci/selhání. Žádné z těchto ověření neprokazuje konverzní uplift, nové PageSpeed 100 nebo nižší Vercel účtování. Snímky a náhled jsou pracovní výstupy mimo produkci.

Zatím bez commitu, push, merge nebo nasazení; žádná skutečná poptávka a žádná změna analytického účtu. Případné vydání vyžaduje výslovné produkční zadání, nový preflight proti main a rollback. Dosavadní Ready dd9a751 zůstává výchozí návratovou verzí. Nový zásah by byl prezentačním rušivým faktorem společné konverzní fáze, nikoli důkazem vítězství EXP-008/011/013/014; účinek hodnotit ve stejně dlouhých úplných obdobích podle doručených kvalifikovaných poptávek, ne samotných animací/kliknutí.

## Navazující zadání počítadel — 21. 10. 2026, lokálně

Vlastník požádal rychlý nástup, zpomalení před cílem a celkové ustálení přibližně za 1,5 s. Stávající kubická ease-out křivka zachována; vlastní animace změněna z 900 na 1 500 ms a odstraněna úvodní prodleva 150 ms. Počítá se po zobrazení čísel, nikoli od první síťové žádosti stránky. Změna zaokrouhlování brání předčasnému zobrazení cílové hodnoty u malých čísel (36 let /200+); všechny původní koncové texty, rezervovaná šířka, text pro čtečky a SEO zůstávají stejné. Bez animace při nastavení omezeného pohybu, bez nových závislostí; zachováno omezení zápisů do dekorativního uzlu a jednorázové spuštění.

Skutečná komponenta regresně otestována se syntetickými časovými body 375/750/1 125/1 499/1 500 ms, zpomalováním, přesným koncem i malých hodnot, oddělovači a suffixy, viditelností, starším prohlížečem bez observeru, preferencí pohybu a úklidem. Test je součástí test:motion. Očekávaný efekt je kultivovanější vizuální prezentace, nikoli již naměřený růst poptávek; žádná změna firemních statistik nebo obchodního tvrzení. Stále pouze lokálně, dosavadní návrhy zůstávají zachovány.

Po této malé úpravě znovu prošly test:motion včetně obou animací, test:b2b, cílený lint, typecheck a celé produkční build/postbuild s 631 cestami. Neměnný baseline znovu potvrdil všechna chráněná těla mimo Kontakt a SEO metadata všech 591 stránek. Prohlížeč na mobilu 390 px potvrzuje všechny čtyři správné konečné i přístupné hodnoty a stabilní rozložení bez horizontálního přetékání; konzole bez chyb. Přesný časový průběh dokládá deterministický test skutečné komponenty, nikoli načasování jednotlivého screenshotu. Před produkčním vydáním i nadále potřebné výslovné zadání a finální celé verify/preflight.
