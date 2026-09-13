/** Keep overlays away from the homepage and the primary conversion form. */
export function isChatExcludedPath(pathname: string): boolean {
  const bare = pathname.replace(/^\/(?:cs|en|de)(?=\/|$)/, "").replace(/\/$/, "") || "/";
  return bare === "/" || bare === "/kontakt";
}
