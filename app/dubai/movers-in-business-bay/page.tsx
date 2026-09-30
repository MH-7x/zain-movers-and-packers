import { BadgeCheck, Briefcase, MessageSquare, ShieldCheck, Truck, Wallet } from "lucide-react";

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

const PATH = "/dubai/movers-in-business-bay";

export const metadata = MetadataTemplate({
  title: "Movers in Business Bay | Zain Movers and Packers Dubai",
  desc: "Professional movers and packers in Business Bay Dubai. We specialize in corporate office relocations and high-rise apartment moving. Pay upon satisfaction.",
  path: PATH,
  image: {
    path: "/og/movers-in-business-bay.jpg",
    alt: "Zain Movers crew packing office equipment in a Business Bay tower",
  },
});

const FAQS: Faq[] = [
  {
    question: "Do I need a building NOC to move in Business Bay?",
    answer: (
      <p>
        Yes. Almost all residential and commercial towers in Business Bay
        require a Move-In/Move-Out Permit from the building management. We
        provide our valid trade licence and vehicle registration instantly so
        you can get your permit approved quickly.
      </p>
    ),
  },
  {
    question: "Can you safely move office IT equipment and servers?",
    answer: (
      <p>
        Yes. Our commercial movers in Business Bay are trained to handle
        sensitive electronics. We use heavy-duty bubble wrap and secure packing
        boxes to ensure your computers, monitors, and servers are transported
        safely.
      </p>
    ),
  },
  {
    question: "Do you offer weekend moving for businesses?",
    answer: (
      <p>
        Yes. We understand that business relocation in Business Bay needs to
        happen without disrupting your operations. We offer weekend, evening,
        and overnight moving services to ensure your office is ready for work
        the next morning.
      </p>
    ),
  },
];

export default function MoversInBusinessBayPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          generateServiceSchema({
            name: "Moving Services Business Bay",
            description:
              "Professional movers and packers in Business Bay Dubai specialising in corporate office relocations, server moves, and high-rise apartment moving.",
            path: PATH,
            areaServed: ["Business Bay", "Dubai"],
          }),
        )}
      />

      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Dubai", href: "/#coverage" },
          { name: "Business Bay", href: PATH },
        ]}
      />

      <AreaHero
        eyebrow="Corporate Office & High-Rise Apartment Movers"
        title="Movers and Packers in Business Bay"
        intro="Business Bay is the fast-paced corporate heart of Dubai, packed with towering office buildings and luxury high-rise apartments. Moving in this area requires serious logistical planning. You need a moving company that knows how to deal with heavy traffic, strict building management rules, and tight service elevator bookings."
        badges={[
          {
            label: "Licensed Company",
            sub: "We provide documents for your building NOC",
            icon: BadgeCheck,
          },
          {
            label: "Cargo Insured",
            sub: "Office equipment and home furniture covered",
            icon: ShieldCheck,
          },
          {
            label: "Pay Upon Satisfaction",
            sub: "We never ask for upfront deposits",
            icon: Wallet,
          },
          {
            label: "Corporate Experience",
            sub: "Minimising business downtime",
            icon: Briefcase,
          },
        ]}
        crewTitle="Business Bay Moving Crew"
        crewMeta="Corporate offices and canal-side residential towers"
        compliance={[
          "Official UAE commercial trade licence",
          "Goods-in-transit cargo insurance",
        ]}
        imageAlt="Zain Movers crew wrapping office furniture inside a Business Bay tower"
        imageLabel="Business Bay office relocation"
      />

      <AreaLogistics
        title="Serious Logistical Planning for a Fast-Paced District"
        proofImages={[
          {
            alt: "IT equipment packed into secure boxes for a Business Bay office move",
            label: "IT equipment packing",
            caption: "Delicate IT Equipment Packed Safely",
            sub: "Computers, monitors and servers in heavy-duty bubble wrap",
          },
          {
            alt: "Modular office desks being dismantled by carpenters in Business Bay",
            label: "Desk dismantling",
            caption: "Expert Carpenters On Every Office Move",
            sub: "Modular desks dismantled and reassembled",
          },
        ]}
      >
        <p>
          We are a highly experienced moving company in Business Bay. Whether
          you are relocating a corporate office across the district or moving
          your family into a 2 BHK apartment overlooking the canal, our team
          handles it all.
        </p>
        <p>
          We bring our own enclosed moving trucks, expert carpenters, and
          professional packing materials. We pack your delicate IT equipment and
          heavy furniture safely. And to give you total confidence in our work,
          you do not pay us a single dirham until the job is complete and you
          are totally satisfied.
        </p>
      </AreaLogistics>

      <AreaServices
        title="Moving and Packing Services in Business Bay"
        lede="We provide a complete range of packing and moving services in Business Bay, tailored specifically for corporate clients and high-rise residents."
        services={[
          {
            title: "Office & Commercial Movers",
            body: "Because this is a corporate hub, office relocation in Business Bay is one of our main specialties. We act as dedicated commercial office movers in Business Bay, handling everything from server relocation and IT equipment moving to dismantling modular office desks. We offer weekend and after-hours business relocation services so your company does not lose a single hour of working time.",
            link: "/services/office-movers-dubai",
          },
          {
            title: "Apartment & Tower Movers",
            body: "If you are moving into one of the residential towers, we provide fast and reliable apartment moving services in Business Bay. From studio moving to 3 bedroom apartment movers, we securely pack your fragile items, load them carefully into the service elevator, and transport them safely to your new home.",
            link: "/services/house-movers-dubai",
          },
          {
            title: "Furniture Moving & Packing Services",
            body: "Need to move a large conference table or buy a new sofa? We offer single item movers in Business Bay for heavy furniture delivery. We also provide professional packing and unpacking services. Our experienced carpenters will handle all furniture dismantling and assembly, ensuring your pieces remain sturdy and scratch-free.",
            link: "/services/furniture-movers-dubai",
          },
        ]}
      />

      <AreaWhyChoose
        title="Why Choose Zain Movers and Packers in Business Bay"
        lede="When searching for local movers in Business Bay, you need a team that is professional, punctual, and fully licensed. Here is why businesses and residents trust us:"
        points={[
          {
            title: "Official UAE Commercial Trade License",
            body: "We are a fully registered moving company, meaning we can easily provide documents for your building NOC.",
          },
          {
            title: "Goods-in-Transit Cargo Insurance",
            body: "Your expensive office equipment and home furniture are insured during transport.",
          },
          {
            title: "Pay Upon 100% Satisfaction",
            body: "We never ask for upfront deposits. You pay only when the furniture is built and you are happy.",
          },
          {
            title: "Direct and Safe Handling",
            body: "We use our own trained staff. We do not subcontract to unknown day laborers.",
          },
          {
            title: "Corporate Experience",
            body: "We understand how to protect commercial properties and minimize business downtime.",
          },
        ]}
      />

      <AreaPricing
        title="Movers and Packers Cost in Business Bay"
        lede="We believe in transparent pricing. We are an affordable moving company in Business Bay, and the price we quote you is the final price you pay. No hidden charges for parking delays or packing tape."
        rows={[
          { property: "Studio / 1 BHK Moving Cost", price: "AED 800 – AED 1,200" },
          { property: "2 BHK / 3 BHK Apartment", price: "AED 1,300 – AED 2,000" },
          {
            property: "Office Moving Cost",
            price: "Custom fixed quote",
          },
        ]}
        note="Estimated moving prices in Business Bay — the final cost depends on inventory volume. Office moves are quoted on the number of desks and IT equipment."
      />

      <section className="bg-secondary">
        <div className="wrap band">
          <SectionHeading
            eyebrow="Instant Quote"
            title="How To Get A Moving Quote in Business Bay"
            lede="Getting a free moving estimate in Business Bay is incredibly fast."
            align="center"
          />
          <ProcessSteps
            className="mt-12"
            steps={[
              {
                title: "Send a Video",
                description:
                  "For residential moves, simply send a video of your apartment on WhatsApp showing the furniture that needs moving.",
                icon: MessageSquare,
              },
              {
                title: "Or Request a Site Survey",
                description:
                  "For office relocations, send us a video or request a quick on-site survey.",
                icon: Briefcase,
              },
              {
                title: "Get a Fixed Quote Instantly",
                description:
                  "We will calculate the truck space and packing materials required, and instantly provide a fixed moving quote.",
                icon: Truck,
              },
            ]}
          />
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        eyebrow="Business Bay Specifics"
        heading="Frequently Asked Questions"
        lede="Permits, IT handling, and weekend scheduling across the business district."
      />

      <CTAWithForm
        eyebrow="Free Moving Quote"
        heading="Get A Free Moving Quote For Business Bay Today"
        description="Stop stressing over service elevators and packing boxes. Let our professional, fully licensed team handle your home or office relocation safely. Remember: pay only when you are completely satisfied with the job."
        tone="light"
      />
    </>
  );
}
