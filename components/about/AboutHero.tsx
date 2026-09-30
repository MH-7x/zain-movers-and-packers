import { BadgeCheck } from "lucide-react";

import PlaceholderImage from "@/components/shared/PlaceholderImage";

export default function AboutHero() {
  return (
    <section className="bg-background">
      <div className="wrap grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 [&>*]:min-w-0">
        <div>
          <p className="mb-6 inline-flex max-w-full flex-wrap items-center gap-2 bg-accent px-3 py-2 text-xs font-semibold tracking-[0.12em] text-accent-foreground uppercase">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-primary"
            />
            Established 2015 • Licensed UAE Relocation Operators
          </p>

          <h1 className="max-w-[16ch] text-4xl leading-[1.1] tracking-tight text-balance md:text-5xl">
            About Zain Movers and Packers
          </h1>

          <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted-foreground">
            A licensed, insured, and experienced moving company in Dubai. We
            built this business on one rule: if you are not satisfied, you do
            not pay.
          </p>

        </div>

        <div className="relative">
          <PlaceholderImage
            width={960}
            height={720}
            priority
            alt="Zain Movers branded truck being loaded by uniformed crew in Dubai"
            label="Branded fleet & uniformed crew"
            className="w-full"
            sizes="(min-width: 1024px) 42vw, 100vw"
          />

          <div className="flex items-center gap-4 border border-hairline bg-background p-5 lg:absolute lg:-bottom-8 lg:-left-8 lg:max-w-sm lg:shadow-[0_8px_24px_-4px_rgba(31,31,31,0.08)]">
            <BadgeCheck
              className="size-9 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <p className="font-serif text-lg font-semibold">
                Verified UAE Carrier
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Official commercial trade licence • Goods-in-transit cover
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
