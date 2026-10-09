# TECH-014 — přehlednější čtení článků, lokální návrh 9. 10. 2026

## Zadání a rozsah

Vlastník označil články za dlouhý úzký sloupec a navrhl klikací kapitoly. Návrh je připraven v `codex/article-reading-layout-2026-10-09`, ze skutečně nasazeného základu `9f9864a`. Dne 9. 10. výslovně schválil společné produkční vydání všech úprav článků a odstranění kontaktu na Žilkovou včetně dříve zadaného skrytí WhatsAppu. GitHub origin/main při finálním preflightu odpovídá `9f9864a`. Probíhá nové kompletní ověření před jedním produkčním nasazením; stav Ready se nepředpokládá. Hlavní checkout s Cursor změnami nebyl upravován.

## Pozorovaný baseline

- Sdílená šablona poradny má centrovaný text bez navigace po kapitolách; nadpisy nemají generované kotvy.
- Produkční článek `/poradna/ippc-kdy-provoz-potrebuje-integrovane-povoleni/` má 16 hlavních kapitol. Při kontrolním desktopovém viewportu 1280 px byl textový sloupec široký 704 px, tělo článku vysoké přibližně 8064 px. Jde o konkrétní prohlížečové měření, nikoli univerzální délku stránky.
- U jedné související služby se namísto názvu zobrazovala adresa `/sluzby/povoleni-provozu`. Název je nyní převzat z existujícího jazykového menu; cílová URL se nemění.

## Změna a hypotéza

- PC: samostatný čtenářský panel, větší využití dostupné šířky a sticky boční obsah. Delší seznam má vlastní omezenou výšku a lze jej posouvat.
- Mobil/tablet: nativní, standardně zavřený rozbalovací obsah před souhrnem. Klikací plochy nejméně 44 px; text článku není schován za rozbalováním.
- Kotvy sestavené ze skutečného Markdown AST ve stejném serverovém průchodu jako text: diakritika, opakované názvy, Setext i nadpisy uvnitř kódu ošetřeny. Přeskakuje se na hlavní kapitoly, vedlejší nadpisy mají vlastní kotvy také.
- Lepší hierarchie nadpisů, oddělení kapitol a praktických poznámek. Na mobilu široké tabulky ve fokusovatelném regionu s bočním posunem; vysvětlení je před tabulkou.
- Návrat na obsah po článku. Odsazení kotev využívá již existující `html` scroll-padding pro pevnou hlavičku, takže jej nepočítá podruhé.

Hypotéza: snazší nalezení konkrétní odpovědi a služby sníží tření před kvalifikovanou poptávkou. Samotný text není zkrácen; cílem není uměle zmenšit stránku malým písmem. Změna nepředstavuje prokázaný rankingový ani konverzní uplift.

## Ochrany a měření po případném schválení

Bez nových runtime závislostí nebo klientského JavaScriptu navigace. Reader má vlastní CSS modul pouze v článcích; homepage a služby se nepřestylovávají. Veškerá odborná tvrzení, zdroje, autoři, data, původní odkazy, hero obrázky, adresy, canonical, hreflang a Article/Breadcrumb data zachovány. Formulář, consent, `generate_lead`, CMS publikace a ISR politika beze změny.

Změna zatím není aktivní produkční experiment. Po nyní schváleném vydání označit prezentační změnu jako rušivý faktor probíhající společné fáze; nevyhodnocovat jako izolovaný SEO zásah. Porovnat úplná stejně dlouhá 28denní období GA4 návštěv s článkem na cestě ke skutečnému `generate_lead`, kliknutí na relevantní služby a potvrzené přijetí kvalifikovaných poptávek. GSC sledovat pro ochranu indexace a dotazů, nikoli předpokládat automatický růst. Nezavádí se nová analytická událost za kliknutí na kapitolu.

Rollback případného vydání: ověřený produkční základ `9f9864a` nebo samostatný revert šablony a připojených testů. Zatím žádné produkční změny ani nový deployment.

## Finální lokální ověření

- `npm run verify` úspěšně dokončen nad finálními zdroji; build všech 580 generovaných rout a stávající rozpočty PASS. Lint má 15 dosavadních varování mimo nové soubory, žádné chyby; cílený lint změněného readeru bez varování.
- Nový guard porovnává přesný text a všechny původní odkazy u 190 zdrojových článků všech jazyků. Ověřuje duplicitní názvy, formátované nadpisy, Setext, kódové bloky, unikátní cíle, přístupné nativní rozbalování a skutečné názvy souvisejících služeb. Post-build prověřuje 188 skutečně vykreslených článků a umístění mobilního vysvětlení před každou tabulkou.
- Finální sestavený lokální web: sitemap smoke 521 adres + 237 dodatečných interních odkazů, nula chyb. Routing/redirect/canonical/hreflang/404 a pouze neplatná lokální formulářová validace bez chyby. Žádná skutečná poptávka nebyla odeslána.
- Ruční prohlížečová kontrola viewportů 1280, 375 a 320 px. PC outline sticky pod hlavičkou; obsah standardně zavřený na telefonu. Všechny mobilní kapitoly mají klikací výšku nejméně 44,7 px; stránka nepřetéká do stran, tělo zachovává 16px text. Tabulka je samostatně posouvatelná i klávesou doprava.
- Skutečné kliknutí na kapitolu i návrat na obsah ověřeny. Po opravě dvojího odsazení je desktopový obsah na 146 px při hlavičce končící na 125 px; mobilní obsah na 77 px při hlavičce 56 px, cílová kapitola přibližně 81 px. Nadpisy nejsou zakryté, nadbytečný prázdný prostor odstraněn.
- Kontrolní desktopový sloupec má 797,8 px a větší 17px písmo. Tělo dlouhého IPPC článku má přibližně 8154 px: délka zůstává obdobná, text není vynechán. Čtenář nemusí ke konkrétní odpovědi procházet všech 16 kapitol.
- Nový sestavený CSS modul: 6157 B, lokální gzip odhad 1414 B. Bez nové knihovny a bez klientského skriptu obsahu; není to měření spotřeby Vercelu ani příslib PageSpeed 100.
- Finální desktopový a mobilní snímek jsou v soukromých výstupech `naturchem-article-desktop-2026-10-09.png` a `naturchem-article-mobile-2026-10-09.png`; do veřejných assetů nejsou přidány. Původní ověření bylo na portu 3124. Po navazující lokální úpravě kontaktů je aktuální náhled na `http://127.0.0.1:3123/poradna/ippc-kdy-provoz-potrebuje-integrovane-povoleni/#article-outline`.

Diff zkontrolován, `git diff --check` PASS. `globals.css`, CMS články, metadata, obrázky, zdrojové indexy a hlavní Cursor checkout zůstaly beze změny.

Finální preflight po produkčním souhlasu 9. 10.: nové celé `npm run verify` exit 0 (15 dosavadních lint warnings, žádné errors), 580 rout /528 statických stránek, všech 188 vykreslených článků a dva kontakty CS/EN/DE PASS. Restartovaný sestavený náhled na 3123: znovu 521 sitemap adres +237 interních odkazů a routing/metadata/redirect/404 bez chyby. Pouze neplatná lokální formulářová validace, žádná skutečná poptávka. Vercel UI potvrzuje dosavadní `9f9864a` / `BCaTFA3r3nZhoBcQ28F9Q14Fcgy6` Ready jako rollback. Jeden fast-forward push na main vyvolá společný produkční build; výsledek je nutné teprve ověřit.
