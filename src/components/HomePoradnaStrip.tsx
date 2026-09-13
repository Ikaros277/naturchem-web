import Link from "next/link";
import { formatArticleDate } from "@/lib/format-date";
import { getMessages } from "@/lib/i18n/get-messages";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";
import { getLatestPoradnaArticles } from "@/lib/poradna-articles";
import { getHeroImageSrc } from "@/lib/hero-images";
import { heroThemeForArticle } from "@/lib/poradna-topic";
import { GeneratedIllustration } from "@/components/GeneratedIllustration";
import { getGeneratedIllustrationSources } from "@/lib/generated-illustrations";
import styles from "./homepage.module.css";

export async function HomePoradnaStrip({ locale }: { locale: Locale }) {
  const messages = await getMessages(locale);
  const articles = await getLatestPoradnaArticles(3, locale);
  if (!articles.length) return null;
  return (
    <section className={styles.section} aria-labelledby="home-poradna-heading">
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 id="home-poradna-heading">{messages.home.articlesTitle}</h2>
          <Link href={localizeHref("/poradna", locale)} className={styles.textLink}>{messages.common.allArticles}<span aria-hidden="true">→</span></Link>
        </header>
        <div className={styles.articles}>
          {articles.map(article => {
            const imageSrc = article.heroImage || getHeroImageSrc(heroThemeForArticle(article));
            return (
            <Link key={article.slug} href={article.href} className={styles.article}>
              <div className={styles.articlePhoto} aria-hidden="true">
                {getGeneratedIllustrationSources(imageSrc) ? (
                  <GeneratedIllustration src={imageSrc} sizes="(max-width: 767px) calc(100vw - 32px), 33vw" />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element -- Lazy static assets do not consume image transformation quota.
                  <img src={imageSrc} alt="" width={640} height={360} loading="lazy" decoding="async" />
                )}
              </div>
              <div className={styles.articleBody}>
                <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt, locale)}</time>
                <h3>{article.title}</h3>
                <span className={styles.articleCta}>{messages.common.readMore} <span aria-hidden="true"> ↗</span></span>
              </div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
