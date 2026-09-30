import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

export interface Pillar {
  title: string;
  body: string;
  /** Short operational tag printed under the rule. */
  tag: string;
}

/** Numbered company principles — the editorial backbone of the about page. */
export default function FoundationalPillars({
  eyebrow = "02 / Operational Integrity",
  title,
  lede,
  pillars,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  pillars: Pillar[];
}) {
  return (
    <section className="bg-background">
      <div className="wrap band">
        <SectionHeading eyebrow={eyebrow} title={title} lede={lede} />

        <ol className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <li key={pillar.title}>
              <Reveal
                delay={index * 60}
                className="flex h-full flex-col bg-secondary p-7"
              >
                <span className="index-marker text-3xl text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
                <p className="mt-6 border-t border-hairline pt-4 text-sm font-semibold text-primary">
                  {pillar.tag}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
