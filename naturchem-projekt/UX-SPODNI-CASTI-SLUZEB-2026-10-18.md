# Dolní části služeb — samostatný lokální návrh 18. 10. 2026

Výchozí schválené vydání: `e9c0565698d504a8c00bda7f5e436738ad1d6b29`. Nový návrh je na samostatné větvi `codex/service-lower-visual-2026-10-18`, bez commitu, pushe a nasazení. Souhlas s předchozím balíkem se na něj automaticky nepřenáší.

## Pozorovaný nedostatek

Vlastník upozornil, že kromě homepage působí zvláště dolní poloviny služeb přetextovaně a neatraktivně. Původní audit sice ověřil funkčnost a dostupnost rozbalitelného obsahu, ale nedostatečně posoudil celkový vizuální dojem této části.

Při šířce PC 1440 px je pod „Podrobnosti ke službě“ téměř výhradně dlouhá bílá plocha, tenké oddělovače, rozbalovací názvy a drobné odkazy. Podrobnosti, FAQ a navazující služby nemají dost odlišnou vizuální roli. Otevřený obsah se roztahuje přes celou šířku. Výchozí podoba je zaznamenaná na snímku `naturchem-service-bottom-desktop-before-2026-10-18.png` v místních výstupech. Jde o kvalitativní zjištění z prohlídky a zpětné vazby, nikoli měření opuštění stránky.

## Návrh

- Společný podrobnostní blok má jemně odlišenou plochu, jasný nadpis a kompaktní bílé tematické panely s ikonami a zřetelným rozbalením. Barevná rodina odpovídá měření / studiím / dokumentaci.
- Na PC je FAQ samostatný vedlejší panel; odborné podrobnosti a dotazy nepokračují v jediné nerozlišené dlouhé řadě. Bez FAQ zůstává obsah na celou šířku. Telefon používá jeden sloupec a původní pořadí.
- První tři navazující služby jsou karty s odpovídající ikonou, čitelným názvem a šipkou. Další související odkazy zůstávají v dosavadním rozbalení. Situační vstupní stránky používají stejné vizuální pravidlo pro své dosavadní odkazy.
- Žádný nový obchodní slogan, právní tvrzení nebo opakované CTA. Všechny původní texty, FAQ, odkazy a zdroje jsou zachovány ve stejném pořadí v serverovém HTML, pouze jinak prostorově a graficky uspořádané.
- Stejný návrh je sdílený skutečnými službami i situačními vstupy (např. kolaudace nebo nová hala). Nevytváří se jednotlivé ručně rozcházející se šablony.

## SEO a rychlost

Žádné mazání ani přepisování URL, titulku, H1, metadat, schémat, hlavních textů nebo odkazů. Nativní `<details>` zůstávají přístupné bez JavaScriptu a nic se nenačítá až po kliknutí. Pro vizuální vedení se využívají existující SVG ikony; žádné nové obrázky, fonty, knihovny, síťové požadavky nebo klientské chování. Horní poloviny služeb a homepage zůstávají beze změny.

Hypotéza: zřetelné oddělení odborných témat, odpovědí a dalších služeb usnadní skenování a výběr relevantního obsahu. Výsledek po případném nasazení hodnotit přes kvalifikované poptávky, návazné zakázky a zařízení/zdroj návštěvy; neprohlašovat růst konverzí jen podle vzhledu. Přínos jednotlivých současných vizuálních změn nelze bez dostatečného vzorku oddělit.

Před předáním: vizuální ověření otevřených i zavřených panelů, dlouhých odpovědí, telefonu/tabletu/PC, klávesnice, odkazů, zachování technického textu a metadat, `npm run verify` a místní SEO smoke. Žádná skutečná poptávka se při kontrole neodesílá.

## Výsledky lokální kontroly

- Návrh používají obě společné šablony, celkem **147 sestavených jazykových stránek** služeb a situačních vstupů (49 českých + EN/DE varianty). Nejde o 147 ručně prohlédnutých stránek.
- `npm run verify`: PASS se všemi obsahovými, konverzními, cache a výkonovými kontrolami, 9 dříve existujících upozornění lintu a 0 chyb. Po finálním omezení mobilních rozestupů a odstranění zděděného 672px omezení šířky navigačního seznamu ještě celé `npm run build` s postbuild kontrolami: PASS.
- Přesné porovnání **582 veřejných adres**: H1, title, SEO/OG údaje, canonical, hreflang, JSON-LD, interní cíle i celý odborný text beze změny. Lokální HTTP smoke **584 + 302 kontrol, 0 chyb**. Autoritativní zdroje, FAQ, právní upřesnění i kontextové předvyplnění poptávek zachovány.
- Prohlížeč: **28 responzivních kontrol** šesti českých služeb/situačních vstupů při 320, 390, 768 a 1440 px, navíc úzké EN/DE varianty. Bez horizontálního přetékání, tematické ovladače alespoň 44 px vysoké; navigační karty využívají celou dostupnou šířku. Zvlášť prohlédnuté měření emisí, IPPC a nová hala, otevřený i zavřený obsah. Klávesnice má viditelný 3px focus a Enter správně otevírá/zavírá nativní podrobnost.
- U měření emisí má zavřený blok „Podrobnosti ke službě“ na PC 1440 px nově **432 px proti 634 px** (asi o 32 % kratší). Na telefonu 390 px je blok **730 px proti 694 px**, celá stránka **4 228 px proti 4 074 px** (asi o 4 % delší kvůli odděleným panelům a kartám). Mobilní návrh tedy není kratší; přínosem je čitelnější hierarchie a jasnější dotykové cíle. Tento kompromis je potřeba při vizuálním schválení posoudit.
- Homepage HTML zůstává CS **133 352 B**, EN 133 631 B, DE 134 992 B. Na měření emisí přibylo přibližně 9,9 kB syrového HTML, lokálně asi 1,2 kB gzip kvůli serverově vykresleným ikonám a struktuře. Žádné nové obrázky, klientský JS, externí skripty ani další požadavky. Výkonové rozpočty se nezvyšovaly; nejde o nové měření PageSpeed.
- Snímky a DOM měření: `naturchem-service-bottom-{desktop,mobile}-{before,after}-2026-10-18.png`, `naturchem-service-bottom-open-desktop-2026-10-18.png`, `naturchem-service-bottom-visual-checks-2026-10-18.json` v lokálních výstupech.

Stav: **jen lokálně, bez commitu a pushe**. Produkce je nadále schválený `e9c0565`; výraznější návrh spodních částí k ní není přimíchán. Očekávaný obchodní přínos dosud není naměřený.
