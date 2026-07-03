import type { PcfProductTranslation } from "@/lib/pcf-elettronica-product-localize";

export const pcfProductTranslationsCs: Record<string, PcfProductTranslation> = {
  "mod-529-nr-t-total-voc-analyzer": {
    title: "Mod. 529/NR/T analyzátor celkových VOC",
    tagline: "Stacionární analyzátor pro monitorování celkových VOC (THC)",
    intro:
      "Mod. 529/NR/T je 19\" rackový FID analyzátor pro kontinuální monitorování celkových těkavých organických látek (TVOC/THC) v okolním ovzduší a imisních aplikacích. Přesná kapilární dávkovací smyčka zajišťuje opakovatelný objem vzorku před detekcí FID; data se zobrazují na barevném dotykovém displeji a lze je přenášet přes RS-232.",
    features: [
      "Kontinuální analýza celkových VOC pomocí vyhřívaného FID detektoru",
      "Programovatelné měřicí rozsahy až do oblasti ppbV",
      "Barevný grafický dotykový displej s chromatogramem v reálném čase",
      "Automatická kompenzace nulového driftu a kontrola nuly/spanu z čelního panelu",
      "Analogové a sériové výstupy pro systémy sběru dat",
      "Volitelné generátory vodíku a nulového vzduchu"
    ],
    applications: [
      "Stanice kvality ovzduší a imisního monitorování",
      "Kontinuální měření TVOC/THC v okolním ovzduší",
      "Sledování plnění environmentálních limitů",
      "Výzkumné a referenční monitorovací sítě"
    ]
  },
  "mod-530-nr-btex-aromatics-analyzer": {
    title: "Mod. 530/NR analyzátor BTEX (aromáty)",
    tagline: "Automatický analyzátor aromátů BTEX (FID nebo PID)",
    intro:
      "Mod. 530/NR je plně automatický průmyslový rackový plynový chromatograf pro benzen, toluen, ethylbenzen a xyleny (BTEX). Aromáty jsou zachyceny na Tenaxu GR, tepelně desorbovány a separovány na širokokapilární koloně; firmware zajišťuje sekvence, integraci píků i výpočet koncentrací s exportem dat přes RS-232.",
    features: [
      "Předkoncentrace aromatických látek ze vzduchu na sorbentu Tenax GR",
      "Kapilární separace GC s integrovanou integrací píků",
      "Dostupné provedení s detekcí FID nebo PID",
      "Programovatelné měřicí rozsahy BTEX v ppbV / µg/m³",
      "Průmyslové 19\" rackové provedení pro bezobslužný provoz",
      "Přenos výsledků do PC přes RS-232 pro hlášení"
    ],
    applications: [
      "Monitorování BTEX v okolním ovzduší",
      "Imisní hodnocení v okolí průmyslových zdrojů",
      "Sledování zápachu a aromatických uhlovodíků",
      "Městské stanice kvality ovzduší"
    ]
  },
  "mod-529-nr-nmh-analyzer": {
    title: "Mod. 529/NR/NMH analyzátor",
    tagline: "Analyzátor nemetánových uhlovodíků (NMH) se separací GC",
    intro:
      "Mod. 529/NR/NMH kontinuálně měří reaktivní uhlovodíky a nemetánové HC (NMH) pomocí detekce FID kombinované s plynově chromatografickou separací. Kalibrovaná kapilární smyčka dávkuje opakovatelný objem vzorku při atmosférickém tlaku před analýzou.",
    features: [
      "FID detektor se separací metanu a NMH na GC koloně",
      "Kontinuální automatická analýza v 19\" rackovém formátu",
      "Programovatelné rozsahy VOC a NMH v ppmV nebo mg/m³",
      "Barevný dotykový displej s daty v reálném čase",
      "Kontrola nuly/spanu z panelu nebo vzdáleným kontaktem",
      "Výstupy RS-232 a analogové výstupy"
    ],
    applications: [
      "Monitorování nemetánových uhlovodíků v okolním ovzduší",
      "Hodnocení fotochemického smogu a prekurzorů ozonu",
      "Sítě kvality ovzduší vyžadující data NMH",
      "Monitorování imisí v okolí průmyslových areálů"
    ]
  },
  "mod-529-nr-s-specific-hc-analyzer": {
    title: "Mod. 529/NR/S analyzátor specifických HC",
    tagline: "Analyzátor specifických uhlovodíků a TVOC",
    intro:
      "Mod. 529/NR/S stanovuje jednotlivé uhlovodíkové sloučeniny separací GC-FID, zatímco druhá injekční cesta měří celkové VOC. K dispozici jsou analogové výstupy pro specifickou sloučeninu, TVOC i jejich rozdíl, což je vhodné pro speciální monitorovací programy.",
    features: [
      "GC separace specifických sloučenin plus kanál celkových VOC",
      "Samostatné analogové výstupy pro sloučeninu, TVOC a rozdíl",
      "Programovatelné rozsahy pro každou sloučeninu",
      "Měřicí cyklus 180-300 s (konfigurovatelný)",
      "Barevný dotykový displej s živým náhledem analýzy",
      "Automatický provoz v 19\" rackovém provedení"
    ],
    applications: [
      "Monitorování specifických VOC ve vzduchu",
      "Výzkumné programy vyžadující data po jednotlivých sloučeninách",
      "Porovnání koncentrací specifikovaných složek a celkových VOC",
      "Specializované imisní studie"
    ]
  },
  "mod-110-h-fast-response-time-voc-monitor": {
    title: "Mod. 110 H rychlý VOC monitor",
    tagline: "Rychlý emisní monitor s vyhřívaným FID",
    intro:
      "Mod. 110 H je emisní monitor s vyhřívaným FID navržený pro velmi rychlou odezvu, ideální pro detekci špiček koncentrací, stavů LEL a dynamických procesů, jako jsou emise rozpouštědel, dospalovací jednotky a spalovny. Vzorkovací okruh je udržován na 180-200 °C.",
    features: [
      "FID vyhřívaný na 180 °C pro vysokoteplotní vzorky",
      "Velmi rychlá odezva na 90 % rozsahu",
      "Programování a diagnostika přes displej",
      "Integrovaný systém autodiagnostiky",
      "Digitální výstupy RS-232 a USB",
      "Analogové výstupy 0-2 V a 4-20 mA"
    ],
    applications: [
      "Sledování LEL a mezí výbušnosti",
      "Emise z procesů s použitím rozpouštědel",
      "Monitorování dospalovacích jednotek a spaloven",
      "Rychlá dynamická měření VOC na výduších"
    ]
  },
  "mod-110-e-discrete-sampling-voc-monitor": {
    title: "Mod. 110 E VOC monitor s diskrétním vzorkováním",
    tagline: "VOC monitor s vyhřívaným FID a diskrétním odběrem",
    intro:
      "Mod. 110 E používá diskrétní vzorkování namísto kontinuálního průtoku, čímž snižuje údržbu, korozi a riziko kondenzace při zachování vyhřívaného FID měření na 180 °C. Je vhodný pro emisní monitorování tam, kde postačují reprezentativní bodové odběry.",
    features: [
      "Vyhřívaný FID detektor na 180 °C",
      "Režim diskrétního vzorkování pro nižší nároky na údržbu",
      "Programování a autodiagnostika přes displej",
      "Snížená koroze a kondenzace ve vzorkovací trase",
      "Průmyslová 19\" racková skříň",
      "Komunikace RS-232 / USB"
    ],
    applications: [
      "Monitorování emisí na výduších s periodickým odběrem",
      "Procesy, kde je diskrétní odběr vzorků akceptovatelný",
      "Instalace vyžadující nižší údržbu vzorkovací linky",
      "Průmyslové kontroly souladu VOC"
    ]
  },
  "mod-529-nr-h-gc-analyzer": {
    title: "Mod. 529/NR/H GC analyzátor",
    tagline: "Vysokoteplotní GC analyzátor pro výduchy a emise",
    intro:
      "Mod. 529/NR/H měří metan, celkové VOC, nemetánové HC (NMH) a specifické sloučeniny v výdušových emisích při středních teplotách (až cca 100 °C). Řada NR využívá moderní elektroniku pro snadnou rekonfiguraci a stabilní ukládání dat; základní doba cyklu je 180 s.",
    features: [
      "Metan, TVOC, NMH a specifikované sloučeniny v jedné platformě",
      "Vysokoteplotní vzorkovací trasa pro výdušové plyny (< 100 °C)",
      "GC-FID analýza s konfigurovatelným cyklem (od 180 s)",
      "Elektronika New Release (NR) pro flexibilní konfiguraci",
      "Navrženo pro kontinuální systémy monitorování emisí",
      "Podrobné technické specifikace viz Mod. 529/NR/S"
    ],
    applications: [
      "Monitorování výdušových emisí (CH₄, TVOC, NMH)",
      "Analýza spalovacích a procesních plynů",
      "CEMS a legislativní hlášení emisí",
      "Průmyslové provozy se střední teplotou spalin"
    ]
  },
  "mod-529-nr-tcd-mini-industrial-gc-with-tcd-detector": {
    title: "Mod. 529/NR/TCD mini průmyslový GC s TCD detektorem",
    tagline: "Mini procesní GC s TCD detektorem",
    intro:
      "Mod. 529/NR/TCD je kompaktní procesní plynový chromatograf pro kontinuální analýzu specifických sloučenin, například CH₄ a CO₂, s detekcí tepelné vodivosti (Wheatstoneův můstek). TCD nabízí výbornou stabilitu pro permanentní plyny a lehké uhlovodíky v průmyslových tocích.",
    features: [
      "Detektor tepelné vodivosti (TCD) se stabilní odezvou pro lehké sloučeniny",
      "Kontinuální procesní GC v kompaktním 19\" formátu",
      "Navrženo pro CH₄, CO₂ a podobné permanentní plyny",
      "Průmyslový firmware pro bezobslužný provoz",
      "Nižší údržba oproti spalovacím detektorům",
      "Vhodné pro integraci do smyček řízení procesu"
    ],
    applications: [
      "Monitorování bioplynu a skládkového plynu (CH₄, CO₂)",
      "Kontrola složení procesních plynů",
      "Analýza průmyslové fermentace a spalování",
      "Kontinuální monitorování permanentních plynů"
    ]
  },
  "mod-2005-for-total-voc": {
    title: "Mod. 2005 pro celkové VOC",
    tagline: "Přenosný HOT FID monitor TVOC",
    intro:
      "Mod. 2005 je přenosný monitor celkových uhlovodíků (TCOV) při vysokých teplotách s vyhřívaným FID detektorem, konstruovaný dle UNI EN 12619:2013. Přístroj používá vyhřívané vzorkování (150–200 °C), interní generování čistého vzduchu pro plamen FID a barevný záznamník dat s USB/sériovými výstupy.",
    features: [
      "Plamenoionizační detektor FID vyhřívaný na 180 °C",
      "Měřicí rozsah 0-10 000 mg/m³ s volitelnými rozsahy",
      "Doba odezvy 1 s z 0 na 90 % plného rozsahu",
      "Interní generátor nulového vzduchu - externě je potřeba pouze vodík",
      "Barevný TFT displej se záznamníkem dat a exportem do Excelu",
      "Průmyslové provedení pro snadné použití a nízkou údržbu",
      "Digitální výstupy RS-232 / volitelně RS-485 a USB",
      "Volitelné analogové výstupy: 0-10 V a 4-20 mA"
    ],
    applications: [
      "Monitorování výduchů a emisí",
      "Kontrola účinnosti procesů",
      "Environmentální analýza při středních až vysokých koncentracích VOC",
      "Měření dle CEE CEN 264 a UNI EN 12619:2013"
    ]
  },
  "mod-2001-c-for-voc-and-check-of-ch4-fraction": {
    title: "Mod. 2001 C pro VOC a kontrolu podílu CH4",
    tagline: "Přenosný VOC monitor s kontrolou frakce metanu",
    intro:
      "Mod. 2001 C je přenosný monitor s vyhřívaným FID pro celkové VOC/THC s možností občasné kontroly frakce metanu. Sdílí koncept vyhřívaného vzorkování řady 2000 (150-200 °C) a interní generaci vzduchu; je široce používán pro výdušové testy a terénní emisní měření.",
    features: [
      "Vyhřívaný FID na 180 °C v zesíleném hliníkovém transportním kufru",
      "Měření celkových VOC/THC s volitelnou kontrolou frakce CH₄",
      "Doba odezvy 1 s na 90 % rozsahu",
      "Interní generátor čistého vzduchu - externě je potřeba pouze vodík",
      "Barevný TFT displej (320x200 px) se záznamem dat",
      "Výstupy USB / RS-232 / volitelně RS-485"
    ],
    applications: [
      "Přenosná výdušová a emisní měření",
      "Terénní ověření podílu metanu vůči celkovým HC",
      "Místní kontroly účinnosti procesů",
      "Environmentální analýza při středních až vysokých koncentracích"
    ]
  },
  "mod-c-2011-for-voc-and-ch4-simultaneously": {
    title: "Mod. C 2011 pro současné VOC a CH4",
    tagline: "Přenosný dvoukanálový FID monitor pro VOC a CH₄",
    intro:
      "Mod. C 2011 obsahuje dva vyhřívané FID detektory pro současné měření celkových VOC a metanu v jednom přenosném přístroji. Vyhřívané vzorkování (150-200 °C) a interní generace vzduchu jej předurčují pro emisní testy vyžadující oba parametry v reálném čase.",
    features: [
      "Dva vyhřívané FID detektory (180 °C) - kanál VOC a CH₄",
      "Současné hodnoty VOC a metanu v reálném čase",
      "Robustní přenosné průmyslové provedení s nízkou údržbou",
      "Odezva 1 s na 90 % rozsahu",
      "Barevný displej a záznamník dat",
      "Export dat přes USB a sériové rozhraní"
    ],
    applications: [
      "Současné monitorování VOC a metanu v emisích",
      "Výdušové testy s rozlišením CH₄ / NMHC",
      "Měření úniků ze spalování a bioplynu",
      "Terénní audity vyžadující oba parametry"
    ]
  },
  "mod-8807-nr-portable-gc-for-nmh-or-specifics": {
    title: "Mod. 8807/NR přenosný GC pro NMH nebo specifické složky",
    tagline: "Přenosný GC-FID pro NMH a specifické HC",
    intro:
      "Mod. 8807/NR je přenosný plynový chromatograf s detekcí FID, terénní varianta řady rackových jednotek Mod. 529/NR/NMH. Měří celkové VOC, metan, NMH a další specifické sloučeniny pomocí GC separace s dvouvstřikovým cyklem a kapilární dávkovací smyčkou.",
    features: [
      "Přenosný GC-FID pro NMH a specifikované uhlovodíky",
      "Výsledky analýzy zobrazené na vestavěném displeji",
      "Integrovaný systém autodiagnostiky",
      "Dvouvstřikový cyklus pro separaci metanu/NMH",
      "Bateriové a přenosné napájecí varianty pro terén",
      "Podobná analytická logika jako u rackové jednotky Mod. 529/NR/NMH"
    ],
    applications: [
      "Terénní průzkumy NMH a VOC",
      "Přenosný screening emisí",
      "Lokální audity bez pevného CEMS",
      "Výzkumné a mobilní monitorovací kampaně"
    ]
  },
  "fid-detector": {
    title: "FID detektor (plamenoionizační detektor)",
    tagline: "Podsystém plamenoionizačního detektoru",
    intro:
      "FID detektory PCF jsou kompaktní podsystémy pro GC a monitorovací přístroje. FID je nejpoužívanější GC detektor pro uhlovodíky - lineární, stabilní a citlivý na úrovně ppm při napájení čistým vzduchem a vodíkem se stabilními průtoky.",
    features: [
      "Univerzální detektor uhlovodíků pro GC a monitorovací přístroje",
      "Střední citlivost (frakce ppm), nízká selektivita",
      "Vyžaduje spalovací plyny: čistý vzduch a vodík",
      "Napájení ±15 Vdc; zesílený technický výstupní signál",
      "Vynikající dlouhodobá stabilita při stabilních průtocích plynů",
      "Dodáváno jako podsystém pro výrobce vlastních přístrojů"
    ],
    applications: [
      "Vývoj vlastních GC přístrojů",
      "Náhradní detektor pro analyzátory PCF",
      "Podsystémy monitorování VOC a THC",
      "Laboratorní a procesní analyzátory"
    ]
  },
  "pid-detector": {
    title: "PID detektor (fotoionizační detektor)",
    tagline: "Podsystém fotoionizačního detektoru",
    intro:
      "PID detektory PCF využívají fotoionizaci pro detekci těkavých organických látek, zejména aromátů a nenasycených sloučenin. Jsou nabízeny jako kompaktní podsystém se specializovanou deskou PCB pro napájení a úpravu signálu.",
    features: [
      "Fotoionizační detekce VOC a aromatických látek",
      "Kompaktní malé až střední provedení detektoru",
      "Specializovaná PCB deska pro napájení a zesílení",
      "Vhodné pro BTEX a monitorování aromatických látek při nízkých koncentracích",
      "Možnost integrace do analyzátorů BTEX PCF (Mod. 530 PID)",
      "Nabízeno i externím výrobcům analytických přístrojů"
    ],
    applications: [
      "Monitorování BTEX a aromatických látek",
      "Přenosné VOC detektory",
      "Vlastní analytické systémy",
      "Přístroje pro průmyslovou hygienu a imise"
    ]
  },
  "tcd-detector": {
    title: "TCD detektor (detektor tepelné vodivosti)",
    tagline: "Podsystém detektoru tepelné vodivosti",
    intro:
      "TCD detektory PCF měří změny tepelné vodivosti nosného plynu při eluaci analytů z GC kolony. Oproti FID mají nižší citlivost, ale velmi vysokou stabilitu, což je ideální pro permanentní plyny a lehké uhlovodíky, například CH₄ a CO₂.",
    features: [
      "Detekce tepelné vodivosti na Wheatstoneově můstku",
      "Velmi stabilní a reprodukovatelné pro permanentní plyny",
      "Kombinace se specializovanými kolonami pro CH₄, CO₂ apod.",
      "Nízká údržba, bez potřeby plamene",
      "Používáno v procesních analyzátorech Mod. 529/NR/TCD",
      "Dostupné jako podsystém pro vlastní konstrukci GC"
    ],
    applications: [
      "Procesní GC pro bioplyn a spalovací plyny",
      "Analýza permanentních plynů",
      "Řízení průmyslových procesů",
      "Vývoj vlastních chromatografů"
    ]
  },
  "mod-pf-2014": {
    title: "Mod. PF 2014 S.S. - přenosná vzorkovací sonda",
    tagline: "Přenosná vyhřívaná vzorkovací sonda (nerezová ocel)",
    intro:
      "Mod. PF 2014 je přenosná nerezová vzorkovací sonda s vyhřívaným prachovým filtrem pro použití s přenosnými FID monitory PCF. Standardně je dodávána s 3m vyhřívanou linkou; na vyžádání jsou dostupné delší linky až do 20 m. Splňuje požadavky UNI EN 12619:2013 na vyhřívaný odběr.",
    features: [
      "Nerezová sonda s vyhřívaným prachovým filtrem",
      "Standardní 3m elektricky vyhřívaná vzorkovací linka",
      "Dostupné prodloužené délky linek (až 20 m+)",
      "Pro přenosné VOC monitory řady Mod. 2000",
      "Vyhřívané vzorkování v souladu s UNI EN 12619:2013"
    ],
    applications: [
      "Přenosný odběr vzorků z výduchů s vyhřívanými FID monitory",
      "Emisní testování dle EN 12619",
      "Terénní měření VOC při zvýšených teplotách v potrubí"
    ]
  },
  "sampling-probe-ss-1m": {
    title: "Vzorkovací sonda z nerezové oceli (1 m)",
    tagline: "Nerezová vzorkovací sonda 1 m",
    intro:
      "Jednometrová nerezová vzorkovací sonda pro připojení k vyhřívaným linkám a analyzátorům PCF. Může být vyhřívána teplotou odebíraných spalin se standardní 3m vyhřívanou vzorkovací linkou; delší linky jsou na vyžádání.",
    features: [
      "Nerezové provedení v délce 1 m",
      "Kompatibilní s vyhřívanými vzorkovacími linkami",
      "V souladu s UNI EN 12619",
      "Pro systémy odběru výdušových a emisních vzorků"
    ],
    applications: [
      "Odběr výdušových plynů pro VOC analyzátory",
      "Napojení na vyhřívané transportní linky",
      "Příslušenství pro měření emisí"
    ]
  },
  "heated-sampling-line": {
    title: "Elektricky vyhřívaná vzorkovací linka",
    tagline: "Elektricky vyhřívaná vzorkovací linka",
    intro:
      "Elektricky vyhřívané vzorkovací linky udržují teplotu vzorku mezi sondou a analyzátorem a zabraňují kondenzaci VOC v lince. Standardní délky jsou napájené z přenosného přístroje; dostupné jsou i Ex-proof verze.",
    features: [
      "Elektrické vyhřívání po celé trase vzorku",
      "Napájení z přenosného nebo rackového analyzátoru",
      "Prevence kondenzace VOC a ztrát adsorpcí",
      "Volitelná Ex-proof verze",
      "Délky na míru podle požadavku"
    ],
    applications: [
      "Vyhřívaný odběr VOC dle EN 12619",
      "Propojení mezi sondou a FID monitorem",
      "Systémy měření výdušových emisí"
    ]
  },
  "cylinder-basket-2": {
    title: "Dvoupozicový držák tlakových lahví",
    tagline: "Dvoupozicový nosič tlakových lahví",
    intro:
      "Dvoupozicový koš pro bezpečný transport a upevnění kalibračních a vodíkových tlakových lahví při terénním použití přenosných monitorovacích systémů PCF.",
    features: [
      "Bezpečné uložení dvou tlakových lahví",
      "Pro terénní sady přenosných monitorů",
      "Kompatibilní s lahvemi vodíku a kalibračního plynu"
    ],
    applications: [
      "Terénní sestavy pro emisní měření",
      "Organizace plynového hospodářství přenosných analyzátorů"
    ]
  },
  "cylinder-basket-3": {
    title: "Třípozicový držák tlakových lahví",
    tagline: "Třípozicový nosič tlakových lahví",
    intro:
      "Třípozicový koš pro kalibrační plyn, vodík a náhradní lahve používané s přenosnými i rackovými monitorovacími systémy PCF.",
    features: [
      "Uložení tří tlakových lahví",
      "Stabilní montáž pro laboratoř i vozidlo",
      "Součást spotřebního materiálu a terénních sad PCF"
    ],
    applications: [
      "Vícepnové sestavy pro VOC monitory",
      "Skladování kalibračních a nosných plynů"
    ]
  },
  "mod-9588": {
    title: "Mod. 9588 - generátor nulového vzduchu",
    tagline: "Generátor ultračistého nulového vzduchu (UPP)",
    intro:
      "Mod. 9588 vyrábí ultračistý nulový vzduch pro spalování FID a účely nosného plynu v analyzátorech a monitorovacích systémech PCF, čímž v pevných instalacích nahrazuje lahvovaný vzduch.",
    features: [
      "Lokální výroba nulového vzduchu kvality pro FID",
      "Pro rackové analyzátory Mod. 529 a emisní monitory Mod. 110",
      "Snižuje závislost na tlakových lahvích se stlačeným vzduchem",
      "Ve spojení s vodíkem tvoří kompletní plynové zázemí FID"
    ],
    applications: [
      "Přívod vzduchu pro FID v kontinuálních analyzátorech",
      "Stanice monitorování kvality ovzduší",
      "Náhrada lahvovaného nulového vzduchu"
    ]
  },
  "mod-dp-99": {
    title: "Mod. D/P 99 - metrologický kalibrátor / ředidlo",
    tagline: "Metrologický kalibrátor dynamického ředění",
    intro:
      "Mod. D/P 99 je metrologický kalibrátor dynamického ředění (\"performance tester\"), který automaticky ověřuje linearitu, detekční limit a opakovatelnost emisních i imisních analyzátorů ve více naprogramovaných krocích, a to pro kontinuální i střídavé metody měření.",
    features: [
      "Automatické ověření linearity a LDL",
      "Až 4 regulátory hmotnostního průtoku (MFC)",
      "Skleněná směšovací komora Duraglass",
      "Programovatelné vícebodové kontrolní sekvence",
      "Pro QA/QC VOC a emisních analyzátorů"
    ],
    applications: [
      "Kalibrace a QA emisních analyzátorů",
      "Ověření výkonu imisních monitorů",
      "Automatizované audity linearity",
      "Laboratorní validace a validace CEMS"
    ]
  },
  "mod-liv-10": {
    title: "Mod. LIV 10 - vícekanálový modul",
    tagline: "Vícelinkový přepínač pro monitorování emisí",
    intro:
      "Mod. LIV 10 je vícebodový selektor emisní analýzy, který směruje výdušové vzorky z více linek do FID analyzátorů. Obsahuje dotykové displeje pro řízení proudů a používá se v konfiguracích CEMS s více výduchů a více odběrovými body.",
    features: [
      "Vícebodový výběr vzorkovacích proudů",
      "Grafické dotykové displeje pro řízení proudů",
      "Pro emisní systémy založené na FID analyzátorech",
      "Vstupy/výstupy pro integrovanou architekturu CEMS",
      "Přepínání mezi analytickou a kalibrační fází"
    ],
    applications: [
      "Monitorování emisí z více výduchů",
      "Provozy s několika vzorkovacími body",
      "Centralizované CEMS s jedním analyzátorem",
      "Přepínací systémy emisí hexanu, toluenu a VOC"
    ]
  }
};
