import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  /** Wordmark pro tmavé pozadí — SVG značka + text, bez PNG filtru. */
  variant?: "default" | "onDark";
};

function BrandMarkIcon() {
  return (
    <svg
      className="brand-mark-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      aria-hidden
    >
      <g fill="none" stroke="currentColor" strokeWidth="2.15" strokeLinejoin="round" strokeLinecap="round">
        <path d="M15.2 5.5h11.2l5.4 14.5-5.4 14.5H15.2L9.8 20z" />
        <path d="M11.2 5.5v29" />
        <path d="M13.4 5.5v29" />
      </g>
    </svg>
  );
}

export function BrandLogo({
  className = "",
  priority = false,
  variant = "default"
}: BrandLogoProps) {
  if (variant === "onDark") {
    return (
      <span className={`brand-logo brand-logo--wordmark-on-dark ${className}`.trim()} aria-hidden>
        <BrandMarkIcon />
        <span className="brand-wordmark-text">NATURCHEM</span>
      </span>
    );
  }

  return (
    <Image
      src="/graphics/naturchem-logo.png"
      alt=""
      width={248}
      height={52}
      className={`brand-logo ${className}`.trim()}
      priority={priority}
      sizes="(max-width: 767px) 240px, 248px"
    />
  );
}
