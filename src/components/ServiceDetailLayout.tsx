import Link from "next/link";
import type { ReactNode } from "react";
import type { ServicePageProps } from "./ServicePage";
import type { FaqItem } from "@/lib/faq";
import { Breadcrumbs } from "./Breadcrumbs";
import { HeroPhoto } from "@/components/HeroPhoto";
import { InlineEmphasis } from "./InlineEmphasis";
import { FaqAccordionList } from "./FaqAccordionList";
import { ServiceIcon } from "./ServiceIcon";
import { localizeHref } from "@/lib/i18n/navigation";
import { getServiceCopy } from "@/lib/i18n/service-copy-i18n";
import { getServiceDetailCopy } from "@/lib/i18n/service-detail-copy";
import { getServiceCategoryFromHref } from "@/lib/service-categories";
import { getServiceHeroTheme } from "@/lib/hero-images";
import { company } from "@/lib/site";
import styles from "./service-detail.module.css";

type Props = {
  content: ServicePageProps;
  contactHref: string;
  contactLabel: string;
  faqItems: FaqItem[];
  relatedItems: { title: string; href: string }[];
  schemas: ReactNode;
};

function DetailList({ items }: { items: string[] }) {
  return <ul>{items.map(item => <li key={item}><InlineEmphasis text={item} /></li>)}</ul>;
}

/** Shared server-rendered layout: full technical content remains in native disclosures. */
export function ServiceDetailLayout({ content, contactHref, contactLabel, faqItems, relatedItems, schemas }: Props) {
  const { locale } = content;
  const href = (path: string) => localizeHref(path, locale);
  const copy = getServiceCopy(locale);
  const ui = getServiceDetailCopy(locale);
  const category = getServiceCategoryFromHref("/" + content.slug);
  const categoryLabel = category === "measurement" ? ui.measurement : category === "studies" ? ui.studies : ui.docsCategory;
  const emissions = locale === "cs" && content.slug === "sluzby/mereni-emisi";
  const features = emissions ? [
    { title: "Měření u Vašeho zdroje", text: "Rozsah podle povolení provozu a zadání. Předem posoudíme měřicí místo a přípravu provozu.", icon: "process-rozsah" as const },
    { title: "Vyhodnocení vůči limitům", text: "Výsledky porovnáme s limity, povolením provozu a případným požadavkem úřadu.", icon: "process-posouzeni" as const },
    { title: "Protokol a další postup", text: "Předáme protokol z měření, shrnutí výsledků a doporučení navazujících kroků.", icon: "process-vystup" as const },
  ] : [
    { title: content.scopeHeading ?? copy.scopeHeading, text: content.scope.slice(0, 2).join(". "), icon: "process-rozsah" as const },
    { title: copy.whenNeededHeading, text: content.whenNeeded[0], icon: "process-posouzeni" as const },
    { title: copy.outputsHeading, text: content.outputs.slice(0, 2).join("; "), icon: "process-vystup" as const },
  ];
  return (
    <main className={styles.page} data-service-layout="compact" data-category={category}>
      {schemas}
      <section className={styles.hero} aria-labelledby="service-title">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <Breadcrumbs breadcrumbsAria={ui.breadcrumbs} items={[
              { name: copy.breadcrumbHome, href: href("/") }, { name: copy.breadcrumbServices, href: href("/sluzby") }, { name: content.title },
            ]} />
            <p className={styles.eyebrow}>{categoryLabel}</p>
            <h1 id="service-title" className={content.title.length > 38 ? styles.longTitle : undefined}>{content.title}</h1>
            <p className={styles.lead}><InlineEmphasis text={emissions ? "Změříme emise ze stacionárních zdrojů a vyhodnotíme výsledky vůči limitům. Získáte protokol pro provozní dokumentaci a jednání s úřady." : content.intro} /></p>
            <div className={styles.heroActions}>
              <Link className={`button ${styles.inquiry}`} href={contactHref}>
                <span>{contactLabel}<small>{ui.response}</small></span><span aria-hidden="true">↗</span>
              </Link>
              <a className={styles.textLink} href="#podklady">{ui.docs} <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className={styles.photo} aria-hidden="true">
            <HeroPhoto theme={getServiceHeroTheme(content.slug)} priority />
            <span className={styles.photoCaption}>{content.title}</span>
          </div>
        </div>
      </section>
      <div className={styles.credentials}>
        <div className={`container ${styles.credentialInner}`}>
          <p><span className={styles.seal} aria-hidden="true">✓</span><span>{category === "measurement" ? ui.lab : company.name}</span></p>
          <Link href={href("/akreditace-autorizace-dokumenty")}>{copy.accreditationLink} <span aria-hidden="true">↗</span></Link>
          <a href={`tel:${company.phones[0].replace(/\s/g, "")}`}>{company.phones[0]}</a>
        </div>
      </div>
      <div className={`container ${styles.body}`}>
        <section className={styles.overview} aria-labelledby="service-overview-heading">
          <div className={styles.offer}>
            <p className={styles.eyebrow}>{categoryLabel}</p>
            <h2 id="service-overview-heading">{emissions ? "Měření, vyhodnocení a protokol." : copy.overviewHeading}</h2>
            <div className={styles.features}>
              {features.filter(item => item.text).map(item => <div className={styles.feature} key={item.title}>
                <ServiceIcon icon={item.icon} variant="plain" size={26} />
                <div><h3>{item.title}</h3><p><InlineEmphasis text={item.text} /></p></div>
              </div>)}
            </div>
            {content.slug === "sluzby/mereni-hluku" ? <p className={styles.situations}>
              <strong>{ui.noiseHint}</strong><Link href={href("/sluzby/hlukove-studie")}>{ui.noiseLink} →</Link>
            </p> : null}
          </div>
          <aside className={styles.inquiryPanel} id="podklady" aria-labelledby="service-docs-heading">
            <ServiceIcon icon="process-vystup" variant="plain" size={30} />
            <h2 id="service-docs-heading">{ui.docs}</h2>
            <p>{copy.docsIntro}</p>
            <DetailList items={content.docs.slice(0, 3)} />
            <Link className={styles.panelCta} href={contactHref}>{ui.inquiry}<span aria-hidden="true">↗</span></Link>
            <p className={styles.response}>{ui.responseFull}</p>
          </aside>
        </section>
        <section className={styles.detailsSection} aria-labelledby="service-details-heading">
          <div className={styles.sectionHeading}><h2 id="service-details-heading">{ui.details}</h2></div>
          <div className={styles.disclosures}>
            <details><summary>{ui.scopeAndOutputs}</summary><div className={styles.detailColumns}>
              <div><h3>{content.scopeHeading ?? copy.scopeHeading}</h3><DetailList items={content.scope} /></div>
              <div><h3>{copy.outputsHeading}</h3><DetailList items={content.outputs} /></div>
            </div></details>
            {content.whenNeeded.length ? <details><summary>{copy.whenNeededHeading}</summary><div className={styles.detailBody}><DetailList items={content.whenNeeded} /></div></details> : null}
            <details><summary>{ui.preparation}</summary><div className={styles.detailColumns}>
              <div><h3>{ui.docs}</h3><DetailList items={content.docs} /></div>
              {content.commonMistakes?.length ? <div><h3>{copy.mistakesHeading}</h3><DetailList items={content.commonMistakes} /></div> : null}
            </div></details>
            {content.practicalSituations?.length ? <details><summary>{ui.situations}</summary><div className={styles.detailBody}><DetailList items={content.practicalSituations} /></div></details> : null}
          </div>
          {faqItems.length ? <div className={styles.faq}>
            <h3>{ui.faq}</h3>
            <FaqAccordionList items={faqItems} locale={locale} />
            <Link className={styles.textLink} href={href("/faq#" + content.faqCategoryId)}>{ui.allFaq} <span aria-hidden="true">→</span></Link>
          </div> : null}
        </section>
        {relatedItems.length ? <nav className={styles.related} aria-label={ui.related}>
          <h2>{ui.related}</h2>
          <ul>{relatedItems.slice(0, 3).map(item => <li key={item.href}><Link href={href(item.href)}>{item.title}<span aria-hidden="true">↗</span></Link></li>)}</ul>
          {relatedItems.length > 3 ? <details className={styles.moreRelated}>
            <summary>{ui.moreRelated}</summary>
            <ul>{relatedItems.slice(3).map(item => <li key={item.href}><Link href={href(item.href)}>{item.title}<span aria-hidden="true">↗</span></Link></li>)}</ul>
          </details> : null}
        </nav> : null}
      </div>
    </main>
  );
}
