import type { Article } from "@/lib/articles";
import type { Locale } from "@/lib/i18n/locales";

/** Search-result labels, not replacements for the reviewed article headings or body. */
const czechTitles: Record<string, string> = {
  "mereni-vibraci-ridicu-vzv-priprava-smeny": "Měření vibrací řidičů VZV: příprava a podklady",
  "bezpecnostni-list-novy-vyrobek-podklady-revize": "Nový bezpečnostní list: podklady a revize",
  "cena-hlukove-studie-podklady-nabidka": "Cena hlukové studie: rozsah a podklady",
  "mereni-osvetleni-skladu-regaly-expedice": "Měření osvětlení skladu: regály a pracovní místa",
  "uhlikova-stopa-firmy-podklady-pro-odberatele": "Uhlíková stopa firmy: podklady pro výpočet",
  "rocni-bilance-rozpoustedel-lakovna-podklady": "Bilance rozpouštědel v lakovně: podklady a evidence",
  "zadost-ippc-integrovane-povoleni-prilohy": "Žádost IPPC: příprava podkladů a příloh",
  "odborne-prilohy-eia-hluk-rozptyl-doprava": "Odborné přílohy EIA: hluk, rozptyl a doprava",
  "prekroceni-emisniho-limitu-dalsi-postup": "Překročení emisního limitu: podklady a další postup",
  "podani-ispop-za-firmu-zmocneni-podklady": "Podání ISPOP za firmu: podklady a zmocnění",
  "rozsireni-bioplynove-stanice-biometan-podklady": "Rozšíření BPS a biometan: odborné podklady",
  "mikroklima-vyrobni-pracoviste-realna-zakazka": "Měření mikroklimatu: skutečná výrobní zakázka",
  "praskova-lakovna-povoleni": "Prášková lakovna: povolení, měření a filtrace",
  "rozptylova-studie-kdy-je-povinna-a-jake-podklady-jsou-potreba": "Rozptylová studie: povinnost a potřebné podklady",
  "bezpecnostni-listy-v-provozu-co-musi-zamestnavatel": "Bezpečnostní listy: povinnosti zaměstnavatele",
  "chladova-zatez-na-pracovisti": "Chladová zátěž na pracovišti: měření a podklady",
  "chyby-souhrnna-provozni-evidence": "Souhrnná provozní evidence: nejčastější chyby",
  "co-se-meni-v-povolovani-zdroju-znecistovani-ovzdusi-v-roce-2026": "Povolování zdrojů emisí: změny v roce 2026",
  "deponie-materialu-v-arealu-povoleni-rozptylova-studie-odborny-posudek": "Deponie materiálu: povolení, studie a posudky",
  "drevozpracujici-provoz-prach-piliny-odsavani-hluk-a-povoleni-zdroje": "Dřevozpracující provoz: prach, emise a hluk",
  "elektronicke-oznamovani-mereni-emisi-a-predavani-protokolu-prakticky-dopad-na-provozovatele": "Měření emisí: elektronické oznámení a protokoly",
  "emisni-faktory-a-vypocet-emisi-kdy-staci-vypocet-a-kdy-je-potreba-mereni": "Výpočet emisí: kdy stačí a kdy je nutné měření",
  "eu-ets-ghg-kdy-sledovat-vykazovat-emise-sklenikovych-plynu": "EU ETS a GHG: sledování a vykazování emisí",
  "galvanovna-povoleni-provozu": "Galvanovna a mořírna: emise a povolení provozu",
  "hluk-na-pracovisti-a-hluk-do-okoli-rozdil-mereni": "Hluk na pracovišti a do okolí: rozdíly v měření",
  "hluk-nocni-provoz-arealu": "Noční provoz areálu: zdroje hluku a limity",
  "hluk-z-tepelnych-cerpadel-a-vzt-jednotek-co-resit-pred-kolaudaci": "Tepelná čerpadla a VZT: hluk před kolaudací",
  "institut-minimalni-vzdalenosti-ochrana-ovzdusi": "Minimální vzdálenosti zdrojů: prach a zápach",
  "ispop-u-jednorazoveho-mereni-emisi-co-musi-zajistit-provozovatel-a-co-autorizovana-osoba": "ISPOP a měření emisí: povinnosti obou stran",
  "izokyanaty-ve-vyrobe-skoleni-bezpecnostni-listy-mereni-pracovniho-ovzdusi": "Izokyanáty ve výrobě: školení a měření",
  "jak-cist-hlukovou-studii-laeq-lafmax-chraneny-prostor-a-nejistota": "Jak číst hlukovou studii: veličiny a nejistota",
  "jake-podklady-potrebujete-pro-povoleni-prumysloveho-provozu-z-hlediska-zivotniho-prostredi": "Povolení průmyslového provozu: potřebné podklady",
  "jes-a-eia-kdy-se-resi-jednotne-environmentalni-stanovisko-spolecne-s-eia": "JES a EIA: kdy se řeší společně",
  "kategorizace-praci-po-zmene-technologie-nove-mereni": "Kategorizace prací po změně technologie",
  "kdy-muze-urad-pozadovat-odborny-posudek-i-u-zmeny-stavajiciho-zdroje": "Změna zdroje: kdy je potřeba odborný posudek",
  "kogeneracni-jednotka-emise-hluk-mereni-povoleni-provozu": "Kogenerační jednotka: emise, hluk a povolení",
  "kolaudace-vyrobni-haly-provozovny-khs-mereni": "Kolaudace haly: měření pro KHS a podklady",
  "kontrola-cizp-ovzdusi": "Kontrola ČIŽP: podklady pro ochranu ovzduší",
  "manipulace-se-sypkymi-materialy-kod-12-1-deponie-povoleni": "Sypké materiály: zařazení a povolení zdroje",
  "mereni-chemickych-latek-v-pracovnim-ovzdusi-co-rozhoduje-o-rozsahu-mereni": "Chemické látky v pracovním ovzduší: rozsah měření",
  "mereni-mikroklimatu-na-pracovisti-teplota-vlhkost-a-proudeni-vzduchu": "Měření mikroklimatu: teplota, vlhkost a proudění",
  "mereni-osvetleni-pracoviste-khs-kolaudace": "Měření osvětlení: požadavky KHS a kolaudace",
  "mereni-rozpoustedel-pracovniho-ovzdusi": "Rozpouštědla a VOC: měření pracovního ovzduší",
  "priprava-na-mereni-emisi": "Jak připravit zdroj na měření emisí",
  "mereni-vibraci-pri-praci-ruce-cele-telo-kategorizace-praci": "Měření vibrací: ruce, celé tělo a kategorizace",
  "merici-misto-na-vyduchu-nejcastejsi-chyby-ktere-zkomplikuji-mereni-emisi": "Měřicí místo na výduchu: nejčastější chyby",
  "merici-misto-na-vyduchu-proc-je-dulezite-uz-ve-fazi-projektu": "Měřicí místo na výduchu při přípravě projektu",
  "nedostatecne-osvetleni-pracoviste-co-se-meri-podklady": "Nedostatečné osvětlení: měření a podklady",
  "nove-metodicke-vyklady-mzp-k-dopovolovanym-zdrojum-co-ma-provozovatel-zkontrolovat": "Výklady MŽP k dopovolovaným zdrojům",
  "novela-zakona-o-ochrane-ovzdusi-2025": "Novela ochrany ovzduší 2025: změny pro provoz",
  "odborny-posudek-podle-zakona-o-ochrane-ovzdusi-kdy-je-potreba-a-co-musi-obsahovat": "Odborný posudek ovzduší: kdy je potřeba",
  "plynova-kotelna-03-50-mw-nox-co-mereni-povoleni": "Plynová kotelna 0,3–50 MW: emise a povolení",
  "poplatky-za-znecistovani-ovzdusi-jak-souvisi-mereni-vypocet-emisi-a-provozni-evidence": "Poplatky za ovzduší: měření, výpočty a evidence",
  "cena-odborneho-posudku-ovzdusi-rozptylove-studie-provozniho-radu": "Cena posudku, rozptylové studie a provozního řádu",
  "prach-na-pracovisti-celkovy-prach-respirabilni-frakce-a-oxid-kremicity": "Prach na pracovišti: frakce a oxid křemičitý",
  "projekt-aramis-emisni-faktory-metodiky-ochrana-ovzdusi": "Projekt ARAMIS: emisní faktory a metodiky",
  "projektant-vs-ekologicky-konzultant-kdy-zapojit-odbornika-na-ovzdusi-hluk-a-eia": "Projektant a ekologický konzultant: spolupráce",
  "protiprasna-opatreni-na-stavbe-dokumentace-urad": "Protiprašná opatření na stavbě: dokumentace",
  "provozni-parametr-u-zdroje-emisi-kdy-ho-musi-provozovatel-sledovat-a-zaznamenavat": "Provozní parametr zdroje: sledování a evidence",
  "provozni-rad-zdroje-znecistovani-ovzdusi": "Provozní řád zdroje: povinnost a schvalování",
  "recyklacni-stredisko-stavebnich-odpadu-hluk-prach-doprava-a-eia": "Recyklační středisko: hluk, prach, doprava a EIA",
  "scitaci-pravidla-u-zdroju-znecistovani-ovzdusi-proc-mohou-zmenit-povinnosti-provozovatele": "Sčítací pravidla zdrojů: změny povinností",
  "skladka-a-odpadove-zarizeni-jake-environmentalni-podklady-se-obvykle-resi": "Skládka a odpadové zařízení: podklady",
  "skladovani-chemickych-latek-smesi-kontrola": "Skladování chemikálií: příprava na kontrolu",
  "souhrnna-provozni-evidence-2026-co-musi-provozovatel-zkontrolovat-pred-odeslanim": "Souhrnná provozní evidence 2026: kontrola údajů",
  "tepelna-zatez-na-pracovisti-kdy-je-nutne-mereni-a-jak-se-stanovi-pripustna-doba-prace": "Tepelná zátěž: měření a přípustná doba práce",
  "vyjmenovany-stacionarni-zdroj-povoleni-provozu": "Vyjmenovaný zdroj: potřebujete povolení provozu?",
  "vyzva-khs-mereni-pracovniho-prostredi": "Výzva KHS: rozsah měření pracovního prostředí",
  "zalozni-dieselagregat-emise-povoleni-provozni-hodiny": "Dieselagregát: záložní, nebo běžný zdroj emisí?",
  "zapach-z-provozovny-stiznost-pachove-latky": "Zápach z provozovny: stížnosti a posouzení",
  "zmena-integrovaneho-povoleni-ippc-podstatna-zmena": "Změna povolení IPPC: podstatná změna a ohlášení",
  "zmena-technologie-vyrobni-areal-ovzdusi-hluk-odpady-eia": "Změna technologie: ovzduší, hluk, odpady a EIA",
  "automotive-provoz-co-se-typicky-meri-a-posuzuje": "Automobilový provoz: co se měří a posuzuje",
  "hluk-z-provozovny-co-delat-kdyz-si-sousede-stezuji": "Hluk z provozovny: co dělat při stížnosti",
  "jednotne-environmentalni-stanovisko-podklady-rychlejsi-rizeni": "Jednotné environmentální stanovisko: podklady",
  "kategorizace-praci-jake-mereni-je-potreba-jako-podklad": "Kategorizace prací: jaké měření je potřeba?",
  "kdy-je-potreba-hlukova-studie-a-kdy-mereni-hluku": "Kdy hluková studie a kdy měření hluku?",
  "kdy-je-potreba-mereni-emisi-a-kdy-staci-jiny-podklad": "Měření emisí, nebo jiný podklad?",
  "kotelna-a-plynovy-kotel-kdy-se-meri-emise-co-a-nox": "Plynová kotelna: kdy se měří CO a NOx?",
  "lakovna-emise-voc-provozni-rad-mereni-a-povoleni-provozu": "Lakovna: emise, VOC a povolení provozu",
  "mereni-pracovniho-prostredi-kdy-ho-muze-pozadovat-khs": "Měření pracovního prostředí: kdy ho chce KHS",
  "oznameni-zameru-eia-co-to-je-a-kdy-je-potreba": "Oznámení záměru EIA: kdy je potřeba",
  "proc-nestaci-katalogovy-udaj-zarizeni-pro-hlukove-posouzeni": "Proč nestačí katalogový údaj o hluku zařízení",
  "protihlukova-opatreni-pred-merenim-hluku": "Protihluková opatření před měřením hluku",
  "svarovna-prach-kovy-odsavani-pracovni-prostredi-a-emise": "Svařovna: prach, kovy, odsávání a emise",
  "zalozni-dieselagregat-emise-hluk-a-povolovaci-podklady": "Záložní dieselagregát: emise, hluk, podklady"
};
const translatedTitles: Record<string, Partial<Record<Locale, string>>> = {
  "automotive-provoz-co-se-typicky-meri-a-posuzuje": {
    en: "Automotive plants: what is measured",
    de: "Automobilbetrieb: Was wird gemessen?"
  },
  "bezpecnostni-listy-v-provozu-co-musi-zamestnavatel": {
    en: "Safety data sheets: employer duties",
    de: "Sicherheitsdatenblätter: Arbeitgeberpflichten"
  },
  "chladova-zatez-na-pracovisti": {
    en: "Cold stress at work: measurement and records",
    de: "Kältebelastung: Messung und Nachweise"
  },
  "chyby-souhrnna-provozni-evidence": {
    en: "Annual operating records: common errors",
    de: "Betriebsaufzeichnungen: häufige Fehler"
  },
  "co-poslat-pro-rychle-posouzeni-zameru": {
    en: "What to send for a quick project review",
    de: "Was Sie für eine schnelle Prüfung senden"
  },
  "co-se-meni-v-povolovani-zdroju-znecistovani-ovzdusi-v-roce-2026": {
    en: "Air source permitting: changes in 2026",
    de: "Luftreinhaltung: Genehmigungsänderungen 2026"
  },
  "deponie-materialu-v-arealu-povoleni-rozptylova-studie-odborny-posudek": {
    en: "Material stockpiles: permit, study, report",
    de: "Materialdeponie: Genehmigung und Gutachten"
  },
  "drevozpracujici-provoz-prach-piliny-odsavani-hluk-a-povoleni-zdroje": {
    en: "Wood processing: dust, emissions and noise",
    de: "Holzverarbeitung: Staub, Emissionen, Lärm"
  },
  "elektronicke-oznamovani-mereni-emisi-a-predavani-protokolu-prakticky-dopad-na-provozovatele": {
    en: "Emission tests: e-notification and reports",
    de: "Emissionsmessung: E-Meldung und Protokolle"
  },
  "emise-vs-imise-proc-provozovatel-resi-oboji": {
    en: "Emissions vs. immissions: differences, limits",
    de: "Emission und Immission: Unterschied, Grenzwerte"
  },
  "emisni-faktory-a-vypocet-emisi-kdy-staci-vypocet-a-kdy-je-potreba-mereni": {
    en: "Emission calculation: when it is enough",
    de: "Emissionsberechnung: wann sie genügt"
  },
  "eu-ets-ghg-kdy-sledovat-vykazovat-emise-sklenikovych-plynu": {
    en: "EU ETS and GHG: monitoring and reporting",
    de: "EU-EHS und THG: Überwachung und Bericht"
  },
  "galvanovna-povoleni-provozu": {
    en: "Electroplating shop: emissions and permit",
    de: "Galvanik und Beizerei: Emissionen, Genehmigung"
  },
  "hluk-na-pracovisti-a-hluk-do-okoli-rozdil-mereni": {
    en: "Workplace vs. outdoor noise measurement",
    de: "Arbeitsplatz- und Umgebungslärm: Messung"
  },
  "hluk-nocni-provoz-arealu": {
    en: "Night-time site operation: noise sources",
    de: "Nachtbetrieb: Lärmquellen und Grenzwerte"
  },
  "hluk-z-provozovny-co-delat-kdyz-si-sousede-stezuji": {
    en: "Noise complaints from neighbours: what to do",
    de: "Lärmbeschwerden von Nachbarn: Vorgehen"
  },
  "hluk-z-tepelnych-cerpadel-a-vzt-jednotek-co-resit-pred-kolaudaci": {
    en: "Heat pump and HVAC noise before approval",
    de: "Wärmepumpen- und HVAC-Lärm vor der Abnahme"
  },
  "institut-minimalni-vzdalenosti-ochrana-ovzdusi": {
    en: "Minimum distances: dust and odour",
    de: "Mindestabstände: Staub und Geruch"
  },
  "ippc-kdy-provoz-potrebuje-integrovane-povoleni": {
    en: "IPPC: when an integrated permit is needed",
    de: "IPPC: wann eine Genehmigung nötig ist"
  },
  "ispop-u-jednorazoveho-mereni-emisi-co-musi-zajistit-provozovatel-a-co-autorizovana-osoba": {
    en: "ISPOP and emission tests: who does what",
    de: "ISPOP bei Emissionsmessung: Pflichten"
  },
  "izokyanaty-ve-vyrobe-skoleni-bezpecnostni-listy-mereni-pracovniho-ovzdusi": {
    en: "Isocyanates: training and air measurement",
    de: "Isocyanate: Schulung und Luftmessung"
  },
  "jak-cist-hlukovou-studii-laeq-lafmax-chraneny-prostor-a-nejistota": {
    en: "How to read a noise study: metrics, uncertainty",
    de: "Lärmstudie lesen: Größen und Unsicherheit"
  },
  "jake-podklady-potrebujete-pro-povoleni-prumysloveho-provozu-z-hlediska-zivotniho-prostredi": {
    en: "Industrial permit: documents you need",
    de: "Betriebsgenehmigung: nötige Unterlagen"
  },
  "jednotne-environmentalni-stanovisko-podklady-rychlejsi-rizeni": {
    en: "Unified environmental opinion: documents",
    de: "Einheitliche Umweltstellungnahme: Unterlagen"
  },
  "jes-a-eia-kdy-se-resi-jednotne-environmentalni-stanovisko-spolecne-s-eia": {
    en: "JES and EIA: when to combine them",
    de: "JES und UVP: wann gemeinsam"
  },
  "kategorizace-praci-jake-mereni-je-potreba-jako-podklad": {
    en: "Job categorisation: what to measure",
    de: "Kategorisierung der Arbeiten: Messung"
  },
  "kategorizace-praci-po-zmene-technologie-nove-mereni": {
    en: "Job categorisation after technology change",
    de: "Kategorisierung nach Technologieänderung"
  },
  "kdy-je-potreba-hlukova-studie-a-kdy-mereni-hluku": {
    en: "Noise study or noise measurement?",
    de: "Lärmstudie oder Lärmmessung?"
  },
  "kdy-je-potreba-mereni-emisi-a-kdy-staci-jiny-podklad": {
    en: "Emission measurement or other evidence?",
    de: "Emissionsmessung oder anderer Nachweis?"
  },
  "kdy-muze-urad-pozadovat-odborny-posudek-i-u-zmeny-stavajiciho-zdroje": {
    en: "Expert report for a source change",
    de: "Gutachten bei Quellenänderung: wann nötig"
  },
  "kogeneracni-jednotka-emise-hluk-mereni-povoleni-provozu": {
    en: "Cogeneration unit: emissions, noise, permit",
    de: "Kogeneration: Emissionen, Lärm, Genehmigung"
  },
  "kolaudace-vyrobni-haly-provozovny-khs-mereni": {
    en: "Hall approval: KHS measurements to prepare",
    de: "Abnahme der Halle: Messungen für die KHS"
  },
  "kontrola-cizp-ovzdusi": {
    en: "ČIŽP air inspection: what to prepare",
    de: "ČIŽP-Kontrolle: Unterlagen zur Luftreinhaltung"
  },
  "kotelna-a-plynovy-kotel-kdy-se-meri-emise-co-a-nox": {
    en: "Gas boiler plant: when CO and NOx are measured",
    de: "Gaskessel: wann CO und NOx gemessen werden"
  },
  "lakovna-emise-voc-provozni-rad-mereni-a-povoleni-provozu": {
    en: "Paint shop: emissions, VOC and permit",
    de: "Lackiererei: Emissionen, VOC, Genehmigung"
  },
  "manipulace-se-sypkymi-materialy-kod-12-1-deponie-povoleni": {
    en: "Bulk materials: when a source needs a permit",
    de: "Schüttgüter: wann eine Quelle genehmigt wird"
  },
  "mereni-chemickych-latek-v-pracovnim-ovzdusi-co-rozhoduje-o-rozsahu-mereni": {
    en: "Workplace chemicals: scope of measurement",
    de: "Chemische Stoffe am Arbeitsplatz: Umfang"
  },
  "mereni-mikroklimatu-na-pracovisti-teplota-vlhkost-a-proudeni-vzduchu": {
    en: "Microclimate: temperature, humidity, airflow",
    de: "Mikroklima: Temperatur, Feuchte, Luftströmung"
  },
  "mereni-osvetleni-pracoviste-khs-kolaudace": {
    en: "Lighting measurement: KHS and approval",
    de: "Beleuchtungsmessung: KHS und Abnahme"
  },
  "mereni-pracovniho-prostredi-kdy-ho-muze-pozadovat-khs": {
    en: "Workplace measurement: when KHS requires it",
    de: "Arbeitsumgebung: wann die KHS Messung verlangt"
  },
  "mereni-rozpoustedel-pracovniho-ovzdusi": {
    en: "Solvents and VOC in workplace air",
    de: "Lösemittel und VOC am Arbeitsplatz"
  },
  "priprava-na-mereni-emisi": {
    en: "How to prepare a source for emission testing",
    de: "Quelle auf die Emissionsmessung vorbereiten"
  },
  "mereni-vibraci-pri-praci-ruce-cele-telo-kategorizace-praci": {
    en: "Vibration measurement: hand-arm, whole-body",
    de: "Vibrationen: Hand-Arm, Ganzkörper, Kategorien"
  },
  "merici-misto-na-vyduchu-nejcastejsi-chyby-ktere-zkomplikuji-mereni-emisi": {
    en: "Measuring point on the stack: common errors",
    de: "Messstelle am Abluftkamin: häufige Fehler"
  },
  "merici-misto-na-vyduchu-proc-je-dulezite-uz-ve-fazi-projektu": {
    en: "Measuring point: plan it in the project phase",
    de: "Messstelle: schon in der Projektphase planen"
  },
  "nedostatecne-osvetleni-pracoviste-co-se-meri-podklady": {
    en: "Insufficient lighting: measurement and records",
    de: "Unzureichende Beleuchtung: Messung, Unterlagen"
  },
  "nove-metodicke-vyklady-mzp-k-dopovolovanym-zdrojum-co-ma-provozovatel-zkontrolovat": {
    en: "MŽP guidance: sources needing a permit",
    de: "MŽP-Leitlinien: nachträgliche Genehmigung"
  },
  "novela-zakona-o-ochrane-ovzdusi-2025": {
    en: "Air Protection Act 2025: what changes",
    de: "Luftreinhaltegesetz 2025: Änderungen"
  },
  "odborny-posudek-podle-zakona-o-ochrane-ovzdusi-kdy-je-potreba-a-co-musi-obsahovat": {
    en: "Air protection expert report: when needed",
    de: "Gutachten Luftreinhaltung: wann nötig"
  },
  "oznameni-zameru-eia-co-to-je-a-kdy-je-potreba": {
    en: "EIA notification: what it is, when needed",
    de: "EIA-Projektanzeige: wann sie nötig ist"
  },
  "plynova-kotelna-03-50-mw-nox-co-mereni-povoleni": {
    en: "Gas boiler plant 0.3–50 MW: emissions, permit",
    de: "Gaskessel 0,3–50 MW: Emissionen, Genehmigung"
  },
  "poplatky-za-znecistovani-ovzdusi-jak-souvisi-mereni-vypocet-emisi-a-provozni-evidence": {
    en: "Air pollution fees: measurement and records",
    de: "Luftschadstoffgebühren: Messung, Berechnung"
  },
  "cena-odborneho-posudku-ovzdusi-rozptylove-studie-provozniho-radu": {
    en: "Costs: expert report, study, operating rules",
    de: "Kosten: Gutachten, Studie, Betriebsordnung"
  },
  "prach-na-pracovisti-celkovy-prach-respirabilni-frakce-a-oxid-kremicity": {
    en: "Workplace dust: fractions and silica",
    de: "Arbeitsplatzstaub: Fraktionen und Quarz"
  },
  "praskova-lakovna-povoleni": {
    en: "Powder coating shop: permit and TSP tests",
    de: "Pulverlackiererei: Genehmigung, Messung"
  },
  "proc-nestaci-katalogovy-udaj-zarizeni-pro-hlukove-posouzeni": {
    en: "Why catalogue noise data is not enough",
    de: "Warum Katalogwerte für Lärm nicht genügen"
  },
  "projekt-aramis-emisni-faktory-metodiky-ochrana-ovzdusi": {
    en: "ARAMIS project: emission factors, methods",
    de: "ARAMIS: Emissionsfaktoren und Methoden"
  },
  "projektant-vs-ekologicky-konzultant-kdy-zapojit-odbornika-na-ovzdusi-hluk-a-eia": {
    en: "Designer vs. environmental consultant",
    de: "Planer und Umweltberater: Zusammenarbeit"
  },
  "protihlukova-opatreni-pred-merenim-hluku": {
    en: "Noise control before a noise measurement",
    de: "Lärmschutz vor der Lärmmessung"
  },
  "protiprasna-opatreni-na-stavbe-dokumentace-urad": {
    en: "Dust control on construction sites: records",
    de: "Staubschutz auf Baustellen: Unterlagen"
  },
  "provozni-parametr-u-zdroje-emisi-kdy-ho-musi-provozovatel-sledovat-a-zaznamenavat": {
    en: "Source operating parameter: monitoring, records",
    de: "Betriebsparameter: Überwachung und Nachweis"
  },
  "provozni-rad-zdroje-znecistovani-ovzdusi": {
    en: "Operating rules for a source: duty and approval",
    de: "Betriebsordnung: Pflicht und Genehmigung"
  },
  "recyklacni-stredisko-stavebnich-odpadu-hluk-prach-doprava-a-eia": {
    en: "Recycling centre: noise, dust, traffic, EIA",
    de: "Recyclingzentrum: Lärm, Staub, Verkehr, UVP"
  },
  "rozptylova-studie-kdy-je-povinna-a-jake-podklady-jsou-potreba": {
    en: "Dispersion study: when required, documents",
    de: "Ausbreitungsstudie: Pflicht und Unterlagen"
  },
  "scitaci-pravidla-u-zdroju-znecistovani-ovzdusi-proc-mohou-zmenit-povinnosti-provozovatele": {
    en: "Aggregation rules: changed operator duties",
    de: "Summierungsregeln: geänderte Pflichten"
  },
  "skladka-a-odpadove-zarizeni-jake-environmentalni-podklady-se-obvykle-resi": {
    en: "Landfill and waste site: documents",
    de: "Deponie und Abfallanlage: Unterlagen"
  },
  "skladovani-chemickych-latek-smesi-kontrola": {
    en: "Chemical storage: prepare for an inspection",
    de: "Chemikalienlager: Kontrolle vorbereiten"
  },
  "souhrnna-provozni-evidence-2026-co-musi-provozovatel-zkontrolovat-pred-odeslanim": {
    en: "Operating records 2026: check before filing",
    de: "Betriebsaufzeichnungen 2026: Prüfung vor Abgabe"
  },
  "svarovna-prach-kovy-odsavani-pracovni-prostredi-a-emise": {
    en: "Welding shop: dust, metals, extraction",
    de: "Schweißerei: Staub, Metalle, Absaugung"
  },
  "tepelna-zatez-na-pracovisti-kdy-je-nutne-mereni-a-jak-se-stanovi-pripustna-doba-prace": {
    en: "Heat stress: measurement and permitted work time",
    de: "Hitzebelastung: Messung, zulässige Arbeitszeit"
  },
  "tonove-slozky-hluku-ceska-legislativa-provozovatel": {
    en: "Tonal noise components and Czech legislation",
    de: "Tonale Lärmanteile und tschechisches Recht"
  },
  "vyjmenovany-stacionarni-zdroj-povoleni-provozu": {
    en: "Listed source: do you need an operating permit?",
    de: "Gelistete Quelle: Genehmigung nötig?"
  },
  "vyzva-khs-mereni-pracovniho-prostredi": {
    en: "KHS request: scope of workplace measurement",
    de: "KHS-Aufforderung: Umfang der Messung"
  },
  "zalozni-dieselagregat-emise-hluk-a-povolovaci-podklady": {
    en: "Backup diesel generator: emissions and noise",
    de: "Notstromaggregat: Emissionen, Lärm, Unterlagen"
  },
  "zalozni-dieselagregat-emise-povoleni-provozni-hodiny": {
    en: "Backup diesel: backup or regular source?",
    de: "Dieselaggregat: Notstrom oder reguläre Quelle?"
  },
  "zapach-z-provozovny-stiznost-pachove-latky": {
    en: "Odour complaints: what to do, how assessed",
    de: "Geruchsbeschwerden: Vorgehen und Beurteilung"
  },
  "zmena-integrovaneho-povoleni-ippc-podstatna-zmena": {
    en: "IPPC permit change: when it is substantial",
    de: "IPPC-Änderung: wann sie wesentlich ist"
  },
  "zmena-technologie-vyrobni-areal-ovzdusi-hluk-odpady-eia": {
    en: "Technology change: air, noise, waste, EIA",
    de: "Technologieänderung: Luft, Lärm, Abfall, UVP"
  }
};

/** Longest search title that still fits with the " | NATURCHEM" suffix in a typical result snippet. */
export const maxSearchTitleLength = 50;

/**
 * Safety net for articles published later without a hand-written search title: keep the part before the
 * first colon or question mark when that is a usable headline, otherwise cut at a word boundary.
 */
export function fallbackSearchTitle(title: string): string {
  const clean = title.replace(/\s+/g, " ").trim();
  if (clean.length <= maxSearchTitleLength) return clean;
  const head = clean.split(/[:?]/)[0].trim();
  if (head.length >= 18 && head.length <= maxSearchTitleLength) return head;
  const cut = clean.slice(0, maxSearchTitleLength - 1);
  const space = cut.lastIndexOf(" ");
  return (space > 24 ? cut.slice(0, space) : cut).replace(/[\s,;:–—-]+$/, "");
}

export function articleSearchMetadata(article: Pick<Article, "slug" | "title" | "excerpt">, locale: Locale) {
  const title = (locale === "cs" ? czechTitles[article.slug] : translatedTitles[article.slug]?.[locale]) || fallbackSearchTitle(article.title);
  const excerpt = article.excerpt.replace(/\s+/g, " ").trim();
  // Keep complete source sentences, never truncate a legal condition or negation.
  const firstSentence = Array.from(new Intl.Segmenter(locale, { granularity: "sentence" }).segment(excerpt))[0]?.segment.trim();
  const suffix = locale === "cs" ? "Odborný článek NATURCHEM." : locale === "de" ? "Fachartikel von NATURCHEM." : "Expert article by NATURCHEM.";
  const description = excerpt.length <= 180 ? excerpt
    : firstSentence && firstSentence.length <= 180 ? firstSentence
    : `${title.replace(/[.!?]$/, "")}. ${suffix}`;
  return { title, description };
}
