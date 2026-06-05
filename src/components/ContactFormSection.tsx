"use client";

import { Component, useEffect, type ReactNode } from "react";
import { company } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";
import type { InquiryCategoryId } from "@/lib/contact-inquiry";

type Props = {
  initialCategory?: InquiryCategoryId;
  initialServices?: string[];
  initialMessage?: string;
};

export function ContactFormFallback() {
  const phoneHref = `tel:${company.phones[0].replace(/\s/g, "")}`;

  return (
    <div className="contact-form-fallback card" id="poptavkovy-formular">
      <p>
        Formulář se nepodařilo načíst. Pošlete poptávku na{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a> nebo volejte{" "}
        <a href={phoneHref}>{company.phones[0]}</a>.
      </p>
      <div className="btn-row">
        <a className="button" href={`mailto:${company.email}`}>
          Napsat e-mail
        </a>
        <a className="button secondary" href={phoneHref}>
          Zavolat
        </a>
      </div>
    </div>
  );
}

class ContactFormErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ContactFormFallback />;
    }
    return this.props.children;
  }
}

export function ContactFormSection({
  initialCategory,
  initialServices = [],
  initialMessage = ""
}: Props) {
  useEffect(() => {
    const hasQueryPrefill = initialServices.length > 0 || Boolean(initialMessage);
    const hasFormHash = window.location.hash === "#poptavkovy-formular";
    if (!hasQueryPrefill && !hasFormHash) return;

    const el = document.getElementById("poptavkovy-formular");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [initialServices, initialMessage]);

  const formKey = [
    initialCategory ?? "nevim",
    ...initialServices,
    initialMessage
  ].join("|");

  return (
    <ContactFormErrorBoundary>
      <ContactForm
        key={formKey}
        initialCategory={initialCategory}
        initialMessage={initialMessage}
      />
    </ContactFormErrorBoundary>
  );
}
