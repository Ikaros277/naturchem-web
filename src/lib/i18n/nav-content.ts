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
  {
    about: string;
    references: string;
    accreditation: string;
    articles: string;
    faq: string;
    satisfactionSurvey: string;
  }
> = {
  cs: {
    about: "O společnosti",
    references: "Reference",
    accreditation: "Akreditace a oprávnění",
    articles: "Odborné články",
    faq: "Časté dotazy",
    satisfactionSurvey: "Dotazník spokojenosti"
  },
  en: {
    about: "About NATURCHEM",
    references: "References",
    accreditation: "Accreditation & authorisations",
    articles: "Knowledge base",
    faq: "FAQ",
    satisfactionSurvey: "Satisfaction survey"
  },
  de: {
    about: "Über NATURCHEM",
    references: "Referenzen",
    accreditation: "Akkreditierung und Autorisierungen",
    articles: "Wissensdatenbank",
    faq: "FAQ",
    satisfactionSurvey: "Zufriedenheitsfragebogen"
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
    sectors: "Podle typu provozu",
    caseStudies: "Typické zakázky",
    references: "Reference"
  },
  en: {
    sectors: "By plant type",
    caseStudies: "Typical projects",
    references: "References"
  },
  de: {
    sectors: "Nach Betriebstyp",
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

  const footerSurveyLink: FooterLink = {
    href: "/dotaznik-spokojenosti",
    label: companyLabels.satisfactionSurvey
  };

  const footerServiceLinks: readonly FooterLink[] = [
    { href: "/sluzby", label: serviceLabels.all },
    { href: "/mereni-emisi-kotelen", label: serviceLabels.emissions },
    { href: "/mereni-pracovniho-prostredi-kategorizace-praci", label: serviceLabels.workplace },
    { href: "/rozptylova-studie-povoleni", label: serviceLabels.dispersion }
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
      : locale === "de"
        ? "České Budějovice · Prag 5 · Havlíčkův Brod"
        : "České Budějovice · Prague 5 · Havlíčkův Brod";

  return {
    footerCompanyLinks,
    footerSurveyLink,
    footerServiceLinks,
    footerContactPageLink,
    footerPhones: company.phones,
    footerLocationLine
  };
}

/** @deprecated Use getExperienceMegaGroups */
export function getHeaderMainNav(locale: Locale) {
  const labels = pickLocale(locale, headerNavLabels);
  return [
    { href: "/provozy-a-technologie", label: labels.sectors },
    { href: "/typicke-zakazky", label: labels.caseStudies },
    { href: "/reference", label: labels.references }
  ] as const;
}

const salesNavLabels: Record<Locale, string> = {
  cs: "Nabídka měřicí techniky",
  en: "Measuring equipment offer",
  de: "Angebot Messtechnik"
};

const salesNavHref = "/prodej";

export function getSalesNavLink(locale: Locale) {
  return {
    href: salesNavHref,
    label: pickLocale(locale, salesNavLabels)
  } as const;
}
