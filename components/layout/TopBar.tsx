import { Clock, MessageCircle, Phone } from "lucide-react";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  SOCIALS,
  WHATSAPP_HREF,
} from "@/lib/Contact";

/**
 * Dark utility rail. Desktop only — on mobile the phone and WhatsApp actions
 * live in the sticky bottom bar instead.
 */
export default function TopBar() {
  return (
    <div className="hidden bg-foreground text-background lg:block">
      <div className="wrap flex h-10 items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 font-semibold transition-colors hover:text-primary"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <span className="h-3 w-px bg-hairline-invert" aria-hidden="true" />
          <span className="flex items-center gap-2 text-background/80">
            <Clock className="size-3.5" aria-hidden="true" />
            Open 24 Hours | 7 Days across UAE
          </span>
          <span className="h-3 w-px bg-hairline-invert" aria-hidden="true" />
          <span className="text-background/80">
            Pay Upon Satisfaction • Zero Hidden Surcharges
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold transition-colors hover:text-whatsapp"
          >
            <MessageCircle className="size-3.5" aria-hidden="true" />
            WhatsApp: {PHONE_DISPLAY}
          </a>
          <span className="h-3 w-px bg-hairline-invert" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
