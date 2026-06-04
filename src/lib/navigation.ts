import { globalCta } from "@/lib/cta";
import { homeSectors as sectorsForHome, provozyNavLabel, sectors } from "@/lib/sectors";

/**
 * Hlavní menu: Služby | Provozy | Typické zakázky | Reference | O nás ▾ | Kontakt | Poptat
 */

export { globalCta };

export const referenceNav = { href: "/reference", label: "Reference" } as const;

export const articlesNav = { href: "/poradna", label: "Odborné články" } as const;

export const faqNav = { href: "/faq", label: "Časté dotazy" } as const;

export const oSpolecnostiNav = {
  href: "/o-spolecnosti-naturchem",
  label: "O společnosti"
} as const;

/** @deprecated Použijte oSpolecnostiNav */
export const oNaturchemNav = oSpolecnostiNav;

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
  { href: "/sluzby/ippc-integrovana-povoleni", label: "IPPC a integrovaná povolení" },
  { href: "/sluzby/eia-oznameni-zameru", label: "EIA a oznámení záměru" },
  { href: "/sluzby/ispop", label: "ISPOP a provozní evidence" },
  { href: "/sluzby/ghg-overovani", label: "Emise skleníkových plynů (GHG)" },
  { href: "/sluzby/skoleni-chemicke-legislativy", label: "Školení chemické legislativy" },
  { href: "/sluzby/bezpecnostni-listy", label: "Bezpečnostní listy" },
  { href: "/sluzby/chemicke-latky", label: "Chemické látky v provozu" }
] as const;

export const mainNavObory = { href: "/provozy-a-technologie", label: "Provozy" } as const;

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

/** Dropdown O nás v hlavní navigaci */
export const oNasNav = {
  label: "O nás",
  links: [
    oSpolecnostiNav,
    accreditationNav,
    pristrojoveVybaveniNav,
    articlesNav,
    faqNav
  ]
} as const;

/** @deprecated Použijte oNasNav */
export const odbornostNav = {
  label: "Odbornost",
  links: [accreditationNav, pristrojoveVybaveniNav, articlesNav, faqNav]
} as const;

/** Hlavní položky desktop menu (bez Služeb, O nás a Kontaktu — řeší Header) */
export const headerMainNav = [mainNavObory, typickeZakazkyNav, referenceNav] as const;

/** @deprecated Použijte headerMainNav + oNasNav */
export const headerTailNav = [
  referenceNav,
  articlesNav,
  faqNav,
  oSpolecnostiNav,
  kontaktNav
] as const;

export const homeSectors = sectorsForHome;
