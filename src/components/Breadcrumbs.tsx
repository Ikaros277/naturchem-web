import Link from "next/link";

type Crumb = { name: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Drobečková navigace">
      {items.map((item, i) => (
        <span key={item.name}>
          {item.href ? <Link href={item.href}>{item.name}</Link> : item.name}
          {i < items.length - 1 ? " / " : ""}
        </span>
      ))}
    </nav>
  );
}
