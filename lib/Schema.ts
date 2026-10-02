import { APP } from "@/lib/App";
import { ADDRESS, EMAIL, PHONE_INTL, SOCIALS } from "@/lib/Contact";

const siteUrl = APP.url?.replace(/\/$/, "") ?? "";

export const AREAS_SERVED = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Al Ain",
  "Umm Al Quwain",
  "Fujairah",
];

/**
 * MovingCompany is a LocalBusiness subtype — rendered once per page from the
 * root layout.
 */
export function generateLocalBusinessSchema() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${siteUrl}/#organization`,
    name: APP.name,
    url: `${siteUrl}/`,
    telephone: PHONE_INTL,
    email: EMAIL,
    image: `${siteUrl}/zain-movers-packers-dubai-established-2015.jpg`,
    logo: `${siteUrl}/logo.svg`,
    description:
      "Licensed and insured movers and packers in Dubai offering residential, commercial, villa, and furniture moving services across the UAE.",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      addressCountry: ADDRESS.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: 25.1279, longitude: 55.2264 },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "$$",
    paymentAccepted: ["Cash", "Bank Transfer", "Cheque"],
    foundingDate: "2015",
    areaServed: AREAS_SERVED.map((name) => ({ "@type": "Place", name })),
    sameAs: SOCIALS.map((social) => social.href),
    // NOTE: no aggregateRating here on purpose. Review markup must reflect
    // ratings actually collected and displayed on the site — inventing one
    // breaches Google's structured-data policy. Add it only when real review
    // data is wired up.
  });
}

export interface Crumb {
  name: string;
  href: string;
}

export function generateBreadcrumbSchema(crumbs: Crumb[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteUrl}${crumb.href}`,
    })),
  });
}

export function generateServiceSchema({
  name,
  description,
  path,
  areaServed = ["Dubai"],
}: {
  name: string;
  description: string;
  path: string;
  areaServed?: string[];
}) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: `${siteUrl}${path}`,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: areaServed.map((area) => ({ "@type": "Place", name: area })),
  });
}

/** Renders a JSON-LD <script>. `json` must already be a JSON string. */
export function jsonLdProps(json: string) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: json },
  };
}
