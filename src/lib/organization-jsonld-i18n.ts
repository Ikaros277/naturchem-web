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
      "NATURCHEM, s. r. o. je česká akreditovaná zkušební laboratoř (ČIA, č. 1599) a autorizovaná osoba pro měření emisí, pracovního prostředí, hluku, vibrací, prašnosti, mikroklimatu, rozptylové a hlukové studie, odborné posudky, EIA, provozní řády a ISPOP v celé ČR.",
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
      "ověřování emisí skleníkových plynů (GHG)",
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
          "EIA, rozptylové studie, odborné posudky, jednorázové měření emisí, ověřování GHG"
      }
    ],
    identifierNames: { ico: "IČO", dic: "DIČ" }
  },
  en: {
    description:
      "NATURCHEM, s.r.o. is a Czech accredited testing laboratory (CAI No. 1599) and authorized body for emission measurements, workplace environment, noise, vibration, dust, microclimate, dispersion and noise studies, expert reports, EIA, operating rules, and ISPOP across the Czech Republic.",
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
      "greenhouse gas (GHG) emission verification",
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
        category: "EIA, dispersion studies, expert reports, one-off emission measurements, GHG verification"
      }
    ],
    identifierNames: { ico: "Company ID", dic: "VAT ID" }
  },
  de: {
    description:
      "NATURCHEM, s.r.o. ist ein tschechisches akkreditiertes Prüflabor (CAI Nr. 1599) und autorisierte Stelle für Emissionsmessungen, Arbeitsplatzumgebung, Lärm, Vibrationen, Staub, Mikroklima, Ausbreitungs- und Lärmstudien, Gutachten, UVP, Betriebsregeln und ISPOP in der gesamten Tschechischen Republik.",
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
      "Überprüfung von Treibhausgasemissionen (GHG)",
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
        category: "UVP, Ausbreitungsstudien, Gutachten, einmalige Emissionsmessungen, GHG-Überprüfung"
      }
    ],
    identifierNames: { ico: "Unternehmens-ID", dic: "USt-IdNr." }
  }
};

export function getOrganizationSchemaCopy(locale: Locale): OrganizationSchemaCopy {
  return organizationSchemaCopy[locale];
}
