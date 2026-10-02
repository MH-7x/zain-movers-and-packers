import {
  Banknote,
  Building2,
  Clock,
  FileCheck2,
  Route,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
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

const PATH = "/locations/movers-in-abu-dhabi";

export const metadata = MetadataTemplate({
  title: "Movers in Abu Dhabi | Fixed Quote, Pay After the Move",
  desc: "Movers and packers in Abu Dhabi covering Al Reem, Yas Island, Khalifa City and Musaffah. Fixed quotes, no hidden fees, pay when satisfied.",
  path: PATH,
  image: {
    path: "/locations/movers-in-abu-dhabi-unloading-truck-tower.jpg",
    alt: "Zain Movers crew unloading a branded truck outside an Abu Dhabi residential tower",
  },
});

const FAQS: Faq[] = [
  {
    question: "Do you provide packing materials for Abu Dhabi moves?",
    answer: (
      <p>
        Yes. When you book our full service, we bring heavy-duty carton boxes,
        thick bubble wrap, stretch film, and wardrobe boxes. You do not need to
        buy anything yourself.
      </p>
    ),
  },
  {
    question:
      "What documents do I need before moving into an Abu Dhabi apartment?",
    answer: (
      <>
        <p>
          Most building management offices in Abu Dhabi (especially on Al Reem
          Island and Al Raha) require a move-in permit.
        </p>
        <p>
          Usually, you will need a copy of your valid tenancy contract
          (Tawtheeq), your Emirates ID, and the moving company&apos;s trade
          licence and worker IDs.
        </p>
        <p>
          When you book with us, we send our trade licence and driver details
          right away so you can get your permit approved without delay.
        </p>
      </>
    ),
  },
  {
    question:
      "Can you help with building management NOCs in Al Reem or Yas Island?",
    answer: (
      <p>
        Yes. We are very familiar with the building rules in Al Reem, Yas
        Island, and Al Raha. We will send you all our company documents as soon
        as you book, so you can easily apply for your moving permit.
      </p>
    ),
  },
  {
    question: "How much does it cost to move in Abu Dhabi?",
    answer: (
      <p>
        The price depends on the size of your home and the amount of furniture.
        A studio move is much cheaper than a 4-bedroom villa. The fastest way to
        get an exact price is to send us a quick video of your home on WhatsApp.
      </p>
    ),
  },
  {
    question:
      "Can you handle moves between Dubai and Abu Dhabi on the same day?",
    answer: (
      <>
        <p>
          Yes. An inter-emirate move typically takes between 5 and 8 hours
          depending on the size of your home.
        </p>
        <p>
          We usually start early in the morning, complete packing and loading by
          midday, drive to Abu Dhabi, and finish unloading and assembling your
          furniture by late afternoon.
        </p>
      </>
    ),
  },
  {
    question: "Do you offer moving services to Musaffah?",
    answer: (
      <p>
        Yes. We have dedicated Musaffah movers who handle both residential
        apartment moves in the area and large commercial office or warehouse
        relocations.
      </p>
    ),
  },
  {
    question: "Do I have to pay a deposit before moving day?",
    answer: (
      <p>
        No. We use a strictly Pay Upon Satisfaction rule. You only hand over the
        money when the moving truck is empty, the beds are built, and you are
        happy with the job.
      </p>
    ),
  },
];

export default function MoversInAbuDhabiPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          generateServiceSchema({
            name: "Moving Services Abu Dhabi",
            description:
              "Professional moving company in Abu Dhabi offering house, villa, furniture, and office moving services with no hidden fees and a pay-upon-satisfaction policy.",
            path: PATH,
            areaServed: [
              "Abu Dhabi",
              "Al Reem Island",
              "Yas Island",
              "Saadiyat Island",
              "Khalifa City",
              "Musaffah",
              "Al Raha",
            ],
          }),
        )}
      />

      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/#coverage" },
          { name: "Movers in Abu Dhabi", href: PATH },
        ]}
        note="Daily Dubai – Abu Dhabi E11 corridor"
      />

      <LocationHero
        city="Abu Dhabi"
        title="Movers in Abu Dhabi"
        subtitle="Professional movers and packers across Abu Dhabi. We pack, transport, and set up your home safely. No hidden fees. Pay only when you are completely satisfied."
        reasons={[
          "Official UAE commercial trade licence",
          "Goods-in-transit cargo insurance for all belongings",
          "Pay upon 100% satisfaction, with no upfront deposits",
          "Same-day and urgent moving service available across the capital",
        ]}
        badges={[
          { label: "Local Experts", sub: "Abu Dhabi teams daily" },
          { label: "Fully Insured", sub: "Goods-in-transit cover" },
          { label: "No Advance Payment", sub: "Pay upon satisfaction" },
        ]}
        imageSrc="/locations/movers-in-abu-dhabi-unloading-truck-tower.jpg"
        imageAlt="Zain Movers crew unloading a branded truck outside an Abu Dhabi residential tower"
        imageLabel="Abu Dhabi relocation"
      />

      <section className="">
        <div className="wrap band">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <h2 className="max-w-[20ch] text-3xl leading-[1.15] md:text-4xl">
              Your Trusted Moving Company in Abu Dhabi
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground [&>p]:max-w-prose">
              <p>
                Finding a reliable moving company in Abu Dhabi should not be a
                gamble. You want a team that shows up on time, respects your
                furniture, and sticks to the price they promised.
              </p>
              <p>
                That is exactly what we do. As professional movers and packers
                in Abu Dhabi, we handle relocations across the entire capital.
                Whether you are moving out of a high-rise apartment on Al Reem
                Island or shifting to a large family villa in Khalifa City, we
                have the right trucks and the right team for the job.
              </p>
              <p>
                We take the stress out of moving day by handling everything: the
                packing, the heavy lifting, the transport, and the furniture
                reassembly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NeighborhoodsCovered
        city="Abu Dhabi"
        title="Covering All Abu Dhabi Neighborhoods"
        lede="Abu Dhabi is a big place with very specific building rules. We know the city well, and our moving teams operate daily across all major communities."
        groups={[
          {
            title: "Island Communities",
            description:
              "Moving into a tower on the islands requires strict coordination with building management. We know where the service elevators are and how to get the job done quickly.",
            areas: [
              "Al Reem Island",
              "Yas Island",
              "Saadiyat Island",
              "Al Maryah Island",
            ],
          },
          {
            title: "Mainland and Suburbs",
            description:
              "If you are upgrading to a larger home, we handle villa and townhouse moves across the mainland communities.",
            areas: [
              "Khalifa City",
              "Mohammed Bin Zayed City (MBZ)",
              "Al Raha Beach",
              "Al Reef",
              "Baniyas",
            ],
          },
          {
            title: "Industrial and Commercial Areas",
            description:
              "If you are moving a business, we operate as commercial and office movers, ensuring your company experiences zero downtime.",
            areas: ["Musaffah", "Mafraq", "ICAD"],
          },
        ]}
      />

      <LocationServices
        title="Complete Moving Services Abu Dhabi"
        lede="We adapt to what you need. Here are the core services we provide to our clients in the capital."
        services={[
          {
            title: "Apartment and House Movers in Abu Dhabi",
            tag: "Residential",
            imageSrc: "/services/house-movers-dubai-crew-wrapping-sofa.jpg",
            imageAlt:
              "Zain Movers crew wrapping a sofa in protective blankets inside an Abu Dhabi apartment living room",
            body: (
              <>
                <p>
                  High-rise living is common in the capital. Moving out of an
                  apartment means packing glassware, protecting electronics,
                  dismantling bulky bed frames, and hauling boxes through
                  service corridors.
                </p>
                <p>
                  Our residential house moving team brings heavy-duty
                  double-wall boxes, bubble wrap, and wardrobe boxes for your
                  hanging clothes. We label every box clearly by room so your
                  kitchen essentials do not end up mixed with bedroom items.
                </p>
              </>
            ),
          },
          {
            title: "Villa Relocation",
            tag: "Large Property",
            imageSrc: "/services/villa-movers-dubai-carrying-sofa.jpg",
            imageAlt: "Zain Movers crew carrying a sofa through an Abu Dhabi villa living room",
            body: (
              <p>
                Moving a villa in Saadiyat or Al Raha requires a large team. We
                handle heavy custom furniture, large dining tables, and garden
                equipment. We send enough manpower so your villa move is
                finished in a single day, not dragged out over a weekend.
              </p>
            ),
          },
          {
            title: "Furniture Movers Abu Dhabi",
            tag: "Single Items",
            imageSrc: "/services/furniture-movers-dubai-wardrobe-dismantling.jpg",
            imageAlt: "Zain Movers carpenter dismantling a large wardrobe in an Abu Dhabi bedroom",
            body: (
              <p>
                Do you just need a few items moved? We operate as dedicated
                furniture movers in Abu Dhabi. If you bought a sofa online or
                need a massive IKEA wardrobe dismantled and moved to another
                room, we can send a small team to handle it safely and
                affordably.
              </p>
            ),
          },
          {
            title: "Office Relocation",
            tag: "Commercial",
            imageSrc: "/services/office-movers-dubai-wrapping-monitors.jpg",
            imageAlt:
              "Zain Movers crew wrapping office monitors and workstations during an office relocation in Abu Dhabi",
            body: (
              <p>
                For businesses in Abu Dhabi, time is money. We move offices
                after-hours or on weekends so your team can walk in on Monday
                morning and get straight to work.
              </p>
            ),
          },
        ]}
      />

      <LocationLogistics
        eyebrow="Inter-Emirate Corridor"
        title="Moving Between Dubai and Abu Dhabi?"
        imageSrc="/locations/zain-movers-truck-e11-dubai-abu-dhabi.jpg"
        imageAlt="Zain Movers closed truck travelling the E11 highway between Dubai and Abu Dhabi"
        imageLabel="E11 corridor transit"
        cards={[
          {
            icon: Route,
            title: "Daily E11 Highway Routes",
            body: "We drive the E11 highway every day. Moving from Dubai to Abu Dhabi, or the other way, is routine work for our dispatch team rather than a special arrangement.",
          },
          {
            icon: Clock,
            title: "Same-Day Completion",
            body: "An inter-emirate move typically takes between 5 and 8 hours. We pack in the morning, drive at midday, and finish unloading and assembling by late afternoon.",
          },
          {
            icon: ShieldCheck,
            title: "Highway Transit Insurance",
            body: "Every inter-emirate load travels under goods-in-transit cargo insurance for all your belongings.",
          },
        ]}
      >
        <p>
          We do not just do local moves. If you are relocating between the two
          biggest emirates, we have you covered.
        </p>
        <p>
          We pack your home in the morning, drive safely to the new emirate, and
          have your furniture rebuilt and ready for you to sleep in that same
          night.
        </p>
      </LocationLogistics>

      <LocationPricing
        title="Estimated Moving Costs in Abu Dhabi"
        subtitle="How Much Do Movers and Packers Cost in Abu Dhabi?"
        lede="We believe in honest, upfront pricing. The rate we quote is the rate you pay. You will not see surprise charges for walking distance, building stairs, or packing materials on moving day."
        rows={[
          {
            property: "Studio Apartment",
            price: "AED 650 – AED 950",
            covers:
              "1 closed moving truck, 2–3 professional movers, complete packing, disassembly, and reassembly.",
          },
          {
            property: "1 Bedroom Apartment",
            price: "AED 950 – AED 1,400",
            covers:
              "Large closed truck, 3–4 movers, full furniture wrapping, box packing, curtain re-hanging.",
          },
          {
            property: "2 Bedroom Apartment",
            price: "AED 1,350 – AED 1,900",
            covers:
              "1–2 trucks, 4–5 movers, complete packing of fragile items, furniture setup in new rooms.",
          },
          {
            property: "3 Bedroom Villa",
            price: "AED 2,200 – AED 3,100",
            covers:
              "Dedicated crew and supervisor, heavy furniture transport, wardrobe setups, garden furniture.",
          },
          {
            property: "4+ Bedroom Villa",
            price: "Custom Fixed Quote",
            covers:
              "Free on-site survey or video walkthrough to give you an exact, guaranteed price.",
          },
        ]}
        note={
          <>
            <strong className="font-semibold text-foreground">
              Note on inter-emirate moves:
            </strong>{" "}
            Moves from Dubai to Abu Dhabi or Abu Dhabi to the Northern Emirates
            usually carry a small additional transport allowance to cover
            highway fuel and toll fees. Send us your moving details on WhatsApp
            for an instant, exact quote.
          </>
        }
      />

      <WhyChooseLocation
        title="What Makes Us the Best Movers in Abu Dhabi?"
        lede="There are dozens of moving companies in Abu Dhabi, but our customers keep recommending us to their friends and neighbours. Here is why."
        benefits={[
          {
            icon: Wallet,
            title: "Pay Upon Satisfaction",
            body: "We are one of the only moving companies that do not ask for a deposit. You pay the final bill only after the move is finished and you are completely happy with the work.",
          },
          {
            icon: FileCheck2,
            title: "We Know the Building NOCs",
            body: "Property managers in Abu Dhabi such as Aldar or Provis require strict No Objection Certificates. We provide our valid trade licence, vehicle details, and staff IDs immediately so you get approvals without delays.",
          },
          {
            icon: Banknote,
            title: "No Hidden Fees",
            body: "We give you a fixed quote on WhatsApp. We will never ask for extra money on moving day for tape, stairs, or heavy items.",
          },
          {
            icon: Building2,
            title: "Fully Insured",
            body: "We are a licensed moving company. Your furniture, electronics, and fragile items are protected while they are in our hands.",
          },
        ]}
      />

      <FAQSection
        faqs={FAQS}
        heading="Frequently Asked Questions"
        lede="Permits, pricing, and scheduling for relocations across the capital."
      />

      <CTAWithForm
        eyebrow="Local Abu Dhabi Team"
        heading="Ready to Plan Your Move in Abu Dhabi?"
        description="Don't let moving day give you a headache. Let our local Abu Dhabi team handle the heavy lifting, the packing, and the transport. Remember: you only pay when you are completely satisfied with the job."
        tone="light"
      />
    </>
  );
}
