import Link from "next/link";
import { getReferenceContent } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";
import styles from "./service-improvements.module.css";

/** Only an existing published example directly assigned to this service. */
export async function ServiceEvidence({ locale, slug }: { locale: Locale; slug: string }) {
  const { referenceExamples } = await getReferenceContent(locale);
  const example = referenceExamples.find(item => item.href === `/${slug}`);
  if (!example) return null;
  const t = locale === "cs"
    ? { title: "Příklad zakázky", scope: "Rozsah", output: "Výstup", link: "Anonymizované příklady a reference" }
    : locale === "de"
      ? { title: "Projektbeispiel", scope: "Umfang", output: "Ergebnis", link: "Anonymisierte Beispiele und Referenzen" }
      : { title: "Project example", scope: "Scope", output: "Output", link: "Anonymised examples and references" };
  return (
    <section className={styles.evidence} aria-labelledby="service-evidence-heading">
      <div><p className={styles.kicker}>{t.title}</p><h2 id="service-evidence-heading">{example.title}</h2></div>
      <div>
        <dl><dt>{t.scope}</dt><dd>{example.scope}</dd><dt>{t.output}</dt><dd>{example.output}</dd></dl>
        <Link href={localizeHref("/reference#priklady", locale)}>{t.link} <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
