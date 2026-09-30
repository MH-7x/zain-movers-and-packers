"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle, Phone, X } from "lucide-react";
import { cn } from "cn";

import Logo from "@/components/shared/Logo";
import type { NavItem } from "@/data/services-nav";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from "@/lib/Contact";

interface Props {
  open: boolean;
  onClose: () => void;
  menus: { label: string; items: NavItem[] }[];
  plainLinks: { label: string; href: string }[];
}

export default function MobileMenu({
  open,
  onClose,
  menus,
  plainLinks,
}: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);

  // Lock body scroll and wire up Escape while the overlay is open.
  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col bg-background transition-[opacity,visibility] duration-200 lg:hidden",
        open ? "visible opacity-100" : "invisible opacity-0",
      )}
      aria-hidden={!open}
    >
      <div className="flex h-20 shrink-0 items-center justify-between border-b border-hairline px-5">
        <Logo />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="flex size-10 items-center justify-center border border-hairline transition-colors hover:bg-secondary"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto overscroll-contain">
        <ul className="divide-y divide-hairline">
          {menus.map((menu) => {
            const isOpen = expanded === menu.label;
            return (
              <li key={menu.label}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setExpanded(isOpen ? null : menu.label)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-base font-semibold text-foreground"
                >
                  {menu.label}
                  <ChevronDown
                    className={cn(
                      "size-4 text-muted-foreground transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-200 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className="bg-secondary pb-2">
                      {menu.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="block py-3 pr-5 pl-8 text-sm text-muted-foreground transition-colors hover:text-foreground"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}

          {plainLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block px-5 py-4 text-base font-semibold text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="shrink-0 border-t border-hairline p-5">
        <p className="text-xs text-muted-foreground">
          Open 24 hours, 7 days a week across the UAE.
        </p>
        <div className="mt-3 grid gap-2">
          <a
            href={PHONE_HREF}
            className="flex h-12 items-center justify-center gap-2 bg-foreground text-sm font-semibold text-background"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center gap-2 bg-whatsapp text-sm font-semibold text-whatsapp-foreground"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
