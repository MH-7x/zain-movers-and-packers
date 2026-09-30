import type { LucideIcon } from "lucide-react";
import { ShieldCheck } from "lucide-react";

export interface ServiceBenefit {
  icon: LucideIcon;
  title: string;
  body: string;
}

/**
 * Dark trust band: narrative and a damage-protection guarantee on the left,
 * four benefit panels on the right.
 */
export default function WhyChooseService({
  eyebrow,
  title,
  lede,
  guarantee,
  benefits,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  guarantee: { title: string; body: string };
  benefits: ServiceBenefit[];
}) {
  return (
    <section className="bg-foreground">
      <div className="wrap band">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-5 max-w-[14ch] text-3xl leading-[1.15] text-background md:text-4xl">
              {title}
            </h2>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-background/75">
              {lede}
            </p>

            <div className="mt-8 border-l-2 border-primary bg-background/10 p-5">
              <p className="flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.12em] text-primary uppercase">
                <ShieldCheck className="size-4" aria-hidden="true" />
                {guarantee.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-background/80">
                {guarantee.body}
              </p>
            </div>
          </div>

          <ul className="grid gap-px bg-hairline-invert sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title: benefitTitle, body }) => (
              <li key={benefitTitle} className="bg-foreground p-7">
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-background">
                  {benefitTitle}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-background/70">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
