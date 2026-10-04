/** Public navigation only: omit query strings, fragment identifiers and form data. */
export function getServiceSelectionParams(href: string, baseUrl: string, placement: string | null) {
  if (!placement) return null;
  try {
    const base = new URL(baseUrl);
    const target = new URL(href, base);
    if (target.origin !== base.origin) return null;
    const path = target.pathname.replace(/^\/(?:cs|en|de)(?=\/)/, "").replace(/\/$/, "");
    if (!/^\/sluzby\/[a-z0-9-]+$/.test(path) &&
        !["/mereni-pro-kolaudaci", "/mereni-nove-haly", "/podklady-pro-stavebni-firmy"].includes(path)) return null;
    return { service_path: path, placement };
  } catch {
    return null;
  }
}
