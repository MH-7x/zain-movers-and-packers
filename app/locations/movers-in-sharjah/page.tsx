import {
  Banknote,
  MessageSquare,
  PackageCheck,
  Route,
  ShieldCheck,
  Truck,
  Wallet,
} from "lucide-react";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ProcessSteps from "@/components/shared/ProcessSteps";
import SectionHeading from "@/components/shared/SectionHeading";
import LocationHero from "@/components/location/LocationHero";
import NeighborhoodsCovered from "@/components/location/NeighborhoodsCovered";
import LocationServices from "@/components/location/LocationServices";
import LocationLogistics from "@/components/location/LocationLogistics";
import LocationPricing from "@/components/location/LocationPricing";
import WhyChooseLocation from "@/components/location/WhyChooseLocation";
import FAQSection, { type Faq } from "@/components/shared/FAQSection";
import { CTAWithForm } from "@/components/shared/CTASection";
import { MetadataTemplate } from "@/lib/MetadataTemplate";
import { generateServiceSchema, jsonLdProps } from "@/lib/Schema";

const PATH = "/locations/movers-in-sharjah";

export const metadata = MetadataTemplate({
  title: "Movers in Sharjah | Same-Day Moves, No Hidden Fees",
  desc: "Movers and packers in Sharjah for Al Nahda, Muweilah, Al Majaz and University City. Same-day slots, fixed quotes, pay after the move.",
  path: PATH,
  image: {
    path: "/locations/movers-in-sharjah-carrying-wrapped-furniture.jpg",
    alt: "Zain Movers crew carrying wrapped furniture out of a Sharjah apartment building",
  },
});

const FAQS: Faq[] = [
  {
    question: "How much do movers charge in Sharjah?",
    answer: (
      <p>
        The cost depends on the size of your home and how much furniture needs
        to be moved. A studio move in Al Nahda is much cheaper than a 3-bedroom
        villa in Al Majaz. Send us a short video on WhatsApp and we will give
        you a fixed price in a few minutes.
      </p>
    ),
  },
  {
    question: "Do you move from Sharjah to Dubai in one day?",
    answer: (
      <p>
        Yes. We do Sharjah to Dubai inter-emirate moves every day. We pack in
        the morning and deliver to your new Dubai home the same day. The same
        applies for Dubai to Sharjah moves.
      </p>
    ),
  },
  {
    question: "Do you cover University City and Muweilah?",
    answer: (
      <p>
        Yes, absolutely. Muweilah and University City are areas we service very
        regularly. We know the apartment buildings there well and can organise a
        fast, affordable move for you.
      </p>
    ),
  },
  {
    question: "Do you require a deposit or advance payment?",
    answer: (
      <p>
        No. Our Pay Upon Satisfaction policy applies to every job, including all
        Sharjah moves. You pay the full amount only after the furniture is set
        up and you are happy with the result.
      </p>
    ),
  },
  {
    question: "Can you move a full villa in Sharjah?",
    answer: (
      <p>
        Yes. We handle full villa relocations in Sharjah. We will send a team
        large enough to get your entire villa packed, moved, and set up in one
        day. Contact us for a free assessment.
      </p>
    ),
  },
];

export default function MoversInSharjahPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          generateServiceSchema({
            name: "Moving Services Sharjah",
            description:
              "Professional movers and packers in Sharjah covering Al Nahda, Muweilah, Al Majaz and all areas, with inter-emirate moves to Dubai and no hidden fees.",
            path: PATH,
            areaServed: [
              "Sharjah",
              "Al Nahda",
              "Muweilah",
              "University City",
              "Al Majaz",
              "Al Khan",
              "Al Taawun",
              "Al Qasimia",
              "Al Yarmuk",
              "Sharjah Industrial Area",
            ],
          }),
        )}
      />

      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/#coverage" },
          { name: "Movers in Sharjah", href: PATH },
        ]}
        note="Daily Sharjah – Dubai – Ajman routes"
      />

      <LocationHero
        city="Sharjah"
        title="Professional Movers in Sharjah"
        subtitle="Trusted movers and packers serving every Sharjah neighbourhood. Fixed prices, no hidden fees, and you pay only when you are satisfied with the job."
        reasons={[
          "Official UAE commercial trade licence",
          "Goods-in-transit cargo insurance for all your belongings",
          "Pay upon 100% satisfaction, with no upfront deposits or hostage fees",
          "Daily moving trips between Sharjah, Dubai, Ajman, and Abu Dhabi",
          "Same-day urgent moving available across Sharjah",
        ]}
        badges={[
          { label: "Licensed Company", sub: "Official UAE commercial trade licence" },
          { label: "Fully Insured", sub: "Goods-in-transit cover" },
          { label: "No Advance Payment", sub: "Pay upon satisfaction" },
        ]}
        imageSrc="/locations/movers-in-sharjah-carrying-wrapped-furniture.jpg"
        imageAlt="Zain Movers crew carrying wrapped furniture out of a Sharjah apartment building"
        imageLabel="Sharjah apartment move"
      />

      <section className="bg-secondary">
        <div className="wrap band">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <h2 className="max-w-[20ch] text-3xl leading-[1.15] md:text-4xl">
              Trusted Moving Company in Sharjah
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground [&>p]:max-w-prose">
              <p>
                Sharjah is one of the most populated residential emirates in the
                UAE. Thousands of families and working professionals move in and
                out every single month. Finding a reliable moving company in
                Sharjah that turns up on time, charges what they promised, and
                takes care of your furniture is not always easy.
              </p>
              <p>
                We are here to make that simple. As experienced movers and
                packers Sharjah residents have used for years, we handle house
                shifting, villa relocations, furniture moving, and office moves
                across the entire emirate.
              </p>
              <p>
                We bring all the packing materials, we dismantle and rebuild
                your furniture, and you pay nothing upfront. The final bill only
                comes after the job is done and you are happy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NeighborhoodsCovered
        city="Sharjah"
        title="We Cover All Sharjah Neighbourhoods"
        lede="We know Sharjah's layout, its building rules, and its roads. Here are the main areas we operate in."
        groups={[
          {
            title: "Al Nahda and Surrounding Areas",
            description:
              "One of the most densely populated areas in Sharjah, with thousands of apartments. We move in and out of these towers daily. We know which buildings have large service elevators and which ones require careful planning.",
            areas: ["Al Nahda 1", "Al Nahda 2"],
          },
          {
            title: "University City and Muweilah",
            description:
              "Packed with young families and university students. Moves here are often quick studio or 1BHK jobs, but they still need to be done properly — and you are settled by the same evening.",
            areas: ["University City", "Muweilah"],
          },
          {
            title: "Al Majaz, Al Khan and Al Taawun",
            description:
              "Established communities with a mix of older apartments and mid-sized villas. Whether you are leaving an older building or moving into a newer tower, we manage the whole process.",
            areas: [
              "Al Majaz",
              "Al Khan",
              "Al Qasimia",
              "Al Taawun",
              "Halwan",
              "Rolla",
            ],
          },
          {
            title: "Sharjah Industrial Area and Commercial Zones",
            description:
              "For business moves, we offer weekend and after-hours office relocations so your business loses no working time.",
            areas: ["Sharjah Industrial Area", "Al Saja'a", "Sharjah Free Zone"],
          },
        ]}
      />

      <LocationServices
        title="Complete Moving Services for Flats, Villas, and Businesses"
        lede="Whatever type of property you are moving from or to, we have the right team for the job."
        services={[
          {
            title: "House Shifting Sharjah",
            tag: "Residential",
            imageSrc: "/services/house-movers-dubai-crew-wrapping-sofa.jpg",
            imageAlt: "Zain Movers crew wrapping a sofa in protective blankets inside a Sharjah apartment living room",
            body: (
              <p>
                This is the most common service we provide in Sharjah. Studios,
                1BHK, 2BHK, and 3BHK apartment moves across Al Nahda, Muweilah,
                and every other community. We pack your kitchen plate by plate,
                dismantle your wardrobe, load the truck safely, and set
                everything back up in the new flat.
              </p>
            ),
          },
          {
            title: "Apartment Movers in Sharjah",
            tag: "High-Rise",
            imageSrc: "/services/cheap-movers-dubai-studio-apartment-move.jpg",
            imageAlt: "Zain Movers crew loading a Sharjah apartment move into a branded truck",
            body: (
              <>
                <p>
                  Our apartment moving service covers everything from packing
                  delicate dinnerware to wrapping large couches.
                </p>
                <p>
                  We supply clean, double-wall corrugated cartons, rolls of
                  bubble wrap, and wardrobe boxes for your hanging clothes so
                  you do not have to iron everything again after moving.
                </p>
              </>
            ),
          },
          {
            title: "Villa Movers Sharjah",
            tag: "Large Property",
            imageSrc: "/services/villa-movers-dubai-carrying-sofa.jpg",
            imageAlt: "Zain Movers crew carrying a sofa through a Sharjah villa living room",
            body: (
              <p>
                Older villas in areas like Al Yarmuk and Al Qasimia tend to have
                a lot of heavy, older furniture — big wooden sofas, heavy dining
                tables, and large storage cabinets. We have a specific team
                trained for large villa moves, and we bring enough manpower to
                get it all done in one day.
              </p>
            ),
          },
          {
            title: "Furniture Movers Sharjah",
            tag: "Single Items",
            imageSrc: "/services/furniture-movers-dubai-wardrobe-dismantling.jpg",
            imageAlt: "Zain Movers carpenter dismantling a large wardrobe in a Sharjah bedroom",
            body: (
              <p>
                Not every move is a full house. If you have bought a second-hand
                wardrobe, need to send a sofa to a relative, or want to move a
                treadmill from one flat to another, we handle single and
                multi-item furniture moves across Sharjah affordably.
              </p>
            ),
          },
          {
            title: "Office Movers Sharjah",
            tag: "Commercial",
            imageSrc: "/services/office-movers-dubai-wrapping-monitors.jpg",
            imageAlt: "Zain Movers crew wrapping office monitors and workstations during an office relocation in Sharjah",
            body: (
              <p>
                We relocate offices across Sharjah&apos;s business districts and
                industrial zones, including the Sharjah Industrial Area, Al
                Saja&apos;a, and the Sharjah Free Zone. We work overnight or
                during weekends so your team can walk back into a fully set up
                office on their next working day.
              </p>
            ),
          },
        ]}
      />

      <section className="bg-secondary">
        <div className="wrap band">
          <SectionHeading
            eyebrow="Step by Step"
            title="Our Moving Process in Sharjah"
            align="center"
          />
          <ProcessSteps
            className="mt-12"
            steps={[
              {
                title: "Quick, Clear Quote",
                description:
                  "Give us a call or send photos of your rooms on WhatsApp. We will give you a clear, fixed quote without pushy sales talk.",
                icon: MessageSquare,
              },
              {
                title: "Packing on Moving Day",
                description:
                  "Our uniformed movers arrive on time. We pack kitchen items in bubble wrap, dismantle beds and wardrobes, and wrap all sofas and appliances in protective film.",
                icon: PackageCheck,
              },
              {
                title: "Safe Transport in Closed Trucks",
                description:
                  "Everything is loaded securely into clean, covered trucks to protect against dust, humidity, and heat during transport.",
                icon: Truck,
              },
              {
                title: "Assembly and Pay Upon Satisfaction",
                description:
                  "At your new home, we unload boxes into their designated rooms, reassemble your beds and cupboards, and position heavy appliances. You inspect our work, check that nothing is scratched or missing, and only pay once you are satisfied.",
                icon: Wallet,
              },
            ]}
          />
        </div>
      </section>

      <LocationLogistics
        eyebrow="Inter-Emirate Corridor"
        title="Moving from Sharjah to Dubai"
        imageSrc="/locations/zain-movers-truck-sharjah-dubai-sunrise.jpg"
        imageAlt="Zain Movers truck travelling between Sharjah and Dubai at sunrise"
        imageLabel="Sharjah – Dubai corridor"
        cards={[
          {
            icon: Route,
            title: "One Team, Both Emirates",
            body: "Because we operate in both emirates, you deal with one team for the whole job. No middlemen, no handoffs, no confusion.",
          },
          {
            icon: Truck,
            title: "Same-Day Delivery",
            body: "We pack your home in the morning, drive safely, and have your furniture rebuilt and ready in your new home the same day.",
          },
        ]}
      >
        <p>
          One of the most common moves in the UAE is between Sharjah and Dubai.
          Thousands of people make this change every year — either upgrading to
          Dubai or saving on rent by moving to Sharjah.
        </p>
        <p>
          We handle movers and packers Sharjah to Dubai every week, and the
          other direction too.
        </p>
      </LocationLogistics>

      <LocationPricing
        title="Transparent Moving Rates in Sharjah"
        subtitle="How Much Do Movers and Packers Cost in Sharjah?"
        lede="Moving costs in Sharjah are generally more affordable than in Dubai, but prices still vary depending on furniture volume, packing requirements, and whether stairs are involved. The quote we provide is the final price you pay."
        rows={[
          {
            property: "Studio Apartment",
            price: "AED 550 – AED 850",
            covers:
              "1 closed moving truck, 2–3 professional movers, complete packing, furniture disassembly, and reassembly.",
          },
          {
            property: "1 Bedroom Apartment",
            price: "AED 850 – AED 1,250",
            covers:
              "Large closed truck, 3–4 movers, full furniture wrapping, box packing, basic handyman drilling.",
          },
          {
            property: "2 Bedroom Apartment",
            price: "AED 1,200 – AED 1,700",
            covers:
              "1–2 trucks, 4–5 movers, complete packing of fragile items, bedroom setups, appliance disconnects.",
          },
          {
            property: "3 Bedroom Villa",
            price: "AED 1,900 – AED 2,800",
            covers:
              "Full moving crew and supervisor, heavy furniture transport, wardrobe setups, garden furniture.",
          },
          {
            property: "4+ Bedroom Villa",
            price: "Custom Fixed Quote",
            covers:
              "Free on-site survey or video walkthrough for an exact, written quote.",
          },
        ]}
        note={
          <>
            <strong className="font-semibold text-foreground">
              Our price commitment:
            </strong>{" "}
            No surprise charges for building stairs or long corridors. No extra
            fees for Salik, Darb, or parking meters. No payment is taken until
            your furniture is assembled and you are satisfied.
          </>
        }
      />

      <WhyChooseLocation
        title="Why Our Customers Recommend Us"
        lede="There are many options when you search for cheap movers in Sharjah. But our customers come back to us because we deliver on what we promise."
        benefits={[
          {
            icon: Wallet,
            title: "Pay Upon Satisfaction",
            body: "We do not take a single dirham before the move is finished. You check the work, and you pay only when you are completely satisfied. This is our standard policy for every job.",
          },
          {
            icon: MessageSquare,
            title: "Fixed WhatsApp Quotes",
            body: "Send us a quick video or a few photos of your rooms on WhatsApp. We will give you a fixed, final price immediately. No surprise charges on moving day for extra tape or heavy furniture.",
          },
          {
            icon: Banknote,
            title: "Affordable Movers Sharjah",
            body: "We keep our prices fair. We own our trucks and train our own staff, which means we do not mark up costs unnecessarily. Sharjah has a lot of budget-conscious residents and we are built for that.",
          },
          {
            icon: ShieldCheck,
            title: "Fully Licensed and Insured",
            body: "We are a registered UAE moving company. Your belongings are insured while they are in our hands. You can ask for our trade licence before booking — we have nothing to hide.",
          },
        ]}
      />

      <FAQSection
        faqs={FAQS}
        heading="Frequently Asked Questions"
        lede="Pricing, coverage, and inter-emirate scheduling for moves across Sharjah."
      />

      <CTAWithForm
        eyebrow="Fast Local Response"
        heading="Get a Free Moving Quote in Sharjah"
        description="Our team is ready to help you move quickly, safely, and at a fair price. Remember: you only pay when you are completely satisfied with the job."
        tone="light"
      />
    </>
  );
}
