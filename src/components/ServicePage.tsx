import Link from "next/link";
import { PageHeroBand } from "@/components/PageHeroBand";
import { OverviewGridCell } from "@/components/OverviewGridCell";
import { ServiceContextPhoto } from "@/components/ServiceContextPhoto";
import { IndexCard } from "@/components/IndexCard";
import { InlineEmphasis } from "@/components/InlineEmphasis";
import { ServiceFaqTeaser } from "@/components/ServiceFaqTeaser";
import { ServicePoradnaTeaser } from "@/components/ServicePoradnaTeaser";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { ServiceIcon } from "@/components/ServiceIcon";
import { JsonLd } from "@/components/Schema";
import { getFaqTeaserItemsForLocale } from "@/lib/i18n/faq-helpers";
import { getCtaCopy } from "@/lib/i18n/cta-i18n";
import { getProvozyNavLabel, getSectors, getSiteServices } from "@/lib/i18n/content";
import { TrustBand } from "@/components/TrustBand";
import { getServiceTrustBandItems } from "@/lib/i18n/home-content";
import { localizeHref } from "@/lib/i18n/navigation";
import { getServiceCopy } from "@/lib/i18n/service-copy-i18n";
import type { Locale } from "@/lib/i18n/locales";
import { getSeoLandingsForService } from "@/lib/seo-landing-service-links";
import { contactUrl } from "@/lib/contact-url";
import { relatedSectorsForService } from "@/lib/service-sector-links";
import { CategoryBadge } from "@/components/CategoryBadge";
import { getServiceCategoryFromHref } from "@/lib/service-categories";
import { getDetailGroupIconKey } from "@/lib/service-icons";
import { getServiceHeroTheme } from "@/lib/hero-images";
import { company, siteUrl } from "@/lib/site";

type Props = {
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
};

export async function ServicePage(props: Props) {
  const { locale } = props;
  const copy = getServiceCopy(locale);
  const ctaCopy = getCtaCopy(locale);
  const trustItems = getServiceTrustBandItems(locale);
  const services = await getSiteServices(locale);
  const sectors = await getSectors(locale);
  const link = (href: string) => localizeHref(href, locale);

  const bareSlug = props.slug.split("/").pop() ?? props.slug;
  const serviceMeta = services.find((s) => s.href === `/${props.slug}`);
  const relatedServices = services.filter((s) => s.href !== `/${props.slug}`).slice(0, 3);
  const contactServiceValue = props.contactService || serviceMeta?.contactService || props.title;
  const contactCta = serviceMeta?.contactCta ?? ctaCopy.contactSubmitCta;
  const quickContactHref = contactUrl(contactServiceValue);
  const sectorMetaByHref = new Map(sectors.map((s) => [s.href, s]));
  const sectorCrossLinks = relatedSectorsForService(bareSlug);
  const seoLandingLinks = await getSeoLandingsForService(`/sluzby/${bareSlug}`, locale, 2);
  const relatedLinks = props.relatedLinks ?? [];
  const keyScope = props.scope.slice(0, 4);
  const keyWhenNeeded = props.whenNeeded.slice(0, 4);
  const keyOutputs = props.outputs.slice(0, 3);
  const keyDocs = props.docs.slice(0, 3);
  const practicalExamples = props.practicalSituations?.slice(0, 3) ?? [];
  const sectorLabel = await getProvozyNavLabel(locale);
  const faqTeaserItems = props.faqCategoryId
    ? await getFaqTeaserItemsForLocale(props.faqCategoryId, locale, 5)
    : [];
  const detailGroups = [
    practicalExamples.length > 0
      ? { title: copy.practicalExamplesHeading, items: practicalExamples }
      : null,
    props.commonMistakes && props.commonMistakes.length > 0
      ? { title: copy.mistakesHeading, items: props.commonMistakes }
      : null
  ].filter((group) => group !== null);

  const mergedRelated = [
    ...seoLandingLinks.map((l) => ({
      href: l.href,
      title: l.title,
      description: l.description,
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
    ...sectorCrossLinks.map((s) => {
      const sector = sectorMetaByHref.get(s.href);
      return {
        href: s.href,
        title: s.title,
        description: sector?.description,
        cta: sector?.linkHint ?? copy.viewSector,
        sectionLabel: sectorLabel
      };
    }),
    ...relatedServices.map((s) => ({
      href: s.href,
      title: s.title,
      description: s.short,
      cta: copy.viewService,
      sectionLabel: undefined as string | undefined
    }))
  ].slice(0, 3);

  const pageUrl = `${siteUrl}${link(`/${props.slug}`)}/`.replace(/([^:]\/)\/+/g, "$1");

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: props.title,
    name: props.title,
    provider: { "@id": `${siteUrl}/#organization`, "@type": "Organization", name: company.name },
    areaServed: { "@type": "Country", name: "Czech Republic" },
    url: pageUrl,
    description: props.intro
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: copy.breadcrumbHome, item: `${siteUrl}${link("/")}/`.replace(/([^:]\/)\/+/g, "$1") },
      { "@type": "ListItem", position: 2, name: copy.breadcrumbServices, item: `${siteUrl}${link("/sluzby")}/` },
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
    itemListElement: [...relatedLinks, ...sectorCrossLinks].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: `${siteUrl}${link(item.href)}/`.replace(/([^:]\/)\/+/g, "$1")
    }))
  };

  const heroTheme = getServiceHeroTheme(props.slug);
  const serviceCategory = getServiceCategoryFromHref(`/${props.slug}`);

  return (
    <main className="page">
      <JsonLd data={serviceData} />
      <JsonLd data={breadcrumbData} />
      {relatedLinks.length > 0 || sectorCrossLinks.length > 0 ? (
        <JsonLd data={relatedItemListData} />
      ) : null}
      <PageHeroBand
        locale={locale}
        theme={heroTheme}
        variant="service"
        breadcrumbs={[
          { name: copy.breadcrumbHome, href: link("/") },
          { name: copy.breadcrumbServices, href: link("/sluzby") },
          { name: props.title }
        ]}
      >
        <header className="page-header service-hero service-hero--photo service-hero--single">
          {serviceCategory ? (
            <CategoryBadge category={serviceCategory} locale={locale} className="service-hero-category" />
          ) : null}
          <h1>{props.title}</h1>
          <p className="page-lead">
            <InlineEmphasis text={props.intro} />
          </p>
        </header>
      </PageHeroBand>

      <TrustBand items={trustItems} heading={copy.trustAria} compact />

      <div className="container">
        <p className="service-entity-blurb muted">
          {copy.entityBlurb}
          <Link href={link("/akreditace-autorizace-dokumenty")}>{copy.accreditationLink}</Link>.
        </p>
      </div>

      <section
        className={[
          "service-overview-section page-below-fold",
          serviceCategory ? `service-overview-section--${serviceCategory}` : "section--forest-tint"
        ].join(" ")}
        aria-label={copy.overviewAria}
      >
        <div className="container">
          <h2 className="service-overview-title">{copy.overviewHeading}</h2>
          <div className="service-overview-layout">
            <div className="service-overview-panel">
              <div
                className={[
                  "service-overview-grid",
                  keyWhenNeeded.length === 0 ? "service-overview-grid--three" : ""
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {keyWhenNeeded.length > 0 ? (
                  <OverviewGridCell icon="process-posouzeni" title={copy.whenNeededHeading}>
                    <ul className="check-list">
                      {keyWhenNeeded.map((item) => (
                        <li key={item}>
                          <InlineEmphasis text={item} />
                        </li>
                      ))}
                    </ul>
                  </OverviewGridCell>
                ) : null}

                <OverviewGridCell icon="process-rozsah" title={props.scopeHeading ?? copy.scopeHeading}>
                  <ul className="check-list">
                    {keyScope.map((item) => (
                      <li key={item}>
                        <InlineEmphasis text={item} />
                      </li>
                    ))}
                  </ul>
                </OverviewGridCell>

                <OverviewGridCell icon="process-vystup" title={copy.outputsHeading}>
                  <ul className="check-list">
                    {keyOutputs.map((item) => (
                      <li key={item}>
                        <InlineEmphasis text={item} />
                      </li>
                    ))}
                  </ul>
                </OverviewGridCell>

                <OverviewGridCell
                  icon="process-posouzeni"
                  title={copy.howToStartHeading}
                  className="service-overview-cell--start"
                >
                  <p className="muted">{copy.docsIntro}</p>
                  <ul className="check-list">
                    {keyDocs.map((item) => (
                      <li key={item}>
                        <InlineEmphasis text={item} />
                      </li>
                    ))}
                  </ul>
                  <Link className="button service-overview-cta--in-cell" href={quickContactHref}>
                    {contactCta}
                  </Link>
                </OverviewGridCell>
              </div>
              <div className="service-overview-actions">
                <Link className="button service-overview-cta--in-bar" href={quickContactHref}>
                  {contactCta}
                </Link>
              </div>
            </div>
            <ServiceContextPhoto theme={heroTheme} className="service-overview-photo" />
          </div>
        </div>
      </section>

      <div className="container page-inner page-below-fold">
        {detailGroups.length > 0 ? (
          <section className="content-block service-extra-section">
            <details className="service-extra-details">
              <summary>{copy.extraInfoSummary}</summary>
              <div className="service-extra-grid">
                {detailGroups.map((group) => (
                  <article key={group.title} className="service-extra-card">
                    <div className="service-extra-card-head">
                      <ServiceIcon icon={getDetailGroupIconKey(group.title)} variant="inline" />
                      <h3>{group.title}</h3>
                    </div>
                    <ul className="compact-list">
                      {group.items.map((item) => (
                        <li key={item}>
                          <InlineEmphasis text={item} />
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </details>
          </section>
        ) : null}

        {props.faqCategoryId ? (
          <ServiceFaqTeaser locale={locale} categoryId={props.faqCategoryId} />
        ) : null}

        <ServicePoradnaTeaser locale={locale} serviceSlug={props.slug} />

        {mergedRelated.length > 0 ? (
          <section className="content-block">
            <h2>{copy.relatedHeading}</h2>
            <div className="grid grid-3 index-card-grid">
              {mergedRelated.map((item) => (
                <IndexCard
                  key={item.href}
                  href={link(item.href)}
                  title={item.title}
                  cta={item.cta}
                  className="service-related-card"
                  serviceCategory={getServiceCategoryFromHref(item.href)}
                  icon={<ServiceIcon href={item.href} variant="inline" size={20} />}
                  meta={
                    item.sectionLabel ? (
                      <p className="related-card-section-label">{item.sectionLabel}</p>
                    ) : null
                  }
                >
                  {item.description ? (
                    <p className="muted">
                      <InlineEmphasis text={item.description} />
                    </p>
                  ) : null}
                </IndexCard>
              ))}
            </div>
          </section>
        ) : null}
      </div>

      <PageCtaStrip
        text={copy.ctaStripText}
        primaryLabel={ctaCopy.globalCta}
        primaryHref={quickContactHref}
        secondaryLabel={copy.accreditationLink}
        secondaryHref={link("/akreditace-autorizace-dokumenty")}
        className="container"
      />
    </main>
  );
}
