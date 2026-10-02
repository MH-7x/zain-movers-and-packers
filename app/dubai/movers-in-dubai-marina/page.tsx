import {
  BadgeCheck,
  MessageSquare,
  ShieldCheck,
  Truck,
  Users,
  Wallet,
} from "lucide-react";

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

const PATH = "/dubai/movers-in-dubai-marina";

export const metadata = MetadataTemplate({
  title: "Movers in Dubai Marina | Zain Movers and Packers",
  desc: "Professional movers and packers in Dubai Marina. We handle high-rise apartments and penthouses. No hidden fees. Pay upon satisfaction.",
  path: PATH,
  image: {
    path: "/sub-locations/movers-in-dubai-marina-apartment-relocation.jpg",
    alt: "Zain Movers crew wrapping furniture inside a Dubai Marina apartment",
  },
});

const FAQS: Faq[] = [
  {
    question: "Do I need a building NOC to move in Dubai Marina?",
    answer: (
      <p>
        Yes. Almost all towers in Dubai Marina require a Move-In/Move-Out Permit
        (NOC) from the building management. You will need our trade licence and
        vehicle registration to get this permit, which we will provide to you
        immediately upon booking.
      </p>
    ),
  },
  {
    question: "Can you handle short term storage in Dubai Marina?",
    answer: (
      <p>
        Yes. If your new apartment is not ready yet, we offer safe,
        climate-controlled temporary storage solutions. We can pack your items,
        store them securely, and deliver them when you get your keys.
      </p>
    ),
  },
  {
    question: "Do you provide the packing boxes?",
    answer: (
      <p>
        Yes, our packing and moving services include all necessary materials. We
        bring high-quality carton boxes, wardrobe boxes, stretch film, and
        bubble wrap.
      </p>
    ),
  },
];

export default function MoversInDubaiMarinaPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          generateServiceSchema({
            name: "Moving Services Dubai Marina",
            description:
              "Movers and packers in Dubai Marina offering high-rise apartment moving, penthouse relocation, packing services, and office relocation with no hidden fees.",
            path: PATH,
            areaServed: ["Dubai Marina", "Dubai"],
          }),
        )}
      />

      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Dubai", href: "/#coverage" },
          { name: "Dubai Marina", href: PATH },
        ]}
      />

      <AreaHero
        eyebrow="High-Rise Apartment & Penthouse Movers"
        title="Movers and Packers in Dubai Marina"
        intro="Moving in Dubai Marina is not like moving anywhere else in the city. With high-rise towers, strict building management rules, and tight service elevator schedules, you need a moving company that actually knows the area."
        badges={[
          {
            label: "Licensed Company",
            sub: "Official UAE commercial trade licence",
            icon: BadgeCheck,
          },
          {
            label: "Cargo Insured",
            sub: "Goods-in-transit cover during transport",
            icon: ShieldCheck,
          },
          {
            label: "Pay Upon Satisfaction",
            sub: "We do not take upfront deposits",
            icon: Wallet,
          },
          {
            label: "Our Own Staff & Trucks",
            sub: "Never subcontracted",
            icon: Users,
          },
        ]}
        crewTitle="Dubai Marina Moving Crew"
        crewMeta="Apartment and penthouse relocations across the Marina"
        compliance={[
          "Official UAE commercial trade licence",
          "Goods-in-transit cargo insurance",
        ]}
        imageSrc="/sub-locations/movers-in-dubai-marina-apartment-relocation.jpg"
        imageAlt="Zain Movers crew wrapping furniture inside a Dubai Marina apartment"
        imageLabel="Marina apartment relocation"
      />

      <AreaLogistics
        title="A Moving Company That Actually Knows the Marina"
        proofImages={[
          {
            src: "/sub-locations/dubai-marina-heavy-duty-cartons-bubble-wrap.jpg",
            alt: "Heavy-duty carton boxes and bubble wrap prepared for a Marina apartment move",
            label: "Carton boxes & bubble wrap",
            caption: "Heavy-Duty Cartons and Bubble Wrap",
            sub: "Packed to travel down the service elevators without damaging building walls",
          },
          {
            src: "/sub-locations/dubai-marina-carpenter-dismantling-wardrobe.jpg",
            alt: "Carpenter dismantling a wardrobe inside a Dubai Marina apartment",
            label: "Carpenter dismantling wardrobe",
            caption: "Carpenter Dismantling and Reassembly",
            sub: "Beds, wardrobes and modular furniture",
          },
        ]}
      >
        <p>
          We have been handling apartment and penthouse moves across Dubai
          Marina for years. Whether you are relocating into a 1 BHK near Marina
          Walk or shifting a massive penthouse overlooking the water, our team
          knows exactly how to navigate the basements, parking restrictions, and
          Emaar community rules.
        </p>
        <p>
          We bring our own enclosed moving trucks and handle the entire process
          from packing to reassembly. And the best part? You do not pay us a
          single dirham until you are completely satisfied with the job.
        </p>
      </AreaLogistics>

      <AreaServices
        title="Moving and Packing Services in Dubai Marina"
        lede="We offer a complete range of moving and packing services in Dubai Marina, tailored to the specific needs of high-rise living."
        services={[
          {
            title: "Apartment & Studio Movers",
            body: "Most of our work in the Marina involves high-rise apartment movers. We regularly handle studio moving, 1 BHK, 2 BHK, and 3 BHK apartment relocations. We bring heavy-duty carton boxes and bubble wrap to safely pack your belongings and transport them down the service elevators without damaging the building walls.",
            link: "/services/house-movers-dubai",
          },
          {
            title: "Villa & Penthouse Relocation",
            body: "If you are moving into a luxury penthouse or one of the podium-level villas, we provide dedicated villa movers and packers in Dubai Marina. We send a larger team to ensure the move is completed in a single day, handling your expensive furniture with extreme care.",
            link: "/services/villa-movers-dubai",
          },
          {
            title: "Office & Commercial Movers",
            body: "For businesses operating in the Marina or nearby commercial towers, we offer fast and professional office relocation services. We can schedule your business relocation on weekends or after hours to ensure zero downtime for your company.",
            link: "/services/office-movers-dubai",
          },
          {
            title: "Furniture Moving & Packing Services",
            body: "Sometimes you do not need to move an entire house. If you just need single item movers in Dubai Marina to transport a heavy sofa, or need professional packing and unpacking services for fragile items, we have you covered. Our carpenters expertly dismantle and reassemble your beds, wardrobes, and modular furniture.",
            link: "/services/furniture-movers-dubai",
          },
        ]}
      />

      <AreaWhyChoose
        title="Why Choose Zain Movers and Packers in Dubai Marina"
        lede="You have plenty of options when searching for a relocation company in Dubai Marina, but finding trusted movers is harder. Here is why residents choose us:"
        points={[
          {
            title: "Official UAE Commercial Trade License",
            body: "We are a fully registered and legal moving company.",
          },
          {
            title: "Goods-in-Transit Cargo Insurance",
            body: "Your belongings are insured during transport for total peace of mind and safety.",
          },
          {
            title: "Pay Upon 100% Satisfaction",
            body: "We do not take upfront deposits. You pay only when the job is done and you are happy.",
          },
          {
            title: "Direct Handling",
            body: "We use our own trained staff and branded trucks, never subcontracting to unknown street laborers.",
          },
          {
            title: "Familiar with Marina Rules",
            body: "We know how to deal with building security and tight loading bays.",
          },
        ]}
      />

      <AreaPricing
        title="Movers and Packers Cost in Dubai Marina"
        lede="We believe in being an affordable moving company with 100% transparent pricing. The price we quote on WhatsApp is the final price you pay. No hidden charges for stairs, packing tape, or long carrying distances."
        rows={[
          {
            property: "Studio / 1 BHK Moving Cost",
            price: "AED 800 – AED 1,200",
          },
          { property: "2 BHK Moving Cost", price: "AED 1,300 – AED 1,800" },
          {
            property: "3 BHK / Penthouse",
            price: "Custom fixed quote based on size",
          },
        ]}
        note="Here are estimated moving prices in Dubai Marina — the final cost depends on your exact furniture volume."
      />

      <section className="bg-secondary">
        <div className="wrap band">
          <SectionHeading
            eyebrow="Instant Quote"
            title="How To Get A Moving Quote in Dubai Marina"
            lede="Getting a free moving estimate in Dubai Marina is simple and fast. You do not have to wait days for a survey."
            align="center"
          />
          <ProcessSteps
            className="mt-12"
            steps={[
              {
                title: "Send a Video on WhatsApp",
                description:
                  "Just send us a quick video of your rooms on WhatsApp. Show us what needs to be packed and moved.",
                icon: MessageSquare,
              },
              {
                title: "Get an Instant Fixed Quote",
                description:
                  "Within minutes, our team will reply with a fixed, instant moving quote.",
                icon: BadgeCheck,
              },
              {
                title: "We Book Your Date",
                description:
                  "Once you agree to the price, we book your date and handle the rest.",
                icon: Truck,
              },
            ]}
          />
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        eyebrow="Marina Specifics"
        heading="Frequently Asked Questions"
        lede="Building permits, storage, and materials for relocations inside Dubai Marina."
      />

      <CTAWithForm
        eyebrow="Free Moving Quote"
        heading="Get A Free Moving Quote For Dubai Marina Today"
        description="Stop stressing about service elevator bookings and packing heavy furniture. Let our professional team handle your relocation safely and affordably. Remember: pay only when you are completely satisfied with the job."
        tone="light"
      />
    </>
  );
}
