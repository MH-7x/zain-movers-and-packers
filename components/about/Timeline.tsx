import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

export interface Milestone {
  year: string;
  title: string;
  body: string;
}

/** Vertical company timeline with a terracotta spine and year markers. */
export default function Timeline({
  eyebrow = "04 / A Decade of Expansion",
  title,
  lede,
  milestones,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  milestones: Milestone[];
}) {
  return (
    <section className="bg-background">
      <div className="wrap band">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          lede={lede}
          align="center"
        />

        <ol className="relative mx-auto mt-14 max-w-3xl">
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[5px] w-px bg-primary/30"
          />

          {milestones.map((milestone, index) => (
            <li key={milestone.year} className="relative pb-10 pl-8 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-1.5 left-0 size-2.5 rounded-full bg-primary"
              />
              <Reveal delay={index * 50}>
                <p
                  data-numeric
                  className="font-serif text-xl font-semibold text-primary"
                >
                  {milestone.year}
                </p>
                <h3 className="mt-1.5 text-lg font-semibold">
                  {milestone.title}
                </h3>
                <p className="mt-2.5 max-w-prose text-sm leading-relaxed text-muted-foreground">
                  {milestone.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
