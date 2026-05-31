import {
  accreditationNav,
  articlesNav,
  faqNav,
  oSpolecnostiNav,
  referenceNav
} from "@/lib/navigation";
import { company } from "@/lib/site";

export type FooterLink = {
  href: string;
  label: string;
};

/** Sloupec 1 — o společnosti a důvěře. */
export const footerCompanyLinks: readonly FooterLink[] = [
  { href: oSpolecnostiNav.href, label: oSpolecnostiNav.label },
  { href: referenceNav.href, label: referenceNav.label },
  { href: accreditationNav.href, label: accreditationNav.label },
  { href: articlesNav.href, label: articlesNav.label },
  { href: faqNav.href, label: faqNav.label }
];

/** Sloupec 2 — přehled služeb. */
export const footerServiceLinks: readonly FooterLink[] = [
  { href: "/sluzby", label: "Přehled služeb" },
  { href: "/sluzby/mereni-emisi", label: "Měření emisí" },
  { href: "/sluzby/pracovni-prostredi", label: "Pracovní prostředí" },
  { href: "/sluzby/rozptylove-studie", label: "Rozptylové studie" }
];

export const footerContactPageLink: FooterLink = {
  href: "/kontakt",
  label: "Kontakt a formulář"
};

export const footerPhones = company.phones;

/** Pořadí poboček: Budějovice · Praha · Brod */
export const footerLocationLine = [
  company.branchAddresses[0].label,
  company.branchAddresses[1].label,
  company.address.city
].join(" · ");
