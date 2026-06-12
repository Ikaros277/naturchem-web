import { getArticles, type Article } from "@/lib/articles";
import { shortenListingExcerpt } from "@/lib/excerpt";
import { normalizeArticleDate } from "@/lib/format-date";
import type { PoradnaTopic } from "@/lib/poradna-topic";

export type PoradnaArticleListing = {
  slug: string;
  title: string;
  href: string;
  excerpt: string;
  topic: PoradnaTopic;
  searchText: string;
  publishedAt: string;
  author?: string;
};

function sortByPublishedAt(articles: PoradnaArticleListing[]): PoradnaArticleListing[] {
  return [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

function stripMarkdownForSearch(body: string): string {
  return body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/#{1,6}\s+/g, "")
    .replace(/\|[^\n]+\|/g, " ")
    .replace(/[*_~`>#-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildSearchText(article: Article): string {
  return [article.title, article.excerpt, stripMarkdownForSearch(article.body)]
    .join(" ")
    .toLocaleLowerCase("cs-CZ");
}

export async function getPoradnaArticles(): Promise<PoradnaArticleListing[]> {
  const mdArticles = await getArticles();
  const fromMarkdown: PoradnaArticleListing[] = mdArticles.map((article) => ({
    slug: article.slug,
    title: article.title,
    href: `/poradna/${article.slug}`,
    excerpt: shortenListingExcerpt(article.excerpt?.trim() || ""),
    topic: article.topic,
    searchText: buildSearchText(article),
    publishedAt: normalizeArticleDate(article.publishedAt) || new Date().toISOString(),
    author: article.author
  }));

  return sortByPublishedAt(fromMarkdown);
}

export async function getLatestPoradnaArticles(limit: number): Promise<PoradnaArticleListing[]> {
  const articles = await getPoradnaArticles();
  return articles.slice(0, limit);
}
