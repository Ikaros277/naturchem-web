# Vzor spodní části služby — měření emisí

Stav: pouze místní návrh v `codex/service-lower-visual-2026-10-18`. Bez commitu, push, CMS publikace a produkčního nasazení. Navazuje na předchozí lokální panely, nenahrazuje uživatelské změny v Cursor checkoutu.

## Zadání a výchozí stav

Majitel považuje spodní poloviny služeb za příliš textové a nedotažené. Před plošnou úpravou schválen vzor jedné české služby. Horní nabídka a cesta k poptávce zůstávají, s výjimkou přesunuté důkazní poznámky a doplnění čtvrtého podkladu do jediného seznamu.

Předchozí lokální návrh obsahoval u emisí 631 slov hlavního obsahu, 139 041 B HTML / 27 772 B místního gzipu. Podklady byly nahoře, v technických podrobnostech a potřetí v FAQ. Samotné změny rámečků nezměnily informační architekturu.

Hypotéza: jediný seznam podkladů, konkrétní viditelný rozsah, fotografie skutečné realizace a kratší volitelné detaily usnadní B2B návštěvníkovi rozhodnutí a přípravu poptávky. Vliv na poptávky ani hledání zatím není změřen.

## Rozhodnutí v návrhu

- Pouze `/sluzby/mereni-emisi/` v CS má explicitní `detailPresentation: emissions-editorial`. Ostatní stránky i překlady ponechávají dosavadní šablonu.
- Měřené složky z původního rozsahu jsou seskupené v přístupném seznamu termínů a hodnot. Zůstává podmínění rozsahem zadání a povolením; nevzniká tvrzení, že každá zakázka musí měřit všechny látky.
- Čtyři skutečné podklady jsou pouze u existujícího poptávkového tlačítka. Požadovaný termín z odstraněné FAQ odpovědi zůstává u tohoto seznamu.
- Jedna viditelná fotografická realizace využívá nezměněná veřejná data `bps-emise` a její skutečný snímek `kogenerace`. Rok, rozsah a výstup jsou převzaté z již doložené reference. Fotografie se nevydává za snímek licího stroje.
- Dosavadní doložená poznámka o licím stroji se přesouvá jednou do odborných podrobností. Zůstává dohledatelná v HTML, bez falešné fotografie a bez nového tvrzení o výsledku či klientovi.
- Původní rozsah přípravy, rizik a návaznosti je sloučen do kratších tematických textů. Samostatný opakující se seznam „Typické situace“ ani opakovaný seznam výstupů se znovu nevypisuje.
- Dvě původní neduplicitní otázky zůstávají. FAQPage přesně odpovídá vykresleným otázkám; odstraňuje se pouze třetí odpověď opakující podklady.
- Bez dalšího poptávkového CTA, nové animace, klientské knihovny nebo měřicí události. Obrázek používá již existující statické AVIF/WebP varianty, `loading=lazy`, nízkou prioritu a předem dané rozměry.

## SEO a odborná opatrnost

H1, URL, canonical, jazykové alternativy, titul, popis, Service a BreadcrumbList zůstávají. Všechny dosavadní interní cíle mají zůstat dostupné. Nepřesouváme odborný obsah na nové URL a nepřidáváme nové indexované stránky.

Původní obecná vazba na vyhlášku č. 415/2012 Sb. zůstává beze změny. Primární kontrolní zdroj: https://e-sbirka.gov.cz/sb/2012/415 (aktuální znění od 1. 7. 2026 dle vyhledání 18. 10. 2026). Nezavádíme konkrétní četnosti, číselné limity, lhůty ani nové normové postupy. Případná odborná změna před publikací vyžaduje zvláštní ověření; tento návrh není novou právní revizí služeb.

## Ověření

Rozšířené regresní kontroly chrání právě jednu sadu podkladů, všechny původní skupiny měřených složek, dva kontaktní cíle, přesnou vazbu fotografie, volitelnou odbornou poznámku a nepřenesení prototypu do EN/DE. Obecná šablona nadále prochází původním testem úplnosti s umělými daty.

Dokončeno:

- Celé `npm run verify` prošlo. Devět dosavadních React/lint upozornění mimo tuto úpravu; žádná chyba. Po následném zhutnění mobilní sazby a odsazení kotvy znovu prošel `npm run build` se všemi post-build ochranami i cílené strukturální testy.
- Všech 582 sitemap URL má původní H1, title, description/OG/robots, canonical a hreflang. U 581 ostatních stránek beze změny celý hlavní text, JSON-LD a interní cíle. U prototypu zachovány všechny původní interní cíle; Service, BreadcrumbList a navazující ItemList přesně původní. FAQPage obsahuje právě dvě zachované vykreslené odpovědi.
- HTTP smoke: 584 místních stránek a 302 dalších interních cílů, celkem 886 kontrol bez chyby. Finální CSS oprava následně neměnila odkazy ani obsah. Žádné testy proti produkčnímu Vercelu nebo skutečné odeslání formuláře.
- Hlavní text počítaný stejnou metodou bez JSON-LD: 631 → 558 slov (−11,6 %), včetně všech zavřených podrobností a nové realizace. HTML 139 041 → 136 556 B; místní gzip přibližně 27,8 KB před i po. Stejných jedenáct klientských JS souborů, bez nového klientského kódu. Nové soubory obrázků nevznikly.
- Prohlížeč: šířky 320, 390, 768, 1024 a 1440 px bez vodorovného přetékání; všechny nové zdrojové odkazy nejméně 44 px, technické/FAQ přepínače alespoň 47 px. Ověřena i všechna čtyři současně rozbalená témata na 320 px. Enter otevírá původní nativní details a má viditelný 3px focus.
- Odkaz fotografické karty skutečně otevře `/reference/#reference-bps-emise` i s odpovídající jinak skrytou skupinou. Fotografie se načítá v existujícím AVIF; WebP je fallback.
- Mobilní vizuální kontrola vedla ke zhutnění tabulkového přehledu, inline označení výstupu, menšímu obrázku a odstranění nadbytečného nadpisového štítku. Důležité písmo zůstává 15–20 px, hodnoty 19 px. Fotografie ale přidává svislou výšku: celá stránka není kratší jen proto, že obsahuje méně slov (např. finální 390px kontrola měla 4 838 px). Cílem je menší textová zátěž a lepší orientace, nikoli tvrzení o kratším scrollu.
- Náhled ponechán na `http://127.0.0.1:3128/sluzby/mereni-emisi/#service-details-heading`. PC/mobilní snímky, SEO srovnání a strojové výsledky jsou v soukromých lokálních výstupech mimo repo. Dočasná velikost prohlížeče vrácena.

Nejde o naměřený růst konverzí ani nové cloudové skóre PageSpeed. Případné plošné použití a nasazení jsou další samostatný krok po odsouhlasení tohoto vzoru. Po nasazení vyhodnotit kvalifikované poptávky a `form_start` → `generate_lead`, nikoli označit klik na nový odkaz za poptávku.
