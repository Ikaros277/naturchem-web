#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
"use strict";
/**
 * Daily NATURCHEM site monitor.
 *
 * Checks that the live site is up and still indexable: key pages, sitemap size, robots.txt,
 * the inquiry form anchor and a rotating sample of sitemap URLs. When something is wrong it
 * opens (or updates) a GitHub issue labelled `site-monitor`, assigned to the repo owner, so
 * GitHub e-mails the alert. When everything is fine again it comments and closes the issue.
 *
 *   node scripts/monitor_site.js            # in GitHub Actions (needs GITHUB_TOKEN)
 *   node scripts/monitor_site.js --dry-run  # local: print findings, create nothing
 */
const fs = require("fs");
const path = require("path");
const lib = require("./lib/monitoring");

const dryRun = process.argv.includes("--dry-run");
const baseline = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "monitoring", "baseline.json"), "utf8"));
const site = (process.env.MONITOR_SITE || baseline.site).replace(/\/$/, "");
const LABEL = "site-monitor";

async function pool(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (next < items.length) {
        const index = next++;
        results[index] = await fn(items[index], index);
      }
    })
  );
  return results;
}

async function checkPages(urls, { requireContactForm = false } = {}) {
  const critical = [];
  const warnings = [];
  await pool(urls, 5, async (url) => {
    const response = await lib.fetchText(url);
    const facts = response.ok ? lib.analyzePage(response.text) : {};
    const found = lib.pageIssues(url, response, facts);
    critical.push(...found.critical);
    warnings.push(...found.warning);
    if (requireContactForm && response.ok && !response.text.includes(baseline.contactFormAnchor)) {
      critical.push(`${url}: chybí poptávkový formulář (#${baseline.contactFormAnchor})`);
    }
  });
  return { critical, warnings };
}

async function runChecks() {
  const critical = [];
  const warnings = [];
  const stats = {};

  const keyUrls = baseline.criticalPaths.map((p) => `${site}${p}`);
  const keyResult = await checkPages(keyUrls.filter((u) => !u.endsWith("/kontakt/")));
  critical.push(...keyResult.critical);
  warnings.push(...keyResult.warnings);
  const contactResult = await checkPages([`${site}/kontakt/`], { requireContactForm: true });
  critical.push(...contactResult.critical);
  warnings.push(...contactResult.warnings);
  stats.keyPages = keyUrls.length;

  const robots = await lib.fetchText(`${site}/robots.txt`);
  if (!robots.ok) critical.push(`${site}/robots.txt: odpověď ${robots.status || "bez odpovědi"}`);
  else critical.push(...lib.robotsProblems(robots.text, site).map((p) => `${site}/robots.txt: ${p}`));

  const llms = await lib.fetchText(`${site}/llms.txt`);
  if (!llms.ok) warnings.push(`${site}/llms.txt: odpověď ${llms.status || "bez odpovědi"}`);

  const sitemap = await lib.fetchText(`${site}/sitemap.xml`);
  let urls = [];
  if (!sitemap.ok) {
    critical.push(`${site}/sitemap.xml: odpověď ${sitemap.status || "bez odpovědi"}`);
  } else {
    urls = lib.parseSitemap(sitemap.text);
    stats.sitemapUrls = urls.length;
    if (urls.length < baseline.sitemapUrls * baseline.minSitemapRatio) {
      critical.push(`sitemap.xml: ${urls.length} adres místo očekávaných zhruba ${baseline.sitemapUrls}`);
    } else if (urls.length > baseline.sitemapUrls * 1.3) {
      warnings.push(`sitemap.xml: ${urls.length} adres, výrazně víc než ${baseline.sitemapUrls}. Zkontrolujte duplicitní nebo zbytečné adresy.`);
    }
  }

  if (urls.length) {
    const sample = lib.sampleUrls(urls, baseline.dailySample, new Date().toISOString().slice(0, 10));
    const sampleResult = await checkPages(sample);
    critical.push(...sampleResult.critical);
    warnings.push(...sampleResult.warnings.slice(0, 10));
    stats.sampleChecked = sample.length;
  }

  return { critical: [...new Set(critical)], warnings: [...new Set(warnings)], stats };
}

function formatIssueBody(result, date) {
  const out = [`Kontrola webu ${site} ze dne ${date}.`, ""];
  if (result.critical.length) {
    out.push("## Kritické problémy", "", ...result.critical.slice(0, 30).map((c) => `- ${c}`));
    if (result.critical.length > 30) out.push(`- … a dalších ${result.critical.length - 30}`);
    out.push("");
  }
  if (result.warnings.length) out.push("## Upozornění", "", ...result.warnings.slice(0, 15).map((w) => `- ${w}`), "");
  out.push(
    "## Co dál",
    "",
    "1. Zkontrolujte poslední nasazení na Vercelu.",
    "2. Pokud problém vznikl posledním nasazením, vraťte změnu (`git revert`) a nasaďte znovu.",
    "3. Tento úkol se po obnově sám uzavře při další kontrole."
  );
  return out.join("\n");
}

async function reportToGitHub(result, date) {
  const ctx = lib.githubContext();
  if (!ctx) {
    console.log("GITHUB_TOKEN/GITHUB_REPOSITORY nejsou nastaveny, upozornění se nevytváří.");
    return;
  }
  await lib.ensureLabel(ctx, LABEL, "d73a4a", "Automatický hlídač webu naturchem.cz");
  const open = await lib.findOpenIssue(ctx, LABEL);
  const sig = lib.signature(result.critical);
  const marker = `<!-- sig:${sig} -->`;

  if (result.critical.length) {
    const body = `${formatIssueBody(result, date)}\n\n${marker}`;
    if (!open) {
      await lib.createIssue(ctx, { title: `Web naturchem.cz: ${result.critical.length} kritických problémů (${date})`, body, labels: [LABEL] });
      console.log("Vytvořen nový úkol s upozorněním.");
    } else if (!(open.body || "").includes(marker)) {
      await lib.github(ctx, `/issues/${open.number}/comments`, { method: "POST", body: { body: `Nálezy se změnily.\n\n${body}` } });
      await lib.github(ctx, `/issues/${open.number}`, { method: "PATCH", body: { body: `${body}\n\ncc @${ctx.assignee}` } });
      console.log(`Aktualizován úkol #${open.number}.`);
    } else {
      console.log(`Stejné nálezy už jsou nahlášeny v úkolu #${open.number}.`);
    }
  } else if (open) {
    await lib.github(ctx, `/issues/${open.number}/comments`, { method: "POST", body: { body: `Kontrola ${date}: vše je v pořádku. Úkol uzavírám.` } });
    await lib.github(ctx, `/issues/${open.number}`, { method: "PATCH", body: { state: "closed" } });
    console.log(`Uzavřen úkol #${open.number}.`);
  }
}

/** If the monitor itself has no internet, do not blame the website. */
async function monitorHasInternet() {
  for (const url of ["https://www.google.com/generate_204", "https://example.com/"]) {
    const response = await lib.fetchText(url, { timeoutMs: 10000 });
    if (response.status > 0) return true;
  }
  return false;
}

(async () => {
  const date = new Date().toISOString().slice(0, 10);
  const first = await lib.fetchText(`${site}/`, { timeoutMs: 15000 });
  if (first.status === 0 && !(await monitorHasInternet())) {
    console.log("Hlídač nemá přístup k internetu, kontrola se přeskakuje (neznamená výpadek webu).");
    return;
  }
  const result = await runChecks();
  console.log(JSON.stringify({ date, site, stats: result.stats, critical: result.critical, warnings: result.warnings }, null, 2));
  if (!dryRun) await reportToGitHub(result, date);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
