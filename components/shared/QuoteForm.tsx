"use client";

import { useActionState, useId } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { cn } from "cn";

import { sendQuote } from "@/actions/send-quote";
import { initialQuoteState, SERVICE_TYPES } from "@/lib/Quote";

const FIELD =
  "h-12 w-full bg-secondary px-4 text-sm text-foreground outline-none transition-colors border-b-2 border-foreground/25 placeholder:text-muted-foreground focus:border-primary aria-[invalid=true]:border-destructive";

export default function QuoteForm({
  className,
  /** Rendered as the form's own heading. Omit inside a dialog, which supplies one. */
  heading = "Request Your Free Fixed Quote",
  description = "Fill in your relocation details for an immediate assessment.",
  onSuccess,
}: {
  className?: string;
  heading?: string | null;
  description?: string | null;
  onSuccess?: () => void;
}) {
  const [state, formAction] = useActionState(sendQuote, initialQuoteState);
  const uid = useId();

  if (state.status === "success") {
    return (
      <div className={cn("bg-background p-8 text-center", className)}>
        <CheckCircle2
          className="mx-auto size-10 text-whatsapp"
          aria-hidden="true"
        />
        <h3 className="mt-4 text-xl">Request received</h3>
        <p className="mx-auto mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">
          {state.message}
        </p>
        {onSuccess && (
          <button
            type="button"
            onClick={onSuccess}
            className="mt-6 h-11 bg-foreground px-6 text-sm font-semibold text-background transition-colors hover:bg-primary"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form action={formAction} className={cn("bg-background p-6 md:p-8", className)}>
      {heading && <h3 className="text-xl md:text-2xl">{heading}</h3>}
      {description && (
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      )}

      <div className={cn("grid gap-x-4 gap-y-5 sm:grid-cols-2", (heading || description) && "mt-6")}>
        <Field
          id={`${uid}-name`}
          name="name"
          label="Full Name"
          placeholder="e.g. Tariq Mansoor"
          required
          error={state.errors.name}
        />
        <Field
          id={`${uid}-phone`}
          name="phone"
          type="tel"
          label="Phone / WhatsApp"
          placeholder="05X XXX XXXX"
          autoComplete="tel"
          required
          error={state.errors.phone}
        />
        <Field
          id={`${uid}-from`}
          name="movingFrom"
          label="Moving From"
          placeholder="e.g. Dubai Marina"
          required
          error={state.errors.movingFrom}
        />
        <Field
          id={`${uid}-to`}
          name="movingTo"
          label="Moving To"
          placeholder="e.g. Arabian Ranches"
          required
          error={state.errors.movingTo}
        />
        <Field
          id={`${uid}-date`}
          name="movingDate"
          type="date"
          label="Preferred Move Date"
        />

        <div>
          <FieldLabel htmlFor={`${uid}-service`}>Service Type</FieldLabel>
          <select
            id={`${uid}-service`}
            name="serviceType"
            defaultValue=""
            className={cn(FIELD, "appearance-none bg-secondary")}
          >
            <option value="" disabled>
              Select your move scope
            </option>
            {SERVICE_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <FieldLabel htmlFor={`${uid}-details`}>
            Additional Details
          </FieldLabel>
          <textarea
            id={`${uid}-details`}
            name="details"
            rows={3}
            placeholder="Heavy safe, piano, chandelier removal, or NOC timing…"
            className={cn(FIELD, "h-auto min-h-24 resize-y py-3")}
          />
        </div>
      </div>

      {/* Honeypot — visually and semantically hidden from real users. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${uid}-company`}>Company</label>
        <input id={`${uid}-company`} name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="mt-5 bg-destructive/10 p-3 text-sm text-destructive">
          {state.message}
        </p>
      )}

      <SubmitButton />

      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="size-3.5 text-primary" aria-hidden="true" />
        Your privacy is important. We don&apos;t share your data.
      </p>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-6 h-13 w-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Sending your request…" : "Request Your Free Fixed Quote"}
    </button>
  );
}

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-medium text-foreground"
    >
      {children}
      {required && (
        <span className="ml-0.5 text-destructive" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  placeholder,
  required,
  autoComplete,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div>
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={FIELD}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
