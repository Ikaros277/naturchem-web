import Link from "next/link";

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
          {item.href ? <Link href={item.href}>{item.name}</Link> : item.name}
          {i < items.length - 1 ? " / " : ""}
        </span>
      ))}
    </nav>
  );
}
