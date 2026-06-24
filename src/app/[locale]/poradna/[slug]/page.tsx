import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleMarkdown } from "@/components/ArticleMarkdown";
import { ArticleRelatedArticles } from "@/components/ArticleRelatedArticles";
import { ArticleRelatedServices } from "@/components/ArticleRelatedServices";
import { JsonLd } from "@/components/Schema";
import { PageHeroBand } from "@/components/PageHeroBand";
import { getArticleBySlug, getArticleStaticParams, getLocalesForArticleSlug } from "@/lib/articles";
import { formatArticleDate, normalizeArticleDate } from "@/lib/format-date";
import { getPoradnaTopicLabel } from "@/lib/i18n/poradna-topic-i18n";
import { getMessages } from "@/lib/i18n/get-messages";
import { pageMetadata } from "@/lib/i18n/metadata-helpers";
import { localizeHref } from "@/lib/i18n/navigation";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { heroThemeForArticle } from "@/lib/poradna-topic";
import { siteUrl } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return getArticleStaticParams();
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const messages = await getMessages(locale);
  const article = await getArticleBySlug(slug, locale);

  if (!article) {
    return { title: messages.poradna.articleFallback };
  }

  const availableLocales = await getLocalesForArticleSlug(article.slug);

  return pageMetadata({
    locale,
    path: `/poradna/${article.slug}`,
    title: article.title,
    description: article.excerpt || messages.poradna.articleMetaFallback,
    availableLocales,
    ogImage: article.heroImage,
    ogType: "article"
  });
}

export default async function CmsArticlePage({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "cs";
  const messages = await getMessages(locale);
  const article = await getArticleBySlug(slug, locale);

  if (!article) {
    notFound();
  }

  const link = (href: string) => localizeHref(href, locale);
  const displayDate = formatArticleDate(article.updatedAt || article.publishedAt, locale);
  const topicLabel = getPoradnaTopicLabel(article.topic, locale);
  const articleUrl = `${siteUrl}${link(`/poradna/${article.slug}`)}/`.replace(/([^:]\/)\/+/g, "$1");
  const poradnaUrl = `${siteUrl}${link("/poradna")}/`.replace(/([^:]\/)\/+/g, "$1");

  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt || "",
    author: { "@type": "Person", name: article.author || "NATURCHEM" },
    publisher: { "@type": "Organization", name: "NATURCHEM, s.r.o." },
    datePublished: normalizeArticleDate(article.publishedAt) || new Date().toISOString(),
    dateModified:
      normalizeArticleDate(article.updatedAt) ||
      normalizeArticleDate(article.publishedAt) ||
      new Date().toISOString(),
    mainEntityOfPage: articleUrl
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: messages.common.breadcrumbHome, item: `${siteUrl}${link("/")}/` },
      { "@type": "ListItem", position: 2, name: messages.nav.articles, item: poradnaUrl },
      { "@type": "ListItem", position: 3, name: article.title, item: articleUrl }
    ]
  };

  return (
    <main className="section article-page premium-page">
      <JsonLd data={articleData} />
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        locale={locale}
        theme={heroThemeForArticle(article)}
        imageSrc={article.heroImage}
        breadcrumbs={[
          { name: messages.common.breadcrumbHome, href: link("/") },
          { name: messages.nav.articles, href: link("/poradna") }
        ]}
      >
        <header className="premium-page-hero page-hero--photo">
          <p className="eyebrow">{topicLabel}</p>
          <h1>{article.title}</h1>
          <p className="article-hero-meta muted">
            {article.author || "NATURCHEM"}
            {displayDate ? ` · ${displayDate}` : null}
          </p>
        </header>
      </PageHeroBand>

      <div className="container article-page-body page-first-section">
        {article.excerpt ? (
          <aside className="article-tldr" aria-label={messages.poradna.tldrAria}>
            <p className="article-tldr-label">{messages.poradna.tldrLabel}</p>
            <p className="article-tldr-text">{article.excerpt}</p>
          </aside>
        ) : null}

        <div className="article-content">
          <div className="article-body">
            <ArticleMarkdown>{article.body}</ArticleMarkdown>
          </div>
        </div>

        <ArticleRelatedServices
          locale={locale}
          title={article.title}
          slug={article.slug}
          topic={article.topic}
        />

        <ArticleRelatedArticles locale={locale} slug={article.slug} topic={article.topic} />
      </div>
    </main>
  );
}
