import type { ReactNode } from "react";

import Breadcrumbs from "@/components/shared/Breadcrumbs";

/**
 * Shell for the plain legal pages. Keeps the measure at roughly 75 characters
 * and applies the document typography, so the policy text reads like a
 * contract rather than a marketing page.
 */
export default function LegalPage({
  title,
  intro,
  lastUpdated,
  path,
  children,
}: {
  title: string;
  intro: string;
  lastUpdated: string;
  path: string;
  children: ReactNode;
}) {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: title, href: path },
        ]}
      />

      <article className="bg-background">
        <div className="wrap band">
          <header className="max-w-prose">
            <p className="eyebrow">Legal</p>
            <h1 className="mt-5 text-4xl leading-[1.1] tracking-tight text-balance md:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {intro}
            </p>
            <p className="mt-5 border-t border-hairline pt-5 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                Last updated:
              </span>{" "}
              {lastUpdated}
            </p>
          </header>

          <div
            className={[
              "mt-12 max-w-prose",
              "[&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:leading-snug",
              "[&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold",
              "[&_p]:mt-4 [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-muted-foreground",
              "[&_ul]:mt-4 [&_ul]:space-y-2.5",
              "[&_li]:relative [&_li]:pl-5 [&_li]:text-base [&_li]:leading-relaxed [&_li]:text-muted-foreground",
              "[&_li]:before:absolute [&_li]:before:top-2.5 [&_li]:before:left-0 [&_li]:before:size-1 [&_li]:before:bg-primary",
              "[&_strong]:font-semibold [&_strong]:text-foreground",
              "[&_a]:font-medium [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline",
            ].join(" ")}
          >
            {children}
          </div>
        </div>
      </article>
    </>
  );
}
