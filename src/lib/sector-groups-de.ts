export type SectorGroup = {
  id: string;
  title: string;
  /** Úvod skupiny na indexu provozů — delší než popisek karty. */
  intro: string;
  hrefs: readonly string[];
};

export const sectorGroups: SectorGroup[] = [
  {
    id: "prumysl-vyroba",
    title: "Industrie und Fertigung",
    intro:
      "Lackierereien, Schweißbetriebe, Glaswerke, Holzverarbeitung und Automotive — typischerweise geht es gleichzeitig um Emissionen, Lärm und Arbeitsumfeld. Wählen Sie Ihre Branche und sehen Sie die zugehörigen Leistungen.",
    hrefs: [
      "/provozy-a-technologie/lakovny",
      "/provozy-a-technologie/svarovny",
      "/provozy-a-technologie/sklarstvi",
      "/provozy-a-technologie/drevozpracujici",
      "/provozy-a-technologie/automotive"
    ]
  },
  {
    id: "energetika-emise",
    title: "Energie und Emissionsquellen",
    intro:
      "Heizwerke, Verbrennungsanlagen, Kogeneration und Biogas — Emissionsmessungen, Betriebsnachweise und Anbindung an die Betriebsgenehmigung. Hier finden Sie, was wir für Betreiber und Investoren in der Energiebranche lösen.",
    hrefs: ["/provozy-a-technologie/kotelny", "/provozy-a-technologie/bioplyn-biometan"]
  },
  {
    id: "odpady-recyklace",
    title: "Abfall und Recycling",
    intro:
      "Deponien, Recyclinganlagen und Kompostieranlagen — Lärm, Staub, Verkehr und Ausbreitung bei Kapazitätsänderungen oder im Rahmen der EIA. Leistungen für Areale, in denen technische Daten mit der Projektsteuerung zusammenlaufen.",
    hrefs: ["/provozy-a-technologie/odpady-recyklace"]
  },
  {
    id: "zemedelstvi",
    title: "Landwirtschaft und Lebensmittelindustrie",
    intro:
      "Landwirtschaftliche Areale, Ställe, Trocknungsanlagen und Betriebe mit Emissionen, Lärm, Gerüchen oder arbeitsbedingten Expositionen. Überblick über Leistungen für Betriebe und Lebensmitteltechnologien in einem Block.",
    hrefs: ["/provozy-a-technologie/zemedelske-provozy"]
  },
  {
    id: "budovy-vzt",
    title: "Gebäude, HLK und Technik",
    intro:
      "Außeneinheiten von Wärmepumpen, Lüftung, Kühlung und Reinräume in Gebäuden — Lärmbewertung, Messungen und Unterlagen vor der Installation sowie bei Beschwerden.",
    hrefs: [
      "/provozy-a-technologie/tepelna-cerpadla-vzt",
      "/sluzby/pracovni-prostredi"
    ]
  },
  {
    id: "investicni-zamery",
    title: "Bau- und Investitionsvorhaben",
    intro:
      "Neue Technologien, Kapazitätsänderungen und Vorhaben in Vorbereitung — EIA, Lärm, Ausbreitung und Unterlagen für Planer und Investoren. Betriebe, die oft schon vor der Inbetriebnahme bearbeitet werden.",
    hrefs: [
      "/provozy-a-technologie/automotive",
      "/provozy-a-technologie/odpady-recyklace",
      "/provozy-a-technologie/tepelna-cerpadla-vzt"
    ]
  }
];
