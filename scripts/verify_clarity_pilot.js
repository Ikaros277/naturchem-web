/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const path = require("node:path");
const fs = require("node:fs");
const root = path.resolve(__dirname, "..");
const load = require("./lib/load-typescript")();
const { COOKIE_CONSENT_EVENT, COOKIE_CONSENT_KEY, COOKIE_CONSENT_VERSION, clearClarityStorage } = load(path.join(root, "src/lib/cookie-consent.ts"));
const { getClarityPilotId, isClarityPilotPage, mountClarityPilot } = load(path.join(root, "src/lib/clarity-pilot.ts"));
const good = "https://www.naturchem.cz/mereni-pro-kolaudaci/";
const syntheticId = "offlinefixture";

function fixture({ address = good, referrer = "", navigation = true, top = true } = {}) {
  const win = new EventTarget();
  const doc = new EventTarget();
  win.location = { href: address, hostname: new URL(address).hostname };
  win.history = { pushState() {}, replaceState() {} };
  win.top = top ? win : {};
  if (navigation) win.navigation = new EventTarget();
  doc.referrer = referrer;
  const timers = new Map();
  let counter = 0;
  let stored = null;
  const tags = [];
  win.setTimeout = fn => { timers.set(++counter, fn); return counter; };
  win.clearTimeout = key => timers.delete(key);
  win.localStorage = { getItem: key => { assert.equal(key, COOKIE_CONSENT_KEY); return stored; } };
  doc.head = { append: tag => tags.push(tag) };
  doc.createElement = name => {
    assert.equal(name, "script");
    const tag = new EventTarget();
    tag.remove = () => { tag.removed = true; };
    return tag;
  };
  function run() { for (const [key, fn] of Array.from(timers)) { timers.delete(key); fn(); } }
  function choice(clarity, updatedAt = "2026-11-06T08:00:00.000Z", event = new Event(COOKIE_CONSENT_EVENT)) {
    stored = JSON.stringify({ version: COOKIE_CONSENT_VERSION, necessary: true, statistics: true, marketing: true, updatedAt, clarity });
    win.dispatchEvent(event);
  }
  return { win, doc, tags, timers, run, choice };
}

assert.equal(getClarityPilotId(syntheticId), syntheticId);
for (const value of ["", "https://example.com/tag", "with.dot", "a".repeat(21)]) assert.equal(getClarityPilotId(value), undefined);
assert.equal(isClarityPilotPage(good, ""), true);
for (const address of [good + "?service=example", good + "#podklady", "http://www.naturchem.cz/",
  "https://www.naturchem.cz/kontakt/", "https://www.naturchem.cz/dotaznik-spokojenosti/",
  "https://www.naturchem.cz/admin/", "https://www.naturchem.cz/en/", "http://127.0.0.1:3000/", "https://naturchem.cz.example/"]) {
  assert.equal(isClarityPilotPage(address, ""), false, address);
}
assert.equal(isClarityPilotPage(good, "https://www.naturchem.cz/kontakt/"), false);
assert.equal(isClarityPilotPage(good, "https://www.google.com/?q=synthetic"), false);
const clearedCookies = [];
const clearedSessionKeys = [];
const storageOnlyDocument = {};
Object.defineProperty(storageOnlyDocument, "cookie", { set: value => clearedCookies.push(value) });
clearClarityStorage({ location: { hostname: "www.naturchem.cz" }, sessionStorage: { removeItem: key => clearedSessionKeys.push(key) } }, storageOnlyDocument);
assert.equal(clearedCookies.length, 6);
assert.ok(clearedCookies.every(value => /^_cl(ck|sk)=; Max-Age=0;/.test(value)));
assert.deepEqual(clearedSessionKeys, ["_cltk"], "Only Clarity storage, also without an active vendor tag");

const originalWindow = global.window;
try {
  for (const options of [{ navigation: false }, { top: false }, { address: good + "?message=synthetic" }, { referrer: "https://www.naturchem.cz/kontakt/" }]) {
    const f = fixture(options);
    global.window = f.win;
    const cleanup = mountClarityPilot(syntheticId, f.win, f.doc);
    f.choice(true); f.run();
    assert.equal(f.tags.length, 0, "Non-pilot contexts fail closed");
    cleanup();
  }

  const f = fixture();
  global.window = f.win;
  const cleanup = mountClarityPilot(syntheticId, f.win, f.doc);
  f.run();
  f.choice(undefined); f.run(); // Older statistics/marketing acceptance is not Clarity consent.
  f.choice(false); f.run();
  f.choice("true"); f.run();
  f.choice(true, ""); f.run();
  assert.equal(f.tags.length, 0);
  f.choice(true); assert.equal(f.tags.length, 0, "Delayed start");
  f.choice(false); f.run(); assert.equal(f.tags.length, 0, "Cancel pending consent");
  f.choice(true); f.run();
  assert.equal(f.tags.length, 1);
  assert.equal(f.tags[0].src, "https://www.clarity.ms/tag/" + syntheticId);
  assert.equal(f.tags[0].referrerPolicy, "no-referrer");
  assert.deepEqual(f.win.clarity.q, [["consentv2", { ad_Storage: "denied", analytics_Storage: "granted" }]]);
  const originalQueue = f.win.clarity;
  const externalChange = new Event("storage");
  Object.defineProperty(externalChange, "key", { value: COOKIE_CONSENT_KEY });
  f.choice(false, undefined, externalChange);
  assert.equal(f.tags[0].removed, true);
  assert.deepEqual(originalQueue.q.at(-1), ["stop"]);
  assert.deepEqual(f.win.clarity.q, [], "Discard the in-flight vendor queue after withdrawal");
  assert.equal(f.win.clarity.t, true, "Late loader must not start a new SDK");
  f.choice(true); f.run(); assert.equal(f.tags.length, 1, "Revoked document never restarts");
  cleanup();
  assert.equal(f.timers.size, 0);

  for (const boundary of ["navigate", "click", "auxclick", "submit", "pagehide"]) {
    const d = fixture();
    global.window = d.win;
    const dispose = mountClarityPilot(syntheticId, d.win, d.doc);
    d.choice(true); d.run();
    const queue = d.win.clarity;
    const event = new Event(boundary);
    if (boundary === "click" || boundary === "auxclick") {
      Object.defineProperty(event, "target", { value: { closest: selector => selector === "a[href]" ? {} : null } });
    }
    (boundary === "navigate" ? d.win.navigation : boundary === "pagehide" ? d.win : d.doc).dispatchEvent(event);
    assert.deepEqual(queue.q.at(-1), ["stop"], boundary + " ends capture before sensitive navigation");
    assert.deepEqual(d.win.clarity.q, [], "No queued restart after " + boundary);
    assert.equal(d.tags[0].removed, true);
    dispose();
  }
  for (const method of ["pushState", "replaceState"]) {
    const d = fixture();
    global.window = d.win;
    let stoppedBeforeChange = false;
    let queue;
    const original = d.win.history[method] = function() {
      stoppedBeforeChange = queue.q.at(-1)[0] === "stop";
      d.win.location.href = "https://www.naturchem.cz/kontakt/?message=synthetic";
    };
    const dispose = mountClarityPilot(syntheticId, d.win, d.doc);
    d.choice(true); d.run();
    queue = d.win.clarity;
    d.win.history[method]({}, "", "/kontakt/?message=synthetic");
    assert.equal(stoppedBeforeChange, true, method + " must end capture before URL mutation");
    dispose();
    assert.equal(d.win.history[method], original, "Restore our wrapper, not another tool's wrapper");
  }
  const d = fixture();
  global.window = d.win;
  const dispose = mountClarityPilot(syntheticId, d.win, d.doc);
  d.choice(true);
  d.win.navigation.dispatchEvent(new Event("navigate"));
  d.run(); assert.equal(d.tags.length, 0, "No start when navigation beats the delayed tag");
  dispose();
  for (const file of ["ContactForm.tsx", "SatisfactionSurveyForm.tsx"]) {
    assert.equal((fs.readFileSync(path.join(root, "src/components", file), "utf8").match(/data-clarity-mask="true"/g) || []).length, 2, file);
  }
  console.log("PASS Clarity pilot: explicit opt-in, restricted routes/referrer, delayed tag, consent revoke, navigation and form mask (mock only, no network)");
} finally {
  if (originalWindow === undefined) delete global.window;
  else global.window = originalWindow;
}
