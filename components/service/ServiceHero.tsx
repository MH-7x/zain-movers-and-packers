import { Phone } from "lucide-react";

import QuoteDialog from "@/components/shared/QuoteDialog";
import TrustBadges, { type TrustBadge } from "@/components/shared/TrustBadges";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/Contact";

/**
 * Service heroes are deliberately not full-bleed image banners: a light
 * editorial field with the headline on the larger column and a single piece of
 * visual proof on the counterweight, so the page reads as a document.
 */
export default function ServiceHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  badges,
  imageAlt,
  imageLabel,
  captionTitle,
  captionMeta,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  badges: TrustBadge[];
  imageAlt: string;
  imageLabel: string;
  captionTitle: string;
  captionMeta: string;
}) {
  return (
    <section className="bg-background">
      <div className="wrap grid items-center gap-10 pt-12 md:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 [&>*]:min-w-0">
        <div>
          <p className="mb-6 inline-flex max-w-full flex-wrap items-center gap-2 bg-accent px-3 py-2 text-xs font-semibold tracking-[0.12em] text-accent-foreground uppercase">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-primary"
            />
            {eyebrow}
          </p>

          <h1 className="max-w-[26ch] text-4xl leading-[1.1] tracking-tight text-balance md:text-5xl">
            {title}
          </h1>

          <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted-foreground">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <QuoteDialog>
              <button
                type="button"
                className="h-13 bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
              >
                {primaryCta}
              </button>
            </QuoteDialog>

            <a
              href={PHONE_HREF}
              className="flex h-13 items-center justify-center gap-2.5 bg-foreground px-6 text-sm font-semibold text-background transition-colors hover:bg-primary"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call: {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-4/3 w-full overflow-hidden" />
          <div className="flex flex-wrap items-center justify-between gap-3 bg-foreground px-5 py-4">
            <p className="flex items-center gap-2.5 text-sm font-semibold text-background">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-whatsapp"
              />
              {captionTitle}
            </p>
            <p className="text-[0.65rem] font-semibold tracking-[0.12em] text-background/70 uppercase">
              {captionMeta}
            </p>
          </div>
        </div>
      </div>
      <TrustBadges badges={badges} className="my-9 md:px-20" />
    </section>
  );
}
