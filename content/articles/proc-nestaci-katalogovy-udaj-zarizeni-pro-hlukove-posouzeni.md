---
title: Proč nestačí katalogový údaj zařízení pro hlukové posouzení?
slug: proc-nestaci-katalogovy-udaj-zarizeni-pro-hlukove-posouzeni
excerpt: Katalogový údaj o hlučnosti zařízení je užitečný orientační vstup, ale
  sám o sobě obvykle nestačí pro odborné hlukové posouzení. Rozhoduje, zda
  výrobce uvádí hladinu akustického výkonu nebo akustického tlaku, v jaké
  vzdálenosti byla hodnota stanovena, při jakém provozním režimu, s jakou
  směrovostí a s jakou nejistotou. U průmyslových provozů je to zásadní zejména
  tehdy, když zařízení běží v noci nebo je umístěno blízko obytné zástavby.
author: Ing. František Hezina
publishedAt: 2026-04-30
---
## Proč je katalogový údaj jen začátek

Výrobci technologií, vzduchotechnických jednotek, tepelných čerpadel, ventilátorů, kompresorů, chladičů nebo výrobních strojů často uvádějí v technickém listu údaj o hlučnosti. Investor nebo projektant pak někdy předpokládá, že tento údaj lze přímo vložit do hlukové studie. V praxi to ale bývá zjednodušení, které může vést k chybné interpretaci výsledků.

Katalogový údaj může být správný, ale nemusí znamenat to, co od něj projektant očekává. Může jít o hladinu akustického výkonu, hladinu akustického tlaku v určité vzdálenosti, hodnotu při částečném výkonu, hodnotu pro volné pole, hodnotu pro konkrétní stranu zařízení nebo údaj bez jasně uvedené nejistoty. Bez těchto informací nelze spolehlivě posoudit, jak se zařízení projeví u nejbližšího chráněného prostoru.

> Pro hlukové posouzení není rozhodující jen číslo v katalogu. Rozhodující je, co přesně toto číslo znamená, kde bylo měřeno, za jakých podmínek a jak má být použito ve výpočtu.

To je důležité zejména u VZT jednotek, tepelných čerpadel, chladicích jednotek, kompresoroven, ventilátorů, výduchů, průmyslových strojů, nakládacích míst a technologií, které mohou být v provozu i v noční době.

## Akustický tlak vs. akustický výkon

Nejčastější chyba vzniká záměnou hladiny akustického tlaku a hladiny akustického výkonu.

Hladina akustického tlaku, obvykle označovaná jako **Lp** nebo **LpA**, je hodnota v konkrétním místě. Závisí na vzdálenosti od zdroje, směrovosti, odrazech, okolním prostředí, výšce měření, stínění a provozním režimu. Pokud výrobce uvede například „55 dB(A) ve vzdálenosti 1 m“, nejde o univerzální vlastnost zařízení, ale o údaj platný pro určitou měřicí pozici a podmínky.

Hladina akustického výkonu, označovaná jako **Lw** nebo **LwA**, vyjadřuje akustickou energii vyzařovanou zdrojem. Je vhodnější jako vstup do výpočtového modelu, protože není vázána na jeden bod měření. I zde ale záleží na tom, pro jaký provozní režim a podle jakého postupu byla stanovena.

| Údaj v katalogu | Co znamená | Použitelnost pro hlukovou studii |
|---|---|---|
| LpA v dB(A) | hladina akustického tlaku v určitém místě | použitelná jen tehdy, když známe vzdálenost, polohu měření a podmínky |
| LwA v dB(A) | hladina akustického výkonu zdroje | vhodnější vstup pro výpočtový model |
| „hlučnost 55 dB“ | nejasný údaj bez veličiny | pro odborné posouzení nedostatečný |
| hodnota v oktávových pásmech | frekvenční složení hluku | velmi užitečné pro výpočet útlumu, clon a tónových složek |
| garantovaná hodnota | hodnota s odpovědností výrobce | lepší než orientační nebo typická hodnota |
| typická hodnota | hodnota za určitých běžných podmínek | nutné ověřit rezervu a nejistotu |

*Prakticky řečeno:* údaj „akustický tlak 55 dB(A) v 1 m“ nelze zaměnit za „akustický výkon 55 dB(A)“. Ve výpočtu to může znamenat výrazně jiný výsledek.

## Vzdálenost měření: 1 metr není hranice pozemku

Katalogová hodnota akustického tlaku bývá často uváděna ve vzdálenosti 1 m, 3 m, 5 m nebo 10 m od zařízení. Tato vzdálenost je zásadní. Hladina akustického tlaku s rostoucí vzdáleností klesá, ale ne vždy jednoduchým způsobem. Záleží na typu zdroje, jeho rozměrech, umístění, odrazech od fasád, terénu a okolních překážkách.

U bodového zdroje ve volném prostoru se často orientačně uvažuje pokles přibližně o 6 dB při zdvojnásobení vzdálenosti. V reálném průmyslovém provozu ale zdroj nemusí být bodový. Velká VZT jednotka, chladicí blok, dlouhý výduch nebo stěnová žaluzie se může chovat jako plošný nebo směrový zdroj. Navíc může být umístěn u fasády, na střeše, ve dvoře, za atikou nebo mezi objekty.

Proto nelze říci: „v katalogu je 60 dB v jednom metru, u domu vzdáleného 20 metrů to bude automaticky v pořádku“. Je nutné přepočítat šíření zvuku ve skutečné situaci.

| Katalogový údaj | Co je potřeba doplnit |
|---|---|
| LpA ve vzdálenosti 1 m | z které strany zařízení, v jaké výšce a při jakém režimu |
| LpA ve vzdálenosti 10 m | zda jde o volné pole, poloprostor, měření u fasády nebo výpočet |
| LwA bez frekvencí | alespoň celkový akustický výkon, lépe oktávová pásma |
| údaj bez vzdálenosti | pro seriózní hlukovou studii problematický vstup |
| údaj „podle výrobce“ | nutné ověřit, zda jde o garantovanou nebo orientační hodnotu |

Pro hlukovou studii je proto lepší dodat technický list s jasně uvedenou veličinou, vzdáleností, provozním režimem a pokud možno i frekvenčním spektrem.

## Směrovost zdroje

Mnoho technických zařízení nevyzařuje hluk rovnoměrně všemi směry. Ventilátor, výduch, sání vzduchu, chladicí jednotka nebo tepelné čerpadlo může být výrazně hlučnější v určitém směru. Pokud je tato hlučnější strana orientována k obytné zástavbě, může být výsledný dopad podstatně vyšší než při orientaci do areálu nebo k méně citlivému prostoru.

Směrovost je důležitá zejména u těchto zdrojů:

| Zdroj | Proč může být směrový |
|---|---|
| ventilátor | hluk se šíří hlavně ve směru sání nebo výdechu |
| výduch VZT | proudění a aerodynamický hluk mají konkrétní směr |
| tepelné čerpadlo | ventilátor a kompresor nejsou akusticky symetrické |
| chladicí jednotka | různé strany zařízení mohou mít rozdílné hladiny hluku |
| stěnová žaluzie | hluk se šíří přes konkrétní otvor ve fasádě |
| vrata haly | při otevření vzniká plošný zdroj směrem do okolí |

Katalogový údaj často uvádí jednu souhrnnou hodnotu. Pro posouzení konkrétní stavby je však důležité vědět, která strana zařízení směřuje k chráněnému prostoru, zda zdroj stojí u odrazivé fasády, jestli je na střeše za atikou nebo zda je otevřený směrem do obytné zástavby.

> Stejné zařízení může být v jedné poloze bezproblémové a v jiné poloze problematické. O výsledku často rozhoduje orientace zdroje, nikoli jen jeho katalogová hlučnost.

## Provozní režim: minimum, maximum nebo noční chod?

Katalogová hlučnost může být uvedena pro určitý provozní stav. U proměnlivých zařízení je to zásadní. Ventilátor při 50 % otáček může mít zcela jinou hlučnost než při 100 % výkonu. Tepelné čerpadlo může mít jiný hluk při běžném chodu, odmrazování, maximálním výkonu nebo při nočním omezeném režimu. Kompresor může běžet v cyklech a chladicí jednotka může mít více provozních stupňů.

U průmyslových provozů je důležité také to, zda se zdroje sčítají. Samostatná jednotka může vyhovět, ale více jednotek na střeše, společně s ventilátory, kompresory, dopravou a provozem vrat už může být problém.

| Provozní režim | Proč je důležitý |
|---|---|
| nominální výkon | obvyklý katalogový režim, ale nemusí být nejhlučnější |
| maximální výkon | vhodný pro konzervativní posouzení |
| noční režim | klíčový pro přísnější noční limity |
| cyklický provoz | důležitý pro časové hodnocení LAeq |
| špičkový provoz | může rozhodovat u nejhlučnější hodiny v noci |
| souběh více zdrojů | celkový hluk se skládá energeticky, ne aritmeticky |

*Prakticky důležité:* pokud má zařízení běžet v noci, nestačí dodat katalogovou hodnotu pro denní nebo úsporný režim. Je potřeba vědět, jaký bude skutečný nejhlučnější noční provoz.

## Nejistota a bezpečnostní rezerva

Hlukové posouzení není absolutně přesná předpověď. Vstupní údaje mají nejistotu, výpočtový model má nejistotu a skutečný provoz se může lišit od předpokladu. Katalogový údaj může být typická hodnota, garantovaná hodnota, laboratorní hodnota nebo hodnota stanovená za podmínek, které se v reálné instalaci neopakují.

Nejistota je důležitá zejména tehdy, když výpočet vychází těsně pod hygienickým limitem. Pokud model ukáže například rezervu 0,5 dB, nejde o komfortní výsledek. Drobná změna v provozu, umístění, odrazu nebo výkonu zařízení může znamenat překročení.

**Pro kvalitní hlukovou studii je proto vhodné pracovat s rezervou.** U nových záměrů je lepší navrhnout zařízení, umístění nebo opatření tak, aby výsledek nebyl „na hraně“. To platí zejména u nočního provozu, kdy jsou limity přísnější a okolní hlukové pozadí bývá nižší.

## Noční provoz: nejčastější problém technických zařízení

Noční provoz je u hluku zvlášť citlivý. V chráněných venkovních prostorech staveb se u provozních zdrojů v noci hodnotí nejhlučnější jedna hodina. To znamená, že nestačí říci, že zařízení běží jen občas nebo že průměr za celý den je nízký. Pokud v noci běží hlučná jednotka, kompresor, ventilátor nebo chlazení v nejzatíženější hodině, může být rozhodující právě tato hodina.

Noční problém často vzniká u zařízení, která jsou technicky nenápadná:

- tepelné čerpadlo u fasády,
- chladicí jednotka na střeše,
- VZT jednotka běžící pro technologii,
- ventilátor od výrobní haly,
- kompresorovna s výdechem do dvora,
- zásobování nebo manipulace v časných ranních hodinách,
- záložní nebo technologické chlazení datového centra.

Z hlediska projektu je proto vhodné už na začátku říci, zda zařízení poběží v noci, v jakém režimu, jak dlouho a v jaké kombinaci s ostatními zdroji. Pokud má být noční provoz nepřetržitý, je nutné posoudit hluk velmi pečlivě.

> U nočního provozu je katalogová hodnota bez provozního režimu téměř vždy nedostatečná. Rozhoduje nejhlučnější reálná noční hodina, souběh zdrojů a vztah k nejbližším chráněným prostorům.

## Proč je důležité frekvenční spektrum

Jedno číslo v dB(A) nemusí stačit. Dva zdroje mohou mít stejnou celkovou hladinu akustického výkonu, ale zcela jiné frekvenční složení. Jeden může mít dominantní nízké frekvence, druhý vyšší frekvence. To je důležité pro útlum vzdáleností, účinnost protihlukových clon, prostup fasádou, tlumiče hluku a vnímání rušivosti.

U ventilátorů, kompresorů, VZT jednotek nebo tepelných čerpadel mohou být významné tónové složky. Ty mohou zvyšovat rušivost hluku a zhoršit obhajitelnost výsledku. Pokud katalog uvádí pouze celkové dB(A), nemusí být možné tyto jevy dostatečně posoudit.

| Údaj | Přínos pro posouzení |
|---|---|
| celkové LwA | základní vstup pro orientační výpočet |
| oktávová pásma | lepší výpočet šíření, clon a útlumu |
| informace o tónové složce | důležitá pro rušivost a korekce |
| údaje pro jednotlivé strany zařízení | umožňují zohlednit směrovost |
| hlučnost při různých režimech | umožňuje posoudit denní/noční provoz |

U významnějších zdrojů je proto vhodné žádat od dodavatele nejen jednu hodnotu hlučnosti, ale podrobnější akustická data.

## Co má projektant nebo investor dodat pro hlukové posouzení

Pro kvalitní hlukové posouzení je ideální dodat technické listy zařízení, situaci, umístění zdrojů, provozní režimy a informaci o nejbližších chráněných prostorech. Pokud některý údaj chybí, lze jej někdy odborně odhadnout, ale výsledek bude méně přesný a často konzervativnější.

Nejužitečnější podklady jsou:

1. hladina akustického výkonu LwA,
2. oktávové nebo třetinooktávové spektrum,
3. údaj, zda jde o garantovanou nebo typickou hodnotu,
4. provozní režim, pro který hodnota platí,
5. hlučnost při maximálním a nočním režimu,
6. orientace zařízení a směrovost,
7. umístění na fasádě, střeše nebo v terénu,
8. výška zdroje nad terénem,
9. provozní doba a souběh více zdrojů,
10. vzdálenost k nejbližším chráněným prostorům.

Pokud je k dispozici pouze údaj „akustický tlak v 1 m“, je vhodné doplnit, z jakého dokumentu pochází, z jaké strany zařízení byl měřen a zda výrobce umí dodat akustický výkon.

## Nejčastější chyby při použití katalogových hodnot

Nejčastější chybou je přímé vložení katalogového akustického tlaku do modelu jako akustického výkonu. Výsledek pak může být zásadně chybný. Druhou častou chybou je použití hodnoty pro tichý nebo nominální režim, i když zařízení bude v reálném provozu běžet na vyšší výkon.

Další problém vzniká, když se posuzuje pouze jedno zařízení, ale v reálném provozu běží několik zdrojů současně. Hluk se přitom nesčítá běžným aritmetickým součtem. Dva stejné zdroje znamenají navýšení přibližně o 3 dB, deset stejných zdrojů přibližně o 10 dB. To může být rozhodující zejména u střešních jednotek nebo větších VZT sestav.

Časté je také opomenutí odrazů od fasád, atik, dvorů a sousedních objektů. Zařízení umístěné v akusticky otevřeném prostoru se může chovat jinak než stejné zařízení mezi stěnami nebo v polouzavřeném technickém dvoře.

## Kdy katalogový údaj může stačit a kdy ne

Katalogový údaj může stačit pro velmi orientační předběžné posouzení, pokud je záměr daleko od chráněné zástavby, zdroj neběží v noci a je zřejmé, že má velkou rezervu. U citlivějších záměrů ale nestačí.

| Situace | Katalogový údaj obvykle nestačí |
|---|---|
| zařízení běží v noci | je nutné znát noční režim a nejhlučnější hodinu |
| zdroj je blízko obytného domu | rozhoduje přesné umístění a směrovost |
| jde o VZT, chlazení nebo tepelné čerpadlo | často je potřeba spektrum a režimy |
| existuje více stejných zdrojů | nutné řešit souběh a energetické sčítání |
| zdroj je na střeše nebo u fasády | důležité jsou odrazy, výška a stínění |
| výsledek vychází těsně pod limitem | nutná rezerva a práce s nejistotou |
| zdroj má tónovou složku | celkové dB(A) nemusí vystihnout rušivost |

U průmyslových a technologických provozů je proto vhodné brát katalogový údaj jako vstupní informaci, nikoli jako hotový důkaz splnění hygienických limitů.

## Shrnutí

Katalogový údaj zařízení je důležitý, ale pro odborné hlukové posouzení obvykle nestačí sám o sobě. Je nutné vědět, zda jde o akustický tlak nebo akustický výkon, v jaké vzdálenosti byla hodnota stanovena, při jakém provozním režimu, z jaké strany zařízení, s jakou nejistotou a zda zdroj poběží i v noci.

Pro projekt je nejbezpečnější pracovat s hladinou akustického výkonu, frekvenčním spektrem, údaji pro různé provozní režimy a jasným umístěním zdroje v situaci. U nočního provozu, blízké obytné zástavby a technologií s více zdroji hluku je vhodné provést hlukové posouzení už ve fázi návrhu, kdy lze ještě upravit umístění zařízení, tlumiče, clony nebo provozní režim.

Pošlete nám technické listy zařízení, akustické údaje, situaci, umístění zdrojů, provozní režim a vzdálenost k nejbližší obytné zástavbě. Posoudíme, zda katalogové údaje stačí, nebo zda je potřeba doplnit hlukovou studii, přesnější akustické vstupy nebo návrh protihlukových opatření.

## Věcná opora článku

Článek vychází zejména z těchto zdrojů:

- [nařízení vlády č. 272/2011 Sb., o ochraně zdraví před nepříznivými účinky hluku a vibrací](https://www.zakonyprolidi.cz/cs/2011-272),
- [ISO 3744:2025 – Acoustics — Determination of sound power levels of noise sources using sound pressure](https://www.iso.org/standard/80866.html),
- [ISO 11201:2010 – Acoustics — Noise emitted by machinery and equipment — Determination of emission sound pressure levels](https://www.iso.org/standard/54908.html).

Nařízení vlády č. 272/2011 Sb. stanovuje hygienické limity hluku, způsob jejich zjišťování a hodnocení pro chráněné venkovní prostory, chráněné venkovní prostory staveb, chráněné vnitřní prostory staveb i pracoviště. U provozních zdrojů je pro venkovní chráněné prostory významné hodnocení LAeq,8h v denní době a LAeq,1h v noční době. ISO 3744 řeší určování hladiny akustického výkonu zdroje z hladin akustického tlaku měřených na ploše obklopující zdroj. ISO 11201 se týká emisních hladin akustického tlaku zařízení na pracovním místě nebo v jiných specifikovaných pozicích.
