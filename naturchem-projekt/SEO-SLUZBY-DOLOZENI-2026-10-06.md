# Mikroklima a vibrace: lokální návrh podle auditu

## Stav a výchozí verze

Výslovné zadání uživatele: využít dostupné fotografie a firemní podklady k lepšímu umístění ve vyhledávání. Lokální větev `codex/seo-services-evidence-2026-10-06`, základ `ea315489ca68a690e7e9e381197e38cc57534bd0`; aktuální GitHub main potvrzen 6. 10. přímým čtením origin. Původní Cursor checkout a jeho soubory nebyly upraveny. Bez commitu, push, merge, deploymentu, externí komunikace nebo testovací poptávky.

## Baseline z auditu 6. 10.

GSC Česko, Web (text), všechna zařízení, 6. 9.–3. 10. proti 9. 8.–5. 9. 2026:

- Celý web: 199 proti 136 kliknutím; 5 271 proti 3 848 zobrazením. Google AI: 2 000 proti 1 188 zobrazením odkazů, nikoli konverzím.
- `měření vibrací`: 19 zobrazení, 0 zveřejněných kliknutí, pozice 43,7 proti 43,8. Smíšený záměr pracovního prostředí, strojní diagnostiky a prodeje přístrojů.
- `měření mikroklimatických podmínek`: dotaz není v dostupné české GSC tabulce. Není to nulová tržní hledanost ani důkaz neindexace.
- Obě služby chyběly v ruční kontrole první stránky Googlu pro Česko, bez personalizace, lokalita České Budějovice. Článek o mikroklimatu byl zdrojem AI přehledu. Závěr neplatí automaticky pro každého zákazníka nebo všechny AI produkty.
- České AI zobrazení: článek o mikroklimatu 14 proti 14; služba vibrací 11 proti 6.
- Dosavadní formulářový odkaz z obou detailů předvoloval obecné měření pracovního prostředí, přestože formulář i katalog podporují přesné služby.

## Připravené úpravy

1. Stávající mikroklimatická URL získala přesnější český title/H1 „Měření mikroklimatických podmínek na pracovišti“. Vibrace mají title/H1 „Měření vibrací na pracovišti“, aby neevokovaly strojní diagnostiku.
2. Stručné úvody uvádějí ověřený nabízený rozsah a existující výstup. Žádné nové ceny, termíny, oprávnění, měřené hodnoty nebo výsledky zakázek nebyly doplněny.
3. Každá stránka má tři konkrétní otázky místo pěti obecných kategoriových. Odpovědi shrnují existující zveřejněné informace; viditelné FAQ a JSON-LD se vytvářejí ze stejné datové sady. Nejde o slib rozšířeného výsledku Googlu.
4. Formulář předvolí přesně `Měření vibrací` nebo `Měření mikroklimatu`. Definice `generate_lead`, validační pravidla a doručování nejsou změněny.
5. Mikroklimatický článek má jeden přirozený odkaz z existujícího vysvětlení přímo na službu. Datum vydání a odborný text jsou zachovány. Obě služby odkazují na svůj existující odborný článek. Starší experimentální odkaz ve článku o vibracích není měněn.
6. Vibrace získaly nový vlastní snímek ruční brusky z dostupné knihovny Google Fotek. Popisek popisuje jen viditelnou činnost, nikoli zákazníka, konkrétní výsledky nebo potvrzenou referenci. Mikroklima zachovává již schválenou fotografii přístrojů.
7. Při vizuálním/DOM auditu zjištěno dvojité lomítko v druhé položce `BreadcrumbList` společné šablony služby. Opraveno na kanonickou adresu přehledu služeb; regresní test kontroluje CS/EN/DE. Viditelné odkazy a kanonické adresy se nemění.

## Fotografie, soukromí a výkon

Nová fotografie má osm statických AVIF/WebP variant pod `/hero/authentic-2026-10-06/`. Výřez vylučuje obličej; ve veřejných souborech není EXIF, GPS, XMP ani IPTC. Originál a soukromá adresa Google Fotek nejsou v repozitáři. Knihovna Google Fotek nebyla měněna.

- Celkem nový asset: 123 033 B včetně všech variant.
- Mobilní AVIF: 10 506 B.
- Nejmenší katalogový náhled: 2 912 B.
- Bez nové klientské knihovny, galerie, on-demand transformací nebo změny ISR. Původních osm fotografií i všechny ilustrace studií/EIA zůstávají nezměněné.
- Soukromý reprodukovatelný encoder je v lokálních výstupech mimo repozitář. Nové webové soubory nepřepisují dříve publikované immutable assety.

## Zakázky: chybějící podklady

Uživatel nabídl přístup do evidence zakázek, ale při přípravě návrhu zatím nedodal umístění systému nebo souborů. Proto nejsou přidány nové případové studie, jména klientů, citace, výsledky řízení ani veřejné protokoly.

Po dodání přístupu vybrat relevantní skutečnou zakázku, ověřit vazbu na snímek a připravit anonymizovaný rozsah/výstup. Jména, dokumenty nebo obchodní tajemství zveřejnit jen po odpovídajícím schválení. Fotografie sama není potvrzenou referencí.

## Experimenty a vyhodnocení

Návrh není aktivním produkčním experimentem. EXP-004 vibrace má plánovaných 56 dní od 24. 8. (19. 10. plus dostupnost úplných dat); nový titul stejné služby nesmí být vydáván za izolovaný účinek tohoto staršího odkazu. Před nasazením zaznamenat ukončení či novou fázi EXP-004 a všechny souběžné zásahy. Hlukové studie EXP-014, autorizované emise EXP-013, homepage a ostatní obsahové experimenty nejsou měněny.

Hypotéza mikroklimatu: přesnější obchodní zaměření existující stránky, relevantní interní odkaz a konkrétní odpovědi zvýší šanci na relevantní zobrazení a kvalifikovanou poptávku.

Hypotéza vibrací: vyjasnění měření pracovního prostředí a autentický snímek pomohou výběru dodavatele a přivedou relevantnější zadání než široká strojní diagnostika.

Vyhodnotit nejméně dvě stejně dlouhá úplná 28denní období po skutečném nasazení a zpracování stránek Googlem, při malém vzorku 56 dní nebo více. GSC: české dotazové skupiny a přesné cílové URL, kliknutí/pozice/CTR při srovnatelném záměru. GA4: vstup → `form_start` → úspěšné `generate_lead`; současně skutečné doručení a kvalifikace firmou. AI zobrazení jsou vedlejší ukazatel, ne počet poptávek. Dopad nelze slíbit před daty ani přesně připsat jednotlivým částem tohoto balíku.

## Ověření a nasazení

Cílený test kontroluje zachování URL, shodu FAQ a schémat, přesnou předvolbu poptávky, neměněné datum článku a zachování EN/DE FAQ bez českého textu. Je součástí `npm run verify`. Před návrhem k nasazení musí projít kompletní verify/build, relevantní SEO smoke, kontrola skutečného desktopu/mobilu a diff.

Ověřeno 6. 10. 2026 na finálním zdrojovém stavu:

- Kompletní `npm run verify` včetně buildu a postbuild guardů: exit 0; 528 statických stránek. Lint: 0 chyb a 16 dříve existujících upozornění v nesouvisejících souborech. Build nadále vypisuje předchozí upozornění na `metadataBase` u sdílených OG výstupů; relevantní kanonické adresy obou služeb byly samostatně zkontrolovány.
- Cílené testy FAQ, CS/EN/DE breadcrumb adres, formulářového kontextu a fotografií: PASS. Ochrana obsahu 231 dosavadních immutable asset URL: PASS.
- Na lokální produkční sestavě `http://127.0.0.1:3121`: routing smoke bez chyb; 521 sitemap/testovacích adres a 232 dalších interních odkazů, všechny bez chyb. Kontakt API dostal pouze neplatný lokální validační požadavek s prázdným jménem (400), žádná poptávka nebyla odeslána.
- Skutečný Chrome: desktop 1920 px, mobil 390 px a dlouhý mikroklimatický titulek na 320 px bez horizontálního přetékání. Ověřené načtení fotografie, hlavní akce, rozbalení FAQ, produkční canonical a hreflang. Kliknutí na obě služby v prohlížeči předvolí správně „Měření vibrací“ / „Měření mikroklimatu“ na kontaktní stránce; bez vyplnění nebo odeslání.
- Desktopový a mobilní snímek jsou v lokálních výstupech `seo-services-2026-10-06-{desktop,mobile}.png`. Preview ponecháno dostupné. Kontrola diffu a `git diff --check` bez věcných/chybových nálezů; původní Cursor checkout nebyl upravován.

Tato ověření dokládají funkčnost lokální implementace, nikoli dosažení vyšších pozic, nové poptávky nebo produkční PageSpeed skóre. Produkce nebyla měněna.

Poznámka ke generovaným souborům: existující, již dříve naplánovaný český článek „EU ETS a GHG: kdy musí provozovatel sledovat a vykazovat emise skleníkových plynů“ má `publishedAt: 2026-10-06`. Dnešní lokální build jej tedy standardně zahrnul do indexů (76 CS článků místo 75), jazykové mapy, katalogu pro AI a statických obrázkových variant. Zdroj článku nebyl vytvořen ani upraven v tomto balíku, datum nebylo přepsáno a produkční CMS ani deployment nebyly spuštěny. Před vydáním zachovat shodu všech generovaných indexů s publikačním kalendářem; nejde o důkaz dnešního produkčního vydání.

Nasazení vyžaduje samostatné výslovné schválení. Rollback: cílený revert tohoto balíku na ověřeném aktuálním main; známý výchozí commit `ea31548`. Starší nepřipojené deployment reporty nejsou automaticky součástí změny.
