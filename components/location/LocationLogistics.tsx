import type { ReactNode } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export interface LogisticsCard {
  icon: LucideIcon;
  title: string;
  /** The markdown H3 sitting under this section's H2. */
  subtitle?: string;
  body: string;
}

/**
 * Corridor / inter-emirate logistics band: narrative on a photographic field,
 * operational detail in structured cards alongside.
 */
export default function LocationLogistics({
  eyebrow,
  title,
  subtitle,
  children,
  cards,
  imageSrc,
  imageAlt,
  imageLabel,
}: {
  eyebrow: string;
  title: string;
  /** The markdown H3 sitting under this section's H2. */
  subtitle?: string;
  children: ReactNode;
  cards: LogisticsCard[];
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
}) {
  return (
    <section className="bg-foreground">
      <div className="wrap band">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-5 max-w-[20ch] text-3xl leading-[1.15] text-background md:text-4xl">
              {title}
            </h2>

            {subtitle && (
              <h3 className="mt-5 font-serif text-xl font-semibold text-background md:text-2xl">
                {subtitle}
              </h3>
            )}

            <div className="mt-6 space-y-4 text-base leading-relaxed text-background/75 [&>p]:max-w-prose">
              {children}
            </div>

            <div className="relative mt-8 aspect-video overflow-hidden bg-secondary">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ul className="grid gap-px self-start bg-hairline-invert">
            {cards.map(({ icon: Icon, title: cardTitle, body }) => (
              <li key={cardTitle} className="flex gap-4 bg-foreground p-7">
                <Icon
                  className="size-6 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-lg font-semibold text-background">
                    {cardTitle}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-background/70">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
