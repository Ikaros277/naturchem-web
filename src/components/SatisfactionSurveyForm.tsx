"use client";

import { useState } from "react";

import { legalPaths } from "@/lib/legal";
import type { getInquiryCategories } from "@/lib/i18n/contact-inquiry-i18n";
import { sendGtagEvent } from "@/lib/gtag";
import { useLocale, useTranslations } from "@/lib/i18n/locale-context";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { company } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

type Props = {
  categories: ReturnType<typeof getInquiryCategories>;
};

const RATING_VALUES = ["1", "2", "3", "4", "5"] as const;
const NPS_VALUES = Array.from({ length: 11 }, (_, index) => String(index));

function RatingScale({
  name,
  legend,
  required,
  ratingLabels
}: {
  name: string;
  legend: string;
  required?: boolean;
  ratingLabels: Record<(typeof RATING_VALUES)[number], string>;
}) {
  return (
    <fieldset className="card satisfaction-rating-fieldset">
      <legend>{legend}</legend>
      <div className="satisfaction-rating-scale" role="radiogroup" aria-label={legend}>
        {RATING_VALUES.map((value) => (
          <label key={value} className="satisfaction-rating-option">
            <input type="radio" name={name} value={value} required={required} />
            <span className="satisfaction-rating-value">{value}</span>
            <span className="satisfaction-rating-label">{ratingLabels[value]}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function SatisfactionSurveyForm({ categories }: Props) {
  const locale = useLocale();
  const t = useTranslations("satisfactionSurvey");
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const ratingLabels = {
    "1": t.rating1,
    "2": t.rating2,
    "3": t.rating3,
    "4": t.rating4,
    "5": t.rating5
  } as const;

  const sendFailureMessage = t.sendFailure
    .replace("{email}", company.email)
    .replace("{phone}", company.phones[0]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback(t.sending);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/satisfaction-survey", {
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
      event.currentTarget.reset();
      sendGtagEvent("satisfaction_survey_submit", { form_id: "dotaznik-spokojenosti" });
    } catch {
      setStatus("error");
      setFeedback(sendFailureMessage);
    }
  }

  if (status === "success") {
    return (
      <div className="contact-form-success" role="status">
        <h2 className="contact-form-title">{t.successTitle}</h2>
        <p className="contact-form-success-message">{feedback}</p>
      </div>
    );
  }

  return (
    <form className="contact-quick-form satisfaction-survey-form" onSubmit={handleSubmit}>
      <header className="contact-form-header">
        <h2 className="contact-form-title">{t.formTitle}</h2>
        <p className="contact-form-lead">{t.formLead}</p>
      </header>

      <p className="contact-form-honeypot" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="contact-form-grid">
        <div className="contact-form-col contact-form-col--identity">
          <p>
            <label>
              {t.companyLabel}
              <br />
              <input name="companyOrName" autoComplete="organization" />
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
              {t.cooperationLabel}
              <br />
              <select name="cooperationCategory" className="contact-inquiry-select" defaultValue="">
                <option value="">{t.cooperationPlaceholder}</option>
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
              {t.positivesLabel}
              <br />
              <textarea name="positives" rows={4} placeholder={t.positivesPlaceholder} />
            </label>
          </p>

          <p className="contact-form-message-field">
            <label>
              {t.improvementsLabel}
              <br />
              <textarea name="improvements" rows={4} placeholder={t.improvementsPlaceholder} />
            </label>
          </p>
        </div>
      </div>

      <div className="satisfaction-ratings-block">
        <RatingScale
          name="overallRating"
          legend={t.overallLegend}
          required
          ratingLabels={ratingLabels}
        />
        <RatingScale
          name="communicationRating"
          legend={t.communicationLegend}
          ratingLabels={ratingLabels}
        />
        <RatingScale
          name="qualityRating"
          legend={t.qualityLegend}
          ratingLabels={ratingLabels}
        />
        <RatingScale
          name="timelinessRating"
          legend={t.timelinessLegend}
          ratingLabels={ratingLabels}
        />

        <fieldset className="card satisfaction-rating-fieldset satisfaction-nps-fieldset">
          <legend>{t.npsLegend}</legend>
          <p className="form-help">{t.npsHelp}</p>
          <div className="satisfaction-nps-scale" role="radiogroup" aria-label={t.npsLegend}>
            {NPS_VALUES.map((value) => (
              <label key={value} className="satisfaction-nps-option">
                <input type="radio" name="nps" value={value} />
                <span>{value}</span>
              </label>
            ))}
          </div>
          <p className="satisfaction-nps-hints">
            <span>{t.npsLow}</span>
            <span>{t.npsHigh}</span>
          </p>
        </fieldset>
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
