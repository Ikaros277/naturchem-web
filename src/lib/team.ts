export type TeamMember = {
  name: string;
  role: string;
  details: string[];
  phones?: string[];
  email?: string;
  photo?: string;
};

/** Před publikací ověřit telefony a role. */
export const teamMembers: TeamMember[] = [
  {
    name: "Ing. František Hezina",
    role: "Jednatel společnosti, odborná garance zakázek",
    details: [
      "Soudní znalec, autorizovaná osoba pro měření emisí, odborné posudky, rozptylové studie, ověřování emisí skleníkových plynů a oznámení EIA."
    ],
    phones: ["+420 603 216 983", "+420 774 100 570"],
    email: "hezina@naturchem.cz",
    photo: "/team/hezina.jpg"
  },
  {
    name: "Mgr. Markéta Žilková",
    role: "Prodej / obchodní kontakt",
    details: [
      "První kontakt pro poptávky měření, studií a dokumentace. Pomůže zaslat podklady a domluvit další postup."
    ],
    phones: ["+420 736 778 391"],
    email: "zilkova@naturchem.cz",
    photo: "/team/zilkova.jpg"
  },
  {
    name: "Ing. Petra Svátová, DiS.",
    role: "Poradce pro životní prostředí",
    details: [
      "Poradí s environmentálními požadavky u zakázky a koordinuje spolupráci s odborným týmem."
    ],
    phones: ["+420 774 100 572"],
    email: "svatova@naturchem.cz",
    photo: "/team/svatova.jpg"
  }
];
