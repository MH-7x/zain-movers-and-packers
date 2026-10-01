import Link from "next/link";
import {
  Banknote,
  Check,
  CreditCard,
  ShieldCheck,
  Truck,
  Wallet,
} from "lucide-react";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import NarrativeBand from "@/components/shared/NarrativeBand";
import AboutHero from "@/components/about/AboutHero";
import FoundationalPillars from "@/components/about/FoundationalPillars";
import Timeline from "@/components/about/Timeline";
import Accreditations from "@/components/about/Accreditations";
import StatsBar from "@/components/shared/StatsBar";
import SectionHeading from "@/components/shared/SectionHeading";
import ProcessSteps from "@/components/shared/ProcessSteps";
import FAQSection, { type Faq } from "@/components/shared/FAQSection";
import { CTAWithForm } from "@/components/shared/CTASection";
import { MetadataTemplate } from "@/lib/MetadataTemplate";
import { SERVICES } from "@/data/services-nav";
import { LOCATIONS } from "@/data/locations-nav";

const PATH = "/about";

export const metadata = MetadataTemplate({
  title: "About Zain Movers and Packers | Licensed Moving Company in UAE",
  desc: "Learn about Zain Movers and Packers. Licensed UAE moving company since 2020, 10+ years of industry experience, and a simple promise: you pay only when you are satisfied.",
  path: PATH,
  image: {
    path: "/og/about.jpg",
    alt: "Zain Movers uniformed crew loading a branded truck at the Dubai depot",
  },
});

const COVERAGE = [
  { emirate: "Dubai", areas: "Every area from Marina to Silicon Oasis." },
  {
    emirate: "Abu Dhabi",
    areas: "Al Reem Island, Yas Island, Saadiyat, Khalifa City, Musaffah.",
  },
  { emirate: "Sharjah", areas: "Al Nahda, Muweilah, Al Majaz, Al Khan." },
  {
    emirate: "Ajman",
    areas: "Ajman Downtown, Al Nuaimia, Rashidiya, Al Rawda.",
  },
  {
    emirate: "Ras Al Khaimah",
    areas: "Al Hamra, Marjan Island, Mina Al Arab, Khuzam.",
  },
  { emirate: "Al Ain", areas: "Al Jimi, Zakher, Falaj Hazzaa, Al Towayya." },
  { emirate: "Umm Al Quwain & Fujairah", areas: "Full coverage." },
];

const FAQS: Faq[] = [
  {
    question: "Do you take a deposit before moving day?",
    answer: (
      <p>
        No. You do not pay us in advance — no deposit, and no &ldquo;50% before
        we start.&rdquo; You hand us the payment only after the job is complete
        and you have inspected everything. If something is not right, we fix it
        before you pay.
      </p>
    ),
  },
  {
    question: "Are you actually licensed, and can I verify it?",
    answer: (
      <p>
        Yes. We hold an official UAE Commercial Trade Licence and carry
        goods-in-transit cargo insurance on every single move. If you need a
        building NOC or moving permit from your landlord, we provide our trade
        documents immediately.
      </p>
    ),
  },
  {
    question: "Do you subcontract the move to other workers?",
    answer: (
      <p>
        No. We do not rent random pickups on moving day. We operate our own
        fleet of branded, enclosed trucks in multiple sizes, and our moving
        crews are trained, uniformed, and employed by us directly. You will
        never get a stranger showing up in a personal car.
      </p>
    ),
  },
  {
    question: "Can you move at short notice?",
    answer: (
      <p>
        Yes. We offer same-day moving for urgent situations. Call us, tell us
        what you need, and we will dispatch a team as quickly as possible. For
        larger or premium moves that need detailed planning, we schedule surveys
        and work with you on timing.
      </p>
    ),
  },
  {
    question: "Which payment methods do you accept?",
    answer: (
      <>
        <p>
          We accept cash on completion (most common — you pay after the job is
          done), bank transfer, and business cheques for commercial and
          corporate relocations.
        </p>
        <p>
          We explain all payment details clearly during the quoting process. No
          surprises.
        </p>
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About Us", href: PATH },
        ]}
      />

      <AboutHero />

      <StatsBar
        stats={[
          { value: "10+ Years", label: "UAE Operations" },
          { value: "100%", label: "In-House Trained Crews" },
          { value: "AED 0", label: "Zero Advance Deposits" },
          { value: "1,000+", label: "Completed Moves" },
        ]}
      />

      {/* 01 — Origin */}
      <section className="bg-secondary">
        <div className="wrap band">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <h2 className="mt-5 max-w-[16ch] text-3xl leading-[1.15] md:text-4xl">
                Who We Are
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground [&>p]:max-w-prose">
                <p>
                  Zain Movers and Packers is a registered moving company based
                  in Dubai, UAE. We were officially licensed in 2020, but we
                  have been in the moving industry since 2015 — long before we
                  put a name on the truck.
                </p>
                <p>
                  In that time, we have completed thousands of residential and
                  commercial moves across all seven emirates. Dubai, Abu Dhabi,
                  Sharjah, Ajman, Ras Al Khaimah, Al Ain, Umm Al Quwain,
                  Fujairah — we cover the entire country.
                </p>
                <p>
                  We are not a call-centre operation that subcontracts your move
                  to random labourers. We have our own branded trucks, our own
                  trained moving teams, and our own packing materials. When you
                  call us, you deal with us directly, from the first quote to
                  the final piece of furniture being placed in your new home.
                </p>
              </div>

              <div className="mt-8 border-l-2 border-primary bg-accent p-5">
                <p className="eyebrow">Our Guarantee to You</p>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-foreground/85">
                  You hand us the payment only after the job is complete and you
                  have inspected everything. If something is not right, we fix
                  it before you pay.
                </p>
              </div>
            </div>

            <div>
              <div className="relative aspect-3/2 w-full overflow-hidden" />

              <dl className="mt-px grid gap-px bg-hairline sm:grid-cols-2">
                {[
                  {
                    value: "2015",
                    title: "Industry Since",
                    body: "Operating in the UAE moving industry, long before we put a name on the truck.",
                  },
                  {
                    value: "2020",
                    title: "Formally Licensed",
                    body: "Officially registered as a UAE commercial moving company.",
                  },
                  {
                    value: "7",
                    title: "Emirates Daily",
                    body: "Continuous scheduled routes linking Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, and UAQ.",
                  },
                  {
                    value: "100%",
                    title: "In-House Staff",
                    body: "Zero day-labourers or outsourced third-party subcontractors.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-background p-5">
                    <dt
                      data-numeric
                      className="font-serif text-2xl font-semibold text-primary"
                    >
                      {item.value}
                    </dt>
                    <dd>
                      <p className="mt-1.5 text-base font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <FoundationalPillars
        title="Why People Choose Us Over Other Movers"
        lede="We are not going to tell you we are the best in the UAE — you have heard that line from every moving company website. Here is what we actually offer that most others do not."
        pillars={[
          {
            title: "Pay Upon Satisfaction",
            body: "You do not pay us in advance. No deposit. No 50% before we start. Most moving companies in the UAE demand full payment upfront or hold your furniture hostage on the truck until you pay. We do the exact opposite.",
            tag: "Zero advance risk",
          },
          {
            title: "No Hidden Fees",
            body: "The quote we give you on WhatsApp is the final price. We will not suddenly charge you extra for packing tape, for carrying your sofa down two flights of stairs, or for long carrying distance.",
            tag: "Fixed written quote",
          },
          {
            title: "Licensed and Insured",
            body: "We hold an official UAE Commercial Trade Licence and carry goods-in-transit cargo insurance on every single move. If you need a building NOC, we provide our trade documents immediately.",
            tag: "Full transit indemnity",
          },
          {
            title: "Our Own Trucks and Teams",
            body: "We do not rent random pickups on moving day. We operate our own fleet of branded, enclosed trucks in multiple sizes, and our crews are trained, uniformed, and employed by us directly.",
            tag: "Never subcontracted",
          },
        ]}
      />

      {/* 03 — Capability */}
      <section className="bg-secondary">
        <div className="wrap band">
          <SectionHeading
            eyebrow="03 / Capability"
            title="What We Actually Do"
            lede="We handle every type of move. The common ones and the complicated ones."
            align="split"
          />

          <ul className="mt-10 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "House and Apartment Moving",
                body: "Studios, 1BHK, 3BHK, you name it. Full packing, transport, and setup.",
                href: "/services/house-movers-dubai",
              },
              {
                title: "Villa Relocations",
                body: "Large properties with heavy, custom furniture, garden items, and multiple rooms.",
                href: "/services/villa-movers-dubai",
              },
              {
                title: "Office and Commercial Moving",
                body: "Desks, servers, filing cabinets. We do it on weekends so your business stays open.",
                href: "/services/office-movers-dubai",
              },
              {
                title: "Furniture Moving",
                body: "Single items or full rooms. Dismantling, wrapping, transport, and reassembly.",
                href: "/services/furniture-movers-dubai",
              },
              {
                title: "Packing Services",
                body: "We bring the boxes, bubble wrap, stretch film, and wardrobe cartons. You do not need to buy anything.",
                href: "/services/packing-and-moving-services-dubai",
              },
              {
                title: "Specialised Moves",
                body: "Industrial machinery, hospital equipment, heavy safes. If it needs to move, we can move it.",
                href: "/services/cheap-movers-dubai",
              },
            ].map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="flex h-full flex-col bg-background p-6 transition-colors hover:bg-accent"
                >
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background">
        <div className="wrap band">
          <SectionHeading
            eyebrow="Straightforward Process"
            title="How We Handle Your Move"
            lede="We have done this thousands of times. Here is the straightforward process."
            align="center"
          />
          <ProcessSteps
            className="mt-12"
            steps={[
              {
                title: "You Contact Us",
                description:
                  "Call us, send a WhatsApp message, or fill out the form on our website. Tell us what you need to move and when.",
                note: "No obligation",
                icon: Truck,
              },
              {
                title: "You Get a Fixed Quote",
                description:
                  "We ask for a quick video or photos of your rooms on WhatsApp. Based on that, we give you an exact, all-inclusive price. No estimates. A fixed number.",
                note: "All-inclusive price",
                icon: Banknote,
              },
              {
                title: "We Show Up and Work",
                description:
                  "Our uniformed team arrives on schedule. We pack fragile items in bubble wrap, dismantle beds and wardrobes, wrap sofas in stretch film, and load systematically into enclosed trucks.",
                note: "Uniformed, on time",
                icon: ShieldCheck,
              },
              {
                title: "You Inspect and Pay",
                description:
                  "We unload, unpack, and reassemble your furniture. Then you walk through and check everything. If you are satisfied, you pay. If something needs adjusting, we fix it first.",
                note: "Pay on completion",
                icon: Wallet,
              },
            ]}
          />
        </div>
      </section>

      {/* Privacy */}
      <section className="bg-secondary">
        <div className="wrap band">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <p className="eyebrow">Our Philosophy</p>
              <h2 className="mt-5 max-w-[14ch] text-3xl leading-[1.15] md:text-4xl">
                Privacy and Trust
              </h2>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground [&>p]:max-w-prose">
              <p>
                We understand something that a lot of moving companies ignore:
                letting strangers into your home is uncomfortable. Especially
                into your bedrooms, your kitchen, your personal space.
              </p>
              <p>
                Our team members are trained to respect your privacy. They speak
                English and Arabic, so communication is never a problem. And
                because we are a registered, licensed company — not anonymous
                labourers from a classified ad — you know exactly who is in your
                home and who is responsible for your belongings.
              </p>
              <p>
                We built this company on the philosophy of protection and
                privacy. Your items are valuable, but your peace of mind is more
                valuable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NarrativeBand surface="plain" title="Same-Day and Urgent Moving">
        <p>
          Not every move is planned weeks in advance. Sometimes you just arrived
          in the UAE and need to move tomorrow. Sometimes your landlord gave you
          short notice. Sometimes you just need it done fast.
        </p>
        <p>
          We offer same-day moving for urgent situations. Call us, tell us what
          you need, and we will dispatch a team as quickly as possible. For
          larger or premium moves that need detailed planning, we schedule
          surveys and work with you on timing — but we are always flexible.
        </p>
      </NarrativeBand>

      <Timeline
        title="A Decade of Logistical Precision"
        lede="From the first single-truck neighbourhood moves to managing multi-floor corporate headquarters and luxury estates across the Emirates."
        milestones={[
          {
            year: "2015",
            title: "The First Move in Dubai",
            body: "Operations began in the UAE moving industry with a single closed truck, focused on studio and one-bedroom apartment moves — and the foundational rule that still defines us: zero advance deposit requirements.",
          },
          {
            year: "2017",
            title: "Inter-Emirate Daily Corridors",
            body: "Expanded to daily transit links between Dubai, Sharjah, and Abu Dhabi, and introduced specialised packing protocols for fine art, imported pianos, and high-gloss veneer furniture.",
          },
          {
            year: "2020",
            title: "Formal Dubai Incorporation",
            body: "Secured our official UAE commercial trade licence and instituted a dedicated developer NOC process to streamline building gate passes across Emaar, Nakheel, and Dubai Properties communities.",
          },
          {
            year: "2022",
            title: "Commercial Office Division",
            body: "Rolled out dedicated enterprise relocation workflows for IT server racks, executive workstations, and business records, offering overnight weekend moves with zero Monday downtime.",
          },
          {
            year: "Present",
            title: "UAE-Wide Coverage & 1,000+ Verified Moves",
            body: "Now operating a multi-truck fleet with a 100% full-time in-house crew across all seven emirates, with same-day dispatch available and the Pay Upon Satisfaction policy unchanged since day one.",
          },
        ]}
      />

      {/* Coverage */}
      <section className="bg-secondary">
        <div className="wrap band">
          <SectionHeading
            eyebrow="Where We Operate"
            title="One Phone Call. One Company. Anywhere in the Country."
            lede="We are based in Dubai, but we operate across the entire UAE."
            align="split"
          />

          <ul className="mt-10 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {COVERAGE.map((item) => {
              const location = LOCATIONS.find((entry) =>
                entry.label.includes(item.emirate),
              );

              const content = (
                <>
                  <h3 className="text-base font-semibold">{item.emirate}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.areas}
                  </p>
                </>
              );

              return (
                <li key={item.emirate}>
                  {location ? (
                    <Link
                      href={location.href}
                      className="flex h-full flex-col bg-background p-5 transition-colors hover:bg-accent"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div className="flex h-full flex-col bg-background p-5">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Accreditations />

      {/* Payment */}
      <section className="bg-background">
        <div className="wrap band">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <p className="eyebrow">Payment Methods</p>
              <h2 className="mt-5 max-w-[14ch] text-3xl leading-[1.15] md:text-4xl">
                Settled Your Way, After the Work
              </h2>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-muted-foreground">
                We accept multiple payment methods to keep things easy for you,
                and we explain all payment details clearly during the quoting
                process. No surprises.
              </p>
            </div>

            <ul className="grid gap-px self-start bg-hairline sm:grid-cols-3">
              {[
                {
                  icon: Wallet,
                  title: "Cash on Completion",
                  body: "Most common — you pay after the job is done.",
                },
                {
                  icon: CreditCard,
                  title: "Bank Transfer",
                  body: "Instant transfer once you have signed off on the move.",
                },
                {
                  icon: Check,
                  title: "Business Cheques",
                  body: "For commercial and corporate relocations.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <li key={title} className="bg-secondary p-6">
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 border-t border-hairline pt-8 text-sm text-muted-foreground">
            Looking for a specific service?{" "}
            {SERVICES.map((service, index) => (
              <span key={service.href}>
                <Link
                  href={service.href}
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  {service.label}
                </Link>
                {index < SERVICES.length - 1 ? " · " : "."}
              </span>
            ))}
          </p>
        </div>
      </section>

      <FAQSection
        faqs={FAQS}
        eyebrow="Straight Answers"
        heading="Frequently Asked Questions About Our Company"
        lede="Licensing, deposits, staffing, and payment — the things people actually check before booking."
      />

      <CTAWithForm
        eyebrow="No Obligation, No Pressure"
        heading="Get in Touch"
        description="If you have a move coming up — or you just want to ask a question — reach out. There is no obligation and no pressure, and we respond fast."
        tone="light"
      />
    </>
  );
}
