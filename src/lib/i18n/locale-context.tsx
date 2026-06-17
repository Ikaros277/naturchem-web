"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Messages } from "@/lib/i18n/get-messages";
import type { Locale } from "@/lib/i18n/locales";

type LocaleContextValue = {
  locale: Locale;
  messages: Messages;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  messages,
  children
}: LocaleContextValue & { children: ReactNode }) {
  return <LocaleContext.Provider value={{ locale, messages }}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used within LocaleProvider");
  return value.locale;
}

export function useMessages(): Messages {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useMessages must be used within LocaleProvider");
  return value.messages;
}

export function useTranslations<N extends keyof Messages>(namespace: N): Messages[N] {
  const messages = useMessages();
  return messages[namespace];
}
