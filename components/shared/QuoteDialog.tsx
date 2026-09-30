"use client";

import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import QuoteForm from "@/components/shared/QuoteForm";

/**
 * Wraps any trigger element so it opens the quote form in a modal.
 * Used by every "Get a Quote" control across the site.
 */
export default function QuoteDialog({
  children,
  title = "Request Your Free Fixed Quote",
  description = "Tell us what you're moving and we'll send a fixed price — usually within minutes.",
}: {
  children: ReactNode;
  title?: string;
  description?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={children as React.ReactElement} />
      <DialogContent className="max-h-[90dvh] max-w-2xl gap-0 overflow-y-auto p-0 sm:max-w-2xl">
        <DialogHeader className="border-b border-hairline p-6 pr-14">
          <DialogTitle className="font-serif text-xl font-semibold">
            {title}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <QuoteForm
          heading={null}
          description={null}
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
