/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const matter = require('gray-matter');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const Markdown = require('react-markdown').default;
const remarkGfm = require('remark-gfm').default;
const root = path.resolve(__dirname, '..');
const load = require('./lib/load-typescript')({
  './article-reading.module.css': { __esModule: true, default: new Proxy({}, { get: (_, name) => String(name) }) }
});
const { renderArticleMarkdown } = load(path.join(root, 'src/components/ArticleMarkdown.tsx'));
const { ArticleReadingLayout } = load(path.join(root, 'src/components/ArticleReadingLayout.tsx'));
const { getRelatedServicesForArticle } = load(path.join(root, 'src/lib/poradna-service-links.ts'));
for (const file of ['src/components/ArticleMarkdown.tsx','src/components/ArticleReadingLayout.tsx','src/lib/article-reading.ts']) {
  const source = fs.readFileSync(path.join(root,file),'utf8');
  assert.doesNotMatch(source, /["']use client["']|useEffect\(|next\/link|dangerouslySetInnerHTML/, 'Keep the reader entirely server rendered: ' + file);
}
const fixture = '# Úvod\n\n## Časté **dotazy** s [odkazem](/sluzby/) a `kódem`\n\nText.\n\n### Podrobnost\n\n## Časté dotazy s odkazem a kódem\n\n```md\n## Toto není kapitola\n```\n\nDalší kapitola\n---\n\n> ## Citace není kapitola obsahu\n\n| Název | Výsledek |\n|---|---|\n| Případ | 1 |\n\n**Podklady** [Pošlete zadání](/kontakt/?service=Emise#poptavkovy-formular)';
const parsed = renderArticleMarkdown(fixture);
assert.deepEqual(parsed.headings.map(h=>h.id),['kapitola-uvod','kapitola-caste-dotazy-s-odkazem-a-kodem','kapitola-caste-dotazy-s-odkazem-a-kodem-2','kapitola-dalsi-kapitola']);
const rendered = renderToStaticMarkup(parsed.content);
assert.doesNotMatch(rendered, /<h1\b/);
assert.match(rendered, /class="article-inquiry-callout"/);
assert.match(rendered, /role="region" aria-label="Tabulka v článku" tabindex="0"/);
assert.ok(rendered.indexOf('class="article-table-hint"') < rendered.indexOf('class="article-table-wrap"'), 'Explain horizontal scrolling before the table');
assert.equal(renderArticleMarkdown('### Jen podkapitoly\n\n### Druhé téma').headings.length,2);
assert.equal(renderArticleMarkdown('Odstavec bez nadpisu.').headings.length,0);
assert.equal(renderArticleMarkdown('## **Emise &amp; vlivy**').headings[0].title,'Emise & vlivy');
let checked = 0;
for (const [locale, folder] of [['cs','articles'],['en','articles-en'],['de','articles-de']]) {
  for (const file of fs.readdirSync(path.join(root,'content',folder)).filter(f=>f.endsWith('.md') && !f.startsWith('_') && !/^(readme|changelog)\.md$/i.test(f))) {
    const article = matter(fs.readFileSync(path.join(root,'content',folder,file),'utf8'));
    const body = article.content;
    const result = renderArticleMarkdown(body,locale);
    const html = renderToStaticMarkup(result.content);
    const original = renderToStaticMarkup(Markdown({children:body,remarkPlugins:[remarkGfm],components:{h1:({children})=>React.createElement('h2',{},children)}}));
    const text = value => value.replace(/<p class="article-table-hint">[\s\S]*?<\/p>/g,'').replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();
    assert.equal(text(html),text(original),'Do not change or hide source article text: ' + file);
    const hrefs = value => [...value.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(m=>m[1]);
    assert.deepEqual(hrefs(html),hrefs(original),'Preserve all source and service links: ' + file);
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
    assert.equal(new Set(ids).size,ids.length,'Unique anchors: ' + file);
    for (const heading of result.headings) assert.equal(ids.filter(id=>id===heading.id).length,1);
    const shell = renderToStaticMarkup(React.createElement(ArticleReadingLayout,{locale,headings:result.headings,excerpt:article.data.excerpt||'',summaryLabel:'Summary',summaryAria:'Summary'},result.content));
    assert.equal(shell.includes('id="article-outline"'),result.headings.length>1);
    assert.equal([...shell.matchAll(/data-article-outline-link/g)].length,result.headings.length>1?result.headings.length*2:0);
    for (const service of getRelatedServicesForArticle(article.data.title||file,article.data.slug||file,undefined,locale)) assert.ok(!service.title.startsWith('/'),'No raw URL as a service title: ' + file);
    checked++;
  }
}
assert.ok(checked>=180);
console.log('PASS article reader: '+checked+' source articles, exact text/links, unique AST anchors, fences/Setext/duplicates, native accessible outline, localized service labels; no extra client JS');
if (process.argv.includes('--rendered')) {
  function files(dir) { return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):e.name.endsWith('.html')?[path.join(dir,e.name)]:[]); }
  let count=0;
  for (const file of files(path.join(root,'.next/server/app'))) {
    const html=fs.readFileSync(file,'utf8');
    if (!html.includes('data-article-reading-body')) continue;
    assert.equal([...html.matchAll(/<h1\b/g)].length,1,'One article headline: ' + file);
    const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
    for (const [,target] of html.matchAll(/<a\b[^>]*href="#(kapitola-[^"]+)"[^>]*data-article-outline-link/g)) assert.equal(ids.filter(id=>id===target).length,1,'Rendered outline target: ' + file);
    assert.match(html,/"@type":"Article"/);
    assert.match(html,/class="article-body" data-article-reading-body/);
    const tableCount = [...html.matchAll(/class="article-table-wrap"/g)].length;
    const explainedTables = [...html.matchAll(/<p class="article-table-hint">[^<]*<\/p><div class="article-table-wrap"/g)].length;
    assert.equal(explainedTables, tableCount, 'Rendered mobile hint comes before each table: ' + file);
    count++;
  }
  assert.ok(count>=180,'Check all rendered article locales');
  console.log('PASS article reader rendered: '+count+' static article pages, complete HTML and valid outline targets');
}
