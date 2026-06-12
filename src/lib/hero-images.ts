export type HeroTheme = string;

export type HeroImageConfig = {
  src: string;
  /** Jiná fotka pro přehledovou sekci na stránce služby (ServiceContextPhoto). */
  contextSrc?: string;
  /** CSS object-position — kde má být fokus (např. "70% 30%", "center top"). Výchozí: "center center". */
  position?: string;
  contextPosition?: string;
};

/** Záložní kategorie (vždy definované). */
const heroFallbackImages: Record<string, HeroImageConfig> = {
  home: { src: "/hero/forge-worker.jpg", position: "65% center" },
  emise: { src: "/hero/emissions-stack.jpg" },
  hluk: { src: "/hero/field-measurement.jpg" },
  dokumentace: { src: "/hero/planning-documents.jpg" }
};

function hero(slug: string, contextSlug?: string, position?: string): HeroImageConfig {
  const config: HeroImageConfig = { src: `/hero/${slug}.webp` };
  if (contextSlug) config.contextSrc = `/hero/${contextSlug}.webp`;
  if (position) config.position = position;
  return config;
}

const eiaHero = hero("eia", "eia-context");

/**
 * Per-slug přiřazení fotek. Klíč = bare slug (bez lomítek).
 */
const heroSlugImages: Record<string, HeroImageConfig> = {
  "homepage-mereni": hero("homepage-mereni"),
  "homepage-studie": hero("homepage-studie"),
  "homepage-eia": hero("homepage-eia"),

  "mereni-emisi": hero("mereni-emisi", "mereni-emisi-context"),
  "mereni-hluku": hero("mereni-hluku", "mereni-hluku-context"),
  "mereni-vibraci": hero("mereni-vibraci"),
  "mereni-osvetleni": hero("mereni-osvetleni"),
  "mereni-mikroklimatu": hero("mereni-mikroklimatu"),
  "pracovni-prostredi": hero("pracovni-prostredi", "pracovni-prostredi-context"),
  "chemicke-latky": hero("chemicke-latky", "chemicke-latky-context"),
  "bezpecnostni-listy": hero("bezpecnostni-listy"),
  "skoleni-chemicke-legislativy": hero("skoleni-chemicke-legislativy", "skoleni-chemicke-legislativy-context"),

  "hlukove-studie": hero("hlukove-studie", "hlukove-studie-context"),
  "rozptylove-studie": hero("rozptylove-studie", "rozptylove-studie-context"),
  "modelove-vypocty": hero("modelove-vypocty", "modelove-vypocty-context"),
  "akusticke-posudky": hero("akusticke-posudky"),

  "eia-posudky-poradenstvi": eiaHero,
  "eia-oznameni-zameru": eiaHero,
  "zjistovaci-rizeni-eia": eiaHero,

  "odborne-posudky": hero("odborne-posudky", "odborne-posudky-context"),
  "provozni-rady": hero("provozni-rady", "provozni-rady-context"),
  "ippc-integrovana-povoleni": hero("ippc-integrovana-povoleni"),
  "ispop": hero("ispop", "ispop-context"),
  "ghg-overovani": hero("ghg-overovani", "ghg-overovani-context")
};

function resolveConfig(theme: string): HeroImageConfig {
  return heroSlugImages[theme] ?? heroFallbackImages[theme] ?? heroFallbackImages.dokumentace;
}

export function getHeroImageSrc(theme: string): string {
  return resolveConfig(theme).src;
}

export function getHeroImageConfig(theme: string): HeroImageConfig {
  return resolveConfig(theme);
}

export function getHeroContextImageConfig(theme: string): HeroImageConfig {
  const config = resolveConfig(theme);
  if (config.contextSrc) {
    return {
      src: config.contextSrc,
      position: config.contextPosition ?? config.position
    };
  }
  return config;
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
  if (normalized.startsWith("/typicke-zakazky/")) {
    const categorySlug = normalized.split("/").pop() ?? "";
    if (heroSlugImages[categorySlug]) return categorySlug;
    const categoryAliases: Record<string, string> = {
      "hygienicka-mereni": "pracovni-prostredi",
      eia: "eia-posudky-poradenstvi",
      dalsi: "ippc-integrovana-povoleni"
    };
    const alias = categoryAliases[categorySlug];
    if (alias && heroSlugImages[alias]) return alias;
    return "emise";
  }
  if (normalized.startsWith("/sluzby/")) return getServiceHeroTheme(normalized);
  return "dokumentace";
}
