"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "cn";

import SectionHeading from "@/components/shared/SectionHeading";
import StarRating from "@/components/shared/StarRating";
import GoogleBadge from "@/components/shared/GoogleBadge";
import { REVIEWS, type Review } from "@/data/reviews";

/**
 * Client-verification section: one long-form editorial quote alongside a
 * scroll-snapped rail of the remaining reviews. The rail is native
 * scroll-snap — no slider library — with keyboard-reachable prev/next controls.
 */
export default function ReviewsCarousel({
  eyebrow = "Client Verification",
  heading = "What Our Customers Say About Us",
  className,
}: {
  eyebrow?: string;
  heading?: string;
  className?: string;
}) {
  const featured = REVIEWS.find((review) => review.featured) ?? REVIEWS[0];
  const rest = REVIEWS.filter((review) => review !== featured);

  const railRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const scrollToCard = useCallback((index: number) => {
    const rail = railRef.current;
    const card = rail?.children[index] as HTMLElement | undefined;
    if (!rail || !card) return;
    rail.scrollTo({ left: card.offsetLeft - rail.offsetLeft, behavior: "smooth" });
  }, []);

  // Track the card nearest the rail's left edge so the dots stay in sync.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const onScroll = () => {
      const cards = Array.from(rail.children) as HTMLElement[];
      let nearest = 0;
      let smallest = Infinity;

      cards.forEach((card, index) => {
        const distance = Math.abs(card.offsetLeft - rail.offsetLeft - rail.scrollLeft);
        if (distance < smallest) {
          smallest = distance;
          nearest = index;
        }
      });
      setActive(nearest);
    };

    rail.addEventListener("scroll", onScroll, { passive: true });
    return () => rail.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={cn("bg-background", className)}>
      <div className="wrap band">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={eyebrow} title={heading} />
          <GoogleBadge />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[5fr_7fr] lg:gap-10">
          <FeaturedReview review={featured} />

          <div className="min-w-0">
            <ul
              ref={railRef}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {rest.map((review) => (
                <li
                  key={review.name}
                  className="w-[min(88vw,26rem)] shrink-0 snap-start bg-secondary p-7"
                >
                  <StarRating />
                  <blockquote className="mt-4 text-sm leading-relaxed text-foreground/85">
                    “{review.quote}”
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3 border-t border-hairline pt-5">
                    <Avatar initials={review.initials} />
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {review.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center justify-between">
              <ul className="flex items-center gap-2" aria-hidden="true">
                {rest.map((review, index) => (
                  <li
                    key={review.name}
                    className={cn(
                      "size-1.5 transition-colors",
                      index === active ? "bg-primary" : "bg-hairline",
                    )}
                  />
                ))}
              </ul>

              <div className="flex items-center gap-2">
                <RailButton
                  label="Previous review"
                  onClick={() => scrollToCard(Math.max(0, active - 1))}
                  disabled={active === 0}
                >
                  <ChevronLeft className="size-4" aria-hidden="true" />
                </RailButton>
                <RailButton
                  label="Next review"
                  onClick={() =>
                    scrollToCard(Math.min(rest.length - 1, active + 1))
                  }
                  disabled={active >= rest.length - 1}
                >
                  <ChevronRight className="size-4" aria-hidden="true" />
                </RailButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedReview({ review }: { review: Review }) {
  return (
    <figure className="flex flex-col bg-secondary p-8 md:p-10">
      <Quote className="size-8 text-primary" aria-hidden="true" />
      <blockquote className="mt-6 flex-1 font-serif text-xl leading-relaxed text-foreground italic md:text-2xl">
        {review.quote}
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-3 border-t border-hairline pt-6">
        <Avatar initials={review.initials} />
        <div>
          <p className="text-sm font-semibold text-foreground">{review.name}</p>
          <p className="text-xs text-muted-foreground">{review.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <span
      aria-hidden="true"
      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background"
    >
      {initials}
    </span>
  );
}

function RailButton({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="flex size-9 items-center justify-center border border-hairline text-foreground transition-colors hover:bg-secondary disabled:opacity-35"
    >
      {children}
    </button>
  );
}
