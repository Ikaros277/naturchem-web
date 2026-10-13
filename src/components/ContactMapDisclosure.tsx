"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const ContactOfficesMap = dynamic(() => import("./ContactOfficesMap").then(module => module.ContactOfficesMap), { ssr: false });

/** The external map is not mounted or requested until the visitor asks to see it. */
export function ContactMapDisclosure({ label }: { label: string }) {
  const [opened, setOpened] = useState(false);
  return <details className="contact-map-disclosure" onToggle={event => setOpened(event.currentTarget.open)}>
    <summary>{label}</summary>{opened ? <ContactOfficesMap variant="panel" /> : null}
  </details>;
}
