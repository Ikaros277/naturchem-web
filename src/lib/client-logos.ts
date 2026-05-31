export type ClientLogo = {
  name: string;
  logo: string;
  website: string;
  /** Wide horizontal wordmark — spans two grid columns. */
  wide?: boolean;
};

export function clientLogoItemClass(client: ClientLogo): string {
  return client.wide ? "client-logo-item client-logo-item--wide" : "client-logo-item";
}

/** Mobile grid: 3 columns × 4 rows; last slot reserved for overflow hint. */
export const mobileLogoGridSlots = 12;
export const mobileLogoPreviewCount = 11;

/** Tablet grid: 4 columns × 2 rows. */
export const tabletLogoGridSlots = 8;
export const tabletLogoPreviewCount = 7;

/** Desktop grid: 10 columns × 2 rows; last slot reserved for overflow hint. */
export const desktopLogoGridSlots = 20;
export const desktopLogoPreviewCount = 19;

export const clientLogosMoreLabel = "a mnoho dalších..";
export const clientLogosMoreAriaLabel = "Zobrazit další loga zákazníků";

export function getLogoPreviewCount(viewportWidth: number): number {
  if (viewportWidth <= 520) return mobileLogoPreviewCount;
  if (viewportWidth <= 900) return tabletLogoPreviewCount;
  return desktopLogoPreviewCount;
}

export function getLogoGridCap(count: number, viewportWidth: number) {
  const previewMax = getLogoPreviewCount(viewportWidth);
  if (count < previewMax) {
    return { previewCount: count, hasOverflow: false };
  }
  return { previewCount: previewMax, hasOverflow: true };
}

/** @deprecated Use getLogoGridCap. */
export function hasMobileLogoOverflow(count: number): boolean {
  return count > mobileLogoPreviewCount;
}

export const referenceClients: ClientLogo[] = [
  { name: "Škoda Auto, a.s.", logo: "/loga-referenci/skoda.svg", website: "https://www.skoda-auto.cz" },
  { name: "ČEZ, a.s.", logo: "/loga-referenci/cez.svg", website: "https://www.cez.cz" },
  { name: "České dráhy, a.s.", logo: "/loga-referenci/cd.svg", website: "https://www.cd.cz" },
  { name: "E.ON, a.s.", logo: "/loga-referenci/eon.svg", website: "https://www.eon.cz" },
  { name: "Strabag", logo: "/loga-referenci/strabag.svg", website: "https://www.strabag.cz" },
  {
    name: "Swietelsky stavební",
    logo: "/loga-referenci/swietelsky.png",
    website: "https://www.swietelsky.cz",
    wide: true
  },
  { name: "Letiště České Budějovice", logo: "/loga-referenci/letiste-cb.png", website: "https://www.airport-cb.cz" },
  {
    name: "Teplárna České Budějovice",
    logo: "/loga-referenci/teplarnatucb.png",
    website: "https://www.teplarna-cb.cz",
    wide: true
  },
  {
    name: "Teplárna Písek",
    logo: "/loga-referenci/teplarnapisek.png",
    website: "https://www.tpi.cz",
    wide: true
  },
  {
    name: "Teplárna Strakonice",
    logo: "/loga-referenci/teplarnastrakonice.png",
    website: "https://www.teplarnastrakonice.cz",
    wide: true
  },
  { name: "ČSAD Jihotrans", logo: "/loga-referenci/jihotrans.svg", website: "https://www.gwjihotrans.cz" },
  { name: "Madeta", logo: "/loga-referenci/madeta.svg", website: "https://www.madeta.cz" },
  { name: "AISIN Europe Manufacturing Czech", logo: "/loga-referenci/aisin.svg", website: "https://www.aisin.co.cz" },
  { name: "EATON Elektrotechnika", logo: "/loga-referenci/eaton.svg", website: "https://www.eaton.cz" },
  { name: "SILON", logo: "/loga-referenci/silon.svg", website: "https://www.silon.cz" },
  { name: "HELUZ cihlářský průmysl", logo: "/loga-referenci/heluz.svg", website: "https://www.heluz.cz" },
  { name: "Ředitelství silnic a dálnic ČR", logo: "/loga-referenci/rsd.svg", website: "https://www.rsd.cz" },
  { name: "METAL TRADE COMAX", logo: "/loga-referenci/mtcomax.svg", website: "https://www.mtcomax.cz" },
  { name: "DURA Automotive Systems CZ", logo: "/loga-referenci/dura.svg", website: "https://durashiloh.com" }
];
