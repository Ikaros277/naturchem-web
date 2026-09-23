/** Keep overlays away from the primary conversion form, not the homepage. */
export function isChatExcludedPath(pathname: string): boolean {
  const bare = pathname.replace(/^\/(?:cs|en|de)(?=\/|$)/, "").replace(/\/+$/, "") || "/";
  return bare === "/kontakt";
}

/** Wait for a known desktop viewport and explicit consent before loading Tawk. */
export function canShowTawk(pathname: string, isMobile: boolean | null, hasConsent: boolean): boolean {
  return isMobile === false && hasConsent && !isChatExcludedPath(pathname);
}
