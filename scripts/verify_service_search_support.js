/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const inlineSlugs = new Set(["mereni-emisi", "mereni-hluku", "rozptylove-studie", "pracovni-prostredi"]);
const load = require("./lib/load-typescript.js")({
  "./service-detail.module.css": { __esModule: true, default: new Proxy({}, { get: (_, name) => String(name) }) },
  "@/app/globals.css": {},
  "@/app/services.generated.css": {},
  "@/components/HeroPhoto": { HeroPhoto: () => React.createElement("img", { src: "/fixture.webp", alt: "" }) },
  "next/link": { __esModule: true, default: ({ children, href }) => React.createElement("a", { href }, children) },
  "next/navigation": { usePathname: () => "/" },
  "@/lib/render-inline-service-page": { createInlineServicePageExports: (_, content) => ({ Page: () => content }) }
});
const { ServicePage } = load(path.join(root, "src/components/ServicePage.tsx"));
const { getDedicatedService } = load(path.join(root, "src/lib/i18n/service-pages.ts"));
const { czechServiceSearchSupport } = load(path.join(root, "src/lib/service-search-support.ts"));
const { readContactUrlPrefill } = load(path.join(root, "src/lib/contact-url-prefill.ts"));
const { normalizeBreadcrumbJsonLd } = load(path.join(root, "src/lib/breadcrumb-jsonld.ts"));
const { localizeHref } = load(path.join(root, "src/lib/i18n/navigation.ts"));
const escape = value => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");

async function main() {
  assert.equal(Object.keys(czechServiceSearchSupport).length, 22, "Existing commercial support plus two documented measurement scopes");
  for (const [slug, support] of Object.entries(czechServiceSearchSupport)) {
    const content = inlineSlugs.has(slug)
      ? load(path.join(root, "src/app/[locale]/sluzby", slug, "page.tsx")).default()
      : await getDedicatedService(slug, "cs");
    const html = renderToStaticMarkup(await ServicePage({ ...content, locale: "cs" }));
    const body = html.replace(/<script[\s\S]*?<\/script>/g, "");
    assert.equal((body.match(/<h1\b/g) || []).length, 1);
    const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]));
    assert.equal(schemas.find(schema => schema["@type"] === "Service").url, "https://www.naturchem.cz/sluzby/" + slug + "/");
    const expectedFaq = content.faqItems ?? support.faqItems;
    if (expectedFaq) {
      assert.equal(expectedFaq.length, 3, "Short service-specific FAQ");
      const schemaFaq = schemas.find(schema => schema["@type"] === "FAQPage");
      assert.equal(schemaFaq.mainEntity.length, expectedFaq.length);
      for (const [index, item] of expectedFaq.entries()) {
        assert.ok(body.includes(escape(item.q)));
        for (const paragraph of item.paragraphs) assert.ok(body.includes(escape(paragraph)), slug);
        assert.equal(schemaFaq.mainEntity[index].acceptedAnswer.text, item.paragraphs.join("\n\n"));
        for (const link of item.links ?? []) assert.ok(body.includes('href="' + escape(localizeHref(link.href, "cs")) + '"'), "FAQ links must be visible, not lost in the data: " + slug);
      }
    }
    for (const item of schemas.find(schema => schema["@type"] === "BreadcrumbList").itemListElement) {
      assert.ok(!new URL(item.item).pathname.includes("//"), "Canonical breadcrumb paths");
    }
    const inquiries = [...body.matchAll(/href="([^"]*kontakt[^"]*)"/g)].map(match => match[1].replace(/&amp;/g, "&"));
    assert.equal(inquiries.length, 2, "Do not add more inquiry buttons");
    for (const href of inquiries) {
      const url = new URL(href, "https://www.naturchem.cz");
      const prefill = readContactUrlPrefill(url.search);
      assert.ok(prefill.initialServices.length, "Valid existing form option");
      assert.equal(url.hash, "#poptavkovy-formular");
      if (slug === "mereni-osvetleni") assert.deepEqual(prefill.initialServices, ["Měření osvětlení"]);
      if (support.contactMessage) assert.equal(prefill.initialMessage, support.contactMessage.trim());
    }
    assert.equal(body.includes("data-service-evidence"), Boolean(support.evidence));
    if (support.evidence) {
      assert.ok(body.includes(escape(support.evidence.summary)));
      assert.ok(body.includes(escape(support.evidence.output)));
    }
    for (const locale of ["en", "de"]) {
      const localized = inlineSlugs.has(slug)
        ? load(path.join(root, "src/lib/inline-service-pages-" + locale + ".ts")).inlineServicePagesEn[slug]
        : await getDedicatedService(slug, locale);
      const localizedHtml = renderToStaticMarkup(await ServicePage({ ...localized, locale }));
      assert.ok(!localizedHtml.includes("data-service-evidence"), "Do not leak untranslated cases");
      assert.ok(!localizedHtml.includes("Z naší praxe"));
      if (support.faqItems) assert.ok(!localizedHtml.includes(escape(support.faqItems[0].q)));
    }
  }
  assert.ok(czechServiceSearchSupport["ghg-overovani"].faqItems[2].paragraphs[0].includes("neposkytujeme nezávislé akreditované ověření"));
  assert.ok(czechServiceSearchSupport["bezpecnostni-listy"].faqItems[0].paragraphs[0].includes("nové bezpečnostní listy"));
  assert.ok(!fs.readFileSync(path.join(root, "src/lib/team.ts"), "utf8").includes("ověřování emisí skleníkových"), "Do not imply an unconfirmed GHG authorization in the team profile");
  for (const [locale, exclusion] of [
    ["cs", "Nezajišťujeme nezávislé akreditované ověření"],
    ["en", "We do not provide independent accredited verification"],
    ["de", "Eine unabhängige akkreditierte Verifizierung"]
  ]) {
    const faqModule = load(path.join(root, "src/lib/faq" + (locale === "cs" ? "" : "-" + locale) + ".ts"));
    const question = faqModule.faqCategories.flatMap(category => category.items)
      .find(item => item.links?.some(link => link.href === "/sluzby/ghg-overovani"));
    assert.ok(question?.paragraphs.join(" ").includes(exclusion), "The confirmed GHG scope must also match the main FAQ: " + locale);
  }
  const original = { "@type": "BreadcrumbList", itemListElement: [{ item: "https://www.naturchem.cz//sluzby/?ref=//keep#part" }, { item: "https://example.com//keep" }] };
  const normalized = normalizeBreadcrumbJsonLd(original);
  assert.equal(normalized.itemListElement[0].item, "https://www.naturchem.cz/sluzby/?ref=//keep#part");
  assert.equal(normalized.itemListElement[1].item, original.itemListElement[1].item);
  assert.equal(original.itemListElement[0].item, "https://www.naturchem.cz//sluzby/?ref=//keep#part", "Do not mutate source data");
  const service = { "@type": "Service", url: "https://www.naturchem.cz//keep" };
  assert.equal(normalizeBreadcrumbJsonLd(service), service);
  const supportSource = fs.readFileSync(path.join(root, "src/lib/service-search-support.ts"), "utf8");
  const archiveSource = fs.readFileSync(path.join(root, "src/lib/archived-practice.ts"), "utf8");
  assert.ok(!/\b[A-Z]:[/\\]|\b20\d{5}\b|\/ARCHIV\/|\.pdf\b|ISPOP_\d+|@/i.test(supportSource.replaceAll("@/lib/", "") + archiveSource), "No private paths, job IDs, source PDFs, email addresses or system IDs; client attribution needs separate approval");
  const { archivedPractice, practiceNote } = load(path.join(root, "src/lib/archived-practice.ts"));
  assert.equal(Object.keys(archivedPractice).length, 11);
  assert.equal(Object.values(czechServiceSearchSupport).filter(item => item.evidence).length, 19);
  for (const key of Object.keys(archivedPractice)) {
    const note = practiceNote(key);
    assert.ok(note.summary.length < 260, "Keep practice notes compact");
    assert.ok(note.output.length < 100);
    assert.ok(!/získali jsme povolení|schválen|úspora|garant/i.test(note.summary + note.output), "No unsupported approval or business outcome");
  }
  for (const locale of ["cs", "en", "de"]) {
    const reference = load(path.join(root, "src/lib/reference-content" + (locale === "cs" ? "" : "-" + locale) + ".ts"));
    const groupModule = load(path.join(root, "src/lib/reference-example-groups" + (locale === "cs" ? "" : "-" + locale) + ".ts"));
    const groups = locale === "cs" ? groupModule.referenceExampleGroups : groupModule.referenceExampleGroupsEn;
    const examples = reference.referenceExamples;
    assert.equal(examples.length, locale === "cs" ? 25 : 16, "CS adds one separately documented hand-tool vibration case; translated case counts stay unchanged");
    const ids = groups.flatMap(group => group.exampleIds);
    assert.equal(new Set(ids).size, ids.length, "Each case belongs to one reference group, not several projects");
    assert.deepEqual([...ids].sort(), examples.map(item => item.id).sort(), "Every reference is reachable");
    const ghg = examples.find(item => item.id === "ghg-overovani");
    assert.ok(ghg.text.includes(locale === "cs" ? "Nejde o akreditované" : locale === "en" ? "not accredited EU ETS" : "keine akkreditierte EU-ETS"), "No misleading verification reference");
    const { toReferenceExampleListing } = load(path.join(root, "src/lib/reference-example-listing.ts"));
    for (const example of examples) {
      const listing = toReferenceExampleListing(example);
      assert.equal(listing.output, example.documented ? example.output : undefined, "Only checked work products get an output label");
    }
    if (locale === "cs") {
      for (const item of Object.values(archivedPractice)) {
        const referenceItem = examples.find(example => example.id === item.id);
        assert.equal(referenceItem.text, item.summary);
        assert.equal(referenceItem.output, item.output, "Service and reference must share the same facts");
      }
    }
  }
  console.log("PASS service support: 22 pages, 19 compact evidence notes, 11 additional documented cases, consistent references, truthful scope and preserved inquiry/SEO context");
}
main().catch(error => { console.error(error); process.exitCode = 1; });
