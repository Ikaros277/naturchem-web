"use client";

import { Component, useEffect, useState, type ReactNode } from "react";
import { CONTACT_FORM_ID } from "@/lib/contact-url";
import { readContactUrlPrefill, type ContactUrlPrefill } from "@/lib/contact-url-prefill";
import { useTranslations } from "@/lib/i18n/locale-context";
import { company } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";

type Props = {
  initialCategory?: ContactUrlPrefill["initialCategory"];
  initialServices?: string[];
  initialMessage?: string;
};

export function ContactFormFallback() {
  const t = useTranslations("contactForm");
  const phoneHref = `tel:${company.phones[0].replace(/\s/g, "")}`;

  return (
    <div className="contact-form-fallback card" id={CONTACT_FORM_ID}>
      <p>
        {t.fallbackIntro}{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a> {t.fallbackOr}{" "}
        <a href={phoneHref}>{company.phones[0]}</a> {t.fallbackSuffix}
      </p>
      <div className="btn-row">
        <a className="button" href={`mailto:${company.email}`}>
          {t.fallbackEmail}
        </a>
        <a className="button secondary" href={phoneHref}>
          {t.fallbackCall}
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

const emptyPrefill: ContactUrlPrefill = {
  initialServices: [],
  initialMessage: ""
};

export function ContactFormSection(props: Props = {}) {
  const [urlPrefill, setUrlPrefill] = useState<ContactUrlPrefill | null>(null);

  useEffect(() => {
    const fromUrl = readContactUrlPrefill(window.location.search);
    if (fromUrl.initialServices.length > 0 || fromUrl.initialMessage) {
      setUrlPrefill(fromUrl);
    }
  }, []);

  const prefill = urlPrefill ?? emptyPrefill;
  const initialCategory = props.initialCategory ?? prefill.initialCategory;
  const initialServices = props.initialServices ?? prefill.initialServices;
  const initialMessage = props.initialMessage ?? prefill.initialMessage;

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
