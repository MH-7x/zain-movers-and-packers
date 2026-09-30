import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

export interface ServiceTier {
  /** Short scale label printed beside the index, e.g. "APT", "VILLA". */
  kind: string;
  title: string;
  /** Operational headline, e.g. "Turnaround: 3 to 5 Hours". */
  turnaround: string;
  description: string;
  /** Optional short specifications rendered in a mini grid. */
  specs?: string[];
  /** Optional closing note spanning the full spec grid. */
  note?: string;
}

/**
 * Scope-and-scale ladder. Each tier is a full-width structural row divided by
 * hairlines — deliberately not a three-card grid.
 */
export default function ServiceTiers({
  eyebrow,
  title,
  lede,
  tiers,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  tiers: ServiceTier[];
}) {
  return (
    <section className="bg-background">
      <div className="wrap band">
        <SectionHeading eyebrow={eyebrow} title={title} lede={lede} />

        <ol className="mt-10 flex flex-col gap-px bg-hairline">
          {tiers.map((tier, index) => (
            <li key={tier.title}>
              <Reveal className="grid gap-6 bg-secondary p-6 md:p-8 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-10">
                <p className="flex items-baseline gap-2">
                  <span className="index-marker text-4xl text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.65rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                    {tier.kind}
                  </span>
                </p>

                <div>
                  <h3 className="font-serif text-xl font-semibold md:text-2xl">
                    {tier.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-primary">
                    {tier.turnaround}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {tier.description}
                  </p>
                </div>

              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
