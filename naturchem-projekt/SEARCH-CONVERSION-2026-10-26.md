# Návaznost organického vyhledávání na poptávku

Stav: lokální příprava, bez produkčního pokynu. Základ `d74d11a`, větev `codex/search-conversion-2026-10-26`. Pracovní kopie Cursoru není měněna.

## Výchozí stav a rozhodnutí

GSC odečteno 26. 10. za 27. 9.–24. 10. proti stejně dlouhému období 30. 8.–26. 9.; české hledání Web / všechna zařízení. Pozorování: rostoucí viditelnost, nižší souhrnné CTR, slabé vibrace a málo dat pro osvětlení a mikroklima. Google AI je podmnožina Web, nesčítat. GA4 ukazuje větší počet úspěšných odeslání, nikoli potvrzených kvalifikovaných přijatých zakázek. Změna analytického souhlasu 21. 10. omezuje srovnatelnost. Dnešní vydání UX není součástí dat do 24. 10. Soukromé přesné odečty a výhrady jsou ve výstupním protokolu `naturchem-search-review-2026-10-26.md`, nikoli v repozitáři.

Žádná garance první stránky ani AI doporučení. Není důvod hromadně měnit titulky a obsah, který právě získává viditelnost. Stávající experimenty nejsou tímto krokem restartovány. Jde o návrh další společné fáze, ne o čistý izolovaný A/B test.

## Změny a hypotézy

| Stránka / problém | Místní změna | Očekávaný přínos a měření |
| --- | --- | --- |
| Článek o provozním řádu: přednost měla obecná měření emisí | Provozní řády jako první související služba, vhodný předvyplněný dotaz, pokud v těle dosud není | Snazší relevantní cesta. GA4 zdrojový článek → služba / formulář → `generate_lead`; obchodně potvrzená poptávka |
| Článek o oznámení EIA | Přesná EIA služba; stávající přímá poptávka v těle se neduplikuje | Zachovat EXP-011 a omezit nesouvisející nabídky. Hodnotit celou navazující fázi, nepřisuzovat efekt jedinému odkazu |
| Článek o kolaudaci celé výrobní haly — doplnění 29. 10. | První související službou je kompletní Měření pro kolaudaci místo pouze hlukového měření; dalšími pracovní prostředí a osvětlení, nikoli chemická administrativa. Přesný výběr ve všech třech jazycích; hlukově specifický článek se nemění | Relevantnější návaznost na hlavní obchodní priority. Sledovat vstupy článku a návazné skutečně odeslané poptávky; nepočítat pouhý klik jako lead |
| Vibrace | Tři krátké body služby, podklady k cenové nabídce a předvyplnění konkrétního zadání | Vysvětlit ruce / celé tělo a přípravu nabídky. GSC české komerční dotazy, vstupy služby a úspěšná odeslání |
| Mikroklima | Krátká informace k nabídce a předvyplnění, zachované úplné seznamy rozsahu a výstupů | Menší tření bez dalšího dlouhého obsahového bloku. Měřit jako vibrace |
| Doklad praxe u dvou služeb | Reuse již ověřených případů: ruční nářadí v kovovýrobě / mikroklima v automobilové výrobě; fotografie přesně dané zakázky | Věrohodnější nabídka a konkrétní cesta na referenci, nikoli vymyšlený výsledek zakázky |
| Článkové výzvy k poptávce | AST rozpozná skutečný odkaz na vlastní formulář; kontextová výzva se pak nepřidá, odkazy na služby zůstanou | Snížit opakování. Odborný text ani zdrojové odkazy se nemění |
| Studijní záměr přicházející na pražskou stránku měření — doplnění 29. 10. | Jediný přímý odkaz na hlukové studie u již existujícího rozlišení „Měření, nebo studie“ | Správná návaznost z výsledku hledání bez přepisu titulku nebo prodlužování odborného výkladu. Vstupní stránka → studie → skutečně přijatá poptávka; nikoli garance pořadí |
| Upozornění GSC na Product bez offers/review/aggregateRating | Katalogový detail se značí jako WebPage o přístroji; firma a výrobce zůstávají identifikováni | Opravit neodpovídající rich-result značení. Nejde o blokaci indexace ani slib vyššího pořadí |
| Sitemap s historickým společným datem | Výslovná stabilní revize pouze dvou českých služeb, české pražské landing page s novým odkazem a existujících produktových detailů všech jazyků | Pravdivé upozornění na změnu; bez build-time data a bez plošného předstírání čerstvosti |

Ceny jsou na dotaz. Nikde se nepřidává cena 0, vymyšlená recenze, termín měření ani nová akreditace. Nové klientské identity a výsledky se nezveřejňují. Dvě fotografie jsou již veřejné statické AVIF/WebP varianty s rozměry a odloženým načtením; nevzniká nová transformace, externí služba ani klientský JavaScript.

## Primární technické zdroje

- Google Product snippets: https://developers.google.com/search/docs/appearance/structured-data/product-snippet — vyžadovaný name a alespoň offers, review nebo aggregateRating. Offers vyžaduje skutečnou cenu. Kontrola 26. 10. 2026.
- Schema.org WebPage: https://schema.org/WebPage — katalogový dokument o přístroji, nikoli neexistující veřejná obchodní nabídka. Kontrola 26. 10. 2026.
- Google AI features: https://developers.google.com/search/docs/appearance/ai-features — běžné SEO, dostupný relevantní text a pravdivá strukturovaná data; žádné speciální garantované „GEO skóre“.

## Další krok až po dostatečných datech

Nynější titul hlukové studie zatím neměnit. Po ověření nového crawlu a po 28 úplných dnech od poslední relevantní fáze (při nízkém objemu 56) znovu porovnat české studijní dotazy, zařízení a CTR při srovnatelné pozici. Pokud komerční varianty dále získávají zobrazení bez kliknutí, připravit jediný snippetový test na této URL s konkrétním rozsahem a cenou na dotaz, nikoli s fiktivní cenou. Výchozí varianta zůstává zachována; žádný test nebyl aktivován.

Před požadavkem na nové podklady nejprve ověřit dostupnost již dříve zpřístupněného archivu a zakázkové knihy v odpovídajícím prostředí. Dostupnost se může měnit; starší poznámka o chybějícím připojení není důkazem dnešního stavu. Nový konkrétní případ vibrací VZV či osvětlení musí mít originální protokol a odpovídající neupravenou fotografii. Bez nich se nové případové tvrzení nevytváří. Zadavatel je externí správce OSVČ, nikoli zaměstnanec nebo vlastník NATURCHEMu; nejistá odborná tvrzení ověřuje odpovídající odborník firmy.

## Ochrany, ověření a návrat

- Zachovat množinu veřejných URL, titulky, descriptions, canonical, hreflang, H1, právní zdroje a data článků; 593 výchozích sestavených veřejných HTML zaznamenáno soukromě před změnou.
- Zachovat formulář, měření úspěšného odeslání, souhlasy a způsob publikace. Žádná testovací poptávka ani požadavek na nové indexování.
- Před návrhem vydání: kompletní `npm run verify`, místní SEO smoke a vizuální kontrola desktop/mobil; výsledky doplnit po dokončení.
- Vydání jen po novém výslovném souhlasu. Před ním znovu ověřit aktuální main/produkci a rozdíly, zachovat produkční deployment jako návrat. Lokální změny jsou oddělené od Cursoru a lze je vyřadit z vydání bez přepisování jeho práce.

### Dokončené místní ověření

**Poslední stav po kolaudační opravě, 29. 10. 2026:** nový celý `npm run verify` s build/postbuild PASS; přesná trojice odkazů ověřena ve všech třech sestavených článcích. GET-only SEO smoke 586 sitemap adres + 305 dalších interních odkazů, 891 celkem, 0 chyb. Soukromý neměnný baseline: všech 593 původních title/meta/H1/canonical/hreflang/robots zachováno, JSON-LD změněno pouze u zamýšlených 69 katalogových detailů. Zdroj a data článku ani hosting, analytika a backend formuláře se nemění. Přezkoumán diff, bez cizí práce Cursoru nebo hostingového prototypu. V prohlížeči trojice karet čitelná na desktopu 1280 px / obsah 1265 px i mobilu 390 px / obsah 375 px; bez vodorovného přetékání, dočasný viewport vrácen. Nový aktuální místní náhled na portu **3142**; starší údaje portu a sestavení níže jsou historie. Žádný commit, push, merge, publikace ani nasazení. Před případným vydáním znovu ověřit main/produkci a návratový deployment. Vercel zůstává, migrace je výslovně zastavená.

**Nový místní zásah 29. 10.:** cílený stránkový a dotazový rozpad v GSC podpořil krátký přímý přechod z existujícího měřicího přehledu do nabídky studií. Přidáno volitelné `nextStep` pouze k jedné sekci jediné české stránky; ostatní obsah, staré odkazy a jazykové verze se nemění. Regresní test chrání rozsah, umístění v přehledu, úplnost dosavadních cílů, nepřítomnost české výzvy v EN/DE a skutečný stabilní lastmod. Následné úplné ověření po této nové změně je dokončeno: verify/build/postbuild PASS, opakovaný SEO smoke 891 GET kontrol bez chyby a nové srovnání všech 593 původních metadat/H1 PASS. Lokální gzip součet posledního sestavení 15 682 521 B; rozdíly mezi běhy nejsou měřením účtování ani výkonu. Skutečný klik na nový odkaz otevře správnou stránku studií s odpovídající poptávkou. Odkaz vizuálně a rozměrově ověřen při 390 px a 1280 px, bez přetékání; dočasný viewport vrácen. Dnešní přístup do Bingu potvrdil také indexaci hlavní stránky studií; žádná žádost o nové indexování nebyla odeslána. Místní zásah není aktivovaný experiment ani povolení k produkci.

**Aktualizace 29. 10. 2026:** aktuální GitHub main i Vercel Ready / Production jsou stále `d74d11a`; připravená sada zůstává místní. Nové úplné `npm run verify` včetně buildu a všech postbuild kontrol PASS. Lint má původní nesouvisející varování; nejsou vydávána za nové opravy. Nový GET-only SEO smoke: 586 sitemap adres a 305 dalších interních odkazů, 891 celkem, 0 chyb. Čerstvé srovnání s uloženým neměnným baseline chrání všech 593 původních množin title/meta/canonical/hreflang/robots i H1; mimo záměrných 69 katalogových detailů se JSON-LD nemění. Součet lokálního gzip HTML 15 670 531 → 15 683 512 B není fakturace Vercelu ani úspora provozu. Tato sada nepředstírá vyřešení ISR kvóty.

Znovu ověřena skutečná cesta Měření vibrací → odpovídající předvolená služba a konkrétní text formuláře, bez odeslání. Mobilní mikroklima při 390px viewportu: obsah 375 px, bez horizontálního přetékání; správná existující fotografie konkrétní realizace, statický 384px AVIF. Dočasná velikost prohlížeče vrácena. Místní náhled stále na portu 3139. Žádný nový commit, push, merge, deployment nebo žádost o indexaci. Nasazení vyžaduje konkrétní produkční pokyn; není automaticky součástí obecného cíle online růstu.

`npm run verify` včetně produkčního sestavení PASS; původní varování lint/build nejsou důkazem nového problému. Změněné zdrojové a testovací soubory po odstranění nepoužité lint výjimky bez lint chyb i varování. Přidaná kontrola výsledného katalogu PASS pro všech 69 jazykových produktových detailů; WebPage, výrobce a breadcrumbs, bez neplatného Product či vymyšlených nabídek a recenzí.

Soukromé srovnání 593 veřejných HTML před/po: stejná množina URL, všechny title/meta/H1/canonical/hreflang/robots zachovány, jiné JSON-LD jen v zamýšleném rozsahu. Zdroj a data všech článků, veřejná obrazová aktiva, souhlasy, backend formulářů, Vercel/ISR konfigurace a závislosti beze změny. Rozpočty sestaveného HTML/CSS a mobilní ochrany PASS; nejde o měření Lighthouse ani o garanci spotřeby Vercelu.

SEO smoke náhledu: 586 sitemap URL a 305 dalších interních adres, celkem 891 GET kontrol, 0 chyb. V prohlížeči ověřeno desktopové rozložení vibrací, předvyplněná služba i text formuláře bez odeslání, mobilní mikroklima a jeho přesná referenční kotva, odpovídající statický 384px AVIF a čitelnost/šířka při viewportu 390 a 320 px (obsah 375/305 px, bez vodorovného přetékání). Článek o provozním řádu vede nejprve na Provozní řády a nevkládá druhou poptávku. Dočasný mobilní viewport vrácen. Náhled port 3139. Žádný commit, push, produkční zásah ani odeslaná poptávka.
