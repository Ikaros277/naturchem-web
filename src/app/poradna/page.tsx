import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { IndexCard } from "@/components/IndexCard";
import { topicForArticle } from "@/lib/poradna-topic";
import { JsonLd } from "@/components/Schema";
import { siteUrl } from "@/lib/site";
import { formatArticleDate } from "@/lib/format-date";
import { getPoradnaArticles } from "@/lib/poradna-articles";

export const metadata: Metadata = {
  title: "Odborná poradna",
  description:
    "Praktické články a odpovědi pro měření emisí, pracovní prostředí, hluk, rozptylové studie, EIA, povolovací procesy a chemickou legislativu.",
  alternates: { canonical: `${siteUrl}/poradna/` }
};

const topicFilters = [
  "Emise",
  "Rozptylové studie",
  "Hluk",
  "Pracovní prostředí",
  "EIA a povolování",
  "Legislativa",
  "Chemická legislativa"
] as const;

const plannedChemicalTopics = [
  "Kdy musí firma řešit školení chemických látek?",
  "Co má obsahovat školení chemického zákona?",
  "Jak se orientovat v bezpečnostním listu?",
  "Nejčastější chyby při skladování chemických látek",
  "Chemické látky v provozu: co musí vědět zaměstnanci"
] as const;

export default async function Page() {
  const mergedArticles = await getPoradnaArticles();

  const collectionPageData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Odborná poradna",
    url: `${siteUrl}/poradna/`,
    description: metadata.description
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
      { "@type": "ListItem", position: 1, name: "Úvod", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Odborná poradna", item: `${siteUrl}/poradna/` }
    ]
  };

  return (
    <main className="container section poradna-page premium-page">
      <JsonLd data={collectionPageData} />
      <JsonLd data={itemListData} />
      <JsonLd data={breadcrumbData} />
      <Breadcrumbs items={[{ name: "Úvod", href: "/" }, { name: "Odborná poradna" }]} />
      <header className="premium-page-hero">
        <p className="eyebrow">Znalostní centrum</p>
        <h1>Odborná poradna</h1>
        <p className="page-lead">
          Praktické informace k měřením, studiím a povolování pro provozovatele,
          projektanty a pracovníky v oblasti životního prostředí.
        </p>
      </header>
      <nav className="topic-filter-pills" role="list" aria-label="Témata odborné poradny">
        {topicFilters.map((topic) => (
          <span key={topic} className="topic-pill">
            {topic}
          </span>
        ))}
      </nav>
      <div className="article-list-grid">
        {mergedArticles.map((article) => {
          const publishedLabel = formatArticleDate(article.publishedAt);
          const topic = topicForArticle(article.title);

          return (
            <IndexCard
              key={article.href}
              href={article.href}
              title={article.title}
              className="article-list-card article-card"
              cta="Číst článek"
              meta={
                <div className="article-card-meta">
                  {publishedLabel ? (
                    <time className="article-card-date muted" dateTime={article.publishedAt}>
                      {publishedLabel}
                    </time>
                  ) : null}
                  <span className="tag">{topic}</span>
                </div>
              }
            >
              {article.excerpt ? <p className="muted article-card-excerpt">{article.excerpt}</p> : null}
            </IndexCard>
          );
        })}
      </div>
      <section className="section content-block">
        <article className="card">
          <h2>Chystaná témata k chemické legislativě</h2>
          <p className="muted">
            Na službu školení chemické legislativy navazují praktická témata pro provozy, sklady,
            výrobu, laboratoře a osoby odpovědné za chemické látky.
          </p>
          <ul className="check-list">
            {plannedChemicalTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
          <Link href="/sluzby/skoleni-chemicke-legislativy" className="button secondary">
            Školení chemické legislativy
          </Link>
        </article>
      </section>
      <section className="card final-cta poradna-cta">
        <h2>Máte konkrétní dotaz z provozu?</h2>
        <p className="muted">
          Pošlete rozhodnutí, výzvu nebo stručný popis situace. Na základě podkladů navrhneme další
          postup.
        </p>
        <Link href="/kontakt" className="button">Kontaktovat NATURCHEM</Link>
      </section>
    </main>
  );
}
