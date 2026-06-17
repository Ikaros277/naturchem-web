type InlineServicePage = {
  slug: string;
  title: string;
  intro: string;
  scope: string[];
  whenNeeded: string[];
  practicalSituations: string[];
  docs: string[];
  outputs: string[];
  commonMistakes: string[];
  relatedLinks: { title: string; href: string; description: string }[];
  faqCategoryId: string;
};

export const inlineServicePagesEn: Record<string, InlineServicePage> = {
  "mereni-emisi": {
    slug: "sluzby/mereni-emisi",
    faqCategoryId: "emise",
    title: "Emissionsmessung aus stationären Quellen",
    intro:
      "Authority request or scheduled compliance measurement? We measure emissions from a stack or vent and deliver an accredited report for operating permits, ČIŽP, the regional authority or ISPOP.",
    scope: [
      "Wir messen NOx, CO, SO₂, O₂, TOC/VOC, Partikel, HCl, Metalle und andere Bestandteile gemäß Betriebserlaubnis und Auftrag",
      "Wir beurteilen den Messpunkt, die Entlüftung und die Übereinstimmung mit der Betriebsanleitung",
      "Wir stimmen die Vorbereitung und Durchführung der Messung mit dem Betrieb ab",
      "Wir bewerten die Ergebnisse anhand von Grenzwerten, der Genehmigung und etwaigen behördlichen Anfragen"
    ],
    whenNeeded: [
      "Sie benötigen eine regelmäßige oder einmalige Messung gemäß der Verordnung Nr. 415/2012 Slg. und die Betriebserlaubnis",
      "The regional authority, ČIŽP or inspection body requires measurement",
      "Sie ändern Brennstoff, Rohstoff, Technologie oder Quellenkapazität",
      "Sie benötigen Unterlagen für eine Ausbreitungsstudie, UVP, Gutachten oder Betriebsdokumentation"
    ],
    practicalSituations: [
      "Emissionsmessung in einer Lackiererei nach Technologie- oder Filterwechsel",
      "Kesselemissionsmessung gemäß Betriebserlaubnis",
      "Messung von Blockheizkraftwerken",
      "Messung der Prozessentlüftung vor Genehmigungsänderung",
      "Messung als Dokumentation für ISPOP, Gutachten oder Ausbreitungsstudie",
      "measurement following regional authority or ČIŽP request"
    ],
    docs: [
      "Betriebserlaubnisbescheid oder Auszug aus integrierter Genehmigung/Bedienungsanleitung",
      "technische Quellenbeschreibung, Entlüftungs- und Filterdiagramme und aktuelle Betriebsart",
      "Messhistorie oder frühere Berichte (falls verfügbar)",
      "Fotos des Schlots, der Messstelle und der Zugangsbedingungen"
    ],
    outputs: [
      "Emissionsmessbericht mit Methodik und Bewertung anhand von Grenzwerten",
      "Kurzzusammenfassung zur behördlichen Beratung oder Dokumentationsergänzung",
      "Empfehlungen für die nächsten Schritte (Wiederholungsmessung, Technologieanpassung, Folgestudien)"
    ],
    commonMistakes: [
      "Messung im nicht repräsentativen Betrieb (Geringelast, atypischer Betrieb, Wartungszustand)",
      "Unklarer Messpunkt oder Inkonsistenz mit Zeichnungen",
      "Fehlende Betriebsdaten zu Kraftstoffen, Materialien oder aktueller Betriebsart",
      "Benachrichtigungsfristen oder Standortbedingungen wurden übersehen"
    ],
    relatedLinks: [
      {
        title: "ISPOP- und Betriebsaufzeichnungen",
        href: "/sluzby/ispop",
        description: "Konsolidierte Betriebsaufzeichnungen, Emissionsdaten und Link zur Jahresberichterstattung."
      },
      {
        title: "Gutachten und Bedienungsanleitungen",
        href: "/sluzby/odborne-posudky",
        description: "Technische Bewertung der Quelle, Betriebsgenehmigung und Dokumentationsaktualisierungen."
      },
      {
        title: "Ausbreitungsstudien",
        href: "/sluzby/rozptylove-studie",
        description: "Folgebewertung des Quellenimmissionsbeitrags im Projektumfeld."
      }
    ]
  },
  "mereni-hluku": {
    slug: "sluzby/mereni-hluku",
    faqCategoryId: "hluk",
    title: "Lärmmessung und Akustik",
    intro:
      "Lärmbeschwerde, Belegungsgenehmigung oder behördliche Auflage? Wir führen Feldmessungen und akustische Berechnungen nach Lärmquellen und Schutzgebieten in der Nachbarschaft durch.",
    scope: [
      "Wir messen LAeq und LAFmax während des normalen Betriebs im Feld",
      "Wir beurteilen Verkehrs- und Techniklärm vor Ort",
      "Wir überprüfen die Wirksamkeit von Lärmschutzmaßnahmen nach deren Umsetzung",
      "Wir messen Lärm von Klimaanlagen, Wärmepumpen und Technikräumen"
    ],
    whenNeeded: [
      "Die Baugenehmigung bzw. Nutzungsgenehmigung ist in Bearbeitung",
      "Sie bearbeiten eine Lärmbeschwerde aus dem Betrieb",
      "Sie benötigen eine Lärmstudie für eine UVP oder eine Projektänderung",
      "Sie bewerten den Lärm einer Wärmepumpe, Heizungs-, Lüftungs- und Klimatechnik, Kühlung oder eines Industriestandorts"
    ],
    practicalSituations: [
      "Lärmmessung zur Belegungsgenehmigung oder Nutzungsänderung",
      "Geräuschstudie für eine Wärmepumpe, HVAC oder ein Kühlsystem",
      "Lärmstudie für einen Industriestandort mit Tag- und Nachtbetrieb",
      "Überprüfung einer Lärmbeschwerde durch Technik oder Transport vor Ort",
      "Akustische Beurteilung als UVP oder Baugenehmigungsanlage"
    ],
    docs: [
      "Standorte der Lärmquellen und Betriebsplan",
      "bauaufsichtliche bzw. KHS-Anforderung",
      "Anordnung der nächstgelegenen geschützten Siedlung, Transport und Tag-/Nachtbetriebsmodus"
    ],
    outputs: [
      "Lärmmessbericht",
      "akustische Aussage zu Technologien innerhalb eines Gebäudes",
      "Lärmstudie mit Maßnahmenempfehlungen"
    ],
    commonMistakes: [
      "Messung zu einem ungeeigneten Zeitpunkt oder ohne Berücksichtigung der Betriebsart",
      "Verwirrende Messung und rechnerische Studie für ein neues Projekt",
      "Unvollständige Beschreibung der Lärmquellen und des Betriebsplans"
    ],
    relatedLinks: [
      {
        title: "HVAC, Kühlung und Wärmepumpen",
        href: "/provozy-a-technologie/tepelna-cerpadla-vzt",
        description: "Lärm durch Außengeräte, Technik, Belegungsgenehmigung und Nachbarschaftsbeschwerden."
      },
      {
        title: "Ausbreitungsstudien",
        href: "/sluzby/rozptylove-studie",
        description: "Nachfolgende Luftqualitätsbewertung für Industrie- und Verkehrsprojekte."
      },
      {
        title: "UVP und Projektmeldung",
        href: "/sluzby/eia-oznameni-zameru",
        description: "Koordination der Lärmstudie mit anderen Genehmigungsunterlagen."
      }
    ]
  },
  "pracovni-prostredi": {
    slug: "sluzby/pracovni-prostredi",
    faqCategoryId: "pracovni-prostredi",
    title: "Messung der Arbeitsplatzumgebung",
    intro:
      "Müssen Sie die Stellenkategorisierung aktualisieren oder haben Sie eine KHS-Anfrage erhalten? Wir messen Lärm, Staub, Chemikalien, Mikroklima, Beleuchtung und Vibrationen im Betrieb – Ergebnisse für KHS, Arbeitsplatzkategorisierung sowie Gesundheit und Sicherheit am Arbeitsplatz.",
    scope: [
      "Wir messen Lärm, Staub, Chemikalien, Vibrationen, Mikroklima und Beleuchtung je nach Betriebs- und Schichtplan",
      "Wir beurteilen die Belastung in Schweißereien, Lackierereien, Hallen und Reinräumen",
      "Wir bewerten Ergebnisse im Kontext von Grenzen und tatsächlicher Arbeitsbelastung",
      "Wir erstellen Dokumentationen für die Berufseinstufung, den Arbeitsschutz und die KHS-Beratung"
    ],
    whenNeeded: [
      "Sie benötigen eine Jobkategorisierung oder ein Update",
      "KHS verlangt eine Messung der Arbeitsplatzumgebung",
      "Sie ändern die Technologie oder die Arbeitsplatzgestaltung",
      "Belegungsfreigabe, internes Arbeitsschutzaudit bzw. Überprüfung der Absaugung und technischer Maßnahmen sind in Bearbeitung"
    ],
    practicalSituations: [
      "Messung der Arbeitsplatzumgebung in einer Schweißerei während der Aktualisierung der Jobkategorisierung",
      "Staubmessung am Arbeitsplatz nach Technik- oder Absaugwechsel",
      "Luftchemische Messung am Arbeitsplatz während der Beschichtung, Reinigung oder Produktion",
      "Mikroklima-, Beleuchtungs- oder Vibrationsnachweis für Arbeitssicherheit und KHS",
      "Dokumentation zur Belegungsfreigabe oder Hygienestationsbesichtigung"
    ],
    docs: [
      "Beschreibung der Arbeitsabläufe und Schichtpläne",
      "Sicherheitsdatenblätter der verwendeten Stoffe",
      "Arbeitsplatzlayout und Quellstandorte",
      "Informationen zu Absaugung, Technologie, Schutzausrüstung und Anzahl der exponierten Arbeitnehmer"
    ],
    outputs: [
      "Messberichte mit Auswertung",
      "Dokumentation zur Berufseinstufung und zum Arbeitsschutz",
      "Empfehlungen für organisatorische und technische Maßnahmen"
    ],
    commonMistakes: [
      "Messung ohne Berücksichtigung von Schichtmustern und tatsächlichen Abläufen",
      "Veraltete Kategorisierung nach Technologiewechsel",
      "Unvollständige Sicherheitsdatenblätter oder Arbeitsplatzbeschreibung"
    ],
    relatedLinks: [
      {
        title: "Vibrationsmessung",
        href: "/sluzby/mereni-vibraci",
        description: "Hand-Arm- und Ganzkörpervibration."
      },
      {
        title: "Beleuchtungsmessung",
        href: "/sluzby/mereni-osvetleni",
        description: "Arbeitsplatzbeleuchtung für KHS und Arbeitsplatzkategorisierung."
      },
      {
        title: "Mikroklimamessung",
        href: "/sluzby/mereni-mikroklimatu",
        description: "Temperatur, Luftfeuchtigkeit und Luftbewegung."
      },
      {
        title: "Lärmmessung und Akustik",
        href: "/sluzby/mereni-hluku",
        description: "Lärm am Arbeitsplatz, Belegungsgenehmigung, HLK- und Technologiequellen."
      },
      {
        title: "Schweißereien und Metallverarbeitung",
        href: "/provozy-a-technologie/svarovny",
        description: "Staub, Metalle, NOx, Ozon, Lärm und lokale Absaugung."
      },
      {
        title: "Lackierereien und Oberflächenbehandlung",
        href: "/provozy-a-technologie/lakovny",
        description: "Chemikalien, VOC, technische Datenblätter und Extraktion von Beschichtungsanlagen."
      }
    ]
  },
  "rozptylove-studie": {
    slug: "sluzby/rozptylove-studie",
    faqCategoryId: "studie",
    title: "Ausbreitungsstudien",
    intro:
      "Hat die regionale Behörde oder die UVP eine Ausbreitungsstudie angefordert? Wir modellieren Immissionsbeiträge aus Quellen und Transport – Dokumentation für den Investor, Planer und die Behörde.",
    scope: [
      "Wir modellieren den Immissionsbeitrag stationärer Quellen und des Transports vor Ort",
      "Wir bewerten betriebliche Varianten und technische Maßnahmen",
      "Wir bewerten die Auswirkungen auf die umliegende Entwicklung",
      "Wir erstellen Studien für Kessel, Deponien, Recycling, Biogas, Glashütten und Lackierereien"
    ],
    whenNeeded: [
      "Sie planen ein neues Projekt oder eine Betriebserweiterung",
      "Die regionale Behörde oder die UVP verlangt eine Ausbreitungsstudie",
      "Sie müssen technische Lösungsvarianten vergleichen",
      "Sie ändern die Quellen-, Kapazitäts-, Kraftstoff-, Transport- oder Emissionsparameter"
    ],
    practicalSituations: [
      "Ausbreitungsstudie für eine neue oder veränderte Luftverschmutzungsquelle",
      "Ausbreitungsstudie für eine Deponie, Recyclinganlage oder Kompostieranlage",
      "Begutachtung eines Kessels, einer Lackiererei, einer Biogasanlage oder einer Glashütte",
      "Variantenbewertung von Kapazität, Brennstoff, Stapel oder Transportlast",
      "Studie als UVP, Gutachten oder Betriebsgenehmigungsanlage"
    ],
    docs: [
      "Quellparameter und Emissionsdaten",
      "Betriebspläne und Transport vor Ort",
      "Projektlayout und Kartendokumentation",
      "Schornsteinhöhe, Rauchgastemperatur und -geschwindigkeit, technische Datenblätter zur Filterung und frühere Emissionsmessungen"
    ],
    outputs: [
      "Ausbreitungsstudie mit Schlussfolgerungen und Empfehlungen",
      "Variantenbewertung (falls Bestandteil des Briefings)",
      "Dokumentation für den Investor, Designer und die Behörde"
    ],
    commonMistakes: [
      "Veraltete Emissionsdaten oder Betriebspläne",
      "Studie ohne Variantenbewertung zur Kapazitätsänderung",
      "Unzureichende Karten- und Transportdokumentation"
    ],
    relatedLinks: [
      {
        title: "Emissionsmessung",
        href: "/sluzby/mereni-emisi",
        description: "Tatsächliche Emissionsdaten für die Quelle, Entlüftungsöffnung oder Technologie."
      },
      {
        title: "UVP und Projektmeldung",
        href: "/sluzby/eia-oznameni-zameru",
        description: "Verbindung zwischen Ausbreitungsstudie und Screening-Verfahren und Genehmigung."
      },
      {
        title: "Abfall, Deponien und Recycling",
        href: "/provozy-a-technologie/odpady-recyklace",
        description: "Typische Projekte mit Transport, Staub, Immissionen und Kapazitätsänderungen."
      }
    ]
  },
  "eia-posudky-poradenstvi": {
    slug: "sluzby/eia-posudky-poradenstvi",
    faqCategoryId: "eia",
    title: "UVP, Bewertungen, Betriebshandbücher und IPPC",
    intro:
      "UVP, Begutachtung, Messung und Betriebshandbuch aus einer Hand? Wir koordinieren die Genehmigungsschritte, damit die Daten für die regionale Behörde konsistent sind.",
    scope: [
      "Wir koordinieren die UVP – Meldung, Prüfungsverfahren, technische Anhänge",
      "Wir veranlassen Gutachten und besorgen Betriebsgenehmigungen",
      "Wir erstellen Betriebsanleitungen und IPPC-Änderungen",
      "Wir überprüfen ISPOP, konsolidierte Aufzeichnungen und Treibhausgasemissionen"
    ],
    whenNeeded: [
      "Sie planen ein neues Projekt oder eine Kapazitätsänderung",
      "Das UVP-Prüfungsverfahren ist im Gange oder Sie ergänzen nach behördlichen Stellungnahmen",
      "Sie ändern die Technik, die Betriebserlaubnis, die Betriebsanleitung oder die integrierte Genehmigung",
      "Sie beschäftigen sich mit jährlichen ISPOP-, konsolidierten Aufzeichnungen oder Treibhausgasberichten"
    ],
    practicalSituations: [
      "EIA-Projektbenachrichtigung wegen Kapazitätsänderung",
      "Luftsachverständige Beurteilung bei Technologie- oder Betriebsgenehmigungsänderungen",
      "Betriebsanleitung der Luftverschmutzungsquelle nach Modus- oder Filterwechsel",
      "IPPC integrierte Genehmigungsänderung und Koordinierung von Sachverständigenanhängen",
      "ISPOP, konsolidierte Betriebsaufzeichnungen oder Treibhausgasberichte verknüpft mit Betriebsdaten"
    ],
    docs: [
      "Projektbeschreibung und Prozessdiagramm",
      "Standortlayout und Transport",
      "bestehende Entscheidungen, Stellungnahmen, integrierte Genehmigung oder Betriebserlaubnis",
      "Emissions-, Lärm-, Transport- und Betriebsdaten einschließlich verfügbarer Berichte"
    ],
    outputs: [
      "Gutachten oder technische Stellungnahme",
      "Bedienungsanleitung oder Update",
      "UVP-Projektbenachrichtigung, IPPC-, ISPOP- oder GHG-Dokumentation",
      "Strukturierte Reaktion auf Autoritätskommentare"
    ],
    commonMistakes: [
      "Unkoordinierte Lärm- und Ausbreitungsstudien in der UVP",
      "Veraltete Bedienungsanleitung nach Technologiewechsel",
      "Unvollständige Antwort auf Autoritätskommentare"
    ],
    relatedLinks: [
      {
        title: "Ausbreitungsstudien",
        href: "/sluzby/rozptylove-studie",
        description: "Quellen- und Verkehrsimmissionsbeitrag als gemeinsame UVP und Genehmigungsanhang."
      },
      {
        title: "Lärmmessung und Lärmstudien",
        href: "/sluzby/hlukove-studie",
        description: "Lärm durch Technik, Verkehr, Heizungs-, Lüftungs- und Klimatechnik und Industriestandorte."
      },
      {
        title: "Experteneinschätzungen",
        href: "/sluzby/odborne-posudky",
        description: "Eigenständige Details zu Expertenbewertungen für Quellen und Genehmigungen."
      }
    ]
  }
};
