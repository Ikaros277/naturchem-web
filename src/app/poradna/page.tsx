import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PoradnaFilterableList } from "@/components/PoradnaFilterableList";
import { JsonLd } from "@/components/Schema";
import { siteUrl } from "@/lib/site";
import { getPoradnaArticles } from "@/lib/poradna-articles";
import { formatArticleDate } from "@/lib/format-date";

export const metadata: Metadata = {
  title: "Odborná poradna",
  description:
    "Praktické články a odpovědi pro měření emisí, pracovní prostředí, hluk, rozptylové studie, EIA, povolovací procesy a chemickou legislativu.",
  alternates: { canonical: `${siteUrl}/poradna/` }
};

export default async function Page() {
  const rawArticles = await getPoradnaArticles();
  const mergedArticles = rawArticles.map(a => ({
    ...a,
    displayDate: formatArticleDate(a.publishedAt)
  }));

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
      <PoradnaFilterableList articles={mergedArticles} />
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
