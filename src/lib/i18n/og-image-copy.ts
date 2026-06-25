import type { Locale } from "@/lib/i18n/locales";

type OgImageCopy = {
  title: string;
  subtitle: string;
  footer: string;
};

const homeOg: Record<Locale, OgImageCopy> = {
  cs: {
    title: "Měření, studie a dokumentace pro provozy a úřady",
    subtitle: "Emise · pracovní prostředí · hluk · rozptylové studie · EIA",
    footer: "Akreditovaná zkušební laboratoř č. 1599 · ČSN EN ISO/IEC 17025"
  },
  en: {
    title: "Measurements, studies and permitting documentation",
    subtitle: "Emissions · workplace environment · noise · dispersion studies · EIA",
    footer: "Accredited testing laboratory No. 1599 · ČSN EN ISO/IEC 17025"
  },
  de: {
    title: "Messungen, Studien und Genehmigungsunterlagen",
    subtitle: "Emissionen · Arbeitsumfeld · Lärm · Ausbreitungsstudien · EIA",
    footer: "Akkreditiertes Prüflabor Nr. 1599 · ČSN EN ISO/IEC 17025"
  }
};

const servicesOg: Record<Locale, OgImageCopy> = {
  cs: {
    title: "Akreditovaná měření a odborné služby",
    subtitle: "Měření emisí, pracovního prostředí, hluku, studie a povolovací dokumentace",
    footer: "naturchem.cz/sluzby · Akreditovaná laboratoř č. 1599"
  },
  en: {
    title: "Accredited measurements and expert services",
    subtitle: "Emission and workplace measurements, noise, studies and permitting documentation",
    footer: "naturchem.cz/en/sluzby · Accredited laboratory No. 1599"
  },
  de: {
    title: "Akkreditierte Messungen und Fachleistungen",
    subtitle: "Emissions- und Arbeitsplatzmessungen, Lärm, Studien und Genehmigungsunterlagen",
    footer: "naturchem.cz/de/sluzby · Akkreditiertes Labor Nr. 1599"
  }
};

export function getHomeOgImageCopy(locale: Locale): OgImageCopy {
  return homeOg[locale];
}

export function getServicesOgImageCopy(locale: Locale): OgImageCopy {
  return servicesOg[locale];
}
