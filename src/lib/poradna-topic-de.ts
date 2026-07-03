import type { PoradnaTopic } from "@/lib/poradna-topic";

export const PORADNA_TOPICS_EN: Record<PoradnaTopic, string> = {
  Emise: "Emissionen",
  "Rozptylové studie": "Ausbreitungsstudien",
  "Hluk a vibrace": "Lärm und Vibration",
  "Pracovní prostředí": "Arbeitsumgebung",
  "Prašnost a deponie": "Staub und Deponien",
  "EIA a povolování": "UVP und Genehmigung",
  "KHS, ČIŽP a úřady": "Gesundheitsämter, Umweltagentur und Behörden",
  "Provozní praxe pro ekology": "Betriebspraxis für Umweltmanager",
  Legislativa: "Gesetzgebung",
  "Chemická legislativa": "Chemikaliengesetzgebung"
};

export const PORADNA_TOPICS = [
  "Emissionen",
  "Ausbreitungsstudien",
  "Lärm und Vibration",
  "Arbeitsumgebung",
  "Staub und Deponien",
  "UVP und Genehmigung",
  "Gesundheitsämter, Umweltagentur und Behörden",
  "Betriebspraxis für Umweltmanager",
  "Gesetzgebung",
  "Chemikaliengesetzgebung"
] as const;
