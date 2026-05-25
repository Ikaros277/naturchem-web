import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReferenceExampleCard } from "@/components/ReferenceExampleCard";
import { SemanticCard } from "@/components/SemanticCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getReferenceSegmentIconKey } from "@/lib/service-icons";
import { JsonLd } from "@/components/Schema";
import { contactUrl } from "@/lib/contact-url";
import {
  referenceAreas,
  referenceCustomerSegmentsText,
  referenceExamples,
  referenceIntro
} from "@/lib/reference-content";
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

      <section className="section content-block container" id="oblasti">
        <h2>Reference podle oblastí</h2>
        <p className="muted section-intro-small">
          Typické služby a situace, které v jednotlivých oborech opakovaně řešíme — měření,
          studie, EIA, provozní dokumentace a podklady pro úřady.
        </p>
        <div className="reference-segments index-card-grid">
          {referenceAreas.map((area) => (
            <SemanticCard
              key={area.title}
              href={contactUrl(area.contactService)}
              className="reference-segment-card"
              cta="Poptat podobnou zakázku"
              aria-label={area.title}
            >
              <ServiceIcon icon={getReferenceSegmentIconKey(area.title)} />
              <h3 className="reference-segment-title">{area.title}</h3>
              <p className="muted">{area.description}</p>
            </SemanticCard>
          ))}
        </div>
      </section>

      <section className="section content-block container" id="segmenty">
        <h2>Vybrané zkušenosti a zákaznické segmenty</h2>
        <p className="muted reference-segments-note">{referenceCustomerSegmentsText}</p>
      </section>

      <section className="section content-block container" id="priklady">
        <h2>Anonymizované příklady řešených zakázek</h2>
        <p className="muted section-intro-small">
          Konkrétní typy situací z praxe — bez názvů zákazníků a bez osobních údajů. U každého
          příkladu uvádíme typ provozu, rozsah prací a výstup.
        </p>
        <div className="reference-examples-grid">
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
          <Link href={contactUrl("Odborné posudky")} className="button secondary">
            Poptat měření / studii
          </Link>
          <Link href={contactUrl("Nejsem si jistý")} className="section-link-inline">
            Poslat podklady k posouzení
          </Link>
        </div>
      </section>
    </main>
  );
}
