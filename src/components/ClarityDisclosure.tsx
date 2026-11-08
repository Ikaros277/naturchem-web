import { getClarityPilotId } from "@/lib/clarity-config";
import { clarityDisclosure } from "@/lib/clarity-disclosure";
import type { Locale } from "@/lib/i18n/locales";

/** Server-rendered: no new script or consent-dependent fetch on legal pages. */
export function ClarityDisclosure({ locale, cookies = false }: { locale: Locale; cookies?: boolean }) {
  if (!getClarityPilotId()) return null;
  const copy = clarityDisclosure[locale];
  return (
    <section aria-labelledby="clarity-privacy-heading">
      <h3 id="clarity-privacy-heading">{copy.heading}</h3>
      <p>{copy.purpose}</p>
      <p>{copy.scope}</p>
      <p>{copy.data}</p>
      {cookies ? <p>{copy.cookies}</p> : null}
      <p>{copy.retention}</p>
      <p>{copy.choice}</p>
      <p>
        <a href="https://www.microsoft.com/en-us/privacy/privacystatement" rel="external">{copy.privacyLink}</a>
        {" · "}
        <a href="https://learn.microsoft.com/en-us/clarity/setup-and-installation/data-retention" rel="external">{copy.retentionLink}</a>
      </p>
    </section>
  );
}
