import type { ONasMegaMenuGroup } from "@/lib/megamenu-types";

export const oNasMegaGroupsDe: readonly ONasMegaMenuGroup[] = [
  {
    id: "spolecnost",
    title: "Unternehmen",
    subtitle: "Geschichte, Team und Zusammenarbeit",
    links: [
      {
        href: "/o-spolecnosti-naturchem",
        label: "Über NATURCHEM",
        description: "Laborprofil, Standorte und Kontakte"
      }
    ]
  },
  {
    id: "odbornost",
    title: "Fachkompetenz",
    subtitle: "Akkreditierung, Autorisierungen und Ausstattung",
    links: [
      {
        href: "/akreditace-autorizace-dokumenty",
        label: "Akkreditierung und Autorisierungen",
        description: "ISO/IEC 17025, UVP- und Studienautorisierungen"
      },
      {
        href: "/pristrojove-vybaveni",
        label: "Laborausstattung",
        description: "Messgeräte für Feld und Labor"
      }
    ]
  },
  {
    id: "informace",
    title: "Informationen",
    subtitle: "Artikel, Antworten und praktische Hinweise",
    links: [
      {
        href: "/poradna",
        label: "Wissensdatenbank",
        description: "Recht, Messungen und Betrieb in der Praxis"
      },
      {
        href: "/faq",
        label: "FAQ",
        description: "Häufige Fragen zu Messungen und Genehmigungen"
      }
    ]
  }
];
