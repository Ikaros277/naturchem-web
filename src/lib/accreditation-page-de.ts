import type { ServiceIconKey } from "@/lib/service-icons";

export const accreditationPageMetadata = {
  title: {
    absolute: "Akkreditierung, Zulassungen und Berufsqualifikationen | NATURCHEM"
  },
  description:
    "Übersicht über die NATURCHEM-Laborakkreditierung Nr. 1599, UVP-Genehmigungen, Ausbreitungsstudien, Gutachten und Treibhausgasemissionen. Dokumente zum Download verfügbar."
} as const;

export const accreditationFacts = [
  "Akkreditierungsurkunde Nr. 562/2023",
  "Prüflabor Nr. 1599, ME- und PP-Abteilungen",
  "ČSN EN ISO/IEC 17025:2018",
  "Akkreditierung gültig bis 26. Oktober 2028"
] as const;

export const customerBenefits: Array<{ icon: ServiceIconKey; text: string }> = [
  { icon: "ippc", text: "Ergebnisse, die bei der Inspektion nachvollziehbar und vertretbar sind" },
  { icon: "bezpecnostni-listy", text: "Protokolle direkt für ČIŽP, KHS oder das Bauamt erstellt" },
  { icon: "skoleni", text: "Professionelle Interpretation von Ergebnissen – nicht nur von Zahlen" },
  { icon: "povoleni", text: "Immer im Einklang mit dem gültigen Zertifikat und dessen Anhang" }
];

export const scopeGroups = [
  {
    title: "Emissionen aus stationären Quellen",
    text: "Probenahme, Bestimmung von Emissionskomponenten, TOC/VOC, Partikeln, NOx, CO, SO₂, O₂ und zugehörigen Parametern."
  },
  {
    title: "Arbeitsplatz- und Raumluft",
    text: "Staub, organische Stoffe, Chemikalien, Aerosole, Fasern und betriebliche Belastung."
  },
  {
    title: "Mikroklima",
    text: "Temperatur, Druck, Luftfeuchtigkeit und Luftgeschwindigkeit in der Arbeitsumgebung."
  },
  {
    title: "Beleuchtung",
    text: "Künstliche Beleuchtung im Innen- und Außenbereich."
  },
  {
    title: "Vibration",
    text: "Handübertragene Vibration und Ganzkörpervibration für Hygiene- und Arbeitsschutzzwecke."
  },
  {
    title: "Lärm",
    text: "Lärm am Arbeitsplatz und außerhalb des Arbeitsplatzes gemäß den geltenden Methoden."
  }
] as const;

export const accreditationPageContent = {
  schemaName: "Akkreditierung, Zulassungen und Berufsqualifikationen",
  breadcrumbs: [
    { name: "Heim", href: "/" },
    { name: "Akkreditierung und Qualifikationen" }
  ],
  hero: {
    eyebrow: "Nachweis der Fachkompetenz",
    title: "Akkreditierung, Zulassungen und Berufsqualifikationen",
    lead:
      "Ergebnisse von NATURCHEM halten der Prüfung durch ČIŽP, KHS und im Baugenehmigungsverfahren stand – hier sind die Zertifikate dahinter."
  },
  overview: {
    factsTitle: "Wichtige Akkreditierungsdetails",
    benefitsTitle: "Was Akkreditierung für den Kunden bedeutet"
  },
  labScope: {
    title: "Akkreditierter Laborbereich (ISO/IEC 17025)",
    appendixIntro: "Die vollständige Liste der Methoden und Analysten finden Sie im",
    appendixLinkLabel: "Anlage zur Akkreditierungsurkunde (PDF)",
    equipmentNote:
      "Das Labor nutzt Analysegeräte, Probenahmegeräte, Akustik- und Vibrationsinstrumente, Luxmeter, Pumpen und Laboreinrichtungen zur Probenvorbereitung und -auswertung.",
    equipmentLinkLabel: "Ausgewählte Instrumentierung"
  },
  authorizations: {
    title: "Berechtigungen, Qualifikationen und Dokumente",
    intro:
      "UVP, Ausbreitungs- und Lärmstudien oder Gutachten fallen nicht unter die Laborakkreditierung – sie unterliegen gesonderten Genehmigungen von Ing. Hezina:",
    documentsSubheading: "Dokumente zum Download",
    downloadButtonLabel: "PDF herunterladen",
    downloadAriaSuffix: "— PDF herunterladen"
  }
} as const;
