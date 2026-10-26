/** Owner-confirmed commercial priorities, 26 October 2026. Never mutate a catalog. */
const measurementPriority = [
  "/sluzby/pracovni-prostredi", "/sluzby/mereni-hluku",
  "/sluzby/mereni-vibraci", "/sluzby/mereni-osvetleni"
];

export function prioritizeMeasurements<T extends { href: string }>(items: readonly T[]): T[] {
  const rank = (href: string) => {
    const index = measurementPriority.indexOf(href.replace(/\/$/, ""));
    return index < 0 ? measurementPriority.length : index;
  };
  return [...items].sort((a, b) => rank(a.href) - rank(b.href));
}
