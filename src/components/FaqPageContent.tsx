"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getFaqCategoryIconKey } from "@/lib/service-icons";
import {
  faqCategories,
  type FaqItem
} from "@/lib/faq";

function FaqAccordionItem({ item }: { item: FaqItem }) {
  return (
    <details className="faq-accordion">
      <summary className="faq-accordion-summary">{item.q}</summary>
      <div className="faq-accordion-body">
        {item.paragraphs.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
        {item.tip ? (
          <p className="faq-tip">
            <strong>Doporučení:</strong> {item.tip}
          </p>
        ) : null}
        {item.legal ? (
          <details className="faq-legal">
            <summary>Právní opora</summary>
            <p>{item.legal.summary}</p>
            {item.legal.refs?.length ? (
              <ul>
                {item.legal.refs.map((ref) => (
                  <li key={ref.href}>
                    <a href={ref.href} target="_blank" rel="noopener noreferrer">
                      {ref.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </details>
        ) : null}
        {item.links?.length ? (
          <p className="faq-related">
            <strong>Související služby:</strong>{" "}
            {item.links.map((link, i) => (
              <span key={`${link.href}-${link.label}`}>
                {i > 0 ? " | " : null}
                <Link href={link.href}>{link.label}</Link>
              </span>
            ))}
          </p>
        ) : null}
      </div>
    </details>
  );
}

export function FaqPageContent() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase("cs-CZ");
  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return faqCategories;

    return faqCategories
      .map((category) => ({
        ...category,
        items: category.items.filter((item) => {
          const haystack = [
            category.title,
            item.q,
            ...item.paragraphs,
            item.tip ?? "",
            item.legal?.summary ?? ""
          ]
            .join(" ")
            .toLocaleLowerCase("cs-CZ");
          return haystack.includes(normalizedQuery);
        })
      }))
      .filter((category) => category.items.length > 0);
  }, [normalizedQuery]);

  return (
    <>
      <label className="faq-search">
          <span>Vyhledat v dotazech</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Např. emise, hluk, KHS, ISPOP"
          />
        </label>

      <nav className="faq-tiles" aria-label="Kategorie častých dotazů">
        {faqCategories.map((cat) => (
          <a key={cat.id} href={`#${cat.id}`} className="card faq-tile">
            <span className="faq-tile-icon-wrap" aria-hidden="true">
              <ServiceIcon icon={getFaqCategoryIconKey(cat.id)} variant="plain" size={28} className="faq-tile-icon" />
            </span>
            <span className="faq-tile-label">{cat.tileLabel}</span>
          </a>
        ))}
      </nav>

      {filteredCategories.length === 0 ? (
        <section className="section faq-category">
          <h2>Nic jsme nenašli</h2>
          <p className="muted">Zkuste obecnější výraz nebo nám pošlete dotaz přes kontaktní formulář.</p>
        </section>
      ) : null}

      {filteredCategories.map((category) => (
        <section key={category.id} id={category.id} className="section faq-category">
          <h2 className="faq-category-heading">
            <ServiceIcon
              icon={getFaqCategoryIconKey(category.id)}
              variant="plain"
              size={32}
              className="faq-category-icon"
            />
            {category.title}
          </h2>
          <div className="faq-accordion-list">
            {category.items.map((item) => (
              <FaqAccordionItem key={item.q} item={item} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
