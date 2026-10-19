#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
"use strict";
/** Offline tests for the scheduled monitors (no network, no secrets). */
const assert = require("assert");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const lib = require("./lib/monitoring");

const root = path.join(__dirname, "..");

// --- HTML facts and technical issues
const html = `<!doctype html><html><head>
<title>Autorizované měření emisí stacionárních zdrojů | NATURCHEM</title>
<meta content="Jednorázové měření emisí smí provádět jen autorizovaná osoba. Pošlete povolení provozu." name="description">
<link href="https://www.naturchem.cz/autorizovana-osoba-mereni-emisi/" rel="canonical">
<link rel="alternate" hreflang="cs" href="x"><link rel="alternate" hreflang="en" href="y">
<script type="application/ld+json">{}</script></head><body><h1>Nadpis</h1><script>var h1="<h1>";</script></body></html>`;
const facts = lib.analyzePage(html);
assert.strictEqual(facts.title, "Autorizované měření emisí stacionárních zdrojů | NATURCHEM");
assert.ok(facts.description.startsWith("Jednorázové měření"), "meta description is found with attributes in any order");
assert.strictEqual(facts.h1Count, 1, "H1 inside scripts is ignored");
assert.strictEqual(facts.hreflangCount, 2);
assert.strictEqual(facts.jsonLdCount, 1);
assert.strictEqual(facts.noindex, false);
assert.strictEqual(lib.analyzePage('<meta name="robots" content="noindex,follow">').noindex, true);

const headers = (value) => ({ get: () => value });
const okResponse = { ok: true, status: 200, url: "https://www.naturchem.cz/a/", ms: 400, headers: headers(null) };
assert.deepStrictEqual(lib.pageIssues("https://www.naturchem.cz/a/", okResponse, { ...facts, canonical: "https://www.naturchem.cz/a/" }), { critical: [], warning: [] });
assert.strictEqual(lib.pageIssues("u", { ok: false, status: 404, headers: headers(null) }, {}).critical.length, 1, "404 is critical");
assert.ok(lib.pageIssues("u", okResponse, { ...facts, canonical: "https://www.naturchem.cz/a/", noindex: true }).critical[0].includes("noindex"));
assert.ok(lib.pageIssues("u", { ...okResponse, headers: headers("noindex") }, { ...facts, canonical: okResponse.url }).critical.length === 1, "x-robots-tag noindex is critical");
assert.strictEqual(lib.pageIssues("u", okResponse, { ...facts, canonical: null }).critical.length, 1, "missing canonical is critical");
assert.strictEqual(lib.pageIssues("u", okResponse, { ...facts, canonical: "https://www.naturchem.cz/other/" }).warning.length, 1);
assert.strictEqual(lib.pageIssues("u", { ...okResponse, ms: 3500 }, { ...facts, canonical: okResponse.url }).warning.length, 1);
assert.strictEqual(lib.pageIssues("u", { ...okResponse, ms: 6000 }, { ...facts, canonical: okResponse.url }).critical.length, 1);
assert.strictEqual(lib.hygieneIssues("u", facts).length, 0);
assert.ok(lib.hygieneIssues("u", { title: "", description: "", h1Count: 0, jsonLdCount: 0 }).length >= 4);

// --- sitemap, robots, sampling
assert.deepStrictEqual(lib.parseSitemap("<urlset><url><loc> https://a/1 </loc></url><url><loc>https://a/2?x=1&amp;y=2</loc></url></urlset>"), ["https://a/1", "https://a/2?x=1&y=2"]);
assert.deepStrictEqual(lib.robotsProblems("User-agent: *\nAllow: /\nSitemap: https://www.naturchem.cz/sitemap.xml", "https://www.naturchem.cz"), []);
assert.ok(lib.robotsProblems("User-agent: *\nDisallow: /\nSitemap: https://www.naturchem.cz/sitemap.xml", "https://www.naturchem.cz").length === 1);
assert.ok(lib.robotsProblems("User-agent: *\nAllow: /", "https://www.naturchem.cz").length === 1);
const urls = Array.from({ length: 200 }, (_, i) => `https://x/${i}`);
assert.deepStrictEqual(lib.sampleUrls(urls, 10, "2026-10-19"), lib.sampleUrls(urls, 10, "2026-10-19"), "sampling is deterministic");
assert.notDeepStrictEqual(lib.sampleUrls(urls, 10, "2026-10-19"), lib.sampleUrls(urls, 10, "2026-10-20"), "sampling rotates daily");
assert.strictEqual(lib.signature(["a", "b"]), lib.signature(["b", "a"]));
assert.notStrictEqual(lib.signature(["a"]), lib.signature(["a", "b"]));

// --- service-account JWT
const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", { modulusLength: 2048 });
const jwt = lib.buildServiceAccountJwt(
  { client_email: "monitor@example.iam.gserviceaccount.com", private_key: privateKey.export({ type: "pkcs8", format: "pem" }) },
  1_800_000_000
);
const [h, c, s] = jwt.split(".");
const verifier = crypto.createVerify("RSA-SHA256");
verifier.update(`${h}.${c}`);
assert.ok(verifier.verify(publicKey, Buffer.from(s, "base64url")), "JWT signature is valid RS256");
const claims = JSON.parse(Buffer.from(c, "base64url").toString());
assert.strictEqual(claims.scope, "https://www.googleapis.com/auth/webmasters.readonly", "read-only scope only");
assert.strictEqual(claims.exp - claims.iat, 3300);

// --- windows
const w = lib.reportWindows(new Date("2026-10-26T08:00:00Z"));
assert.deepStrictEqual(w.current, { startDate: "2026-09-26", endDate: "2026-10-23" });
assert.deepStrictEqual(w.previous, { startDate: "2026-08-29", endDate: "2026-09-25" });

// --- Search Console analysis
const row = (keys, clicks, impressions, position) => ({ keys, clicks, impressions, ctr: impressions ? clicks / impressions : 0, position });
const day = (n, clicks) => row([`2026-09-${String(n).padStart(2, "0")}`], clicks, clicks * 40, 8);
const daily = [
  ...Array.from({ length: 21 }, (_, i) => day(i + 1, 4)),
  ...Array.from({ length: 7 }, (_, i) => day(i + 22, 1))
];
const windows = { current: { startDate: "2026-09-08", endDate: "2026-09-28" }, previous: { startDate: "2026-09-01", endDate: "2026-09-07" } };
const findings = lib.analyzeSearchData({
  queries: [
    row(["emise a imise"], 0, 227, 11.1),
    row(["měření hluku"], 1, 200, 3.2),
    row(["nový dotaz"], 0, 30, 12),
    row(["stabilní"], 30, 300, 2)
  ],
  queriesPrev: [row(["emise a imise"], 0, 200, 11), row(["měření hluku"], 5, 190, 3), row(["stabilní"], 30, 290, 2)],
  pages: [row(["https://www.naturchem.cz/a/"], 2, 150, 6), row(["https://www.naturchem.cz/b/"], 0, 400, 9)],
  pagesPrev: [row(["https://www.naturchem.cz/a/"], 20, 150, 6), row(["https://www.naturchem.cz/c/"], 12, 90, 5)],
  queryPages: [row(["emise a imise", "https://www.naturchem.cz/poradna/emise-vs-imise/"], 0, 227, 11.1)],
  daily,
  windows
});
assert.ok(findings.alerts.some((a) => a.includes("Posledních 7 dní")), "recent drop is flagged");
assert.deepStrictEqual(findings.quickWins.map((r) => r.query), ["emise a imise", "nový dotaz"].filter((q) => q === "emise a imise" || q === "nový dotaz"));
assert.strictEqual(findings.quickWins[0].page, "https://www.naturchem.cz/poradna/emise-vs-imise/");
assert.deepStrictEqual(findings.ctrGaps.map((r) => r.query), ["měření hluku"], "pos 3 with 0.5 % CTR is a weak title");
assert.deepStrictEqual(findings.pageDrops.map((r) => r.page), ["https://www.naturchem.cz/a/", "https://www.naturchem.cz/c/"], "pages losing clicks incl. vanished pages");
assert.deepStrictEqual(findings.newQueries.map((r) => r.query), ["nový dotaz"]);
assert.deepStrictEqual(findings.zeroClickPages.map((r) => r.page), ["https://www.naturchem.cz/b/"]);

const report = lib.formatSearchReport(findings, windows, lib.formatHygiene([{ url: "https://www.naturchem.cz/x/", kind: "title", text: "title je dlouhý (80 znaků)" }], 60));
for (const text of ["## Upozornění", "## Rychlé výhry", "## Slabý titulek", "## Stránky, které ztrácejí kliky", "## Nové dotazy", "Technická kontrola vzorku 60 stránek", "/poradna/emise-vs-imise/", "nic nenasazuje"]) {
  assert.ok(report.includes(text), `report contains: ${text}`);
}
const quiet = lib.analyzeSearchData({
  queries: [row(["a"], 30, 300, 2)], queriesPrev: [row(["a"], 31, 300, 2)], pages: [], pagesPrev: [], queryPages: [],
  daily: Array.from({ length: 28 }, (_, i) => day((i % 28) + 1, 2)), windows: { current: { startDate: "2026-09-15", endDate: "2026-09-28" }, previous: { startDate: "2026-09-01", endDate: "2026-09-14" } }
});
assert.deepStrictEqual(quiet.alerts, [], "a stable site raises no alert");

// --- wiring
const baseline = JSON.parse(fs.readFileSync(path.join(root, "monitoring", "baseline.json"), "utf8"));
assert.ok(baseline.sitemapUrls > 100 && baseline.criticalPaths.includes("/kontakt/") && baseline.criticalPaths.includes("/"));
for (const [file, script] of [["site-monitor.yml", "scripts/monitor_site.js"], ["weekly-traffic-report.yml", "scripts/gsc_weekly_report.js"]]) {
  const workflow = fs.readFileSync(path.join(root, ".github", "workflows", file), "utf8");
  assert.ok(workflow.includes(script), `${file} runs ${script}`);
  assert.ok(workflow.includes("issues: write") && workflow.includes("contents: read"), `${file} uses least-privilege permissions`);
  assert.ok(workflow.includes("workflow_dispatch") && workflow.includes("schedule:"), `${file} can run manually and on schedule`);
  assert.ok(!/BEGIN (RSA )?PRIVATE KEY/.test(workflow), `${file} contains no key`);
}
const weekly = fs.readFileSync(path.join(root, ".github", "workflows", "weekly-traffic-report.yml"), "utf8");
assert.ok(weekly.includes("secrets.GSC_SERVICE_ACCOUNT_JSON"), "Search Console key comes from a GitHub secret");
for (const file of ["scripts/lib/monitoring.js", "scripts/monitor_site.js", "scripts/gsc_weekly_report.js"]) {
  assert.ok(!/BEGIN (RSA )?PRIVATE KEY/.test(fs.readFileSync(path.join(root, file), "utf8")), `${file} contains no key`);
}

console.log("PASS monitoring: HTML/robots/sitemap checks, alert signatures, Search Console analysis and report, read-only JWT, least-privilege workflows");
