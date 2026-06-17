/** Reference page example groups — accordion like services and industries. */

import type { ReferenceExampleGroup } from "@/lib/reference-example-groups";

export const referenceExampleGroupsEn: ReferenceExampleGroup[] = [
  {
    id: "mereni-emisi",
    title: "Emission measurements",
    intro:
      "Boiler plants, paint shops, biogas and cogeneration — reports for compliance and communication with authorities.",
    exampleIds: ["lak-automotive-emise", "bps-emise", "bps-serie-emise", "plyn-kotelna-emise"]
  },
  {
    id: "pracovni-prostredi",
    title: "Workplace environment measurements",
    intro: "Production halls, welding shops and workplace exposure — supporting documentation for KHS and job categorisation.",
    exampleIds: ["hala-pp", "svarovna-pp"]
  },
  {
    id: "hluk-akustika",
    title: "Noise and acoustics",
    intro: "Outdoor units, HVAC and technology near residential areas — measurements and noise studies.",
    exampleIds: ["tcp-hluk", "vzt-hluk-studie"]
  },
  {
    id: "studie-posudky",
    title: "Studies and expert reports",
    intro: "Dispersion, noise and combined assessment of projects before permitting proceedings.",
    exampleIds: ["rozptyl-kotelna", "kompost-studie"]
  },
  {
    id: "eia-povolovani",
    title: "EIA and permitting",
    intro: "Industrial and agricultural projects and technology changes — notifications and annexes for authorities.",
    exampleIds: ["eia-lak", "slevarna-eia", "zjistovaci-zemedelstvi"]
  },
  {
    id: "evidence-dokumentace",
    title: "Records and operating documentation",
    intro: "ISPOP, GHG and operating rules when capacity or operational obligations change.",
    exampleIds: ["provozni-rad-odpady", "ispop-vice", "ghg-overovani"]
  }
];
