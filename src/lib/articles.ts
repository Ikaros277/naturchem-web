import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { normalizeArticleDate } from "@/lib/format-date";
import type { Locale } from "@/lib/i18n/locales";
import { defaultLocale, locales } from "@/lib/i18n/locales";

function articlesDirectoryForLocale(locale: Locale): string {
  const subdir =
    locale === "en" ? "articles-en" : locale === "de" ? "articles-de" : "articles";
  return path.join(process.cwd(), "content", subdir);
}

import type { PoradnaTopic } from "@/lib/poradna-topic";
import { resolveArticleTopic } from "@/lib/poradna-topic";

export type ArticleStatus = "draft" | "scheduled" | "published";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  topic: PoradnaTopic;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  heroImage?: string;
  /** Explicit frontmatter status; drafts stay private regardless of publishedAt. */
  status: ArticleStatus;
  body: string;
};

type ArticleFrontmatter = {
  slug?: string;
  title?: string;
  excerpt?: string;
  topic?: string;
  publishedAt?: unknown;
  updatedAt?: unknown;
  author?: string;
  heroImage?: string;
  status?: unknown;
};

function resolveSlug(fileSlug: string, data: ArticleFrontmatter): string {
  const fromFrontmatter =
    typeof data.slug === "string" && data.slug.trim() ? data.slug.trim() : null;
  return fromFrontmatter ?? fileSlug;
}

function resolveStatus(raw: unknown): ArticleStatus {
  if (typeof raw !== "string") return "published";
  const value = raw.trim().toLowerCase();
  if (value === "draft") return "draft";
  if (value === "scheduled") return "scheduled";
  if (value === "published") return "published";
  return "published";
}

/** Opraví escapovaný markdown z některých editorů (např. \*\*, \| nebo \##). */
function normalizeMarkdownBody(body: string): string {
  return body
    .replace(/^\\(#{1,6}\s)/gm, "$1")
    .replace(/^\\-/gm, "-")
    .replace(/\\([\\`*_{}\[\]()#+\-.!|>])/g, "$1");
}

function toArticle(fileSlug: string, fileContents: string): Article {
  const parsed = matter(fileContents);
  const data = parsed.data as ArticleFrontmatter;
  const slug = resolveSlug(fileSlug, data);

  const title = data.title || slug;
  const publishedAt = normalizeArticleDate(data.publishedAt) || new Date().toISOString();
  let status = resolveStatus(data.status);

  // Future publishedAt without explicit draft → scheduled (even if status omitted).
  if (status === "published" && new Date(publishedAt).getTime() > Date.now()) {
    status = "scheduled";
  }

  return {
    slug,
    title,
    excerpt: data.excerpt || "",
    topic: resolveArticleTopic({ title, topic: data.topic }),
    publishedAt,
    updatedAt: normalizeArticleDate(data.updatedAt),
    author: data.author || "NATURCHEM",
    heroImage: typeof data.heroImage === "string" ? data.heroImage.trim() || undefined : undefined,
    status,
    body: normalizeMarkdownBody(parsed.content)
  };
}

/** Public on the site: not draft and publishedAt is now or in the past. */
export function isArticlePublic(article: Pick<Article, "status" | "publishedAt">, now = Date.now()): boolean {
  if (article.status === "draft") return false;
  const publishedMs = new Date(article.publishedAt).getTime();
  if (Number.isNaN(publishedMs)) return false;
  return publishedMs <= now;
}

async function readArticleFiles(locale: Locale = defaultLocale): Promise<string[]> {
  const articlesDirectory = articlesDirectoryForLocale(locale);
  const files = await fs.readdir(articlesDirectory);
  return files.filter((file) => file.endsWith(".md"));
}

async function readAllArticles(locale: Locale = defaultLocale): Promise<Article[]> {
  try {
    const mdFiles = await readArticleFiles(locale);

    const articles = (
      await Promise.all(
        mdFiles.map(async (file) => {
          const fileSlug = file.replace(/\.md$/, "");
          const fullPath = path.join(articlesDirectoryForLocale(locale), file);
          try {
            const fileContents = await fs.readFile(fullPath, "utf8");
            return toArticle(fileSlug, fileContents);
          } catch {
            return null;
          }
        })
      )
    ).filter((article): article is Article => article !== null);

    return articles.sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  } catch {
    return [];
  }
}

/** Published articles only (hides drafts and future publishedAt). */
export async function getArticles(locale: Locale = defaultLocale): Promise<Article[]> {
  const articles = await readAllArticles(locale);
  return articles.filter((article) => isArticlePublic(article));
}

export async function getArticleSlugLocaleMap(): Promise<ReadonlyMap<string, readonly Locale[]>> {
  const map = new Map<string, Set<Locale>>();

  await Promise.all(
    locales.map(async (locale) => {
      const articles = await getArticles(locale);
      for (const article of articles) {
        const existing = map.get(article.slug) ?? new Set<Locale>();
        existing.add(locale);
        map.set(article.slug, existing);
      }
    })
  );

  return new Map([...map.entries()].map(([slug, localeSet]) => [slug, [...localeSet]]));
}

export async function getLocalesForArticleSlug(slug: string): Promise<Locale[]> {
  const map = await getArticleSlugLocaleMap();
  return [...(map.get(slug) ?? [defaultLocale])];
}

/**
 * Static params include scheduled articles (so ISR can publish them without redeploy)
 * but exclude drafts (no public URL until status changes).
 */
export async function getArticleStaticParams(): Promise<{ locale: Locale; slug: string }[]> {
  const params: { locale: Locale; slug: string }[] = [];

  await Promise.all(
    locales.map(async (locale) => {
      const articles = await readAllArticles(locale);
      for (const article of articles) {
        if (article.status === "draft") continue;
        params.push({ locale, slug: article.slug });
      }
    })
  );

  return params;
}

export async function getArticleBySlug(slug: string, locale: Locale = defaultLocale): Promise<Article | null> {
  try {
    const decoded = decodeURIComponent(slug);
    const mdFiles = await readArticleFiles(locale);
    const articlesDirectory = articlesDirectoryForLocale(locale);

    for (const file of mdFiles) {
      const fileSlug = file.replace(/\.md$/, "");
      const fullPath = path.join(articlesDirectory, file);
      try {
        const fileContents = await fs.readFile(fullPath, "utf8");
        const article = toArticle(fileSlug, fileContents);

        if (
          article.slug === slug ||
          article.slug === decoded ||
          fileSlug === slug ||
          fileSlug === decoded
        ) {
          return isArticlePublic(article) ? article : null;
        }
      } catch {
        continue;
      }
    }

    return null;
  } catch {
    return null;
  }
}
