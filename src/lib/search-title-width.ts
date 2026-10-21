/** Editorial estimate at 20px Arial, not a Google display contract. */
export const maxSearchTitleWidth = 560;
export const searchTitleBrandSuffix = " | NATURCHEM";

// Rounded glyph advances; accents use their base glyph. No browser/font dependency.
const glyphGroups: readonly [number, string][] = [
  [4, "ijl'"], [5, "|"], [6, " !,./:;[]ftI"], [7, '"()-`r{}'],
  [8, "*"], [9, "^"], [10, "Jcksvxyzß"],
  [11, "#$0123456789?_abdeghnopquL"], [12, "+<=>~FTZ"],
  [13, "&ABEKPSVXY"], [14, "CDHNRUw"], [16, "GOQ"],
  [17, "Mm"], [18, "%"], [19, "W"], [20, "@—"]
];
const advances = new Map(glyphGroups.flatMap(([width, letters]) => Array.from(letters, letter => [letter, width] as const)));

export function estimateSearchTitleWidth(title: string): number {
  const normalized = title.normalize("NFD").replace(/\p{M}/gu, "").replace(/[\u00a0\u202f]/g, " ");
  return Array.from(normalized).reduce((sum, letter) => sum + (letter === "–" ? 11 : advances.get(letter) ?? 20), 0);
}

export function fitsSearchTitleWidth(title: string): boolean {
  return estimateSearchTitleWidth(title + searchTitleBrandSuffix) <= maxSearchTitleWidth;
}
