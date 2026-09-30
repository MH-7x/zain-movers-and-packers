import SectionHeading from "@/components/shared/SectionHeading";
import QuoteDialog from "@/components/shared/QuoteDialog";
import Reveal from "@/components/shared/Reveal";

export interface AreaService {
  title: string;
  body: string;
}

/**
 * Execution tiers for a specific community: the markdown's service headings,
 * each bookable directly from its row.
 */
export default function AreaServices({
  title,
  lede,
  services,
}: {
  title: string;
  lede: string;
  services: AreaService[];
}) {
  return (
    <section className="bg-background">
      <div className="wrap band">
        <SectionHeading eyebrow="Execution Tiers" title={title} lede={lede} />

        <ol className="mt-10 flex flex-col gap-px bg-hairline">
          {services.map((service, index) => (
            <li key={service.title}>
              <Reveal className="grid gap-6 bg-secondary p-6 md:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
                <div className="flex gap-5">
                  <span className="index-marker shrink-0 text-3xl text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 max-w-prose text-sm leading-relaxed text-muted-foreground">
                      {service.body}
                    </p>
                  </div>
                </div>


                <QuoteDialog>
                  <button
                    type="button"
                    className="h-11 shrink-0 bg-foreground px-6 text-xs font-semibold tracking-[0.08em] text-background uppercase transition-colors hover:bg-primary"
                  >
                    Book Tier {String(index + 1).padStart(2, "0")}
                  </button>
                </QuoteDialog>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
