"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { ClientMessages } from "@/lib/i18n/client-messages";
import type { Locale } from "@/lib/i18n/locales";

type LocaleContextValue = {
  locale: Locale;
  messages: ClientMessages;
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

export function useMessages(): ClientMessages {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useMessages must be used within LocaleProvider");
  return value.messages;
}

export function useTranslations<N extends keyof ClientMessages>(namespace: N): ClientMessages[N] {
  const messages = useMessages();
  return messages[namespace];
}
