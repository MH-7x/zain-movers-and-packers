import {
  Banknote,
  FileCheck2,
  MessageSquare,
  PackageCheck,
  Route,
  Truck,
  Wallet,
} from "lucide-react";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import NarrativeBand from "@/components/shared/NarrativeBand";
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

const PATH = "/locations/movers-in-ajman";

export const metadata = MetadataTemplate({
  title: "Movers in Ajman | Reliable Movers and Packers Ajman",
  desc: "Professional movers and packers in Ajman. We cover Ajman Downtown, Al Nuaimia, and Rashidiya. Safe packing, no hidden fees. Get a free fixed quote.",
  path: PATH,
  image: {
    path: "/og/movers-in-ajman.jpg",
    alt: "Zain Movers crew loading a covered truck during an Ajman apartment move",
  },
});

const FAQS: Faq[] = [
  {
    question: "Do I need a move-out permission letter from my building in Ajman?",
    answer: (
      <>
        <p>
          Yes. Most landlords and building management companies in Ajman require
          a move-out clearance letter confirming that your rent, electricity,
          and water bills are settled.
        </p>
        <p>
          Once you have this letter, building security will allow our truck into
          the parking area. We can share our trade licence and driver
          information whenever building management asks.
        </p>
      </>
    ),
  },
  {
    question: "How much do packers and movers cost in Ajman?",
    answer: (
      <p>
        The price depends entirely on how much furniture you have. A studio
        apartment is much cheaper to move than a fully furnished villa in Al
        Rawda. Send us a quick video of your rooms on WhatsApp, and we will give
        you an exact, fixed price in minutes.
      </p>
    ),
  },
  {
    question: "Do I need a moving permit to shift in Ajman?",
    answer: (
      <p>
        It depends on your building. Many apartment towers in Al Nuaimia and
        Ajman Downtown require a No Objection Certificate (NOC) from building
        management. We provide all our company documents so you can get this
        permit easily.
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
    question: "Can you move my furniture on the same day?",
    answer: (
      <p>
        Yes, we offer same-day and next-day moving services in Ajman. If you
        need to move urgently, call us directly and we will dispatch a team as
        fast as possible.
      </p>
    ),
  },
  {
    question:
      "Can you move my flat from Ajman to Dubai or Sharjah on the same day?",
    answer: (
      <p>
        Yes. Moves between Ajman, Sharjah, and Dubai are part of our everyday
        routine. We usually start packing early in the morning, load the truck
        by midday, and complete delivery and reassembly at your new address by
        the afternoon.
      </p>
    ),
  },
  {
    question: "Do you move just one piece of heavy furniture?",
    answer: (
      <p>
        Yes. If you bought a heavy sofa online or need a fridge moved to another
        flat, we offer affordable single-item moving services across Ajman.
      </p>
    ),
  },
];

export default function MoversInAjmanPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          generateServiceSchema({
            name: "Moving Services Ajman",
            description:
              "Professional movers and packers in Ajman covering Ajman Downtown, Al Nuaimia, Rashidiya and all suburbs, with safe packing and no hidden fees.",
            path: PATH,
            areaServed: [
              "Ajman",
              "Ajman Downtown",
              "Al Nuaimia",
              "Rashidiya",
              "Ajman Marina",
              "Al Rawda",
              "Al Jurf",
              "Al Mowaihat",
            ],
          }),
        )}
      />

      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/#coverage" },
          { name: "Movers in Ajman", href: PATH },
        ]}
        note="Daily Ajman – Sharjah – Dubai trips"
      />

      <LocationHero
        city="Ajman"
        title="Movers in Ajman"
        subtitle="Professional, affordable movers and packers in Ajman. We dismantle, pack, and move your furniture safely. Pay only when you are completely satisfied with the job."
        reasons={[
          "Official UAE commercial trade licence",
          "Goods-in-transit cargo insurance included",
          "Pay upon 100% satisfaction, with no upfront deposits or surprise fees",
          "Same-day and urgent moving service available across all Ajman areas",
          "Daily direct moving trips to Dubai, Sharjah, and Abu Dhabi",
        ]}
        badges={[
          { label: "Licensed Company", sub: "Official UAE commercial trade licence" },
          { label: "Expert Packing", sub: "Heavy-duty materials supplied" },
          { label: "No Advance Payment", sub: "Pay upon satisfaction" },
        ]}
        imageSrc="/locations/movers-in-ajman-wrapped-furniture-apartment.jpg"
        imageAlt="Zain Movers team carrying wrapped furniture into an Ajman apartment building"
        imageLabel="Ajman residential move"
      />

      <section className="bg-secondary">
        <div className="wrap band">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <h2 className="max-w-[20ch] text-3xl leading-[1.15] md:text-4xl">
              Your Trusted Moving Company in Ajman
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground [&>p]:max-w-prose">
              <p>
                Finding a reliable moving company in Ajman can be stressful,
                especially when you are on a budget. You want an affordable
                price, but you do not want unverified workers damaging your
                expensive furniture or scratching your walls.
              </p>
              <p>
                We solve that problem. As professional movers and packers Ajman
                residents trust, we provide high-quality home and office
                shifting without cutting corners.
              </p>
              <p>
                When you hire us, a trained team arrives with heavy-duty packing
                materials. We carefully dismantle your beds and wardrobes, wrap
                your fragile kitchenware, and safely load everything into clean,
                covered trucks. Most importantly, you do not pay us a single
                dirham until the job is done.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NeighborhoodsCovered
        city="Ajman"
        title="Covering Every Neighbourhood in Ajman"
        lede="We know the roads, the building management rules, and the parking situations across the city. We send our moving teams daily to all major areas in Ajman."
        groups={[
          {
            title: "Central Ajman",
            description:
              "If you live in a high-rise apartment, we manage the elevator bookings and parking permits, and handle fast, efficient moves across the city centre.",
            areas: ["Ajman Downtown", "Al Nuaimia", "Rashidiya"],
          },
          {
            title: "Coastal and New Developments",
            description:
              "Moving in or out of premium properties requires extra care to avoid property damage. We provide careful packing and moving for waterfront residents.",
            areas: ["Ajman Marina", "Ajman Corniche"],
          },
          {
            title: "Residential Suburbs",
            description:
              "If you are moving a larger family home or villa, we bring a larger team to ensure your villa move is finished in one day, including all garden furniture and heavy appliances.",
            areas: ["Al Rawda", "Al Jurf", "Al Mowaihat"],
          },
        ]}
      />

      <LocationServices
        title="Complete House Shifting and Packing Services"
        lede="We handle every part of the moving process so you do not have to lift a finger."
        services={[
          {
            title: "House and Apartment Moving",
            tag: "Residential",
            imageSrc: "/services/house-movers-dubai-crew-wrapping-sofa.jpg",
            imageAlt: "Zain Movers crew wrapping a sofa in protective blankets inside an Ajman apartment living room",
            body: (
              <p>
                This is what we do best. Whether you are moving a small studio
                or a massive 3BHK flat, we handle the full process. We bring the
                carton boxes, pack your clothes, protect your TVs, and set
                everything up in your new home.
              </p>
            ),
          },
          {
            title: "Furniture Dismantling and Assembly",
            tag: "Carpentry",
            imageSrc: "/services/furniture-movers-dubai-wardrobe-dismantling.jpg",
            imageAlt: "Zain Movers carpenter dismantling a large wardrobe in an Ajman bedroom",
            body: (
              <p>
                Do not worry about losing screws or damaging the wood. Our team
                includes experienced handymen who know how to dismantle large
                beds, massive sliding wardrobes, and IKEA furniture. We safely
                pack the pieces and rebuild them perfectly in your new bedroom.
              </p>
            ),
          },
          {
            title: "Commercial and Office Moving",
            tag: "Commercial",
            imageSrc: "/services/office-movers-dubai-wrapping-monitors.jpg",
            imageAlt: "Zain Movers crew wrapping office monitors and workstations during an office relocation in Ajman",
            body: (
              <p>
                If you are relocating a business in Ajman, we know you cannot
                afford to close during the week. We offer weekend and
                after-hours office moving so your staff can get straight back to
                work without losing any time.
              </p>
            ),
          },
          {
            title: "Single-Item and Urgent Moves",
            tag: "Same Day",
            imageSrc: "/services/cheap-movers-dubai-studio-apartment-move.jpg",
            imageAlt: "Zain Movers crew loading a single-item move into a branded truck in Ajman",
            body: (
              <p>
                If you bought a heavy sofa online or need a fridge moved to
                another flat, we offer affordable single-item moving services
                across Ajman, including same-day and next-day dispatch.
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
            align="center"
          />
          <ProcessSteps
            className="mt-12"
            steps={[
              {
                title: "Instant, Clear Quote",
                description:
                  "Call us or send room photos on WhatsApp. We provide an exact, written quote within minutes.",
                icon: MessageSquare,
              },
              {
                title: "On-Time Packing and Disassembly",
                description:
                  "Our uniformed crew arrives on time. We pack kitchen items in bubble wrap, dismantle beds and wardrobes, and wrap all sofas in thick stretch film.",
                icon: PackageCheck,
              },
              {
                title: "Safe Transport in Enclosed Trucks",
                description:
                  "Your goods are loaded systematically into clean, weather-protected trucks to keep them safe from dust and transit bumps.",
                icon: Truck,
              },
              {
                title: "Reassembly and Pay Upon Satisfaction",
                description:
                  "At your new flat or villa, we place boxes in their respective rooms, rebuild your furniture, and help position appliances. You inspect everything, and only pay when you are completely satisfied.",
                icon: Wallet,
              },
            ]}
          />
        </div>
      </section>

      <LocationLogistics
        eyebrow="Our Fleet"
        title="Our Moving Fleet in Ajman"
        subtitle="The Right Covered Truck for Every Job"
        imageSrc="/locations/zain-movers-covered-fleet-ajman-dispatch.jpg"
        imageAlt="Zain Movers covered trucks lined up before an Ajman dispatch"
        imageLabel="Covered fleet — Ajman dispatch"
        cards={[
          {
            icon: Truck,
            title: "3-Ton Covered Trucks",
            body: "Perfect for 2 to 3-bedroom apartments and full villa moves. Sized to hold large wardrobes, sofas, and dozens of boxes securely in one trip.",
          },
          {
            icon: Truck,
            title: "1.5-Ton Covered Trucks",
            body: "Ideal for 1-bedroom apartments and small family flats across town.",
          },
          {
            icon: Route,
            title: "1-Ton Covered Pickups",
            body: "Sized for quick studio moves, small deliveries, or individual furniture pieces.",
          },
        ]}
      >
        <p>
          We never use open-bed pickups that expose your mattresses and couches
          to roadside dust, humidity, or sudden rain.
        </p>
        <p>
          Your goods are loaded systematically into clean, weather-protected
          trucks to keep them safe from dust and transit bumps.
        </p>
      </LocationLogistics>

      <NarrativeBand
        surface="plain"
        eyebrow="Inter-Emirate Moving"
        title="Moving Between Ajman, Sharjah, and Dubai?"
      >
        <p>
          A lot of people move from Ajman to Dubai to be closer to work, or move
          from Dubai to Ajman to get larger apartments for less rent.
        </p>
        <p>
          We handle these inter-emirate moves every single day. You do not need
          two different companies. One single team will pack your home in Ajman,
          drive the truck to Dubai or Sharjah, and unpack everything for you on
          the exact same day.
        </p>
      </NarrativeBand>

      <LocationPricing
        title="Transparent Moving Costs in Ajman"
        subtitle="How Much Do Movers and Packers Cost in Ajman?"
        lede="Ajman rates are among the most affordable in the UAE. The written quote we send on WhatsApp is the exact figure you pay on moving day."
        rows={[
          {
            property: "Studio Apartment",
            price: "AED 500 – AED 750",
            covers:
              "1 closed moving truck, 2–3 professional movers, complete packing, furniture disassembly, and reassembly.",
          },
          {
            property: "1 Bedroom Apartment",
            price: "AED 750 – AED 1,150",
            covers:
              "Large closed truck, 3–4 movers, full furniture wrapping, box packing, basic handyman drilling.",
          },
          {
            property: "2 Bedroom Apartment",
            price: "AED 1,150 – AED 1,650",
            covers:
              "1–2 trucks, 4–5 movers, complete packing of fragile items, bedroom setups, appliance disconnects.",
          },
          {
            property: "Villa (2–3 Bedrooms)",
            price: "AED 1,600 – AED 2,400",
            covers:
              "Dedicated moving crew and supervisor, heavy furniture transport, wardrobe setups, garden furniture.",
          },
          {
            property: "4+ Bedroom Villa",
            price: "Custom Fixed Quote",
            covers:
              "Free video survey or home visit for an exact, all-inclusive price.",
          },
        ]}
        note={
          <>
            <strong className="font-semibold text-foreground">
              Our honest pricing guarantee:
            </strong>{" "}
            No surprise extra charges for stairs or long walking paths. No
            hidden fees for tape, bubble wrap, or Salik/Darb tolls on highway
            routes. You do not pay until our crew finishes assembly and you
            inspect your home.
          </>
        }
      />

      <WhyChooseLocation
        title="Why We Are the Best Choice for Budget Movers in Ajman"
        lede="There are many cheap movers out on the street with rented pickups. But hiring them is a huge risk. Here is why you should choose a registered moving company instead:"
        benefits={[
          {
            icon: Wallet,
            title: "Pay Upon Satisfaction",
            body: "We completely remove your risk. You do not pay any deposit. You pay the final invoice only when your furniture is built and you are happy with how everything looks.",
          },
          {
            icon: Banknote,
            title: "No Hidden Fees on Moving Day",
            body: "Unregistered movers often give you a low price over the phone, but then demand extra money for packing tape or carrying items up stairs. We give you a fixed quote on WhatsApp before we start, and that price never changes.",
          },
          {
            icon: PackageCheck,
            title: "We Bring the Right Materials",
            body: "We do not use cheap supermarket boxes. We use thick corrugated boxes, heavy-duty bubble wrap for your glass tables, and stretch film for your sofas. Your items stay clean and safe.",
          },
          {
            icon: FileCheck2,
            title: "Building NOCs and Permits",
            body: "Many buildings in Ajman now require a moving permit (NOC) before you can shift your furniture. Because we are a licensed company, we provide our trade documents immediately so you can get your permit without delays.",
          },
        ]}
      />

      <FAQSection
        faqs={FAQS}
        heading="Frequently Asked Questions"
        lede="Permits, pricing, and same-day scheduling for moves across Ajman."
      />

      <CTAWithForm
        eyebrow="Fixed Quote in Minutes"
        heading="Get a Free Quote for Your Ajman Move"
        description="Send us a short video of your rooms and we will send back an exact, all-inclusive price. You only pay once our crew finishes assembly and you have inspected your new home."
        tone="light"
      />
    </>
  );
}
