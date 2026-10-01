import type { ReactNode } from "react";

import Reveal from "@/components/shared/Reveal";

/**
 * Editorial opener for a Dubai community: the area narrative on the wide
 * column, supporting photography stacked on the counterweight.
 */
export default function AreaLogistics({
  eyebrow,
  title,
  children,
  proofImages,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  proofImages: { alt: string; label: string; caption: string; sub: string }[];
}) {
  return (
    <section className="bg-secondary">
      <div className="wrap band">
        <div className="">
          <div className="">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 className="mt-5 max-w-[30ch] text-3xl leading-[1.15] md:text-4xl">
              {title}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground [&>p]:max-w-5xl">
              {children}
            </div>
          </div>
        </div>
        <ul className="grid md:grid-cols-2 gap-10 mt-10">
          {proofImages.map((image, index) => (
            <li key={image.caption}>
              <Reveal delay={index * 70}>
                <div className="relative aspect-video overflow-hidden bg-hairline"></div>
                <div className="bg-background p-4">
                  <p className="text-sm font-semibold text-foreground">
                    {image.caption}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {image.sub}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
