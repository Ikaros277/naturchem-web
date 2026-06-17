"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  clientLogoItemClass,
  getLogoGridCap,
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
      <Image
        src={client.logo}
        alt={client.name}
        width={client.wide ? 160 : 120}
        height={client.wide ? 44 : 40}
        sizes={client.wide ? "(max-width: 520px) 120px, 160px" : "(max-width: 520px) 68px, 120px"}
        loading="lazy"
        className="client-logo-img"
      />
    </a>
  );
}

function useLogoGridCap(clientCount: number) {
  const [cap, setCap] = useState(() =>
    typeof window === "undefined"
      ? getLogoGridCap(clientCount, 1200)
      : getLogoGridCap(clientCount, window.innerWidth)
  );

  useEffect(() => {
    const update = () => setCap(getLogoGridCap(clientCount, window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [clientCount]);

  return cap;
}

export function ClientLogosGrid({ clients = referenceClients, moreHref, expandable = false }: Props) {
  const locale = useLocale();
  const { moreLabel, moreAriaLabel } = getClientLogosLabels(locale);
  const [expanded, setExpanded] = useState(false);
  const { previewCount, showMore } = useLogoGridCap(clients.length);
  const overflowClients = clients.slice(previewCount);
  const capped = showMore && !expanded;

  if (expanded) {
    return (
      <div className="client-logos-grid client-logos-grid--expanded">
        {clients.map((client) => (
          <ClientLogoLink key={client.name} client={client} />
        ))}
      </div>
    );
  }

  const previewClients = clients.slice(0, previewCount);
  const hasHiddenLogos = overflowClients.length > 0;

  return (
    <div className={["client-logos-grid", capped ? "client-logos-grid--capped" : ""].filter(Boolean).join(" ")}>
      {previewClients.map((client) => (
        <ClientLogoLink key={client.name} client={client} />
      ))}

      {capped &&
        (hasHiddenLogos ? (
          moreHref ? (
            <LocaleLink href={moreHref} className="client-logo-item client-logo-more" aria-label={moreAriaLabel}>
              <span className="client-logo-more-text" aria-hidden="true">
                {moreLabel}
              </span>
            </LocaleLink>
          ) : (
            <button
              type="button"
              className="client-logo-item client-logo-more"
              onClick={() => setExpanded(true)}
              aria-expanded={false}
              aria-label={moreAriaLabel}
            >
              <span className="client-logo-more-text" aria-hidden="true">
                {moreLabel}
              </span>
            </button>
          )
        ) : (
          <span className="client-logo-item client-logo-more client-logo-more--static">
            <span className="client-logo-more-text" aria-hidden="true">
              {moreLabel}
            </span>
          </span>
        ))}

      {overflowClients.map((client) => (
        <ClientLogoLink key={client.name} client={client} className="client-logo-item--overflow" />
      ))}
    </div>
  );
}
