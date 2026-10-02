import {
  Banknote,
  ClipboardList,
  FileCheck2,
  MonitorSmartphone,
  ShieldCheck,
  Tags,
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

const PATH = "/services/office-movers-dubai";

export const metadata = MetadataTemplate({
  title: "Office Movers in Dubai | Commercial Relocation Services",
  desc: "Expert office movers in Dubai. We offer after-hours and weekend moves for zero business downtime. Fully insured. Pay upon satisfaction. Get a free quote.",
  path: PATH,
  image: {
    path: "/services/office-movers-dubai-wrapping-monitors.jpg",
    alt: "Zain Movers crew wrapping office monitors and workstations during an office relocation in Dubai",
  },
});

const FAQS: Faq[] = [
  {
    question: "Do you work on weekends and public holidays?",
    answer: (
      <p>
        Yes, absolutely. The best time to move an office is during the weekend
        or over a public holiday to ensure a zero downtime move. We operate 24/7
        for commercial clients.
      </p>
    ),
  },
  {
    question: "How do you pack computers and monitors?",
    answer: (
      <p>
        We use specialised thick carton boxes and anti-static bubble wrap for IT
        equipment. We also ensure that keyboards, mice, and specific cables stay
        with their matching monitors and towers.
      </p>
    ),
  },
  {
    question: "Can you help with building management NOCs?",
    answer: (
      <p>
        Yes. Almost all office buildings in Dubai require an NOC for moving in
        or out. We will provide our valid trade licence, insurance papers, and
        staff IDs to help you secure the permit quickly.
      </p>
    ),
  },
  {
    question: "Do you dismantle and assemble office cubicles?",
    answer: (
      <p>
        Yes. Our handymen are trained to dismantle and rebuild all types of
        office furniture, including modular cubicles, executive desks, and large
        meeting tables.
      </p>
    ),
  },
  {
    question: "Is our office equipment insured during the move?",
    answer: (
      <p>
        Yes. Zain Movers is a fully insured moving company. Your expensive IT
        equipment and office furniture are protected from the moment we start
        packing until we set them up in the new location.
      </p>
    ),
  },
];

export default function OfficeMoversDubaiPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          generateServiceSchema({
            name: "Office Movers and Commercial Relocation",
            description:
              "Expert office movers in Dubai offering after-hours and weekend commercial relocation, IT and server moves, and workstation reassembly with zero business downtime.",
            path: PATH,
          }),
        )}
      />

      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#services" },
          { name: "Office Movers in Dubai", href: PATH },
        ]}
      />

      <ServiceHero
        eyebrow="Licensed & Insured Commercial Movers"
        title="Office Movers in Dubai"
        subtitle="Professional commercial relocation. We move your office over the weekend so your team can get straight to work on Monday morning."
        primaryCta="Book a Free Office Survey"
        badges={[
          { label: "Licensed Company", sub: "Licensed and registered moving company" },
          { label: "Zero Downtime Moves", sub: "Weekend & overnight windows" },
          { label: "Fully Insured", sub: "IT assets covered end to end" },
        ]}
        imageSrc="/services/office-movers-dubai-wrapping-monitors.jpg"
        imageAlt="Zain Movers crew wrapping office monitors and workstations during an office relocation in Dubai"
        imageLabel="Commercial relocation crew — Dubai"
        captionTitle="Corporate Relocation Division"
        captionMeta="After-Hours Dispatch"
      />

      <ServiceIntro
        eyebrow="Business Continuity First"
        title="Fast and Organized Office Movers in Dubai"
        imageSrc="/services/server-rack-anti-static-packing-dubai.jpg"
        imageAlt="Anti-static packing being applied to a server rack before transport by Zain Movers in Dubai"
        imageLabel="Server rack anti-static packing"
        spec={{
          title: "Anti-Static IT Handling",
          body: "Thick anti-static bubble wrap and custom heavy-duty boxes for monitors, desktop towers, and server racks — with every cable tied and labelled against its matching machine.",
        }}
        checklist={[
          "Weekend & overnight scheduling",
          "Building NOC documentation supplied",
          "Floor-plan tagging system",
          "Formal written quotation for finance",
        ]}
      >
        <p>
          Moving an office is completely different from moving a house. If your
          business stops running, you lose money. Time is critical, and
          organisation is everything.
        </p>
        <p>
          As experienced office movers in Dubai, we understand this. We focus on
          speed, safety, and strict planning. Our goal is simple: we handle the
          entire commercial relocation so your staff does not lose a single hour
          of productivity.
        </p>
        <p>
          Whether you are moving a small startup out of a shared workspace or
          relocating a massive corporate headquarters in Business Bay, we have
          the team and the trucks to get it done fast.
        </p>
      </ServiceIntro>

      <ServiceTiers
        eyebrow="Commercial Scope"
        title="Complete Commercial Relocation Services"
        lede="Offices have expensive equipment and sensitive documents. You cannot just throw these items into a box — here is how we handle the specific needs of a business move."
        tiers={[
          {
            kind: "IT",
            title: "IT Equipment and Server Relocation",
            turnaround: "Anti-static protocol",
            description:
              "Computers are the heart of your business. We use thick bubble wrap, anti-static materials, and custom heavy-duty boxes to pack monitors, desktop towers, and server racks safely. We keep all cables tied and labelled with their correct machines.",
          },
          {
            kind: "Furniture",
            title: "Workstations and Office Furniture",
            turnaround: "Handyman-led rebuild",
            description:
              "Moving 50 desks is a big job. Our handymen quickly dismantle office cubicles, L-shaped desks, and heavy boardroom tables. We wrap the pieces securely to prevent scratches, transport them, and reassemble them perfectly in your new office.",
          },
          {
            kind: "Records",
            title: "Documents and Files",
            turnaround: "Department-level indexing",
            description:
              "Important files cannot get mixed up. We pack filing cabinets and document folders in a highly organised way. We label every box clearly so your accounting team or HR department can find their specific files the moment they walk into the new office.",
          },
        ]}
      />

      <section className="bg-secondary">
        <div className="wrap band">
          <SectionHeading
            eyebrow="Step-by-Step Logistics"
            title="How We Achieve a Zero Downtime Move"
            lede="Among all the relocation companies in Dubai, we pride ourselves on preventing chaos. Here is our step-by-step process for a smooth office move."
            align="center"
          />
          <ProcessSteps
            className="mt-12"
            steps={[
              {
                title: "Site Survey and Planning",
                description:
                  "We visit your current office and the new location. We check the loading bays, service elevators, and the layout. Then we create a clear moving plan and give you a fixed quote.",
                note: "Formal written quotation",
                icon: ClipboardList,
              },
              {
                title: "Tagging and Labelling",
                description:
                  "We don't just guess where things go. We use a strict tagging system. Every desk, chair, computer, and box gets a label corresponding to a specific floor plan in your new office.",
                note: "Floor-plan coded",
                icon: Tags,
              },
              {
                title: "After-Hours Moving",
                description:
                  "To prevent business interruption, we do the heavy lifting when your staff is home. We usually start packing on Friday evening and work through the weekend, or we do overnight after-hours moving.",
                note: "24/7 commercial dispatch",
                icon: Truck,
              },
              {
                title: "Setup and Unpacking",
                description:
                  "When Monday morning arrives, your new office is ready. The desks are built, the computers are on the right tables, and the empty boxes are gone. Your team just sits down and starts working.",
                note: "Sign-off on completion",
                icon: MonitorSmartphone,
              },
            ]}
          />
        </div>
      </section>

      <WhyChooseService
        eyebrow="Why Businesses Trust Us"
        title="Why Businesses Trust Zain Movers"
        lede="Corporate moves require a professional approach. Here is why businesses choose us as their Dubai office movers."
        guarantee={{
          title: "Fixed Budget Commitment",
          body: "Business budgets are fixed. The price we quote you after our site survey is the exact price you will see on the final invoice.",
        }}
        benefits={[
          {
            icon: Wallet,
            title: "Pay Upon Satisfaction",
            body: "We know corporate finance can be strict with advance deposits. With us, you pay the final invoice only after the move is complete and your office manager signs off on the job.",
          },
          {
            icon: FileCheck2,
            title: "Building NOC Experience",
            body: "Commercial buildings in Dubai have strict rules. We provide all our trade licences, vehicle details, and team documents so you can easily get your moving NOC from building management.",
          },
          {
            icon: ShieldCheck,
            title: "Fully Insured",
            body: "You are moving expensive company assets. We are a fully licensed and insured moving company, meaning your IT equipment and furniture are protected against damage.",
          },
          {
            icon: Banknote,
            title: "No Hidden Fees",
            body: "Business budgets are fixed. The price we quote you after our site survey is the exact price you will see on the final invoice.",
          },
        ]}
      />

      <ServicePricing
        title="How Much Do Office Movers Dubai Charge?"
        lede="Commercial rates scale with headcount, IT volume, and building access. Every figure below is confirmed in a formal written quotation after a free site survey."
        rows={[
          {
            property: "Small Office (up to 10 desks)",
            price: "AED 1,800 – AED 2,800",
            team: "4–6 movers / 1–2 trucks",
            duration: "6 – 8 hours",
            inclusions: "Desk rebuild, IT packing, labelling",
          },
          {
            property: "Mid Office (10 – 30 desks)",
            price: "AED 3,000 – AED 6,500",
            team: "8–12 movers / 2–3 trucks",
            duration: "Overnight or weekend",
            inclusions: "Cubicle dismantle, cable indexing",
          },
          {
            property: "Large Office (30 – 60 desks)",
            price: "AED 7,000 – AED 12,000",
            team: "12–18 movers / dedicated fleet",
            duration: "Full weekend window",
            inclusions: "Server room, records, floor-plan setup",
          },
          {
            property: "Corporate HQ (60+ desks)",
            price: "Custom Fixed Quote",
            team: "Project team & move manager",
            duration: "Phased weekend schedule",
            inclusions: "NOC handling, phased departmental moves",
          },
        ]}
        priceLock={{
          title: "The Zain Movers Price-Lock Guarantee",
          body: "Business budgets are fixed. The price we quote you after our site survey is the exact price you will see on the final invoice.",
        }}
      >
        <p>
          The cost of an office move depends on how many staff members you have,
          the amount of IT equipment, and the furniture volume.
        </p>
        <p>
          Because every business is different, we do not give rough estimates
          over the phone for commercial moves. We will send a manager to your
          office for a free site survey, assess the volume, check the building
          access, and provide a formal, written quotation for your finance
          department to review.
        </p>
      </ServicePricing>

      <FAQSection
        faqs={FAQS}
        eyebrow="Got Questions?"
        heading="Frequently Asked Questions About Office Moving"
        lede="Clear answers on scheduling, IT handling, and building permits across Dubai."
      />

      <CTAWithForm
        eyebrow="Free Site Survey"
        heading="Ready to Move Your Office?"
        description="Do not let an office move disrupt your business. Trust the experts to handle it quickly, safely, and professionally. Remember: you only pay when you are satisfied with the move."
        tone="light"
      />
    </>
  );
}
