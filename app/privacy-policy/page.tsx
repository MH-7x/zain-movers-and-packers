import LegalPage from "@/components/shared/LegalPage";
import { MetadataTemplate } from "@/lib/MetadataTemplate";
import { EMAIL, EMAIL_HREF, PHONE_HREF, PHONE_INTL, WHATSAPP_HREF } from "@/lib/Contact";

const PATH = "/privacy-policy";

export const metadata = MetadataTemplate({
  title: "Privacy Policy | Zain Movers and Packers",
  desc: "Read the privacy policy of Zain Movers and Packers. Learn how we collect, use, and protect your personal information when you use our moving services in the UAE.",
  path: PATH,
  image: {
    path: "/homepage/zain-movers-and-packers-dubai-hero.jpg",
    alt: "Zain Movers and Packers branded truck and uniformed crew in Dubai",
  },
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path={PATH}
      lastUpdated="September 2026"
      intro="This Privacy Policy explains how Zain Movers and Packers (“we,” “us,” or “our”) collects, uses, stores, and protects your personal information when you visit our website, contact us by phone or WhatsApp, or use our moving services. By using our website or services, you agree to the practices described in this policy."
    >
      <h2>Information We Collect</h2>
      <p>
        We collect the following types of personal information when you interact
        with us.
      </p>

      <h3>Information You Provide Directly</h3>
      <ul>
        <li>
          <strong>Contact details:</strong> Your name, phone number, email
          address, and WhatsApp number.
        </li>
        <li>
          <strong>Moving details:</strong> Your current address, new address,
          property type, preferred moving date, and a description of items to be
          moved.
        </li>
        <li>
          <strong>Photos and videos:</strong> Room photos or video walkthroughs
          you send us on WhatsApp for quoting purposes.
        </li>
        <li>
          <strong>Payment information:</strong> Payment method preference (cash,
          bank transfer, or cheque). We do not collect or store credit card
          numbers.
        </li>
      </ul>

      <h3>Information Collected Automatically</h3>
      <p>When you visit our website, we may automatically collect:</p>
      <ul>
        <li>
          <strong>Device information:</strong> Browser type, operating system,
          and screen resolution.
        </li>
        <li>
          <strong>Usage data:</strong> Pages visited, time spent on site, and
          referring URL.
        </li>
        <li>
          <strong>IP address and approximate location:</strong> Used for
          analytics and to serve locally relevant content.
        </li>
      </ul>
      <p>
        This data is collected through cookies and similar tracking technologies
        (see the Cookies section below).
      </p>

      <h2>How We Use Your Information</h2>
      <p>We use your personal information for the following purposes:</p>
      <ul>
        <li>
          <strong>To provide moving quotes:</strong> We use your contact details
          and moving information to prepare accurate, fixed-price quotes.
        </li>
        <li>
          <strong>To deliver our services:</strong> We use your addresses and
          item descriptions to plan and execute your move.
        </li>
        <li>
          <strong>To communicate with you:</strong> We contact you by phone,
          WhatsApp, or email to confirm bookings, provide updates, and follow up
          after your move.
        </li>
        <li>
          <strong>To improve our website:</strong> We use anonymous analytics
          data to understand how visitors use our site and to improve the user
          experience.
        </li>
        <li>
          <strong>To comply with legal obligations:</strong> We may retain
          certain records as required by UAE law.
        </li>
      </ul>
      <p>
        We do <strong>not</strong> sell, rent, or trade your personal
        information to third parties for marketing purposes.
      </p>

      <h2>How We Share Your Information</h2>
      <p>
        We may share your personal information only in the following limited
        situations:
      </p>
      <ul>
        <li>
          <strong>Our moving team:</strong> Your name, phone number, and
          addresses are shared with our assigned moving crew so they can
          complete your relocation.
        </li>
        <li>
          <strong>Service providers:</strong> We may share limited data with
          third-party tools we use for website hosting, analytics (such as
          Google Analytics), and communication (such as WhatsApp Business).
        </li>
        <li>
          <strong>Legal requirements:</strong> We may disclose your information
          if required by UAE law, court order, or government authority.
        </li>
      </ul>
      <p>
        We do not share your personal data with advertisers or unrelated third
        parties.
      </p>

      <h2>How We Protect Your Information</h2>
      <p>
        We take reasonable measures to protect your personal information from
        unauthorised access, loss, or misuse:
      </p>
      <ul>
        <li>
          Access to customer data is limited to authorised staff members who
          need it to perform their job.
        </li>
        <li>
          Photos and videos sent for quoting purposes are used only for that
          purpose and are not shared publicly.
        </li>
        <li>
          Our website uses HTTPS encryption to protect data transmitted between
          your browser and our server.
        </li>
      </ul>
      <p>
        While we take these precautions seriously, no method of electronic
        storage or transmission is 100% secure. We cannot guarantee absolute
        security, but we are committed to protecting your data to the best of
        our ability.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain your personal information only for as long as necessary to
        fulfil the purposes described in this policy:
      </p>
      <ul>
        <li>
          <strong>Quote requests:</strong> If you request a quote but do not
          book a move, we retain your information for up to 12 months and then
          delete it.
        </li>
        <li>
          <strong>Completed moves:</strong> If you book and complete a move with
          us, we retain your records for up to 3 years for warranty, follow-up,
          and legal compliance purposes.
        </li>
        <li>
          <strong>Website analytics:</strong> Anonymous usage data is retained
          as configured by our analytics provider (typically up to 26 months).
        </li>
      </ul>
      <p>
        You may request deletion of your personal data at any time by contacting
        us using the details below.
      </p>

      <h2>Cookies</h2>
      <p>
        Our website uses cookies — small text files stored on your device — to
        improve your browsing experience. These include:
      </p>
      <ul>
        <li>
          <strong>Essential cookies:</strong> Required for the website to
          function properly (for example, form submissions).
        </li>
        <li>
          <strong>Analytics cookies:</strong> Used by Google Analytics to
          understand how visitors interact with our site. These cookies collect
          anonymous data only.
        </li>
      </ul>
      <p>
        You can control or disable cookies through your browser settings.
        Disabling cookies may affect certain features of our website.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our website may contain links to external websites, such as Google Maps,
        WhatsApp, or social media profiles. We are not responsible for the
        privacy practices or content of these third-party sites. We encourage
        you to read their privacy policies before providing any personal
        information.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our services are not directed at individuals under the age of 18. We do
        not knowingly collect personal information from children. If we become
        aware that we have collected data from a minor, we will delete it
        promptly.
      </p>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>
          <strong>Access</strong> the personal information we hold about you.
        </li>
        <li>
          <strong>Correct</strong> any inaccurate or incomplete information.
        </li>
        <li>
          <strong>Delete</strong> your personal data (subject to legal retention
          requirements).
        </li>
        <li>
          <strong>Withdraw consent</strong> for us to contact you for marketing
          or follow-up purposes.
        </li>
      </ul>
      <p>
        To exercise any of these rights, contact us using the details below.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or want to request
        access to, correction of, or deletion of your personal data, please
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

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or applicable laws. When we make changes, we will
        update the &ldquo;Last updated&rdquo; date at the top of this page. We
        encourage you to review this page periodically.
      </p>
    </LegalPage>
  );
}
