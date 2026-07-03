type Props = {
  children: string;
};

export function SalesCountBadge({ children }: Props) {
  return <span className="sales-count-badge">{children}</span>;
}
