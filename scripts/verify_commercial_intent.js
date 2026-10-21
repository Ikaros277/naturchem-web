/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const React = require("react");
const matter = require("gray-matter");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const css = { __esModule: true, default: new Proxy({}, { get: (_, name) => String(name) }) };
const load = require("./lib/load-typescript.js")({
  "./service-detail.module.css": css,
  "./accredited-scope.module.css": css,
  "./article-related-services.module.css": css,
  "@/app/services.generated.css": {},
  "@/components/HeroPhoto": { HeroPhoto: () => React.createElement("img", { src: "/fixture.webp", alt: "" }) },
  "next/link": { __esModule: true, default: ({ children, href }) => React.createElement("a", { href }, children) },
  "next/navigation": { usePathname: () => "/" },
  "@/lib/render-inline-service-page": { createInlineServicePageExports: (_, content) => ({ Page: () => content }) },
});
const { ServicePage } = load(path.join(root, "src/components/ServicePage.tsx"));
const { ArticleRelatedServices } = load(path.join(root, "src/components/ArticleRelatedServices.tsx"));
const { getDedicatedService } = load(path.join(root, "src/lib/i18n/service-pages.ts"));
const { serviceCommercialIntent } = load(path.join(root, "src/lib/service-commercial-intent.ts"));
const { getRelatedServicesForArticle, getRelatedArticlesForService } = load(path.join(root, "src/lib/poradna-service-links.ts"));
const { readContactUrlPrefill } = load(path.join(root, "src/lib/contact-url-prefill.ts"));
const { services } = load(path.join(root, "src/lib/site.ts"));
const { resolveArticleTopic } = load(path.join(root, "src/lib/poradna-topic.ts"));
const { referenceExampleGroups } = load(path.join(root, "src/lib/reference-example-groups.ts"));
const { getCzechServiceSearchSupport } = load(path.join(root, "src/lib/service-search-support.ts"));
const { localizeHref } = load(path.join(root, "src/lib/i18n/navigation.ts"));
const { getSeoLanding } = load(path.join(root, "src/lib/seo-landings.ts"));
const { readCatalog } = require("./scheduled_publication.js");
const { buildArticleIndexes } = require("./generate_article_indexes.js");
const decode = value => value.replaceAll("&amp;", "&");
const inquiryHrefs = html => [...html.matchAll(/href="([^"]*kontakt[^"]*)"/g)].map(match => decode(match[1]));
const escape = value => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");

async function main() {
  assert.equal(Object.keys(serviceCommercialIntent).length, 7);
  for (const [slug, intent] of Object.entries(serviceCommercialIntent)) {
    const content = slug === "rozptylove-studie"
      ? load(path.join(root, "src/app/[locale]/sluzby", slug, "page.tsx")).default()
      : await getDedicatedService(slug, "cs");
    const html = renderToStaticMarkup(await ServicePage({ ...content, locale: "cs" }));
    const body = html.replace(/<script[\s\S]*?<\/script>/g, "");
    assert.equal(intent.features.length, 3, "Replace three existing features instead of adding more sections");
    for (const feature of intent.features) {
      assert.ok(feature.title.length <= 44 && feature.text.length <= 155, "Concise mobile-readable offer: " + slug);
      assert.ok(body.includes(escape(feature.title)) && body.includes(escape(feature.text)));
    }
    assert.ok(body.includes(escape(intent.heading)) && body.includes(escape(intent.quoteBasis)));
    assert.equal((body.match(/data-service-quote-basis/g) ?? []).length, 1);
    assert.equal((body.match(/<h1\b/g) ?? []).length, 1);
    const inquiries = inquiryHrefs(body);
    assert.equal(inquiries.length, 2, "Preserve the compact contact path");
    for (const href of inquiries) {
      const url = new URL(href, "https://www.naturchem.cz");
      const prefill = readContactUrlPrefill(url.search);
      assert.deepEqual(prefill.initialServices, [services.find(service => service.href === "/sluzby/" + slug).contactService]);
      assert.equal(prefill.initialMessage, (getCzechServiceSearchSupport(slug)?.contactMessage ?? intent.contactMessage).trim());
      assert.equal(url.hash, "#poptavkovy-formular");
    }
    const evidence = getCzechServiceSearchSupport(slug)?.evidence;
    if (evidence?.referenceHref) {
      assert.ok(body.includes('href="' + localizeHref(evidence.referenceHref, "cs") + '"'));
      assert.ok(referenceExampleGroups.some(group => evidence.referenceHref === "/reference#" + group.id));
    }
    for (const locale of ["en", "de"]) {
      const translated = slug === "rozptylove-studie"
        ? load(path.join(root, "src/lib/inline-service-pages-" + locale + ".ts")).inlineServicePagesEn[slug]
        : await getDedicatedService(slug, locale);
      const translatedHtml = renderToStaticMarkup(await ServicePage({ ...translated, locale }));
      assert.ok(!translatedHtml.includes("data-service-quote-basis"), "Do not leak Czech copy into localized pages");
    }
  }

  const fixtures = [
    ["mereni-osvetleni-pracoviste-khs-kolaudace", "mereni-osvetleni"],
    ["nedostatecne-osvetleni-pracoviste-co-se-meri-podklady", "mereni-osvetleni"],
    ["mereni-mikroklimatu-na-pracovisti-teplota-vlhkost-a-proudeni-vzduchu", "mereni-mikroklimatu"],
    ["mereni-vibraci-pri-praci-ruce-cele-telo-kategorizace-praci", "mereni-vibraci"],
    ["chladova-zatez-na-pracovisti", "mereni-tepelna-chladova-zatez"],
    ["kdy-je-potreba-hlukova-studie-a-kdy-mereni-hluku", "hlukove-studie"],
    ["jak-cist-hlukovou-studii-laeq-lafmax-chraneny-prostor-a-nejistota", "hlukove-studie"],
    ["rozptylova-studie-kdy-je-povinna-a-jake-podklady-jsou-potreba", "rozptylove-studie"],
    ["chyby-souhrnna-provozni-evidence", "ispop"],
    ["bezpecnostni-listy-v-provozu-co-musi-zamestnavatel", "bezpecnostni-listy"],
    ["eu-ets-ghg-kdy-sledovat-vykazovat-emise-sklenikovych-plynu", "ghg-overovani"],
    ["zmena-integrovaneho-povoleni-ippc-podstatna-zmena", "ippc-integrovana-povoleni"],
  ];
  for (const [slug, serviceSlug] of fixtures) {
    const { data } = matter(fs.readFileSync(path.join(root, "content/articles", slug + ".md"), "utf8"));
    const topic = resolveArticleTopic(data);
    for (const locale of ["cs", "en", "de"]) {
      const links = getRelatedServicesForArticle(data.title, slug, topic, locale);
      assert.equal(links[0].href, "/sluzby/" + serviceSlug, "Relevant first service: " + slug + " / " + locale);
      assert.equal(new Set(links.map(link => link.href)).size, links.length);
      if (slug === "kdy-je-potreba-hlukova-studie-a-kdy-mereni-hluku") assert.deepEqual(links.map(link => link.href), ["/sluzby/hlukove-studie", "/sluzby/mereni-hluku", "/mereni-hluku-ke-kolaudaci"], "Do not displace the relevant approval path with a broad topic match");
      for (const link of links) assert.ok(fs.existsSync(path.join(root, "src/app/[locale]", link.href, "page.tsx")) || getSeoLanding(link.href.slice(1)), "Every destination exists: " + link.href);
      const html = renderToStaticMarkup(await ArticleRelatedServices({ locale, title: data.title, slug, topic }));
      const inquiries = inquiryHrefs(html);
      assert.ok(inquiries.length <= 1, "No repeated article inquiry blocks");
      const intent = serviceCommercialIntent[serviceSlug];
      if (intent && locale === "cs") {
        assert.equal(inquiries.length, 1);
        const url = new URL(inquiries[0], "https://www.naturchem.cz");
        const prefill = readContactUrlPrefill(url.search);
        assert.equal(prefill.initialMessage, intent.contactMessage.trim());
        assert.deepEqual(prefill.initialServices, [services.find(service => service.href === "/sluzby/" + serviceSlug).contactService]);
        assert.ok(html.includes(escape(intent.articlePrompt)));
      }
    }
    const listing = { title: data.title, href: "/poradna/" + slug, slug };
    assert.equal(getRelatedArticlesForService("/sluzby/" + serviceSlug, [listing])[0], listing, "Bidirectional service/article relevance");
    const englishListing = { ...listing, href: "/en/poradna/" + slug };
    assert.equal(getRelatedArticlesForService("/sluzby/" + serviceSlug, [englishListing])[0], englishListing, "Use the canonical slug, not the localized URL as a slug");
  }
  for (const slug of ["kategorizace-praci-jake-mereni-je-potreba-jako-podklad", "ispop-u-jednorazoveho-mereni-emisi-co-musi-zajistit-provozovatel-a-co-autorizovana-osoba"]) {
    const { data } = matter(fs.readFileSync(path.join(root, "content/articles", slug + ".md"), "utf8"));
    assert.ok(!getRelatedServicesForArticle(data.title, slug)[0].href.startsWith("/sluzby/"), "Protect specific high-intent landing paths");
  }
  const indexes = buildArticleIndexes(readCatalog(path.join(root, "content")), Date.parse("2026-10-14T10:00:00Z"));
  const drafts = fs.readdirSync(path.join(root, "content/articles")).filter(file => file.endsWith(".md"))
    .map(file => ({ file, data: matter(fs.readFileSync(path.join(root, "content/articles", file), "utf8")).data }))
    .filter(({ data }) => data.status === "draft");
  const plan = require("../content/editorial-plan-2026-10.json");
  assert.equal(plan.expertApprovedOn, "2026-10-21", "Explicit owner approval, not automatic draft publication");
  assert.equal(plan.articles.length, 12);
  for (const item of plan.articles) {
    const { data } = matter(fs.readFileSync(path.join(root, "content/articles", item.slug + ".md"), "utf8"));
    assert.equal(data.status, "published", "Only these reviewed articles are approved: " + item.slug);
    assert.equal(data.publishedAt, item.publishedAt, "Preserve the approved Monday: " + item.slug);
    assert.ok(!indexes.listings.cs.some(article => article.slug === item.slug), "Future articles were not public before their dates");
  }
  const now = buildArticleIndexes(readCatalog(path.join(root, "content")), Date.parse("2026-10-21T12:00:00Z"));
  assert.deepEqual(plan.articles.filter(item => now.listings.cs.some(article => article.slug === item.slug)).map(item => item.slug), [plan.articles[0].slug], "Publish only the first due article, not all twelve at once");
  for (const { file, data } of drafts) assert.ok(!indexes.listings.cs.some(article => article.slug === (data.slug ?? file.slice(0, -3))), "No draft in public indexes");
  assert.ok(!indexes.listings.cs.some(article => article.slug === "uhlikova-stopa-firmy-podklady-pro-odberatele"));
  assert.ok(!/use client|next\/image|useEffect|fetch\(/.test(fs.readFileSync(path.join(root, "src/lib/service-commercial-intent.ts"), "utf8")), "Static content without client JS or runtime requests");
  console.log("PASS commercial intent: 7 concise offers, exact prefilled inquiries, 12 article paths, approved weekly calendar, translations and generic draft/future protection");
}
main().catch(error => { console.error(error); process.exitCode = 1; });
