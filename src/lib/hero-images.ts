export type HeroTheme = string;

export type HeroImageConfig = {
  src: string;
  /** Menší varianta pro mobilní LCP (srcset / picture). */
  mobileSrc?: string;
  /** Jiná fotka pro přehledovou sekci na stránce služby (ServiceContextPhoto). */
  contextSrc?: string;
  /** CSS object-position — kde má být fokus (např. "70% 30%", "center top"). Výchozí: "center center". */
  position?: string;
  contextPosition?: string;
};

/** Záložní kategorie (vždy definované). */
const heroFallbackImages: Record<string, HeroImageConfig> = {
  home: { src: "/hero/homepage-mereni.webp", position: "65% center" },
  emise: { src: "/hero/mereni-emisi.webp", position: "center 35%" },
  hluk: { src: "/hero/hluk-fallback.webp", position: "center 40%" },
  dokumentace: { src: "/hero/dokumentace-fallback.webp", position: "center 35%" }
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
  "homepage-mereni": { ...hero("homepage-mereni"), mobileSrc: "/hero/homepage-mereni-640.webp" },
  "homepage-studie": hero("homepage-studie"),
  "homepage-eia": hero("homepage-eia"),

  "mereni-emisi": hero("mereni-emisi", "mereni-emisi-context"),
  "mereni-hluku": hero("mereni-hluku", "mereni-hluku-context"),
  "mereni-vibraci": hero("mereni-vibraci"),
  "mereni-osvetleni": hero("mereni-osvetleni"),
  "mereni-mikroklimatu": hero("mereni-mikroklimatu"),
  "mereni-tepelna-chladova-zatez": hero("mereni-tepelna-chladova-zatez", undefined, "center 40%"),
  "mereni-diisokyanatu": hero("mereni-diisokyanatu", "mereni-diisokyanatu-context", "center 35%"),
  "pracovni-prostredi": hero("pracovni-prostredi", "pracovni-prostredi-context"),
  "chemicke-latky": hero("chemicke-latky", "chemicke-latky-context"),
  "bezpecnostni-listy": hero("bezpecnostni-listy"),
  "skoleni-chemicke-legislativy": hero("skoleni-chemicke-legislativy", "skoleni-chemicke-legislativy-context"),

  "hlukove-studie": hero("hlukove-studie", "hlukove-studie-context"),
  "rozptylove-studie": hero("rozptylove-studie", "rozptylove-studie-context"),
  "modelove-vypocty": hero("modelove-vypocty", "modelove-vypocty-context"),
  "akusticke-posudky": hero("akusticke-posudky"),

  "eia-posudky-poradenstvi": hero("eia-posudky-poradenstvi", "eia-context"),
  "eia-oznameni-zameru": eiaHero,
  "zjistovaci-rizeni-eia": hero("zjistovaci-rizeni-eia", undefined, "center 35%"),

  "odborne-posudky": hero("odborne-posudky", "odborne-posudky-context"),
  "provozni-rady": hero("provozni-rady", "provozni-rady-context"),
  "ippc-integrovana-povoleni": hero("ippc-integrovana-povoleni"),
  "povoleni-provozu": hero("povoleni-provozu", undefined, "center 40%"),
  "technicke-prilohy": hero("technicke-prilohy", "technicke-prilohy-context"),
  "imisni-dopady": hero("imisni-dopady", "imisni-dopady-context", "center 35%"),
  "ispop": hero("ispop", "ispop-context"),
  "ghg-overovani": hero("ghg-overovani", "ghg-overovani-context"),

  sluzby: hero("sluzby"),
  reference: hero("reference"),
  "o-spolecnosti-naturchem": hero("o-spolecnosti-naturchem"),
  kontakt: hero("kontakt"),
  "akreditace-autorizace-dokumenty": hero("akreditace-autorizace-dokumenty"),
  "pristrojove-vybaveni": hero("pristrojove-vybaveni"),
  prodej: hero("pristrojove-vybaveni"),
  "prodej-pcf-elettronica": hero("pristrojove-vybaveni"),
  poradna: hero("poradna"),
  faq: hero("faq"),
  "typicke-zakazky": hero("typicke-zakazky"),
  "provozy-a-technologie": hero("provozy-a-technologie"),

  "poradna-air-quality": { src: "/hero/poradna/air-quality.jpg", position: "center 40%" },
  "poradna-laptop-forms": { src: "/hero/poradna/laptop-forms.jpg" },
  "poradna-hvac-units": { src: "/hero/poradna/hvac-units.jpg" },
  "poradna-woodworking": { src: "/hero/poradna/woodworking.jpg" },
  "poradna-recycling": { src: "/hero/poradna/recycling.jpg" },
  "poradna-diesel-generator": { src: "/hero/poradna/diesel-generator.jpg" },
  "poradna-automotive": { src: "/hero/poradna/automotive.jpg" },
  "poradna-waste-landfill": { src: "/hero/poradna/waste-landfill.jpg" },
  "poradna-boiler-room": { src: "/hero/poradna/boiler-room.jpg" },
  "poradna-paint-spray": { src: "/hero/poradna/paint-spray.jpg" },
  "poradna-documents-desk": { src: "/hero/poradna/documents-desk.jpg" },
  "poradna-factory-aerial": { src: "/hero/poradna/factory-aerial.jpg", position: "center 30%" }
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

export function getHeroLcpSources(theme: string): { src: string; mobileSrc: string } {
  const config = resolveConfig(theme);
  return {
    src: config.src,
    mobileSrc: config.mobileSrc ?? config.src
  };
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
  "mereni-tepelna-chladova-zatez",
  "mereni-diisokyanatu",
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
  "/provozy-a-technologie": "provozy-a-technologie",
  "/typicke-zakazky": "typicke-zakazky",
  "/reference": "reference",
  "/o-spolecnosti-naturchem": "o-spolecnosti-naturchem",
  "/proc-naturchem": "akreditace-autorizace-dokumenty",
  "/kontakt": "kontakt",
  "/akreditace-autorizace-dokumenty": "akreditace-autorizace-dokumenty",
  "/pristrojove-vybaveni": "pristrojove-vybaveni",
  "/prodej": "prodej",
  "/poradna": "poradna",
  "/faq": "faq",
  "/dotaznik-spokojenosti": "reference",
  "/sluzby": "sluzby"
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
  if (normalized.startsWith("/prodej/")) {
    const brandSlug = normalized.split("/").filter(Boolean)[1];
    if (brandSlug && heroSlugImages[`prodej-${brandSlug}`]) return `prodej-${brandSlug}`;
    return "prodej";
  }
  return "dokumentace";
}
