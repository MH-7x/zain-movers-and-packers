import Link from "next/link";
import { cn } from "cn";

/**
 * Wordmark: terracotta index block + Source Serif 4 name + the accent dot that
 * closes the word, per the design references.
 */
export default function Logo({
  className,
  tone = "dark",
  withMark = true,
}: {
  className?: string;
  /** "dark" = dark text on light surfaces, "light" = white text on dark bands. */
  tone?: "dark" | "light";
  withMark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Zain Movers and Packers — home"
      className={cn("flex items-center gap-2.5", className)}
    >
      {withMark && (
        <span
          aria-hidden="true"
          className="flex size-9 shrink-0 items-center justify-center bg-primary font-serif text-xl leading-none font-bold text-primary-foreground"
        >
          Z
        </span>
      )}
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-xl font-bold tracking-tight",
            tone === "light" ? "text-background" : "text-foreground",
          )}
        >
          Zain Movers
          <span className="text-primary">.</span>
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.6rem] font-semibold tracking-[0.18em] uppercase",
            tone === "light" ? "text-background/70" : "text-muted-foreground",
          )}
        >
          &amp; Packers
        </span>
      </span>
    </Link>
  );
}
