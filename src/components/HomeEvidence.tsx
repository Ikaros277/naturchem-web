import Link from "next/link";
import { getReferenceContent } from "@/lib/i18n/content";
import { localizeHref } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/locales";
import styles from "./homepage.module.css";

const copy = {
  cs: { title: "Měření a podklady v praxi", intro: "Anonymizované příklady z přehledu našich zakázek.", scope: "Rozsah", output: "Výstup", all: "Přehled referencí", service: "Související služba" },
  en: { title: "Measurements and documentation in practice", intro: "Anonymised examples from our project overview.", scope: "Scope", output: "Output", all: "Project references", service: "Related service" },
  de: { title: "Messungen und Unterlagen in der Praxis", intro: "Anonymisierte Beispiele aus unserer Auftragsübersicht.", scope: "Umfang", output: "Ergebnis", all: "Referenzübersicht", service: "Zugehörige Leistung" }
};

/** Reuses published examples verbatim; no new client attribution or outcome claims. */
export async function HomeEvidence({ locale }: { locale: Locale }) {
  const reference = await getReferenceContent(locale);
  const selected = ["lak-automotive-emise", "hala-pp", "eia-lak"];
  const examples = selected.flatMap(id => reference.referenceExamples.filter(item => item.id === id));
  const t = copy[locale];
  return (
    <section className={styles.section} aria-labelledby="home-evidence-heading">
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 id="home-evidence-heading">{t.title}</h2>
          <Link className={styles.textLink} href={localizeHref("/reference#priklady", locale)}>{t.all}<span aria-hidden="true">→</span></Link>
        </header>
        <p className={styles.evidenceIntro}>{t.intro}</p>
        <div className={styles.evidenceGrid}>
          {examples.map(item => (
            <article key={item.id} className={styles.evidenceCard}>
              <h3>{item.title}</h3>
              <dl><dt>{t.scope}</dt><dd>{item.scope}</dd><dt>{t.output}</dt><dd>{item.output}</dd></dl>
              <Link className={styles.textLink} href={localizeHref(item.href, locale)}>{t.service}<span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
