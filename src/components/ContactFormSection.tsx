"use client";

import { Component, useEffect, type ReactNode } from "react";
import { CONTACT_FORM_ID } from "@/lib/contact-url";
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
    <div className="contact-form-fallback card" id={CONTACT_FORM_ID}>
      <p>
        Formulář teď nejde zobrazit. Napište nám na{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a> nebo zavolejte{" "}
        <a href={phoneHref}>{company.phones[0]}</a> — kontakty najdete níže.
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
    function shouldScrollToForm() {
      const hasQueryPrefill = initialServices.length > 0 || Boolean(initialMessage);
      const hasFormHash = window.location.hash === `#${CONTACT_FORM_ID}`;
      return hasQueryPrefill || hasFormHash;
    }

    function scrollToForm() {
      if (!shouldScrollToForm()) return;
      const el = document.getElementById(CONTACT_FORM_ID);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    scrollToForm();
    window.addEventListener("hashchange", scrollToForm);
    return () => window.removeEventListener("hashchange", scrollToForm);
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
