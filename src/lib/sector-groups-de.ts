import { sectorGroups as csGroups, type SectorGroup } from "./sector-groups";

const DE_TEXT: Record<string, Pick<SectorGroup, "title" | "intro">> = {
  "prumysl-vyroba": {
    title: "Industrie und Fertigung",
    intro:
      "Lackierereien, Galvanik, Schweißbetriebe, Druckereien, Holzverarbeitung, Glas und Automotive — typischerweise Emissionen, Lärm und Arbeitsumfeld zusammen. Wählen Sie Ihre Branche und sehen Sie Leistungen sowie Beispielaufträge."
  },
  "energetika-emise": {
    title: "Energie und Verbrennungsquellen",
    intro:
      "Kesselanlagen, Verbrennung, KWK, Biogas, Heizwerke und Krematorien — Emissionsmessungen, Betriebsnachweise und Betriebsgenehmigungen."
  },
  "odpady-recyklace": {
    title: "Abfall, Recycling und Bauvorhaben",
    intro:
      "Deponien, Recyclingareale, Kompostierung, Bauvorhaben und Steinbrüche — Lärm, Staub, Verkehr und Ausbreitung bei Kapazitätsänderungen oder EIA."
  },
  zemedelstvi: {
    title: "Landwirtschaft, Lebensmittel und Trocknung",
    intro:
      "Landwirtschaftliche Betriebe, Ställe, Getreidetrockner und Lebensmittelbetriebe mit Emissionen, Lärm, Gerüchen oder Expositionen."
  },
  "voda-kaly": {
    title: "Wasser, Schlamm und Kläranlagentechnik",
    intro:
      "Kläranlagen, Schlammwirtschaft, Schlamm­trocknung, Pyrolyse und Abgasreinigung — Gutachten, Emissionen und Genehmigungsänderungen."
  },
  "budovy-vzt": {
    title: "Gebäude, Dienstleistungen und Arbeitsumfeld",
    intro:
      "HLK, Wärmepumpen, öffentliche Gebäude, Labore und Betriebe mit Lärm und Vibrationen — Messungen, Studien und Unterlagen für KHS."
  },
  "evidence-dokumentace": {
    title: "Nachweise, Reporting und Betriebsdokumentation",
    intro:
      "ISPOP, THG-Reporting, Betriebsanleitungen und Gutachten — Unterlagen für Betreiber von Emissionsquellen und Behörden."
  }
};

export const sectorGroups: SectorGroup[] = csGroups.map((group) => ({
  ...group,
  ...(DE_TEXT[group.id] ?? { title: group.title, intro: group.intro })
}));
