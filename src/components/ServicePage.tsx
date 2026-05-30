import Link from "next/link";
import { PageHeroBand } from "@/components/PageHeroBand";
import { IndexCard } from "@/components/IndexCard";
import { ServiceFaqTeaser } from "@/components/ServiceFaqTeaser";
import { ServicePoradnaTeaser } from "@/components/ServicePoradnaTeaser";
import { ServiceIcon } from "@/components/ServiceIcon";
import { JsonLd } from "@/components/Schema";
import { contactSubmitCta } from "@/lib/cta";
import { contactUrl } from "@/lib/contact-url";
import { relatedSectorsForService } from "@/lib/service-sector-links";
import { getDetailGroupIconKey } from "@/lib/service-icons";
import { getServiceHeroTheme } from "@/lib/hero-images";
import {
  serviceDocsIntro,
  serviceMistakesHeading,
  serviceScopeHeading
} from "@/lib/service-copy";
import { company, services, siteUrl } from "@/lib/site";

type Props = {
  title: string;
  intro: string;
  scopeHeading?: string;
  heroPanelTitle?: string;
  contactService?: string;
  scope: string[];
  whenNeeded: string[];
  docs: string[];
  outputs: string[];
  commonMistakes?: string[];
  practicalSituations?: string[];
  relatedLinks?: { title: string; href: string; description: string }[];
  slug: string;
  faqCategoryId?: string;
};

export function ServicePage(props: Props) {
  const bareSlug = props.slug.split("/").pop() ?? props.slug;
  const serviceMeta = services.find((s) => s.href === `/${props.slug}`);
  const relatedServices = services.filter((s) => s.href !== `/${props.slug}`).slice(0, 3);
  const contactServiceValue = props.contactService || serviceMeta?.contactService || props.title;
  const contactCta = serviceMeta?.contactCta ?? contactSubmitCta;
  const quickContactHref = contactUrl(contactServiceValue);
  const sectorCrossLinks = relatedSectorsForService(bareSlug);
  const relatedLinks = props.relatedLinks ?? [];
  const quickNeeds = props.whenNeeded.slice(0, 3);
  const keyScope = props.scope.slice(0, 4);
  const keyOutputs = props.outputs.slice(0, 3);
  const keyDocs = props.docs.slice(0, 3);
  const practicalExamples = props.practicalSituations?.slice(0, 3) ?? [];
  const detailGroups = [
    practicalExamples.length > 0 ? { title: "Příklady zakázek z praxe", items: practicalExamples } : null,
    props.commonMistakes && props.commonMistakes.length > 0
      ? { title: serviceMistakesHeading, items: props.commonMistakes }
      : null
  ].filter((group): group is { title: string; items: string[] } => group !== null);

  const mergedRelated = [
    ...relatedLinks.map((l) => ({ href: l.href, title: l.title, description: l.description, cta: "Zobrazit téma" })),
    ...sectorCrossLinks.map((s) => ({ href: s.href, title: s.title, description: undefined as string | undefined, cta: "Zobrazit provoz" })),
    ...relatedServices.map((s) => ({ href: s.href, title: s.title, description: s.short, cta: "Zobrazit službu" }))
  ].slice(0, 3);

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

  const heroTheme = getServiceHeroTheme(props.slug);

  return (
    <main className="page">
      <JsonLd data={serviceData} />
      <JsonLd data={breadcrumbData} />
      {(relatedLinks.length > 0 || sectorCrossLinks.length > 0) ? (
        <JsonLd data={relatedItemListData} />
      ) : null}
      <PageHeroBand
        theme={heroTheme}
        breadcrumbs={[
          { name: "Úvod", href: "/" },
          { name: "Služby", href: "/sluzby" },
          { name: props.title }
        ]}
      >
        <header className="page-header service-hero service-hero--photo">
            <div>
              <ServiceIcon href={`/${props.slug}`} variant="card" className="service-hero-icon" />
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
      </PageHeroBand>
      <div className="container page-inner">
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
                    <div className="service-extra-card-head">
                      <ServiceIcon icon={getDetailGroupIconKey(group.title)} variant="inline" />
                      <h3>{group.title}</h3>
                    </div>
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

        <ServicePoradnaTeaser serviceSlug={props.slug} />

        {mergedRelated.length > 0 ? (
          <section className="content-block">
            <h2>Mohlo by Vás zajímat</h2>
            <div className="grid grid-3 index-card-grid">
              {mergedRelated.map((item) => (
                <IndexCard
                  key={item.href}
                  href={item.href}
                  title={item.title}
                  cta={item.cta}
                  className="service-related-card"
                >
                  <ServiceIcon href={item.href} />
                  {item.description ? <p className="muted">{item.description}</p> : null}
                </IndexCard>
              ))}
            </div>
          </section>
        ) : null}

      </div>
    </main>
  );
}
