/** Reference page example groups — accordion like services and industries. */

import type { ReferenceExampleGroup } from "@/lib/reference-example-groups";

export const referenceExampleGroupsEn: ReferenceExampleGroup[] = [
  {
    id: "mereni-emisi",
    title: "Emissionsmessungen",
    intro:
      "Kesselanlagen, Lackierereien, Biogas und Kraft-Wärme-Kopplung – Berichte zur Einhaltung und Kommunikation mit Behörden.",
    exampleIds: ["lak-automotive-emise", "bps-emise", "bps-serie-emise", "plyn-kotelna-emise"]
  },
  {
    id: "pracovni-prostredi",
    title: "Messungen der Arbeitsplatzumgebung",
    intro: "Produktionshallen, Schweißereien und Exposition am Arbeitsplatz – unterstützende Dokumentation für KHS und Arbeitsplatzkategorisierung.",
    exampleIds: ["hala-pp", "svarovna-pp"]
  },
  {
    id: "hluk-akustika",
    title: "Lärm und Akustik",
    intro: "Außengeräte, HVAC und Technik in der Nähe von Wohngebieten – Messungen und Lärmstudien.",
    exampleIds: ["tcp-hluk", "vzt-hluk-studie"]
  },
  {
    id: "studie-posudky",
    title: "Studien und Gutachten",
    intro: "Streuung, Lärm und kombinierte Bewertung von Projekten vor Genehmigungsverfahren.",
    exampleIds: ["rozptyl-kotelna", "kompost-studie"]
  },
  {
    id: "eia-povolovani",
    title: "UVP und Genehmigung",
    intro: "Industrielle und landwirtschaftliche Projekte und Technologieänderungen – Meldungen und Anhänge für Behörden.",
    exampleIds: ["eia-lak", "slevarna-eia", "zjistovaci-zemedelstvi"]
  },
  {
    id: "evidence-dokumentace",
    title: "Aufzeichnungen und Betriebsdokumentation",
    intro: "ISPOP-, Treibhausgas- und Betriebsregeln, wenn sich Kapazität oder betriebliche Verpflichtungen ändern.",
    exampleIds: ["provozni-rad-odpady", "ispop-vice", "ghg-overovani"]
  }
];
