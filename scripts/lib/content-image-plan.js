/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("node:path");

// Only referenced raster assets get variants. Keep original URLs and vector logos.
module.exports = function contentImagePlan(root) {
  const load = require("./load-typescript.js")();
  const { pcfElettronicaProducts } = load(path.join(root, "src/lib/pcf-elettronica-catalog.ts"));
  const { teamMembers } = load(path.join(root, "src/lib/team.ts"));
  const plan = new Map();
  for (const product of pcfElettronicaProducts) {
    if (product.imageSrc) plan.set(product.imageSrc, [240, 480, 960]);
  }
  for (const member of teamMembers) {
    if (member.photo) plan.set(member.photo, [80, 160]);
  }
  plan.set("/graphics/brands/pcf-elettronica.png", [160, 320]);
  plan.set("/graphics/not-found-404.png", [480, 960]);
  return plan;
};
