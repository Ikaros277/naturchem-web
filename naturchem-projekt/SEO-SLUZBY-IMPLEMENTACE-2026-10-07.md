# SEO a doložení služeb — lokální implementace 7. 10. 2026

## Stav a ochrana rozpracované práce

Pouze lokální návrh na `codex/seo-services-evidence-2026-10-06`, základ `ea315489ca68a690e7e9e381197e38cc57534bd0`. GitHub main v Ikaros277/naturchem-web byl dnes znovu ověřen standardním TLS čtením stejného commitu; původní sandboxový certifikátový problém není důvodem vypínat ověřování. Původní Cursor checkout ani .agents nebyly upravovány.

Žádný commit, push, merge, produkční deployment, změna tarifu, CMS publikace ani odeslaná poptávka. Nejde o spuštěný produkční experiment nebo prokázané zlepšení rankingu. Zachován dřívější lokální návrh mikroklimatu/vibrací a fotografie ruční brusky z 6. 10.

## Pozorovaný baseline

Dokončený audit 7. 10.: 93 dotazů, 45 s naším hlavním výsledkem na první stránce, 48 bez nalezeného našeho hlavního výsledku. Český desktop, IP lokalita České Budějovice; nikoli univerzální pořadí pro celé Česko, mobil nebo objemově vážené skóre. Následující podíly znamenají nalezené varianty z kontrolovaných variant, ne podíl trhu či konverzí.

| Oblast | První stránka / kontrolované varianty | Stávající cílová URL |
| --- | --- | --- |
| emise | 4/11 | `/sluzby/mereni-emisi/` |
| hluk | 3/8 | `/sluzby/mereni-hluku/` |
| mikroklima | 1/2 | `/sluzby/mereni-mikroklimatu/` |
| vibrace | 0/4 | `/sluzby/mereni-vibraci/` |
| osvětlení | 0/3 | `/sluzby/mereni-osvetleni/` |
| hlukové studie | 3/6 | `/sluzby/hlukove-studie/` |
| rozptylové studie | 2/4 | `/sluzby/rozptylove-studie/` |
| modelové výpočty | 1/2 | `/sluzby/modelove-vypocty/` |
| provozní řády | 1/3 | `/sluzby/provozni-rady/` |
| povolení provozu | 0/2 | `/sluzby/povoleni-provozu/` |
| IPPC | 0/3 | `/sluzby/ippc-integrovana-povoleni/` |
| EIA | 3/4 | `/sluzby/eia-oznameni-zameru/` |
| zjišťovací řízení EIA | 0/2 | `/sluzby/zjistovaci-rizeni-eia/` |
| technické přílohy | 0/2 | `/sluzby/technicke-prilohy/` |
| ISPOP | 1/3 | `/sluzby/ispop/` |
| GHG | 1/3 | `/sluzby/ghg-overovani/` |
| chemické látky | 1/2 | `/sluzby/chemicke-latky/` |
| školení | 1/3 | `/sluzby/skoleni-chemicke-legislativy/` |
| bezpečnostní listy | 0/3 | `/sluzby/bezpecnostni-listy/` |

GSC úplná období 7. 9.–4. 10. vs. 10. 8.–6. 9.: Česko/Web/všechna zařízení, 199 vs. 136 kliknutí, 5 325 vs. 3 847 zobrazení, CTR 3,7 vs. 3,5 %, průměrná pozice 5,9 vs. 7,4. Google AI odkazy 2 026 vs. 1 196 zobrazení jsou samostatný pohled, nikoli počet kvalifikovaných leadů či výkon ChatGPT. Vibrace: 18 zobrazení / 0 kliknutí, průměrná pozice 43,7. Nové GA4 údaje a kvalifikace přijatých leadů nejsou součástí tohoto implementačního kroku.

Produkční kontrola 29 cílových stránek: 200, canonical, jeden H1 a validní JSON-LD. Dvojité lomítko v drobečkové navigaci bylo skutečný nedostatek; není doloženo, že způsobovalo slabší ranking. Osvětlení a vibrace jsou indexované. Starší článek IPPC patří mezi objevené/neindexované články; změny nyní přidávají relevantní interní odkaz, negarantují indexaci.

## Potvrzené firemní skutečnosti

Uživatel 7. 10. výslovně potvrdil:
- tvorbu nových bezpečnostních listů vedle kontroly a revizí;
- kompletní servis včetně žádosti/hlášení a podání za klienta u IPPC, povolení provozu a ISPOP;
- výpočty GHG, kontrolu emisních dat a uhlíkovou stopu, ale nikoli nezávislé akreditované ověření EU ETS.

Nenabízíme dokončenou nabídku ve fiktivním termínu, schválení projektu úřadem, nové metodiky/certifikace ani akreditované EU ETS ověření. Existující dokumenty autorizací nebyly odstraněny nebo svévolně přejmenovány. Vymezení GHG bylo sjednoceno v hlavních FAQ CS/EN/DE a v zahraničních službových verzích; veřejné starší doklady musí být posuzovány podle skutečného rozsahu, nikoli zaměňovány s akreditací EU ETS.

## Změny a očekávaný obchodní účinek

1. Všech 19 slabších skupin dostalo trojici konkrétních dotazů místo nesouvisejícího kategoriového FAQ. Odpovědi popisují skutečný rozsah, přípravu, výstup a vhodnou navazující službu. Viditelný text a FAQPage jsou shodné. Nejde o příslib FAQ rich resultů, přednosti v AI nebo automatického TOP10.
2. Přesnější title/H1 a stručnější úvod u osvětlení, IPPC, povolení, příloh projektu, bezpečnostních listů, GHG, modelových výpočtů a rozptylových studií; mikroklima/vibrace navazují na 6. 10. Silné URL a vhodné existující názvy ponechány.
3. Uživatelsky potvrzená kompletní nabídka je ve službách viditelná. U emisí je odlišen průmyslový stacionární zdroj od STK; u hluku měření skutečného provozu od modelové studie. Modelové výpočty zůstávají imisní/hlukové, nikoli vymyšlená nová služba.
4. Šest doložených realizací je anonymně použito na deseti souvisejících stránkách jako krátká poznámka „Z naší praxe“, bez samostatné dlouhé sekce a dalších CTA. Oblasti: vibrace, osvětlení, mikroklima, studie/přílohy/modely, posudek/povolení a autorizované emise. Společná studie není prezentována jako několik různých klientů nebo nezávislých referencí.
5. Osvětlení, mikroklima a vibrace předvyplňují příslušnou existující položku formuláře. Čtyři jiné cesty přenášejí konkrétní zadání zprávou a používají existující příbuznou kategorii: povolení → odborné posudky, EIA screening/přílohy → EIA, modely → rozptylové studie. Je to zachování kompatibility, ne zavedení nových analytických kategorií.
6. Opravené či doplněné propojení sedmi článků se službami, včetně předchozího mikroklimatu; bezpečnostní listy navíc bez duplicitního H1 a redakčních řádků „Slug/Perex“. Termíny publikace a odborné právní pasáže nebyly změněny. Budoucí článek o změně IPPC nebyl předčasně publikován.
7. Drobečkové JSON-LD nemá dvojité lomítko ve vlastních cestách. Ostatní strukturovaná data, externí URL, query/hash, canonical a hreflang jsou zachovány.

Hypotéza: přesnější odpověď na komerční zadání a věcně doložená praxe sníží nejistotu B2B zadavatele a zlepší přechod k relevantní poptávce. Interní propojení usnadní nalezení obsahu návštěvníkům i robotům. Nejde o již naměřený růst.

## Soukromé podklady

Zdrojová evidence a citace protokolů jsou v soukromém výstupu výběru realizací mimo repozitář. Raw protokoly, názvy klientů, čísla zakázek, výsledky, osobní údaje a interní cesty nejsou vloženy do veřejného modulu ani webu. Doplňující emisní protokol byl čten a vizuálně ověřen na titulní/obsahové straně: licí stroj, TZL a zinek, autorizované měření. Publikační revize má schválit právě krátké anonymní znění, nikoli celé dokumenty.

Zbylé oblasti nedostaly vymyšlené reference. U SDS, IPPC a ISPOP je nabídka potvrzena uživatelem, ale další autentické příklady realizací zatím nebyly doplněny. Z archivu nebyly přebírány další fotografie bez výběru a kontroly práv/soukromí.

## Ověření

- `npm run verify`: PASS včetně typecheck, formuláře/doručování (mocky), publikace, B2B, kvality, fotografií, obou nových službových kontrol, výkonu, build a následných rozpočtů.
- Lint: 0 chyb / 16 existujících varování mimo tyto změny. Build má také existující metadataBase upozornění; lokální kontrola skutečných cílových canonical/hreflang prošla.
- Nový guard hlavních GHG FAQ ve třech jazycích následně PASS. B2B kontrola nadále zakazuje velkou samostatnou case-study sekci; nově rozlišuje nejvýše jednu stručnou doloženou poznámku.
- 521 URL ze sitemap/extras + 237 dalších interních odkazů: 758 kontrol, žádné HTTP/obsahové chyby. Routing smoke: žádné chyby. Prázdný nevalidní lokální API payload ověřuje odmítnutí 400, nevytváří e-mail/poptávku.
- 29 lokálních cílů: 200, správný produkční canonical, jeden H1, bez noindex, validní JSON-LD, opravené breadcrumb cesty, vše v sitemapě. Dvě CS-only kampaně mají záměrně omezený hreflang.
- Browser review: desktopové osvětlení a poznámka praxe, mobil 375 px mikroklima/IPPC/GHG/FAQ; kontrola bez vodorovného přetékání při 320 px u mikroklimatu, SDS, příloh projektu a IPPC. Funkční rozbalení odborné odpovědi; služba osvětlení → formulář se správným výběrem, povolení → zpráva s konkrétním zadáním. Formulář neodeslán.

## Výkon, SEO a Vercel

Nový obsah je serverově renderovaný, bez dalších balíků, klientských komponent, externích widgetů či dynamických ISR cest. Nativní disclosures a dosavadní dvě lokální inquiry CTA zůstávají. Homepage nebyla přepsána.

528 statických HTML stránek podle postbuild guardu. Aktuální lokální objemy: homepage 133 251 B, kontakt 101 807 B, poradna 127 946 B, FAQ 249 344 B, emise 128 715 B. Žádný rozpočet nebyl kvůli nové poznámce uvolněn. Tyto údaje nejsou Vercel účtování, skóre PageSpeed ani procento zrychlení. Devět autentických fotografií v celém lokálním návrhu má 72 metadata-free variant, celkem 2 121 171 B; devátá sada ruční brusky byla připravena už 6. 10.

Nynější Vercel usage nebyla nově měřena; lokální kontrola ani statická architektura nemohou garantovat nepřekročení klouzavých produkčních kvót.

## Podmínky případného vydání a měření

Před nasazením: schválit náhled a anonymní odborné znění, přezkoumat diff, znovu ověřit main/produkci a spustit verify na konečném commitu. Vyhodnotit nebo výslovně ukončit/přefázovat EXP-004 (plán do 19. 10.), EXP-013/014 (plán do 29. 10.). Nový místní obsah emise/hlukových studií/autorizované osoby je připravená budoucí fáze, nikoli aktivovaný souběžný produkční experiment. Historický záznam z 6. 10., že EXP-013/014 nebyly tehdy měněny, zůstává platný pro tehdejší stav.

Po povoleném nasazení porovnávat stejně dlouhá úplná 28denní období konkrétních dotazů/URL v GSC; u malého vzorku 56 dní. Zachovat metodiku Google dotazového auditu. Sledovat indexaci, relevantní kliknutí, form_start → skutečný generate_lead a firmou potvrzené přijaté kvalifikované poptávky. Klik na CTA není dokončená poptávka. Jeden kombinovaný release neumožní přiřadit efekt každému dílčímu textu.

Rollback: samostatný revert případného release commitu nebo návrat na ověřený ea31548 po schválení; zachovat obrázkové URL a plánovanou publikaci článků. V tomto kroku neexistuje nový produkční commit ani nasazení.
