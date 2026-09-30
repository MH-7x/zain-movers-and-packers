import { MetadataRoute } from "next";
import { APP } from "@/lib/App";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${APP.url}/sitemap.xml`,
  };
}
