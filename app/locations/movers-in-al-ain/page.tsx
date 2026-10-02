import {
  Banknote,
  MessageSquare,
  PackageCheck,
  Route,
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

const PATH = "/locations/movers-in-al-ain";

export const metadata = MetadataTemplate({
  title: "Movers in Al Ain | Reliable Movers & Packers Al Ain",
  desc: "Professional movers and packers in Al Ain. We handle villa and apartment moves in Al Jimi, Zakher, and Falaj Hazzaa. No hidden fees. Get a free quote.",
  path: PATH,
  image: {
    path: "/locations/movers-in-al-ain-wrapping-majlis-seating-villa.jpg",
    alt: "Zain Movers crew wrapping majlis seating inside an Al Ain villa",
  },
});

const FAQS: Faq[] = [
  {
    question: "How much do movers cost in Al Ain?",
    answer: (
      <p>
        The price depends entirely on how much furniture you have. Moving a
        small apartment is much cheaper than moving a fully furnished 5-bedroom
        villa in Al Jimi. Send us a quick video of your rooms on WhatsApp, and
        we will give you an exact, fixed price in minutes.
      </p>
    ),
  },
  {
    question: "Do you move furniture from Al Ain to Abu Dhabi?",
    answer: (
      <p>
        Yes, we handle inter-emirate moves daily. We will pack your furniture in
        Al Ain and deliver, unpack, and reassemble it in Abu Dhabi or Dubai on
        the same day.
      </p>
    ),
  },
  {
    question: "Do you provide boxes and bubble wrap?",
    answer: (
      <p>
        Yes. When you hire our full packing service, we bring all the carton
        boxes, wardrobe boxes, packing tape, and bubble wrap. You do not need to
        buy anything in advance.
      </p>
    ),
  },
  {
    question: "Can you dismantle large custom wardrobes?",
    answer: (
      <p>
        Absolutely. Our moving teams include professional carpenters who know
        exactly how to dismantle massive sliding wardrobes and heavy wooden beds
        safely, and how to rebuild them so they remain sturdy.
      </p>
    ),
  },
  {
    question: "Do you offer services in Zakher and Al Jimi?",
    answer: (
      <p>
        Yes, we cover all areas of Al Ain. Whether you are in Zakher, Al Jimi,
        Falaj Hazzaa, or Al Towayya, we will send a team directly to your door.
      </p>
    ),
  },
  {
    question: "How long does a move from Al Ain to Abu Dhabi or Dubai take?",
    answer: (
      <p>
        A full villa or flat move from Al Ain to Abu Dhabi or Dubai typically
        takes between 6 and 8 hours. We usually start packing early in the
        morning, load the truck by midday, complete the highway drive, and
        finish unloading and assembling your furniture by late afternoon.
      </p>
    ),
  },
  {
    question:
      "Can your team handle large Arabic majlis seating and heavy wooden dining sets?",
    answer: (
      <p>
        Yes. Al Ain homes frequently feature expansive majlis rooms and solid
        wood furniture. Our movers use heavy-duty furniture blankets and stretch
        film to wrap cushions and wood frames, and we use furniture dollies to
        move heavy pieces without marking floors.
      </p>
    ),
  },
  {
    question:
      "Do you supply packing boxes in advance if I want to pack personal items myself?",
    answer: (
      <p>
        Yes. If you prefer to pack your own clothes, jewellery, and personal
        documents, let us know when booking. We can deliver sturdy packing boxes
        and tape to your home a few days before the move.
      </p>
    ),
  },
  {
    question: "Can you take down and reinstall curtains in my new villa?",
    answer: (
      <p>
        Yes. Our crew includes handy technicians equipped with standard drills
        and tools who can take down your curtain rods, window blinds, and
        wall-mounted mirrors and re-hang them cleanly in your new home.
      </p>
    ),
  },
  {
    question: "What payment methods do you accept?",
    answer: (
      <p>
        You pay after the move is completed and you have verified that all items
        arrived safely. We accept cash on delivery, direct bank transfer, and
        business cheques for commercial relocations.
      </p>
    ),
  },
];

export default function MoversInAlAinPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          generateServiceSchema({
            name: "Moving Services Al Ain",
            description:
              "Professional movers and packers in Al Ain handling villa and apartment relocations across Al Jimi, Zakher, Falaj Hazzaa, and Al Towayya with no hidden fees.",
            path: PATH,
            areaServed: [
              "Al Ain",
              "Al Jimi",
              "Al Muwaiji",
              "Falaj Hazzaa",
              "Al Towayya",
              "Zakher",
              "Asharej",
              "Al Maqam",
              "Sanaiya",
            ],
          }),
        )}
      />

      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/#coverage" },
          { name: "Movers in Al Ain", href: PATH },
        ]}
        note="Daily Al Ain – Abu Dhabi – Dubai routes"
      />

      <LocationHero
        city="Al Ain"
        title="Movers in Al Ain"
        subtitle="Professional movers and packers in the Garden City. We pack your belongings, transport them safely, and set up your new home. Pay only when you are completely satisfied with the job."
        reasons={[
          "Official UAE commercial trade licence",
          "Goods-in-transit cargo insurance included on every move",
          "Pay upon 100% satisfaction, with no upfront deposits or surprise fees",
          "Same-day moving service available across all Al Ain districts",
          "Daily moving routes between Al Ain, Abu Dhabi, and Dubai",
        ]}
        badges={[
          { label: "Licensed Company", sub: "Official UAE commercial trade licence" },
          { label: "Expert Carpenters", sub: "Majlis & custom joinery" },
          { label: "No Advance Payment", sub: "Pay upon satisfaction" },
        ]}
        imageSrc="/locations/movers-in-al-ain-wrapping-majlis-seating-villa.jpg"
        imageAlt="Zain Movers crew wrapping majlis seating inside an Al Ain villa"
        imageLabel="Al Ain villa relocation"
      />

      <section className="bg-secondary">
        <div className="wrap band">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <h2 className="max-w-[24ch] text-3xl leading-[1.15] md:text-4xl">
              Your Trusted Moving Company in Al Ain
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground [&>p]:max-w-prose">
              <p>
                Al Ain is known for its large family homes, peaceful
                neighbourhoods, and spacious villas. Moving here is very
                different from moving out of a small studio in Dubai. It
                requires a moving company that knows how to handle large volumes
                of heavy, traditional furniture without damaging it.
              </p>
              <p>
                We take the stress completely out of your moving day. As
                professional movers and packers Al Ain residents trust, we
                provide high-quality home and office shifting without cutting
                corners.
              </p>
              <p>
                When you hire us, a large, trained team arrives at your door
                with heavy-duty packing materials. We carefully dismantle your
                massive beds and wardrobes, wrap your fragile kitchenware, and
                safely load everything into clean, covered trucks. Most
                importantly, you do not pay us a single dirham until the job is
                fully complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NeighborhoodsCovered
        city="Al Ain"
        title="Covering Every Neighbourhood in the Garden City"
        lede="We know the roads, the roundabouts, and the residential layouts across the city. We send our moving teams daily to all major areas in Al Ain."
        groups={[
          {
            title: "Central and Family Suburbs",
            description:
              "We handle fast, efficient family moves across the central districts. Whether you are moving from an older villa or a newer compound, our team knows how to navigate the space safely.",
            areas: ["Al Jimi", "Al Muwaiji", "Falaj Hazzaa", "Al Towayya"],
          },
          {
            title: "Southern and University Districts",
            description:
              "If you are relocating near the UAE University area, we help university faculty, students, and local families settle into their new homes quickly.",
            areas: ["Zakher", "Asharej", "Al Maqam"],
          },
          {
            title: "Industrial and Commercial Zones",
            description:
              "For local businesses, we act as commercial movers and offer weekend moving so your business does not lose any working hours.",
            areas: ["Sanaiya (Al Ain Industrial Area)", "Al Ain City Centre"],
          },
        ]}
      />

      <LocationServices
        title="Complete Moving and Packing Services in Al Ain"
        lede="We handle every part of the relocation process so you do not have to lift a finger."
        services={[
          {
            title: "Villa Movers in Al Ain",
            tag: "Large Property",
            imageSrc: "/services/villa-movers-dubai-carrying-sofa.jpg",
            imageAlt: "Zain Movers crew carrying a sofa through an Al Ain villa living room",
            body: (
              <p>
                Villas in Al Ain are spacious and usually filled with heavy
                wooden furniture. We send a large moving crew to ensure your
                entire villa is packed, moved, and set up in a single day. We
                also handle outdoor garden furniture and heavy appliances.
              </p>
            ),
          },
          {
            title: "Flat and Apartment Moving in Al Ain",
            tag: "Residential",
            imageSrc: "/services/house-movers-dubai-crew-wrapping-sofa.jpg",
            imageAlt: "Zain Movers crew wrapping a sofa in protective blankets inside an Al Ain apartment living room",
            body: (
              <p>
                If you live in a smaller apartment or a shared compound, we
                offer fast and affordable moving services. We bring the carton
                boxes, securely pack your clothes and electronics, and move you
                out efficiently.
              </p>
            ),
          },
          {
            title: "Expert Furniture Assembly",
            tag: "Carpentry",
            imageSrc: "/services/sofa-stretch-film-corner-guards-dubai.jpg",
            imageAlt: "Sofa wrapped in stretch film and corner guards before loading by Zain Movers in Al Ain",
            body: (
              <p>
                Do not worry about losing screws or damaging the wood. Our team
                includes experienced carpenters who know how to dismantle large
                custom wardrobes, massive dining tables, and IKEA furniture. We
                safely pack the pieces and rebuild them perfectly in your new
                bedroom.
              </p>
            ),
          },
          {
            title: "Furniture Movers in Al Ain",
            tag: "Carpentry",
            imageSrc: "/services/furniture-movers-dubai-wardrobe-dismantling.jpg",
            imageAlt: "Zain Movers carpenter dismantling a large wardrobe in an Al Ain bedroom",
            body: (
              <p>
                Large bedroom sets and modular wardrobes require careful
                disassembly so that screw holes are not stripped or panels
                damaged. Our furniture carpenters work with IKEA, Home Centre,
                Pan Emirates, and custom Italian furniture every day. We dismantle
                each item, store all screws and hinges in labelled pouches, wrap panels in thick
                blankets, and rebuild everything securely.
              </p>
            ),
          },
          {
            title: "Office and Commercial Moving",
            tag: "Commercial",
            imageSrc: "/services/office-movers-dubai-wrapping-monitors.jpg",
            imageAlt: "Zain Movers crew wrapping office monitors and workstations during an office relocation in Al Ain",
            body: (
              <p>
                Business downtime costs money. We move commercial offices,
                school facilities, retail stores, and clinics across Al
                Ain&apos;s commercial districts and industrial areas. Our teams
                work during evenings and weekends so your staff can resume work
                on schedule.
              </p>
            ),
          },
        ]}
      />

      <section className="bg-secondary">
        <div className="wrap band">
          <SectionHeading
            eyebrow="Step by Step"
            title="How Our Moving Process Works"
            lede="4 straightforward steps to moving day."
            align="center"
          />
          <ProcessSteps
            className="mt-12"
            steps={[
              {
                title: "Get an Honest Quote",
                description:
                  "Call us or send room photos on WhatsApp. We provide an exact, all-inclusive price within minutes.",
                icon: MessageSquare,
              },
              {
                title: "Packing on Moving Day",
                description:
                  "Our uniformed team arrives on schedule. We pack delicate glassware in bubble wrap, dismantle beds and wardrobes, and wrap all sofas and appliances in protective film.",
                icon: PackageCheck,
              },
              {
                title: "Safe Transport in Enclosed Trucks",
                description:
                  "All belongings are loaded systematically into clean, weather-protected trucks to keep them safe from highway dust and sun.",
                icon: Truck,
              },
              {
                title: "Assembly and Pay Upon Satisfaction",
                description:
                  "At your new home, we unload boxes into their respective rooms, reassemble your furniture, and help position heavy appliances. You inspect our work, verify that everything is intact, and only pay when you are satisfied.",
                icon: Wallet,
              },
            ]}
          />
        </div>
      </section>

      <LocationLogistics
        eyebrow="Inter-Emirate Moving"
        title="Moving from Al Ain to Abu Dhabi or Dubai?"
        imageSrc="/locations/zain-movers-truck-al-ain-abu-dhabi-highway.jpg"
        imageAlt="Zain Movers truck on the highway between Al Ain and Abu Dhabi"
        imageLabel="Al Ain highway transit"
        cards={[
          {
            icon: Route,
            title: "One Team, Not Two Companies",
            body: "You do not need to hire two different companies. One single team will pack your home in Al Ain, drive the highway safely, and unpack everything for you in your new emirate.",
          },
          {
            icon: Truck,
            title: "Delivered the Same Day",
            body: "Whether you are moving from Al Ain to Abu Dhabi for work, or relocating from Dubai down to Al Ain for a quieter lifestyle, we handle the entire trip on the exact same day.",
          },
        ]}
      >
        <p>
          Because Al Ain is inland, one of the most common requests we get is
          for long-distance, inter-emirate moving.
        </p>
      </LocationLogistics>

      <LocationPricing
        title="Transparent Moving Costs in Al Ain"
        subtitle="How Much Do Movers and Packers Cost in Al Ain?"
        lede="Transparent, all-inclusive rates for local relocations within Al Ain. The written quote we send is the figure you pay."
        rows={[
          {
            property: "1 Bedroom Apartment",
            price: "AED 750 – AED 1,150",
            covers:
              "Large closed truck, 3–4 movers, full furniture wrapping, box packing, basic handyman drilling.",
          },
          {
            property: "2 Bedroom Apartment",
            price: "AED 1,150 – AED 1,600",
            covers:
              "1–2 trucks, 4–5 movers, complete packing of fragile items, bedroom setups, appliance disconnects.",
          },
          {
            property: "3 Bedroom Villa",
            price: "AED 1,800 – AED 2,600",
            covers:
              "Dedicated moving crew and supervisor, heavy furniture transport, wardrobe setups, majlis seating.",
          },
          {
            property: "4–5 Bedroom Villa",
            price: "AED 2,600 – AED 3,800",
            covers:
              "Full moving team, multiple closed trucks, complete packing, full disassembly, and assembly.",
          },
          {
            property: "Large Compound / Palace",
            price: "Custom Fixed Quote",
            covers:
              "Free on-site survey or video walkthrough for an exact, written price.",
          },
        ]}
        note={
          <>
            <strong className="font-semibold text-foreground">
              Note on highway and inter-emirate moves:
            </strong>{" "}
            Relocating between Al Ain and Abu Dhabi, Dubai, or Sharjah includes
            a modest highway transport allowance covering fuel and highway
            tolls. Send us your moving details on WhatsApp for an instant,
            guaranteed quote.
          </>
        }
      />

      <WhyChooseLocation
        title="Why Customers Recommend Zain Movers"
        lede="If you drive down to Sanaiya, you can easily find cheap men with pickup trucks offering to move your furniture. But hiring unregistered workers is a massive risk to your expensive belongings. Here is why you should choose a professional moving company instead:"
        benefits={[
          {
            icon: Wallet,
            title: "Pay Upon Satisfaction",
            body: "We completely remove your risk. You do not pay any deposit before we start. You pay the final invoice only when your furniture is built and you are happy with how everything looks in your new home.",
          },
          {
            icon: Banknote,
            title: "No Hidden Fees on Moving Day",
            body: "Unregistered movers often give you a low price over the phone, but then demand extra money for packing tape or carrying items up the stairs. We give you a fixed quote on WhatsApp before we start, and that price never changes.",
          },
          {
            icon: PackageCheck,
            title: "We Bring the Right Materials",
            body: "We do not use cheap supermarket boxes. We bring thick corrugated boxes, heavy-duty bubble wrap for your glass tables, and stretch film for your fabric sofas. Your items stay clean and safe.",
          },
        ]}
      />

      <FAQSection
        faqs={FAQS}
        heading="Frequently Asked Questions"
        lede="Pricing, carpentry, and inter-emirate timings for relocations across the Garden City."
      />

      <CTAWithForm
        eyebrow="Fixed Quote in Minutes"
        heading="Get a Free Quote for Your Al Ain Move"
        description="Stop stressing about packing and heavy lifting. Let our trained team handle your relocation safely and affordably — you only pay once everything has arrived and been rebuilt."
        tone="light"
      />
    </>
  );
}
