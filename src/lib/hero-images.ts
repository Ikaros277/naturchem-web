/** Stock hero fotografie (Unsplash) — Fáze A, nahraditelné reálnými fotkami klienta (P5-B). */

export type HeroTheme = "home" | "emise" | "hluk" | "dokumentace";

export const heroThemeImages: Record<HeroTheme, string> = {
  home: "/hero/industrial-plant.jpg",
  emise: "/hero/emissions-stack.jpg",
  hluk: "/hero/field-measurement.jpg",
  dokumentace: "/hero/planning-documents.jpg"
};

const emiseSlugs = new Set([
  "mereni-emisi",
  "pracovni-prostredi",
  "mereni-vibraci",
  "mereni-mikroklimatu",
  "mereni-osvetleni",
  "chemicke-latky",
  "bezpecnostni-listy",
  "skoleni-chemicke-legislativy"
]);

const hlukSlugs = new Set([
  "mereni-hluku",
  "hlukove-studie",
  "akusticke-posudky",
  "imisni-dopady",
  "modelove-vypocty",
  "rozptylove-studie"
]);

const pageThemeMap: Record<string, HeroTheme> = {
  "/": "home",
  "/provozy-a-technologie": "emise",
  "/typicke-zakazky": "emise",
  "/reference": "dokumentace",
  "/o-spolecnosti-naturchem": "dokumentace",
  "/kontakt": "hluk",
  "/akreditace-autorizace-dokumenty": "dokumentace",
  "/pristrojove-vybaveni": "dokumentace",
  "/poradna": "dokumentace",
  "/faq": "hluk",
  "/sluzby": "dokumentace"
};

function normalizePath(path: string): string {
  const bare = path.replace(/^\/|\/$/g, "");
  return bare ? `/${bare}` : "/";
}

export function getServiceHeroTheme(slug: string): HeroTheme {
  const bare = slug.replace(/^\/|\/$/g, "").split("/").pop() ?? slug;
  if (emiseSlugs.has(bare)) return "emise";
  if (hlukSlugs.has(bare)) return "hluk";
  return "dokumentace";
}

export function getPageHeroTheme(path: string): HeroTheme {
  const normalized = normalizePath(path);
  const mapped = pageThemeMap[normalized];
  if (mapped) return mapped;
  if (normalized.startsWith("/provozy-a-technologie/")) return "emise";
  if (normalized.startsWith("/typicke-zakazky/")) return "emise";
  if (normalized.startsWith("/sluzby/")) return getServiceHeroTheme(normalized);
  return "dokumentace";
}
