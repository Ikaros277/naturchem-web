export const FORM_LIMITS = {
  name: 200,
  email: 254,
  phone: 40,
  message: 10_000,
  surveyText: 4_000,
  maxAttachments: 5
} as const;

export const ALLOWED_ATTACHMENT_MIME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/zip",
  "image/jpeg",
  "image/png"
]);

export const ALLOWED_ATTACHMENT_EXT = /\.(pdf|docx?|xlsx?|jpe?g|png|zip)$/i;
