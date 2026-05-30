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

export function getServiceHeroTheme(slug: string): HeroTheme {
  const bare = slug.replace(/^\/|\/$/g, "").split("/").pop() ?? slug;
  if (emiseSlugs.has(bare)) return "emise";
  if (hlukSlugs.has(bare)) return "hluk";
  return "dokumentace";
}
