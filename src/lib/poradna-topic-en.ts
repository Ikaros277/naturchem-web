import type { PoradnaTopic } from "@/lib/poradna-topic";

export const PORADNA_TOPICS_EN: Record<PoradnaTopic, string> = {
  Emise: "Emissions",
  "Rozptylové studie": "Dispersion studies",
  Hluk: "Noise",
  "Pracovní prostředí": "Workplace environment",
  "EIA a povolování": "EIA and permitting",
  Legislativa: "Legislation",
  "Chemická legislativa": "Chemical legislation"
};

export const PORADNA_TOPICS = [
  "Emissions",
  "Dispersion studies",
  "Noise",
  "Workplace environment",
  "EIA and permitting",
  "Legislation",
  "Chemical legislation"
] as const;
