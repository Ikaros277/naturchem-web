/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const path = require("node:path");
const createLoader = require("./lib/load-typescript.js");
const originalWindow = global.window;
const originalObserver = global.IntersectionObserver;
const originalPerformance = global.performance;

function fixture(value, { reduced = false, observe = true } = {}) {
  let effect, time = 0, id = 0, refIndex = 0;
  const observers = [];
  const frames = new Map(), element = {}, visible = { textContent: value };
  class Observer {
    constructor(callback) { this.callback = callback; this.disconnected = false; observers.push(this); }
    observe(actual) { assert.equal(actual, element); }
    disconnect() { this.disconnected = true; }
  }
  global.performance = { now: () => time };
  global.IntersectionObserver = Observer;
  global.window = {
    matchMedia: query => { assert.equal(query, "(prefers-reduced-motion: reduce)"); return { matches: reduced }; },
    requestAnimationFrame: callback => { frames.set(++id, callback); return id; },
    cancelAnimationFrame: frame => frames.delete(frame)
  };
  if (observe) global.window.IntersectionObserver = Observer;
  const load = createLoader({
    react: { useEffect: callback => { effect = callback; }, useMemo: callback => callback(), useRef: () => ({ current: refIndex++ === 0 ? element : visible }) },
    "./count-up-stat.module.css": {}
  });
  const { CountUpStatValue } = load(path.resolve(__dirname, "../src/components/CountUpStatValue.tsx"));
  const tree = CountUpStatValue({ value });
  const cleanup = effect();
  return {
    visible, frames, tree, cleanup,
    enter: () => observers[0]?.callback([{ isIntersecting: true }]),
    get observer() { return observers[0]; },
    frame: now => {
      time = now;
      const pending = [...frames.values()]; frames.clear();
      for (const callback of pending) callback(now);
      return visible.textContent;
    }
  };
}

try {
  const f = fixture("14 000+");
  assert.equal(f.visible.textContent, "14 000+", "Final value remains readable before visibility is observed");
  f.enter();
  assert.equal(f.visible.textContent, "0+");
  assert.equal(f.observer.disconnected, true);
  const numeric = text => Number(text.replace(/\D/g, ""));
  const first = numeric(f.frame(375)), second = numeric(f.frame(750)), third = numeric(f.frame(1125));
  assert.equal(first, 8093);
  assert.equal(second, 12250);
  assert.equal(third, 13781);
  assert.ok(first > second - first && second - first > third - second, "Fast initial rise, progressively smaller increments");
  assert.equal(numeric(f.frame(1499)), 13999);
  assert.equal(f.frame(1500), "14 000+");
  assert.equal(f.frames.size, 0, "No animation work after 1.5 seconds");
  f.enter();
  assert.equal(f.frames.size, 0, "Do not replay the same counter on repeated observations");
  f.cleanup();

  for (const [value, penultimate] of [["36 let", "35 let"], ["200+", "199+"], ["7,000+", "6,999+"]]) {
    const counter = fixture(value); counter.enter();
    assert.equal(counter.frame(1499), penultimate, "Small counters must not settle early through rounding");
    assert.equal(counter.frame(1500), value);
    counter.cleanup();
  }
  const reduced = fixture("36 let", { reduced: true });
  assert.equal(reduced.visible.textContent, "36 let");
  assert.equal(reduced.frames.size, 0);
  assert.equal(reduced.observer, undefined);
  const fallback = fixture("200+", { observe: false });
  assert.equal(fallback.visible.textContent, "0+");
  assert.equal(fallback.frame(1500), "200+");
  fallback.cleanup();
  const unmounted = fixture("14 000+"); unmounted.enter(); unmounted.cleanup();
  assert.equal(unmounted.frames.size, 0);
  assert.equal(unmounted.observer.disconnected, true);
  for (const value of ["bez čísla", "0+"]) {
    const counter = fixture(value);
    assert.equal(counter.visible.textContent, value);
    assert.equal(counter.frames.size, 0);
  }
  console.log("PASS count-up: 1500ms ease-out, slower final increments, exact endpoints including small values, grouping/suffixes, reduced motion, visibility/fallback and cleanup; no network");
} finally {
  if (originalWindow === undefined) delete global.window; else global.window = originalWindow;
  if (originalObserver === undefined) delete global.IntersectionObserver; else global.IntersectionObserver = originalObserver;
  global.performance = originalPerformance;
}
