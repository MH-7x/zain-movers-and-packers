import { MessageCircle, Phone } from "lucide-react";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/Contact";

/** Fixed two-up conversion bar. Mobile only. */
export default function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-hairline-invert lg:hidden">
      <a
        href={PHONE_HREF}
        className="flex h-14 items-center justify-center gap-2 bg-foreground text-sm font-semibold text-background"
      >
        <Phone className="size-4" aria-hidden="true" />
        Call Now
      </a>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 items-center justify-center gap-2 bg-whatsapp text-sm font-semibold text-whatsapp-foreground"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}
