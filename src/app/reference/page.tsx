import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { ReferenceExampleCard } from "@/components/ReferenceExampleCard";
import { JsonLd } from "@/components/Schema";
import { pageCtaPresets } from "@/lib/cta";
import {
  referenceExamples,
  referenceIntro
} from "@/lib/reference-content";
import { referenceClients } from "@/lib/client-logos";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Reference a příklady řešených zakázek | NATURCHEM"
  },
  description:
    "Reference NATURCHEM — průmysl, energetika, automotive, zemědělství, odpady, stavebnictví a veřejný sektor. Anonymizované příklady měření, studií, EIA a podkladů pro úřady.",
  alternates: { canonical: `${siteUrl}/reference/` }
};

export default function ReferencePage() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Úvod", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Reference", item: `${siteUrl}/reference/` }
    ]
  };

  return (
    <main className="section reference-page premium-page">
      <JsonLd data={breadcrumbData} />
      <div className="container">
        <Breadcrumbs items={[{ name: "Úvod", href: "/" }, { name: "Reference" }]} />
        <header className="premium-page-hero">
          <p className="eyebrow">Důkaz odborné praxe</p>
          <h1>Reference a příklady řešených zakázek NATURCHEM</h1>
          <p className="page-lead">{referenceIntro}</p>
        </header>
      </div>

      <section className="section content-block container" id="zakaznici">
        <h2>Naši zákazníci</h2>
        <div className="client-logos-grid">
          {referenceClients.map(client => (
            <a
              key={client.name}
              href={client.website}
              className="client-logo-item"
              target="_blank"
              rel="noopener noreferrer"
              title={client.name}
              aria-label={client.name}
            >
              <img src={client.logo} alt={client.name} />
            </a>
          ))}
        </div>
      </section>

      <section className="section content-block container" id="priklady">
        <h2>Příklady z praxe</h2>
        <p className="muted section-intro-small">
          Konkrétní typy situací z praxe — bez názvů zákazníků. U každého příkladu uvádíme typ
          provozu, rozsah prací a výstup.
        </p>
        <div className="reference-examples-list">
          {referenceExamples.map((example) => (
            <ReferenceExampleCard key={example.title} example={example} />
          ))}
        </div>
      </section>

      <PageCtaStrip {...pageCtaPresets.reference} className="container" />
    </main>
  );
}
