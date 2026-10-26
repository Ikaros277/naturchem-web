/** Wait for initial anchor/prefill scrolling to settle before optional map assets. */
export const CONTACT_MAP_SETTLE_MS = 600;

type MapView = Pick<Window,
  "innerWidth" | "innerHeight" | "setTimeout" | "clearTimeout" |
  "addEventListener" | "removeEventListener"
> & Partial<Pick<Window, "requestIdleCallback" | "cancelIdleCallback">> & {
  IntersectionObserver?: typeof IntersectionObserver;
};

export function installDeferredMapActivation(
  container: HTMLElement,
  onReady: () => void,
  view: MapView = window
): () => void {
  const doc = container.ownerDocument;
  let finished = false;
  let idleReady = false;
  let idleScheduled = false;
  let idleHandle: number | undefined;
  let idleTimer: number | undefined;
  let settleTimer: number | undefined;
  let observer: IntersectionObserver | undefined;

  function visible() {
    if (doc.hidden || view.innerHeight <= 0 || view.innerWidth <= 0) return false;
    const rect = container.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return false;
    const height = Math.min(rect.bottom, view.innerHeight) - Math.max(rect.top, 0);
    // A thin strip left under the sticky header is not a reason to load tiles.
    const minimum = Math.min(120, rect.height / 4, view.innerHeight / 2);
    return height >= minimum &&
      Math.min(rect.right, view.innerWidth) > Math.max(rect.left, 0);
  }

  function cleanup() {
    finished = true;
    view.clearTimeout(settleTimer);
    view.clearTimeout(idleTimer);
    if (idleHandle !== undefined) view.cancelIdleCallback?.(idleHandle);
    observer?.disconnect();
    view.removeEventListener("load", scheduleIdle);
    view.removeEventListener("scroll", schedule);
    view.removeEventListener("resize", schedule);
    view.removeEventListener("hashchange", schedule);
    doc.removeEventListener("visibilitychange", schedule);
  }

  function schedule() {
    view.clearTimeout(settleTimer);
    if (finished || !idleReady) return;
    settleTimer = view.setTimeout(() => {
      settleTimer = undefined;
      if (finished || !visible()) return;
      cleanup();
      onReady();
    }, CONTACT_MAP_SETTLE_MS);
  }

  function ready() {
    idleHandle = undefined;
    idleTimer = undefined;
    idleReady = true;
    schedule();
  }

  function scheduleIdle() {
    if (finished || idleScheduled) return;
    idleScheduled = true;
    if (typeof view.requestIdleCallback === "function" && typeof view.cancelIdleCallback === "function") {
      idleHandle = view.requestIdleCallback(ready, { timeout: 1500 });
    } else {
      idleTimer = view.setTimeout(ready, 200);
    }
  }

  if (typeof view.IntersectionObserver === "function") {
    observer = new view.IntersectionObserver(schedule, { threshold: [0, 0.25] });
    observer.observe(container);
  }
  view.addEventListener("scroll", schedule, { passive: true });
  view.addEventListener("resize", schedule);
  view.addEventListener("hashchange", schedule);
  doc.addEventListener("visibilitychange", schedule);
  if (doc.readyState === "complete") scheduleIdle();
  else view.addEventListener("load", scheduleIdle, { once: true });

  return cleanup;
}
