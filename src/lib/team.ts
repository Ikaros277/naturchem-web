export type TeamMember = {
  name: string;
  role: string;
  details: string[];
  phone?: string;
};

/** Před publikací ověřit telefony a role. */
export const teamMembers: TeamMember[] = [
  {
    name: "Ing. František Hezina",
    role: "Jednatel společnosti, odborná garance zakázek",
    details: [
      "Soudní znalec, autorizovaná osoba pro měření emisí, odborné posudky, rozptylové studie, ověřování emisí skleníkových plynů a oznámení EIA."
    ]
  },
  {
    name: "Mgr. Markéta Žilková",
    role: "Prodej / obchodní kontakt",
    details: [
      "První kontakt pro poptávky měření, studií a dokumentace. Pomůže zaslat podklady a domluvit další postup."
    ],
    phone: "+420 736 778 391"
  },
  {
    name: "Ing. Petra Svátová, DiS.",
    role: "Poradce pro životní prostředí",
    details: [
      "Poradí s environmentálními požadavky u zakázky a koordinuje spolupráci s odborným týmem."
    ],
    phone: "+420 774 100 572"
  }
];
