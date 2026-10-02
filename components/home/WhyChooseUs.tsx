import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/Contact";

const REASONS = [
  {
    title: "Licensed and Registered",
    body: "We are an officially registered moving company in Dubai with a valid trade licence and insurance certificate. You can verify everything. We are not a one-man operation working from a phone.",
  },
  {
    title: "Pay Upon Satisfaction",
    body: "Most movers ask for money upfront. We don’t. You pay only after the job is done and you’re satisfied with the work. It’s that simple.",
  },
  {
    title: "No Hidden Charges",
    body: "The quote we give you is the price you pay. We don’t add surprise fees for stairs, long-carry, or weekends. Everything is included and explained upfront.",
  },
  {
    title: "10+ Years of Experience",
    body: "We’ve been in the moving industry since 2015 and have completed over 1,000 moves across the UAE. We know how to handle every type of move — from a studio apartment to a full warehouse.",
  },
  {
    title: "Trained Multilingual Team",
    body: "Our team speaks English and Arabic, so communication is never an issue. They’re trained, professional, and they respect your home and your privacy.",
  },
  {
    title: "Same-Day Moving Service",
    body: "Just arrived in the UAE? Need to move tomorrow? We offer same-day and next-day moving services for urgent situations. Call us and we’ll make it happen.",
  },
  {
    title: "Beyond Standard Moving",
    body: "We don’t just move houses and offices. We also handle industrial machinery, hospital equipment, and heavy safes. If it needs to be moved, we can do it.",
  },
  {
    title: "Your Privacy Matters",
    body: "We built our company on the philosophy of protection and privacy. Our team members are vetted and trusted. We understand that having strangers in your home — handling your personal belongings — requires real trust. We take that seriously.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-foreground">
      <div className="wrap band ">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* Narrative rail */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Trusted Moving Company</p>
            <h2 className="mt-5 max-w-[24ch] text-3xl leading-[1.15] text-background md:text-4xl lg:text-[2.75rem]">
              Why Choose Zain Movers and Packers
            </h2>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-background/75">
              There are hundreds of movers in Dubai. Here&apos;s why our
              customers keep choosing us — and recommending us.
            </p>

            <a
              href={PHONE_HREF}
              className="mt-8 flex items-center justify-between gap-4 border-l-2 border-primary bg-background/10 p-4 transition-colors hover:bg-background/15"
            >
              <span>
                <span className="block text-[0.65rem] font-semibold tracking-[0.12em] text-primary uppercase">
                  Immediate Assistance
                </span>
                <span className="mt-1.5 flex items-center gap-2 text-base font-bold text-background">
                  <Phone className="size-4" aria-hidden="true" />
                  Call: {PHONE_DISPLAY}
                </span>
              </span>
              <span className="text-xs text-background/60">
                Dispatched 24/7
              </span>
            </a>

            <Link
              href="/contact"
              className="mt-3 flex h-12 w-full items-center justify-center bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Get a Free Quote
            </Link>

            <div className="relative mt-8 aspect-3/2 w-full overflow-hidden">
              <Image
                src="/homepage/free-moving-quote-dubai-zain-movers-packers.jpg"
                alt="Get a free moving quote from Zain Movers and Packers Dubai"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Numbered manifest */}
          <ol className="divide-y divide-hairline-invert border-t border-hairline-invert">
            {REASONS.map((reason, index) => (
              <li key={reason.title} className="flex gap-5 py-7">
                <span
                  aria-hidden="true"
                  className="index-marker shrink-0 text-xl text-primary"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-background">
                    {reason.title}
                  </h3>
                  <p className="mt-2.5 max-w-prose text-sm leading-relaxed text-background/70">
                    {reason.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
