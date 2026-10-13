# Vizuální sjednocení — lokální experiment, 12. 10. 2026

Základ: produkční main e3d30e1036e37ea1e4d6c3d35ad5b4e08ae089ca. Samostatná větev codex/visual-cohesion-2026-10-12; změny Cursoru v hlavním checkoutu zůstávají nedotčené.

Baseline: kolaudace 4278/7238 px, nová hala 4324/7058 px, pracovní prostředí 2972/4420 px (desktop 1280 / mobil 375). Mobilní kontakt má překrytý úvodní text. Reference 9670 px a FAQ 11003 px na mobilu. Dva aktuální články sdílejí stejný obrázek.

Hypotéza: jednotná vizuální hierarchie, časnější podklady a tematicky členěné důkazy sníží námahu příchozích B2B zákazníků. Nárůst poptávek není zatím prokázán.

Rozsah: sjednocení vstupních stránek; oprava mobilního kontaktu; reference a FAQ; článkové náhledy a souhrny; oborové detaily; firemní prezentace, doklady a katalogy.

Ochrana: ponechat indexované URL, metadata, canonicals, hreflang, relevantní schema, celé odborné texty i zdrojové odkazy. Nepřidávat nové sliby, těžké animace nebo knihovny. Bez push/merge/deploymentu a bez testovací poptávky.

Měření po případném nasazení: form_start → generate_lead → potvrzené přijetí poptávky podle vstupní stránky, stejně dlouhá kompletní období; sekundárně telefon/e-mail. Nedostatek nových konverzních dat nelze nahradit subjektivním skóre vzhledu.

Odborně ověřit: aktuální platnost a rozsah historického oprávnění ke GHG [OVERIT S HEZINOU]. Veřejná nabídka musí respektovat potvrzení, že NATURCHEM neposkytuje akreditované ověřování EU ETS. Historický doklad se bez ověření nemaže.

## Implementováno lokálně

- 23 situačních a regionálních vstupů / 69 jazykových variant používá jednotnou servisní šablonu. Kolaudace a nová hala mají stručnější úvod, jedno hlavní foto, konkrétní poptávku a místní odkaz na podklady. Původní odborné odstavce a zdroje jsou zachované v serverově vykreslených podrobnostech.
- Mobilní kontakt nemá překrývající ilustrační fotografii. Formulář je výše; mapa u provozoven se načte teprve po otevření, včetně svého kódu. Souhlas s mapami zůstává respektován.
- Reference vedou třemi různými disciplínami; všech devět ověřených fotografických realizací zůstává v HTML. Dalších šest je v nativním rozbalování, každá karta má rozsah, výstup, další fakta a relevantní poptávku. Fotografie nebyly nahrazeny jinými ani přeznačeny.
- FAQ má osm témat, mobilní volbu tématu a hledání. Všech 77 odpovědí zůstává dostupných bez nové obsahové databáze v klientovi. Úvodní tlačítko směřuje na hledání, nikoli na druhou totožnou poptávku.
- Článkové karty mají kratší zobrazované názvy nezávislé na SEO titulcích a čtvercové mobilní miniatury. EU ETS/GHG má vlastní tematický obrázek; už nesdílí obrázek IPPC článku. Stručné souhrny jsou členěné, plný původní souhrn i tělo zůstávají dostupné. IPPC článek odkazuje na IPPC a předvyplní právě tuto poptávku.
- Oborové stránky mají kontakt v úvodu, podklady na mobilu dříve, kompaktní související služby a volitelný průběh zakázky. Duplicitní druhý obecný obrázek byl odstraněn.
- O společnosti a Proč NATURCHEM používají skutečné snímky práce / techniky namísto generovaného firemního interiéru. Důvody výběru jsou přehledně spojeny s konkrétními doklady, službami a referencemi.
- Oprávnění mají přímý přístup k osvědčení v úvodu, méně velkých karet a výslovně vymezené služby GHG podle potvrzení vlastníka. Historický GHG doklad zůstává zachovaný; nebyl označen za neplatný.
- ISPOP je zařazen do dokumentace a evidence v navigaci i detailu. Všech 24 menu odkazů je zachováno; počet položek ve sloupcích je nyní 8/7/9, místo násilného zařazení evidence do modelování.
- Katalogy nemají nadbytečné mezery mezi titulkem a popisem. Produktové seznamy využívají celou šířku; detail výrobku ukazuje konkrétní foto bez obřího obecného ilustračního úvodu. Všechny parametry zůstávají v HTML, dlouhé části jsou rozbalitelné; původní kapitolové kotvy jsou zachované.
- Odstraněno 752 řádků nepoužívaných stylů staré vstupní šablony. Bez slideru, videa či nové UI knihovny. Hlavní fotografie a oblíbené ilustrace na homepage zůstávají.

## Naměřená čitelnost

Výška celé stránky v px v Chrome, šířka 375 px, standardně zavřené podrobnosti, včetně záhlaví/patičky. Nižší výška neznamená odstranění odborného obsahu.

| Stránka | Před | Po | Zkrácení |
|---|---:|---:|---:|
| Kolaudace | 7238 | 3559 | 51 % |
| Nová hala | 7058 | 3572 | 49 % |
| Pracovní prostředí | 4420 | 4339 | 2 %; důležitější je časnější panel podkladů |
| Reference | 9670 | 5963 | 38 % |
| FAQ | 11003 | 2657 | 76 % |

Desktop 1280 px: kolaudace 4278 → 2379 px, nová hala 4324 → 2465 px. Pilotní rozvržení bylo kontrolováno také v 768 a 320 px. V kontrolovaných pohledech nebylo zjištěno vodorovné přetékání.

## Ověření

- Kompletní npm run verify prošlo: lint bez chyb (15 dřívějších upozornění), typy, předvolby, ochrana formuláře/doručení v mockovaných testech, publikování, aktiva, B2B obsah, všechny fotografické reference, vyhledávací záměr a podpůrné důkazy, výkonové rozpočty a build.
- Nový regresní test ověřuje úplné zachování schválených odstavců na všech 69 lokalizovaných vstupních stránkách. Test čtečky zachovává text a odkazy 234 zdrojových článků; vykreslených publikovaných článků je 231.
- Úspěšné produkční sestavení 631 statických výstupů a následné kontroly. Pokrytí stylů ověřeno pro tři homepage a 81 servisních stránek. Neměněno směrování, platební tarif ani produkce.
- SEO smoke: 581 adres ze sitemap včetně kontrolních variant, dalších 286 vnitřních odkazů; žádná chyba. Jazyk, canonical, hreflang, přesměrování, statická aktiva a 404/noindex prošly.
- Prohlížeč: nativní podrobnosti, otevření všech fotografických referencí a načtení všech devíti fotek, hledání FAQ, mobilní volba tématu, lokální odkaz na podklady a správná předvolba IPPC + zadání. Odložená mapa po otevření úspěšně zobrazí informace, adresy a ovládání souhlasu. Kolaudace a pracovní prostředí navíc zkontrolovány na šířce 320 px; homepage a její články na 375 px, bez vodorovného přetékání. Žádná poptávka odeslána.
- Po posledním zachování produktových fragmentů znovu prošly všechny postbuild kontroly i oba lokální SEO smoke testy. Finální lokální HTML: homepage 132091 B, kontakt 97668 B, poradna 125501 B, FAQ 249520 B. Sdílené CSS pro homepage 62597 B, pro služby 90897 B. Jde o lokální rozpočty, nikoli nové PageSpeed skóre nebo naměřený účet Vercelu.
- Diff bez whitespace chyb. Hlavní rozpracovaný checkout a .agents nebyly upravovány.

Omezení: lokální náhled nemá skutečné produkční proměnné prostředí. Není důkazem živého doručení e-mailu, funkce placených/external služeb ani SEO růstu. Build má dřívější upozornění metadataBase u pomocných výstupů; kontrola nevykázala veřejnou HTML stránku s og:image na localhost:3000. Skutečný výkon s produkčním prostředím a vliv na kvalifikované poptávky je třeba vyhodnotit po případném schváleném nasazení.

Náhled: http://127.0.0.1:3124/ — produkční sestava, bez commitu/pushe/deploymentu.
Rollback po budoucím schváleném nasazení: předchozí produkční e3d30e1; před nasazením znovu ověřit, že main mezitím nezměnil někdo jiný.
