import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/locales";
import { articleReadingCopy, type ArticleHeading } from "@/lib/article-reading";
import styles from "./article-reading.module.css";

function OutlineLinks({ headings }: { headings: ArticleHeading[] }) {
  return <ol className={styles.links}>
    {headings.map(heading => <li key={heading.id}>
      <a href={`#${heading.id}`} data-article-outline-link>{heading.title}</a>
    </li>)}
  </ol>;
}

type Props = {
  locale: Locale;
  headings: ArticleHeading[];
  excerpt: string;
  summaryLabel: string;
  summaryAria: string;
  children: ReactNode;
};

export function ArticleReadingLayout({ locale, headings, excerpt, summaryLabel, summaryAria, children }: Props) {
  const copy = articleReadingCopy[locale];
  const hasOutline = headings.length > 1;
  return <div className={`${styles.frame} ${hasOutline ? styles.withOutline : styles.withoutOutline}`} id={hasOutline ? "article-outline" : undefined}>
    {hasOutline ? <aside className={styles.rail}>
      <nav className={styles.desktopOutline} aria-label={copy.contents}>
        <p className={styles.outlineTitle}>{copy.contents}</p>
        <p className={styles.count}>{copy.chapters}: {headings.length}</p>
        <OutlineLinks headings={headings} />
      </nav>
      <details className={styles.mobileOutline}>
        <summary><span>{copy.contents}<small>{copy.chapters}: {headings.length}</small></span><span className={styles.chevron} aria-hidden="true" /></summary>
        <nav aria-label={copy.contents}><OutlineLinks headings={headings} /></nav>
      </details>
    </aside> : null}
    <article className={styles.reading} aria-labelledby="article-title">
      {excerpt ? <aside className={`article-tldr ${styles.summary}`} aria-label={summaryAria}>
        <p className="article-tldr-label">{summaryLabel}</p>
        <p className="article-tldr-text">{excerpt}</p>
      </aside> : null}
      <div className="article-content"><div className="article-body" data-article-reading-body>{children}</div></div>
      {hasOutline ? <p className={styles.back}><a href="#article-outline"><span aria-hidden="true">↑</span> {copy.back}</a></p> : null}
    </article>
  </div>;
}
