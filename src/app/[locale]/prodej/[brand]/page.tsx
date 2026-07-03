import type { Metadata } from "next";

import { notFound } from "next/navigation";



import { PageCtaStrip } from "@/components/PageCtaStrip";

import { PageHeroBand } from "@/components/PageHeroBand";

import { JsonLd } from "@/components/Schema";

import { SalesCategoryOverview } from "@/components/SalesCategoryOverview";

import { SalesPageToolbar } from "@/components/SalesPageToolbar";

import { getPageCtaPresets } from "@/lib/i18n/cta-i18n";

import { getSalesBrand, getSalesContent } from "@/lib/i18n/content";

import { getMessages } from "@/lib/i18n/get-messages";

import { pageMetadata } from "@/lib/i18n/metadata-helpers";

import { localizeHref } from "@/lib/i18n/navigation";

import { isLocale, locales, type Locale } from "@/lib/i18n/locales";

import { formatSalesProductCount } from "@/lib/sales-i18n";

import { getPageHeroTheme } from "@/lib/hero-images";

import { siteUrl } from "@/lib/site";
import type { SalesBrand } from "@/lib/sales-types";



type Props = {

  params: Promise<{ locale: string; brand: string }>;

};



export async function generateStaticParams() {
  const sales = await getSalesContent("cs");
  return locales.flatMap((locale) =>
    sales.brands.map((brand: SalesBrand) => ({ locale, brand: brand.slug }))
  );
}



export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const { locale: localeParam, brand: brandSlug } = await params;

  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";

  const brand = await getSalesBrand(brandSlug, locale);

  if (!brand) {

    const fallback = locale === "de" ? "Vertrieb" : locale === "en" ? "Sales" : "Prodej";

    return { title: fallback };

  }



  return pageMetadata({

    locale,

    path: `/prodej/${brandSlug}`,

    title: messagesTitle(locale, brand.name),

    description: brand.tagline || brand.introParagraphs[0]

  });

}



function messagesTitle(locale: Locale, brandName: string) {

  if (locale === "de") return `${brandName} | Gerätevertrieb NATURCHEM`;

  if (locale === "en") return `${brandName} | NATURCHEM instrument sales`;

  return `${brandName} | NATURCHEM`;

}



export default async function SalesBrandPage({ params }: Props) {

  const { locale: localeParam, brand: brandSlug } = await params;

  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";

  const messages = await getMessages(locale);

  const sales = await getSalesContent(locale);

  const brand = await getSalesBrand(brandSlug, locale);

  if (!brand) notFound();



  const pageCtaPresets = getPageCtaPresets(locale);

  const link = (href: string) => localizeHref(href, locale);

  const productCountLabel = (count: number) => formatSalesProductCount(count, messages.sales);
  const hasProducts = brand.products.length > 0;

  const pageUrl = `${siteUrl}${link(`/prodej/${brandSlug}`)}/`.replace(/([^:]\/)\/+/g, "$1");



  const breadcrumbData = {

    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [

      { "@type": "ListItem", position: 1, name: messages.common.breadcrumbHome, item: `${siteUrl}${link("/")}/` },

      { "@type": "ListItem", position: 2, name: messages.sales.breadcrumb, item: `${siteUrl}${link("/prodej")}/` },

      { "@type": "ListItem", position: 3, name: brand.name, item: pageUrl }

    ]

  };



  return (

    <main className="section premium-page sales-page sales-brand-page">

      <JsonLd data={breadcrumbData} />

      <PageHeroBand

        locale={locale}

        theme={getPageHeroTheme(`/prodej/${brandSlug}`)}

        breadcrumbs={[

          { name: messages.common.breadcrumbHome, href: link("/") },

          { name: messages.sales.breadcrumb, href: link("/prodej") },

          { name: brand.name }

        ]}

      >

        <header className="premium-page-hero page-hero--photo sales-hero">
          {brand.partnershipRole ? (
            <p className="eyebrow sales-eyebrow">{brand.partnershipRole}</p>
          ) : null}
          <h1>{brand.name}</h1>
          {brand.legalName ? <p className="sales-brand-legal-name">{brand.legalName}</p> : null}
          <p className="page-lead">{brand.tagline}</p>

          {brand.website ? (

            <p className="btn-row sales-brand-website">

              <a href={brand.website} className="button secondary" target="_blank" rel="noopener noreferrer">

                {messages.sales.manufacturerWebsite}

              </a>

            </p>

          ) : null}

        </header>

      </PageHeroBand>



      <section className="section content-block container page-first-section sales-brand-main page-below-fold">

        <SalesPageToolbar href={link("/prodej")} label={messages.sales.backToHub} />

        {hasProducts ? (
          <div className="sales-brand-categories" aria-labelledby="sales-categories-heading">
            <h2 id="sales-categories-heading">
              {brand.categoriesHeading ?? sales.hub.categoriesHeading}
            </h2>
            <SalesCategoryOverview
              locale={locale}
              brandSlug={brand.slug}
              productCountLabel={productCountLabel}
            />
          </div>
        ) : (
          <p className="muted sales-catalog-coming-soon">{messages.sales.catalogComingSoon}</p>
        )}

        <div className="sales-brand-intro-layout">

          <div className="sales-brand-intro-copy">

            {brand.introParagraphs.map((paragraph: string) => (

              <p key={paragraph.slice(0, 48)}>{paragraph}</p>

            ))}

          </div>

          {brand.offerItems.length > 0 ? (

            <aside className="sales-brand-offer" aria-labelledby="sales-brand-offer-heading">

              <h2 id="sales-brand-offer-heading">{messages.sales.distributorServicesHeading}</h2>

              <ul className="check-list">

                {brand.offerItems.map((item) => (

                  <li key={item}>{item}</li>

                ))}

              </ul>

            </aside>

          ) : null}

        </div>

      </section>



      <PageCtaStrip {...pageCtaPresets.sales} className="container" />

    </main>

  );

}

