import { HeaderClient } from "@/components/HeaderClient";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getMessages } from "@/lib/i18n/get-messages";
import { getSalesNavLink } from "@/lib/i18n/nav-content";
import { getExperienceMegaGroups } from "@/lib/i18n/experience-megamenu";
import { getONasMegaGroups } from "@/lib/i18n/o-nas-megamenu";
import { getServiceMegaGroups } from "@/lib/i18n/service-megamenu";
import type { Locale } from "@/lib/i18n/locales";
import { company } from "@/lib/site";

type Props = {
  locale: Locale;
};

export async function Header({ locale }: Props) {
  const messages = await getMessages(locale);
  const t = messages.header;
  const salesNavLink = getSalesNavLink(locale);
  const [serviceMegaGroups, oNasMegaGroups, experienceMegaGroups] = await Promise.all([
    getServiceMegaGroups(locale),
    getONasMegaGroups(locale),
    getExperienceMegaGroups(locale)
  ]);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-label">{t.topbarLabel}</span>
          <span className="topbar-contact">
            <a className="topbar-link topbar-link--email" href={`mailto:${company.email}`}>
              <svg className="topbar-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
                />
              </svg>
              <span>{company.email}</span>
            </a>
            <a className="topbar-link topbar-link--phone" href={`tel:${company.phones[0].replace(/\s/g, "")}`}>
              <svg className="topbar-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
                />
              </svg>
              <span>{company.phones[0]}</span>
            </a>
            <LanguageSwitcher />
          </span>
        </div>
      </div>
      <HeaderClient
        labels={t}
        experienceMegaGroups={experienceMegaGroups}
        salesNavLink={salesNavLink}
        serviceMegaGroups={serviceMegaGroups}
        oNasMegaGroups={oNasMegaGroups}
      />
    </header>
  );
}
