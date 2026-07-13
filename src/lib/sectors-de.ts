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
      "Für Lackierereien bearbeiten wir TOC/VOC-Messungen, Beschichtungsverbrauch, Datenblätter, Lackierkabinen, Trocknung, Strahlen, Filter, Aktivkohle, Absaugung, Betriebsanleitungen und Anbindung an Betriebsgenehmigungen. Bei Betrieben mit Personal bewerten wir auch das Arbeitsumfeld – Chemikalien, Lärm, Mikroklima oder Lüftungswirksamkeit.",
    serviceTags: "Emissionen, VOC/TOC, Arbeitsumfeld, Betriebsanleitung, ČIŽP, Landesamt",
    factors: "VOC, TOC, TSP, Lösemittel, Absaugung, Filtration",
    ariaLabel: "Leistungen für Lackierereien anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  galvanovny: {
    title: "Galvanik, Strahlen und Metalloberflächenbehandlung",
    description:
      "Für Galvanik, Strahlen und Sandstrahlen bewerten wir Abluftemissionen, Staub, Metalle, HCl, Arbeitsplatzexposition und Anbindung an Betriebsgenehmigungen oder KHS-Anforderungen.",
    serviceTags: "Emissionen, Arbeitsumfeld, Fachgutachten, KHS, ČIŽP",
    factors: "Metalle, Staub, HCl, Säuren, Absaugung, Staub",
    ariaLabel: "Leistungen für Galvanik anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  svarovny: {
    title: "Schweißbetriebe und Metallverarbeitung",
    description:
      "In Schweißbetrieben bearbeiten wir Schweißrauch, Metalle, Lärm, Absaugung, Mikroklima, Beleuchtung und Einstufung der Arbeiten für KHS.",
    serviceTags: "Arbeitsumfeld, Emissionen, Einstufung der Arbeiten, KHS",
    factors: "Schweißrauch, Metalle, NOx, Ozon, Lärm, Staub",
    ariaLabel: "Leistungen für Schweißbetriebe anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  "tiskarny-textilie": {
    title: "Druckereien, Kaschierung, technische Textilien und Kleben",
    description:
      "Für Druckereien, Kaschierung und technische Textilien bearbeiten wir VOC, Chemikalien, Arbeitsluft, Lärm und Unterlagen für Investoren oder Behörden.",
    serviceTags: "Emissionen, Arbeitsumfeld, Chemikalien, UVP",
    factors: "VOC, organische Stoffe, Klebstoffe, Lösemittel, Lärm",
    ariaLabel: "Leistungen für Druckereien anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  drevozpracujici: {
    title: "Holzverarbeitung und Tischlereien",
    description:
      "Für Sägewerke, Tischlereien und Holzverarbeitung bearbeiten wir Staub, TSP, Emissionen aus Biomasseverbrennung, Lärm und Arbeitsumfeld.",
    serviceTags: "Emissionen, Arbeitsumfeld, Lärm, KHS, Landesamt",
    factors: "TSP, Staub, Lärm, Emissionen aus Biomassekesseln",
    ariaLabel: "Leistungen für Holzverarbeitung anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  sklarstvi: {
    title: "Glas- und Keramikbetriebe",
    description:
      "Für Glas- und Keramikbetriebe bearbeiten wir Ofenemissionen, Abluft, Fluoride, TSP, NOx, CO, Ausbreitung und Betriebsanleitungen.",
    serviceTags: "Emissionen, Ausbreitungsstudien, Betriebsanleitung, ČIŽP",
    factors: "Ofenquellen, Fluoride, TSP, NOx, CO, Abluft",
    ariaLabel: "Leistungen für Glasbetriebe anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  automotive: {
    title: "Automotive und Produktionslinien",
    description:
      "Für Automotive und Produktionslinien bearbeiten wir Emissionen, Chemikalien, Lärm, Arbeitsumfeld und Unterlagen für Investoren oder Behörden.",
    serviceTags: "Emissionen, Arbeitsumfeld, Chemikalien, UVP",
    factors: "VOC, Chemikalien, Lärm, Technologie, Verkehr",
    ariaLabel: "Leistungen für Automotive anzeigen",
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
      "Für Biogas und KWK bearbeiten wir Motoremissionen, Ausbreitung, Lärm, UVP, ISPOP und Betriebsgenehmigungen.",
    serviceTags: "Emissionen, Ausbreitungsstudien, Lärmstudien, UVP, ISPOP",
    factors: "Motoremissionen, KWK, Katalysator, Methan, NOx",
    ariaLabel: "Leistungen für Biogasanlagen anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  teplarny: {
    title: "Heizwerke und größere Energiequellen",
    description:
      "Für Heizwerke und größere Energiequellen bearbeiten wir Emissionsmessungen, Ausbreitungsstudien, ISPOP und Unterlagen bei Kapazitätsänderungen.",
    serviceTags: "Emissionen, Ausbreitungsstudien, ISPOP, Fachgutachten",
    factors: "NOx, CO, TSP, SO₂, mehrere Quellen, Verkehr",
    ariaLabel: "Leistungen für Heizwerke anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  krematoria: {
    title: "Krematorien und Verbrennungsöfen",
    description:
      "Für Krematorien und Verbrennungsöfen bearbeiten wir Emissionen, Messstellen, Betriebsanleitungen und Unterlagen für Luftschutzbehörden.",
    serviceTags: "Emissionen, Betriebsanleitung, Fachgutachten, ČIŽP",
    factors: "CO, NOx, TSP, organische Stoffe, Metalle",
    ariaLabel: "Leistungen für Krematorien anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  "skladky-odpady": {
    title: "Deponien und Abfallbehandlungsanlagen",
    description:
      "Für Deponien und Abfallanlagen bearbeiten wir Lärm, Staub, Verkehr, Ausbreitung und UVP bei Betriebsänderungen.",
    serviceTags: "UVP, Lärmstudien, Ausbreitungsstudien, Fachgutachten",
    factors: "Lärm, Staub, Verkehr, Gerüche, Deponiegas",
    ariaLabel: "Leistungen für Deponien anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  "odpady-recyklace": {
    title: "Recyclinganlagen, Brecher, Sortierer und Lagerflächen",
    description:
      "Für Recyclingareale bearbeiten wir Lärm, Staub, Ausbreitung, Verkehr und UVP bei Kapazitätsänderungen.",
    serviceTags: "UVP, Lärmstudien, Ausbreitungsstudien, Gutachten",
    factors: "Lärm, Staub, Verkehr, Immissionen, Kapazität",
    ariaLabel: "Leistungen für Recycling anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  kompostarny: {
    title: "Kompostieranlagen und biologische Abbaustellen",
    description:
      "Für Kompostierung bearbeiten wir Gerüche, Emissionen, Lärm, Ausbreitung und Genehmigungsunterlagen.",
    serviceTags: "UVP, Ausbreitungsstudien, Lärmstudien, Emissionen",
    factors: "Gerüche, Ammoniak, Lärm, Verkehr, Staub",
    ariaLabel: "Leistungen für Kompostierung anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  "stavebni-zamery": {
    title: "Bau- und Investitionsvorhaben",
    description:
      "Für Bau- und Investitionsvorhaben bearbeiten wir UVP, Lärm, Ausbreitung und Fachanhänge für Planer und Investoren.",
    serviceTags: "UVP, Lärmstudien, Ausbreitungsstudien, technische Anhänge",
    factors: "Verkehr, Lärm, Immissionen, Kapazität, Betriebsvarianten",
    ariaLabel: "Leistungen für Bauprojekte anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  kamenolomy: {
    title: "Steinbrüche, Sandgruben und staubige Betriebe",
    description:
      "Für Steinbrüche, Sandgruben und staubige Betriebe bearbeiten wir Staub, Lärm, Verkehr, Ausbreitung und Behördenunterlagen.",
    serviceTags: "Ausbreitungsstudien, Lärmstudien, Emissionen, UVP",
    factors: "Staub, TSP, Lärm, Verkehr, Brechen",
    ariaLabel: "Leistungen für Steinbrüche anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  "zemedelske-provozy": {
    title: "Landwirtschaftliche Betriebe und Ställe",
    description:
      "Für landwirtschaftliche Betriebe und Ställe bearbeiten wir Emissionen, Gerüche, Lärm, Arbeitsumfeld und Unterlagen für KHS und Landesamt.",
    serviceTags: "Emissionen, Lärm, Arbeitsumfeld, Ausbreitungsstudien, UVP",
    factors: "Ammoniak, Gerüche, Lärm, Staub, Mikroklima",
    ariaLabel: "Leistungen für Landwirtschaft anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  "susarny-zemedelstvi": {
    title: "Getreide-, Biomasse- und landwirtschaftliche Trockner",
    description:
      "Für Getreide- und Biomasse­trockner bearbeiten wir Verbrennungsemissionen, Staub, Lärm und Unterlagen für Betriebsgenehmigungen.",
    serviceTags: "Emissionen, Lärm, Ausbreitungsstudien, Betriebsanleitung",
    factors: "TSP, NOx, CO, Staub, Biomasse",
    ariaLabel: "Leistungen für Trockner anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  potravinarstvi: {
    title: "Lebensmittelbetriebe",
    description:
      "Für Lebensmittelbetriebe bearbeiten wir Emissionen, Gerüche, Arbeitsumfeld, Lärm und Hygieneunterlagen für KHS.",
    serviceTags: "Arbeitsumfeld, Emissionen, Lärm, KHS",
    factors: "Gerüche, Staub, Mikroklima, Kühltechnik",
    ariaLabel: "Leistungen für Lebensmittelbetriebe anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  "cov-kaly": {
    title: "Kläranlagen und Schlammwirtschaft",
    description:
      "Für Kläranlagen und Schlammwirtschaft bearbeiten wir Abluft, Schlammtrockner, Pyrolyse, Rauchgasreinigung und Änderungen der Betriebsgenehmigung.",
    serviceTags: "Fachgutachten, Betriebsanleitung, Emissionen, Ausbreitungsstudien",
    factors: "Abluft, Schlammtrockner, Pyrolyse, Biogas, H₂S",
    ariaLabel: "Leistungen für Kläranlagen anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  "susarny-kalu": {
    title: "Schlammtrockner",
    description:
      "Für Schlammtrockner bearbeiten wir Emissionen, Abluft, Betriebsanleitungen und Unterlagen für Luftschutzbehörden.",
    serviceTags: "Emissionen, Fachgutachten, Betriebsanleitung, ČIŽP",
    factors: "TSP, Gerüche, Abluft, Gasverbrennung",
    ariaLabel: "Leistungen für Schlammtrockner anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  "pyrolyza-kalu": {
    title: "Pyrolyse und thermische Schlammbehandlung",
    description:
      "Für Pyrolyse und thermische Schlammbehandlung bearbeiten wir Emissionen, Abluft, Rauchgasreinigung und Fachunterlagen für Behörden.",
    serviceTags: "Fachgutachten, Emissionen, Betriebsanleitung, Ausbreitungsstudien",
    factors: "organische Stoffe, CO, NOx, Abluft, Rauchgas",
    ariaLabel: "Leistungen für Schlamm-Pyrolyse anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  "cisteni-spalin": {
    title: "Rauchgas- und Abgasreinigungstechnologien",
    description:
      "Für Rauchgasreinigung bearbeiten wir Ein- und Austrittsmessungen, Abscheidegrad und Betriebsdokumentation.",
    serviceTags: "Emissionen, Fachgutachten, Betriebsanleitung",
    factors: "TSP, Metalle, HCl, HF, Filterwirkungsgrad",
    ariaLabel: "Leistungen für Rauchgasreinigung anzeigen",
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
  },
  "verejne-budovy": {
    title: "Öffentliche Gebäude, Schulen, Krankenhäuser und Sozialeinrichtungen",
    description:
      "Für öffentliche Gebäude bearbeiten wir Lärm, HLK, Arbeitsumfeld und Unterlagen für KHS oder Bauamt.",
    serviceTags: "Lärmstudien, Arbeitsumfeld, Lärmmessung",
    factors: "Lärm, HLK, Mikroklima, Beleuchtung, Chemikalien",
    ariaLabel: "Leistungen für öffentliche Gebäude anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  laboratore: {
    title: "Laboratorien und Reinräume",
    description:
      "In Laboratorien und Reinräumen bearbeiten wir Chemikalien, Mikroklima, Beleuchtung, Lärm und Lüftung für KHS.",
    serviceTags: "Arbeitsumfeld, Chemikalien, KHS",
    factors: "Chemikalien, Mikroklima, Beleuchtung, Lüftung",
    ariaLabel: "Leistungen für Laboratorien anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  "lesnictvi-doprava": {
    title: "Forstwirtschaft, Bau, Verkehr und Instandhaltung",
    description:
      "Für Forstwirtschaft, Bauunternehmen und Verkehr bearbeiten wir Lärm, Vibration und Einstufung der Arbeiten für KHS.",
    serviceTags: "Arbeitsumfeld, Lärm, Vibration, Einstufung der Arbeiten",
    factors: "Lärm, HAV/WBV-Vibration, Handwerkzeuge, Maschinen",
    ariaLabel: "Leistungen für Forst und Verkehr anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  "ispop-evidence": {
    title: "ISPOP und zusammenfassende Betriebsnachweise",
    description:
      "Für Emissionsquellen bearbeiten wir ISPOP, zusammenfassende Betriebsnachweise, Emissionsbilanzen und Anbindung an Emissionsmessungen.",
    serviceTags: "ISPOP, Emissionen, Betriebsanleitung, ČIŽP",
    factors: "Emissionsbilanz, Brennstoffverbrauch, Betriebsdaten",
    ariaLabel: "Leistungen für ISPOP anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  "ghg-cnr": {
    title: "THG und Treibhausgase",
    description:
      "Für Betriebe bearbeiten wir Treibhausgas-Berichterstattung, THG-Verifizierung und Anbindung an Messungen und Betriebsdaten.",
    serviceTags: "THG, ISPOP, Emissionen, Berichterstattung",
    factors: "CO₂, Treibhausgase, Brennstoffe, Emissionsfaktoren",
    ariaLabel: "Leistungen für Treibhausgas-Berichterstattung anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  "provozni-rady": {
    title: "Betriebsanleitungen",
    description:
      "Für Luftemissionsquellen erstellen und aktualisieren wir Betriebsanleitungen in Anbindung an Technologie und Messungen.",
    serviceTags: "Betriebsanleitung, Fachgutachten, Emissionen",
    factors: "Betriebsregime, Messstellen, Betriebsbedingungen",
    ariaLabel: "Leistungen für Betriebsanleitungen anzeigen",
    linkHint: "Leistungen für diesen Betriebstyp anzeigen"
  },
  "odborne-posudky-povoleni": {
    title: "Fachgutachten und Betriebsgenehmigungen",
    description:
      "Bei Technologie-, Kapazitäts- oder Abluftänderungen erstellen wir Fachgutachten und Unterlagen für Betriebsgenehmigungen.",
    serviceTags: "Fachgutachten, Betriebsanleitung, Emissionen, ČIŽP",
    factors: "Technologieänderung, Kapazität, Abluft, Brennstoff",
    ariaLabel: "Leistungen für Gutachten und Genehmigungen anzeigen",
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
