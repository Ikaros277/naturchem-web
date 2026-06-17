import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { normalizeArticleDate } from "@/lib/format-date";
import type { Locale } from "@/lib/i18n/locales";
import { defaultLocale } from "@/lib/i18n/locales";

function articlesDirectoryForLocale(locale: Locale): string {
  const subdir = locale === "en" ? "articles-en" : "articles";
  return path.join(process.cwd(), "content", subdir);
}

import type { PoradnaTopic } from "@/lib/poradna-topic";
import { resolveArticleTopic } from "@/lib/poradna-topic";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  topic: PoradnaTopic;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  heroImage?: string;
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
};

function resolveSlug(fileSlug: string, data: ArticleFrontmatter): string {
  const fromFrontmatter =
    typeof data.slug === "string" && data.slug.trim() ? data.slug.trim() : null;
  return fromFrontmatter ?? fileSlug;
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

  return {
    slug,
    title,
    excerpt: data.excerpt || "",
    topic: resolveArticleTopic({ title, topic: data.topic }),
    publishedAt: normalizeArticleDate(data.publishedAt) || new Date().toISOString(),
    updatedAt: normalizeArticleDate(data.updatedAt),
    author: data.author || "NATURCHEM",
    heroImage: typeof data.heroImage === "string" ? data.heroImage.trim() || undefined : undefined,
    body: normalizeMarkdownBody(parsed.content)
  };
}

async function readArticleFiles(locale: Locale = defaultLocale): Promise<string[]> {
  const articlesDirectory = articlesDirectoryForLocale(locale);
  const files = await fs.readdir(articlesDirectory);
  return files.filter((file) => file.endsWith(".md"));
}

export async function getArticles(locale: Locale = defaultLocale): Promise<Article[]> {
  try {
    const mdFiles = await readArticleFiles(locale);

    const articles = await Promise.all(
      mdFiles.map(async (file) => {
        const fileSlug = file.replace(/\.md$/, "");
        const fullPath = path.join(articlesDirectoryForLocale(locale), file);
        const fileContents = await fs.readFile(fullPath, "utf8");
        return toArticle(fileSlug, fileContents);
      })
    );

    return articles.sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  } catch {
    return [];
  }
}

export async function getArticleBySlug(slug: string, locale: Locale = defaultLocale): Promise<Article | null> {
  try {
    const decoded = decodeURIComponent(slug);
    const mdFiles = await readArticleFiles(locale);
    const articlesDirectory = articlesDirectoryForLocale(locale);

    for (const file of mdFiles) {
      const fileSlug = file.replace(/\.md$/, "");
      const fullPath = path.join(articlesDirectory, file);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const article = toArticle(fileSlug, fileContents);

      if (
        article.slug === slug ||
        article.slug === decoded ||
        fileSlug === slug ||
        fileSlug === decoded
      ) {
        return article;
      }
    }

    return null;
  } catch {
    return null;
  }
}
