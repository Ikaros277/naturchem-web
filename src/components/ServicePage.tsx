import { JsonLd } from "@/components/Schema";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { getFaqTeaserItemsForLocale } from "@/lib/i18n/faq-helpers";
import { getCtaCopy } from "@/lib/i18n/cta-i18n";
import { getProvozyNavLabel, getSectors, getSiteServices } from "@/lib/i18n/content";
import { localizeHref } from "@/lib/i18n/navigation";
import { getServiceCopy } from "@/lib/i18n/service-copy-i18n";
import type { Locale } from "@/lib/i18n/locales";
import { getSeoLandingsForService } from "@/lib/seo-landing-service-links";
import { contactUrl } from "@/lib/contact-url";
import { relatedSectorsForService } from "@/lib/service-sector-links";
import { getServiceCategoryFromHref } from "@/lib/service-categories";
import { buildFaqPageJsonLd } from "@/lib/faq-jsonld";
import { stripInlineMarkdown } from "@/lib/plain-text";
import { company, siteUrl } from "@/lib/site";
import type { FaqItem } from "@/lib/faq";
import { getCzechServiceSearchSupport } from "@/lib/service-search-support";

export type ServicePageProps = {
  locale: Locale;
  title: string;
  intro: string;
  scopeHeading?: string;
  heroPanelTitle?: string;
  contactService?: string;
  scope: string[];
  whenNeeded: string[];
  docs: string[];
  outputs: string[];
  commonMistakes?: string[];
  practicalSituations?: string[];
  relatedLinks?: { title: string; href: string; description: string }[];
  slug: string;
  faqCategoryId?: string;
  faqItems?: FaqItem[];
};

export async function ServicePage(props: ServicePageProps) {
  const { locale } = props;
  const copy = getServiceCopy(locale);
  const ctaCopy = getCtaCopy(locale);
  const services = await getSiteServices(locale);
  const sectors = await getSectors(locale);
  const link = (href: string) => localizeHref(href, locale);

  const bareSlug = props.slug.split("/").pop() ?? props.slug;
  const searchSupport = locale === "cs" ? getCzechServiceSearchSupport(bareSlug) : undefined;
  const serviceMeta = services.find((s) => s.href === `/${props.slug}`);
  const category = getServiceCategoryFromHref(`/${props.slug}`);
  const relatedServices = services
    .filter((s) => s.href !== `/${props.slug}` && getServiceCategoryFromHref(s.href) === category)
    .slice(0, 2);
  const contactServiceValue = props.contactService || serviceMeta?.contactService || props.title;
  const contactCta = serviceMeta?.contactCta ?? ctaCopy.contactSubmitCta;
  const contactPath = contactUrl(contactServiceValue);
  const contextualContact = searchSupport?.contactMessage
    ? contactPath.replace("#", `&message=${encodeURIComponent(searchSupport.contactMessage)}#`)
    : contactPath;
  const quickContactHref = link(contextualContact);
  const sectorMetaByHref = new Map(sectors.map((s) => [s.href, s]));
  const sectorCrossLinks = relatedSectorsForService(bareSlug);
  const seoLandingLinks = await getSeoLandingsForService(`/sluzby/${bareSlug}`, locale, 3);
  const relatedLinks = props.relatedLinks ?? [];
  const sectorLabel = await getProvozyNavLabel(locale);
  const faqTeaserItems = props.faqItems ?? searchSupport?.faqItems ?? (props.faqCategoryId
    ? await getFaqTeaserItemsForLocale(props.faqCategoryId, locale, 5)
    : []);
  const mergedRelated = [
    ...(searchSupport?.relatedLinks ?? []).map((l) => ({
      ...l,
      cta: copy.viewService,
      sectionLabel: undefined as string | undefined
    })),
    ...relatedLinks.map((l) => ({
      href: l.href,
      title: l.title,
      description: l.description,
      cta: copy.viewService,
      sectionLabel: undefined as string | undefined
    })),
    ...relatedServices.map((s) => ({
      href: s.href,
      title: s.title,
      description: s.short,
      cta: copy.viewService,
      sectionLabel: undefined as string | undefined
    })),
    ...seoLandingLinks.slice(0, 1).map((l) => ({
      href: l.href,
      title: l.title,
      description: l.description,
      cta: copy.viewService,
      sectionLabel: undefined as string | undefined
    })),
    ...sectorCrossLinks.map((s) => {
      const sector = sectorMetaByHref.get(s.href);
      return {
        href: s.href,
        title: sector?.title ?? s.title,
        description: sector?.description,
        cta: sector?.linkHint ?? copy.viewSector,
        sectionLabel: sectorLabel
      };
    }),
    ...seoLandingLinks.slice(1).map((s) => ({
      href: s.href,
      title: s.title,
      description: s.description,
      cta: copy.viewService,
      sectionLabel: undefined as string | undefined
    }))
  ].filter((item, index, items) => items.findIndex(other => other.href === item.href) === index);

  const pageUrl = `${siteUrl}${link(`/${props.slug}`)}/`.replace(/([^:]\/)\/+/g, "$1");

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: props.title,
    name: props.title,
    provider: { "@id": `${siteUrl}/#organization`, "@type": "Organization", name: company.name },
    areaServed: { "@type": "Country", name: "Czech Republic" },
    url: pageUrl,
    description: stripInlineMarkdown(props.intro)
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: copy.breadcrumbHome, item: `${siteUrl}${link("/")}/`.replace(/([^:]\/)\/+/g, "$1") },
      { "@type": "ListItem", position: 2, name: copy.breadcrumbServices, item: `${siteUrl}${link("/sluzby")}/`.replace(/([^:]\/)\/+/g, "$1") },
      {
        "@type": "ListItem",
        position: 3,
        name: props.title,
        item: pageUrl
      }
    ]
  };

  const relatedItemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: copy.relatedListName(props.title),
    itemListElement: mergedRelated.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: `${siteUrl}${link(item.href)}/`.replace(/([^:]\/)\/+/g, "$1")
    }))
  };

  return (
    <ServiceDetailLayout
      content={props}
      contactHref={quickContactHref}
      contactLabel={contactCta}
      faqItems={faqTeaserItems}
      faqUiLabels={locale === "cs" && (props.faqItems || searchSupport?.faqItems)
        ? { tip: "Poznámka:", legal: "Odborné podklady", related: "Související:" }
        : undefined}
      evidence={searchSupport?.evidence}
      relatedItems={mergedRelated}
      schemas={<>
        <JsonLd data={serviceData} />
        <JsonLd data={breadcrumbData} />
        {faqTeaserItems.length > 0 ? <JsonLd data={buildFaqPageJsonLd(faqTeaserItems)} /> : null}
        {mergedRelated.length > 0 ? <JsonLd data={relatedItemListData} /> : null}
      </>}
    />
  );
}
