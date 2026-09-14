import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PARTS, getPartBySlug } from "@/data/parts";
import ProductPageClient from "./ProductPageClient";

export function generateStaticParams() {
  return PARTS.map((part) => ({ slug: part.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const part = getPartBySlug(slug);
  if (!part) return {};

  return {
    title: part.name,
    description: part.metaDescription,
    alternates: { canonical: `/used-auto-parts/${part.slug}` },
    openGraph: {
      title: part.name,
      description: part.metaDescription,
      images: [{ url: part.image }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const part = getPartBySlug(slug);

  if (!part) {
    notFound();
  }

  return <ProductPageClient part={part} />;
}
