import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { JsonLd } from "@/components/Schema";
import { SalesPageToolbar } from "@/components/SalesPageToolbar";
import { SalesProductCatalog } from "@/components/SalesProductCatalog";
import { PcfPortableMonitorsChoiceTable } from "@/components/PcfPortableMonitorsChoiceTable";
import { SalesProductSections } from "@/components/SalesProductSections";
import { getPageCtaPresets } from "@/lib/i18n/cta-i18n";
import {
  getAllSalesSlugParams,
  getSalesCategory,
  getSalesProduct
} from "@/lib/i18n/content";
import { getMessages } from "@/lib/i18n/get-messages";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { localizeHref } from "@/lib/i18n/navigation";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { formatSalesProductCount } from "@/lib/sales-i18n";
import { isSalesCategorySlug } from "@/lib/sales-categories";
import { getPageHeroTheme } from "@/lib/hero-images";
import { getPcfCategoryLabel } from "@/lib/pcf-category-labels";
import { getPcfCategorySummary } from "@/lib/pcf-category-summaries";
import { buildSalesProductSchema } from "@/lib/sales-product-schema";
import { siteUrl } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string; brand: string; slug: string }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugKeys = new Set<string>();
  const slugParams: { brand: string; slug: string }[] = [];

  for (const locale of locales) {
    const params = await getAllSalesSlugParams(locale);
    for (const entry of params) {
      const key = `${entry.brand}/${entry.slug}`;
      if (slugKeys.has(key)) continue;
      slugKeys.add(key);
      slugParams.push({ brand: entry.brand, slug: entry.slug });
    }
  }

  return locales.flatMap((locale) =>
    slugParams.map(({ brand, slug }) => ({ locale, brand, slug }))
  );
}

function getCategoryLabel(
  _brandSlug: string,
  categoryId: string,
  locale: Locale,
  fallback: string
) {
  return getPcfCategoryLabel(categoryId, locale, fallback);
}

function getCategorySummary(_brandSlug: string, categoryId: string, locale: Locale) {
  return getPcfCategorySummary(categoryId, locale);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam, brand: brandSlug, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const fallback =
    locale === "de" ? "Vertrieb" : locale === "en" ? "Sales" : "Prodej";

  if (isSalesCategorySlug(brandSlug, slug)) {
    const match = await getSalesCategory(brandSlug, slug, locale);
    if (!match) return { title: fallback };
    const categoryTitle = getCategoryLabel(
      brandSlug,
      slug,
      locale,
      match.products[0]?.category ?? slug
    );
    return pageMetadata({
      locale,
      path: `/prodej/${brandSlug}/${slug}`,
      title: `${categoryTitle} | ${match.brand.name}`,
      description:
        getCategorySummary(brandSlug, slug, locale) || match.brand.tagline
    });
  }

  const match = await getSalesProduct(brandSlug, slug, locale);
  if (!match) return { title: fallback };

  return pageMetadata({
    locale,
    path: `/prodej/${brandSlug}/${slug}`,
    title: `${match.product.title} | ${match.brand.name}`,
    description: match.product.tagline || match.product.intro || match.brand.tagline
  });
}

export default async function SalesSlugPage({ params }: Props) {
  const { locale: localeParam, brand: brandSlug, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const messages = await getMessages(locale);
  const pageCtaPresets = getPageCtaPresets(locale);
  const link = (href: string) => localizeHref(href, locale);
  const productCountLabel = (count: number) => formatSalesProductCount(count, messages.sales);

  if (isSalesCategorySlug(brandSlug, slug)) {
    const match = await getSalesCategory(brandSlug, slug, locale);
    if (!match) notFound();

    const { brand, categoryId, products } = match;
    const categoryTitle = getCategoryLabel(
      brandSlug,
      categoryId,
      locale,
      products[0]?.category ?? categoryId
    );
    const categorySummary = getCategorySummary(brandSlug, categoryId, locale);
    const pageUrl =
      `${siteUrl}${link(`/prodej/${brandSlug}/${categoryId}`)}/`.replace(/([^:]\/)\/+/g, "$1");

    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: messages.common.breadcrumbHome,
          item: `${siteUrl}${link("/")}/`
        },
        {
          "@type": "ListItem",
          position: 2,
          name: messages.sales.breadcrumb,
          item: `${siteUrl}${link("/prodej")}/`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: brand.name,
          item: `${siteUrl}${link(`/prodej/${brandSlug}`)}/`
        },
        { "@type": "ListItem", position: 4, name: categoryTitle, item: pageUrl }
      ]
    };

    return (
      <main className="section premium-page sales-page sales-category-page">
        <JsonLd data={breadcrumbData} />
        <PageHeroBand
          locale={locale}
          theme={getPageHeroTheme(`/prodej/${brandSlug}`)}
          breadcrumbs={[
            { name: messages.common.breadcrumbHome, href: link("/") },
            { name: messages.sales.breadcrumb, href: link("/prodej") },
            { name: brand.name, href: link(`/prodej/${brandSlug}`) },
            { name: categoryTitle }
          ]}
        >
          <header className="premium-page-hero page-hero--photo sales-hero">
            <p className="eyebrow sales-eyebrow">{brand.name}</p>
            <h1>{categoryTitle}</h1>
            {categorySummary ? <p className="page-lead">{categorySummary}</p> : null}
            <p className="sales-catalog-heading-meta">{productCountLabel(products.length)}</p>
          </header>
        </PageHeroBand>

        <section className="section container page-first-section sales-category-main page-below-fold">
          <SalesPageToolbar
            href={link(`/prodej/${brandSlug}`)}
            label={messages.sales.backToBrand.replace("{brand}", brand.name)}
          />
          {brandSlug === "pcf-elettronica" && categoryId === "portable-monitors" ? (
            <PcfPortableMonitorsChoiceTable locale={locale} brandSlug={brandSlug} />
          ) : null}
          {products.length > 0 ? (
            <SalesProductCatalog
              brand={{ ...brand, products }}
              locale={locale}
              ctaLabel={messages.sales.productCta}
              productCountLabel={productCountLabel}
              categoryId={categoryId}
              hideCategoryHeader
            />
          ) : (
            <p className="muted sales-catalog-coming-soon">{messages.sales.catalogComingSoon}</p>
          )}
        </section>

        <PageCtaStrip {...pageCtaPresets.sales} className="container" />
      </main>
    );
  }

  const match = await getSalesProduct(brandSlug, slug, locale);
  if (!match) notFound();

  const { brand, product } = match;
  const categoryTitle = product.categoryId
    ? getCategoryLabel(brandSlug, product.categoryId, locale, product.category)
    : product.category;
  const pageUrl =
    `${siteUrl}${link(`/prodej/${brandSlug}/${slug}`)}/`.replace(/([^:]\/)\/+/g, "$1");

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: messages.common.breadcrumbHome,
        item: `${siteUrl}${link("/")}/`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: messages.sales.breadcrumb,
        item: `${siteUrl}${link("/prodej")}/`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: brand.name,
        item: `${siteUrl}${link(`/prodej/${brandSlug}`)}/`
      },
      ...(product.categoryId
        ? [
            {
              "@type": "ListItem" as const,
              position: 4,
              name: categoryTitle,
              item: `${siteUrl}${link(`/prodej/${brandSlug}/${product.categoryId}`)}/`
            },
            { "@type": "ListItem" as const, position: 5, name: product.title, item: pageUrl }
          ]
        : [{ "@type": "ListItem" as const, position: 4, name: product.title, item: pageUrl }])
    ]
  };

  const productSchema = buildSalesProductSchema({
    product,
    brand,
    pageUrl
  });

  return (
    <main className="section premium-page sales-page sales-product-page">
      <JsonLd data={breadcrumbData} />
      <JsonLd data={productSchema} />
      <PageHeroBand
        locale={locale}
        theme={getPageHeroTheme(`/prodej/${brandSlug}`)}
        breadcrumbs={[
          { name: messages.common.breadcrumbHome, href: link("/") },
          { name: messages.sales.breadcrumb, href: link("/prodej") },
          { name: brand.name, href: link(`/prodej/${brandSlug}`) },
          ...(product.categoryId
            ? [{ name: categoryTitle, href: link(`/prodej/${brandSlug}/${product.categoryId}`) }]
            : []),
          { name: product.title }
        ]}
      >
        <header className="premium-page-hero page-hero--photo sales-hero">
          <p className="eyebrow sales-eyebrow">{categoryTitle}</p>
          <h1>{product.title}</h1>
          {product.tagline ? <p className="page-lead">{product.tagline}</p> : null}
        </header>
      </PageHeroBand>

      <section className="section container page-first-section sales-product-main page-below-fold">
        <SalesPageToolbar
          href={
            product.categoryId
              ? link(`/prodej/${brandSlug}/${product.categoryId}`)
              : link(`/prodej/${brandSlug}`)
          }
          label={
            product.categoryId
              ? messages.sales.backToCategory.replace("{category}", categoryTitle)
              : messages.sales.backToBrand.replace("{brand}", brand.name)
          }
        />
        <SalesProductSections
          product={product}
          labels={{
            specificationsHeading: messages.sales.specificationsHeading,
            featuresHeading: messages.sales.featuresHeading,
            applicationsHeading: messages.sales.applicationsHeading,
            emptySection: messages.sales.emptySection,
            datasheet: messages.sales.datasheet,
            manufacturerPage: messages.sales.manufacturerPage
          }}
        />
      </section>

      <PageCtaStrip {...pageCtaPresets.sales} className="container" />
    </main>
  );
}
