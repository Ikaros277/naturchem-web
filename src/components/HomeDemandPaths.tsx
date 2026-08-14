import { LocaleLink } from "@/lib/i18n/locale-link";
import type { Locale } from "@/lib/i18n/locales";

const paths = [
  {
    href: "/mereni-pro-kolaudaci",
    title: "Potřebuji měření pro kolaudaci",
    text: "Hluk, osvětlení, mikroklima a pracovní prostředí podle projektu nebo požadavku úřadu.",
    cta: "Zjistit potřebný rozsah"
  },
  {
    href: "/mereni-pracovniho-prostredi-kategorizace-praci",
    title: "Potřebujeme kategorizaci prací",
    text: "Prach, chemické látky, hluk, osvětlení, mikroklima a vibrace jako podklad pro KHS a BOZP.",
    cta: "Připravit podklady pro kategorizaci"
  },
  {
    href: "/pro-stavebni-firmy",
    title: "Potřebuji dokumentaci k projektu",
    text: "Rozptylové a hlukové studie, odborné posudky, EIA a další podklady pro povolení záměru.",
    cta: "Zjistit potřebné podklady"
  }
] as const;

export function HomeDemandPaths({ locale }: { locale: Locale }) {
  if (locale !== "cs") return null;

  return (
    <section
      className="home-section home-demand-paths home-below-fold"
      aria-labelledby="home-demand-paths-heading"
    >
      <div className="container">
        <header className="section-header home-demand-paths-header">
          <p className="eyebrow">Začněte podle situace</p>
          <h2 id="home-demand-paths-heading">Co právě potřebujete vyřešit?</h2>
          <p className="section-lead">
            Nemusíte znát název služby. Vyberte situaci a zjistíte, jaké podklady a měření
            mohou být potřeba.
          </p>
        </header>
        <div className="home-demand-paths-grid">
          {paths.map((item) => (
            <article key={item.href} className="card home-demand-path-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <LocaleLink href={item.href} className="home-demand-path-link">
                {item.cta} <span aria-hidden="true">→</span>
              </LocaleLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
