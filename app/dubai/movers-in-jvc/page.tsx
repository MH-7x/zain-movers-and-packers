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

const PATH = "/dubai/movers-in-jvc";

export const metadata = MetadataTemplate({
  title: "Movers in JVC Dubai | Zain Movers and Packers",
  desc: "Professional movers and packers in Jumeirah Village Circle (JVC). We handle townhouses, villas, and apartments safely. Pay upon satisfaction.",
  path: PATH,
  image: {
    path: "/og/movers-in-jvc.jpg",
    alt: "Zain Movers crew carrying furniture up a JVC townhouse staircase",
  },
});

const FAQS: Faq[] = [
  {
    question: "Do you handle moving up multiple stairs in JVC townhouses?",
    answer: (
      <p>
        Yes. Townhouse moving in JVC often involves narrow, multi-level
        staircases. Our team is physically trained and uses proper lifting
        straps and heavy-duty blankets to move heavy beds and wardrobes up and
        down stairs without scratching your walls.
      </p>
    ),
  },
  {
    question: "Do I need a permit to move into Jumeirah Village Circle?",
    answer: (
      <p>
        If you are moving into a Nakheel-managed villa or townhouse, or a
        privately managed apartment building in JVC, you will likely need a
        move-in permit. We supply our company trade licence instantly so you can
        process your permit without delays.
      </p>
    ),
  },
  {
    question: "Do you offer temporary storage solutions in JVC?",
    answer: (
      <p>
        Yes. If your new tenancy contract has not started yet, we provide moving
        and storage services in JVC. We will safely store your packed belongings
        in our secure, climate-controlled warehouse and deliver them when your
        new home is ready.
      </p>
    ),
  },
];

export default function MoversInJvcPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          generateServiceSchema({
            name: "Moving Services JVC",
            description:
              "Movers and packers in Jumeirah Village Circle handling townhouses, villas, and low-rise apartments with full packing, carpentry, and storage options.",
            path: PATH,
            areaServed: ["Jumeirah Village Circle", "Dubai"],
          }),
        )}
      />

      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Dubai", href: "/#coverage" },
          { name: "Jumeirah Village Circle", href: PATH },
        ]}
      />

      <AreaHero
        eyebrow="Townhouse, Villa & Apartment Movers"
        title="Movers and Packers in JVC"
        intro="Jumeirah Village Circle is one of the most popular family communities in Dubai, featuring a unique mix of multi-level townhouses, luxury villas, and low-rise apartments. Moving in JVC requires a team that knows how to handle heavy furniture across multiple floors and narrow staircases without causing damage."
        badges={[
          {
            label: "Licensed Company",
            sub: "Legal, registered moving company in Dubai",
            icon: BadgeCheck,
          },
          {
            label: "Cargo Insured",
            sub: "Protected against accidents on the road",
            icon: ShieldCheck,
          },
          {
            label: "Pay Upon Satisfaction",
            sub: "No hostage fees or upfront deposits",
            icon: Wallet,
          },
          {
            label: "Uniformed, Trained Staff",
            sub: "Not random day laborers",
            icon: Users,
          },
        ]}
        crewTitle="JVC Moving Crew"
        crewMeta="Townhouse, villa and apartment relocations"
        compliance={[
          "Official UAE commercial trade licence",
          "Goods-in-transit cargo insurance",
        ]}
        imageAlt="Zain Movers crew carrying a wrapped wardrobe up a JVC townhouse staircase"
        imageLabel="JVC townhouse relocation"
      />

      <AreaLogistics
        title="Experience Operating Inside the Community"
        proofImages={[
          {
            alt: "Movers carrying a wrapped bed frame down a townhouse staircase",
            label: "Multi-floor stair carry",
            caption: "Heavy Furniture Across Multiple Floors",
            sub: "Narrow staircases navigated without causing damage",
          },
          {
            alt: "Heavy-duty blankets and stretch film applied to a sofa in JVC",
            label: "Blankets & stretch film",
            caption: "Heavy-Duty Blankets and Stretch Film",
            sub: "Absolute protection for your furniture in transit",
          },
        ]}
      >
        <p>
          We are professional movers in JVC with years of experience operating
          inside the community. Whether you are moving into a studio apartment
          or relocating a 4-bedroom townhouse, our team manages the entire
          process.
        </p>
        <p>
          We bring the packing materials, dismantle your heavy beds and
          wardrobes, and load everything securely into our covered moving
          trucks. And you do not pay any upfront deposits — you only pay when
          the furniture is reassembled and you are fully satisfied.
        </p>
      </AreaLogistics>

      <AreaServices
        title="Moving and Packing Services in JVC"
        lede="We provide a comprehensive range of packing and moving services in JVC, designed specifically for the types of properties found in Jumeirah Village Circle."
        services={[
          {
            title: "Townhouse & Villa Relocation",
            body: "JVC is famous for its townhouses. Moving heavy items up two or three flights of stairs requires experienced townhouse movers in JVC. Our team knows how to navigate these tight spaces safely. We also act as expert villa movers in JVC, handling everything from large garden furniture to delicate indoor pieces with full packing and unpacking services.",
          },
          {
            title: "Apartment & Studio Movers",
            body: "If you live in one of the community's many apartment buildings, we offer fast and affordable residential moving services. From studio moving in JVC to 1 BHK and 3 bedroom apartment movers, we provide all the boxes and bubble wrap needed to secure your items during transit.",
          },
          {
            title: "Office & Commercial Movers",
            body: "For businesses operating in the area, we provide dedicated office relocation services. Our commercial movers in JVC can pack up your IT equipment, dismantle office desks, and move your business over the weekend so you do not lose any working hours.",
          },
          {
            title: "Furniture Moving & Packing Services",
            body: "Need to move a single heavy item? We offer single furniture movers in JVC for items like heavy sofas or dining tables. We also provide professional packing services in JVC, using heavy-duty blankets and stretch film for absolute protection. Our team will also handle all your furniture dismantling and assembly.",
          },
        ]}
      />

      <AreaWhyChoose
        title="Why Choose Zain Movers and Packers in JVC"
        lede="When looking for a relocation company in JVC, you will find many cheap men with pickup trucks. But trusting unverified workers with your personal belongings is a huge risk. Here is why families choose us:"
        points={[
          {
            title: "Official UAE Commercial Trade License",
            body: "We are a legal, registered moving company in Dubai.",
          },
          {
            title: "Goods-in-Transit Cargo Insurance",
            body: "Your household items are protected against accidents on the road.",
          },
          {
            title: "Pay Upon 100% Satisfaction",
            body: "We never ask for hostage fees or upfront deposits.",
          },
          {
            title: "Direct and Safe Handling",
            body: "Our uniformed, trained staff handle your items, not random day laborers.",
          },
          {
            title: "Same-Day Moving",
            body: "We offer urgent moving and transportation services in JVC if you need to shift immediately.",
          },
        ]}
      />

      <AreaPricing
        title="Movers and Packers Cost in JVC"
        lede="We are proud to be cost-effective movers in JVC with completely transparent pricing. The moving cost in JVC depends on the size of your property, but the price we quote you on WhatsApp is fixed. There are absolutely no hidden charges on moving day."
        rows={[
          { property: "Studio / 1 BHK Moving Cost", price: "AED 750 – AED 1,150" },
          {
            property: "2 BHK / Small Townhouse",
            price: "AED 1,200 – AED 1,600",
          },
          {
            property: "3-4 Bed Townhouse / Villa",
            price: "Custom fixed quote based on inventory",
          },
        ]}
        note="Estimated moving prices in JVC. The moving cost depends on the size of your property, and the price we quote you on WhatsApp is fixed."
      />

      <section className="bg-secondary">
        <div className="wrap band">
          <SectionHeading
            eyebrow="Instant Quote"
            title="How To Get A Moving Quote in JVC"
            lede="Do not waste time waiting for an estimator to visit your home. You can get a free moving estimate in JVC right now."
            align="center"
          />
          <ProcessSteps
            className="mt-12"
            steps={[
              {
                title: "Send a Short Video",
                description:
                  "Simply send a short video of your rooms and heavy furniture to our WhatsApp number.",
                icon: MessageSquare,
              },
              {
                title: "We Calculate the Job",
                description:
                  "We will calculate the packing materials and truck space required.",
                icon: Truck,
              },
              {
                title: "Get an Instant Fixed Quote",
                description:
                  "We send you an instant, fixed moving quote — with absolutely no hidden charges on moving day.",
                icon: BadgeCheck,
              },
            ]}
          />
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        eyebrow="JVC Specifics"
        heading="Frequently Asked Questions"
        lede="Staircases, permits, and storage for relocations inside Jumeirah Village Circle."
      />

      <CTAWithForm
        eyebrow="Free Moving Quote"
        heading="Get A Free Moving Quote For JVC Today"
        description="Take the stress out of your Jumeirah Village Circle move. Let our professional, fully insured team handle the packing and heavy lifting. Remember: pay only when you are completely satisfied with the job."
        tone="light"
      />
    </>
  );
}
