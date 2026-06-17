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
  }
];

export function getSeoLanding(slug: string): SeoLanding | undefined {
  return seoLandings.find((l) => l.slug === slug);
}
