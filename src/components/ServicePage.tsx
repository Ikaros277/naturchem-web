import Link from "next/link";
import type { ReactNode } from "react";
import { PageHeroBand } from "@/components/PageHeroBand";
import { ServiceContextPhoto } from "@/components/ServiceContextPhoto";
import { IndexCard } from "@/components/IndexCard";
import { ServiceFaqTeaser } from "@/components/ServiceFaqTeaser";
import { ServicePoradnaTeaser } from "@/components/ServicePoradnaTeaser";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { ServiceIcon } from "@/components/ServiceIcon";
import { JsonLd } from "@/components/Schema";
import { contactSubmitCta, globalCta } from "@/lib/cta";
import { contactUrl } from "@/lib/contact-url";
import { serviceTrustBandItems } from "@/lib/home-hero-metrics";
import { relatedSectorsForService } from "@/lib/service-sector-links";
import { getDetailGroupIconKey, type ServiceIconKey } from "@/lib/service-icons";
import { getServiceHeroTheme } from "@/lib/hero-images";
import {
  serviceCtaStripText,
  serviceDocsIntro,
  serviceMistakesHeading,
  serviceOverviewHeading,
  serviceScopeHeading,
  serviceWhenNeededHeading
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
  const keyScope = props.scope.slice(0, 4);
  const keyWhenNeeded = props.whenNeeded.slice(0, 4);
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
        variant="service"
        breadcrumbs={[
          { name: "Úvod", href: "/" },
          { name: "Služby", href: "/sluzby" },
          { name: props.title }
        ]}
      >
        <header className="page-header service-hero service-hero--photo service-hero--single">
          <ServiceIcon href={`/${props.slug}`} variant="card" className="service-hero-icon" />
          <h1>{props.title}</h1>
          <p className="page-lead">{props.intro}</p>
        </header>
      </PageHeroBand>

      <section className="trust-band trust-band--compact" aria-labelledby="service-trust-heading">
        <div className="container trust-band-inner">
          <h2 id="service-trust-heading" className="sr-only">
            Důvěryhodnost a oprávnění
          </h2>
          {serviceTrustBandItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="service-overview-section section-surface" aria-label="Stručný přehled služby">
        <div className="container">
          <h2 className="service-overview-title">{serviceOverviewHeading}</h2>
          <div className="service-overview-layout">
            <div className="service-overview-panel">
              <div
                className={[
                  "service-overview-grid",
                  keyWhenNeeded.length === 0 ? "service-overview-grid--three" : ""
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {keyWhenNeeded.length > 0 ? (
                  <ServiceOverviewCell icon="process-posouzeni" title={serviceWhenNeededHeading}>
                    <ul className="check-list">
                      {keyWhenNeeded.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </ServiceOverviewCell>
                ) : null}

                <ServiceOverviewCell icon="process-rozsah" title={props.scopeHeading ?? serviceScopeHeading}>
                  <ul className="check-list">
                    {keyScope.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </ServiceOverviewCell>

                <ServiceOverviewCell icon="process-vystup" title="Co dostanete">
                  <ul className="check-list">
                    {keyOutputs.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </ServiceOverviewCell>

                <ServiceOverviewCell
                  icon="process-posouzeni"
                  title="Jak začít"
                  className="service-overview-cell--start"
                >
                  <p className="muted">{serviceDocsIntro}</p>
                  <ul className="check-list">
                    {keyDocs.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link className="button service-overview-cta--in-cell" href={quickContactHref}>
                    {contactCta}
                  </Link>
                </ServiceOverviewCell>
              </div>
              <div className="service-overview-actions">
                <Link className="button service-overview-cta--in-bar" href={quickContactHref}>
                  {contactCta}
                </Link>
                <Link className="button secondary" href="/kontakt#podklady">
                  Jaké podklady poslat
                </Link>
              </div>
            </div>
            <ServiceContextPhoto theme={heroTheme} className="service-overview-photo" />
          </div>
        </div>
      </section>

      <div className="container page-inner">
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
                  icon={<ServiceIcon href={item.href} variant="inline" size={20} />}
                >
                  {item.description ? <p className="muted">{item.description}</p> : null}
                </IndexCard>
              ))}
            </div>
          </section>
        ) : null}
      </div>

      <PageCtaStrip
        text={serviceCtaStripText}
        primaryLabel={globalCta}
        primaryHref={quickContactHref}
        secondaryLabel="Akreditace a oprávnění"
        secondaryHref="/akreditace-autorizace-dokumenty"
        className="container"
      />
    </main>
  );
}

function ServiceOverviewCell({
  icon,
  title,
  children,
  className = ""
}: {
  icon: ServiceIconKey;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article className={["service-overview-cell", className].filter(Boolean).join(" ")}>
      <div className="service-decision-card-head">
        <ServiceIcon icon={icon} variant="inline" />
        <h2>{title}</h2>
      </div>
      {children}
    </article>
  );
}
