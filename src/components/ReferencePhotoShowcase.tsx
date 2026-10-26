import { contactUrl } from "@/lib/contact-url";
import type { ReferenceExample } from "@/lib/reference-content";
import { getReferencePhotographSources, referencePhotographs } from "@/lib/reference-photographs";
import { ReferenceHashTarget } from "./ReferenceHashTarget";
import styles from "./reference-photo-showcase.module.css";

const featuredIds = ["hala-pp", "tcp-hluk", "kovovyroba-vibrace"];
const moreId = "dalsi-fotograficke-reference";

function ReferencePhotoCard({ photo, example }: { photo: (typeof referencePhotographs)[number]; example: ReferenceExample }) {
  const sources = getReferencePhotographSources(photo);
  const sizes = "(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc((100vw - 72px) / 2), 371px";
  return <article id={"reference-" + example.id} className={styles.card} data-photographic-reference={example.id}>
    <figure className={styles.figure} data-photo-relationship={photo.relationship}>
      <picture><source type="image/avif" srcSet={sources.avifSrcSet} sizes={sizes} />
        {/* Pre-exported photographs: no on-demand transforms. */}
        <img src={sources.src} srcSet={sources.srcSet} sizes={sizes} width={sources.width} height={sources.height} alt={photo.alt} loading="lazy" fetchPriority="low" decoding="async" />
      </picture><figcaption>{photo.caption}</figcaption>
    </figure>
    <div className={styles.body}>
      <p className={styles.category}>{example.tags.slice(0, 2).join(" · ")}<span className={styles.year}>{photo.year}</span></p>
      <h3>{example.title}</h3>
      <p className={styles.description}>{example.scope}</p>
      <div className={styles.output}><span>Výstup zakázky</span><p>{example.output}</p></div>
      <details className={styles.details}><summary>Podrobnosti realizace</summary><p>{example.text}</p><p><strong>Provoz:</strong> {example.operationType}</p></details>
      <div className={styles.actions}>
        <a href={example.href} className={styles.service}>O službě</a>
        <a href={contactUrl(example.contactService)} className={styles.inquiry} aria-label={"Poptat podobnou zakázku: " + example.title}>Poptat podobnou zakázku <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </article>;
}

/** All nine evidenced cases remain in HTML; deeper reading is optional, not a client gallery. */
export function ReferencePhotoShowcase({ examplesById }: { examplesById: Map<string, ReferenceExample> }) {
  const featured = featuredIds.map(id => referencePhotographs.find(photo => photo.exampleId === id)!);
  const remaining = referencePhotographs.filter(photo => !featuredIds.includes(photo.exampleId));
  const render = (photo: (typeof referencePhotographs)[number]) => {
    const example = examplesById.get(photo.exampleId);
    if (!example) throw new Error("Missing photographed reference: " + photo.exampleId);
    return <ReferencePhotoCard key={example.id} photo={photo} example={example} />;
  };
  return <section className="section content-block container" id="fotograficke-reference" aria-labelledby="reference-photo-heading">
    <ReferenceHashTarget groupIds={[moreId]} />
    <div className={styles.heading}><div><p className="eyebrow">Fotografie z realizací</p><h2 id="reference-photo-heading">Fotografické reference</h2></div>
      <a href="#priklady" className={styles.overview}>Další reference <span aria-hidden="true">↓</span></a>
    </div>
    <nav className={styles.shortcuts} aria-label="Výběr fotografických referencí"><a href="#reference-hala-pp">Pracovní prostředí</a><a href="#reference-tcp-hluk">Hluk v okolí</a><a href="#reference-kovovyroba-vibrace">Vibrace</a><a href="#reference-lak-automotive-emise">Emise</a><a href={"#" + moreId}>Všechny fotografické reference ({referencePhotographs.length})</a></nav>
    <div className={styles.grid}>{featured.map(render)}</div>
    <details id={moreId} className={styles.more}>
      <summary>Další fotografické reference <span>{remaining.length} zakázek</span></summary>
      <div className={styles.grid}>{remaining.map(render)}</div>
    </details>
  </section>;
}
