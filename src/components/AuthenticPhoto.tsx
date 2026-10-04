import { getAuthenticPhotoBySrc } from "@/lib/authentic-photos";

/** Static responsive variants: no client JavaScript or Vercel image transforms. */
export function AuthenticPhoto({ src, position, priority = false }: {
  src: string; position: string; priority?: boolean;
}) {
  const photo = getAuthenticPhotoBySrc(src);
  if (!photo) throw new Error("Unknown authentic photo: " + src);
  const sizes = "(max-width: 767px) 100vw, (min-width: 1280px) 600px, 48vw";
  return <picture>
    <source type="image/avif" srcSet={`${photo.mobileAvifSrc} 640w, ${photo.avifSrc} ${photo.width}w`} sizes={sizes} />
    {/* Both sizes and formats are exported in advance. */}
    <img src={photo.mobileSrc} srcSet={`${photo.mobileSrc} 640w, ${photo.src} ${photo.width}w`} sizes={sizes}
      width={photo.width} height={photo.height} alt=""
      className="hero-photo-img" loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "low"} decoding="async"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: position }}
    />
  </picture>;
}
