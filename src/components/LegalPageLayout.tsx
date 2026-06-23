import type { ReactNode } from "react";
import { PageHeroBand } from "@/components/PageHeroBand";
import { getPageHeroTheme } from "@/lib/hero-images";
import { getMessages } from "@/lib/i18n/get-messages";
import { localizeHref } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/locales";

type Props = {
  locale: Locale;
  title: string;
  lead?: string;
  breadcrumbLabel: string;
  children: ReactNode;
};

export async function LegalPageLayout({ locale, title, lead, breadcrumbLabel, children }: Props) {
  const messages = await getMessages(locale);

  return (
    <main className="section legal-page premium-page">
      <PageHeroBand
        locale={locale}
        theme={getPageHeroTheme("/faq")}
        breadcrumbs={[
          { name: messages.common.breadcrumbHome, href: localizeHref("/", locale) },
          { name: breadcrumbLabel }
        ]}
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
