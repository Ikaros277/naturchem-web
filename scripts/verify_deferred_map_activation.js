/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const path = require("node:path");
const load = require("./lib/load-typescript")();
const { installDeferredMapActivation, CONTACT_MAP_SETTLE_MS } = load(path.resolve(__dirname, "../src/lib/deferred-map-activation.ts"));
assert.equal(CONTACT_MAP_SETTLE_MS, 600);

function fixture({ loaded = true, observer = true, idle = true } = {}) {
  let time = 0, sequence = 0, activations = 0, geometryReads = 0, disconnected = 0;
  const timers = new Map(), idles = new Map(), listeners = new Map(), docListeners = new Map();
  let rect = { top: 100, bottom: 520, left: 16, right: 359, width: 343, height: 420 };
  let intersection;
  const add = (map, name, callback) => { if (!map.has(name)) map.set(name, new Set()); map.get(name).add(callback); };
  const remove = (map, name, callback) => map.get(name)?.delete(callback);
  const doc = {
    readyState: loaded ? "complete" : "loading", hidden: false,
    addEventListener: (name, callback) => add(docListeners, name, callback),
    removeEventListener: (name, callback) => remove(docListeners, name, callback)
  };
  const view = {
    innerWidth: 390, innerHeight: 844,
    setTimeout(callback, delay) { timers.set(++sequence, { at: time + delay, callback }); return sequence; },
    clearTimeout: id => timers.delete(id),
    addEventListener(name, callback, options) {
      if (name === "scroll") assert.equal(options.passive, true, "Do not block page scrolling");
      add(listeners, name, callback);
    },
    removeEventListener: (name, callback) => remove(listeners, name, callback)
  };
  if (observer) view.IntersectionObserver = class {
    constructor(callback, options) { intersection = callback; assert.deepEqual(options.threshold, [0, 0.25]); }
    observe() {}
    disconnect() { disconnected++; }
  };
  if (idle) {
    view.requestIdleCallback = (callback, options) => { assert.equal(options.timeout, 1500); idles.set(++sequence, callback); return sequence; };
    view.cancelIdleCallback = id => idles.delete(id);
  }
  const container = { ownerDocument: doc, getBoundingClientRect: () => { geometryReads++; return rect; } };
  const cleanup = installDeferredMapActivation(container, () => activations++, view);
  return {
    cleanup, view, doc, timers, idles,
    get activations() { return activations; },
    get geometryReads() { return geometryReads; },
    get disconnected() { return disconnected; },
    get listeners() { return [...listeners.values(), ...docListeners.values()].reduce((sum, set) => sum + set.size, 0); },
    rect: next => { rect = { ...rect, ...next }; },
    event: name => { for (const callback of [...(listeners.get(name) || [])]) callback(); },
    documentEvent: name => { for (const callback of [...(docListeners.get(name) || [])]) callback(); },
    intersection: () => intersection?.([{ isIntersecting: true }]),
    idle() { for (const [id, callback] of [...idles]) { idles.delete(id); callback(); } },
    tick(duration) {
      const end = time + duration;
      for (;;) {
        const next = [...timers].filter(([, timer]) => timer.at <= end).sort((a, b) => a[1].at - b[1].at)[0];
        if (!next) break;
        time = next[1].at;
        timers.delete(next[0]);
        next[1].callback();
      }
      time = end;
    }
  };
}

const initial = fixture({ loaded: false });
initial.intersection();
initial.tick(5000);
assert.equal(initial.activations, 0);
assert.equal(initial.idles.size, 0, "Wait for document load before idle work");
initial.event("load");
initial.tick(5000);
assert.equal(initial.activations, 0, "Wait for idle callback too");
initial.idle();
initial.tick(CONTACT_MAP_SETTLE_MS - 1);
assert.equal(initial.activations, 0);
initial.tick(1);
assert.equal(initial.activations, 1);
assert.equal(initial.listeners + initial.timers.size + initial.idles.size, 0, "Detach all work after one legitimate activation");
assert.ok(initial.disconnected > 0);
initial.event("scroll"); initial.intersection(); initial.tick(5000);
assert.equal(initial.activations, 1, "Scrolling later must not recreate the map");
initial.cleanup();

const inquiry = fixture();
inquiry.rect({ top: -365.9375, bottom: 54.0625 }); // Measured mobile form-anchor case.
inquiry.idle(); inquiry.intersection(); inquiry.tick(CONTACT_MAP_SETTLE_MS);
assert.equal(inquiry.activations, 0, "A thin strip under the sticky header must not load map assets");
inquiry.rect({ top: 150, bottom: 570 }); inquiry.event("scroll"); inquiry.tick(300);
inquiry.rect({ top: -500, bottom: -80 }); inquiry.event("scroll"); inquiry.tick(CONTACT_MAP_SETTLE_MS);
assert.equal(inquiry.activations, 0, "Passing the map during smooth anchor scrolling must not latch visibility");
inquiry.intersection(); inquiry.tick(CONTACT_MAP_SETTLE_MS);
assert.equal(inquiry.activations, 0, "Recheck geometry rather than trusting a stale observer entry");
inquiry.rect({ top: 150, bottom: 570 }); inquiry.event("scroll"); inquiry.tick(CONTACT_MAP_SETTLE_MS);
assert.equal(inquiry.activations, 1, "Returning to the map still loads it automatically");
inquiry.cleanup();

const scrolling = fixture();
scrolling.idle();
for (let i = 0; i < 5; i++) { scrolling.tick(100); scrolling.event("scroll"); }
assert.equal(scrolling.geometryReads, 0, "Do not force layout on every scroll event");
scrolling.tick(CONTACT_MAP_SETTLE_MS - 1);
assert.equal(scrolling.activations, 0);
scrolling.tick(1);
assert.equal(scrolling.activations, 1);
assert.equal(scrolling.geometryReads, 1);

const hidden = fixture();
hidden.doc.hidden = true; hidden.idle(); hidden.tick(CONTACT_MAP_SETTLE_MS);
assert.equal(hidden.activations, 0, "A background page must not activate optional maps");
hidden.doc.hidden = false; hidden.documentEvent("visibilitychange"); hidden.tick(CONTACT_MAP_SETTLE_MS);
assert.equal(hidden.activations, 1);

const fallback = fixture({ observer: false, idle: false });
fallback.tick(199); assert.equal(fallback.activations, 0);
fallback.tick(1 + CONTACT_MAP_SETTLE_MS); assert.equal(fallback.activations, 1, "Timer/scroll fallback needs no idle or observer API");
assert.equal(fallback.listeners + fallback.timers.size, 0);

const fallbackInquiry = fixture({ observer: false, idle: false });
fallbackInquiry.rect({ top: -500, bottom: -80 }); fallbackInquiry.tick(200 + CONTACT_MAP_SETTLE_MS);
assert.equal(fallbackInquiry.activations, 0, "Missing APIs must not eagerly mount offscreen maps");
fallbackInquiry.rect({ top: 100, bottom: 520 }); fallbackInquiry.event("resize"); fallbackInquiry.tick(CONTACT_MAP_SETTLE_MS);
assert.equal(fallbackInquiry.activations, 1);

const beforeLoad = fixture({ loaded: false });
beforeLoad.cleanup(); beforeLoad.event("load"); beforeLoad.tick(5000);
assert.equal(beforeLoad.activations + beforeLoad.listeners + beforeLoad.idles.size + beforeLoad.timers.size, 0);
const beforeIdle = fixture();
const staleIdle = [...beforeIdle.idles.values()][0];
beforeIdle.cleanup(); staleIdle(); beforeIdle.tick(5000);
assert.equal(beforeIdle.activations + beforeIdle.listeners + beforeIdle.idles.size + beforeIdle.timers.size, 0, "Cancelled idle callbacks cannot revive a cleaned-up observer");
const beforeSettle = fixture();
beforeSettle.idle(); beforeSettle.cleanup(); beforeSettle.tick(5000);
assert.equal(beforeSettle.activations + beforeSettle.listeners + beforeSettle.timers.size, 0, "Consent revocation/unmount cancels pending activation");
beforeSettle.cleanup();

for (const rect of [
  { width: 0 }, { height: 0 }, { left: 500, right: 843 }, { top: 740, bottom: 1160 }
]) {
  const invisible = fixture(); invisible.rect(rect); invisible.idle(); invisible.tick(CONTACT_MAP_SETTLE_MS);
  assert.equal(invisible.activations, 0, "Do not activate invisible/tiny map areas: " + JSON.stringify(rect));
  invisible.cleanup();
}
const smallViewport = fixture();
smallViewport.view.innerHeight = 100; smallViewport.rect({ top: 0, bottom: 420 });
smallViewport.idle(); smallViewport.tick(CONTACT_MAP_SETTLE_MS);
assert.equal(smallViewport.activations, 1, "The minimum visible area adapts to a short viewport");
const noViewport = fixture();
noViewport.view.innerHeight = 0; noViewport.idle(); noViewport.tick(CONTACT_MAP_SETTLE_MS);
assert.equal(noViewport.activations, 0); noViewport.cleanup();
console.log("PASS deferred map activation: load/idle + settled real visibility, measured form-anchor strip, transient/stale intersections, passive scrolling, background/hidden geometry, legacy API fallback, one activation and full cleanup; no network");
