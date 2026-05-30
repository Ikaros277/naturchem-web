import { globalCta } from "@/lib/cta";
import { homeSectors as sectorsForHome, provozyNavLabel, sectors } from "@/lib/sectors";

/**
 * Hlavní menu: Služby | Provozy a technologie | Typické zakázky | Akreditace | Reference | …
 */

export { globalCta };

export const referenceNav = { href: "/reference", label: "Reference" } as const;

export const articlesNav = { href: "/poradna", label: "Odborná poradna" } as const;

export const faqNav = { href: "/faq", label: "Časté dotazy" } as const;

export const oNaturchemNav = {
  href: "/o-spolecnosti-naturchem",
  label: "O NATURCHEM"
} as const;

export const kontaktNav = { href: "/kontakt", label: "Kontakt" } as const;

export const typickeZakazkyNav = {
  href: "/typicke-zakazky",
  label: "Typické zakázky"
} as const;

export const pristrojoveVybaveniNav = {
  href: "/pristrojove-vybaveni",
  label: "Přístrojové vybavení"
} as const;

export const serviceNav = [
  { href: "/sluzby/mereni-emisi", label: "Měření emisí" },
  { href: "/sluzby/pracovni-prostredi", label: "Měření pracovního prostředí" },
  { href: "/sluzby/mereni-vibraci", label: "Měření vibrací" },
  { href: "/sluzby/mereni-osvetleni", label: "Měření osvětlení" },
  { href: "/sluzby/mereni-mikroklimatu", label: "Měření mikroklimatu" },
  { href: "/sluzby/mereni-hluku", label: "Měření hluku a akustika" },
  { href: "/sluzby/akusticke-posudky", label: "Akustické posudky" },
  { href: "/sluzby/rozptylove-studie", label: "Rozptylové studie" },
  { href: "/sluzby/hlukove-studie", label: "Hlukové studie" },
  { href: "/sluzby/modelove-vypocty", label: "Modelové výpočty" },
  { href: "/sluzby/odborne-posudky", label: "Odborné posudky" },
  { href: "/sluzby/provozni-rady", label: "Provozní řády" },
  { href: "/sluzby/ippc-integrovana-povoleni", label: "IPPC" },
  { href: "/sluzby/eia-oznameni-zameru", label: "EIA" },
  { href: "/sluzby/ispop", label: "ISPOP" },
  { href: "/sluzby/ghg-overovani", label: "GHG" },
  { href: "/sluzby/skoleni-chemicke-legislativy", label: "Školení chemické legislativy" },
  { href: "/sluzby/bezpecnostni-listy", label: "Bezpečnostní listy" },
  { href: "/sluzby/chemicke-latky", label: "Chemické látky v provozu" }
] as const;

export const mainNavObory = { href: "/provozy-a-technologie", label: provozyNavLabel } as const;

export { provozyNavLabel };

export const accreditationNav = {
  href: "/akreditace-autorizace-dokumenty",
  label: "Akreditace a oprávnění",
  labTitle: "Akreditovaná laboratoř č. 1599",
  labItems: [
    "Emise: NOx, CO, SO₂, O₂, TOC, TZL, VOC, HCl, kovy",
    "Pracovní prostředí: prach, chemické látky, mikroklima, vibrace, osvětlení, hluk",
    "Mimopracovní prostředí: hluk"
  ],
  authTitle: "Autorizace",
  authItems: ["EIA", "Rozptylové studie", "Odborné posudky", "Emise skleníkových plynů (GHG)"]
} as const;

/** Dropdown Odbornost v hlavní navigaci */
export const odbornostNav = {
  label: "Odbornost",
  links: [
    accreditationNav,
    pristrojoveVybaveniNav,
    articlesNav,
    faqNav
  ]
} as const;

/** Hlavní položky desktop menu (bez Služeb a Kontaktu — řeší Header) */
export const headerMainNav = [
  mainNavObory,
  typickeZakazkyNav,
  referenceNav,
  oNaturchemNav
] as const;

/** Zkrácené menu pro tablet (1024–1179 px) */
export const headerTabletNav = [
  { href: "/sluzby", label: "Služby" },
  { href: "/provozy-a-technologie", label: "Provozy" },
  referenceNav,
  odbornostNav,
  kontaktNav
] as const;

/** Položky v tablet dropdown „Další“ */
export const headerTabletMoreLinks = [
  typickeZakazkyNav,
  oNaturchemNav,
  articlesNav,
  faqNav,
  accreditationNav,
  pristrojoveVybaveniNav
] as const;

/** @deprecated Použijte headerMainNav + odbornostNav */
export const headerTailNav = [
  referenceNav,
  articlesNav,
  faqNav,
  oNaturchemNav,
  kontaktNav
] as const;

export const homeSectors = sectorsForHome;
