/** Accredited scope per certificate no. 562/2023 (appendix). */
export const accreditedLabScope = {
  summary:
    "Physikalisch-chemische Analysen und Probenahmen in den Bereichen Luft, Emissionsmessungen, mikroklimatische Bedingungen, Lärm, künstliche Beleuchtung und Vibration.",
  emissions: {
    title: "Emissionen aus stationären Quellen",
    sampling: [
      "isokinetische Probenahme von Feinstaub (PM)",
      "Probenahme organischer Substanzen (festes Sorptionsmittel)",
      "Probenahme von Schwermetallen in Flüssigkeiten",
      "Probenahme von anorganischen Chlorverbindungen und HCl",
      "VOC-Probenahme (festes Sorptionsmittel)"
    ],
    analysis: [
      "SO₂, CO, NOx, O₂ (Automatisierte Analysegeräte)",
      "TOC (organische Substanzen, ausgedrückt als gesamter organischer Kohlenstoff)",
      "PM (gravimetrisch)",
      "Gasfeuchte, Strömungsgeschwindigkeit und Volumenstrom",
      "VOC und andere organische Stoffe (berechnet aus Messwerten)",
      "HCl und anorganische Chlorverbindungen",
      "Schwermetalle: As, Be, Cd, Cr, Co, Cu, Mn, Ni, Pb, Sb, Se, Sn, Te, Tl, V, Zn, Al, Fe, Si, Hg"
    ]
  },
  workplace: {
    title: "Arbeitsplatz- und Raumluft",
    items: [
      "einatembare und alveolengängige Staubfraktionen",
      "organische Substanzen (Benzol, Toluol, Xylol, Styrol, Acetate, chlorierte Lösungsmittel usw.)",
      "Kurzzeitmessung chemischer Substanzen mittels Prüfröhrchen",
      "Mikroklima: Temperatur, Druck, Luftfeuchtigkeit, Luftströmungsgeschwindigkeit",
      "Hand-Arm-Vibration und Ganzkörper-Vibration",
      "Künstliche Beleuchtung (Innen- und Außenbereiche)",
      "Lärm am Arbeitsplatz",
      "Probenahme von Staub, Aerosol und Fasern auf dem Filter"
    ]
  },
  environment: {
    title: "Außerberufliches Umfeld",
    items: ["Lärm (LAeq, LAFmax gemäß den anwendbaren ČSN ISO 1996-Methoden)"]
  }
} as const;

export const authorizations = [
  {
    title: "UVP",
    text: "unterstützende Dokumentation und Projektbenachrichtigung für UVP-Verfahren"
  },
  {
    title: "Ausbreitungsstudien",
    text: "Erstellung von Ausbreitungsstudien"
  },
  {
    title: "Gutachten",
    text: "Gutachten im Luftschutz"
  },
  {
    title: "Treibhausgase",
    text: "Überprüfung der Treibhausgasemissionen (THG)"
  }
] as const;
