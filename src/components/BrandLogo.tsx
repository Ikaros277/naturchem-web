import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className = "", priority = false }: BrandLogoProps) {
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
