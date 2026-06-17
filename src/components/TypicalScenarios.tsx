import { SemanticCard } from "@/components/SemanticCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getMessages } from "@/lib/i18n/get-messages";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";
import type { typicalScenarios as typicalScenariosCs } from "@/lib/typical-scenarios";

type Scenario = (typeof typicalScenariosCs)[number];

type Props = {
  scenarios: readonly Scenario[];
  locale: Locale;
};

export async function TypicalScenarios({ scenarios, locale }: Props) {
  const messages = await getMessages(locale);
  const link = (href: string) => localizeHref(href, locale);

  return (
    <div className="grid grid-2 typical-scenario-grid">
      {scenarios.map((scenario) => (
        <SemanticCard
          key={scenario.title}
          href={link(scenario.learnMoreHref)}
          className="typical-scenario-card"
          cta={messages.common.viewSolution}
          aria-label={messages.caseStudies.moreAboutService.replace("{title}", scenario.title)}
        >
          <div className="typical-scenario-card-head">
            <ServiceIcon href={scenario.learnMoreHref} />
            <h3>{scenario.title}</h3>
          </div>
          <p className="muted">{scenario.narrative}</p>
        </SemanticCard>
      ))}
    </div>
  );
}
