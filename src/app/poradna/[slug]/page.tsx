import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArticleRelatedServices } from "@/components/ArticleRelatedServices";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/Schema";
import { getArticleBySlug, getArticles } from "@/lib/articles";
import { formatArticleDate, normalizeArticleDate } from "@/lib/format-date";
import { articlesNav } from "@/lib/navigation";
import { siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

const markdownComponents: Components = {
  table({ node: _node, ...props }) {
    return (
      <div className="article-table-scroll">
        <table {...props} />
      </div>
    );
  }
};

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return { title: "Článek" };
  }

  return {
    title: article.title,
    description: article.excerpt || "Odborný článek NATURCHEM.",
    alternates: { canonical: `${siteUrl}/poradna/${article.slug}/` }
  };
}

export default async function CmsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleUrl = `${siteUrl}/poradna/${article.slug}/`;
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

  return (
    <main className="container section">
      <JsonLd data={articleData} />
      <Breadcrumbs
        items={[
          { name: "Úvod", href: "/" },
          { name: articlesNav.label, href: articlesNav.href },
          { name: article.title }
        ]}
      />
      <h1>{article.title}</h1>
      <p className="muted">
        {article.author || "NATURCHEM"}
        {formatArticleDate(article.updatedAt || article.publishedAt)
          ? ` · ${formatArticleDate(article.updatedAt || article.publishedAt)}`
          : null}
      </p>
      {article.excerpt ? <p className="article-perex">{article.excerpt}</p> : null}
      <div className="article-body">
        <Markdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {article.body}
        </Markdown>
      </div>

      <ArticleRelatedServices title={article.title} slug={article.slug} />

      <p className="article-footer-cta">
        <Link href="/kontakt">Požádat o konzultaci</Link>
        {" · "}
        <Link href={articlesNav.href}>Další odborné články</Link>
      </p>
    </main>
  );
}
