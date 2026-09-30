import type { ReactNode } from "react";
import { cn } from "cn";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

        <Accordion className="mt-10 gap-px bg-hairline">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="border-b-0 bg-secondary px-5 md:px-7"
            >
              <AccordionTrigger className="items-center gap-4 py-5 text-base font-semibold text-foreground hover:no-underline md:text-lg">
                <span className="flex items-baseline gap-4 pr-4 text-left">
                  <span
                    className="index-marker shrink-0 text-lg text-primary"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground md:pl-11">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
