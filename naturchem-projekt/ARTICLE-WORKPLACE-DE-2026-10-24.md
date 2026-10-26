# Německé články pracovního prostředí — lokálně, 24. 10. 2026

## Problém a rozsah

Audit zjistil německé titulky, ale anglická těla na dvou existujících adresách:

- `/de/poradna/mereni-mikroklimatu-na-pracovisti-teplota-vlhkost-a-proudeni-vzduchu/`
- `/de/poradna/mereni-chemickych-latek-v-pracovnim-ovzdusi-co-rozhoduje-o-rozsahu-mereni/`

Před úpravou byla celá těla obou souborů shodná s anglickým protějškem podle veřejného slugu. Jde o opravu ověřené chyby, nikoli o nový jazykový obsah nebo experiment se změnou českých služeb. Základ `6e87fdd`, větev `codex/article-topic-quality-2026-10-24`; zachovány předchozí opravy témat, prvního DE článku a lokální mapa Kontaktu.

## Konverzní účel

Německy čtoucí zástupce firmy se má dozvědět, co připravit pro měření na pracovišti v Česku, a dostat se k odpovídající službě nebo zadání. Není tím doložen vyšší počet zakázek ani lepší pozice. Česká kvalifikovaná návštěvnost zůstává prioritou; tato údržba nemění český aktivní experiment.

## Obsahová úprava

Oba texty jsou německy, s kratšími věcnými nadpisy, seznamy a původními přehledovými tabulkami. Výslovně uvádějí českou působnost. Každý má jednu kontextovou výzvu na německý kontakt a odkaz na odpovídající měření. Nevznikají nové reference, ceny, garance, limity ani tvrzení o rozsahu oprávnění.

Ponechán titulek/H1, slug, původní datum, autor, obrázek i všechny dosavadní externí zdrojové odkazy. Mikroklima má stručnější německý excerpt; u chemických látek je excerpt beze změny. Přidány stabilní mapy všech dosavadních fragmentů: mikroklima 10 kapitol, chemické látky 19 včetně čtyř H3 příkladů. Tabulky zůstávají dvě a čtyři.

### Odborné hranice

- Mikroklima: proměnné, pracovní činnost, sezóna a provozní podmínky; operativní teplota a údaj z kulového teploměru nejsou prezentovány jako libovolně zaměnitelné veličiny.
- Chemické látky: rozlišení směnového PEL a krátkodobého NPK-P, význam dýchací zóny, vztah TWA ke zvolenému období a nutnost příslušných úprav u delších směn či vyšší ventilace plic. Nejde o tabulku univerzálních mezních hodnot nebo úplnou měřicí metodiku.
- Ilustrační rozvrh směny je výslovně hypotetický, nikoli reference nebo skutečné výsledky klienta. Příklady postupů nejsou tvrzením o konkrétní realizaci NATURCHEM.
- U příkladu směsí zachována podmínka společného působení na orgánový systém a vědecky podložených výjimek; žádné mechanické sčítání všech libovolných látek.
- Tschechien/PEL/NPK-P nejsou zaměněny za německé AGW ani za pravidla pro jinou jurisdikci.

## Kontrola zdrojů

Kontrola 24. 10. 2026: aktuální konsolidovaný text NV 361/2007 na portálu MPSV včetně novely 473/2025; rozsah ověření: základní význam PEL/NPK-P, inhalační expozice, práce s podklady a směsmi, mikroklimatické veličiny. e-Sbírka uvádí aktuální znění od 1. 9. 2026, její obsah ovšem webový čtecí nástroj nevykreslil; není vydáván za přečtené úplné znění touto cestou. Obecná kategorizace ověřena na stránce MZ aktualizované 3. 2. 2026. Fyzikální souvislosti z oficiálního SZÚ, bez přebírání jeho ilustračních zdravotních limitů. Nejde o nový audit každého ustanovení celých předpisů.

- [MPSV – NV č. 361/2007](https://ppropo.mpsv.cz/narizeni_vlady_361_2007)
- [SZÚ – mikroklimatické podmínky](https://szu.gov.cz/temata-zdravi-a-bezpecnosti/pracovni-prostredi-a-zdravi/faktory-pracovniho-prostredi/fyzikalni/tep-vlhk-mikroklim/mikrokli-pod-vnitr-pract/)
- [SZÚ – chemické faktory](https://szu.gov.cz/temata-zdravi-a-bezpecnosti/pracovni-prostredi-a-zdravi/faktory-pracovniho-prostredi/chemicke/)
- [MZ – kategorizace prací](https://mzd.gov.cz/kategorizace-praci-podle-zakona-o-ochrane-verejneho-zdravi/)

Starý článek SZÚ s aktualizací 2010 nebyl použit jako důkaz současné definice NPK-P. Obsahové úpravy zůstávají nevydané a nejsou vydávány za nově schválené Ing. Hezinou.

## Technické ochrany a stav

Nová regresní kontrola čte skutečný Markdown/renderer a všechny přeložené články páruje podle slugu. U tří opravených DE článků dohromady kontroluje 43 původních ID a 12 tabulek, zdroje, identitu, českou působnost a místní cestu k poptávce. Známých 17 dosud shodných anglických těl zůstává výslovně pojmenováno; zelený test není vydáván za vyřešení zbytku.

Finální `npm run verify` skončilo 0, včetně sestavení a nové kontroly skutečných veřejných HTML. Devět starších lint warnings a známá metadataBase upozornění, žádná nová chyba. První běh odhalil chybu v rozsahu nové kontroly: zahrnovala nadpisy související navigace mimo článek. Opraveno porovnávání všech skutečných `kapitola-*` ID, nikoli počty přizpůsobené výsledku. Následný celý běh i nezávislé srovnání původních 43 ID prošly.

Stejných 592 veřejných dokumentů a chráněné SEO údaje; záměrně odlišný popis pouze u dvou dříve uvedených překladů, u chemického článku i popis původní. Ostatních 197 českých HTML normalizovaně shodných mimo dříve schválenou mapu kontaktu. Celé formuláře ve všech třech jazycích identické s baseline. Původní odvozená oprava 113 articleSection je samostatně očekávaný rozdíl.

Lokální GET smoke: 585 adres a 302 dalších interních odkazů, žádná chyba. V prohlížeči potvrzeno německé tělo obou článků, skok původním fragmentem a rozbalovací mobilní obsah. Při šířce 390 px mají dokumenty clientWidth/scrollWidth 375/375; tabulky se posouvají pouze uvnitř svého kontejneru. Proklik článku → německý kontakt vede na viditelný formulář, bez vyplňování nebo odesílání. Dočasné rozměry prohlížeče obnoveny. Automatický překlad Chrome do angličtiny není zaměněn za původní jazyk stránky; důkazem jsou též zdroje a sestavená HTML.

Žádné české ani anglické zdrojové články, pondělní plán, formulář, analytika, tarif či DNS nejsou touto etapou měněny. Bez commitu, push, publikace nebo deploymentu. Případné společné vydání potřebuje samostatné schválení a přiměřenou odbornou revizi změněných formulací. Celkový cíl růstu zůstává aktivní; jazyková oprava není záruka ani doklad zvýšení pořadí nebo kvalifikovaných poptávek.
