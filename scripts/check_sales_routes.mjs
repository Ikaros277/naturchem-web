/**
 * Smoke-test prodej category and product URLs from the built catalog.
 * Usage: node scripts/check_sales_routes.mjs [baseUrl]
 */
const base = (process.argv[2] ?? "http://localhost:3011").replace(/\/$/, "");

const categoryChecks = [
  "/prodej/senseca/sound-vibration/",
  "/prodej/senseca/temperature/",
  "/prodej/senseca/data-acquisition-systems/",
  "/prodej/pcf-elettronica/portable-monitors/",
  "/prodej/senseca/aeolus-3-3-axis-ultrasonic-anemometer/"
];

const siteChecks = [
  "/",
  "/proc-naturchem/",
  "/sluzby/mereni-emisi/",
  "/mereni-prasnosti/",
  "/llms.txt"
];

const all = [...siteChecks, ...categoryChecks];
const failures = [];

for (const path of all) {
  const url = `${base}${path}`;
  try {
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok) failures.push({ url, status: res.status });
    else process.stdout.write(`OK ${res.status} ${path}\n`);
  } catch (err) {
    failures.push({ url, status: err.message });
  }
}

if (failures.length) {
  console.error("\nFailed:");
  for (const f of failures) console.error(`  ${f.status} ${f.url}`);
  process.exit(1);
}

console.log(`\nAll ${all.length} URLs OK at ${base}`);
