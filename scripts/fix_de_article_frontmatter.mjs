import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "content", "articles-de");
let fixed = 0;

for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".md"))) {
  const fp = path.join(dir, file);
  const raw = fs.readFileSync(fp, "utf8");
  try {
    matter(raw);
    continue;
  } catch {
    // needs fix
  }

  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    console.log("skip no frontmatter", file);
    continue;
  }

  let fm = match[1];
  const fixField = (key) => {
    const re = new RegExp(`^${key}: (.*)$`, "gm");
    fm = fm.replace(re, (_line, val) => {
      let trimmed = val.trim();
      if (
        (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
        (trimmed.startsWith("'") && trimmed.endsWith("'"))
      ) {
        return `${key}: ${trimmed}`;
      }
      trimmed = trimmed.replace(/^["„“]+|["„“]+$/g, "").trim();
      return `${key}: ${JSON.stringify(trimmed)}`;
    });
  };

  fixField("title");
  fixField("excerpt");

  const body = raw.slice(match[0].length);
  const next = `---\n${fm}\n---${body}`;

  try {
    matter(next);
    fs.writeFileSync(fp, next, "utf8");
    fixed += 1;
    console.log("fixed", file);
  } catch (error) {
    console.log("still bad", file, error instanceof Error ? error.message : error);
  }
}

console.log("fixed count", fixed);
