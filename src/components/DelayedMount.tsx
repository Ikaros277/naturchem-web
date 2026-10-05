"use client";

import { useEffect, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Max wait before mount when requestIdleCallback is used. */
  delayMs?: number;
  idle?: boolean;
};

/** Mount nonessential widgets after document load, then idle (or a timeout). */
export function DelayedMount({ children, delayMs = 5000, idle = true }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let idleId = 0;
    let timer = 0;
    let cancelled = false;
    const run = () => setShow(true);
    const schedule = () => {
      if (cancelled) return;
      if (idle && "requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(run, { timeout: delayMs });
      } else {
        timer = window.setTimeout(run, delayMs);
      }
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });
    return () => {
      cancelled = true;
      window.removeEventListener("load", schedule);
      if (idleId) window.cancelIdleCallback(idleId);
      window.clearTimeout(timer);
    };
  }, [delayMs, idle]);

  return show ? children : null;
}
