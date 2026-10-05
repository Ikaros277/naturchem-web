import { ServiceIcon } from "@/components/ServiceIcon";
import { contactCategoryUrl } from "@/lib/contact-url";
import { localizeHref } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/locales";
import styles from "./homepage.module.css";

const czechPaths = ["/mereni-pro-kolaudaci", "/mereni-pracovniho-prostredi-kategorizace-praci", "/pro-stavebni-firmy"];
// Two campaign pages deliberately exist only in Czech. Use translated service
// overviews in EN/DE instead of manufacturing unavailable locale URLs.
const translatedPaths = ["/sluzby#mericke-sluzby", "/mereni-pracovniho-prostredi-kategorizace-praci", "/sluzby#povolovaci-podklady"];
const copy = {
  cs: { title: "Pro podniky i odborné partnery", kicker: "Spolupráce s NATURCHEM", needsTitle: "Co potřebujete vyřešit?", audiences: [
    "Podniky a specialisté EHS / BOZP",
    "Externí ekologové a environmentální firmy",
    "Projektanti, investoři a veřejná správa"
  ], partnerTitle: "Měření a podklady pro Vaše klienty", partnerLink: "Projednat spolupráci", partnerMessage: "Poptávka spolupráce pro klienta externího ekologa / environmentální firmy.\nPožadovaný rozsah a termín: ", items: [
    ["Měření pro kolaudaci", "Rozsah podle projektu nebo požadavku úřadu.", "Zjistit rozsah"],
    ["Kategorizace prací", "Měření a podklady pro pracovní prostředí.", "Připravit podklady"],
    ["Dokumentace k projektu", "Studie, posudky a EIA pro povolovací řízení.", "Zjistit podklady"]
  ]},
  en: { title: "For businesses and specialist partners", kicker: "Working with NATURCHEM", needsTitle: "What do you need to resolve?", audiences: [
    "Businesses and EHS specialists",
    "Environmental consultants and service providers",
    "Designers, investors and public authorities"
  ], partnerTitle: "Measurements and documents for your clients", partnerLink: "Discuss cooperation", partnerMessage: "Cooperation inquiry for a client of an environmental consultant / service provider.\nRequired scope and deadline: ", items: [
    ["Building approval measurements", "Scope based on the project or authority requirements.", "View the scope"],
    ["Work categorisation", "Workplace measurements and supporting documents.", "Prepare documents"],
    ["Project documentation", "Studies, expert reports and EIA for permitting.", "View requirements"]
  ]},
  de: { title: "Für Unternehmen und Fachpartner", kicker: "Zusammenarbeit mit NATURCHEM", needsTitle: "Welche Aufgabe möchten Sie lösen?", audiences: [
    "Unternehmen und EHS-Fachkräfte",
    "Externe Umweltberater und Umweltdienstleister",
    "Planer, Investoren und öffentliche Verwaltung"
  ], partnerTitle: "Messungen und Unterlagen für Ihre Kunden", partnerLink: "Zusammenarbeit besprechen", partnerMessage: "Anfrage zur Zusammenarbeit für einen Kunden eines Umweltberaters / Umweltdienstleisters.\nGewünschter Umfang und Termin: ", items: [
    ["Messungen zur Bauabnahme", "Umfang nach Projekt oder Behördenanforderung.", "Umfang ansehen"],
    ["Arbeitskategorisierung", "Messungen und Unterlagen zum Arbeitsumfeld.", "Unterlagen vorbereiten"],
    ["Projektunterlagen", "Studien, Gutachten und UVP für Genehmigungen.", "Unterlagen ansehen"]
  ]}
} as const;

export function HomeDemandPaths({ locale }: { locale: Locale }) {
  const content = copy[locale];
  const paths = locale === "cs" ? czechPaths : translatedPaths;
  return (
    <section className={`${styles.section} ${styles.b2bSection}`} aria-labelledby="home-demand-paths-heading">
      <div className={styles.container}>
        <header className={styles.b2bIntro}>
          <span className={styles.b2bKicker}>{content.kicker}</span>
          <h2 id="home-demand-paths-heading">{content.title}</h2>
        </header>
        <ul className={styles.audienceList}>
          {content.audiences.map((title, index) => (
            <li key={title} className={styles.audienceItem} data-b2b-role={index === 0 ? "business_ehs" : index === 1 ? "environmental_partner" : "project_public_sector"}>
              <span className={styles.audienceIcon} aria-hidden="true"><ServiceIcon icon={index === 0 ? "audience-prumysl" : index === 1 ? "posudek" : "audience-investor"} size={30} /></span>
              <strong className={styles.audienceTitle}>{title}</strong>
            </li>
          ))}
        </ul>
        <div className={styles.partnerRow}>
          <span>{content.partnerTitle}</span>
          <a className={styles.partnerLink} href={localizeHref(contactCategoryUrl("nevim", content.partnerMessage), locale)} data-b2b-audience="environmental_partner">
            {content.partnerLink} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <nav className={styles.needsNav} aria-labelledby="home-needs-heading">
          <h3 id="home-needs-heading">{content.needsTitle}</h3>
          <ul className={styles.situationGrid}>
            {content.items.map(([title, , cta], index) => (
              <li key={paths[index]}>
                <a href={localizeHref(paths[index], locale)} className={styles.situation}>
                  <span className={styles.situationIcon} aria-hidden="true"><ServiceIcon icon={index === 0 ? "contact-building" : index === 1 ? "pracovni-prostredi" : "posudek"} size={38} /></span>
                  <div className={styles.situationBody}>
                    <strong>{title}</strong>
                    <span className={styles.situationCta}>{cta}</span>
                  </div>
                  <span className={styles.situationArrow} aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
