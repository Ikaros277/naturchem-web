# Úplný přehled měření: ČIA a MŽP

Stav: místní návrh, bez commitu, push, publikace CMS nebo nasazení. Navazuje na schválený vizuální směr spodní části emisí. Nezasahuje do souběžného checkoutu Cursoru.

## Výchozí stav a hypotéza

Předchozí vizuální vzor obsahoval jen tři skupiny měřených složek. Zákazník mohl neúplný seznam zaměnit za hranici nabídky, zejména u HF. Cíl: přehledné úplné skupiny a dostupné konkrétní látky bez další stěny textu. Předpokládaný efekt: méně falešných odchodů zákazníků hledajících konkrétní měření; nikoli dosud prokázaný růst pozic nebo poptávek.

## Ověřené zdroje (18. 10. 2026)

- ČIA: https://www.cai.cz/?subjekt=1599-naturchem-s-r-o a https://www.cai.cz/OA/pdf/P562_2023_CS.pdf . Celé čtyři strany přílohy osvědčení 562/2023 z 26. 10. 2023 zkontrolovány včetně upřesnění analytů a poznámek.
- Veřejná místní kopie `/dokumenty/osvedceni-akreditace-562-2023.pdf`: obálka a čtyři strany přílohy, vizuálně zkontrolovány; SHA256 `c3e91ce207e987caa24f75645244f5d17dd5cba02e98271839021f1c8ebe0718`. Beze změny souboru i URL.
- MŽP: https://apps.mzp.cz/www/air-protections-persons.nsf/person.xsp?PID=MZEE8A01MF92 . Záznam NATURCHEM, s.r.o., IČO 27504379, autorizace `MZP/2021/780/1387`, jednorázové měření emisí. Záznam přečten přímo přes prohlížeč po vyhledání NATURCHEM v registru; běžný webový fetch registr neotevřel. Soukromě uložen úplný DOM výpis a snímek veřejného záznamu.

HF a fluoridy, NH3 a silné anorganické kyseliny nejsou v příloze ČIA, ale jsou výslovně v záznamu MŽP. Proto je nabízíme s označením **autorizace MŽP**, nikoli jako rozšíření akreditace ČIA. Majitel výslovně potvrdil, že HF měří a má SOP; nebylo potřeba domýšlet akreditaci ani spolupracujícího dodavatele. Z: a Y: nebyly v této relaci připojené; podnikový archiv ani SOP se nyní nepodařilo otevřít. Nevydáváme se za jejich novou revizi.

## Pokrytí a odborná omezení

- Společná evidence všech 18 zkoušek a 6 postupů odběru z přílohy, každá číslovaná položka pokryta právě jednou. Pět emisních skupin, osm pracovních a jedna mimopracovní skupina.
- Kompletních 20 organických analytů na sorbentu, 27 různých látek/skupin pro krátkodobé detekční trubice a 20 prvků u emisních kovů. Sirovodík/sulfan jsou sloučeny jako synonyma; anglický nitrogen dioxide je česky oxid dusičitý. Drobné překlepy názvů rozpouštědel normalizovány, žádná nová látka nepřidána.
- Poznámka 4 přílohy zachována významově: laboratorní stanovení u zkoušek 1, 16, 17 a 18 dělá externí akreditovaný poskytovatel; NATURCHEM provádí příslušný odběr a výpočet. Nevytváří se tvrzení o všech analýzách ve vlastní laboratoři.
- Detekční trubice jsou výslovně krátkodobé měření, nikoli automaticky celosměnové posouzení expozice. Prach/aerosoly/vlákna na filtr jsou odběr, nikoli paušální akreditace všech laboratorních stanovení vláken.
- Osvětlení je umělé, nikoli denní. Kategorizace prací není sama akreditovanou zkouškou; uvádíme akreditovaná měření jako podklady pro kategorizaci.
- Samostatná evidence všech 18 položek v pěti skupinách registru MŽP včetně elektrochemické techniky NOx/CO. Rozsah MŽP neslučujeme automaticky s ČIA (ani u kovů nejsou seznamy totožné).

## Změněné české stránky

1. `/sluzby/mereni-emisi/`: pět úplných akreditovaných skupin plus jasně označené další složky autorizace MŽP: HF a fluoridy, amoniak, silné anorganické kyseliny. Odkazy na oba doklady.
2. `/sluzby/pracovni-prostredi/`: osm viditelných skupin, celé seznamy látek na rozkliknutí.
3. `/mereni-pracovniho-prostredi-kategorizace-praci/`: stejný společný rozsah pro podklady ke kategorizaci.
4. `/akreditace-autorizace-dokumenty/`: úplné nativní přehledy ČIA a odděleně MŽP; karta autorizovaného měření emisí.

Seznamy látek jsou i při zavřeném rozkliknutí v serverovém HTML. Bez nové klientské knihovny, analytické události, obrázků nebo on-demand transformací. Zachováváme URL, H1, title, description, canonical, hreflang a dosavadní interní cíle. U dřívějšího emisního vzoru zůstávají dvě původní neduplicitní FAQ místo tří.

## Kontroly

Nový `test:accreditation-scope` je součástí `npm run verify`: kontroluje hash zdrojového PDF, úplnost 24 číslovaných položek, výčty látek, externí analýzy, krátkodobé trubice a oddělení MŽP od ČIA. Neprohlašuje HF za akreditovaný analyt.

Dokončeno:

- Celé `npm run verify` prošlo včetně nového testu a produkčního sestavení. Devět dřívějších lint upozornění mimo tento zásah, nula lint chyb. Build rovněž vypisuje upozornění `metadataBase` u stávajících rout; metadata v této změně nebyla měněna. Po finální opravě mobilního zalamování MŽP, rozestupů zdrojových odkazů a rozlišení držitele autorizace znovu prošel `npm run build` se všemi post-build kontrolami a cílené testy struktury, vizuální soudržnosti a rozsahu akreditace.
- Porovnání se zachycenou výchozí verzí: všech 582 sitemap URL přesně zachovává H1, title, description/robots/OG/Twitter, canonical a hreflang. U 578 jiných stránek je stejný celý hlavní text, JSON-LD a interní cíle. U čtyř změněných českých stránek jsou zachovány všechny původní interní cíle i schémata; jediná dříve popsaná výjimka je odstranění duplicitní třetí FAQ u emisního vzoru.
- Skutečně sestavené HTML pokrývá 14 číslovaných emisních činností, 9 pracovních činností na každé ze dvou relevantních stránek a všech 24 na stránce dokladů. HF/fluoridy, NH3 a kyseliny jsou vykreslené s odkazem na MŽP, nikoli přidané do přehledu pouze ČIA.
- Místní HTTP smoke: 584 stránek a 302 dalších interních cílů, celkem 886 kontrol bez chyby. Finální CSS a upřesnění držitele poté neměnily URL ani odkazy; následné kompletní SEO srovnání znovu prošlo. Žádná skutečná testovací poptávka ani hromadné testování proti produkčnímu Vercelu.
- Prohlížeč: u měřicích stránek kontrolovány šířky 320, 390, 768, 1024 a 1440 px. Na 320 px otevřeny oba pracovní seznamy (20 + 27 položek), emisní seznam 20 prvků i oba úplné přehledy ČIA/MŽP na stránce dokladů. Bez vodorovného přetékání. Mobilní MŽP původně příliš úzké sloupce opraveny na označení nad hodnotou, následně vizuálně ověřeno. Enter otevírá seznamy, focus má 3 px, cíle seznamů nejméně 44 px.
- Nový CSS modul je oddělený od velké šablony služeb; stránka dokladů tak kvůli přehledu nenačítá celou službovou CSS šablonu. Žádný nový klientský JavaScript, fotografie ani vzdálené načítání autorizačních dat. Ověřených 337 neměnných veřejných souborů zůstává beze změny.
- Místní gzip odhady: emise 29 776 B, pracovní prostředí 30 885 B, kategorizace 30 599 B, doklady 29 385 B. Nejde o cloudová měření přenosu ani skóre PageSpeed. Všechny výkonnostní rozpočty projektu prošly.
- Podkladové snímky, zdrojový výpis registru a SEO/responzivní reporty jsou v soukromých místních výstupech mimo repo. Náhled zůstává `http://127.0.0.1:3128/sluzby/mereni-emisi/#service-details-heading`; dočasná změna velikosti prohlížeče vrácena.

Nebylo commitováno, pushováno ani nasazeno. Soubory aktuálního společného Cursor checkoutu nebyly měněny.

Po případném samostatně schváleném nasazení sledovat kvalifikované poptávky, konkrétní dotazy na analyty a `form_start` -> `generate_lead`. SEO a konverzní efekt zatím neměřen.

## Následné zkrácení obchodních přehledů (18. 10. 2026)

Na výslovné přání majitele jsou ze tří přehledů služeb odstraněny odstavce o odběru, výpočtu koncentrací a externím laboratorním stanovení, dlouhá metodická upřesnění a opakované odkazy na přílohu akreditace / registr MŽP. Předchozí popis jejich umístění u služeb výše tím pozbývá platnosti. Úplné odborné vysvětlení i všechny zdrojové odkazy zůstávají beze změny na stránce akreditací a oprávnění; běžné odkazy na tuto stránku jsou zachovány.

- Výchozí stav: tři komerční přehledy opakovaly metodické poznámky a odkazy pod úplnými seznamy měření.
- Změna: přehled říká, co měříme. U organických látek obsahuje místo metodického popisu příklady ze skutečného seznamu a úplný seznam na rozkliknutí. Všech 24 číslovaných činností a všechny látky jsou zachovány. Zůstávají přesná stručná označení krátkodobých měření, detekčních trubic a odběrů na filtr; HF zůstává samostatně pod autorizací MŽP.
- Hypotéza: menší množství textu usnadní výběr služby bez ztráty informací o nabídce. Konverzní ani SEO zlepšení zatím nebylo měřeno.
- Bez nového klientského JavaScriptu, fotografií, požadavků na Vercel nebo změny metodiky měření.
- Regresní test nyní kontroluje zvlášť stručnou obchodní a úplnou dokumentační variantu. Soukromý předzměnový snímek čtyř sestavených stránek slouží k porovnání metadat, schémat, kotev, činností a zachování celé stránky akreditací. Záměrná výjimka v interních odkazech: pouze vyžádané odstranění opakované přílohy PDF u služeb.

Dokončené ověření této následné úpravy:

- Celé `npm run verify` prošlo včetně produkčního sestavení a všech post-build kontrol. Devět stávajících lint upozornění mimo tento zásah, nula chyb; stávající upozornění `metadataBase` beze změny.
- Porovnání čtyř sestavených stránek potvrzuje stejná H1, title, popisy, robots/OG/Twitter, canonical, hreflang, JSON-LD, kotvy a úplné identifikátory měření. Celý hlavní text stránky akreditací zůstává přesně stejný. Jedinou záměrnou změnou interních cílů je odstranění opakovaného odkazu na přílohu PDF z přehledů služeb; cesta k akreditacím zůstává.
- Místní HTTP kontrola: 584 stránek a 302 dalších interních cílů, všech 886 kontrol bez chyby. Nezatěžuje produkční Vercel.
- V prohlížeči ověřen pracovní přehled při šířce 1920 a 390 px, rozbalené úplné seznamy 20 a 27 látek a šířka 320 px bez vodorovného přetékání. Dočasná velikost prohlížeče vrácena. Nový soukromý snímek `naturchem-concise-scope-desktop-2026-10-18.png` zachycuje výsledek bez metodických odstavců.
- Aktualizovaný náhled běží na `http://127.0.0.1:3128/sluzby/pracovni-prostredi/#akreditovany-rozsah`.

Změna je místní; bez commitu, pushe nebo produkčního nasazení.
