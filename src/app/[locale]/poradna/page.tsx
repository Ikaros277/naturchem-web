import type { Metadata } from "next";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { PoradnaFilterableList } from "@/components/PoradnaFilterableList";
import { JsonLd } from "@/components/Schema";
import { getPageCtaPresets } from "@/lib/i18n/cta-i18n";
import { getMessages } from "@/lib/i18n/get-messages";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { localizeHref } from "@/lib/i18n/navigation";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { getPoradnaTopicLabels } from "@/lib/i18n/poradna-topic-i18n";
import { getPageHeroTheme } from "@/lib/hero-images";
import { siteUrl } from "@/lib/site";
import { getPoradnaArticles } from "@/lib/poradna-articles";
import { formatArticleDate } from "@/lib/format-date";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const messages = await getMessages(locale);
  return pageMetadata({
    locale,
    path: "/poradna",
    title: messages.poradna.metaTitle,
    description: messages.poradna.metaDescription
  });
}

export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const messages = await getMessages(locale);
  const pageCtaPresets = getPageCtaPresets(locale);
  const topicLabels = getPoradnaTopicLabels(locale);
  const link = (href: string) => localizeHref(href, locale);
  const poradnaUrl = `${siteUrl}${link("/poradna")}/`.replace(/([^:]\/)\/+/g, "$1");

  const rawArticles = await getPoradnaArticles(locale);
  const mergedArticles = rawArticles.map((a) => ({
    ...a,
    displayDate: formatArticleDate(a.publishedAt, locale)
  }));

  const collectionPageData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: messages.nav.articles,
    url: poradnaUrl,
    description: messages.poradna.metaDescription
  };

  const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: mergedArticles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: article.title,
      url: `${siteUrl}${article.href}`
    }))
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: messages.common.breadcrumbHome, item: `${siteUrl}${link("/")}/` },
      { "@type": "ListItem", position: 2, name: messages.nav.articles, item: poradnaUrl }
    ]
  };

  return (
    <main className="section poradna-page premium-page">
      <JsonLd data={collectionPageData} />
      <JsonLd data={itemListData} />
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        locale={locale}
        theme={getPageHeroTheme("/poradna")}
        breadcrumbs={[
          { name: messages.common.breadcrumbHome, href: link("/") },
          { name: messages.nav.articles }
        ]}
      >
        <header className="premium-page-hero page-hero--photo">
          <p className="eyebrow">{messages.poradna.eyebrow}</p>
          <h1>{messages.nav.articles}</h1>
          <p className="page-lead">{messages.poradna.lead}</p>
        </header>
      </PageHeroBand>
      <div className="container page-first-section">
        <PoradnaFilterableList articles={mergedArticles} locale={locale} topicLabels={topicLabels} />
        <PageCtaStrip {...pageCtaPresets.poradna} />
      </div>
    </main>
  );
}
