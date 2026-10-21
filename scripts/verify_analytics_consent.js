/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const path = require("node:path");
const createLoader = require("./lib/load-typescript.js");
const root = path.resolve(__dirname, "..");
const load = createLoader();
const { sendGtagEvent } = load(path.join(root, "src/lib/gtag.ts"));
const { COOKIE_CONSENT_KEY, COOKIE_CONSENT_VERSION } = load(path.join(root, "src/lib/cookie-consent.ts"));
const originalWindow = global.window;
const originalMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const originalFetch = global.fetch;
const OriginalFormData = global.FormData;
const events = [];
let stored = null;
let storageError = false;

function choice(statistics, marketing = false) {
  stored = JSON.stringify({
    version: COOKIE_CONSENT_VERSION,
    necessary: true,
    statistics,
    marketing,
    updatedAt: "2026-10-20T12:00:00Z"
  });
}
function emit(name = "generate_lead") {
  sendGtagEvent(name, { form_id: "poptavkovy-formular", lead_id: "offline-synthetic-id" });
}

async function main() {
try {
  // No Google SDK, email provider or browser is used; never send a real event.
  global.fetch = () => { throw new Error("Network access is forbidden in this test"); };
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = "G-OFFLINE-NOT-A-REAL-ID";
  delete global.window;
  assert.doesNotThrow(emit, "SSR must not access client storage");

  global.window = {
    localStorage: { getItem(key) {
      assert.equal(key, COOKIE_CONSENT_KEY);
      if (storageError) throw new Error("Synthetic unavailable storage");
      return stored;
    } },
    gtag: (...args) => events.push(args)
  };
  const gtag = global.window.gtag;

  emit();
  assert.equal(events.length, 0, "The consent-bootstrap gtag queue is not a consent choice");
  choice(false);
  emit();
  assert.equal(events.length, 0, "Explicit statistical denial must not queue analytics events");
  choice(false, true);
  emit();
  assert.equal(events.length, 0, "Marketing-only consent must not enable GA4 custom events");

  choice(true);
  emit();
  assert.equal(events.length, 1);
  assert.deepEqual(events[0], ["event", "generate_lead", {
    form_id: "poptavkovy-formular", lead_id: "offline-synthetic-id"
  }], "Keep the successful-lead event and its existing parameters intact");

  // Read the current persisted choice on every call, not the earlier mount state.
  choice(false);
  emit();
  assert.equal(events.length, 1, "Revocation must stop analytics even with gtag still loaded");
  choice(true, true);
  emit("click_inquiry_cta");
  assert.equal(events.length, 2, "A new valid choice permits future events, not historical replay");
  assert.equal(events[1][1], "click_inquiry_cta");

  stored = null;
  emit();
  assert.equal(events.length, 2, "Removing a stored choice must also stop analytics");
  for (const raw of ["not-json", "null", JSON.stringify({ version: "obsolete", statistics: true, marketing: false, updatedAt: "past" }),
    JSON.stringify({ version: COOKIE_CONSENT_VERSION, statistics: "true", marketing: false, updatedAt: "past" }),
    JSON.stringify({ version: COOKIE_CONSENT_VERSION, statistics: true, marketing: false }),
    JSON.stringify({ version: COOKIE_CONSENT_VERSION, statistics: true, marketing: false, updatedAt: "" })]) {
    stored = raw;
    assert.doesNotThrow(emit);
    assert.equal(events.length, 2, "Malformed, obsolete or missing choices must not queue events");
  }
  choice(true);
  storageError = true;
  assert.doesNotThrow(emit);
  assert.equal(events.length, 2, "Storage failure must fail closed without breaking the form");
  storageError = false;

  delete process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  emit();
  assert.equal(events.length, 2, "Do not route GA4 events through a tag configured only for another product");
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = "G-OFFLINE-NOT-A-REAL-ID";
  delete global.window.gtag;
  assert.doesNotThrow(emit);
  assert.equal(events.length, 2, "A missing or blocked tag must not break an accepted inquiry");
  global.window.gtag = gtag;
  emit();
  assert.equal(events.length, 3, "Keep recording future consented events after temporary unavailability");
  global.window.gtag = () => { throw new Error("Synthetic third-party tag failure"); };
  assert.doesNotThrow(emit, "An unavailable tracker must not turn a successful inquiry into an error");
  assert.equal(events.length, 3, "No retries or substitute success events for a failed optional tracker");

  // Exercise the real form + real analytics helper with a failing optional tag.
  // Only the contact API response is mocked; there is no live POST or email.
  const states = [], requests = [];
  let stateIndex = 0;
  const formLoader = createLoader({
    react: { useState: initial => { const id = stateIndex++; return [initial, value => states.push({ id, value })]; }, useRef: value => ({ current: value }) },
    "@/lib/i18n/locale-context": { useLocale: () => "cs", useTranslations: ns => require("../messages/cs.json")[ns] },
    "@/lib/i18n/locale-link": { LocaleLink: () => null }
  });
  const { ContactForm } = formLoader(path.join(root, "src/components/ContactForm.tsx"));
  const formData = new OriginalFormData();
  for (const [key, value] of Object.entries({ name: "Offline fixture", email: "offline@example.invalid", message: "Synthetic offline test only", consent: "on" })) formData.set(key, value);
  const form = { reset() {}, querySelector() { return { focus() {} }; } };
  global.FormData = class { constructor(actualForm) { assert.equal(actualForm, form); return formData; } };
  global.fetch = async (url, options) => {
    assert.equal(url, "/api/contact/");
    assert.equal(options.method, "POST");
    requests.push(url);
    return Response.json({ ok: true, leadId: "offline-synthetic-id", message: "Accepted offline fixture" });
  };
  const tree = ContactForm({ serviceChoices: [] });
  await tree.props.onSubmit({ preventDefault() {}, currentTarget: form });
  assert.equal(requests.length, 1);
  assert.deepEqual(states.filter(state => state.id === 0).map(state => state.value), ["loading", "success"], "Keep a successful inquiry successful even when the analytics tag throws");
  console.log("PASS analytics consent: denial/revocation, malformed/storage failure, SSR, absent/throwing tag; consented events preserved and accepted inquiry stays successful; no network");
} finally {
  if (originalWindow === undefined) delete global.window;
  else global.window = originalWindow;
  if (originalMeasurementId === undefined) delete process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  else process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = originalMeasurementId;
  global.fetch = originalFetch;
  global.FormData = OriginalFormData;
}
}
main().catch(error => { console.error(error); process.exitCode = 1; });
