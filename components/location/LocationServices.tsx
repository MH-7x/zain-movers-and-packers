import type { ReactNode } from "react";
import Image from "next/image";

import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
export interface LocationService {
  title: string;
  /** One or two paragraphs of scope detail. */
  body: ReactNode;
  tag: string;
  imageSrc: string;
  imageAlt: string;
}

/**
 * Numbered service manifest for an emirate — a continuous rule-divided list,
 * intentionally distinct from the homepage services grid and the service-page
 * tier ladder.
 */
export default function LocationServices({
  eyebrow = "Core Capabilities",
  title,
  lede,
  services,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  services: LocationService[];
}) {
  return (
    <section className="bg-background">
      <div className="wrap band">
        <SectionHeading eyebrow={eyebrow} title={title} lede={lede} />

        <ol className="mt-10 divide-y divide-hairline border-y border-hairline">
          {services.map((service, index) => (
            <li key={service.title}>
              <Reveal className="grid gap-4 py-8 lg:grid-cols-10 lg:items-center lg:gap-12">
                <span className="index-marker text-3xl text-primary lg:w-16 col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className=" lg:col-span-5">
                  <h3 className="font-serif text-xl font-semibold md:text-2xl">
                    {service.title}
                  </h3>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground [&>p]:max-w-prose">
                    {service.body}
                  </div>
                  <Button className={"mt-5"}>
                    Contact for {service.tag} Moving
                  </Button>
                </div>
                <div className="relative aspect-4/3 overflow-hidden bg-secondary lg:col-span-4">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 35vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
