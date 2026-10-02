import type { ReactNode } from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "cn";

import SectionHeading from "@/components/shared/SectionHeading";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { jsonLdProps } from "@/lib/Schema";

export interface Faq {
  question: string;
  answer: ReactNode;
}

/**
 * Numbered accordion plus the matching FAQPage JSON-LD. Answers are ReactNode
 * so they can carry paragraphs, lists and links; the schema text is derived
 * from them via convertFaqsForSchema.
 */
export default function FAQSection({
  faqs,
  eyebrow = "Question and Answers",
  heading = "Frequently Asked Questions",
  lede,
  className,
}: {
  faqs: Faq[];
  eyebrow?: string;
  heading?: string;
  lede?: string;
  className?: string;
}) {
  const schema = generateFAQSchema(convertFaqsForSchema(faqs));

  return (
    <section className={cn("bg-background", className)}>
      <script {...jsonLdProps(schema)} />
      <div className="wrap band">
        <SectionHeading eyebrow={eyebrow} title={heading} lede={lede} />

        <div className="mt-10 flex flex-col gap-px bg-hairline">
          {faqs.map((faq, index) => (
            <details
              open={index === 0}
              key={faq.question}
              className="group bg-secondary px-5 md:px-7"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 py-5 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex flex-1 items-baseline gap-4 pr-4 text-left">
                  <span
                    className="index-marker shrink-0 text-lg text-primary"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-foreground md:text-lg">
                    {faq.question}
                  </h3>
                </span>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <div className="pb-6 text-sm leading-relaxed text-muted-foreground md:pl-11">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
