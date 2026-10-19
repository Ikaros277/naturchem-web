#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
"use strict";
/**
 * Weekly NATURCHEM traffic report from Google Search Console.
 *
 * Compares the last 28 complete days with the 28 days before (Czechia, web search) and lists
 * anomalies, quick wins (queries on positions 8-20), weak titles, pages losing clicks and new
 * queries, plus a technical SEO check of a sample of pages. The report is published as a GitHub
 * issue labelled `traffic-report`, assigned to the repo owner so GitHub e-mails it.
 *
 * Needs (GitHub repository settings):
 *   secret GSC_SERVICE_ACCOUNT_JSON  - service-account key, added as a user in Search Console
 *   variable GSC_PROPERTY            - e.g. sc-domain:naturchem.cz (default)
 *   variable REPORT_REPO + secret REPORT_TOKEN - PRIVATE repository (and a token that may write its
 *                                      issues) that receives the report. This repository is public, so
 *                                      traffic data is never published here unless ALLOW_PUBLIC_REPORT=true.
 * Without them the job opens one setup issue instead of failing.
 *
 *   node scripts/gsc_weekly_report.js --dry-run   # print the report, create nothing
 */
const fs = require("fs");
const path = require("path");
const lib = require("./lib/monitoring");

const dryRun = process.argv.includes("--dry-run");
const baseline = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "monitoring", "baseline.json"), "utf8"));
const site = (process.env.MONITOR_SITE || baseline.site).replace(/\/$/, "");
const property = process.env.GSC_PROPERTY || "sc-domain:naturchem.cz";
const REPORT_LABEL = "traffic-report";
const SETUP_LABEL = "monitor-setup";

const SETUP_BODY = `Týdenní zpráva o návštěvnosti zatím nemá přístup k datům z Google Search Console.

## Jednorázové nastavení (asi 10 minut)

1. Otevřete https://console.cloud.google.com a vytvořte projekt (např. „naturchem-monitoring“).
2. V části „APIs & Services → Library“ zapněte **Google Search Console API**.
3. V části „IAM & Admin → Service accounts“ vytvořte servisní účet a v záložce „Keys“ přidejte klíč typu **JSON**. Soubor se stáhne.
4. Otevřete https://search.google.com/search-console → „Nastavení → Uživatelé a oprávnění“ a přidejte **e-mail servisního účtu** (končí na \`iam.gserviceaccount.com\`) s oprávněním **Omezený**.
5. V repozitáři na GitHubu otevřete „Settings → Secrets and variables → Actions“ a přidejte:
   - **secret** \`GSC_SERVICE_ACCOUNT_JSON\`: celý obsah staženého JSON souboru,
   - **variable** \`GSC_PROPERTY\`: \`sc-domain:naturchem.cz\` (nebo \`https://www.naturchem.cz/\`, podle toho, jak je web v Search Console veden).
6. **Kam zpráva půjde (důležité):** tento repozitář je veřejný, takže zpráva s kliky a dotazy by byla vidět komukoli. Vytvořte proto **soukromý** repozitář (např. \`naturchem-monitoring\`), v Nastavení účtu → Developer settings → Fine-grained tokens vytvořte token jen pro tento repozitář s oprávněním **Issues: Read and write** a přidejte:
   - **variable** \`REPORT_REPO\`: \`Ikaros277/naturchem-monitoring\`,
   - **secret** \`REPORT_TOKEN\`: vytvořený token.
7. V záložce „Actions → Týdenní zpráva návštěvnosti“ klikněte na „Run workflow“. První zpráva přijde e-mailem z GitHubu.

Klíč nikdy nevkládejte do kódu ani do chatu. Slouží jen jako GitHub secret.`;

async function technicalSample() {
  const sitemap = await lib.fetchText(`${site}/sitemap.xml`);
  if (!sitemap.ok) return { issues: [], checked: 0 };
  const urls = lib.parseSitemap(sitemap.text);
  const week = new Date().toISOString().slice(0, 10);
  const sample = lib.sampleUrls(urls, baseline.hygieneSample, `hygiene-${week}`);
  const issues = [];
  let checked = 0;
  let next = 0;
  await Promise.all(
    Array.from({ length: 5 }, async () => {
      while (next < sample.length) {
        const url = sample[next++];
        const response = await lib.fetchText(url);
        if (!response.ok) continue;
        checked += 1;
        issues.push(...lib.hygieneIssues(url, lib.analyzePage(response.text)));
      }
    })
  );
  return { issues, checked };
}

function countryFilter() {
  return [{ filters: [{ dimension: "country", operator: "equals", expression: "cze" }] }];
}

async function loadSearchData(token, windows) {
  const base = { type: "web", dimensionFilterGroups: countryFilter() };
  const q = (range, dimensions, rowLimit = 5000) => lib.searchAnalytics(token, property, { ...base, ...range, dimensions, rowLimit });
  const [queries, queriesPrev, pages, pagesPrev, queryPages, daily] = await Promise.all([
    q(windows.current, ["query"]),
    q(windows.previous, ["query"]),
    q(windows.current, ["page"]),
    q(windows.previous, ["page"]),
    q(windows.current, ["query", "page"]),
    q({ startDate: windows.previous.startDate, endDate: windows.current.endDate }, ["date"], 100)
  ]);
  return { queries, queriesPrev, pages, pagesPrev, queryPages, daily, windows };
}

/** Destination of the traffic report: a private repository when configured, else this repository. */
function reportContext() {
  const own = lib.githubContext();
  if (process.env.REPORT_REPO && process.env.REPORT_TOKEN) {
    return { repo: process.env.REPORT_REPO, token: process.env.REPORT_TOKEN, assignee: (own && own.assignee) || process.env.REPORT_REPO.split("/")[0] };
  }
  return own;
}

const PUBLIC_WARNING = `Týdenní zpráva návštěvnosti je připravená, ale **nebyla zveřejněna**: cílový repozitář je veřejný a zpráva obsahuje kliky a dotazy z Search Console.

Nastavte soukromý cíl podle kroku 6 v úkolu „Nastavit přístup k Google Search Console“ (proměnná \`REPORT_REPO\` a secret \`REPORT_TOKEN\`). Pokud je Vám veřejnost zprávy jedno, nastavte proměnnou \`ALLOW_PUBLIC_REPORT\` na \`true\`.`;

async function publish(title, body, label, color, description) {
  const ctx = reportContext();
  if (!ctx) {
    console.log("GITHUB_TOKEN/GITHUB_REPOSITORY nejsou nastaveny, úkol se nevytváří.");
    return;
  }
  const info = await lib.github(ctx, "");
  const isPublic = !info.data || info.data.private === false;
  if (isPublic && process.env.ALLOW_PUBLIC_REPORT !== "true") {
    console.log("Cílový repozitář je veřejný, zpráva se nezveřejňuje (nastavte REPORT_REPO nebo ALLOW_PUBLIC_REPORT).");
    const own = lib.githubContext();
    if (own) {
      await lib.ensureLabel(own, SETUP_LABEL, "fbca04", "Jednorázové nastavení monitoringu");
      if (!(await lib.findOpenIssue(own, SETUP_LABEL))) {
        await lib.createIssue(own, { title: "Týdenní zpráva čeká na soukromé místo (repozitář je veřejný)", body: PUBLIC_WARNING, labels: [SETUP_LABEL] });
      }
    }
    return;
  }
  await lib.ensureLabel(ctx, label, color, description);
  const issue = await lib.createIssue(ctx, { title, body, labels: [label] });
  console.log(`Vytvořen úkol #${issue && issue.number}: ${title}`);
}

(async () => {
  const today = new Date().toISOString().slice(0, 10);
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON;

  if (!raw) {
    console.log("GSC_SERVICE_ACCOUNT_JSON není nastaven, týdenní zpráva čeká na nastavení přístupu k Search Console.");
    if (dryRun) return console.log(SETUP_BODY);
    const ctx = lib.githubContext();
    if (ctx) {
      await lib.ensureLabel(ctx, SETUP_LABEL, "fbca04", "Jednorázové nastavení monitoringu");
      if (!(await lib.findOpenIssue(ctx, SETUP_LABEL))) {
        await lib.createIssue(ctx, { title: "Nastavit přístup k Google Search Console (týdenní zpráva)", body: SETUP_BODY, labels: [SETUP_LABEL] });
        console.log("Vytvořen úkol s návodem na nastavení.");
      }
    }
    return;
  }

  let credentials;
  try {
    credentials = JSON.parse(raw);
  } catch {
    throw new Error("GSC_SERVICE_ACCOUNT_JSON neobsahuje platný JSON. Vložte celý obsah staženého klíče.");
  }
  const token = await lib.getAccessToken(credentials);
  const windows = lib.reportWindows(new Date());
  const data = await loadSearchData(token, windows);
  const findings = lib.analyzeSearchData(data);
  const sample = await technicalSample();
  const hygiene = lib.formatHygiene(sample.issues, sample.checked);
  const body = lib.formatSearchReport(findings, windows, hygiene);
  const title = `${findings.alerts.length ? "⚠ " : ""}Týdenní zpráva návštěvnosti ${today}`;

  if (dryRun) {
    console.log(`# ${title}\n\n${body}`);
    return;
  }
  await publish(title, body, REPORT_LABEL, "0e8a16", "Týdenní zpráva návštěvnosti z Search Console");
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
