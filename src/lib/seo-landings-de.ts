export type SeoLanding = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading?: string; paragraphs: string[] }[];
  serviceHref: string;
  contactService: string;
  oboryHref?: string;
};

export const seoLandings: SeoLanding[] = [
  {
    slug: "mereni-emisi-kotelen",
    title: "Emissionsmessungen an Kesselanlagen und Verbrennungsquellen",
    metaDescription:
      "Emissionsmessungen an Kesselanlagen, Brennern und Blockheizkraftwerken. Berichte für Betreiber, die Tschechische Umweltinspektion und Betriebsgenehmigungen.",
    h1: "Emissionsmessungen an Kesselanlagen und Verbrennungsquellen",
    intro:
      "Wir führen periodische und betriebliche Emissionsmessungen von Kesselanlagen, Gas- und Ölbrennern, Biomassequellen und Blockheizkraftwerken durch. Der Geltungsbereich richtet sich nach der Betriebserlaubnis und dem tatsächlichen Quellenregime.",
    sections: [
      {
        paragraphs: [
          "Wir messen typischerweise NOx, CO, SO₂, O₂, Feinstaub und andere Parameter, wie in der Genehmigung vorgeschrieben. Das Ergebnis ist ein Bericht, der für betriebliche Entscheidungen, behördliche Anforderungen und ISPOP-Nachverfolgungen verwendet werden kann.",
          "Wir unterstützen Betreiber bei der Erstellung von Begleitdokumenten, der Auswahl eines repräsentativen Betriebsregimes und der Kommunikation mit Luftschutzbehörden."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/kotelny"
  },
  {
    slug: "mereni-emisi-lakoven",
    title: "Emissionsmessungen in Lackierereien und Oberflächenbehandlungen",
    metaDescription:
      "VOC/TOC- und Partikelemissionsmessungen aus Lackierstraßen, Abgaskaminen und Filtern. Berichte für Betreiber und Behörden.",
    h1: "Emissionsmessungen in Lackierereien und Oberflächenbehandlungen",
    intro:
      "Bei der Lackiertechnologie befassen wir uns mit VOC/TOC, Partikeln und verwandten Parametern aus Abgaskaminen und Filteranlagen. Messungen sind mit Betriebsregeln und Leitungsregime verknüpft.",
    sections: [
      {
        paragraphs: [
          "Wir beurteilen den Messort, wählen überwachte Stoffe aus und führen die Feldarbeiten unter repräsentativen Betriebsbedingungen durch.",
          "Die Ergebnisse dienen der operativen Entscheidungsfindung, Aktualisierung der Dokumentation und Diskussionen mit der Baubehörde, der tschechischen Umweltinspektion oder der Regionalbehörde."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/lakovny"
  },
  {
    slug: "mereni-emisi-bioplynovych-stanic",
    title: "Emissionsmessungen an Biogasanlagen und Kraft-Wärme-Kopplung",
    metaDescription:
      "Emissionsmessungen an Biogasanlagenmotoren und Blockheizkraftwerken. Terminplanung, Berichte und Verknüpfung mit Betreiberpflichten.",
    h1: "Emissionsmessungen an Biogasanlagen und Blockheizkraftwerken",
    intro:
      "Bei Biogasanlagen und Blockheizkraftwerken befassen wir uns mit der Messung der Motoremissionen, dem Betriebsmodus, der Messmeldung und der Verknüpfung mit den Verpflichtungen gegenüber der tschechischen Umweltinspektion und anderen Behörden.",
    sections: [
      {
        paragraphs: [
          "Wir helfen bei der Messplanung, der Erstellung der Begleitdokumentation und der Auswertung der Ergebnisse für den Betrieb und die Genehmigungsdokumentation.",
          "Bei Bedarf erstellen wir auch Ausbreitungs- und Lärmstudien oder UVP-Unterlagen für betriebliche Änderungen."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/bioplyn-biometan"
  },
  {
    slug: "mereni-emisi-drevozpracujicich-provoze",
    title: "Emissionsmessungen bei holzverarbeitenden Betrieben",
    metaDescription:
      "Emissionsmessungen von Sägewerken, Trocknern, Biomassekesselanlagen und Prozessabgaskaminen in Holzverarbeitungsbetrieben.",
    h1: "Emissionsmessungen bei holzverarbeitenden Betrieben",
    intro:
      "In Holzverarbeitungsbetrieben messen wir Emissionen aus der Verbrennung von Biomasse, Trocknern, Prozessabgaskaminen und verwandten Quellen. Wir befassen uns auch mit der Staubbelastung und der Arbeitsplatzumgebung.",
    sections: [
      {
        paragraphs: [
          "Den Messumfang leiten wir aus der Technologie, dem Brennstoff und den behördlichen bzw. Investorenanforderungen ab.",
          "Wir bereiten Ausgaben für Betriebsgenehmigungen, regionale Hygienestationen, regionale Behörden und den internen Arbeitsschutz vor."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/drevozpracujici"
  },
  {
    slug: "mereni-emisi-susaren",
    title: "Emissionsmessungen an Trocknern",
    metaDescription:
      "Emissionsmessungen von Biomassetrocknern und Prozessquellen. Gutachten für Betreiber und Genehmigungsverfahren.",
    h1: "Emissionsmessungen an Trocknern",
    intro:
      "Für Trockner und Technologien mit Verbrennung oder Ableitung gasförmiger Emissionen bieten wir Emissionsparametermessungen unter repräsentativen Betriebsbedingungen an.",
    sections: [
      {
        paragraphs: [
          "Wir befassen uns in der Regel mit Quellen in landwirtschaftlichen und holzverarbeitenden Betrieben, einschließlich der Verbindung zu Staub- und Arbeitsplatzumgebungsmessungen.",
          "Das Projekt umfasst häufig die Erstellung von Begleitdokumenten für die Behörde und einen Plan für regelmäßige Messungen."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/zemedelske-provozy"
  },
  {
    slug: "mereni-hluku-tepelneho-cerpadla-vzt",
    title: "Geräuschmessungen für Wärmepumpen und HVAC",
    metaDescription:
      "Geräuschmessungen von Außenwärmepumpeneinheiten, HVAC- und Kühlgeräten. Gutachten und Studien für Belegungsgenehmigungen und Behörden.",
    h1: "Geräuschmessungen für Wärmepumpen und HVAC",
    intro:
      "Wir messen den Lärm von Außenwärmepumpengeräten, HLK-Anlagen, Kühlern und Hilfstechnologien. Die Ausgänge dienen der Belegungsgenehmigung, dem Bauverfahren und der Lösung von Nachbarschaftsbeschwerden.",
    sections: [
      {
        paragraphs: [
          "Wir bewerten den Quellenstandort, das Betriebsregime und mögliche Lärmminderungsmaßnahmen.",
          "Bei Bedarf erstellen wir eine Lärmstudie oder ein bauakustisches Gutachten."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    oboryHref: "/provozy-a-technologie/tepelna-cerpadla-vzt"
  },
  {
    slug: "mereni-pracovniho-prostredi-kategorizace-praci",
    title: "Messungen der Arbeitsumgebung zur Jobkategorisierung",
    metaDescription:
      "Arbeitsplatzfaktormessungen zur Arbeitsplatzkategorisierung, regionale Hygienestation und Arbeitsschutz. Staub, chemische Substanzen, Lärm, Mikroklima.",
    h1: "Messungen der Arbeitsumgebung zur Jobkategorisierung",
    intro:
      "In Produktions- und Betriebshallen messen wir Arbeitsplatzfaktoren zur Berufseinstufung, Arbeitsschutzdokumentation und Gespräche mit der Hygienestation.",
    sections: [
      {
        paragraphs: [
          "Typischerweise befassen wir uns mit Staub, chemischen Substanzen, Lärm, Beleuchtung, Mikroklima und Vibrationen unter realen Betriebsbedingungen.",
          "Wir erstellen Berichte mit Empfehlungen für organisatorische und technische Maßnahmen."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí"
  },
  {
    slug: "rozptylova-studie-povoleni",
    title: "Ausbreitungsstudie für Betriebsgenehmigung und UVP",
    metaDescription:
      "Immissions-Ausbreitungsstudie für Betriebsgenehmigungen, Quellenänderungen oder UVP. Bevollmächtigte Person, Modellierung und Unterlagen für Behörden.",
    h1: "Ausbreitungsstudie für Betriebsgenehmigung",
    intro:
      "Wir erstellen Ausbreitungsstudien der Immissionsbeiträge von Quellen für Betriebsgenehmigungen, Technologieänderungen, UVP oder Gespräche mit Behörden. Die Studie wird von einer bevollmächtigten Person im entsprechenden Umfang durchgeführt.",
    sections: [
      {
        paragraphs: [
          "Wir bewerten Quellen, Meteorologie, Gelände und Betriebsvarianten. Der Output dient als fachliche Unterlage für die Landesbehörde, die tschechische Umweltinspektion, die Baubehörde oder die UVP.",
          "Wir knüpfen die Studie an Emissionsmessungen, Betriebsregeln und bestehende Projektdokumentation an."
        ]
      }
    ],
    serviceHref: "/sluzby/rozptylove-studie",
    contactService: "Rozptylové studie"
  },
  {
    slug: "odborny-posudek-zdroj-znecistovani",
    title: "Gutachten zu einer Luftschadstoffquelle",
    metaDescription:
      "Gutachten nach dem Luftschutzgesetz — Betriebsänderung, Genehmigung, Technologie. NATURCHEM bevollmächtigte Person.",
    h1: "Gutachten zu einer Luftschadstoffquelle",
    intro:
      "Wir erstellen Gutachten für Betriebsänderungen, neue Quellen, Genehmigungsaktualisierungen oder behördliche Anforderungen. Das Gutachten wird von einer bevollmächtigten Person nach Gesetz Nr. 201/2012 Sb. erstellt.",
    sections: [
      {
        paragraphs: [
          "Wir bewerten technische und emissionsbezogene Zusammenhänge der Quelle, schlagen den Umfang von Messungen oder Modellierung vor und erstellen einen Output für Verwaltungsverfahren.",
          "Typischerweise knüpfen wir das Gutachten an Emissionsmessungen, Ausbreitungsstudien oder Betriebsdokumentation an."
        ]
      }
    ],
    serviceHref: "/sluzby/odborne-posudky",
    contactService: "Odborné posudky"
  },
  {
    slug: "ispop-rocni-hlaseni-emise",
    title: "ISPOP — Jahresmeldung und Emissionsbetriebsaufzeichnungen",
    metaDescription:
      "ISPOP, Betriebsaufzeichnungen und jährliche Emissionsmeldung. Eingaben aus Messungen, Berichtsprüfung und Anbindung an Betreiberpflichten.",
    h1: "ISPOP und jährliche Emissionsmeldung",
    intro:
      "Wir helfen bei Betriebsaufzeichnungen, der jährlichen Emissionsmeldung in ISPOP und der Prüfung von Emissionsberichten. Wir knüpfen die Arbeit an Emissionsmessungen und Quellendokumentation an.",
    sections: [
      {
        paragraphs: [
          "Wir prüfen die Vollständigkeit der Daten, die Übereinstimmung mit Messungen und der Betriebsgenehmigung. Für ausgewählte Pflichten stellen wir eine bevollmächtigte Prüfung sicher.",
          "Geeignet für Betreiber nach einer Kontrolle, Technologieänderung oder bei Übernahme einer neuen Quelle."
        ]
      }
    ],
    serviceHref: "/sluzby/ispop",
    contactService: "ISPOP"
  },
  {
    slug: "mereni-emisi-dieselagregat",
    title: "Emissionsmessungen von Dieselaggregaten und Notstromquellen",
    metaDescription:
      "Emissionsmessungen von Dieselaggregaten, Notstromquellen und Bereitschaftsbetrieb. Bevollmächtigte Messung und Bericht für Behörden.",
    h1: "Emissionsmessungen von Dieselaggregaten und Notstromquellen",
    intro:
      "Wir führen einmalige Emissionsmessungen von Dieselaggregaten und Notstromquellen durch, einschließlich Vorbereitung der ISPOP-Messungsanmeldung. Messungen werden von einer bevollmächtigten Person durchgeführt.",
    sections: [
      {
        paragraphs: [
          "Typischerweise messen wir NOx, CO, Feinstaub und weitere Parameter gemäß Genehmigung und Quellentyp.",
          "Der Output dient Betriebsregeln, Betriebsgenehmigungen und der jährlichen Emissionsmeldung."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí"
  },
  {
    slug: "autorizovana-osoba-mereni-emisi",
    title: "Bevollmächtigte Person für Emissionsmessungen in Tschechien",
    metaDescription:
      "Einmalige Emissionsmessungen dürfen nur von einer bevollmächtigten Person durchgeführt werden. NATURCHEM — akkreditiertes Labor Nr. 1599 mit Emissionsbefugnis.",
    h1: "Bevollmächtigte Person für Emissionsmessungen",
    intro:
      "NATURCHEM ist akkreditiertes Labor Nr. 1599 und bevollmächtigte Person für einmalige Emissionsmessungen, Ausbreitungsstudien und Gutachten nach dem Luftschutzgesetz.",
    sections: [
      {
        paragraphs: [
          "Prüfen Sie beim Anbieter den Befugnisumfang, akkreditierte Methoden und Erfahrung mit Ihrem Quellentyp — Kesselanlage, Lackiererei, Biogas, Prozessabluft.",
          "Wir liefern einen vollständigen Bericht, ISPOP-Messungsanmeldung und Unterlagen für Behörden."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí"
  },
  {
    slug: "mereni-prasnosti",
    title: "Staubmessungen am Arbeitsplatz und im Betrieb",
    metaDescription:
      "Staubmessungen — einatembare und alveolengängige Fraktion, Arbeitsumfeld und Arbeitsplatzkategorisierung. NATURCHEM akkreditiertes Labor Nr. 1599.",
    h1: "Staubmessungen am Arbeitsplatz",
    intro:
      "NATURCHEM misst Staub im Arbeitsumfeld einschließlich einatembarer und alveolengängiger Fraktionen. Die Ergebnisse dienen der Hygienestation, Arbeitsplatzkategorisierung, dem Arbeitsschutz und technischen Maßnahmen.",
    sections: [
      {
        paragraphs: [
          "Wir messen an ausgewählten Arbeitsplätzen nach tatsächlichen Betriebsabläufen und Schichtmodellen. Bei Schüttgütern und Technologien mit Absaugung bewerten wir auch die Wirksamkeit von Schutzmaßnahmen.",
          "Der Bericht ist für die Hygienestation, Aktualisierung der Arbeitsplatzkategorisierung und interne Arbeitsschutzdokumentation verwendbar."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí"
  },
  {
    slug: "mereni-tezkych-kovu-emise",
    title: "Schwermetallmessungen in Rauchgasen und Arbeitsluft",
    metaDescription:
      "Schwermetallmessungen in Emissionen stationärer Quellen und in der Arbeitsluft. Akkreditierter Umfang des NATURCHEM-Labors.",
    h1: "Schwermetallmessungen",
    intro:
      "Im akkreditierten Umfang des NATURCHEM-Labors messen wir Schwermetalle in Emissionen stationärer Quellen und in der Arbeitsluft. Typischerweise As, Cd, Cr, Ni, Pb, Hg und weitere Metalle gemäß Genehmigung oder Hygienestation.",
    sections: [
      {
        paragraphs: [
          "Bei Emissionen sichern wir Probenahme in flüssigen Sorptionsmitteln und analytische Auswertung. Im Arbeitsumfeld messen wir die Exposition an Schweiß-, Schleif- oder Metallbearbeitungsplätzen.",
          "Der Output ist ein Bericht mit Bewertung gegenüber Grenzwerten oder Unterlage für die Arbeitsplatzkategorisierung."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    oboryHref: "/provozy-a-technologie/svarovny"
  },
  {
    slug: "podklady-pro-khs",
    title: "Unterlagen für die Hygienestation — Arbeitsplatz und Lärm",
    metaDescription:
      "Vorbereitung von Unterlagen für die Hygienestation (KHS): Lärm, Staub, chemische Substanzen, Mikroklima und Arbeitsplatzkategorisierung.",
    h1: "Unterlagen für die Hygienestation",
    intro:
      "Wir helfen Betreibern, Unterlagen für die Hygienestation nach einer Kontrollaufforderung, bei der Arbeitsplatzkategorisierung oder einer Technologieänderung vorzubereiten. NATURCHEM misst Arbeitsplatzfaktoren im akkreditierten Umfang.",
    sections: [
      {
        paragraphs: [
          "Typischerweise bearbeiten wir Arbeitsplatzlärm, Staub, chemische Substanzen, Mikroklima, Beleuchtung und Vibrationen. Wir schlagen den Messumfang nach Betrieb und behördlicher Anforderung vor.",
          "Berichte dienen als fachliche Unterlage für die Arbeitsplatzkategorisierung und Kommunikation mit der Hygienestation."
        ]
      }
    ],
    serviceHref: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí"
  },
  {
    slug: "podklady-pro-cizp",
    title: "Unterlagen für die Umweltinspektion und Landesbehörde",
    metaDescription:
      "Emissionsmessungen, Gutachten und Betriebsdokumentation als Unterlage für die tschechische Umweltinspektion, Landesbehörde und Betriebsgenehmigungen.",
    h1: "Unterlagen für die Umweltinspektion und Landesbehörde",
    intro:
      "Wir stellen Emissionsmessungen, Gutachten, Ausbreitungsstudien oder Betriebsregeln als Unterlagen für die tschechische Umweltinspektion, Landesbehörde oder Verwaltungsverfahren über Betriebsgenehmigungen bereit.",
    sections: [
      {
        paragraphs: [
          "Einmalige Emissionsmessungen führt eine bevollmächtigte Person durch. Wir knüpfen die Arbeit an die Betriebsgenehmigung, Kontrollaufforderung oder Technologieänderung an.",
          "Wir bereiten Outputs so vor, dass sie in der Kommunikation mit Behörden verwendbar sind — einschließlich ISPOP und jährlicher Emissionsmeldung, falls erforderlich."
        ]
      }
    ],
    serviceHref: "/sluzby/mereni-emisi",
    contactService: "Měření emisí"
  }
];

export function getSeoLanding(slug: string): SeoLanding | undefined {
  return seoLandings.find((l) => l.slug === slug);
}
