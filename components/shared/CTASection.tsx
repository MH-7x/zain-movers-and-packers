import Image from "next/image";
import Link from "next/link";
import { Clock, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { cn } from "cn";

import QuoteForm from "@/components/shared/QuoteForm";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from "@/lib/Contact";

interface BaseProps {
  eyebrow?: string;
  heading: string;
  description: string;
  className?: string;
}

/**
 * Variant A — full-width banner over a dark charcoal field with a low-opacity
 * photographic underlay. Buttons only, no form: used to close a page.
 */
export function CTABanner({
  eyebrow,
  heading,
  description,
  className,
}: BaseProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-foreground",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10 opacity-15">
        <Image
          src="/homepage/dubai-moving-truck-sunset-zain-movers-packers.jpg"
          alt="moving company truck in Dubai at sunset"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="wrap py-16 text-center md:py-24">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h2 className="mx-auto max-w-[20ch] text-3xl text-balance text-background md:text-4xl lg:text-[2.75rem]">
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-prose text-base leading-relaxed text-background/75">
          {description}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="flex h-13 w-full items-center justify-center bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85 sm:w-auto"
          >
            Get a Free Quote
          </Link>

          <a
            href={PHONE_HREF}
            className="flex h-13 w-full items-center justify-center gap-2 border border-background/60 px-8 text-sm font-semibold text-background transition-colors hover:bg-background hover:text-foreground sm:w-auto"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call: {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

/**
 * Variant B — asymmetric split: narrative and direct-contact rails on the left,
 * the quote engine on the right. `tone` switches between the charcoal treatment
 * used on the homepage and the linen treatment used on inner pages.
 */
export function CTAWithForm({
  eyebrow = "Fast Accurate Estimation",
  heading,
  description,
  tone = "dark",
  className,
}: BaseProps & { tone?: "dark" | "light" }) {
  const isDark = tone === "dark";

  return (
    <section
      className={cn(isDark ? "bg-secondary" : "bg-background", className)}
    >
      <div className="wrap band">
        <div
          className={cn(
            "grid gap-10 p-6 md:p-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16",
            isDark ? "bg-foreground" : "bg-secondary",
          )}
        >
          <div>
            <p className={cn("eyebrow mb-4", isDark && "text-primary")}>
              {eyebrow}
            </p>
            <h2
              className={cn(
                "text-3xl leading-[1.15] text-balance md:text-4xl",
                isDark && "text-background",
              )}
            >
              {heading}
            </h2>
            <p
              className={cn(
                "mt-5 max-w-prose text-base leading-relaxed",
                isDark ? "text-background/75" : "text-muted-foreground",
              )}
            >
              {description}
            </p>

            <ul
              className={cn(
                "mt-7 space-y-3 text-sm",
                isDark ? "text-background/85" : "text-muted-foreground",
              )}
            >
              <li className="flex items-start gap-2.5">
                <Clock
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                A clear, fixed quote back in minutes
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                The price we quote is the exact price you pay
              </li>
            </ul>

            <div className="mt-8 space-y-2">
              <a
                href={PHONE_HREF}
                className={cn(
                  "flex items-center justify-between gap-4 p-4 transition-colors",
                  isDark
                    ? "bg-background/10 text-background hover:bg-background/15"
                    : "bg-background text-foreground hover:bg-accent",
                )}
              >
                <span className="flex items-center gap-3">
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  <span className="text-base font-bold">
                    Call Direct: {PHONE_DISPLAY}
                  </span>
                </span>
                <span
                  className={cn(
                    "text-[0.65rem] font-semibold tracking-[0.12em] uppercase",
                    isDark ? "text-background/60" : "text-muted-foreground",
                  )}
                >
                  No obligation
                </span>
              </a>

              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 bg-whatsapp p-4 text-whatsapp-foreground transition-opacity hover:opacity-90"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  <span className="text-base font-bold">
                    WhatsApp: {PHONE_DISPLAY}
                  </span>
                </span>
                <span className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase opacity-80">
                  Send photos
                </span>
              </a>
            </div>
          </div>

          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
