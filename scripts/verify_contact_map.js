/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const createLoader = require("./lib/load-typescript");
const postcss = require("postcss");
const root = path.resolve(__dirname, "..");
const originals = { window: global.window, document: global.document, IntersectionObserver: global.IntersectionObserver, fetch: global.fetch, key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY };
let consent = { updatedAt: "", statistics: false };
let locale = "cs";
const translation = { useTranslations: ns => require(path.join(root, "messages", locale + ".json"))[ns] };
const consentModule = { useCookieConsentState: () => consent };

// Run the real components with deterministic offline hooks, not a second map implementation.
function hooks() {
  const slots = [], effects = new Map(), cleanups = new Map();
  let cursor = 0;
  const api = {
    useRef(value) { const id = cursor++; return slots[id] ??= { current: value }; },
    useState(value) { const id = cursor++; if (!(id in slots)) slots[id] = value; return [slots[id], next => { slots[id] = next; }]; },
    useEffect(callback, dependencies) {
      const id = cursor++, previous = slots[id];
      if (!previous || !dependencies || dependencies.some((value, index) => value !== previous[index])) {
        slots[id] = dependencies;
        effects.set(id, callback);
      }
    }
  };
  return {
    api, slots,
    render(Component, props = {}) { cursor = 0; return Component(props); },
    mount() { for (const [id, effect] of effects) { cleanups.get(id)?.(); cleanups.set(id, effect()); } effects.clear(); },
    cleanup() { for (const cleanup of cleanups.values()) cleanup?.(); cleanups.clear(); }
  };
}
function loader(h, extra = {}) {
  return createLoader({ react: h.api, "./contact-offices-map.css": {}, "@/components/CookieConsentBanner": consentModule, "@/lib/i18n/locale-context": translation, ...extra });
}
const flush = async () => { await Promise.resolve(); await Promise.resolve(); await Promise.resolve(); };

async function main() {
  try {
    global.fetch = () => { throw new Error("No network allowed in contact map tests"); };
    delete process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const h = hooks();
    const controllers = [];
    const activationModule = {
      installDeferredMapActivation(_container, ready) {
        const controller = { ready, cancelled: false };
        controllers.push(controller);
        return () => { controller.cancelled = true; };
      }
    };
    function DeferredFixture() { return null; }
    const mediaOverrides = { "next/dynamic": () => DeferredFixture, "@/lib/deferred-map-activation": activationModule };
    const load = loader(h, mediaOverrides);
    const { ContactPageHeroMedia } = load(path.join(root, "src/components/ContactPageMedia.tsx"));
    const { ContactMapFallback } = load(path.join(root, "src/components/ContactMapFallback.tsx"));
    let tree = h.render(ContactPageHeroMedia);
    assert.equal(tree.props.children.type, ContactMapFallback, "SSR must show usable addresses, not mount maps");
    h.slots[0].current = {};
    h.mount();
    assert.equal(controllers.length, 0, "Do not even schedule map activation without consent");
    consent = { updatedAt: "offline-choice", statistics: true };
    assert.equal(h.render(ContactPageHeroMedia).props.children.type, ContactMapFallback, "Consent alone must not mount map assets");
    h.mount();
    assert.equal(controllers.length, 1);
    controllers[0].ready();
    assert.equal(h.render(ContactPageHeroMedia).props.children.type, DeferredFixture, "The real visibility/load/settle controller permits the module");
    h.mount();
    assert.equal(controllers[0].cancelled, true, "Detach activation observers once the map is mounted");
    assert.equal(h.render(ContactPageHeroMedia).props.children.type, DeferredFixture, "An activated map stays mounted while the visitor scrolls");
    consent = { updatedAt: "offline-choice", statistics: false };
    assert.equal(h.render(ContactPageHeroMedia).props.children.type, ContactMapFallback, "Revocation unmounts the map even after idle");
    consent = { updatedAt: "", statistics: true };
    assert.equal(h.render(ContactPageHeroMedia).props.children.type, ContactMapFallback, "No valid saved choice fails closed");
    h.cleanup();

    const pendingHooks = hooks(), pendingLoad = loader(pendingHooks, mediaOverrides);
    const pendingMedia = pendingLoad(path.join(root, "src/components/ContactPageMedia.tsx")).ContactPageHeroMedia;
    consent = { updatedAt: "offline-choice", statistics: true };
    pendingHooks.render(pendingMedia);
    pendingHooks.slots[0].current = {};
    pendingHooks.mount();
    const pending = controllers.at(-1);
    assert.equal(pending.cancelled, false);
    consent = { updatedAt: "offline-choice", statistics: false };
    assert.equal(pendingHooks.render(pendingMedia).props.children.type.name, "ContactMapFallback");
    pendingHooks.mount();
    assert.equal(pending.cancelled, true, "Revocation cancels activation before the map ever mounts");
    pendingHooks.cleanup();

    for (locale of ["cs", "en", "de"]) {
      const html = renderToStaticMarkup(React.createElement(ContactMapFallback, { variant: "hero" }));
      assert.equal((html.match(/<li>/g) || []).length, 3, "All office addresses remain available: " + locale);
      assert.equal((html.match(/href="https:\/\/www.google.com\/maps\/search/g) || []).length, 3);
      assert.ok(html.includes(require(path.join(root, "messages", locale + ".json")).contact.mapConsentManage));
      assert.doesNotMatch(html, /<script|<iframe|<img|<link/, "No external map request from SSR/denied placeholder");
    }
    locale = "cs";

    const timers = new Map();
    let timerId = 0;
    global.window = {
      setTimeout: callback => { timers.set(++timerId, callback); return timerId; },
      clearTimeout: id => timers.delete(id)
    };
    const calls = [], markers = [];
    let removed = 0;
    global.window.matchMedia = () => ({ matches: true });
    global.window.L = {
      map: (_container, options) => { assert.equal(options.scrollWheelZoom, false); return { fitBounds() {}, flyTo: (...args) => calls.push(args), remove: () => removed++, invalidateSize() {} }; },
      tileLayer: () => ({ addTo() {} }),
      latLngBounds: () => ({}),
      marker: () => { const marker = { addTo() { return this; }, bindPopup(content) { assert.match(content, /class="contact-map-infowindow"/, "Use the same compact popup typography as Google Maps"); return this; }, openPopup() { this.opened = true; } }; markers.push(marker); return marker; }
    };
    const mapHooks = hooks();
    const mapLoad = loader(mapHooks);
    const { ContactOfficesMap } = mapLoad(path.join(root, "src/components/ContactOfficesMap.tsx"));
    consent = { updatedAt: "offline-choice", statistics: false };
    assert.equal(ContactOfficesMap({}).type.name, "ContactMapFallback", "The actual provider has its own consent gate");
    consent = { updatedAt: "offline-choice", statistics: true };
    const provider = ContactOfficesMap({}).props.children;
    tree = mapHooks.render(provider.type, provider.props);
    mapHooks.slots[0].current = {};
    mapHooks.mount();
    tree.props.onSelect(2); // Choose before the async map assets have resolved.
    await flush();
    assert.equal(calls.length, 1);
    assert.equal(calls[0][1], 14);
    assert.equal(calls[0][2].duration, 0);
    assert.equal(markers[2].opened, true, "A quick early click still focuses the correct office once loaded");
    tree = mapHooks.render(provider.type, provider.props);
    tree.props.onSelect(1);
    assert.equal(calls.at(-1)[2].duration, 0, "Respect reduced motion");
    tree = mapHooks.render(provider.type, provider.props);
    const html = renderToStaticMarkup(tree);
    assert.equal((html.match(/aria-pressed="true"/g) || []).length, 1);
    assert.ok(html.includes('role="group"') && html.includes('role="region"'));
    mapHooks.cleanup();
    assert.equal(removed, 1);

    // The alternative Google provider must retain the same office buttons.
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = "offline-fixture-never-sent";
    const centers = [], infos = [];
    global.window.google = { maps: {
      Map: class { constructor(_node, options) { assert.equal(options.scrollwheel, false); } fitBounds() {} setCenter(position) { centers.push(position); } setZoom() {} },
      Marker: class { addListener() {} },
      InfoWindow: class { constructor() { infos.push(this); } open() { this.opened = true; } close() {} },
      LatLngBounds: class { extend() {} }
    } };
    const googleHooks = hooks(), googleLoad = loader(googleHooks);
    const googleProvider = googleLoad(path.join(root, "src/components/ContactOfficesMap.tsx")).ContactOfficesMap({}).props.children;
    tree = googleHooks.render(googleProvider.type, googleProvider.props);
    googleHooks.slots[0].current = {};
    googleHooks.mount();
    tree.props.onSelect(2);
    await flush();
    assert.equal(centers.length, 1);
    assert.equal(infos[2].opened, true);
    googleHooks.cleanup();

    // Blocked map assets render useful addresses rather than an empty panel.
    delete process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    delete global.window.L;
    global.document = {
      querySelector: () => null,
      createElement: () => ({ dataset: {} }),
      head: { appendChild: element => { if (element.src) queueMicrotask(() => element.onerror()); } }
    };
    const errorHooks = hooks(), errorLoad = loader(errorHooks);
    const errorProvider = errorLoad(path.join(root, "src/components/ContactOfficesMap.tsx")).ContactOfficesMap({}).props.children;
    errorHooks.render(errorProvider.type, errorProvider.props);
    errorHooks.slots[0].current = {};
    errorHooks.mount();
    await flush();
    await flush();
    assert.equal(errorHooks.render(errorProvider.type, errorProvider.props).type.name, "ContactMapFallback");
    errorHooks.cleanup();

    const contact = fs.readFileSync(path.join(root, "src/app/[locale]/kontakt/page.tsx"), "utf8");
    assert.ok(contact.indexOf("<ContactPageHeroMedia") < contact.indexOf("<ContactFormSection"));
    assert.doesNotMatch(contact, /ContactMapDisclosure|ContactPageOfficesMap/);
    const styles = postcss.parse(fs.readFileSync(path.join(root, "src/components/contact-offices-map.css"), "utf8"));
    const declarations = [];
    styles.walkDecls(declaration => declarations.push({ selector: declaration.parent.selector, property: declaration.prop, value: declaration.value }));
    const values = (selector, property) => declarations.filter(d => d.selector === selector && d.property === property).map(d => d.value);
    assert.deepEqual(values(".contact-offices-map-picker", "grid-template-columns"), ["repeat(3, minmax(0, 1fr))"], "One evenly sized, integrated office switcher");
    assert.deepEqual(values(".contact-offices-map-tab", "border-radius"), ["0"], "No oversized pill-button capsule");
    assert.deepEqual(values(".contact-offices-map-tab", "min-height"), ["48px"], "Retain usable touch targets while simplifying the visual surface");
    assert.ok(values(".contact-offices-map-tab", "white-space").every(value => value === "normal"), "Never truncate an office name on mobile");
    assert.deepEqual(values(".contact-offices-map-tab.is-active", "box-shadow"), ["inset 0 -3px 0 #24634e"], "Active office has a non-color-only underline");
    assert.deepEqual(values(".contact-offices-map-tab:focus-visible", "outline"), ["2px solid #174b3c"], "Keyboard selection remains visible");
    assert.ok(!declarations.some(d => d.selector?.includes("contact-offices-map") && ["grid-row", "order"].includes(d.property)), "Office selector stays before the map in visual and DOM order");
    console.log("PASS contact map: one top map; compact accessible office toolbar; consent-gated settled activation, revocation, CS/EN/DE offline addresses, Leaflet/Google selection, early click, reduced motion and blocked assets; no network");
  } finally {
    for (const key of ["window", "document", "IntersectionObserver", "fetch"]) {
      if (originals[key] === undefined) delete global[key]; else global[key] = originals[key];
    }
    if (originals.key === undefined) delete process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; else process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = originals.key;
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
