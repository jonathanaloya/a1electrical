import { Link } from "react-router-dom";
import { CtaStrip, SplitList, SplitSection, Statement } from "../components/Shared.jsx";

export default function OrderingDelivery() {
  return (
    <>
      <section className="pdhero">
        <img src="/images/a1-storefront.webp" alt="Ordering and delivery" />
        <div className="pdhero-label">Ordering &amp; Delivery</div>
      </section>

      <SplitSection
        media={
          <img src="/images/products.jpeg" alt="A1 Electricals showroom" />
        }
        heading="How to Order"
      >
        <p>
          Ordering from A1 Electricals is straightforward. You can visit our
          Kampala showroom, call us directly, or send your list on WhatsApp —
          whichever is fastest for you.
        </p>
        <p>
          For familiar items, a call or WhatsApp message is usually enough. We
          will confirm stock, pricing and availability, and have your order
          ready for collection or delivery the same day where possible.
        </p>
        <p>
          For larger or more complex orders — multi-product project lists,
          commercial bulk orders or bespoke requirements — we recommend calling
          or visiting the showroom so we can verify specifications, quantities
          and lead times before confirming.
        </p>
        <SplitList
          items={[
            "Visit our Kampala showroom for same-day collection",
            "Call +256 752 347110 during opening hours",
            "WhatsApp orders welcome — we typically reply within the hour",
            "Email enquiries for written quotes and specs",
          ]}
        />
      </SplitSection>

      <SplitSection
        reverse
        media={
          <img src="/images/home_brochure.jpeg" alt="Delivery across Uganda" />
        }
        heading="Delivery Options"
      >
        <p>
          <b>Kampala same-day delivery</b> — for orders placed before 4pm,
          we can arrange delivery across Kampala on the same day where stock is
          available and the delivery address is reachable.
        </p>
        <p>
          <b>Upcountry delivery</b> — we deliver to locations across Uganda
          using our own transport and trusted haulage partners. Delivery times
          vary by destination, but we will give you a realistic estimate before
          you confirm.
        </p>
        <p>
          <b>Collection</b> — our showroom in Bugolobi Industrial Area is open
          Monday to Saturday, 8:30am to 6:00pm. Orders can be collected once
          they have been picked and checked by our team.
        </p>
        <SplitList
          items={[
            "Same-day delivery across Kampala (conditions apply)",
            "Upcountry delivery via own fleet and haulage partners",
            "Free collection from our Bugolobi showroom",
            "Delivery tracking updates on request",
          ]}
        />
      </SplitSection>

      <SplitSection
        media={
          <img src="/images/side.jpeg" alt="Lead times and stock" />
        }
        heading="Lead Times &amp; Stock"
      >
        <p>
          Most of the products we supply are held in stock at our Kampala
          showroom, meaning we can fulfil the majority of orders immediately.
          For items that need to be imported or sourced from manufacturers, we
          will give you a clear lead-time estimate at the time of enquiry.
        </p>
        <p>
          Stock levels change daily, so we always confirm availability before
          confirming an order. If an item is out of stock, we will advise when
          the next shipment is expected and whether an alternative would suit
          your requirements in the meantime.
        </p>
        <SplitList
          items={[
            "Wide range held in stock for immediate supply",
            "Lead-time estimates provided for non-stock items",
            "Stock confirmation before order confirmation",
            "Alternative options suggested when items are unavailable",
          ]}
        />
      </SplitSection>

      <section className="tight">
        <div className="wrap" style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <div className="eyebrow">Need help ordering?</div>
          <h2 style={{ marginBottom: 18 }}>Speak to Our Team</h2>
          <p style={{ fontSize: "15.5px", lineHeight: 1.7 }}>
            If you are unsure about product selection, quantities, delivery
            costs or lead times, our team is on hand to help. Contact us by
            phone, WhatsApp or email and we will guide you through the ordering
            process.
          </p>
          <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/256752347110" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ borderColor: "var(--copper)", color: "var(--copper)" }}>
              WhatsApp us
            </a>
            <a href="tel:+256752347110" className="btn-outline" style={{ borderColor: "var(--copper)", color: "var(--copper)" }}>
              +256 752 347110
            </a>
            <Link to="/contact" className="btn-outline" style={{ borderColor: "var(--copper)", color: "var(--copper)" }}>
              Contact form
            </Link>
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
