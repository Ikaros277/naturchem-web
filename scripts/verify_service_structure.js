/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const css = { __esModule: true, default: new Proxy({}, { get: (_, name) => String(name) }) };
let currentLocale = "cs";
const load = require("./lib/load-typescript.js")({
  "./service-detail.module.css": css,
  "@/components/HeroPhoto": { HeroPhoto: () => React.createElement("img", { src: "/fixture.webp", alt: "" }) },
  "@/components/ServiceCardThumb": { ServiceCardThumb: () => null },
  "@/app/services.generated.css": {},
  "next/link": { __esModule: true, default: ({ children, href, ...props }) => React.createElement("a", { ...props, href }, children) },
  "next/navigation": { usePathname: () => "/sluzby" },
  "@/lib/i18n/locale-context": {
    useLocale: () => currentLocale,
    useTranslations: namespace => require(path.join(root, "messages", currentLocale + ".json"))[namespace],
  },
  "@/lib/render-inline-service-page": { createInlineServicePageExports: (_, content) => ({ Page: () => content }) },
});
const { serviceOverviews } = load(path.join(root, "src/lib/service-overviews.ts"));
const { ServicePage } = load(path.join(root, "src/components/ServicePage.tsx"));
const { ServiceGroupsIndex } = load(path.join(root, "src/components/ServiceGroupsIndex.tsx"));
const { getDedicatedService } = load(path.join(root, "src/lib/i18n/service-pages.ts"));
const { getServiceGroups } = load(path.join(root, "src/lib/i18n/content.ts"));
const { localizeHref } = load(path.join(root, "src/lib/i18n/navigation.ts"));
const { getSeoLanding } = load(path.join(root, "src/lib/seo-landings.ts"));
const { stripInlineMarkdown } = load(path.join(root, "src/lib/plain-text.ts"));
const { serviceMegaGroups } = load(path.join(root, "src/lib/service-megamenu.ts"));
const text = html => html.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\s+/g, " ");
const expectedGroupIds = ["mericke-sluzby", "studie-vypocty", "povolovaci-podklady", "eia-investice", "evidence-reporting", "skoleni-podpora"];
const expectedIndexHrefs = [
  "/mereni-pro-kolaudaci", "/mereni-nove-haly", "/sluzby/pracovni-prostredi",
  "/sluzby/mereni-tepelna-chladova-zatez", "/sluzby/mereni-diisokyanatu", "/sluzby/mereni-hluku",
  "/sluzby/mereni-emisi", "/sluzby/mereni-vibraci", "/sluzby/mereni-osvetleni", "/sluzby/mereni-mikroklimatu",
  "/sluzby/rozptylove-studie", "/sluzby/hlukove-studie", "/sluzby/akusticke-posudky",
  "/sluzby/modelove-vypocty", "/sluzby/imisni-dopady", "/sluzby/odborne-posudky", "/sluzby/provozni-rady",
  "/sluzby/povoleni-provozu", "/sluzby/ippc-integrovana-povoleni", "/sluzby/eia-oznameni-zameru",
  "/sluzby/zjistovaci-rizeni-eia", "/sluzby/technicke-prilohy", "/sluzby/ispop", "/sluzby/ghg-overovani",
  "/sluzby/chemicke-latky", "/sluzby/skoleni-chemicke-legislativy", "/sluzby/bezpecnostni-listy",
];

async function main() {
  for (const locale of ["cs", "en", "de"]) {
    currentLocale = locale;
    const groups = await getServiceGroups(locale);
    const expectedLocaleHrefs = locale === "cs" ? expectedIndexHrefs : expectedIndexHrefs.filter(href => href.startsWith("/sluzby/"));
    assert.deepEqual(groups.map(group => group.id), expectedGroupIds, "Preserve all six subgroup anchors");
    assert.deepEqual(groups.flatMap(group => group.items.map(item => item.href)).sort(), [...expectedLocaleHrefs].sort(), "Preserve every existing service index destination: " + locale);
    const html = renderToStaticMarkup(React.createElement(ServiceGroupsIndex, { groups, locale }));
    assert.equal((html.match(/data-service-index-category=/g) ?? []).length, 3, "Three primary categories in every locale");
    for (const id of expectedGroupIds) {
      assert.ok(html.includes('href="#' + id + '"'), "Retain native navigation: " + id);
      assert.ok(html.includes('id="' + id + '"'), "Retain destination: " + id);
    }
    for (const href of expectedLocaleHrefs) assert.ok(html.includes('href="' + localizeHref(href, locale) + '"'), "Server-rendered link, including closed groups: " + href);
    assert.equal((html.match(/<details\b/g) ?? []).length, 6, "Existing native disclosure structure");
  }
  currentLocale = "cs";
  assert.equal(Object.keys(serviceOverviews).length, 8);
  for (const [slug, overview] of Object.entries(serviceOverviews)) {
    const content = slug === "eia-posudky-poradenstvi"
      ? load(path.join(root, "src/app/[locale]/sluzby", slug, "page.tsx")).default()
      : await getDedicatedService(slug, "cs");
    const html = renderToStaticMarkup(await ServicePage({ ...content, locale: "cs" }));
    const body = html.replace(/<script[\s\S]*?<\/script>/g, "");
    const plain = text(body);
    assert.equal((body.match(/<h1\b/g) ?? []).length, 1);
    assert.ok(plain.includes(content.title), "Preserve the original H1");
    assert.ok(plain.includes(overview.heading));
    assert.equal(overview.features.length, 3, "Replace existing summaries, do not add another section");
    for (const feature of overview.features) {
      assert.ok(feature.title.length <= 44 && feature.text.length <= 155, "Concise summary: " + slug);
      assert.ok(plain.includes(feature.title) && plain.includes(feature.text));
    }
    for (const field of ["scope", "outputs", "docs", "whenNeeded", "commonMistakes", "practicalSituations"]) {
      for (const original of content[field] ?? []) assert.ok(plain.includes(stripInlineMarkdown(original)), "Retain approved technical copy: " + slug + " / " + field);
    }
    assert.equal((body.match(/href="[^"]*kontakt[^"]*"/g) ?? []).length, 2, "No new repeated inquiry buttons");
    if (slug === "eia-posudky-poradenstvi") {
      for (const target of ["eia-oznameni-zameru", "ippc-integrovana-povoleni", "ispop", "rozptylove-studie", "hlukove-studie", "odborne-posudky"]) assert.ok(body.includes('href="' + localizeHref("/sluzby/" + target, "cs") + '"'), "Coordinated-service hub retains existing and adds specific path: " + target);
    }
    const translated = slug === "eia-posudky-poradenstvi"
      ? load(path.join(root, "src/lib/inline-service-pages-en.ts")).inlineServicePagesEn[slug]
      : await getDedicatedService(slug, "en");
    if (translated) {
      const enHtml = renderToStaticMarkup(await ServicePage({ ...translated, locale: "en" }));
      assert.ok(!enHtml.includes(overview.heading), "Do not leak Czech summaries into translated pages");
    }
  }
  for (const [file, href] of [
    ["drevozpracujici-provoz-prach-piliny-odsavani-hluk-a-povoleni-zdroje", "/mereni-emisi-susaren/"],
    ["svarovna-prach-kovy-odsavani-pracovni-prostredi-a-emise", "/mereni-tezkych-kovu-emise/"],
    ["zalozni-dieselagregat-emise-hluk-a-povolovaci-podklady", "/mereni-emisi-dieselagregat/"],
  ]) {
    assert.ok(fs.readFileSync(path.join(root, "content/articles", file + ".md"), "utf8").includes("](" + href + ")"));
    assert.ok(getSeoLanding(href.replace(/^\/|\/$/g, "")), "Link points to an existing specialist page");
  }
  assert.deepEqual(serviceMegaGroups.map(group => group.id), ["mereni", "studie", "dokumentace"]);
  const source = fs.readFileSync(path.join(root, "src/lib/service-overviews.ts"), "utf8");
  assert.doesNotMatch(source, /use client|fetch\(|useEffect|next\/image/, "Static server-rendered summaries, no new requests or images");
  console.log("PASS service structure: 3 categories / 6 native subgroups; all 27 CS and 25 EN/DE destinations; 8 concise summaries, technical copy, two CTAs and 3 contextual article links preserved");
}
main().catch(error => { console.error(error); process.exitCode = 1; });
