import type { Metadata } from "next";
import { APP } from "@/lib/App";

interface MetadataArgs {
  /** Unique <title> for the page. */
  title: string;
  /** Unique meta description for the page. */
  desc: string;
  /** Route path, leading slash, no trailing slash. Use "/" for the homepage. */
  path: string;
  image: {
    /** Public path of the OG image, e.g. "/og/house-movers-dubai.jpg". */
    path: string;
    alt: string;
  };
}

const siteUrl = APP.url?.replace(/\/$/, "") ?? "";

export function MetadataTemplate({
  title,
  desc,
  path,
  image,
}: MetadataArgs): Metadata {
  const canonical = path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
  const ogImage = `${siteUrl}${image.path}`;

  return {
    metadataBase: new URL(siteUrl || "http://localhost:3000"),
    title,
    description: desc,
    alternates: { canonical },
    openGraph: {
      title,
      description: desc,
      url: canonical,
      siteName: APP.name,
      locale: "en_AE",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [{ url: ogImage, alt: image.alt }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}
