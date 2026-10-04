import { after, NextResponse } from "next/server";
import { Buffer } from "node:buffer";
import { randomUUID } from "node:crypto";
import { Resend } from "resend";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { FORM_LIMITS } from "@/lib/form-validation-limits";
import { getAttachmentError } from "@/lib/attachment-validation";
import { INQUIRY_CATEGORY_LABELS, isInquiryCategoryId } from "@/lib/contact-inquiry";
import { INQUIRY_CATEGORY_LABELS as INQUIRY_CATEGORY_LABELS_EN } from "@/lib/contact-inquiry-en";
import { INQUIRY_CATEGORY_LABELS as INQUIRY_CATEGORY_LABELS_DE } from "@/lib/contact-inquiry-de";
import { isValidContactService } from "@/lib/contact-services";
import type { Locale } from "@/lib/i18n/locales";
import { company } from "@/lib/site";
import { verifyTurnstileToken } from "@/lib/turnstile";

const MAX_SUBJECT_LEN = 200;

const apiMessages = {
  cs: {
    requiredFields: "Vyplňte prosím povinná pole (jméno, kontakt, popis a souhlas).",
    attachmentsTooLarge: "Přílohy mohou mít dohromady maximálně 4 MB.",
    configError: "Chyba konfigurace příjemců. Kontaktujte nás prosím e-mailem.",
    sendFailure: (email: string, phone: string) =>
      `Zprávu se nepodařilo odeslat. Napište na ${email} nebo zavolejte ${phone}.`,
    success:
      "Ozveme se Vám do 24 hodin. Pokud budeme potřebovat další podklady, domluvíme se s Vámi e-mailem nebo telefonicky.",
    rateLimited: "Příliš mnoho odeslaných zpráv. Zkuste to prosím později nebo nás kontaktujte telefonicky.",
    fieldTooLong: "Jedno z polí je příliš dlouhé. Zkuste text zkrátit.",
    tooManyAttachments: "Můžete nahrát maximálně 5 příloh.",
    invalidAttachment: "Nepodporovaný typ souboru. Povolené formáty: PDF, Word, Excel, obrázek nebo ZIP.",
    securityConfigError:
      "Kontaktní formulář je dočasně nedostupný. Kontaktujte nás prosím e-mailem nebo telefonicky.",
    securityCheckFailed:
      "Bezpečnostní ověření se nezdařilo. Obnovte stránku a zkuste to znovu, případně nás kontaktujte e-mailem nebo telefonicky.",
    confirmationSubject: "Potvrzení Vaší zprávy — NATURCHEM",
    confirmationBody: (focus: string, leadId: string) =>
      [
        "Dobrý den,",
        "",
        "děkujeme za zprávu z webu NATURCHEM.",
        `Týká se oblasti: ${focus}.`,
        `ID poptávky: ${leadId}`,
        "",
        "Ozveme se Vám do 24 hodin.",
        "Pokud budeme potřebovat další podklady, domluvíme se s Vámi e-mailem nebo telefonicky.",
        "",
        "NATURCHEM, s.r.o."
      ].join("\n")
  },
  en: {
    requiredFields: "Please fill in the required fields (name, contact, description and consent).",
    attachmentsTooLarge: "Attachments may be up to 4 MB in total.",
    configError: "Recipient configuration error. Please contact us by email.",
    sendFailure: (email: string, phone: string) =>
      `We could not send the message. Email ${email} or call ${phone}.`,
    success:
      "We will contact you within 24 hours. If we need further documents, we will arrange this with you by email or phone.",
    rateLimited: "Too many messages sent. Please try again later or call us.",
    fieldTooLong: "One of the fields is too long. Please shorten the text.",
    tooManyAttachments: "You can upload at most 5 attachments.",
    invalidAttachment: "Unsupported file type. Allowed: PDF, Word, Excel, image or ZIP.",
    securityConfigError:
      "The contact form is temporarily unavailable. Please contact us by email or phone.",
    securityCheckFailed:
      "The security check failed. Refresh the page and try again, or contact us by email or phone.",
    confirmationSubject: "Confirmation of your message — NATURCHEM",
    confirmationBody: (focus: string, leadId: string) =>
      [
        "Hello,",
        "",
        "thank you for your message from the NATURCHEM website.",
        `It concerns: ${focus}.`,
        `Inquiry ID: ${leadId}`,
        "",
        "We will contact you within 24 hours.",
        "If we need additional information, we will let you know by email or phone.",
        "",
        "NATURCHEM, s.r.o."
      ].join("\n")
  },
  de: {
    requiredFields: "Bitte füllen Sie die Pflichtfelder aus (Name, Kontakt, Beschreibung und Einwilligung).",
    attachmentsTooLarge: "Anhänge dürfen insgesamt höchstens 4 MB groß sein.",
    configError: "Fehler bei der Empfängerkonfiguration. Bitte kontaktieren Sie uns per E-Mail.",
    sendFailure: (email: string, phone: string) =>
      `Die Nachricht konnte nicht gesendet werden. E-Mail ${email} oder Anruf ${phone}.`,
    success:
      "Wir melden uns innerhalb von 24 Stunden bei Ihnen. Falls weitere Unterlagen erforderlich sind, stimmen wir uns per E-Mail oder Telefon mit Ihnen ab.",
    rateLimited: "Zu viele Nachrichten. Bitte versuchen Sie es später erneut oder rufen Sie uns an.",
    fieldTooLong: "Ein Feld ist zu lang. Bitte kürzen Sie den Text.",
    tooManyAttachments: "Sie können höchstens 5 Anhänge hochladen.",
    invalidAttachment: "Nicht unterstützter Dateityp. Erlaubt: PDF, Word, Excel, Bild oder ZIP.",
    securityConfigError:
      "Das Kontaktformular ist vorübergehend nicht verfügbar. Bitte kontaktieren Sie uns per E-Mail oder Telefon.",
    securityCheckFailed:
      "Die Sicherheitsprüfung ist fehlgeschlagen. Laden Sie die Seite neu und versuchen Sie es erneut oder kontaktieren Sie uns per E-Mail oder Telefon.",
    confirmationSubject: "Bestätigung Ihrer Nachricht — NATURCHEM",
    confirmationBody: (focus: string, leadId: string) =>
      [
        "Guten Tag,",
        "",
        "vielen Dank für Ihre Nachricht über die NATURCHEM-Website.",
        `Sie betrifft den Bereich: ${focus}.`,
        `Anfrage-ID: ${leadId}`,
        "",
        "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
        "Falls wir weitere Angaben benötigen, informieren wir Sie per E-Mail oder Telefon.",
        "",
        "NATURCHEM, s.r.o."
      ].join("\n")
  }
} as const;

function resolveApiLocale(request: Request): Locale {
  const header = request.headers.get("accept-language")?.toLowerCase() ?? "";
  if (header.startsWith("de")) return "de";
  if (header.startsWith("en")) return "en";
  return "cs";
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isUploadedFile(value: FormDataEntryValue): value is File {
  return typeof value !== "string";
}

function getOptionalLines(formData: FormData): string[] {
  const fields: Array<{ key: string; label: string }> = [
    { key: "deadline", label: "Požadovaný termín" },
    { key: "extraNote", label: "Další poznámka" }
  ];

  return fields
    .map(({ key, label }) => {
      const value = getString(formData, key);
      return value ? `${label}: ${value}` : "";
    })
    .filter((line) => line.length > 0);
}

export async function POST(request: Request) {
  const apiLocale = resolveApiLocale(request);
  const msg = apiMessages[apiLocale];

  const rate = checkRateLimit(`contact:${getClientIp(request)}`, 8, 60 * 60 * 1000);
  if (!rate.allowed) {
    return NextResponse.json(
      { ok: false, message: msg.rateLimited },
      {
        status: 429,
        headers: rate.retryAfterSec ? { "Retry-After": String(rate.retryAfterSec) } : undefined
      }
    );
  }

  try {
    const formData = await request.formData();

    if (getString(formData, "website")) {
      return NextResponse.json({ ok: true, message: msg.success });
    }

    const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY?.trim();
    if (Boolean(turnstileSiteKey) !== Boolean(turnstileSecret)) {
      console.error("[CONTACT_FORM_TURNSTILE_CONFIG_ERROR]");
      return NextResponse.json({ ok: false, message: msg.securityConfigError }, { status: 500 });
    }

    if (turnstileSiteKey && turnstileSecret) {
      const verification = await verifyTurnstileToken({
        token: getString(formData, "cf-turnstile-response"),
        secret: turnstileSecret,
        remoteIp: getClientIp(request),
        expectedAction: "contact",
        expectedHostname: new URL(request.url).hostname
      });
      if (!verification.success) {
        console.warn(
          "[CONTACT_FORM_TURNSTILE_REJECTED]",
          verification.errorCodes.join(",") || "unknown"
        );
        return NextResponse.json(
          { ok: false, message: msg.securityCheckFailed },
          { status: 400 }
        );
      }
    }

    const name = getString(formData, "name");
    const email = getString(formData, "email");
    const phone = getString(formData, "phone");
    const inquiryCategoryRaw = getString(formData, "inquiryCategory");
    const inquiryCategory = isInquiryCategoryId(inquiryCategoryRaw)
      ? apiLocale === "en"
        ? INQUIRY_CATEGORY_LABELS_EN[inquiryCategoryRaw]
        : apiLocale === "de"
          ? INQUIRY_CATEGORY_LABELS_DE[inquiryCategoryRaw]
          : INQUIRY_CATEGORY_LABELS[inquiryCategoryRaw]
      : inquiryCategoryRaw || "neuvedeno";
    const selectedServices = [
      ...new Set(
        formData
          .getAll("services")
          .filter((item): item is string => typeof item === "string")
          .map((item) => item.trim())
          .filter(isValidContactService)
      )
    ];
    const detailedService =
      selectedServices.length > 0 ? selectedServices.join(", ") : "neuvedeno";
    const location = getString(formData, "location");
    const message = getString(formData, "message");
    const optionalLines = getOptionalLines(formData);
    const consent = formData.get("consent");

    if (!name || (!email && !phone) || !message || !consent) {
      return NextResponse.json(
        { ok: false, message: msg.requiredFields },
        { status: 400 }
      );
    }

    if (
      name.length > FORM_LIMITS.name ||
      email.length > FORM_LIMITS.email ||
      phone.length > FORM_LIMITS.phone ||
      location.length > FORM_LIMITS.location ||
      getString(formData, "deadline").length > FORM_LIMITS.deadline ||
      message.length > FORM_LIMITS.message
    ) {
      return NextResponse.json({ ok: false, message: msg.fieldTooLong }, { status: 400 });
    }

    const files = formData.getAll("attachments").filter(isUploadedFile);
    const attachmentError = getAttachmentError(files);
    if (attachmentError) {
      return NextResponse.json({ ok: false, message: msg[attachmentError] }, { status: 400 });
    }

    const leadId = randomUUID();
    const emailBody = [
      `Nová poptávka z webu NATURCHEM`,
      `ID poptávky: ${leadId}`,
      ``,
      `Jméno a firma: ${name}`,
      `E-mail: ${email || "neuvedeno"}`,
      `Telefon: ${phone || "neuvedeno"}`,
      `Čeho se poptávka týká: ${inquiryCategory}`,
      `Upřesnění typu služby: ${detailedService}`,
      `Lokalita provozu nebo záměru: ${location || "neuvedeno"}`,
      ...(optionalLines.length > 0 ? ["", "Doplňující informace:", ...optionalLines] : []),
      ``,
      `Popis požadavku:`,
      message
    ].join("\n");

    const attachments = await Promise.all(
      files
        .filter((file) => file.size > 0)
        .map(async (file) => {
          const arrayBuffer = await file.arrayBuffer();
          return {
            filename: file.name,
            content: Buffer.from(arrayBuffer).toString("base64")
          };
        })
    );

    const resendApiKey = process.env.RESEND_API_KEY?.trim();
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const rawRecipients = process.env.CONTACT_TO_EMAILS
      ? process.env.CONTACT_TO_EMAILS.split(/[,;]+/).map((r) => r.trim())
      : [company.email, company.emailSecondary];
    const recipients = rawRecipients.reduce<string[]>((unique, recipient) => {
      if (
        recipient.includes("@") &&
        !unique.some((current) => current.toLowerCase() === recipient.toLowerCase())
      ) {
        unique.push(recipient);
      }
      return unique;
    }, []);

    if (recipients.length === 0) {
      console.error("[CONTACT_FORM_NO_RECIPIENTS]");
      return NextResponse.json(
        { ok: false, message: msg.configError },
        { status: 500 }
      );
    }

    if (!resendApiKey) {
      console.error("[CONTACT_FORM_EMAIL_NOT_CONFIGURED]");
      return NextResponse.json(
        { ok: false, message: msg.configError },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const subjectService =
      detailedService !== "neuvedeno" ? detailedService : inquiryCategory;
    const subjectRaw = `NATURCHEM poptávka [${leadId.slice(0, 8)}]: ${subjectService} - ${name}`;
    const subject =
      subjectRaw.length > MAX_SUBJECT_LEN
        ? `${subjectRaw.slice(0, MAX_SUBJECT_LEN - 1)}…`
        : subjectRaw;

    const attachmentPayload =
      attachments.length > 0
        ? attachments.map((a) => ({
            filename: a.filename,
            content: Buffer.from(a.content, "base64")
          }))
        : undefined;

    // Send each internal copy independently. A suppression or provider failure for
    // one address must not prevent a separately monitored backup from receiving it.
    const deliveryAttempts = await Promise.all(
      recipients.map(async (recipient) => {
        try {
          return await resend.emails.send({
            from: fromEmail,
            to: recipient,
            subject,
            replyTo: email || undefined,
            text: emailBody,
            html: `<pre style="font-family:system-ui,sans-serif;white-space:pre-wrap;">${escapeHtml(
              emailBody
            )}</pre>`,
            attachments: attachmentPayload
          });
        } catch (error) {
          return { data: null, error };
        }
      })
    );
    const providerMessageIds = deliveryAttempts
      .map(({ data }) => data?.id)
      .filter((id): id is string => Boolean(id));

    if (providerMessageIds.length === 0) {
      const error = deliveryAttempts.find((attempt) => attempt.error)?.error;
      const errMsg =
        error && typeof error === "object" && "message" in error
          ? String((error as { message: string }).message)
          : String(error);
      const errName =
        error && typeof error === "object" && "name" in error
          ? String((error as { name: string }).name)
          : "";
      console.error("[CONTACT_FORM_RESEND_ERROR]", errName, errMsg, error);

      return NextResponse.json(
        {
          ok: false,
          message: msg.sendFailure(company.email, company.phones[0])
        },
        { status: 502 }
      );
    }

    if (providerMessageIds.length < recipients.length) {
      console.warn(
        "[CONTACT_FORM_PARTIAL_ACCEPTANCE]",
        JSON.stringify({
          leadId,
          acceptedRecipientCount: providerMessageIds.length,
          recipientCount: recipients.length
        })
      );
    }

    console.info(
      "[CONTACT_FORM_ACCEPTED]",
      JSON.stringify({
        leadId,
        providerMessageIds,
        acceptedRecipientCount: providerMessageIds.length,
        recipientCount: recipients.length
      })
    );

    const confirmationFocus =
      detailedService !== "neuvedeno" ? detailedService : inquiryCategory;
    const confirmationBody = msg.confirmationBody(confirmationFocus, leadId);

    // Do not turn the form into an unprotected autoresponder. Without a verified
    // Turnstile token, automated submissions must not receive mail from the
    // NATURCHEM domain. The internal inquiry path remains unchanged.
    if (email && turnstileSiteKey && turnstileSecret) {
      // The business inquiry has already been accepted. A slow or failed courtesy
      // email must not delay success or make the visitor submit the inquiry twice.
      try {
        after(async () => {
          try {
            const { error: confirmationError } = await resend.emails.send({
              from: fromEmail,
              to: email,
              subject: msg.confirmationSubject,
              text: confirmationBody,
              html: `<pre style="font-family:system-ui,sans-serif;white-space:pre-wrap;">${escapeHtml(confirmationBody)}</pre>`
            });
            if (confirmationError) {
              console.error("[CONTACT_FORM_CONFIRMATION_ERROR]", leadId);
            }
          } catch {
            console.error("[CONTACT_FORM_CONFIRMATION_ERROR]", leadId);
          }
        });
      } catch {
        console.error("[CONTACT_FORM_CONFIRMATION_SCHEDULE_ERROR]", leadId);
      }
    }

    return NextResponse.json({
      ok: true,
      message: msg.success,
      leadId
    });
  } catch (error) {
    console.error("[CONTACT_FORM_ERROR]", error);
    return NextResponse.json(
      {
        ok: false,
        message: msg.sendFailure(company.email, company.phones[0])
      },
      { status: 500 }
    );
  }
}
