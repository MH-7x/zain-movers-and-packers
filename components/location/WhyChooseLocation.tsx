import type { LucideIcon } from "lucide-react";

import { cn } from "cn";

import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

export interface LocationBenefit {
  icon: LucideIcon;
  title: string;
  body: string;
}

/**
 * Emirate differentiators. Deliberately a light, numbered panel grid —
 * the service-page equivalent is a dark split band, so the two page types do
 * not read the same.
 */
export default function WhyChooseLocation({
  title,
  lede,
  benefits,
}: {
  title: string;
  lede: string;
  benefits: LocationBenefit[];
}) {
  return (
    <section className="bg-background">
      <div className="wrap band">
        <SectionHeading
          eyebrow="Local Advantage"
          title={title}
          lede={lede}
          align="center"
        />

        <ul
          className={cn(
            "mt-12 grid gap-px bg-hairline",
            // Same hairline-void concern as ProcessSteps: fit columns to count.
            benefits.length === 3
              ? "sm:grid-cols-3"
              : benefits.length % 4 === 0
                ? "sm:grid-cols-2 lg:grid-cols-4"
                : "sm:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {benefits.map(({ icon: Icon, title: benefitTitle, body }, index) => (
            <li key={benefitTitle}>
              <Reveal delay={index * 60} className="h-full bg-secondary p-7">
                <div className="flex items-start justify-between">
                  <span className="index-marker text-3xl text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    className="size-5 text-muted-foreground"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{benefitTitle}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
