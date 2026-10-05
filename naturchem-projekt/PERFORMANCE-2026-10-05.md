# TECH-011 — výkon homepage, 5. 10. 2026

Stav před vydáním: připraveno a ověřeno lokálně ve větvi `codex/performance-2026-10-05-release`, základ `8ef44bd37b75952f7edb7d568bcbb88b9d32bb03`. Uživatel 5. 10. 2026 výslovně schválil nasazení („tak ty zmeny nasad“). Původní pracovní prostor Cursoru ponechán beze změny. Přesný produkční commit, stav nasazení a následná měření se potvrzují samostatným záznamem po vydání.

## Pozorovaný výchozí stav

Uživatelem dodaný [PageSpeed report](https://pagespeed.web.dev/analysis/https-www-naturchem-cz/h89u13vl6v?form_factor=mobile), měření 5. 10. 2026 v 07:58 SELČ:

| Metrika | Mobil | Desktop |
| --- | --- | --- |
| Výkon | 87 | 89 |
| FCP | 1,7 s | 0,5 s |
| LCP | 3,6 s | 0,9 s |
| TBT | 30 ms | 260 ms |
| CLS | 0,008 | 0,003 |

Přístupnost, doporučené postupy a SEO mají v dodaném reportu 100. Pro CrUX nejsou dostatečná data. Jde o jeden laboratorní běh, nikoli důkaz zhoršení u všech návštěvníků nebo výsledek konverzí. Mobilní kritická cesta obsahuje asi 40,6 KiB blokujících CSS; odhad úspory reportu je 1 280 ms. LCP je skutečná fotografie měření, převažuje čekání na vykreslení. Na desktopu jsou podstatné dlouhé úlohy a práce hlavního vlákna; původ v animaci statistik je hypotéza podle kódu, nikoli prokázané přiřazení všech dlouhých úloh.

## Implementace

- Homepage načítá sestavenou podmnožinu původních stylů. Původní `globals.css` nebyl přepsán ani smazán. Všech 64 dalších vstupních souborů stránek načítá původní úplné styly přímo, takže detail služby ani kontakt nedostávají zbytečnou dvojitou sadu. Žádné URL se nemění.
- Generátor používá parser PostCSS, zachovává pořadí deklarací a pravidel, media queries, dynamické varianty, negativní a složené selektory. Automaticky zahrnuje importované potomky společných komponent, včetně rozbalovacího menu a patičky. PostCSS je výslovná vývojová závislost ve stejné verzi, kterou již používá Next.
- Generování probíhá před dev/build; výstup je ignorovaný sestavovací soubor. Při přidání třídy či úpravě `globals.css` v již běžícím dev serveru spustit `npm run test:runtime-styles`, případně server restartovat. Zdrojové CSS upravovat nadále v původním souboru.
- Statistiky se animují bez React state aktualizace každého snímku, nejvýše přibližně 30 aktualizací za sekundu. Zůstává animace od nuly, rezervovaná šířka, přístupná konečná hodnota a respektování reduced-motion.
- Hlavička používá rozměry z ResizeObserver bez opakovaného nuceného měření layoutu a zapisuje offset jen při změně výšky. Ověřeno na desktopu i mobilu.
- Vypnuto automatické přednačítání na společných lokalizovaných odkazech, homepage a v patičce. Navigace a jazykové přepínání zachovány; omezuje vedlejší požadavky, nikoli obsah pro vyhledávače.
- Zachován Source Sans 3, nově variabilní řez místo tří oddělených vah. Font nadále neblokuje čekáním na vlastní soubor a nepřednačítá se na úkor LCP fotografie.
- Nepodstatné widgety čekají na načtení dokumentu a následně volnou kapacitu. WhatsApp a desktopový launcher Tawk zůstaly dostupné; vendor chat se stále spouští až na výslovný klik. Consent-aware tracking a definice `generate_lead` se nemění.
- Externí cachovatelné CSS, statické stránky a absence časového ISR zachovány. `inlineCss` se nezapíná, HTML se nezvětšuje velkou kopírovanou sadou stylů. Žádný zásah do Vercel tarifu, WAF či DNS.

## Lokální měření stejnou metodou

Součty gzip referencovaných CSS ve stejném produkčním sestavení; nejde o síťové PageSpeed časy nebo Vercel účtovací data:

| Stránka | CSS před | CSS po |
| --- | ---: | ---: |
| Homepage CS/EN/DE | 33 769 B | 14 206 B |
| Kontakt CS | 33 232 B | 33 156 B |
| Měření emisí CS | 32 139 B | 32 063 B |
| Poradna CS | 30 919 B | 30 843 B |

Homepage CSS pokleslo o 57,9 %. Gzip HTML homepage zůstává prakticky stejné: 27 790 → 27 788 B, inline CSS 0 B. Celkový součet referencovaných JS se nesnížil: 214 310 → 214 404 B (+94 B); tento součet navíc zahrnuje nomodule polyfill, který moderní prohlížeč nemusí stáhnout. Zlepšení práce CPU a počtu prefetch požadavků nelze vydávat za menší JS balík.

Surové podklady jsou v lokálních výstupech `performance-2026-10-05-before.json` a `performance-2026-10-05-after.json`. Screenshoty desktopu/mobilu ve stejném adresáři. Lokální produkční náhled: http://127.0.0.1:3118/.

## Ověření a zbývající krok

- `npm run verify`: exit 0, produkční build 580 generovaných cest; existujících 16 lint varování, žádné lint chyby. Testy kontaktního doručování jsou simulované; nebyl odeslán žádný testovací e-mail.
- Nové postbuild kontroly: pokrytí 119 serverově vykreslených homepage tříd, úplné CSS u ostatních vstupních stránek, shoda generátoru, dynamické stavy a rozpočty CSS (<18 kB homepage, <35 kB vzorky detailů, gzip).
- Sitemap smoke: 520 URL + 230 dalších interních odkazů, 0 chyb. Routing smoke: jazyky, canonical, hreflang, přesměrování, metadata 404 a validace API, 0 chyb.
- Prohlížeč: desktopové a mobilní homepage, rozbalené desktopové megamenu, mobilní menu a služby, mobilní stránka emisí a CTA → předvyplněný formulář. Bez přetečení homepage; výška hlavičky a offset odpovídají. WhatsApp viditelný; Tawk launcher na desktopu viditelný po marketingovém souhlasu. U kontrolovaných stránek nebyly zaznamenány konzolové chyby.
- Původní fotografie, ilustrace studií/EIA, obsah, H1, metadata, strukturovaná data, URL, konverzní význam i právní režim souhlasů zachovány.

Nové PageSpeed skóre nebylo na produkci naměřeno a 100/100 není potvrzeno. Po výslovném schválení nasazení zopakovat alespoň tři mobilní a tři desktopové PageSpeed běhy, uvést medián a rozptyl; porovnat LCP, TBT a CLS, ne jen celkové skóre. Návratový bod je produkční commit `8ef44bd`.

Hypotéza obchodního efektu: rychlejší první zobrazení bez ztráty důvěryhodnosti a kontaktů omezí odchody a zvýší dokončení kvalifikovaných poptávek. Hodnotit stejně dlouhá 28denní období GA4 (při malém vzorku 56 dní), mobil a desktop zvlášť, podle `form_start` → úspěšného `generate_lead` a firmou potvrzeného doručení/kvalifikace. Nejde o prokázaný růst SEO, AI citací ani leadů. Obsahové experimenty se tímto nemění; technický zásah se zaznamená jako možný souběžný faktor.
