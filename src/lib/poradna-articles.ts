import { getArticles } from "@/lib/articles";
import { shortenListingExcerpt } from "@/lib/excerpt";
import { normalizeArticleDate } from "@/lib/format-date";

export type PoradnaArticleListing = {
  title: string;
  href: string;
  excerpt: string;
  publishedAt: string;
  author?: string;
};

function sortByPublishedAt(articles: PoradnaArticleListing[]): PoradnaArticleListing[] {
  return [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getPoradnaArticles(): Promise<PoradnaArticleListing[]> {
  const mdArticles = await getArticles();
  const fromMarkdown: PoradnaArticleListing[] = mdArticles.map((article) => ({
    title: article.title,
    href: `/poradna/${article.slug}`,
    excerpt: shortenListingExcerpt(article.excerpt?.trim() || ""),
    publishedAt: normalizeArticleDate(article.publishedAt) || new Date().toISOString(),
    author: article.author
  }));

  return sortByPublishedAt(fromMarkdown);
}

export async function getLatestPoradnaArticles(limit: number): Promise<PoradnaArticleListing[]> {
  const articles = await getPoradnaArticles();
  return articles.slice(0, limit);
}
