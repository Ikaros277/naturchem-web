# Komerční nabídka a návaznost článků — 14. 10. 2026

## Stav a zadání

Pouze lokální implementace bodů 2 a 3 z dokončeného Google/AI auditu na pokyn vlastníka. Větev `codex/serp-commercial-evidence-2026-10-14`, samostatný worktree na produkčním základu `8a96cf02b71a057e8eede67b3f6361ac7930adac`. Původní Cursor checkout, předchozí rozepsané články a quota worktree nebyly upravovány. Bez commitu, push, merge, CMS publikace a produkčního nasazení. Bod 1 (nové zpracování/indexace Googlem) ponechán bez zásahu podle zadání.

Dopracování a finální lokální ověření dokončeno 16. 10. 2026. Náhled běží na `http://127.0.0.1:3125/`; jde o tuto oddělenou kopii, ne dřívější preview na portu 3124.

Následný pokyn vlastníka 16. 10. schvaluje commit a push připravené pracovní větve do `Ikaros277/naturchem-web`, společně se zpřehledněním dle [SEO-STRUKTURA-2026-10-16.md](SEO-STRUKTURA-2026-10-16.md). Popis bez commitu a push výše dokumentuje fázi lokální přípravy. `main`, produkce a redakční drafty tímto krokem zůstávají beze změny.

Produkční `publication-state.json` v auditu uváděl tento základ a build 13. 10. 2026 13:43:40 UTC. Build čas není čas přiřazení produkčního aliasu. Nové Git čtení vzdáleného main narazilo na lokální Schannel přihlašovací chybu; ověření TLS nebylo vypnuto. Před případným vydáním znovu ověřit vzdálený main a produkci.

## Naměřený baseline

Audit 14. 10.: 105 skutečně zkontrolovaných Google dotazů ve 29 skupinách, 50 s naším organickým výsledkem na první stránce. Stejných 93 frází jako 7. 10.: 48 nyní oproti 45 dříve. Český desktop, lokalita České Budějovice, bez reklam/map a bez připočítání citací AI. Jde o přítomnost v daném vzorku, nikoli o objemově vážený podíl trhu.

- Osvětlení 0/4, bezpečnostní listy 0/5, ISPOP 0/4, skutečné výpočty GHG/uhlíkové stopy 0/3.
- Obecná hluková studie, její cena a studie pro stavební povolení nebyly nalezeny; průmyslový areál byl na pozici 3 a místní studie na 2.
- Obecná rozptylová studie a její zpracování nebyly nalezeny; dotaz na kotelnu vedl na typické zakázky (2), cena na FAQ (5).
- IPPC/žádost nebyly nalezeny, změna IPPC vedla na článek (3). U mikroklimatu uspěl článek (4–5); služba vibrací pro VZV byla na pozici 2.

GSC, Česko/Web/všechna zařízení: 14. 9.–11. 10. versus 17. 8.–13. 9., dvě úplná 28denní období. Kliknutí 176 vs. 154, zobrazení 5 692 vs. 4 118, CTR 3,1 vs. 3,7 %, průměrná pozice 5,6 vs. 7. Samostatný pohled Google AI odkazy: 2 192 vs. 1 368 zobrazení, nikoli leady. Nízké zastoupení v tabulce dotazů nelze zaměňovat za nulovou poptávku kvůli ochraně soukromí GSC.

AI vzorek: 6 scénářů Gemini a 2 anonymní Perplexity Search. NATURCHEM nebyl doporučen jako dodavatel v části scénářů studií a dokumentace. Není to měření všech AI nástrojů ani univerzálního pořadí. Nová GA4 data a potvrzené kvalifikované leady nebyly v tomto implementačním kroku odečteny.

## Úpravy a hypotéza

1. Sedm služeb (osvětlení, SDS, ISPOP, GHG, hluková studie, rozptylová studie, IPPC): tři obecné souhrny nahrazeny třemi krátkými konkrétními body. Viditelně zadání, naše práce a dodaný výstup; žádná nová dlouhá sekce.
2. V existujícím panelu podkladů stručně vysvětlen základ nabídky/ceny bez smyšlených cen a termínů. Studie mají viditelné cenové faktory, nikoli pouze FAQ. Poptávka přenáší správnou kategorii a konkrétní zadání.
3. Doložené archivní ukázky SDS, ISPOP, GHG, IPPC a dalších dokumentací propojeny s jejich skutečnou veřejnou skupinou realizací. Stejné původní případy, žádné vymyšlené další zakázky či nově zveřejněné klientské podklady.
4. Přehled služeb CS/EN/DE sjednocen s uživatelem potvrzenou tvorbou nových SDS a kompletním IPPC/ISPOP servisem. ISPOP title/description odpovídá zpracování a podání. GHG metadata akreditační stránky již neřadí GHG mezi autorizace.
5. Související služby článků upřednostňují přesný obor před obecným tématem: osvětlení, mikroklima, vibrace, tepelná/chladová zátěž, diisokyanáty, SDS, GHG, SPE a studie. Opraven i starý klíč tématu „Hluk“ na aktuální „Hluk a vibrace“. Přednost existujících specifických kolaudačních/kategorizačních/oznamovacích landingů zůstává; srovnávací článek studie vs. měření nově vede nejprve na studii, ne automaticky na kolaudaci.
6. U cílených českých článků kompaktní věcná cesta k předvyplněné poptávce. IPPC EN/DE zachovává dosavadní návaznost. Existující úvodní inline CTA článků se nerozmnožují. U GHG explicitně vyloučeno akreditované EU ETS ověření.
7. Závěr publikovaného článku o chybách SPE odpovídá potvrzenému servisu včetně podání. Právní a technické pasáže, termíny, paragrafy, normy a data publikace nebyly měněny. Všech 12 plánovaných článků zůstává draft.

Hypotéza: jasnější výstup a rozsah nabídky sníží nejistotu EHS/ekologa/projektanta; konkrétní interní odkaz a relevantní předvolba sníží tření před skutečnou poptávkou. Nejde o naměřené zvýšení rankingů, doporučení AI nebo počtu zakázek.

## Ochrany a ověření

Zachovány indexované URL, přesměrování, canonical, hreflang, JSON-LD a původní odborný obsah v disclosures. Formulářové události, doručování, consent a definice `generate_lead` beze změny. Žádné nové balíčky, klientský JS, widgety, obrázky, ISR intervaly nebo placené služby. Žádné odeslání formuláře.

Nová kontrola `test:commercial-intent` testuje sedm nabídek, platné předvolby a zprávy, 12 konkrétních článkových cest, skutečné cílové routy, reference, jazykové fallbacky a zachování draftů. Součást `npm run verify`.

Finální výsledky 16. 10.:

- `npm run verify`: PASS včetně sestavení, všech dosavadních testů a nového testu obchodních návazností. Lint 0 chyb / 9 dosavadních varování v jiných komponentách. Build nadále hlásí existující `metadataBase` upozornění; nelze to vydávat za audit bez jakéhokoli upozornění.
- Všech 21 vykreslených cílových verzí (7 služeb × CS/EN/DE): správný produkční canonical, jeden H1, bez noindex, parsovatelné JSON-LD.
- Finální lokální smoke: 584 sitemap/extras URL a 302 dalších interních odkazů, celkem 886 kontrol bez HTTP či obsahové chyby. Routing smoke PASS včetně jazyků, canonical, hreflang, přesměrování, 404 a odmítnutí prázdného neplatného payloadu; žádný e-mail ani platná poptávka.
- Ověřeny všechny nové nabídky při 320 px bez vodorovného přetékání a bez dalších inquiry tlačítek (stále dvě v obsahu služby). Vizuálně desktop 1440 px, mobil 375 px: osvětlení, SDS a článková návaznost; při kontrole dále zkráceny duplicitní věty v cenových podmínkách. Zachována relevantní třetí volba kolaudačního měření v článku studie vs. měření.
- Skutečný proklik článek → hluková studie → formulář: vybráno „Hlukové studie“, správná úvodní zpráva a kotva formuláře. Formulář neodeslán. Odkaz SDS → reference otevřel správnou skupinu s bezpečnostními listy stavebních směsí.
- Statické/cache/CSS/mobilní rozpočty PASS bez uvolnění limitů; 591 statických HTML stránek, homepage 131 890 B, kontakt 97 464 B. Nejde o skóre PageSpeed, zrychlení v procentech nebo Vercel účtování. Vercel usage nebyla nově odečtena.
- Při obnovení práce 16. 10. generátory správně zahrnuly dříve naplánovaný článek o zápachu: 78 veřejných článků v každém jazyce oproti 77 při auditu 14. 10. Datum ani stav tohoto článku nebyly měněny. Dvanáct nových odborných draftů je nadále neveřejných. Regenerované indexy/obrázkové manifesty odpovídají tomuto času a změně závěru SPE.
- Kontrola diffu: chráněné konfigurace hostingu/robotů, formulářové kategorie a `.agents/` bez změny; žádné nové závislosti ani publikované privátní podklady. Finální screenshoty desktop/mobil uloženy mezi soukromé výstupy vlákna.

První pokus o build odmítl sdílený junction `node_modules` mimo kořen projektu; vytvořen vlastní adresář závislostí z lokální cache. Při zastavení prvního náhledu se objevil interní `NoFallbackError`; na finálním čistém startu se při opakovaných 886 kontrolách a skutečné kontaktní cestě neopakoval. Výše uvedené výsledky jsou až z finálního sestavení a náhledu.

## Vyhodnocení a případné vydání

Tato lokální příprava nezahajuje souběžný produkční experiment a nemění začátky EXP-004/013/014. Dosavadní společná vydání 8.–13. 10. jsou rušivé faktory; aktuální měření jim nelze kauzálně připsat. Před dalším povoleným nasazením zaznamenat společnou novou fázi a její skutečný commit/datum. Nevydávat jen kvůli kolísání pořadí jednotlivého dotazu.

Po případném vydání: dvě stejně dlouhá úplná 28denní období konkrétních query/page v GSC; při malém vzorku 56 dní. V GA4 cílové vstupní stránky a `form_start` → úspěšný `generate_lead`, následně firemně potvrzené kvalifikované poptávky. Kliknutí ani AI citace není poptávka. AI test opakovat se stejnými veřejnými zadáními, zaznamenat nástroj/model/datum a oddělit zmínku, citaci a doporučení dodavatele.

Před produkcí: výslovné schválení náhledu a nasazení, aktuální main/produkce, diff/review, kompletní verify a relevantní SEO smoke. Rollback: revert izolovaného release commitu nebo schválený návrat na předchozí ověřené nasazení; nezasahovat do obrázkových URL a plánovaných draftů.
