# Audit vizuálního vedení zákazníka — 18. 10. 2026

## Rozsah a výchozí stav

Produkce i načtený `origin/main`: `2989d4eb689aa4d80d166324fb9e1238cbb0fbaa`. Před touto revizí již existuje vlastníkem kladně hodnocený **lokální** návrh barevných situačních karet homepage (viz `UX-VYRAZNEJSI-ROZCESTNIK-2026-10-17.md`). Zachován beze změny.

Cílem není nové plošné překreslení webu. Kontrolujeme první orientaci, rozlišení hlavního a vedlejšího kroku, čitelnost, doložení odbornosti a cestu k poptávce či přímému kontaktu. Jde o kvalitativní audit rozhraní, nikoli uživatelský výzkum nebo důkaz růstu konverzí.

V prohlížeči kontrolované reprezentativní stránky a společné šablony:

| Typ | Stránka / kontrolovaná cesta | Závěr před úpravou |
| --- | --- | --- |
| Homepage | `/`, `#home-needs-heading`, `#home-demand-paths-heading` | Barevný místní rozcestník má zřetelnou prioritu, celé karty jsou odkazy. Šest služeb je další úroveň; role zákazníků nejsou falešná tlačítka. Zachovat. |
| Katalog služeb | `/sluzby/` | Měření a studie nemají stejně zřetelné směrové vodítko jako čtyři dokumentační odkazy. Světlá plocha bez podtržení může vypadat jako informační popisek. Upravit. |
| Detail služby | `/sluzby/mereni-emisi/` | Jednoznačná hlavní poptávka, druhotný skok na podklady, skutečná fotografie, doklady a stručná ukázka práce; detaily rozbalitelné. Zachovat. |
| Situace zákazníka | `/mereni-pro-kolaudaci/` | Stejná rozhodovací hierarchie jako detail služby. Konkrétní nabídka a rozsah bez předstírání univerzální povinnosti. Zachovat. |
| Reference | `/reference/` | Loga a skutečné fotografické ukázky, navazující služba a kontextová poptávka, další realizace v přehledných skupinách. Zachovat. |
| Přehled článků | `/poradna/` | Vyhledávání, témata (na telefonu nativní výběr), obrázky, názvy a stránkování. Není nutné všechny články nahrávat najednou. Zachovat. |
| Dlouhý článek | změna integrovaného povolení IPPC | Obsah s kapitolami, na mobilu rozbalitelný; stručné shrnutí a oddělená hlavní četba. Zachovat. |
| Kontakt | `/kontakt/` | Formulář je jasný, ale na telefonu 390 px je hlavní přímý telefon až přibližně 1 742 px od začátku stránky. Návštěvník musí formulář přejít. Upravit. |
| Důvěryhodnost | `/akreditace-autorizace-dokumenty/`, `/o-spolecnosti-naturchem/` | Doklady jsou dostupné přímo z úvodu, údaje a skuteční odborníci oddělení od obchodní nabídky. Zachovat. |

Při následné kontrole tabletu 768 px se navíc potvrdila chyba společné fotografické hlavičky: text již přechází na celou šířku, ale fotografie vpravo dosud nemá odpovídající tmavý překryv. Například dlouhý titul katalogu zasahuje do světlé fotografie. Není to nedostatek obsahu, ale chybějící přechodový responzivní stav.

Nejde o ruční prohlídku každé z 582 adres ani o nové srovnání konkurence. Shodné šablony a SEO ochrany doplňuje automatická kontrola všech sitemap adres. Úpravy odborných nebo právních tvrzení nejsou součástí této revize.

## Provedené lokální změny

1. **Kontakt bez hledání telefonu:** do úvodu před formulář přidán stávající hlavní telefon a firemní e-mail. Oba jsou skutečné `tel:` / `mailto:` odkazy s ikonou, směrovým vodítkem a lokalizovaným přístupným názvem. Na telefonu pod sebou, bez dalších vět, nových kontaktních osob nebo slibů. Formulář i jeho kontextové předvyplnění zůstávají beze změny.
2. **Zřetelně klikatelné kategorie služeb:** první dvě celoplošné odkazy mají podtržený název, jemně barevný podklad a kontrastní kruhovou šipku dolů. Čtyři navazující dokumentační odkazy dostaly stejné podtržení. Beze změny názvů, pořadí, URL, počtu odkazů a rozbalování; žádné „nejhledanější“ bez dat. Mobilní rozložení odděluje ikonu a šipku od plné šířky textu.
3. **Čitelná společná hlavička na tabletu:** pro šířky 768–1023 px přidán tmavý překryv již zobrazené pravé fotografie v `PageHeroBand`. Nadpis ani další text se nemaže, fotografie se nestahuje znovu a zachovává dosavadní rozměry i ořez. Pravidlo se netýká homepage, kompaktních služeb s vlastním úvodem, obyčejného kontaktu bez fotografie ani PC a telefonu mimo tento interval.

Změny využívají existující písmo a SVG ikony; žádný nový obrázek, balíček, animace nebo externí tracker. Nové kontakty jsou serverově vykreslené, bez klientského JavaScriptu. Styly katalogu jsou v již oddělené rodině služeb, styly kontaktu pouze na kontaktní trase.

## Hypotéza a vyhodnocení

- **Katalog:** zřetelná akčnost by měla snížit přehlédnutí kategorií. Měřit následný výběr konkrétní služby (`select_service` s existujícím umístěním `service_catalog`) a skutečné úspěšné poptávky. Samotný skok v kategorii není dokončená poptávka.
- **Kontakt:** dostupnost telefonu a e-mailu před formulářem by měla zkrátit cestu návštěvníkům, kteří chtějí volat nebo poslat podklady e-mailem. Již existující `click_phone` a `click_email` fungují i pro nové odkazy a jen se statistickým souhlasem. Telefonický klik neprokazuje uskutečněný hovor; e-mailový klik neprokazuje doručený dotaz.
- Primárně sledovat `generate_lead` a obchodně potvrzené přijetí relevantních poptávek. Přímé kontakty mohou některé zájemce převést z formuláře na jiný kanál; pokles formulářů sám o sobě proto nemusí být zhoršení.
- Tyto úpravy spolu s barevnými kartami tvoří jeden lokální balík. Po případném nasazení nelze z malého vzorku samostatně připisovat výsledek jednotlivým kosmetickým zásahům. Porovnávat stejně dlouhá období, zařízení a zdroje návštěv; před nasazením není co hodnotit jako konverzní zlepšení.

## Ochrany

Žádná změna odborných textů, právních údajů, metadat, strukturovaných dat, URL, interních cílů, obrázků, dat článků, publikačního plánu nebo doručování formuláře. Před dalším sestavením zaznamenán stav všech 582 veřejných adres pro kontrolu totožnosti metadat, H1, schémat, interních odkazů a odborného obsahu. Nepřidávat nové analytické skripty nebo zvedat výkonové rozpočty.

Tato revize je pouze lokální. Bez commitu, pushe nebo produkčního nasazení; žádná skutečná zkušební poptávka se neodesílá.

## Výsledek ověření

- `npm run verify`: PASS, včetně sestavení a výkonových, obsahových a konverzních kontrol. Jen 9 dříve existujících upozornění lintu, žádná chyba. Po konečné opravě tabletového kontrastu a zarovnání ikon také cílený lint, audit-quality test a celé `npm run build` s postbuild kontrolami: PASS.
- Ochranné porovnání všech **582 veřejných URL** proti zaznamenanému výchozímu sestavení: totožné H1, titulky, popisy/OG/robots, canonical, hreflang, JSON-LD a interní cíle. Všechny původní odborné texty zachované; přidány jen dva stávající kontakty před formulářem.
- Lokální HTTP smoke: **584 základních adres + 302 dalších interních cílů, 0 chyb**. Žádný plošný crawl produkce, zatížení Vercelu nebo odeslaný formulář.
- Responzivní kontrola kontaktu a katalogu: **320, 390, 768, 1024 a 1440 px**, navíc úzká EN/DE varianta, celkem 14 kontrolovaných pohledů. Žádné horizontální přetékání, všech 6 kategoriálních odkazů má nejméně 44px dotykovou výšku; přímé kontakty 52 px. Ikony mobilního katalogu jsou zarovnané s názvy.
- Ověřeno skutečné otevření a doscrollování kategorie „Studie a výpočty“. Klávesnice přesune fokus mezi odkazy; kategorie má 3px modré a kontakt 3px bílé zvýraznění. Telefon ani e-mail se v rámci testu neaktivoval.
- Telefon na kontaktu při šířce 390 px nyní začíná přibližně **258 px** od začátku, oproti původním **1 742 px**. Je před formulářem a viditelný v prvním pohledu. Nejde o měření skutečného chování návštěvníků.
- Fotografie katalogu a dlouhého IPPC článku na tabletu vizuálně ověřeny s novým tmavým překryvem; text je nad fotografií čitelný. Mobilní a desktopová varianta mimo cílový interval se tímto pravidlem nemění.
- Homepage HTML této revize beze změny: CS **133 352 B**, EN 133 631 B, DE 134 992 B; zdrojové oddělené homepage CSS zůstává **65 093 B**. Nezvyšovaly se žádné rozpočty ani počet obrázků. Tyto kontroly nejsou nové měření Lighthouse / Core Web Vitals a nedokládají skóre 100.

Podrobné měření a snímky jsou v lokálních výstupech `naturchem-guidance-visual-checks-2026-10-18.json`, `naturchem-guidance-seo-verification-2026-10-18.json`, `naturchem-contact-mobile-after-2026-10-18.png` a `naturchem-catalog-{mobile,tablet,desktop}-after-2026-10-18.png`.

Závěr: základní strukturu hlavních šablon ponechat, opraveny tři konkrétní překážky orientace a kontaktování. Zlepšení kvalifikovaných poptávek je hypotéza k ověření po případném schváleném nasazení, nikoli již dosažený výsledek.

## Souhlas s vydáním

Vlastník dne 18. 10. 2026 výslovně požádal „Tak nahoď všechny změny“. Souhlas zahrnuje tento ověřený balík i dříve připravený barevný rozcestník homepage. Před nasazením znovu spuštěn celý `npm run verify`; výchozí produkce i načtený `origin/main` jsou shodné na `2989d4e`. Tato předchozí Ready produkční verze se zachová jako rollback. Vydání proběhne jedním fast-forward pushem do main správného repozitáře `Ikaros277/naturchem-web` a jedním navazujícím produkčním deploymentem, bez dalšího preview deploymentu nebo změny placeného tarifu.

Současná výhrada ke vzhledu dolních částí služeb otevírá další návrhovou práci. Nové výraznější úpravy dolních částí se nepřimíchají do právě schváleného a otestovaného balíku; budou zvlášť lokálně k prohlédnutí.
