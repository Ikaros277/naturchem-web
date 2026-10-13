import type { Locale } from "@/lib/i18n/locales";

type OrganizationSchemaCopy = {
  description: string;
  audienceTypes: readonly string[];
  knowsAbout: readonly string[];
  offerCatalogName: string;
  contactPageName: string;
  credentials: readonly { name: string; category: string }[];
  identifierNames: { ico: string; dic: string };
};

const organizationSchemaCopy: Record<Locale, OrganizationSchemaCopy> = {
  cs: {
    description:
      "NATURCHEM, s. r. o. je česká akreditovaná zkušební laboratoř (ČIA, č. 1599). Poskytuje měření emisí a pracovního prostředí, hlukové a rozptylové studie, odborné posudky, EIA, povolovací dokumentaci, ISPOP a výpočty emisí skleníkových plynů v celé ČR.",
    audienceTypes: [
      "Provozovatelé zdrojů znečišťování ovzduší",
      "Podnikoví ekologové",
      "environmentální a bezpečnostní manažeři",
      "Průmyslové podniky",
      "Investoři a projektanti",
      "Obce a veřejný sektor",
      "Stavební firmy"
    ],
    knowsAbout: [
      "měření emisí ze stacionárních zdrojů",
      "měření pracovního prostředí",
      "měření hluku a akustické posudky",
      "rozptylové studie",
      "hlukové studie",
      "EIA a oznámení záměru",
      "odborné posudky podle zákona o ochraně ovzduší",
      "provozní řády zdrojů znečišťování ovzduší",
      "IPPC a integrovaná povolení",
      "ISPOP a provozní evidence",
      "výpočty emisí skleníkových plynů (GHG), kontrola emisních dat a uhlíková stopa",
      "chemická legislativa a bezpečnostní listy",
      "environmentální poradenství pro úřady a provozovatele",
      "prodej analytických přístrojů PCF Elettronica"
    ],
    offerCatalogName: "Služby NATURCHEM",
    contactPageName: "Kontakt — NATURCHEM",
    credentials: [
      {
        name: "Akreditovaná zkušební laboratoř č. 1599 (ČIA)",
        category: "ČSN EN ISO/IEC 17025"
      },
      {
        name: "Autorizovaná osoba",
        category:
          "EIA, rozptylové studie, odborné posudky, jednorázové měření emisí"
      }
    ],
    identifierNames: { ico: "IČO", dic: "DIČ" }
  },
  en: {
    description:
      "NATURCHEM, s.r.o. is a Czech accredited testing laboratory (CAI No. 1599). It provides emission and workplace measurements, noise and dispersion studies, expert reports, EIA, permitting documentation, ISPOP and greenhouse gas calculations across the Czech Republic.",
    audienceTypes: [
      "Air pollution source operators",
      "Corporate environmental specialists",
      "environmental and safety managers",
      "Industrial companies",
      "Investors and designers",
      "Municipalities and the public sector",
      "Construction companies"
    ],
    knowsAbout: [
      "emission measurements from stationary sources",
      "workplace environment measurements",
      "noise measurements and acoustic assessments",
      "dispersion studies",
      "noise studies",
      "EIA and project notification",
      "expert reports under the Air Protection Act",
      "operating rules for air pollution sources",
      "IPPC and integrated permits",
      "ISPOP and operating records",
      "greenhouse gas (GHG) calculations, emissions data checks and carbon footprint",
      "chemical legislation and safety data sheets",
      "environmental consulting for authorities and operators",
      "sale of PCF Elettronica analytical instruments"
    ],
    offerCatalogName: "NATURCHEM services",
    contactPageName: "Contact — NATURCHEM",
    credentials: [
      {
        name: "Accredited testing laboratory No. 1599 (CAI)",
        category: "ČSN EN ISO/IEC 17025"
      },
      {
        name: "Authorized body",
        category: "EIA, dispersion studies, expert reports, one-off emission measurements"
      }
    ],
    identifierNames: { ico: "Company ID", dic: "VAT ID" }
  },
  de: {
    description:
      "NATURCHEM, s.r.o. ist ein tschechisches akkreditiertes Prüflabor (CAI Nr. 1599). Es bietet Emissions- und Arbeitsplatzmessungen, Lärm- und Ausbreitungsstudien, Gutachten, UVP, Genehmigungsunterlagen, ISPOP und Treibhausgasberechnungen in der gesamten Tschechischen Republik.",
    audienceTypes: [
      "Betreiber von Luftschadstoffquellen",
      "Betriebliche Umweltfachkräfte",
      "Umwelt- und Sicherheitsmanager",
      "Industrieunternehmen",
      "Investoren und Planer",
      "Gemeinden und öffentlicher Sektor",
      "Bauunternehmen"
    ],
    knowsAbout: [
      "Emissionsmessungen von stationären Quellen",
      "Messungen der Arbeitsplatzumgebung",
      "Lärmmessungen und akustische Gutachten",
      "Ausbreitungsstudien",
      "Lärmstudien",
      "UVP und Projektanmeldung",
      "Gutachten nach dem Luftschutzgesetz",
      "Betriebsregeln für Luftschadstoffquellen",
      "IPPC und integrierte Genehmigungen",
      "ISPOP und Betriebsaufzeichnungen",
      "Berechnung von Treibhausgasemissionen (GHG), Prüfung von Emissionsdaten und CO₂-Fußabdruck",
      "Chemikalienrecht und Sicherheitsdatenblätter",
      "Umweltberatung für Behörden und Betreiber",
      "Verkauf analytischer Geräte PCF Elettronica"
    ],
    offerCatalogName: "NATURCHEM Leistungen",
    contactPageName: "Kontakt — NATURCHEM",
    credentials: [
      {
        name: "Akkreditiertes Prüflabor Nr. 1599 (CAI)",
        category: "ČSN EN ISO/IEC 17025"
      },
      {
        name: "Autorisierte Stelle",
        category: "UVP, Ausbreitungsstudien, Gutachten, einmalige Emissionsmessungen"
      }
    ],
    identifierNames: { ico: "Unternehmens-ID", dic: "USt-IdNr." }
  }
};

export function getOrganizationSchemaCopy(locale: Locale): OrganizationSchemaCopy {
  return organizationSchemaCopy[locale];
}
