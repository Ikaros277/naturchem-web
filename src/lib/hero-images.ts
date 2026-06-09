export type HeroTheme = string;

export type HeroImageConfig = {
  src: string;
  /** CSS object-position — kde má být fokus (např. "70% 30%", "center top"). Výchozí: "center center". */
  position?: string;
};

/** Záložní kategorie (vždy definované). */
const heroFallbackImages: Record<string, HeroImageConfig> = {
  home:         { src: "/hero/forge-worker.jpg",       position: "65% center" },
  emise:        { src: "/hero/emissions-stack.jpg" },
  hluk:         { src: "/hero/field-measurement.jpg" },
  dokumentace:  { src: "/hero/planning-documents.jpg" }
};

/**
 * Per-slug přiřazení fotek. Klíč = bare slug (bez lomítek).
 * Příklad: "mereni-emisi": { src: "/hero/mereni-emisi.jpg", position: "70% 30%" }
 */
const heroSlugImages: Record<string, HeroImageConfig> = {};

function resolveConfig(theme: string): HeroImageConfig {
  return heroSlugImages[theme] ?? heroFallbackImages[theme] ?? heroFallbackImages.dokumentace;
}

export function getHeroImageSrc(theme: string): string {
  return resolveConfig(theme).src;
}

export function getHeroImageConfig(theme: string): HeroImageConfig {
  return resolveConfig(theme);
}

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

const pageThemeMap: Record<string, string> = {
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
  if (heroSlugImages[bare]) return bare;
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
