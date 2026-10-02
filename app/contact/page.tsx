import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ContactGrid from "@/components/contact/ContactGrid";
import MapEmbed from "@/components/contact/MapEmbed";
import QuoteForm from "@/components/shared/QuoteForm";
import TrustBadges from "@/components/shared/TrustBadges";
import { MetadataTemplate } from "@/lib/MetadataTemplate";

const PATH = "/contact";

export const metadata = MetadataTemplate({
  title: "Contact Zain Movers and Packers | Free Moving Quote Dubai",
  desc: "Get a free fixed moving quote from Zain Movers and Packers. Call or WhatsApp 055 2550285, open 24/7 across the UAE, office in Al Quoz, Dubai.",
  path: PATH,
  image: {
    path: "/homepage/zain-movers-and-packers-dubai-hero.jpg",
    alt: "Zain Movers and Packers crew and branded truck ready for dispatch in Dubai",
  },
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: PATH },
        ]}
        note=" open 24 hours, 7 days"
      />

      <section className="bg-background">
        <div className="wrap pt-12 pb-4 md:pt-16">
          <div className="max-w-3xl">
            <p className="eyebrow">Get in Touch</p>
            <h1 className="mt-5 max-w-[25ch] text-4xl leading-[1.1] tracking-tight text-balance md:text-5xl">
              Contact Zain Movers and Packers
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted-foreground">
              If you have a move coming up — or you just want to ask a question
              — reach out. There is no obligation and no pressure, and we
              respond fast.
            </p>
          </div>

          <TrustBadges
            className="mt-10"
            badges={[
              { label: "Open 24 Hours", sub: "7 days a week across the UAE" },
              { label: "Fixed Quotes", sub: "Usually within minutes" },
              { label: "No Advance Payment", sub: "Pay upon satisfaction" },
            ]}
          />
        </div>
      </section>

      <ContactGrid />

      <section className="bg-secondary">
        <div className="wrap band">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Request a Quote</p>
            <h2 className="mt-5 text-3xl leading-[1.15] text-balance md:text-4xl">
              Tell Us About Your Move
            </h2>
            <p className="mx-auto mt-5 max-w-prose text-base leading-relaxed text-muted-foreground">
              Fill in your relocation details and our dispatch team will come
              back with an itemised, locked-in estimate. No sales pressure, no
              hidden clauses.
            </p>
          </div>

          <QuoteForm
            heading={null}
            description={null}
            className="mx-auto mt-10 max-w-3xl"
          />
        </div>
      </section>

      <MapEmbed />
    </>
  );
}
