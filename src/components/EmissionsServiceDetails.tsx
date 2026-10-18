import type { FaqItem } from "@/lib/faq";
import type { ServiceEvidence } from "@/lib/service-search-support";
import { referenceExamples } from "@/lib/reference-content";
import { getReferencePhotographSources, referencePhotographs } from "@/lib/reference-photographs";
import { localizeHref } from "@/lib/i18n/navigation";
import { FaqAccordionList, type FaqAccordionUiLabels } from "./FaqAccordionList";
import { InlineEmphasis } from "./InlineEmphasis";
import { ServiceIcon } from "./ServiceIcon";
import { AccreditedScopeList } from "./AccreditedMeasurementScope";
import styles from "./service-detail.module.css";

type Props = {
  whenNeeded: string[];
  evidence?: ServiceEvidence;
  faqItems: FaqItem[];
  faqUiLabels?: FaqAccordionUiLabels;
};

const sourceLinks = [
  { title: "Lakovny", href: "/mereni-emisi-lakoven" },
  { title: "Kotelny", href: "/mereni-emisi-kotelen" },
  { title: "Bioplynové stanice", href: "/mereni-emisi-bioplynovych-stanic" },
  { title: "Dieselagregáty", href: "/mereni-emisi-dieselagregat" },
];

/** Local Czech prototype. Unique technical information stays in server HTML;
 * repeated outputs, preparation documents and situations are not printed again.
 */
export function EmissionsServiceDetails({ whenNeeded, evidence, faqItems, faqUiLabels }: Props) {
  const href = (path: string) => localizeHref(path, "cs");
  const example = referenceExamples.find(item => item.id === "bps-emise")!;
  const photo = referencePhotographs.find(item => item.exampleId === example.id)!;
  const sources = getReferencePhotographSources(photo);
  const sizes = "(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) 40vw, 480px";

  return <>
    <section className={styles.editorialScope} aria-labelledby="service-details-heading" data-emissions-presentation="editorial">
      <div className={styles.scopeContent}>
        <h2 id="service-details-heading">Co měříme na výduchu</h2>
        <p className={styles.scopeIntro}>Měříme v rozsahu akreditace ČIA a autorizace MŽP. Látky a parametry pro Vaši zakázku určíme podle povolení provozu a zadání.</p>
        <AccreditedScopeList kind="emissions" includeEmissionAuthorization />
        <nav className={styles.sourceChoices} aria-label="Měření emisí podle typu zdroje">
          <h3>Podle typu zdroje</h3>
          <ul>{sourceLinks.map(item => <li key={item.href}><a href={href(item.href)}>{item.title}<span aria-hidden="true">↗</span></a></li>)}</ul>
        </nav>
      </div>
      <article className={styles.photographicCase} aria-labelledby="emissions-case-heading" data-photographic-reference={example.id}>
        <figure data-photo-relationship={photo.relationship}>
          <picture><source type="image/avif" srcSet={sources.avifSrcSet} sizes={sizes} />
            {/* Existing static variants: no image transformation requests. */}
            <img src={sources.src} srcSet={sources.srcSet} sizes={sizes} width={sources.width} height={sources.height} alt={photo.alt} loading="lazy" fetchPriority="low" decoding="async" />
          </picture>
          <figcaption>Fotografie z této zakázky</figcaption>
        </figure>
        <div className={styles.caseCopy}>
          <p className={styles.caseEyebrow}>Z naší praxe <span>{photo.year}</span></p>
          <h3 id="emissions-case-heading">{example.title}</h3>
          <p>{example.scope.charAt(0).toUpperCase() + example.scope.slice(1)}.</p>
          <p className={styles.caseOutput}><strong>Výstup:</strong> {example.output}</p>
          <a className={styles.textLink} href={href("/reference#reference-" + example.id)}>Podrobnosti realizace <span aria-hidden="true">→</span></a>
        </div>
      </article>
    </section>

    <section className={styles.editorialDetails} aria-labelledby="emissions-preparation-heading">
      <div className={styles.editorialTechnical}>
        <h2 id="emissions-preparation-heading">Odborné podrobnosti</h2>
        <div className={styles.disclosures}>
          <details><summary><ServiceIcon icon="process-rozsah" size={22} className={styles.disclosureIcon} /><span>Provoz a měřicí místo</span></summary>
            <div className={styles.detailBody}>
              <ul>
                <li><strong>Měřicí místo a přístup.</strong> Posoudíme výduch, přístupové podmínky a soulad s provozním řádem a výkresy.</li>
                <li><strong>Reprezentativní provoz.</strong> Dohodneme přípravu a průběh měření. Zohledníme skutečnou zátěž zdroje, ne atypický údržbový stav.</li>
                <li><strong>Provozní údaje.</strong> Upřesníme údaje o palivech a materiálech, podmínky v areálu a případné lhůty oznámení.</li>
              </ul>
            </div>
          </details>
          <details><summary><ServiceIcon icon="process-posouzeni" size={22} className={styles.disclosureIcon} /><span>Požadavky úřadů a návazné podklady</span></summary>
            <div className={styles.detailBody}>
              <ul>{whenNeeded.map(item => <li key={item}><InlineEmphasis text={item} /></li>)}</ul>
              <p>Protokol zahrnuje metodiku a vyhodnocení vůči limitům. Výsledky doplníme shrnutím pro jednání s úřadem nebo navazující dokumentaci.</p>
              {evidence ? <aside className={styles.technicalEvidence} data-service-evidence>
                <h3>{evidence.title}</h3><p>{evidence.summary}</p><p><strong>Výstup:</strong> {evidence.output}</p>
              </aside> : null}
            </div>
          </details>
        </div>
      </div>
      <div className={`${styles.faq} ${styles.editorialFaq}`}>
        <h2><ServiceIcon icon="faq" size={24} className={styles.faqIcon} />Časté dotazy</h2>
        <FaqAccordionList items={faqItems} locale="cs" uiLabels={faqUiLabels} />
        <a className={styles.textLink} href={href("/faq#emise")}>Další otázky a odpovědi <span aria-hidden="true">→</span></a>
      </div>
    </section>
  </>;
}
