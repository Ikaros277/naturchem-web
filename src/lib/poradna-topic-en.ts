import type { PoradnaTopic } from "@/lib/poradna-topic";

export const PORADNA_TOPICS_EN: Record<PoradnaTopic, string> = {
  Emise: "Emissions",
  "Rozptylové studie": "Dispersion studies",
  "Hluk a vibrace": "Noise and vibration",
  "Pracovní prostředí": "Workplace environment",
  "Prašnost a deponie": "Dust and landfills",
  "EIA a povolování": "EIA and permitting",
  "KHS, ČIŽP a úřady": "Public health, environment agency and authorities",
  "Provozní praxe pro ekology": "Operational practice for environmental managers",
  Legislativa: "Legislation",
  "Chemická legislativa": "Chemical legislation"
};

export const PORADNA_TOPICS = [
  "Emissions",
  "Dispersion studies",
  "Noise and vibration",
  "Workplace environment",
  "Dust and landfills",
  "EIA and permitting",
  "Public health, environment agency and authorities",
  "Operational practice for environmental managers",
  "Legislation",
  "Chemical legislation"
] as const;
