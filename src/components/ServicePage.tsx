import Link from "next/link";
import { IndexCard } from "@/components/IndexCard";
import { ServiceFaqTeaser } from "@/components/ServiceFaqTeaser";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceIcon } from "@/components/ServiceIcon";
import { JsonLd } from "@/components/Schema";
import { contactSubmitCta } from "@/lib/cta";
import { contactUrl } from "@/lib/contact-url";
import { relatedSectorsForService } from "@/lib/service-sector-links";
import { defaultServiceProcess } from "@/lib/service-defaults";
import {
  serviceCtaLead,
  serviceDocsIntro,
  serviceForWhomHeading,
  serviceMistakesHeading,
  serviceScopeHeading,
  serviceSectorHeading
} from "@/lib/service-copy";
import { company, services, siteUrl } from "@/lib/site";

type Props = {
  title: string;
  intro: string;
  scopeHeading?: string;
  heroPanelTitle?: string;
  contactService?: string;
  scope: string[];
  /** Pro koho typicky služba je – investoři, provozy, úřady. */
  forWhom?: string[];
  authorities?: string[];
  whenNeeded: string[];
  docs: string[];
  process?: string[];
  outputs: string[];
  commonMistakes?: string[];
  practicalSituations?: string[];
  relatedLinks?: { title: string; href: string; description: string }[];
  slug: string;
  faqCategoryId?: string;
};

export function ServicePage(props: Props) {
  const serviceMeta = services.find((s) => s.href === `/${props.slug}`);
  const relatedServices = services.filter((s) => s.href !== `/${props.slug}`).slice(0, 3);
  const contactServiceValue = props.contactService || serviceMeta?.contactService || props.title;
  const contactCta = serviceMeta?.contactCta ?? contactSubmitCta;
  const quickContactHref = contactUrl(contactServiceValue);
  const process = props.process ?? defaultServiceProcess;
  const sectorCrossLinks = relatedSectorsForService(props.slug);
  const relatedLinks = props.relatedLinks ?? [];
  const quickNeeds = props.whenNeeded.slice(0, 3);
  const keyScope = props.scope.slice(0, 4);
  const keyOutputs = props.outputs.slice(0, 3);
  const keyDocs = props.docs.slice(0, 3);
  const practicalExamples = props.practicalSituations?.slice(0, 3) ?? [];
  const detailGroups = [
    props.forWhom && props.forWhom.length > 0
      ? { title: serviceForWhomHeading, items: props.forWhom }
      : null,
    props.authorities && props.authorities.length > 0
      ? { title: "Typické úřady a řízení", items: props.authorities }
      : null,
    practicalExamples.length > 0 ? { title: "Příklady zakázek z praxe", items: practicalExamples } : null,
    { title: "Jak probíhá zakázka", items: process },
    props.commonMistakes && props.commonMistakes.length > 0
      ? { title: serviceMistakesHeading, items: props.commonMistakes }
      : null
  ].filter((group): group is { title: string; items: string[] } => group !== null);

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: props.title,
    provider: { "@type": "Organization", name: company.name, url: siteUrl },
    areaServed: "CZ",
    url: `${siteUrl}/${props.slug}/`,
    description: props.intro
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Úvod", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Služby", item: `${siteUrl}/sluzby/` },
      {
        "@type": "ListItem",
        position: 3,
        name: props.title,
        item: `${siteUrl}/${props.slug}/`
      }
    ]
  };

  const relatedItemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Související odkazy pro ${props.title}`,
    itemListElement: [...relatedLinks, ...sectorCrossLinks].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: `${siteUrl}${item.href}/`.replace(/([^:]\/)\/+/g, "$1")
    }))
  };

  return (
    <main className="page">
      <JsonLd data={serviceData} />
      <JsonLd data={breadcrumbData} />
      {(relatedLinks.length > 0 || sectorCrossLinks.length > 0) ? (
        <JsonLd data={relatedItemListData} />
      ) : null}
      <div className="container page-inner">
        <Breadcrumbs
          items={[
            { name: "Úvod", href: "/" },
            { name: "Služby", href: "/sluzby" },
            { name: props.title }
          ]}
        />
        <header className="page-header service-hero">
          <div>
            <ServiceIcon href={`/${props.slug}`} size={26} className="service-hero-icon" />
            <h1>{props.title}</h1>
            <p className="page-lead">{props.intro}</p>
            <div className="btn-row">
              <Link className="button" href={quickContactHref}>
                {contactCta}
              </Link>
              <Link className="button secondary" href="/kontakt#podklady">
                Jaké podklady poslat
              </Link>
            </div>
          </div>
          <aside className="service-hero-panel" aria-label="Typické důvody poptávky">
            <h2>{props.heroPanelTitle ?? "Typické důvody poptávky"}</h2>
            <ul className="compact-list">
              {quickNeeds.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </header>

        <section className="service-decision-panel content-block" aria-label="Stručný přehled služby">
          <div className="service-decision-card service-decision-card-primary">
            <h2>{props.scopeHeading ?? serviceScopeHeading}</h2>
            <ul className="check-list">
              {keyScope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service-decision-side">
            <article className="service-decision-card">
              <h2>Co dostanete</h2>
              <ul className="check-list">
                {keyOutputs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="service-decision-card service-start-card">
              <h2>Jak začít</h2>
              <p className="muted">{serviceDocsIntro}</p>
              <ul className="check-list">
                {keyDocs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="button" href={quickContactHref}>
                {contactCta}
              </Link>
            </article>
          </div>
        </section>

        {detailGroups.length > 0 ? (
          <section className="content-block service-extra-section">
            <details className="service-extra-details">
              <summary>Doplňující informace pro přípravu zakázky</summary>
              <div className="service-extra-grid">
                {detailGroups.map((group) => (
                  <article key={group.title} className="service-extra-card">
                    <h3>{group.title}</h3>
                    <ul className="compact-list">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </details>
          </section>
        ) : null}

        {props.faqCategoryId ? (
          <ServiceFaqTeaser categoryId={props.faqCategoryId} />
        ) : null}

        {relatedLinks.length > 0 ? (
          <section className="content-block">
            <h2>Navazující témata a dokumentace</h2>
            <div className="grid grid-3 index-card-grid">
              {relatedLinks.map((link) => (
                <IndexCard
                  key={link.href}
                  href={link.href}
                  title={link.title}
                  cta="Zobrazit téma"
                  className="service-related-card"
                >
                  <ServiceIcon href={link.href} />
                  <p className="muted">{link.description}</p>
                </IndexCard>
              ))}
            </div>
          </section>
        ) : null}

        {sectorCrossLinks.length > 0 ? (
          <section className="content-block">
            <h2>{serviceSectorHeading}</h2>
            <div className="grid grid-2 index-card-grid">
              {sectorCrossLinks.map((s) => (
                <IndexCard
                  key={s.href}
                  href={s.href}
                  title={s.title}
                  cta="Zobrazit provoz"
                  className="service-related-card"
                >
                  <ServiceIcon href={s.href} />
                </IndexCard>
              ))}
            </div>
          </section>
        ) : null}

        <section className="content-block">
          <h2>Související služby</h2>
          <div className="grid grid-3 index-card-grid">
            {relatedServices.map((service) => (
              <IndexCard
                key={service.href}
                href={service.href}
                title={service.title}
                cta="Zobrazit službu"
                className="service-related-card"
              >
                <ServiceIcon href={service.href} />
                <p className="muted">{service.short}</p>
              </IndexCard>
            ))}
          </div>
        </section>

        <section className="cta-strip card content-block">
          <h2>Poptávka</h2>
          <p className="muted">{serviceCtaLead}</p>
          <div className="btn-row">
            <Link className="button" href={quickContactHref}>
              {contactCta}
            </Link>
            <Link className="button secondary" href="/kontakt#podklady">
              Jaké podklady poslat
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
