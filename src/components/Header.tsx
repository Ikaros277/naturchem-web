import { HeaderClient } from "@/components/HeaderClient";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getMessages } from "@/lib/i18n/get-messages";
import { getHeaderMainNav } from "@/lib/i18n/nav-content";
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
  const headerMainNav = getHeaderMainNav(locale);
  const [serviceMegaGroups, oNasMegaGroups] = await Promise.all([
    getServiceMegaGroups(locale),
    getONasMegaGroups(locale)
  ]);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-label">{t.topbarLabel}</span>
          <span className="topbar-contact">
            <a className="topbar-link" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <span className="topbar-sep" aria-hidden="true">
              {" "}
              ·{" "}
            </span>
            <a className="topbar-link" href={`tel:${company.phones[0].replace(/\s/g, "")}`}>
              {company.phones[0]}
            </a>
            <LanguageSwitcher />
          </span>
        </div>
      </div>
      <HeaderClient
        labels={t}
        headerMainNav={headerMainNav}
        serviceMegaGroups={serviceMegaGroups}
        oNasMegaGroups={oNasMegaGroups}
      />
    </header>
  );
}
