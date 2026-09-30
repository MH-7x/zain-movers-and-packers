/**
 * Shared types and constants for the quote form.
 *
 * These deliberately live outside `actions/send-quote.ts`: a "use server"
 * module may only export async functions, so any value exported from there
 * arrives as `undefined` on the client.
 */

export const SERVICE_TYPES = [
  "House Moving",
  "Villa Moving",
  "Office Moving",
  "Furniture Moving",
  "Packing & Moving",
] as const;

export interface QuoteFormState {
  status: "idle" | "success" | "error";
  message: string;
  /** Field name -> message, rendered beneath the offending input. */
  errors: Record<string, string>;
}

export const initialQuoteState: QuoteFormState = {
  status: "idle",
  message: "",
  errors: {},
};
