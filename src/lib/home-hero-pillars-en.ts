import type { HomeHeroPillar, HomeHeroPillarId } from "@/lib/home-hero-pillars";

export const homeHeroPillars: HomeHeroPillar[] = [
  {
    id: "mereni",
    label: "Measurements",
    theme: "homepage-mereni",
    detail:
      "We measure emissions, workplace environment, noise and vibration — accredited, with protocols for KHS and ČIŽP."
  },
  {
    id: "studie",
    label: "Studies",
    theme: "homepage-studie",
    detail:
      "We prepare dispersion and noise studies, expert reports and calculations for building permitting, KHS or EIA."
  },
  {
    id: "dokumentace",
    label: "EIA",
    theme: "homepage-eia",
    detail:
      "We prepare EIA documentation, expert reports, operating rules, IPPC and ISPOP — supporting materials for authorities."
  }
];

export type { HomeHeroPillarId, HomeHeroPillar };
