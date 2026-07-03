import type { Metadata } from "next";



import { PageCtaStrip } from "@/components/PageCtaStrip";

import { PageHeroBand } from "@/components/PageHeroBand";

import { JsonLd } from "@/components/Schema";

import { SalesBrandsGrid } from "@/components/SalesBrandsGrid";

import { WorkProcessTimeline } from "@/components/WorkProcessTimeline";

import { getPageCtaPresets } from "@/lib/i18n/cta-i18n";

import { getSalesContent } from "@/lib/i18n/content";

import { getMessages } from "@/lib/i18n/get-messages";

import { pageMetadata } from "@/lib/i18n/metadata-helpers";

import { localizeHref } from "@/lib/i18n/navigation";

import { isLocale, type Locale } from "@/lib/i18n/locales";

import { formatSalesProductCount } from "@/lib/sales-i18n";

import { getPageHeroTheme } from "@/lib/hero-images";

import { getSalesInquiryStepIconKey } from "@/lib/service-icons";

import { siteUrl } from "@/lib/site";



type Props = {

  params: Promise<{ locale: string }>;

};



export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const { locale: localeParam } = await params;

  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";

  const sales = await getSalesContent(locale);

  return pageMetadata({

    locale,

    path: "/prodej",

    absoluteTitle: sales.hub.metaTitle,

    description: sales.hub.metaDescription

  });

}



export default async function ProdejPage({ params }: Props) {

  const { locale: localeParam } = await params;

  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";

  const messages = await getMessages(locale);

  const sales = await getSalesContent(locale);

  const pageCtaPresets = getPageCtaPresets(locale);

  const link = (href: string) => localizeHref(href, locale);

  const productCountLabel = (count: number) => formatSalesProductCount(count, messages.sales);

  const pageUrl = `${siteUrl}${link("/prodej")}/`.replace(/([^:]\/)\/+/g, "$1");

  const showIntroSection =
    sales.hub.introParagraphs.length > 0 ||
    sales.hub.highlights.length > 0 ||
    Boolean(sales.hub.distributorNote);



  const breadcrumbData = {

    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [

      { "@type": "ListItem", position: 1, name: messages.common.breadcrumbHome, item: `${siteUrl}${link("/")}/` },

      { "@type": "ListItem", position: 2, name: messages.sales.breadcrumb, item: pageUrl }

    ]

  };



  const webPageData = {

    "@context": "https://schema.org",

    "@type": "WebPage",

    name: sales.hub.schemaName,

    url: pageUrl,

    description: sales.hub.metaDescription

  };



  return (

    <main className="section premium-page sales-page">

      <JsonLd data={breadcrumbData} />

      <JsonLd data={webPageData} />

      <PageHeroBand

        locale={locale}

        theme={getPageHeroTheme("/prodej")}

        breadcrumbs={[

          { name: messages.common.breadcrumbHome, href: link("/") },

          { name: messages.sales.breadcrumb }

        ]}

      >

        <header className="premium-page-hero page-hero--photo sales-hero">

          <p className="eyebrow sales-eyebrow">{sales.hub.eyebrow}</p>

          <h1>{sales.hub.pageTitle}</h1>

          <p className="page-lead">{sales.hub.lead}</p>

        </header>

      </PageHeroBand>



      <section
        className="section section-surface sales-surface-section page-first-section page-below-fold"
        aria-labelledby="sales-brands-heading"
      >
        <div className="content-block container">
          <h2 id="sales-brands-heading">{sales.hub.brandsHeading}</h2>
          <SalesBrandsGrid
            brands={sales.brands}
            locale={locale}
            ctaLabel={messages.sales.brandCta}
            productCountLabel={productCountLabel}
          />
        </div>
      </section>

      {showIntroSection ? (
        <section className="section content-block container sales-intro-section">
          <article className="sales-intro-panel">
            {sales.hub.introHeading ? <h2>{sales.hub.introHeading}</h2> : null}
            {sales.hub.introParagraphs.length > 0 ? (
              <div className="sales-intro-copy">
                {sales.hub.introParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            ) : null}
            {sales.hub.highlights.length > 0 ? (
              <ul className="sales-feature-chips" aria-label={sales.hub.introHeading || undefined}>
                {sales.hub.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {sales.hub.distributorNote ? (
              <p className="sales-distributor-note">{sales.hub.distributorNote}</p>
            ) : null}
          </article>
        </section>
      ) : null}

      <section
        className="section content-block container sales-cooperation-process"
        aria-labelledby="sales-cooperation-heading"
      >

        <h2 id="sales-cooperation-heading">{sales.hub.cooperationHeading}</h2>

        <p className="muted section-intro">{sales.hub.cooperationLead}</p>

        <WorkProcessTimeline

          steps={sales.hub.cooperationSteps}

          processAria={messages.common.cooperationProcess}

          iconForStep={getSalesInquiryStepIconKey}

        />

      </section>



      <PageCtaStrip {...pageCtaPresets.sales} className="container" />

    </main>

  );

}

