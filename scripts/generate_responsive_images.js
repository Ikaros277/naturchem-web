/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");
const { createHash } = require("node:crypto");
const sharp = require("sharp");
const root = path.resolve(__dirname, "..");
const load = require("./lib/load-typescript.js")();
const { readCatalog } = require("./scheduled_publication.js");
const { getHeroImageSrc, getKnownHeroImageSources } = load(path.join(root, "src/lib/hero-images.ts"));
const { getAuthenticPhotoBySrc } = load(path.join(root, "src/lib/authentic-photos.ts"));
const { heroThemeForArticle } = load(path.join(root, "src/lib/poradna-topic.ts"));
const target = path.join(root, "public/hero/responsive-2026-10");
const prefix = "/hero/responsive-2026-10/";
const recipe = "v1-webp68-avif44-fit-inside";

async function encode(src, widths) {
  const input = path.resolve(root, "public", "." + src);
  if (!input.startsWith(path.join(root, "public") + path.sep) || !fs.existsSync(input)) throw new Error("Missing local image: " + src);
  const hash = createHash("sha256").update(recipe + JSON.stringify(sharp.versions)).update(fs.readFileSync(input)).digest("hex").slice(0, 12);
  // The same 640px variant can serve both a card and a hero.
  const name = "image-" + hash;
  const metadata = await sharp(input).metadata();
  const actualWidths = [...new Set(widths.map(width => Math.min(width, metadata.width)))];
  for (const width of actualWidths) {
    for (const format of ["webp", "avif"]) {
      const file = path.join(target, name + "-" + width + "." + format);
      // New content/encoder gets a new hash. Never overwrite an immutable URL.
      if (fs.existsSync(file)) continue;
      await sharp(input).rotate().resize({ width, withoutEnlargement: true })
        .toFormat(format, format === "webp" ? { quality: 68, effort: 4 } : { quality: 44, effort: 4 })
        .toFile(file);
    }
  }
  return { base: prefix + name, widths: actualWidths, width: metadata.width, height: metadata.height };
}

async function main() {
  fs.mkdirSync(target, { recursive: true });
  const articles = readCatalog().filter(a => Date.parse(a.publishedAt) <= Date.now());
  const articleSources = new Set(articles.map(a => a.heroImage || getHeroImageSrc(heroThemeForArticle(a))));
  const thumbs = {};
  const heroes = {};
  // Article previews are static files, not on-demand transformations.
  for (const src of [...articleSources].sort()) thumbs[src] = await encode(src, [192, 384, 640, 960]);
  const heroSources = new Set([...articleSources, ...getKnownHeroImageSources()]);
  for (const src of [...heroSources].sort()) {
    // Approved authentic photographs already have carefully prepared LCP variants.
    if (getAuthenticPhotoBySrc(src)) continue;
    heroes[src] = await encode(src, [640, 1280]);
  }
  fs.writeFileSync(path.join(root, "src/lib/responsive-images.json"), JSON.stringify({ thumbs, heroes }, null, 2) + "\n");
  fs.writeFileSync(path.join(root, "src/lib/responsive-thumbnails.json"), JSON.stringify(thumbs, null, 2) + "\n");
  fs.writeFileSync(path.join(root, "src/lib/responsive-heroes.json"), JSON.stringify(heroes, null, 2) + "\n");
  console.log(`Prepared ${Object.keys(thumbs).length} article images and ${Object.keys(heroes).length} hero images (static AVIF/WebP; original URLs untouched)`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
