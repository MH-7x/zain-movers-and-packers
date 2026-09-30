import type { ReactNode } from "react";

import PlaceholderImage from "@/components/shared/PlaceholderImage";
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
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 className="mt-5 max-w-[18ch] text-3xl leading-[1.15] md:text-4xl">
              {title}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground [&>p]:max-w-prose">
              {children}
            </div>
          </div>

          <ul className="flex flex-col gap-6 self-start">
            {proofImages.map((image, index) => (
              <li key={image.caption}>
                <Reveal delay={index * 70}>
                  <PlaceholderImage
                    width={960}
                    height={560}
                    alt={image.alt}
                    label={image.label}
                    className="w-full"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
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
      </div>
    </section>
  );
}
