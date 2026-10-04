/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");
const matter = require("gray-matter");
const load = require("./lib/load-typescript.js")();
const root = path.resolve(__dirname, "..");
const { normalizeArticleDate } = load(path.join(root, "src/lib/format-date.ts"));
const repository = "Ikaros277/naturchem-web";
const site = "https://www.naturchem.cz";

function readCatalog(contentRoot = path.join(root, "content")) {
  const articles = [];
  for (const [locale, folder] of [["cs", "articles"], ["en", "articles-en"], ["de", "articles-de"]]) {
    for (const file of fs.readdirSync(path.join(contentRoot, folder))) {
      if (!file.endsWith(".md") || /^(?:readme|changelog)\.md$/i.test(file) || file.startsWith("_")) continue;
      const { data, content } = matter(fs.readFileSync(path.join(contentRoot, folder, file), "utf8"));
      const status = typeof data.status === "string" ? data.status.trim().toLowerCase() : "published";
      if (status === "draft") continue;
      const publishedAt = normalizeArticleDate(data.publishedAt);
      // Match the site's public filter: missing/invalid dates are not public.
      if (!publishedAt) continue;
      const slug = typeof data.slug === "string" && data.slug.trim() ? data.slug.trim() : file.slice(0, -3);
      articles.push({
        locale, slug, publishedAt,
        title: typeof data.title === "string" && data.title.trim() ? data.title.trim() : slug,
        excerpt: typeof data.excerpt === "string" ? data.excerpt.trim() : "",
        topic: typeof data.topic === "string" ? data.topic.trim() : undefined,
        heroImage: typeof data.heroImage === "string" ? data.heroImage.trim() : undefined,
        body: content
      });
    }
  }
  return articles;
}

function planPublication(catalog, deployed, commit, now = Date.now()) {
  if (!deployed || deployed.version !== 1 || !Array.isArray(deployed.articles) ||
      !Number.isFinite(Date.parse(deployed.builtAt)) || Date.parse(deployed.builtAt) > now + 300000) {
    throw new Error("Invalid production publication snapshot; no deployment requested.");
  }
  // Never deploy unrelated new code merely because a date has elapsed.
  if (!/^[a-f0-9]{40}$/.test(commit) || deployed.commit !== commit) {
    throw new Error("Production and checked-out main differ; finish the approved release first.");
  }
  const key = (a) => `${a.locale}/${a.slug}`;
  const publicKeys = new Set(deployed.articles.map(key));
  const seen = new Set();
  const due = [];
  for (const article of catalog) {
    if (seen.has(key(article))) throw new Error("Duplicate public article slug; no deployment requested.");
    seen.add(key(article));
    const date = Date.parse(article.publishedAt);
    if (date > now || publicKeys.has(key(article))) continue;
    if (!Number.isFinite(date) || date <= Date.parse(deployed.builtAt)) {
      throw new Error("An older public article is missing; investigate instead of repeating builds.");
    }
    due.push(article);
  }
  return due;
}

function assertSafeDeployment(due, latestStatus) {
  if (!due.length) return;
  if (!latestStatus || latestStatus.state !== "success") {
    throw new Error("Vercel is pending, failed or unverified; no automatic retry.");
  }
  const latestPublication = Math.max(...due.map((a) => Date.parse(a.publishedAt)));
  if (!Number.isFinite(Date.parse(latestStatus.updated_at)) || Date.parse(latestStatus.updated_at) >= latestPublication) {
    throw new Error("A deployment already ran after the publication date; inspect the missing article.");
  }
}

async function fetchJson(url, headers = {}, fetcher = fetch) {
  let response;
  try {
    response = await fetcher(url, { headers, redirect: "error", signal: AbortSignal.timeout(20000), cache: "no-store" });
  } catch {
    throw new Error("Read-only publication check failed; no deployment requested.");
  }
  if (!response.ok) throw new Error(`Publication check returned HTTP ${response.status}; no deployment requested.`);
  return response.json();
}

async function triggerDeployment(hook, fetcher = fetch) {
  let url;
  try { url = new URL(hook); } catch { throw new Error("Deploy hook is not configured."); }
  if (url.protocol !== "https:" || url.hostname !== "api.vercel.com" || url.username || url.password ||
      url.port || url.search || url.hash || !/^\/v1\/integrations\/deploy\/prj_[\w-]+\/[\w-]+$/.test(url.pathname)) {
    throw new Error("Deploy hook must be the HTTPS Vercel hook for this project's main branch.");
  }
  // One attempt only. Do not log the URL/body or retry an ambiguous timeout.
  let response;
  try {
    response = await fetcher(url, { method: "POST", redirect: "error", signal: AbortSignal.timeout(20000) });
  } catch {
    throw new Error("Deploy request outcome is uncertain. Inspect Vercel before retrying.");
  }
  if (!response.ok) throw new Error(`Deploy hook returned HTTP ${response.status}. Inspect Vercel before retrying.`);
  console.log("One deployment requested. This is not confirmation that the article is live.");
}

function assertPublicationEnabled(env) {
  if (env.ENABLE_SCHEDULED_PUBLICATION !== "true" ||
      env.GITHUB_REPOSITORY !== repository || env.GITHUB_REF !== "refs/heads/main") {
    throw new Error("Automatic publication is disabled or this is not the approved repository/main.");
  }
}

async function main() {
  const deploy = process.argv.includes("--deploy");
  if (process.argv.slice(2).some((arg) => !["--check", "--deploy"].includes(arg))) throw new Error("Use --check or --deploy.");
  if (deploy) assertPublicationEnabled(process.env);
  const commit = execFileSync("git", ["rev-parse", "HEAD"], { cwd: root, encoding: "utf8" }).trim();
  const deployed = await fetchJson(`${site}/publication-state.json?check=${Date.now()}`);
  const due = planPublication(readCatalog(), deployed, commit);
  if (!due.length) {
    console.log("No newly due articles. No deployment needed.");
    return;
  }
  console.log(`${due.length} article locale(s) became due after the deployed build.`);
  const headers = { Accept: "application/vnd.github+json", "User-Agent": "naturchem-publication-check" };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const statuses = await fetchJson(`https://api.github.com/repos/${repository}/commits/${commit}/statuses?per_page=100`, headers);
  const vercelStatus = statuses.find((s) => /^vercel(?:\s|$|\/)/i.test(s.context));
  assertSafeDeployment(due, vercelStatus);
  const mainBranch = await fetchJson(`https://api.github.com/repos/${repository}/branches/main`, headers);
  if (mainBranch.commit?.sha !== commit) throw new Error("Main changed during the check; no deployment requested.");
  if (deploy) await triggerDeployment(process.env.VERCEL_DEPLOY_HOOK);
  else console.log("Read-only check passed. Deployment was NOT requested.");
}

module.exports = { readCatalog, planPublication, assertSafeDeployment, assertPublicationEnabled, triggerDeployment, fetchJson };
if (require.main === module) main().catch((error) => { console.error(error.message); process.exitCode = 1; });
