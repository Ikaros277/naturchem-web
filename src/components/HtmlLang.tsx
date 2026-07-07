"use client";

import { useEffect } from "react";

type Props = {
  locale: string;
};

/** Ensures <html lang> matches the active locale during client navigation and SSG. */
export function HtmlLang({ locale }: Props) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
