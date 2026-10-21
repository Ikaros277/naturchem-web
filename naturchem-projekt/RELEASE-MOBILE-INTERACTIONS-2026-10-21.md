# Schválené společné mobilní vydání — 21. 10. 2026

## Souhlas, výchozí stav a hranice

Majitel po kontrole náhledu na 127.0.0.1:3131 výslovně požádal „Tak to nahoď na ostro.“ Vydává se odsouhlasená lokální verze: kratší mobilní poptávka, přehlednější nabídka služeb, jemné interakce a 1,5s počítadla, včetně již připravené ochrany vlastních analytických událostí aktuálním souhlasem.

GitHub main před vydáním ověřen jako `dd9a751e98555ba8499344396224bbafa3dfc931`. Přihlášený Vercel potvrzuje stejný main / Ready / www.naturchem.cz, deployment `41v4s2jTAWAYN4JWMwYdYtXL33dE`. Tento zachovaný deployment je rollback. Pracuje se v `codex/service-message-release-2026-10-19`, nikoli v hlavní rozpracované složce Cursoru. Ta ani `.agents/` nejsou měněny. Čekající odborná revize článku o kotelně z jiného worktree není součástí vydání.

## Rozsah a očekávaný přínos

- Souvislé základní údaje formuláře, nepovinné přílohy/místo/termín v jednom rozbalení, větší mobilní vstupy a chyba chybějícího kontaktu přímo u polí. E-mail nebo telefon stačí stejně jako dříve. Místní základní formulář při 390 px zkrácen 1 173 → 867 px (−26 %).
- Mobilní Služby obsahují Přehled služeb a tři úplné kategorie. Žádná služba nezmizela; celý nadpis rozbaluje, nevkládá druhou navigační akci do stejného ovladače. První rozbalení při 390 px 663 → 307 px (−54 %). U dřívějších zkratek je navíc otevření kategorie; předvídatelná struktura má přednost před neúplnými skupinami.
- Krátké rozvíjení seznamů a jemné reakce tlačítek/karet bez animační knihovny, s nativním fallbackem a respektováním omezeného pohybu. Počítadla mají rychlý nástup a zpomalování do 1 500 ms, bez změny čísel nebo přístupného textu.
- Vlastní analytické události respektují aktuální souhlas se statistikami; chyba volitelného tagu nemění přijatou poptávku na formulářovou chybu. Zachovány názvy událostí, lead_id a úspěšné odeslání jako primární konverze, nikoli kliknutí.

Hypotéza: snížit mobilní tření při hledání služby a kontaktu. Nejde o již naměřený růst kvalifikovaných poptávek, pozic nebo příslib skóre 100. Po změně ochrany souhlasu nesmí být úbytek nesouhlasných analytických událostí zaměněn za pokles skutečných zakázek. Podrobná soukromá analytika není v repozitáři.

## Ochrany a ověření

Žádná změna indexovaných URL, odborných textů, článků, SEO titulků Cursoru, canonical/hreflang/schema, robots/sitemap, formulářového API, adresátů, Turnstile, upload limitů, cache/ISR nebo DNS. Žádná nová závislost, tarif, testovací poptávka nebo e-mail. Generované soubory bez skutečného obsahového rozdílu nejsou zahrnuty do commitu.

Předchozí úplné verify/build 631 rout, testy kontaktního doručování a analytického souhlasu, skutečný render mobilního menu CS/EN/DE, motion/count-up testy a rychlostní rozpočty prošly. Neměnný dd9a751 baseline chrání 588 nezměněných zákaznických stránek, SEO všech 591 HTML a sitemap/robots; zvlášť testuje tři kratší kontakty. Místní smoke: 584 URL + 302 navazujících odkazů bez chyby. V prohlížeči ověřeno 320/390 px bez přetékání, klávesnice, zavření po navigaci a Escape, Měření emisí → předvolený formulář bez odeslání. Desktop zachovává tři sloupce a 24 služeb.

Při dnešním přednasazovacím ověření znovu prošlo celé `npm run verify`, exit 0, včetně buildu 631 rout a všech postbuild kontrol. Neměnný dd9a751 baseline znovu potvrdil 588 shodných zákaznických stránek a SEO všech 591 dokumentů. Devět dřívějších lint upozornění není novou regresí. Nový lokální server se používá pro opakovanou kontrolu URL po finálním buildu. Skutečný nový produkční Ready a SHA se potvrzují až po vydání, nikoli tímto plánem.

## Jedno vydání a měření

Jeden commit v codex větvi, nový read-only preflight remote main, jeden normální fast-forward push do main v Ikaros277/naturchem-web. Bez force push, preview pushe, deploy hooku nebo souběžného ručního deploymentu. Pokud se main mezitím změní, zastavit push a znovu sladit a ověřit. Po Git integraci potvrdit Ready i stejný veřejný publication-state commit, omezené ostré SEO/HTTP kontroly a skutečnou mobilní obchodní cestu. Výsledek uložit soukromě bez druhého deploymentu jen kvůli reportu.

Spotřeba již nad limitem ISR se tím zpětně nenuluje; bez tvrzení o zaručeném dodržení kvót. Měřit od skutečného vydání stejné celé 28/56denní intervaly podle zařízení: návštěva → form_start → úspěšný generate_lead, potvrzené doručení a kvalifikace. Nová společná prezentační fáze je rušivým faktorem EXP-008/011/013/014, nikoli izolovaným důkazem jednotlivého zásahu.
