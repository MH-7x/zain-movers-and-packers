import {
  Hammer,
  MapPinned,
  PackageCheck,
  ShieldCheck,
  Truck,
  Wallet,
  Wrench,
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

const PATH = "/services/furniture-movers-dubai";

export const metadata = MetadataTemplate({
  title: "Furniture Movers in Dubai | Packing & Assembly Services",
  desc: "Expert furniture movers in Dubai. We handle dismantling, packing, transport, and reassembly. Safe, insured, and no hidden fees. Get a free quote today.",
  path: PATH,
  image: {
    path: "/services/furniture-movers-dubai-wardrobe-dismantling.jpg",
    alt: "Zain Movers carpenter dismantling a large wardrobe in a Dubai bedroom",
  },
});

const FAQS: Faq[] = [
  {
    question: "Will you move just one item?",
    answer: (
      <p>
        Yes. We regularly move single items like a sofa, a fridge, a piano, or a
        dining table. We provide the same level of packing and care for a single
        item as we do for a whole house.
      </p>
    ),
  },
  {
    question: "Do you reassemble IKEA furniture?",
    answer: (
      <p>
        Yes, we do. Our team is very experienced in IKEA assembly. We know how
        to dismantle Pax wardrobes, Malm beds, and Hemnes dressers safely and
        rebuild them so they stay sturdy.
      </p>
    ),
  },
  {
    question: "Do you move furniture from Dubai to Abu Dhabi or Sharjah?",
    answer: (
      <p>
        Yes. We operate across the entire UAE. We regularly send trucks to Abu
        Dhabi, Sharjah, Ajman, and Ras Al Khaimah.
      </p>
    ),
  },
  {
    question: "How do you protect glass tables and mirrors?",
    answer: (
      <p>
        Glass is tricky, but we handle it daily. We completely cover glass table
        tops and large mirrors in multiple layers of thick bubble wrap. We then
        cover the edges with heavy cardboard and secure it with stretch film.
      </p>
    ),
  },
  {
    question: "Can you fix furniture to the wall?",
    answer: (
      <p>
        Yes. If your TV unit or tall wardrobe needs to be drilled and fixed to
        the wall for safety, our handymen will do this for you during the setup
        process.
      </p>
    ),
  },
];

export default function FurnitureMoversDubaiPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          generateServiceSchema({
            name: "Furniture Movers, Dismantling and Assembly",
            description:
              "Expert furniture movers in Dubai handling dismantling, protective packing, transport, and complete reassembly for single items and full households.",
            path: PATH,
            areaServed: ["Dubai", "Sharjah", "Abu Dhabi", "Ajman"],
          }),
        )}
      />

      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#services" },
          { name: "Furniture Movers in Dubai", href: PATH },
        ]}
      />

      <ServiceHero
        eyebrow="Carpenter-Led Furniture Handling"
        title="Furniture Movers in Dubai"
        subtitle="Expert dismantling, safe packing, and complete reassembly. From a single sofa to a full house of furniture. Pay only when the job is done."
        primaryCta="Get a WhatsApp Quote"
        badges={[
          { label: "Expert Carpenters", sub: "Trained handymen on every job" },
          { label: "Fully Insured", sub: "Cover from dismantle to rebuild" },
          { label: "No Advance Payment", sub: "Settle only once rebuilt" },
        ]}
        imageSrc="/services/furniture-movers-dubai-wardrobe-dismantling.jpg"
        imageAlt="Zain Movers carpenter dismantling a large wardrobe in a Dubai bedroom"
        imageLabel="Carpenter dismantling wardrobe"
        captionTitle="In-House Carpentry Team"
        captionMeta="Dubai & UAE"
      />

      <ServiceIntro
        eyebrow="Precision Handling"
        title="Safe and Reliable Furniture Moving"
        imageSrc="/services/sofa-stretch-film-corner-guards-dubai.jpg"
        imageAlt="Sofa wrapped in stretch film and corner guards before loading by Zain Movers in Dubai"
        imageLabel="Stretch film & corner guards"
        spec={{
          title: "Labelled Fixings Protocol",
          body: "All screws, bolts, and hinges are placed in secure, labelled bags matched to their piece — so nothing goes missing and every rebuild is sturdy."
        }}
        checklist={[
          "Single items to full households",
          "IKEA & modular furniture specialists",
          "Glass and mirror edge protection",
          "Wall fixing on request",
        ]}
      >
        <p>
          Moving heavy furniture is hard work. If you try to do it yourself, or
          hire untrained helpers, things usually go wrong. It is very easy to
          scratch walls, damage wooden edges, or lose important screws.
        </p>
        <p>
          We take the risk completely out of it. As professional furniture
          movers in Dubai, we have a dedicated team of carpenters and packers.
        </p>
        <p>
          We do not just carry your items. We carefully dismantle large pieces,
          wrap them in thick protective materials, move them safely, and rebuild
          them in your new room. You do not have to lift a finger or search for
          a missing screw.
        </p>
      </ServiceIntro>

      <ServiceTiers
        eyebrow="Scope & Scale"
        title="From Single Items to Full Bedrooms"
        lede="We are flexible. While some furniture moving companies only accept massive jobs, we adapt to what you actually need."
        tiers={[
          {
            kind: "Single",
            title: "Single Item Moving",
            turnaround: "Same-day slots available",
            description:
              "Did you just buy a heavy sofa on Dubizzle or Facebook Marketplace? Or maybe you need to send a dining table to a friend. We offer single item moving — we will pick it up, pack it, and deliver it safely.",
          },
          {
            kind: "Bedroom",
            title: "Full Bedroom Sets",
            turnaround: "3 to 5 hours",
            description:
              "Moving a bedroom is complicated because of the wardrobe and the bed frame. Our team dismantles massive 6-door wardrobes, heavy king-size beds, and dressers. We move the heavy wood safely and build it exactly how it was.",
          },
          {
            kind: "Modular",
            title: "IKEA and Modular Furniture",
            turnaround: "Specialist MDF handling",
            description:
              "IKEA furniture is great, but it is made of compressed wood (MDF). If you take it apart incorrectly, the wood chips and the screws will not hold again. Our handymen know exactly how to dismantle and reassemble IKEA furniture without ruining the material.",
          },
          {
            kind: "Heavy",
            title: "Bulky and Heavy Furniture",
            turnaround: "Rigging equipment supplied",
            description:
              "Some things are just too heavy to move normally. We handle bulky furniture like solid wood dining tables, home gym equipment, heavy glass cabinets, and large safes.",
          },
        ]}
      />

      <section className="bg-secondary">
        <div className="wrap band">
          <SectionHeading
            eyebrow="Step-by-Step Logistics"
            title="How We Protect Your Furniture"
            lede="We treat your furniture like it is our own. Here is the exact process our furniture movers follow to make sure nothing gets damaged."
            align="center"
          />
          <ProcessSteps
            className="mt-12"
            steps={[
              {
                title: "Expert Dismantling",
                description:
                  "Our trained carpenters look at the furniture first. They carefully remove the doors, shelves, and frames. All the screws, bolts, and hinges are placed in secure, labelled bags so nothing goes missing.",
                note: "Labelled fixings bags",
                icon: Wrench,
              },
              {
                title: "Heavy-Duty Packing",
                description:
                  "We never put bare wood or fabric into a moving truck. We cover sofas in stretch film to prevent stains, wrap wooden corners in thick corrugated cardboard, and cover glass panels in heavy bubble wrap and moving blankets.",
                note: "All materials supplied",
                icon: PackageCheck,
              },
              {
                title: "Safe Transport",
                description:
                  "We load the heavy pieces into our closed trucks first. We use straps to secure tall wardrobes and glass items to the walls of the truck so they do not fall over while driving over speed bumps.",
                note: "Strapped & secured",
                icon: Truck,
              },
              {
                title: "Perfect Reassembly",
                description:
                  "When we arrive, you tell us exactly where you want the item. We unwrap it, clear the packing trash, and rebuild the furniture. We make sure the wardrobe doors are aligned and the bed does not squeak.",
                note: "Pay on completion",
                icon: Hammer,
              },
            ]}
          />
        </div>
      </section>

      <WhyChooseService
        eyebrow="Why Choose Us"
        title="Why Choose Zain Movers for Your Furniture"
        lede="You can always find a cheap man-with-a-van on the street, but putting your expensive furniture in their hands is a big risk. Here is why people choose us."
        guarantee={{
          title: "Rebuilt, Then Paid",
          body: "We do not ask you for any money upfront. You pay us only after the furniture is rebuilt in your new home and you are happy with how it looks.",
        }}
        benefits={[
          {
            icon: Hammer,
            title: "Real Carpenters on Staff",
            body: "We employ actual handymen who understand how furniture is built. They know the difference between solid wood and MDF, and they use the right tools.",
          },
          {
            icon: Wallet,
            title: "Pay Upon Satisfaction",
            body: "We do not ask you for any money upfront. You pay us only after the furniture is rebuilt in your new home and you are happy with how it looks.",
          },
          {
            icon: ShieldCheck,
            title: "Fully Insured",
            body: "Accidents happen in the moving industry. But because we are a legally registered and insured company, you are completely covered if something gets damaged.",
          },
          {
            icon: MapPinned,
            title: "Inter-Emirate Moves",
            body: "We do not just work in one city. We have dedicated teams acting as furniture movers Sharjah and furniture movers Abu Dhabi. If you need a sofa moved from Dubai to Abu Dhabi, we do it every week.",
          },
        ]}
      />

      <ServicePricing
        title="How Much Does it Cost?"
        lede="The cost of moving furniture depends on two things: what the item is, and whether it needs to be dismantled."
        rows={[
          {
            property: "Single Item (sofa, fridge, bed)",
            price: "AED 250 – AED 450",
            team: "2 movers / 1 van",
            duration: "1 – 2 hours",
            inclusions: "Wrapping, transport, placement",
          },
          {
            property: "Bedroom Set",
            price: "AED 450 – AED 850",
            team: "2–3 movers + carpenter",
            duration: "3 – 5 hours",
            inclusions: "Dismantle, wrap, full rebuild",
          },
          {
            property: "Full Apartment Furniture",
            price: "AED 900 – AED 1,800",
            team: "4–5 movers / 1–2 trucks",
            duration: "5 – 7 hours",
            inclusions: "All rooms, appliance handling",
          },
          {
            property: "Heavy or Specialist Items",
            price: "Custom Fixed Quote",
            team: "Rigging crew as required",
            duration: "Assessed per item",
            inclusions: "Safes, pianos, glass crating",
          },
        ]}
        priceLock={{
          title: "The Zain Movers Price-Lock Guarantee",
          body: "Take a photo of the furniture on your phone and send it to our WhatsApp. We will give you a fixed price immediately, and that is the price you pay.",
        }}
      >
        <p>
          Moving a single sofa that fits in the elevator is very cheap. Moving a
          massive, custom-built wardrobe that takes three hours to dismantle and
          rebuild will cost more.
        </p>
        <p>
          But we make pricing very easy. You do not always need a home visit for
          a few items. Just take a photo of the furniture on your phone and send
          it to our WhatsApp. We will give you a fixed price immediately.
        </p>
      </ServicePricing>

      <FAQSection
        faqs={FAQS}
        eyebrow="Got Questions?"
        heading="Frequently Asked Questions About Furniture Moving"
        lede="Clear answers on single items, IKEA rebuilds, and protecting fragile surfaces."
      />

      <CTAWithForm
        eyebrow="Photo-Based Fixed Quotes"
        heading="Send Us a Photo for a Quick Quote"
        description="Don’t risk damaging your back or your expensive furniture. Let our expert carpenters handle the heavy lifting. Want a fast price? Take a picture of the furniture you need moved and send it to us on WhatsApp — we will give you a final quote in minutes. Remember: you only pay when you are completely satisfied with the job."
        tone="light"
      />
    </>
  );
}
