import type { ONasMegaMenuGroup } from "@/lib/megamenu-types";

export const oNasMegaGroupsEn: readonly ONasMegaMenuGroup[] = [
  {
    id: "spolecnost",
    title: "Company",
    subtitle: "History, team and how we work with clients",
    links: [
      {
        href: "/o-spolecnosti-naturchem",
        label: "About NATURCHEM",
        description: "Laboratory profile, offices and contacts"
      }
    ]
  },
  {
    id: "odbornost",
    title: "Expertise",
    subtitle: "Accreditation, authorisations and equipment",
    links: [
      {
        href: "/akreditace-autorizace-dokumenty",
        label: "Accreditation & authorisations",
        description: "ISO/IEC 17025, EIA and study authorisations"
      },
      {
        href: "/pristrojove-vybaveni",
        label: "Laboratory equipment",
        description: "Field and laboratory measurement technology"
      }
    ]
  },
  {
    id: "informace",
    title: "Information",
    subtitle: "Articles, answers and practical guidance",
    links: [
      {
        href: "/poradna",
        label: "Knowledge base",
        description: "Legislation, measurements and operations in practice"
      },
      {
        href: "/faq",
        label: "FAQ",
        description: "Common questions about measurements and permits"
      }
    ]
  }
];
