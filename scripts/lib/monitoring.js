/* eslint-disable @typescript-eslint/no-require-imports */
"use strict";
/**
 * Shared helpers for the scheduled NATURCHEM monitors (daily site check, weekly traffic report).
 * No dependencies: runs on the Node 22 used by the GitHub Actions workflows.
 * Pure functions are unit-tested by scripts/verify_monitoring.js.
 */
const crypto = require("crypto");

const DEFAULT_SITE = "https://www.naturchem.cz";

/* ------------------------------------------------------------------ HTTP */

async function fetchText(url, { timeoutMs = 25000, redirect = "follow" } = {}) {
  const started = Date.now();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      redirect,
      signal: controller.signal,
      headers: { "user-agent": "naturchem-site-monitor/1.0 (+https://www.naturchem.cz)" }
    });
    const text = await res.text();
    return { ok: res.ok, status: res.status, url: res.url, ms: Date.now() - started, text, headers: res.headers };
  } catch (error) {
    return { ok: false, status: 0, url, ms: Date.now() - started, text: "", error: String((error && error.message) || error) };
  } finally {
    clearTimeout(timer);
  }
}

/* --------------------------------------------------------------- HTML checks */

function decodeEntities(value) {
  return String(value)
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function metaContent(html, name) {
  for (const tag of html.match(/<meta\b[^>]*>/gi) || []) {
    const nameMatch = tag.match(/\b(?:name|property)=["']([^"']+)["']/i);
    if (!nameMatch || nameMatch[1].toLowerCase() !== name) continue;
    const content = tag.match(/\bcontent=["']([^"']*)["']/i);
    return content ? decodeEntities(content[1]) : "";
  }
  return null;
}

function linkHref(html, rel) {
  for (const tag of html.match(/<link\b[^>]*>/gi) || []) {
    const relMatch = tag.match(/\brel=["']([^"']+)["']/i);
    if (!relMatch || relMatch[1].toLowerCase() !== rel) continue;
    const href = tag.match(/\bhref=["']([^"']*)["']/i);
    return href ? decodeEntities(href[1]) : "";
  }
  return null;
}

/** Facts about one rendered HTML page. */
function analyzePage(html) {
  const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1];
  const robots = metaContent(html, "robots");
  const body = html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "");
  return {
    title: title ? decodeEntities(title) : "",
    description: metaContent(html, "description"),
    canonical: linkHref(html, "canonical"),
    noindex: Boolean(robots && /noindex/i.test(robots)),
    h1Count: (body.match(/<h1\b/gi) || []).length,
    hreflangCount: (html.match(/<link\b[^>]*\bhreflang=/gi) || []).length,
    jsonLdCount: (html.match(/application\/ld\+json/gi) || []).length
  };
}

function normalizeUrl(url) {
  try {
    const u = new URL(url);
    u.hash = "";
    return u.toString().replace(/\/+$/, "");
  } catch {
    return String(url).replace(/\/+$/, "");
  }
}

/** Technical problems on one fetched page. `critical` breaks visibility; `warning` is an improvement. */
function pageIssues(url, response, facts) {
  const critical = [];
  const warning = [];
  if (!response.ok) {
    critical.push(`${url}: odpověď ${response.status || "bez odpovědi"}${response.error ? ` (${response.error})` : ""}`);
    return { critical, warning };
  }
  const xRobots = response.headers && response.headers.get ? response.headers.get("x-robots-tag") : null;
  if (facts.noindex || (xRobots && /noindex/i.test(xRobots))) critical.push(`${url}: stránka má noindex`);
  if (!facts.canonical) critical.push(`${url}: chybí canonical`);
  else if (normalizeUrl(facts.canonical) !== normalizeUrl(response.url)) {
    warning.push(`${url}: canonical míří jinam (${facts.canonical})`);
  }
  if (response.ms > 5000) critical.push(`${url}: velmi pomalá odpověď (${(response.ms / 1000).toFixed(1)} s)`);
  else if (response.ms > 3000) warning.push(`${url}: pomalá odpověď (${(response.ms / 1000).toFixed(1)} s)`);
  return { critical, warning };
}

/** On-page SEO hygiene (improvement hints, never alarms). */
function hygieneIssues(url, facts) {
  const issues = [];
  if (!facts.title) issues.push({ url, kind: "title", text: "chybí title" });
  else if (facts.title.length > 70) issues.push({ url, kind: "title", text: `title je dlouhý (${facts.title.length} znaků)` });
  else if (facts.title.length < 20) issues.push({ url, kind: "title", text: `title je krátký (${facts.title.length} znaků)` });
  if (!facts.description) issues.push({ url, kind: "description", text: "chybí meta description" });
  else if (facts.description.length > 170) issues.push({ url, kind: "description", text: `popis je dlouhý (${facts.description.length} znaků)` });
  else if (facts.description.length < 50) issues.push({ url, kind: "description", text: `popis je krátký (${facts.description.length} znaků)` });
  if (facts.h1Count !== 1) issues.push({ url, kind: "h1", text: `počet H1: ${facts.h1Count}` });
  if (facts.jsonLdCount === 0) issues.push({ url, kind: "schema", text: "chybí strukturovaná data" });
  return issues;
}

/* ----------------------------------------------------------------- sitemap */

function parseSitemap(xml) {
  return [...String(xml).matchAll(/<loc>\s*([^<\s][^<]*?)\s*<\/loc>/gi)].map((m) => decodeEntities(m[1]));
}

function robotsProblems(text, site) {
  const problems = [];
  const lines = String(text).split(/\r?\n/).map((l) => l.trim());
  let inAll = false;
  for (const line of lines) {
    const ua = line.match(/^user-agent:\s*(.+)$/i);
    if (ua) inAll = ua[1].trim() === "*";
    if (inAll && /^disallow:\s*\/\s*$/i.test(line)) problems.push("robots.txt zakazuje celý web (Disallow: /)");
  }
  if (!lines.some((l) => /^sitemap:/i.test(l))) problems.push("robots.txt neodkazuje na sitemap");
  else if (site && !lines.some((l) => /^sitemap:/i.test(l) && l.includes(new URL(site).host))) {
    problems.push("robots.txt odkazuje na sitemap jiné domény");
  }
  return problems;
}

/** Deterministic daily sample so every day checks different URLs. */
function sampleUrls(urls, count, seed) {
  const hash = (s) => crypto.createHash("sha1").update(`${seed}|${s}`).digest("hex");
  return [...urls].sort((a, b) => (hash(a) < hash(b) ? -1 : 1)).slice(0, count);
}

function signature(items) {
  return crypto.createHash("sha1").update([...items].sort().join("\n")).digest("hex").slice(0, 12);
}

/* ---------------------------------------------------------- Search Console */

function toBase64Url(value) {
  return Buffer.from(value).toString("base64url");
}

/** Signed JWT for the service-account OAuth flow (RS256). */
function buildServiceAccountJwt(credentials, nowSeconds = Math.floor(Date.now() / 1000)) {
  const header = toBase64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = toBase64Url(
    JSON.stringify({
      iss: credentials.client_email,
      scope: "https://www.googleapis.com/auth/webmasters.readonly",
      aud: "https://oauth2.googleapis.com/token",
      iat: nowSeconds,
      exp: nowSeconds + 3300
    })
  );
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(`${header}.${claims}`);
  return `${header}.${claims}.${signer.sign(credentials.private_key).toString("base64url")}`;
}

async function getAccessToken(credentials) {
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: buildServiceAccountJwt(credentials)
    })
  });
  const data = await res.json();
  if (!res.ok || !data.access_token) throw new Error(`Google OAuth selhal: ${data.error_description || data.error || res.status}`);
  return data.access_token;
}

async function searchAnalytics(token, property, body) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(property)}/searchAnalytics/query`;
  const res = await fetch(url, {
    method: "POST",
    headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Search Console API ${res.status}: ${(data.error && data.error.message) || "chyba"}`);
  return data.rows || [];
}

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

/** 28-day window ending `lagDays` before `today` and the 28 days before it. */
function reportWindows(today = new Date(), lagDays = 3, length = 28) {
  const day = 86400000;
  const end = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()) - lagDays * day);
  const start = new Date(end.getTime() - (length - 1) * day);
  const prevEnd = new Date(start.getTime() - day);
  const prevStart = new Date(prevEnd.getTime() - (length - 1) * day);
  return {
    current: { startDate: isoDate(start), endDate: isoDate(end) },
    previous: { startDate: isoDate(prevStart), endDate: isoDate(prevEnd) }
  };
}

function totals(rows) {
  const clicks = rows.reduce((s, r) => s + r.clicks, 0);
  const impressions = rows.reduce((s, r) => s + r.impressions, 0);
  const weighted = rows.reduce((s, r) => s + r.position * r.impressions, 0);
  return {
    clicks,
    impressions,
    ctr: impressions ? clicks / impressions : 0,
    position: impressions ? weighted / impressions : 0
  };
}

function change(current, previous) {
  if (!previous) return current ? null : 0;
  return (current - previous) / previous;
}

/** Rough share of clicks by organic position, used only to spot weak titles. */
const EXPECTED_CTR = [0.28, 0.15, 0.1, 0.07, 0.05];

function expectedCtr(position) {
  const index = Math.min(Math.max(Math.round(position), 1), 5) - 1;
  return EXPECTED_CTR[index];
}

const key = (row, index = 0) => row.keys[index];

function analyzeSearchData({ queries, queriesPrev, pages, pagesPrev, queryPages, daily, windows }) {
  // Daily rows include anonymised queries, so they give the true totals; query rows do not.
  let cur = totals(queries);
  let prev = totals(queriesPrev);
  if (daily && windows) {
    const dailyCur = daily.filter((r) => key(r) >= windows.current.startDate);
    const dailyPrev = daily.filter((r) => key(r) < windows.current.startDate);
    if (dailyCur.length) cur = totals(dailyCur);
    if (dailyPrev.length) prev = totals(dailyPrev);
  }
  const findings = { totals: { cur, prev }, alerts: [], quickWins: [], ctrGaps: [], pageDrops: [], newQueries: [], zeroClickPages: [] };

  const pctClicks = change(cur.clicks, prev.clicks);
  if (prev.clicks >= 30 && pctClicks !== null && pctClicks <= -0.25) {
    findings.alerts.push(`Kliky z Googlu klesly o ${Math.round(-pctClicks * 100)} % (${prev.clicks} → ${cur.clicks}).`);
  }
  const pctImpr = change(cur.impressions, prev.impressions);
  if (prev.impressions >= 300 && pctImpr !== null && pctImpr <= -0.3) {
    findings.alerts.push(`Zobrazení ve vyhledávání klesla o ${Math.round(-pctImpr * 100)} % (${prev.impressions} → ${cur.impressions}).`);
  }
  if (prev.position && cur.position - prev.position >= 3 && cur.impressions >= 300) {
    findings.alerts.push(`Průměrná pozice se zhoršila z ${prev.position.toFixed(1)} na ${cur.position.toFixed(1)}.`);
  }

  if (daily && daily.length >= 14) {
    const sorted = [...daily].sort((a, b) => (key(a) < key(b) ? -1 : 1));
    const recent = sorted.slice(-7);
    const baseline = sorted.slice(0, -7);
    const avgRecent = recent.reduce((s, r) => s + r.clicks, 0) / recent.length;
    const avgBase = baseline.reduce((s, r) => s + r.clicks, 0) / baseline.length;
    if (avgBase >= 1.5 && avgRecent <= avgBase * 0.6) {
      findings.alerts.push(`Posledních 7 dní má průměr ${avgRecent.toFixed(1)} kliků denně proti ${avgBase.toFixed(1)} dříve.`);
    }
  }

  const bestPageForQuery = new Map();
  for (const row of queryPages || []) {
    const q = key(row, 0);
    const known = bestPageForQuery.get(q);
    if (!known || row.impressions > known.impressions) bestPageForQuery.set(q, { page: key(row, 1), impressions: row.impressions });
  }

  findings.quickWins = queries
    .filter((r) => r.position >= 8 && r.position <= 20 && r.impressions >= 20)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 15)
    .map((r) => ({ query: key(r), position: r.position, impressions: r.impressions, clicks: r.clicks, page: (bestPageForQuery.get(key(r)) || {}).page }));

  findings.ctrGaps = queries
    .filter((r) => r.position <= 5 && r.impressions >= 50 && r.ctr < expectedCtr(r.position) * 0.6)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 10)
    .map((r) => ({ query: key(r), position: r.position, impressions: r.impressions, ctr: r.ctr, expected: expectedCtr(r.position), page: (bestPageForQuery.get(key(r)) || {}).page }));

  const prevPages = new Map((pagesPrev || []).map((r) => [key(r), r]));
  findings.pageDrops = (pages || [])
    .map((r) => ({ page: key(r), now: r.clicks, before: (prevPages.get(key(r)) || { clicks: 0 }).clicks }))
    .concat((pagesPrev || []).filter((r) => !(pages || []).some((p) => key(p) === key(r))).map((r) => ({ page: key(r), now: 0, before: r.clicks })))
    .filter((r) => r.before >= 10 && r.now <= r.before * 0.6)
    .sort((a, b) => b.before - b.now - (a.before - a.now))
    .slice(0, 10);

  const prevQueries = new Set((queriesPrev || []).map((r) => key(r)));
  findings.newQueries = queries
    .filter((r) => !prevQueries.has(key(r)) && r.impressions >= 10)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 10)
    .map((r) => ({ query: key(r), position: r.position, impressions: r.impressions, page: (bestPageForQuery.get(key(r)) || {}).page }));

  findings.zeroClickPages = (pages || [])
    .filter((r) => r.impressions >= 100 && r.clicks === 0)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 10)
    .map((r) => ({ page: key(r), impressions: r.impressions, position: r.position }));

  return findings;
}

/* ------------------------------------------------------------------ report */

const nf = new Intl.NumberFormat("cs-CZ");
const pct = (v) => (v === null ? "nové" : `${v >= 0 ? "+" : ""}${Math.round(v * 100)} %`);
const short = (url) => (url ? String(url).replace(/^https?:\/\/www\.naturchem\.cz/, "") || "/" : "—");

function formatSearchReport(findings, windows, hygiene) {
  const { cur, prev } = findings.totals;
  const out = [];
  out.push(`Období: ${windows.current.startDate} až ${windows.current.endDate} (Česko, vyhledávání Google) proti ${windows.previous.startDate} až ${windows.previous.endDate}.`);
  out.push("");
  out.push("| | Nyní | Dříve | Změna |");
  out.push("|---|---:|---:|---:|");
  out.push(`| Kliky | ${nf.format(cur.clicks)} | ${nf.format(prev.clicks)} | ${pct(change(cur.clicks, prev.clicks))} |`);
  out.push(`| Zobrazení | ${nf.format(cur.impressions)} | ${nf.format(prev.impressions)} | ${pct(change(cur.impressions, prev.impressions))} |`);
  out.push(`| CTR | ${(cur.ctr * 100).toFixed(1)} % | ${(prev.ctr * 100).toFixed(1)} % | |`);
  out.push(`| Průměrná pozice | ${cur.position.toFixed(1)} | ${prev.position.toFixed(1)} | |`);
  out.push("");

  if (findings.alerts.length) {
    out.push("## Upozornění", "", ...findings.alerts.map((a) => `- ${a}`), "");
  } else {
    out.push("## Upozornění", "", "- Žádná výrazná anomálie.", "");
  }

  if (findings.quickWins.length) {
    out.push("## Rychlé výhry: dotazy na pozicích 8 až 20", "", "Stačí doladit title, H1, první odstavec, otázky a vnitřní odkazy, aby se dostaly na první stranu.", "");
    out.push("| Dotaz | Pozice | Zobrazení | Stránka |", "|---|---:|---:|---|");
    for (const r of findings.quickWins) out.push(`| ${r.query} | ${r.position.toFixed(1)} | ${r.impressions} | ${short(r.page)} |`);
    out.push("");
  }
  if (findings.ctrGaps.length) {
    out.push("## Slabý titulek: dobrá pozice, málo kliků", "", "Přepsat title a popis tak, aby odpovídaly dotazu.", "");
    out.push("| Dotaz | Pozice | Zobrazení | CTR | Očekáváno | Stránka |", "|---|---:|---:|---:|---:|---|");
    for (const r of findings.ctrGaps) out.push(`| ${r.query} | ${r.position.toFixed(1)} | ${r.impressions} | ${(r.ctr * 100).toFixed(1)} % | ${(r.expected * 100).toFixed(0)} % | ${short(r.page)} |`);
    out.push("");
  }
  if (findings.pageDrops.length) {
    out.push("## Stránky, které ztrácejí kliky", "", "Zkontrolovat indexaci, přesměrování a poslední změny na stránce.", "");
    out.push("| Stránka | Kliky nyní | Kliky dříve |", "|---|---:|---:|");
    for (const r of findings.pageDrops) out.push(`| ${short(r.page)} | ${r.now} | ${r.before} |`);
    out.push("");
  }
  if (findings.newQueries.length) {
    out.push("## Nové dotazy", "", "Zvážit samostatnou sekci nebo článek tam, kde dotaz míří na nevhodnou stránku.", "");
    out.push("| Dotaz | Pozice | Zobrazení | Stránka |", "|---|---:|---:|---|");
    for (const r of findings.newQueries) out.push(`| ${r.query} | ${r.position.toFixed(1)} | ${r.impressions} | ${short(r.page)} |`);
    out.push("");
  }
  if (findings.zeroClickPages.length) {
    out.push("## Stránky se zobrazeními, ale bez kliku", "", "| Stránka | Zobrazení | Pozice |", "|---|---:|---:|");
    for (const r of findings.zeroClickPages) out.push(`| ${short(r.page)} | ${r.impressions} | ${r.position.toFixed(1)} |`);
    out.push("");
  }
  if (hygiene) out.push(hygiene, "");
  out.push("---", "Výsledek změn se hodnotí až po 28 dnech. Zpráva nic nenasazuje; návrhy změn čekají na Vaše schválení.");
  return out.join("\n");
}

function formatHygiene(issues, checked) {
  if (!checked) return "";
  const byKind = {};
  for (const issue of issues) (byKind[issue.kind] = byKind[issue.kind] || []).push(issue);
  const out = [`## Technická kontrola vzorku ${checked} stránek`, ""];
  if (!issues.length) return `${out.join("\n")}Bez nálezů.`;
  const labels = { title: "Titulky", description: "Popisy", h1: "Nadpis H1", schema: "Strukturovaná data" };
  for (const [kind, list] of Object.entries(byKind)) {
    out.push(`**${labels[kind] || kind}:** ${list.length} nálezů`);
    for (const issue of list.slice(0, 5)) out.push(`- ${short(issue.url)}: ${issue.text}`);
  }
  return out.join("\n");
}

/* ------------------------------------------------------------------- GitHub */

function githubContext() {
  const repo = process.env.GITHUB_REPOSITORY;
  const token = process.env.GITHUB_TOKEN;
  if (!repo || !token) return null;
  return { repo, token, assignee: process.env.ALERT_ASSIGNEE || process.env.GITHUB_REPOSITORY_OWNER || repo.split("/")[0] };
}

async function github(ctx, path, { method = "GET", body } = {}) {
  const res = await fetch(`https://api.github.com/repos/${ctx.repo}${path}`, {
    method,
    headers: {
      authorization: `Bearer ${ctx.token}`,
      accept: "application/vnd.github+json",
      "x-github-api-version": "2022-11-28",
      "content-type": "application/json"
    },
    body: body ? JSON.stringify(body) : undefined
  });
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok && res.status !== 422) throw new Error(`GitHub ${method} ${path}: ${res.status} ${text.slice(0, 200)}`);
  return { status: res.status, data };
}

async function ensureLabel(ctx, name, color, description) {
  await github(ctx, "/labels", { method: "POST", body: { name, color, description } });
}

async function findOpenIssue(ctx, label) {
  const { data } = await github(ctx, `/issues?state=open&labels=${encodeURIComponent(label)}&per_page=5`);
  return (data || []).find((issue) => !issue.pull_request) || null;
}

async function createIssue(ctx, { title, body, labels }) {
  const mention = `\n\ncc @${ctx.assignee}`;
  const { data } = await github(ctx, "/issues", { method: "POST", body: { title, body: body + mention, labels, assignees: [ctx.assignee] } });
  return data;
}

module.exports = {
  DEFAULT_SITE,
  fetchText,
  analyzePage,
  pageIssues,
  hygieneIssues,
  parseSitemap,
  robotsProblems,
  sampleUrls,
  signature,
  buildServiceAccountJwt,
  getAccessToken,
  searchAnalytics,
  reportWindows,
  totals,
  analyzeSearchData,
  formatSearchReport,
  formatHygiene,
  githubContext,
  github,
  ensureLabel,
  findOpenIssue,
  createIssue
};
