import { contactFormHref } from "@/lib/contact-url";
import { getMessages } from "@/lib/i18n/get-messages";
import { LocaleLink } from "@/lib/i18n/locale-link";
import type { Locale } from "@/lib/i18n/locales";

type Props = {
  locale: Locale;
};

export async function HomeUnsureStrip({ locale }: Props) {
  const messages = await getMessages(locale);

  return (
    <section className="home-unsure-strip home-fade-in-section home-fade-in-section-delay-2 home-below-fold" aria-label={messages.home.unsureAria}>
      <div className="container home-unsure-strip-inner">
        <LocaleLink href={contactFormHref} className="home-unsure-strip-link" scroll={false}>
          {messages.header.megaUnsure}
          <span aria-hidden="true"> →</span>
        </LocaleLink>
      </div>
    </section>
  );
}
