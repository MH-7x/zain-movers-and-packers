import type { ReactNode } from "react";
import Link from "next/link";
import { Info } from "lucide-react";

import SectionHeading from "@/components/shared/SectionHeading";

export interface LocationPriceRow {
  property: string;
  price: string;
  covers: string;
}

/**
 * Emirate rate sheet — a three-column scope table, lighter than the five-column
 * service-page sheet, followed by an inter-emirate transport note.
 */
export default function LocationPricing({
  title,
  subtitle,
  lede,
  rows,
  note,
}: {
  title: string;
  /** The markdown H3 sitting under this section's H2. */
  subtitle?: string;
  lede: string;
  rows: LocationPriceRow[];
  note: ReactNode;
}) {
  return (
    <section className="bg-secondary">
      <div className="wrap band">
        <SectionHeading
          eyebrow="Estimated Costs"
          title={title}
          lede={lede}
          align="split"
        />

        {subtitle && (
          <h3 className="mt-8 font-serif text-xl font-semibold md:text-2xl">
            {subtitle}
          </h3>
        )}

        <div className="mt-10 hidden lg:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-foreground text-background">
                <th className="p-5 text-sm font-semibold">Property Type</th>
                <th className="p-5 text-sm font-semibold">
                  Estimated Price Range
                </th>
                <th className="p-5 text-sm font-semibold">
                  What the Service Covers
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.property}
                  className="border-b border-hairline bg-background"
                >
                  <th
                    scope="row"
                    className="p-5 text-sm font-semibold text-foreground"
                  >
                    {row.property}
                  </th>
                  <td
                    data-numeric
                    className="p-5 text-sm font-bold whitespace-nowrap text-primary"
                  >
                    {row.price}
                  </td>
                  <td className="p-5 text-sm leading-relaxed text-muted-foreground">
                    {row.covers}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="mt-10 flex flex-col gap-px bg-hairline lg:hidden">
          {rows.map((row) => (
            <li key={row.property} className="bg-background p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold">{row.property}</h3>
                <p data-numeric className="text-sm font-bold text-primary">
                  {row.price}
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {row.covers}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-5 border-l-2 border-primary bg-background p-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-3">
            <Info
              className="mt-0.5 size-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {note}
            </div>
          </div>

          <Link
            href="/contact"
            className="flex h-12 shrink-0 items-center justify-center bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Get an Exact Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
