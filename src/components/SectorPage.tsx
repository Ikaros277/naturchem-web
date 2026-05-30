import { IndexCard } from "@/components/IndexCard";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { ServiceIcon } from "@/components/ServiceIcon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/Schema";
import { pageCtaPresets } from "@/lib/cta";
import { sectorContactUrl } from "@/lib/contact-url";
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
    <main className="page">
      <JsonLd data={breadcrumbData} />
      <JsonLd data={faqData} />
      <JsonLd data={relatedServiceListData} />
      <div className="container page-inner">
        <Breadcrumbs
          items={[
            { name: "Úvod", href: "/" },
            { name: provozyNavLabel, href: "/provozy-a-technologie" },
            { name: props.title }
          ]}
        />
        <header className="page-header service-hero">
          <div>
            <ServiceIcon href={`/provozy-a-technologie/${props.slug}`} size={26} className="service-hero-icon" />
            <h1>{props.title}</h1>
            <p className="page-lead">{props.intro}</p>
          </div>
        </header>

        <section className="content-block grid grid-2">
          <article className="card">
            <h2>Typické problémy</h2>
            <ul className="check-list">
              {props.typicalProblems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h2>Podklady</h2>
            <ul className="check-list">
              {props.docs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="content-block">
          <h2>Průběh zakázky</h2>
          <ol className="steps">
            {props.process.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>

        <section className="content-block grid grid-2">
          <article>
            <h2>Výstup</h2>
            <ul className="check-list">
              {props.outputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <h2>Typické chyby a rizika</h2>
            <ul className="check-list muted-list">
              {props.pitfalls.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

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
              >
                <ServiceIcon href={service.href} />
              </IndexCard>
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

        <PageCtaStrip
          {...pageCtaPresets.sectorDetail}
          primaryHref={contactHref}
        />
      </div>
    </main>
  );
}
