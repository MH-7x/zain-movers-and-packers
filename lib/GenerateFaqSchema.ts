export interface PlainFAQ {
  question: string;
  answer: string;
}

export const generateFAQSchema = (faqs: PlainFAQ[]) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return JSON.stringify(schema, null, 2);
};
