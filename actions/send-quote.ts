"use server";

import { Resend } from "resend";
import { PHONE_DISPLAY } from "@/lib/Contact";
import { APP } from "@/lib/App";
import type { QuoteFormState } from "@/lib/Quote";

const FROM_ADDRESS =
  process.env.QUOTE_FROM_EMAIL ?? "Zain Movers Website <onboarding@resend.dev>";
const TO_ADDRESS =
  process.env.QUOTE_TO_EMAIL ?? "info@zainmoversandpackers.com";

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendQuote(
  _prevState: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  // Honeypot: real users never fill this hidden field.
  if (clean(formData.get("company"))) {
    return { status: "success", message: "Thank you — we'll be in touch.", errors: {} };
  }

  const fields = {
    name: clean(formData.get("name")),
    phone: clean(formData.get("phone")),
    movingFrom: clean(formData.get("movingFrom")),
    movingTo: clean(formData.get("movingTo")),
    movingDate: clean(formData.get("movingDate")),
    serviceType: clean(formData.get("serviceType")),
    details: clean(formData.get("details")),
  };

  const errors: Record<string, string> = {};
  if (!fields.name) errors.name = "Please tell us your name.";

  if (!fields.phone) {
    errors.phone = "We need a number to send your quote to.";
  } else if (fields.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!fields.movingFrom) errors.movingFrom = "Where are you moving from?";
  if (!fields.movingTo) errors.movingTo = "Where are you moving to?";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors,
    };
  }

  const rows: [string, string][] = [
    ["Name", fields.name],
    ["Phone", fields.phone],
    ["Moving from", fields.movingFrom],
    ["Moving to", fields.movingTo],
    ["Preferred date", fields.movingDate || "—"],
    ["Service type", fields.serviceType || "—"],
    ["Details", fields.details || "—"],
  ];

  const html = `<h2>New quote request — ${escapeHtml(APP.name)}</h2>
<table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
${rows
  .map(
    ([label, value]) =>
      `<tr><td style="border:1px solid #ddd"><strong>${escapeHtml(label)}</strong></td><td style="border:1px solid #ddd">${escapeHtml(value)}</td></tr>`,
  )
  .join("")}
</table>`;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[send-quote] RESEND_API_KEY is not set; quote not emailed.");
    return {
      status: "error",
      message: `We couldn't submit the form just now. Please call or WhatsApp us on ${PHONE_DISPLAY} and we'll quote you straight away.`,
      errors: {},
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [TO_ADDRESS],
      subject: `Quote request — ${fields.name} (${fields.movingFrom} → ${fields.movingTo})`,
      html,
    });

    if (error) throw new Error(error.message);
  } catch (error) {
    console.error("[send-quote] Failed to send quote email:", error);
    return {
      status: "error",
      message: `We couldn't submit the form just now. Please call or WhatsApp us on ${PHONE_DISPLAY} and we'll quote you straight away.`,
      errors: {},
    };
  }

  return {
    status: "success",
    message:
      "Thank you. Your request is with our dispatch team — we typically reply with a fixed quote within 15 minutes.",
    errors: {},
  };
}
