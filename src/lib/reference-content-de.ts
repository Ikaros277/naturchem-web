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
    title: "Autolackiererei – VOC/TOC- und Partikelmessungen",
    operationType: "Lackiererei, Automobil",
    scope: "VOC/TOC- und Partikelmessungen an Prozessabgaskaminen",
    output: "Emissionsmessbericht und unterstützende Dokumentation für die Betriebsgenehmigung/Konformitätsüberprüfung",
    text: "Wir haben die Emissionen der Lackiertechnik gemessen, einschließlich VOC/TOC und Partikel an den Abgaskaminen. Der Bericht unterstützte die Einhaltung der Betriebsbedingungen und die Kommunikation mit der Behörde.",
    tags: ["Emissionen", "VOC", "Landesamt"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Fordern Sie ein ähnliches Projekt an"
  },
  {
    id: "bps-emise",
    title: "Biogasanlage – Emissionen aus der Kraft-Wärme-Kopplung",
    operationType: "Biogasanlage / Blockheizkraftwerk",
    scope: "Emissionen von Blockheizkraftwerken, Betriebsdaten, Link zu ISPOP",
    output: "Bericht und unterstützende Dokumentation für Betriebsaufzeichnungen",
    text: "Wir haben die Emissionen von KWK-Einheiten unter einem vereinbarten Betriebsregime gemessen und die Ergebnisse mit Betriebsaufzeichnungen und ISPOP verknüpft.",
    tags: ["Emissionen", "ISPOP", "Landesamt"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Messung/Studie anfordern"
  },
  {
    id: "bps-serie-emise",
    title: "Mehrere Biogasanlagen – Reihe von Emissionsmessungen",
    operationType: "Gruppe von Biogasanlagen",
    scope: "Mehrere Standorte, mehrere Blockheizkraftwerke",
    output: "Reihe von Berichten und einheitlichen Ergebnisaufzeichnungen",
    text: "An mehreren Standorten haben wir die Emissionen von Blockheizkraftwerken nach einem einheitlichen Verfahren gemessen. Die Ergebnisse dienten der übersichtlichen Betriebsaufzeichnung im gesamten Anlagenverbund.",
    tags: ["Emissionen", "ISPOP"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Fordern Sie ein ähnliches Projekt an"
  },
  {
    id: "plyn-kotelna-emise",
    title: "Gaskesselanlage – Emissionsmessungen",
    operationType: "Kommunale / örtliche Kesselanlage",
    scope: "zwei Gaskessel, Rauchgase, Betriebsmodus",
    output: "Emissionsmessbericht",
    text: "Wir haben die Emissionen von zwei Kesseln mit repräsentativer Leistung gemessen. Der Bericht diente als Beleg für die Pflichten des Quellenbetreibers.",
    tags: ["Emissionen", "Landesamt", "Umweltinspektion"],
    href: "/sluzby/mereni-emisi",
    contactService: "Měření emisí",
    cta: "Messung/Studie anfordern"
  },
  {
    id: "hala-pp",
    title: "Produktionshalle – Messungen der Arbeitsplatzumgebung",
    operationType: "Produktionsanlage",
    scope: "Lärm, Staub, chemische Substanzen, Arbeitspositionen",
    output: "unterstützende Dokumentation für die regionale Hygienestation und Arbeitsplatzkategorisierung",
    text: "An ausgewählten Arbeitsplätzen haben wir Lärm, Staub und chemische Substanzen gemessen. Die Ergebnisse unterstützten die Arbeitsplatzkategorisierung und die Kommunikation mit der regionalen Hygienestation.",
    tags: ["Hygienebehörde", "Lärm", "Staub"],
    href: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    cta: "Fordern Sie ein ähnliches Projekt an"
  },
  {
    id: "svarovna-pp",
    title: "Schweißerei – Belastung und Lärm",
    operationType: "Schweißerei / Metallverarbeitungsbetrieb",
    scope: "Staub, Metalle, Ozon, Lärm, Vibration",
    output: "Berichte zur Beurteilung der Mitarbeiterexposition",
    text: "Wir haben Staub, Metalle, Lärm und Vibrationen in der Schweißerei gemessen. Die Berichte unterstützten den Arbeitsschutz und schlugen Maßnahmen am Arbeitsplatz vor.",
    tags: ["Hygienebehörde", "Staub", "Lärm"],
    href: "/sluzby/pracovni-prostredi",
    contactService: "Měření pracovního prostředí",
    cta: "Fordern Sie ein ähnliches Projekt an"
  },
  {
    id: "tcp-hluk",
    title: "Wärmepumpe — Lärm in der Umgebung",
    operationType: "Bau technischer Anlagen",
    scope: "Außenlärm in einem geschützten Bereich",
    output: "Messung / akustische Beurteilung und Empfehlungen für die nächsten Schritte",
    text: "Wir haben den Lärm des Außengeräts in einem geschützten Bereich gemessen. Die Ergebnisse halfen bei der Kommunikation mit den Nachbarn und bei der Planung der nächsten Schritte.",
    tags: ["Lärm", "Hygienebehörde"],
    href: "/sluzby/mereni-hluku",
    contactService: "Měření hluku a akustika",
    cta: "Messung/Studie anfordern"
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
    contactService: "Měření hluku a akustika",
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
    title: "Abfall – Betriebsregeln für eine Kapazitätsänderung",
    operationType: "Abfall / Recycling",
    scope: "Betriebsregeln, Kapazitätserhöhung, Gespräche mit der Behörde",
    output: "Betriebsdokumentation zur Genehmigung",
    text: "Wir haben Betriebsordnungen für eine Kapazitätserhöhung und Aufbereitung von Bauschutt erstellt. Die Dokumentation ging in das offizielle Verfahren.",
    tags: ["Landesamt", "Umweltinspektion", "Luft"],
    href: "/sluzby/provozni-rady",
    contactService: "Provozní řády",
    cta: "Fordern Sie ein ähnliches Projekt an"
  },
  {
    id: "ispop-vice",
    title: "Mehrere Operationen – ISPOP und Datensätze",
    operationType: "mehrere Betriebe, verschiedene Branchen",
    scope: "Luft, Abfall, Verbindung zu Emissionsmessungen",
    output: "jährliche Berichterstattung und Betriebsaufzeichnungen",
    text: "Wir erstellen jährlich integrierte Aufzeichnungen zur Verschmutzungsberichterstattung und ISPOP-Einreichungen im Zusammenhang mit Emissionsmessungen und Betriebsgenehmigungen.",
    tags: ["ISPOP", "Landesamt"],
    href: "/sluzby/ispop",
    contactService: "ISPOP",
    cta: "Fordern Sie ein ähnliches Projekt an"
  },
  {
    id: "ghg-overovani",
    title: "Treibhausgasemissionen – Überprüfung der Emissionsdaten",
    operationType: "Betrieb mit Treibhausgasverpflichtungen",
    scope: "jährliche Überprüfung, Kapazitätsänderungen, Betriebsdaten",
    output: "Verifizierungsausgaben für den Bediener",
    text: "Wir haben die jährlichen Emissionsdaten und die Begleitdokumentation für eine Kapazitätsänderung im Rahmen des Treibhausgasregimes überprüft.",
    tags: ["Treibhausgas", "ISPOP"],
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
