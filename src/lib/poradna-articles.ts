import { getArticles } from "@/lib/articles";
import { shortenListingExcerpt } from "@/lib/excerpt";
import { normalizeArticleDate } from "@/lib/format-date";
import type { Locale } from "@/lib/i18n/locales";
import { defaultLocale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";
import type { PoradnaTopic } from "@/lib/poradna-topic";

export type PoradnaArticleListing = {
  slug: string;
  title: string;
  href: string;
  excerpt: string;
  topic: PoradnaTopic;
  publishedAt: string;
  author?: string;
  heroImage?: string;
};

function sortByPublishedAt(articles: PoradnaArticleListing[]): PoradnaArticleListing[] {
  return [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getPoradnaArticles(locale: Locale = defaultLocale): Promise<PoradnaArticleListing[]> {
  const mdArticles = await getArticles(locale);
  const fromMarkdown: PoradnaArticleListing[] = mdArticles.map((article) => ({
    slug: article.slug,
    title: article.title,
    href: localizeHref(`/poradna/${article.slug}`, locale),
    excerpt: shortenListingExcerpt(article.excerpt?.trim() || ""),
    topic: article.topic,
    publishedAt: normalizeArticleDate(article.publishedAt) || new Date().toISOString(),
    author: article.author,
    heroImage: article.heroImage
  }));

  return sortByPublishedAt(fromMarkdown);
}

export async function getLatestPoradnaArticles(
  limit: number,
  locale: Locale = defaultLocale
): Promise<PoradnaArticleListing[]> {
  const articles = await getPoradnaArticles(locale);
  return articles.slice(0, limit);
}

export function getRelatedArticlesForArticle(
  currentSlug: string,
  topic: PoradnaTopic,
  articles: PoradnaArticleListing[],
  limit = 3
): PoradnaArticleListing[] {
  const others = articles.filter((article) => article.slug !== currentSlug);
  const sameTopic = others.filter((article) => article.topic === topic);
  const differentTopic = others.filter((article) => article.topic !== topic);

  return [...sameTopic, ...differentTopic].slice(0, limit);
}
