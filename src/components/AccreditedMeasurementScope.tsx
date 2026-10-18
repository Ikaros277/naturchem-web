import { accreditationSource, additionalAuthorizedEmissionAnalytes, authorizedEmissionGroups, emissionAuthorizationSource, externalLaboratoryNotes, verifiedScopeGroups, type AccreditedScopeKind } from "@/lib/verified-accreditation-scope";
import type { ServiceIconKey } from "@/lib/service-icons";
import { getReferencePhotographSources, referencePhotographs } from "@/lib/reference-photographs";
import { ServiceIcon } from "./ServiceIcon";
import styles from "./accredited-scope.module.css";

const scopeVisuals: Record<string, { icon: ServiceIconKey; tone: "air" | "physical" | "sampling" }> = {
  dust: { icon: "rozptyl", tone: "air" },
  organic: { icon: "chemie", tone: "air" },
  "detector-tubes": { icon: "process-rozsah", tone: "air" },
  microclimate: { icon: "mikroklima", tone: "physical" },
  vibration: { icon: "vibrace", tone: "physical" },
  lighting: { icon: "osvetleni", tone: "physical" },
  noise: { icon: "hluk", tone: "physical" },
  "filter-sampling": { icon: "process-zpracovani", tone: "sampling" },
  gases: { icon: "rozptyl", tone: "air" },
  chlorine: { icon: "chemie", tone: "air" },
  "particles-metals": { icon: "process-zpracovani", tone: "sampling" },
  "gas-parameters": { icon: "mikroklima", tone: "physical" },
};

function WorkplaceScopeHeading({ title, headingId }: { title: string; headingId: string }) {
  const photo = referencePhotographs.find(item => item.exampleId === "svarovna-pp")!;
  const sources = getReferencePhotographSources(photo);
  const sizes = "(min-width: 1280px) 660px, (min-width: 768px) 52vw, calc(100vw - 32px)";

  return <div className={styles.scopeFeature} data-scope-feature="authentic">
    <div className={styles.scopeFeatureCopy}>
      <svg className={styles.scopeWave} viewBox="0 0 480 180" fill="none" aria-hidden="true" focusable="false">
        <g stroke="currentColor" strokeWidth="1.25">
          <path d="M0 104h36c12 0 12-32 24-32s12 64 24 64 12-92 24-92 12 120 24 120 12-148 24-148 12 148 24 148 12-120 24-120 12 92 24 92 12-64 24-64 12 32 24 32h168" />
          <path d="M330 15a90 90 0 0 1 0 170M354 31a68 68 0 0 1 0 138M378 49a48 48 0 0 1 0 102" />
        </g>
        <path d="M0 104h480" stroke="currentColor" strokeOpacity=".35" strokeDasharray="3 8" />
      </svg>
      <p className={styles.eyebrow}>Rozsah služeb naší laboratoře</p>
      <h2 id={headingId}>{title}</h2>
      <ul className={styles.scopeFeatureTopics} aria-label="Oblasti měření">
        <li>Pracovní ovzduší</li><li>Fyzikální faktory</li><li>Odběry</li>
      </ul>
    </div>
    <figure className={styles.scopeFeaturePhoto}>
      <picture><source type="image/avif" srcSet={sources.avifSrcSet} sizes={sizes} />
        {/* Reuse reviewed static variants; no new image transformation requests. */}
        <img src={sources.src} srcSet={sources.srcSet} sizes={sizes} width={sources.width} height={sources.height} alt={photo.alt} loading="lazy" fetchPriority="low" decoding="async" />
      </picture>
      <figcaption>Hlukoměr na pracovišti</figcaption>
    </figure>
  </div>;
}

/** Complete grouped coverage with native, server-rendered analyte disclosures. */
export function AccreditedScopeList({ kind, includeEmissionAuthorization = false, showTechnicalDetails = false }: { kind: AccreditedScopeKind; includeEmissionAuthorization?: boolean; showTechnicalDetails?: boolean }) {
  return <div className={styles.accreditedScopeList} data-accredited-scope={kind}>
    <dl className={`${styles.accreditedGroups}${showTechnicalDetails ? "" : " " + styles.scopeCards}`}>
      {verifiedScopeGroups[kind].map(group => <div key={group.id} data-accredited-activities={group.activities.join(" ")} data-scope-tone={showTechnicalDetails ? undefined : scopeVisuals[group.id].tone}>
        <dt>{!showTechnicalDetails ? <ServiceIcon icon={scopeVisuals[group.id].icon} size={22} className={styles.scopeIcon} /> : null}<span>{group.title}</span></dt>
        <dd>
          <span className={styles.accreditedSummary}>{!showTechnicalDetails && group.serviceSummary ? group.serviceSummary : group.summary}</span>
          {showTechnicalDetails && group.qualification ? <small className={styles.scopeQualification}>{group.qualification}</small> : null}
          {group.analytes?.length ? <details className={styles.scopeAnalytes}>
            <summary>{group.analytesLabel} <span>({group.analytes.length})</span></summary>
            <ul>{group.analytes.map(item => <li key={item}>{item}</li>)}</ul>
          </details> : null}
        </dd>
      </div>)}
      {kind === "emissions" && includeEmissionAuthorization ? <div data-authorized-emission-additions data-scope-tone={showTechnicalDetails ? undefined : "sampling"}>
        <dt>{!showTechnicalDetails ? <ServiceIcon icon="povoleni" size={22} className={styles.scopeIcon} /> : null}<span>Autorizace MŽP</span></dt>
        <dd><span className={styles.accreditedSummary}>{additionalAuthorizedEmissionAnalytes.join(" · ")}</span>
          {showTechnicalDetails ? <small className={styles.scopeQualification}>Měříme na základě autorizace MŽP č. {emissionAuthorizationSource.number}.</small> : null}
        </dd>
      </div> : null}
    </dl>
    {showTechnicalDetails ? <>
      {externalLaboratoryNotes[kind] ? <p className={styles.scopeFootnote}>{externalLaboratoryNotes[kind]}</p> : null}
      <a className={styles.scopeDocument} href={accreditationSource.localDocument} target="_blank" rel="noopener noreferrer">Příloha akreditace č. {accreditationSource.certificate} (PDF) <span aria-hidden="true">↗</span></a>
      {kind === "emissions" && includeEmissionAuthorization ? <a className={styles.scopeDocument} href={emissionAuthorizationSource.registry} target="_blank" rel="noopener noreferrer">Autorizace k měření emisí v registru MŽP <span aria-hidden="true">↗</span></a> : null}
    </> : null}
  </div>;
}

export function EmissionAuthorizationScope() {
  return <details className={styles.fullAccreditation} data-emission-authorization={emissionAuthorizationSource.number}>
    <summary>Rozsah autorizace MŽP pro měření emisí</summary>
    <p className={styles.scopeFootnote}>Jednorázová měření emisí provádíme na základě autorizace MŽP č. {emissionAuthorizationSource.number}. Její rozsah uvádíme samostatně od akreditace ČIA.</p>
    <dl className={styles.accreditedGroups}>
      {authorizedEmissionGroups.map(group => <div key={group.title}><dt>{group.title}</dt><dd><span className={styles.accreditedSummary}>{group.items.join(" · ")}</span></dd></div>)}
    </dl>
    <a className={styles.scopeDocument} href={emissionAuthorizationSource.registry} target="_blank" rel="noopener noreferrer">Záznam NATURCHEM v registru MŽP <span aria-hidden="true">↗</span></a>
  </details>;
}

export function AccreditedMeasurementScope({ kind, id = "akreditovany-rozsah", title, showTechnicalDetails = false }: { kind: AccreditedScopeKind; id?: string; title: string; showTechnicalDetails?: boolean }) {
  return <section className={`${styles.accreditedSection}${showTechnicalDetails ? "" : " " + styles.serviceScope}`} aria-labelledby={id + "-heading"} id={id}>
    {kind === "workplace" && !showTechnicalDetails ? <WorkplaceScopeHeading title={title} headingId={id + "-heading"} />
      : <div className={styles.scopeSectionHeading}><p className={styles.eyebrow}>Rozsah služeb naší laboratoře</p><h2 id={id + "-heading"}>{title}</h2></div>}
    <AccreditedScopeList kind={kind} showTechnicalDetails={showTechnicalDetails} />
  </section>;
}

export function FullAccreditedScope() {
  return <details className={styles.fullAccreditation}>
    <summary>Úplný přehled akreditovaných zkoušek a odběrů</summary>
    <AccreditedMeasurementScope kind="emissions" id="rozsah-emise" title="Emise ze stacionárních zdrojů" showTechnicalDetails />
    <AccreditedMeasurementScope kind="workplace" id="rozsah-pracovni-prostredi" title="Pracovní prostředí a vnitřní ovzduší" showTechnicalDetails />
    <AccreditedMeasurementScope kind="environment" id="rozsah-hluk-okoli" title="Hluk v okolí" showTechnicalDetails />
  </details>;
}
