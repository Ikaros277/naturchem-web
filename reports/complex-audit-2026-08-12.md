# Komplexní audit NATURCHEM.cz — 12. 8. 2026

Audit pokrývá produkční web, rozdíl větve proti `main`, technické SEO, obsah, konverzní cestu, GA4, dostupná data GSC, výkon, přístupnost, formulářová API a připravená přesměrování. Pozorované výsledky jsou oddělené od hypotéz. Produkční poptávka nebyla odeslána.

## Manažerské shrnutí

Web má zdravý technický základ: produkční crawl našel 484 položek v XML sitemapě, všechny vracely HTTP 200, nenašel rozbité další interní odkazy, chybějící canonical, title, description, H1, alt text ani neplatné JSON-LD. Lighthouse dosahuje na mobilu 97 bodů za výkon a 100 za SEO, na desktopu 100 za výkon a 100 za SEO.

Největší riziko není rychlost ani indexovatelnost, ale měření a doručení poptávek:

1. Produkční GA4 inicializace končí chybou `Illegal return statement`. `window.gtag` ani `dataLayer` nejsou aktivní, takže produkce nyní neposkytuje spolehlivé konverzní měření. Oprava už je součástí této větve.
2. V propojeném Vercel projektu nejsou k 12. 8. 2026 evidovány žádné environmentální proměnné. Produkční kód bez `RESEND_API_KEY` dříve vracel falešný úspěch, přestože data nikam neuložil. V této větvi je chování změněno na viditelnou chybu, aby se neztrácely poptávky potichu. Před produkčním nasazením je nutné bezpečně doplnit a ověřit e-mailovou konfiguraci.
3. Formulář povoloval až 7 MB na jeden soubor a pět příloh, ale Vercel Functions přijímají maximálně 4,5 MB na celý požadavek. Limit je nově 4 MB za všechny přílohy dohromady a API odmítá nepovolenou příponu i podvržený MIME typ. Zdroj: [Vercel Functions request limit](https://vercel.com/kb/guide/how-to-bypass-vercel-body-size-limit-serverless-functions).

## Datový základ

### Google Search Console

Přímý přístup přihlášeného účtu k doménové property nebyl dostupný. Audit proto používá ověřený export uložený v repozitáři ze stejného dne, období 10. 5.–9. 8. 2026:

- 209 kliknutí, 8 597 zobrazení, CTR 2,4 %, průměrná pozice 14,0;
- předchozí srovnatelné období: 128 kliknutí, 2 654 zobrazení, CTR 4,8 %, pozice 8,0;
- Česko: 184 kliknutí, 4 298 zobrazení, CTR 4,3 %, pozice 7,8;
- indexace k 7. 8.: 483 indexovaných a 131 vyloučených URL, osm příkladů 404.

Pozorování: kliknutí vzrostla o 63 % a zobrazení o 224 %, ale celkové CTR se snížilo na polovinu. Rozšíření mezinárodní a méně přesné viditelnosti zhoršuje souhrnné metriky; české jádro je zdravější než globální součet. Nejde zatím o důkaz zvýšení počtu kvalifikovaných poptávek.

Hlavní příležitosti z ověřeného exportu:

| Dotaz nebo stránka | Výchozí stav | Hypotéza |
| --- | --- | --- |
| `emise a imise`, `imise a emise` | 333 zobrazení, 0 kliknutí | Jasnější title a popis mohou zlepšit relevanci a CTR. |
| `měření hluku české budějovice` | 93 zobrazení, 0 kliknutí, pozice 9,1 | Lokální landing má odpovídat průmyslovému a úřednímu záměru. |
| článek EIA | 134 zobrazení, CTR 2,2 %, pozice 5,6 | Kratší title/description mohou lépe komunikovat odpověď. |
| článek protihluková opatření | 113 zobrazení, CTR 2,7 %, pozice 8,3 | Praktický přínos má být viditelný dříve. |
| článek JES | 99 zobrazení, 0 kliknutí, pozice 5,5 | Zpřesnění výsledku může zvýšit CTR u obchodně relevantního tématu. |

### GA4

Property NATURCHEM je dostupná a obsahuje událost `generate_lead` označenou jako klíčovou. Jsou založeny eventové dimenze:

- `inquiry_category` — Kategorie poptávky;
- `service_interest` — Konkrétní služba poptávky.

Posledních sedm dní v době auditu: Organic Search 48 sessions, Direct 18, Referral 7, Paid Search 3 a AI Assistant 1. Tento měsíc bylo v přehledu 74 aktivních uživatelů, 529 událostí a 0 klíčových událostí. Nula klíčových událostí odpovídá nalezené produkční chybě měření, ale sama o sobě neprokazuje, že nepřišla žádná poptávka.

Větev zachovává v URL, formuláři, e-mailu i GA4 přesnou službu, například `Měření hluku a akustika`. `generate_lead` se spouští až po skutečně úspěšné odpovědi API, ne při kliknutí na tlačítko.

## Technické SEO a indexace

### Co je v pořádku

- všech 484 produkčních položek sitemap vracelo HTTP 200;
- žádné chybějící canonical, title, meta description ani H1;
- žádný chybějící `alt` u obrázků a žádné neplatné JSON-LD;
- renderované EN a DE stránky mají správný `lang`, canonical a hreflang;
- hlavičky obsahují HSTS, `X-Frame-Options`, `nosniff`, Referrer Policy a Permissions Policy;
- připravené historické URL vedou permanentně na relevantní cíle; lokální smoke kontrola nenašla nefunkční cíle.

### Opraveno v auditu

- sitemap vytvářela domovskou stránku třikrát kvůli reprezentaci kořenové cesty; po opravě jsou homepage a její hreflang varianty jedinečné;
- odstraněn duplicitní title kotelen a dvojité přidávání značky v title oborového rozcestníku;
- `llms.txt` byl upraven na stručnější doporučený Markdown formát s blokovou anotací a skutečnými odkazy; zdroj: [Chrome Lighthouse llms.txt audit](https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt?hl=en).

### Zbývající technický dluh

- serverové HTML uvádí `lang="cs"` i u EN/DE URL a jazyk opravuje až raný inline skript. Renderovaný DOM je správný, ale vhodnější je generovat správný jazyk už na serveru;
- produkční CSP je pouze `Report-Only`, obsahuje `unsafe-inline` a `unsafe-eval`; chybí COOP a Trusted Types. Zpřísnění musí proběhnout postupně s monitoringem, aby se nerozbila analytika a chat;
- middleware konvence je v Next.js 16 zastaralá a měla by se později převést na `proxy`;
- 18 lint warningů: hlavně synchronní `setState` v efektech, několik nepoužitých importů a neúplné dependency arrays. Nejde o blokující chyby, ale je vhodné je odbavit v samostatné technické větvi;
- některé karty mají překryvný odkaz přes menší vnořené odkazy. Lighthouse jej hlásí jako překryv dotykových cílů a stejné odkazy se stejným účelem. Vyžaduje strukturální úpravu komponenty.

## Výkon a přístupnost

PageSpeed Insights 12. 8. 2026:

| Profil | Výkon | Přístupnost | Best Practices | SEO | FCP | LCP | TBT | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobil | 97 | 97 | 96 | 100 | 1,2 s | 2,4 s | 0 ms | 0,013 |
| Desktop | 100 | 94 | 96 | 100 | 0,3 s | 0,7 s | 10 ms | 0 |

CrUX nemá pro doménu dost reálných uživatelských dat. Laboratorní příležitosti jsou malé: render-blocking asi 600 ms na mobilu, 50–102 KiB úspor obrázků, přibližně 26–28 KiB nepoužitého CSS a 22–23 KiB nepoužitého JavaScriptu. Vzhledem ke skóre nejsou nyní prioritnější než doručení a měření leadů.

Opraven kontrast vybraného měřicího filtru, WhatsApp tlačítka a prodejního odkazu v navigaci. Zůstává výše uvedená strukturální otázka překryvných odkazů v kartách.

## Konverzní cesta a formuláře

### Opraveno nebo připraveno ve větvi

- přesný kontext CTA se přenáší do formuláře jako skrytá služba, do e-mailového předmětu/těla a do `service_interest`;
- širší kategorie zůstává v `inquiry_category`;
- e-mail nebo telefon jsou podmíněně povinné, jméno, kategorie, popis a souhlas jsou povinné vždy;
- `generate_lead` se vyvolá až po úspěšném odeslání;
- přílohy: nejvýše pět souborů, celkem 4 MB, povolená přípona a kompatibilní MIME typ;
- API cesta formuláře neprochází zbytečným 308 přesměrováním;
- při chybějícím Resend klíči kontaktní formulář ani dotazník spokojenosti nehlásí falešné uložení;
- český nadpis kontaktu dodržuje tone of voice a nepoužívá zakázanou frázi „rádi pomůžeme“.

### Kritická podmínka před produkcí

Vercel CLI pro propojený projekt `ikaros277s-projects/web-naturchem` nenašlo žádné environmentální proměnné. Před produkčním nasazením je nutné přidat a ověřit nejméně `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAILS` a `NEXT_PUBLIC_GA_MEASUREMENT_ID`, případně `SATISFACTION_TO_EMAILS` a `NEXT_PUBLIC_GOOGLE_ADS_ID`. Tajné hodnoty se nesmějí commitovat. Bez Resendu Preview správně zobrazí chybu a lead neodešle; bez GA ID se nevytvoří `dataLayer`, nenačte se gtag a nelze ověřit `generate_lead`. Produkční nasazení by proto zatím nebylo bezpečné.

Rate limiting používá paměť procesu a v serverless prostředí není sdílený mezi instancemi. Je to pouze základní ochrana proti spamu; pro spolehlivější ochranu je vhodné sdílené úložiště nebo specializovaná anti-spam vrstva.

## Obsah, důvěryhodnost a obchodní záměr

- obsahová sada má 71 českých, 56 anglických a 56 německých souborů; medián českého článku je přibližně 2 171 slov a žádný publikovaný článek nemá méně než 600 slov;
- dvanáct českých odborných článků neobsahuje externí zdroj a právní odkazy používají převážně sekundární web `zakonyprolidi.cz` (491 odkazů) oproti primární e-Sbírce (jednotky odkazů). Právní a technické články mají být postupně revidovány odborníkem a odkazovat přednostně na primární zdroje;
- část plánovaných článků má budoucí datum; aplikační logika je správně nezveřejňuje před termínem;
- na webu je tvrzení `7 000+ měření`, zatímco projektový dokument stále uvádí `6 000+` a označuje číslo k ověření. Stejně je potřeba potvrdit `14 000+ zakázek` a 36 let praxe. Do ověření Ing. Hezinou se tato čísla nemají dále rozšiřovat ani používat v nových kampaních;
- dotaz „měření emisí České Budějovice“ je ve vyhledávání zaměnitelný s měřením vozidel. Copy má konzistentně používat „stacionární/průmyslové zdroje“;
- lokální hluková stránka soutěží se specializovanými místními poskytovateli. Její výhoda má stát na ověřené akreditaci, průmyslovém kontextu a použití výstupu pro KHS či jiné úřady, nikoli na neověřených superlativech.

## Ověření

- `npm run verify`: úspěch — 0 lint chyb, 18 známých warningů, TypeScript bez chyb, produkční sestavení 537 stran;
- lokální produkční smoke: 487 jedinečných URL ze sitemap + 2 explicitní formulářové trasy + 135 dalších interních odkazů, 0 selhání;
- formulářová předvolba: `inquiryCategory=mereni`, `services=Měření hluku a akustika` zachováno;
- hraniční test API bez odeslání: přílohy nad 4 MB → HTTP 400; nepovolená přípona s podvrženým PDF MIME → HTTP 400;
- metadata: canonical a CS/EN/DE/x-default hreflang přítomny a správné;
- připravená přesměrování: ověřena v rámci interního smoke testu;
- produkční falešná poptávka nebyla odeslána.

## Priorita dalšího postupu

1. **P0 před produkcí:** bezpečně nastavit Resend a příjemce ve Vercelu, ověřit doručení pouze schváleným interním testem a teprve potom zvažovat produkční deploy.
2. **P0 po nasazení:** ověřit v GA4 DebugView/Realtime skutečný `generate_lead` s `inquiry_category` a `service_interest`; produkční syntaktická chyba musí zmizet.
3. **P1 během 28 dní:** měřit české dotazy a stránky proti předchozím 28 úplným dnům; oddělit kliknutí, CTR, pozici a skutečné kvalifikované poptávky.
4. **P1 redakční:** odborně ověřit firemní statistiky a právní články, doplnit primární zdroje e-Sbírky/MŽP/MZd/SZÚ podle tématu.
5. **P2 technický:** serverový `lang`, CSP/COOP/Trusted Types, struktura odkazů v kartách, sdílený rate limit a lint backlog.

## Vyhodnocení dopadu

Opravy odstraňují měřicí a konverzní rizika, ale samy ještě neprokazují růst SEO ani leadů. Za úspěch se považuje až: spolehlivě doručená poptávka, odpovídající `generate_lead` s oběma parametry a následný růst kvalifikovaných českých poptávek. SEO změny mají být vyhodnoceny nejdříve po 28 úplných dnech a s kontrolou země, dotazu a cílové stránky.
