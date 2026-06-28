import { NextResponse } from "next/server";
import { Buffer } from "node:buffer";
import { Resend } from "resend";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { INQUIRY_CATEGORY_LABELS, isInquiryCategoryId } from "@/lib/contact-inquiry";
import { INQUIRY_CATEGORY_LABELS as INQUIRY_CATEGORY_LABELS_EN } from "@/lib/contact-inquiry-en";
import { INQUIRY_CATEGORY_LABELS as INQUIRY_CATEGORY_LABELS_DE } from "@/lib/contact-inquiry-de";
import type { Locale } from "@/lib/i18n/locales";
import { company } from "@/lib/site";

const MAX_FILE_SIZE = 7 * 1024 * 1024;
const MAX_SUBJECT_LEN = 200;

const apiMessages = {
  cs: {
    requiredFields: "Vyplňte prosím povinná pole (jméno, kontakt, popis a souhlas).",
    fileTooLarge: (name: string) => `Soubor ${name} je větší než 7 MB.`,
    configError: "Chyba konfigurace příjemců. Kontaktujte nás prosím e-mailem.",
    fallbackAccepted:
      "Poptávka je přijata. E-mailová služba zatím není aktivní, ale data byla zaznamenána v systému.",
    sendFailure: (email: string, phone: string) =>
      `Zprávu se nepodařilo odeslat. Napište na ${email} nebo zavolejte ${phone}.`,
    success:
      "Ozveme se Vám s dalším postupem. Když bude potřeba něco doplnit, dáme vědět e-mailem nebo telefonicky.",
    rateLimited: "Příliš mnoho odeslaných zpráv. Zkuste to prosím později nebo nás kontaktujte telefonicky."
  },
  en: {
    requiredFields: "Please fill in the required fields (name, contact, description and consent).",
    fileTooLarge: (name: string) => `File ${name} is larger than 7 MB.`,
    configError: "Recipient configuration error. Please contact us by email.",
    fallbackAccepted:
      "Your inquiry has been received. Email delivery is not active yet, but the data was recorded in the system.",
    sendFailure: (email: string, phone: string) =>
      `We could not send the message. Email ${email} or call ${phone}.`,
    success:
      "We will get back to you with next steps. If we need anything else, we will let you know by email or phone.",
    rateLimited: "Too many messages sent. Please try again later or call us."
  },
  de: {
    requiredFields: "Bitte füllen Sie die Pflichtfelder aus (Name, Kontakt, Beschreibung und Einwilligung).",
    fileTooLarge: (name: string) => `Die Datei ${name} ist größer als 7 MB.`,
    configError: "Fehler bei der Empfängerkonfiguration. Bitte kontaktieren Sie uns per E-Mail.",
    fallbackAccepted:
      "Ihre Anfrage wurde empfangen. Der E-Mail-Versand ist noch nicht aktiv, die Daten wurden jedoch im System gespeichert.",
    sendFailure: (email: string, phone: string) =>
      `Die Nachricht konnte nicht gesendet werden. E-Mail ${email} oder Anruf ${phone}.`,
    success:
      "Wir melden uns mit den nächsten Schritten. Falls wir etwas ergänzen müssen, informieren wir Sie per E-Mail oder Telefon.",
    rateLimited: "Zu viele Nachrichten. Bitte versuchen Sie es später erneut oder rufen Sie uns an."
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
    const selectedServices = formData
      .getAll("services")
      .filter((item): item is string => typeof item === "string" && item.trim().length > 0);
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

    const files = formData.getAll("attachments").filter((f): f is File => f instanceof File);
    const oversized = files.find((f) => f.size > MAX_FILE_SIZE);
    if (oversized) {
      return NextResponse.json(
        { ok: false, message: msg.fileTooLarge(oversized.name) },
        { status: 400 }
      );
    }

    const emailBody = [
      `Nová poptávka z webu NATURCHEM`,
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
    const recipients = rawRecipients.filter((r) => r.includes("@"));

    if (recipients.length === 0) {
      console.error("[CONTACT_FORM_NO_RECIPIENTS]");
      return NextResponse.json(
        { ok: false, message: msg.configError },
        { status: 500 }
      );
    }

    if (!resendApiKey) {
      console.log("[CONTACT_FORM_FALLBACK]", emailBody, attachments.map((a) => a.filename));
      return NextResponse.json({
        ok: true,
        message: msg.fallbackAccepted
      });
    }

    const resend = new Resend(resendApiKey);

    const subjectService =
      detailedService !== "neuvedeno" ? detailedService : inquiryCategory;
    const subjectRaw = `NATURCHEM poptávka: ${subjectService} - ${name}`;
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

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: recipients,
      subject,
      replyTo: email || undefined,
      text: emailBody,
      html: `<pre style="font-family:system-ui,sans-serif;white-space:pre-wrap;">${escapeHtml(
        emailBody
      )}</pre>`,
      attachments: attachmentPayload
    });

    if (error) {
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

    const confirmationFocus =
      detailedService !== "neuvedeno" ? detailedService : inquiryCategory;
    const confirmationBody = [
      `Dobrý den,`,
      ``,
      `děkujeme za zprávu z webu NATURCHEM.`,
      `Týká se oblasti: ${confirmationFocus}.`,
      ``,
      `Ozveme se Vám s dalším postupem.`,
      `Když bude potřeba něco doplnit, dáme vědět e-mailem nebo telefonicky.`,
      ``,
      `NATURCHEM, s.r.o.`
    ].join("\n");

    if (email) {
      const { error: confirmationError } = await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "Potvrzení Vaší zprávy — NATURCHEM",
        text: confirmationBody,
        html: `<pre style="font-family:system-ui,sans-serif;white-space:pre-wrap;">${escapeHtml(
          confirmationBody
        )}</pre>`
      });

      if (confirmationError) {
        console.error("[CONTACT_FORM_CONFIRMATION_ERROR]", confirmationError);
      }
    }

    return NextResponse.json({
      ok: true,
      message: msg.success
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
