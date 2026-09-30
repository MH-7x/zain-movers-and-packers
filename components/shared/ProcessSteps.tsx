import type { LucideIcon } from "lucide-react";
import { cn } from "cn";
import Reveal from "@/components/shared/Reveal";

export interface ProcessStep {
  title: string;
  description: string;
  /** Short operational note printed under the rule, e.g. "Avg response: 15 mins". */
  note?: string;
  icon?: LucideIcon;
}

/**
 * Two presentations of the same numbered sequence:
 *
 * - "timeline": the alternating vertical spine used on the homepage, where the
 *   sequence runs to six steps and needs room to breathe.
 * - "cards": the compact four-across row used on service pages.
 */
export default function ProcessSteps({
  steps,
  variant = "cards",
  className,
}: {
  steps: ProcessStep[];
  variant?: "timeline" | "cards";
  className?: string;
}) {
  if (variant === "timeline") {
    return (
      <ol className={cn("relative mx-auto max-w-5xl", className)}>
        {/* Spine: centred on desktop, flush-left on mobile. */}
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[11px] w-px border-l border-dashed border-primary/40 md:left-1/2 md:-translate-x-1/2"
        />

        {steps.map((step, index) => {
          const isRight = index % 2 === 1;
          return (
            <li
              key={step.title}
              className="relative pb-10 pl-10 last:pb-0 md:grid md:grid-cols-2 md:gap-16 md:pl-0"
            >
              <span
                aria-hidden="true"
                className="absolute top-1 left-0 flex size-6 items-center justify-center rounded-full bg-primary font-sans text-[0.65rem] font-bold text-primary-foreground md:left-1/2 md:-translate-x-1/2"
              >
                {index + 1}
              </span>

              <Reveal
                className={cn(
                  "bg-secondary p-6",
                  isRight
                    ? "md:col-start-2 md:text-left"
                    : "md:col-start-1 md:text-right",
                )}
              >
                <p className="index-marker text-2xl text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                {step.note && (
                  <p className="mt-3 text-sm font-semibold text-primary">
                    {step.note}
                  </p>
                )}
              </Reveal>
            </li>
          );
        })}
      </ol>
    );
  }

  return (
    <ol
      className={cn(
        "grid gap-px bg-hairline",
        // Dividers are the parent showing through a 1px gap, so a partial final
        // row renders as a visible hairline block. Fit the columns to the count.
        steps.length === 3
          ? "sm:grid-cols-3"
          : steps.length % 4 === 0
            ? "sm:grid-cols-2 lg:grid-cols-4"
            : "sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <li key={step.title} className="flex flex-col bg-background p-7">
            <div className="flex items-start justify-between">
              <span className="index-marker text-4xl text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              {Icon && (
                <Icon
                  className="size-5 text-muted-foreground"
                  aria-hidden="true"
                />
              )}
            </div>
            <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
            {step.note && (
              <p className="mt-5 border-t border-hairline pt-4 text-sm font-semibold text-primary">
                {step.note}
              </p>
            )}
          </li>
        );
      })}
    </ol>
  );
}
