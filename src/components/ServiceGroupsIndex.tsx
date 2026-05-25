"use client";

import { useEffect, useState } from "react";
import { IndexCard } from "@/components/IndexCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import { serviceGroups } from "@/lib/service-groups";

const groupTags: Record<string, string[]> = {
  "mericke-sluzby": ["KHS", "ČIŽP", "KÚ"],
  "studie-vypocty": ["EIA", "KHS", "KÚ"],
  "povolovaci-podklady": ["KÚ", "ČIŽP", "IPPC"],
  "eia-investice": ["EIA", "Investor", "Projektant"],
  "evidence-reporting": ["ISPOP", "GHG", "Reporting"],
  "skoleni-podpora": ["Chemie", "BOZP", "Praxe"]
};

function useMobileServicesLayout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 720px)");
    setIsMobile(mq.matches);
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}

function ServiceCards({ groupId, items }: { groupId: string; items: (typeof serviceGroups)[number]["items"] }) {
  return (
    <div className="service-card-grid">
      {items.map((item) => (
        <IndexCard
          key={item.title}
          href={item.href}
          title={item.title}
          className="service-index-card service-card"
          cta="Zobrazit službu"
        >
          <ServiceIcon href={item.href} />
          <p className="muted">{item.text}</p>
          <ul className="tag-row" aria-label="Související oblasti">
            {(groupTags[groupId] ?? []).slice(0, 4).map((tag) => (
              <li key={tag}>
                <span className="tag">{tag}</span>
              </li>
            ))}
          </ul>
        </IndexCard>
      ))}
    </div>
  );
}

export function ServiceGroupsIndex() {
  const isMobile = useMobileServicesLayout();

  if (isMobile) {
    return (
      <section className="section service-group service-group-mobile">
        <div className="container service-mobile-accordion">
          {serviceGroups.map((group, index) => (
            <details key={group.id} id={group.id} className="card service-group-details" open={index === 0}>
              <summary>
                <h2>{group.title}</h2>
                <p className="muted">{group.intro}</p>
              </summary>
              <ServiceCards groupId={group.id} items={group.items} />
            </details>
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      {serviceGroups.map((group) => (
        <section key={group.id} id={group.id} className="section service-group">
          <div className="container">
            <h2>{group.title}</h2>
            <p className="muted service-group-intro">{group.intro}</p>
            <ServiceCards groupId={group.id} items={group.items} />
          </div>
        </section>
      ))}
    </>
  );
}
