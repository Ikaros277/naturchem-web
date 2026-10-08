/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const css = { __esModule: true, default: new Proxy({}, { get: (_, name) => String(name) }) };
const load = require("./lib/load-typescript.js")({
  "./service-detail.module.css": css,
  "@/components/HeroPhoto": { HeroPhoto: () => React.createElement("img", { src: "/fixture.webp", alt: "" }) },
  "next/link": { __esModule: true, default: ({ children, href }) => React.createElement("a", { href }, children) },
  "next/navigation": { usePathname: () => "/" }
});
const { ServicePage } = load(path.join(root, "src/components/ServicePage.tsx"));
const { getDedicatedService } = load(path.join(root, "src/lib/i18n/service-pages.ts"));
const { readContactUrlPrefill } = load(path.join(root, "src/lib/contact-url-prefill.ts"));
const { isValidContactService } = load(path.join(root, "src/lib/contact-services.ts"));

async function main() {
  for (const [slug, serviceName] of [
    ["mereni-mikroklimatu", "Měření mikroklimatu"],
    ["mereni-vibraci", "Měření vibrací"]
  ]) {
    const cs = await getDedicatedService(slug, "cs");
    assert.equal(cs.slug, "sluzby/" + slug, "Keep indexed URLs");
    assert.equal(cs.contactService, serviceName);
    assert.ok(isValidContactService(cs.contactService));
    assert.equal(cs.faqItems.length, 3, "Short, relevant answers instead of five generic questions");
    const html = renderToStaticMarkup(await ServicePage({ ...cs, locale: "cs" }));
    const body = html.replace(/<script[\s\S]*?<\/script>/g, "");
    assert.equal((body.match(/<h1\b/g) || []).length, 1);
    assert.ok(body.includes(cs.title));
    assert.ok(!body.includes("Co je riziková práce?"), "Do not repeat unrelated category FAQ");
    const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)]
      .map(match => JSON.parse(match[1]));
    const faq = schemas.find(schema => schema["@type"] === "FAQPage");
    assert.equal(faq.mainEntity.length, cs.faqItems.length);
    for (const [i, item] of cs.faqItems.entries()) {
      assert.ok(body.includes(item.q) && body.includes(item.paragraphs[0]));
      assert.equal(faq.mainEntity[i].name, item.q);
      assert.equal(faq.mainEntity[i].acceptedAnswer.text, item.paragraphs.join("\n\n"));
    }
    assert.equal(schemas.find(schema => schema["@type"] === "Service").url,
      "https://www.naturchem.cz/sluzby/" + slug + "/");
    assert.equal(schemas.find(schema => schema["@type"] === "BreadcrumbList").itemListElement[1].item,
      "https://www.naturchem.cz/sluzby/", "Use the canonical service directory in breadcrumbs");
    const inquiries = [...body.matchAll(/href="([^"]*kontakt[^"]*)"/g)].map(match => match[1]);
    assert.equal(inquiries.length, 2, "Keep the compact inquiry path");
    for (const href of inquiries) {
      const url = new URL(href, "https://www.naturchem.cz");
      assert.deepEqual(readContactUrlPrefill(url.search).initialServices, [serviceName]);
      assert.equal(url.hash, "#poptavkovy-formular");
    }
    for (const locale of ["en", "de"]) {
      const translated = await getDedicatedService(slug, locale);
      assert.equal(translated.faqItems, undefined, "Do not leak Czech answers into other languages");
      const translatedHtml = renderToStaticMarkup(await ServicePage({ ...translated, locale }));
      assert.ok(!translatedHtml.includes(cs.faqItems[0].q));
      assert.ok(translatedHtml.includes('"@type":"FAQPage"'), "Existing localized category FAQ remains");
      const translatedBreadcrumb = [...translatedHtml.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)]
        .map(match => JSON.parse(match[1])).find(schema => schema["@type"] === "BreadcrumbList");
      assert.equal(translatedBreadcrumb.itemListElement[1].item,
        "https://www.naturchem.cz/" + locale + "/sluzby/");
    }
  }
  const article = fs.readFileSync(path.join(root, "content/articles/mereni-mikroklimatu-na-pracovisti-teplota-vlhkost-a-proudeni-vzduchu.md"), "utf8");
  assert.ok(article.includes("[Měření mikroklimatu na pracovišti](/sluzby/mereni-mikroklimatu/)"));
  assert.ok(article.includes('publishedAt: "2026-06-16"'), "Do not falsely refresh publication dates");
  console.log("PASS service search intent: Czech-specific answers, matching JSON-LD, indexed URLs, exact inquiry context and localized fallback");
}
main().catch(error => { console.error(error); process.exitCode = 1; });
