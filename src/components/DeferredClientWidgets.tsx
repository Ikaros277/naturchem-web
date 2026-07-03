"use client";

import dynamic from "next/dynamic";
import { DelayedMount } from "@/components/DelayedMount";

const ConsentAwareTracking = dynamic(
  () => import("@/components/ConsentAwareTracking").then((m) => m.ConsentAwareTracking),
  { ssr: false }
);

const LiveChatWidgets = dynamic(
  () => import("@/components/LiveChatWidgets").then((m) => m.LiveChatWidgets),
  { ssr: false }
);

export function DeferredClientWidgets() {
  return (
    <>
      <DelayedMount delayMs={6000}>
        <LiveChatWidgets />
      </DelayedMount>
      <ConsentAwareTracking />
    </>
  );
}
