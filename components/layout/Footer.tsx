import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";

import Logo from "@/components/shared/Logo";
import { SERVICES } from "@/data/services-nav";
import { LOCATIONS } from "@/data/locations-nav";
import { DUBAI_AREAS } from "@/data/dubai-areas-nav";
import {
  ADDRESS_LINE,
  EMAIL,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  SOCIALS,
  WHATSAPP_HREF,
} from "@/lib/Contact";
import { APP } from "@/lib/App";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-hairline bg-secondary">
      <div className="wrap py-14 pb-28 md:py-20 lg:pb-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Established Dubai 2015. Licensed and insured moving and packing
              solutions across Dubai and the UAE.
            </p>

            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-primary"
                >
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MessageCircle
                    className="size-4 text-whatsapp"
                    aria-hidden="true"
                  />
                  WhatsApp Available 24/7
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_HREF}
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {ADDRESS_LINE}
              </li>
            </ul>
          </div>

          <FooterColumn title="Our Services" links={SERVICES} />
          <FooterColumn
            title="Emirates & Areas"
            links={[{ label: "Movers in Dubai", href: "/" }, ...LOCATIONS]}
          />
          <FooterColumn title="Dubai Communities" links={DUBAI_AREAS} />
        </div>

        <div className="mt-12 border-t border-hairline pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <ul className="flex items-center gap-5 text-sm">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            © {year} {APP.name}. All rights reserved. Trade Licence &amp; Moving
            Logistics Permit UAE.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="eyebrow font-sans">{title}</h3>
      <ul className="mt-5 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
