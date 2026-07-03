import { locales } from "@/lib/i18n/locales";
import { company, getCompanyOffices, services, siteUrl } from "@/lib/site";

const organizationDescription =
  "NATURCHEM, s. r. o. je česká akreditovaná zkušební laboratoř (ČIA, č. 1599) a autorizovaná osoba pro měření emisí, pracovního prostředí, hluku, vibrací, prašnosti, mikroklimatu, rozptylové a hlukové studie, odborné posudky, EIA, provozní řády a ISPOP v celé ČR.";

const audienceTypes = [
  "Provozovatelé zdrojů znečišťování ovzduší",
  "Podnikoví ekologové",
  "EHS a HSE manažeři",
  "Průmyslové podniky",
  "Investoři a projektanti",
  "Obce a veřejný sektor",
  "Stavební firmy"
] as const;

const knowsAbout = [
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
] as const;

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: company.name,
    alternateName: "NATURCHEM",
    url: siteUrl,
    logo: `${siteUrl}/graphics/naturchem-mark.svg`,
    image: `${siteUrl}/opengraph-image`,
    description: organizationDescription,
    identifier: [
      { "@type": "PropertyValue", name: "IČO", value: company.ico },
      { "@type": "PropertyValue", name: "DIČ", value: company.dic }
    ],
    knowsAbout: [...knowsAbout],
    audience: audienceTypes.map((name) => ({ "@type": "Audience", audienceType: name })),
    areaServed: { "@type": "Country", name: "Czech Republic" },
    ...(company.socialProfiles.length > 0 ? { sameAs: company.socialProfiles } : {}),
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Akreditovaná zkušební laboratoř č. 1599 (ČIA)",
        credentialCategory: "ČSN EN ISO/IEC 17025"
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Autorizovaná osoba",
        credentialCategory:
          "EIA, rozptylové studie, odborné posudky, jednorázové měření emisí, ověřování GHG"
      }
    ],
    location: getCompanyOffices().map((office) => ({
      "@type": "Place",
      name: `NATURCHEM — ${office.label}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: office.street,
        postalCode: office.postalCode,
        addressLocality: office.city,
        addressCountry: "CZ"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: office.lat,
        longitude: office.lng
      }
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      postalCode: company.address.postalCode,
      addressLocality: company.address.city,
      addressCountry: company.address.country
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: company.phones[0],
        email: company.email,
        areaServed: "CZ",
        availableLanguage: [...locales]
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Služby NATURCHEM",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          url: `${siteUrl}${service.href}/`,
          description: service.short,
          provider: { "@id": `${siteUrl}/#organization` },
          areaServed: "CZ"
        }
      }))
    }
  };
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#localbusiness`,
    name: company.name,
    alternateName: "NATURCHEM",
    url: siteUrl,
    description: organizationDescription,
    telephone: company.phones[0],
    email: company.email,
    image: `${siteUrl}/opengraph-image`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.labAddress.street,
      postalCode: company.labAddress.postalCode,
      addressLocality: company.labAddress.city,
      addressCountry: company.labAddress.country
    },
    areaServed: "CZ",
    parentOrganization: { "@id": `${siteUrl}/#organization` }
  };
}

export function buildWebSiteJsonLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "NATURCHEM",
    alternateName: "NATURCHEM, s.r.o.",
    url: siteUrl,
    inLanguage: locale,
    description: organizationDescription,
    publisher: { "@id": `${siteUrl}/#organization` }
  };
}
