import { LocaleLink } from "@/lib/i18n/locale-link";
import type { Locale } from "@/lib/i18n/locales";
import { ServiceIcon } from "@/components/ServiceIcon";

const paths = [
  {
    href: "/mereni-pro-kolaudaci",
    icon: "povoleni",
    title: "Potřebuji měření pro kolaudaci",
    text: "Hluk, osvětlení, mikroklima a pracovní prostředí podle projektu nebo požadavku úřadu.",
    cta: "Zjistit potřebný rozsah"
  },
  {
    href: "/mereni-pracovniho-prostredi-kategorizace-praci",
    icon: "pracovni-prostredi",
    title: "Potřebujeme kategorizaci prací",
    text: "Prach, chemické látky, hluk, osvětlení, mikroklima a vibrace jako podklad pro KHS a BOZP.",
    cta: "Připravit podklady pro kategorizaci"
  },
  {
    href: "/pro-stavebni-firmy",
    icon: "investor",
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
        <ul className="home-demand-paths-list">
          {paths.map((item) => (
            <li key={item.href}>
              <LocaleLink href={item.href} className="home-demand-path-item">
                <ServiceIcon
                  icon={item.icon}
                  size={24}
                  variant="plain"
                  className="home-demand-path-icon"
                />
                <span className="home-demand-path-copy">
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                  <span className="home-demand-path-cta">
                    {item.cta} <span aria-hidden="true">→</span>
                  </span>
                </span>
              </LocaleLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
