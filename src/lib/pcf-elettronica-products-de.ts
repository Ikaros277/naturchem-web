import type { PcfProductTranslation } from "@/lib/pcf-elettronica-product-localize";

export const pcfProductTranslationsDe: Record<string, PcfProductTranslation> = {
  "mod-529-nr-t-total-voc-analyzer": {
    title: "Mod. 529/NR/T Analysator für Gesamt-VOC",
    tagline: "Stationärer Analysator zur Gesamt-VOC-(THC)-Überwachung",
    intro:
      "Der Mod. 529/NR/T ist ein 19\"-Rack-FID-Analysator zur kontinuierlichen Überwachung flüchtiger organischer Gesamtverbindungen (TVOC/THC) in der Außenluft und bei Immissionsanwendungen. Eine präzise kapillare Probenschleife stellt reproduzierbare Probenvolumina vor der FID-Detektion sicher; die Daten werden auf einem Farb-Touchscreen angezeigt und über RS-232 übertragen.",
    features: [
      "Kontinuierliche Gesamt-VOC-Analyse mit beheiztem FID-Detektor",
      "Programmierbare Messbereiche bis in den ppbV-Bereich",
      "Farbiger Grafik-Touchscreen mit Echtzeit-Chromatogramm",
      "Automatische Nullpunktdrift-Kompensation und Null/Span-Prüfung an der Front",
      "Analoge und serielle Ausgänge für Datenerfassungssysteme",
      "Optionale Wasserstoff- und Null-Luft-Generatoren"
    ],
    applications: [
      "Luftqualitäts- und Immissionsmessstationen",
      "Kontinuierliche TVOC/THC-Messung in der Außenluft",
      "Umwelt- und Compliance-Monitoring",
      "Forschungs- und Referenzmessnetze"
    ]
  },
  "mod-530-nr-btex-aromatics-analyzer": {
    title: "Mod. 530/NR BTEX-(Aromaten)-Analysator",
    tagline: "Automatischer BTEX-Aromaten-Analysator (FID oder PID)",
    intro:
      "Der Mod. 530/NR ist ein vollautomatischer industrieller Rack-Gaschromatograph für Benzol, Toluol, Ethylbenzol und Xylole (BTEX). Aromaten werden auf Tenax GR angereichert, thermisch desorbiert und auf einer Weitbohrungs-Kapillarsäule getrennt; die Firmware steuert Sequenzen, Peak-Integration und Konzentrationsausgabe mit RS-232-Datenexport.",
    features: [
      "Tenax-GR-Vorkonzentration aromatischer Verbindungen aus Luft",
      "Kapillare GC-Trennung mit integrierter Peak-Integration",
      "Verfügbar mit FID- oder PID-Detektion",
      "Programmierbare BTEX-Messbereiche in ppbV / µg/m³",
      "Industrielles 19\"-Rackdesign für unbeaufsichtigten Betrieb",
      "RS-232-Übertragung der Ergebnisse an den PC für Reporting"
    ],
    applications: [
      "BTEX-Monitoring in der Außenluft",
      "Immissionsbewertung in der Nähe industrieller Quellen",
      "Überwachung von Geruch und aromatischen Kohlenwasserstoffen",
      "Urbane Luftqualitätsstationen"
    ]
  },
  "mod-529-nr-nmh-analyzer": {
    title: "Mod. 529/NR/NMH Analysator",
    tagline: "NMH-Analysator mit GC-Trennung",
    intro:
      "Der Mod. 529/NR/NMH misst kontinuierlich reaktive Kohlenwasserstoffe und Nicht-Methan-Kohlenwasserstoffe (NMH) mittels FID-Detektion in Kombination mit gaschromatographischer Trennung. Eine kalibrierte Kapillarschleife dosiert reproduzierbare Probenvolumina bei Atmosphärendruck vor der Analyse.",
    features: [
      "FID-Detektor mit GC-Säulentrennung von Methan und NMH",
      "Kontinuierliche automatische Analyse im 19\"-Rackformat",
      "Programmierbare Bereiche für VOC und NMH in ppmV oder mg/m³",
      "Farb-Touchscreen mit Echtzeitdaten",
      "Null/Span-Prüfung über Frontpanel oder Fernkontakt",
      "RS-232- und Analogausgänge"
    ],
    applications: [
      "Nicht-Methan-Kohlenwasserstoff-Monitoring in Außenluft",
      "Bewertung photochemischen Smogs und Ozonvorläufer",
      "Luftqualitätsnetze mit NMH-Anforderungen",
      "Perimeterüberwachung industrieller Standorte"
    ]
  },
  "mod-529-nr-s-specific-hc-analyzer": {
    title: "Mod. 529/NR/S Analysator für spezifische HC",
    tagline: "Analysator für spezifische Kohlenwasserstoffe und TVOC",
    intro:
      "Der Mod. 529/NR/S bestimmt einzelne Kohlenwasserstoffverbindungen durch GC-FID-Trennung, während ein zweiter Injektionspfad Gesamt-VOC misst. Analoge Ausgänge stehen für Einzelkomponente, TVOC und deren Differenz zur Verfügung und eignen sich für spezielle Monitoringprogramme.",
    features: [
      "GC-Trennung spezifischer Verbindungen plus Gesamt-VOC-Kanal",
      "Separate Analogausgänge für Komponente, TVOC und Differenz",
      "Programmierbare Messbereiche je Verbindung",
      "Messzyklus 180-300 s (konfigurierbar)",
      "Farb-Touchdisplay mit Live-Analyseansicht",
      "Automatischer Betrieb im 19\"-Rack"
    ],
    applications: [
      "Überwachung spezifischer VOC-Verbindungen in Luft",
      "Forschungsprogramme mit komponentenspezifischen Daten",
      "Vergleich von Speziierung und Gesamt-VOC-Konzentration",
      "Spezialisierte Immissionsstudien"
    ]
  },
  "mod-110-h-fast-response-time-voc-monitor": {
    title: "Mod. 110 H VOC-Monitor mit schneller Ansprechzeit",
    tagline: "Schnell reagierender Emissionsmonitor mit beheiztem FID",
    intro:
      "Der Mod. 110 H ist ein beheizter FID-Emissionsmonitor für sehr schnelle Ansprechzeiten und damit ideal zur Erkennung von Konzentrationsspitzen, LEL-Zuständen und dynamischen Prozessen wie Lösemittel-Emissionen, Nachverbrennung und Verbrennungsanlagen. Der Probenpfad wird auf 180-200 °C gehalten.",
    features: [
      "FID auf 180 °C beheizt für Hochtemperaturproben",
      "Sehr schnelle Ansprechzeit auf 90 % des Messbereichs",
      "Programmierung und Diagnose über Display",
      "Integriertes Selbstdiagnosesystem",
      "Digitale Ausgänge RS-232 und USB",
      "Analoge Ausgänge 0-2 V und 4-20 mA"
    ],
    applications: [
      "LEL- und Explosionsgrenzüberwachung",
      "Emissionen aus lösemittelbasierten Prozessen",
      "Überwachung von Nachverbrennung und Verbrennung",
      "Schnelle dynamische VOC-Messungen am Schornstein"
    ]
  },
  "mod-110-e-discrete-sampling-voc-monitor": {
    title: "Mod. 110 E VOC-Monitor mit diskreter Probenahme",
    tagline: "Beheizter FID-VOC-Monitor mit diskreter Probenahme",
    intro:
      "Der Mod. 110 E arbeitet mit diskreter statt kontinuierlicher Probenahme und reduziert dadurch Wartungsaufwand, Korrosion und Kondensationsrisiko bei gleichzeitig beheizter FID-Messung bei 180 °C. Geeignet für Emissionsmessungen, bei denen repräsentative Stichproben ausreichen.",
    features: [
      "Beheizter FID-Detektor bei 180 °C",
      "Diskreter Probenahmemodus für geringeren Wartungsaufwand",
      "Programmierung und Selbstdiagnose über Display",
      "Reduzierte Korrosion und Kondensation im Probenpfad",
      "Industrielles 19\"-Rackgehäuse",
      "RS-232/USB-Kommunikation"
    ],
    applications: [
      "Schornstein-Emissionsmonitoring mit periodischer Probenahme",
      "Prozesse mit akzeptabler diskreter Probenahme",
      "Anlagen mit reduziertem Probenleitungs-Servicebedarf",
      "Industrielle VOC-Compliance-Prüfungen"
    ]
  },
  "mod-529-nr-h-gc-analyzer": {
    title: "Mod. 529/NR/H GC-Analysator",
    tagline: "Hochtemperatur-GC-Analysator für Schornstein und Emissionen",
    intro:
      "Der Mod. 529/NR/H misst Methan, Gesamt-VOC, Nicht-Methan-HC (NMH) und spezifische Verbindungen in Schornsteinemissionen bei moderaten Temperaturen (bis ca. 100 °C). Die NR-Serie nutzt moderne Elektronik für einfache Rekonfiguration und stabile Datenspeicherung; die Grundzykluszeit beträgt 180 s.",
    features: [
      "Methan, TVOC, NMH und speziierte Verbindungen in einer Plattform",
      "Hochtemperatur-Probenpfad für Schornsteingase (< 100 °C)",
      "GC-FID-Analyse mit konfigurierbarem Zyklus (ab 180 s)",
      "New-Release-(NR)-Elektronik für flexible Konfiguration",
      "Ausgelegt für kontinuierliche Emissionsmesssysteme",
      "Detaillierte technische Spezifikationen siehe Mod. 529/NR/S"
    ],
    applications: [
      "Schornstein-Emissionsmonitoring (CH₄, TVOC, NMH)",
      "Analyse von Verbrennungs- und Prozessgasen",
      "CEMS und regulatorisches Emissionsreporting",
      "Industrieanlagen mit moderaten Abgastemperaturen"
    ]
  },
  "mod-529-nr-tcd-mini-industrial-gc-with-tcd-detector": {
    title: "Mod. 529/NR/TCD Mini-Industrie-GC mit TCD-Detektor",
    tagline: "Mini-Prozess-GC mit TCD-Detektor",
    intro:
      "Der Mod. 529/NR/TCD ist ein kompakter Prozess-Gaschromatograph zur kontinuierlichen Analyse spezifischer Verbindungen wie CH₄ und CO₂ mittels Wärmeleitfähigkeitsdetektion (Wheatstone-Brücke). Der TCD bietet hohe Stabilität für permanente Gase und leichte Kohlenwasserstoffe in industriellen Prozessströmen.",
    features: [
      "Wärmeleitfähigkeitsdetektor (TCD) mit hoher Stabilität für leichte Verbindungen",
      "Kontinuierlicher Prozess-GC im kompakten 19\"-Format",
      "Ausgelegt für CH₄, CO₂ und ähnliche permanente Gase",
      "Industrielle Firmware für unbeaufsichtigten Betrieb",
      "Wartungsärmer als Verbrennungsdetektoren",
      "Geeignet zur Integration in Prozessregelkreise"
    ],
    applications: [
      "Biogas- und Deponiegas-Monitoring (CH₄, CO₂)",
      "Kontrolle der Prozessgaszusammensetzung",
      "Industrielle Fermentations- und Verbrennungsanalyse",
      "Kontinuierliches Monitoring permanenter Gase"
    ]
  },
  "mod-2005-for-total-voc": {
    title: "Mod. 2005 für Gesamt-VOC",
    tagline: "Mobiler HOT-FID-TVOC-Monitor",
    intro:
      "Der Mod. 2005 ist ein tragbarer Monitor für Gesamtkohlenwasserstoffe (TCOV) bei hohen Temperaturen mit beheiztem FID-Detektor, ausgeführt gemäß UNI EN 12619:2013. Das Gerät nutzt beheizte Probenahme (150-200 °C), interne Reinlufterzeugung für die FID-Flamme und einen Farb-Datenlogger mit USB/seriellen Schnittstellen.",
    features: [
      "Flammenionisationsdetektor (FID) auf 180 °C beheizt",
      "Messbereich 0-10.000 mg/m³ mit wählbaren Skalen",
      "Ansprechzeit 1 s von 0 auf 90 % des Endwerts",
      "Interner Null-Luft-Generator - extern wird nur Wasserstoff benötigt",
      "Farb-TFT-Display mit Datenlogger und Excel-Export",
      "Industrieausführung für einfache Bedienung und geringen Wartungsaufwand",
      "Digitale Ausgänge RS-232 / optional RS-485 und USB",
      "Optionale Analogausgänge: 0-10 V und 4-20 mA"
    ],
    applications: [
      "Schornstein- und Emissionsmonitoring",
      "Kontrolle der Prozesseffizienz",
      "Umweltanalytik bei mittleren bis hohen VOC-Konzentrationen",
      "Messungen nach CEE CEN 264 und UNI EN 12619:2013"
    ]
  },
  "mod-2001-c-for-voc-and-check-of-ch4-fraction": {
    title: "Mod. 2001 C für VOC und Kontrolle des CH4-Anteils",
    tagline: "Mobiler VOC-Monitor mit Methananteilskontrolle",
    intro:
      "Der Mod. 2001 C ist ein tragbarer, beheizter FID-Monitor für Gesamt-VOC/THC mit der Möglichkeit, den Methananteil fallweise zu überprüfen. Er nutzt das beheizte Probenahmekonzept der 2000er-Serie (150-200 °C) und interne Lufterzeugung; weit verbreitet bei Schornsteintests und mobilen Emissionsmessungen.",
    features: [
      "Beheizter FID bei 180 °C im verstärkten Aluminium-Tragekoffer",
      "Gesamt-VOC/THC-Messung mit optionaler CH₄-Anteilsprüfung",
      "Ansprechzeit 1 s bis 90 % des Messbereichs",
      "Interner Reinluftgenerator - extern ist nur Wasserstoff erforderlich",
      "Farb-TFT-Display (320x200 px) mit Datenaufzeichnung",
      "USB / RS-232 / optional RS-485-Ausgänge"
    ],
    applications: [
      "Mobile Schornstein- und Emissionsmessungen",
      "Vor-Ort-Verifikation von Methan gegenüber Gesamt-HC",
      "Prozesseffizienzprüfungen direkt am Standort",
      "Umweltanalytik bei mittleren bis hohen Konzentrationen"
    ]
  },
  "mod-c-2011-for-voc-and-ch4-simultaneously": {
    title: "Mod. C 2011 für gleichzeitige VOC- und CH4-Messung",
    tagline: "Mobiler Dual-FID-Monitor für VOC und CH₄",
    intro:
      "Der Mod. C 2011 verfügt über zwei beheizte FID-Detektoren zur gleichzeitigen Messung von Gesamt-VOC und Methan in einem tragbaren Gerät. Beheizte Probenahme (150-200 °C) und interne Lufterzeugung machen ihn geeignet für Emissionstests mit gleichzeitiger Echtzeit-Erfassung beider Parameter.",
    features: [
      "Zwei beheizte FID-Detektoren (180 °C) - VOC- und CH₄-Kanal",
      "Gleichzeitige VOC- und Methan-Messwerte in Echtzeit",
      "Robustes tragbares Industriedesign mit geringem Wartungsbedarf",
      "1 s Ansprechzeit bis 90 % des Messbereichs",
      "Farbdisplay und Datenlogger",
      "Datenexport über USB und serielle Schnittstelle"
    ],
    applications: [
      "Gleichzeitiges VOC- und Methan-Monitoring bei Emissionen",
      "Schornsteintests mit getrennter CH₄/NMHC-Auswertung",
      "Messung von Verbrennungs- und Biogasfreisetzungen",
      "Feldaudits mit beiden Parametern"
    ]
  },
  "mod-8807-nr-portable-gc-for-nmh-or-specifics": {
    title: "Mod. 8807/NR tragbarer GC für NMH oder spezifische Komponenten",
    tagline: "Tragbarer GC-FID für NMH und spezifische HC",
    intro:
      "Der Mod. 8807/NR ist ein tragbarer Gaschromatograph mit FID-Detektion, als Feldversion der Rack-Familie Mod. 529/NR/NMH. Er misst Gesamt-VOC, Methan, NMH und weitere spezifische Verbindungen mittels GC-Trennung mit Zwei-Injektionszyklus und kapillarer Probenschleife.",
    features: [
      "Tragbarer GC-FID für NMH und spezifizierte Kohlenwasserstoffe",
      "Analyseergebnisse auf integriertem Display",
      "Integriertes Selbstdiagnosesystem",
      "Zwei-Injektionszyklus zur Methan/NMH-Trennung",
      "Batterie- und mobile Stromversorgungsoptionen für den Feldeinsatz",
      "Ähnliche Analytiklogik wie beim Rackgerät Mod. 529/NR/NMH"
    ],
    applications: [
      "Feldkampagnen für NMH- und VOC-Erhebungen",
      "Mobiles Emissions-Screening",
      "Standortaudits ohne fest installiertes CEMS",
      "Forschung und mobile Monitoringkampagnen"
    ]
  },
  "fid-detector": {
    title: "FID-Detektor (Flammenionisationsdetektor)",
    tagline: "Flammenionisationsdetektor-Subsystem",
    intro:
      "PCF-FID-Detektoren sind kompakte Subsysteme für GC- und Monitoringinstrumente. Der FID ist der am häufigsten eingesetzte GC-Detektor für Kohlenwasserstoffe - linear, stabil und bis in den ppm-Bereich empfindlich, sofern Reinluft und Wasserstoff mit stabilen Durchflüssen bereitgestellt werden.",
    features: [
      "Universeller Kohlenwasserstoffdetektor für GC und Monitoringsysteme",
      "Mittlere Empfindlichkeit (ppm-Fraktionen), geringe Selektivität",
      "Erfordert Reinluft und Wasserstoff als Verbrennungsgase",
      "±15 Vdc-Versorgung; verstärktes technisches Ausgangssignal",
      "Sehr gute Langzeitstabilität bei stabilen Gasdurchflüssen",
      "Als Subsystem für kundenspezifische Geräteentwickler verfügbar"
    ],
    applications: [
      "Entwicklung kundenspezifischer GC-Instrumente",
      "Ersatzdetektor für PCF-Analysatoren",
      "Subsysteme für VOC- und THC-Monitoring",
      "Labor- und Prozessanalysatoren"
    ]
  },
  "pid-detector": {
    title: "PID-Detektor (Photoionisationsdetektor)",
    tagline: "Photoionisationsdetektor-Subsystem",
    intro:
      "PCF-PID-Detektoren nutzen Photoionisation zur Erfassung flüchtiger organischer Verbindungen, insbesondere Aromaten und ungesättigter Spezies. Angeboten als kompaktes Subsystem mit dedizierter PCB für Versorgung und Signalaufbereitung.",
    features: [
      "Photoionisationsdetektion für VOC und Aromaten",
      "Kompakte Detektorbauform in kleiner/mittlerer Größe",
      "Dedizierte PCB für Versorgung und Signalverstärkung",
      "Geeignet für BTEX und aromatisches Niederspannungs-Monitoring",
      "Integrierbar in PCF-BTEX-Analysatoren (Mod. 530 PID)",
      "Auch für externe Geräteentwickler verfügbar"
    ],
    applications: [
      "BTEX- und Aromaten-Monitoring",
      "Tragbare VOC-Detektoren",
      "Kundenspezifische Analysesysteme",
      "Instrumente für Arbeitshygiene und Immissionsmessung"
    ]
  },
  "tcd-detector": {
    title: "TCD-Detektor (Wärmeleitfähigkeitsdetektor)",
    tagline: "Wärmeleitfähigkeitsdetektor-Subsystem",
    intro:
      "PCF-TCD-Detektoren erfassen Änderungen der Wärmeleitfähigkeit des Trägergases, wenn Analyten aus einer GC-Säule eluieren. Weniger empfindlich als FID, jedoch extrem stabil - ideal für permanente Gase und leichte Kohlenwasserstoffe wie CH₄ und CO₂.",
    features: [
      "Wärmeleitfähigkeitsdetektion über Wheatstone-Brücke",
      "Sehr stabil und reproduzierbar für permanente Gase",
      "Kombination mit dedizierten Säulen für CH₄, CO₂ usw.",
      "Wartungsarm, keine Flamme erforderlich",
      "Eingesetzt in Mod. 529/NR/TCD-Prozessanalysatoren",
      "Als Subsystem für kundenspezifische GC-Systeme verfügbar"
    ],
    applications: [
      "Prozess-GC für Biogas- und Verbrennungsgase",
      "Analyse permanenter Gase",
      "Industrielle Prozesskontrolle",
      "Entwicklung kundenspezifischer Chromatographen"
    ]
  },
  "mod-pf-2014": {
    title: "Mod. PF 2014 S.S. - tragbare Probenahmesonde",
    tagline: "Tragbare beheizte Probenahmesonde (Edelstahl)",
    intro:
      "Der Mod. PF 2014 ist eine tragbare Edelstahl-Probenahmesonde mit beheiztem Staubfilter für den Einsatz mit tragbaren PCF-FID-Monitoren. Standardmäßig mit 3 m beheizter Leitung, längere Leitungen bis 20 m auf Anfrage. Entspricht den Anforderungen an beheizte Probenahme nach UNI EN 12619:2013.",
    features: [
      "Edelstahlsonde mit beheiztem Staubfilter",
      "Standardmäßig 3 m elektrisch beheizte Probenahmeleitung",
      "Verlängerte Leitungslängen verfügbar (bis 20 m+)",
      "Für tragbare VOC-Monitore der Mod.-2000-Serie",
      "Beheizte Probenahme gemäß UNI EN 12619:2013"
    ],
    applications: [
      "Tragbare Schornsteinprobenahme mit beheizten FID-Monitoren",
      "Emissionsmessungen gemäß EN 12619",
      "Feldmessung von VOC bei erhöhten Kanaltemperaturen"
    ]
  },
  "sampling-probe-ss-1m": {
    title: "Probenahmesonde aus Edelstahl (1 m)",
    tagline: "1-m-Edelstahl-Probenahmesonde",
    intro:
      "Ein Meter lange Edelstahl-Probenahmesonde zur Verbindung mit beheizten Leitungen und PCF-Analysatoren. Kann über das heiße Abgas mit einer standardmäßigen 3-m-Heizleitung temperiert werden; längere Leitungen sind auf Anfrage verfügbar.",
    features: [
      "Edelstahlkonstruktion mit 1 m Länge",
      "Kompatibel mit beheizten Probenahmeleitungen",
      "Konform mit UNI EN 12619",
      "Für Schornstein- und Emissionsprobenahmesysteme"
    ],
    applications: [
      "Schornsteingas-Probenahme für VOC-Analysatoren",
      "Anbindung an beheizte Transportleitungen",
      "Zubehör für Emissionsmesssysteme"
    ]
  },
  "heated-sampling-line": {
    title: "Elektrisch beheizte Probenahmeleitung",
    tagline: "Elektrisch beheizte Probenahmeleitung",
    intro:
      "Elektrisch beheizte Probenahmeleitungen halten die Probentemperatur zwischen Sonde und Analysator konstant und verhindern VOC-Kondensation in der Leitung. Standardlängen werden über das portable Instrument versorgt; Ex-geschützte Versionen sind verfügbar.",
    features: [
      "Elektrische Beheizung entlang des gesamten Probenpfads",
      "Stromversorgung über tragbaren oder Rack-Analysator",
      "Verhindert VOC-Kondensation und Adsorptionsverluste",
      "Optionale Ex-geschützte Ausführung",
      "Sonderlängen auf Anfrage"
    ],
    applications: [
      "Beheizte VOC-Probenahme gemäß EN 12619",
      "Verbindung zwischen Sonde und FID-Monitor",
      "Schornstein-Emissionsmesssysteme"
    ]
  },
  "cylinder-basket-2": {
    title: "Zweifach-Flaschenkorb",
    tagline: "Gasflaschenträger für zwei Positionen",
    intro:
      "Zweifachkorb für den sicheren Transport und die Montage von Kalibriergas- und Wasserstoffflaschen bei mobilen PCF-Messsystemen im Feldeinsatz.",
    features: [
      "Sichere Aufnahme von zwei Gasflaschen",
      "Für mobile Monitor-Feldkits",
      "Kombinierbar mit Wasserstoff- und Kalibriergasflaschen"
    ],
    applications: [
      "Feldaufbauten für Emissionsmessungen",
      "Organisation der Gasversorgung tragbarer Analysatoren"
    ]
  },
  "cylinder-basket-3": {
    title: "Dreifach-Flaschenkorb",
    tagline: "Gasflaschenträger für drei Positionen",
    intro:
      "Dreifachkorb für Kalibriergas-, Wasserstoff- und Reserveflaschen zur Verwendung mit tragbaren und Rack-basierten PCF-Monitoringsystemen.",
    features: [
      "Aufnahme von drei Gasflaschen",
      "Stabile Montage für Labor- oder Fahrzeugeinsatz",
      "Teil des PCF-Verbrauchsmaterials und der Feldkits"
    ],
    applications: [
      "Mehrgas-Setups für VOC-Monitore",
      "Lagerung von Kalibrier- und Trägergasen"
    ]
  },
  "mod-9588": {
    title: "Mod. 9588 - Null-Luft-Generator",
    tagline: "Ultra-Rein-Null-Luft-Generator (UPP)",
    intro:
      "Der Mod. 9588 erzeugt ultra-reine Null-Luft für FID-Verbrennung und Trägergasaufgaben in PCF-Analysatoren und Monitoringsystemen und ersetzt in stationären Installationen Flaschenluft.",
    features: [
      "Vor-Ort-Erzeugung von FID-tauglicher Null-Luft",
      "Für Rack-Analysatoren Mod. 529 und Emissionsmonitore Mod. 110",
      "Reduziert die Abhängigkeit von Druckluftflaschen",
      "Ergänzt mit Wasserstoff eine vollständige FID-Gasversorgung"
    ],
    applications: [
      "FID-Luftversorgung für kontinuierliche Analysatoren",
      "Luftqualitäts-Monitoringstationen",
      "Ersatz für Null-Luft aus Flaschen"
    ]
  },
  "mod-dp-99": {
    title: "Mod. D/P 99 - metrologischer Kalibrator / Verdünner",
    tagline: "Metrologischer Kalibrator für dynamische Verdünnung",
    intro:
      "Der Mod. D/P 99 ist ein metrologischer Kalibrator für dynamische Verdünnung (\"Performance Tester\"), der Linearität, Nachweisgrenze und Wiederholbarkeit von Emissions- und Immissionsanalysatoren in mehreren programmierten Stufen automatisch überprüft - für kontinuierliche und alternierende Messmethoden.",
    features: [
      "Automatische Verifikation von Linearität und LDL",
      "Bis zu 4 Massendurchflussregler (MFC)",
      "Duraglass-Mischkammer aus Glas",
      "Programmierbare Mehrpunkt-Prüfsequenzen",
      "Für QA/QC von VOC- und Emissionsanalysatoren"
    ],
    applications: [
      "Kalibrierung und QA von Emissionsanalysatoren",
      "Leistungsprüfung von Immissionsmonitoren",
      "Automatisierte Linearitätsaudits",
      "Labor- und CEMS-Validierung"
    ]
  },
  "mod-liv-10": {
    title: "Mod. LIV 10 - Mehrleitungsmodul",
    tagline: "Mehrleitungs-Umschalter für Emissionsmonitoring",
    intro:
      "Der Mod. LIV 10 ist ein Mehrpunkt-Wahlsystem für Emissionsanalysen, das Schornsteinproben aus mehreren Leitungen auf FID-Analysatoren schaltet. Enthält Touchscreen-Anzeigen zur Stromführung und wird in Multi-Stack- und Multi-Point-CEMS-Konfigurationen eingesetzt.",
    features: [
      "Mehrpunkt-Auswahl von Probenströmen",
      "Grafische Touchscreen-Displays zur Stromsteuerung",
      "Für FID-basierte Emissionsmesssysteme",
      "Ein-/Ausgänge für integrierte CEMS-Architekturen",
      "Umschaltung zwischen Analyse- und Kalibrierphase"
    ],
    applications: [
      "Emissionsmonitoring an mehreren Schornsteinen",
      "Anlagen mit mehreren Probenahmepunkten",
      "Zentralisiertes CEMS mit einem Analysator",
      "Umschaltsysteme für Hexan-, Toluol- und VOC-Emissionen"
    ]
  }
};
