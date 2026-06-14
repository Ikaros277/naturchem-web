'use client';

import { useMemo, useState } from 'react';
import { ArticleCardThumb } from '@/components/ArticleCardThumb';
import { IndexCard } from '@/components/IndexCard';
import { ServiceIcon } from '@/components/ServiceIcon';
import {
  heroThemeForArticle,
  PORADNA_TOPICS,
  poradnaTopicIconKey
} from '@/lib/poradna-topic';
import type { PoradnaArticleListing } from '@/lib/poradna-articles';

export type PoradnaArticleDisplay = PoradnaArticleListing & { displayDate: string | null };

type Props = {
  articles: PoradnaArticleDisplay[];
};

function normalizeSearchQuery(query: string): string {
  return query.trim().toLocaleLowerCase('cs-CZ');
}

export function PoradnaFilterableList({ articles }: Props) {
  const [activeTopics, setActiveTopics] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const normalizedQuery = normalizeSearchQuery(searchQuery);

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

  function clearTopicFilters() {
    setActiveTopics(new Set());
  }

  function clearAllFilters() {
    setActiveTopics(new Set());
    setSearchQuery('');
  }

  const filtered = useMemo(() => {
    return articles.filter(article => {
      const matchesTopic =
        activeTopics.size === 0 || activeTopics.has(article.topic);
      const matchesSearch =
        !normalizedQuery || article.searchText.includes(normalizedQuery);
      return matchesTopic && matchesSearch;
    });
  }, [articles, activeTopics, normalizedQuery]);

  const hasTopicFilters = activeTopics.size > 0;
  const hasSearch = normalizedQuery.length > 0;
  const hasAnyFilter = hasTopicFilters || hasSearch;

  const countLabel = (() => {
    if (hasAnyFilter) {
      return `${filtered.length} z ${articles.length} článků`;
    }
    return `${articles.length} článků — nejnovější nahoře`;
  })();

  return (
    <>
      <label className="poradna-search">
        <span>Vyhledat v článcích</span>
        <input
          type="search"
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
          placeholder="Např. emise, hluková studie, povolení provozu"
          aria-controls="poradna-article-list"
        />
      </label>

      <div className="poradna-filter-bar">
        <nav className="topic-filter-pills" role="list" aria-label="Témata odborných článků">
          <button
            type="button"
            className="topic-pill"
            aria-pressed={!hasTopicFilters}
            onClick={clearTopicFilters}
          >
            Vše
          </button>
          {PORADNA_TOPICS.map(topic => (
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
        <p className="poradna-filter-count muted">{countLabel}</p>
      </div>

      <div id="poradna-article-list" className="article-list-grid">
        {filtered.length === 0 ? (
          <p className="muted poradna-empty-state">
            {hasSearch
              ? `Pro výraz „${searchQuery.trim()}“ jsme nenašli článek. `
              : 'K tomuto tématu zatím nemáme článek. '}
            <button type="button" className="text-link-button" onClick={clearAllFilters}>
              Zobrazit všechny články
            </button>
          </p>
        ) : (
          filtered.map(article => {
            const articleRef = { slug: article.slug, title: article.title, topic: article.topic };
            const iconKey = poradnaTopicIconKey(articleRef);
            return (
              <IndexCard
                key={article.href}
                href={article.href}
                title={article.title}
                className="article-list-card article-card article-card--with-thumb article-card--mobile-row"
                cta="Přečíst článek"
                icon={<ServiceIcon icon={iconKey} size={22} variant="inline" />}
                meta={
                  <>
                    <ArticleCardThumb
                      theme={heroThemeForArticle(articleRef)}
                      src={article.heroImage}
                    />
                    <div className="article-card-meta">
                      {article.displayDate ? (
                        <time className="article-card-date muted" dateTime={article.publishedAt}>
                          {article.displayDate}
                        </time>
                      ) : (
                        <span />
                      )}
                      <span className="tag">{article.topic}</span>
                    </div>
                  </>
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
