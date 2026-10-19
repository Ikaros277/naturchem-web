/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const load = require("./lib/load-typescript")({
  "./accredited-scope.module.css": { __esModule: true, default: new Proxy({}, { get: (_, key) => String(key) }) },
  "./service-detail.module.css": { __esModule: true, default: new Proxy({}, { get: (_, key) => String(key) }) },
  "@/components/HeroPhoto": { HeroPhoto: () => React.createElement("img", { src: "/fixture.webp", alt: "" }) },
  "@/app/services.generated.css": {},
  "@/lib/render-inline-service-page": { createInlineServicePageExports: (_, content) => ({ Page: () => content }) },
  "next/link": { __esModule: true, default: ({ href, children }) => React.createElement("a", { href }, children) },
});
const scope = load(path.join(root, "src/lib/verified-accreditation-scope.ts"));
const { AccreditedScopeList, EmissionAuthorizationScope, FullAccreditedScope } = load(path.join(root, "src/components/AccreditedMeasurementScope.tsx"));
const plain = html => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
const ids = (kind, count) => Array.from({length:count}, (_, i) => kind + "-" + (i + 1));

async function main() {
  const { accreditedActivities, verifiedScopeGroups, organicAirAnalytes, detectorTubeAnalytes, emissionMetalAnalytes, accreditationSource } = scope;
  assert.equal(crypto.createHash("sha256").update(fs.readFileSync(path.join(root, "public", accreditationSource.localDocument))).digest("hex"), accreditationSource.localSha256, "A replaced appendix requires a new source review");
  const expected = [...ids("test", 18), ...ids("sampling", 6)].sort();
  assert.deepEqual(accreditedActivities.map(item => item.id).sort(), expected);
  const covered = Object.values(verifiedScopeGroups).flatMap(groups => groups.flatMap(group => group.activities));
  assert.deepEqual([...covered].sort(), expected, "Every test and sampling item is grouped once; none omitted or invented");
  assert.deepEqual(accreditedActivities.filter(item => item.externalLaboratory).map(item => item.number), [1,16,17,18], "Preserve appendix footnote 4 exactly");
  assert.deepEqual(emissionMetalAnalytes, "As Be Cd Cr Co Cu Mn Ni Pb Sb Se Sn Te Tl V Zn Al Fe Si Hg".split(" "));
  assert.deepEqual(organicAirAnalytes, ["benzen","xylen (izomery)","styren","ethylbenzen","toluen","ethylacetát","dichlormetan","chloroform","trichlorethylen","tetrachlorethylen","metanol","etanol","isopropanol","aceton","diethylether","cyklohexan","benziny","n-hexan","n-heptan","formaldehyd"]);
  assert.equal(detectorTubeAnalytes.length, 27, "Combine the duplicate sirovodík/sulfan, not distinct analytes");
  assert.ok(detectorTubeAnalytes.includes("oxid dusičitý (NO₂)") && detectorTubeAnalytes.includes("sirovodík (sulfan, H₂S)"));
  for (const term of ["ozon (O₃)","chlorovodík (HCl)","chlor","propan-butan","1-butanol","acetaldehyd","akrolein","amoniak","anilin","benzin","butylacetát","cyklohexanol","cyklohexanon","kyselina sírová","methylethylketon","propylacetát"]) assert.ok(detectorTubeAnalytes.includes(term), term);
  for (const kind of ["emissions", "workplace", "environment"]) {
    const html = renderToStaticMarkup(React.createElement(AccreditedScopeList, { kind }));
    const text = plain(html);
    const documentation = renderToStaticMarkup(React.createElement(AccreditedScopeList, { kind, showTechnicalDetails: true }));
    const documentationText = plain(documentation);
    for (const group of verifiedScopeGroups[kind]) {
      assert.ok(html.includes('data-accredited-activities="' + group.activities.join(" ") + '"'));
      assert.ok(text.includes(group.serviceSummary || group.summary));
      assert.ok(documentationText.includes(group.summary));
      for (const analyte of group.analytes || []) {
        assert.ok(text.includes(analyte), "Server-render every analyte, even in closed details: " + analyte);
        assert.ok(documentationText.includes(analyte), "Keep the complete documentation list: " + analyte);
      }
      if (group.qualification) {
        assert.ok(documentationText.includes(group.qualification), "Retain methodological qualifications on the accreditation page");
        assert.ok(!text.includes(group.qualification), "Keep lengthy methodology out of the commercial overview");
      }
    }
    assert.ok(!html.includes(accreditationSource.localDocument), "Do not repeat the appendix link below service overviews");
    assert.ok(documentation.includes(accreditationSource.localDocument), "The appendix remains available in the documentation view");
    assert.ok(!html.includes("scopeFootnote") && !html.includes("scopeDocument"));
    assert.ok(html.includes('class="accreditedGroups scopeCards"'), "Commercial scopes use distinct visual cards, not the documentation table");
    assert.equal((html.match(/data-scope-tone=/g) || []).length, verifiedScopeGroups[kind].length);
    assert.equal((html.match(/<svg/g) || []).length, verifiedScopeGroups[kind].length, "One existing, decorative SVG per measurement group");
    assert.ok(!documentation.includes('class="accreditedGroups scopeCards"') && !documentation.includes('<svg'), "The full technical documentation keeps its compact list presentation");
    assert.doesNotMatch(text, /fluorovodík|\bHF\b/, "HF is not in the reviewed appendix; it needs separate evidence before being called accredited");
    assert.doesNotMatch(text, /akreditované.*denní osvětlení|všechny rizikové faktory/);
    if (kind !== "environment") {
      assert.ok(documentationText.includes(scope.externalLaboratoryNotes[kind]), "Preserve footnote 4 explanations on the accreditation page");
      assert.ok(!text.includes(scope.externalLaboratoryNotes[kind]), "Do not repeat external-laboratory paragraphs in the sales overview");
    }
    if (kind === "workplace") {
      assert.ok(text.includes("Krátkodobá měření") && text.includes("Chemické látky detekčními trubicemi"));
      assert.ok(text.includes("Odběry na filtr") && text.includes("Prach · aerosoly · vlákna"), "Keep sampling distinct from complete in-house analysis");
      assert.ok(!text.includes("Odběr na pevný sorbent a výpočet koncentrace"));
    }
  }
  const full = renderToStaticMarkup(React.createElement(FullAccreditedScope));
  assert.ok(!full.includes('data-scope-feature=') && !full.includes('<img'), "The document page does not acquire the commercial photographic banner");
  assert.equal((full.match(/data-accredited-scope=/g)||[]).length, 3);
  assert.equal((full.match(/data-accredited-activities=/g)||[]).length, 14);
  for (const note of Object.values(scope.externalLaboratoryNotes)) assert.ok(plain(full).includes(note));
  assert.equal((full.match(/class="scopeDocument"/g)||[]).length, 3);
  const authorized = renderToStaticMarkup(React.createElement(EmissionAuthorizationScope));
  assert.ok(authorized.includes(scope.emissionAuthorizationSource.registry));
  assert.ok(authorized.includes('data-emission-authorization="MZP/2021/780/1387"'));
  for (const group of scope.authorizedEmissionGroups) for (const item of group.items) assert.ok(plain(authorized).includes(item), "Full MŽP register category: " + item);
  assert.equal(scope.authorizedEmissionGroups.flatMap(group => group.items).length, 18);
  const combined = renderToStaticMarkup(React.createElement(AccreditedScopeList, {kind:"emissions",includeEmissionAuthorization:true}));
  for (const item of scope.additionalAuthorizedEmissionAnalytes) assert.ok(plain(combined).includes(item));
  assert.ok(combined.includes("Autorizace MŽP"));
  assert.ok(!combined.includes(scope.emissionAuthorizationSource.registry) && !combined.includes(scope.emissionAuthorizationSource.number), "Keep authorization labels, not repeated documentation links and numbers, in the commercial overview");
  const combinedDocumentation = renderToStaticMarkup(React.createElement(AccreditedScopeList, {kind:"emissions",includeEmissionAuthorization:true,showTechnicalDetails:true}));
  assert.ok(combinedDocumentation.includes(scope.emissionAuthorizationSource.registry) && combinedDocumentation.includes(scope.emissionAuthorizationSource.number));
  assert.equal((combined.match(/data-authorized-emission-additions/g)||[]).length, 1);
  assert.doesNotMatch(full, /fluorovodík|\bHF\b/, "MŽP authorization must not silently expand the ČIA-only appendix view");
  const { ServicePage } = load(path.join(root, "src/components/ServicePage.tsx"));
  const workplace = load(path.join(root, "src/app/[locale]/sluzby/pracovni-prostredi/page.tsx")).default();
  const html = renderToStaticMarkup(await ServicePage({...workplace, locale:"cs"}));
  assert.equal((html.match(/data-accredited-scope="workplace"/g)||[]).length, 1, "One complete scope on the workplace page");
  assert.ok(html.indexOf('id="akreditovany-rozsah"') < html.indexOf('id="service-overview-heading"'), "Show the complete visual measurement scope before the general service overview on the workplace page");
  assert.equal((html.match(/href="[^"]*kontakt[^"]*"/g)||[]).length, 2, "Do not multiply inquiry CTAs");
  assert.ok(!html.includes(scope.externalLaboratoryNotes.workplace), "No repeated methodology paragraph on the actual workplace page");
  assert.ok(html.includes("/akreditace-autorizace-dokumenty/"), "Keep the existing route to accreditation documents");
  assert.equal((html.match(/data-scope-feature="authentic"/g) || []).length, 1, "One authentic visual feature, not repeated decorative photographs");
  assert.ok(html.includes("/reference/authentic-2026-10-08/kovovyroba-mereni-384.avif"));
  assert.ok(html.includes("Hlukoměr na pracovišti") && html.includes('class="scopeWave"') && html.includes('aria-hidden="true"'));
  for (const width of [384, 640, 960]) assert.ok(fs.statSync(path.join(root, "public/reference/authentic-2026-10-08/kovovyroba-mereni-" + width + ".avif")).size < 34000, "Reuse small static AVIF variants");
  assert.match(html, /<img[^>]*kovovyroba-mereni[^>]*loading="lazy"[^>]*fetchPriority="low"/i, "The additional below-fold photo must not compete with LCP");
  const { DemandLandingLayout } = load(path.join(root, "src/components/DemandLandingLayout.tsx"));
  const { getSeoLanding } = load(path.join(root, "src/lib/seo-landings.ts"));
  const landing = getSeoLanding("mereni-pracovniho-prostredi-kategorizace-praci");
  const demand = renderToStaticMarkup(await DemandLandingLayout({landing,locale:"cs",schemas:null,contactHref:"/kontakt/",faq:landing.faq}));
  assert.ok(demand.includes('data-accredited-scope="workplace"') && demand.includes("pro podklady ke kategorizaci"), "Accredited measurements, not an invented accreditation for job categorisation itself");
  assert.ok(!demand.includes(scope.externalLaboratoryNotes.workplace), "No repeated methodology paragraph on the categorisation page");
  assert.equal((demand.match(/data-scope-feature="authentic"/g) || []).length, 1, "Use the same visual treatment for the corresponding categorisation offer");
  console.log("PASS accreditation: complete service lists without methodology footnotes or duplicate source links; full qualifications and sources retained in the documentation view; 18 tests + 6 samplings and separate MŽP scope including HF");
}
main().catch(error => { console.error(error); process.exitCode = 1; });
