import {
  Banknote,
  ClipboardList,
  FileCheck2,
  PackageCheck,
  Truck,
  Users,
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

const PATH = "/services/villa-movers-dubai";

export const metadata = MetadataTemplate({
  title: "Villa Movers in Dubai | Free Pre-Move Survey & Fixed Price",
  desc: "Villa movers in Dubai with in-house carpenters for heavy wardrobes, garden and custom furniture. Free survey, fixed quote, pay after the move.",
  path: PATH,
  image: {
    path: "/services/villa-movers-dubai-carrying-sofa.jpg",
    alt: "Zain Movers crew carrying a sofa through a Dubai villa living room",
  },
});

const FAQS: Faq[] = [
  {
    question: "How many days does it take to move a large villa?",
    answer: (
      <p>
        Most 3 to 4-bedroom villas can be packed and moved in one very full day.
        For massive 5 or 6-bedroom villas with a lot of heavy furniture, it
        might take two days. We will tell you exactly how long it will take
        during the free survey.
      </p>
    ),
  },
  {
    question: "Do you offer a free survey before giving a price?",
    answer: (
      <p>
        Yes. We highly recommend a free survey for all villa moves. We can come
        to your home in person, or if you are busy, we can do it over a quick
        WhatsApp video call.
      </p>
    ),
  },
  {
    question: "Can you move heavy items like a safe or piano?",
    answer: (
      <p>
        Yes. We have the equipment and the trained staff to move heavy items
        like home safes, treadmills, and upright pianos safely. Just let us know
        about these items during the survey.
      </p>
    ),
  },
  {
    question: "Do you also provide villa movers in Abu Dhabi?",
    answer: (
      <p>
        Yes, we do. While we are based in Dubai, we frequently manage large
        villa relocations from Dubai to Abu Dhabi, and we also operate as villa
        movers in Abu Dhabi for local moves there.
      </p>
    ),
  },
  {
    question: "Will you pack my kitchen and fragile items?",
    answer: (
      <p>
        Yes. We bring thick bubble wrap and strong boxes specifically for
        kitchen plates, glasses, and fragile ornaments. We pack them very
        carefully to ensure nothing breaks during the drive.
      </p>
    ),
  },
];

export default function VillaMoversDubaiPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          generateServiceSchema({
            name: "Villa Movers and Packers",
            description:
              "Expert villa movers in Dubai handling large properties, garden furniture, custom joinery, and heavy items with free pre-move surveys.",
            path: PATH,
          }),
        )}
      />

      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#services" },
          { name: "Villa Movers in Dubai", href: PATH },
        ]}
      />

      <ServiceHero
        eyebrow="Licensed & Insured Villa Specialists"
        title="Villa Movers in Dubai"
        subtitle="Professional moving for large homes and villas. Free pre-move surveys. You only pay when the job is done and you are happy."
        primaryCta="Book a Free Survey"
        badges={[
          { label: "Licensed Company", sub: "Licensed and registered moving company" },
          { label: "Heavy Furniture Experts", sub: "Master carpenters on staff" },
          { label: "Fully Insured", sub: "Cargo cover on every villa move" },
        ]}
        imageSrc="/services/villa-movers-dubai-carrying-sofa.jpg"
        imageAlt="Zain Movers crew carrying a sofa through a Dubai villa living room"
        imageLabel="Villa relocation crew — Dubai"
        captionTitle="Dedicated Villa Relocation Crew"
        captionMeta="Multi-Truck Deployment"
      />

      <ServiceIntro
        eyebrow="Large Property Logistics"
        title="Expert Villa Movers and Packers in Dubai"
        imageSrc="/services/villa-movers-dubai-wrapping-oversized-wardrobe.jpg"
        imageAlt="Movers wrapping an oversized wardrobe before loading it from a Dubai villa"
        imageLabel="Custom joinery protection"
        spec={{
          title: "Property Protection Protocol",
          body: "Protective blankets on staircases and door frames, corner guards on marble edges, and floor runners through every corridor before the first heavy item moves.",
        }}
        checklist={[
          "Free pre-move survey",
          "Garden & patio furniture handled",
          "Chandelier & artwork crating",
          "Zero advance deposit required",
        ]}
      >
        <p>
          Moving out of a villa is a massive job. It is very different from
          moving a standard apartment. You have multiple bedrooms, heavy custom
          furniture, and outdoor spaces that all need to be packed and
          transported.
        </p>
        <p>
          You need a moving company that has the manpower and the right trucks
          to handle large property moving. That is exactly what our villa movers
          in Dubai do.
        </p>
        <p>
          We bring an experienced team that knows how to move large households
          safely. We protect your walls, handle your fragile items with care,
          and manage the logistics so you don&apos;t have to stress about a
          thing.
        </p>
      </ServiceIntro>

      <ServiceTiers
        eyebrow="Specialist Scope"
        title="Why Villa Moves Need a Specialist Team"
        lede="You cannot just hire a couple of guys with a small pickup truck to move a villa. It requires proper planning and the right tools."
        tiers={[
          {
            kind: "Joinery",
            title: "Heavy and Custom Furniture",
            turnaround: "Carpenter-led dismantling",
            description:
              "Villas usually have oversized beds, massive dining tables, and large built-in wardrobes. Our team knows how to properly dismantle these large items, wrap them securely so they don't get scratched, and put them back together in your new home.",
          },
          {
            kind: "Outdoor",
            title: "Garden and Outdoor Items",
            turnaround: "Separate clean-load staging",
            description:
              "If you live in a villa, you likely have a garden or patio. We move heavy outdoor dining sets, BBQ grills, large potted plants, and children's play equipment. We make sure these bulky items are transported safely without bringing dirt into your new house.",
          },
          {
            kind: "Fragile",
            title: "Safe and Secure Packing",
            turnaround: "Custom crating on request",
            description:
              "Large homes have more fragile items. We use heavy-duty packing materials for chandeliers, large mirrors, artwork, and your expensive kitchenware. We also use protective blankets on your staircases and door frames so we do not damage the property while moving heavy items.",
          },
        ]}
      />

      <section className="bg-secondary">
        <div className="wrap band">
          <SectionHeading
            eyebrow="Step-by-Step Logistics"
            title="How Our Villa Moving Process Works"
            lede="Because villa moves are so large, we follow a strict process to make sure nothing is missed."
            align="center"
          />
          <ProcessSteps
            className="mt-12"
            steps={[
              {
                title: "The Pre-Move Survey",
                description:
                  "We visit your villa (or do a detailed video call) to check exactly how much furniture and boxes you have. This lets us give you a final, fixed quote and decide how many trucks and men we need.",
                note: "Completely free",
                icon: ClipboardList,
              },
              {
                title: "Careful Packing",
                description:
                  "On moving day, our team arrives early with high-quality carton boxes, bubble wrap, and stretch film. We pack room by room, labelling every box so we know exactly where it goes in the new house.",
                note: "Room-by-room labelling",
                icon: PackageCheck,
              },
              {
                title: "Loading and Transport",
                description:
                  "We use large, closed moving trucks. Our team carefully loads your heavy furniture first, tying it down so it does not move during transport. We aim to get the move done in as few trips as possible.",
                note: "Multi-truck dispatch",
                icon: Truck,
              },
              {
                title: "Setup in Your New Villa",
                description:
                  "We do not just drop boxes and leave. We reassemble your beds and wardrobes, place the heavy furniture in the rooms you choose, and unpack the major items.",
                note: "Pay on completion",
                icon: Wrench,
              },
            ]}
          />
        </div>
      </section>

      <WhyChooseService
        eyebrow="Why Choose Us"
        title="Why Hire Us for Your Villa Relocation"
        lede="Moving a large home is expensive, and you need to trust the people doing it. Here is why families choose Zain Movers."
        guarantee={{
          title: "Survey-Backed Fixed Pricing",
          body: "This is why we do a survey first. The price we quote you after the survey is the final price. We will not ask for more money halfway through the day.",
        }}
        benefits={[
          {
            icon: Wallet,
            title: "Pay Upon Satisfaction",
            body: "We do not ask for a 50% deposit before we start. You pay the final bill only after all your furniture is set up in your new villa and you are completely satisfied with our work.",
          },
          {
            icon: Banknote,
            title: "No Hidden Fees",
            body: "The price we quote you after the survey is the final price. We will not ask for more money halfway through the day.",
          },
          {
            icon: Users,
            title: "Enough Manpower",
            body: "We send a large enough team to get your villa moved quickly. We do not want your move dragging on for three days because the team is too small.",
          },
          {
            icon: FileCheck2,
            title: "Fully Insured",
            body: "We are a legally registered moving company. We treat your home with respect, and your valuable items are fully insured during the move.",
          },
        ]}
      />

      <ServicePricing
        title="How Much Does it Cost to Move a Villa?"
        lede="Villa moving costs depend on the size of the house — which is why every quote follows a free survey rather than a guess over the phone."
        rows={[
          {
            property: "2 Bedroom Townhouse",
            price: "AED 1,600 – AED 2,400",
            team: "4–6 movers / 1–2 trucks",
            duration: "5 – 7 hours",
            inclusions: "Full packing, dismantle & rebuild",
          },
          {
            property: "3 Bedroom Villa",
            price: "AED 2,200 – AED 3,200",
            team: "6–8 movers / 2 trucks",
            duration: "7 – 9 hours",
            inclusions: "Garden furniture, wardrobe setups",
          },
          {
            property: "4 Bedroom Villa",
            price: "AED 3,200 – AED 4,500",
            team: "8–10 movers / 2–3 trucks",
            duration: "Full-day deployment",
            inclusions: "Onsite supervisor, artwork crating",
          },
          {
            property: "5+ Bedroom Luxury Villa",
            price: "Custom Fixed Quote",
            team: "10–14 movers / dedicated fleet",
            duration: "1 – 2 days",
            inclusions: "Chandeliers, safes, bespoke crating",
          },
        ]}
        priceLock={{
          title: "The Zain Movers Price-Lock Guarantee",
          body: "Our quotes always include everything: the packing materials, the dismantling, the transport, and the reassembly. The price we quote you after the survey is the final price.",
        }}
      >
        <p>
          We get this question a lot. The truth is, villa moving costs depend on
          the size of the house. Moving a 3-bedroom townhouse is very different
          from moving a fully furnished 6-bedroom luxury villa.
        </p>
        <p>
          Because of this, we do not give wild guesses over the phone. We offer
          a completely free pre-move survey. We will look at your furniture,
          check the distance to your new home, and give you an exact price.
        </p>
      </ServicePricing>

      <FAQSection
        faqs={FAQS}
        eyebrow="Got Questions?"
        heading="Frequently Asked Questions About Villa Moving"
        lede="Clear answers on surveys, scheduling, and handling high-value items."
      />

      <CTAWithForm
        eyebrow="Free Pre-Move Survey"
        heading="Book Your Free Villa Survey Today"
        description="Don't guess how much your move will cost or how long it will take. Contact us today to book a free survey, and let our experts handle the heavy lifting. Remember: you only pay when you are satisfied with the move."
        tone="light"
      />
    </>
  );
}
