"use server";

import { Resend } from "resend";
import { PHONE_DISPLAY } from "@/lib/Contact";
import { APP } from "@/lib/App";
import type { QuoteFormState } from "@/lib/Quote";

const FROM_ADDRESS =
  process.env.QUOTE_FROM_EMAIL ?? "Zain Movers Website <onboarding@resend.dev>";
const TO_ADDRESS = process.env.QUOTE_TO_EMAIL ?? "";

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
    return {
      status: "success",
      message: "Thank you — we'll be in touch.",
      errors: {},
    };
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

  const BRAND = "#E8491D";
  const submittedAt = new Date().toLocaleString("en-AE", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Dubai",
  });

  const html = `<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background-color:#ffffff;border-radius:8px;overflow:hidden;">
            <tr>
              <td style="background-color:${BRAND};padding:24px 32px;">
                <p style="margin:0;color:#ffffff;font-size:13px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;opacity:.9;">${escapeHtml(APP.name)}</p>
                <h1 style="margin:4px 0 0;color:#ffffff;font-size:20px;font-weight:700;">New Quote Request</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 8px;">
                <p style="margin:0;color:#52525b;font-size:13px;">Submitted ${escapeHtml(submittedAt)} (Dubai time)</p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
                  ${rows
                    .map(
                      ([label, value]) =>
                        `<tr><td style="padding:10px 0;border-bottom:1px solid #e4e4e7;color:#71717a;font-weight:600;width:140px;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:10px 0;border-bottom:1px solid #e4e4e7;color:#18181b;vertical-align:top;">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`,
                    )
                    .join("")}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 28px;">
                <a href="tel:${fields.phone.replace(/[^\d+]/g, "")}" style="display:inline-block;background-color:${BRAND};color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 20px;border-radius:6px;">Call ${escapeHtml(fields.phone)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px;background-color:#fafafa;border-top:1px solid #e4e4e7;">
                <p style="margin:0;color:#a1a1aa;font-size:12px;">This lead was submitted via the quote form on ${escapeHtml(APP.url)}.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

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
