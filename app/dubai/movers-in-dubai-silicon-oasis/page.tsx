import { BadgeCheck, Clock, MessageSquare, ShieldCheck, Truck, Wallet } from "lucide-react";

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

const PATH = "/dubai/movers-in-dubai-silicon-oasis";

export const metadata = MetadataTemplate({
  title: "Movers in Dubai Silicon Oasis | Zain Movers and Packers",
  desc: "Professional movers and packers in Dubai Silicon Oasis (DSO). We handle Cedre Villas, tech offices, and apartment relocations safely. Pay upon satisfaction.",
  path: PATH,
  image: {
    path: "/sub-locations/movers-in-dubai-silicon-oasis-villa-relocation.jpg",
    alt: "Zain Movers crew loading wrapped furniture outside a Cedre Villas home in DSO",
  },
});

const FAQS: Faq[] = [
  {
    question: "Do I need a permit to move in or out of Dubai Silicon Oasis?",
    answer: (
      <p>
        Yes. The Dubai Silicon Oasis Authority (DSOA) requires residents and
        businesses to obtain a Move-In/Move-Out permit. You will need our trade
        licence and vehicle details to apply for this permit online, which we
        will provide to you immediately upon booking.
      </p>
    ),
  },
  {
    question: "Can you safely move computers and IT equipment in DSO?",
    answer: (
      <p>
        Yes. Many of our commercial clients in DSO are tech companies. Our team
        is trained as specialised electronics movers in Dubai Silicon Oasis,
        using heavy-duty bubble wrap and secure packing techniques to transport
        sensitive servers and computers safely.
      </p>
    ),
  },
  {
    question: "Do you dismantle and reassemble beds and wardrobes?",
    answer: (
      <p>
        Yes. Our packing and moving services in DSO include professional
        carpenters. We safely dismantle your heavy beds, dining tables, and
        large wardrobes, pack the pieces securely, and reassemble them perfectly
        in your new home.
      </p>
    ),
  },
];

export default function MoversInDubaiSiliconOasisPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          generateServiceSchema({
            name: "Moving Services Dubai Silicon Oasis",
            description:
              "Professional movers and packers in Dubai Silicon Oasis handling Cedre Villas, Semmer Villas, residential towers, and tech park office relocations.",
            path: PATH,
            areaServed: ["Dubai Silicon Oasis", "Dubai"],
          }),
        )}
      />

      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Dubai", href: "/#coverage" },
          { name: "Dubai Silicon Oasis", href: PATH },
        ]}
      />

      <AreaHero
        eyebrow="Villa, Apartment & Tech Office Movers"
        title="Movers and Packers in Dubai Silicon Oasis"
        intro="Dubai Silicon Oasis (DSO) is a busy mix of residential family villas, high-rise apartments, and commercial tech offices. Whether you are moving into Cedre Villas or setting up a new corporate space in the tech park, you need a relocation company that understands the area and the specific permits required by the DSO Authority (DSOA)."
        badges={[
          {
            label: "Licensed Company",
            sub: "Making it easy to get your DSO moving permit",
            icon: BadgeCheck,
          },
          {
            label: "Fully Insured",
            sub: "Home belongings and office electronics covered",
            icon: ShieldCheck,
          },
          {
            label: "Pay Upon Satisfaction",
            sub: "We do not ask for any advance payments",
            icon: Wallet,
          },
          {
            label: "Same-Day Moving",
            sub: "Urgent moving services in DSO",
            icon: Clock,
          },
        ]}
        crewTitle="Dubai Silicon Oasis Moving Crew"
        crewMeta="Villa communities, residential towers and tech park offices"
        compliance={[
          "Official UAE commercial trade licence",
          "Goods-in-transit cargo insurance",
        ]}
        imageSrc="/sub-locations/movers-in-dubai-silicon-oasis-villa-relocation.jpg"
        imageAlt="Zain Movers crew loading wrapped furniture outside a Cedre Villas home in DSO"
        imageLabel="DSO villa relocation"
      />

      <AreaLogistics
        title="Experience Operating Across the District"
        proofImages={[
          {
            src: "/sub-locations/dubai-silicon-oasis-it-equipment-packing.jpg",
            alt: "Servers and IT equipment packed for a Dubai Silicon Oasis office move",
            label: "IT equipment packing",
            caption: "Sensitive IT Equipment for Tech Startups",
            sub: "Servers, electronics and modular office desks packed safely",
          },
          {
            src: "/sub-locations/dubai-silicon-oasis-carpenter-wardrobe-cedre-villas.jpg",
            alt: "Carpenter dismantling a wardrobe inside a Cedre Villas bedroom",
            label: "Carpenter dismantling wardrobe",
            caption: "Expert Carpenters On Every Move",
            sub: "Beds, dining tables and large wardrobes dismantled and reassembled",
          },
        ]}
      >
        <p>
          We are a professional moving company in Dubai Silicon Oasis with years
          of experience operating in the district. We handle everything from
          packing your kitchenware in a 1 BHK apartment to safely transporting
          sensitive IT equipment for tech startups.
        </p>
        <p>
          Our team arrives with high-quality packing materials, enclosed moving
          trucks, and expert carpenters. Best of all, we operate on trust — you
          do not pay us any upfront deposits. You only hand over the payment
          when your furniture is fully assembled and you are totally satisfied
          with our work.
        </p>
      </AreaLogistics>

      <AreaServices
        title="Moving and Packing Services in Dubai Silicon Oasis"
        lede="We provide a complete range of moving and packing services in DSO, designed to meet the needs of both residents and businesses in the tech park."
        services={[
          {
            title: "Villa & Townhouse Movers",
            body: "DSO is home to popular family communities like Cedre Villas and Semmer Villas. We act as expert villa movers in Dubai Silicon Oasis, sending a large team to carefully pack your entire home, dismantle heavy wooden beds, and transport large garden furniture. We ensure the entire villa move is completed efficiently in a single day.",
            link: "/services/villa-movers-dubai",
          },
          {
            title: "Apartment & Studio Movers",
            body: "If you are a student or professional moving into the residential towers, we offer fast and affordable apartment movers in Dubai Silicon Oasis. From studio moving in DSO to 3 BHK family apartments, we bring all the necessary carton boxes and bubble wrap to protect your belongings during the move.",
            link: "/services/house-movers-dubai",
          },
          {
            title: "Office & Commercial Movers",
            body: "Because Silicon Oasis is a major tech hub, we specialize in IT equipment movers in Dubai Silicon Oasis. Our commercial movers in DSO know how to safely pack servers, electronics, and modular office desks. We offer weekend and after-hours corporate relocation to minimize downtime for your business.",
            link: "/services/office-movers-dubai",
          },
          {
            title: "Furniture Moving & Packing Services",
            body: "Need a new sofa delivered or a large wardrobe moved? We provide single item movers in Dubai Silicon Oasis. We also offer comprehensive packing and unpacking services in DSO. Our professional carpenters will expertly dismantle and reassemble all your furniture, keeping all screws and pieces secure.",
            link: "/services/furniture-movers-dubai",
          },
        ]}
      />

      <AreaWhyChoose
        title="Why Choose Zain Movers and Packers in Dubai Silicon Oasis"
        lede="When searching for trusted movers in DSO, you want a licensed team that won't surprise you with hidden fees on moving day. Here is why residents and businesses choose us:"
        points={[
          {
            title: "Official UAE Commercial Trade License",
            body: "We are fully registered, making it easy for you to get your DSO moving permit.",
          },
          {
            title: "Goods-in-Transit Cargo Insurance",
            body: "Your valuable home belongings and office electronics are fully insured during transport.",
          },
          {
            title: "Pay Upon 100% Satisfaction",
            body: "We do not ask for any advance payments. You pay only when the job is done properly.",
          },
          {
            title: "Direct and Safe Handling",
            body: "We use our own trained, uniformed staff — never anonymous street laborers.",
          },
          {
            title: "Same-Day Moving",
            body: "We offer urgent moving services in DSO if you need to relocate immediately.",
          },
        ]}
      />

      <AreaPricing
        title="Movers and Packers Cost in Dubai Silicon Oasis"
        lede="We believe in transparent pricing. As cheap movers and packers in Dubai Silicon Oasis, we give you a fixed quote upfront. We do not add surprise fees for stairs, long walks, or extra packing tape."
        rows={[
          { property: "Studio / 1 BHK Moving Cost", price: "AED 750 – AED 1,150" },
          { property: "2 BHK / 3 BHK Apartment", price: "AED 1,200 – AED 1,800" },
          {
            property: "Cedre Villas / Office Moving Cost",
            price: "Custom fixed quote based on size and inventory",
          },
        ]}
        note="Estimated moving prices in Dubai Silicon Oasis — the final cost depends on furniture volume."
      />

      <section className="bg-secondary">
        <div className="wrap band">
          <SectionHeading
            eyebrow="Instant Quote"
            title="How To Get A Moving Quote in Dubai Silicon Oasis"
            lede="Getting a free moving estimate in Dubai Silicon Oasis is simple and quick."
            align="center"
          />
          <ProcessSteps
            className="mt-12"
            steps={[
              {
                title: "Send a Short Video Tour",
                description:
                  "Just send us a short video tour of your apartment, villa, or office on WhatsApp. Show us what needs to be packed and moved.",
                icon: MessageSquare,
              },
              {
                title: "We Calculate the Job",
                description:
                  "Our team will calculate the truck size and packing materials required.",
                icon: Truck,
              },
              {
                title: "Get a Fixed Quote Instantly",
                description:
                  "We reply instantly with a fixed moving quote, with no surprise fees on moving day.",
                icon: BadgeCheck,
              },
            ]}
          />
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        eyebrow="DSO Specifics"
        heading="Frequently Asked Questions"
        lede="DSOA permits, electronics handling, and carpentry across Dubai Silicon Oasis."
      />

      <CTAWithForm
        eyebrow="Free Moving Quote"
        heading="Get A Free Moving Quote For Dubai Silicon Oasis Today"
        description="Do not risk your furniture with unverified movers. Let our professional, fully licensed team handle your home or office relocation safely. Remember: pay only when you are completely satisfied with the job."
        tone="light"
      />
    </>
  );
}
