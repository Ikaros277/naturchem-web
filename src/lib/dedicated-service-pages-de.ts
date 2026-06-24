import type { DedicatedServicePage } from "./dedicated-service-pages";

export const dedicatedServicePagesEn: Record<string, DedicatedServicePage> = {
  "hlukove-studie": {
    slug: "sluzby/hlukove-studie",
    title: "Lärmstudien",
    description:
      "Lärmstudien für Technologien, Standorte, Verkehr, HVAC, Wärmepumpen und Bauprojekte. Unterstützende Dokumentation für KHS, Baugenehmigung und UVP.",
    intro:
      "Hat eine Behörde eine Lärmstudie angefordert oder bearbeiten Sie eine Nachbarschaftsbeschwerde? Wir erstellen Berechnungen für Technologien, Standort und Transport – Dokumentation für KHS, Baugenehmigung und UVP.",
    contactService: "Hlukové studie",
    faqCategoryId: "hluk",
    scope: [
      "Wir erstellen Lärmberechnungen für Technologien, Standorte, HVAC, Wärmepumpen und Verkehr",
      "Wir bewerten Tages- und Nachtbetriebsarten sowie Quellstandortvarianten",
      "Wir bewerten die Ergebnisse anhand von Grenzwerten und geschützten Außenbereichen",
      "Wir schlagen Lärmminderung oder betriebliche Anpassungen vor, wenn eine Grenzwertüberschreitung wahrscheinlich ist"
    ],
    whenNeeded: [
      "Eine neue Lärmquelle wird eingeführt oder die Technologie ändert sich",
      "KHS, das Bauamt oder die UVP verlangen eine Lärmstudie",
      "Eine Belegungsgenehmigung, eine Nutzungsänderung oder eine Nachbarschaftsbeschwerde ist in Bearbeitung",
      "Sie überprüfen die Wirksamkeit von Lärmschutzmaßnahmen vor der Umsetzung"
    ],
    practicalSituations: [
      "Geräuschstudie für Außenwärmepumpeneinheiten und HVAC",
      "Lärmstudie für einen Industriestandort mit Nachtbetrieb",
      "Bewertung des Verkehrslärms innerhalb eines Standorts oder einer Nebenstraße",
      "Lärmstudie als UVP oder als Anhang zur Projektdokumentation"
    ],
    docs: [
      "Projektlayout und Standorte von Lärmquellen",
      "Projektdokumentation oder technische Datenblätter der Ausrüstung",
      "Betriebsplan für Tages- und Nachtzeiten",
      "Anforderung durch KHS, das Bauamt oder die zuständige Behörde"
    ],
    outputs: [
      "Lärmstudie mit Berechnung und Bewertung",
      "Vorschlag für Lärmschutz- oder Betriebsmaßnahmen",
      "unterstützende Unterlagen für KHS, Baugenehmigung, Belegungsgenehmigung oder UVP"
    ],
    commonMistakes: [
      "Verwechslung einer Lärmstudie mit einer Lärmmessung für ein noch nicht umgesetztes Projekt",
      "Unvollständige Daten zum Nachtbetriebsmodus",
      "Blick auf den gleichzeitigen Betrieb mehrerer Lärmquellen vor Ort"
    ],
    relatedLinks: [
      {
        title: "Lärmmessung und Akustik",
        href: "/sluzby/mereni-hluku",
        description: "Feldmessung und Überprüfung des tatsächlichen Betriebslärms."
      },
      {
        title: "UVP und Projektmeldung",
        href: "/sluzby/eia-oznameni-zameru",
        description: "Eine Lärmstudie ist ein üblicher Anhang für Projekte mit Auswirkungen auf die Nachbarschaft."
      }
    ]
  },
  "odborne-posudky": {
    slug: "sluzby/odborne-posudky",
    title: "Experteneinschätzungen",
    description:
      "Gutachterliche Gutachten nach dem Luftschutzgesetz für Quellen, Technologien, betriebliche Änderungen und Genehmigungsverfahren.",
    intro:
      "Hat die Gebietskörperschaft ein Gutachten für eine Quellen- oder Technologieänderung angefordert? Wir erstellen Gutachten nach dem Luftschutzgesetz – im Zusammenhang mit Emissionsmessungen und Betriebsgenehmigungen.",
    contactService: "Odborné posudky",
    faqCategoryId: "eia",
    scope: [
      "Wir erstellen Beurteilungen für eine Quelle, einen Technologiewechsel oder eine Kapazitätsänderung",
      "Wir verknüpfen Emissionsmessungen, Ausbreitungsstudien und Betriebsanleitungen",
      "Wir bereiten Antworten auf Anfragen der Regionalbehörde oder ČIŽP vor",
      "Zusammenfassung für den Investor vor Einreichung eines Betriebsgenehmigungsantrags"
    ],
    whenNeeded: [
      "Sie planen eine neue Quelle oder einen Technologiewechsel",
      "Sie ändern Kapazität, Kraftstoff, Filterung oder Betriebsart",
      "Eine Behörde verlangt im Betriebsgenehmigungsverfahren eine Begutachtung",
      "Sie benötigen eine fachlich fundierte Stellungnahme"
    ],
    practicalSituations: [
      "Gutachten für neue Beschichtungstechnologie",
      "Beurteilung für den Wechsel einer Verbrennungsquelle oder eines Blockheizkraftwerks",
      "Gutachten zur Ergänzung eines Betriebsgenehmigungsantrags",
      "Bewertung des Zusammenhangs zwischen Emissionsmessungen und Ausbreitungsstudien"
    ],
    docs: [
      "technische Beschreibung der Quelle oder Technologie",
      "Projektdokumentation und Site-Layout",
      "Betriebserlaubnis, Bescheid oder behördlicher Antrag",
      "verfügbare Messberichte, Emissionsdaten und Betriebsplan"
    ],
    outputs: [
      "Gutachten oder Gutachten",
      "Zusammenfassung der Dokumentation und Schlussfolgerungen für Verwaltungsverfahren",
      "Empfehlungen für Folgeschritte, Messungen oder Dokumentation"
    ],
    commonMistakes: [
      "Beurteilung der Technik ohne aktuelle Betriebsdaten",
      "Fehlender Link zur Betriebsgenehmigung und Grenzwerten",
      "Unvollständige Dokumentation zu Kaminen, Filterung oder Quellenbetriebsmodus"
    ],
    relatedLinks: [
      {
        title: "Ausbreitungsstudien",
        href: "/sluzby/rozptylove-studie",
        description: "Im Anschluss an die Immissionsgutachten erfolgt häufig ein Gutachten."
      },
      {
        title: "Bedienungsanleitungen",
        href: "/sluzby/provozni-rady",
        description: "Betriebsdokumentation für eine Quelle nach Genehmigung oder Betriebsänderung."
      }
    ]
  },
  "provozni-rady": {
    slug: "sluzby/provozni-rady",
    title: "Betriebsanleitungen für Luftverschmutzungsquellen",
    description:
      "Erstellung und Aktualisierung von Betriebshandbüchern für stationäre Luftschadstoffquellen für Betreiber und regionale Behörden.",
    intro:
      "Gibt die Betriebsanleitung nach einer Filterung, Brennstoff- oder Kapazitätsänderung nicht mehr den tatsächlichen Betrieb wieder? Wir erstellen ein neues Handbuch oder eine Überarbeitung – abgestimmt auf die Genehmigungs- und Emissionsmessungen.",
    contactService: "Provozní řády",
    faqCategoryId: "eia",
    scope: [
      "Wir erstellen eine neue Betriebsanleitung für eine Luftverschmutzungsquelle",
      "Wir aktualisieren nach Technologie-, Stack- oder Notfallverfahrensänderungen",
      "Wir richten uns nach der Betriebserlaubnis und den neuesten Emissionsmessungen",
      "Wir überarbeiten auf Anfrage bei der Regionalbehörde oder ČIŽP"
    ],
    whenNeeded: [
      "Sie planen eine neue Quelle oder eine Betriebsgenehmigungsänderung",
      "Sie ändern Technologie, Brennstoff, Schornstein oder Abgasreinigungsausrüstung",
      "Die Betriebsanleitung spiegelt nicht mehr den tatsächlichen Betrieb wider",
      "Die regionale Behörde oder ČIŽP verlangt eine Überarbeitung der Dokumentation"
    ],
    practicalSituations: [
      "Aktualisierung der Bedienungsanleitung nach Filteraustausch",
      "Betriebsanleitung für eine Lackieranlage oder Prozessanlage",
      "Ergänzung der Betriebspläne nach Kapazitätsänderung",
      "Abgleich der Dokumentation mit den Ergebnissen der Emissionsmessung"
    ],
    docs: [
      "vorhandene Betriebsanleitung und Betriebserlaubnis",
      "Beschreibung von Technologie, Filterung, Schornsteinen und Notfallzuständen",
      "Emissionsmessberichte und Betriebsaufzeichnungen",
      "Anfrage oder Anforderung einer Behörde"
    ],
    outputs: [
      "Betriebsanleitung bzw. Betriebsanleitungsupdate",
      "Übersicht über die eingebauten Betriebsbedingungen",
      "Empfehlungen für Folgeaufzeichnungen und Messungen"
    ],
    commonMistakes: [
      "Bedienungsanleitung entspricht nicht der tatsächlichen Technik",
      "Fehlender Link zu gemessenen Schadstoffen und Grenzwerten",
      "Die Dokumentation befasst sich nicht mit Nicht-Standard- oder Notfallzuständen"
    ],
    relatedLinks: [
      {
        title: "Emissionsmessung",
        href: "/sluzby/mereni-emisi",
        description: "Messergebnisse bilden häufig die Grundlage für die Betriebsanleitung."
      },
      {
        title: "ISPOP und konsolidierte Betriebsaufzeichnungen",
        href: "/sluzby/ispop",
        description: "An die Betriebsaufzeichnungen und Berichterstattung schließt sich das Betriebshandbuch an."
      }
    ]
  },
  "ippc-integrovana-povoleni": {
    slug: "sluzby/ippc-integrovana-povoleni",
    title: "IPPC und integrierte Genehmigungen",
    description:
      "Unterstützende Dokumentation für integrierte Genehmigungen, IPPC-Änderungen und fachmännische Koordination von Messungen, Studien und Betriebsdokumentationen.",
    intro:
      "Ändern Sie eine Anlage mit integrierter Genehmigung? Wir konsolidieren Messungen, Studien und Betriebsvorgaben für IPPC-Verfahren oder eine Genehmigungsänderung.",
    contactService: "IPPC a integrovaná povolení",
    faqCategoryId: "eia",
    scope: [
      "Wir bereiten die Dokumentation für eine neue integrierte Genehmigung oder IPPC-Änderung vor",
      "Wir bündeln Messungen, Studien und Betriebsdaten in einem Paket",
      "Wir beschreiben die Änderung im Vergleich zur bestehenden Genehmigung und BVT",
      "Wir ergänzen die Dokumentation nach Anmerkungen der regionalen Behörde"
    ],
    whenNeeded: [
      "Sie planen eine neue integrierte Genehmigung",
      "Sie befassen sich mit einer wesentlichen oder nicht wesentlichen IPPC-Änderung",
      "Sie ändern Kapazität, Technologie oder Emissionsparameter",
      "Eine Behörde verlangt ergänzende Unterlagen"
    ],
    practicalSituations: [
      "Technologiewechsel in einer Anlage mit integrierter Genehmigung",
      "Ergänzende Messungen und Studien für einen IPPC-Änderungsantrag",
      "Konsolidierung von Betriebsdaten, Emissionsdokumentationen und Aufzeichnungen",
      "Beantwortung von Behördenkommentaren während des Verfahrens"
    ],
    docs: [
      "aktuelle integrierte Genehmigung und Beschreibung der Änderung",
      "Projektdokumentation und Prozessdiagramm",
      "Betriebsdaten, Messungen, Bilanzen und Aufzeichnungen",
      "behördliche Anfrage oder Liste der erforderlichen Ergänzungen"
    ],
    outputs: [
      "Expertendokumentation für IPPC oder integrierte Genehmigungsänderung",
      "Koordinationsübersicht über Messungen, Studien und Betriebsdaten",
      "Dokumentationsergänzungen für Verwaltungsverfahren"
    ],
    commonMistakes: [
      "Messungen getrennt behandeln und Dokumentation zulassen, ohne gemeinsame Schlussfolgerung",
      "Veraltete Daten zu Kapazität, Betriebsart oder Stacks",
      "Dokumentation ohne klare Unterscheidung zwischen Ist- und Soll-Zustand"
    ],
    relatedLinks: [
      {
        title: "Experteneinschätzungen",
        href: "/sluzby/odborne-posudky",
        description: "Technische Bewertung von Quellen- und Anlagenänderungen."
      },
      {
        title: "UVP und Projektmeldung",
        href: "/sluzby/eia-oznameni-zameru",
        description: "Bei größeren Änderungen kann IPPC dem EIA-Prozess folgen."
      }
    ]
  },
  "eia-oznameni-zameru": {
    slug: "sluzby/eia-oznameni-zameru",
    title: "UVP und Projektmeldung",
    description:
      "UVP-Projektanmeldung, Gutachteranhänge und Koordination der Dokumentation für Prüfverfahren und Folgegenehmigungen.",
    intro:
      "Bereiten Sie ein Projekt mit Auswirkungen auf die Umwelt vor? Wir bereiten die UVP-Benachrichtigung vor und bündeln die Dokumentation zu Luftqualität, Lärm und Verkehr in einem Dokument.",
    contactService: "EIA a oznámení záměru",
    faqCategoryId: "eia",
    scope: [
      "Wir bereiten die Projektanmeldung nach dem UVP-Gesetz vor",
      "Wir konsolidieren Ausbreitungs-, Lärm- und Verkehrsanhänge",
      "Wir erstellen technische Anhänge für den Investor und UVP-Praktiker",
      "Wir überarbeiten nach Kommentaren von Behörden oder der Öffentlichkeit"
    ],
    whenNeeded: [
      "Sie planen ein neues Projekt mit Auswirkungen auf die Umwelt",
      "Sie ändern Kapazität, Technologie oder Standortlayout",
      "Eine Behörde verlangt ein Prüfverfahren",
      "Für die Genehmigung müssen Sie Sachverständigenbeiträge ergänzen"
    ],
    practicalSituations: [
      "UVP-Anmeldung zur Erweiterung einer Produktionsstätte",
      "UVP-Dokumentation für Abfall- oder Energieanlagen",
      "Koordination von Lärm- und Ausbreitungsstudien für ein Projekt",
      "Dokumentationsergänzung nach behördlicher Stellungnahme"
    ],
    docs: [
      "Projektbeschreibung, Kapazität und Standort",
      "Projektdokumentation, Standortlayout und Transportlösung",
      "Technikdaten, Emissionen, Lärm und Betriebsplan",
      "behördliche Anforderungen oder frühere Meinungen"
    ],
    outputs: [
      "UVP-Projektbenachrichtigung",
      "Koordinationsübersicht der Fachanhänge",
      "Dokumentation für Prüfverfahren und Folgegenehmigungen"
    ],
    commonMistakes: [
      "Unkoordinierte technische Anhänge mit inkonsistenten Eingabedaten",
      "Unterschätzung von Nachtbetrieb, Transport oder kumulativen Auswirkungen",
      "Unvollständige Beschreibung der Varianten und Funktionsweise"
    ],
    relatedLinks: [
      {
        title: "Ausbreitungsstudien",
        href: "/sluzby/rozptylove-studie",
        description: "Immissionsbeiträge eines Projektes als gemeinsame UVP-Anlage."
      },
      {
        title: "Lärmstudien",
        href: "/sluzby/hlukove-studie",
        description: "Lärmbewertung für Technik, Verkehr und Standort."
      }
    ]
  },
  "ispop": {
    slug: "sluzby/ispop",
    title: "ISPOP und konsolidierte Betriebsaufzeichnungen",
    description:
      "ISPOP, konsolidierte Betriebsaufzeichnungen und jährliche Berichterstattung für Quellenbetreiber im Zusammenhang mit Emissionsmessungen und Betriebsgenehmigungen.",
    intro:
      "Steht die jährliche ISPOP-Berichterstattung bevor oder ist eine behördliche Inspektion fällig? Wir vergleichen konsolidierte Aufzeichnungen mit Emissionsmessungen, Genehmigungen und dem tatsächlichen Betrieb.",
    contactService: "ISPOP",
    faqCategoryId: "ispop",
    scope: [
      "Wir erstellen konsolidierte Betriebsunterlagen für eine Quelle",
      "Wir überprüfen und ergänzen die jährliche ISPOP-Berichterstattung",
      "Wir richten uns nach Emissionsmessungen, Genehmigungen und Betriebshandbüchern",
      "Wir berücksichtigen Kraftstoff-, Kapazitäts- oder Betriebsstundenänderungen"
    ],
    whenNeeded: [
      "Sie planen die jährliche Berichterstattung und konsolidierte Betriebsaufzeichnungen",
      "Sie ändern die Quell- oder Betriebsdaten",
      "Sie überprüfen den Link zu Emissionsmessungen",
      "Eine Behörde verlangt Nachträge oder Sie führen eine interne Prüfung durch"
    ],
    practicalSituations: [
      "Erstellung der jährlichen Berichterstattung nach routinemäßigen Emissionsmessungen",
      "Datenüberprüfung nach Kraftstoff- oder Betriebsstundenänderung",
      "Abgleich von Betriebserlaubnis, Messungen und Aufzeichnungen",
      "Ergänzung von Daten nach einer Anfrage oder Inspektion"
    ],
    docs: [
      "Betriebserlaubnis und Betriebsanleitung",
      "Emissionsmessberichte",
      "Betriebsstunden, Kraftstoff- oder Rohstoffverbrauch",
      "frühere Berichte und verfügbare Aufzeichnungen"
    ],
    outputs: [
      "Dokumentation für ISPOP und konsolidierte Betriebsaufzeichnungen",
      "Überprüfung der Übereinstimmung mit Betriebserlaubnis und Messungen",
      "Überblick über fehlende oder gefährdete Daten"
    ],
    commonMistakes: [
      "Kopieren alter Daten ohne Überprüfung betrieblicher Änderungen",
      "Inkonsistenz zwischen Emissionsmessungen, Genehmigung und Aufzeichnungen",
      "Übersehen von Kraftstoff-, Leistungs- oder Betriebsstundenänderungen"
    ],
    relatedLinks: [
      {
        title: "Emissionsmessung",
        href: "/sluzby/mereni-emisi",
        description: "Messergebnisse sind eine häufige Eingabe für Aufzeichnungen und Berichte."
      },
      {
        title: "Bedienungsanleitungen",
        href: "/sluzby/provozni-rady",
        description: "Die Betriebsdokumentation muss mit der tatsächlichen Betriebsweise der Quelle übereinstimmen."
      }
    ]
  },
  "ghg-overovani": {
    slug: "sluzby/ghg-overovani",
    title: "Überprüfung der Treibhausgas- und Treibhausgasemissionen",
    description:
      "Überprüfung von Treibhausgasemissionen, Treibhausgasemissionen, Überprüfung von Emissionsdaten und Berichtsdokumentation für Betreiber.",
    intro:
      "Überprüfen Sie die Treibhausgasemissionen vor der Berichterstattung? Wir bewerten Methodik, Inputs und die Verbindung zu Verbrauch, Messungen und Betriebsbilanzen.",
    contactService: "Treibhausgas",
    faqCategoryId: "ispop",
    scope: [
      "Wir überprüfen Treibhausgasemissionen und Berechnungsblätter",
      "Wir überprüfen Emissionsfaktoren, Verbrauchs- und Betriebsdaten",
      "Wir verlinken auf Emissionsmessungen und Betriebsaufzeichnungen",
      "Wir erstellen vor der Meldungsabgabe eine Unstimmigkeitsübersicht"
    ],
    whenNeeded: [
      "Sie planen eine Berichterstattung über Treibhausgasemissionen",
      "Sie müssen Berechnungen oder Emissionsdaten überprüfen",
      "Sie verändern Technik, Kraftstoff oder Betriebsdaten",
      "Ein Investor, Wirtschaftsprüfer oder eine Behörde verlangt eine Prüfung"
    ],
    practicalSituations: [
      "Überprüfung der Berechnung der Treibhausgasemissionen",
      "Überprüfung der Eingabedaten vor der Berichterstattung",
      "Verknüpfung von Treibhausgasdaten mit Emissionsmessungen und Betriebsbilanzen",
      "Vorbereitung der Dokumentation für die Prüfung oder den Investor"
    ],
    docs: [
      "Berechnungsmethodik und Eingabedaten",
      "Kraftstoff- und Rohstoffverbrauch sowie Betriebsbilanzen",
      "Emissionsmessberichte und Betriebsaufzeichnungen",
      "Berichterstattungs- oder Prüfungspflicht"
    ],
    outputs: [
      "Überprüfung oder Überprüfung von Emissionsdaten",
      "Überblick über Eingaben, Methodik und festgestellte Abweichungen",
      "Dokumentation für die Treibhausgasberichterstattung"
    ],
    commonMistakes: [
      "Veraltete Emissionsfaktoren oder Berechnungsmethoden",
      "Inkonsistenz zwischen Verbrauchs- und Betriebsaufzeichnungen",
      "Fehlende Begründung der Quelldaten"
    ],
    relatedLinks: [
      {
        title: "ISPOP und konsolidierte Betriebsaufzeichnungen",
        href: "/sluzby/ispop",
        description: "In den Berichtsagenden werden häufig Betriebsdaten und Bilanzen ausgetauscht."
      },
      {
        title: "Emissionsmessung",
        href: "/sluzby/mereni-emisi",
        description: "Messergebnisse unterstützen die Überprüfung der Emissionsdaten."
      }
    ]
  },
  "bezpecnostni-listy": {
    slug: "sluzby/bezpecnostni-listy",
    title: "Sicherheitsdatenblätter und Kennzeichnung chemischer Substanzen",
    description:
      "Überprüfung von Sicherheitsdatenblättern, Kennzeichnung von chemischen Stoffen und Gemischen, Etiketten, internen Behältern und Links zu Gesundheit und Sicherheit am Arbeitsplatz.",
    intro:
      "Sicherheitsdatenblätter müssen der Lagerung und Handhabung der Stoffe vor Ort entsprechen. Wir überprüfen die Dokumentation und Kennzeichnung und schlagen bei Lücken Überarbeitungen vor.",
    contactService: "Bezpečnostní listy",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "Überarbeitung von Sicherheitsdatenblättern und deren Verfügbarkeit am Arbeitsplatz",
      "Etiketten auf internen Behältern, Lagern und Arbeitsplätzen",
      "Konsistenz von Lagerung und PSA mit Blattinformationen",
      "Dokumentation für Schulungen und interne Betriebsanweisungen"
    ],
    whenNeeded: [
      "neue chemische Stoffe oder Gemische im Einsatz",
      "unklare Sicherheitsdatenblätter, Etiketten oder Lagerungsvorschriften",
      "Vorbereitung auf Inspektion oder internes Audit",
      "Bedarf an praktischer Dokumentation für die Mitarbeiterschulung"
    ],
    practicalSituations: [
      "Überprüfung der Etiketten auf internen Behältern",
      "Überarbeitung des Sicherheitsdatenblattes für ein Chemielager",
      "Vorbereitung der Dokumentation für die Mitarbeiterschulung",
      "Angleichung der Betriebsvorschriften für chemische Stoffe"
    ],
    docs: [
      "Liste chemischer Stoffe und Gemische",
      "Sicherheitsdatenblätter und Etiketten",
      "Beschreibung der Lagerung und Verwendung im Betrieb",
      "interne Verfahren, Betriebsvorschriften oder Inspektionsanforderungen"
    ],
    outputs: [
      "Befundübersicht für Sicherheitsdatenblätter und Kennzeichnung",
      "Empfehlungen für Etiketten-, Lagerungs- und interne Verfahrensüberarbeitungen",
      "Dokumentation für Schulungen oder interne Aufzeichnungen"
    ],
    commonMistakes: [
      "Sicherheitsdatenblätter stehen den Mitarbeitern nicht in praxistauglicher Form zur Verfügung",
      "Innenbehälter nicht korrekt beschriftet",
      "Die Lagerung entspricht nicht den in den Sicherheitsdatenblättern angegebenen Risiken"
    ],
    relatedLinks: [
      {
        title: "Schulung zum Chemikalienrecht",
        href: "/sluzby/skoleni-chemicke-legislativy",
        description: "An Sicherheitsdatenblätter und Kennzeichnung schließt sich die praktische Schulung an."
      },
      {
        title: "Chemische Substanzen im Einsatz",
        href: "/sluzby/chemicke-latky",
        description: "Festlegung von Regeln für Nutzung, Lagerung und Betriebsverantwortung."
      }
    ]
  },
  "chemicke-latky": {
    slug: "sluzby/chemicke-latky",
    title: "Chemische Substanzen im Einsatz",
    description:
      "Praktische Hilfestellungen zum Umgang mit chemischen Stoffen im Betrieb, Lagerung, Kennzeichnung, Regeln für Mitarbeiter und Links zum Arbeitsschutz.",
    intro:
      "Wir bewerten chemische Stoffe am Ort der Lagerung, Umfüllung und Verwendung. Wir bereiten Regeln für Schichtleiter vor, die auf der tatsächlichen Handhabung basieren und nicht nur auf Inventartabellen.",
    contactService: "Chemické látky v provozu",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "Kartierung von Stoffen und Gemischen von der Anlieferung bis zum Arbeitsplatz",
      "Regeln für Handhabung, Umfüllen und Lagerung",
      "Link zu Sicherheitsdatenblättern und Arbeitsschutz",
      "Verantwortungsgestaltung und Dokumentation für die Bedienerschulung"
    ],
    whenNeeded: [
      "Ausweitung der Verwendung chemischer Substanzen oder Gemische",
      "Vorbereiten eines Ladens, Betriebs oder von Arbeitsplätzen",
      "Unsicherheiten bei der Kennzeichnung, Handhabung oder Verantwortlichkeiten",
      "Vorbereitung von Schulungen oder Reaktion auf Inspektionsergebnisse"
    ],
    practicalSituations: [
      "Festlegung von Regeln für ein Lager für chemische Stoffe",
      "Überprüfung der Mischungsverwendung in der Produktion oder Wartung",
      "Vorbereitung der Mitarbeiter auf den sicheren Umgang mit chemischen Stoffen",
      "Angleichung von Sicherheitsdatenblättern, Etiketten und Arbeitsabläufen"
    ],
    docs: [
      "Liste der im Betrieb verwendeten Stoffe und Gemische",
      "Sicherheitsdatenblätter, Etiketten und Lagerinventar",
      "Beschreibung der Arbeitstätigkeiten und Lagerorte",
      "B. interne Regeln, Auditfeststellungen oder Inspektionsanforderungen"
    ],
    outputs: [
      "Empfehlungen zur sicheren Verwendung und Lagerung chemischer Substanzen",
      "Überblick über Schwachstellen in der Kennzeichnung und den Betriebsvorschriften",
      "Dokumentation für Schulungen, interne Verfahren oder Inspektionen"
    ],
    commonMistakes: [
      "Chemische Substanzen werden nur auf dem Papier angesprochen, ohne Bezug zum tatsächlichen Betrieb",
      "Den Mitarbeitern fehlen klare Regeln zum Umfüllen und Etikettieren",
      "Lagerung passt nicht zu Risiken und Betriebsmodus"
    ],
    relatedLinks: [
      {
        title: "Sicherheitsdatenblätter",
        href: "/sluzby/bezpecnostni-listy",
        description: "Sicherheitsdatenblätter sind der Ausgangspunkt für Betriebsvorschriften."
      },
      {
        title: "Schulung zum Chemikalienrecht",
        href: "/sluzby/skoleni-chemicke-legislativy",
        description: "Durch Schulungen werden Regeln für die Mitarbeiter in die Praxis umgesetzt."
      }
    ]
  },
  "mereni-vibraci": {
    slug: "sluzby/mereni-vibraci",
    title: "Vibrationsmessung",
    description:
      "Akkreditierte Schwingungsmessung an Arbeitsplätzen für Berufseinstufung, Arbeitssicherheit und KHS-Anforderungen. Handwerkzeuge, Maschinen, Transportgeräte.",
    intro:
      "Stelleneinstufung oder eine KHS-Anfrage zum Thema Vibrationen? Wir messen die Exposition an Werkzeugen und Maschinen auf der Grundlage tatsächlicher Abläufe – Bericht für KHS sowie Gesundheit und Sicherheit am Arbeitsplatz.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "Wir messen HAV – Hand-Arm-Vibrationen von Handwerkzeugen und Maschinen",
      "Wir beurteilen Ganzkörperschwingungen von Maschinen, Fördergeräten und Fahrzeugen",
      "Wir bewerten die Gefährdung auf der Grundlage tatsächlicher Abläufe und Schichtmuster",
      "Bei Grenzwertüberschreitungen schlagen wir Jobrotation oder technische Maßnahmen vor"
    ],
    whenNeeded: [
      "Sie benötigen eine Jobkategorisierung oder ein Update",
      "KHS oder ein internes Arbeitsschutzaudit erfordern eine Schwingungsmessung",
      "Sie führen neue Technologien ein oder ändern Arbeitsabläufe",
      "Sie überprüfen Mitarbeiterbeschwerden oder messen die Wirksamkeit"
    ],
    practicalSituations: [
      "Vibrationsmessung an Schleifmaschinen und Druckluftwerkzeugen in der Produktion",
      "Vibrationsmessung für Maschinenbediener und Handhabungsgeräte",
      "Schwingungsbeurteilung bei Wartungs- oder Bauarbeiten",
      "Dokumentation zur Aktualisierung der Jobkategorisierung"
    ],
    docs: [
      "Beschreibung der Arbeitsabläufe und Schichtpläne",
      "Liste der verwendeten Werkzeuge und Maschinen",
      "Arbeitsplatzgestaltung und Anzahl der exponierten Arbeitnehmer",
      "KHS-Anforderung oder interne Auditdokumentation"
    ],
    outputs: [
      "Schwingungsmessbericht mit Auswertung",
      "Dokumentation zur Berufseinstufung und zum Arbeitsschutz",
      "Empfehlungen für technische und organisatorische Maßnahmen"
    ],
    commonMistakes: [
      "Messung ohne Berücksichtigung der tatsächlichen Belichtungsdauer und Schichtmuster",
      "Vibration mit Lärm oder einem anderen Faktor am Arbeitsplatz verwechseln",
      "Unvollständige Beschreibung der verwendeten Werkzeuge und Vorgänge"
    ],
    relatedLinks: [
      {
        title: "Messung der Arbeitsplatzumgebung",
        href: "/sluzby/pracovni-prostredi",
        description: "Umfassende Hygienemessungen inklusive Lärm, Staub und Chemikalien."
      },
      {
        title: "Schweißereien und Metallverarbeitung",
        href: "/provozy-a-technologie/svarovny",
        description: "Vibrationen, Lärm, Staub und Chemikalien in Schweißereien."
      }
    ]
  },
  "mereni-osvetleni": {
    slug: "sluzby/mereni-osvetleni",
    title: "Beleuchtungsmessung",
    description:
      "Messung der Arbeitsplatzbeleuchtung für KHS, Arbeitsplatzkategorisierung und Arbeitssicherheit. Kunst- und Tageslicht, Büros und Produktionshallen.",
    intro:
      "Belegungsgenehmigung, KHS-Anfrage oder ein neuer Arbeitsplatz? Wir messen Kunst- und Tageslichtbeleuchtung entsprechend den visuellen Anforderungen – Leistung für KHS, Berufseinstufung und Arbeitssicherheit.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "Wir messen Kunst- und Tageslichtbeleuchtung am Arbeitsplatz",
      "Wir bewerten die Bedingungen nach Art der Aktivität und visuellen Anforderungen",
      "Wir begutachten Hallen, Labore, Lager und Verwaltungsbereiche",
      "Wir schlagen Leuchten- oder Layoutanpassungen vor, wenn die Pegel nicht ausreichen"
    ],
    whenNeeded: [
      "Sie benötigen eine Jobkategorisierung oder einen neuen Arbeitsplatz",
      "KHS oder Belegungsgenehmigung erfordern eine Beleuchtungsmessung",
      "Sie ändern das Layout, die Technologie oder die Beleuchtungsart",
      "Sie gehen auf Beschwerden über unzureichende Beleuchtung ein"
    ],
    practicalSituations: [
      "Beleuchtungsmessung in einer Produktionshalle nach Technologiewechsel",
      "Beleuchtungsbewertung für Büros und Besprechungsräume",
      "Beleuchtungsmessung in einem Labor oder Reinraum",
      "Dokumentation für die Belegungsgenehmigung oder den Umbau des Arbeitsplatzes"
    ],
    docs: [
      "Arbeitsplatzgestaltung und Tätigkeitsbeschreibung",
      "Beleuchtungsart und Arbeitsplatzgestaltung",
      "Schichtmuster und Anzahl der Arbeiter an den Bahnhöfen",
      "KHS-Anforderung oder Projektdokumentation"
    ],
    outputs: [
      "Lichtmessbericht mit Auswertung",
      "Dokumentation zur Berufseinstufung und zum Arbeitsschutz",
      "Empfehlungen für Beleuchtungs- oder Layoutanpassungen"
    ],
    commonMistakes: [
      "Messung ohne Berücksichtigung tatsächlicher visueller Anforderungen und Vorgänge",
      "Die Bewertung basiert nur auf der Konstruktion ohne Messung im Betrieb",
      "Unvollständige Beschreibung der Tätigkeitsart am Arbeitsplatz"
    ],
    relatedLinks: [
      {
        title: "Messung der Arbeitsplatzumgebung",
        href: "/sluzby/pracovni-prostredi",
        description: "Zusätzliche Faktoren der Arbeitsplatzumgebung in einer Aufgabe."
      },
      {
        title: "Mikroklimamessung",
        href: "/sluzby/mereni-mikroklimatu",
        description: "Temperatur, Luftfeuchtigkeit und Luftbewegung am Arbeitsplatz."
      }
    ]
  },
  "mereni-mikroklimatu": {
    slug: "sluzby/mereni-mikroklimatu",
    title: "Mikroklimamessung",
    description:
      "Messung mikroklimatischer Bedingungen an Arbeitsplätzen: Temperatur, Luftfeuchtigkeit, Luftbewegung. Dokumentation für KHS und Stellenkategorisierung.",
    intro:
      "Thermische Belastung, KHS-Anforderung oder Lüftungswechsel? Wir messen Temperatur, Luftfeuchtigkeit und Luftbewegung im realen Betrieb – Bericht für KHS und Auftragskategorisierung.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "Wir messen Temperatur, Luftfeuchtigkeit und Luftgeschwindigkeit am Arbeitsplatz",
      "Wir beurteilen die Bedingungen nach körperlicher Arbeitsbelastung (leicht / mittel / schwer)",
      "Wir messen in Hallen, Trocknern und Lagern mit thermischer Belastung",
      "Wir schlagen Anpassungen in den Bereichen Lüftung, Klimatisierung oder Schichtorganisation vor"
    ],
    whenNeeded: [
      "Sie benötigen eine Jobkategorisierung oder ein Update",
      "KHS reagiert auf Beschwerden über thermische Belastung",
      "Sie führen eine neue Technologie ein oder ändern die Beatmung",
      "Belegungsgenehmigung oder Betriebsmodusänderung wird durchgeführt"
    ],
    practicalSituations: [
      "Mikroklimamessung in einem Lager oder einer Produktionshalle",
      "Zustandsbeurteilung an Öfen, Trocknern und Heißbetrieben",
      "Messung bei der Einführung einer neuen Lüftung oder Klimaanlage",
      "Dokumentation zur Aktualisierung der Jobkategorisierung"
    ],
    docs: [
      "Beschreibung der Arbeitsabläufe und der körperlichen Belastung",
      "Arbeitsplatzaufteilung und Belüftungsart",
      "Schichtmuster und Anzahl der Arbeitnehmer",
      "KHS-Anforderungs- oder Reklamationsbeschreibung"
    ],
    outputs: [
      "Mikroklima-Messbericht mit Auswertung",
      "Dokumentation zur Berufseinstufung und zum Arbeitsschutz",
      "Empfehlungen für technische und organisatorische Maßnahmen"
    ],
    commonMistakes: [
      "Messung ohne Berücksichtigung der tatsächlichen körperlichen Arbeitsbelastung",
      "Beurteilung zu nur einem Zeitpunkt ohne repräsentative Betriebsart",
      "Unvollständige Beschreibung der Belüftung und Technik"
    ],
    relatedLinks: [
      {
        title: "Messung der Arbeitsplatzumgebung",
        href: "/sluzby/pracovni-prostredi",
        description: "Umfassende Messung von Risikofaktoren am Arbeitsplatz."
      },
      {
        title: "Messung von Wärme- und Kältebelastung",
        href: "/sluzby/mereni-tepelna-chladova-zatez",
        description: "Energieumsatz, Arbeitsklasse und Empfehlungen für heiße und kalte Betriebe."
      },
      {
        title: "Landwirtschaftliche Betriebe und Trockner",
        href: "/provozy-a-technologie/zemedelske-provozy",
        description: "Mikroklima, Staub und Chemikalien in der Landwirtschaft."
      }
    ]
  },
  "mereni-tepelna-chladova-zatez": {
    slug: "sluzby/mereni-tepelna-chladova-zatez",
    title: "Messung von Wärme- und Kältebelastung",
    description:
      "Autorisierte Messung von Wärme- und Kältebelastung am Arbeitsplatz: Mikroklima, Energieumsatz nach ČSN EN ISO 8996, Arbeitsklasse. Unterlagen für Hygienestation und Berufseinstufung.",
    intro:
      "Fordert die Hygienestation eine Beurteilung der Wärme- oder Kältebelastung? Wir messen mikroklimatische Parameter und Energieumsatz im realen Betrieb — Bericht mit Arbeitsklasse und Empfehlungen zu zulässigen Arbeitszeiten.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "Wir messen mikroklimatische Parameter nach der Methodik des tschechischen Gesundheitsministeriums",
      "Wir bestimmen den Energieumsatz durch Herzfrequenzmonitoring nach ČSN EN ISO 8996",
      "Wir beurteilen die Wärmedämmung der Kleidung und die körperliche Arbeitsbelastung",
      "Wir empfehlen Arbeitsklasse, zulässige Arbeitszeiten und Flüssigkeitsersatz"
    ],
    whenNeeded: [
      "Hygienestation oder Berufseinstufung erfordert Messung der Wärme- oder Kältebelastung",
      "Mitarbeiter sind Hitze an Öfen, Trocknern oder bei Außenarbeiten im Sommer ausgesetzt",
      "Betrieb in Kühlhäusern, Gefrieranlagen oder unbeheizten Hallen im Winter",
      "Sie benötigen Unterlagen für Schichtorganisation und technische Maßnahmen"
    ],
    practicalSituations: [
      "Messung der Wärmebelastung an Öfen, Trocknern und heißen Prozessen",
      "Beurteilung der Kältebelastung in Kühlhäusern und Gefrieranlagen",
      "Messung bei Außenbau- und landwirtschaftlichen Arbeiten",
      "Unterlage zur Aktualisierung der Berufseinstufung und des Arbeitsschutzes"
    ],
    docs: [
      "Beschreibung der Arbeitsvorgänge und körperlichen Belastung",
      "Arbeitsplatzplan, Belüftungsart und Kleidung",
      "Schichtmodell und Anzahl der Mitarbeiter",
      "Anforderung der Hygienestation oder Beschreibung der Beschwerde"
    ],
    outputs: [
      "Messbericht zur Wärme- oder Kältebelastung mit Bewertung",
      "Empfehlungen zur Arbeitsklasse und zulässigen Arbeitszeiten",
      "Unterlage für Berufseinstufung, Arbeitsschutz und betriebliche Maßnahmen"
    ],
    commonMistakes: [
      "Beurteilung nur nach Lufttemperatur ohne Energieumsatz",
      "Messung ohne Berücksichtigung der tatsächlichen körperlichen Belastung und Kleidung",
      "Unvollständige Beschreibung des Betriebsmodus und Schichtmodells"
    ],
    relatedLinks: [
      {
        title: "Mikroklimamessung",
        href: "/sluzby/mereni-mikroklimatu",
        description: "Einfachere Variante — Temperatur, Luftfeuchtigkeit und Luftströmung ohne Energieumsatz."
      },
      {
        title: "Messung der Arbeitsplatzumgebung",
        href: "/sluzby/pracovni-prostredi",
        description: "Umfassende hygienische Messungen einschließlich Staub, Chemikalien und Lärm."
      },
      {
        title: "Landwirtschaftliche Betriebe und Trockner",
        href: "/provozy-a-technologie/zemedelske-provozy",
        description: "Wärmebelastung, Staub und Mikroklima in der Landwirtschaft."
      }
    ]
  },
  "mereni-diisokyanatu": {
    slug: "sluzby/mereni-diisokyanatu",
    title: "Diisocyanat-Messung (MDI, TDI, HDI)",
    description:
      "Autorisierte Messung der Diisocyanat-Exposition am Arbeitsplatz: MDI, TDI, HDI und weitere. Persönliche und stationäre Probenahme für Hygienestation, Berufseinstufung und Maßnahmen zur Expositionsreduzierung.",
    intro:
      "PUR-Schäume, Lackierung oder Verklebung mit Isocyanaten? Wir messen die Exposition gegenüber MDI, TDI, HDI und weiteren Diisocyanaten im realen Betrieb — Bericht für Hygienestation, Berufseinstufung und Maßnahmenvorschläge.",
    contactService: "Měření pracovního prostředí",
    faqCategoryId: "pracovni-prostredi",
    scope: [
      "Wir messen die Diisocyanat-Exposition (MDI, TDI, HDI und weitere) mit persönlicher und stationärer Probenahme",
      "Wir konzentrieren uns auf Konzentrationsspitzen beim Sprühen, Gießen und bei heißen Prozessen",
      "Wir bewerten die Exposition gegenüber Hygienegrenzwerten und Anforderungen der Hygienestation",
      "Wir schlagen technische und organisatorische Maßnahmen zur Expositionsreduzierung vor"
    ],
    whenNeeded: [
      "Berufseinstufung oder Anforderung der Hygienestation wegen Isocyanaten",
      "PUR-Sprühen, Lackierung oder Verklebung mit Diisocyanaten im Betrieb",
      "Technologie-, Material- oder Belüftungsänderung bei reaktiven Systemen",
      "Überprüfung der Absaugung und PSA nach Beschwerde oder Kontrolle"
    ],
    practicalSituations: [
      "MDI-Messung bei PUR-Schaumproduktion und -verarbeitung",
      "TDI-Exposition in Lackierereien und bei Polyurethan-Systemen",
      "Messung bei Verklebung und Kaschierung mit isocyanathaltigen Klebstoffen",
      "Sekundäremissionen beim Erhitzen oder Schneiden ausgehärteter PUR-Materialien"
    ],
    docs: [
      "Sicherheitsdatenblätter der verwendeten Materialien und Gemische",
      "Beschreibung der Arbeitsvorgänge, Absaugung und PSA",
      "Arbeitsplatzplan und Schichtmodell",
      "Anforderung der Hygienestation oder interne Auditunterlagen"
    ],
    outputs: [
      "Diisocyanat-Messbericht mit Expositionsbewertung",
      "Unterlage für Berufseinstufung und Maßnahmen nach dem Gesundheitsschutzgesetz",
      "Empfehlungen zu technischen und organisatorischen Maßnahmen"
    ],
    commonMistakes: [
      "Exposition nur aus dem Sicherheitsdatenblatt abgeschätzt ohne Betriebsmessung",
      "Messung außerhalb der Spitzen beim Sprühen oder Gießen",
      "Keine Berücksichtigung sekundärer Emissionen bei weiterer PUR-Verarbeitung"
    ],
    relatedLinks: [
      {
        title: "Messung der Arbeitsplatzumgebung",
        href: "/sluzby/pracovni-prostredi",
        description: "Umfassende Messung von Chemikalien, Staub und weiteren Faktoren."
      },
      {
        title: "Automotive und Produktionshallen",
        href: "/provozy-a-technologie/automotive",
        description: "Isocyanate bei Lackierung, Verklebung und PUR in der Innenraumproduktion."
      },
      {
        title: "Chemische Substanzen im Betrieb",
        href: "/sluzby/chemicke-latky",
        description: "Regeln für Lagerung, Handhabung und Verantwortlichkeiten bei Chemikalien."
      }
    ]
  },
  "akusticke-posudky": {
    slug: "sluzby/akusticke-posudky",
    title: "Akustische Gutachten",
    description:
      "Akustische Gutachten und Gutachten zu Geräuschen aus Technologien, Technikräumen und Gebäudeumbauten mit Prozessbetrieb. Dokumentation für Baugenehmigung und KHS.",
    intro:
      "Sie benötigen eine akustische Begutachtung für einen Technikraum oder die Technik innerhalb eines Gebäudes? Wir bewerten Lärm für Baugenehmigungen und KHS – ein anderer Umfang als eine Nachbarschaftslärmstudie für ein Projekt.",
    contactService: "Měření hluku a akustika",
    faqCategoryId: "hluk",
    scope: [
      "Wir erstellen Gutachten für Bauumbauten oder Gebäudenutzungsänderungen",
      "Wir schlagen Schallschutz für Technikräume, HVAC und Technologien innerhalb eines Gebäudes vor",
      "Wir erstellen Stellungnahmen zur Baugenehmigung und Belegungsgenehmigung",
      "Wir verknüpfen mit Betriebsmessungen oder Akustikberechnungen"
    ],
    whenNeeded: [
      "Sie planen bauliche Veränderungen mit Auswirkungen auf den Lärm im Gebäude",
      "Die Belegungsgenehmigung bzw. Nutzungsänderung des Gebäudes ist in Bearbeitung",
      "Das Bauamt oder die KHS verlangt eine akustische Stellungnahme",
      "Vor der Umsetzung benötigen Sie einen Schallschutzentwurf"
    ],
    practicalSituations: [
      "Akustische Beurteilung für einen HLK-Anlagenraum oder Heizraum in einem Gebäude",
      "Schallschutzgutachten für eine Produktionshalle oder Technik",
      "Akustische Stellungnahme zur Gebäudenutzungsänderung",
      "Link zur Nachbarschaftslärmstudie für ein Projekt"
    ],
    docs: [
      "Projektdokumentation oder Projektbeschreibung",
      "Lagepläne und Standorte von Lärmquellen",
      "Betriebsplan und behördliche Anforderungen",
      "vorhandene Messungen oder technische Datenblätter der Geräte"
    ],
    outputs: [
      "Akustische Beurteilung mit Bewertung und Empfehlungen",
      "Gestaltung von Lärmschutzmaßnahmen",
      "Dokumentation für Baugenehmigung oder KHS"
    ],
    commonMistakes: [
      "Verwechslung einer akustischen Beurteilung mit einer Nachbarschaftslärmstudie für ein Projekt",
      "Bewertung ohne Bezug zum tatsächlichen Betriebsplan",
      "Unvollständige Projektdokumentation von Lärmquellen"
    ],
    relatedLinks: [
      {
        title: "Lärmstudien",
        href: "/sluzby/hlukove-studie",
        description: "Rechnerische Bewertung des Projekt- und Standortlärms in der Nachbarschaft."
      },
      {
        title: "Lärmmessung und Akustik",
        href: "/sluzby/mereni-hluku",
        description: "Feldmessung zur Überprüfung der tatsächlichen Bedingungen."
      }
    ]
  },
  "modelove-vypocty": {
    slug: "sluzby/modelove-vypocty",
    title: "Modellberechnungen",
    description:
      "Immissions- und Lärmmodellierungsberechnungen für Projekte, Betriebsänderungen und Technologievarianten. Dokumentation für Ausbreitungs- und Lärmstudien.",
    intro:
      "Sie müssen schnell Stapel-, Technikraum- oder Transportvarianten vergleichen? Wir führen Immissions- und Lärmmodellierungsberechnungen durch – Dokumentation für eine Studie, UVP oder Behördenberatung.",
    contactService: "Rozptylové studie",
    faqCategoryId: "rozptyl",
    scope: [
      "Wir modellieren Immissionsbeiträge aus Luftquellen und Transport vor Ort",
      "Wir erstellen Lärmberechnungen für Technologien, Standort und Straßen",
      "Wir vergleichen Betriebs- oder Quellstandortvarianten",
      "Wir bereiten Ergebnisse für eine Studie, UVP oder eine Behördenkonsultation vor"
    ],
    whenNeeded: [
      "Sie planen ein neues Projekt oder eine Quellkapazitätsänderung",
      "Sie benötigen eine Variantenbewertung des Betriebs",
      "Eine Behörde verlangt eine Immissions- oder Lärmbewertung",
      "Sie bereiten eine Ausbreitungs- oder Lärmstudie vor"
    ],
    practicalSituations: [
      "Immissionsmodellberechnung für neue Technologie vor Ort",
      "Lärmberechnung für Technikraum- oder HVAC-Standortvarianten",
      "Immissionsbeiträge für eine Deponie- oder Kesselausbreitungsstudie",
      "Dokumentation für UVP und Genehmigung"
    ],
    docs: [
      "Quelle technischer Parameter und Emissionsdaten",
      "Projektlayout und Umgebungsentwicklung",
      "Betriebsplan und Varianten",
      "Autoritätsanforderung oder Studienauftrag"
    ],
    outputs: [
      "Modellierung von Berechnungsergebnissen mit Auswertung",
      "Dokumentation für Ausbreitungs- oder Lärmuntersuchungen",
      "Variantenvergleich und Empfehlungen für die nächsten Schritte"
    ],
    commonMistakes: [
      "Berechnung ohne verifizierte Eingangsemissionsdaten",
      "Nichtberücksichtigung aller relevanten Quellen vor Ort",
      "Verwirrende Berechnung mit Feldmessung für bestehenden Betrieb"
    ],
    relatedLinks: [
      {
        title: "Ausbreitungsstudien",
        href: "/sluzby/rozptylove-studie",
        description: "Komplette Ausbreitungsstudie inklusive Modellrechnungen."
      },
      {
        title: "Lärmstudien",
        href: "/sluzby/hlukove-studie",
        description: "Lärmmodellierung für Projekte und Standorte."
      }
    ]
  },
  "imisni-dopady": {
    slug: "sluzby/imisni-dopady",
    title: "Immissions- und Lärmauswirkungen von Projekten",
    description:
      "Integrierte Immissions- und Lärmbewertung für Investitionsvorhaben, Betriebsänderungen und UVP. Streuung, Rauschen und Varianten in einem Prozess.",
    intro:
      "Beeinflusst ein Projekt sowohl die Luftqualität als auch den Lärm? Wir erstellen eine integrierte Bewertung mit denselben Daten – konsistente Dokumentation für EIA, die Gebietskörperschaft und KHS.",
    contactService: "Rozptylové studie",
    faqCategoryId: "rozptyl",
    scope: [
      "Wir bündeln Immissions- und Lärmschutzunterlagen für ein Projekt",
      "Wir modellieren Technologiestandortvarianten",
      "Wir erstellen Dokumentationen für EIA, die Regionalbehörde und KHS",
      "Wir liefern ein konsolidiertes Ergebnis für den Investor und Designer"
    ],
    whenNeeded: [
      "Ein Projekt hat gleichzeitig Auswirkungen auf die Luftqualität und den Lärm",
      "Eine Behörde verlangt eine Immissions- und Lärmbewertung",
      "Sie bereiten eine UVP oder eine Projektanmeldung vor",
      "Sie benötigen einen Variantenvergleich des Technologiestandortes"
    ],
    practicalSituations: [
      "Immissions- und Lärmbelastungen eines Industriestandortes",
      "Bewertung einer Deponie, Biogasanlage oder eines Produktionsprojekts",
      "Technologie-Standortvarianten aus Sicht der Luftqualität und des Lärms",
      "Dokumentation für UVP- und Genehmigungsverfahren"
    ],
    docs: [
      "Projektdokumentation und Site-Layout",
      "Quelle technische Parameter und Betriebsplan",
      "Projektvarianten",
      "Behördenanforderung oder Investorenbrief"
    ],
    outputs: [
      "Integrierte Immissions- und Lärmverträglichkeitsprüfung",
      "Variantenvergleich und Maßnahmenempfehlungen",
      "Dokumentation für UVP, Behörden und Investor"
    ],
    commonMistakes: [
      "Separate Behandlung von Lärm und Immissionen ohne Bezug zum gleichen Projekt",
      "Unvollständige Eingabedaten für die Modellierung",
      "Mit Blick auf Transport- oder Hilfsquellen vor Ort"
    ],
    relatedLinks: [
      {
        title: "Ausbreitungsstudien",
        href: "/sluzby/rozptylove-studie",
        description: "Immissionsmodellierung und Ausbreitungsstudien."
      },
      {
        title: "Lärmstudien",
        href: "/sluzby/hlukove-studie",
        description: "Lärmbewertung für Projekte und Standorte."
      }
    ]
  },
  "povoleni-provozu": {
    slug: "sluzby/povoleni-provozu",
    title: "Betriebsgenehmigungen einholen",
    description:
      "Dokumentation zur Erteilung oder Änderung einer Betriebserlaubnis für eine stationäre Quelle. Messungen, Gutachten, Betriebshandbücher und Behördenkontakte.",
    intro:
      "Befassen Sie sich mit der Erteilung oder Änderung einer Quellenbetriebserlaubnis? Wir schlagen den Umfang der Messungen, Beurteilungen und Betriebsanweisungen je nach Technologietyp und regionalen behördlichen Anforderungen vor.",
    contactService: "Odborné posudky",
    faqCategoryId: "eia",
    scope: [
      "Wir schlagen den Dokumentationsumfang vor der Einreichung bei der regionalen Behörde vor",
      "Wir koordinieren Emissionsmessungen, Beurteilung und Betriebsanleitung",
      "Für größere Quellen ziehen wir Links zu IPPC und ISPOP in Betracht",
      "Wir leisten technische Unterstützung bei der Ergänzung des Antrags"
    ],
    whenNeeded: [
      "Sie planen eine neue Quelle oder eine Kapazitätsänderung",
      "Nach einem Technologiewechsel benötigen Sie eine Betriebserlaubnis",
      "Eine Behörde verlangt ergänzende Unterlagen",
      "Sie ändern Kraftstoff, Filterung oder Betriebsart"
    ],
    practicalSituations: [
      "Betriebserlaubnis für eine neue Beschichtungsanlage",
      "Genehmigung des Wechsels eines Heizkessels oder Blockheizkraftwerks",
      "Dokumentationsergänzung auf Anfrage der regionalen Behörde",
      "Verbindung zwischen Emissionsmessungen und Gutachten"
    ],
    docs: [
      "Quelle der technischen Dokumentation",
      "bestehende Genehmigung oder behördlicher Antrag",
      "Betriebsplan und Emissionsdaten",
      "Projektdokumentation der Änderung"
    ],
    outputs: [
      "vorgeschlagener Dokumentationsrahmen für das Verfahren",
      "Gutachten, Messberichte oder Bedienungsanleitungen",
      "Technische Unterstützung während der Behördenberatung"
    ],
    commonMistakes: [
      "Einreichen eines Antrags ohne Messungen oder Begutachtung im geforderten Umfang",
      "Versäumnis, Technologieänderungen im Vergleich zur ursprünglichen Genehmigung zu berücksichtigen",
      "Unkoordinierte Dokumentation mehrerer Lieferanten"
    ],
    relatedLinks: [
      {
        title: "Experteneinschätzungen",
        href: "/sluzby/odborne-posudky",
        description: "Sachverständigengutachten nach dem Luftschutzgesetz."
      },
      {
        title: "Bedienungsanleitungen",
        href: "/sluzby/provozni-rady",
        description: "Betriebsanleitungen im Rahmen der Genehmigungsdokumentation."
      }
    ]
  },
  "zjistovaci-rizeni-eia": {
    slug: "sluzby/zjistovaci-rizeni-eia",
    title: "UVP-Prüfungsverfahren",
    description:
      "Sachverständigendokumentation für UVP-Prüfverfahren. Technische Inputs, Koordination von Messungen und Studien für den Investor und UVP-Praktiker.",
    intro:
      "Befindet sich ein Projekt im UVP-Prüfungsverfahren? Wir liefern termingerecht technische Inputs aus Messungen und Studien – in einer für den UVP-Anwender nutzbaren Form.",
    contactService: "EIA a oznámení záměru",
    faqCategoryId: "eia",
    scope: [
      "Wir erstellen technische Anhänge für Screening-Verfahren",
      "Wir veranlassen Emissions-, Ausbreitungs- und Lärmmessungen gemäß UVP-Auftrag",
      "Wir gleichen Daten aus Betrieb und Projekt ab",
      "Wir ergänzen nach Autoritätskommentaren während des Screenings"
    ],
    whenNeeded: [
      "Ein Projekt fällt in ein Screening-Verfahren",
      "Dabei benötigen Sie rechtzeitig technische Anhänge",
      "Sie möchten Messungen, Studien und Projekt in Einklang bringen",
      "Sie erstellen Dokumentationen für die Öffentlichkeit und Behörden"
    ],
    practicalSituations: [
      "Dokumentation für das Screening eines Industrieprojekts",
      "Technischer Input für eine Deponie, Biogasanlage oder Produktionsanlage",
      "Koordination der Immissions- und Lärmdokumentation in einem Auftrag",
      "Dokumentationsergänzung nach behördlicher Stellungnahme"
    ],
    docs: [
      "Projektbeschreibung und Projektdokumentation",
      "Dokumentation zum Ist-Zustand und Betrieb",
      "Kurzfassung des Screening-Verfahrens",
      "Zeitplan und Anforderungen des EIA-Praktikers"
    ],
    outputs: [
      "technische Dokumentation für Screening-Verfahren",
      "koordinierte Inputs aus Messungen und Studien",
      "Empfehlungen für die nächsten Schritte im UVP-Prozess"
    ],
    commonMistakes: [
      "Verspätete Lieferung der technischen Dokumentation an EIA",
      "Inkonsistenz zwischen Projekt und tatsächlichem Betrieb",
      "Getrennte Studien ohne gemeinsame Aufgabenstellung"
    ],
    relatedLinks: [
      {
        title: "UVP und Projektmeldung",
        href: "/sluzby/eia-oznameni-zameru",
        description: "Projektbenachrichtigung und Vorbereitung der UVP-Dokumentation."
      },
      {
        title: "Technische Anhänge für Anleger",
        href: "/sluzby/technicke-prilohy",
        description: "Dokumentation zur Investitions- und Projektvorbereitung."
      }
    ]
  },
  "technicke-prilohy": {
    slug: "sluzby/technicke-prilohy",
    title: "Technische Anhänge für Anleger",
    description:
      "Technische Anhänge für Investoren und Planer: Ausbreitung, Lärm, Emissionen, Transport und Links zu Genehmigungen und UVP.",
    intro:
      "Entscheiden Sie sich für den Technologiestandort, bevor Sie ihn den Behörden vorlegen? Für den Investor und Planer erstellen wir technische Anhänge zu Immissionen, Lärm und Verkehr.",
    contactService: "EIA a oznámení záměru",
    faqCategoryId: "eia",
    scope: [
      "Wir erstellen Anhänge für Machbarkeitsstudien und Projektvorbereitungen",
      "Wir bewerten Ausbreitung, Lärm, Emissionen und Transport für Projektvarianten",
      "Wir koordinieren Messungen und Studien für den Designer",
      "Wir verweisen auf UVP, Baugenehmigungen und Betriebsgenehmigungen"
    ],
    whenNeeded: [
      "Sie bereiten eine Investition vor, bevor Sie sie bei den Behörden einreichen",
      "Sie müssen das Projekt an den Umweltanforderungen ausrichten",
      "Sie vergleichen Technologiestandortvarianten",
      "Sie möchten rechtzeitig eine UVP oder eine Genehmigungsdokumentation erstellen"
    ],
    practicalSituations: [
      "Technische Anhänge für einen neuen Produktionsstandort",
      "Dokumentation für Investorentechnologie und Standortwahl",
      "Vorbereitung der Dokumentation vor der UVP-Einreichung",
      "Abstimmung des Projekts mit Messungen und Studien"
    ],
    docs: [
      "Projektdokumentation oder Machbarkeitsstudie",
      "Projektbeschreibung, Varianten und Zeitplan",
      "Dokumentation zum Ist-Zustand",
      "Anforderungen von Investoren oder Designern"
    ],
    outputs: [
      "Technische Anhänge für Investitionsentscheidungen",
      "Zusammenfassung von Messungen und Studien in nutzbarer Form",
      "Empfehlungen für die nächsten Schritte bei der Genehmigung"
    ],
    commonMistakes: [
      "Späte Einbindung der Fachdokumentation nach Projektentwurf",
      "Inkonsistenz zwischen technischen Anhängen und tatsächlichem Betrieb",
      "Mit Blick auf Transport- oder Hilfsquellen"
    ],
    relatedLinks: [
      {
        title: "UVP und Projektmeldung",
        href: "/sluzby/eia-oznameni-zameru",
        description: "UVP-Prozess und Projektbenachrichtigung."
      },
      {
        title: "Immissions- und Lärmauswirkungen von Projekten",
        href: "/sluzby/imisni-dopady",
        description: "Integrierte Projektfolgenabschätzung."
      }
    ]
  },
  "skoleni-chemicke-legislativy": {
    slug: "sluzby/skoleni-chemicke-legislativy",
    title: "Schulung zum Chemikalienrecht",
    description:
      "Praktische Schulung zu Chemikalienrecht, Sicherheitsdatenblättern, Kennzeichnung, Lagerung und Umgang mit chemischen Stoffen für Betriebe, Lager, Produktion und Labore.",
    intro:
      "Praktische Schulung zum Chemikalienrecht für den Umgang mit Stoffen und Gemischen. Wir decken Pflichten, Sicherheitsdatenblätter und Regeln zur Lagerung und Handhabung ab.",
    contactService: "Školení chemického zákona / chemické legislativy",
    heroPanelTitle: "Typische Gründe für eine Anfrage",
    scope: [
      "Grundpflichten beim Umgang mit chemischen Stoffen und Gemischen",
      "Orientierung in Sicherheitsdatenblättern und deren praktische Anwendung",
      "Kennzeichnung, Lagerung und sichere Verwendung chemischer Substanzen",
      "Bezüge zu Arbeitssicherheit, Gesundheitsschutz und Umwelt",
      "Betriebsaufzeichnungen, interne Regeln und häufige Fehler im Betrieb"
    ],
    whenNeeded: [
      "neue chemische Stoffe oder Gemische im Einsatz",
      "Vorbereitung auf eine Inspektion oder ein internes Arbeitsschutzaudit",
      "Bedarf an praktischer Dokumentation für Mitarbeiter",
      "Ausweitung von Betriebs-, Lager- oder Arbeitstätigkeiten im Zusammenhang mit Chemikalien"
    ],
    practicalSituations: [
      "Ausbildung für eine Produktionsanlage, ein Lager oder ein Labor",
      "Ausbildung für eine Lackiererei, Galvanik oder einen Automobilbetrieb",
      "Schulungen für Umweltbeauftragte, Arbeitssicherheitspersonal und Schichtleiter",
      "Schulung der Verantwortlichen für chemische Stoffe und Gemische vor Ort"
    ],
    docs: [
      "Liste der verwendeten chemischen Stoffe und Gemische",
      "Sicherheitsdatenblätter und interne Verfahren",
      "Beschreibung der Betriebs-, Lager- oder Arbeitsaktivitäten",
      "Zielgruppe und Schulungsumfang"
    ],
    outputs: [
      "Anwesenheitsliste",
      "Trainingsübersicht",
      "Abschlusszeugnis der Ausbildung",
      "Empfehlungen für interne Dokumentationsergänzungen bei Bedarf"
    ],
    commonMistakes: [
      "Schulungen werden nur formal durchgeführt, ohne Bezug zu tatsächlichen Stoffen vor Ort",
      "Sicherheitsdatenblätter sind am Arbeitsplatz nicht verfügbar",
      "Den Mitarbeitern fehlen klare Regeln für das Umfüllen und die Behälterkennzeichnung"
    ],
    relatedLinks: [
      {
        title: "Sicherheitsdatenblätter und Kennzeichnung",
        href: "/sluzby/bezpecnostni-listy",
        description: "Blatt- und Etikettenüberprüfung als Dokumentation für die Schulung."
      },
      {
        title: "Chemische Substanzen im Einsatz",
        href: "/sluzby/chemicke-latky",
        description: "Regeln zur Lagerung, Handhabung und Verantwortlichkeiten."
      },
      {
        title: "Fachartikel",
        href: "/poradna",
        description: "Praktische Artikel zur Chemikaliengesetzgebung und zum Betrieb."
      }
    ]
  }
};
