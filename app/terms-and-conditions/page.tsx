import LegalPage from "@/components/shared/LegalPage";
import { MetadataTemplate } from "@/lib/MetadataTemplate";
import { EMAIL, EMAIL_HREF, PHONE_HREF, PHONE_INTL, WHATSAPP_HREF } from "@/lib/Contact";

const PATH = "/terms-and-conditions";

export const metadata = MetadataTemplate({
  title: "Terms and Conditions | Zain Movers and Packers",
  desc: "Read the terms and conditions for using Zain Movers and Packers' moving services in the UAE. Covers bookings, pricing, liability, cancellations, and payment.",
  path: PATH,
  image: {
    path: "/homepage/zain-movers-and-packers-dubai-hero.jpg",
    alt: "Zain Movers and Packers crew and branded truck serving customers across the UAE",
  },
});

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      path={PATH}
      lastUpdated="September 2026"
      intro="These Terms and Conditions (“Terms”) govern your use of the Zain Movers and Packers website and all moving services provided by Zain Movers and Packers (“we,” “us,” or “our”). By booking a move or using our website, you (“the Customer”) agree to these Terms in full. Please read them carefully before booking."
    >
      <h2>1. Services</h2>
      <p>
        Zain Movers and Packers provides residential and commercial moving
        services across the United Arab Emirates, including but not limited to:
      </p>
      <ul>
        <li>House, apartment, and villa moving</li>
        <li>Office and commercial relocations</li>
        <li>Furniture dismantling, packing, transport, and reassembly</li>
        <li>Packing and unpacking services</li>
        <li>Single-item and heavy furniture moving</li>
        <li>
          Inter-emirate relocations (for example, Dubai to Abu Dhabi, Al Ain to
          Sharjah)
        </li>
      </ul>
      <p>
        The specific scope of work for each move is defined in the quote
        provided to the Customer before the move begins.
      </p>

      <h2>2. Quotations and Pricing</h2>
      <ul>
        <li>
          All quotes are provided free of charge via phone, WhatsApp, or our
          website quote form.
        </li>
        <li>
          Quotes are based on the information provided by the Customer,
          including photos, videos, or verbal descriptions of the items to be
          moved.
        </li>
        <li>
          Once a quote is confirmed by both parties, the price is{" "}
          <strong>fixed</strong> and will not change on moving day — unless the
          actual scope of work differs significantly from what was originally
          described by the Customer.
        </li>
        <li>
          If additional items, rooms, or services are discovered on moving day
          that were not included in the original quote, we will discuss and
          agree on an adjusted price with the Customer{" "}
          <strong>before</strong> proceeding with the additional work.
        </li>
        <li>
          Quotes are valid for <strong>14 days</strong> from the date they are
          issued, unless otherwise stated.
        </li>
      </ul>

      <h2>3. Bookings and Scheduling</h2>
      <ul>
        <li>
          A move is considered booked once the Customer confirms the quote, the
          moving date, and the pickup and delivery addresses.
        </li>
        <li>
          We make every effort to arrive at the scheduled time. However, due to
          traffic conditions, building access restrictions, or preceding jobs
          running longer than expected, minor delays may occur. We will notify
          the Customer as early as possible if there is a delay.
        </li>
        <li>
          For same-day or urgent moving requests, availability depends on team
          and truck capacity at the time of the request.
        </li>
      </ul>

      <h2>4. Customer Responsibilities</h2>
      <p>The Customer agrees to the following:</p>
      <ul>
        <li>
          <strong>Accurate information:</strong> Provide truthful and complete
          details about the items to be moved, including any oversized, fragile,
          or high-value items.
        </li>
        <li>
          <strong>Access:</strong> Ensure that the moving team has clear access
          to both the pickup and delivery locations, including working elevators
          (if applicable), parking space for the truck, and any required
          building NOCs or moving permits.
        </li>
        <li>
          <strong>Building permits:</strong> Many buildings in the UAE require a
          No Objection Certificate (NOC) or moving permit. While we provide our
          trade licence documents to assist with this process, obtaining the
          actual permit from building management is the Customer&apos;s
          responsibility.
        </li>
        <li>
          <strong>Prohibited items:</strong> The Customer must not include
          illegal, hazardous, flammable, or explosive materials in the move. We
          reserve the right to refuse to transport any items we deem unsafe.
        </li>
        <li>
          <strong>Valuables:</strong> Cash, jewellery, passports, important
          legal documents, and irreplaceable personal items should be kept with
          the Customer at all times and not packed into moving boxes.
        </li>
      </ul>

      <h2>5. Packing and Handling</h2>
      <ul>
        <li>
          When the Customer books our full packing service, we provide all
          necessary packing materials including carton boxes, bubble wrap,
          stretch film, packing tape, and wardrobe cartons.
        </li>
        <li>
          We take all reasonable care in packing, loading, transporting,
          unloading, and reassembling the Customer&apos;s belongings.
        </li>
        <li>
          Certain items — including live plants, perishable food, and pets — are
          not covered by our packing and transport services.
        </li>
      </ul>

      <h2>6. Payment Terms</h2>
      <ul>
        <li>
          <strong>Pay Upon Satisfaction:</strong> The Customer pays the agreed
          amount <strong>after</strong> the moving job is complete and the
          Customer has inspected the delivered items.
        </li>
        <li>No advance deposit is required.</li>
        <li>
          Accepted payment methods include cash on completion, direct bank
          transfer, and business cheque for commercial and corporate clients.
        </li>
        <li>
          Full payment is due on the day of service completion, unless a
          different arrangement has been agreed in writing.
        </li>
        <li>
          If the Customer disputes the quality of the work, we will attempt to
          resolve the issue on the spot (for example, re-adjusting furniture or
          fixing assembly issues). Payment is expected once the issue is
          resolved to the Customer&apos;s reasonable satisfaction.
        </li>
      </ul>

      <h2>7. Cancellation and Rescheduling</h2>
      <ul>
        <li>
          <strong>Cancellation by Customer:</strong> If the Customer needs to
          cancel a booked move, we request at least{" "}
          <strong>24 hours&apos; notice</strong> before the scheduled moving
          date. Cancellations made with sufficient notice incur no charges.
        </li>
        <li>
          <strong>Late cancellations:</strong> If the Customer cancels after the
          moving team has already been dispatched or has arrived at the pickup
          location, a cancellation fee may apply to cover transportation and
          labour costs. This fee will be communicated clearly before being
          charged.
        </li>
        <li>
          <strong>Rescheduling:</strong> The Customer may reschedule a booked
          move at no extra charge, subject to our availability on the new date.
        </li>
        <li>
          <strong>Cancellation by us:</strong> In rare cases such as severe
          weather, vehicle breakdown, or unforeseen circumstances, we may need
          to reschedule the move. We will notify the Customer immediately and
          offer the next available date at no additional cost.
        </li>
      </ul>

      <h2>8. Liability and Insurance</h2>
      <ul>
        <li>
          We carry goods-in-transit cargo insurance to cover your belongings
          during transport.
        </li>
        <li>
          <strong>Furniture damage:</strong> If our team damages an item during
          the move, we will attempt to repair it. If repair is not possible, we
          will negotiate a fair compensation based on the item&apos;s current
          market value, not its original purchase price.
        </li>
        <li>
          <strong>Property damage:</strong> If our team causes damage to walls,
          door frames, or flooring at the pickup or delivery location, we will
          arrange repair or provide reasonable compensation.
        </li>
      </ul>
      <p>
        <strong>Liability limitations.</strong> We are not liable for:
      </p>
      <ul>
        <li>
          Damage to items that were already in a fragile, worn, or defective
          condition prior to the move.
        </li>
        <li>
          Damage caused by inherent defects in the item — for example, particle
          board furniture that breaks under its own weight during normal
          handling.
        </li>
        <li>
          Loss or damage to items that the Customer packed themselves, unless
          our team was negligent in transporting them.
        </li>
        <li>
          Damage resulting from circumstances beyond our control, including but
          not limited to traffic accidents caused by third parties, natural
          disasters, or government-imposed road closures.
        </li>
      </ul>
      <p>
        <strong>Claim period.</strong> Any claims for damage must be reported to
        us within <strong>48 hours</strong> of the move being completed. Claims
        reported after this period may not be eligible for compensation.
      </p>

      <h2>9. Force Majeure</h2>
      <p>
        We are not liable for delays or failure to perform our obligations due
        to events beyond our reasonable control, including but not limited to
        severe weather, natural disasters, government restrictions, road
        closures, pandemics, or civil unrest. In such cases, we will work with
        the Customer to reschedule at the earliest available opportunity.
      </p>

      <h2>10. Intellectual Property</h2>
      <p>
        All content on our website — including text, images, logos, and design —
        is the property of Zain Movers and Packers and is protected by
        applicable intellectual property laws. You may not copy, reproduce, or
        distribute any content from our website without our prior written
        consent.
      </p>

      <h2>11. Website Use</h2>
      <ul>
        <li>
          Our website is provided for informational purposes and to facilitate
          booking of our moving services.
        </li>
        <li>
          We make reasonable efforts to ensure that the information on our
          website is accurate and up to date, but we do not guarantee that all
          content is error-free at all times.
        </li>
        <li>
          We are not responsible for any temporary unavailability of the website
          due to technical issues, maintenance, or factors beyond our control.
        </li>
      </ul>

      <h2>12. Governing Law</h2>
      <p>
        These Terms and Conditions are governed by and construed in accordance
        with the laws of the United Arab Emirates. Any disputes arising from or
        related to these Terms or our services shall be subject to the exclusive
        jurisdiction of the courts of Dubai, UAE.
      </p>

      <h2>13. Changes to These Terms</h2>
      <p>
        We reserve the right to update or modify these Terms and Conditions at
        any time. Changes will be posted on this page with an updated &ldquo;Last
        updated&rdquo; date. Continued use of our website or services after
        changes are posted constitutes your acceptance of the revised Terms.
      </p>

      <h2>14. Contact Us</h2>
      <p>
        If you have any questions about these Terms and Conditions, please
        contact Zain Movers and Packers:
      </p>
      <ul>
        <li>
          <strong>Phone:</strong> <a href={PHONE_HREF}>{PHONE_INTL}</a>
        </li>
        <li>
          <strong>WhatsApp:</strong>{" "}
          <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
            {PHONE_INTL}
          </a>
        </li>
        <li>
          <strong>Email:</strong> <a href={EMAIL_HREF}>{EMAIL}</a>
        </li>
      </ul>
    </LegalPage>
  );
}
