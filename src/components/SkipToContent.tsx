import Link from "next/link";
import { getMessages } from "@/lib/i18n/get-messages";
import type { Locale } from "@/lib/i18n/locales";

type Props = {
  locale: Locale;
};

export async function SkipToContent({ locale }: Props) {
  const messages = await getMessages(locale);

  return (
    <Link href="#page-content" className="skip-to-content">
      {messages.common.skipToContent}
    </Link>
  );
}
