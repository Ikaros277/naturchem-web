/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const css = { __esModule: true, default: new Proxy({}, { get: (_, name) => String(name) }) };
const load = require("./lib/load-typescript")({
  "./service-detail.module.css": css, "./accredited-scope.module.css": css,
  "@/app/services.generated.css": {},
  "@/components/HeroPhoto": { HeroPhoto: () => React.createElement("img", { src: "/fixture.webp", alt: "" }) },
  "next/link": { __esModule: true, default: ({ children, href }) => React.createElement("a", { href }, children) },
  "next/navigation": { usePathname: () => "/" },
});
const { getPageContentRevision } = load(path.join(root, "src/lib/page-content-revisions.ts"));
const { buildSalesCatalogPageSchema } = load(path.join(root, "src/lib/sales-product-schema.ts"));
const { pcfElettronicaProducts } = load(path.join(root, "src/lib/pcf-elettronica-catalog.ts"));
const { referencePhotographs, getReferencePhotographSources } = load(path.join(root, "src/lib/reference-photographs.ts"));
const { referenceExamples } = load(path.join(root, "src/lib/reference-content.ts"));
const { getCzechServiceSearchSupport } = load(path.join(root, "src/lib/service-search-support.ts"));
const { getDedicatedService } = load(path.join(root, "src/lib/i18n/service-pages.ts"));
const { ServicePage } = load(path.join(root, "src/components/ServicePage.tsx"));
const { getServiceInquiryIntent } = load(path.join(root, "src/lib/service-commercial-intent.ts"));
const { seoLandings, getSeoLanding } = load(path.join(root, "src/lib/seo-landings.ts"));
const { DemandLandingLayout } = load(path.join(root, "src/components/DemandLandingLayout.tsx"));
const { contactUrl } = load(path.join(root, "src/lib/contact-url.ts"));
const { readContactUrlPrefill } = load(path.join(root, "src/lib/contact-url-prefill.ts"));
const { getRelatedServicesForArticle } = load(path.join(root, "src/lib/poradna-service-links.ts"));
const escape = value => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");

async function main() {
  const approvalArticle = "kolaudace-vyrobni-haly-provozovny-khs-mereni";
  for (const locale of ["cs", "en", "de"]) {
    const approvalLinks = getRelatedServicesForArticle("Kolaudace haly: měření pro KHS a podklady", approvalArticle, "Pracovní prostředí", locale);
    assert.deepEqual(approvalLinks.map(link => link.href), ["/mereni-pro-kolaudaci", "/sluzby/pracovni-prostredi", "/sluzby/mereni-osvetleni"], "Whole-building inquiry must not be narrowed to noise only or chemical administration");
    assert.equal(new Set(approvalLinks.map(link => link.href)).size, approvalLinks.length);
    assert.ok(!approvalLinks[0].title.startsWith("/"), "The priority link has a customer-facing localized label");
    // Keep the genuinely noise-specific approval article on its specific path.
    const noiseApproval = getRelatedServicesForArticle("Hluk z tepelných čerpadel a VZT před kolaudací", "hluk-z-tepelnych-cerpadel-a-vzt-jednotek-co-resit-pred-kolaudaci", "Hluk a vibrace", locale);
    assert.equal(noiseApproval[0].href, "/mereni-hluku-ke-kolaudaci");
  }
  const noiseLanding = getSeoLanding("mereni-hluku-praha");
  const nextSteps = seoLandings.flatMap(landing => landing.sections.filter(section => section.nextStep).map(section => ({ slug: landing.slug, link: section.nextStep })));
  assert.deepEqual(nextSteps, [{ slug: "mereni-hluku-praha", link: { href: "/sluzby/hlukove-studie", label: "Nabídka hlukových studií" } }]);
  const renderLanding = async locale => renderToStaticMarkup(await DemandLandingLayout({ landing: noiseLanding, locale, schemas: null, contactHref: contactUrl(noiseLanding.contactService), faq: noiseLanding.faq }));
  const landingHtml = await renderLanding("cs");
  assert.equal((landingHtml.match(/data-landing-next-step=/g) || []).length, 1);
  assert.ok(landingHtml.slice(0, landingHtml.indexOf('id="podklady"')).includes('data-landing-next-step="/sluzby/hlukove-studie"'), "Study intent has a visible, direct next step before the detailed content");
  for (const related of noiseLanding.relatedLinks) assert.ok(landingHtml.includes('href="' + related.href + '/"'), "Preserve existing destinations: " + related.href);
  for (const locale of ["en", "de"]) {
    const translatedHtml = await renderLanding(locale);
    assert.ok(!translatedHtml.includes("data-landing-next-step"), "Do not leak the Czech pilot link into translations");
    assert.equal(getPageContentRevision("/mereni-hluku-praha", locale), undefined);
  }
  assert.equal(getPageContentRevision("/mereni-hluku-praha", "cs").toISOString(), "2026-10-29T00:00:00.000Z");
  for (const locale of ["cs", "en", "de"]) {
    for (const product of pcfElettronicaProducts) {
      const route = "/prodej/pcf-elettronica/" + product.slug;
      const pageUrl = "https://www.naturchem.cz" + (locale === "cs" ? "" : "/" + locale) + route + "/";
      const schema = buildSalesCatalogPageSchema({ product, brand: { name: "PCF Elettronica", website: "https://www.pcfelettronica.it/" }, pageUrl });
      assert.equal(schema["@type"], "WebPage");
      assert.equal(schema.url, pageUrl);
      assert.equal(schema.about.name, product.title);
      assert.equal(schema.about.sameAs, product.sourceUrl);
      assert.equal(schema.mentions["@type"], "Brand");
      assert.equal(schema.publisher["@id"], "https://www.naturchem.cz/#organization");
      assert.doesNotMatch(JSON.stringify(schema), /"(?:offers|price|review|aggregateRating)"|"@type":"Product/);
      assert.equal(getPageContentRevision(route, locale).toISOString(), "2026-10-26T00:00:00.000Z");
    }
    for (const route of ["/", "/sluzby/hlukove-studie", "/prodej", "/prodej/pcf-elettronica", "/prodej/pcf-elettronica/missing", "/poradna", "/kontakt"])
      assert.equal(getPageContentRevision(route, locale), undefined, "Do not fake freshness: " + route);
  }
  for (const [slug, id] of [["mereni-vibraci", "kovovyroba-vibrace"], ["mereni-mikroklimatu", "hala-pp"]]) {
    const evidence = getCzechServiceSearchSupport(slug).evidence;
    const example = referenceExamples.find(item => item.id === id);
    const photo = referencePhotographs.find(item => item.exampleId === id);
    const sources = getReferencePhotographSources(photo);
    assert.ok(example.documented && photo.relationship === "case");
    assert.equal(evidence.summary, example.text);
    assert.equal(evidence.output, example.output);
    assert.equal(evidence.photographId, id);
    assert.equal(evidence.referenceHref, "/reference#reference-" + id);
    const content = await getDedicatedService(slug, "cs");
    const body = renderToStaticMarkup(await ServicePage({ ...content, locale: "cs" })).replace(/<script[\s\S]*?<\/script>/g, "");
    assert.ok(body.includes('data-service-reference-photo="' + id + '"'));
    assert.ok(body.includes('src="' + sources.src + '"') && body.includes(escape(photo.alt)));
    const image = body.match(new RegExp('<img[^>]*src="' + sources.src + '"[^>]*>'))[0];
    assert.match(image, /loading="lazy"/);
    assert.match(image, /decoding="async"/);
    assert.match(image, /fetchPriority="low"/i);
    assert.ok(!body.includes("/_next/image"));
    const intent = getServiceInquiryIntent(slug);
    assert.ok(body.includes(escape(intent.quoteBasis)));
    const inquiryHrefs = [...body.matchAll(/href="([^"]*kontakt[^"]*)"/g)].map(match => match[1].replaceAll("&amp;", "&"));
    assert.equal(inquiryHrefs.length, 2);
    for (const href of inquiryHrefs) {
      const url = new URL(href, "https://www.naturchem.cz");
      assert.equal(readContactUrlPrefill(url.search).initialMessage, intent.contactMessage.trim());
      assert.equal(url.hash, "#poptavkovy-formular");
    }
    assert.equal(getPageContentRevision("/sluzby/" + slug, "cs").toISOString(), "2026-10-26T00:00:00.000Z");
    for (const locale of ["en", "de"]) assert.equal(getPageContentRevision("/sluzby/" + slug, locale), undefined);
  }
  assert.ok(!fs.readFileSync(path.join(root, "src/lib/page-content-revisions.ts"), "utf8").includes("Date.now"));
  if (process.argv.includes("--rendered")) {
    for (const locale of ["cs", "en", "de"]) {
      const article = fs.readFileSync(path.join(root, ".next/server/app", locale, "poradna", approvalArticle + ".html"), "utf8");
      const related = article.match(/<section\b[^>]*class="content-block article-related-services"[\s\S]*?<\/section>/)?.[0];
      assert.ok(related, "Approval article retains the related-services region");
      assert.equal(related.match(/href="([^"]+)"/)?.[1], (locale === "cs" ? "" : "/" + locale) + "/mereni-pro-kolaudaci/", "Rendered first link matches the complete approval service");
      assert.ok(related.includes('href="' + (locale === "cs" ? "" : "/" + locale) + '/sluzby/mereni-osvetleni/"'));
    }
    let renderedProducts = 0;
    for (const locale of ["cs", "en", "de"]) for (const product of pcfElettronicaProducts) {
      const html = fs.readFileSync(path.join(root, ".next/server/app", locale, "prodej/pcf-elettronica", product.slug + ".html"), "utf8");
      const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
      assert.doesNotMatch(JSON.stringify(schemas), /"@type":"Product/);
      assert.ok(schemas.some(schema => schema["@type"] === "WebPage" && schema.about?.name && schema.url.endsWith("/" + product.slug + "/")));
      assert.ok(schemas.some(schema => schema["@type"] === "BreadcrumbList"));
      renderedProducts++;
    }
    console.log("PASS rendered inquiry-only catalog:", renderedProducts, "localized product pages, WebPage and breadcrumbs without invalid Product data");
  }
  console.log("PASS search conversion: truthful inquiry-only catalog, exact photo/case pairs, two prefilled service paths and scoped stable sitemap dates");
}
main().catch(error => { console.error(error); process.exitCode = 1; });
