import {
  Box,
  ChefHat,
  MapPinned,
  ShieldCheck,
  Shirt,
  Timer,
  Tv,
  Wallet,
} from "lucide-react";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceIntro from "@/components/service/ServiceIntro";
import ServiceTiers from "@/components/service/ServiceTiers";
import WhyChooseService from "@/components/service/WhyChooseService";
import ServicePricing from "@/components/service/ServicePricing";
import ProcessSteps from "@/components/shared/ProcessSteps";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQSection, { type Faq } from "@/components/shared/FAQSection";
import { CTAWithForm } from "@/components/shared/CTASection";
import { MetadataTemplate } from "@/lib/MetadataTemplate";
import { generateServiceSchema, jsonLdProps } from "@/lib/Schema";

const PATH = "/services/packing-and-moving-services-dubai";

export const metadata = MetadataTemplate({
  title: "Packing and Moving Services Dubai | All Materials Included",
  desc: "Packing and moving services in Dubai with bubble wrap, cartons, crating and labelling included. Fragile items fully protected. Get a fixed quote.",
  path: PATH,
  image: {
    path: "/services/packing-services-dubai-glassware-bubble-wrap.jpg",
    alt: "Zain Movers packers wrapping glassware in bubble wrap before boxing in a Dubai home",
  },
});

const FAQS: Faq[] = [
  {
    question: "Do I need to buy my own boxes?",
    answer: (
      <p>
        No, you do not need to buy anything. Our team brings all the necessary
        carton boxes, wardrobe boxes, tape, and bubble wrap on moving day.
      </p>
    ),
  },
  {
    question: "Do I need to empty my drawers before you arrive?",
    answer: (
      <p>
        No, leave everything exactly where it is. Our team will empty your
        drawers, pack the contents safely into labelled boxes, and dismantle the
        furniture for transport.
      </p>
    ),
  },
  {
    question: "Do you unpack the boxes at the new house?",
    answer: (
      <p>
        Yes. We do not just drop the boxes and leave. We unpack the main items,
        place your clothes in the new wardrobes, organise the heavy kitchen
        items, and — most importantly — we take all the empty boxes and trash
        away with us.
      </p>
    ),
  },
  {
    question: "How do you pack flat-screen TVs safely?",
    answer: (
      <p>
        We wrap the TV in a soft moving blanket, cover the screen with heavy
        cardboard or bubble wrap, and place it inside a specialised TV moving
        box to ensure it does not crack during the drive.
      </p>
    ),
  },
  {
    question: "What do you do with the empty boxes after moving?",
    answer: (
      <p>
        Once we unpack your items at the new house, we flatten the carton boxes,
        collect all the used bubble wrap and tape, and remove it from your home
        so you have a clean, clutter-free space.
      </p>
    ),
  },
];

export default function PackingAndMovingServicesDubaiPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          generateServiceSchema({
            name: "Packing and Moving Services",
            description:
              "Professional packing and moving services in Dubai with all premium materials supplied, room-by-room packing, custom crating, and full unpacking.",
            path: PATH,
          }),
        )}
      />

      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#services" },
          { name: "Packing and Moving Services", href: PATH },
        ]}
      />

      <ServiceHero
        eyebrow="Premium Materials Included"
        title="Professional Packing and Moving Services"
        subtitle="We bring the boxes, pack your fragile items safely, and move everything to your new home. You do not lift a finger, and you pay only when you are satisfied."
        primaryCta="Get a Free Quote"
        badges={[
          { label: "Premium Materials", sub: "Double-walled cartons supplied" },
          { label: "Fully Insured", sub: "Covered from wrap to unpack" },
          { label: "No Advance Payment", sub: "Pay upon satisfaction" },
        ]}
        imageSrc="/services/packing-services-dubai-glassware-bubble-wrap.jpg"
        imageAlt="Zain Movers packers wrapping glassware in bubble wrap before boxing in a Dubai home"
        imageLabel="Fragile kitchenware packing"
        captionTitle="Dedicated Packing Division"
        captionMeta="All Materials Supplied"
      />

      <ServiceIntro
        eyebrow="Turnkey Packing"
        title="Skip the Stress of Packing"
        imageSrc="/services/wardrobe-boxes-hanging-rails-packing-dubai.jpg"
        imageAlt="Wardrobe box with hanging rail being filled with clothes by Zain Movers in Dubai"
        imageLabel="Wardrobe boxes with hanging rail"
        spec={{
          title: "Professional-Grade Materials",
          body: "Double-walled corrugated cartons, thick bubble wrap, industrial stretch film, tall wardrobe boxes with hanging rails, and bespoke timber crates for high-value pieces.",
        }}
        checklist={[
          "All packing materials included",
          "Room-by-room labelling",
          "Full unpacking at destination",
          "Empty boxes removed for you",
        ]}
      >
        <p>
          Let&apos;s be honest: packing is the hardest part of moving. It takes
          days to put your life into boxes. If you try to do it yourself while
          working a full-time job, it is exhausting. And if you pack things
          incorrectly, your fragile items will break during the drive.
        </p>
        <p>
          We take over this entire job. As experts in packing and moving
          services, we do in a few hours what would normally take you days.
        </p>
        <p>
          Our team arrives with all the right materials. We wrap your glass,
          pack your clothes, protect your furniture, and safely move everything.
          We handle the heavy lifting and the careful wrapping, so you can just
          focus on settling into your new place.
        </p>
      </ServiceIntro>

      <ServiceTiers
        eyebrow="Material Specification"
        title="Quality Packing Materials for Safe Moving"
        lede="You cannot move a whole house safely using cheap supermarket boxes. We use professional-grade materials to ensure nothing gets damaged or scratched."
        tiers={[
          {
            kind: "Cartons",
            title: "Heavy-Duty Carton Boxes",
            turnaround: "Multiple sizes supplied",
            description:
              "We use double-walled corrugated packaging for heavy items like books and kitchenware. We use different box sizes so they are never over-packed or too heavy to carry safely.",
          },
          {
            kind: "Wrap",
            title: "Bubble Wrap and Stretch Film",
            turnaround: "Applied item by item",
            description:
              "We use thick bubble wrap for all your fragile item handling. We also use strong stretch film to wrap your fabric sofas and mattresses to protect them from dust and stains during transport.",
          },
          {
            kind: "Wardrobe",
            title: "Wardrobe Boxes",
            turnaround: "Crease-free transfer",
            description:
              "You do not have to fold your expensive suits and dresses into a flat box. We bring tall wardrobe boxes with a hanging rail inside. We take your clothes straight from your closet and hang them in the box, keeping them clean and wrinkle-free.",
          },
          {
            kind: "Crating",
            title: "Custom Crating",
            turnaround: "Built to measure",
            description:
              "If you have highly valuable or fragile items — like a large marble table top, a grand mirror, or expensive artwork — we can build custom wooden crates to give them ultimate protection.",
          },
        ]}
      />

      <section className="bg-secondary">
        <div className="wrap band">
          <SectionHeading
            eyebrow="Room-by-Room Method"
            title="How We Pack Your Home (Room by Room)"
            lede="We do not just throw things in a box and tape it shut. We pack in a highly organised way so that unpacking is easy."
            align="center"
          />
          <ProcessSteps
            className="mt-12"
            steps={[
              {
                title: "Kitchen Packing",
                description:
                  "The kitchen takes the most time because everything is breakable. Our team individually wraps every single plate, cup, and glass in bubble wrap or packing paper before placing it vertically in strong carton boxes. We also secure your heavy appliances.",
                note: "Item-by-item wrapping",
                icon: ChefHat,
              },
              {
                title: "Living Room and Electronics",
                description:
                  "We properly pack your flat-screen TVs using thick screen protectors and specific TV boxes. We wrap your electronics, bundle the cables, and protect the edges of your coffee tables and cabinets.",
                note: "Specialist TV boxes",
                icon: Tv,
              },
              {
                title: "Bedrooms and Wardrobes",
                description:
                  "We empty your drawers, pack your folded clothes into clean boxes, and use our wardrobe boxes for hanging items. We also pack your pillows and blankets in secure, sealed bags.",
                note: "Nothing to prepare",
                icon: Shirt,
              },
              {
                title: "Unpack and Clear Away",
                description:
                  "At the new house we unpack the main items, place your clothes in the new wardrobes, organise the heavy kitchen items, then flatten and remove every empty box and offcut of wrap.",
                note: "Clutter-free handover",
                icon: Box,
              },
            ]}
          />
        </div>
      </section>

      <WhyChooseService
        eyebrow="Why Choose Us"
        title="Your Reliable Local Packers and Movers"
        lede="If you are searching online for packers and movers near me, you want a team that is fast, local, and trustworthy. Here is why Zain Movers is the right choice."
        guarantee={{
          title: "Materials Always Included",
          body: "We will never stop halfway through packing and ask you to pay extra because we used too much tape. The price we quote is the final price.",
        }}
        benefits={[
          {
            icon: Timer,
            title: "Quick Movers and Packers",
            body: "We send a team large enough to pack and move your entire house in a single day. You will not be living out of boxes for a week.",
          },
          {
            icon: MapPinned,
            title: "Local Dubai Teams",
            body: "We have teams stationed across Dubai. Because we are local moving packers near me, we know the building rules, the loading areas, and the fastest routes to your new home.",
          },
          {
            icon: Wallet,
            title: "Pay Upon Satisfaction",
            body: "We do not ask for any advance payment. You pay the final bill only after we have packed, moved, and unpacked your items to your satisfaction.",
          },
          {
            icon: ShieldCheck,
            title: "Fully Insured",
            body: "We take full responsibility for your belongings. Because we are a licensed and insured moving company, your items are completely covered while they are in our hands.",
          },
        ]}
      />

      <ServicePricing
        title="Are Packing Materials Included in the Cost?"
        lede="Yes. When you book our full packing and moving services, all the materials are included in the final quote."
        rows={[
          {
            property: "Studio Apartment",
            price: "AED 650 – AED 950",
            team: "2–3 packers / 1 truck",
            duration: "2 – 4 hours",
            inclusions: "All cartons, wrap, tape & transit",
          },
          {
            property: "1 Bedroom Apartment",
            price: "AED 950 – AED 1,450",
            team: "3–4 packers / 1 truck",
            duration: "3 – 5 hours",
            inclusions: "Wardrobe boxes, full unpack option",
          },
          {
            property: "2 Bedroom Apartment",
            price: "AED 1,350 – AED 1,950",
            team: "4–5 packers / 1–2 trucks",
            duration: "5 – 7 hours",
            inclusions: "Kitchen wrapping, TV boxes",
          },
          {
            property: "3 Bedroom Villa",
            price: "AED 2,200 – AED 3,200",
            team: "6–8 packers / 2 trucks",
            duration: "Full-day deployment",
            inclusions: "Custom crating, complete unpack",
          },
          {
            property: "Packing Only (no transport)",
            price: "Custom Fixed Quote",
            team: "Scaled to inventory",
            duration: "Assessed per home",
            inclusions: "Materials, labelling, crating",
          },
        ]}
        priceLock={{
          title: "The Zain Movers Price-Lock Guarantee",
          body: "We provide the carton boxes, the bubble wrap, the packing tape, and the stretch film. We give you a clear, fixed price before we start — and that is the price you pay.",
        }}
      >
        <p>
          We like to keep our pricing simple and honest. When you book our full
          packing and moving services, all the materials are included in the
          final quote.
        </p>
      </ServicePricing>

      <FAQSection
        faqs={FAQS}
        eyebrow="Got Questions?"
        heading="Frequently Asked Questions About Packing"
        lede="Clear answers on materials, preparation, and what happens to the boxes afterwards."
      />

      <CTAWithForm
        eyebrow="Fast & Accurate Response"
        heading="Looking for Packers and Movers Near Me?"
        description="Stop worrying about where to find boxes and how to pack your fragile plates. Let our professional packing team handle the entire process safely and quickly. Remember: you only pay when you are completely satisfied with the job."
        tone="light"
      />
    </>
  );
}
