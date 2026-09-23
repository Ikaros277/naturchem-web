import Link from "next/link";
import { getReferenceContent, getReferenceExampleGroups } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";
import styles from "./service-improvements.module.css";

/** Only an existing published example directly assigned to this service. */
export async function ServiceEvidence({ locale, slug }: { locale: Locale; slug: string }) {
  const { referenceExamples } = await getReferenceContent(locale);
  const example = referenceExamples.find(item => item.href === `/${slug}`);
  if (!example) return null;
  const groups = await getReferenceExampleGroups(locale);
  const group = groups.find(item => item.exampleIds.includes(example.id));
  const t = locale === "cs"
    ? { title: "Anonymizovaný příklad zakázky", scope: "Rozsah", output: "Výstup", link: "Další příklady z této oblasti" }
    : locale === "de"
      ? { title: "Anonymisiertes Projektbeispiel", scope: "Umfang", output: "Ergebnis", link: "Weitere Beispiele aus diesem Bereich" }
      : { title: "Anonymised project example", scope: "Scope", output: "Output", link: "More examples in this area" };
  return (
    <section className={styles.evidence} aria-labelledby="service-evidence-heading">
      <div><p className={styles.kicker}>{t.title}</p><h2 id="service-evidence-heading">{example.title}</h2></div>
      <div>
        <dl><dt>{t.scope}</dt><dd>{example.scope}</dd><dt>{t.output}</dt><dd>{example.output}</dd></dl>
        <Link href={localizeHref(`/reference#${group?.id ?? "priklady"}`, locale)}>{t.link} <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
