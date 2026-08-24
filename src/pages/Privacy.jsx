import { COMPANY } from "../data/company.js";

export default function Privacy() {
  return (
    <>
      <div className="pagehead">
        <div className="wrap">
          <h1>Privacy Policy</h1>
          <p className="lead">How A1 Electricals Ltd collects, uses, and protects your information.</p>
        </div>
      </div>

      <section className="tight">
        <div className="wrap" style={{ maxWidth: 840, margin: "0 auto", padding: "20px 0 60px" }}>
          <p style={{ fontSize: "14px", color: "var(--steel)", marginBottom: "32px" }}>
            <strong>Last updated:</strong> {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <article style={{ lineHeight: 1.75, fontSize: "15.5px", color: "var(--ink)" }}>
            <h2 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "var(--ink)" }}>
              1. Overview &amp; Introduction
            </h2>
            <p>
              {COMPANY.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard personal information obtained through our website (<code>https://a1electricalsltd.com</code>) and direct communication channels.
            </p>
            <p>
              By accessing our website or submitting inquiries, you acknowledge the terms described in this policy in accordance with applicable data protection legislation, including the Uganda Data Protection and Privacy Act, 2019.
            </p>

            <h2 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "var(--ink)" }}>
              2. Information We Collect
            </h2>
            <p>We only collect personal information that you voluntarily provide to us when making an enquiry or contacting our team:</p>
            <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
              <li style={{ marginBottom: "8px" }}><strong>Contact Details:</strong> Your name, company name, email address, and phone number when submitting an enquiry form.</li>
              <li style={{ marginBottom: "8px" }}><strong>Enquiry Data:</strong> Product requirements, specifications, or custom messages you submit to us.</li>
              <li style={{ marginBottom: "8px" }}><strong>Technical Information:</strong> Standard server logs, device type, IP address, and browser headers collected automatically for security and debugging purposes.</li>
            </ul>

            <h2 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "var(--ink)" }}>
              3. How We Use Your Information
            </h2>
            <p>We use the information collected strictly for legitimate business purposes:</p>
            <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
              <li style={{ marginBottom: "8px" }}>Responding to product queries, stock checks, and quotation requests.</li>
              <li style={{ marginBottom: "8px" }}>Coordinating order pickups, dispatch, and delivery across Kampala and Uganda.</li>
              <li style={{ marginBottom: "8px" }}>Protecting our site from automated spam, abuse, and security vulnerabilities.</li>
            </ul>

            <h2 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "var(--ink)" }}>
              4. Third-Party Services &amp; Integrations
            </h2>
            <p>To provide our services, we integrate with trusted third-party providers:</p>
            <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
              <li style={{ marginBottom: "8px" }}><strong>Web3Forms:</strong> Processes form submissions and securely delivers your message to our sales inbox.</li>
              <li style={{ marginBottom: "8px" }}><strong>Google reCAPTCHA:</strong> Protects our forms against malicious bot activity and spam. Google&rsquo;s <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--copper)", textDecoration: "underline" }}>Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: "var(--copper)", textDecoration: "underline" }}>Terms of Service</a> apply.</li>
              <li style={{ marginBottom: "8px" }}><strong>WhatsApp:</strong> Facilitates direct messaging between you and our sales team when you choose to connect via WhatsApp.</li>
            </ul>

            <h2 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "var(--ink)" }}>
              5. Data Protection &amp; Retention
            </h2>
            <p>
              We do not sell, rent, or trade your personal data with third parties for marketing purposes. We retain customer inquiries only for as long as necessary to fulfill the requested transaction, maintain our warranty records, or comply with legal requirements.
            </p>

            <h2 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "var(--ink)" }}>
              6. Your Rights
            </h2>
            <p>
              You have the right to request access to the personal information we hold about you, request corrections to inaccurate records, or ask for the deletion of your data where applicable.
            </p>

            <h2 style={{ fontSize: "22px", marginTop: "32px", marginBottom: "12px", color: "var(--ink)" }}>
              7. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or how your data is handled, please contact us at:
            </p>
            <div className="specsheet" style={{ background: "var(--paper-2)", color: "var(--ink)", border: "1px solid var(--line)", marginTop: "18px" }}>
              <div className="spec">
                <span className="k">Company</span>
                <span className="v">{COMPANY.name}</span>
              </div>
              <div className="spec">
                <span className="k">Email</span>
                <span className="v"><a href={`mailto:${COMPANY.email}`} style={{ color: "var(--copper)" }}>{COMPANY.email}</a></span>
              </div>
              <div className="spec">
                <span className="k">Phone</span>
                <span className="v"><a href={`tel:${COMPANY.phoneRaw}`} style={{ color: "var(--copper)" }}>{COMPANY.phone}</a></span>
              </div>
              <div className="spec">
                <span className="k">Address</span>
                <span className="v">{COMPANY.address}</span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

