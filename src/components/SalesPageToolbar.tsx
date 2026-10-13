type Props = {
  href: string;
  label: string;
};

export function SalesPageToolbar({ href, label }: Props) {
  return (
    <div className="sales-page-toolbar">
      <a href={href} className="sales-back-link">
        <span className="sales-back-link-icon" aria-hidden="true">
          ←
        </span>
        {label}
      </a>
    </div>
  );
}
