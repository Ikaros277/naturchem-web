/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const load = require("./lib/load-typescript.js")();
const { getAuthenticPhoto, getAuthenticPhotoBySrc } = load(path.join(root, "src/lib/authentic-photos.ts"));
const { getHeroImageConfig } = load(path.join(root, "src/lib/hero-images.ts"));
const { AuthenticPhoto } = load(path.join(root, "src/components/AuthenticPhoto.tsx"));
const { HomeLcpPhoto } = load(path.join(root, "src/components/HomeLcpPhoto.tsx"));
const { seoLandings } = load(path.join(root, "src/lib/seo-landings.ts"));
const themes = ["homepage-mereni", "mereni-emisi", "mereni-hluku", "pracovni-prostredi", "mereni-pro-kolaudaci", "mereni-nove-haly", "mereni-mikroklimatu", "pristrojove-vybaveni", "mereni-vibraci"];

(async () => {
  const photos = themes.map(getAuthenticPhoto);
  assert.equal(new Set(photos.map(photo => photo.src)).size, themes.length);
  for (const [i, photo] of photos.entries()) {
    assert.deepEqual(getAuthenticPhotoBySrc(photo.src), photo);
    assert.equal(getHeroImageConfig(themes[i]).src, photo.src);
    const heroMap = JSON.parse(fs.readFileSync(path.join(root, "src/lib/responsive-heroes.json"), "utf8"));
    assert.ok(!Object.hasOwn(heroMap, photo.src), "Do not duplicate prepared authentic photo variants");
    const meta = await sharp(path.join(root, "public", photo.src)).metadata();
    assert.equal(meta.width, photo.width);
    assert.equal(meta.height, photo.height);
    for (const locale of ["cs", "en", "de"]) assert.ok(photo.caption[locale]);
    const html = renderToStaticMarkup(React.createElement(AuthenticPhoto, { src: photo.src, position: photo.position, priority: true }));
    assert.ok(html.includes('<picture>') && html.includes('image/avif'));
    assert.ok(html.includes(photo.mobileSrc + " 640w") && html.includes(photo.src + " " + photo.width + "w"));
    assert.ok(html.includes('loading="eager"') && html.includes('fetchPriority="high"'));
    assert.ok(!html.includes("/_next/image"), "No billable on-demand transforms");
  }
  assert.equal(getAuthenticPhoto("unknown"), null);
  for (const slug of ["mereni-pro-kolaudaci", "mereni-nove-haly"]) {
    const landing = seoLandings.find(item => item.slug === slug);
    assert.ok(landing, "Campaign page exists");
    assert.equal(landing.heroTheme, slug, "Detail and catalog must use the same distinct photograph");
  }
  assert.equal(getAuthenticPhotoBySrc("/hero/authentic-2026-10/missing.webp"), null);
  for (const theme of ["hlukove-studie", "rozptylove-studie", "eia-posudky-poradenstvi"]) {
    assert.equal(getAuthenticPhoto(theme), null, "Keep the approved study illustrations");
  }
  const hero = renderToStaticMarkup(React.createElement(HomeLcpPhoto, { theme: "homepage-mereni" }));
  assert.ok(hero.includes('media="(max-width: 767px)"') && hero.includes('decoding="sync"'));
  const directory = path.join(root, "public/hero/authentic-2026-10");
  const files = fs.readdirSync(directory);
  assert.equal(files.length, 64, "Eight photographs with eight web variants each");
  let bytes = 0;
  for (const file of files) {
    assert.match(file, /\.(webp|avif)$/);
    const fullPath = path.join(directory, file);
    const meta = await sharp(fullPath).metadata();
    assert.ok(!meta.exif && !meta.xmp && !meta.iptc, "No GPS, personal or source metadata: " + file);
    const size = fs.statSync(fullPath).size;
    bytes += size;
    if (file.includes("-card-192")) assert.ok(size < 8000, "Small mobile service thumbnails");
    if (file.includes("-card-384")) assert.ok(size < 25000);
    if (file.endsWith("-640.avif")) assert.ok(size < 40000, "Mobile hero budget");
  }
  assert.ok(bytes < 2200000, "Total storage budget for all eight photographs");
  const vibrationDirectory = path.join(root, "public/hero/authentic-2026-10-06");
  const vibrationFiles = fs.readdirSync(vibrationDirectory);
  assert.equal(vibrationFiles.length, 8);
  let vibrationBytes = 0;
  for (const file of vibrationFiles) {
    assert.match(file, /^rucni-bruska(?:-640|-card-(?:192|384|320|640))?\.(?:webp|avif)$/);
    const fullPath = path.join(vibrationDirectory, file);
    const meta = await sharp(fullPath).metadata();
    assert.ok(!meta.exif && !meta.xmp && !meta.iptc, "No private metadata");
    const size = fs.statSync(fullPath).size;
    vibrationBytes += size;
    if (file.includes("-card-192")) assert.ok(size < 8000);
    if (file.endsWith("-640.avif")) assert.ok(size < 40000);
  }
  assert.ok(vibrationBytes < 450000, "Bounded additional storage");
  console.log("PASS authentic photos: nine distinct assets, 72 metadata-free static variants, " + (bytes + vibrationBytes) + " B total, small mobile previews and preserved study illustrations");
})().catch(error => { console.error(error); process.exitCode = 1; });
