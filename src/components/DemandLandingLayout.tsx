import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { HeroPhoto } from "./HeroPhoto";
import { FaqAccordionList } from "./FaqAccordionList";
import { ServiceIcon } from "./ServiceIcon";
import { AccreditedMeasurementScope } from "./AccreditedMeasurementScope";
import { WorkProcessTimeline } from "./WorkProcessTimeline";
import { getAuthenticPhoto } from "@/lib/authentic-photos";
import { getLandingBlocks, getLandingTopic } from "@/lib/landing-blocks";
import { getServiceCategoryFromHref } from "@/lib/service-categories";
import { getServiceHeroTheme } from "@/lib/hero-images";
import { getServiceDetailCopy } from "@/lib/i18n/service-detail-copy";
import { getSeoLandingCopy } from "@/lib/i18n/seo-landing-i18n";
import { getWorkProcessCopy } from "@/lib/i18n/work-process-i18n";
import { getSiteServices } from "@/lib/i18n/content";
import { localizeHref } from "@/lib/i18n/navigation";
import { renderRichText, splitLeadSentence, stripRichText } from "@/lib/rich-text";
import type { SeoLanding } from "@/lib/seo-landings";
import type { Locale } from "@/lib/i18n/locales";
import styles from "./service-detail.module.css";

type Props = { landing: SeoLanding; locale: Locale; schemas: ReactNode; contactHref: string; faq: { question: string; answer: string }[] };

/** One visual system, while every approved technical paragraph stays server-rendered. */
export async function DemandLandingLayout({ landing, locale, schemas, contactHref, faq }: Props) {
  const ui = getServiceDetailCopy(locale);
  const copy = getSeoLandingCopy(locale);
  const blocks = getLandingBlocks(locale);
  const process = getWorkProcessCopy(locale);
  const topic = getLandingTopic(landing.slug);
  const services = await getSiteServices(locale);
  const service = services.find(item => item.href === landing.serviceHref);
  const category = getServiceCategoryFromHref(landing.serviceHref) ?? "docs";
  const href = (path: string) => localizeHref(path, locale);
  const theme = landing.heroTheme ?? getServiceHeroTheme(landing.slug);
  const photo = getAuthenticPhoto(theme);
  const docsSection = landing.sections.find(section => /poslat|podklady|send|documents|unterlagen/i.test(section.heading ?? ""));
  const overview = landing.sections.filter(section => section !== docsSection).slice(0, 2);
  const title = locale === "cs" && landing.slug === "mereni-pro-kolaudaci" ? "Měření pro kolaudaci"
    : locale === "cs" && landing.slug === "mereni-nove-haly" ? "Měření nové výrobní haly" : landing.h1;
  const intro = locale === "cs" && landing.slug === "mereni-pro-kolaudaci" ? "Hluk, osvětlení a pracovní prostředí podle požadavků Vašeho projektu a úřadu."
    : locale === "cs" && landing.slug === "mereni-nove-haly" ? "Rozsah měření navrhneme podle technologie, pracovišť a požadavku KHS."
    : splitLeadSentence(landing.intro)?.lead ?? stripRichText(landing.intro);
  const contactLabel = locale === "cs" && landing.slug === "mereni-pro-kolaudaci" ? "Poptat měření pro kolaudaci"
    : locale === "cs" && landing.slug === "mereni-nove-haly" ? "Poptat měření nové haly"
    : service?.contactCta ?? ui.inquiry;
  const categoryLabel = category === "measurement" ? ui.measurement : category === "studies" ? ui.studies : ui.docsCategory;

  return <main className={`${styles.page} seo-demand-page`} data-service-layout="compact" data-category={category}>
    {schemas}
    <section className={styles.hero} aria-labelledby="service-title">
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <Breadcrumbs breadcrumbsAria={ui.breadcrumbs} items={[{ name: copy.breadcrumbHome, href: href("/") }, { name: copy.breadcrumbServices, href: href("/sluzby") }, { name: title }]} />
          <p className={styles.eyebrow}>{landing.eyebrow ?? categoryLabel}</p>
          <h1 id="service-title" className={title.length > 38 ? styles.longTitle : undefined}>{title}</h1>
          <p className={styles.lead}>{intro}</p>
          <div className={styles.heroActions}>
            <a href={contactHref} className={`button ${styles.inquiry}`}><span>{contactLabel}<small>{ui.response}</small></span><span aria-hidden="true">↗</span></a>
            <a href="#podklady" className={styles.textLink}>{ui.docs} <span aria-hidden="true">↓</span></a>
          </div>
          {landing.highlights?.length ? <ul className={styles.highlights}>{landing.highlights.map(item => <li key={item}>{item}</li>)}</ul> : null}
        </div>
        <div className={styles.photo}><HeroPhoto theme={theme} priority /><span className={styles.photoCaption}>{photo?.caption[locale] ?? title}</span></div>
      </div>
    </section>
    <div className={styles.credentials}><div className={`container ${styles.credentialInner}`}>
      <p><span className={styles.seal} aria-hidden="true">✓</span>{category === "measurement" ? ui.lab : categoryLabel}</p>
      <a href={href("/akreditace-autorizace-dokumenty")}>{blocks.credentials.link} <span aria-hidden="true">↗</span></a>
    </div></div>
    <div className={`container ${styles.body}`}>
      <section className={styles.overview} aria-labelledby="service-overview-heading">
        <div className={styles.offer}>
          <p className={styles.eyebrow}>{categoryLabel}</p><h2 id="service-overview-heading">{landing.overviewHeading ?? title}</h2>
          <div className={styles.features}>{overview.map((section, index) => <div className={styles.feature} key={section.heading ?? index}>
            <ServiceIcon icon={index === 0 ? "process-rozsah" : "process-vystup"} variant="plain" size={26} />
            <div><h3>{section.heading}</h3><p>{splitLeadSentence(section.paragraphs[0] ?? "")?.lead ?? stripRichText(section.paragraphs[0] ?? "")}</p>
              {locale === "cs" && section.nextStep ? <a href={href(section.nextStep.href)} className={styles.textLink} data-landing-next-step={section.nextStep.href}>{section.nextStep.label} <span aria-hidden="true">↗</span></a> : null}
            </div>
          </div>)}</div>
          <a href={href(landing.serviceHref)} className={styles.textLink}>{copy.generalServicePage} <span aria-hidden="true">↗</span></a>
        </div>
        <aside className={styles.inquiryPanel} id="podklady" aria-labelledby="service-docs-heading">
          <ServiceIcon icon="process-vystup" variant="plain" size={30} /><h2 id="service-docs-heading">{ui.docs}</h2>
          {docsSection ? docsSection.paragraphs.map(text => <p className={styles.docsParagraph} key={text}>{renderRichText(text)}</p>) : topic ? <p>{blocks.send[topic]}</p> : <p>{landing.intro}</p>}
          <a href={contactHref} className={styles.panelCta}>{ui.inquiry}<span aria-hidden="true">↗</span></a><p className={styles.response}>{ui.responseFull}</p>
        </aside>
      </section>
      {locale === "cs" && landing.slug === "mereni-pracovniho-prostredi-kategorizace-praci" ? <AccreditedMeasurementScope kind="workplace" title="Akreditovaná měření pro podklady ke kategorizaci" /> : null}
      <section className={styles.detailsSection} aria-labelledby="service-details-heading">
        <div className={styles.sectionHeading}><h2 id="service-details-heading">{ui.details}</h2></div>
        <div className={faq.length ? styles.detailsGrid : styles.detailsGridSolo}>
        <div className={styles.disclosures}>
          {landing.sections.filter(section => section !== docsSection).map((section, index) => <details key={section.heading ?? index}>
            <summary><ServiceIcon icon={index === 0 ? "process-rozsah" : "process-posouzeni"} size={22} className={styles.disclosureIcon} /><span>{section.heading ?? title}</span></summary><div className={styles.detailBody}>{section.paragraphs.map(text => <p key={text}>{renderRichText(text)}</p>)}</div>
          </details>)}
          <details><summary><ServiceIcon icon="process-vystup" size={22} className={styles.disclosureIcon} /><span>{ui.scopeAndOutputs}</span></summary><div className={styles.detailBody}>
            <p>{renderRichText(landing.intro)}</p>
            {topic && topic !== "studie" && category === "measurement" ? <><h3>{blocks.measured.title}</h3><p>{blocks.measured[topic]}</p></> : null}
            {topic === "emise" && category === "measurement" ? <p>{blocks.breadth.text} <a href={href("/provozy-a-technologie")}>{blocks.breadth.linkLabel}</a>.</p> : null}
          </div></details>
          {category === "measurement" ? <details><summary><ServiceIcon icon="posudek" size={22} className={styles.disclosureIcon} /><span>{blocks.termsTitle}</span></summary><div className={styles.detailColumns}>{[blocks.price, blocks.timing, blocks.scope].map(item => <div key={item.title}><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></details> : null}
          <details><summary><ServiceIcon icon="process-posouzeni" size={22} className={styles.disclosureIcon} /><span>{process.heading}</span></summary><div className={styles.detailBody}><WorkProcessTimeline steps={process.steps} processAria={process.heading} /></div></details>
        </div>
        {faq.length ? <div className={styles.faq}><h3><ServiceIcon icon="faq" size={24} className={styles.faqIcon} />{ui.faq}</h3><FaqAccordionList locale={locale} items={faq.map(item => ({ q: item.question, paragraphs: [item.answer] }))} /></div> : null}
        </div>
        {landing.sources?.length ? <div className={styles.sources}><h3>{landing.sourcesHeading}</h3><ul>{landing.sources.map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a>{source.description ? <p>{source.description}</p> : null}</li>)}</ul></div> : null}
      </section>
      {landing.relatedLinks?.length ? <nav className={styles.related} aria-label={ui.related}><h2>{ui.related}</h2><ul>{landing.relatedLinks.map(item => <li key={item.href}><a href={href(item.href)}><ServiceIcon href={item.href} size={24} className={styles.relatedIcon} /><span className={styles.relatedTitle}>{item.label}</span><span className={styles.relatedArrow} aria-hidden="true">↗</span></a></li>)}</ul></nav> : null}
      {landing.oboryHref ? <p><a href={href(landing.oboryHref)} className={styles.textLink}>{copy.relatedFacility} ↗</a></p> : null}
    </div>
  </main>;
}
