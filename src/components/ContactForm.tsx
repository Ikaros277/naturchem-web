"use client";

import { useState } from "react";

import { legalPaths } from "@/lib/legal";
import { type InquiryCategoryId } from "@/lib/contact-inquiry";
import type {
  getInquiryCategories,
  getPriorityContactServiceChoices
} from "@/lib/i18n/contact-inquiry-i18n";
import { sendGtagEvent } from "@/lib/gtag";
import { useLocale, useTranslations } from "@/lib/i18n/locale-context";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { company } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

type Props = {
  categories: ReturnType<typeof getInquiryCategories>;
  serviceChoices: ReturnType<typeof getPriorityContactServiceChoices>;
  initialCategory?: InquiryCategoryId;
  initialMessage?: string;
  initialServices?: string[];
};

export function ContactForm({
  categories,
  serviceChoices,
  initialCategory = "nevim",
  initialMessage = "",
  initialServices = []
}: Props) {
  const locale = useLocale();
  const t = useTranslations("contactForm");
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [contactChannelError, setContactChannelError] = useState(false);
  const [inquiryCategory, setInquiryCategory] = useState<InquiryCategoryId>(initialCategory);
  const [selectedServices, setSelectedServices] = useState<string[]>(initialServices);

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
      setContactChannelError(true);
      setStatus("error");
      setFeedback(t.contactRequired);
      return;
    }

    setContactChannelError(false);

    setStatus("loading");
    setFeedback(t.sending);

    try {
      const response = await fetch("/api/contact/", {
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
      const servicesForEvent = [...selectedServices];
      const locationProvided = Boolean(String(formData.get("location") ?? "").trim());
      const deadlineProvided = Boolean(String(formData.get("deadline") ?? "").trim());
      form.reset();
      setInquiryCategory("nevim");
      setSelectedServices([]);
      sendGtagEvent("generate_lead", {
        form_id: "poptavkovy-formular",
        inquiry_category: categoryForEvent,
        service_interest: servicesForEvent.join(" | ") || categoryForEvent,
        service_count: servicesForEvent.length,
        lead_has_location: locationProvided,
        lead_has_deadline: deadlineProvided
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
        <p className="contact-form-survey-note muted">
          {t.surveyAfterSuccess}{" "}
          <LocaleLink href="/dotaznik-spokojenosti">{t.surveyAfterSuccessLink}</LocaleLink>.
        </p>
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

      <p className="contact-form-honeypot" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <p id="contact-channel-hint" className="contact-form-channel-hint muted">
        {t.contactChannelHint}
      </p>

      <div className="contact-form-grid">
        <div className="contact-form-col contact-form-col--identity">
          <p>
            <label>
              {t.nameLabel}
              <br />
              <input name="name" required autoComplete="name" maxLength={200} />
            </label>
          </p>

          <p>
            <label htmlFor="contact-email-input">
              {t.emailLabel}
              <br />
              <input
                id="contact-email-input"
                type="email"
                name="email"
                autoComplete="email"
                maxLength={254}
                aria-describedby="contact-channel-hint"
                aria-invalid={contactChannelError || undefined}
              />
            </label>
          </p>

          <p>
            <label htmlFor="contact-phone-input">
              {t.phoneLabel}
              <br />
              <input
                id="contact-phone-input"
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={40}
                aria-describedby="contact-channel-hint"
                aria-invalid={contactChannelError || undefined}
              />
            </label>
          </p>

          <p>
            <label>
              {t.locationLabel}
              <br />
              <input
                name="location"
                autoComplete="address-level2"
                maxLength={200}
                placeholder={t.locationPlaceholder}
              />
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

          <p>
            <label>
              {t.deadlineLabel}
              <br />
              <input name="deadline" maxLength={200} placeholder={t.deadlinePlaceholder} />
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
                maxLength={10000}
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

      <fieldset className="contact-service-choices">
        <legend>{t.serviceLabel}</legend>
        <p className="contact-service-choices-hint muted">{t.serviceHint}</p>
        <div className="contact-service-choices-grid">
          {serviceChoices.map((service) => {
            const checked = selectedServices.includes(service.value);
            return (
              <label key={service.value} className="contact-service-choice">
                <input
                  type="checkbox"
                  name="services"
                  value={service.value}
                  checked={checked}
                  onChange={(event) => {
                    setSelectedServices((current) =>
                      event.target.checked
                        ? [...new Set([...current, service.value])]
                        : current.filter((value) => value !== service.value)
                    );
                  }}
                />
                <span>{service.label}</span>
              </label>
            );
          })}
        </div>
        {selectedServices
          .filter((service) => !serviceChoices.some((choice) => choice.value === service))
          .map((service) => (
            <input key={service} type="hidden" name="services" value={service} />
          ))}
      </fieldset>

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
