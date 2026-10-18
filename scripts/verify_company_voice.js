/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");
const root = path.resolve(__dirname, "..");
const rejected = [
  "Doložený rozsah laboratoře", "Doložené realizace", "Další doložené ukázky",
  "Důkaz odborné způsobilosti", "Na této stránce rychle zjistíte",
  "Tato stránka popisuje službu:", "Stručně a věcně", "Nejsme jen laboratoř",
];
let checked = 0;
function checkString(value, file) {
  for (const phrase of rejected) assert.ok(!value.includes(phrase), file + ": use company voice, not internal audit copy: " + phrase);
}
function visitDirectory(directory) {
  for (const entry of fs.readdirSync(directory, {withFileTypes:true})) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) visitDirectory(file);
    else if (/\.tsx?$/.test(file)) {
      const ast = ts.createSourceFile(file, fs.readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true);
      const visit = node => {
        if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node) || ts.isJsxText(node)) checkString(node.text, path.relative(root, file));
        ts.forEachChild(node, visit);
      };
      visit(ast);
      checked++;
    }
  }
}
visitDirectory(path.join(root, "src"));
function visitMessages(value) {
  if (typeof value === "string") checkString(value, "messages/cs.json");
  else if (value && typeof value === "object") Object.values(value).forEach(visitMessages);
}
visitMessages(JSON.parse(fs.readFileSync(path.join(root, "messages/cs.json"), "utf8")));
const scopeComponent = fs.readFileSync(path.join(root, "src/components/AccreditedMeasurementScope.tsx"), "utf8");
assert.ok(scopeComponent.includes("Rozsah služeb naší laboratoře"));
// Do not ban technical uncertainty, method qualifications or confidentiality.
// Those are protected by scope/content tests, not erased to strengthen marketing.
console.log("PASS company voice: " + checked + " source files + Czech messages; rejected editorial phrases absent, provider voice on the laboratory scope");
