import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { getSeoLanding, seoLandings } from "@/lib/seo-landings";
import { siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return seoLandings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const landing = getSeoLanding(slug);
  if (!landing) return { title: "Služba" };

  return {
    title: landing.title,
    description: landing.metaDescription,
    alternates: { canonical: `${siteUrl}/${landing.slug}/` }
  };
}

export default async function SeoLandingRoute({ params }: Props) {
  const { slug } = await params;
  const landing = getSeoLanding(slug);
  if (!landing) notFound();

  return <SeoLandingPage landing={landing} />;
}
