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
const { ContactQuickLinks } = load(path.join(root, "src/components/ContactQuickLinks.tsx"));
const { company } = load(path.join(root, "src/lib/site.ts"));
const catalogCss = require("postcss").parse(fs.readFileSync(path.join(root, "src/app/globals.css"), "utf8"));
function declarations(selector) {
  const values = {};
  catalogCss.walkRules(rule => {
    if (rule.selectors.includes(selector)) rule.walkDecls(decl => { values[decl.prop] = decl.value; });
  });
  return values;
}
function rgb(hex) {
  const raw = hex.slice(1);
  return (raw.length === 3 ? raw.split("").map(c => c + c) : raw.match(/../g)).map(v => parseInt(v, 16));
}
function contrast(front, back) {
  const lum = color => color.map(v => { const c = v / 255; return c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4; }).reduce((sum, c, i) => sum + c * [.2126, .7152, .0722][i], 0);
  const a = lum(front), b = lum(back);
  return (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
}
const navBase = declarations(".service-category-nav-group");
const cardBase = declarations(".service-groups-accordion .service-index-card");
const navText = declarations(".service-category-nav a").color;
const navHint = declarations(".service-category-nav-main small").color;
const cardText = declarations(".service-groups-accordion .service-index-card .index-card-heading").color;
const cardLead = declarations(".service-groups-accordion .service-index-card .service-index-card-lead").color;
const cardAction = declarations(".service-groups-accordion .service-index-card .card-inline-link").color;
for (const category of ["measurement", "studies", "docs"]) {
  const nav = { ...navBase, ...declarations('.service-category-nav-group[data-service-index-category="' + category + '"]') };
  const card = { ...cardBase, ...declarations('.service-groups-accordion .service-index-card[data-category="' + category + '"]') };
  const brightestNav = rgb(nav["--index-accent"]).map(c => c + (255 - c) * .181); // decorative 10% white + 9% hover layer
  assert.ok(contrast(rgb(navText), brightestNav) >= 4.5, "Category label contrast including hover: " + category);
  if (category !== "docs") assert.ok(contrast(rgb(navHint), brightestNav) >= 4.5, "Category hint contrast: " + category);
  for (const color of [cardText, cardLead]) assert.ok(contrast(rgb(color), rgb(card["--catalog-surface"])) >= 4.5, "Card text contrast: " + category);
  assert.ok(contrast(rgb(cardAction), rgb(card["--catalog-accent"])) >= 4.5, "Filled card action contrast: " + category);
}
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
  assert.equal((html.match(/<h3\b/g) || []).length, expectedCards - (locale === "cs" ? 2 : 0), "Specific services stay in the catalog; two Czech situations have their own visible entries");
  const catalogHrefs = [...html.matchAll(/href="([^"]+)"/g)].map(m => m[1].replace(/\/$/, ""));
  for (const href of hrefs) assert.equal(catalogHrefs.filter(actual => actual === (locale === "cs" ? "" : "/" + locale) + href).length, 1, "Each localized catalog destination stays server-rendered exactly once: " + locale + href);
  const visibleImages = [...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)].map(m => m[1]);
  assert.equal(visibleImages.length, expectedCards, "Every service and situation gets its original prepared image");
  assert.equal(new Set(visibleImages).size, expectedCards, "No repeated catalog photos, including situation cards");
  assert.ok(!html.includes("/_next/image"), "No runtime image transformations for catalog cards");
  assert.ok(html.includes('style="position:absolute;inset:0;width:100%;height:100%;'), "Static thumbnails must fill their responsive frame, not render at intrinsic 640px width");
  for (const group of serviceGroups) assert.ok(html.includes('href="#' + group.id + '"'));
  const nav = html.match(/<nav class="service-category-nav"[\s\S]*?<\/nav>/)?.[0] || "";
  assert.equal((nav.match(/class="service-category-nav-arrow" aria-hidden="true"/g) || []).length, 2, "Both full-card category links need a visible directional cue");
  assert.equal((nav.match(/<a\b/g) || []).length, 6, "Keep all six category destinations without introducing redundant links");
  const messages = require(path.join(root, "messages", locale + ".json"));
  const quickContacts = renderToStaticMarkup(React.createElement(ContactQuickLinks, {
    phoneLabel: messages.contact.phone, emailLabel: messages.contact.email
  }));
  assert.equal((quickContacts.match(/<a\b/g) || []).length, 2);
  assert.ok(quickContacts.includes('href="tel:' + company.phones[0].replaceAll(" ", "") + '"'));
  assert.ok(quickContacts.includes('href="mailto:' + company.email + '"'));
  for (const label of [messages.contact.phone, messages.contact.email]) assert.ok(quickContacts.includes('aria-label="' + label + ': '), "Direct contacts must have localized accessible names");
  assert.ok(!quickContacts.includes("<script") && !quickContacts.includes("<form"), "Direct contact requires no extra tracker or form");
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
for (const locale of ["", "/en", "/de"]) {
  for (const route of ["/mereni-pro-kolaudaci", "/mereni-pracovniho-prostredi-kategorizace-praci", "/pro-stavebni-firmy"]) {
    assert.deepEqual(getServiceSelectionParams(locale + route + "/?private=omit#x", base, "home_situation_paths"),
      { service_path: route, placement: "home_situation_paths" }, "Record only the public path of each homepage situation");
  }
}
const telemetry = fs.readFileSync(path.join(root, "src/components/OutboundLinkTelemetry.tsx"), "utf8");
assert.ok(telemetry.includes('closest<HTMLElement>("[data-service-placement]")'), "Support a shared navigation placement as well as existing anchor placements");
assert.ok(telemetry.includes('!consent.statistics'), "Keep situation clicks behind existing statistical consent");
const homeCss = fs.readFileSync(path.join(root, "src/components/homepage.module.css"), "utf8");
const relativeLuminance = hex => {
  const rgb = [1, 3, 5].map(offset => parseInt(hex.slice(offset, offset + 2), 16) / 255)
    .map(v => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
};
const situationColors = [...homeCss.matchAll(/--need-(?:background|hover):\s*(#[a-f\d]{6})/g)].map(match => match[1]);
assert.equal(situationColors.length, 6, "Three card themes, each with a hover/focus color");
for (const color of situationColors) assert.ok(1.05 / (relativeLuminance(color) + 0.05) >= 4.5, "White text must retain AA contrast in every state: " + color);
for (const color of ["#1d3b4d", "#2b5063"]) assert.ok(1.05 / (relativeLuminance(color) + 0.05) >= 4.5, "Direct contact links must retain AA contrast: " + color);
const globalCss = fs.readFileSync(path.join(root, "src/app/globals.css"), "utf8");
assert.match(globalCss, /@media \(min-width: 768px\) and \(max-width: 1023px\)\s*\{\s*\.page-hero-band > \.hero-photo-frame::after\s*\{[^}]*background: rgba\(7, 24, 39, 0\.82\)/, "Protect full-width tablet titles from bright photographs without changing mobile/desktop crops");
const contactPage = fs.readFileSync(path.join(root, "src/app/[locale]/kontakt/page.tsx"), "utf8");
assert.ok(contactPage.indexOf("<ContactQuickLinks") < contactPage.indexOf("<ContactFormSection"), "Direct contact must appear before the inquiry form");
console.log("PASS audit quality: distinct catalog images (27 CS, 25 EN/DE), accessible category navigation, four article illustrations, small homepage thumbnails, title protection and consent-scoped service navigation");
