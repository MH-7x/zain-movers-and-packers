import Link from "next/link";
import { generateBreadcrumbSchema, jsonLdProps, type Crumb } from "@/lib/Schema";

/**
 * Visible breadcrumb rail plus its BreadcrumbList JSON-LD. Pass every crumb
 * including Home; the final entry is rendered as the current page.
 *
 * `note` is the right-aligned operational line used on area and about pages
 * (e.g. "Active Dispatch: Al Marsa St & Marina Promenade Hub").
 */
export default function Breadcrumbs({
  crumbs,
  note,
}: {
  crumbs: Crumb[];
  note?: string;
}) {
  const last = crumbs[crumbs.length - 1];

  return (
    <div className="border-b border-hairline bg-secondary">
      <script {...jsonLdProps(generateBreadcrumbSchema(crumbs))} />
      <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 text-sm">
            {crumbs.map((crumb, index) => {
              const isLast = crumb === last;
              return (
                <li key={crumb.href} className="flex items-center gap-x-2">
                  {index > 0 && (
                    <span className="text-muted-foreground/60" aria-hidden="true">
                      /
                    </span>
                  )}
                  {isLast ? (
                    <span
                      aria-current="page"
                      className="font-semibold text-foreground"
                    >
                      {crumb.name}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {crumb.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {note && (
          <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-primary"
            />
            {note}
          </p>
        )}
      </div>
    </div>
  );
}
