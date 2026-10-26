/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const matter = require("gray-matter");
const load = require("./lib/load-typescript.js")();
const root = path.resolve(__dirname, "..");
const { PORADNA_TOPICS, resolveArticleTopic, heroThemeForArticle } = load(path.join(root, "src/lib/poradna-topic.ts"));
const { PORADNA_TOPICS_EN } = load(path.join(root, "src/lib/poradna-topic-en.ts"));
const { PORADNA_TOPICS_EN: PORADNA_TOPICS_DE } = load(path.join(root, "src/lib/poradna-topic-de.ts"));
const { readCatalog } = require("./scheduled_publication.js");
const { buildArticleIndexes } = require("./generate_article_indexes.js");
const { getRelatedServicesForArticle } = load(path.join(root, "src/lib/poradna-service-links.ts"));

const expectedTopics = new Map([
  ["Hluk", "Hluk a vibrace"],
  ["Noise", "Hluk a vibrace"],
  ["Work environment", "Pracovní prostředí"]
]);

for (const topic of PORADNA_TOPICS) {
  for (const label of [topic, PORADNA_TOPICS_EN[topic], PORADNA_TOPICS_DE[topic]]) {
    expectedTopics.set(label, topic);
    assert.equal(resolveArticleTopic({ title: "Neutral headline", topic: label }), topic, label);
    assert.equal(resolveArticleTopic({ title: "Neutral headline", topic: ` ${label} ` }), topic, `Trim ${label}`);
  }
}
for (const [label, topic] of expectedTopics) {
  assert.equal(resolveArticleTopic({ title: "Neutral headline", topic: label }), topic, label);
}
assert.equal(resolveArticleTopic({ title: "Měření hluku", topic: "Work environment" }), "Pracovní prostředí", "Explicit topic wins over headline keywords");
assert.equal(resolveArticleTopic({ title: "Měření hluku" }), "Hluk a vibrace", "Missing topic retains existing Czech fallback");
for (const topic of ["Unknown topic", "toString", "constructor", "__proto__"]) {
  assert.equal(resolveArticleTopic({ title: "Měření hluku", topic }), "Hluk a vibrace", `Unknown label ${topic}`);
}
assert.equal(heroThemeForArticle({ title: "Neutral headline", topic: "Work environment" }), "pracovni-prostredi");

let checked = 0;
let fallbackOnly = 0;
for (const folder of ["articles", "articles-en", "articles-de"]) {
  for (const file of fs.readdirSync(path.join(root, "content", folder))) {
    if (!file.endsWith(".md") || file.startsWith("_") || /^(?:readme|changelog)\.md$/i.test(file)) continue;
    const { data } = matter(fs.readFileSync(path.join(root, "content", folder, file), "utf8"));
    const rawTopic = typeof data.topic === "string" ? data.topic.trim() : "";
    const actual = resolveArticleTopic({ title: data.title, topic: rawTopic });
    if (rawTopic) {
      assert.ok(expectedTopics.has(rawTopic), `${folder}/${file}: unsupported authored topic ${rawTopic}`);
      assert.equal(actual, expectedTopics.get(rawTopic), `${folder}/${file}: preserve the authored subject`);
    } else {
      fallbackOnly++;
      assert.ok(PORADNA_TOPICS.includes(actual), `${folder}/${file}: canonical fallback`);
    }
    checked++;
  }
}

// Exercise the same pipeline as the static listing/filter payload, without
// writing indexes or making future/draft articles public on the real site.
const catalog = readCatalog();
const indexes = buildArticleIndexes(catalog, Date.parse("2999-01-01"));
for (const locale of ["en", "de"]) {
  const listing = indexes.listings[locale].find(a => a.slug === "mereni-mikroklimatu-na-pracovisti-teplota-vlhkost-a-proudeni-vzduchu");
  assert.ok(listing, `${locale}: actual microclimate article`);
  assert.equal(listing.topic, "Pracovní prostředí", `${locale}: workplace filter rather than emissions`);
}
const related = getRelatedServicesForArticle("Neutral headline", "generic-article", "Pracovní prostředí", "de");
assert.ok(related.some(link => link.href === "/sluzby/pracovni-prostredi"), "Canonical subject retains the relevant inquiry path");

console.log(`PASS article topics: ${checked} sources, ${fallbackOnly} unchanged title fallbacks, canonical/EN/DE and legacy labels, prototype-safe unknowns, static filters and workplace service links`);
