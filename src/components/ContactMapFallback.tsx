"use client";

import { useTranslations } from "@/lib/i18n/locale-context";
import { getCompanyOfficeMapPoints, officeAddressLine, officeMapsSearchUrl } from "@/lib/company-offices-map";

/** Addresses remain usable without optional cookies, map scripts or map tiles. */
export function ContactMapFallback({ variant, loading = false }: { variant: "hero" | "panel"; loading?: boolean }) {
  const contact = useTranslations("contact");
  return (
    <div className={`contact-offices-map-placeholder contact-offices-map--${variant}`}>
      <p className="contact-offices-map-placeholder-lead">{loading ? contact.mapLabel : contact.mapConsentLead}</p>
      <ul className="contact-offices-map-placeholder-list" aria-label={contact.mapConsentOfficesAria}>
        {getCompanyOfficeMapPoints().map(office => (
          <li key={office.label}>
            <strong>{office.label}</strong>
            <span>{officeAddressLine(office)}</span>
            <a href={officeMapsSearchUrl(office)} target="_blank" rel="noopener noreferrer">{contact.openInGoogleMaps}</a>
          </li>
        ))}
      </ul>
      {!loading ? <button
        type="button"
        className="button ghost contact-offices-map-placeholder-manage"
        onClick={() => window.dispatchEvent(new Event("naturchem:open-cookie-settings"))}
      >{contact.mapConsentManage}</button> : null}
    </div>
  );
}
