import { BadgeCheck, FileCheck2, MessageSquare, ShieldCheck, Truck, Wallet } from "lucide-react";

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

const PATH = "/dubai/movers-in-palm-jumeirah";

export const metadata = MetadataTemplate({
  title: "Movers in Palm Jumeirah | Zain Movers and Packers",
  desc: "Expert movers and packers in Palm Jumeirah. We provide luxury villa moving, fine art packing, and apartment relocations securely. Pay upon satisfaction.",
  path: PATH,
  image: {
    path: "/sub-locations/movers-in-palm-jumeirah-villa-relocation.jpg",
    alt: "Zain Movers crew wrapping a mirror inside a Palm Jumeirah villa",
  },
});

const FAQS: Faq[] = [
  {
    question:
      "Do I need a special access pass for moving trucks on Palm Jumeirah?",
    answer: (
      <p>
        Yes. Nakheel security requires a move-in/move-out permit, and moving
        trucks need gate access passes to enter the fronds. We provide our
        company trade licence, driver details, and vehicle registration numbers
        so you can process these permits smoothly.
      </p>
    ),
  },
  {
    question: "How do you protect expensive furniture and fragile items?",
    answer: (
      <p>
        We use export-quality packing materials. This includes multi-layer
        bubble wrap, thick corrugated cardboard sheets, stretch film, and
        heavy-duty moving blankets. For highly valuable or fragile items, we
        provide custom packing to ensure zero damage.
      </p>
    ),
  },
  {
    question: "Can you dismantle and reassemble my custom-built wardrobes?",
    answer: (
      <p>
        Yes. Our moving teams include expert carpenters who specialise in
        furniture dismantling and assembly. We safely take apart custom
        wardrobes, large beds, and dining sets, and rebuild them perfectly in
        your new home.
      </p>
    ),
  },
];

export default function MoversInPalmJumeirahPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          generateServiceSchema({
            name: "Moving Services Palm Jumeirah",
            description:
              "Expert movers and packers in Palm Jumeirah providing luxury frond villa moving, fine art and antique crating, and shoreline apartment relocations.",
            path: PATH,
            areaServed: ["Palm Jumeirah", "Dubai"],
          }),
        )}
      />

      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Dubai", href: "/#coverage" },
          { name: "Palm Jumeirah", href: PATH },
        ]}
      />

      <AreaHero
        eyebrow="Luxury Villa & Fine Art Movers"
        title="Movers and Packers in Palm Jumeirah"
        intro="Palm Jumeirah is one of Dubai's most exclusive neighborhoods, featuring luxury frond villas, shoreline apartments, and high-end hotels. Moving here requires a team that understands strict security protocols, Nakheel community rules, and how to handle highly valuable, fragile furniture with extreme care."
        badges={[
          {
            label: "Licensed Company",
            sub: "Legally authorised to operate inside the Palm",
            icon: BadgeCheck,
          },
          {
            label: "Cargo Insured",
            sub: "Belongings, fine art and electronics covered",
            icon: ShieldCheck,
          },
          {
            label: "Pay Upon Satisfaction",
            sub: "We do not ask for hostage fees",
            icon: Wallet,
          },
          {
            label: "Nakheel Permit Assistance",
            sub: "Documents for your access pass",
            icon: FileCheck2,
          },
        ]}
        crewTitle="Palm Jumeirah Moving Crew"
        crewMeta="Frond villas, shoreline apartments and penthouses"
        compliance={[
          "Official UAE commercial trade licence",
          "Goods-in-transit cargo insurance",
        ]}
        imageSrc="/sub-locations/movers-in-palm-jumeirah-villa-relocation.jpg"
        imageAlt="Zain Movers crew wrapping a mirror inside a Palm Jumeirah villa"
        imageLabel="Palm Jumeirah villa relocation"
      />

      <AreaLogistics
        title="Serving the Island's Residents With Discretion"
        proofImages={[
          {
            src: "/sub-locations/palm-jumeirah-custom-crating-mirror.jpg",
            alt: "Custom crating built around a large mirror for a Palm Jumeirah move",
            label: "Custom crating",
            caption: "Custom Crating and Heavy-Duty Bubble Wrapping",
            sub: "For fragile items, large mirrors, antiques and chandeliers",
          },
          {
            src: "/sub-locations/palm-jumeirah-premium-packing-materials.jpg",
            alt: "Premium packing materials laid out before a Palm Jumeirah villa move",
            label: "Premium packing materials",
            caption: "Premium Packing Materials",
            sub: "Protecting fine art, antiques and heavy custom furniture",
          },
        ]}
      >
        <p>
          We are a trusted relocation company in Palm Jumeirah with years of
          experience serving the island&apos;s residents. Whether you are moving
          into a luxury frond villa or relocating a high-rise apartment on the
          trunk, we manage the entire logistics process.
        </p>
        <p>
          Our team uses premium packing materials to protect your fine art,
          antiques, and heavy custom furniture. And because we respect your
          privacy and trust, you do not pay us any upfront deposits. You pay
          only when your new home is perfectly set up and you are completely
          satisfied.
        </p>
      </AreaLogistics>

      <AreaServices
        title="Moving and Packing Services in Palm Jumeirah"
        lede="We offer a specialized range of moving and packing services in Palm Jumeirah designed for high-value properties and luxury relocations."
        services={[
          {
            title: "Villa & Luxury Home Relocation",
            body: "Moving a multi-bedroom frond villa requires serious manpower and organization. We are expert luxury villa movers in Palm Jumeirah. We send a dedicated, large moving crew to carefully dismantle oversized wooden beds, wrap expensive dining tables, and transport heavy outdoor garden furniture safely.",
            link: "/services/villa-movers-dubai",
          },
          {
            title: "Apartment & Studio Movers",
            body: "If you are moving into the Shoreline Apartments or the newer towers on the trunk, we provide seamless apartment moving services in Palm Jumeirah. We handle everything from 1 BHK and 2 BHK moves to massive penthouse relocations, ensuring building walls and elevators remain scratch-free.",
            link: "/services/house-movers-dubai",
          },
          {
            title: "Specialized & Fine Art Packing",
            body: "We understand that some items cannot just be put in a standard box. As fine art movers in Palm Jumeirah, we provide custom crating and heavy-duty bubble wrapping for fragile items, large mirrors, antiques, and chandeliers. Our professional packing services ensure your most valuable belongings are completely protected during transit.",
            link: "/services/packing-and-moving-services-dubai",
          },
          {
            title: "Office & Commercial Movers",
            body: "If you are opening a new office space or boutique on the island, our commercial movers in Palm Jumeirah will safely pack your IT equipment, dismantle desks, and set up your new commercial space efficiently.",
            link: "/services/office-movers-dubai",
          },
        ]}
      />

      <AreaWhyChoose
        title="Why Choose Zain Movers and Packers in Palm Jumeirah"
        lede="When handling expensive furniture in a high-security area, you cannot afford to hire cheap, unregistered men in pickup trucks. Here is why luxury homeowners trust us:"
        points={[
          {
            title: "Official UAE Commercial Trade License",
            body: "We are a fully registered moving company in Dubai, legally authorized to operate inside the Palm.",
          },
          {
            title: "Goods-in-Transit Cargo Insurance",
            body: "Your valuable belongings, fine art, and electronics are insured during transport.",
          },
          {
            title: "Pay Upon 100% Satisfaction",
            body: "We do not ask for hostage fees. You pay only when the job is done perfectly.",
          },
          {
            title: "Direct and Safe Handling",
            body: "We use our own trained, uniformed staff who respect your privacy.",
          },
          {
            title: "Nakheel Permit Assistance",
            body: "We provide all the necessary trade and vehicle documents you need to get your Palm Jumeirah access pass quickly.",
          },
        ]}
      />

      <AreaPricing
        title="Movers and Packers Cost in Palm Jumeirah"
        lede="Despite offering a premium service, we maintain transparent and affordable moving services in Palm Jumeirah. The price we quote you is fixed. We do not add surprise charges for packing tape or carrying items."
        rows={[
          {
            property: "1 BHK / Apartment Moving Cost",
            price: "AED 850 – AED 1,300",
          },
          { property: "2 BHK / 3 BHK Apartment", price: "AED 1,400 – AED 2,200" },
          {
            property: "Luxury Frond Villa Relocation",
            price: "Custom fixed quote",
          },
        ]}
        note="Estimated moving prices in Palm Jumeirah. Villa relocations are quoted from an on-site survey or video walk-through."
      />

      <section className="bg-secondary">
        <div className="wrap band">
          <SectionHeading
            eyebrow="Instant Quote"
            title="How To Get A Moving Quote in Palm Jumeirah"
            lede="Getting a free moving estimate in Palm Jumeirah is easy and discreet."
            align="center"
          />
          <ProcessSteps
            className="mt-12"
            steps={[
              {
                title: "Send a Video Tour",
                description:
                  "You can send us a video tour of your villa or apartment on WhatsApp, showing us the heavy furniture and fragile items that need packing.",
                icon: MessageSquare,
              },
              {
                title: "We Calculate the Job",
                description:
                  "We will instantly calculate the required truck size and packing materials.",
                icon: Truck,
              },
              {
                title: "Get a Fixed Quote",
                description:
                  "We send you a fixed moving quote. For larger villas, we can also schedule a free on-site survey at your convenience.",
                icon: BadgeCheck,
              },
            ]}
          />
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        eyebrow="Palm Jumeirah Specifics"
        heading="Frequently Asked Questions"
        lede="Access passes, high-value handling, and custom joinery on the island."
      />

      <CTAWithForm
        eyebrow="Free Moving Quote"
        heading="Get A Free Moving Quote For Palm Jumeirah Today"
        description="Do not risk your valuable furniture with inexperienced movers. Let our professional, fully insured team handle your luxury relocation safely. Remember: pay only when you are completely satisfied with the job."
        tone="light"
      />
    </>
  );
}
