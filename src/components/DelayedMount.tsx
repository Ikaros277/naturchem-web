"use client";

import { useEffect, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Max wait before mount when requestIdleCallback is used. */
  delayMs?: number;
  idle?: boolean;
};

/** Mount children after idle or timeout — keeps third-party widgets off the critical path. */
export function DelayedMount({ children, delayMs = 5000, idle = true }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const run = () => setShow(true);
    if (idle && "requestIdleCallback" in window) {
      const id = window.requestIdleCallback(run, { timeout: delayMs });
      return () => window.cancelIdleCallback(id);
    }
    const timer = window.setTimeout(run, delayMs);
    return () => window.clearTimeout(timer);
  }, [delayMs, idle]);

  return show ? children : null;
}
