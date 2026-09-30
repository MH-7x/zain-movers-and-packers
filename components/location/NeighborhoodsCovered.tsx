import { MapPin, MessageCircle } from "lucide-react";

import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { whatsappHref } from "@/lib/Contact";

export interface NeighborhoodGroup {
  title: string;
  description: string;
  areas: string[];
}

/**
 * Categorised coverage map for an emirate. Groups are structural columns
 * divided by hairlines rather than floating cards.
 */
export default function NeighborhoodsCovered({
  eyebrow = "Coverage Map",
  title,
  lede,
  groups,
  city,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  groups: NeighborhoodGroup[];
  city: string;
}) {
  return (
    <section className="bg-secondary">
      <div className="wrap band">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          lede={lede}
          align="split"
        />

        <div className={`mt-10 grid gap-px ${city === "Sharjah" ? "lg:grid-cols-2" : "lg:grid-cols-3"} `}>
          {groups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 70}
              className="bg-background p-7"
            >
              <p className="index-marker text-2xl text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-xl font-semibold">
                {group.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {group.description}
              </p>

              <ul className="mt-5 space-y-2 border-t border-hairline pt-5">
                {group.areas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2.5 text-sm font-medium text-foreground"
                  >
                    <MapPin
                      className="size-3.5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {area}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4 bg-accent p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-prose text-sm leading-relaxed text-foreground">
            <strong className="font-semibold">
              Do not see your area listed?
            </strong>{" "}
            We provide moving services to every single area in {city}. Our teams
            will come directly to your door.
          </p>

          <a
            href={whatsappHref(
              `Hi, I'd like a moving quote for my area in ${city}.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 shrink-0 items-center justify-center gap-2.5 bg-whatsapp px-6 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Send a WhatsApp for a Quick Quote
          </a>
        </div>
      </div>
    </section>
  );
}
