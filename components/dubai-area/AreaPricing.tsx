import type { ReactNode } from "react";

import SectionHeading from "@/components/shared/SectionHeading";

export interface AreaPriceRow {
  property: string;
  price: string;
}

/**
 * Community rate card on the charcoal band, so the figures read as a published
 * price list rather than a soft estimate.
 *
 * Rows are tiles rather than a table: the markdown supplies a property label
 * and a price and nothing else, and a two-column table across the full width
 * reads as though a column failed to render.
 */
export default function AreaPricing({
  title,
  lede,
  rows,
  note,
}: {
  title: string;
  lede: string;
  rows: AreaPriceRow[];
  note: ReactNode;
}) {
  return (
    <section className="bg-foreground">
      <div className="wrap band">
        <SectionHeading
          eyebrow="Transparent Pricing"
          title={title}
          lede={lede}
          tone="light"
          align="split"
        />

        <dl
          className={
            rows.length % 3 === 0
              ? "mt-10 grid gap-px bg-hairline-invert sm:grid-cols-2 lg:grid-cols-3"
              : "mt-10 grid gap-px bg-hairline-invert sm:grid-cols-2"
          }
        >
          {rows.map((row) => (
            <div key={row.property} className="bg-foreground px-6 py-7">
              <dt className="text-base font-semibold text-background">
                {row.property}
              </dt>
              <dd
                data-numeric
                className="mt-3 font-serif text-2xl leading-none font-semibold text-accent"
              >
                {row.price}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 max-w-prose border-l-2 border-primary bg-background/10 p-6 text-sm leading-relaxed text-background/80">
          {note}
        </p>
      </div>
    </section>
  );
}
