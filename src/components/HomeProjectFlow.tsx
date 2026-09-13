import type { Locale } from "@/lib/i18n/locales";
import styles from "./homepage.module.css";

const copy = {
  cs: {
    eyebrow: "Postup spolupráce",
    title: "Průběh zakázky",
    imageAlt: "Měření emisí v průmyslovém provozu",
    imageLabel: "Měření emisí v provozu",
    steps: [
      { title: "Posouzení podkladů", text: "Projekt, rozhodnutí nebo požadavek úřadu." },
      { title: "Rozsah zakázky", text: "Potřebná měření, studie a dokumentace." },
      { title: "Provedení prací", text: "Měření v provozu nebo odborné zpracování." },
      { title: "Předání výstupu", text: "Protokol, studie nebo dokumentace." }
    ]
  },
  en: {
    eyebrow: "Cooperation process",
    title: "Project workflow",
    imageAlt: "Emission measurement in an industrial operation",
    imageLabel: "Emission measurement on site",
    steps: [
      { title: "Document review", text: "The project, decision or authority request." },
      { title: "Scope of work", text: "Required measurements, studies and documentation." },
      { title: "Work performed", text: "On-site measurement or technical preparation." },
      { title: "Deliverable", text: "A report, study or technical document." }
    ]
  },
  de: {
    eyebrow: "Ablauf der Zusammenarbeit",
    title: "Ablauf eines Auftrags",
    imageAlt: "Emissionsmessung in einem Industriebetrieb",
    imageLabel: "Emissionsmessung im Betrieb",
    steps: [
      { title: "Prüfung der Unterlagen", text: "Projekt, Bescheid oder Behördenanforderung." },
      { title: "Leistungsumfang", text: "Erforderliche Messungen, Studien und Dokumentation." },
      { title: "Durchführung", text: "Messung im Betrieb oder fachliche Ausarbeitung." },
      { title: "Übergabe", text: "Bericht, Studie oder Fachunterlage." }
    ]
  }
} as const;

export function HomeProjectFlow({ locale }: { locale: Locale }) {
  const content = copy[locale];
  return (
    <section className={`${styles.section} ${styles.flow}`} aria-labelledby="home-project-flow-heading">
      <div className={styles.container}>
        <header className={styles.sectionHeader}><h2 id="home-project-flow-heading">{content.title}</h2></header>
        <ol className={styles.steps}>
          {content.steps.map((step, index) => (
            <li key={step.title}>
              <span className={styles.stepNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div><strong>{step.title}</strong><p>{step.text}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
