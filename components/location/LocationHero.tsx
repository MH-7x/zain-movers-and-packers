import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Check, Phone, Truck } from "lucide-react";

import TrustBadges, { type TrustBadge } from "@/components/shared/TrustBadges";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/Contact";

/**
 * Emirate hero. Unlike the service hero, the counterweight column leads with a
 * carrier-verification card rather than a caption bar, and the narrative rail
 * carries a bulleted "why customers here choose us" manifest.
 */
export default function LocationHero({
  city,
  title,
  subtitle,
  reasons,
  badges,
  imageSrc,
  imageAlt,
  imageLabel,
}: {
  city: string;
  title: string;
  subtitle: string;
  reasons: string[];
  badges: TrustBadge[];
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
}) {
  return (
    <section className="bg-background">
      <div className="wrap grid items-start gap-10 py-12 md:py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 [&>*]:min-w-0">
        <div>
          <p className="mb-6 inline-flex max-w-full flex-wrap items-center gap-2 bg-accent px-3 py-2 text-xs font-semibold tracking-[0.12em] text-accent-foreground uppercase">
            <Truck className="size-3.5" aria-hidden="true" />
            zain movers and packers
          </p>

          <h1 className="max-w-[20ch] text-4xl leading-[1.1] tracking-tight text-balance md:text-5xl">
            {title}
          </h1>

          <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted-foreground">
            {subtitle}
          </p>

          <div className="mt-8">
            <h2 className="eyebrow">Why Customers in {city} Choose Us</h2>
            <ul className="mt-4 space-y-2.5">
              {reasons.map((reason) => (
                <li
                  key={reason}
                  className="flex items-start gap-2.5 text-sm text-foreground/85"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="flex h-13 items-center justify-center bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Get a Free Quote
            </Link>

            <a
              href={PHONE_HREF}
              className="flex h-13 items-center justify-center gap-2.5 bg-foreground px-6 text-sm font-semibold text-background transition-colors hover:bg-primary"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call Now: {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div>
          <div className="relative aspect-4/3 w-full overflow-hidden bg-secondary">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex items-center gap-4 border border-hairline bg-background p-5">
            <BadgeCheck
              className="size-9 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <p className="font-serif text-lg font-semibold">
                Verified UAE Carrier
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Fully insured transit • Official commercial trade licence
              </p>
            </div>
          </div>
        </div>
      </div>
      <TrustBadges badges={badges} className="mb-16 md:px-20" />
    </section>
  );
}
