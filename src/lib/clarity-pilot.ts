import { COOKIE_CONSENT_EVENT, COOKIE_CONSENT_KEY, clearClarityStorage, readCookieConsent } from "@/lib/cookie-consent";
import { getClarityPilotId } from "@/lib/clarity-config";
export { getClarityPilotId } from "@/lib/clarity-config";

const publicPaths = new Set(["/", "/sluzby/", "/mereni-pro-kolaudaci/", "/mereni-nove-haly/", "/sluzby/pracovni-prostredi/"]);
const publicHosts = new Set(["www.naturchem.cz", "naturchem.cz"]);
const delayMs = 2500;

export function isClarityPilotPage(address: string, referrer: string) {
  try {
    const url = new URL(address);
    if (url.protocol !== "https:" || url.port || !publicHosts.has(url.hostname)
        || url.search || url.hash || url.username || url.password || !publicPaths.has(url.pathname)) return false;
    if (!referrer) return true;
    const source = new URL(referrer);
    if (!["https:", "http:"].includes(source.protocol) || source.search || source.hash || source.username || source.password) return false;
    // A same-site referrer from a form, login or other non-pilot route is not sent.
    return !publicHosts.has(source.hostname) || publicPaths.has(source.pathname);
  } catch { return false; }
}

type Clarity = ((...args: unknown[]) => void) & { q?: unknown[][]; t?: boolean };
type PilotWindow = Window & { clarity?: Clarity; navigation?: EventTarget };

/**
 * One allowlisted public document, not an SPA-wide tracker. No tracking where
 * the browser does not provide a pre-navigation boundary.
 */
function hasClarityChoice() {
  const choice = readCookieConsent();
  return choice?.clarity === true && Number.isFinite(Date.parse(choice.updatedAt));
}

export function mountClarityPilot(projectId: string, win: PilotWindow, doc: Document, canRecord = hasClarityChoice) {
  if (!getClarityPilotId(projectId) || win.top !== win || !win.navigation?.addEventListener
      || !isClarityPilotPage(win.location.href, doc.referrer) || win.clarity) return () => {};
  const navigation = win.navigation;
  let ended = false;
  let timer: number | undefined;
  let tag: HTMLScriptElement | undefined;

  function finish() {
    if (ended) return;
    ended = true;
    if (timer !== undefined) { win.clearTimeout(timer); timer = undefined; }
    if (!tag) return;
    // Active ConsentV2 denial restarts the vendor in cookieless mode. End it
    // directly instead; never enqueue a later start when an in-flight tag lands.
    try { win.clarity?.("stop"); } catch { /* best effort for vendor code */ }
    const retired: Clarity = () => {};
    retired.q = [];
    retired.t = true;
    win.clarity = retired;
    if (!canRecord()) clearClarityStorage(win, doc);
    tag.remove();
    tag = undefined;
  }

  function start() {
    timer = undefined;
    if (ended || tag || !canRecord() || !isClarityPilotPage(win.location.href, doc.referrer) || win.clarity) return;
    const queue: Clarity = (...args: unknown[]) => { queue.q?.push(args); };
    queue.q = [];
    win.clarity = queue;
    queue("consentv2", { ad_Storage: "denied", analytics_Storage: "granted" });
    tag = doc.createElement("script");
    tag.async = true;
    tag.referrerPolicy = "no-referrer";
    tag.src = "https://www.clarity.ms/tag/" + projectId;
    tag.addEventListener("error", finish, { once: true });
    doc.head.append(tag);
  }

  function sync() {
    if (!canRecord()) {
      clearClarityStorage(win, doc);
      if (tag) finish();
      else if (timer !== undefined) { win.clearTimeout(timer); timer = undefined; }
    } else if (!ended && !tag && timer === undefined) {
      timer = win.setTimeout(start, delayMs);
    }
  }
  function syncStorage(event: StorageEvent) {
    if (event.key === null || event.key === COOKIE_CONSENT_KEY) sync();
  }
  function beforeNavigate() { finish(); }
  function beforeLink(event: Event) {
    // Stop before another click observer can capture a prefilled contact URL.
    const target = event.target as Element | null;
    if (target?.closest?.("a[href]")) finish();
  }

  // A final vendor flush reads location.href. Stop before history changes it,
  // not only from a navigation event whose timing differs between browsers.
  const history = win.history;
  const originalPush = history.pushState;
  const originalReplace = history.replaceState;
  function pushState(this: History, ...args: Parameters<History["pushState"]>) {
    finish();
    return originalPush.apply(this, args);
  }
  function replaceState(this: History, ...args: Parameters<History["replaceState"]>) {
    finish();
    return originalReplace.apply(this, args);
  }
  try {
    history.pushState = pushState;
    history.replaceState = replaceState;
    if (history.pushState !== pushState || history.replaceState !== replaceState) throw new Error("History boundary unavailable");
  } catch {
    if (history.pushState === pushState) history.pushState = originalPush;
    if (history.replaceState === replaceState) history.replaceState = originalReplace;
    return () => {};
  }

  navigation.addEventListener("navigate", beforeNavigate);
  doc.addEventListener("click", beforeLink, true);
  doc.addEventListener("auxclick", beforeLink, true);
  doc.addEventListener("submit", finish, true);
  win.addEventListener("pagehide", finish);
  win.addEventListener(COOKIE_CONSENT_EVENT, sync);
  win.addEventListener("storage", syncStorage);
  sync();
  return () => {
    finish();
    navigation.removeEventListener("navigate", beforeNavigate);
    doc.removeEventListener("click", beforeLink, true);
    doc.removeEventListener("auxclick", beforeLink, true);
    doc.removeEventListener("submit", finish, true);
    win.removeEventListener("pagehide", finish);
    win.removeEventListener(COOKIE_CONSENT_EVENT, sync);
    win.removeEventListener("storage", syncStorage);
    // Do not overwrite a history wrapper installed by another tool meanwhile.
    if (history.pushState === pushState) history.pushState = originalPush;
    if (history.replaceState === replaceState) history.replaceState = originalReplace;
  };
}
