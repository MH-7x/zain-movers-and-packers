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

const PATH = "/locations/movers-in-ras-al-khaimah";

export const metadata = MetadataTemplate({
  title: "Movers in Ras Al Khaimah | Fixed Price, No Hidden Fees",
  desc: "Movers and packers in Ras Al Khaimah for Al Hamra, Khuzam and Marjan Island. Villa and apartment moves with fixed quotes. Pay after the move.",
  path: PATH,
  image: {
    path: "/locations/movers-in-ras-al-khaimah-villa-unloading.jpg",
    alt: "Zain Movers crew unloading wrapped furniture at a Ras Al Khaimah villa",
  },
});

const FAQS: Faq[] = [
  {
    question: "How much do movers charge in Ras Al Khaimah?",
    answer: (
      <p>
        The cost depends on the size of your home and how much furniture needs
        to be dismantled and packed. A studio move is much cheaper than a large
        villa in Al Hamra. Send us a quick video of your home on WhatsApp, and
        we will give you a guaranteed fixed price.
      </p>
    ),
  },
  {
    question:
      "Do I need a gate pass before moving into Al Hamra Village or Mina Al Arab?",
    answer: (
      <p>
        Yes. Most private gated communities in RAK require a move-in or move-out
        permit from community management. You will need your tenancy contract,
        Emirates ID, and our moving company details. Once you book, we promptly
        share our trade licence and driver information so your gate security
        pass is approved without delay.
      </p>
    ),
  },
  {
    question: "Do you move furniture from RAK to Dubai?",
    answer: (
      <p>
        Yes. We specialise in inter-emirate moves. We will pack your furniture
        in Ras Al Khaimah and deliver, unpack, and reassemble it in Dubai on the
        same day. We also cover Sharjah and Abu Dhabi.
      </p>
    ),
  },
  {
    question: "How long does a move from Ras Al Khaimah to Dubai take?",
    answer: (
      <p>
        A standard apartment move from RAK to Dubai typically takes between 4
        and 6 hours from start to finish. We usually begin packing early in the
        morning, load the truck by late morning, drive to Dubai, and complete
        unloading and assembly by mid-afternoon.
      </p>
    ),
  },
  {
    question: "Do you provide packing boxes?",
    answer: (
      <p>
        Yes. When you book our full packing and moving service, we bring all the
        necessary carton boxes, wardrobe hanging boxes, packing tape, and bubble
        wrap. You do not need to buy any materials.
      </p>
    ),
  },
  {
    question: "Can you dismantle and reassemble my IKEA furniture?",
    answer: (
      <p>
        Absolutely. Our team is highly experienced with IKEA furniture. We know
        exactly how to take it apart without damaging the compressed wood and
        how to rebuild it so it remains sturdy.
      </p>
    ),
  },
  {
    question: "Do you handle office relocations in RAK Free Zone?",
    answer: (
      <p>
        Yes. We have dedicated commercial movers who manage office and warehouse
        relocations in RAKEZ and other business hubs in Ras Al Khaimah. We
        provide our trade licence for any required building permits.
      </p>
    ),
  },
];

export default function MoversInRasAlKhaimahPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          generateServiceSchema({
            name: "Moving Services Ras Al Khaimah",
            description:
              "Professional movers and packers in Ras Al Khaimah handling villa, apartment, and office relocations across Al Hamra, Marjan Island, Mina Al Arab, and Khuzam.",
            path: PATH,
            areaServed: [
              "Ras Al Khaimah",
              "Al Hamra Village",
              "Marjan Island",
              "Mina Al Arab",
              "Khuzam",
              "Al Nakheel",
              "Al Dhait",
              "RAK Free Zone",
            ],
          }),
        )}
      />

      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/#coverage" },
          { name: "Movers in Ras Al Khaimah", href: PATH },
        ]}
        note="Daily RAK – Dubai – Sharjah corridor"
      />

      <LocationHero
        city="Ras Al Khaimah"
        title="Reliable Movers in Ras Al Khaimah"
        subtitle="Professional movers and packers handling apartments, villas, and offices across RAK. We provide the boxes, pack your items, and move you safely. Pay only when you are completely satisfied."
        reasons={[
          "Official UAE commercial trade licence",
          "Goods-in-transit cargo insurance included on every move",
          "Pay upon 100% satisfaction, with no upfront deposits or surprise fees",
          "Same-day moving service available across all RAK areas",
          "Daily inter-emirate moving trips between RAK, Dubai, Sharjah, and Abu Dhabi",
        ]}
        badges={[
          { label: "Licensed Company", sub: "Official UAE commercial trade licence" },
          { label: "Expert Packing", sub: "All materials supplied" },
          { label: "No Advance Payment", sub: "Pay upon satisfaction" },
        ]}
        imageSrc="/locations/movers-in-ras-al-khaimah-villa-unloading.jpg"
        imageAlt="Zain Movers crew unloading wrapped furniture at a Ras Al Khaimah villa"
        imageLabel="RAK villa relocation"
      />

      <section className="bg-secondary">
        <div className="wrap band">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <h2 className="max-w-[20ch] text-3xl leading-[1.15] md:text-4xl">
              Professional Moving Company in Ras Al Khaimah
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground [&>p]:max-w-prose">
              <p>
                Moving to a new home should be exciting, but the physical work
                of packing and carrying heavy furniture ruins the experience.
                Whether you are moving into a family villa in Mina Al Arab or
                setting up a new apartment in Al Nakheel, you need a team you
                can trust with your belongings.
              </p>
              <p>
                We take the heavy lifting off your shoulders. As a fully
                licensed moving company Ras Al Khaimah residents rely on, we
                handle the entire relocation process from start to finish.
              </p>
              <p>
                Our team arrives with professional packing materials, dismantles
                your large furniture, wraps your fragile items safely, and
                transports everything in clean, secure trucks. We rebuild your
                beds and wardrobes at your new place, and you only pay us when
                the job is done.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NeighborhoodsCovered
        city="Ras Al Khaimah"
        title="Serving All Ras Al Khaimah Communities"
        lede="Ras Al Khaimah has a mix of luxury coastal communities, traditional family suburbs, and busy business zones. We have moving teams operating across all of them."
        groups={[
          {
            title: "Luxury and Coastal Living",
            description:
              "Moving into high-end properties requires extra care to protect both the furniture and the property walls. We regularly handle premium villa and apartment moves on the coast.",
            areas: ["Al Hamra Village", "Marjan Island", "Mina Al Arab"],
          },
          {
            title: "Central and Established Areas",
            description:
              "If you are moving within the older or more central family districts, we provide fast, affordable house shifting services.",
            areas: ["Khuzam", "Al Nakheel", "Al Dhait", "Dafan Al Khor"],
          },
          {
            title: "Business Hubs and Commercial Zones",
            description:
              "For companies setting up or relocating, we act as dedicated commercial movers. We understand building rules and work efficiently to minimise your downtime.",
            areas: ["RAK Free Zone (RAKEZ)", "Industrial sectors"],
          },
        ]}
      />

      <LocationServices
        title="Comprehensive Movers and Packers Ras Al Khaimah"
        lede="We do not just offer a truck and a driver. We provide a complete relocation service tailored to what you actually need."
        services={[
          {
            title: "Villa Movers in Ras Al Khaimah",
            tag: "Large Property",
            imageSrc: "/services/villa-movers-dubai-wrapping-oversized-wardrobe.jpg",
            imageAlt: "Movers wrapping an oversized wardrobe before loading it from a Ras Al Khaimah villa",
            body: (
              <p>
                Villas in RAK are spacious and often contain large, heavy wooden
                furniture and outdoor garden equipment. We send a large moving
                crew to ensure your entire villa is packed, moved, and set up in
                a single day.
              </p>
            ),
          },
          {
            title: "Studio and Apartment Moving in RAK",
            tag: "Residential",
            imageSrc: "/services/cheap-movers-dubai-studio-apartment-move.jpg",
            imageAlt: "Zain Movers crew loading a studio apartment move into a branded truck in Ras Al Khaimah",
            body: (
              <p>
                If you live in a smaller apartment, you get our fast and
                budget-friendly service. We bring the carton boxes, securely
                pack your kitchenware and electronics, and move you out
                efficiently.
              </p>
            ),
          },
          {
            title: "Furniture Movers Ras Al Khaimah",
            tag: "Carpentry",
            imageSrc: "/services/furniture-movers-dubai-wardrobe-dismantling.jpg",
            imageAlt: "Zain Movers carpenter dismantling a large wardrobe in a Ras Al Khaimah bedroom",
            body: (
              <p>
                Taking apart large wardrobes, beds, and modular shelving units
                requires proper tools and care. Our furniture carpenters
                dismantle IKEA, Home Centre, Pan Emirates, and custom wooden
                furniture safely. We keep all screws and brackets in labeled
                pouches, wrap finished wood in protective blankets, and rebuild
                every piece securely in your new home.
              </p>
            ),
          },
          {
            title: "Furniture Dismantling and Assembly",
            tag: "Carpentry",
            imageSrc: "/services/sofa-stretch-film-corner-guards-dubai.jpg",
            imageAlt: "Sofa wrapped in stretch film and corner guards before loading by Zain Movers in Ras Al Khaimah",
            body: (
              <p>
                Do not try to take apart a massive sliding wardrobe by yourself.
                Our movers in Ras Al Khaimah include trained carpenters. We
                carefully dismantle your beds, dining tables, and IKEA
                furniture, keep all the screws safe, and rebuild them perfectly
                in your new home.
              </p>
            ),
          },
          {
            title: "Office and Business Relocation",
            tag: "Commercial",
            imageSrc: "/services/server-rack-anti-static-packing-dubai.jpg",
            imageAlt: "Anti-static packing being applied to a server rack before transport by Zain Movers in Ras Al Khaimah",
            body: (
              <p>
                Relocating a business or branch office in RAK requires minimal
                disruption to your daily operations. We move commercial offices,
                retail shops, and warehouses across Ras Al Khaimah. Our teams work during evenings and weekends,
                labelling computer equipment, sealing sensitive office files,
                and reassembling desks so your staff can resume work smoothly on
                Monday morning.
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
                title: "Get an Honest Quote",
                description:
                  "Call us or send photos of your rooms on WhatsApp. We provide an exact, all-inclusive price within minutes.",
                icon: MessageSquare,
              },
              {
                title: "Packing on Moving Day",
                description:
                  "Our uniformed team arrives on schedule. We pack kitchen items in bubble wrap, dismantle beds and wardrobes, and wrap all sofas and appliances in protective film.",
                icon: PackageCheck,
              },
              {
                title: "Safe Transport in Covered Trucks",
                description:
                  "All belongings are loaded systematically into clean, weather-protected trucks to keep them safe from highway dust and sun.",
                icon: Truck,
              },
              {
                title: "Assembly and Pay Upon Satisfaction",
                description:
                  "At your new home, we unload boxes into the correct rooms, reassemble your furniture, and help position heavy appliances. You inspect our work, verify that everything is intact, and only pay when you are satisfied.",
                icon: Wallet,
              },
            ]}
          />
        </div>
      </section>

      <LocationLogistics
        eyebrow="Inter-Emirate Moving"
        title="Moving from Ras Al Khaimah to Dubai?"
        imageSrc="/locations/zain-movers-truck-e311-ras-al-khaimah-dubai.jpg"
        imageAlt="Zain Movers truck on the E311 highway between Ras Al Khaimah and Dubai"
        imageLabel="RAK to Dubai transit"
        cards={[
          {
            icon: Route,
            title: "One Team, No Separate Companies",
            body: "We handle the entire RAK to Dubai moving logistics. You do not have to hire separate companies.",
          },
          {
            icon: Truck,
            title: "Same-Day Delivery via the E311",
            body: "Our team will pack your home in Ras Al Khaimah in the morning, drive safely down the E311 highway, and unpack your items in your new Dubai home on the very same day.",
          },
        ]}
      >
        <p>
          One of the most requested services we handle is inter-emirate moving.
          A lot of families and professionals move from RAK to Dubai for work,
          or from Dubai to RAK for a quieter lifestyle.
        </p>
      </LocationLogistics>

      <LocationPricing
        title="Transparent Moving Costs in Ras Al Khaimah"
        subtitle="How Much Do Movers and Packers Cost in Ras Al Khaimah?"
        lede="Honest, all-inclusive pricing for local relocations within RAK. The quote we send is the figure you pay."
        rows={[
          {
            property: "Studio Apartment",
            price: "AED 550 – AED 800",
            covers:
              "1 closed moving truck, 2–3 professional movers, complete packing, furniture disassembly, and reassembly.",
          },
          {
            property: "1 Bedroom Apartment",
            price: "AED 800 – AED 1,200",
            covers:
              "Large closed truck, 3–4 movers, full furniture wrapping, box packing, basic handyman drilling.",
          },
          {
            property: "2 Bedroom Apartment",
            price: "AED 1,200 – AED 1,650",
            covers:
              "1–2 trucks, 4–5 movers, complete packing of fragile items, bedroom setups, appliance disconnects.",
          },
          {
            property: "Villa (2–3 Bedrooms)",
            price: "AED 1,700 – AED 2,500",
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
              Note on inter-emirate moves:
            </strong>{" "}
            Relocating from Ras Al Khaimah to Dubai, Sharjah, or Abu Dhabi
            carries a modest long-distance transport allowance for highway fuel
            and tolls. Send us your moving details on WhatsApp for an instant,
            guaranteed quote.
          </>
        }
      />

      <WhyChooseLocation
        title="Why We Stand Out Among RAK Movers"
        lede="When you search for movers and packers in Ras Al Khaimah, you will find a lot of cheap options on the street. But choosing an unregistered mover is risky. Here is why customers choose Zain Movers:"
        benefits={[
          {
            icon: Wallet,
            title: "Pay Upon Satisfaction",
            body: "We do not ask for an advance deposit. You pay the final invoice only when the moving truck is empty, your furniture is built, and you are totally satisfied with our work.",
          },
          {
            icon: Banknote,
            title: "Fixed Prices",
            body: "Unprofessional movers are famous for adding hidden fees for packing tape or carrying items up stairs. We give you a fixed quote on WhatsApp before we even start. The price we say is the price you pay.",
          },
          {
            icon: PackageCheck,
            title: "High-Quality Packing Materials",
            body: "We protect your belongings properly. We bring thick corrugated boxes for your heavy items, professional bubble wrap for your glass tables, and stretch film to keep your sofas clean.",
          },
        ]}
      />

      <FAQSection
        faqs={FAQS}
        heading="Frequently Asked Questions"
        lede="Gate passes, pricing, and inter-emirate timings for moves across Ras Al Khaimah."
      />

      <CTAWithForm
        eyebrow="Guaranteed Fixed Price"
        heading="Book Your RAK Move Today"
        description="Stop worrying about how to pack your kitchen and move your heavy bed. Let our professional team handle the entire job safely and quickly — and remember, you only pay when you are completely satisfied."
        tone="light"
      />
    </>
  );
}
