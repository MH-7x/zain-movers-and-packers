import { Building2, Phone, ShieldCheck } from "lucide-react";

import QuoteDialog from "@/components/shared/QuoteDialog";
import PlaceholderImage from "@/components/shared/PlaceholderImage";
import TrustBadges, { type TrustBadge } from "@/components/shared/TrustBadges";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/Contact";

/**
 * Dubai area hero. The counterweight column carries a crew-credibility overlay
 * plus a compliance strip — the hyper-local proof that distinguishes these
 * pages from the emirate-level ones.
 */
export default function AreaHero({
  eyebrow,
  title,
  intro,
  badges,
  crewTitle,
  crewMeta,
  crewChip,
  compliance,
  imageAlt,
  imageLabel,
}: {
  /** Short positioning line; must be supportable by the area's markdown. */
  eyebrow: string;
  title: string;
  intro: string;
  badges: TrustBadge[];
  crewTitle: string;
  crewMeta: string;
  crewChip?: string;
  compliance: string[];
  imageAlt: string;
  imageLabel: string;
}) {
  return (
    <section className="bg-background">
      <div className="wrap grid items-start gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 [&>*]:min-w-0">
        <div>
          <p className="mb-6 inline-flex max-w-full flex-wrap items-center gap-2 bg-accent px-3 py-2 text-xs font-semibold tracking-[0.12em] text-accent-foreground uppercase">
            <Building2 className="size-3.5" aria-hidden="true" />
            {eyebrow}
          </p>

          <h1 className="max-w-[20ch] text-4xl leading-[1.1] tracking-tight text-balance md:text-5xl">
            {title}
          </h1>

          <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted-foreground">
            {intro}
          </p>

          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <a
              href={PHONE_HREF}
              className="flex h-13 items-center justify-center gap-2.5 bg-foreground px-6 text-sm font-semibold text-background transition-colors hover:bg-primary"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call Now: {PHONE_DISPLAY}
            </a>

            <QuoteDialog>
              <button
                type="button"
                className="h-13 bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
              >
                Get Fixed Quote
              </button>
            </QuoteDialog>
          </div>
        </div>

        <div>
          <div className="relative">
            <PlaceholderImage
              width={960}
              height={720}
              priority
              alt={imageAlt}
              label={imageLabel}
              className="w-full"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />

            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-3 bg-foreground/95 p-4">
              <span className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-9 shrink-0 items-center justify-center bg-primary"
                >
                  <Building2 className="size-4 text-primary-foreground" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-background">
                    {crewTitle}
                  </span>
                  <span className="mt-0.5 block text-xs text-background/70">
                    {crewMeta}
                  </span>
                </span>
              </span>
              {crewChip && (
                <span className="bg-primary px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.12em] text-primary-foreground uppercase">
                  {crewChip}
                </span>
              )}
            </div>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-2 bg-secondary px-5 py-4">
            {compliance.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <ShieldCheck
                  className="size-4 text-primary"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <TrustBadges badges={badges} className="mt-9" />
    </section>
  );
}
