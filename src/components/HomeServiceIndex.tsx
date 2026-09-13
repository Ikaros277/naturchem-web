import Link from "next/link";
import { HomeStudyGraphic } from "@/components/HomeStudyGraphic";
import { localizeHref } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/locales";
import styles from "./homepage.module.css";

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
        return (
          <li key={slug}>
            <Link className={`${styles.serviceCard} ${index < 3 ? styles.measurementCard : styles.studyCard}`} href={localizeHref(href, locale)}>
              {index < 3 ? (
                <div className={styles.servicePhoto} aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element -- Existing static WebP; no runtime image transformations. */}
                  <img src={`/hero/${slug}.webp`} alt="" width={640} height={360} loading="lazy" decoding="async" />
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
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
