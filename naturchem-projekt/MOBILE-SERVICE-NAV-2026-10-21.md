# Přehlednější mobilní nabídka služeb — lokální návrh 21. 10. 2026

## Zadání a výchozí stav

Vlastník upozornil na nejasnou kombinaci šesti hlavních služeb a dalších rozbalovacích skupin. Ve skutečném kódu nejde o zdvojené odkazy: šest vybraných služeb bylo z kategorií vyjmuto. Tím však kategorie neobsahovaly celý svůj rozsah a mobil míchal dvě různá pravidla řazení. Při předchozí skutečné zkoušce měla rozbalená česká větev Služby při 390 px přibližně 663 px ještě před otevřením podskupin.

## Nová struktura

Po rozbalení Služby zůstává stávající Přehled služeb a tři úplné skupiny Měření, Studie a výpočty, Dokumentace a povolení. Všechny dosavadní cíle jsou uvnitř příslušné skupiny, ve stejném pořadí jako desktop. Žádný samostatný blok šesti zkratek. Jednotný princip CS/EN/DE, žádná služba odstraněna ani přejmenována.

Celý název skupiny a šipka jsou jeden nativní summary ovladač. Dotyk na text již neodchází na přehledovou stránku místo rozbalení. Přechod na úplný katalog zůstává samostatným jasným odkazem Přehled služeb. Desktopové megamenu, homepage karty, URL služeb a ostatní navigační větve jsou nedotčené. Záměrně nepřidáno automatické zavírání ostatních skupin nebo další podúroveň.

Zachovány nové jemné animace a jejich bezpečné nativní chování bez animace, klávesnice, stávající zavření po navigaci i přístup k poptávce. Odstraněn již nepoužívaný rozdělovací helper a CSS šesti zkratek. Bez nové závislosti, klientského stavu, datového přenosu, obsahu, URL, SEO metadat, strukturovaných dat, měření nebo změny cache/ISR.

## Hypotéza a ověření

Předpoklad: kratší výchozí rozbalení a úplné předvídatelné kategorie usnadní nalezení vhodné služby. Nejčastější služba vyžaduje otevření své kategorie; je to vědomý kompromis za jednoznačnou strukturu a kratší vizuální seznam, nikoli tvrzení o menším počtu klepnutí na každou službu. Konverzní přínos dosud nebyl naměřen. Neměnit za tímto účelem indexované URL nebo zakládat nový překrývající se SEO experiment.

Regresní test nyní kontroluje skutečně vykreslenou mobilní nabídku, nikoli už zrušené pomocné rozdělení. V CS/EN/DE vyžaduje přesně tři skupiny, shodný úplný seznam a pořadí dosavadních služeb v každé skupině, bez duplicitních destinací, bez odkazů uvnitř rozbalovacích nadpisů a bez horního bloku šesti služeb. Dosavadní kontroly desktopových kategorií, úplnosti 24 českých navigačních odkazů, URL a obchodní cesty zůstaly zachovány. Testy animace i časování počítadel zachovány.

Celé `npm run verify` včetně buildu 631 rout a postbuild rozpočtů PASS (devět stávajících lint upozornění, žádná chyba). Cílené B2B, motion/count-up a lint testy PASS. Neměnný baseline dd9a751 potvrdil zachování 588 zákaznických dokumentů, SEO/canonical/hreflang všech 591 HTML dokumentů a robots/sitemap; tři kontakty odpovídají samostatně otestovanému zkrácení formuláře. Místní smoke test ověřil 584 URL a 302 dalších odkazů bez chyby; routing včetně jazyků, přesměrování, 404 a validačního odmítnutí prázdného API požadavku PASS. Žádné odeslání skutečné poptávky.

Skutečný prohlížeč: při 390 px má rozbalená větev Služby s dosud zavřenými kategoriemi 307 px místo předchozích přibližně 663 px (−54 %). Celý nadpis Měření rozbalí osm služeb bez změny URL; Enter i Space fungují, zavírání dokončí animaci a obnoví nativní stav. Při 320 px žádný vodorovný přesah. Přechod Měření emisí zavře menu, načte službu a její CTA otevře kontakt; skutečný formulář uvádí „Poptáváte: Měření emisí“. Escape zavře mobilní panel a odblokuje posouvání stránky. Desktop 1 366 px zachovává tři sloupce a 24 položek. Tři české kategorie obsahují původních 8 / 7 / 9 služeb; nejde o umělé sjednocování počtů. Nová závislost ani přenos nepřidány, odstraněním nevyužitého CSS klesl surový rodinný stylesheet o 211 B (nikoli měření přínosu pro účtování).

Žádný commit, push, merge nebo produkční nasazení. Pracovní kopie zůstává izolovaná od Cursor checkoutu. Před případným samostatně schváleným vydáním znovu ověřit main a všechny předchozí lokální návrhy; dosavadní Ready dd9a751 je výchozí rollback. Případný zásah označit jako společnou prezentační fázi s ostatními nevydanými úpravami, ne jako již prokázaný SEO nebo kvalifikační uplift.
