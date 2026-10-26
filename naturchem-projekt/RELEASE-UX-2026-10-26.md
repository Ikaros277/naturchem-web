# Schválené společné UX vydání — 26. 10. 2026

## Souhlas a ověřený výchozí stav

Vlastník po zhlédnutí místního návrhu požádal upravit nevzhledná velká tlačítka mapy a „vše pak naostro nahoď na produkci“. Souhlas pokrývá dosud připravený místní balík a tuto navazující estetickou úpravu kontaktu.

Na samostatný dotaz navíc 26. 10. výslovně potvrdil odbornou revizi všech tří dříve připravených německých článků: „Ano, odborně jsem schválil i tyto tři články“. Jejich obsahová publikační podmínka je tím splněna; dřívější poznámky o čekající revizi v místních podkladech jsou historické.

GitHub main a veřejný `publication-state.json` byly před vydáním shodně ověřeny jako `6e87fddb24c45b15ec7e95ab94c81b08d682b0c9`. Přihlášený Vercel potvrzuje tento commit jako Ready / Production / Current / www.naturchem.cz, deployment `DKeA7G7mNi6a37uaaiGMyBrTkhQt`, doména `web-naturchem-e2zrayvj1-ikaros277s-projects.vercel.app`. Tento existující deployment se nemaže a je návratovým bodem.

Práce pouze v `codex/article-topic-quality-2026-10-24`, mimo hlavní znečištěný checkout Cursoru. Hlavní checkout ani `.agents/` nejsou zahrnuty nebo přepisovány. Před posledním push znovu ověřit vzdálený main; pokud se změnil, nepřepisovat jej a znovu sladit a ověřit.

## Rozsah společné fáze

- Obnovená jediná přepínatelná mapa provozoven nahoře v Kontakt. Externí podklady zůstávají podmíněné souhlasem a ustálenou viditelností; přímá poptávka zbytečně mapu nenačítá. Bez souhlasu nebo při chybě zůstávají všechny tři adresy a navigační odkazy.
- Nová přehledná světlá lišta provozoven přímo nad mapou místo tmavé kapsle pod ní. Rovnoměrné přepínače s celými názvy, aktivním podtržením, jasným keyboard focusem a nejméně 44px mobilním cílem. Adresa a přímá navigace zůstávají pod mapou. Menší a omezené popupy na úzkém telefonu. Funkce obou poskytovatelů a nastavení souhlasu beze změny.
- Zjednodušená mobilní navigace, obchodní pořadí podle priorit vlastníka a vedlejší postavení prodeje techniky. Výraznější barevný katalog, jednoznačné akce a zachované jednotlivé statické fotografie.
- Odstraněné veřejné textové hledání podle výslovného přání vlastníka; kategorie článků, stránkování, tematické FAQ a všechny cíle služeb zůstávají dostupné nativní navigací.
- Přesnější článek → odpovídající služba → předvyplněná poptávka, bez nesouvisejících doplňkových služeb. Dvě služby (pracovní prostředí a mikroklima) bez opakování stejných seznamů; úplný schválený rozsah a odborný obsah zachovány.
- Fotografie referencí před logy, s prioritním pořadím pracovního prostředí / hluku / vibrací. Žádné nové vymyšlené reference. Oprava spodního limitu čítačů při zachování 1 500ms animace.
- Jednotné ostré hrany obsahových karet, fotografických rámečků a panelů napříč veřejnými typy stránek. Kruhové ikony a samostatné ovladače zachovány; žádný univerzální reset cizích služeb.
- Již připravené sjednocení témat článků a tři opravené německé texty pracovního prostředí včetně zachování původních kapitolových URL, tabulek a primárních zdrojů. Zbývajících 17 dříve zjištěných anglických těl německých článků tato fáze neřeší. Žádné nové české odborné články ani změna schváleného pondělního kalendáře.

Podrobné baseline a hypotézy v ARTICLE-TOPIC-QUALITY, ARTICLE-LANGUAGE-REPAIR, ARTICLE-WORKPLACE-DE, CONTACT-MAP-RESTORE, CONTACT-MAP-DEFER, CUSTOMER-JOURNEY, CATALOG-VISUAL a CARD-SHAPE (24.–26. 10. 2026). Jde o společnou prezentační fázi, nikoli oddělené prokázané konverzní uplift experimenty.

## Ochrany, ověření a jediné nasazení

Nemění se indexované cíle, přesměrování, canonical, hreflang, robots/sitemap, formulářové API, adresáti, Turnstile, význam `generate_lead`, původní obrázkové URL, cache/ISR, DNS, tarif nebo produkční proměnné. Nepřidána animační nebo vyhledávací knihovna. Lokální runtime CSS zůstává rozdělené podle typu stránky a fotografie jsou předem připravené WebP/AVIF. Podrobné analytické údaje a skutečné hodnoty prostředí se necommitují.

Před tímto posledním mapovým krokem již prošlo úplné verify/build, 889 lokálních GET kontrol a 624dokumentové porovnání metadat/formulářů pro grafické hrany. Po finální úpravě mapy se znovu spouští celé `npm run verify` a lokální SEO smoke. Výsledky, kontrola diff, sken citlivých hodnot a konečné SHA jsou v soukromém QA protokolu. V prohlížeči se ověřují PC, mobil 390/320 px, přepínání provozoven, souhlas a přímá obchodní cesta bez odeslání formuláře.

Jeden kontrolovaný commit v codex větvi, potom jeden normální fast-forward push `HEAD:main` do Ikaros277/naturchem-web. Žádný force push, samostatný preview push, ruční redeploy ani deploy hook vedle Git integrace. Po automatickém nasazení ověřit Ready, doménu a veřejný commit, rozsah článků a omezené ostré HTTP/SEO/vizuální kontroly. Výsledky zapsat soukromě, ne dalším deploymentem jen kvůli reportu. Skutečnou poptávku ani testovací e-mail neodesílat.

Před commitem finální úplné `npm run verify` / build / postbuild PASS, 643 generovaných cest a 593 veřejných statických stránek. Lokální smoke 586 + 303 = 889 GET kontrol bez chyby. Porovnání 592 původních dokumentů: žádná chybějící adresa, změna canonical/hreflang/robots/titulku nebo službového H1 a žádná změna formulářů; pouze dvě očekávané odborně schválené německé meta descriptions. Sken přidávaného rozdílu bez nalezeného citlivého tokenu, změny prostředí ani souborů Cursoru. Devět dosavadních lint warnings a známé metadataBase upozornění zůstávají, nejde o novou regresi. Závěrečné drobné opravy jsou pouze odstranění prázdného řádku na konci dvou souborů; jejich testy byly zopakovány. Vzdálený main před finálním krokem stále `6e87fdd`.

## Návrat a obchodní vyhodnocení

Při produkční regresi použít zachovaný ověřený deployment, případně nedestruktivní revert jediného vydávacího commitu. Nikdy neobnovovat celý checkout nebo nepřepisovat souběžnou práci Cursoru. Bez změny tarifu nebo placeného zásahu.

Hypotéza: rychlejší rozpoznání vhodné služby, menší navigační tření a konzistentnější profesionální prezentace. Nejde o garanci Google/AI pozic, skóre 100 nebo dodržení budoucích kvót. Po skutečném vydání porovnat stejné kompletní 28/56denní intervaly, oddělit organiku a zařízení; primárně úspěšný `generate_lead` a firmou potvrzené kvalifikované přijetí, podpůrně `form_start`, telefon a e-mail. Výsledek jedné této fáze nelze připsat jen novému tvaru karet nebo mapy.
