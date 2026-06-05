"use client";

import { useState } from "react";

import { CONTACT_ATTACHMENT_TOOLTIP } from "@/lib/contact-attachment-hints";
import { INQUIRY_CATEGORIES, type InquiryCategoryId } from "@/lib/contact-inquiry";
import { sendGtagEvent } from "@/lib/gtag";
import { company } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

type Props = {
  initialCategory?: InquiryCategoryId;
  initialMessage?: string;
};

const SUCCESS_MESSAGE =
  "Ozveme se Vám s dalším postupem. Když bude potřeba něco doplnit, dáme vědět e-mailem nebo telefonicky.";

const SEND_FAILURE_MESSAGE = `Zprávu se nepodařilo odeslat. Napište na ${company.email} nebo zavolejte ${company.phones[0]}.`;

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
      setFeedback("Abychom se Vám ozvali, vyplňte prosím e-mail nebo telefon.");
      return;
    }

    setStatus("loading");
    setFeedback("Moment, odesílám zprávu…");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });
      const result = (await response.json()) as { ok: boolean; message: string };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setFeedback(result.message || SEND_FAILURE_MESSAGE);
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
      setFeedback(SEND_FAILURE_MESSAGE);
    }
  }

  if (status === "success") {
    return (
      <div id="poptavkovy-formular" className="contact-form-success" role="status">
        <h2 id="poptavka-heading" className="contact-form-title">
          Díky, zprávu jsme dostali
        </h2>
        <p className="contact-form-success-message">{feedback}</p>
      </div>
    );
  }

  return (
    <form id="poptavkovy-formular" className="contact-quick-form" onSubmit={handleSubmit}>
      <header className="contact-form-header">
        <h2 id="poptavka-heading" className="contact-form-title">
          Napište nám
        </h2>
        <p className="contact-form-lead">
          Nemusíte mít všechno připravené. Krátká zpráva nebo příloha stačí — ozveme se a domluvíme,
          co dává smysl.
        </p>
      </header>

      <div className="contact-form-grid">
        <div className="contact-form-col contact-form-col--identity">
          <p>
            <label>
              Jméno nebo firma
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

          <p>
            <label>
              Čeho se Váš dotaz týká?
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
              S čím Vám pomůžeme?
              <br />
              <textarea
                name="message"
                rows={9}
                required
                defaultValue={initialMessage}
                placeholder="Třeba výzva z úřadu, popis provozu, termín, co už máte po ruce…"
              />
            </label>
          </p>

          <p>
            <span className="contact-form-label-row">
              <label htmlFor="contact-attachments-input">Příloha (nepovinné)</label>
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
          <span>Souhlasím se zpracováním údajů kvůli vyřízení dotazu.</span>
        </label>
      </p>

      <button type="submit" className="button contact-form-submit" disabled={status === "loading"}>
        {status === "loading" ? "Odesílám…" : "Odeslat zprávu"}
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
