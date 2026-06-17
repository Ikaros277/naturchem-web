import type { Locale } from "@/lib/i18n/locales";
import { contactPageHref } from "@/lib/contact-url";
import { company } from "@/lib/site";

export type FooterLink = {
  href: string;
  label: string;
};

export function getFooterNav(locale: Locale) {
  const isEn = locale === "en";

  const footerCompanyLinks: readonly FooterLink[] = [
    {
      href: "/o-spolecnosti-naturchem",
      label: isEn ? "About NATURCHEM" : "O společnosti"
    },
    { href: "/reference", label: isEn ? "References" : "Reference" },
    {
      href: "/akreditace-autorizace-dokumenty",
      label: isEn ? "Accreditation & authorisations" : "Akreditace a oprávnění"
    },
    { href: "/poradna", label: isEn ? "Knowledge base" : "Odborné články" },
    { href: "/faq", label: isEn ? "FAQ" : "Časté dotazy" }
  ];

  const footerServiceLinks: readonly FooterLink[] = [
    { href: "/sluzby", label: isEn ? "All services" : "Přehled služeb" },
    { href: "/sluzby/mereni-emisi", label: isEn ? "Emission measurements" : "Měření emisí" },
    {
      href: "/sluzby/pracovni-prostredi",
      label: isEn ? "Workplace environment" : "Pracovní prostředí"
    },
    { href: "/sluzby/rozptylove-studie", label: isEn ? "Dispersion studies" : "Rozptylové studie" }
  ];

  const footerContactPageLink: FooterLink = {
    href: contactPageHref,
    label: isEn ? "Contact & inquiry form" : "Kontakt a formulář"
  };

  const footerLocationLine = isEn
    ? "České Budějovice · Prague 5 · Havlíčkův Brod"
    : [company.branchAddresses[0].label, company.branchAddresses[1].label, company.address.city].join(
        " · "
      );

  return {
    footerCompanyLinks,
    footerServiceLinks,
    footerContactPageLink,
    footerPhones: company.phones,
    footerLocationLine
  };
}

export function getHeaderMainNav(locale: Locale) {
  const isEn = locale === "en";
  return [
    { href: "/provozy-a-technologie", label: isEn ? "Industries" : "Provozy" },
    { href: "/typicke-zakazky", label: isEn ? "Typical projects" : "Typické zakázky" },
    { href: "/reference", label: isEn ? "References" : "Reference" }
  ] as const;
}
