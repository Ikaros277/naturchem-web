import type { TeamMember } from "@/lib/team";

/** Verify phone numbers and roles before publication. */
export const teamMembers: TeamMember[] = [
  {
    name: "Ing. František Hezina",
    role: "Managing director",
    details: [
      "Court-appointed expert, authorised person for emission measurements, expert reports, dispersion studies, greenhouse gas emission verification and EIA notifications."
    ],
    phones: ["+420 603 216 983", "+420 774 100 570"],
    email: "hezina@naturchem.cz",
    photo: "/team/hezina.jpg"
  },
  {
    name: "Mgr. Markéta Žilková",
    role: "Sales / business contact",
    details: [
      "First point of contact for inquiries about measurements, studies and documentation. She can help you submit supporting materials and arrange next steps."
    ],
    phones: ["+420 736 778 391"],
    email: "zilkova@naturchem.cz"
  },
  {
    name: "Ing. Petra Svátová, DiS.",
    role: "Environmental advisor",
    details: [
      "Advises on environmental requirements for projects and coordinates cooperation with the specialist team."
    ],
    phones: ["+420 774 100 572"],
    email: "svatova@naturchem.cz",
    photo: "/team/svatova.jpg"
  }
];
