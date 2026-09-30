import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { LOCATIONS } from "@/data/locations-nav";
import { DUBAI_AREAS } from "@/data/dubai-areas-nav";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/Contact";

/** Dubai communities we cover but that do not have a dedicated page yet. */
const EXTRA_COMMUNITIES = [
  "Downtown Dubai",
  "Arabian Ranches",
  "Dubai Hills Estate",
  "Mirdif",
  "The Springs & Meadows",
  "Damac Hills",
  "Al Barsha",
  "Motor City",
  "Sports City",
  "JBR",
  "DIFC",
  "Jumeirah Park",
];

export default function LocationCoverage() {
  return (
    <section id="coverage" className="scroll-mt-24 bg-secondary">
      <div className="wrap band">
        <SectionHeading
          eyebrow=""
          title="Movers in Dubai and Across the UAE"
          lede="Serving all Dubai communities and neighbouring emirates with daily scheduled routes."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Emirates */}
          <Reveal className="flex flex-col bg-background p-7 md:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-hairline pb-4">
              <h3 className="font-serif text-xl font-semibold">
                Emirates We Serve
              </h3>
              <span className="text-[0.6rem] font-semibold tracking-[0.12em] text-primary uppercase">
                movers all over the uae
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Inter-emirate moving with proper municipality permits and closed
              container trucks:
            </p>

            <ul className="mt-5 grid flex-1 gap-px bg-hairline sm:grid-cols-2">
              <li className="bg-background">
                <span className="flex items-center gap-2.5 border-l-2 border-primary bg-secondary px-4 py-3.5 text-sm font-semibold text-foreground">
                  <MapPin className="size-4 text-primary" aria-hidden="true" />
                  Movers in Dubai
                </span>
              </li>
              {LOCATIONS.map((location) => (
                <li key={location.href} className="bg-background">
                  <Link
                    href={location.href}
                    className="flex items-center gap-2.5 border-l-2 border-primary bg-secondary px-4 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                  >
                    <MapPin
                      className="size-4 text-primary"
                      aria-hidden="true"
                    />
                    {location.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-center justify-between gap-4 border-t border-hairline pt-4">
              <span className="text-xs text-muted-foreground">
                Highway logistics insurance included
              </span>
              <span className="text-xs font-semibold text-primary">
                All 7 Emirates
              </span>
            </div>
          </Reveal>

          {/* Dubai communities */}
          <Reveal className="flex flex-col bg-background p-7 md:p-8" delay={80}>
            <div className="flex items-center justify-between gap-4 border-b border-hairline pb-4">
              <h3 className="font-serif text-xl font-semibold">
                Key Dubai Communities
              </h3>
              <span className="text-[0.6rem] font-semibold tracking-[0.12em] text-primary uppercase">
                NOC &amp; Move-In Ready
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Familiar with developer NOC protocols, security passes, and
              move-in restrictions:
            </p>

            <ul className="mt-5 flex flex-1 flex-wrap content-start gap-2">
              {DUBAI_AREAS.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="block bg-secondary px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {area.label.replace("Movers in ", "")}
                  </Link>
                </li>
              ))}
              {EXTRA_COMMUNITIES.map((name) => (
                <li
                  key={name}
                  className="bg-secondary px-3 py-2 text-sm text-muted-foreground"
                >
                  {name}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 border border-primary/40 bg-accent p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-foreground">
                Need a rapid permit verification for your community?
              </p>
              <a
                href={PHONE_HREF}
                className="flex shrink-0 items-center gap-2 text-sm font-bold text-primary"
              >
                <Phone className="size-4" aria-hidden="true" />
                Speak with Team: {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Markdown: "Serving All Dubai Communities and Neighboring Emirates" */}
        <div className="mt-6 bg-background p-7 md:p-8">
          <h3 className="font-serif text-xl font-semibold">
            Serving All Dubai Communities and Neighboring Emirates
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Our trucks operate daily across all major residential and commercial
            districts:
          </p>

          <dl className="mt-6 grid gap-px bg-hairline lg:grid-cols-3">
            {[
              {
                title: "Coastal and High-Rise Areas",
                areas:
                  "Dubai Marina, JBR, JLT, Palm Jumeirah, Business Bay, Downtown Dubai, and DIFC.",
              },
              {
                title: "Family Villa Communities",
                areas:
                  "Arabian Ranches, Dubai Hills Estate, Damac Hills, The Springs, The Meadows, Jumeirah Park, and Villanova.",
              },
              {
                title: "Suburban and Growing Communities",
                areas:
                  "JVC (Jumeirah Village Circle), JVT, Dubai Silicon Oasis, Motor City, Sports City, Al Barsha, and Mirdif.",
              },
            ].map((group) => (
              <div key={group.title} className="bg-secondary p-5">
                <dt className="text-sm font-semibold text-foreground">
                  {group.title}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {group.areas}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
