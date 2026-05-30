import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/Schema";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { ServiceGroupsIndex } from "@/components/ServiceGroupsIndex";
import { pageCtaPresets } from "@/lib/cta";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Služby měření, studií, dokumentace a školení",
  description:
    "Měření emisí, pracovního prostředí, hluku, rozptylové a hlukové studie, EIA, ISPOP, odborné posudky, provozní řády a školení chemické legislativy.",
  alternates: { canonical: `${siteUrl}/sluzby/` }
};

export default function Page() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Úvod", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Služby", item: `${siteUrl}/sluzby/` }
    ]
  };

  return (
    <main className="section services-index-page">
      <JsonLd data={breadcrumbData} />
      <div className="container">
        <Breadcrumbs items={[{ name: "Úvod", href: "/" }, { name: "Služby" }]} />
        <header className="page-header services-index-header">
          <p className="eyebrow">Odborný rozcestník služeb</p>
          <h1>Služby pro měření, studie a povolovací dokumentaci</h1>
          <p className="page-lead">
            NATURCHEM zajišťuje akreditovaná a autorizovaná měření, odborné studie, výpočty,
            EIA, odborné posudky, provozní řády, IPPC, ISPOP, GHG a odborná školení k chemické
            legislativě.
          </p>
        </header>
      </div>

      <ServiceGroupsIndex />

      <section className="section container">
        <PageCtaStrip {...pageCtaPresets.servicesIndex} />
      </section>
    </main>
  );
}
