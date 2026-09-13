/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const base = new URL(process.argv[2] || "http://127.0.0.1:3108");
assert.ok(["localhost", "127.0.0.1", "[::1]"].includes(base.hostname), "Preview checks are local-only");
const services = ["mereni-emisi", "mereni-hluku", "pracovni-prostredi", "hlukove-studie", "rozptylove-studie", "eia-posudky-poradenstvi"];
const article = "vyzva-khs-mereni-pracovniho-prostredi";
const clean = text => text.replace(/&amp;/g, "&");
async function get(path) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, path);
  return response.text();
}
async function main() {
  let pages = 0;
  for (const locale of ["cs", "en", "de"]) {
    const prefix = locale === "cs" ? "" : "/" + locale;
    for (const path of [prefix + "/", prefix + "/kontakt/", ...services.map(s => prefix + "/sluzby/" + s + "/")]) {
      const html = await get(path);
      const footer = html.match(/<footer\b[^>]*class="site-footer"[^>]*>(.*?)<\/footer>/s)?.[1] || "";
      const featured = [...footer.matchAll(/<a\b[^>]*class="footer-key-link"[^>]*href="([^"]+)"/g)].map(m => clean(m[1]));
      assert.deepEqual(featured, [prefix + "/akreditace-autorizace-dokumenty/", prefix + "/dotaznik-spokojenosti/"], "Footer highlights must keep localized destinations: " + path);
      for (const href of featured) assert.equal([...footer.matchAll(/<a\b[^>]*href="([^"]+)"/g)].filter(m => clean(m[1]) === href).length, 1, "Duplicate footer highlight: " + href);
      assert.equal((html.match(/<h1\b/g) || []).length, 1, path + " must have one H1");
      assert.ok(html.includes('<html lang="' + locale + '"'), path + " language");
      assert.ok(html.includes('rel="canonical" href="https://www.naturchem.cz' + path + '"'), path + " canonical");
      assert.ok(!/name="robots" content="[^"]*noindex/.test(html), path + " noindex");
      const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)];
      assert.ok(schemas.length >= 3, path + " structured data missing");
      for (const match of schemas) JSON.parse(match[1]);
      const links = [...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(m => clean(m[1]));
      for (const href of links.filter(h => h.includes("/kontakt/") && h.includes("service="))) {
        assert.ok(href.startsWith(prefix + "/kontakt/"), "Wrong inquiry language: " + href);
      }
      if (path === prefix + "/") {
        assert.ok(html.includes('class="nav-links nav-desktop"'), "Navigation absent from server HTML");
        assert.ok(html.includes("1599") && html.includes("17025"), "Accreditation missing");
        assert.ok(!html.includes('id="home-evidence-heading"') && !html.includes('id="home-project-flow-heading"'), "Removed homepage sections returned");
        const articles = html.match(/<section[^>]*aria-labelledby="home-poradna-heading"[^>]*>(.*?)<\/section>/s)?.[1] || "";
        const images = [...articles.matchAll(/<img\b[^>]*>/g)];
        assert.equal(images.length, 3, "Homepage articles must have three image previews");
        for (const [tag] of images) {
          assert.ok(tag.includes('loading="lazy"') && tag.includes('width=') && tag.includes('height='), "Article image must reserve space and load lazily");
          const src = clean(tag.match(/src="([^"]+)"/)?.[1] || "");
          assert.ok(src.startsWith("/") && !src.startsWith("//") && !src.includes("/_next/image"), "Expected a static local article image");
          const image = await fetch(new URL(src, base));
          assert.equal(image.status, 200, "Missing article image: " + src);
          assert.ok(image.headers.get("content-type")?.startsWith("image/"), "Unexpected article image content type");
        }
        if (locale === "cs") assert.ok(html.includes("/poradna/" + article + "/"), "Due article missing from homepage");
      }
      pages++;
    }
  }
  await get("/poradna/" + article + "/");
  for (const path of ["/poradna/", "/sitemap.xml", "/search/poradna-cs.json", "/llms-articles.txt"]) {
    assert.ok((await get(path)).includes(article), "Due article missing from " + path);
  }
  const state = JSON.parse(await get("/publication-state.json"));
  assert.ok(state.articles.some(a => a.slug === article && a.locale === "cs"));
  console.log(`PASS local production preview: ${pages} CS/EN/DE pages (H1, language, canonical, JSON-LD, localized inquiry links), SSR navigation and due article in all publication surfaces`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
