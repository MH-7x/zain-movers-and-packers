import { MapPin, ShieldCheck, Truck } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/Contact";

const CELLS = [
  { icon: Truck, label: "Quick Dispatch", value: "Book Fast Moving Slot" },
  { icon: MapPin, label: "Pick-Up Zone", value: "All Dubai & 7 Emirates" },
  {
    icon: ShieldCheck,
    label: "Payment Guarantee",
    value: "Pay Upon Satisfaction",
  },
];

/** Dispatch rail that overlaps the hero's lower edge on large screens. */
export default function QuickDispatchBar() {
  return (
    <div className="wrap lg:mt-4">
      <div className="grid items-center gap-6 bg-secondary p-6 md:grid-cols-2 lg:grid-cols-[repeat(3,1fr)_auto] lg:gap-10 lg:px-8">
        {CELLS.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-3">
            <Icon
              className="mt-0.5 size-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <p className="text-[0.65rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                {label}
              </p>
              <p className="mt-1 font-semibold text-foreground">{value}</p>
            </div>
          </div>
        ))}

        <a
          href={PHONE_HREF}
          className="flex h-12 items-center justify-center bg-foreground px-6 text-sm font-semibold text-background transition-colors hover:bg-primary"
        >
          Call Us: {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}
