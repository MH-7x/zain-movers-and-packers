import Image from "next/image";
import Link from "next/link";
import { FileCheck2, ShieldCheck } from "lucide-react";

import Reveal from "@/components/shared/Reveal";

export default function CompanyIntro() {
  return (
    <section className="bg-secondary">
      <div className="wrap band">
        <div className="grid gap-px bg-hairline lg:grid-cols-3 grid-cols-1">
          {/* Heritage marker */}
          <Reveal className="col-span-1 flex flex-col justify-between bg-background p-8">
            <div>
              <p className="eyebrow">Heritage Year</p>
              <p
                data-numeric
                className="mt-5 font-serif text-6xl leading-none font-semibold text-primary"
              >
                2015
              </p>
              <p className="mt-4 text-xs font-semibold tracking-[0.12em] text-foreground uppercase">
                Established in Dubai
              </p>
            </div>
            <div className="relative mt-5 aspect-4/3 overflow-hidden bg-secondary">
              <Image
                src="/homepage/zain-movers-packers-dubai-established-2015.jpg"
                alt="Zain Movers and Packers, established in Dubai in 2015"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
            </div>

            <dl className="mt-5 space-y-5 border-t border-hairline pt-6">
              <div>
                <dt
                  data-numeric
                  className="font-serif text-xl font-semibold text-foreground"
                >
                  1,000+
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  Successful moves completed across the UAE.
                </dd>
              </div>
              <div>
                <dt
                  data-numeric
                  className="font-serif text-xl font-semibold text-primary"
                >
                  100%
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  Trained in-house team in company uniform.
                </dd>
              </div>
            </dl>
          </Reveal>

          {/* Narrative */}
          <div className="col-span-2">
            <Reveal className="bg-background p-8 md:p-10" delay={60}>
              <p className="eyebrow">Foundational Ethics</p>
              <h2 className="mt-5 max-w-[25ch] text-3xl leading-[1.15] md:text-4xl">
                Trusted Moving Company in Dubai Since 2015
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p className="max-w-prose">
                  Zain Movers and Packers is a licensed and registered moving
                  company in Dubai. We&apos;ve been helping families,
                  individuals, and businesses move across the UAE since 2015 —
                  and officially registered our company in 2020.
                </p>
                <p className="max-w-prose">
                  Whether you&apos;re shifting a studio apartment in Dubai
                  Marina or moving an entire office in Business Bay, we handle
                  it all. Our moving services cover every emirate in the UAE,
                  including Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Al
                  Ain, and nearby areas.
                </p>
                <p className="max-w-prose">
                  We&apos;re not a phone-only operation. We&apos;re a fully
                  licensed moving company with branded trucks, a trained team,
                  insurance coverage, and a real office you can visit. You can
                  check our trade licence, meet the owner, and verify everything
                  before you hire us.
                </p>
                <p className="max-w-prose">
                  That&apos;s how we&apos;ve completed over 1,000 moves across
                  the UAE — by earning trust, one move at a time.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-hairline pt-6">
                <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <ShieldCheck
                    className="size-4 text-primary"
                    aria-hidden="true"
                  />
                  Fully Cargo Insured
                </span>
                <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <FileCheck2
                    className="size-4 text-primary"
                    aria-hidden="true"
                  />
                  DED Permit Approved
                </span>
                <Link
                  href="/about"
                  className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Learn more about us
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
