import Link from "next/link";
import { contactFormHref } from "@/lib/contact-url";
import { SemanticCard } from "@/components/SemanticCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { CaseStudy, CaseStudyCategory } from "@/lib/case-studies";

type Props = {
  category?: CaseStudyCategory;
  categories: CaseStudyCategory[];
};

export function CaseStudiesView({ category, categories }: Props) {
  if (category) {
    return (
      <>
        <p className="muted">
          Příklady zadání, ve kterých se propojuje měření, studie, provozní dokumentace
          a výstupy pro úřady.
        </p>
        <div className="grid grid-2">
          {category.cases.map((item) => (
            <CaseCard key={item.title} item={item} serviceHref={category.serviceHref} />
          ))}
        </div>
        <p style={{ marginTop: "1.25rem" }}>
          <Link href={category.serviceHref} className="button secondary">
            Související služba
          </Link>{" "}
          <Link href={contactFormHref} className="button">
            Poptat službu
          </Link>
        </p>
      </>
    );
  }

  return (
    <div className="grid grid-2">
      {categories.map((cat) => (
        <SemanticCard
          key={cat.slug}
          href={`/typicke-zakazky/${cat.slug}`}
          className="case-category-card"
          cta="Zobrazit příklady"
          aria-label={`${cat.title} — ${cat.cases.length} příkladů`}
        >
          <ServiceIcon href={cat.serviceHref} />
          <h2>{cat.title}</h2>
          <p className="muted">{cat.short}</p>
          <p className="muted card-meta">{cat.cases.length} příkladů zakázek</p>
        </SemanticCard>
      ))}
    </div>
  );
}

function CaseCard({ item, serviceHref }: { item: CaseStudy; serviceHref?: string }) {
  return (
    <article className="card case-study-card">
      {serviceHref ? <ServiceIcon href={serviceHref} /> : null}
      <h2>{item.title}</h2>
      <p>{item.narrative}</p>
      <p className="muted">
        <strong>Výstup:</strong> {item.output}
      </p>
    </article>
  );
}
