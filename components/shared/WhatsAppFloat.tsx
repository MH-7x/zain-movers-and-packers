import { MessageCircle } from "lucide-react";
import { WHATSAPP_HREF } from "@/lib/Contact";

/**
 * Desktop-only floating WhatsApp action. On mobile the sticky bottom bar
 * already carries this, so it is hidden there.
 */
export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Zain Movers on WhatsApp"
      className="group fixed right-6 bottom-6 z-40 hidden size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform duration-200 hover:scale-105 lg:flex"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-40 [animation-duration:2.5s] [animation-iteration-count:3] motion-reduce:hidden"
      />
      <MessageCircle className="relative size-6" aria-hidden="true" />
    </a>
  );
}
