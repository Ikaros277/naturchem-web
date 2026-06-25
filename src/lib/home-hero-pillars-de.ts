import type { HomeHeroPillar, HomeHeroPillarId } from "@/lib/home-hero-pillars";

export const homeHeroPillars: HomeHeroPillar[] = [
  {
    id: "mereni",
    label: "Messungen",
    theme: "homepage-mereni",
    detail:
      "Wir messen Emissionen, Arbeitsplatzumgebung, Lärm und Vibrationen — akkreditiert, mit Protokollen für KHS und ČIŽP.",
    href: "/sluzby#mericke-sluzby"
  },
  {
    id: "studie",
    label: "Studien",
    theme: "homepage-studie",
    detail:
      "Wir erstellen Ausbreitungs- und Lärmstudien, Gutachten und Berechnungen für die Baugenehmigung, KHS oder UVP.",
    href: "/sluzby#studie-vypocty"
  },
  {
    id: "dokumentace",
    label: "Dokumentation",
    theme: "homepage-eia",
    detail:
      "Wir erstellen UVP-Dokumentation, Gutachten, Betriebsregeln, IPPC und ISPOP – unterstützende Materialien für Behörden.",
    href: "/sluzby#povolovaci-podklady"
  }
];

export type { HomeHeroPillarId, HomeHeroPillar };
