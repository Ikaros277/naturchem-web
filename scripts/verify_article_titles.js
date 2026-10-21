/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const matter = require('gray-matter');
const root = path.resolve(__dirname, '..');
const load = require('./lib/load-typescript')();
const { articleSearchMetadata, fallbackSearchTitle, maxSearchTitleLength } = load(path.join(root, 'src/lib/article-seo.ts'));
const { fitsSearchTitleWidth, estimateSearchTitleWidth, searchTitleBrandSuffix } = load(path.join(root, 'src/lib/search-title-width.ts'));
let checked = 0;
for (const [locale, folder] of [['cs', 'articles'], ['en', 'articles-en'], ['de', 'articles-de']]) {
  const seen = new Set();
  for (const file of fs.readdirSync(path.join(root, 'content', folder))) {
    if (!file.endsWith('.md') || file.startsWith('_') || /^(readme|changelog)\.md$/i.test(file)) continue;
    const { data } = matter(fs.readFileSync(path.join(root, 'content', folder, file), 'utf8'));
    if (!data.title) continue;
    const article = { ...data, slug: data.slug || file.slice(0, -3) };
    const title = articleSearchMetadata(article, locale).title;
    assert.equal(title, data.title, 'CMS headline must match search title, including drafts/future dates: ' + file);
    assert.ok(title.length <= maxSearchTitleLength, 'Headline character budget: ' + file);
    assert.ok(fitsSearchTitleWidth(title), 'Approximate full-title width including brand: ' + file);
    assert.ok(!seen.has(title.toLocaleLowerCase(locale)), 'Distinct article headline: ' + file);
    assert.doesNotMatch(title, /\u2026|\.\.\.$/, 'Write complete titles, not ellipses');
    seen.add(title.toLocaleLowerCase(locale));
    checked++;
  }
}
assert.equal(articleSearchMetadata({ slug: 'mereni-vibraci-ridicu-vzv-priprava-smeny', title: 'Měření vibrací VZV: podklady', excerpt: '' }, 'cs').title, 'Měření vibrací VZV: podklady', 'A CMS edit must not be overridden by an old per-slug label');
assert.ok(estimateSearchTitleWidth('W'.repeat(40)) > estimateSearchTitleWidth('i'.repeat(40)), 'Widths, not just character counts');
for (const input of ['W'.repeat(50), 'A long future article title without a separator and with many additional words', 'Příliš dlouhý nadpis: ' + 'široké téma '.repeat(20)]) {
  const title = fallbackSearchTitle(input);
  assert.ok(title && title.length <= maxSearchTitleLength && fitsSearchTitleWidth(title));
}
assert.ok(estimateSearchTitleWidth(searchTitleBrandSuffix) > 0);
const cms = fs.readFileSync(path.join(root, 'public/admin/config.yml'), 'utf8');
assert.ok(cms.includes('{{status}}'), 'Show publication state in the CMS list');
assert.ok(cms.includes('Google může'), 'No guaranteed no-truncation promise in editorial guidance');
console.log('PASS ' + checked + ' article headlines including future/draft: concise unique CMS/H1/search text, 50 characters and approximate 560px full-title budget; Google display is not guaranteed');
