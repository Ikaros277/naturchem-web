export type CaseStudy = {
  title: string;
  narrative: string;
  output: string;
};

export type CaseStudyCategory = {
  slug: string;
  title: string;
  short: string;
  serviceHref: string;
  cases: CaseStudy[];
};

export const caseStudyCategories: CaseStudyCategory[] = [
  {
    slug: "mereni-emisi",
    title: "Emissionsmessungen",
    short: "Stationäre Quellen, Kesselanlagen, Technologien.",
    serviceHref: "/sluzby/mereni-emisi",
    cases: [
      {
        title: "Emissionsmessungen in einer Glashütte",
        narrative:
          "Der Betreiber musste die Emissionen einer Prozessquelle überprüfen und unterstützende Unterlagen für Folgegespräche mit der Behörde vorbereiten. Wir beurteilten den Messort, schlugen den Messumfang vor, führten Messungen unter repräsentativen Betriebsbedingungen durch und erstellten einen Bericht mit Kommentierung der Ergebnisse.",
        output: "Emissionsmessbericht und technische Bewertung für den Betreiber."
      },
      {
        title: "Emissionsmessungen in einer Lackiererei (VOC/TOC)",
        narrative:
          "Nach einem Technologie-Upgrade mussten die Emissionseigenschaften überprüft werden. Wir haben auf Basis der Betriebsordnung den Messumfang vorgeschlagen, Feldmessungen durchgeführt und die Ergebnisse für weitere Betriebsschritte ausgewertet.",
        output: "Bericht mit Interpretation für den Betreiber und das Projektteam."
      },
      {
        title: "Kesselanlage nach Quellenmodernisierung",
        narrative:
          "Nach dem Geräteaustausch musste der Betreiber den neuen Emissionsstatus dokumentieren. Wir haben die Repräsentativität des Betriebs überprüft und Schlüsselkomponenten einschließlich Nebenparametern gemessen.",
        output: "Messbericht für die behördliche und betriebliche Entscheidungsfindung."
      }
    ]
  },
  {
    slug: "hygienicka-mereni",
    title: "Arbeitshygienische Maßnahmen",
    short: "Arbeitsumfeld, Jobkategorisierung.",
    serviceHref: "/sluzby/pracovni-prostredi",
    cases: [
      {
        title: "Arbeitsplatzumgebung in einer Schweißerei",
        narrative:
          "Der Arbeitgeber befasste sich mit der Stellenkategorisierung für mehrere Positionen. Wir haben Messszenarien nach Schichtmuster entworfen, chemische Stoffe und Lärm unter realen Betriebsbedingungen gemessen und eine Auswertung zum Arbeitsschutz erstellt.",
        output: "Arbeitsplatzfaktorberichte und unterstützende Dokumentation für die regionale Hygienestation."
      },
      {
        title: "Aktualisierung der Kategorisierung in einer Produktionshalle",
        narrative:
          "Nach einer Änderung der Arbeitsplatzgestaltung musste die Exposition neu bewertet werden. Wir haben Lärm, Mikroklima und andere Faktoren im Zusammenhang mit dem Arbeitsbetrieb gemessen.",
        output: "Unterstützende Dokumentation zur Aktualisierung interner Aufzeichnungen und zur Kommunikation mit der regionalen Hygienestation."
      },
      {
        title: "Staubbelastung an einer Brechlinie",
        narrative:
          "A technology change created a risk of increased dust exposure. Wir haben bei repräsentativen Einsätzen Personen- und Flächenmessungen durchgeführt und Abhilfemaßnahmen vorgeschlagen.",
        output: "Bericht mit Empfehlungen für organisatorische und technische Anpassungen."
      }
    ]
  },
  {
    slug: "rozptylove-studie",
    title: "Ausbreitungsstudien",
    short: "Immissionen, Betriebsvarianten.",
    serviceHref: "/sluzby/rozptylove-studie",
    cases: [
      {
        title: "Ausbreitungsstudie für die Abfallwirtschaft",
        narrative:
          "Der Investor bereitete ein Projekt vor und benötigte unterstützende Unterlagen für ein Verwaltungsverfahren. Wir haben eine Studie erstellt, die sich mit der Technologie, dem Betriebsmodus und dem Transport innerhalb des Standorts befasst.",
        output: "Ausbreitungsstudie mit Schlussfolgerungen für den Investor und die Behörde."
      },
      {
        title: "Kapazitätsvarianten für eine Produktionsanlage",
        narrative:
          "Before submitting documentation, operating variants had to be compared. Wir führten eine Varianten-Immissionsmodellierung durch und empfahlen die technisch sinnvollere Lösung.",
        output: "Studie mit Variantenvergleich zur Anlegerentscheidung."
      },
      {
        title: "Auswirkungen einer Glashütte auf die Umgebung",
        narrative:
          "Für das vorgeschlagene Projekt musste der Einfluss von Öfen auf umliegende Gebäude bewertet werden. Wir haben Immissionsbeiträge modelliert, einschließlich Betriebsszenarien und vorgeschlagener Minderungsmaßnahmen.",
        output: "Ausbreitungsstudie für Genehmigungsverfahren."
      }
    ]
  },
  {
    slug: "hlukove-studie",
    title: "Lärmstudien",
    short: "Feldarbeit, Lärmstudien, Transport.",
    serviceHref: "/sluzby/hlukove-studie",
    cases: [
      {
        title: "Lärmstudie für eine Recyclinganlage",
        narrative:
          "Der Investor musste den Tag- und Nachtbetrieb in der Nähe von Wohngebäuden beurteilen. Wir haben ein Szenariomodell entwickelt, dominante Quellen identifiziert und technische Abhilfemaßnahmen vorgeschlagen.",
        output: "Lärmstudie mit Varianten für Genehmigungsverfahren."
      },
      {
        title: "Lärm durch Handhabung und Lagerung innerhalb eines Standorts",
        narrative:
          "Der Betreiber musste den Lärm im Tages- und Nachtmodus im Vergleich zu benachbarten Gebäuden überprüfen. Wir haben Feldmessungen durchgeführt, dominante Quellen identifiziert und organisatorische und technische Maßnahmen vorgeschlagen.",
        output: "Lärmmessbericht für Gespräche mit der Behörde."
      },
      {
        title: "Lärm nach der HVAC-Installation",
        narrative:
          "Nach der Installation des Geräts musste die Lärmbelastung überprüft werden. Wir führten Feldmessungen unter vereinbarten Betriebsmodi durch und schlugen praktische Maßnahmen vor.",
        output: "Lärmmessbericht zur Belegungsgenehmigung."
      }
    ]
  },
  {
    slug: "odborne-posudky",
    title: "Gutachten",
    short: "Stellungnahmen für Behörden.",
    serviceHref: "/sluzby/odborne-posudky",
    cases: [
      {
        title: "Gutachten zu einem Technologiewechsel",
        narrative:
          "Die Behörde verlangte eine fachlich begründete Stellungnahme zur betrieblichen Änderung. Wir haben die Technologie und Emissionsbilanz analysiert und mit verfügbaren Messungen verknüpft.",
        output: "Gutachten mit empfohlenen Maßnahmen."
      },
      {
        title: "Ergänzung nach Autoritätskommentaren",
        narrative:
          "Nach der Stellungnahme der Behörde mussten technische Abschnitte schnell verfeinert werden. Wir haben Daten ergänzt, die Argumentation angepasst und die Folgedokumentation angepasst.",
        output: "Ergänzende Stellungnahme zum weiteren Verfahrensschritt."
      },
      {
        title: "Messbarkeit an mehreren Abgaskamine",
        narrative:
          "Der Betrieb umfasste mehrere Schornsteine ​​mit unklaren Messbedingungen. Wir haben die Strecken inspiziert und einen stufenweisen Messplan ohne unnötige Ausfallzeiten vorgeschlagen.",
        output: "Technische Stellungnahme und Messplan."
      }
    ]
  },
  {
    slug: "eia",
    title: "UVP",
    short: "Scoping, Studienkoordination.",
    serviceHref: "/sluzby/eia-oznameni-zameru",
    cases: [
      {
        title: "UVP für ein neues Industrieprojekt",
        narrative:
          "Das Projekt erforderte die Abstimmung mehrerer Fachbeiträge. Wir legten die Dokumentationsstrategie fest, koordinierten Studien und bereiteten die technische Argumentation für die UVP-Phase vor.",
        output: "Fachliche Begleitdokumentation für das Scoping."
      },
      {
        title: "Standorterweiterung",
        narrative:
          "Der Investor musste Lärm, Luftqualität und Verkehr in einem einzigen Prozess verbinden. Wir haben die Ausbreitungs- und Lärmstudien mit der technischen Beschreibung des Projekts abgeglichen.",
        output: "Unterstützende Dokumentation für das Scoping."
      },
      {
        title: "Antwort auf Kommentare",
        narrative:
          "Nach der Stellungnahme der Behörde musste die Dokumentation zügig ergänzt werden. Wir analysierten die Kommentare und erstellten weiterführende Fachberichte.",
        output: "Ergänzende Dokumentation zur Fortführung des Verfahrens."
      }
    ]
  },
  {
    slug: "skoleni-chemicke-legislativy",
    title: "Schulung zum Chemikalienrecht",
    short: "Chemische Stoffe, Sicherheitsdatenblätter, Betriebsvorschriften.",
    serviceHref: "/sluzby/skoleni-chemicke-legislativy",
    cases: [
      {
        title: "Mitarbeiterschulung in einem Produktionsbetrieb",
        narrative:
          "Das Unternehmen musste die Vorgehensweise bei der Verwendung chemischer Substanzen in allen Schichten harmonisieren. Wir haben Schulungen vorbereitet, die sich auf reale Aktivitäten, Sicherheitsdatenblätter, interne Behälterkennzeichnung und Lagerregeln beziehen.",
        output: "Schulungsübersicht, Anwesenheitsliste und Abschlusszertifikat."
      },
      {
        title: "Sicherheitsdatenblätter und Lagerung von Chemikalien",
        narrative:
          "Dabei ging es um die Verfügbarkeit von Sicherheitsdatenblättern, Kennzeichnung und grundlegenden Lagervorschriften. Bei den Schulungen haben wir den Schwerpunkt auf die Praxisorientierung in Datenblättern, Lagerbedingungen und Mitarbeiterpflichten gelegt.",
        output: "Praxisnahe Ausbildung für Lager-, Wartungs- und Aufsichtspersonal."
      },
      {
        title: "Einführung einer neuen chemischen Mischung in Betrieb",
        narrative:
          "Vor einem Wechsel der eingesetzten Zubereitungen mussten die Bediener geschult und Regeln für den Umgang mit der Mischung festgelegt werden. Wir haben das Sicherheitsdatenblatt, die Kennzeichnung, die persönliche Schutzausrüstung und die Betriebsverfahren abgedeckt.",
        output: "Schulung mit Empfehlungen zur Ergänzung interner Regeln."
      }
    ]
  },
  {
    slug: "dalsi",
    title: "Andere Projekte",
    short: "IPPC, Betriebsregeln, ISPOP.",
    serviceHref: "/sluzby/ippc-integrovana-povoleni",
    cases: [
      {
        title: "Aktualisierung der Betriebsregeln",
        narrative:
          "Ein Technologiewechsel erforderte eine Überarbeitung der Betriebsdokumentation. Wir haben Betriebsregime überprüft und mit aktuellen Emissionsmessungen verknüpft.",
        output: "Aktualisierte Betriebsregeln."
      },
      {
        title: "Unterstützende Dokumentation für ISPOP",
        narrative:
          "Der Betreiber musste integrierte Aufzeichnungen zur Verschmutzungsberichterstattung erstellen. Wir haben die Aktenstruktur vorbereitet und technische Daten ergänzt.",
        output: "Unterstützende Dokumentation für ISPOP."
      },
      {
        title: "Treibhausgas-Berichterstattung für eine Produktionsanlage",
        narrative:
          "Der Betreiber musste die Mess- und Berechnungsergebnisse für die Treibhausgasberichterstattung aufeinander abstimmen. Wir haben eine Datenstruktur vorgeschlagen, mit verfügbaren Berichten verknüpft und fehlende Eingaben ergänzt, um den Berichtszeitraum abzuschließen.",
        output: "Unterstützende Dokumentation für die Treibhausgasberichterstattung und interne Datenüberprüfung."
      },
      {
        title: "Überwachung rund um einen Standort",
        narrative:
          "Die Behörde verlangte eine langfristige Immissionsüberwachung. Wir haben Messorte, Häufigkeit und Auswertungsmethode vorgeschlagen.",
        output: "Überwachungsbericht."
      }
    ]
  }
];

export function getCaseStudyCategory(slug: string): CaseStudyCategory | undefined {
  return caseStudyCategories.find((c) => c.slug === slug);
}
