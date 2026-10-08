/** Reference page content — areas, segments and anonymised project examples. */

export type ReferenceArea = {
  title: string;
  description: string;
  contactService: string;
  imageSrc: string;
};

export type ReferenceExample = {
  id: string;
  title: string;
  operationType: string;
  scope: string;
  output: string;
  text: string;
  tags: readonly string[];
  href: string;
  contactService: string;
  cta: "Fordern Sie ein ähnliches Projekt an" | "Senden Sie Dokumente zur Überprüfung" | "Messung/Studie anfordern";
  documented?: boolean;
};

export const referenceEyebrow = "36 Jahre am Markt · Referenzen aus der Praxis";

export const referenceIntro =
  "In unserer 36-jährigen Marktpräsenz haben wir mit vielen führenden Unternehmen aus Industrie und Energie zusammengearbeitet.";

export const referenceCustomersIntro =
  "Unternehmen, die sich bei Messungen, Studien und behördlichen Dokumentationen auf uns verlassen – von der Automobil- und Energiebranche bis hin zum öffentlichen Sektor.";

export const referenceExamplesHeading = "Projektbeispiele aus der Praxis";

export const referenceAreasHeading = "Referenzen nach Branche und Betriebstyp";

export function getReferenceExamplesById(): Map<string, ReferenceExample> {
  return new Map(referenceExamples.map((example) => [example.id, example]));
}

export const referenceAreas: readonly ReferenceArea[] = [
  {
    title: "Industrie und Automobil",
    description:
      "Emissions- und Arbeitsplatzmessungen, Technologielärm, VOC/TOC, Betriebsdokumentation und Begleitdokumentation bei Produktionsänderungen.",
    contactService: "Měření emisí",
    imageSrc: "/hero/provozy/automotive.webp"
  },
  {
    title: "Energie, Kesselanlagen und Kraft-Wärme-Kopplung",
    description:
      "Emissionsmessungen an Kesselanlagen und Blockheizkraftwerken, Ausbreitungsstudien, Betriebsgenehmigungen, ISPOP und Betriebsregeln.",
    contactService: "Měření emisí",
    imageSrc: "/hero/provozy/kotelny.webp"
  },
  {
    title: "Lackierereien und Oberflächenbehandlung",
    description:
      "VOC/TOC- und Partikelmessungen, neue Abgaskamine, UVP, Ausbreitungsstudien und unterstützende Dokumentation für die Zulassung von Lacktechnologien.",
    contactService: "Měření emisí",
    imageSrc: "/hero/provozy/lakovny.webp"
  },
  {
    title: "Landwirtschaft und Biogas",
    description:
      "Emissionsmessungen von Biogasanlagen, UVP und Scoping, Ausbreitungsstudien, Betriebsregeln und unterstützende Dokumentation für landwirtschaftliche Standorte.",
    contactService: "Rozptylové studie",
    imageSrc: "/hero/provozy/bioplyn-biometan.webp"
  },
  {
    title: "Abfall, Recycling und Deponien",
    description:
      "Ausbreitungs- und Lärmstudien, Gutachten, UVP, Betriebsvorschriften und Kapazitätsänderungen bei Abfallentsorgungsanlagen.",
    contactService: "Rozptylové studie",
    imageSrc: "/hero/provozy/odpady-recyklace.webp"
  },
  {
    title: "Bau und Infrastruktur",
    description:
      "Lärmstudien, Lärmmessungen zur Belegungsgenehmigung, HVAC- und Technikbewertung, Begleitdokumentation für Investitionsvorhaben.",
    contactService: "Měření hluku a akustika",
    imageSrc: "/hero/provozy/stavebni-zamery.webp"
  },
  {
    title: "Öffentlicher Sektor und Gesundheitswesen",
    description:
      "Lärm- und Ausbreitungsbewertung, Arbeitsplatzmessungen, unterstützende Dokumentation für öffentliche Gebäude und Betriebe.",
    contactService: "Měření hluku a akustika",
    imageSrc: "/hero/provozy/verejne-budovy.webp"
  },
  {
    title: "Designer, Investoren und UVP",
    description:
      "Koordination von Messungen, Studien und technischen Anhängen für UVP, Betriebsgenehmigungen und Kommunikation mit Behörden.",
    contactService: "EIA a oznámení záměru",
    imageSrc: "/hero/provozy/odborne-posudky-povoleni.webp"
  }
] as const;

/** Selection of 16 anonymised examples for the website (from internal records). */
export const referenceExamples: readonly ReferenceExample[] = [
  {
    id: "lak-automotive-emise",
    title: "Lackierkabinen – TOC-Emissionsmessungen",
    operationType: "Nasslackiererei für industrielle Bauteile",
    scope: "TOC und lufttechnische Parameter an fünf Abluftöffnungen der Lackierkabinen",
    output: "Emissionsmessbericht für fünf Lackierkabinen.",
    text: "Wir haben die Emissionen an fünf Abluftöffnungen einer Nasslackiererei gemessen. Der Bericht dokumentiert TOC-Ergebnisse und lufttechnische Parameter jeder Abluftöffnung.",
    tags: ["Emissionen", "TOC", "Lackiererei"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Fordern Sie ein ähnliches Projekt an",
    documented: true
  },
  {
    id: "bps-emise",
    title: "Biogasanlage – Emissionen aus der Kraft-Wärme-Kopplung",
    operationType: "Biogasanlage / Blockheizkraftwerk",
    scope: "Emissionsmessung an einem Blockheizkraftwerk im stationären Betrieb",
    output: "Emissionsmessbericht für das Blockheizkraftwerk.",
    text: "Wir haben die Emissionen eines Blockheizkraftwerks einer Biogasanlage im stationären Betrieb gemessen. Die Ergebnisse wurden in einem Emissionsmessbericht dokumentiert.",
    tags: ["Emissionen", "Kraft-Wärme-Kopplung"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Messung/Studie anfordern",
    documented: true
  },
  {
    id: "bps-serie-emise",
    title: "Biogasanlage – zwei Blockheizkraftwerke",
    operationType: "Biogasanlage mit zwei Blockheizkraftwerken",
    scope: "Emissionsmessungen an zwei Blockheizkraftwerken einer Biogasanlage",
    output: "Emissionsmessbericht für beide Blockheizkraftwerke.",
    text: "Wir haben die Emissionen von zwei Blockheizkraftwerken einer Biogasanlage gemessen. Die Ergebnisse beider Quellen wurden in einem Bericht dokumentiert.",
    tags: ["Emissionen", "Biogas"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Fordern Sie ein ähnliches Projekt an",
    documented: true
  },
  {
    id: "plyn-kotelna-emise",
    title: "Zentrale Kesselanlage – Biomasseemissionen",
    operationType: "zentrale Kesselanlage mit zwei Biomassekesseln",
    scope: "Emissionsmessungen an zwei Kesseln für Holzbiomasse",
    output: "Emissionsmessbericht für beide Biomassekessel.",
    text: "Wir haben die Emissionen von zwei Holzbiomassekesseln einer zentralen Kesselanlage gemessen. Der Bericht dokumentiert die Ergebnisse beider Kessel.",
    tags: ["Emissionen", "Biomasse"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Messung/Studie anfordern",
    documented: true
  },
  {
    id: "hala-pp",
    title: "Automobilproduktion – Arbeitsplatzumgebung",
    operationType: "Produktionsanlage mit Montagelinien, Gießerei und Formenwartung",
    scope: "Lärm, Mikroklima und organische Stoffe an ausgewählten Arbeitsplätzen",
    output: "Separate Berichte zu Lärm-, Mikroklima- und Arbeitsplatzluftmessungen.",
    text: "In der Automobilproduktion haben wir Arbeitsplatzlärm, mikroklimatische Bedingungen und organische Stoffe gemessen. Die Ergebnisse wurden in separaten Berichten dokumentiert.",
    tags: ["Arbeitsplatzumgebung", "Mikroklima", "Lärm"],
    href: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    cta: "Fordern Sie ein ähnliches Projekt an",
    documented: true
  },
  {
    id: "svarovna-pp",
    title: "Schweißerei – Lärm am Arbeitsplatz",
    operationType: "Schweißerei / Metallverarbeitungsbetrieb",
    scope: "Lärmmessung für die Tätigkeit als Schweißer",
    output: "Mess- und Bewertungsbericht zum Lärm für die Arbeitskategorisierung.",
    text: "Wir haben den Lärm für die Tätigkeit eines Schweißers in einem Metallverarbeitungsbetrieb gemessen. Die Ergebnisse wurden für die Arbeitskategorisierung dokumentiert.",
    tags: ["Lärm", "Arbeitskategorisierung"],
    href: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    cta: "Fordern Sie ein ähnliches Projekt an",
    documented: true
  },
  {
    id: "tcp-hluk",
    title: "Wärmepumpe — Lärm in der Umgebung",
    operationType: "Bau technischer Anlagen",
    scope: "Außenlärm in einem geschützten Bereich",
    output: "Bericht zur Messung und Bewertung des Lärms der Außeneinheit.",
    text: "Wir haben den Lärm während des Betriebs der Außeneinheit einer Wärmepumpe im geschützten Außenbereich gemessen. Die Ergebnisse und Bewertung wurden in einem Bericht dokumentiert.",
    tags: ["Lärm", "Hygienebehörde"],
    href: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    cta: "Messung/Studie anfordern",
    documented: true
  },
  {
    id: "vzt-hluk-studie",
    title: "HVAC – Lärmstudie",
    operationType: "HLK-/Prozessausrüstung",
    scope: "Berechnung oder Messung von Technologielärm",
    output: "Belege für die Belegungsgenehmigung, regionale Hygienestation oder Baubehörde",
    text: "Wir haben eine Lärmbewertung der Technologie im Verhältnis zu den nächstgelegenen Gebäuden erstellt. Die Dokumentation unterstützte die Belegungsgenehmigung und Gespräche mit den Behörden.",
    tags: ["Lärm", "Hygienebehörde", "HLK"],
    href: "/sluzby/hlukove-studie",
    contactService: "Hlukové studie",
    cta: "Messung/Studie anfordern"
  },
  {
    id: "rozptyl-kotelna",
    title: "Neue Gaskesselanlage – Ausbreitungsstudie",
    operationType: "Lebensmittel-/Industriebetrieb",
    scope: "mehrere Gaskessel, Abgaskamine, Immissionsbeiträge",
    output: "Ausbreitungsstudie für das Genehmigungsverfahren",
    text: "Für eine neue Kesselanlage haben wir eine Ausbreitungsstudie mit Immissionsbeiträgen in die Umgebung erstellt. Eingaben: Abgaskamine, Betriebsmodus und Quellenparameter.",
    tags: ["Ausbreitung", "Landesamt", "UVP"],
    href: "/sluzby/rozptylove-studie",
    contactService: "Rozptylové studie",
    cta: "Messung/Studie anfordern"
  },
  {
    id: "kompost-studie",
    title: "Kompostierungsanlage – Gutachten, Ausbreitung und Lärm",
    operationType: "Kompostierungsanlage / Abfallbehandlungsanlage",
    scope: "Gutachten, Ausbreitungsstudie, Lärmstudie",
    output: "Satz unterstützender Unterlagen für das Genehmigungsverfahren",
    text: "Für eine Abfallentsorgungsanlage haben wir ein Gutachten, eine Ausbreitungsstudie und eine Lärmstudie kombiniert. Die Ergebnisse gingen in ein einziges Genehmigungsverfahren ein.",
    tags: ["Ausbreitung", "Lärm", "UVP", "Landesamt"],
    href: "/sluzby/odborne-posudky",
    contactService: "Odborné posudky",
    cta: "Messung/Studie anfordern"
  },
  {
    id: "eia-lak",
    title: "Blechlackiererei – EIA",
    operationType: "Lackiererei / Oberflächenbehandlung",
    scope: "UVP, Technologie, Emissionen, Betriebsmodus",
    output: "Projektanmeldung und Anhänge für das Genehmigungsverfahren",
    text: "Wir erstellten eine Umweltverträglichkeitsprüfung (UVP) und technische Anhänge für eine Blechlackiererei, einschließlich Emissionsangaben und Betriebsbedingungen.",
    tags: ["UVP", "Emissionen", "Landesamt"],
    href: "/sluzby/eia-oznameni-zameru",
    contactService: "EIA a oznámení záměru",
    cta: "Messung/Studie anfordern"
  },
  {
    id: "slevarna-eia",
    title: "Gießerei – Modernisierung und UVP",
    operationType: "Gießerei / Metallproduktion",
    scope: "UVP, Gutachten, Ausbreitungsstudie, Lärmstudie",
    output: "umfassende Sammlung von Genehmigungsunterlagen",
    text: "Für die Modernisierung der Gießerei haben wir UVP, Gutachten, Streuung und Lärm in einer einzigen Dokumentation für den Technologiewechsel zusammengefasst.",
    tags: ["UVP", "Ausbreitung", "Lärm", "Landesamt"],
    href: "/sluzby/eia-posudky-poradenstvi",
    contactService: "EIA a oznámení záměru",
    cta: "Messung/Studie anfordern"
  },
  {
    id: "provozni-rad-odpady",
    title: "Aktualisierte Betriebsordnung für Prüföfen",
    operationType: "Brandprüfstelle",
    scope: "Aktualisierung der Betriebsordnung zum Schutz der Luft",
    output: "Aktualisierte Betriebsordnung der Luftverschmutzungsquelle.",
    text: "Wir aktualisierten die Betriebsordnung einer Brandprüfstelle mit Prüföfen. Das Dokument beschreibt die Technologie, die Betriebsaufzeichnungen und das Vorgehen bei außergewöhnlichen Betriebszuständen.",
    tags: ["Betriebsordnung", "Luft"],
    documented: true,
    href: "/sluzby/provozni-rady",
    contactService: "Provozní řády",
    cta: "Fordern Sie ein ähnliches Projekt an"
  },
  {
    id: "ispop-vice",
    title: "ISPOP-Meldung für einen Industriestandort",
    operationType: "Industriestandort mit Kesselanlagen und Oberflächenbehandlung",
    scope: "jährliche Betriebsaufzeichnungen und Einreichung bei ISPOP",
    output: "Jahresmeldung und Bestätigung der Einreichung.",
    text: "Wir erstellten die jährlichen Betriebsaufzeichnungen der Kesselanlagen und Oberflächenbehandlung und reichten die Meldung bei ISPOP ein. Eine Systembestätigung dokumentiert die Einreichung.",
    tags: ["ISPOP", "Luft"],
    documented: true,
    href: "/sluzby/ispop",
    contactService: "ISPOP",
    cta: "Fordern Sie ein ähnliches Projekt an"
  },
  {
    id: "ghg-overovani",
    title: "Prüfung von Energiedaten und Treibhausgasberechnungen",
    operationType: "Produktionsunternehmen",
    scope: "Prüfung von Energiedaten und zugehörigen Emissionsberechnungen",
    output: "Berechnungsdatei und schriftliche Erläuterung der Datenkorrekturen.",
    text: "Wir prüften Energiedaten und zugehörige Emissionsberechnungen für eingekauften Strom. Die Arbeit umfasste eine Berechnungsdatei und eine Erläuterung der Korrekturen. Dies ist keine akkreditierte EU-ETS-Verifizierung.",
    tags: ["Treibhausgas", "Emissionsdaten"],
    documented: true,
    href: "/sluzby/ghg-overovani",
    contactService: "Treibhausgas",
    cta: "Fordern Sie ein ähnliches Projekt an"
  },
  {
    id: "zjistovaci-zemedelstvi",
    title: "Landwirtschaftlicher Standort – Scoping-Verfahren",
    operationType: "landwirtschaftlicher Standort",
    scope: "UVP / Scoping, betrieblicher und räumlicher Kontext",
    output: "Projektbenachrichtigung",
    text: "Wir haben unterstützende Unterlagen für die Rahmenplanung bei der Modernisierung der Rinderhaltung erstellt, einschließlich Kapazität und Auswirkungen auf die Umgebung.",
    tags: ["UVP", "Landesamt"],
    href: "/sluzby/zjistovaci-rizeni-eia",
    contactService: "EIA a oznámení záměru",
    cta: "Messung/Studie anfordern"
  }
] as const;
