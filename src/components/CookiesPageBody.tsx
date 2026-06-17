import { headers } from "next/headers";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { getCookiesPage } from "@/lib/i18n/content";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { fillLegalTemplate } from "@/lib/legal-template";
import { legalController, legalEffectiveDate, legalPaths } from "@/lib/legal";

async function getRequestLocale(): Promise<Locale> {
  const headerStore = await headers();
  const locale = headerStore.get("x-locale");
  return locale && isLocale(locale) ? locale : "cs";
}

function splitAroundLabel(text: string, label: string): [string, string] {
  const parts = text.split(label);
  return [parts[0] ?? "", parts.slice(1).join(label)];
}

export async function CookiesPageBody() {
  const locale = await getRequestLocale();
  const { content } = getCookiesPage(locale);
  const s = content.sections;
  const [rightsBefore, rightsAfter] = splitAroundLabel(
    s.rights.paragraph,
    s.rights.privacyLinkLabel
  );

  return (
    <LegalPageLayout title={content.title} lead={content.lead} breadcrumbLabel={content.breadcrumbLabel}>
      <p className="legal-meta">
        {content.lastUpdatedLabel} {legalEffectiveDate}
      </p>

      <h2>{s.intro.heading}</h2>
      <p>{fillLegalTemplate(s.intro.webParagraph)}</p>
      <p>
        {fillLegalTemplate(s.intro.controllerParagraph, {
          email: legalController.privacyEmail
        })}{" "}
        <LocaleLink href={legalPaths.privacy}>{s.intro.privacyLinkLabel}</LocaleLink>.
      </p>

      <h2>{s.whatAreCookies.heading}</h2>
      <p>{s.whatAreCookies.paragraph}</p>

      <h2>{s.categories.heading}</h2>

      <h3>{s.categories.essential.subheading}</h3>
      <p>{s.categories.essential.paragraph}</p>

      <h3>{s.categories.statistical.subheading}</h3>
      <p>{s.categories.statistical.paragraph}</p>

      <h3>{s.categories.marketing.subheading}</h3>
      <p>{s.categories.marketing.paragraph}</p>

      <h2>{s.cookieList.heading}</h2>
      <div className="legal-table-wrap">
        <table className="legal-table">
          <thead>
            <tr>
              <th>{s.cookieList.tableHeaders.name}</th>
              <th>{s.cookieList.tableHeaders.category}</th>
              <th>{s.cookieList.tableHeaders.purpose}</th>
              <th>{s.cookieList.tableHeaders.expiry}</th>
            </tr>
          </thead>
          <tbody>
            {s.cookieList.rows.map((row) => (
              <tr key={row.name}>
                <td>
                  {row.name.includes("(") ? (
                    row.name
                  ) : (
                    <code>{row.name}</code>
                  )}
                </td>
                <td>{row.category}</td>
                <td>{row.purpose}</td>
                <td>{row.expiry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>{s.cookieList.note}</p>

      <h2>{s.googleFonts.heading}</h2>
      <p>{s.googleFonts.paragraph}</p>

      <h2>{s.consent.heading}</h2>
      <p>{s.consent.bannerParagraph}</p>
      <p>
        {s.consent.manageParagraph.split(s.consent.manageButtonLabel)[0]}
        <strong>{s.consent.manageButtonLabel}</strong>
        {s.consent.manageParagraph.split(s.consent.manageButtonLabel)[1]}
      </p>
      <p>{s.consent.consentModeParagraph}</p>

      <h2>{s.disableCookies.heading}</h2>
      <p>{s.disableCookies.paragraph}</p>

      <h2>{s.rights.heading}</h2>
      <p>
        {rightsBefore}
        <LocaleLink href={legalPaths.privacy}>{s.rights.privacyLinkLabel}</LocaleLink>
        {rightsAfter}
      </p>

      <h2>{s.contact.heading}</h2>
      <p>
        {legalController.name}
        <br />
        {legalController.seat.street}, {legalController.seat.postalCode} {legalController.seat.city}
        <br />
        {s.contact.emailLabel}{" "}
        <a href={`mailto:${legalController.privacyEmail}`}>{legalController.privacyEmail}</a>
        <br />
        {s.contact.webLabel}{" "}
        <a href={legalController.web}>{legalController.web.replace("https://", "")}</a>
      </p>
    </LegalPageLayout>
  );
}
