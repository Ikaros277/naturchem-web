/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const path = require("node:path");
const createLoader = require("./lib/load-typescript.js");
const root = path.resolve(__dirname, "..");
const load = createLoader();
const { getAttachmentError } = load(path.join(root, "src/lib/attachment-validation.ts"));
const limit = 4 * 1024 * 1024;
const pdf = { name: "podklady.pdf", type: "application/pdf", size: limit };
assert.equal(getAttachmentError([pdf]), null);
assert.equal(getAttachmentError([{ ...pdf, size: limit + 1 }]), "attachmentsTooLarge");
assert.equal(getAttachmentError([pdf, { ...pdf, size: 1 }]), "attachmentsTooLarge");
assert.equal(getAttachmentError(Array(6).fill({ ...pdf, size: 1 })), "tooManyAttachments");
assert.equal(getAttachmentError([{ ...pdf, name: "program.exe" }]), "invalidAttachment");
assert.equal(getAttachmentError([{ ...pdf, type: "text/html" }]), "invalidAttachment");
assert.equal(getAttachmentError([{ ...pdf, type: "" }]), null);
assert.equal(getAttachmentError([{ ...pdf, type: "application/octet-stream" }]), null);
assert.equal(getAttachmentError([]), null);

const nativeFetch = global.fetch;
const NativeFormData = global.FormData;
const originalError = console.error;
const originalInfo = console.info;
const originalWarn = console.warn;
const envNames = [
  "RESEND_API_KEY",
  "CONTACT_FROM_EMAIL",
  "CONTACT_TO_EMAILS",
  "NEXT_PUBLIC_TURNSTILE_SITE_KEY",
  "TURNSTILE_SECRET_KEY"
];
const originalEnv = Object.fromEntries(envNames.map((key) => [key, process.env[key]]));

function data(overrides = {}) {
  const form = new NativeFormData();
  for (const [key, value] of Object.entries({ name: "Test Company", email: "test@example.invalid", phone: "", message: "Synthetic test only", consent: "on", inquiryCategory: "studie", ...overrides })) {
    form.set(key, value);
  }
  form.append("services", "IPPC a integrovaná povolení");
  return form;
}

function api({ send, allowed = true, scheduleThrows = false } = {}) {
  const emails = [];
  const afterResponse = [];
  const mocked = createLoader({
    resend: { Resend: class { emails = { send: async (payload) => {
      emails.push(payload);
      return send ? send(payload, emails.length) : { data: { id: "test-mail-id" }, error: null };
    } }; } },
    "next/server": { NextResponse: Response, after: (fn) => {
      if (scheduleThrows) throw new Error("Synthetic scheduling failure");
      afterResponse.push(fn);
    } },
    "@/lib/rate-limit": { checkRateLimit: () => ({ allowed, retryAfterSec: 60 }), getClientIp: () => "test" }
  });
  const { POST } = mocked(path.join(root, "src/app/api/contact/route.ts"));
  return { emails, afterResponse, submit: (form, locale = "cs") => POST(new Request("https://example.invalid/api/contact/", { method: "POST", body: form, headers: { "accept-language": locale } })) };
}

function client(formData, response) {
  const events = [], requests = [], states = [], focus = [];
  let stateIndex = 0;
  const mocked = createLoader({
    react: { useState: (initial) => { const id = stateIndex++; return [initial, (value) => states.push({ id, value })]; }, useRef: (value) => ({ current: value }) },
    "@/lib/i18n/locale-context": { useLocale: () => "cs", useTranslations: (ns) => require("../messages/cs.json")[ns] },
    "@/lib/i18n/locale-link": { LocaleLink: () => null },
    "@/lib/gtag": { sendGtagEvent: (name, params) => events.push({ name, params }) }
  });
  const { ContactForm } = mocked(path.join(root, "src/components/ContactForm.tsx"));
  const tree = ContactForm({ serviceChoices: [] });
  assert.equal(tree.props.method, "post", "Missing JavaScript must never put inquiry details in the URL");
  assert.equal(tree.props.action, "/api/contact/");
  assert.equal(tree.props.encType, "multipart/form-data");
  const form = { fixtureData: formData, reset: () => {}, querySelector: (selector) => ({ focus: () => focus.push(selector) }) };
  global.FormData = class { constructor(value) { return value.fixtureData; } };
  global.fetch = async (...args) => { requests.push(args); return response ? await response() : Response.json({ ok: true, leadId: "test-lead-id", message: "OK" }); };
  return { events, requests, states, focus, submit: () => tree.props.onSubmit({ preventDefault() {}, currentTarget: form }) };
}

async function main() {
  // The complete test is isolated from email providers, analytics and other networks.
  global.fetch = async () => { throw new Error("Network access is forbidden in this test"); };
  console.error = () => {};
  console.info = () => {};
  console.warn = () => {};
  process.env.RESEND_API_KEY = "test-only-not-a-real-key";
  process.env.CONTACT_FROM_EMAIL = "forms@example.invalid";
  process.env.CONTACT_TO_EMAILS = "office@example.invalid";
  delete process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  delete process.env.TURNSTILE_SECRET_KEY;

  for (const locale of ["cs", "en", "de"]) {
    const fixture = api();
    const result = await fixture.submit(data(), locale);
    assert.equal(result.status, 200);
    const body = await result.json();
    assert.equal(body.message, require(path.join(root, "messages", locale + ".json")).contactForm.successMessage, "API success and client copy must share the verified 24-hour reaction promise");
    assert.match(body.leadId, /^[\da-f-]{36}$/);
    assert.ok(fixture.emails[0].text.includes(`ID poptávky: ${body.leadId}`));
    assert.ok(fixture.emails[0].subject.includes(body.leadId.slice(0, 8)));
    assert.ok(fixture.emails[0].text.includes("IPPC a integrovaná povolení"));
    assert.equal(fixture.emails.length, 1);
    assert.equal(
      fixture.afterResponse.length,
      0,
      "Unprotected submissions must not turn the form into an autoresponder"
    );
  }

  process.env.CONTACT_TO_EMAILS = "office@example.invalid,backup@example.invalid,OFFICE@example.invalid";
  const independentRecipients = api({
    send: (_, count) =>
      count === 1
        ? { data: null, error: { name: "synthetic-primary-failure" } }
        : { data: { id: "accepted-backup-id" }, error: null }
  });
  const independentResult = await independentRecipients.submit(data());
  assert.equal(independentResult.status, 200);
  assert.ok((await independentResult.json()).leadId);
  assert.equal(independentRecipients.emails.length, 2, "Each unique internal recipient gets an independent request");
  assert.deepEqual(
    independentRecipients.emails.map((message) => message.to),
    ["office@example.invalid", "backup@example.invalid"]
  );
  process.env.CONTACT_TO_EMAILS = "office@example.invalid";

  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY = "test-site-key";
  delete process.env.TURNSTILE_SECRET_KEY;
  const incompleteTurnstile = api();
  assert.equal((await incompleteTurnstile.submit(data())).status, 500);
  assert.equal(incompleteTurnstile.emails.length, 0);

  process.env.TURNSTILE_SECRET_KEY = "test-secret-key";
  const missingTurnstile = api();
  assert.equal((await missingTurnstile.submit(data())).status, 400);
  assert.equal(missingTurnstile.emails.length, 0);

  global.fetch = async (url, options) => {
    assert.equal(String(url), "https://challenges.cloudflare.com/turnstile/v0/siteverify");
    assert.equal(options.method, "POST");
    assert.equal(String(options.body.get("secret")), "test-secret-key");
    assert.equal(String(options.body.get("response")), "valid-test-token");
    return Response.json({ success: true, action: "contact", hostname: "example.invalid" });
  };
  const protectedTurnstile = api();
  const protectedResult = await protectedTurnstile.submit(
    data({ "cf-turnstile-response": "valid-test-token" })
  );
  assert.equal(protectedResult.status, 200);
  const protectedBody = await protectedResult.json();
  assert.equal(protectedTurnstile.emails.length, 1);
  assert.equal(protectedTurnstile.afterResponse.length, 1);
  await protectedTurnstile.afterResponse[0]();
  assert.equal(protectedTurnstile.emails.length, 2);
  assert.ok(protectedTurnstile.emails[1].text.includes(protectedBody.leadId));
  assert.ok(protectedTurnstile.emails[1].text.includes("do 24 hodin"), "Confirmation email describes reaction, not a completed quotation");

  global.fetch = async () =>
    Response.json({ success: true, action: "different-form", hostname: "example.invalid" });
  const wrongTurnstileAction = api();
  assert.equal(
    (await wrongTurnstileAction.submit(data({ "cf-turnstile-response": "wrong-action-token" }))).status,
    400
  );
  assert.equal(wrongTurnstileAction.emails.length, 0);

  global.fetch = async () =>
    Response.json({ success: true, action: "contact", hostname: "attacker.invalid" });
  const wrongTurnstileHostname = api();
  assert.equal(
    (await wrongTurnstileHostname.submit(data({ "cf-turnstile-response": "wrong-host-token" }))).status,
    400
  );
  assert.equal(wrongTurnstileHostname.emails.length, 0);

  global.fetch = async () =>
    Response.json({ success: false, "error-codes": ["invalid-input-response"] });
  const invalidTurnstile = api();
  assert.equal(
    (await invalidTurnstile.submit(data({ "cf-turnstile-response": "invalid-test-token" }))).status,
    400
  );
  assert.equal(invalidTurnstile.emails.length, 0);

  global.fetch = async () =>
    Response.json({ success: true, action: "contact", hostname: "example.invalid" });
  for (const send of [
    (_, count) => count === 2
      ? { data: null, error: { name: "synthetic" } }
      : { data: { id: "accepted-primary-id" }, error: null },
    (_, count) => { if (count === 2) throw new Error("Synthetic confirmation failure"); return { data: { id: "accepted-primary-id" }, error: null }; }
  ]) {
    const fixture = api({ send });
    const result = await fixture.submit(data({ "cf-turnstile-response": "valid-test-token" }));
    assert.equal(result.status, 200);
    assert.ok((await result.json()).leadId);
    await fixture.afterResponse[0](); // No uncaught exception; accepted inquiry is preserved.
  }
  const scheduling = api({ scheduleThrows: true });
  assert.equal(
    (await scheduling.submit(data({ "cf-turnstile-response": "valid-test-token" }))).status,
    200
  );
  delete process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  delete process.env.TURNSTILE_SECRET_KEY;
  global.fetch = async () => { throw new Error("Network access is forbidden in this test"); };
  for (const send of [
    () => ({ data: null, error: { name: "synthetic" } }),
    () => ({ data: null, error: null }),
    () => { throw new Error("Synthetic internal send failure"); }
  ]) {
    const fixture = api({ send });
    const result = await fixture.submit(data());
    assert.ok(result.status >= 500);
    assert.equal((await result.json()).leadId, undefined);
    assert.equal(fixture.afterResponse.length, 0);
  }
  const phoneOnly = api();
  assert.equal((await phoneOnly.submit(data({ email: "", phone: "123456789" }))).status, 200);
  assert.equal(phoneOnly.afterResponse.length, 0);
  const invalid = api();
  assert.equal((await invalid.submit(data({ name: "" }))).status, 400);
  assert.equal(invalid.emails.length, 0);
  const spam = api();
  assert.equal((await (await spam.submit(data({ website: "bot" }))).json()).leadId, undefined);
  assert.equal(spam.emails.length, 0);
  assert.equal((await api({ allowed: false }).submit(data())).status, 429);
  const large = data();
  large.append("attachments", new File([new Uint8Array(limit + 1)], "podklady.pdf", { type: "application/pdf" }));
  const invalidUpload = api();
  assert.equal((await invalidUpload.submit(large)).status, 400);
  assert.equal(invalidUpload.emails.length, 0);

  const blockedUpload = client(large);
  await blockedUpload.submit();
  assert.equal(blockedUpload.requests.length, 0, "Oversize upload never reaches the network");
  assert.deepEqual(blockedUpload.focus, ["#contact-attachments-input"]);
  assert.ok(blockedUpload.states.some((s) => typeof s.value === "string" && s.value.includes("4 MB")));
  const noContact = client(data({ email: "", phone: "" }));
  await noContact.submit();
  assert.equal(noContact.requests.length, 0);
  assert.deepEqual(noContact.focus, ["#contact-email-input"]);
  let finish;
  const duplicate = client(data(), () => new Promise((resolve) => { finish = resolve; }));
  const first = duplicate.submit();
  await duplicate.submit();
  assert.equal(duplicate.requests.length, 1, "Rapid double submission produces only one request");
  finish(Response.json({ ok: true, leadId: "accepted-test-id", message: "OK" }));
  await first;
  assert.equal(duplicate.events.length, 1);
  assert.equal(duplicate.events[0].params.lead_id, "accepted-test-id");
  for (const form of [data({ website: "bot" }), data()]) {
    const fixture = client(form, () => Response.json({ ok: true, message: "OK" }));
    await fixture.submit();
    assert.equal(fixture.events.length, 0, "No successful lead without an accepted server lead ID");
  }
  const failed = client(data(), () => Response.json({ ok: false, message: "Synthetic failure" }, { status: 502 }));
  await failed.submit();
  assert.equal(failed.events.length, 0);
  console.log("PASS contact delivery: upload limits, double-submit guard, CS/EN/DE, Turnstile action and hostname validation, async confirmations, failure isolation, lead identity and spam exclusion");
}

main().catch((error) => { originalError(error); process.exitCode = 1; }).finally(() => {
  global.fetch = nativeFetch;
  global.FormData = NativeFormData;
  console.error = originalError;
  console.info = originalInfo;
  console.warn = originalWarn;
  for (const key of envNames) {
    if (originalEnv[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnv[key];
  }
});
