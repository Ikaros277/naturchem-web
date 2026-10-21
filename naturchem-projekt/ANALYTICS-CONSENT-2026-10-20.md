# Vlastní analytické události — lokální oprava, 20. 10. 2026

Stav: pouze necommitnutý návrh nad vydaným `dd9a751`, v odděleném worktree `codex/service-message-release-2026-10-19`. Žádný push, změna nastavení GA4 ani nové produkční nasazení. Práce Cursoru v hlavní složce se neupravovala.

## Podklad a obchodní účel

Primární konverzí zůstává skutečně přijatá poptávka, ne kliknutí. Soukromý analytický audit porovnával GA4 `generate_lead` a poskytovatelem doručené poptávky; konkrétní počty a identifikátory zůstávají mimo veřejný repozitář. Rozdíl agregovaných počtů není dokladem konkrétní chyby souhlasu a analytická událost není automaticky kvalifikovanou zakázkou. Stejně tak dříve nalezené neznámé vstupní stránky nejsou bez další segmentace důkazem jednoho problému.

Při čtecí kontrole nynějšího kódu se ale našla samostatná reprodukovatelná slabina: `GoogleConsentModeInit` vytváří `gtag` frontu již při výchozím denied. `sendGtagEvent` dosud kontroloval jen existenci prohlížeče a této funkce. `ContactForm` a dotazník proto mohly vložit vlastní událost do fronty bez statistického souhlasu; funkce navíc zůstává dostupná po jeho odvolání. Ostatní obchodní kliky měly vlastní consent kontrolu, což nenahrazuje ochranu společné funkce.

Offline spuštění skutečného bootstrapu a pomocné funkce před opravou: jedna `generate_lead` ve frontě bez volby, při výslovném odmítnutí i po odvolání předchozího souhlasu. To **není test skutečného síťového odeslání** ani důkaz, že právě toto způsobilo nesoulad GA4 nebo ztrátu poptávky. Google SDK ani síť se v reprodukci nespouštěly.

Účel opravy: spolehlivé a souhlas respektující podklady pro rozhodování o kvalifikovaných B2B poptávkách. Nejde o nový experiment s titulky, obsahem nebo designem a neslibuje vyšší pořadí, větší návštěvnost ani více vykázaných leadů.

## Rozsah

- Společný `sendGtagEvent` nyní čte aktuální uloženou statistickou volbu při každém volání. Chybějící, odmítnutá, zastaralá nebo nedostupná volba vlastní událost nepřidá do fronty. Samotný marketingový souhlas nestačí pro vlastní GA4 události.
- Bez nakonfigurovaného GA4 se vlastní analytické události neposílají přes tag jiného produktu. Neudržuje se historická fronta k pozdějšímu přehrání po souhlasu.
- Výjimka nepovinného Google tagu se nepropíše do výsledku úspěšně přijaté poptávky. Výsledek přijetí nadále určuje odpověď kontaktního API, nikoli dostupnost analytiky.
- Při platném statistickém souhlasu zůstávají názvy i parametry událostí včetně `lead_id`, `form_id` a služby beze změny. `generate_lead` stále vzniká až po úspěšném přijetí API, ne při kliknutí, honeypotu nebo chybě odesílání.
- Nemění se automatické `form_start`, `page_view`, načítání Google tagu, Consent Mode, cookie lišta, API/doručování, ochrana Turnstile, SEO, veřejný obsah, obrázky ani ISR. Žádné další závislosti nebo externí požadavky.
- Nový `test:analytics-consent` je součástí `npm run verify`. Všechny nové testy používají syntetické údaje a nahrazené rozhraní API, nikdy skutečnou poptávku nebo Google hit.

## Ověření

- Stejná offline reprodukce po opravě: nula vlastních událostí bez volby, při odmítnutí a po odvolání; jedna zachovaná událost s platným souhlasem.
- Regresní test pokrývá SSR, chybějící tag, marketing-only, znovuudělení souhlasu bez přehrání historie, odstranění/poškození volby, výpadek storage, chybějící GA4 a výjimku tagu.
- Integrační část volá skutečný `ContactForm` se skutečnou pomocnou funkcí. Nahrazené kontaktní API vrátí úspěch, zatímco tag vyhodí výjimku: stav zůstane `loading → success`, nikoli chybné selhání přijaté poptávky. API se v testu volá pouze jednou, bez sítě a e-mailu.
- Celé `npm run verify` a build prošly (631 cest; devět dosavadních lint upozornění, bez lint chyb). Finální dotčené soubory a rozšířený test jsou navíc ověřeny samostatně po dokončení úpravy ochrany před výjimkou.
- Neměnný předzměnový snapshot již existujícího dd9a751 buildu porovnává všech 591 úspěšných jazykových stránek: zákaznický text, strukturu, JSON-LD, titulky, meta, canonical, hreflang, robots a sitemap beze změny. Vynechány pouze frameworkové transportní skripty, verzované JS odkazy a přesný prázdný React oddělovač.
- Lokální smoke: 584 URL a 302 navazujících interních odkazů, žádné selhání. Routing, jazykové varianty, přesměrování, 404/noindex a odmítnutí prázdného API požadavku prošly. Žádný hromadný crawl produkce, skutečný e-mail nebo testovací poptávka.

## Interpretace a další krok

Oprava nevysvětluje automaticky chybějící landing page ani rozdíl mezi počtem analytických a doručených případů. Záměrně nepřidává další ruční `page_view`, který by mohl duplikovat již zapnuté automatické měření. Neřeší bez důkazu časování nebo konfiguraci automatických událostí v účtu.

Pro nový rozpad vstupní stránka × zařízení × organický kanál × konkrétní formulář je třeba obnovit přihlášení do GA4. Google při dnešním pokusu požaduje nové ověření identity; přihlašovací karta ponechána majiteli. Resend rovněž aktuálně vrací veřejnou stránku bez doručovací historie. Dřívější stavy Delivered se nepředkládají jako nové potvrzení doručení po dnešku. Nebyl získáván nebo vypisován žádný tajný API klíč.

Před případným vydáním znovu porovnat aktuální GitHub main a práci Cursoru, zkontrolovat tento úzký diff a získat konkrétní produkční souhlas. Změnu měření vyznačit skutečným datem nasazení: případný úbytek událostí bez souhlasu není sám pokles skutečných poptávek. Úspěch hodnotit proti potvrzenému doručení a obchodní kvalifikaci, ne snahou vykázat každého návštěvníka. Stávající SEO experimenty nepřepisovat; případné vydání bude další technická měřicí fáze. Nynější produkční návratový bod zůstává `dd9a751`, žádný rollback nebyl proveden ani potřeba.

Primární metodika: [Consent Mode](https://developers.google.com/tag-platform/security/concepts/consent-mode), [konfigurace tagu a události](https://developers.google.com/tag-platform/gtagjs/configure), [page_view a riziko duplicit](https://developers.google.com/analytics/devguides/collection/ga4/views), [význam neznámé vstupní stránky](https://support.google.com/analytics/answer/13504892?hl=en). Dokumentace ověřena 20. 10. 2026; konkrétní chování zde dokládají uvedené lokální testy, nikoli obecná dokumentace sama.
