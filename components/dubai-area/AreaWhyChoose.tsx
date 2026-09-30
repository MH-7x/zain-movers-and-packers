import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

export interface AreaWhyPoint {
  title: string;
  body: string;
}

/**
 * The "Why Choose Zain Movers and Packers in [Area]" band.
 *
 * Renders the markdown's bolded bullet label as the point title and its
 * sentence as the body, in a numbered rule-divided ledger. The list is a
 * vertical stack, so it is safe at any length.
 */
export default function AreaWhyChoose({
  title,
  lede,
  points,
}: {
  title: string;
  lede: string;
  points: AreaWhyPoint[];
}) {
  return (
    <section className="bg-secondary">
      <div className="wrap band">
        <SectionHeading eyebrow="Why Choose Us" title={title} lede={lede} />

        <ol className="mt-10 flex flex-col gap-px bg-hairline">
          {points.map((point, index) => (
            <li key={point.title}>
              <Reveal className="flex gap-5 bg-background p-6 md:p-7">
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center bg-primary font-sans text-xs font-bold text-primary-foreground"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold md:text-lg">
                    {point.title}
                  </h3>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
                    {point.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
