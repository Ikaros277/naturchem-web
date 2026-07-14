"use client";

import { useLayoutEffect } from "react";

type Props = {
  locale: string;
};

/** Ensures <html lang> matches the active locale during client navigation and SSG. */
export function HtmlLang({ locale }: Props) {
  useLayoutEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
