type NavItem = {
  id: string;
  label: string;
};

type Props = {
  items: readonly NavItem[];
  ariaLabel: string;
};

export function SalesCatalogNav({ items, ariaLabel }: Props) {
  if (items.length < 2) return null;

  return (
    <nav className="sales-catalog-nav" aria-label={ariaLabel}>
      <ul className="sales-catalog-nav-list">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#sales-cat-${item.id}`} className="sales-catalog-nav-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
