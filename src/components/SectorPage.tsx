import { IndexCard } from "@/components/IndexCard";
import { OverviewGridCell } from "@/components/OverviewGridCell";
import { PageCtaStrip } from "@/components/PageCtaStrip";
import { PageHeroBand } from "@/components/PageHeroBand";
import { ServiceContextPhoto } from "@/components/ServiceContextPhoto";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SectorFaqTeaser } from "@/components/SectorFaqTeaser";
import { WorkProcessTimeline } from "@/components/WorkProcessTimeline";
import { JsonLd } from "@/components/Schema";
import { getPageCtaPresets } from "@/lib/i18n/cta-i18n";
import { getMessages } from "@/lib/i18n/get-messages";
import { getProvozyNavLabel } from "@/lib/i18n/content";
import { localizedCanonical } from "@/lib/i18n/metadata-helpers";
import { localizeHref } from "@/lib/i18n/navigation";
import { getSectorCopy } from "@/lib/i18n/sector-copy-i18n";
import type { Locale } from "@/lib/i18n/locales";
import { sectorProcessSteps } from "@/lib/i18n/work-process-i18n";
import { sectorContactUrl } from "@/lib/contact-url";
import { getPageHeroTheme } from "@/lib/hero-images";
import { getSectorHeroImageConfig, hasSectorPhoto } from "@/lib/custom-hero-photos";
import { getDetailGroupIconKey } from "@/lib/service-icons";
import { siteUrl } from "@/lib/site";

type Props = {
  locale: Locale;
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

export async function SectorPage(props: Props) {
  const { locale } = props;
  const copy = getSectorCopy(locale);
  const messages = await getMessages(locale);
  const provozyNavLabel = await getProvozyNavLabel(locale);
  const pageCtaPresets = getPageCtaPresets(locale);
  const link = (href: string) => localizeHref(href, locale);
  const sectorPath = `/provozy-a-technologie/${props.slug}`;
  const url = `${siteUrl}${link(sectorPath)}/`.replace(/([^:]\/)\/+/g, "$1");
  const contactHref = sectorContactUrl(
    props.title,
    props.relatedServices.map((s) => s.title)
  );
  const heroTheme = getPageHeroTheme(sectorPath);
  const sectorHeroImage = hasSectorPhoto(props.slug)
    ? getSectorHeroImageConfig(props.slug).src
    : undefined;
  const processSteps = sectorProcessSteps(props.process, locale);

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: copy.breadcrumbHome, item: localizedCanonical("/", locale) },
      {
        "@type": "ListItem",
        position: 2,
        name: provozyNavLabel,
        item: localizedCanonical("/provozy-a-technologie", locale)
      },
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
    name: copy.relatedListName(props.title),
    itemListElement: props.relatedServices.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${siteUrl}${link(service.href)}/`.replace(/([^:]\/)\/+/g, "$1")
    }))
  };

  return (
    <main className="page sector-detail-page">
      <JsonLd data={breadcrumbData} />
      <JsonLd data={faqData} />
      <JsonLd data={relatedServiceListData} />
      <PageHeroBand
        locale={locale}
        theme={heroTheme}
        imageSrc={sectorHeroImage}
        breadcrumbs={[
          { name: copy.breadcrumbHome, href: link("/") },
          { name: provozyNavLabel, href: link("/provozy-a-technologie") },
          { name: props.title }
        ]}
      >
        <header className="page-header service-hero service-hero--photo">
          <h1>{props.title}</h1>
          <p className="page-lead">{props.intro}</p>
        </header>
      </PageHeroBand>

      <section className="service-overview-section section-surface" aria-label={copy.overviewHeading}>
        <div className="container">
          <h2 className="service-overview-title">{copy.overviewHeading}</h2>
          <div className="service-overview-layout">
            <div className="service-overview-panel">
              <div className="service-overview-grid">
                <OverviewGridCell icon="audience-prumysl" title={copy.typicalProblems}>
                  <ul className="check-list">
                    {props.typicalProblems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </OverviewGridCell>

                <OverviewGridCell icon="pillar-dokumentace" title={copy.docs}>
                  <ul className="check-list">
                    {props.docs.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </OverviewGridCell>

                <OverviewGridCell icon="process-vystup" title={copy.outputs}>
                  <ul className="check-list">
                    {props.outputs.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </OverviewGridCell>

                <OverviewGridCell icon={getDetailGroupIconKey("Typické chyby a rizika")} title={copy.pitfalls}>
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
        <h2 id="sector-process-heading">{copy.processHeading}</h2>
        <p className="muted section-intro">{copy.processIntro}</p>
        <WorkProcessTimeline
          steps={processSteps}
          processAria={messages.common.cooperationProcess}
        />
      </section>

      <div className="container page-inner">
        <section className="content-block">
          <h2>{copy.relatedServices}</h2>
          <div className="grid grid-3 index-card-grid">
            {props.relatedServices.map((service) => (
              <IndexCard
                key={service.href}
                href={link(service.href)}
                title={service.title}
                cta={copy.viewService}
                className="service-related-card"
                icon={<ServiceIcon href={service.href} variant="inline" size={20} />}
              />
            ))}
          </div>
        </section>

        <SectorFaqTeaser items={props.faq} />

        <PageCtaStrip {...pageCtaPresets.sectorDetail} primaryHref={contactHref} />
      </div>
    </main>
  );
}
