import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReferenceExampleCard } from "@/components/ReferenceExampleCard";
import { JsonLd } from "@/components/Schema";
import { contactUrl } from "@/lib/contact-url";
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
        <h2>Vybraní zákazníci</h2>
        <div className="client-logos-grid">
          {referenceClients.filter(c => c.logo).map(client => (
            <div key={client.name} className="client-logo-item">
              <img src={client.logo} alt={client.name} title={client.name} />
            </div>
          ))}
        </div>
        <p className="client-names-text muted">
          {referenceClients.filter(c => !c.logo).map(c => c.name).join(" · ")}
        </p>
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

      <section className="section content-block container reference-cta-block">
        <h2>Další krok</h2>
        <p className="muted">
          Potřebujete měření, studii, EIA, provozní řád nebo podklad k úřadu? Pošlete výzvu,
          povolení nebo stručný popis provozu. Na základě podkladů navrhneme rozsah prací a možný
          termín realizace.
        </p>
        <div className="btn-row">
          <Link href={contactUrl("Nejsem si jistý")} className="button">
            Poptat podobnou zakázku
          </Link>
        </div>
      </section>
    </main>
  );
}
