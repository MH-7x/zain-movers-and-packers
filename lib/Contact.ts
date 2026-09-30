import { APP } from "@/lib/App";

/** Display form used across the UI, matching the design references. */
export const PHONE_DISPLAY = "055 4495331";
/** International display form, used in schema and the footer. */
export const PHONE_INTL = "+971 55 4495331";
/** tel: href — digits only, E.164. */
export const PHONE_HREF = `tel:${APP.phone}`;

export const EMAIL = "info@zainmoversandpackers.com";
export const EMAIL_HREF = `mailto:${EMAIL}`;

export const ADDRESS = {
  street: "Warehouse 4, Al Quoz Industrial Area 3",
  locality: "Dubai",
  region: "Dubai",
  country: "AE",
};
export const ADDRESS_LINE = `${ADDRESS.street}, ${ADDRESS.locality}, UAE`;

export const WHATSAPP_MESSAGE =
  "Hi, I'm interested in your moving services. Can I get a free quote?";

/** Builds a wa.me link with a pre-filled message. */
export function whatsappHref(message: string = WHATSAPP_MESSAGE) {
  return `https://wa.me/971554495331?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_HREF = whatsappHref();

export const SOCIALS = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
];
