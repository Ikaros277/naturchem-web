import type { Metadata } from "next";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { PoradnaFilterableList } from "@/components/PoradnaFilterableList";
import { JsonLd } from "@/components/Schema";
import { pageCtaPresets } from "@/lib/cta";
import { getPageHeroTheme } from "@/lib/hero-images";
import { siteUrl } from "@/lib/site";
import { getPoradnaArticles } from "@/lib/poradna-articles";
import { formatArticleDate } from "@/lib/format-date";

export const metadata: Metadata = {
  title: "Odborná poradna – články o měřeních, studiích a povolování",
  description:
    "Praktické články a odpovědi pro měření emisí, pracovní prostředí, hluk, rozptylové studie, EIA, povolovací procesy a chemickou legislativu. Související služby NATURCHEM.",
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
    <main className="section poradna-page premium-page">
      <JsonLd data={collectionPageData} />
      <JsonLd data={itemListData} />
      <JsonLd data={breadcrumbData} />
      <PageHeroBand
        theme={getPageHeroTheme("/poradna")}
        breadcrumbs={[{ name: "Úvod", href: "/" }, { name: "Odborná poradna" }]}
      >
        <header className="premium-page-hero page-hero--photo">
          <p className="eyebrow">Znalostní centrum</p>
          <h1>Odborná poradna</h1>
          <p className="page-lead">
            Praktické informace k měřením, studiím a povolování pro provozovatele,
            projektanty a pracovníky v oblasti životního prostředí.
          </p>
        </header>
      </PageHeroBand>
      <div className="container">
        <PoradnaFilterableList articles={mergedArticles} />
        <PageCtaStrip {...pageCtaPresets.poradna} />
      </div>
    </main>
  );
}
