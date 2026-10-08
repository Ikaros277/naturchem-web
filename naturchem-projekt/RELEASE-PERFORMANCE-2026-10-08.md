# Schválené vydání a kontrola výkonu — 8. 10. 2026

## Rozsah a oprávnění

Vlastník odsouhlasil opravené fotografické reference a následně výslovně zadal kontrolu výkonu mobil/PC, případnou optimalizaci a produkční nasazení. Balík navazuje na GitHub main a produkci `ea315489ca68a690e7e9e381197e38cc57534bd0`; původní Cursor checkout zůstává nedotčen. Vydání je připraveno v `codex/seo-services-evidence-2026-10-06`, nikoli úpravou main. Jeden přímý fast-forward push do main má vyvolat jeden produkční build, bez samostatného preview deploymentu.

Schválený obsah: 22 českých službových stránek v 19 slabších dotazových oblastech, 19 ověřených poznámek praxe, související FAQ a interní odkazy; celkem 25 českých příkladů, z toho devět skutečných fotografických měřicích referencí a 16 kompaktních studijních/dokumentačních ukázek. Faktické opravy synchronizované v CS/EN/DE. Nezveřejňují se interní protokoly, klientské adresy, naměřené expozice ani soukromá zdrojová matice. Doložení není tvrzením o garantovaném výsledku měření nebo získaném povolení.

## Výchozí ostrý výkon

PageSpeed cloud, 8. 10. 2026, původní produkce ea31548: [mobil a desktop](https://pagespeed.web.dev/analysis/https-www-naturchem-cz/ac8sgthqb1?form_factor=mobile).

| Zařízení | Výkon | LCP | TBT | CLS |
| --- | ---: | ---: | ---: | ---: |
| Mobil | 91 | 3,376 s | 0 ms | 0,009 |
| PC | 100 | 0,561 s | 0 ms | 0,003 |

Přístupnost, doporučené postupy a SEO 100 v obou bězích. CrUX neobsahuje dostatek dat. Nejde o záruku výkonu všech skutečných návštěvníků ani o post-release výsledek.

## Úsporné změny

- Devět referenčních karet má 18 nativních odkazů na službu/poptávku místo hydratovaných router odkazů a prefetch. Konverzní události a předvyplnění zachovány, kliknutí stále není lead.
- Logo grid vybírá mobilní/tabletovou/desktopovou kapacitu CSS před prvním vykreslením; odstraněno měření při mount a resize. Rozbalení všech 19 zákazníků zůstává skutečným tlačítkem. Kontrast a přístupné názvy ovládání opraveny.
- Loga mají nativní lazy img bez obrazového runtime. MT Comax nově připravený ostrý 360px WebP, 15 112 B oproti 24 373 B gzip původního SVG; původní SVG zachováno. Jde o mechanickou optimalizaci existujícího loga, nikoli změnu značky.
- Cache na rok s immutable je omezena na nové datované fotografické soubory a loga, ne na HTML referencí. 337 immutable assetů chráněno hash guardem; žádná dříve zamčená URL nepřepsána.
- Fotografické varianty AVIF/WebP mají pevnou geometrii, lazy/low prioritu a 384/640/960px velikosti. Všech 54 variant devíti referencí celkem 1 335 603 B. Žádné nové on-demand transformace, galerie, runtime závislosti či ISR stránky.
- Stabilní geometrie kompaktních skupin; jejich ovládání nepoužívá content-visibility. Drobečkové odkazy služeb jsou zřetelně podtržené a název odkazu loga zahrnuje viditelný slogan.

## Lokální diagnostika — neplést s PageSpeed cloud

Lighthouse 13.5.0, headless Chrome na místním Windows, každá stránka jednou na mobilu a PC. Před optimalizací bez nastavení GA bootstrapu, po s procesovým testovacím GA identifikátorem pro produkční consent větev. Nejde proto o řízený test čistého efektu kódu. Oba kompletní soubory výsledků zachovány soukromě mimo Git; nezvoleno jen nejlepší měření.

| Stránka | Mobil před → po | PC před → po |
| --- | ---: | ---: |
| Homepage | 58 → 63 | 99 → 93 |
| Reference | 50 → 62 | 98 → 98 |
| Osvětlení | 50 → 54 | 95 → 99 |

Referenční přístupnost 93/97 → 100/100. Následně opraveny dva konkrétní nálezy přístupnosti služeb: podtržení breadcrumb odkazů a shoda viditelného textu s přístupným názvem loga. Tato finální drobná oprava není součástí tabulky lokálních běhů. Separátní místní měření původní ostré homepage: 76 mobil /100 PC oproti 91/100 v PageSpeed cloud pro stejný commit; prostředí a variabilita výrazně ovlivňují skóre. Neslibovat univerzální 100 a nepřipisovat lokální rozdíly automaticky SEO či konverznímu růstu.

## Ověření a bezpečnost

Kompletní `npm run verify`: lint bez chyb (15 dosavadních varování), typy, testy předvyplnění a doručování s mocky, publikační ochrany, fotografie, dotazový záměr, schema, odkazy, immutable guard, výkonové rozpočty a produkční build. 528 statických obsahových stránek /580 build rout. Pro reálnou produkční consent větev použit pouze procesový testovací identifikátor, žádná skutečná environment hodnota či tajemství není v commitu; Vercel použije vlastní stávající nastavení.

Lokální SEO smoke: 758 URL/odkazových kontrol, žádná chyba; routing/canonical/hreflang/404 a bezpečné odmítnutí prázdné API žádosti. Žádná poptávka nebyla odeslána. Po vydání ověřit skutečný commit přes publication-state, Ready deployment, reprezentativní stránky, zdrojové fotografie/cache, mobil/PC a nový PageSpeed cloud report. Úspěch vydání není doložený růst leadů či rankingů.

Vercel před vydáním: posledních 30 dní ISR Reads přibližně 1,113 milionu z 1 milionu, Fast Origin Transfer 8,74 GB z 10 GB, Deployment Storage 2,62 GB. Limit ISR tedy již překročen historickým provozem; nové vydání nesnižuje zpětně toto číslo a nelze garantovat budoucí kvóty. Nezměněn placený tarif, DNS, firewall ani bezpečnost. Nové fotografie nepoužívají běžící transformace. Neprovádět nadbytečné preview/rebuildy.

## Měření obchodního výsledku a rollback

Jde o společnou novou obsahovou/prezentační fázi od skutečného vydání. EXP-004 (vibrace) již nelze vyhodnocovat jako izolovaný původní zásah; změnilo se doložení a stránková kopie. U EXP-013/014 zůstávají původní testované odkazy zachovány, ale sdílené stránky a společné vydání jsou zaznamenaným rušivým faktorem. Neprohlašovat je bez izolovaného srovnání za samostatný úspěch.

Hypotéza: konkrétní ověřené realizace zvýší důvěru B2B návštěvníků a zlepší cestu k relevantní poptávce. Po dostatku dat porovnat stejně dlouhá úplná 28denní GSC/GA4 období; při malém počtu leadů 56 dní. Sledovat cílové dotazové skupiny/služby, reference → služba → form_start → úspěšné generate_lead a skutečné přijetí/kvalifikaci firmou. Žádná garance první stránky nebo AI citací.

Rollback: zachovaný Ready produkční deployment `FnUse28mrrZYXhmBHPk7xnBHE9To` s ea31548, případně reverzní commit celého vydání. Bez přepisování historie nebo ztráty Cursor práce. Výsledek konkrétního vydání a následné reporty doplnit jako lokální release evidenci, nevyvolávat druhý deployment jen kvůli reportu.
