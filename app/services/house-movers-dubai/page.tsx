import {
  BadgeCheck,
  Banknote,
  ClipboardCheck,
  FileCheck2,
  Hammer,
  PackageCheck,
  Truck,
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
import { PHONE_HREF } from "@/lib/Contact";

const PATH = "/services/house-movers-dubai";

export const metadata = MetadataTemplate({
  title: "House Movers in Dubai | Reliable Home Shifting Services",
  desc: "Looking for house movers in Dubai? We offer professional home shifting services with transparent pricing. Pay only when you are satisfied. Get a free quote.",
  path: PATH,
  image: {
    path: "/services/house-movers-dubai-crew-wrapping-sofa.jpg",
    alt: "Zain Movers crew wrapping a sofa in protective blankets inside a Dubai apartment living room",
  },
});

const FAQS: Faq[] = [
  {
    question: "How long does it take to move a house?",
    answer: (
      <p>
        For a standard studio or 1BHK, the packing, moving, and unpacking
        usually takes about 4 to 6 hours. For a 2BHK or 3BHK, it takes a full
        day (around 8 to 10 hours). We always aim to finish in one day so you
        can sleep in your new home that night.
      </p>
    ),
  },
  {
    question: "Do you pack my clothes and kitchen items?",
    answer: (
      <p>
        Yes. We bring special wardrobe boxes where your hanging clothes stay on
        their hangers. For the kitchen, we use heavy-duty bubble wrap and strong
        boxes to protect your plates, glasses, and appliances.
      </p>
    ),
  },
  {
    question: "Do you dismantle and assemble beds and wardrobes?",
    answer: (
      <p>
        Yes, this is included in our standard house shifting service. Our team
        will dismantle your beds, wardrobes, and dining tables at the old house,
        and fully reassemble them in your new home.
      </p>
    ),
  },
  {
    question: "How much notice do you need before the move?",
    answer: (
      <p>
        It is best to book us 3 to 5 days in advance so you get your preferred
        time. But if you are in an emergency and need to move tomorrow,{" "}
        <a href={PHONE_HREF}>call us</a>. We offer next-day and sometimes
        same-day moving services.
      </p>
    ),
  },
  {
    question: "Do you move appliances like fridges and washing machines?",
    answer: (
      <p>
        Yes, we safely disconnect your washing machine, fridge, and cooker, pack
        them securely for transport, and place them in the correct spots at your
        new house.
      </p>
    ),
  },
];

export default function HouseMoversDubaiPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          generateServiceSchema({
            name: "House Movers and Home Shifting Services",
            description:
              "Professional house movers in Dubai offering complete home shifting, packing, and furniture assembly services for apartments and villas.",
            path: PATH,
          }),
        )}
      />

      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#services" },
          { name: "House Movers in Dubai", href: PATH },
        ]}
      />

      <ServiceHero
        eyebrow="Licensed & Insured Residential Movers"
        title="House Movers in Dubai"
        subtitle="Professional home shifting services. No advance deposits. You only pay when you are completely satisfied with the move."
        primaryCta="Get a Free Quote"
        badges={[
          { label: "Licensed Company", sub: "Licensed and registered moving company" },
          { label: "1,000+ Homes Moved", sub: "Across the UAE since 2015" },
          { label: "Fully Insured", sub: "Cover from packing to placement" },
        ]}
        imageSrc="/services/house-movers-dubai-crew-wrapping-sofa.jpg"
        imageAlt="Zain Movers crew wrapping a sofa in protective blankets inside a Dubai apartment living room"
        imageLabel="Residential moving crew — Dubai"
        captionTitle="White-Glove Residential Moving Crew"
        captionMeta="Dubai & UAE"
      />

      <ServiceIntro
        eyebrow="Institutional Care & Precision"
        title="Stress-Free Home Shifting in Dubai"
        imageSrc="/services/mattress-protective-packing-dubai-movers.jpg"
        imageAlt="Movers protecting a mattress with heavy blankets and stretch film before loading in Dubai"
        imageLabel="Triple-layer protective packing"
        spec={{
          title: "Triple-Layer Material Specification",
          body: "Triple-layer protective corrugated packing and industrial stretch wrap applied to all wood finishes, lacquered tables, and sensitive upholstery.",
        }}
        checklist={[
          "Zero advance deposit required",
          "Wardrobe hanger boxes included",
          "Curtain & light fixture remounting",
          "Emaar, Nakheel & JLT permit assist",
        ]}
      >
        <p>
          Moving your house is hard work. Packing up your life into boxes,
          dealing with building management, and moving heavy furniture is
          stressful. We get it.
        </p>
        <p>
          That&apos;s why our house movers in Dubai handle the entire process
          for you. We take care of everything from wrapping your fragile kitchen
          plates to dismantling your bedroom wardrobes and setting them back up
          in your new home.
        </p>
        <p>
          Whether you are moving into a high-rise apartment in Dubai Marina or a
          family home in Mirdif, we provide complete residential shifting. You
          focus on transferring your Ejari and sorting out your DEWA
          disconnection, and we will handle all the heavy lifting.
        </p>
      </ServiceIntro>

      <ServiceTiers
        eyebrow="Scope & Scale"
        title="Home Shifting Services for Every Size"
        lede="We adapt our team and trucks based on how much stuff you have. Each residence requires distinct logistical bandwidth, truck capacities, and technician specialisation."
        tiers={[
          {
            kind: "Apt",
            title: "Studio and 1BHK Moving",
            turnaround: "Turnaround: 4 to 6 hours",
            description:
              "Moving a smaller apartment is usually fast. We send a dedicated team that can pack, move, and unpack a standard studio or one-bedroom apartment in a single day, managing building elevator access smoothly so you can settle in by evening.",
          },
          {
            kind: "Family",
            title: "2BHK and 3BHK Moving",
            turnaround: "Turnaround: 8 to 10 hours",
            description:
              "Larger homes mean more furniture, more appliances, and usually more memories to protect. As experienced household movers, we bring specialised packing materials for large TVs, glass dining tables, and heavy sofas, and we safely pack all your personal items, clothes, and kitchenware.",
          },
          {
            kind: "Villa",
            title: "Townhouse and Villa Moving",
            turnaround: "Full-day dedicated deployment",
            description:
              "If you are moving out of a larger townhouse with a garden or patio, the job requires more planning. We handle outdoor furniture, large appliances, and multiple bedrooms across Arabian Ranches, Dubai Hills, Palm Jumeirah, Damac Hills, and Al Barsha.",
          },
        ]}
      />

      <section className="bg-secondary">
        <div className="wrap band">
          <SectionHeading
            eyebrow="Step-by-Step Logistics"
            title="How Our House Shifting Process Works"
            lede="A systematic four-phase schedule engineered for total transparency and zero downtime."
            align="center"
          />
          <ProcessSteps
            className="mt-12"
            steps={[
              {
                title: "Get a Fixed Quote",
                description:
                  "You contact us via WhatsApp or phone. You send us pictures of your items, or we do a quick free video survey. Then we give you a final, fixed price. No surprises on moving day.",
                note: "Avg response: 15 mins",
                icon: ClipboardCheck,
              },
              {
                title: "Packing Day",
                description:
                  "Our team arrives on time with high-quality carton boxes, bubble wrap, stretch film, and packing tape. We carefully pack your clothes, books, and fragile items, and dismantle beds, dining tables, and large cabinets.",
                note: "All materials supplied",
                icon: PackageCheck,
              },
              {
                title: "Safe Transport",
                description:
                  "We load your boxes and furniture into our clean, covered moving trucks. Our drivers know Dubai's roads and take the safest routes to your new home.",
                note: "GPS-tracked vehicles",
                icon: Truck,
              },
              {
                title: "Unpacking and Setup",
                description:
                  "This is where you relax. We unload everything, assemble your furniture exactly where you want it, and unpack the main boxes. Before we leave, we take all the empty boxes and packing trash with us.",
                note: "Pay on completion",
                icon: BadgeCheck,
              },
            ]}
          />
        </div>
      </section>

      <WhyChooseService
        eyebrow="Why Choose Us"
        title="Why Choose Zain as Your House Movers"
        lede="There are many house moving companies out there, but we do things differently to make sure you feel safe and respected."
        guarantee={{
          title: "100% Damage Protection",
          body: "Every single move includes transit protection. In the improbable event of damage, our resolution team rectifies or reimburses promptly without bureaucracy.",
        }}
        benefits={[
          {
            icon: Wallet,
            title: "Pay Upon Satisfaction",
            body: "We don't ask for any money upfront. You pay the bill only after the furniture is set up, the boxes are moved, and you are happy with the job.",
          },
          {
            icon: Banknote,
            title: "No Hidden Fees",
            body: "Moving day is already stressful. The last thing you need is a surprise charge for extra stairs or heavy items. The quote we give you on WhatsApp is the final price you pay.",
          },
          {
            icon: Hammer,
            title: "Expert Handymen",
            body: "Our team doesn't just carry boxes. We have trained staff who know how to properly dismantle and reassemble complex furniture, mount TVs, and fix curtains.",
          },
          {
            icon: FileCheck2,
            title: "Fully Insured Moves",
            body: "We are a legally registered and insured moving company. We handle your belongings with extreme care, and your items are protected throughout.",
          },
        ]}
      />

      <ServicePricing
        title="House Shifting Costs in Dubai"
        lede="Transparent rates based on property dimension and logistics requirements. Everything is documented upfront."
        rows={[
          {
            property: "Studio Apartment",
            price: "AED 650 – AED 950",
            team: "2–3 movers / 1 closed truck",
            duration: "2 – 4 hours",
            inclusions: "Dismantling, boxes & transit",
          },
          {
            property: "1 Bedroom Apartment",
            price: "AED 950 – AED 1,450",
            team: "3–4 movers / 1 closed truck",
            duration: "3 – 5 hours",
            inclusions: "Wardrobe boxes, full reassembly",
          },
          {
            property: "2 Bedroom Apartment",
            price: "AED 1,350 – AED 1,950",
            team: "4–6 movers / 1–2 trucks",
            duration: "5 – 7 hours",
            inclusions: "All rooms packed, TV wall unmount",
          },
          {
            property: "3 Bedroom Apartment",
            price: "AED 2,200 – AED 3,200",
            team: "6–8 movers / 2 trucks",
            duration: "6 – 8 hours",
            inclusions: "Appliance setup, room sorting",
          },
          {
            property: "4+ Bedroom Villa / Townhouse",
            price: "Custom Fixed Quote",
            team: "8–12 movers / dedicated fleet",
            duration: "Full-day deployment",
            inclusions: "Onsite supervisor, custom crating",
          },
        ]}
        priceLock={{
          title: "The Zain Movers Price-Lock Guarantee",
          body: "Moving day is already stressful. The last thing you need is a surprise charge for extra stairs or heavy items. The quote we give you on WhatsApp is the final price you pay.",
        }}
      >
        <p>
          Customers always ask us, &ldquo;How much does it cost to move a
          house?&rdquo; The honest answer is that house shifting services Dubai prices
          depend on the volume of your furniture and the distance of the move.
          Moving a fully furnished 3BHK will cost more than a lightly furnished
          studio.
        </p>
        <p>
          However, we keep our prices affordable. As a rough guide, a basic
          studio move within Dubai can start from around AED 699. The best way
          to know your exact cost is to contact us — send a quick WhatsApp
          message with a video of your rooms, and we will give you a guaranteed
          price in minutes.
        </p>
      </ServicePricing>

      <FAQSection
        faqs={FAQS}
        eyebrow="Got Questions?"
        heading="Frequently Asked Questions About House Moving"
        lede="Clear answers regarding materials, scheduling, and building regulations across Dubai."
      />

      <CTAWithForm
        eyebrow="Fast & Accurate Response"
        heading="Ready to Move Your Home?"
        description="Skip the stress of packing and heavy lifting. Let our professional team handle your move safely and quickly. Remember: you only pay when you are satisfied with the move."
        tone="light"
      />
    </>
  );
}
