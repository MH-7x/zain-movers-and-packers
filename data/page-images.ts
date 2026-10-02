/**
 * One representative image per sitemap URL, for the image-sitemap entries in
 * app/sitemap.ts. Keep each value in sync with the `image.path` passed to
 * `MetadataTemplate` on that route's page.tsx — it's the same photo already
 * used for that page's Open Graph tag, reused here instead of duplicated.
 */
export const PAGE_IMAGES: Record<string, string> = {
  "/": "/homepage/zain-movers-and-packers-dubai-hero.jpg",
  "/about": "/homepage/zain-movers-packers-dubai-established-2015.jpg",
  "/contact": "/homepage/zain-movers-and-packers-dubai-hero.jpg",
  "/privacy-policy": "/homepage/zain-movers-and-packers-dubai-hero.jpg",
  "/terms-and-conditions": "/homepage/zain-movers-and-packers-dubai-hero.jpg",

  "/services/house-movers-dubai":
    "/services/house-movers-dubai-crew-wrapping-sofa.jpg",
  "/services/villa-movers-dubai":
    "/services/villa-movers-dubai-carrying-sofa.jpg",
  "/services/office-movers-dubai":
    "/services/office-movers-dubai-wrapping-monitors.jpg",
  "/services/furniture-movers-dubai":
    "/services/furniture-movers-dubai-wardrobe-dismantling.jpg",
  "/services/packing-and-moving-services-dubai":
    "/services/packing-services-dubai-glassware-bubble-wrap.jpg",
  "/services/cheap-movers-dubai":
    "/services/cheap-movers-dubai-studio-apartment-move.jpg",

  "/locations/movers-in-abu-dhabi":
    "/locations/movers-in-abu-dhabi-unloading-truck-tower.jpg",
  "/locations/movers-in-sharjah":
    "/locations/movers-in-sharjah-carrying-wrapped-furniture.jpg",
  "/locations/movers-in-ajman":
    "/locations/movers-in-ajman-wrapped-furniture-apartment.jpg",
  "/locations/movers-in-ras-al-khaimah":
    "/locations/movers-in-ras-al-khaimah-villa-unloading.jpg",
  "/locations/movers-in-al-ain":
    "/locations/movers-in-al-ain-wrapping-majlis-seating-villa.jpg",

  "/dubai/movers-in-dubai-marina":
    "/sub-locations/movers-in-dubai-marina-apartment-relocation.jpg",
  "/dubai/movers-in-jvc":
    "/sub-locations/movers-in-jvc-townhouse-relocation.jpg",
  "/dubai/movers-in-jlt":
    "/sub-locations/movers-in-jlt-basement-loading-bay.jpg",
  "/dubai/movers-in-palm-jumeirah":
    "/sub-locations/movers-in-palm-jumeirah-villa-relocation.jpg",
  "/dubai/movers-in-business-bay":
    "/sub-locations/movers-in-business-bay-office-relocation.jpg",
  "/dubai/movers-in-dubai-silicon-oasis":
    "/sub-locations/movers-in-dubai-silicon-oasis-villa-relocation.jpg",
};
