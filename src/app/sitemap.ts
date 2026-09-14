import type { MetadataRoute } from "next";
import { PARTS } from "@/data/parts";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, priority: 1.0 },
    { url: `${siteConfig.url}/used-auto-parts`, priority: 0.9 },
    { url: `${siteConfig.url}/aboutus`, priority: 0.7 },
    { url: `${siteConfig.url}/contact`, priority: 0.7 },
  ];

  const partRoutes: MetadataRoute.Sitemap = PARTS.map((part) => ({
    url: `${siteConfig.url}/used-auto-parts/${part.slug}`,
    priority: 0.8,
  }));

  return [...staticRoutes, ...partRoutes];
}
