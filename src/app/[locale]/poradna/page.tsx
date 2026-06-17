import type { Metadata } from "next";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { PoradnaFilterableList } from "@/components/PoradnaFilterableList";
import { JsonLd } from "@/components/Schema";
import { pageCtaPresets } from "@/lib/cta";
import { getPageHeroTheme } from "@/lib/hero-images";
import { articlesNav } from "@/lib/navigation";
import { siteUrl } from "@/lib/site";
import { getPoradnaArticles } from "@/lib/poradna-articles";
import { formatArticleDate } from "@/lib/format-date";

export const metadata: Metadata = {
  title: `${articlesNav.label} – měření, studie a povolování`,
  description:
    "Články z praxe i z oboru — měření, studie, EIA a legislativa. Orientace v oboru dřív, než poptáte službu.",
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
    name: articlesNav.label,
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
      { "@type": "ListItem", position: 2, name: articlesNav.label, item: `${siteUrl}/poradna/` }
    ]
  };

  return (
    <main className="section poradna-page premium-page">
      <JsonLd data={collectionPageData} />
      <JsonLd data={itemListData} />
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        theme={getPageHeroTheme("/poradna")}
        breadcrumbs={[{ name: "Úvod", href: "/" }, { name: articlesNav.label }]}
      >
        <header className="premium-page-hero page-hero--photo">
          <p className="eyebrow">Články z praxe · legislativa · měření</p>
          <h1>{articlesNav.label}</h1>
          <p className="page-lead">
            Články z praxe — měření, studie a legislativa pro provozy, které řeší podobné situace
            jako ten Váš.
          </p>
        </header>
      </PageHeroBand>
      <div className="container page-first-section">
        <PoradnaFilterableList articles={mergedArticles} />
        <PageCtaStrip {...pageCtaPresets.poradna} />
      </div>
    </main>
  );
}
