import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcon";
import { localizeHref } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/locales";
import styles from "./homepage.module.css";

const czechPaths = ["/mereni-pro-kolaudaci", "/mereni-pracovniho-prostredi-kategorizace-praci", "/pro-stavebni-firmy"];
// Two campaign pages deliberately exist only in Czech. Use translated service
// overviews in EN/DE instead of manufacturing unavailable locale URLs.
const translatedPaths = ["/sluzby#mericke-sluzby", "/mereni-pracovniho-prostredi-kategorizace-praci", "/sluzby#povolovaci-podklady"];
const copy = {
  cs: { title: "Co potřebujete vyřešit?", items: [
    ["Měření pro kolaudaci", "Rozsah podle projektu nebo požadavku úřadu.", "Zjistit rozsah"],
    ["Kategorizace prací", "Měření a podklady pro pracovní prostředí.", "Připravit podklady"],
    ["Dokumentace k projektu", "Studie, posudky a EIA pro povolovací řízení.", "Zjistit podklady"]
  ]},
  en: { title: "What do you need to resolve?", items: [
    ["Building approval measurements", "Scope based on the project or authority requirements.", "View the scope"],
    ["Work categorisation", "Workplace measurements and supporting documents.", "Prepare documents"],
    ["Project documentation", "Studies, expert reports and EIA for permitting.", "View requirements"]
  ]},
  de: { title: "Welche Aufgabe möchten Sie lösen?", items: [
    ["Messungen zur Bauabnahme", "Umfang nach Projekt oder Behördenanforderung.", "Umfang ansehen"],
    ["Arbeitskategorisierung", "Messungen und Unterlagen zum Arbeitsumfeld.", "Unterlagen vorbereiten"],
    ["Projektunterlagen", "Studien, Gutachten und UVP für Genehmigungen.", "Unterlagen ansehen"]
  ]}
} as const;

export function HomeDemandPaths({ locale }: { locale: Locale }) {
  const content = copy[locale];
  const paths = locale === "cs" ? czechPaths : translatedPaths;
  return (
    <section className={`${styles.section} ${styles.situations}`} aria-labelledby="home-demand-paths-heading">
      <div className={styles.container}>
        <header className={styles.sectionHeader}><h2 id="home-demand-paths-heading">{content.title}</h2></header>
        <ul className={styles.situationGrid}>
          {content.items.map(([title, , cta], index) => (
            <li key={paths[index]}>
              <Link href={localizeHref(paths[index], locale)} className={styles.situation}>
                <span className={styles.situationIcon}><ServiceIcon icon={index === 0 ? "contact-building" : index === 1 ? "pracovni-prostredi" : "posudek"} size={38} /></span>
                <div className={styles.situationBody}>
                  <strong>{title}</strong>
                  <span className={styles.situationCta}>{cta}</span>
                </div>
                <span className={styles.situationArrow} aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
