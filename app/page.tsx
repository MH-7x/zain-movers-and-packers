import { BadgeCheck, Boxes, ClipboardCheck, Truck } from "lucide-react";

import HomeHero from "@/components/home/HomeHero";
import QuickDispatchBar from "@/components/home/QuickDispatchBar";
import CompanyIntro from "@/components/home/CompanyIntro";
import ServicesGrid from "@/components/home/ServicesGrid";
import PricingPreview from "@/components/home/PricingPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LocationCoverage from "@/components/home/LocationCoverage";
import ReviewsCarousel from "@/components/shared/ReviewsCarousel";
import ProcessSteps from "@/components/shared/ProcessSteps";
import SectionHeading from "@/components/shared/SectionHeading";
import TrustBadges from "@/components/shared/TrustBadges";
import FAQSection, { type Faq } from "@/components/shared/FAQSection";
import { CTABanner, CTAWithForm } from "@/components/shared/CTASection";
import { MetadataTemplate } from "@/lib/MetadataTemplate";
import { PHONE_HREF } from "@/lib/Contact";

export const metadata = MetadataTemplate({
  title: "Movers and Packers in Dubai | Zain Movers – Licensed & Trusted",
  desc: "Zain Movers and Packers — professional moving services in Dubai. Licensed company, 10+ years experience, no hidden charges. Call +971-55-4495331 for a free quote.",
  path: "/",
  image: {
    path: "/homepage/zain-movers-and-packers-dubai-hero.jpg",
    alt: "Zain Movers and Packers crew loading a closed moving truck in Dubai",
  },
});

const CREDENTIALS = [
  {
    label: "2015",
    sub: "Established in Dubai",
    detail: "Continuous Dubai DED commercial licensing.",
    icon: BadgeCheck,
  },
  {
    label: "100% In-House",
    sub: "Professional Crew",
    detail: "Background-checked, permanent logistics staff.",
    icon: ClipboardCheck,
  },
  {
    label: "All 7 Emirates",
    sub: "Inter-Emirate Permits",
    detail: "Full highway transit certification and cargo insurance.",
    icon: Truck,
  },
  {
    label: "1,000+",
    sub: "Successful Moves",
    detail: "Completed across the UAE since 2015.",
    icon: Boxes,
  },
];

const PROCESS = [
  {
    title: "Contact Us",
    description:
      "Call us at 055 4495331, send a WhatsApp message, or fill out the quote form. Tell us what you need to move, where you’re moving from, and where you’re going.",
  },
  {
    title: "Get a Free Quote",
    description:
      "We’ll send you a detailed quote on WhatsApp or email. The quote breaks down every cost — labour, packing materials, transport, and any additional services. No hidden fees.",
  },
  {
    title: "Professional Packing",
    description:
      "On moving day, our team arrives on time with all the packing materials, with extra protection for fragile items like glassware, electronics, and artwork.",
  },
  {
    title: "Safe Transportation",
    description:
      "Your items are loaded into our branded trucks by trained movers. We use proper loading techniques and secure everything inside the truck to prevent shifting during transport.",
  },
  {
    title: "Unpacking and Setup",
    description:
      "At your new location, we unload, unpack, and arrange everything. Furniture gets reassembled. Boxes go to the right rooms. You don’t have to lift a finger.",
  },
  {
    title: "Pay Upon Satisfaction",
    description:
      "Once everything is in place and you’re happy with the job, that’s when you pay. Cash, bank transfer, or cheque — your choice. No pressure. No advance payment.",
  },
];

const FAQS: Faq[] = [
  {
    question: "How much do movers and packers charge in Dubai?",
    answer: (
      <p>
        Moving costs in Dubai depend on the size of your home, the amount of
        furniture, the distance, and any additional services you need like
        packing or storage. A studio apartment move typically starts from around
        AED 699–999 for a local move within Dubai. Larger homes and villas cost
        more based on volume. The best way to get an accurate price is to
        contact us directly — we’ll send you a detailed, no-obligation quote.
      </p>
    ),
  },
  {
    question: "How far in advance do I need to book my move?",
    answer: (
      <p>
        Booking 2 to 4 days ahead gives you the best choice of morning time
        slots. But if you need to move today or tomorrow, call us directly at{" "}
        <a href={PHONE_HREF}>+971-55-4495331</a>. We frequently handle same-day
        moves when schedules allow.
      </p>
    ),
  },
  {
    question: "How do I choose the best moving company in Dubai?",
    answer: (
      <p>
        Start by checking if the company is licensed and registered. Ask about
        insurance coverage. Read actual customer reviews. And most importantly —
        ask about hidden charges. A good moving company will give you a
        transparent quote upfront with no surprises. At Zain Movers, we provide
        all of this, plus we operate on a pay-upon-satisfaction model.
      </p>
    ),
  },
  {
    question: "Do I need a move-in or move-out permit in Dubai?",
    answer: (
      <p>
        Yes, most managed buildings and communities (such as Emaar, Nakheel,
        Dubai Properties, and Concordia in JLT) require a move permit before
        security will allow moving trucks into the loading bay. We provide our
        trade license, truck registration, and crew Emirates IDs so you can get
        your permit approved quickly.
      </p>
    ),
  },
  {
    question: "Do you provide packing materials?",
    answer: (
      <p>
        Yes. We supply all the packing materials needed for your move —
        including carton boxes, bubble wrap, stretch film, tape, furniture
        blankets, and custom crating for fragile or high-value items. Packing
        materials are included when you book our full packing service.
      </p>
    ),
  },
  {
    question: "Can you move my furniture the same day?",
    answer: (
      <p>
        Yes, we offer same-day moving services for urgent situations. If you
        need to move quickly — whether you just arrived in the UAE or your plans
        changed last minute — call us at{" "}
        <a href={PHONE_HREF}>+971-55-4495331</a>. We’ll do our best to arrange a
        same-day team.
      </p>
    ),
  },
  {
    question: "Do Zain Movers serve areas outside Dubai?",
    answer: (
      <p>
        Absolutely. We provide moving services across all seven emirates of the
        UAE — including Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Al Ain, Umm
        Al Quwain, and Fujairah. We handle both local moves within a single city
        and inter-emirate moves across the country.
      </p>
    ),
  },
  {
    question: "Is there any advance payment required?",
    answer: (
      <p>
        No. We follow a Pay Upon Satisfaction policy. You don’t pay a single
        dirham until the move is complete and you’re happy with our work. This
        applies to all our services — residential, commercial, and furniture
        moves.
      </p>
    ),
  },
  {
    question: "Are my items insured during the move?",
    answer: (
      <p>
        Yes. Zain Movers is a fully insured moving company. Your belongings are
        covered during packing, loading, transport, and unloading. We also take
        extra precautions with fragile and high-value items to prevent any
        damage.
      </p>
    ),
  },
  {
    question: "How do I pay for the move?",
    answer: (
      <p>
        You pay after the move is completed and you have verified that
        everything arrived safely and was assembled correctly. We accept cash,
        instant bank transfer, and business cheques.
      </p>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <QuickDispatchBar />

      <div className="wrap band">
        <TrustBadges badges={CREDENTIALS} variant="rule" />
      </div>

      <CompanyIntro />
      <ServicesGrid />
      <PricingPreview />

      <section className="bg-background">
        <div className="wrap band">
          <SectionHeading
            eyebrow="Zain Movers and Packers Process"
            title="How Our Moving Process Works"
            lede="From the first assessment through final furniture inspection, our six-step sequence guarantees an orderly, unhurried moving day."
            align="center"
          />
          <ProcessSteps steps={PROCESS} variant="timeline" className="mt-14" />
        </div>
      </section>

      <WhyChooseUs />
      <LocationCoverage />
      <ReviewsCarousel />

      <CTAWithForm
        heading="Ready for an Easy Move in Dubai? Get Your Free Quote Now"
        description="You’re one call away from a smooth, stress-free move. Tell us what you need — and we’ll send you a clear, honest quote with no hidden fees. Whether you’re moving a studio, a villa, or an entire office, we’ve got you covered."
        tone="dark"
      />

      <FAQSection
        faqs={FAQS}
        heading="Frequently Asked Questions About Moving in Dubai"
        lede="Everything you need to know about preparing for your relocation in Dubai and the UAE."
      />

      <CTABanner
        eyebrow="No Obligation. No Hidden Charges."
        heading="You Only Pay When You’re Satisfied"
        description="Tell us what you need and we’ll send a clear, honest quote with no hidden fees — then you settle up only once every item is in place."
      />
    </>
  );
}
