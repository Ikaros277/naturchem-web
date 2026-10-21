/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const createLoader = require("./lib/load-typescript.js");
const { installMenuDisclosureMotion } = createLoader()(path.resolve(__dirname, "../src/lib/menu-disclosure-motion.ts"));
const OriginalElement = global.Element;

class ElementFixture {
  constructor(tagName, parentElement = null) { this.tagName = tagName; this.parentElement = parentElement; }
  closest(selector) {
    if (selector === "summary") return this.tagName === "SUMMARY" ? this : this.parentElement?.closest(selector);
    if (selector.includes("a,")) return this.tagName === "A" ? this : this.parentElement?.closest(selector);
    return null;
  }
  contains(other) { return other === this || Boolean(other?.parentElement && this.contains(other.parentElement)); }
}

function fixture() {
  const root = new ElementFixture("DIV");
  const listeners = new Map(), windowListeners = new Map(), mediaListeners = new Map();
  root.addEventListener = (name, callback) => listeners.set(name, callback);
  root.removeEventListener = name => listeners.delete(name);
  const media = { matches: false, addEventListener: (name, cb) => mediaListeners.set(name, cb), removeEventListener: name => mediaListeners.delete(name) };
  const view = {
    matchMedia: query => { assert.equal(query, "(prefers-reduced-motion: reduce)"); return media; },
    getComputedStyle: () => ({ paddingTop: "0px", paddingBottom: "0px", borderTopWidth: "0px", borderBottomWidth: "1px" }),
    addEventListener: (name, cb) => windowListeners.set(name, cb), removeEventListener: name => windowListeners.delete(name)
  };
  function details(parent = root) {
    const el = new ElementFixture("DETAILS", parent);
    el.open = false; el.style = { overflow: "visible" }; el.dataset = {}; el.animations = [];
    el.classList = { contains: value => value === "nav-mobile-details" };
    el.getBoundingClientRect = () => ({ height: el.currentHeight ?? (el.open ? 300 : 61) });
    el.animate = (frames, options) => {
      const animation = { frames, options, cancelled: false, cancel() { this.cancelled = true; this.oncancel?.(); } };
      el.animations.push(animation); return animation;
    };
    el.summary = new ElementFixture("SUMMARY", el);
    el.summary.getBoundingClientRect = () => ({ height: 60 });
    return el;
  }
  function click(target, overrides = {}) {
    const event = { target, button: 0, defaultPrevented: false, preventDefault() { this.defaultPrevented = true; }, ...overrides };
    listeners.get("click")?.(event); return event;
  }
  return { root, media, view, details, click, listeners, windowListeners, mediaListeners, cleanup: installMenuDisclosureMotion(root, view) };
}

try {
  global.Element = ElementFixture;
  const f = fixture();
  const parent = f.details();
  assert.equal(f.click(parent.summary).defaultPrevented, true);
  assert.equal(parent.open, true);
  assert.deepEqual(parent.animations[0].frames, [{ height: "61px" }, { height: "300px" }]);
  assert.equal(parent.animations[0].options.duration, 280);
  parent.animations[0].onfinish();
  assert.equal(parent.style.overflow, "visible");
  assert.equal(parent.dataset.disclosureState, undefined);
  f.click(parent.summary);
  const closing = parent.animations.at(-1);
  assert.equal(parent.open, true, "Keep native content rendered until the collapse completes");
  assert.equal(parent.dataset.disclosureState, "closing");
  closing.onfinish();
  assert.equal(parent.open, false);
  assert.equal(parent.style.overflow, "visible");

  f.click(parent.summary);
  parent.currentHeight = 140;
  const interrupted = parent.animations.at(-1);
  f.click(parent.summary);
  assert.equal(interrupted.cancelled, true);
  assert.equal(parent.animations.at(-1).frames[0].height, "140px", "Rapid reversal starts at the current visual height");
  parent.animations.at(-1).onfinish();
  assert.equal(parent.open, false);
  delete parent.currentHeight;

  f.click(parent.summary);
  const nested = f.details(parent);
  f.click(nested.summary);
  assert.equal(parent.style.overflow, "visible", "A nested expansion must not remain clipped by its parent");
  assert.equal(parent.open, true);
  f.click(parent.summary);
  assert.equal(nested.style.overflow, "visible");
  parent.animations.at(-1).onfinish();
  assert.equal(parent.open, false);

  const count = parent.animations.length;
  assert.equal(f.click(new ElementFixture("A", parent.summary)).defaultPrevented, false);
  assert.equal(f.click(parent.summary, { ctrlKey: true }).defaultPrevented, false);
  assert.equal(f.click(parent.summary, { defaultPrevented: true }).defaultPrevented, true);
  assert.equal(parent.animations.length, count, "Navigation and modified clicks are not animated or intercepted");
  f.media.matches = true;
  assert.equal(f.click(parent.summary).defaultPrevented, false, "Reduced motion uses the native toggle");
  f.media.matches = false;
  f.click(parent.summary);
  f.mediaListeners.get("change")();
  assert.equal(parent.style.overflow, "visible");
  assert.equal(parent.open, true, "Changing the motion preference settles in the intended state");
  f.click(parent.summary);
  f.windowListeners.get("resize")();
  assert.equal(parent.open, false);
  const other = f.details();
  other.animate = undefined;
  assert.equal(f.click(other.summary).defaultPrevented, false, "No animation API leaves native behavior untouched");
  other.animate = () => { throw new Error("Synthetic unsupported animation"); };
  f.click(other.summary);
  assert.equal(other.open, true);
  assert.equal(other.style.overflow, "visible");
  f.click(parent.summary);
  f.cleanup();
  assert.equal(parent.style.overflow, "visible");
  assert.equal(parent.open, true);
  assert.equal(f.listeners.size + f.windowListeners.size + f.mediaListeners.size, 0);

  const css = fs.readFileSync(path.resolve(__dirname, "../src/app/globals.css"), "utf8");
  assert.match(css, /@supports \(interpolate-size: allow-keywords\) and selector\(details::details-content\)/);
  assert.match(css, /content-visibility 280ms allow-discrete/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /main details\[open\]::details-content \{ block-size: auto; opacity: 1; \}/);
  console.log("PASS motion: native/keyboard activation, rolling open/close, rapid reversal, nesting, links, resize, reduced motion, API failure and cleanup; no network");
} finally { if (OriginalElement === undefined) delete global.Element; else global.Element = OriginalElement; }
