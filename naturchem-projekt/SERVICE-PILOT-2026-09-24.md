# UX-SERVICE-2026-09-24 — lokální návrh služeb

## Produkční schválení 27. 9. 2026

Uživatel výslovně požádal o nasazení schváleného vizuálního návrhu. Přínosem je kratší, přehlednější struktura a přímá cesta k předvyplněné poptávce; růst konverzí je hypotéza, nikoli prokázaný výsledek.

- Před vydáním ověřen GitHub origin/main i produkční publication-state.json: shodný základ 2f9859b1ad8566447b6d20af35620c3512b3913a. Žádné novější změny Cursoru se nepřepisují.
- Vydání pouze úprav služeb, regresních testů a této evidence. Beze změny homepage, kontaktního API, analytických událostí, DNS, tarifu či globálního výkonového nastavení.
- Jeden fast-forward push odsouhlaseného commitu z pracovní codex/* větve do origin/main spustí standardní Git integraci Vercelu; bez dalšího preview/ručního deploymentu.
- Rollback: předchozí ověřený produkční deployment https://vercel.com/ikaros277s-projects/web-naturchem/89f2UfYmGvSGM8Zn5JX7yc37Bq87 (2f9859b). Při potřebě lze obnovit jeho produkční alias nebo provést cílený revert release commitu v nové codex/* větvi a znovu ověřit sestavení; žádný force push.
- Vyhodnocení po 28 úplných dnech: stejně dlouhé předchozí období, vstupy na služby, form_start a generate_lead, podíl a kvalita skutečně přijatých poptávek. U malého vzorku prodloužit období. Kliknutí není konverze; sezónnost a mix návštěvnosti oddělit od efektu návrhu.
- Předprodukční ověření 27. 9.: npm run verify PASS (16 stávajících lint upozornění, build 566 stránek), routing smoke PASS, všech 78 služeb PASS pro HTTP, šablonu, jeden H1, canonical, hreflang a schema. Homepage, kontakt, CS/EN FAQ, robots a sitemap HTTP 200. Změny zdrojového kódu homepage a kontaktního API proti origin/main jsou nulové.

Níže jsou historické záznamy lokální přípravy; jejich podmínka nového souhlasu byla splněna výše.

## Aktualizace 25. 9. 2026 — rozšíření po souhlasu s pilotem

Uživatel schválil směr návrhu emisí, požádal o odstranění příkladu zakázky a aplikaci na všechny služby. Souhlas platí pouze pro lokální návrh, nikoli pro produkci.

- Společná šablona ServiceDetailLayout pro všech 26 detailů služeb × CS/EN/DE (78 adres). Přehled /sluzby/ a homepage se nemění.
- Reference / příklad zakázky odstraněn ze stránek služeb, nikoli z webové sekce referencí. Technické typické situace zůstávají rozbalovací.
- Jedna původní tematická ilustrace, stručný přehled, dva kontextové odkazy do předvyplněné poptávky, panel podkladů, nativní rozbalovací detaily. Žádný nový klientský JavaScript.
- Vlastní texty, seznamy a ilustrace každé služby zachovány; bez přenosu odborných tvrzení z emisí na jiné služby. Měření, studie a dokumentace mají jemně odlišný odstín úvodu. Dlouhé názvy mají menší písmo.
- Service/BreadcrumbList/FAQPage/ItemList, URL a metadata chráněny; odkaz z měření hluku na studii zachován. Ostatní související odkazy jsou v HTML i při zavřeném rozbalovacím seznamu.
- npm run verify prošlo: 16 původních lint upozornění, žádná chyba, testy, typy a build 566 stránek. Rozšířený test ověřuje úplnost dat dedikovaných služeb ve třech jazycích.
- HTTP kontrola všech 78 adres: 200, nová šablona, jeden H1, správný canonical a základní schema.
- Routing smoke test prošel; žádná skutečná testovací poptávka nebyla odeslána.
- Plošný smoke prošel 505 adres ze sitemap a 227 dalších odkazů. Python hlásil reset spojení u FAQ (a jednou PDF), nikoli 404; samostatné kompletní načtení /faq/, /en/faq/ a daného PDF přes Node potvrdilo HTTP 200. Plošný test proto není označen jako bezvýhradný PASS. Nejde o změněné stránky služeb.
- Po rozšíření regresních testů znovu prošly test:b2b i lint všech upravených souborů. Automaticky obnovené obsahové indexy byly obsahově vráceny na baseline, aby návrh služeb nepřidával nesouvisející obsahové změny.
- Vizuálně ověřeny emise a EIA na desktopu, hluková studie a školení na mobilu, německé školení na tabletu. Šest hlavních služeb bez horizontálního přetékání při 320 px. Rozbalení detailu a přechod do formuláře potvrzeny: Poptáváte: Hlukové studie.
- Výška hlavního obsahu emisí při 1280 px nyní 2135 px (původní produkční baseline 2875 px, cca −26 %). Jde o úsporu prostoru, nikoli prokázaný růst konverzí.
- Nasazení zůstává podmíněno novým souhlasem a kontrolou aktuálního main. Hypotéza a plán následného měření z původního pilotu níže platí.

Následuje historický záznam pilotu před rozšířením:

Stav: pouze lokální, ke schválení vzhledu. Bez commitu, push nebo deploymentu. Větev `codex/service-emissions-pilot-2026-09-24`, základ produkční `2f9859b`. Oddělená pracovní kopie mimo původní adresář Cursoru.

Náhled sestavené aplikace: http://127.0.0.1:3114/sluzby/mereni-emisi/

## Podnět, baseline, hypotéza

Uživatel označil stránky služeb za příliš textové, dlouhé a graficky nepříjemné. Jde o uživatelem vyžádaný designový pilot, nikoli o změnu podloženou novými konverzními daty. V aktuálním stavu není experiment spuštěn na produkci a nekoliduje s měřením nasazení 23. 9.

Původní stránka má čtyři rovnocenné informační seznamy, dvě fotografie, referenci, doplňující informace, FAQ a rozsáhlé související odkazy. Hypotéza: stručná nabídka a dostupné podklady zlepší orientaci a počet kvalifikovaných zahájení/podání poptávky ze služby. Nejde o tvrzení dosaženého růstu SEO nebo poptávek.

Pozorovaná výška hlavního obsahu při zavřených detailech (stejný prohlížeč a viewport; bez hlavičky a patičky):
- Mobil 390 px: produkce 4488 px, návrh 3354 px, přibližně −25 %.
- Desktop 1280 px: produkce 2875 px, návrh 2328 px, přibližně −19 %.

## Návrh

- Jen česká `/sluzby/mereni-emisi/`; ostatní služby a EN/DE zachovávají původní šablonu.
- Jeden úvodní obrázek, stručné sdělení, poptávka a přímý odkaz na podklady.
- Tři stručné části rozsahu služby a kontrastní panel Co nám poslat. Žádné nové cenové nebo odborné sliby.
- Stávající anonymizovaná reference zachována; technické seznamy beze ztráty přesunuty do pojmenovaných nativních details.
- Pět původních FAQ zachováno včetně shodných strukturovaných dat. Tři navazující odkazy viditelné, ostatní v rozbalovacím seznamu; všechny původní odkazy stále v HTML.
- Metadata, canonical, hreflang, Service/Breadcrumb/FAQ/ItemList schema zachovány. Bez nové knihovny a nového klientského komponentového JavaScriptu pilotu.

## Inspirace

- https://www.enviform.cz/autorizovane-mereni-emisi/ — prohlédnuta i vizuálně: výrazný úvodní obraz a oddělení navazujících činností; dlouhé katalogové seznamy nepřebírány.
- https://www.teso-ostrava.cz/sluzby/mereni-emisi/ — obsahová kontrola: oddělení oprávnění a odborného rozsahu. Žádná jejich odborná tvrzení ani obrázky nekopírovány.
- Design zůstává vlastní NATURCHEMu, obraz je existující lokální asset.

## Ověření a další vyhodnocení

- `npm run verify` úspěšný: lint bez chyby (16 předexistujících upozornění), typy, všechny testy a build 566 statických stránek. Přetrvávají známá metadataBase upozornění.
- Nové regresní testy: pilot jen CS emise, původní technické seznamy, všechny schema typy, FAQ shoda, související odkazy, jeden obrázek, dva kontextové přechody do správně předvyplněného formuláře.
- Vizuální kontrola desktopu a mobilu 390 px, bez horizontálního přetékání také 320 a 768 px. Rozbalení odborného detailu a odkaz Co nám poslat ověřeny.
- Kliknutí Přejít na poptávku skutečně zobrazilo Poptáváte: Měření emisí. Nic nebylo odesláno.
- Před rozšířením na ostatní služby musí uživatel schválit návrh. Před produkcí ověřit aktuální main a samostatné povolení nasazení.
- Až po případném nasazení: porovnat stejně dlouhá období (např. 28 dní) pro vstupy na stránku, form_start a úspěšné generate_lead; odlišit kvalifikované poptávky od kliknutí. Při nízkém počtu konverzí nevyvozovat vítězství z procent. Kontrolovat organické dotazy a indexaci, ne pouze PageSpeed.
