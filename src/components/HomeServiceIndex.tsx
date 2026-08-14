import { ServiceIcon } from "@/components/ServiceIcon";
import type { HomeOfferPillar } from "@/components/HomeOfferCard";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { getServiceCategoryFromIconKey } from "@/lib/service-categories";

type Props = {
  pillars: readonly HomeOfferPillar[];
};

/** Kompaktní rozcestník služeb bez další sady velkých karet. */
export function HomeServiceIndex({ pillars }: Props) {
  return (
    <div className="home-service-index">
      {pillars.map((pillar) => {
        const category = getServiceCategoryFromIconKey(pillar.icon);
        const teaser = pillar.teaser.replace(/…$/, ".");

        return (
          <article
            key={pillar.title}
            className="home-service-row"
            data-category={category ?? undefined}
          >
            <div className="home-service-row-heading">
              <ServiceIcon icon={pillar.icon} variant="inline" />
              <div>
                <h3>{pillar.title}</h3>
                <p>{teaser}</p>
              </div>
            </div>

            <ul className="home-service-row-links">
              {pillar.links.map((item) => (
                <li key={item.href}>
                  <LocaleLink href={item.href}>{item.label}</LocaleLink>
                </li>
              ))}
            </ul>

            <LocaleLink href={pillar.href} className="home-service-row-cta">
              {pillar.cta} <span aria-hidden="true">→</span>
            </LocaleLink>
          </article>
        );
      })}
    </div>
  );
}
