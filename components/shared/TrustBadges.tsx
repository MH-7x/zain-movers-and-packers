import type { LucideIcon } from "lucide-react";
import { cn } from "cn";

export interface TrustBadge {
  label: string;
  sub: string;
  /** Optional third line, used on the homepage credential strip. */
  detail?: string;
  icon?: LucideIcon;
}

/**
 * Structural credential strip shown directly beneath page heroes.
 * "rule" draws the terracotta hairline index used on the homepage;
 * "boxed" is the flat surface treatment used on service and area pages.
 */
export default function TrustBadges({
  badges,
  variant = "boxed",
  className,
}: {
  badges: TrustBadge[];
  variant?: "rule" | "boxed";
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid gap-px",
        badges.length === 3
          ? "sm:grid-cols-3"
          : "grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {badges.map((badge) => {
        const Icon = badge.icon;
        return (
          <li
            key={badge.label}
            className={cn(
              "bg-secondary p-5",
              variant === "rule" && "border-l-2 border-primary",
            )}
          >
            {Icon && (
              <Icon className="mb-3 size-5 text-primary" aria-hidden="true" />
            )}
            <p
              className={cn(
                "font-serif leading-tight font-semibold text-foreground",
                // Four-up rows get a tighter label so names like
                // "100% In-House Crew" do not break mid-word.
                badges.length > 3 ? "text-base" : "text-lg",
              )}
            >
              {badge.label}
            </p>
            <p className="mt-1 text-sm font-medium text-foreground/80">
              {badge.sub}
            </p>
            {badge.detail && (
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
                {badge.detail}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
