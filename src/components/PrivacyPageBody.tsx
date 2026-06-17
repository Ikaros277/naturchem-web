import { LegalPageLayout } from "@/components/LegalPageLayout";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { getPrivacyPage } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/locales";
import { fillLegalTemplate } from "@/lib/legal-template";
import { inquiryRetentionMonths, legalController, legalEffectiveDate, legalPaths } from "@/lib/legal";

export function PrivacyPageBody({ locale }: { locale: Locale }) {
  const { content } = getPrivacyPage(locale);
  const s = content.sections;

  return (
    <LegalPageLayout title={content.title} lead={content.lead} breadcrumbLabel={content.breadcrumbLabel}>
      <p className="legal-meta">
        {content.effectiveDateLabel} {legalEffectiveDate}
      </p>

      <h2>{s.controller.heading}</h2>
      <p>{fillLegalTemplate(s.controller.controllerIntro)}</p>
      <p>{legalController.operationalNote}</p>
      <p>
        {s.controller.statutoryBodyLabel} {legalController.director}.
        <br />
        {s.controller.privacyContactLabel}{" "}
        <a href={`mailto:${legalController.privacyEmail}`}>{legalController.privacyEmail}</a>.
      </p>

      <h2>{s.definitions.heading}</h2>
      <p>{s.definitions.personalDataParagraph}</p>
      <p>
        {s.definitions.scopeParagraph.split("{web}")[0]}
        <a href={legalController.web}>{legalController.web.replace("https://", "")}</a>
        {s.definitions.scopeParagraph.split("{web}")[1]}
      </p>

      <h2>{s.dataCollected.heading}</h2>

      <h3>{s.dataCollected.contactForm.subheading}</h3>
      <p>{s.dataCollected.contactForm.intro}</p>
      <ul>
        {s.dataCollected.contactForm.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>{s.dataCollected.contactForm.sourceNote}</p>

      <h3>{s.dataCollected.emailPhone.subheading}</h3>
      <p>
        {s.dataCollected.emailPhone.paragraph.split("{email}")[0]}
        <a href={`mailto:${legalController.privacyEmail}`}>{legalController.privacyEmail}</a>
        {s.dataCollected.emailPhone.paragraph.split("{email}")[1]}
      </p>

      <h3>{s.dataCollected.cookies.subheading}</h3>
      <p>{s.dataCollected.cookies.intro}</p>
      <ul>
        {s.dataCollected.cookies.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>
        {s.dataCollected.cookies.cookiesLinkPrefix}{" "}
        <LocaleLink href={legalPaths.cookies}>{s.dataCollected.cookies.cookiesLinkLabel}</LocaleLink>.
      </p>

      <h3>{s.dataCollected.marketing.subheading}</h3>
      <p>{s.dataCollected.marketing.paragraph}</p>

      <h2>{s.purposes.heading}</h2>
      <div className="legal-table-wrap">
        <table className="legal-table">
          <thead>
            <tr>
              <th>{s.purposes.tableHeaders.purpose}</th>
              <th>{s.purposes.tableHeaders.legalBasis}</th>
              <th>{s.purposes.tableHeaders.note}</th>
            </tr>
          </thead>
          <tbody>
            {s.purposes.rows.map((row) => (
              <tr key={row.purpose}>
                <td>{row.purpose}</td>
                <td>{row.legalBasis}</td>
                <td>{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>{s.purposes.voluntaryNote}</p>

      <h2>{s.retention.heading}</h2>
      <ul>
        {s.retention.items.map((item) => (
          <li key={item.label}>
            <strong>{item.label}</strong>{" "}
            {"text" in item ? (
              fillLegalTemplate(item.text)
            ) : (
              <>
                {item.textPrefix}{" "}
                <LocaleLink href={legalPaths.cookies}>{item.cookiesLinkLabel}</LocaleLink>.
              </>
            )}
          </li>
        ))}
      </ul>

      <h2>{s.recipients.heading}</h2>
      <p>{s.recipients.intro}</p>
      <ul>
        {s.recipients.items.map((item) => (
          <li key={item.name}>
            <strong>{item.name}</strong> — {item.description}
          </li>
        ))}
      </ul>
      <p>{s.recipients.processorsNote}</p>
      <p>{s.recipients.noSaleNote}</p>

      <h2>{s.security.heading}</h2>
      {s.security.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}

      <h2>{s.profiling.heading}</h2>
      <p>{s.profiling.paragraph}</p>

      <h2>{s.rights.heading}</h2>
      <p>{s.rights.intro}</p>
      <ul>
        {s.rights.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>
        {s.rights.exerciseNote.split("{email}")[0]}
        <a href={`mailto:${legalController.privacyEmail}`}>{legalController.privacyEmail}</a>
        {s.rights.exerciseNote.split("{email}")[1]}
      </p>

      <h2>{s.cookiesSection.heading}</h2>
      <p>
        {s.cookiesSection.paragraph.split(s.cookiesSection.cookiesLinkLabel)[0]}
        <LocaleLink href={legalPaths.cookies}>{s.cookiesSection.cookiesLinkLabel}</LocaleLink>
        {s.cookiesSection.paragraph
          .split(s.cookiesSection.cookiesLinkLabel)[1]
          ?.replace(
            s.cookiesSection.manageCookiesLabel,
            `„${s.cookiesSection.manageCookiesLabel}"`
          )}
      </p>

      <h2>{s.changes.heading}</h2>
      <p>{s.changes.paragraph}</p>
    </LegalPageLayout>
  );
}
