export interface NavItem {
  label: string;
  href: string;
  /** Short qualifier shown in mega-menu panels and card subtitles. */
  meta: string;
}

export const SERVICES: NavItem[] = [
  {
    label: "House Movers in Dubai",
    href: "/services/house-movers-dubai",
    meta: "Apartments, Duplexes & Family Residences",
  },
  {
    label: "Villa Movers in Dubai",
    href: "/services/villa-movers-dubai",
    meta: "Luxury Estates, Compound & Waterfront Villas",
  },
  {
    label: "Office Movers in Dubai",
    href: "/services/office-movers-dubai",
    meta: "Commercial HQs, Tech Hubs & Retail Relocation",
  },
  {
    label: "Furniture Movers in Dubai",
    href: "/services/furniture-movers-dubai",
    meta: "Joinery, Antiques & Heavy Hoisting",
  },
  {
    label: "Packing & Moving Services",
    href: "/services/packing-and-moving-services-dubai",
    meta: "Turnkey Industrial Materials",
  },
  {
    label: "Affordable Moving Services",
    href: "/services/cheap-movers-dubai",
    meta: "Transparent Rates & Zero Hidden Fees",
  },
];
