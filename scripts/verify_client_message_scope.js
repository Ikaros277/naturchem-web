/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const load = require("./lib/load-typescript")();
const { pickGlobalClientMessages } = load(path.join(root, "src/lib/i18n/client-messages.ts"));
const { LocaleProvider, ScopedMessagesProvider, useLocale, useTranslations } = load(path.join(root, "src/lib/i18n/locale-context.tsx"));
const globalKeys = ["accordion", "common", "cookies", "footer", "language"];
const routeKeys = ["contact", "contactForm", "satisfactionSurvey", "poradna", "caseStudies", "equipment", "sectorsIndex"];

function TranslationProbe({ namespace }) {
  const translated = useTranslations(namespace);
  return React.createElement("span", { "data-namespace": namespace }, JSON.stringify(translated));
}

function Probe({ namespaces }) {
  const locale = useLocale();
  return React.createElement("span", { lang: locale }, namespaces.map(namespace => React.createElement(TranslationProbe, { key: namespace, namespace })));
}

for (const locale of ["cs", "en", "de"]) {
  const all = require(path.join(root, "messages", locale + ".json"));
  const global = pickGlobalClientMessages(all);
  assert.deepEqual(Object.keys(global).sort(), globalKeys, "Only shared UI belongs in every document");
  assert.ok(Buffer.byteLength(JSON.stringify(global)) < 3500, "Keep shared client messages small");
  for (const key of globalKeys) assert.deepEqual(global[key], all[key], "Never rewrite translated UI text");
  for (const namespace of routeKeys) {
    const expected = renderToStaticMarkup(React.createElement(LocaleProvider, { locale, messages: all }, React.createElement(Probe, { namespaces: [...globalKeys, namespace] })));
    const actual = renderToStaticMarkup(React.createElement(LocaleProvider, { locale, messages: global },
      React.createElement(ScopedMessagesProvider, { messages: { [namespace]: all[namespace] } }, React.createElement(Probe, { namespaces: [...globalKeys, namespace] }))));
    assert.equal(actual, expected, "Scoped text and locale must equal the former full provider: " + locale + "/" + namespace);
    assert.throws(() => renderToStaticMarkup(React.createElement(LocaleProvider, { locale, messages: global }, React.createElement(Probe, { namespaces: [namespace] }))), /Missing client message scope/, "Missing scopes must fail visibly, not render blank labels");
  }
  const nested = renderToStaticMarkup(React.createElement(LocaleProvider, { locale, messages: global },
    React.createElement(ScopedMessagesProvider, { messages: { contact: all.contact } },
      React.createElement(ScopedMessagesProvider, { messages: { contactForm: all.contactForm } }, React.createElement(Probe, { namespaces: ["common", "contact", "contactForm"] })))));
  assert.equal(nested, renderToStaticMarkup(React.createElement(LocaleProvider, { locale, messages: all }, React.createElement(Probe, { namespaces: ["common", "contact", "contactForm"] }))), "Nested scopes inherit parent messages");
}
assert.throws(() => renderToStaticMarkup(React.createElement(ScopedMessagesProvider, { messages: {} }, "test")), /within LocaleProvider/);
console.log("PASS client messages: unchanged CS/EN/DE text, inherited global UI, explicit route scopes and fail-fast missing namespaces");

if (process.argv.includes("--rendered")) {
  const appRoot = path.join(root, ".next/server/app");
  function files(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? files(path.join(dir, e.name)) : e.name.endsWith(".html") ? [path.join(dir, e.name)] : []);
  }
  function scopesFromHtml(html) {
    const flight = [...html.matchAll(/<script\b[^>]*>(self\.__next_f\.push\([\s\S]*?\))<\/script>/g)].map(([, body]) => {
      const match = body.match(/^self\.__next_f\.push\((\[[\s\S]*\])\)$/);
      if (!match) return "";
      const data = JSON.parse(match[1]);
      return typeof data[1] === "string" ? data[1] : "";
    }).join("");
    const scopes = [];
    function visit(value) {
      if (!value || typeof value !== "object") return;
      if (!Array.isArray(value) && value.messages && typeof value.messages === "object") scopes.push(Object.keys(value.messages));
      for (const child of Object.values(value)) visit(child);
    }
    for (const line of flight.split("\n")) {
      let parsed;
      try { parsed = JSON.parse(line.slice(line.indexOf(":") + 1)); } catch { continue; }
      visit(parsed);
    }
    return scopes;
  }
  function routeNamespaces(route) {
    if (route === "kontakt") return ["contact", "contactForm"];
    if (route === "dotaznik-spokojenosti") return ["satisfactionSurvey"];
    if (route === "pristrojove-vybaveni") return ["equipment"];
    if (route === "provozy-a-technologie") return ["sectorsIndex"];
    if (route === "typicke-zakazky" || route.startsWith("typicke-zakazky/")) return ["caseStudies"];
    if (route === "poradna" || /^poradna\/strana\/\d+$/.test(route)) return ["poradna"];
    return [];
  }
  let checked = 0;
  for (const file of files(appRoot)) {
    const relative = path.relative(appRoot, file).replaceAll("\\", "/");
    if (!/^(?:cs|en|de)(?:\/|\.html$)/.test(relative)) continue;
    const meta = JSON.parse(fs.readFileSync(file.replace(/\.html$/, ".meta"), "utf8"));
    if ((meta.status ?? 200) !== 200) continue;
    const scopes = scopesFromHtml(fs.readFileSync(file, "utf8"));
    assert.equal(scopes.filter(keys => JSON.stringify([...keys].sort()) === JSON.stringify(globalKeys)).length, 1, "Exactly one minimal global dictionary: " + relative);
    const route = relative.replace(/^(?:cs|en|de)\/?/, "").replace(/\.html$/, "");
    const expected = [...globalKeys, ...routeNamespaces(route)].sort();
    assert.deepEqual([...new Set(scopes.flat())].sort(), expected, "Only translations required by this route may be serialized: " + relative);
    checked++;
  }
  assert.ok(checked >= 590);
  console.log("PASS rendered client messages: " + checked + " static pages; no unrelated form/catalog namespaces in public documents");
}
