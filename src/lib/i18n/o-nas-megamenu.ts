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

const oNasMegaGroupsDe = [
  {
    title: "Unternehmen",
    links: [{ href: "/o-spolecnosti-naturchem", label: "Über NATURCHEM" }]
  },
  {
    title: "Fachkompetenz",
    links: [
      { href: "/akreditace-autorizace-dokumenty", label: "Akkreditierung und Autorisierungen" },
      { href: "/pristrojove-vybaveni", label: "Laborausstattung" }
    ]
  },
  {
    title: "Informationen",
    links: [
      { href: "/poradna", label: "Wissensdatenbank" },
      { href: "/faq", label: "FAQ" }
    ]
  }
] as const;

export function getONasMegaGroups(locale: Locale) {
  if (locale === "en") return oNasMegaGroupsEn;
  if (locale === "de") return oNasMegaGroupsDe;
  return oNasMegaGroupsCs;
}
