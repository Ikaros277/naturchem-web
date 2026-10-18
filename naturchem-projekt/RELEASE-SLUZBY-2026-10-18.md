# Schválené vydání služeb a firemních textů — 18. 10. 2026

Majitel po prohlédnutí barevných karet výslovně zadal „Ok, tak to nahoď naostro“. Tento souhrn aktualizuje stav dřívějších lokálních návrhů z dnešního dne; jejich průběžné výsledky zůstávají jako historie iterací.

## Rozsah a hypotéza

- Společná dolní část služeb a situačních stránek: tematické panely s ikonami, oddělené FAQ a zřetelné navazující služby. Úplné odborné podrobnosti zůstávají v serverovém HTML.
- Česká stránka měření emisí: neduplicitní příprava poptávky, přehled všech ověřených skupin měření a odpovídající existující fotografická reference.
- Pracovní prostředí a podklady pro kategorizaci: úplný rozsah v barevných kartách s ikonami, existující autentická fotografie, lehký statický grafický motiv. ČIA a MŽP jsou nadále rozlišeny; HF a fluoridy se uvádějí v autorizovaném rozsahu MŽP.
- Přímější profesionální české texty bez interních auditních formulací. Odborné články se nepřepisují. Metodické poznámky a zdroje zůstávají na stránce akreditací.

Výchozí problém je kvalitativně zaznamenaná nepřehlednost a jednolitost, nikoli změřený pokles konverzí. Očekáváme snazší orientaci a méně odchodů při hledání konkrétního měření. Dopad hodnotit přes kvalifikované poptávky, `form_start` → `generate_lead`, zařízení a vstupní stránku; umístění až z následných dat GSC. Růst konverzí ani SEO zatím není prokázán.

## Závěrečné kontroly aktuálního balíku

- Celé `npm run verify` úspěšně skončilo s kódem 0, včetně produkčního sestavení, obsahových a výkonových rozpočtů. Devět původních lint upozornění mimo zásah, nula chyb.
- Lokální HTTP kontrola 584 URL a 302 dalších interních cílů: 886 kontrol bez chyby.
- Porovnání všech 582 sitemap stránek zachovává H1, title, metadata, canonical, hreflang, kotvy a schémata vůči příslušnému předzměnovému snímku. Jedinou změnou porovnávaného schématu je popis Proč NATURCHEM odpovídající novému viditelnému úvodu. V emisním vzoru byla již dříve odstraněna jedna duplicitní FAQ, se shodným viditelným obsahem a schématem.
- Interní cíle zachovány kromě výslovně odstraněného opakovaného odkazu na přílohu PDF na třech obchodních přehledech; stránka akreditací a dokument zůstávají dostupné.
- Všech 90 českých zdrojů odborných článků i přeložené hlavní texty zůstávají beze změny. Úplnost rozsahu, externí analýzy a oddělení oprávnění chrání nové regresní testy.
- Předchozí vizuální kontroly současné podoby: PC a mobil, šířky 320–1440 px, nativní rozbalování, klávesnice a kontrast. Barevné karty nepřidávají klientský JavaScript, knihovnu ani nový obrázkový soubor.
- `git diff --check` bez chyb. Soukromé podklady a screenshoty nejsou součástí repozitáře.

## Postup a návratová verze

Pracovní větev `codex/service-lower-visual-2026-10-18`; správný remote `Ikaros277/naturchem-web`. Před vydáním čerstvě ověřeno, že GitHub main i místní výchozí HEAD jsou `e9c0565698d504a8c00bda7f5e436738ad1d6b29`.

Vercel před vydáním potvrzuje tento commit jako Ready / Production / Current, deployment `5jygFGzR2ZuBdGFwxNcVLKDf7jVC`. Ponechat jej jako návratovou verzi. Plán: jeden běžný fast-forward push nového commitu do main a automatické produkční nasazení Git integrací; neposílat samostatnou preview větev a nevytvářet další ruční deployment. Bez force push, mazání deploymentů, změn tarifu, DNS, tajných hodnot nebo skutečné testovací poptávky. Sdílený checkout Cursoru zůstává nedotčen.

Skutečný výsledek nasazení, nový hash a cílená kontrola živého webu budou zaznamenány v soukromém výstupu po dokončení, bez dalšího deploymentu jen kvůli protokolu.
