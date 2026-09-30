import { ADDRESS_LINE } from "@/lib/Contact";

/**
 * Google Maps embed centred on the Al Quoz depot. Uses the keyless `/maps?q=`
 * embed form so it works before an API key is provisioned.
 */
export default function MapEmbed() {
  const query = encodeURIComponent("Al Quoz Industrial Area 3, Dubai, UAE");

  return (
    <section className="bg-secondary">
      <div className="wrap band">
        <p className="eyebrow">Find Us</p>
        <h2 className="mt-5 max-w-[26ch] text-3xl leading-[1.15] md:text-4xl">
          Our Dubai Office and Logistics Depot
        </h2>
        <p className="mt-5 max-w-prose text-base leading-relaxed text-muted-foreground">
          {ADDRESS_LINE}. You are welcome to visit, check our trade licence, and
          meet the team before you book.
        </p>

        <div className="mt-8 border border-hairline bg-background">
          <iframe
            title="Map showing the Zain Movers and Packers office in Al Quoz, Dubai"
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
