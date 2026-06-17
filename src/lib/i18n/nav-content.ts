import type { Locale } from "@/lib/i18n/locales";
import { pickLocale } from "@/lib/i18n/locale-pick";
import { contactPageHref } from "@/lib/contact-url";
import { company } from "@/lib/site";

export type FooterLink = {
  href: string;
  label: string;
};

const footerCompanyLabels: Record<
  Locale,
  { about: string; references: string; accreditation: string; articles: string; faq: string }
> = {
  cs: {
    about: "O společnosti",
    references: "Reference",
    accreditation: "Akreditace a oprávnění",
    articles: "Odborné články",
    faq: "Časté dotazy"
  },
  en: {
    about: "About NATURCHEM",
    references: "References",
    accreditation: "Accreditation & authorisations",
    articles: "Knowledge base",
    faq: "FAQ"
  },
  de: {
    about: "Über NATURCHEM",
    references: "Referenzen",
    accreditation: "Akkreditierung und Autorisierungen",
    articles: "Wissensdatenbank",
    faq: "FAQ"
  }
} ;

const footerServiceLabels: Record<
  Locale,
  { all: string; emissions: string; workplace: string; dispersion: string }
> = {
  cs: {
    all: "Přehled služeb",
    emissions: "Měření emisí",
    workplace: "Pracovní prostředí",
    dispersion: "Rozptylové studie"
  },
  en: {
    all: "All services",
    emissions: "Emission measurements",
    workplace: "Workplace environment",
    dispersion: "Dispersion studies"
  },
  de: {
    all: "Alle Leistungen",
    emissions: "Emissionsmessungen",
    workplace: "Arbeitsumfeld",
    dispersion: "Ausbreitungsstudien"
  }
} ;

const headerNavLabels: Record<
  Locale,
  { sectors: string; caseStudies: string; references: string }
> = {
  cs: {
    sectors: "Provozy",
    caseStudies: "Typické zakázky",
    references: "Reference"
  },
  en: {
    sectors: "Industries",
    caseStudies: "Typical projects",
    references: "References"
  },
  de: {
    sectors: "Betriebe",
    caseStudies: "Typische Projekte",
    references: "Referenzen"
  }
} ;

const footerContactLabels: Record<Locale, string> = {
  cs: "Kontakt a formulář",
  en: "Contact & inquiry form",
  de: "Kontakt und Anfrageformular"
};

export function getFooterNav(locale: Locale) {
  const companyLabels = pickLocale(locale, footerCompanyLabels);
  const serviceLabels = pickLocale(locale, footerServiceLabels);

  const footerCompanyLinks: readonly FooterLink[] = [
    { href: "/o-spolecnosti-naturchem", label: companyLabels.about },
    { href: "/reference", label: companyLabels.references },
    { href: "/akreditace-autorizace-dokumenty", label: companyLabels.accreditation },
    { href: "/poradna", label: companyLabels.articles },
    { href: "/faq", label: companyLabels.faq }
  ];

  const footerServiceLinks: readonly FooterLink[] = [
    { href: "/sluzby", label: serviceLabels.all },
    { href: "/sluzby/mereni-emisi", label: serviceLabels.emissions },
    { href: "/sluzby/pracovni-prostredi", label: serviceLabels.workplace },
    { href: "/sluzby/rozptylove-studie", label: serviceLabels.dispersion }
  ];

  const footerContactPageLink: FooterLink = {
    href: contactPageHref,
    label: pickLocale(locale, footerContactLabels)
  };

  const footerLocationLine =
    locale === "cs"
      ? [company.branchAddresses[0].label, company.branchAddresses[1].label, company.address.city].join(
          " · "
        )
      : "České Budějovice · Prague 5 · Havlíčkův Brod";

  return {
    footerCompanyLinks,
    footerServiceLinks,
    footerContactPageLink,
    footerPhones: company.phones,
    footerLocationLine
  };
}

export function getHeaderMainNav(locale: Locale) {
  const labels = pickLocale(locale, headerNavLabels);
  return [
    { href: "/provozy-a-technologie", label: labels.sectors },
    { href: "/typicke-zakazky", label: labels.caseStudies },
    { href: "/reference", label: labels.references }
  ] as const;
}
