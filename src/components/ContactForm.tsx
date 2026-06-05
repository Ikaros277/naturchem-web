"use client";

import { useState } from "react";

import { CONTACT_ATTACHMENT_TOOLTIP } from "@/lib/contact-attachment-hints";
import { INQUIRY_CATEGORIES, type InquiryCategoryId } from "@/lib/contact-inquiry";
import { sendGtagEvent } from "@/lib/gtag";

type Status = "idle" | "loading" | "success" | "error";

type Props = {
  initialCategory?: InquiryCategoryId;
  initialMessage?: string;
};

const SUCCESS_MESSAGE =
  "Děkujeme, podklady jsme obdrželi. Posoudíme je a ozveme se vám s návrhem dalšího postupu. Pokud bude potřeba něco upřesnit, kontaktujeme vás e-mailem nebo telefonicky.";

export function ContactForm({
  initialCategory = "nevim",
  initialMessage = ""
}: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [inquiryCategory, setInquiryCategory] = useState<InquiryCategoryId>(initialCategory);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();

    if (!email && !phone) {
      setStatus("error");
      setFeedback("Vyplňte prosím e-mail nebo telefon.");
      return;
    }

    setStatus("loading");
    setFeedback("Odesíláme podklady k posouzení...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });
      const result = (await response.json()) as { ok: boolean; message: string };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setFeedback(
          result.message ||
            "Odeslání se nezdařilo, kontaktujte nás prosím e-mailem nebo telefonicky."
        );
        return;
      }

      setStatus("success");
      setFeedback(result.message || SUCCESS_MESSAGE);
      const categoryForEvent = inquiryCategory;
      form.reset();
      setInquiryCategory("nevim");
      sendGtagEvent("generate_lead", {
        form_id: "poptavkovy-formular",
        service_interest: categoryForEvent
      });
    } catch {
      setStatus("error");
      setFeedback("Odeslání se nezdařilo, kontaktujte nás prosím e-mailem nebo telefonicky.");
    }
  }

  if (status === "success") {
    return (
      <div id="poptavkovy-formular" className="contact-form-success" role="status">
        <h2 id="poptavka-heading" className="contact-form-title">
          Rychlá poptávka
        </h2>
        <p className="contact-form-success-message">{feedback}</p>
      </div>
    );
  }

  return (
    <form id="poptavkovy-formular" className="contact-quick-form" onSubmit={handleSubmit}>
      <header className="contact-form-header">
        <h2 id="poptavka-heading" className="contact-form-title">
          Rychlá poptávka
        </h2>
        <p className="contact-form-lead">Stručný popis nebo příloha stačí — typ služby doladíme podle podkladů.</p>
      </header>

      <div className="contact-form-grid">
        <div className="contact-form-col contact-form-col--identity">
          <p>
            <label>
              Jméno / firma
              <br />
              <input name="name" required autoComplete="name" />
            </label>
          </p>

          <p>
            <label>
              E-mail
              <br />
              <input type="email" name="email" autoComplete="email" />
            </label>
          </p>

          <p>
            <label>
              Telefon
              <br />
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
          </p>
          <p className="form-help contact-form-contact-note">E-mail nebo telefon — alespoň jedno.</p>

          <p>
            <label>
              Čeho se poptávka týká?
              <br />
              <select
                name="inquiryCategory"
                className="contact-inquiry-select"
                required
                value={inquiryCategory}
                onChange={(event) => setInquiryCategory(event.target.value as InquiryCategoryId)}
              >
                {INQUIRY_CATEGORIES.map((category) => (
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
              Stručně popište, co řešíte
              <br />
              <textarea
                name="message"
                rows={9}
                required
                defaultValue={initialMessage}
                placeholder="Např. výzva z úřadu, měření emisí, hluk technologie, EIA, školení…"
              />
            </label>
          </p>

          <p>
            <span className="contact-form-label-row">
              <label htmlFor="contact-attachments-input">Příloha</label>
              <span className="form-info-tip">
                <button
                  type="button"
                  className="form-info-tip-trigger"
                  aria-label="Informace o příloze"
                  aria-describedby="contact-attachment-tooltip"
                >
                  i
                </button>
                <span id="contact-attachment-tooltip" role="tooltip" className="form-info-tip-panel">
                  {CONTACT_ATTACHMENT_TOOLTIP}
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
          <span>Souhlasím se zpracováním osobních údajů pro účel vyřízení poptávky.</span>
        </label>
      </p>

      <button type="submit" className="button contact-form-submit" disabled={status === "loading"}>
        {status === "loading" ? "Odesílám..." : "Odeslat podklady k posouzení"}
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
