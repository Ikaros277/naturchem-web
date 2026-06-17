import type { ServiceIconKey } from "@/lib/service-icons";

export const companyStatsIntro =
  "Messungen, Studien und Gutachtendokumentationen für Industrieanlagen, Planer, Investoren und Behörden – das machen wir seit mehr als 36 Jahren.";

export const companyStats: ReadonlyArray<{
  value: string;
  label: string;
  icon: ServiceIconKey;
}> = [
  {
    value: "14,000+",
    label: "projects",
    icon: "process-vystup"
  },
  {
    value: "6,000+",
    label: "measurements",
    icon: "emise"
  },
  {
    value: "36 Jahre",
    label: "der Erfahrung",
    icon: "process-posouzeni"
  }
];

export const companyStatsNote =
  "Bei den angezeigten Zahlen handelt es sich um gerundete Daten aus unseren internen Aufzeichnungen von Projekten und Protokollausgaben.";

export const longTermPracticeTitle = "Langjährige Praxis in der Vermessung und Genehmigungsdokumentation";

export const longTermPracticeParagraphs = [
  "Wir bauen auf tausenden abgeschlossenen Projekten und Vor-Ort-Messungen auf. Langfristig arbeiten wir für Kesselanlagen, Lackierereien, Biogasanlagen, Glashütten, Schweißereien, Recyclinganlagen, landwirtschaftliche Betriebe, Automobilbetriebe sowie kommunale und öffentliche Auftraggeber.",
  "Wir bieten in der Regel Emissionsmessungen, Messungen der Arbeitsplatzumgebung, Lärmmessungen, Ausbreitungs- und Lärmstudien, UVP-Dokumentation, Gutachten, Betriebsregeln, ISPOP und technische Beratung für Genehmigungen und betriebliche Entscheidungen an."
] as const;

export const practiceFromRecordsTitle = "Erfahrung durch abgeschlossene Projekte";

export const practiceFromRecordsParagraphs = [
  "Wir bauen auf Langzeitaufzeichnungen von Projekten, Vor-Ort-Messungen und Protokollausgaben. Langfristig arbeiten wir für Kunden aus Industrie, Energie, Landwirtschaft, Kommunen und der öffentlichen Hand.",
  "Am häufigsten befassen wir uns mit Emissionsmessungen, Arbeitsplatzumgebungen, Lärm-, Ausbreitungs- und Lärmstudien, Gutachten, Betriebsvorschriften, UVP-Dokumentation, ISPOP, Betriebsaufzeichnungen und der Überprüfung von Emissionsdaten.",
  "As a result, we do not treat a project in isolation as a single measurement, but in the context of the purpose of the deliverable — for the operator, designer, investor, KHS, ČIŽP, regional authority, building permitting or EIA."
] as const;

export const experienceBullets = [
  "Über 14.000 Projekte",
  "Über 6.000 Messungen",
  "36 Jahre Erfahrung",
  "langjährige Tätigkeit für Kunden aus Industrie, Energie, Landwirtschaft, Kommunen und der öffentlichen Hand"
] as const;
