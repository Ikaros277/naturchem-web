/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const postcss = require("postcss");
const root = path.resolve(__dirname, "..");
// Content surfaces share one token. Controls and circular icons are deliberately
// separate: do not replace these checks with an all-element radius reset.
const targets = {
  "src/app/globals.css": [
    ".nav-dropdown-flyout .nav-dropdown",
    ".reference-area-media",
    ".home-demand-path-item",
    ".home-service-row",
    ".article-tldr",
    ".nav-mega-flyout .nav-mega-panel",
    ".home-editorial-feature",
    ".site-footer .footer-survey-highlight",
    ".service-catalog-situations a",
    ".service-category-nav-group",
    ".service-category-nav a",
    ".service-groups-accordion .service-index-card",
    ".service-groups-accordion .service-index-card--with-thumb .article-card-thumb",
    ".sector-process-disclosure",
    ".sector-related-list .sector-related-card",
    ".why-proof-card",
    ".why-context-grid"
  ],
  "src/app/[locale]/contact-forms.css": [
    ".contact-quick-links a",
    ".contact-form-hint",
    ".contact-service-choices"
  ],
  "src/app/[locale]/faq/faq.css": [
    ".faq-legal"
  ],
  "src/app/[locale]/prodej/sales.css": [
    ".sales-intro-panel",
    ".sales-distributor-note",
    ".sales-brand-offer",
    ".sales-catalog-nav",
    ".sales-category-list-link",
    ".sales-product-grid-link",
    ".sales-product-grid-thumb",
    ".sales-category-band",
    ".sales-product-card--with-thumb .sales-product-thumb",
    ".sales-brand-card-logo",
    ".sales-product-figure-frame",
    ".sales-empty-placeholder",
    ".sales-choice-table-wrap"
  ],
  "src/app/[locale]/typicke-zakazky/case-studies.css": [
    ".case-study-modal-header",
    ".case-study-modal-body"
  ],
  "src/components/homepage.module.css": [
    ".heroMedia",
    ".serviceCard",
    ".servicePhoto",
    ".studyGraphic",
    ".situation",
    ".partnerRow",
    ".needsNav .situation",
    ".articlePhoto"
  ],
  "src/components/service-detail.module.css": [
    ".photo",
    ".evidence",
    ".inquiryPanel",
    ".detailsSection",
    ".disclosures details",
    ".disclosures summary",
    ".faq",
    ".related > ul a",
    ".photographicCase"
  ],
  "src/components/accredited-scope.module.css": [
    ".accreditedSection",
    ".fullAccreditation",
    ".scopeFeature",
    ".accreditedScopeList .scopeCards > div",
    ".scopeCards .scopeAnalytes",
    ".scopeCards .scopeAnalytes > summary"
  ],
  "src/components/article-reading.module.css": [
    ".reading",
    ".summary",
    ".reading :global(.article-body) blockquote",
    ".mobileOutline",
    ".mobileOutline summary:focus-visible"
  ],
  "src/components/article-related-services.module.css": [
    ".inquiry"
  ],
  "src/components/reference-photo-showcase.module.css": [
    ".card",
    ".more > summary",
    ".output"
  ],
  "src/components/contact-offices-map.css": [
    ".contact-hero-map"
  ]
};
const globals = postcss.parse(fs.readFileSync(path.join(root, "src/app/globals.css"), "utf8"));
const tokens = new Map();
globals.walkDecls(declaration => {
  if (declaration.parent.selector === ":root") tokens.set(declaration.prop, declaration.value);
});
assert.equal(tokens.get("--radius-sharp"), "0", "All shared content tiles are square");
assert.equal(tokens.get("--radius-ui"), "10px", "Do not change input/button controls");
assert.equal(tokens.get("--radius-pill"), "999px", "Keep pill controls distinct");
let checked = 0;
for (const [file, selectors] of Object.entries(targets)) {
  const seen = new Set();
  postcss.parse(fs.readFileSync(path.join(root, file), "utf8")).walkDecls("border-radius", declaration => {
    if (!selectors.includes(declaration.parent.selector)) return;
    assert.ok(["0", "var(--radius-sharp)"].includes(declaration.value), file + ": " + declaration.parent.selector + " must stay square, including responsive overrides");
    seen.add(declaration.parent.selector);
    checked++;
  });
  assert.deepEqual([...seen].sort(), [...selectors].sort(), "Every expected tile selector is checked: " + file);
}
assert.ok(checked >= 70, "Check responsive overrides as well as default card styles");
const preserved = {
  "src/app/globals.css": {
    ".button": "var(--radius-ui)",
    "input,\nselect,\ntextarea": "var(--radius-ui)",
    ".service-situation-arrow": "50%",
    ".service-category-nav .service-category-nav-arrow": "50%"
  },
  "src/components/homepage.module.css": {
    ".arrow": "50%",
    ".needsNav .situationArrow": "50%",
    ".heroLinks a": "5px"
  },
  "src/components/service-detail.module.css": {
    ".seal": "50%",
    ".disclosures summary::after": "50%",
    ".inquiry": "6px",
    ".panelCta": "5px"
  }
};
for (const [file, rules] of Object.entries(preserved)) {
  const seen = new Set();
  postcss.parse(fs.readFileSync(path.join(root, file), "utf8")).walkDecls("border-radius", declaration => {
    const selector = declaration.parent.selector.replace(/\r\n/g, "\n");
    if (!(selector in rules)) return;
    assert.equal(declaration.value, rules[selector], "Preserve control/icon shape: " + selector);
    seen.add(selector);
  });
  assert.equal(seen.size, Object.keys(rules).length, "Control/icon checks must not be vacuous");
}
console.log("PASS square content surfaces: shared token, " + checked + " explicit card/photo/panel declarations, mobile overrides, circular icons and controls.");
