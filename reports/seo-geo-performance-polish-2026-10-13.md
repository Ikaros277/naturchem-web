# Dokončení nálezů auditu — lokálně, 13. 10. 2026

Větev codex/visual-cohesion-2026-10-12, předchozí změny této větve zachované. Primární checkout s prací Cursoru se nemění. Bez commitu/pushe/merge/deploymentu a bez skutečné testovací poptávky.

Baseline auditu: mobil homepage 84 (3 běhy), pracovní prostředí 77 (3), reference 64 (3), FAQ 68 (3), kolaudace 87 (1), kontakt 86 (1), poradna 82 (1), IPPC článek 74 (1). Desktop 99–100 (1 běh na stránku). Lighthouse 13.5.0; lokální produkční sestava bez produkčních proměnných.

Hypotézy: přesné sjednocené údaje GHG a autora odstraní nesoulad strojově čitelných informací. Lepší interní odkazy a stručnější metadata zlepší srozumitelnost a dohledatelnost, nikoli zaručené pozice. Méně nepotřebného CSS, klientské inicializace a fontových dat sníží LCP/TBT při zachování obsahu a vzhledu.

Ochrany: všechny veřejné URL, canonicals, hreflang, odborné texty a zdroje zachovat; native details nadále obsahují text v HTML. Historický GHG dokument neoznačovat za neplatný a nemažte jej bez odborného ověření. Bez přidání smyšlených cen, oprávnění či recenzí.

Ověření po práci: npm run verify, úplný SEO/fragment/schema audit, smoke odkazy a směrování, prohlížeč na mobilu/PC, alespoň tři stejné Lighthouse běhy pro srovnání. Konverzní dopad je hypotéza, měřit po případném schváleném nasazení stejně dlouhá období a potvrzené poptávky.

## Provedené úpravy

- Sjednocen aktuální rozsah služby GHG v češtině, angličtině a němčině, navigaci, firemních strukturovaných datech a souborech pro AI: výpočty, kontrola emisních dat a uhlíková stopa, nikoli nezávislé akreditované ověřování EU ETS. Historický dokument zůstává dostupný, jeho popis rozlišuje současnou nabídku. Odstraněno nedoložené `priceRange: $$` a přehnané souhrnné tvrzení o oprávnění pro všechny činnosti.
- Články se skutečným autorem Ing. Františkem Hezinou mají jednotnou identitu Person a odkaz na jeho profil. Firemní autor zůstává Organization. Název a odborný text článku se nezkracují; zkrácena pouze vybraná metadata pro vyhledávání, bez useknutých podmínek či právních vět. Stránkování poradny má odlišné popisy.
- Opraven odkaz FAQ s `#undefined`, duplicitní kotva na stránce provozů, doplněny relevantní interní cesty ke stávajícím stránkám a kategoriím. Žádná indexovaná URL se neruší. Datum změny v sitemapě je výslovná obsahová revize, nikoli automatické datum každého sestavení.
- FAQ sestaví vyhledávací index až při použití; hledání a přepínání kategorií správně resetuje stav. Přesun k vyhledávání zachovává dotaz. Všechny odpovědi zůstávají v HTML.
- Lepší kontrast počtu kapitol, přístupné názvy odkazů, nativní odkazy na kartách namísto zbytečných klientských routerů. Kompaktní cookies panel s rovnocennými tlačítky přijmout/odmítnout a dostatečnou velikostí ovládání. Souhlas ani měření konverzí se neobcházejí.
- Závěrečné síťové měření odhalilo automatické přednačítání i v pomocných odkazech: například na referencích osm dalších RSC požadavků na homepage / právě otevřenou stránku. Odkaz přeskočení na obsah, drobečková navigace, závěrečné CTA, související služby a vybrané pomocné navigace jsou nyní nativní odkazy, se zachovanými jazyky, kotvami a poptávkovými parametry. Odstraňuje se spekulativní provoz; skutečné úspory Vercelu musí potvrdit produkční usage, nejde o jeho naměřený pokles.
- Kritické CSS rozděleno do 11 rodin stránek. Generátor zachovává pořadí pravidel i dynamické selektory a sleduje závislosti komponent i knihoven. Nevyužitá pravidla jiných sekcí se při prvním načtení stránky nepřenášejí. Regresní test kontroluje také skutečné vygenerované HTML všech rodin.
- Vzdálené sekce homepage a karty fotoreferencí využívají `content-visibility: auto` s pamatovanou výškou. Text ani obrázky se neodstraňují z dokumentu; při přiblížení nebo přesunu kotvou se obsah vykreslí. Pro tisk je odložení vypnuté. Ověřeno otevření dalších šesti fotografických ukázek i skok na konkrétní měřenou zakázku. Použití vychází z [dokumentace MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/content-visibility).
- Písmo má shodné obrysy a váhy; vlastní licenčně korektní podmnožiny obsahují potřebné české, anglické a německé znaky. Součet dvou fontů klesl z 88 852 na 54 468 B (−38,7 %). Licence OFL, původ a rozsah znaků jsou uloženy. Změna není výměnou vizuálního stylu.
- Devět již schválených fotografií realizací má doplněné 768px varianty, aby menší karty nemusely vybírat 960px soubor. Původních 337 veřejných obrazových URL zůstává neměnných; přiřazení fotografií k realizacím se nemění.
- Vercel Speed Insights se nespouští na lokální adrese, kde endpoint neexistuje. Na veřejných produkčních a preview doménách zůstává zapnuté, nezávisle na zveřejnění systémových proměnných Vercelu. Není použito rozpoznávání Lighthouse ani vypnutí produkční analytiky.

## Dokončené ověření

- `npm run verify`: úspěšné kompletní sestavení a regresní testy; 631 statických výstupů. Žádná chyba TypeScriptu/lintu. Devět již existujících varování hooků není potlačeno; jejich riziková změna pouze kvůli kosmetice není součástí úkolu.
- Úplný audit 579 veřejných stránek: 0 problémů v metadatech, canonicals/hreflang, strukturovaných datech, interních odkazech a kotvách; 0 duplicitních titulů/popisků, 0 nedostupných či osiřelých stránek. Největší zjištěná hloubka kliknutí 5.
- Odborný obsah 234 zdrojových článků a 231 publikovaných jazykových variant zachován. Čtenářské kotvy, související služby a odkazy ověřeny. Stav `generate_lead` zůstává vázaný na úspěšnou odpověď formulářového API s identifikátorem poptávky.
- Závěrečný HTTP smoke: 581 URL a dalších 300 interních odkazů bez chyby; přesměrování, jazyky, 404, statické soubory a bezpečné odmítnutí neplatného formuláře prošly. Skutečná poptávka nebyla odeslána.
- Prohlížeč: mobil 320/375 px a desktop 1280 px, homepage, megamenu, kolaudace, nová hala, pracovní prostředí, reference, kontakt, poradna, článek, FAQ, firma, oprávnění, provozy, typické zakázky a prodej. Ověřeno zalamování, absence vodorovného přetečení, cookies, ovládání FAQ a místní odkaz na profil autora. Dočasné rozměry prohlížeče obnoveny.

## Rychlost — výsledky měření

Dokončeno 24 závěrečných běhů Lighthouse 13.5.0 na stejné lokální produkční sestavě: osm stránek mobil + desktop, navíc dvě opakování pro homepage, pracovní prostředí, reference a FAQ. Stejné nastavení jako baseline: simulovaný mobil, 4× zpomalení CPU, 150 ms RTT, 1638,4 kbit/s; desktop standardní preset. Souhrn uvádí medián, nikoli nejlepší jednotlivý výsledek. CPU benchmark hostitele kolísal a výsledky nejsou předpovědí veřejného PageSpeed Insights.

| Mobilní stránka | Počet běhů před / po | Skóre před → po | LCP před → po (ms) | TBT před → po (ms) | Přenos před → po (kB) |
| --- | --- | --- | --- | --- | --- |
| Homepage | 3 / 3 | 84 → 83 | 3895 → 3721 | 170 → 287 | 459 → 401 |
| Měření pro kolaudaci | 1 / 1 | 87 → 84 | 3616 → 3471 | 104 → 283 | 521 → 332 |
| Pracovní prostředí | 3 / 3 | 77 → 77 | 3624 → 3445 | 470 → 545 | 518 → 361 |
| Reference | 3 / 3 | 64 → 78 | 4086 → 3835 | 949 → 411 | 696 → 500 |
| FAQ | 3 / 3 | 68 → 76 | 3776 → 3772 | 772 → 455 | 564 → 384 |
| Kontakt | 1 / 1 | 86 → 83 | 3782 → 3503 | 120 → 342 | 468 → 331 |
| Poradna | 1 / 1 | 82 → 86 | 4466 → 3812 | 100 → 167 | 578 → 443 |
| IPPC článek | 1 / 1 | 74 → 85 | 3890 → 3573 | 498 → 249 | 544 → 403 |

Desktop: výkon 100 na všech osmi stránkách, původně 99–100. Přístupnost, technické SEO a best practices 100 ve všech 24 závěrečných bězích. SEO skóre bylo 100 již v baseline; není to důkaz růstu pozic. Opravený kontrast desktopového článku zvýšil jeho přístupnost z 97 na 100. Best practices původně snižoval lokální neexistující endpoint Speed Insights, nikoli prokázaná produkční chyba.

V každém závěrečném běhu je 0 automatických RSC přednačítání, proti například 4 na homepage a 8 na referencích v baseline. Mobilní přenosy klesly na všech osmi stránkách přibližně o 13–36 %. Fontová data klesla o 38,7 %. Na referencích a FAQ je pozorované zlepšení skóre/TBT; na homepage a pracovním prostředí není prokázané zlepšení celkového mobilního skóre, i když přenos a LCP klesly. U jednorázového měření kolaudace a kontaktu skóre vyšlo nižší a nelze to zatajit nebo označit za plošné zrychlení.

Zbývající výkonový limit: mobilní LCP přibližně 3,4–3,8 s a zpracování počátečního HTML/React runtime. Mobil nemá 100 a dokončení oprav neznamená splnění takového výkonového cíle. Další rozhodování musí využít také veřejné měření s reálnou konfigurací a následná návštěvnická data. Bez nich není podložené tvrdit, že aktuální stránka všem uživatelům zpomalila, nebo naopak že je již maximálně rychlá. Přístupný obsah, důkazy odbornosti a funkční konverze se kvůli číslu testu neodstranily.

Evidence (lokální výstupy): `nc-quality-comparison-final-2026-10-13.json` se všemi zdrojovými reporty a síťovými počty, `nc-rendered-seo-geo-audit-final-2026-10-13.json` s 579 stránkami; oba v `C:/Users/natur/Documents/Codex/2026-08-12/m/outputs/`. Finální kontrola sestavení skončila úspěšně, stejně jako úplný HTTP smoke a prohlížečové ověření kotvy konkrétní fotoreference, rozbalení všech devíti fotografických ukázek a nativního přeskočení na obsah.

## Omezení a vyhodnocení obchodního dopadu

Jde o místní produkční sestavu bez reálných produkčních proměnných, nikoli měření ostrého webu či CrUX. Místní test nepotvrzuje doručení e-mailu, skutečné GA4 události, Turnstile, chat ani konečnou spotřebu Vercelu. URL, obsah a HTML jsou ověřeny; zvýšení pozic nebo poptávek není zatím pozorovaný výsledek.

Po samostatně schváleném nasazení porovnat stejně dlouhá kompletní období GSC/GA4: relevantní neznačkové dotazy a vstupní stránky, CTR, `form_start` → úspěšné `generate_lead`, potvrzené kvalifikované poptávky, telefon/e-mail jen jako sekundární signály. Výkon potvrdit na veřejné doméně a následně reálnými Core Web Vitals; změny přenosu a Vercel usage měřit, ne odvozovat ze samotného Lighthouse skóre.

Připraveno lokálně, bez commitu a bez nasazení. Případné nasazení vyžaduje vlastní kontrolu diffu, souhlas a rollback na předchozí produkční commit.
