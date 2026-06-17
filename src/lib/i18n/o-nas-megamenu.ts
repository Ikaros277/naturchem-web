import type { Locale } from "@/lib/i18n/locales";

const oNasMegaGroupsCs = [
  {
    title: "Společnost",
    links: [{ href: "/o-spolecnosti-naturchem", label: "O společnosti" }]
  },
  {
    title: "Odbornost",
    links: [
      { href: "/akreditace-autorizace-dokumenty", label: "Akreditace a oprávnění" },
      { href: "/pristrojove-vybaveni", label: "Přístrojové vybavení" }
    ]
  },
  {
    title: "Informace",
    links: [
      { href: "/poradna", label: "Odborné články" },
      { href: "/faq", label: "Časté dotazy" }
    ]
  }
] as const;

const oNasMegaGroupsEn = [
  {
    title: "Company",
    links: [{ href: "/o-spolecnosti-naturchem", label: "About NATURCHEM" }]
  },
  {
    title: "Expertise",
    links: [
      { href: "/akreditace-autorizace-dokumenty", label: "Accreditation & authorisations" },
      { href: "/pristrojove-vybaveni", label: "Laboratory equipment" }
    ]
  },
  {
    title: "Information",
    links: [
      { href: "/poradna", label: "Knowledge base" },
      { href: "/faq", label: "FAQ" }
    ]
  }
] as const;

export function getONasMegaGroups(locale: Locale) {
  return locale === "en" ? oNasMegaGroupsEn : oNasMegaGroupsCs;
}
