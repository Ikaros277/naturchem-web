/* eslint-disable @typescript-eslint/no-require-imports */
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

function hashArticleSources(sources) {
  const normalized = [...sources].sort(([a], [b]) => a.localeCompare(b))
    .map(([file, content]) => [file, content.replace(/\r\n/g, "\n")]);
  return crypto.createHash("sha256").update(JSON.stringify(normalized)).digest("hex");
}

function readArticleContentVersion(contentRoot) {
  const sources = [];
  for (const folder of ["articles", "articles-en", "articles-de"]) {
    for (const file of fs.readdirSync(path.join(contentRoot, folder))) {
      if (!file.endsWith(".md")) continue;
      sources.push([`${folder}/${file}`, fs.readFileSync(path.join(contentRoot, folder, file), "utf8")]);
    }
  }
  return hashArticleSources(sources);
}

module.exports = { hashArticleSources, readArticleContentVersion };
