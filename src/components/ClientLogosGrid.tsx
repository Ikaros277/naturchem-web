"use client";

import Link from "next/link";
import { useState } from "react";
import {
  clientLogoItemClass,
  clientLogosMoreAriaLabel,
  clientLogosMoreLabel,
  hasMobileLogoOverflow,
  mobileLogoPreviewCount,
  referenceClients,
  type ClientLogo
} from "@/lib/client-logos";

type Props = {
  clients?: ClientLogo[];
  /** When set, the overflow hint links here instead of expanding the grid inline. */
  moreHref?: string;
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
      <img src={client.logo} alt={client.name} />
    </a>
  );
}

function ClientLogosMoreContent() {
  return (
    <span className="client-logo-more-text" aria-hidden="true">
      {clientLogosMoreLabel}
    </span>
  );
}

export function ClientLogosGrid({ clients = referenceClients, moreHref }: Props) {
  const [expanded, setExpanded] = useState(false);
  const overflow = hasMobileLogoOverflow(clients.length);
  const capped = overflow && !expanded;
  const previewClients = clients.slice(0, mobileLogoPreviewCount);
  const overflowClients = clients.slice(mobileLogoPreviewCount);

  return (
    <div
      className={[
        "client-logos-grid",
        "client-logos-grid--mobile-cap",
        expanded ? "client-logos-grid--mobile-expanded" : ""
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {previewClients.map(client => (
        <ClientLogoLink key={client.name} client={client} />
      ))}

      {capped &&
        (moreHref ? (
          <Link href={moreHref} className="client-logo-item client-logo-more" aria-label={clientLogosMoreAriaLabel}>
            <ClientLogosMoreContent />
          </Link>
        ) : (
          <button
            type="button"
            className="client-logo-item client-logo-more"
            onClick={() => setExpanded(true)}
            aria-expanded={false}
            aria-label={clientLogosMoreAriaLabel}
          >
            <ClientLogosMoreContent />
          </button>
        ))}

      {overflowClients.map(client => (
        <ClientLogoLink
          key={client.name}
          client={client}
          className={capped ? "client-logo-item--mobile-overflow" : undefined}
        />
      ))}
    </div>
  );
}
