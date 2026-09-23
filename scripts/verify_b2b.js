/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const path = require("node:path");
const fs = require("node:fs");
const os = require("node:os");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const css = { __esModule: true, default: new Proxy({}, { get: (_, name) => String(name) }) };
const link = ({ children, href, ...props }) => {
  const domProps = { ...props };
  delete domProps.scroll;
  return React.createElement("a", { ...domProps, href }, children);
};
const load = require("./lib/load-typescript.js")({
  "./homepage.module.css": css,
  "./count-up-stat.module.css": css,
  "./service-improvements.module.css": css,
  "./header-inquiry-cta.module.css": css,
  "next/link": { __esModule: true, default: link },
  "next/script": { __esModule: true, default: () => null },
  "next/navigation": { usePathname: () => "/" },
  "@/components/CookieConsentBanner": { useCookieConsentState: () => ({ updatedAt: "fixture", marketing: true }) },
  "@/lib/i18n/locale-link": { LocaleLink: link },
  "@/components/PageHeroBand": { PageHeroBand: ({ children }) => React.createElement("section", null, children) },
  "@/components/ServiceEvidence": { ServiceEvidence: () => null },
  "@/components/ServicePoradnaTeaser": { ServicePoradnaTeaser: () => null },
  "@/components/ServiceFaqTeaser": { ServiceFaqTeaser: () => null }
});
const { isChatExcludedPath, canShowTawk } = load(path.join(root, "src/lib/chat-visibility.ts"));
const { splitMobileServiceLinks } = load(path.join(root, "src/lib/mobile-service-links.ts"));
const { MobileServiceMegaGroups } = load(path.join(root, "src/components/ServiceMegaMenu.tsx"));
const { ServiceEvidence } = load(path.join(root, "src/components/ServiceEvidence.tsx"));
const { heroThemeForArticle } = load(path.join(root, "src/lib/poradna-topic.ts"));
const { getHeroImageSrc } = load(path.join(root, "src/lib/hero-images.ts"));
const { homeArticleTitle } = load(path.join(root, "src/lib/home-article-titles.ts"));
const { ServicePage } = load(path.join(root, "src/components/ServicePage.tsx"));
const { HomeServiceIndex } = load(path.join(root, "src/components/HomeServiceIndex.tsx"));
const { HomeDemandPaths } = load(path.join(root, "src/components/HomeDemandPaths.tsx"));
const { serviceMegaGroups } = load(path.join(root, "src/lib/service-megamenu.ts"));
const { localesForConstrainedPath } = load(path.join(root, "src/lib/locale-constrained-paths.ts"));
const { stripLocaleFromPathname } = load(path.join(root, "src/lib/i18n/navigation.ts"));
const { HomeHeroShell } = load(path.join(root, "src/components/HomeHeroShell.tsx"));
const { HeaderInquiryCta } = load(path.join(root, "src/components/HeaderInquiryCta.tsx"));
const { CountUpStatValue } = load(path.join(root, "src/components/CountUpStatValue.tsx"));
const { TawkToChat } = load(path.join(root, "src/components/TawkToChat.tsx"));
const { verifyImmutableAssets, hash } = require("./verify_immutable_assets.js");

async function main() {
  const homepageSource = fs.readFileSync(path.join(root, "src/app/[locale]/page.tsx"), "utf8");
  assert.ok(!homepageSource.includes("HomeProof") && !homepageSource.includes("/team/"), "Homepage should not contain the rejected director profile block");
  const pendingViewportChat = renderToStaticMarkup(React.createElement(TawkToChat));
  assert.ok(pendingViewportChat.includes('data-tawk-suppressed="true"'), "Suppress loaded vendor frames until the desktop viewport is known");
  assert.ok(fs.readFileSync(path.join(root, "src/app/globals.css"), "utf8").includes("body:has([data-tawk-suppressed])"), "Keep fallback protection against a vendor reopening a hidden widget");
  assert.deepEqual(serviceMegaGroups.map(group => group.links.length), [8, 8, 8], "Czech service menu must have three balanced columns");
  const menuLinks = serviceMegaGroups.flatMap(group => group.links.map(link => link.href));
  assert.ok(!menuLinks.includes("/mereni-pro-kolaudaci") && !menuLinks.includes("/mereni-nove-haly"), "Campaign links should stay outside the service megamenu");
  for (const prefix of ["", "/cs", "/en", "/de"]) {
    for (const end of ["", "/"]) {
      assert.equal(isChatExcludedPath(prefix + "/" + end), false);
      assert.equal(isChatExcludedPath(prefix + "/kontakt" + end), true);
      for (const mobile of [true, false, null]) {
        for (const consent of [true, false]) {
          assert.equal(canShowTawk(prefix + "/" + end, mobile, consent), mobile === false && consent);
          assert.equal(canShowTawk(prefix + "/kontakt" + end, mobile, consent), false);
        }
      }
    }
    assert.equal(isChatExcludedPath(prefix + "/sluzby/mereni-hluku/"), false);
  }
  for (const locale of ["cs", "en", "de"]) {
    const prefix = locale === "cs" ? "" : "/" + locale;
    const menuModule = load(path.join(root, `src/lib/service-megamenu${locale === "cs" ? "" : "-" + locale}.ts`));
    const localizedGroups = menuModule[locale === "cs" ? "serviceMegaGroups" : locale === "en" ? "serviceMegaGroupsEn" : "serviceMegaGroupsDe"];
    const mobile = splitMobileServiceLinks(localizedGroups);
    assert.equal(mobile.direct.length, 6);
    const regrouped = [...mobile.direct, ...mobile.remaining.flatMap(group => group.links)].map(item => item.href);
    assert.deepEqual([...regrouped].sort(), localizedGroups.flatMap(group => group.links.map(item => item.href)).sort(), "Mobile links must not be lost or duplicated");
    const menu = renderToStaticMarkup(React.createElement(MobileServiceMegaGroups, { groups: localizedGroups }));
    for (const item of mobile.direct) {
      assert.ok(menu.indexOf(`href="${item.href}"`) < menu.indexOf("<details"), "Core services must be accessible before category accordions");
    }
    const evidence = renderToStaticMarkup(await ServiceEvidence({ locale, slug: "sluzby/pracovni-prostredi" }));
    assert.ok(evidence.includes(prefix + "/reference/#pracovni-prostredi"));
    const labels = require(path.join(root, "messages", locale + ".json")).header;
    for (const className of ["button nav-cta-desktop", "button nav-cta-mobile", "button nav-mobile-cta"]) {
      const cta = renderToStaticMarkup(React.createElement(HeaderInquiryCta, { labels, className }));
      assert.equal((cta.match(/<a /g) || []).length, 1, "Keep one inquiry link per header variant");
      // LocaleLink is mocked as an anchor, without URL localization or normalization.
      assert.ok(cta.includes('href="/kontakt#poptavkovy-formular"'));
      assert.ok(cta.includes(labels.cta) && cta.includes(labels.responseTime));
      assert.ok(cta.indexOf("data-header-inquiry-response") < cta.indexOf("</a>"));
    }
    const html = renderToStaticMarkup(await ServicePage({
      locale, slug: "sluzby/mereni-hluku", title: "Noise fixture", intro: "Synthetic test only",
      contactService: "Měření hluku", scope: Array.from({ length: 7 }, (_, i) => "SCOPE-" + i),
      whenNeeded: Array.from({ length: 6 }, (_, i) => "WHEN-" + i),
      outputs: Array.from({ length: 5 }, (_, i) => "OUTPUT-" + i),
      docs: Array.from({ length: 5 }, (_, i) => "DOC-" + i),
      practicalSituations: Array.from({ length: 5 }, (_, i) => "PRACTICE-" + i)
    }));
    for (const [key, count] of [["SCOPE", 7], ["WHEN", 6], ["OUTPUT", 5], ["DOC", 5], ["PRACTICE", 5]]) {
      for (let i = 0; i < count; i++) assert.ok(html.includes(key + "-" + i), key + " item lost");
    }
    const contacts = [...html.matchAll(/href="([^"]*kontakt[^"]*)"/g)].map(m => m[1]);
    assert.ok(contacts.length >= 2);
    for (const href of contacts) {
      assert.ok(href.startsWith(prefix + "/kontakt/"), href);
      assert.ok(href.includes("service=") && href.endsWith("#poptavkovy-formular"), href);
    }
    const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map(m => JSON.parse(m[1]));
    const list = schemas.find(s => s["@type"] === "ItemList");
    assert.ok(list && list.itemListElement.length > 3);
    for (const item of list.itemListElement) {
      const pathname = new URL(item.url).pathname;
      assert.ok(html.includes('href="' + pathname + '"'), "Schema link absent from visible HTML: " + pathname);
    }
    const index = renderToStaticMarkup(React.createElement(HomeServiceIndex, { locale }));
    assert.equal((index.match(/<h3>/g) || []).length, 6);
    assert.equal((index.match(/<img\b/g) || []).length, 3, "Three measurement photos must remain visible");
    assert.equal((index.match(/<svg\b/g) || []).length, 3, "Three study graphics must remain visible");
    assert.ok(!index.includes("/_next/image"), "Homepage media must use static assets");
    for (const image of index.matchAll(/<img\b[^>]*src="([^"]+)"/g)) {
      assert.ok(fs.existsSync(path.join(root, "public", image[1])), "Missing measurement image: " + image[1]);
      assert.ok(image[1].endsWith("-card.webp"), "Preserve Cursor's lightweight service-card assets");
      assert.ok(fs.statSync(path.join(root, "public", image[1])).size < 20000, "Service-card image exceeded its 20 KB budget");
    }
    assert.equal((index.match(/fetchPriority="low"/g) || []).length, 3, "Card images must not compete with the hero LCP");
    assert.ok(index.includes('href="' + prefix + '/sluzby/mereni-hluku/"'));
    assert.ok(index.includes('href="' + prefix + '/sluzby/pracovni-prostredi/"'));
    const demand = renderToStaticMarkup(React.createElement(HomeDemandPaths, { locale }));
    assert.ok(!demand.includes("<p>"), "Situations should not return to paragraph-heavy cards");
    for (const match of demand.matchAll(/href="([^"]+)"/g)) {
      const pathname = stripLocaleFromPathname(new URL(match[1], "https://www.naturchem.cz").pathname);
      const available = localesForConstrainedPath(pathname);
      assert.ok(!available || available.includes(locale), "Unavailable localized campaign URL: " + match[1]);
    }
  }
  const articleSlugs = ["kolaudace-vyrobni-haly-provozovny-khs-mereni", "vyjmenovany-stacionarni-zdroj-povoleni-provozu"];
  const articleImages = articleSlugs.map(slug => getHeroImageSrc(heroThemeForArticle({ slug, title: "Fixture" })));
  assert.equal(new Set(articleImages).size, 2, "Latest articles need distinct illustrations");
  for (const src of articleImages) {
    assert.ok(fs.existsSync(path.join(root, "public", src)));
    assert.ok(fs.existsSync(path.join(root, "public", src.replace(/\.webp$/, "-640.webp"))));
    assert.notEqual(src, getHeroImageSrc("mereni-emisi"));
  }
  assert.equal(heroThemeForArticle({ title: "Fixture", topic: "Pracovní prostředí" }), "pracovni-prostredi");
  assert.equal(heroThemeForArticle({ title: "Fixture", topic: "Rozptylové studie" }), "rozptylove-studie");
  assert.equal(homeArticleTitle({ slug: articleSlugs[0], title: "Full title" }, "en"), "Full title");
  assert.equal(homeArticleTitle({ slug: "unmapped", title: "Full title" }, "cs"), "Full title");
  const hero = renderToStaticMarkup(React.createElement(HomeHeroShell, {
    locale: "cs", credential: "Fixture", ariaLabel: "Hero", pillarsAriaLabel: "Services",
    pillars: [{ id: "noise", label: "Noise", href: "/sluzby/mereni-hluku" }],
    initialPhoto: null
  }, React.createElement("h1", null, "Fixture")));
  assert.ok(hero.includes("/sluzby/mereni-hluku/"));
  assert.ok(!/role="tab|tabindex="-1"/.test(hero));
  const count = renderToStaticMarkup(React.createElement(CountUpStatValue, { value: "14 000+" }));
  assert.ok(count.includes('class="sr-only">14 000+</span>'));
  assert.ok(count.includes('class="reserve" aria-hidden="true"'));

  const temp = fs.mkdtempSync(path.join(os.tmpdir(), "naturchem-immutable-test-"));
  try {
    fs.writeFileSync(path.join(temp, "fixture.bin"), "published");
    const baseline = { "/fixture.bin": hash(Buffer.from("published")) };
    assert.equal(verifyImmutableAssets(temp, baseline), 1);
    fs.writeFileSync(path.join(temp, "fixture.bin"), "replacement");
    assert.throws(() => verifyImmutableAssets(temp, baseline), /versioned filename/);
  } finally { fs.rmSync(temp, { recursive: true }); }
  assert.equal(hash(Buffer.from("<svg>\r\n</svg>"), "/x.svg"), hash(Buffer.from("<svg>\n</svg>"), "/x.svg"));
  console.log("PASS B2B: CS/EN/DE inquiry links, complete service content, schema/links, service index, hero, counters, chat and immutable cache protection");
}
main().catch(error => { console.error(error); process.exitCode = 1; });
