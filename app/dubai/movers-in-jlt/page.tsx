import { BadgeCheck, MessageSquare, ShieldCheck, Truck, Users, Wallet } from "lucide-react";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import AreaHero from "@/components/dubai-area/AreaHero";
import AreaLogistics from "@/components/dubai-area/AreaLogistics";
import AreaWhyChoose from "@/components/dubai-area/AreaWhyChoose";
import AreaServices from "@/components/dubai-area/AreaServices";
import AreaPricing from "@/components/dubai-area/AreaPricing";
import ProcessSteps from "@/components/shared/ProcessSteps";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQSection, { type Faq } from "@/components/shared/FAQSection";
import { CTAWithForm } from "@/components/shared/CTASection";
import { MetadataTemplate } from "@/lib/MetadataTemplate";
import { generateServiceSchema, jsonLdProps } from "@/lib/Schema";

const PATH = "/dubai/movers-in-jlt";

export const metadata = MetadataTemplate({
  title: "Movers in JLT Dubai | Apartment & Office Moves, NOC Help",
  desc: "Movers in Jumeirah Lake Towers (JLT) for high-rise apartments and offices. We sort NOCs and security passes for you. Pay only when satisfied.",
  path: PATH,
  image: {
    path: "/sub-locations/movers-in-jlt-basement-loading-bay.jpg",
    alt: "Zain Movers crew loading a moving truck in a JLT basement loading bay",
  },
});

const FAQS: Faq[] = [
  {
    question: "Do I need a moving permit from DMCC for JLT?",
    answer: (
      <p>
        Yes. Moving in or out of Jumeirah Lake Towers requires a permit from the
        building&apos;s facility management, and often approval through the
        Concordia/DMCC system. We will provide our valid trade licence and staff
        IDs instantly so you can get your permit approved quickly.
      </p>
    ),
  },
  {
    question: "Are your moving trucks allowed in JLT basement parking?",
    answer: (
      <p>
        Yes. JLT clusters have specific height restrictions for vehicles
        entering the basement loading bays. We operate a fleet of moving trucks
        in JLT that are specifically sized to access these underground loading
        areas legally and safely.
      </p>
    ),
  },
  {
    question: "Do you handle office IT equipment and server relocation in JLT?",
    answer: (
      <p>
        Yes. Our commercial movers are trained to carefully pack and transport
        sensitive IT equipment, desktop computers, and modular office desks to
        ensure your business is ready to plug in and work the next day.
      </p>
    ),
  },
];

export default function MoversInJltPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          generateServiceSchema({
            name: "Moving Services JLT",
            description:
              "Expert movers and packers in Jumeirah Lake Towers handling high-rise apartment relocations and corporate office moves across the DMCC clusters.",
            path: PATH,
            areaServed: ["Jumeirah Lake Towers", "Dubai"],
          }),
        )}
      />

      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Dubai", href: "/#coverage" },
          { name: "Jumeirah Lake Towers", href: PATH },
        ]}
      />

      <AreaHero
        eyebrow="Residential & Corporate Movers in the DMCC Clusters"
        title="Movers and Packers in JLT"
        intro="Moving in Jumeirah Lake Towers (JLT) comes with unique logistical challenges. From navigating the specific A to Z clusters to dealing with underground parking height restrictions for moving trucks, you need a relocation company in JLT that understands how DMCC buildings operate."
        badges={[
          {
            label: "Licensed Company",
            sub: "Required by DMCC to grant your moving permit",
            icon: BadgeCheck,
          },
          {
            label: "Fully Insured",
            sub: "Home and office items covered in transport",
            icon: ShieldCheck,
          },
          {
            label: "Pay Upon Satisfaction",
            sub: "We do not take upfront deposits",
            icon: Wallet,
          },
          {
            label: "Our Own Staff & Trucks",
            sub: "No unknown day laborers",
            icon: Users,
          },
        ]}
        crewTitle="JLT Moving Crew"
        crewMeta="Residential and commercial moves across the clusters"
        compliance={[
          "Official UAE commercial trade licence",
          "Goods-in-transit cargo insurance",
        ]}
        imageSrc="/sub-locations/movers-in-jlt-basement-loading-bay.jpg"
        imageAlt="Zain Movers crew loading a moving truck in a JLT basement loading bay"
        imageLabel="JLT loading bay"
      />

      <AreaLogistics
        title="A Team That Understands How DMCC Buildings Operate"
        proofImages={[
          {
            src: "/sub-locations/jlt-heavy-duty-cartons-bubble-wrap.jpg",
            alt: "Heavy-duty carton boxes and bubble wrap prepared for a JLT apartment move",
            label: "Carton boxes & bubble wrap",
            caption: "Heavy-Duty Cartons and Protective Bubble Wrap",
            sub: "So fragile items and electronics survive the service elevator journey",
          },
          {
            src: "/sub-locations/jlt-it-equipment-modular-office-furniture.jpg",
            alt: "IT equipment and modular office furniture packed for a JLT office move",
            label: "IT equipment packing",
            caption: "IT Equipment and Modular Office Furniture",
            sub: "Packed, dismantled and moved with zero business downtime",
          },
        ]}
      >
        <p>
          We are a professional moving company in JLT with years of experience
          handling both residential and commercial moves. Whether you are
          shifting a high-rise apartment in Cluster Q or relocating an entire
          corporate office in Cluster M, our team is equipped to manage it.
        </p>
        <p>
          We provide the boxes, handle all the heavy lifting, dismantle your
          furniture, and transport everything securely. And to give you total
          peace of mind, you do not pay us a single dirham until you are 100%
          satisfied with the setup in your new location.
        </p>
      </AreaLogistics>

      <AreaServices
        title="Moving and Packing Services in JLT"
        lede="We offer a full suite of packing and moving services in JLT tailored for both professionals living in the towers and businesses operating in the free zone."
        services={[
          {
            title: "Apartment & Studio Movers",
            body: "JLT is heavily populated with high-rise residential towers. We act as expert apartment movers in JLT, handling everything from studio moving to 1 BHK, 2 BHK, and 3 BHK apartment relocations. We use heavy-duty carton boxes and protective bubble wrap to ensure your fragile items and electronics survive the service elevator journey safely.",
            link: "/services/house-movers-dubai",
          },
          {
            title: "Office & Commercial Movers",
            body: "Because JLT is a massive business hub, office relocation in JLT is one of our most requested services. We provide professional commercial movers in JLT to pack your IT equipment, dismantle modular office furniture, and securely move your filing cabinets. We offer weekend moving services so your business experiences zero downtime.",
            link: "/services/office-movers-dubai",
          },
          {
            title: "Furniture Moving & Packing Services",
            body: "If you just bought a new bed or need to move a large sofa from another cluster, we offer single item movers in JLT. Our furniture moving services in JLT include expert carpenters who handle furniture disassembly and reassembly. We also provide full and partial packing services to save you time.",
            link: "/services/furniture-movers-dubai",
          },
        ]}
      />

      <AreaWhyChoose
        title="Why Choose Zain Movers and Packers in JLT"
        lede="When you search for local movers near me in JLT, you want a team that is professional, careful, and honest. Here is why residents and businesses choose us:"
        points={[
          {
            title: "Official UAE Commercial Trade License",
            body: "We are fully licensed, which is required by DMCC building managements to grant you a moving permit.",
          },
          {
            title: "Goods-in-Transit Cargo Insurance",
            body: "Your valuable home or office items are fully insured during transport.",
          },
          {
            title: "Pay Upon 100% Satisfaction",
            body: "We do not take upfront deposits. You pay only when the furniture is built and you are happy.",
          },
          {
            title: "Direct Handling",
            body: "We use our own trained staff and trucks. We do not use unknown day laborers.",
          },
          {
            title: "Familiar with JLT Clusters",
            body: "We know the basement height limits and loading bay rules for JLT clusters, avoiding moving day delays.",
          },
        ]}
      />

      <AreaPricing
        title="Movers and Packers Cost in JLT"
        lede="We believe in transparent pricing. As an affordable moving company in JLT, we give you a fixed price upfront. You will never see hidden charges for packing tape, stairs, or long walks through the basement parking."
        rows={[
          { property: "Studio / 1 BHK Moving Cost", price: "AED 800 – AED 1,200" },
          { property: "2 BHK Moving Cost", price: "AED 1,300 – AED 1,800" },
          {
            property: "3 BHK / Office Moving Cost",
            price: "Custom fixed quote based on size",
          },
        ]}
        note="A general guide to moving prices in JLT. The final cost is determined by your exact volume of items."
      />

      <section className="bg-secondary">
        <div className="wrap band">
          <SectionHeading
            eyebrow="Instant Quote"
            title="How To Get A Moving Quote in JLT"
            lede="Getting a free moving estimate in JLT is incredibly fast and completely free."
            align="center"
          />
          <ProcessSteps
            className="mt-12"
            steps={[
              {
                title: "Send a Short Video",
                description:
                  "Just take a short video of your apartment or office on your phone and send it to us on WhatsApp.",
                icon: MessageSquare,
              },
              {
                title: "We Evaluate the Volume",
                description:
                  "Our team will instantly evaluate the volume of furniture and determine how many boxes you need.",
                icon: Truck,
              },
              {
                title: "Get a Fixed Quote",
                description:
                  "We send back a fixed moving quote. Once you say yes, we handle the rest.",
                icon: BadgeCheck,
              },
            ]}
          />
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        eyebrow="JLT Specifics"
        heading="Frequently Asked Questions"
        lede="Permits, basement access, and IT handling for relocations inside Jumeirah Lake Towers."
      />

      <CTAWithForm
        eyebrow="Free Moving Quote"
        heading="Get A Free Moving Quote For JLT Today"
        description="Do not risk your expensive furniture with unregistered movers. Let our professional, fully licensed team handle your JLT relocation safely. Remember: pay only when you are completely satisfied with the job."
        tone="light"
      />
    </>
  );
}
