import type { PoradnaTopic } from "@/lib/poradna-topic";

export const PORADNA_TOPICS_EN: Record<PoradnaTopic, string> = {
  Emise: "Emissionen",
  "Rozptylové studie": "Ausbreitungsstudien",
  Hluk: "Lärm",
  "Pracovní prostředí": "Arbeitsumgebung",
  "EIA a povolování": "UVP und Genehmigung",
  Legislativa: "Gesetzgebung",
  "Chemická legislativa": "Chemikaliengesetzgebung"
};

export const PORADNA_TOPICS = [
  "Emissionen",
  "Ausbreitungsstudien",
  "Lärm",
  "Arbeitsumgebung",
  "UVP und Genehmigung",
  "Gesetzgebung",
  "Chemikaliengesetzgebung"
] as const;
