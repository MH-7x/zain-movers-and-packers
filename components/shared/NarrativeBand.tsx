import type { ReactNode } from "react";
import { cn } from "cn";

/**
 * Asymmetric heading-and-prose band: a short serif headline on the narrow
 * column, body copy on the wide one.
 *
 * Extracted from the five emirate location pages, which each repeated this
 * markup verbatim for their "Your Trusted Moving Company in X" section.
 */
export default function NarrativeBand({
  eyebrow,
  title,
  surface = "muted",
  children,
}: {
  eyebrow?: string;
  title: string;
  /** "muted" = bg-secondary, "plain" = bg-background. */
  surface?: "muted" | "plain";
  children: ReactNode;
}) {
  return (
    <section className={surface === "muted" ? "bg-secondary" : "bg-background"}>
      <div className="wrap band">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            <h2
              className={cn(
                "max-w-[26ch] text-3xl leading-[1.15] md:text-4xl",
              )}
            >
              {title}
            </h2>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-muted-foreground [&>p]:max-w-prose">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
