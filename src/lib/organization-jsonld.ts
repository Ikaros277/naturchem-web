import type { Locale } from "@/lib/i18n/locales";
import { locales } from "@/lib/i18n/locales";
import { getOrganizationSchemaCopy } from "@/lib/organization-jsonld-i18n";
import { company, getCompanyOffices, services, siteUrl } from "@/lib/site";

export function buildOrganizationJsonLd(locale: Locale = "cs") {
  const copy = getOrganizationSchemaCopy(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: company.name,
    alternateName: "NATURCHEM",
    url: siteUrl,
    logo: `${siteUrl}/graphics/naturchem-mark.svg`,
    image: `${siteUrl}/opengraph-image`,
    description: copy.description,
    identifier: [
      { "@type": "PropertyValue", name: copy.identifierNames.ico, value: company.ico },
      { "@type": "PropertyValue", name: copy.identifierNames.dic, value: company.dic }
    ],
    knowsAbout: [...copy.knowsAbout],
    audience: copy.audienceTypes.map((name) => ({ "@type": "Audience", audienceType: name })),
    areaServed: { "@type": "Country", name: "Czech Republic" },
    ...(company.socialProfiles.length > 0 ? { sameAs: company.socialProfiles } : {}),
    hasCredential: copy.credentials.map((credential) => ({
      "@type": "EducationalOccupationalCredential",
      name: credential.name,
      credentialCategory: credential.category
    })),
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
      name: copy.offerCatalogName,
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

export function buildLocalBusinessJsonLd(locale: Locale = "cs") {
  const copy = getOrganizationSchemaCopy(locale);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#localbusiness`,
    name: company.name,
    alternateName: "NATURCHEM",
    url: siteUrl,
    description: copy.description,
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
  const schemaLocale: Locale = locale === "en" || locale === "de" ? locale : "cs";
  const copy = getOrganizationSchemaCopy(schemaLocale);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "NATURCHEM",
    alternateName: "NATURCHEM, s.r.o.",
    url: siteUrl,
    inLanguage: locale,
    description: copy.description,
    publisher: { "@id": `${siteUrl}/#organization` }
  };
}
