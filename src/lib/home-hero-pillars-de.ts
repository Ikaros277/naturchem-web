import type { HomeHeroPillar, HomeHeroPillarId } from "@/lib/home-hero-pillars";

export const homeHeroPillars: HomeHeroPillar[] = [
  {
    id: "mereni",
    label: "Messungen",
    theme: "homepage-mereni",
    detail:
      "We measure emissions, workplace environment, noise and vibration — accredited, with protocols for KHS and ČIŽP."
  },
  {
    id: "studie",
    label: "Studien",
    theme: "homepage-studie",
    detail:
      "Wir erstellen Ausbreitungs- und Lärmstudien, Gutachten und Berechnungen für die Baugenehmigung, KHS oder UVP."
  },
  {
    id: "dokumentace",
    label: "UVP",
    theme: "homepage-eia",
    detail:
      "Wir erstellen UVP-Dokumentation, Gutachten, Betriebsregeln, IPPC und ISPOP – unterstützende Materialien für Behörden."
  }
];

export type { HomeHeroPillarId, HomeHeroPillar };
