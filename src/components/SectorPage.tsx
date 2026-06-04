import Link from "next/link";
import { IndexCard } from "@/components/IndexCard";
import { OverviewGridCell } from "@/components/OverviewGridCell";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { ServiceContextPhoto } from "@/components/ServiceContextPhoto";
import { ServiceIcon } from "@/components/ServiceIcon";
import { WorkProcessTimeline } from "@/components/WorkProcessTimeline";
import { JsonLd } from "@/components/Schema";
import { pageCtaPresets } from "@/lib/cta";
import { sectorContactUrl } from "@/lib/contact-url";
import { getPageHeroTheme } from "@/lib/hero-images";
import {
  sectorOverviewHeading,
  sectorProcessHeading,
  sectorProcessIntro,
  sectorProcessSteps
} from "@/lib/sector-copy";
import { getDetailGroupIconKey } from "@/lib/service-icons";
import { provozyNavLabel } from "@/lib/sectors";
import { siteUrl } from "@/lib/site";

type Props = {
  title: string;
  slug: string;
  intro: string;
  typicalProblems: string[];
  relatedServices: { title: string; href: string }[];
  docs: string[];
  process: string[];
  outputs: string[];
  pitfalls: string[];
  faq: { q: string; a: string }[];
};

export function SectorPage(props: Props) {
  const url = `${siteUrl}/provozy-a-technologie/${props.slug}/`;
  const contactHref = sectorContactUrl(
    props.title,
    props.relatedServices.map((s) => s.title)
  );
  const heroTheme = getPageHeroTheme(`/provozy-a-technologie/${props.slug}`);
  const processSteps = sectorProcessSteps(props.process);

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Úvod", item: siteUrl },
      { "@type": "ListItem", position: 2, name: provozyNavLabel, item: `${siteUrl}/provozy-a-technologie/` },
      { "@type": "ListItem", position: 3, name: props.title, item: url }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: props.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };

  const relatedServiceListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Související služby pro ${props.title}`,
    itemListElement: props.relatedServices.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${siteUrl}${service.href}/`.replace(/([^:]\/)\/+/g, "$1")
    }))
  };

  return (
    <main className="page sector-detail-page">
      <JsonLd data={breadcrumbData} />
      <JsonLd data={faqData} />
      <JsonLd data={relatedServiceListData} />
      <PageHeroBand
        theme={heroTheme}
        breadcrumbs={[
          { name: "Úvod", href: "/" },
          { name: provozyNavLabel, href: "/provozy-a-technologie" },
          { name: props.title }
        ]}
      >
        <header className="page-header service-hero service-hero--photo">
          <div>
            <ServiceIcon href={`/provozy-a-technologie/${props.slug}`} variant="card" className="service-hero-icon" />
            <h1>{props.title}</h1>
            <p className="page-lead">{props.intro}</p>
            <div className="btn-row">
              <Link className="button" href={contactHref}>
                Poptat posouzení provozu
              </Link>
            </div>
          </div>
        </header>
      </PageHeroBand>

      <section className="service-overview-section section-surface" aria-label={sectorOverviewHeading}>
        <div className="container">
          <h2 className="service-overview-title">{sectorOverviewHeading}</h2>
          <div className="service-overview-layout">
            <div className="service-overview-panel">
              <div className="service-overview-grid">
                <OverviewGridCell icon="audience-prumysl" title="Typické problémy">
                  <ul className="check-list">
                    {props.typicalProblems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </OverviewGridCell>

                <OverviewGridCell icon="pillar-dokumentace" title="Podklady">
                  <ul className="check-list">
                    {props.docs.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </OverviewGridCell>

                <OverviewGridCell icon="process-vystup" title="Výstup">
                  <ul className="check-list">
                    {props.outputs.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </OverviewGridCell>

                <OverviewGridCell
                  icon={getDetailGroupIconKey("Typické chyby a rizika")}
                  title="Typické chyby a rizika"
                >
                  <ul className="check-list">
                    {props.pitfalls.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </OverviewGridCell>
              </div>
            </div>
            <ServiceContextPhoto theme={heroTheme} className="service-overview-photo" />
          </div>
        </div>
      </section>

      <section
        className="section content-block container sector-process-section typicke-zakazky-process"
        aria-labelledby="sector-process-heading"
      >
        <h2 id="sector-process-heading">{sectorProcessHeading}</h2>
        <p className="muted section-intro">{sectorProcessIntro}</p>
        <WorkProcessTimeline steps={processSteps} />
      </section>

      <div className="container page-inner">
        <section className="content-block">
          <h2>Související služby</h2>
          <div className="grid grid-3 index-card-grid">
            {props.relatedServices.map((service) => (
              <IndexCard
                key={service.href}
                href={service.href}
                title={service.title}
                cta="Zobrazit službu"
                className="service-related-card"
                icon={<ServiceIcon href={service.href} variant="inline" size={20} />}
              />
            ))}
          </div>
        </section>

        <section className="content-block">
          <h2>Časté dotazy</h2>
          <div className="faq-list">
            {props.faq.map((item) => (
              <details key={item.q} className="card faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <PageCtaStrip {...pageCtaPresets.sectorDetail} primaryHref={contactHref} />
      </div>
    </main>
  );
}
