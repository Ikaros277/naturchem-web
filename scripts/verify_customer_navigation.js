/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const searchControl = /<input\b[^>]*\btype=["']search["']|\brole=["']search(?:box)?["']/i;
const read = file => fs.readFileSync(path.join(root, file), "utf8");

async function main() {
  if (process.argv.includes("--rendered")) {
    const app = path.join(root, ".next/server/app");
    const files = fs.readdirSync(app, { recursive: true }).filter(file => /^(cs|en|de)(?:\/|\\|\.html)/.test(file) && file.endsWith(".html"));
    assert.ok(files.length > 500, "Inspect the complete localized static website");
    for (const file of files) assert.doesNotMatch(fs.readFileSync(path.join(app, file), "utf8"), searchControl, "Public pages have no text-search controls: " + file);
    for (const locale of ["cs", "en", "de"]) {
      const faq = fs.readFileSync(path.join(app, locale, "faq.html"), "utf8");
      assert.ok(faq.includes('id="faq-topics"') && faq.includes('id="faq-search"'), "Keep topic navigation and the legacy fragment");
      const poradna = fs.readFileSync(path.join(app, locale, "poradna.html"), "utf8");
      assert.ok(poradna.includes('class="poradna-topic-select"') && poradna.includes('class="poradna-pagination"'), "Topics and crawlable pagination remain");
    }
    console.log("PASS rendered customer navigation: " + files.length + " localized HTML documents without text-search controls, preserved topic and pagination paths");
    return;
  }
  const nativeLink = ({ children, href, prefetch, ...props }) => { void prefetch; return React.createElement("a", { ...props, href }, children); };
  const load = require("./lib/load-typescript.js")({
    "next/link": { __esModule: true, default: nativeLink },
    "next/navigation": { usePathname: () => "/sluzby/" },
    "@/lib/i18n/locale-link": { LocaleLink: nativeLink },
  });
  const { LocaleProvider } = load(path.join(root, "src/lib/i18n/locale-context.tsx"));
  const { getServiceGroups, getFaqContent } = load(path.join(root, "src/lib/i18n/content.ts"));
  const { getPoradnaTopicLabels } = load(path.join(root, "src/lib/i18n/poradna-topic-i18n.ts"));
  const { ServiceGroupsIndex } = load(path.join(root, "src/components/ServiceGroupsIndex.tsx"));
  const { FaqPageContent } = load(path.join(root, "src/components/FaqPageContent.tsx"));
  const { FaqAccordionList } = load(path.join(root, "src/components/FaqAccordionList.tsx"));
  const { PoradnaFilterableList } = load(path.join(root, "src/components/PoradnaFilterableList.tsx"));
  const { localizeHref } = load(path.join(root, "src/lib/i18n/navigation.ts"));
  for (const locale of ["cs", "en", "de"]) {
    const messages = require(path.join(root, "messages", locale + ".json"));
    const render = node => renderToStaticMarkup(React.createElement(LocaleProvider, { locale, messages }, node));
    const groups = await getServiceGroups(locale);
    const services = render(React.createElement(ServiceGroupsIndex, { groups, locale }));
    assert.doesNotMatch(services, searchControl);
    assert.doesNotMatch(services, /\shidden(?:\s|=|>)/, "Do not hide services behind a query");
    for (const group of groups) {
      assert.ok(services.includes('href="#' + group.id + '"'));
      for (const item of group.items) assert.ok(services.includes('href="' + localizeHref(item.href, locale) + '"'), "Every service has a native link");
    }
    const content = await getFaqContent(locale);
    const faq = render(React.createElement(FaqPageContent, { categories: content.categories, uiLabels: content.uiLabels, locale }));
    assert.doesNotMatch(faq, searchControl);
    assert.doesNotMatch(faq, /\shidden(?:\s|=|>)/);
    for (const category of content.categories) {
      assert.ok(faq.includes('href="#' + category.id + '"') && faq.includes('value="' + category.id + '"'));
      const answers = renderToStaticMarkup(React.createElement(FaqAccordionList, { items: category.items, locale, uiLabels: content.uiLabels }));
      assert.ok(faq.includes(answers), "Preserve every answer, legal source and service link exactly");
    }
    const catalog = JSON.parse(read("public/search/poradna-listing-" + locale + ".json"));
    const articles = catalog.slice(0, 12);
    const poradna = render(React.createElement(PoradnaFilterableList, { articles, locale, topicLabels: getPoradnaTopicLabels(locale), total: catalog.length, pageCount: Math.ceil(catalog.length / 12) }));
    assert.doesNotMatch(poradna, searchControl);
    for (const article of articles) assert.ok(poradna.includes('href="' + localizeHref(article.href, locale) + '"'));
    assert.ok(poradna.includes('class="poradna-topic-select"') && poradna.includes(localizeHref("/poradna/strana/2", locale)));
  }
  for (const file of ["src/components/ServiceGroupsIndex.tsx", "src/components/PoradnaFilterableList.tsx", "src/components/FaqTopicNavigation.tsx"]) {
    assert.doesNotMatch(read(file), /usePoradnaSearchIndex|searchServiceCatalog|type="search"|role="search"/);
  }
  assert.doesNotMatch(read("src/components/FaqTopicNavigation.tsx"), /\.hidden\s*=/);
  assert.ok(read("src/components/FaqTopicNavigation.tsx").includes('window.addEventListener("hashchange", syncActiveTopic)'));
  console.log("PASS customer navigation: no public text search in 3 locales; every service, complete FAQ, legal links, article topics and native pagination preserved; no network");
}
main().catch(error => { console.error(error); process.exitCode = 1; });
