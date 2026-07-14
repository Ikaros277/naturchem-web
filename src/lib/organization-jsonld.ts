import type { Locale } from "@/lib/i18n/locales";
import { locales } from "@/lib/i18n/locales";
import { localizedCanonical } from "@/lib/i18n/metadata-helpers";
import { getOrganizationSchemaCopy } from "@/lib/organization-jsonld-i18n";
import { company, getCompanyOffices, services, siteUrl } from "@/lib/site";

export type OrganizationCatalogService = {
  href: string;
  title: string;
  short: string;
};

function resolveCatalogServices(
  locale: Locale,
  catalogServices?: readonly OrganizationCatalogService[]
): readonly OrganizationCatalogService[] {
  if (catalogServices?.length) return catalogServices;
  return services.map((service) => ({
    href: service.href,
    title: service.title,
    short: service.short
  }));
}

export function buildOrganizationJsonLd(
  locale: Locale = "cs",
  catalogServices?: readonly OrganizationCatalogService[]
) {
  const copy = getOrganizationSchemaCopy(locale);
  const offerServices = resolveCatalogServices(locale, catalogServices);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: company.name,
    alternateName: "NATURCHEM",
    url: localizedCanonical("/", locale),
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
      itemListElement: offerServices.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          url: localizedCanonical(service.href, locale),
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
    url: localizedCanonical("/", locale),
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

export function buildWebSiteJsonLd(locale: Locale) {
  const copy = getOrganizationSchemaCopy(locale);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "NATURCHEM",
    alternateName: "NATURCHEM, s.r.o.",
    url: localizedCanonical("/", locale),
    inLanguage: locale,
    description: copy.description,
    publisher: { "@id": `${siteUrl}/#organization` }
  };
}

export function buildContactPageJsonLd(locale: Locale) {
  const copy = getOrganizationSchemaCopy(locale);
  const pageUrl = localizedCanonical("/kontakt", locale);

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${pageUrl}#contactpage`,
    name: copy.contactPageName,
    url: pageUrl,
    inLanguage: locale,
    description: copy.description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    mainEntity: { "@id": `${siteUrl}/#organization` }
  };
}
