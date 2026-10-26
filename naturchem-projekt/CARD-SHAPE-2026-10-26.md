# Ostré hrany obsahových karet — lokální úprava 26. 10. 2026

## Zadání, baseline a hypotéza

Vlastník požaduje ostré rohy dlaždic na celém webu. Výchozí místní návrh kombinoval společný 12px poloměr s individuálními 6–18px rámečky a výrazně zaobleným rohem úvodních fotografií služeb. Nejde o nedostatek zjištěný v GA4 ani nový experiment s pořadím ve vyhledávání.

Hypotéza: jednotná geometrie obsahových bloků podpoří konzistentní, technický a profesionální dojem. Dopad na kvalifikované poptávky není změřen. Jde o navazující lokální designovou fázi, ne o souběžný spuštěný produkční experiment.

## Rozsah a ochrany

- Společný token obsahových ploch `--radius-sharp` je 0. Samostatné poloměry ovládacích prvků a pilulek se nemění.
- Sjednoceny karty a fotografie homepage, katalogu a detailů služeb, rozsahu laboratoře, referencí, článků, FAQ, kontaktu, oborových stránek a nabídky techniky. Upraveny také samostatné responzivní styly, aby se zaoblení nevrátilo na mobilu.
- Kruhové ikony, šipky, rozbalovací značky, běžná tlačítka, formulářová pole a prvky cizích služeb zůstávají samostatně stylované. Žádný plošný reset všech elementů nebo pravidlo `!important`.
- Beze změny textů, obchodních priorit, obrázkových souborů, odkazů, URL, canonical, hreflang, strukturovaných dat, měření konverzí, souhlasu cookies nebo načítání mapy. Žádná nová klientská knihovna, obrázek či externí požadavek.
- Hlavní pracovní kopie Cursoru nedotčena. Bez commitu, push, merge, publikace, nasazení, testovací poptávky a změny tarifu.

## Ověření

Nový test `scripts/verify_card_corners.js` je součástí `npm run test:visual-cohesion` a úplného verify. Kontroluje společný token, 74 konkrétních deklarací včetně responzivních přepisů a zachování kruhových ikon i tvaru ovládacích prvků.

Před novým sestavením uložen kontrolní součet H1, metadat, JSON-LD, formulářů a veřejných odkazů/zdrojů u 624 lokálních HTML dokumentů: `0164332baf455efabc06d3578f4695a3d2bbb515b0b7aff324d7cbdf41be09f3`. Po sestavení je shodný. Kompletní `npm run verify` včetně build a postbuild prošlo; 889 lokálních GET kontrol bez chyby. Prohlížeč potvrdil ostré karty napříč hlavními typy stránek, včetně šířek 390 a 320 px bez vodorovného přetékání. Otevření seznamu látek funguje, kruhové šipky i ovladače jsou zachovány. Dočasné mobilní zobrazení vráceno. Dokončené výsledky a snímky jsou v soukromém QA protokolu.

## Měření a návrat

Před případným nasazením posoudit společný balíček vůči aktuálnímu main a znovu vyžádat produkční souhlas. Budoucí obchodní měření: kvalifikované a skutečně přijaté poptávky, `generate_lead` / organické relace a `form_start` → `generate_lead`, odděleně mobil/desktop; ne samotné kliknutí. Design sám o sobě není doloženým SEO zlepšením.

Návrat pouze této úpravy: obnovit původní poloměry z kontrolovaného rozdílu CSS; obsah a předchozí místní návrhy nemazat. Návrat produkce se nyní neprovádí, protože tato fáze není nasazena.
