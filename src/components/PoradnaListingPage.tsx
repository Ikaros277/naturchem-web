import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { PoradnaFilterableList } from "@/components/PoradnaFilterableList";
import { JsonLd } from "@/components/Schema";
import { getPageCtaPresets } from "@/lib/i18n/cta-i18n";
import { getMessages } from "@/lib/i18n/get-messages";
import { pageMetadata, localizedCanonical } from "@/lib/i18n/metadata-helpers";
import { localizeHref } from "@/lib/i18n/navigation";
import { locales, type Locale } from "@/lib/i18n/locales";
import { getPoradnaTopicLabels } from "@/lib/i18n/poradna-topic-i18n";
import { getPageHeroTheme } from "@/lib/hero-images";
import { getPoradnaArticles } from "@/lib/poradna-articles";
import { formatArticleDate } from "@/lib/format-date";
import { PORADNA_PAGE_SIZE, poradnaPageCount, poradnaPagePath, poradnaPaginationLabels } from "@/lib/poradna-pagination";

export async function poradnaListingMetadata(locale: Locale, page = 1): Promise<Metadata> {
  const messages = await getMessages(locale);
  const availableLocales = (await Promise.all(locales.map(async lang =>
    page <= poradnaPageCount((await getPoradnaArticles(lang)).length) ? lang : null
  ))).filter((lang): lang is Locale => lang !== null);
  if (!availableLocales.includes(locale)) notFound();
  return pageMetadata({
    locale, path: poradnaPagePath(page), availableLocales,
    title: page === 1 ? messages.poradna.metaTitle : `${messages.poradna.metaTitle} – ${poradnaPaginationLabels[locale].page} ${page}`,
    description: messages.poradna.metaDescription
  });
}

/** Each static page renders only twelve cards. All article URLs stay crawlable. */
export async function PoradnaListingPage({ locale, page = 1 }: { locale: Locale; page?: number }) {
  const messages = await getMessages(locale);
  const allArticles = await getPoradnaArticles(locale);
  const pageCount = poradnaPageCount(allArticles.length);
  if (page < 1 || page > pageCount) notFound();
  const articles = allArticles.slice((page - 1) * PORADNA_PAGE_SIZE, page * PORADNA_PAGE_SIZE)
    .map(a => ({ ...a, displayDate: formatArticleDate(a.publishedAt, locale) }));
  const link = (href: string) => localizeHref(href, locale);
  const url = localizedCanonical(poradnaPagePath(page), locale);
  const title = page === 1 ? messages.nav.articles : `${messages.nav.articles} – ${poradnaPaginationLabels[locale].page} ${page}`;
  return (
    <main className="section poradna-page premium-page">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: title, url, description: messages.poradna.metaDescription }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: messages.common.breadcrumbHome, item: localizedCanonical("/", locale) },
        { "@type": "ListItem", position: 2, name: messages.nav.articles, item: localizedCanonical("/poradna", locale) },
        ...(page > 1 ? [{ "@type": "ListItem", position: 3, name: `${poradnaPaginationLabels[locale].page} ${page}`, item: url }] : [])
      ] }} />
      <PageHeroBand locale={locale} className="page-hero-band--compact" theme={getPageHeroTheme("/poradna")} breadcrumbs={[
        { name: messages.common.breadcrumbHome, href: link("/") },
        { name: messages.nav.articles, ...(page > 1 ? { href: link("/poradna") } : {}) },
        ...(page > 1 ? [{ name: `${poradnaPaginationLabels[locale].page} ${page}` }] : [])
      ]}>
        <header className="premium-page-hero page-hero--photo">
          <p className="eyebrow">{messages.poradna.eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-lead">{messages.poradna.lead}</p>
        </header>
      </PageHeroBand>
      <div className="container page-first-section">
        <PoradnaFilterableList key={`${locale}/${page}`} articles={articles} locale={locale} topicLabels={getPoradnaTopicLabels(locale)} total={allArticles.length} page={page} pageCount={pageCount} />
        <PageCtaStrip {...getPageCtaPresets(locale).poradna} />
      </div>
    </main>
  );
}
