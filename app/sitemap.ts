import type { MetadataRoute } from "next";

import { APP } from "@/lib/App";
import { getLastModified } from "@/lib/GetLastModified";
import { SERVICES } from "@/data/services-nav";
import { LOCATIONS } from "@/data/locations-nav";
import { DUBAI_AREAS } from "@/data/dubai-areas-nav";
import { PAGE_IMAGES } from "@/data/page-images";

const siteUrl = APP.url?.replace(/\/$/, "") ?? "";

/** Resolves a route's sitemap image to an absolute URL. */
const imagesFor = (href: string) => [`${siteUrl}${PAGE_IMAGES[href]}`];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: getLastModified(["app/page.tsx", "components/home"]),
      changeFrequency: "weekly",
      priority: 1,
      images: imagesFor("/"),
    },
    // Service pages carry the commercial intent, so they rank just under home.
    ...SERVICES.map((service) => ({
      url: `${siteUrl}${service.href}`,
      lastModified: getLastModified([
        `app${service.href}/page.tsx`,
        "components/service",
      ]),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: imagesFor(service.href),
    })),
    ...LOCATIONS.map((location) => ({
      url: `${siteUrl}${location.href}`,
      lastModified: getLastModified([
        `app${location.href}/page.tsx`,
        "components/location",
      ]),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: imagesFor(location.href),
    })),
    ...DUBAI_AREAS.map((area) => ({
      url: `${siteUrl}${area.href}`,
      lastModified: getLastModified([
        `app${area.href}/page.tsx`,
        "components/dubai-area",
      ]),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: imagesFor(area.href),
    })),
    {
      url: `${siteUrl}/about`,
      lastModified: getLastModified(["app/about/page.tsx", "components/about"]),
      changeFrequency: "yearly",
      priority: 0.7,
      images: imagesFor("/about"),
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: getLastModified([
        "app/contact/page.tsx",
        "components/contact",
      ]),
      changeFrequency: "yearly",
      priority: 0.8,
      images: imagesFor("/contact"),
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: getLastModified([
        "app/privacy-policy/page.tsx",
        "components/shared/LegalPage.tsx",
      ]),
      changeFrequency: "yearly",
      priority: 0.6,
      images: imagesFor("/privacy-policy"),
    },
    {
      url: `${siteUrl}/terms-and-conditions`,
      lastModified: getLastModified([
        "app/terms-and-conditions/page.tsx",
        "components/shared/LegalPage.tsx",
      ]),
      changeFrequency: "yearly",
      priority: 0.6,
      images: imagesFor("/terms-and-conditions"),
    },
  ];

  return entries;
}
