import { customerNeeds, customerNeedsTitle } from "@/lib/customer-needs";

type Props = {
  asSection?: boolean;
};

export function CustomerNeeds({ asSection = true }: Props) {
  const content = (
    <>
      <h2>{customerNeedsTitle}</h2>
      <ul className="customer-needs-list">
        {customerNeeds.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );

  if (asSection) {
    return <section className="section content-block">{content}</section>;
  }

  return <div className="content-block">{content}</div>;
}
