/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");
const postcss = require("postcss");
const root = path.resolve(__dirname, "..");
const sourceFile = path.join(root, "src/app/globals.css");
const outputFile = path.join(root, "src/app/runtime.generated.css");
const serviceOutputFile = path.join(root, "src/app/services.generated.css");
const families = ["home", "services", "contact", "references", "faq", "articles", "company", "sectors", "cases", "sales", "other"];
function familyForRoute(route) {
  const clean = route.replace(/\\/g, "/").replace(/\.html$/, "").replace(/^(?:cs|en|de)(?:\/|$)/, "");
  if (!clean) return "home";
  const first = clean.split("/")[0];
  return ({ sluzby: "services", kontakt: "contact", reference: "references", faq: "faq",
    poradna: "articles", "provozy-a-technologie": "sectors", "typicke-zakazky": "cases",
    prodej: "sales", "o-spolecnosti-naturchem": "company", "proc-naturchem": "company",
    "akreditace-autorizace-dokumenty": "company", "pristrojove-vybaveni": "company", redakce: "company" })[first] || "other";
}
function familyForPage(file) {
  const route = path.relative(path.join(root, "src/app/[locale]"), file)
    .replace(/\\/g, "/").replace(/(?:^|\/)\([^/]+\)\//g, "").replace(/(?:^|\/)page\.tsx$/, "");
  return familyForRoute(route);
}
function familyOutputFile(kind) {
  return kind === "home" ? outputFile : path.join(root, "src/app", kind + ".generated.css");
}

// Build route-family subsets from the canonical source. Required rules are
// neither delayed nor reordered; each route family retains its required rules.
const sharedComponents = [
  "Header", "HeaderClient", "BrandLogo", "LanguageSwitcher", "MobileNavSummaryRow",
  "HeaderInquiryCta", "ServiceIcon", "ServiceMegaMenu", "ExperienceMegaMenu",
  "ONasMegaMenu", "MegaMenuColumnHead", "Footer", "FooterLegalBar",
  "CookieConsentBanner", "SkipToContent", "DeferredClientWidgets", "LiveChatWidgets",
  "WhatsAppButton", "TawkToChat", "CountUpStatValue", "HomeHeroSection",
  "HomeHeroShell", "HomeLcpPhoto", "HomePoradnaStrip", "HomeDemandPaths", "HomeServiceIndex"
];

function sourceFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(file);
    return /\.(?:tsx?|jsx?|mjs|json|mdx?|html)$/.test(entry.name) ? [file] : [];
  });
}

function collectUsage(kind = "home") {
  const pages = sourceFiles(path.join(root, "src/app/[locale]"))
    .filter(file => file.endsWith(path.sep + "page.tsx") && familyForPage(file) === kind);
  const components = kind !== "home"
    ? sharedComponents.filter(name => !/^(?:Home|CountUpStatValue)/.test(name))
    : sharedComponents;
  const files = [
    ...components.map(name => path.join(root, "src/components", name + ".tsx")),
    ...sourceFiles(path.join(root, "src/lib/i18n")),
    path.join(root, "src/lib/service-categories.ts"),
    path.join(root, "src/app/[locale]/layout.tsx"),
    ...pages
  ];
  // Include descendants automatically: shared markup moved into a child must
  // retain its styles. All families preserve canonical selector order.
  const descendants = new Set(files);
  function visit(file) {
    for (const match of fs.readFileSync(file, "utf8").matchAll(/["'](@\/(?:components|lib)\/[^"']+|\.{1,2}\/[^"']+)["']/g)) {
      const base = match[1].startsWith("@/")
        ? path.join(root, "src", match[1].slice(2))
        : path.resolve(path.dirname(file), match[1]);
      const child = [base + ".tsx", base + ".ts"].find(candidate => fs.existsSync(candidate));
      if (child && !descendants.has(child)) {
        descendants.add(child);
        visit(child);
      }
    }
  }
  files.forEach(visit);
  const source = [...descendants]
    .map(file => fs.readFileSync(file, "utf8")).join("\n");
  const tokens = new Set(source.match(/[A-Za-z_][A-Za-z0-9_-]*/g) || []);
  // Protect classes assembled with template literals, including menu categories,
  // contact status and server-rendered variants absent on the homepage.
  const prefixes = [...new Set([...source.matchAll(/([A-Za-z_][A-Za-z0-9_-]*-)\x24\{/g)].map(match => match[1]))];
  return { tokens, prefixes };
}

function keepSelector(selector, usage) {
  // Negation and selector lists inside functions cannot be treated as simple
  // required classes. Escaped names and third-party runtime classes are retained.
  if (/:not\(|:is\(|:where\(|:has\(|\\/.test(selector)) return true;
  const classes = [...selector.matchAll(/\.([A-Za-z_][A-Za-z0-9_-]*)/g)].map(match => match[1]);
  return classes.every(name => usage.tokens.has(name)
    || usage.prefixes.some(prefix => name.startsWith(prefix))
    || /^(?:is-|tawk|leaflet-)/.test(name));
}

function compactStyles(source, usage) {
  const tree = postcss.parse(source);
  tree.walkRules(rule => {
    if (rule.parent.type === "atrule" && /keyframes$/i.test(rule.parent.name)) return;
    const kept = rule.selectors.filter(selector => keepSelector(selector, usage));
    if (kept.length) rule.selectors = kept;
    else rule.remove();
  });
  tree.walkComments(comment => comment.remove());
  // Do not remove or reorder declarations, state selectors or media queries.
  for (let pass = 0; pass < 3; pass++) {
    tree.walkAtRules(rule => { if (rule.nodes && rule.nodes.length === 0) rule.remove(); });
  }
  return tree.toString();
}

function generate() {
  const source = fs.readFileSync(sourceFile, "utf8");
  for (const kind of families) {
    const target = familyOutputFile(kind);
    const css = "/* Generated from globals.css; edit the source, not this file. */\n"
      + compactStyles(source, collectUsage(kind)) + "\n";
    if (!fs.existsSync(target) || fs.readFileSync(target, "utf8") !== css) fs.writeFileSync(target, css);
    console.log(kind + " CSS: " + Buffer.byteLength(source) + " -> " + Buffer.byteLength(css) + " B; source retained, dynamic classes protected");
  }
}

if (require.main === module) generate();
module.exports = { collectUsage, compactStyles, keepSelector, sourceFiles, sourceFile, outputFile, serviceOutputFile, families, familyForRoute, familyForPage, familyOutputFile };
