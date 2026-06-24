export type ServiceGroupItem = {
  title: string;
  href: string;
  text: string;
};

export type ServiceGroup = {
  id: string;
  title: string;
  /** What the group covers and how customers use it. */
  intro: string;
  items: ServiceGroupItem[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "mericke-sluzby",
    title: "Akkreditierte und autorisierte Messungen",
    intro:
      "Benötigen Sie einen Bericht für eine Behörde oder Ihren Betrieb? Wir bieten Feldmessungen von Emissionen, Lärm, Arbeitsplatzumgebung und anderen Parametern an – mit Ergebnissen für die regionale Hygienestation, die tschechische Umweltinspektion oder die regionale Behörde.",
    items: [
      {
        title: "Messungen der Arbeitsplatzumgebung",
        href: "/sluzby/pracovni-prostredi",
        text: "Staub, chemische Substanzen, Lärm, Mikroklima, Beleuchtung, Vibration. Berufseinstufung, regionale Hygienestation."
      },
      {
        title: "Messung von Wärme- und Kältebelastung",
        href: "/sluzby/mereni-tepelna-chladova-zatez",
        text: "Mikroklima, Energieumsatz nach ČSN EN ISO 8996, Arbeitsklasse. Unterlage für Hygienestation und Berufseinstufung."
      },
      {
        title: "Diisocyanat-Messung (MDI, TDI, HDI)",
        href: "/sluzby/mereni-diisokyanatu",
        text: "Isocyanat-Exposition bei PUR, Lackierung und Verklebung. Persönliche und stationäre Probenahme für die Hygienestation."
      },
      {
        title: "Lärmmessung und Akustik",
        href: "/sluzby/mereni-hluku",
        text: "Feldlärmmessungen, Bewertung der Auswirkungen auf Umgebung, Betrieb und Technologien."
      },
      {
        title: "Emissionsmessungen aus stationären Quellen",
        href: "/sluzby/mereni-emisi",
        text: "Kesselanlagen, Lackierereien, Blockheizkraftwerke, Prozessabgaskamine. NOx, CO, TOC/VOC, PM."
      },
      {
        title: "Vibrationsmessungen",
        href: "/sluzby/mereni-vibraci",
        text: "Hand-Arm- und Ganzkörpervibration. Berufseinstufung und Arbeitssicherheit und Gesundheitsschutz."
      },
      {
        title: "Beleuchtungsmessungen",
        href: "/sluzby/mereni-osvetleni",
        text: "Arbeitsplatzbeleuchtung für regionale Hygienestation, Arbeitsplatzkategorisierung und Belegungsfreigabe."
      },
      {
        title: "Mikroklimamessungen",
        href: "/sluzby/mereni-mikroklimatu",
        text: "Temperatur, Luftfeuchtigkeit und Luftströmung an Arbeitsplätzen."
      }
    ]
  },
  {
    id: "studie-vypocty",
    title: "Studien, Berechnungen und Modellierung",
    intro:
      "Planen Sie eine betriebliche Änderung oder ein neues Projekt? Wir erstellen Ausbreitungs-, Lärm-, Modellrechnungen und damit verbundene Auswirkungen einschließlich Varianten für Behörden und Investoren.",
    items: [
      {
        title: "Ausbreitungsstudien",
        href: "/sluzby/rozptylove-studie",
        text: "Immissionsbeiträge aus Quellen, Betriebsvarianten, Leistungsänderungen, Belege für Behörden."
      },
      {
        title: "Lärmstudien",
        href: "/sluzby/hlukove-studie",
        text: "Computergestützte Lärmbewertung von Technologien, Standorten, Transport- und Bauprojekten."
      },
      {
        title: "Akustische Berichte",
        href: "/sluzby/akusticke-posudky",
        text: "Aussagen zum Lärm von Technik, Technikräumen und Betriebsquellen in Gebäuden."
      },
      {
        title: "Modellberechnungen",
        href: "/sluzby/modelove-vypocty",
        text: "Immissions- und Lärmmodellierung für Projekte und Betriebsvarianten."
      },
      {
        title: "Immissions- und Lärmauswirkungen von Projekten",
        href: "/sluzby/imisni-dopady",
        text: "Verknüpfung von Luft- und Lärmstudien für ein Projekt oder eine betriebliche Änderung."
      }
    ]
  },
  {
    id: "povolovaci-podklady",
    title: "Genehmigung und amtliche Dokumentation",
    intro:
      "Technologie- oder Quellengenehmigung ändern? Wir erstellen Gutachten, Betriebsvorschriften und Begleitdokumente für integrierte Genehmigungen – für die Regionalbehörde und das tschechische Umweltinspektorat.",
    items: [
      {
        title: "Gutachten",
        href: "/sluzby/odborne-posudky",
        text: "Stellungnahmen nach dem Luftschutzgesetz, Technikänderungen, Kommunikation mit Behörden."
      },
      {
        title: "Betriebsregeln",
        href: "/sluzby/provozni-rady",
        text: "Aktualisierung und Vorbereitung der Betriebsvorschriften für Luftverschmutzungsquellen."
      },
      {
        title: "Quelle Betriebserlaubnis",
        href: "/sluzby/povoleni-provozu",
        text: "Belege für die Erteilung oder Änderung einer Betriebserlaubnis für ortsfeste Quellen."
      },
      {
        title: "IPPC- und Genehmigungsänderungen",
        href: "/sluzby/ippc-integrovana-povoleni",
        text: "Integrierte Vermeidung und Kontrolle der Umweltverschmutzung, umfassende Begleitdokumentation für den Betrieb."
      }
    ]
  },
  {
    id: "eia-investice",
    title: "UVP und Investitionsvorbereitung",
    intro:
      "Bereiten Sie eine Investition mit EIA vor? Wir koordinieren die Projektanmeldung, das Scoping und die technischen Anhänge im Zusammenhang mit der Genehmigung.",
    items: [
      {
        title: "UVP und Projektmeldung",
        href: "/sluzby/eia-oznameni-zameru",
        text: "Erstellung von Meldungen und technischen Anhängen für Projekte mit Umweltauswirkungen."
      },
      {
        title: "UVP-Scoping",
        href: "/sluzby/zjistovaci-rizeni-eia",
        text: "Fachliche unterstützende Dokumentation und Koordinierung der Eingaben für die Scoping-Phase."
      },
      {
        title: "Technische Anhänge für Anleger",
        href: "/sluzby/technicke-prilohy",
        text: "Ausbreitung, Lärm, Transport, Emissionen und Bezug zum tatsächlichen Projektbetrieb."
      }
    ]
  },
  {
    id: "evidence-reporting",
    title: "Betriebsaufzeichnungen, Berichterstattung und gesetzgeberische Unterstützung",
    intro:
      "ISPOP-Bericht oder Datenüberprüfung stehen bevor? Wir überprüfen integrierte Aufzeichnungen zur Schadstoffberichterstattung und Treibhausgasemissionen im Zusammenhang mit Messungen und Genehmigungen.",
    items: [
      {
        title: "ISPOP und integrierte Aufzeichnungen zur Verschmutzungsberichterstattung",
        href: "/sluzby/ispop",
        text: "Jährliche Berichterstattung, integrierte Aufzeichnungen zur Schadstoffberichterstattung, Verknüpfung zu Emissionsmessungen."
      },
      {
        title: "Treibhausgase und Treibhausgase",
        href: "/sluzby/ghg-overovani",
        text: "Überprüfung der Emissionsdaten, unterstützende Dokumentation für die Treibhausgasberichterstattung."
      },
      {
        title: "Gesetzliche Unterstützung für Betreiber",
        href: "/sluzby/chemicke-latky",
        text: "Überprüfung der berechneten und gemessenen Werte, ggf. autorisierte Überprüfung."
      }
    ]
  },
  {
    id: "skoleni-podpora",
    title: "Schulung und fachliche Unterstützung",
    intro:
      "Benötigen Sie Schulungen oder klare Regeln für Chemikalien im Betrieb? Wir decken Gesetze, Sicherheitsdatenblätter, Kennzeichnung und Lagerung für Lager, Produktion und Labore ab.",
    items: [
      {
        title: "Schulung zum Chemikalienrecht",
        href: "/sluzby/skoleni-chemicke-legislativy",
        text: "Praxisnahe Schulung für Unternehmen, die mit chemischen Stoffen und Gemischen umgehen."
      },
      {
        title: "Arbeiten mit chemischen Stoffen und Gemischen",
        href: "/sluzby/chemicke-latky",
        text: "Sichere Verwendungs-, Lagerungs-, Kennzeichnungs- und Betriebsregeln für Mitarbeiter."
      },
      {
        title: "Sicherheitsdatenblätter und Kennzeichnung",
        href: "/sluzby/bezpecnostni-listy",
        text: "Orientierung in Sicherheitsdatenblättern, internen Behältern, Etiketten und Link zum Arbeitsschutz."
      }
    ]
  }
];
