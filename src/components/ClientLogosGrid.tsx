"use client";

import { useState } from "react";
import {
  clientLogoItemClass,
  desktopLogoPreviewCount,
  mobileLogoPreviewCount,
  tabletLogoPreviewCount,
  referenceClients,
  type ClientLogo
} from "@/lib/client-logos";
import { getClientLogosLabels } from "@/lib/i18n/client-logos-i18n";
import { useLocale } from "@/lib/i18n/locale-context";
import { LocaleLink } from "@/lib/i18n/locale-link";

type Props = {
  clients?: ClientLogo[];
  moreHref?: string;
  expandable?: boolean;
};

function ClientLogoLink({ client, className }: { client: ClientLogo; className?: string }) {
  return (
    <a
      href={client.website}
      className={[clientLogoItemClass(client), className].filter(Boolean).join(" ")}
      target="_blank"
      rel="noopener noreferrer"
      title={client.name}
      aria-label={client.name}
    >
      {/* Existing small SVG/WebP logos need no transform or Next Image runtime. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={client.logo}
        alt={client.name}
        width={client.wide ? 160 : 120}
        height={client.wide ? 44 : 40}
        loading="lazy"
        decoding="async"
        className="client-logo-img"
      />
    </a>
  );
}

export function ClientLogosGrid({ clients = referenceClients, moreHref, expandable = false }: Props) {
  const locale = useLocale();
  const { moreLabel, moreAriaLabel } = getClientLogosLabels(locale);
  const [expanded, setExpanded] = useState(false);
  // Responsive CSS chooses the preview before first paint, without a resize effect.
  const capped = !expanded && (expandable || Boolean(moreHref));
  const classes = ["client-logos-grid", expanded ? "client-logos-grid--expanded" : ""];
  if (capped) {
    classes.push("client-logos-grid--responsive-preview");
    if (clients.length > mobileLogoPreviewCount) classes.push("client-logos-grid--overflow-mobile");
    if (clients.length > tabletLogoPreviewCount) classes.push("client-logos-grid--overflow-tablet");
    if (clients.length > desktopLogoPreviewCount) classes.push("client-logos-grid--overflow-desktop");
  }

  if (expanded) {
    return (
      <div className="client-logos-grid client-logos-grid--expanded">
        {clients.map((client) => (
          <ClientLogoLink key={client.name} client={client} />
        ))}
      </div>
    );
  }

  return (
    <div className={classes.filter(Boolean).join(" ")}>
      {clients.map((client) => (
        <ClientLogoLink key={client.name} client={client} />
      ))}

      {capped ? (
          moreHref ? (
            <LocaleLink href={moreHref} className="client-logo-item client-logo-more" aria-label={moreLabel} title={moreAriaLabel}>
              <span className="client-logo-more-text">
                {moreLabel}
              </span>
            </LocaleLink>
          ) : (
            <button
              type="button"
              className="client-logo-item client-logo-more"
              onClick={() => setExpanded(true)}
              aria-expanded={false}
              aria-label={moreLabel}
              title={moreAriaLabel}
            >
              <span className="client-logo-more-text">
                {moreLabel}
              </span>
            </button>
          )
        ) : null}
    </div>
  );
}
