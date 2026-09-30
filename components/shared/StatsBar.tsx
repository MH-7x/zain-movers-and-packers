import { cn } from "cn";

export interface Stat {
  value: string;
  label: string;
}

/**
 * Metrics strip divided by hairline rules. Dividers are drawn by the 1px grid
 * gap showing the parent through, so they stay correct at every breakpoint.
 * The dark variant is a full-bleed charcoal band.
 */
export default function StatsBar({
  stats,
  tone = "light",
  className,
}: {
  stats: Stat[];
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";

  return (
    <section
      className={cn(
        isDark ? "bg-foreground" : "border-y border-hairline bg-background",
        className,
      )}
    >
      <div className="wrap py-10 md:py-12">
        <dl
          className={cn(
            "grid grid-cols-2 gap-px lg:grid-cols-4",
            isDark ? "bg-hairline-invert" : "bg-hairline",
          )}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={cn(
                "px-4 py-5 sm:px-6",
                isDark ? "bg-foreground" : "bg-background",
              )}
            >
              <dd
                data-numeric
                className={cn(
                  "font-serif text-3xl leading-none font-semibold md:text-4xl",
                  isDark ? "text-accent" : "text-primary",
                )}
              >
                {stat.value}
              </dd>
              <dt
                className={cn(
                  "mt-3 text-xs font-semibold tracking-[0.12em] uppercase",
                  isDark ? "text-background/70" : "text-muted-foreground",
                )}
              >
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
