import type { ONasMegaMenuGroup } from "@/lib/megamenu-types";

/** Položky megamenu O nás — jeden zdroj pravdy pro Header a navigaci. */
export const oNasMegaGroups: readonly ONasMegaMenuGroup[] = [
  {
    id: "spolecnost",
    title: "Společnost",
    subtitle: "Historie, tým a způsob spolupráce",
    links: [
      {
        href: "/o-spolecnosti-naturchem",
        label: "O společnosti",
        description: "Profil laboratoře, pobočky a kontakty"
      }
    ]
  },
  {
    id: "odbornost",
    title: "Odbornost",
    subtitle: "Akreditace, autorizace a vybavení laboratoře",
    links: [
      {
        href: "/akreditace-autorizace-dokumenty",
        label: "Akreditace a oprávnění",
        description: "ISO/IEC 17025, autorizace EIA a studií"
      },
      {
        href: "/pristrojove-vybaveni",
        label: "Přístrojové vybavení",
        description: "Měřicí technika pro terén i laboratoř"
      }
    ]
  },
  {
    id: "informace",
    title: "Informace",
    subtitle: "Články, odpovědi a praktické rady",
    links: [
      {
        href: "/poradna",
        label: "Odborné články",
        description: "Legislativa, měření a provoz v praxi"
      },
      {
        href: "/faq",
        label: "Časté dotazy",
        description: "Nejčastější dotazy k měřením a povolením"
      }
    ]
  }
];
