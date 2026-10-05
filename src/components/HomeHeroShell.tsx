import type { ReactNode } from "react";
import type { HomeHeroPillar } from "@/lib/home-hero-pillars";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";
import styles from "./homepage.module.css";
import { getAuthenticPhoto } from "@/lib/authentic-photos";

/** Stable server-rendered hero: native links need no per-link hydration or prefetch. */
export function HomeHeroShell({ initialPhoto, children, pillars, ariaLabel, pillarsAriaLabel, locale, credential }: {
  initialPhoto: ReactNode;
  children: ReactNode;
  pillars: HomeHeroPillar[];
  ariaLabel: string;
  pillarsAriaLabel: string;
  locale: Locale;
  credential: string;
}) {
  const photo = getAuthenticPhoto(pillars[0]?.theme ?? "");
  return (
    <section className={styles.hero} aria-label={ariaLabel}>
      <div className={`${styles.container} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <a className={styles.credential} href={localizeHref("/akreditace-autorizace-dokumenty", locale)}>
            <span aria-hidden="true">✓</span><span>{credential}</span><span aria-hidden="true">↗</span>
          </a>
          {children}
          <nav className={styles.heroLinks} aria-label={pillarsAriaLabel}>
            {pillars.map((pillar) => (
              <a key={pillar.id} href={localizeHref(pillar.href, locale)}>
                {pillar.label}<span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
        </div>
        <figure className={styles.heroMedia}>
          {initialPhoto}
          {photo ? <figcaption className={styles.photoCaption}>{photo.caption[locale]}</figcaption> : null}
        </figure>
      </div>
    </section>
  );
}
