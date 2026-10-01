import type { ReactNode } from "react";
import Image from "next/image";
import { CircleCheck, ShieldCheck } from "lucide-react";

import Reveal from "@/components/shared/Reveal";

/**
 * Editorial opener: narrative on the wide column, a single supporting image
 * plus one specification callout on the counterweight.
 */
export default function ServiceIntro({
  eyebrow,
  title,
  children,
  checklist,
  imageSrc,
  imageAlt,
  imageLabel,
  spec,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  checklist: string[];
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
  spec: { title: string; body: string };
}) {
  return (
    <section className="bg-secondary">
      <div className="wrap band">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <Reveal>
            <div className="relative aspect-3/2 w-full overflow-hidden bg-secondary">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-px bg-background p-6">
              <h3 className="flex items-center gap-2.5 text-base font-semibold">
                <ShieldCheck
                  className="size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {spec.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {spec.body}
              </p>
            </div>
          </Reveal>
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-5 max-w-[20ch] text-3xl leading-[1.15] md:text-4xl">
              {title}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground [&>p]:max-w-prose">
              {children}
            </div>

            <ul className="mt-8 grid gap-px bg-hairline sm:grid-cols-2">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 bg-background px-4 py-3.5 text-sm font-medium text-foreground"
                >
                  <CircleCheck
                    className="size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
