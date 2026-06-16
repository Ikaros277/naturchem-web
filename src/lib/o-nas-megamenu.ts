import {
  accreditationNav,
  articlesNav,
  faqNav,
  oSpolecnostiNav,
  pristrojoveVybaveniNav
} from "@/lib/navigation";

/** Skupiny v dropdownu O nás — stejný vzor jako megamenu Služby. */
export const oNasMegaGroups = [
  {
    title: "Společnost",
    links: [{ href: oSpolecnostiNav.href, label: oSpolecnostiNav.label }]
  },
  {
    title: "Odbornost",
    links: [
      { href: accreditationNav.href, label: accreditationNav.label },
      { href: pristrojoveVybaveniNav.href, label: pristrojoveVybaveniNav.label }
    ]
  },
  {
    title: "Informace",
    links: [
      { href: articlesNav.href, label: articlesNav.label },
      { href: faqNav.href, label: faqNav.label }
    ]
  }
] as const;
