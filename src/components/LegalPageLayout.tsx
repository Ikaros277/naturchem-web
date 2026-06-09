import type { ReactNode } from "react";
import { PageHeroBand } from "@/components/PageHeroBand";
import { getPageHeroTheme } from "@/lib/hero-images";

type Props = {
  title: string;
  lead?: string;
  breadcrumbLabel: string;
  children: ReactNode;
};

export function LegalPageLayout({ title, lead, breadcrumbLabel, children }: Props) {
  return (
    <main className="section legal-page premium-page">
      <PageHeroBand
        theme={getPageHeroTheme("/faq")}
        breadcrumbs={[{ name: "Úvod", href: "/" }, { name: breadcrumbLabel }]}
      >
        <header className="premium-page-hero page-hero--photo">
          <h1>{title}</h1>
          {lead ? <p className="page-lead">{lead}</p> : null}
        </header>
      </PageHeroBand>
      <div className="container page-first-section">
        <article className="legal-prose">{children}</article>
      </div>
    </main>
  );
}
