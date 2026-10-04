/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const path = require("node:path");
const fs = require("node:fs");
const { createHash } = require("node:crypto");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const matter = require("gray-matter");
const root = path.resolve(__dirname, "..");
const link = ({ href, children, prefetch, ...props }) => {
  void prefetch; // Next-only prop must not reach the mocked HTML anchor.
  return React.createElement("a", { href, ...props }, children);
};
const load = require("./lib/load-typescript.js")({
  "next/link": { __esModule: true, default: link },
  "next/navigation": { usePathname: () => "/sluzby/" },
  "@/lib/i18n/locale-link": { LocaleLink: link }
});
const { getHeroImageSrc, getPageHeroTheme } = load(path.join(root, "src/lib/hero-images.ts"));
const { getGeneratedIllustrationSources } = load(path.join(root, "src/lib/generated-illustrations.ts"));
const { getAuthenticPhoto } = load(path.join(root, "src/lib/authentic-photos.ts"));
const { ServiceGroupsIndex } = load(path.join(root, "src/components/ServiceGroupsIndex.tsx"));
const { LocaleProvider } = load(path.join(root, "src/lib/i18n/locale-context.tsx"));
const { isChatAttentionTitle, guardChatPageTitle } = load(path.join(root, "src/lib/chat-page-title.ts"));
const { getServiceSelectionParams } = load(path.join(root, "src/lib/service-selection-analytics.ts"));
const { PoradnaFilterableList } = load(path.join(root, "src/components/PoradnaFilterableList.tsx"));
const { PORADNA_TOPICS } = load(path.join(root, "src/lib/poradna-topic.ts"));
const { homeArticleThumbnails } = load(path.join(root, "src/lib/home-article-thumbnails.ts"));
const { GeneratedIllustration } = load(path.join(root, "src/components/GeneratedIllustration.tsx"));
for (const [src, thumbnail] of Object.entries(homeArticleThumbnails)) {
  assert.ok(fs.existsSync(path.join(root, "public", src)));
  assert.ok(fs.existsSync(path.join(root, "public", thumbnail)));
  assert.ok(fs.statSync(path.join(root, "public", thumbnail)).size < 15000, "Mobile homepage thumbnail budget");
  const image = renderToStaticMarkup(React.createElement(GeneratedIllustration, { src, thumbnailSrc: thumbnail, sizes: "88px" }));
  assert.ok(image.includes('src="' + thumbnail + '"') && image.includes(thumbnail + ' 192w, '));
}

for (const locale of ["cs", "en", "de"]) {
  const { serviceGroups } = load(path.join(root, "src/lib/service-groups" + (locale === "cs" ? "" : "-" + locale) + ".ts"));
  const hrefs = serviceGroups.flatMap(group => group.items.map(item => item.href));
  const expectedCards = locale === "cs" ? 27 : 25; // Czech-only campaign URLs have no invented translations.
  assert.equal(hrefs.length, expectedCards);
  assert.equal(new Set(hrefs).size, hrefs.length, "No repeated service cards");
  const themes = hrefs.map(getPageHeroTheme);
  assert.equal(new Set(themes).size, themes.length, "Every catalog card needs its own image");
  const thumbnailHashes = [];
  for (const theme of themes) {
    const photo = getAuthenticPhoto(theme);
    for (const width of [320, 640]) {
      const url = photo ? photo.base + "-card-" + width + ".webp" : "/hero/service-cards-2026-10/" + theme + "-" + width + ".webp";
      const file = path.join(root, "public", url);
      assert.ok(fs.existsSync(file), file);
      assert.ok(fs.statSync(file).size < 80000, "Catalog image budget: " + file);
      if (width === 640) thumbnailHashes.push(createHash("sha256").update(fs.readFileSync(file)).digest("hex"));
    }
  }
  assert.equal(new Set(thumbnailHashes).size, themes.length, "Unique filenames must not hide duplicate image contents");
  const html = renderToStaticMarkup(React.createElement(LocaleProvider, {
    locale, messages: require(path.join(root, "messages", locale + ".json"))
  }, React.createElement(ServiceGroupsIndex, { groups: serviceGroups, locale })));
  assert.ok(/<details[^>]*id="mericke-sluzby"[^>]*open=""|<details[^>]*open=""[^>]*id="mericke-sluzby"/.test(html), "Show measurements without an extra click");
  assert.equal((html.match(/<details\b/g) || []).length, 6);
  assert.equal((html.match(/<h3\b/g) || []).length, expectedCards);
  assert.ok(!html.includes("/_next/image"), "No runtime image transformations for catalog cards");
  assert.ok(html.includes('style="position:absolute;inset:0;width:100%;height:100%;'), "Static thumbnails must fill their responsive frame, not render at intrinsic 640px width");
  for (const group of serviceGroups) assert.ok(html.includes('href="#' + group.id + '"'));
  const poradna = renderToStaticMarkup(React.createElement(LocaleProvider, {
    locale, messages: require(path.join(root, "messages", locale + ".json"))
  }, React.createElement(PoradnaFilterableList, {
    locale, articles: [], topicLabels: Object.fromEntries(PORADNA_TOPICS.map(topic => [topic, topic]))
  })));
  assert.equal((poradna.match(/<option\b/g) || []).length, PORADNA_TOPICS.length + 1);
  assert.ok(poradna.includes('class="poradna-topic-select"') && poradna.includes('aria-controls="poradna-article-list"'));
}

const slugs = ["kolaudace-vyrobni-haly-provozovny-khs-mereni", "vyjmenovany-stacionarni-zdroj-povoleni-provozu", "skladovani-chemickych-latek-smesi-kontrola", "bezpecnostni-listy-v-provozu-co-musi-zamestnavatel"];
const images = slugs.map(slug => matter(fs.readFileSync(path.join(root, "content/articles", slug + ".md"), "utf8")).data.heroImage);
assert.equal(new Set(images).size, 4);
assert.notEqual(getHeroImageSrc(getPageHeroTheme("/mereni-pro-kolaudaci")), getHeroImageSrc(getPageHeroTheme("/mereni-nove-haly")));
for (const src of images) {
  const sources = getGeneratedIllustrationSources(src);
  assert.ok(sources, "Static responsive generated asset");
  for (const file of [sources.src, sources.smallSrc]) assert.ok(fs.existsSync(path.join(root, "public", file)));
}
for (const theme of ["mereni-pro-kolaudaci", "mereni-nove-haly"]) {
  assert.ok(getAuthenticPhoto(theme), "Distinct approved photographs for the two campaign pages");
}
assert.ok(getGeneratedIllustrationSources("/hero/generated-2026-09/poradna-automotive.webp"));
assert.equal(getGeneratedIllustrationSources("/hero/generated-2026-10/nonexistent.svg"), null);
assert.equal(getGeneratedIllustrationSources("/hero/generated-2026-10/bezpecnostni-listy-clanek-192.webp"), null);
for (const title of ["1 nová zpráva", "(2) nové zprávy", "1 new message", "(3) neue Nachrichten"]) assert.equal(isChatAttentionTitle(title), true, title);
for (const title of ["Hluková studie | NATURCHEM", "1 nový provoz | NATURCHEM", "Nové zprávy z legislativy"]) assert.equal(isChatAttentionTitle(title), false, title);
const originalObserver = global.MutationObserver;
let callback;
let disconnected = false;
global.MutationObserver = class {
  constructor(cb) { callback = cb; }
  observe() {}
  disconnect() { disconnected = true; }
};
try {
  const document = { title: "Hluková studie | NATURCHEM", head: {}, querySelector: () => null };
  const cleanup = guardChatPageTitle(document);
  document.title = "1 nová zpráva"; callback();
  assert.equal(document.title, "Hluková studie | NATURCHEM");
  document.title = "Měření emisí | NATURCHEM"; callback();
  document.title = "(2) new messages"; callback();
  assert.equal(document.title, "Měření emisí | NATURCHEM", "Preserve genuine navigation metadata");
  cleanup(); assert.ok(disconnected);
} finally { global.MutationObserver = originalObserver; }
const base = "https://www.naturchem.cz/poradna/example/";
assert.deepEqual(getServiceSelectionParams("/en/sluzby/mereni-emisi/?private=omit#x", base, "article_related_service"),
  { service_path: "/sluzby/mereni-emisi", placement: "article_related_service" });
for (const href of ["https://example.com/sluzby/mereni-emisi/", "/kontakt/?email=omit", "#mericke-sluzby", "javascript:alert(1)"]) {
  assert.equal(getServiceSelectionParams(href, base, "service_catalog"), null);
}
assert.equal(getServiceSelectionParams("/sluzby/mereni-emisi/", base, null), null);
console.log("PASS audit quality: distinct catalog images (27 CS, 25 EN/DE), accessible category navigation, four article illustrations, small homepage thumbnails, title protection and consent-scoped service navigation");
