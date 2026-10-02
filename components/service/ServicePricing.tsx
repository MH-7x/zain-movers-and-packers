import type { ReactNode } from "react";
import Link from "next/link";
import { Lock } from "lucide-react";

import SectionHeading from "@/components/shared/SectionHeading";

export interface PricingRow {
  property: string;
  price: string;
  team: string;
  duration: string;
  inclusions: string;
}

/**
 * Structured rate sheet. Renders as a true table on desktop and as stacked
 * definition blocks on small screens, so nothing is horizontally scrolled away.
 */
export default function ServicePricing({
  eyebrow = "Clear Economics",
  title,
  lede,
  rows,
  priceLock,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  rows: PricingRow[];
  priceLock: { title: string; body: string };
  /** Optional prose printed beneath the rate sheet. */
  children?: ReactNode;
}) {
  return (
    <section className="bg-background">
      <div className="wrap band">
        <SectionHeading eyebrow={eyebrow} title={title} lede={lede} />

        {/* Desktop rate sheet */}
        <div className="mt-10 hidden lg:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-secondary">
                <th className="p-5 text-sm font-semibold">Property Type</th>
                <th className="p-5 text-sm font-semibold">
                  Estimated Price Range
                </th>
                <th className="p-5 text-sm font-semibold">
                  Team &amp; Fleet Allocation
                </th>
                <th className="p-5 text-sm font-semibold">Estimated Duration</th>
                <th className="p-5 text-right text-sm font-semibold">
                  Inclusions
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.property} className="border-b border-hairline">
                  <th
                    scope="row"
                    className="p-5 text-sm font-semibold text-foreground"
                  >
                    {row.property}
                  </th>
                  <td className="p-5 text-sm font-bold text-primary">
                    {row.price}
                  </td>
                  <td className="p-5 text-sm text-muted-foreground">
                    {row.team}
                  </td>
                  <td className="p-5 text-sm text-muted-foreground">
                    {row.duration}
                  </td>
                  <td className="p-5 text-right text-sm text-muted-foreground">
                    {row.inclusions}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Small-screen rate sheet */}
        <ul className="mt-10 flex flex-col gap-px bg-hairline lg:hidden">
          {rows.map((row) => (
            <li key={row.property} className="bg-secondary p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold">{row.property}</h3>
                <p data-numeric className="text-sm font-bold text-primary">
                  {row.price}
                </p>
              </div>
              <dl className="mt-4 space-y-2 text-sm">
                <Row label="Team & fleet" value={row.team} />
                <Row label="Duration" value={row.duration} />
                <Row label="Inclusions" value={row.inclusions} />
              </dl>
            </li>
          ))}
        </ul>

        {children && (
          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground [&>p]:max-w-prose">
            {children}
          </div>
        )}

        <div className="mt-8 flex flex-col gap-6 bg-accent p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-5">
            <span
              aria-hidden="true"
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary"
            >
              <Lock className="size-5 text-primary-foreground" />
            </span>
            <div>
              <h3 className="text-lg font-semibold">{priceLock.title}</h3>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
                {priceLock.body}
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="flex h-12 shrink-0 items-center justify-center bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Lock In Your Move Date
          </Link>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <dt className="w-28 shrink-0 text-muted-foreground">{label}</dt>
      <dd className="text-foreground/85">{value}</dd>
    </div>
  );
}
