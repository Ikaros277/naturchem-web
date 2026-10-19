"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { ClientMessages, ClientMessageScope } from "@/lib/i18n/client-messages";
import type { Locale } from "@/lib/i18n/locales";

type LocaleContextValue = {
  locale: Locale;
  messages: ClientMessageScope;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  messages,
  children
}: LocaleContextValue & { children: ReactNode }) {
  return <LocaleContext.Provider value={{ locale, messages }}>{children}</LocaleContext.Provider>;
}

/** Add only the namespaces needed by this subtree, retaining global UI text. */
export function ScopedMessagesProvider({ messages, children }: { messages: ClientMessageScope; children: ReactNode }) {
  const parent = useContext(LocaleContext);
  if (!parent) throw new Error("ScopedMessagesProvider must be used within LocaleProvider");
  return (
    <LocaleContext.Provider value={{ locale: parent.locale, messages: { ...parent.messages, ...messages } }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): Locale {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used within LocaleProvider");
  return value.locale;
}

export function useMessages(): ClientMessageScope {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useMessages must be used within LocaleProvider");
  return value.messages;
}

export function useTranslations<N extends keyof ClientMessages>(namespace: N): ClientMessages[N] {
  const messages = useMessages();
  const translated = messages[namespace];
  if (translated === undefined) throw new Error(`Missing client message scope: ${namespace}`);
  return translated;
}
