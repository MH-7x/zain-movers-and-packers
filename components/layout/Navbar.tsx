"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { cn } from "cn";

import Logo from "@/components/shared/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import QuoteDialog from "@/components/shared/QuoteDialog";
import { SERVICES } from "@/data/services-nav";
import { LOCATIONS } from "@/data/locations-nav";
import { DUBAI_AREAS } from "@/data/dubai-areas-nav";
import type { NavItem } from "@/data/services-nav";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/Contact";

const MENUS: { label: string; items: NavItem[] }[] = [
  { label: "Services", items: SERVICES },
  { label: "Locations", items: LOCATIONS },
  { label: "Areas", items: DUBAI_AREAS },
];

const PLAIN_LINKS = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      setScrolled(y > 8);

      // Ignore sub-pixel jitter and the rubber-band zone at the very top.
      if (Math.abs(delta) > 6 && y > 120) {
        setHidden(delta > 0);
      } else if (y <= 120) {
        setHidden(false);
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 bg-background transition-transform duration-300 ease-out",
          scrolled
            ? "border-b border-hairline shadow-[0_8px_24px_-4px_rgba(31,31,31,0.08)]"
            : "border-b border-hairline",
          hidden && "-translate-y-full",
        )}
      >
        <nav className="wrap flex h-20 items-center justify-between gap-6">
          <Logo />

          {/* Editorial centre rail */}
          <ul className="hidden items-center gap-1 lg:flex">
            {MENUS.map((menu) => (
              <li key={menu.label} className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground group-focus-within:text-foreground"
                >
                  {menu.label}
                  <ChevronDown
                    className="size-3.5 transition-transform group-hover:rotate-180"
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={cn(
                    "invisible absolute top-full left-1/2 z-50 w-[22rem] -translate-x-1/2 border border-foreground bg-background opacity-0",
                    "shadow-[0_8px_24px_-4px_rgba(31,31,31,0.08)] transition-[opacity,visibility] duration-150",
                    "group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
                  )}
                >
                  <ul className="divide-y divide-hairline">
                    {menu.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block px-5 py-3.5 transition-colors hover:bg-secondary"
                        >
                          <span className="block text-sm font-semibold text-foreground">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block text-xs text-muted-foreground">
                            {item.meta}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}

            {PLAIN_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Conversion rail */}
          <div className="flex items-center gap-4">
            <a
              href={PHONE_HREF}
              className="hidden flex-col items-end leading-none xl:flex"
            >
              <span className="text-[0.6rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                Call Now
              </span>
              <span className="mt-1 text-sm font-bold text-foreground transition-colors hover:text-primary">
                {PHONE_DISPLAY}
              </span>
            </a>

            <a
              href={PHONE_HREF}
              aria-label={`Call Zain Movers on ${PHONE_DISPLAY}`}
              className="flex size-10 items-center justify-center bg-foreground text-background transition-colors hover:bg-primary lg:hidden"
            >
              <Phone className="size-4" aria-hidden="true" />
            </a>

            <QuoteDialog>
              <button
                type="button"
                className="hidden h-11 items-center bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85 sm:flex"
              >
                Get a Quote
              </button>
            </QuoteDialog>

            <button
              type="button"
              onClick={() => {
                // Never leave the header hidden behind the full-screen menu.
                setHidden(false);
                setMenuOpen(true);
              }}
              aria-label="Open navigation menu"
              className="flex size-10 items-center justify-center border border-hairline text-foreground transition-colors hover:bg-secondary lg:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        menus={MENUS}
        plainLinks={PLAIN_LINKS}
      />
    </>
  );
}
