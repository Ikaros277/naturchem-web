/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const zlib = require("node:zlib");
const postcss = require("postcss");
const { collectUsage, compactStyles, keepSelector, sourceFiles, sourceFile, outputFile, serviceOutputFile } = require("./generate_runtime_styles");

const usage = collectUsage();
const source = fs.readFileSync(sourceFile, "utf8");
const output = fs.readFileSync(outputFile, "utf8");
const serviceUsage = collectUsage("services");
const serviceOutput = fs.readFileSync(serviceOutputFile, "utf8");
assert.equal(serviceOutput, "/* Generated from globals.css; edit the source, not this file. */\n" + compactStyles(source, serviceUsage) + "\n");
assert.ok(Buffer.byteLength(serviceOutput) < Buffer.byteLength(source) * .5, "Services omit unrelated page styles, not required rules");
assert.equal(output, "/* Generated from globals.css; edit the source, not this file. */\n" + compactStyles(source, usage) + "\n");
assert.ok(Buffer.byteLength(output) < Buffer.byteLength(source) * .4, "Homepage shell must omit unrelated page styles");
const localeRoot = path.resolve(__dirname, "../src/app/[locale]");
for (const file of sourceFiles(localeRoot).filter(file => file.endsWith(path.sep + "page.tsx"))) {
  if (file === path.join(localeRoot, "page.tsx")) continue;
  const isService = file.startsWith(path.join(localeRoot, "sluzby") + path.sep);
  const expected = isService ? '@/app/services.generated.css' : '@/app/globals.css';
  assert.ok(fs.readFileSync(file, "utf8").includes('import "' + expected + '"'), "Every page retains its verified stylesheet: " + file);
}
for (const name of ["nav-mobile-sheet", "nav-mega-panel", "cookie-consent-panel", "footer-key-link", "button", "hero-photo-img"]) {
  assert.ok(usage.tokens.has(name) && output.includes("." + name), "Preserve " + name);
  assert.ok(serviceUsage.tokens.has(name) && serviceOutput.includes("." + name), "Services preserve shared shell " + name);
}
for (const selector of [".mega-menu-column--docs", ".is-open", ".leaflet-control", ".button:not(.obsolete)", ":where(.future)"]) {
  assert.ok(keepSelector(selector, usage), "Preserve dynamic/negative selector: " + selector);
}
const fixtureUsage = { tokens: new Set(["button", "nav"]), prefixes: ["nav--"] };
const fixture = compactStyles(".button,.obsolete {color:red}.nav:hover{color:blue}@media(max-width:600px){.nav--open{display:block}.unused{display:none}}", fixtureUsage);
assert.ok(!fixture.includes(".obsolete") && !fixture.includes(".unused"));
assert.ok(fixture.includes(".button") && fixture.includes(".nav--open"));

// Any original selector applicable to server-rendered classes must still exist.
if (process.argv.includes("--rendered")) {
  const directory = path.resolve(__dirname, "../.next/server/app");
  function htmlFiles(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
      const file = path.join(dir, entry.name);
      return entry.isDirectory() ? htmlFiles(file) : entry.name.endsWith(".html") ? [file] : [];
    });
  }
  for (const [kind, sheet] of [["homepage", output], ["services", serviceOutput]]) {
    const classes = new Set();
    const pages = htmlFiles(directory).filter(file => kind === "homepage"
      ? /(?:^|[\\/])(?:cs|en|de)\.html$/.test(file)
      : /[\\/](?:cs|en|de)[\\/]sluzby(?:[\\/]|\.html$)/.test(file));
    assert.ok(pages.length >= (kind === "homepage" ? 3 : 70), "Check every service locale, not just one sample");
    for (const file of pages) {
      for (const match of fs.readFileSync(file, "utf8").matchAll(/\bclass="([^"]+)"/g)) {
        for (const name of match[1].split(/\s+/)) classes.add(name);
      }
    }
    const keptSelectors = new Set();
    const missingSelectors = [];
    postcss.parse(sheet).walkRules(rule => rule.selectors.forEach(selector => keptSelectors.add(selector)));
    postcss.parse(source).walkRules(rule => {
      for (const selector of rule.selectors) {
        const names = [...selector.matchAll(/\.([A-Za-z_][A-Za-z0-9_-]*)/g)].map(match => match[1]);
        if (names.length && names.every(name => classes.has(name))) {
          if (!keptSelectors.has(selector)) missingSelectors.push(selector);
        }
      }
    });
    assert.deepEqual(missingSelectors, [], "All rendered " + kind + " selectors must be retained");
    console.log("PASS " + kind + " CSS coverage: " + pages.length + " pages /" + classes.size + " server-rendered classes");
  }
  for (const route of ["cs", "en", "de", "cs/kontakt", "cs/sluzby", "cs/sluzby/mereni-emisi", "cs/sluzby/mereni-osvetleni", "cs/poradna"]) {
    const html = fs.readFileSync(path.join(directory, route + ".html"), "utf8");
    const stylesheets = [...new Set([...html.matchAll(/href="(\/_next\/static\/[^"\s]+\.css)"/g)].map(match => match[1]))];
    const gzip = stylesheets.reduce((sum, url) => sum + zlib.gzipSync(fs.readFileSync(path.resolve(__dirname, "../.next", url.slice("/_next/".length)))).length, 0);
    const limit = route.includes("/sluzby") ? 22000 : (route.includes("/") ? 35000 : 18000);
    assert.ok(gzip < limit, "CSS transfer budget for " + route + ": " + gzip + " B");
  }
}
console.log("PASS runtime CSS: exact regeneration, dynamic states, selector order and obsolete-style budget");
