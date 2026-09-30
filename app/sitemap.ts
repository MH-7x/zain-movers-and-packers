import type { MetadataRoute } from "next";

import { APP } from "@/lib/App";
import { SERVICES } from "@/data/services-nav";
import { LOCATIONS } from "@/data/locations-nav";
import { DUBAI_AREAS } from "@/data/dubai-areas-nav";

const siteUrl = APP.url?.replace(/\/$/, "") ?? "";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Service pages carry the commercial intent, so they rank just under home.
    ...SERVICES.map((service) => ({
      url: `${siteUrl}${service.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...LOCATIONS.map((location) => ({
      url: `${siteUrl}${location.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...DUBAI_AREAS.map((area) => ({
      url: `${siteUrl}${area.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteUrl}/about`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms-and-conditions`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return entries;
}
