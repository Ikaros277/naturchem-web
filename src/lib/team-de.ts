import type { TeamMember } from "@/lib/team";

/** Verify phone numbers and roles before publication. */
export const teamMembers: TeamMember[] = [
  {
    name: "Ing. František Hezina",
    role: "Geschäftsführer",
    details: [
      "Gerichtlich bestellter Sachverständiger, Bevollmächtigter für Emissionsmessungen, Gutachten, Ausbreitungsstudien, Treibhausgasemissionsnachweise und UVP-Meldungen."
    ],
    phones: ["+420 603 216 983", "+420 774 100 570"],
    email: "hezina@naturchem.cz",
    photo: "/team/hezina.jpg"
  },
  {
    name: "Mgr. Markéta Žilková",
    role: "Vertriebs-/Geschäftskontakt",
    details: [
      "Erster Ansprechpartner für Anfragen zu Messungen, Studien und Dokumentationen. Sie kann Ihnen dabei helfen, unterstützende Materialien einzureichen und die nächsten Schritte zu vereinbaren."
    ],
    phones: ["+420 736 778 391"],
    email: "zilkova@naturchem.cz"
  },
  {
    name: "Ing. Petra Svátová, DiS.",
    role: "Umweltberater",
    details: [
      "Berät zu Umweltanforderungen bei Projekten und koordiniert die Zusammenarbeit mit dem Fachteam."
    ],
    phones: ["+420 774 100 572"],
    email: "svatova@naturchem.cz",
    photo: "/team/svatova.jpg"
  }
];
