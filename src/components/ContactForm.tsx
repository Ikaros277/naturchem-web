"use client";

import { useMemo, useState } from "react";

import {
  CONTACT_SERVICE_OPTIONS_UI,
  isValidContactService
} from "@/lib/contact-services";
import { INQUIRY_CATEGORIES, type InquiryCategoryId } from "@/lib/contact-inquiry";
import { sendGtagEvent } from "@/lib/gtag";

type Status = "idle" | "loading" | "success" | "error";

export { isValidContactService };

type Props = {
  initialCategory?: InquiryCategoryId;
  initialServices?: string[];
  initialMessage?: string;
};

function normalizeFormService(service: string): string {
  if (service === "Odborný posudek a provozní řád") return "Odborné posudky";
  if (service === "ISPOP a GHG") return "ISPOP";
  if (service === "EIA, posudky a poradenství") return "EIA a oznámení záměru";
  return service;
}

const SUCCESS_MESSAGE =
  "Děkujeme, podklady jsme obdrželi. Posoudíme je a ozveme se vám s návrhem dalšího postupu. Pokud bude potřeba něco upřesnit, kontaktujeme vás e-mailem nebo telefonicky.";

export function ContactForm({
  initialCategory = "nevim",
  initialServices = [],
  initialMessage = ""
}: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [inquiryCategory, setInquiryCategory] = useState<InquiryCategoryId>(initialCategory);
  const [detailedService, setDetailedService] = useState<string>(() => {
    const normalized = initialServices
      .map(normalizeFormService)
      .filter(isValidContactService)
      .filter((service) => service !== "Nejsem si jistý");
    return normalized[0] ?? "";
  });

  const serviceOptions = useMemo(() => [...CONTACT_SERVICE_OPTIONS_UI], []);

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
      const serviceForEvent = detailedService;
      form.reset();
      setInquiryCategory("nevim");
      setDetailedService("");
      sendGtagEvent("generate_lead", {
        form_id: "poptavkovy-formular",
        service_interest: serviceForEvent || categoryForEvent
      });
    } catch {
      setStatus("error");
      setFeedback("Odeslání se nezdařilo, kontaktujte nás prosím e-mailem nebo telefonicky.");
    }
  }

  if (status === "success") {
    return (
      <div id="poptavkovy-formular" className="contact-form-success" role="status">
        <h3 className="contact-form-title">Rychlá poptávka</h3>
        <p className="contact-form-success-message">{feedback}</p>
      </div>
    );
  }

  return (
    <form id="poptavkovy-formular" className="contact-quick-form" onSubmit={handleSubmit}>
      <header className="contact-form-header">
        <h3 className="contact-form-title">Rychlá poptávka</h3>
        <p className="contact-form-lead">
          Pošlete nám stručný popis nebo přílohu. Pokud si nejste jistí typem služby, navrhneme
          vhodný postup podle podkladů.
        </p>
      </header>

      <p>
        <label>
          Jméno / firma
          <br />
          <input name="name" required autoComplete="name" />
        </label>
      </p>

      <div className="contact-form-contact-row">
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
      </div>
      <p className="form-help contact-form-contact-note">Vyplňte prosím e-mail nebo telefon.</p>

      <fieldset className="inquiry-category-fieldset">
        <legend>Čeho se poptávka týká?</legend>
        <div className="inquiry-category-grid" role="radiogroup" aria-label="Čeho se poptávka týká">
          {INQUIRY_CATEGORIES.map((category) => (
            <label
              key={category.id}
              className={`inquiry-category-card${
                inquiryCategory === category.id ? " is-selected" : ""
              }`}
            >
              <input
                type="radio"
                name="inquiryCategory"
                value={category.id}
                required
                checked={inquiryCategory === category.id}
                onChange={() => setInquiryCategory(category.id)}
              />
              <span>{category.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <p>
        <label>
          Stručně popište, co řešíte
          <br />
          <textarea
            name="message"
            rows={5}
            required
            defaultValue={initialMessage}
            placeholder="Např. máme výzvu z úřadu, potřebujeme měření emisí, řešíme hluk technologie, připravujeme EIA, potřebujeme školení chemické legislativy…"
          />
        </label>
      </p>

      <p>
        <label>
          Příloha
          <br />
          <span className="form-help">
            Příloha není povinná, ale pomůže nám rychleji určit rozsah zakázky.
          </span>
          <span className="form-help form-help-fine">
            PDF, DOC/DOCX, XLS/XLSX, JPG/PNG nebo ZIP; max. 7 MB na soubor.
          </span>
          <input
            type="file"
            name="attachments"
            multiple
            accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.zip,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/zip,image/jpeg,image/png"
          />
        </label>
      </p>

      <p>
        <label className="contact-service-option">
          <input type="checkbox" name="consent" required />
          <span>Souhlasím se zpracováním osobních údajů pro účel vyřízení poptávky.</span>
        </label>
      </p>

      <button type="submit" className="button contact-form-submit" disabled={status === "loading"}>
        {status === "loading" ? "Odesílám..." : "Odeslat podklady k posouzení"}
      </button>

      <details className="contact-form-expanded">
        <summary>Chci doplnit více údajů</summary>
        <div className="contact-form-expanded-body">
          <p>
            <label>
              Lokalita provozu nebo záměru, pokud ji znáte
              <br />
              <input name="location" autoComplete="off" />
            </label>
          </p>
          <p>
            <label>
              Požadovaný termín
              <br />
              <input name="deadline" placeholder="Např. do konce června, před kolaudací…" />
            </label>
          </p>
          <p>
            <label>
              Upřesnit typ služby
              <br />
              <select
                name="services"
                className="contact-service-select"
                value={detailedService}
                onChange={(event) => setDetailedService(event.target.value)}
              >
                <option value="">Nepovinné upřesnění</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service === "Nejsem si jistý"
                      ? "Nejsem si jistý – potřebuji poradit"
                      : service}
                  </option>
                ))}
              </select>
            </label>
          </p>
          <p>
            <label>
              Další poznámka
              <br />
              <textarea name="extraNote" rows={3} placeholder="Cokoli navíc k zakázce nebo podkladům…" />
            </label>
          </p>
        </div>
      </details>

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
