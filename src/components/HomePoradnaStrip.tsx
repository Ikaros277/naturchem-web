import Link from "next/link";
import { ArticleCardThumb } from "@/components/ArticleCardThumb";
import { IndexCard } from "@/components/IndexCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import { formatArticleDate } from "@/lib/format-date";
import { articlesNav } from "@/lib/navigation";
import { getLatestPoradnaArticles } from "@/lib/poradna-articles";
import { heroThemeForArticle, poradnaTopicIconKey } from "@/lib/poradna-topic";

/** Homepage P5-26 variant B — 3 nejnovější články v gridu s náhledy (stejný vzor jako /poradna). */
export async function HomePoradnaStrip() {
  const articles = await getLatestPoradnaArticles(3);

  if (articles.length === 0) return null;

  return (
    <section
      className="home-section home-section-surface home-poradna-section"
      data-variant="cards"
      aria-labelledby="home-poradna-heading"
    >
      <div className="container">
        <header className="section-header home-poradna-header">
          <h2 id="home-poradna-heading">Aktuální odborné články</h2>
        </header>
        <div className="article-list-grid home-poradna-grid">
          {articles.map((article) => {
            const articleRef = { title: article.title, topic: article.topic };
            const iconKey = poradnaTopicIconKey(articleRef);
            const displayDate = formatArticleDate(article.publishedAt);

            return (
              <IndexCard
                key={article.href}
                href={article.href}
                title={article.title}
                className="article-list-card article-card article-card--with-thumb home-poradna-card"
                cta="Přečíst článek"
                icon={<ServiceIcon icon={iconKey} size={22} variant="inline" />}
                meta={
                  <>
                    <ArticleCardThumb theme={heroThemeForArticle(articleRef)} />
                    <div className="article-card-meta">
                      {displayDate ? (
                        <time className="article-card-date muted" dateTime={article.publishedAt}>
                          {displayDate}
                        </time>
                      ) : (
                        <span />
                      )}
                      <span className="tag">{article.topic}</span>
                    </div>
                  </>
                }
              >
                {article.excerpt ? (
                  <p className="muted article-card-excerpt">{article.excerpt}</p>
                ) : null}
              </IndexCard>
            );
          })}
        </div>
        <p className="home-poradna-footer">
          <Link href={articlesNav.href} className="button secondary home-poradna-all-link">
            Všechny odborné články
          </Link>
        </p>
      </div>
    </section>
  );
}
