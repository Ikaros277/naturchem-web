/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { readCatalog, planPublication, assertSafeDeployment, assertPublicationEnabled, triggerDeployment, fetchJson } = require("./scheduled_publication.js");
const root = path.resolve(__dirname, "..");
const load = require("./lib/load-typescript.js")();
const { normalizeArticleDate } = load(path.join(root, "src/lib/format-date.ts"));
const { buildArticleIndexes } = require("./generate_article_indexes.js");
const commit = "a".repeat(40);
const old = { locale: "cs", slug: "old", publishedAt: "2026-08-01T00:00:00.000Z" };
const due = { locale: "cs", slug: "new", publishedAt: normalizeArticleDate("2026-09-02") };
const snapshot = { version: 1, commit, builtAt: "2026-08-31T07:00:00.000Z", articles: [old] };
const now = Date.parse("2026-09-02T06:00:00Z");

async function main() {
  const enabled = { ENABLE_SCHEDULED_PUBLICATION: "true", GITHUB_REPOSITORY: "Ikaros277/naturchem-web", GITHUB_REF: "refs/heads/main" };
  assertPublicationEnabled(enabled);
  for (const env of [{}, { ...enabled, ENABLE_SCHEDULED_PUBLICATION: "false" }, { ...enabled, GITHUB_REPOSITORY: "other/repo" }, { ...enabled, GITHUB_REF: "refs/heads/codex/test" }]) {
    assert.throws(() => assertPublicationEnabled(env), /disabled/);
  }
  assert.equal(normalizeArticleDate("2026-09-02"), "2026-09-01T22:00:00.000Z");
  assert.equal(normalizeArticleDate("2026-12-02"), "2026-12-01T23:00:00.000Z");
  assert.equal(normalizeArticleDate(new Date("2026-09-02")), due.publishedAt);
  assert.deepEqual(planPublication([old, due], snapshot, commit, now), [due]);
  assert.deepEqual(planPublication([old, due], snapshot, commit, Date.parse("2026-09-01T21:59:59Z")), []);
  assert.deepEqual(planPublication([old, due], { ...snapshot, articles: [old, due] }, commit, now), []);
  assert.throws(() => planPublication([old, due], snapshot, "b".repeat(40), now), /differ/);
  assert.throws(() => planPublication([old], { ...snapshot, articles: [] }, commit, now), /older public/);
  assert.throws(() => planPublication([old, old], snapshot, commit, now), /Duplicate/);
  assert.throws(() => planPublication([], null, commit, now), /Invalid/);
  assert.throws(() => planPublication([], { ...snapshot, builtAt: "2999-01-01" }, commit, now), /Invalid/);
  assertSafeDeployment([due], { state: "success", updated_at: snapshot.builtAt });
  for (const state of ["pending", "failure", "error"]) assert.throws(() => assertSafeDeployment([due], { state }), /no automatic retry/);
  assert.throws(() => assertSafeDeployment([due], { state: "success", updated_at: "2026-09-02T01:00:00Z" }), /already ran/);

  const fixtureRoot = fs.mkdtempSync(path.join(os.tmpdir(), "naturchem-publication-test-"));
  try {
    for (const folder of ["articles", "articles-en", "articles-de"]) fs.mkdirSync(path.join(fixtureRoot, folder));
    const fixture = (slug, status, publishedAt) => `---\nslug: ${slug}\nstatus: ${status}\npublishedAt: ${publishedAt}\n---\nSynthetic fixture.\n`;
    fs.writeFileSync(path.join(fixtureRoot, "articles/renamed-file.md"), fixture("real-public-slug", "published", "2026-09-02"));
    fs.writeFileSync(path.join(fixtureRoot, "articles/private.md"), fixture("private", "draft", "2026-08-01"));
    fs.writeFileSync(path.join(fixtureRoot, "articles/README.md"), fixture("metadata", "published", "2026-08-01"));
    fs.writeFileSync(path.join(fixtureRoot, "articles-en/future.md"), fixture("future", "scheduled", "2999-01-01"));
    fs.writeFileSync(path.join(fixtureRoot, "articles-de/invalid.md"), fixture("invalid", "published", "not-a-date"));
    fs.writeFileSync(path.join(fixtureRoot, "articles/multiline.md"), '---\nslug: multiline\ntitle: >-\n  Complete title\n  across two lines\nexcerpt: >-\n  Complete excerpt\n  across two lines\npublishedAt: 2026-08-01\n---\nUseful body.\n');
    const catalog = readCatalog(fixtureRoot);
    assert.equal(catalog.length, 3);
    assert.ok(catalog.some((a) => a.slug === "real-public-slug" && a.publishedAt === due.publishedAt));
    assert.deepEqual(planPublication(catalog, { ...snapshot, articles: [{ locale: "cs", slug: "multiline" }] }, commit, now).map((a) => a.slug), ["real-public-slug"]);
    const before = buildArticleIndexes(catalog, Date.parse("2026-09-01T21:59:59Z"));
    assert.deepEqual(Object.keys(before.localeMap), ["multiline"]);
    assert.deepEqual(before.searches.cs.map((a) => a.slug), ["multiline"]);
    assert.deepEqual(before.listings.cs.map(a => a.slug), ["multiline"]);
    assert.equal(before.listings.cs[0].title, "Complete title across two lines");
    assert.ok(before.searches.cs[0].s.includes("complete excerpt across two lines"));
    assert.ok(before.llms.includes("Complete title across two lines"));
    assert.ok(!before.llms.includes("real-public-slug") && !before.llms.includes("/future/"));
    const after = buildArticleIndexes(catalog, Date.parse(due.publishedAt));
    assert.ok(after.localeMap["real-public-slug"]);
    assert.ok(after.listings.cs.some(a => a.slug === "real-public-slug"));
    assert.equal(after.listings.en.length, 0, "No future articles in the lazy listing index");
    assert.ok(after.llms.includes("/real-public-slug/"));
    assert.ok(!after.llms.includes("/private/") && !after.llms.includes("/metadata/") && !after.llms.includes("/invalid/"));
  } finally {
    const resolved = fs.realpathSync(fixtureRoot);
    assert.equal(path.dirname(resolved).toLowerCase(), fs.realpathSync(os.tmpdir()).toLowerCase());
    assert.ok(path.basename(resolved).startsWith("naturchem-publication-test-"));
    fs.rmSync(resolved, { recursive: true });
  }
  let posts = 0;
  const mockPost = async (url, options) => { posts++; assert.equal(options.method, "POST"); assert.equal(options.redirect, "error"); return { ok: true }; };
  const log = console.log;
  try {
    console.log = () => {};
    await triggerDeployment("https://api.vercel.com/v1/integrations/deploy/prj_TEST/test-token", mockPost);
  } finally { console.log = log; }
  assert.equal(posts, 1);
  for (const hook of [undefined, "https://example.invalid/secret", "https://api.vercel.com.evil.invalid/v1/integrations/deploy/prj_TEST/token", "https://api.vercel.com/v1/integrations/deploy/prj_TEST/token?redirect=1"]) {
    await assert.rejects(() => triggerDeployment(hook, mockPost));
  }
  assert.equal(posts, 1, "Invalid hooks are never requested");
  let attempts = 0;
  await assert.rejects(() => triggerDeployment("https://api.vercel.com/v1/integrations/deploy/prj_TEST/test-token", async () => { attempts++; throw new Error("SECRET_URL_MUST_NOT_LEAK"); }), (error) => !error.message.includes("SECRET") && error.message.includes("uncertain"));
  assert.equal(attempts, 1, "No retry after an ambiguous result");
  await assert.rejects(() => fetchJson("https://example.invalid", {}, async () => ({ ok: false, status: 404 })), /404/);
  const route = fs.readFileSync(path.join(root, "src/app/publication-state.json/route.ts"), "utf8");
  assert.match(route, /dynamic = "force-static"/);
  assert.match(route, /revalidate = false/);
  assert.match(route, /getArticles\(locale\)/);
  assert.doesNotMatch(route, /getAllArticles|readAllArticles/);
  assert.match(route, /"X-Robots-Tag": "noindex"/);
  const workflow = fs.readFileSync(path.join(root, ".github/workflows/scheduled-publication.yml"), "utf8");
  assert.match(workflow, /vars\.ENABLE_SCHEDULED_PUBLICATION == 'true'/);
  assert.match(workflow, /github\.ref == 'refs\/heads\/main'/);
  assert.match(workflow, /persist-credentials: false/);
  assert.doesNotMatch(workflow, /permissions:[\s\S]*?contents: write/);
  console.log("PASS publication: Prague dates, drafts, filename-independent slugs, stale/mismatched deployment guards, no-op runs, failure stops and secret-safe single hook attempt (all mocked)");
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
