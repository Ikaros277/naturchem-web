import { sectors, type Sector } from "./sectors";

export const provozyNavLabelDe = "Betriebe und Technologien";

type SectorText = Pick<
  Sector,
  "title" | "description" | "serviceTags" | "factors" | "ariaLabel" | "linkHint"
>;

const DE: Partial<Record<string, SectorText>> = {
  lakovny: {
    title: "Lackierereien und Oberflächenbehandlung",
    description:
      "Für Lackierereien bearbeiten wir TOC/VOC-Messungen, Beschichtungsverbrauch, Datenblätter, Lackierkabinen, Trocknung, Strahlen, Filter, Aktivkohle, Absaugung, Betriebsanleitungen und Anbindung an Betriebsgenehmigungen.",
    serviceTags: "Emissionen, VOC/TOC, Arbeitsumfeld, Betriebsanleitung, ČIŽP, Krajs",
    factors: "VOC, TOC, TSP, Lösemittel, Absaugung, Filtration",
    ariaLabel: "Leistungen für Lackierereien anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  kotelny: {
    title: "Kesselanlagen und Verbrennungsquellen",
    description:
      "Für Kesselanlagen bearbeiten wir CO-, NOx-, O₂-, TSP- und SO₂-Messungen, ISPOP, Betriebsanleitungen und Betriebsgenehmigungen.",
    serviceTags: "Emissionen, ISPOP, Betriebsanleitung, Gutachten, ČIŽP",
    factors: "CO, NOx, O₂, TSP, SO₂, feste Brennstoffe, Gase",
    ariaLabel: "Leistungen für Kesselanlagen anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  "bioplyn-biometan": {
    title: "Biogasanlagen und Blockheizkraftwerke",
    description:
      "Für Biogas und KWK bearbeiten wir Motoremissionen, Ausbreitung, Lärm, EIA, ISPOP und Betriebsgenehmigungen.",
    serviceTags: "Emissionen, Ausbreitungsstudien, Lärmstudien, EIA, ISPOP",
    factors: "Motoremissionen, KWK, Katalysator, Methan, NOx",
    ariaLabel: "Leistungen für Biogasanlagen anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  svarovny: {
    title: "Schweißbetriebe und Metallverarbeitung",
    description:
      "In Schweißbetrieben bearbeiten wir Schweißrauch, Metalle, Lärm, Absaugung, Mikroklima und Einstufung der Arbeiten für KHS.",
    serviceTags: "Arbeitsumfeld, Emissionen, Einstufung der Arbeiten, KHS",
    factors: "Schweißrauch, Metalle, NOx, Ozon, Lärm, Staub",
    ariaLabel: "Leistungen für Schweißbetriebe anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  "odpady-recyklace": {
    title: "Recyclinganlagen, Brecher, Sortierer und Lagerflächen",
    description:
      "Für Recyclingareale bearbeiten wir Lärm, Staub, Ausbreitung, Verkehr und EIA bei Kapazitätsänderungen.",
    serviceTags: "EIA, Lärmstudien, Ausbreitungsstudien, Gutachten",
    factors: "Lärm, Staub, Verkehr, Immissionen, Kapazität",
    ariaLabel: "Leistungen für Recycling anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  "tepelna-cerpadla-vzt": {
    title: "HLK, Kühlung und Wärmepumpen",
    description:
      "Für HLK und Wärmepumpen bearbeiten wir Lärm von Außeneinheiten, Messungen, Studien und Maßnahmen vor Abnahme und bei Beschwerden.",
    serviceTags: "Lärmstudien, Lärmmessung, KHS, Bauamt",
    factors: "Lärm, HLK, Kühlung, Wärmepumpen, Nachtbetrieb",
    ariaLabel: "Leistungen für HLK anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  }
};

function localizeSector(sector: Sector): Sector {
  const text = DE[sector.id];
  if (!text) return sector;
  return {
    ...sector,
    ...text,
    typical: `${text.serviceTags}; ${text.factors}`
  };
}

export const sectorsDe: Sector[] = sectors.map(localizeSector);

export const homeSectorsDe = sectorsDe
  .filter((s) => s.homeFeatured)
  .map((s) => ({ title: s.title, href: s.href }));

export const sectorsEn = sectorsDe;
export const provozyNavLabelEn = provozyNavLabelDe;
export const homeSectorsEn = homeSectorsDe;
