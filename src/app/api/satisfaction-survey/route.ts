import { NextResponse } from "next/server";
import { Resend } from "resend";
import { INQUIRY_CATEGORY_LABELS, isInquiryCategoryId } from "@/lib/contact-inquiry";
import { INQUIRY_CATEGORY_LABELS as INQUIRY_CATEGORY_LABELS_EN } from "@/lib/contact-inquiry-en";
import { INQUIRY_CATEGORY_LABELS as INQUIRY_CATEGORY_LABELS_DE } from "@/lib/contact-inquiry-de";
import type { Locale } from "@/lib/i18n/locales";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { FORM_LIMITS } from "@/lib/form-validation-limits";
import { company } from "@/lib/site";

const MAX_SUBJECT_LEN = 200;
const RATING_KEYS = [
  "overallRating",
  "communicationRating",
  "qualityRating",
  "timelinessRating"
] as const;

const apiMessages = {
  cs: {
    requiredFields: "Vyplňte prosím celkové hodnocení a souhlas se zpracováním údajů.",
    invalidRating: "Hodnocení musí být číslo od 1 do 5.",
    invalidNps: "Doporučení musí být číslo od 0 do 10.",
    configError: "Chyba konfigurace příjemců. Kontaktujte nás prosím e-mailem.",
    fallbackAccepted:
      "Dotazník je přijat. E-mailová služba zatím není aktivní, ale data byla zaznamenána v systému.",
    sendFailure: (email: string, phone: string) =>
      `Dotazník se nepodařilo odeslat. Napište na ${email} nebo zavolejte ${phone}.`,
    success: "Děkujeme za zpětnou vazbu. Pomůže nám zlepšovat spolupráci s Vámi i dalšími zákazníky.",
    rateLimited: "Příliš mnoho odeslaných zpráv. Zkuste to prosím později.",
    fieldTooLong: "Jedno z polí je příliš dlouhé. Zkuste text zkrátit."
  },
  en: {
    requiredFields: "Please provide the overall rating and consent to data processing.",
    invalidRating: "Ratings must be a number from 1 to 5.",
    invalidNps: "Recommendation score must be a number from 0 to 10.",
    configError: "Recipient configuration error. Please contact us by email.",
    fallbackAccepted:
      "Your survey has been received. Email delivery is not active yet, but the data was recorded in the system.",
    sendFailure: (email: string, phone: string) =>
      `We could not send the survey. Email ${email} or call ${phone}.`,
    success: "Thank you for your feedback. It helps us improve cooperation with you and other clients.",
    rateLimited: "Too many messages sent. Please try again later.",
    fieldTooLong: "One of the fields is too long. Please shorten the text."
  },
  de: {
    requiredFields: "Bitte geben Sie die Gesamtbewertung und die Einwilligung zur Datenverarbeitung an.",
    invalidRating: "Bewertungen müssen eine Zahl von 1 bis 5 sein.",
    invalidNps: "Empfehlungswert muss eine Zahl von 0 bis 10 sein.",
    configError: "Fehler bei der Empfängerkonfiguration. Bitte kontaktieren Sie uns per E-Mail.",
    fallbackAccepted:
      "Ihr Fragebogen wurde empfangen. Der E-Mail-Versand ist noch nicht aktiv, die Daten wurden jedoch im System gespeichert.",
    sendFailure: (email: string, phone: string) =>
      `Der Fragebogen konnte nicht gesendet werden. E-Mail ${email} oder Anruf ${phone}.`,
    success:
      "Vielen Dank für Ihr Feedback. Es hilft uns, die Zusammenarbeit mit Ihnen und anderen Kunden zu verbessern.",
    rateLimited: "Zu viele Nachrichten. Bitte versuchen Sie es später erneut.",
    fieldTooLong: "Ein Feld ist zu lang. Bitte kürzen Sie den Text."
  }
} as const;

const ratingLabelsCs: Record<string, string> = {
  overallRating: "Celková spokojenost",
  communicationRating: "Komunikace",
  qualityRating: "Odborná kvalita a podklady",
  timelinessRating: "Dodržení termínů"
};

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

function parseRating(value: string): string | null {
  if (!value) return null;
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 1 || parsed > 5) {
    return "invalid";
  }
  return String(parsed);
}

function parseNps(value: string): string | null {
  if (!value) return null;
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 0 || parsed > 10) {
    return "invalid";
  }
  return String(parsed);
}

function resolveCategoryLabel(raw: string, locale: Locale): string {
  if (!raw || !isInquiryCategoryId(raw)) return "neuvedeno";
  if (locale === "en") return INQUIRY_CATEGORY_LABELS_EN[raw];
  if (locale === "de") return INQUIRY_CATEGORY_LABELS_DE[raw];
  return INQUIRY_CATEGORY_LABELS[raw];
}

export async function POST(request: Request) {
  const apiLocale = resolveApiLocale(request);
  const msg = apiMessages[apiLocale];

  const rate = checkRateLimit(`satisfaction:${getClientIp(request)}`, 6, 60 * 60 * 1000);
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

    const overallRating = parseRating(getString(formData, "overallRating"));
    if (overallRating === "invalid" || !overallRating) {
      return NextResponse.json(
        { ok: false, message: overallRating === "invalid" ? msg.invalidRating : msg.requiredFields },
        { status: 400 }
      );
    }

    const consent = formData.get("consent");
    if (!consent) {
      return NextResponse.json({ ok: false, message: msg.requiredFields }, { status: 400 });
    }

    const ratings: Record<string, string> = { overallRating };
    for (const key of RATING_KEYS) {
      if (key === "overallRating") continue;
      const parsed = parseRating(getString(formData, key));
      if (parsed === "invalid") {
        return NextResponse.json({ ok: false, message: msg.invalidRating }, { status: 400 });
      }
      if (parsed) ratings[key] = parsed;
    }

    const npsRaw = getString(formData, "nps");
    const nps = parseNps(npsRaw);
    if (nps === "invalid") {
      return NextResponse.json({ ok: false, message: msg.invalidNps }, { status: 400 });
    }

    const companyOrName = getString(formData, "companyOrName");
    const email = getString(formData, "email");
    const cooperationCategory = resolveCategoryLabel(
      getString(formData, "cooperationCategory"),
      apiLocale
    );
    const positives = getString(formData, "positives");
    const improvements = getString(formData, "improvements");

    if (
      companyOrName.length > FORM_LIMITS.name ||
      email.length > FORM_LIMITS.email ||
      positives.length > FORM_LIMITS.surveyText ||
      improvements.length > FORM_LIMITS.surveyText
    ) {
      return NextResponse.json({ ok: false, message: msg.fieldTooLong }, { status: 400 });
    }

    const ratingLines = RATING_KEYS.map((key) => {
      const label = ratingLabelsCs[key];
      const value = ratings[key];
      return value ? `${label}: ${value}/5` : `${label}: neuvedeno`;
    });

    const emailBody = [
      "Dotazník spokojenosti z webu NATURCHEM",
      "",
      `Firma nebo jméno: ${companyOrName || "neuvedeno"}`,
      `E-mail: ${email || "neuvedeno"}`,
      `Oblast spolupráce: ${cooperationCategory}`,
      "",
      "Hodnocení:",
      ...ratingLines,
      `Doporučení (NPS 0–10): ${nps ?? "neuvedeno"}`,
      "",
      "Co fungovalo dobře:",
      positives || "neuvedeno",
      "",
      "Co zlepšit:",
      improvements || "neuvedeno"
    ].join("\n");

    const resendApiKey = process.env.RESEND_API_KEY?.trim();
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const rawRecipients = process.env.SATISFACTION_TO_EMAILS
      ? process.env.SATISFACTION_TO_EMAILS.split(/[,;]+/).map((r) => r.trim())
      : process.env.CONTACT_TO_EMAILS
        ? process.env.CONTACT_TO_EMAILS.split(/[,;]+/).map((r) => r.trim())
        : [company.email, company.emailSecondary];
    const recipients = rawRecipients.filter((r) => r.includes("@"));

    if (recipients.length === 0) {
      console.error("[SATISFACTION_SURVEY_NO_RECIPIENTS]");
      return NextResponse.json({ ok: false, message: msg.configError }, { status: 500 });
    }

    if (!resendApiKey) {
      console.log("[SATISFACTION_SURVEY_FALLBACK]", { overallRating, hasEmail: Boolean(email) });
      return NextResponse.json({ ok: true, message: msg.fallbackAccepted });
    }

    const resend = new Resend(resendApiKey);
    const subjectRaw = `NATURCHEM dotazník spokojenosti: ${overallRating}/5${
      companyOrName ? ` — ${companyOrName}` : ""
    }`;
    const subject =
      subjectRaw.length > MAX_SUBJECT_LEN
        ? `${subjectRaw.slice(0, MAX_SUBJECT_LEN - 1)}…`
        : subjectRaw;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: recipients,
      subject,
      replyTo: email || undefined,
      text: emailBody,
      html: `<pre style="font-family:system-ui,sans-serif;white-space:pre-wrap;">${escapeHtml(
        emailBody
      )}</pre>`
    });

    if (error) {
      console.error("[SATISFACTION_SURVEY_RESEND_ERROR]", error);
      return NextResponse.json(
        { ok: false, message: msg.sendFailure(company.email, company.phones[0]) },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, message: msg.success });
  } catch (error) {
    console.error("[SATISFACTION_SURVEY_ERROR]", error);
    return NextResponse.json(
      { ok: false, message: msg.sendFailure(company.email, company.phones[0]) },
      { status: 500 }
    );
  }
}
