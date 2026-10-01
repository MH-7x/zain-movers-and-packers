import {
  GraduationCap,
  MessageSquare,
  Receipt,
  ShieldCheck,
  StepForward,
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

const PATH = "/services/cheap-movers-dubai";

export const metadata = MetadataTemplate({
  title: "Cheap Movers and Packers in Dubai | Affordable Home Shifting",
  desc: "Looking for cheap movers and packers in Dubai? Get affordable moving services with zero hidden fees. Pay only when you are satisfied. Get a free fixed quote.",
  path: PATH,
  image: {
    path: "/og/cheap-movers-dubai.jpg",
    alt: "Zain Movers crew loading a small apartment move into a branded truck in Dubai",
  },
});

const FAQS: Faq[] = [
  {
    question: "Is the price you quote me final?",
    answer: (
      <p>
        Yes. As long as you show us all the furniture that needs moving during
        our WhatsApp video survey, the price we give you is 100% final. There
        are no hidden fees.
      </p>
    ),
  },
  {
    question: "Do affordable movers still provide packing materials?",
    answer: (
      <p>
        Yes. Our quote includes heavy-duty carton boxes, thick bubble wrap for
        your fragile items, and stretch film to protect your sofas. We do not
        cut corners on packing.
      </p>
    ),
  },
  {
    question: "Do you dismantle and assemble furniture for this price?",
    answer: (
      <p>
        Yes, absolutely. Our team will take apart your heavy beds and wardrobes
        at your old house, and fully rebuild them in your new home. This is
        included in our standard moving price.
      </p>
    ),
  },
  {
    question: "Why are some movers much cheaper than you?",
    answer: (
      <p>
        If a company offers a price that seems too good to be true, it usually
        is. Extremely cheap movers often do not have a trade licence, do not
        have insurance, and will surprise you with hidden fees on moving day. We
        offer the lowest possible price for a safe, legal, and professional
        move.
      </p>
    ),
  },
  {
    question: "Do I need to pay a deposit?",
    answer: (
      <p>
        No. Even with our affordable rates, we still stick to our Pay Upon
        Satisfaction rule. You pay nothing upfront. You only pay when the move
        is finished and you are happy.
      </p>
    ),
  },
];

export default function CheapMoversDubaiPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          generateServiceSchema({
            name: "Affordable Movers and Packers",
            description:
              "Affordable movers and packers in Dubai offering fixed WhatsApp quotes, included packing materials and furniture dismantling, with zero hidden fees.",
            path: PATH,
          }),
        )}
      />

      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#services" },
          { name: "Affordable Moving Services", href: PATH },
        ]}
      />

      <ServiceHero
        eyebrow="Transparent Rates & Zero Hidden Fees"
        title="Cheap Movers and Packers in Dubai"
        subtitle="Affordable moving without cutting corners. We give you a fixed price, we never add hidden fees, and you only pay when you are completely satisfied."
        primaryCta="Get a Fixed WhatsApp Quote"
        badges={[
          { label: "Fixed Prices", sub: "Quoted before we start" },
          { label: "Fully Insured", sub: "Licensed, legal and covered" },
          { label: "No Advance Payment", sub: "Pay upon satisfaction" },
        ]}
        imageSrc="/services/cheap-movers-dubai-studio-apartment-move.jpg"
        imageAlt="Zain Movers crew loading a studio apartment move into a branded truck in Dubai"
        imageLabel="Budget apartment move — Dubai"
        captionTitle="Efficient Small-Move Crews"
        captionMeta="Owned Fleet"
      />

      <ServiceIntro
        eyebrow="Honest Budget Moving"
        title="Affordable Moving Without the Headaches"
        imageSrc="/services/fixed-price-moving-quotation-dubai.jpg"
        imageAlt="Zain Movers mover handing a written fixed-price quotation to a customer in Dubai"
        imageLabel="Fixed-price quotation"
        spec={{
          title: "What We Quote Is What You Pay",
          body: "You send a quick video of your rooms on WhatsApp. We look at your furniture and give you a fixed, final price. No stair charges, no tape charges, no moving-day surprises.",
        }}
        checklist={[
          "Packing materials included",
          "Furniture dismantling included",
          "No last-minute stair charges",
          "Licensed and fully insured",
        ]}
      >
        <p>
          Everyone wants a good deal on moving day. But we know what usually
          happens when you search online for a cheap moving company Dubai.
        </p>
        <p>
          You find a company that gives you an amazing low price over the phone.
          Then, on moving day, they show up and demand extra money for stairs,
          extra money for packing tape, and extra money because your furniture
          is &ldquo;too heavy.&rdquo; Or worse, you hire unverified guys with a
          rented van who scratch your walls and break your TV.
        </p>
        <p>
          We do things differently. We provide cheap movers and packers in
          Dubai, but we are a fully licensed, professional company. We give you
          a low price, but we actually respect your home and your furniture.
        </p>
      </ServiceIntro>

      <ServiceTiers
        eyebrow="How We Fix It"
        title="The Problem with Cheap Movers (And How We Fix It)"
        lede="We hear horror stories from customers every week about other budget movers. Here is how we make sure you get a fair, affordable move without the stress."
        tiers={[
          {
            kind: "Materials",
            title: "We Never Charge for Extra Tape",
            turnaround: "All materials included",
            description:
              "A common trick in the moving industry is to charge you extra on moving day for bubble wrap and carton boxes. We do not do that. When you book our full service, all packing materials are included in the price.",
          },
          {
            kind: "Access",
            title: "No Last-Minute Stair Charges",
            turnaround: "Access checked upfront",
            description:
              "We ask the right questions before giving you a quote. We check your building access and elevator situation first. This means we will never stop halfway through carrying your bed and demand more money to use the stairs.",
          },
          {
            kind: "Quote",
            title: "Fixed WhatsApp Quotes",
            turnaround: "Reply in minutes",
            description:
              "You do not need to worry about the price changing. You just send us a quick video of your rooms on WhatsApp. We look at your furniture, and we give you a fixed, final price. What we quote is exactly what you pay.",
          },
        ]}
      />

      <section className="bg-secondary">
        <div className="wrap band">
          <SectionHeading
            eyebrow="Full Service at a Budget Price"
            title="Professional Service at a Budget Price"
            lede="Being affordable does not mean you get bad service. When you hire our affordable movers in Dubai, you still get the full premium treatment."
            align="center"
          />
          <ProcessSteps
            className="mt-12"
            steps={[
              {
                title: "Studio and 1BHK Moving",
                description:
                  "If you live in a smaller apartment, you should not have to pay massive moving fees. We have small, highly efficient teams that can pack and move a studio or 1BHK apartment quickly, which keeps your costs very low.",
                note: "From around AED 699",
                icon: Truck,
              },
              {
                title: "Furniture Dismantling Included",
                description:
                  "Some companies charge a separate fee for a carpenter. We do not. Our moving teams include trained handymen who will dismantle your beds, wardrobes, and dining tables, and rebuild them at your new house.",
                note: "Carpenter included",
                icon: StepForward,
              },
              {
                title: "Single Item Moves",
                description:
                  "Did you buy a used fridge or sofa online? You do not need to rent a full truck. We offer very cheap rates for picking up and delivering single pieces of heavy furniture.",
                note: "No full-truck minimum",
                icon: Receipt,
              },
              {
                title: "Fixed Quote, Then Pay",
                description:
                  "Send a short video on WhatsApp, receive a guaranteed fixed price, and settle the bill only once the move is finished and you are happy with the result.",
                note: "Pay on completion",
                icon: MessageSquare,
              },
            ]}
          />
        </div>
      </section>

      <WhyChooseService
        eyebrow="How We Keep Prices Low"
        title="How We Offer Affordable Movers in Dubai"
        lede="Customers often ask us how we can keep our prices so low while still being a fully licensed and insured moving company. The answer is efficiency."
        guarantee={{
          title: "Cheap Should Still Mean Legal",
          body: "Extremely cheap movers often have no trade licence and no insurance. We offer the lowest possible price for a move that is safe, legal, and professional.",
        }}
        benefits={[
          {
            icon: Truck,
            title: "We Own Our Trucks",
            body: "We do not rent vehicles from third parties, which means we do not pass rental costs onto you.",
          },
          {
            icon: GraduationCap,
            title: "We Train Our Own Staff",
            body: "Because our team works fast and knows exactly how to pack safely, we finish jobs in a few hours instead of taking all day. Doing the job right the first time keeps our costs down.",
          },
          {
            icon: Wallet,
            title: "Pay Upon Satisfaction",
            body: "We do not waste money chasing customers for unpaid invoices, because our customers are always happy with the work before they hand over the cash.",
          },
          {
            icon: ShieldCheck,
            title: "Licensed and Insured",
            body: "A low price with no trade licence or insurance is not a bargain. We are a legally registered company, so your belongings stay covered throughout.",
          },
        ]}
      />

      <ServicePricing
        title="Honest Prices for House Shifting"
        lede="We believe in transparent pricing. While the exact cost depends on how much furniture you have and where you are moving to, here is a general idea of our rates."
        rows={[
          {
            property: "Single Item Move",
            price: "AED 250 – AED 450",
            team: "2 movers / 1 van",
            duration: "1 – 2 hours",
            inclusions: "Wrapping, transport, placement",
          },
          {
            property: "Studio Apartment",
            price: "From AED 699",
            team: "2–3 movers / 1 closed truck",
            duration: "2 – 4 hours",
            inclusions: "Truck, team, dismantling, lifting",
          },
          {
            property: "1 Bedroom Apartment",
            price: "AED 950 – AED 1,450",
            team: "3–4 movers / 1 closed truck",
            duration: "3 – 5 hours",
            inclusions: "Materials, wrapping, reassembly",
          },
          {
            property: "2 Bedroom Apartment",
            price: "AED 1,350 – AED 1,950",
            team: "4–5 movers / 1–2 trucks",
            duration: "5 – 7 hours",
            inclusions: "Full packing, furniture setup",
          },
          {
            property: "3+ Bedroom Home",
            price: "Custom Fixed Quote",
            team: "Scaled to inventory",
            duration: "Assessed per home",
            inclusions: "Materials, carpentry, transport",
          },
        ]}
        priceLock={{
          title: "The Zain Movers Price-Lock Guarantee",
          body: "We never charge extra on moving day for bubble wrap, carton boxes, or using the stairs. What we quote on WhatsApp is exactly what appears on your final bill.",
        }}
      >
        <p>
          For a standard studio apartment move within Dubai, our prices
          generally start from around AED 699. This includes the truck, the
          team, the dismantling, and the heavy lifting.
        </p>
        <p>
          But the easiest way to know your exact price is to ask us. It takes 5
          minutes. Send us a message on WhatsApp with a few photos of your
          apartment, and we will give you a guaranteed price right now.
        </p>
      </ServicePricing>

      <FAQSection
        faqs={FAQS}
        eyebrow="Got Questions?"
        heading="Frequently Asked Questions About Affordable Moving"
        lede="Clear answers on fixed pricing, included materials, and why the cheapest quote is not always the safest."
      />

      <CTAWithForm
        eyebrow="Fixed Price in Minutes"
        heading="Get Your Fixed Price Quote Today"
        description="Do not risk your furniture with unverified guys in a rented van. Get a professional move at a price you can actually afford. Take a quick video of the things you need to move, send it to us on WhatsApp, and get a fixed quote in minutes. Remember: you only pay when you are completely satisfied with the job."
        tone="light"
      />
    </>
  );
}
