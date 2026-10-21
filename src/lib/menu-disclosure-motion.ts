/** Enhance native menu disclosures; navigation and no-motion mode stay native. */
export function installMenuDisclosureMotion(root: HTMLElement, view: Window = window) {
  const reduced = view.matchMedia("(prefers-reduced-motion: reduce)");
  const active = new Map<HTMLDetailsElement, { animation: Animation; open: boolean; overflow: string }>();

  function settle(details: HTMLDetailsElement, open?: boolean) {
    const state = active.get(details);
    if (!state) return;
    active.delete(details);
    state.animation.onfinish = null;
    state.animation.oncancel = null;
    state.animation.cancel();
    details.style.overflow = state.overflow;
    details.open = open ?? state.open;
    delete details.dataset.disclosureState;
  }

  function settleAll() {
    for (const details of active.keys()) settle(details);
  }

  function onClick(event: MouseEvent) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
    if (!(event.target instanceof Element)) return;
    const summary = event.target.closest("summary");
    const details = summary?.parentElement;
    if (!summary || !details || details.tagName !== "DETAILS" || !root.contains(details)) return;
    if (!details.classList.contains("nav-mobile-details")) return;
    // A group heading can itself be a link. Never turn navigation into a toggle.
    if (event.target.closest('a, button, input, select, textarea, [contenteditable="true"]')) return;
    const disclosure = details as HTMLDetailsElement;
    if (reduced.matches || typeof disclosure.animate !== "function") return;

    event.preventDefault();
    const open = !(active.get(disclosure)?.open ?? disclosure.open);
    // A fixed-height ancestor must not clip a newly opened nested category.
    for (const other of active.keys()) {
      if (other !== disclosure && other.contains(disclosure)) settle(other, true);
      else if (other !== disclosure && disclosure.contains(other)) settle(other);
    }
    const from = disclosure.getBoundingClientRect().height;
    const overflow = active.get(disclosure)?.overflow ?? disclosure.style.overflow;
    settle(disclosure);
    disclosure.open = true;
    const style = view.getComputedStyle(disclosure);
    const insets = [style.paddingTop, style.paddingBottom, style.borderTopWidth, style.borderBottomWidth]
      .reduce((sum, value) => sum + (Number.parseFloat(value) || 0), 0);
    const to = open ? disclosure.getBoundingClientRect().height : summary.getBoundingClientRect().height + insets;
    disclosure.style.overflow = "hidden";
    disclosure.dataset.disclosureState = open ? "opening" : "closing";
    try {
      const animation = disclosure.animate([{ height: `${from}px` }, { height: `${to}px` }], {
        duration: 280,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "both"
      });
      active.set(disclosure, { animation, open, overflow });
      animation.onfinish = () => settle(disclosure);
      animation.oncancel = () => settle(disclosure);
    } catch {
      // Optional decoration must never break the actual menu.
      disclosure.style.overflow = overflow;
      disclosure.open = open;
      delete disclosure.dataset.disclosureState;
    }
  }

  root.addEventListener("click", onClick);
  reduced.addEventListener("change", settleAll);
  view.addEventListener("resize", settleAll);
  return () => {
    root.removeEventListener("click", onClick);
    reduced.removeEventListener("change", settleAll);
    view.removeEventListener("resize", settleAll);
    settleAll();
  };
}
