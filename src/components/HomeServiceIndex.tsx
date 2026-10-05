import { HomeStudyGraphic } from "@/components/HomeStudyGraphic";
import { localizeHref } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/locales";
import styles from "./homepage.module.css";
import { getAuthenticPhoto } from "@/lib/authentic-photos";

const servicePaths = ["mereni-emisi", "mereni-hluku", "pracovni-prostredi", "hlukove-studie", "rozptylove-studie", "eia-posudky-poradenstvi"] as const;
const copy = {
  cs: [
    ["Měření emisí", "Kotelny · lakovny · technologie"],
    ["Měření hluku", "Provoz · technologie · okolí"],
    ["Pracovní prostředí", "Hluk · prach · chemické látky"],
    ["Hlukové studie", "Akustické výpočty pro Váš projekt"],
    ["Rozptylové studie", "Posouzení vlivu na ovzduší"],
    ["EIA a dokumentace", "Oznámení záměru a odborné posudky"]
  ],
  en: [
    ["Emission measurements", "Boiler plants · paint shops · technology"],
    ["Noise measurements", "Operations · equipment · surroundings"],
    ["Workplace environment", "Noise · dust · chemical substances"],
    ["Noise studies", "Acoustic calculations for your project"],
    ["Dispersion studies", "Assessment of air quality impacts"],
    ["EIA and documentation", "Project notifications and expert reports"]
  ],
  de: [
    ["Emissionsmessungen", "Kesselanlagen · Lackierereien · Technik"],
    ["Lärmmessungen", "Betrieb · Anlagen · Umgebung"],
    ["Arbeitsumfeld", "Lärm · Staub · chemische Stoffe"],
    ["Lärmstudien", "Akustische Berechnungen für Ihr Projekt"],
    ["Ausbreitungsstudien", "Bewertung der Luftqualitätsauswirkungen"],
    ["UVP und Dokumentation", "Vorhabenanzeigen und Gutachten"]
  ]
} as const;

export function HomeServiceIndex({ locale }: { locale: Locale }) {
  return (
    <ul className={styles.servicesGrid}>
      {servicePaths.map((slug, index) => {
        const [title, description] = copy[locale][index];
        const href = `/sluzby/${slug}`;
        const photo = getAuthenticPhoto(slug);
        const cardSrc = photo ? `${photo.base}-card-384.webp` : `/hero/${slug}-card.webp`;
        const smallSrc = photo ? `${photo.base}-card-192.webp` : `/hero/${slug}-card-192.webp`;
        return (
          <li key={slug}>
            <a className={`${styles.serviceCard} ${index < 3 ? styles.measurementCard : styles.studyCard} ${index === 5 ? styles.documentationCard : ""}`} href={localizeHref(href, locale)} data-service-placement="home_service_index">
              {index < 3 ? (
                <div className={styles.servicePhoto} aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element -- Pre-sized card WebP; no runtime image transformations. */}
                  <img
                    src={cardSrc}
                    srcSet={`${smallSrc} 192w, ${cardSrc} 384w`}
                    sizes="(max-width: 767px) 96px, (max-width: 1024px) 30vw, 280px"
                    alt=""
                    width={384}
                    height={216}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    style={{ objectPosition: photo?.cardPosition ?? photo?.position }}
                  />
                </div>
              ) : (
                <div className={styles.studyGraphic}>
                  <HomeStudyGraphic kind={index === 3 ? "noise" : index === 4 ? "air" : "plan"} />
                </div>
              )}
              <div className={styles.serviceBody}>
                <div className={styles.serviceTitle}><h3>{title}</h3><span className={styles.arrow} aria-hidden="true">↗</span></div>
                <p>{description}</p>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
