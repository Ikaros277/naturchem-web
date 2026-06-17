"use client";

import { Component, useEffect, type ReactNode } from "react";
import { CONTACT_FORM_ID } from "@/lib/contact-url";
import type { ContactUrlPrefill } from "@/lib/contact-url-prefill";
import type { getInquiryCategories } from "@/lib/i18n/contact-inquiry-i18n";
import { useTranslations } from "@/lib/i18n/locale-context";
import { company } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";

type Props = {
  categories: ReturnType<typeof getInquiryCategories>;
  initialCategory?: ContactUrlPrefill["initialCategory"];
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

export function ContactFormSection({
  categories,
  initialCategory,
  initialMessage = ""
}: Props) {
  useEffect(() => {
    function shouldScrollToForm() {
      const hasQueryPrefill = Boolean(initialMessage) || initialCategory !== undefined;
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
  }, [initialCategory, initialMessage]);

  const formKey = [initialCategory ?? "nevim", initialMessage].join("|");

  return (
    <ContactFormErrorBoundary>
      <ContactForm
        key={formKey}
        categories={categories}
        initialCategory={initialCategory}
        initialMessage={initialMessage}
      />
    </ContactFormErrorBoundary>
  );
}
