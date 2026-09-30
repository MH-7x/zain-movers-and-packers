import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import {
  ADDRESS_LINE,
  EMAIL,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  PHONE_INTL,
  WHATSAPP_HREF,
} from "@/lib/Contact";

/** Three direct-contact channels, then the office address rail. */
export default function ContactGrid() {
  return (
    <section className="bg-background">
      <div className="wrap band">
        <ul className="grid gap-px bg-hairline lg:grid-cols-3">
          <li className="bg-secondary p-7">
            <Phone className="size-6 text-primary" aria-hidden="true" />
            <h2 className="mt-5 font-serif text-xl font-semibold">Call Us</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Straight through to dispatch, 24 hours a day.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-4 block font-serif text-2xl font-semibold text-primary transition-opacity hover:opacity-80"
            >
              {PHONE_DISPLAY}
            </a>
            <p className="mt-1 text-sm text-muted-foreground">{PHONE_INTL}</p>
          </li>

          <li className="bg-secondary p-7">
            <MessageCircle
              className="size-6 text-whatsapp"
              aria-hidden="true"
            />
            <h2 className="mt-5 font-serif text-xl font-semibold">WhatsApp</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Send a video of your rooms and get a fixed quote in minutes.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex h-12 items-center justify-center gap-2.5 bg-whatsapp px-6 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Message Us on WhatsApp
            </a>
          </li>

          <li className="bg-secondary p-7">
            <Mail className="size-6 text-primary" aria-hidden="true" />
            <h2 className="mt-5 font-serif text-xl font-semibold">Email</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Best for corporate quotations and formal documentation.
            </p>
            <a
              href={EMAIL_HREF}
              className="mt-4 block text-base font-semibold break-words text-foreground transition-colors hover:text-primary"
            >
              {EMAIL}
            </a>
          </li>
        </ul>

        <div className="mt-6 grid gap-6 bg-secondary p-7 sm:grid-cols-2">
          <p className="flex items-start gap-3 text-sm">
            <MapPin
              className="mt-0.5 size-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span>
              <span className="block font-semibold text-foreground">
                Office &amp; Depot
              </span>
              <span className="mt-1 block text-muted-foreground">
                {ADDRESS_LINE}
              </span>
            </span>
          </p>

          <p className="flex items-start gap-3 text-sm">
            <Clock
              className="mt-0.5 size-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span>
              <span className="block font-semibold text-foreground">
                Opening Hours
              </span>
              <span className="mt-1 block text-muted-foreground">
                Open 24 hours, 7 days a week across the UAE.
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
