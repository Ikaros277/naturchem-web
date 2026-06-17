"use client";

import { useState } from "react";

import { legalPaths } from "@/lib/legal";
import { type InquiryCategoryId } from "@/lib/contact-inquiry";
import type { getInquiryCategories } from "@/lib/i18n/contact-inquiry-i18n";
import { sendGtagEvent } from "@/lib/gtag";
import { useLocale, useTranslations } from "@/lib/i18n/locale-context";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { company } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

type Props = {
  categories: ReturnType<typeof getInquiryCategories>;
  initialCategory?: InquiryCategoryId;
  initialMessage?: string;
};

export function ContactForm({
  categories,
  initialCategory = "nevim",
  initialMessage = ""
}: Props) {
  const locale = useLocale();
  const t = useTranslations("contactForm");
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [inquiryCategory, setInquiryCategory] = useState<InquiryCategoryId>(initialCategory);

  const sendFailureMessage = t.sendFailure
    .replace("{email}", company.email)
    .replace("{phone}", company.phones[0]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();

    if (!email && !phone) {
      setStatus("error");
      setFeedback(t.contactRequired);
      return;
    }

    setStatus("loading");
    setFeedback(t.sending);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Accept-Language": locale },
        body: formData
      });
      const result = (await response.json()) as { ok: boolean; message: string };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setFeedback(result.message || sendFailureMessage);
        return;
      }

      setStatus("success");
      setFeedback(result.message || t.successMessage);
      const categoryForEvent = inquiryCategory;
      form.reset();
      setInquiryCategory("nevim");
      sendGtagEvent("generate_lead", {
        form_id: "poptavkovy-formular",
        service_interest: categoryForEvent
      });
    } catch {
      setStatus("error");
      setFeedback(sendFailureMessage);
    }
  }

  if (status === "success") {
    return (
      <div id="poptavkovy-formular" className="contact-form-success" role="status">
        <h2 id="poptavka-heading" className="contact-form-title">
          {t.successTitle}
        </h2>
        <p className="contact-form-success-message">{feedback}</p>
      </div>
    );
  }

  return (
    <form id="poptavkovy-formular" className="contact-quick-form" onSubmit={handleSubmit}>
      <header className="contact-form-header">
        <h2 id="poptavka-heading" className="contact-form-title">
          {t.formTitle}
        </h2>
        <p className="contact-form-lead">{t.formLead}</p>
      </header>

      <div className="contact-form-grid">
        <div className="contact-form-col contact-form-col--identity">
          <p>
            <label>
              {t.nameLabel}
              <br />
              <input name="name" required autoComplete="name" />
            </label>
          </p>

          <p>
            <label>
              {t.emailLabel}
              <br />
              <input type="email" name="email" autoComplete="email" />
            </label>
          </p>

          <p>
            <label>
              {t.phoneLabel}
              <br />
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
          </p>

          <p>
            <label>
              {t.categoryLabel}
              <br />
              <select
                name="inquiryCategory"
                className="contact-inquiry-select"
                required
                value={inquiryCategory}
                onChange={(event) => setInquiryCategory(event.target.value as InquiryCategoryId)}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </label>
          </p>
        </div>

        <div className="contact-form-col contact-form-col--message">
          <p className="contact-form-message-field">
            <label>
              {t.messageLabel}
              <br />
              <textarea
                name="message"
                rows={9}
                required
                defaultValue={initialMessage}
                placeholder={t.messagePlaceholder}
              />
            </label>
          </p>

          <p>
            <span className="contact-form-label-row">
              <label htmlFor="contact-attachments-input">{t.attachmentLabel}</label>
              <span className="form-info-tip">
                <button
                  type="button"
                  className="form-info-tip-trigger"
                  aria-label={t.attachmentTooltipAria}
                  aria-describedby="contact-attachment-tooltip"
                >
                  i
                </button>
                <span id="contact-attachment-tooltip" role="tooltip" className="form-info-tip-panel">
                  {t.attachmentTooltip}
                </span>
              </span>
            </span>
            <input
              id="contact-attachments-input"
              type="file"
              name="attachments"
              multiple
              accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.zip,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/zip,image/jpeg,image/png"
            />
          </p>
        </div>
      </div>

      <p>
        <label className="contact-service-option">
          <input type="checkbox" name="consent" required />
          <span>
            {t.consentPrefix}{" "}
            <LocaleLink href={legalPaths.privacy}>{t.consentPrivacyLink}</LocaleLink>.
          </span>
        </label>
      </p>

      <button type="submit" className="button contact-form-submit" disabled={status === "loading"}>
        {status === "loading" ? t.submitting : t.submit}
      </button>

      {feedback ? (
        <p
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`contact-form-feedback contact-form-feedback-${status}`}
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
