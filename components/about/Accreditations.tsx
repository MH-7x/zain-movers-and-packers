import { FileCheck2, Landmark, ScrollText, ShieldCheck, Truck } from "lucide-react";

import SectionHeading from "@/components/shared/SectionHeading";

const CREDENTIALS = [
  {
    icon: Landmark,
    title: "Dubai Department of Economy & Tourism",
    body: "Official UAE commercial trade licence held continuously since incorporation.",
  },
  {
    icon: ShieldCheck,
    title: "Goods-in-Transit Cargo Insurance",
    body: "Active cargo policy covering household and commercial effects on every load.",
  },
  {
    icon: Truck,
    title: "RTA Registered Commercial Fleet",
    body: "Owned, branded, enclosed trucks registered for commercial transport across the UAE.",
  },
  {
    icon: FileCheck2,
    title: "Developer NOC Documentation",
    body: "Trade licence, vehicle registration, and crew Emirates IDs supplied for Emaar, Nakheel, DMCC, and DSOA permits.",
  },
  {
    icon: ScrollText,
    title: "Employed, Visa-Sponsored Crews",
    body: "Every mover is a full-time, background-checked employee on our own visa — never a day labourer.",
  },
];

/**
 * Credential ledger. Deliberately named documents rather than decorative logo
 * boxes, since a moving customer is checking legitimacy here.
 */
export default function Accreditations() {
  return (
    <section className="bg-foreground">
      <div className="wrap band">
        <SectionHeading
          eyebrow="Legal Compliance"
          title="Licensing, Insurance and Accreditations"
          lede="Every document a landlord, building manager, or finance department is likely to ask for — issued the moment you book."
          tone="light"
          align="split"
        />

        <ul className="mt-10 grid gap-px bg-hairline-invert sm:grid-cols-2 lg:grid-cols-3">
          {CREDENTIALS.map(({ icon: Icon, title, body }) => (
            <li key={title} className="bg-foreground p-7">
              <Icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-5 text-base font-semibold text-background">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-background/70">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
