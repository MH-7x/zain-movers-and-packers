import type { ReactNode } from "react";
import { cn } from "cn";

/**
 * The recurring editorial header: uppercase eyebrow, Source Serif 4 headline,
 * optional lede. `align="split"` places the lede in the counterweight column.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "dark",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center" | "split";
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const heading = (
    <Tag
      className={cn(
        "max-w-[26ch] text-3xl leading-[1.15] text-balance md:text-4xl lg:text-[2.75rem]",
        tone === "light" && "text-background",
        align === "center" && "mx-auto max-w-[24ch] text-center",
        align === "split" && "max-w-[26ch]",
      )}
    >
      {title}
    </Tag>
  );

  const ledeNode = lede ? (
    <p
      className={cn(
        "text-base leading-relaxed",
        tone === "light" ? "text-background/75" : "text-muted-foreground",
        align === "center" ? "mx-auto max-w-prose text-center" : "max-w-prose",
      )}
    >
      {lede}
    </p>
  ) : null;

  if (align === "split") {
    return (
      <div
        className={cn(
          "grid gap-6 border-b border-hairline pb-8 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16",
          tone === "light" && "border-hairline-invert",
          className,
        )}
      >
        <div>
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          {heading}
        </div>
        {ledeNode}
      </div>
    );
  }

  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow mb-4", align === "center" && "text-center")}>
          {eyebrow}
        </p>
      )}
      {heading}
      {ledeNode && <div className="mt-5">{ledeNode}</div>}
    </div>
  );
}
