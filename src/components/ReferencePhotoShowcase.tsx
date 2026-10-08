import { contactUrl } from "@/lib/contact-url";
import type { ReferenceExample } from "@/lib/reference-content";
import { getReferencePhotographSources, referencePhotographs } from "@/lib/reference-photographs";
import { localizeHref } from "@/lib/i18n/navigation";
import styles from "./reference-photo-showcase.module.css";

/** Server-rendered, static photographs: no gallery runtime or image transforms. */
export function ReferencePhotoShowcase({ examplesById }: { examplesById: Map<string, ReferenceExample> }) {
  const sizes = "(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc((100vw - 72px) / 2), (max-width: 1279px) calc((100vw - 88px) / 3), 371px";
  return (
    <section className="section content-block container" id="fotograficke-reference" aria-labelledby="reference-photo-heading">
      <div className={styles.heading}>
        <div><p className="eyebrow">Fotografie z realizací</p><h2 id="reference-photo-heading">Vybrané zakázky z praxe</h2></div>
        <a href="#priklady" className={styles.overview}>Přehled podle služeb <span aria-hidden="true">↓</span></a>
      </div>
      <div className={styles.grid}>
        {referencePhotographs.map(photo => {
          const example = examplesById.get(photo.exampleId);
          if (!example) throw new Error("Missing photographed reference: " + photo.exampleId);
          const sources = getReferencePhotographSources(photo);
          return (
            <article key={example.id} id={"reference-" + example.id} className={styles.card} data-photographic-reference={example.id}>
              <figure className={styles.figure} data-photo-relationship={photo.relationship}>
                <picture>
                  <source type="image/avif" srcSet={sources.avifSrcSet} sizes={sizes} />
                  {/* Pre-exported, metadata-free assets avoid billable on-demand transforms. */}
                  <img src={sources.src} srcSet={sources.srcSet} sizes={sizes} width={sources.width} height={sources.height} alt={photo.alt} loading="lazy" fetchPriority="low" decoding="async" />
                </picture>
                <figcaption>{photo.caption}</figcaption>
              </figure>
              <div className={styles.body}>
                <p className={styles.category}>{example.tags.slice(0, 2).join(" · ")}{photo.year ? <span className={styles.year}>{photo.year}</span> : null}</p>
                <h3>{example.title}</h3>
                <p className={styles.description}>{example.text}</p>
                <div className={styles.output}><span>Výstup zakázky</span><p>{example.output}</p></div>
                <div className={styles.actions}>
                  <a href={localizeHref(example.href, "cs")} className={styles.service}>O službě</a>
                  <a href={localizeHref(contactUrl(example.contactService), "cs")} className={styles.inquiry} aria-label={"Poptat podobnou zakázku: " + example.title}>Poptat podobnou zakázku <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
