type Crumb = { name: string; href?: string };

export function Breadcrumbs({
  items,
  breadcrumbsAria
}: {
  items: Crumb[];
  breadcrumbsAria: string;
}) {
  return (
    <nav className="breadcrumbs" aria-label={breadcrumbsAria}>
      {items.map((item, i) => (
        <span key={item.name}>
          {item.href ? <a href={item.href}>{item.name}</a> : item.name}
          {i < items.length - 1 ? " / " : ""}
        </span>
      ))}
    </nav>
  );
}
