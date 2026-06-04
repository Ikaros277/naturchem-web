'use client';

import { useState } from 'react';
import { IndexCard } from '@/components/IndexCard';
import { topicForArticle } from '@/lib/poradna-topic';
import type { PoradnaArticleListing } from '@/lib/poradna-articles';

const topicFilters = [
  "Emise",
  "Rozptylové studie",
  "Hluk",
  "Pracovní prostředí",
  "EIA a povolování",
  "Legislativa",
  "Chemická legislativa"
] as const;

export type PoradnaArticleDisplay = PoradnaArticleListing & { displayDate: string | null };

type Props = {
  articles: PoradnaArticleDisplay[];
};

export function PoradnaFilterableList({ articles }: Props) {
  const [activeTopics, setActiveTopics] = useState<Set<string>>(new Set());

  function toggleTopic(topic: string) {
    setActiveTopics(prev => {
      const next = new Set(prev);
      if (next.has(topic)) {
        next.delete(topic);
      } else {
        next.add(topic);
      }
      return next;
    });
  }

  const filtered =
    activeTopics.size === 0
      ? articles
      : articles.filter(a => activeTopics.has(topicForArticle(a.title)));

  return (
    <>
      <nav className="topic-filter-pills" role="list" aria-label="Témata odborných článků">
        {topicFilters.map(topic => (
          <button
            key={topic}
            type="button"
            className="topic-pill"
            aria-pressed={activeTopics.has(topic)}
            onClick={() => toggleTopic(topic)}
          >
            {topic}
          </button>
        ))}
      </nav>
      <div className="article-list-grid">
        {filtered.length === 0 ? (
          <p className="muted">
            K tomuto tématu zatím nemáme článek. Zkuste jiný filtr nebo projděte všechny články.
          </p>
        ) : (
          filtered.map(article => {
            const topic = topicForArticle(article.title);
            return (
              <IndexCard
                key={article.href}
                href={article.href}
                title={article.title}
                className="article-list-card article-card"
                cta="Číst článek"
                meta={
                  <div className="article-card-meta">
                    {article.displayDate ? (
                      <time className="article-card-date muted" dateTime={article.publishedAt}>
                        {article.displayDate}
                      </time>
                    ) : null}
                    <span className="tag">{topic}</span>
                  </div>
                }
              >
                {article.excerpt ? <p className="muted article-card-excerpt">{article.excerpt}</p> : null}
              </IndexCard>
            );
          })
        )}
      </div>
    </>
  );
}
