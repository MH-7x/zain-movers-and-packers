import Image from "next/image";
import { Check, Phone } from "lucide-react";

import QuoteDialog from "@/components/shared/QuoteDialog";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/Contact";

const TRUST_STRIP = [
  "Licensed",
  "Insured",
  "10+ Years Experience",
  "1,000+ Moves Completed",
];

export default function HomeHero() {
  return (
    <section className="bg-background">
      <div className="wrap grid items-center gap-12 py-12 md:py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-20 [&>*]:min-w-0">
        <div>
          <p className="mb-6 inline-flex max-w-full flex-wrap items-center gap-2 bg-secondary px-3 py-2 text-xs font-semibold tracking-[0.12em] text-foreground uppercase">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-primary"
            />
            Licensed &amp; Insured UAE Relocation Services
          </p>

          <h1 className="max-w-[26ch] text-4xl   md:text-5xl ">
            Professional Movers and Packers in Dubai
          </h1>

          <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted-foreground">
            Licensed &amp; insured moving company in Dubai. We handle your move
            from start to finish — and you only pay when you&apos;re satisfied.
          </p>

          <div className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <QuoteDialog>
              <button
                type="button"
                className="h-13 bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
              >
                Get a Free Quote
              </button>
            </QuoteDialog>

            <a
              href={PHONE_HREF}
              className="flex h-13 items-center justify-center gap-2.5 bg-foreground px-6 text-sm font-semibold text-background transition-colors hover:bg-primary"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call Now: {PHONE_DISPLAY}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center md:justify-start justify-center gap-x-6 gap-y-2.5 ">
            {TRUST_STRIP.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Check className="size-4 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Counterweight column: visual proof + licensing marker */}
        <div className="relative">
          <div className="relative aspect-square overflow-hidden bg-secondary">
            <Image
              src="/homepage/zain-movers-and-packers-dubai-hero.jpg"
              alt="Zain Movers and Packers branded truck and uniformed crew in Dubai"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
