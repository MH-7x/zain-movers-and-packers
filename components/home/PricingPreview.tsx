import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";

import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/Contact";

interface PriceRow {
  property: string;
  price: string;
  scope: string;
  popular?: boolean;
}

const ROWS: PriceRow[] = [
  {
    property: "Studio Apartment",
    price: "AED 650 – AED 950",
    scope:
      "Closed truck, 2–3 movers, packing materials, basic disassembly and reassembly.",
  },
  {
    property: "1 Bedroom Apartment",
    price: "AED 950 – AED 1,450",
    scope:
      "1 large closed truck, 3–4 movers, full furniture wrapping, box packing, curtain re-hanging.",
  },
  {
    property: "2 Bedroom Apartment",
    price: "AED 1,350 – AED 1,950",
    scope:
      "1–2 trucks, 4–5 movers, complete packing, furniture setup, appliance disconnections.",
    popular: true,
  },
  {
    property: "3 Bedroom Villa",
    price: "AED 2,200 – AED 3,200",
    scope:
      "Dedicated moving crew, full packing of fragile items, furniture assembly, wardrobe setups.",
  },
  {
    property: "4+ Bedroom Villa",
    price: "Custom Quote",
    scope:
      "Free on-site survey or quick WhatsApp video walkthrough for an exact fixed price.",
  },
];

const GUARANTEES = [
  {
    title: "No Hidden Fees",
    body: "The price we quote is the exact price you pay.",
  },
  {
    title: "All-Inclusive Service",
    body: "No extra charges for building stairs, walking distance, Salik toll gates, or packing tape.",
  },
  {
    title: "Satisfaction Guaranteed",
    body: "You do not pay a single dirham until the move is complete and you are fully satisfied with your new setup.",
  },
];

export default function PricingPreview() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-secondary">
      <div className="wrap band">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Clear Economics"
              title="How Much Do Movers and Packers Cost in Dubai?"
              lede="Moving costs depend on how much furniture you have, packing requirements, and whether you are moving locally or to another Emirate. Below are typical price ranges for local Dubai moves."
              as="h2"
            />

            <div className="mt-9 flex flex-col gap-px bg-hairline">
              {ROWS.map((row) => (
                <Reveal
                  key={row.property}
                  className={
                    row.popular
                      ? "border-l-2 border-primary bg-accent"
                      : "bg-background"
                  }
                >
                  <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                    <div className="min-w-0">
                      {row.popular && (
                        <span className="mb-3 inline-block bg-primary px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.12em] text-primary-foreground uppercase">
                          Most Popular Move
                        </span>
                      )}
                      <h3 className="text-lg font-semibold">{row.property}</h3>
                      <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
                        {row.scope}
                      </p>
                    </div>

                    <div className="shrink-0 sm:text-right">
                      <p
                        data-numeric
                        className="mt-1.5 font-serif text-xl font-semibold text-primary"
                      >
                        {row.price}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-6 bg-background p-6">
              <h3 className="text-base font-semibold">Our Pricing Guarantee</h3>
              <ul className="mt-4 grid gap-4 sm:grid-cols-3">
                {GUARANTEES.map((item) => (
                  <li key={item.title}>
                    <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Check
                        className="size-4 text-primary"
                        aria-hidden="true"
                      />
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Guarantee counterweight */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-primary bg-background p-7">
              <p className="eyebrow flex items-center gap-2">
                <ShieldCheck className="size-4" aria-hidden="true" />
                Our Pricing Guarantee
              </p>

              <h3 className="mt-5 font-serif text-2xl font-semibold">
                Fixed-Quote Price Lock
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                The quote agreed upon prior to your move is the final figure on
                your invoice. We guarantee zero sudden charges for high floors,
                stairs, traffic delays, or Friday operations.
              </p>

              <ul className="mt-6 space-y-3 border-t border-hairline pt-6">
                {[
                  "No stair carry charges",
                  "No Friday premium",
                  "Free boxes with full move",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm font-medium text-foreground"
                  >
                    <Check className="size-4 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-7 flex h-12 w-full items-center justify-center bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
              >
                Get an Exact Quote
              </Link>

              <a
                href={PHONE_HREF}
                className="mt-2 flex h-12 w-full items-center justify-center bg-foreground px-6 text-sm font-semibold text-background transition-colors hover:bg-primary"
              >
                Call for Fixed Quote: {PHONE_DISPLAY}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
