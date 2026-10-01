import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/Contact";

interface FeaturedService {
  index: string;
  title: string;
  meta: string;
  body: string;
  href: string;
  ctaLabel: string;
  phoneLabel: string;
  imageSrc: string;
  imageAlt: string;
}

interface ServiceCard {
  index: string;
  title: string;
  meta: string;
  body: string;
  href: string;
  tagLeft: string;
  tagRight: string;
}

/** Tier one: the two services given top billing on the homepage grid. */
const FEATURED: FeaturedService[] = [
  {
    index: "01",
    title: "House Movers in Dubai",
    meta: "Apartments, Duplexes & Family Residences",
    body: "Moving your home shouldn’t be stressful. Our house moving team takes care of everything — from packing your kitchen items and wardrobe contents to dismantling beds and reassembling them at your new place. We handle apartments, flats, and full homes across Dubai.",
    href: "/services/house-movers-dubai",
    ctaLabel: "Contact For House Move",
    phoneLabel: "Direct House Team",
    imageSrc: "/homepage/house-movers-in-dubai-zain-movers-packers.jpg",
    imageAlt:
      "Zain Movers crew packing and dismantling furniture inside a Dubai apartment",
  },
  {
    index: "02",
    title: "Furniture Movers in Dubai",
    meta: "Joinery, Antiques & Heavy Hoisting",
    body: "Need to move just a sofa? Or a full bedroom set? Our furniture movers in Dubai handle single-item and bulk furniture moves across the city. We properly dismantle, wrap, transport, and reassemble your furniture — IKEA, custom-built, or antique.",
    href: "/services/furniture-movers-dubai",
    ctaLabel: "Contact For Furniture Move",
    phoneLabel: "Direct Furniture Team",
    imageSrc: "/homepage/furniture-movers-in-dubai-zain-movers-packers.jpg",
    imageAlt: "Zain Movers carpenter dismantling a wardrobe for transport",
  },
];

/** Remaining scope: the rest of the catalogue, in the standard card grid. */
const CARDS: ServiceCard[] = [
  {
    index: "03",
    title: "Villa Movers in Dubai",
    meta: "Luxury Estates, Compound & Waterfront Villas",
    body: "Villas need a different approach. There's more space, more furniture, and usually more delicate items. Our villa movers in Dubai are trained for large-scale moves — including garden furniture, heavy wardrobes, and custom-built pieces. We do a walk-through before the move to plan everything properly, so there are no surprises on moving day.",
    href: "/services/villa-movers-dubai",
    tagLeft: "Free Pre-Move Survey",
    tagRight: "Master Carpentry Team",
  },
  {
    index: "04",
    title: "Office Movers in Dubai",
    meta: "Commercial HQs, Tech Hubs & Retail Relocation",
    body: "Moving an office means downtime, and downtime costs money. We work with businesses to plan moves during off-hours or weekends — so your team can walk into a fully set-up office on Monday morning. Desks, chairs, IT equipment, filing cabinets, and server rooms are handled with care.",
    href: "/services/office-movers-dubai",
    tagLeft: "Weekend & Overnight Moves",
    tagRight: "NOC Assistance",
  },
  {
    index: "05",
    title: "Packing and Moving Services",
    meta: "Turnkey Industrial Materials",
    body: "Packing is where most things go wrong. Glasses break. Screens crack. Our packing team uses proper materials — bubble wrap, corrugated sheets, stretch film, sturdy carton boxes, and custom crating for fragile items — and labels everything so unpacking is simple.",
    href: "/services/packing-and-moving-services-dubai",
    tagLeft: "Wardrobe Hanging Boxes",
    tagRight: "Full Unpack Option",
  },
  {
    index: "06",
    title: "Affordable Moving Services in Dubai",
    meta: "Transparent Rates & Zero Hidden Fees",
    body: "Good moving doesn't have to be expensive. We offer affordable moving services in Dubai with transparent pricing. No surprise charges. No inflated quotes. Just honest rates based on what you actually need — with a clear breakdown before we start, and we stick to it.",
    href: "/services/cheap-movers-dubai",
    tagLeft: "No Surprise Charges",
    tagRight: "Fixed Price Promise",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-24 bg-background">
      <div className="wrap band">
        <SectionHeading
          eyebrow="Our Moving Services"
          title="Complete Moving Services for Homes, Villas, and Businesses"
          lede="We provide a full range of moving services across Dubai and the UAE. Each service is handled by trained professionals using proper packing materials and our own fleet of trucks."
          align="split"
        />

        {/* Featured tier one: House and Furniture */}
        <div className="mt-10 flex flex-col gap-6">
          {FEATURED.map((service, position) => (
            <Reveal
              key={service.href}
              delay={position * 60}
              className="border border-primary bg-secondary "
            >
              <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="index-marker text-2xl text-primary">
                      {service.index}
                    </span>
                    <span className="bg-primary px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.12em] text-primary-foreground uppercase">
                      Featured Service
                    </span>
                    <span className="text-[0.65rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                      {service.meta}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-2xl font-semibold md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Link
                      href={service.href}
                      className="flex h-12 items-center bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
                    >
                      {service.ctaLabel}
                    </Link>
                    <a
                      href={PHONE_HREF}
                      className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      <Phone
                        className="size-4 text-primary"
                        aria-hidden="true"
                      />
                      {service.phoneLabel}: {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 35vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Remaining scope: Villa, Office, Packing, Affordable */}
        <ul className="mt-6 grid gap-6 lg:grid-cols-2">
          {CARDS.map((card, position) => (
            <li key={card.href}>
              <Reveal delay={position * 60} className="h-full">
                <Link
                  href={card.href}
                  className="group flex h-full flex-col bg-secondary p-7 transition-colors hover:bg-accent"
                >
                  <span className="index-marker text-2xl text-muted-foreground transition-colors group-hover:text-primary">
                    {card.index}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold">{card.title}</h3>
                  <p className="mt-1.5 text-xs font-semibold tracking-[0.04em] text-muted-foreground">
                    {card.meta}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {card.body}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-4">
                    <span className="text-xs text-muted-foreground">
                      {card.tagLeft}
                    </span>
                    <span className="text-xs font-semibold text-primary">
                      {card.tagRight}
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
