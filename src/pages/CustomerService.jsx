import { Link } from "react-router-dom";
import { COMPANY } from "../data/company.js";
import {
  CtaStrip,
  LogoRow,
  SplitSection,
  SplitList,
} from "../components/Shared.jsx";
import {
  PeopleIcon,
  TruckIcon,
  CheckIcon,
  ArrowIcon,
} from "../components/icons.jsx";

export default function CustomerService() {
  return (
    <>
      <section className="pdhero">
        <img
          src="/images/customer-service.optimized.jpg"
          alt="Customer Service"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="pdhero-label">Customer Service</div>
      </section>
      <SplitSection
        media={
          <img
            src="/images/a1-storefront.webp"
            alt="A1 Electricals showroom"
            loading="lazy"
            decoding="async"
          />
        }
        heading="Expert Advice"
      >
        <p>
          Our team has years of experience supplying electrical products to
          homes, businesses and contractors across Kampala. We can assist you
          with:
        </p>
        <SplitList
          items={[
            "Product sourcing",
            "Advice on the right product for your project",
            "Bulk orders for contractors and businesses",
            "Delivery across Kampala and wider Uganda",
          ]}
        />
      </SplitSection>

      <SplitSection
        reverse
        media={
          <img
            src="/images/wires-and-cables.webp"
            alt="A1 Electricals stock"
            loading="lazy"
            decoding="async"
          />
        }
        heading="Fast Delivery"
      >
        <p>
          As suppliers of electrical and lighting products from trusted
          manufacturers, we have a solution for most applications.
        </p>
        <p>
          Our prompt service, genuine products and fair pricing are the reasons
          customers trust A1 Electricals for their electrical supply needs.
        </p>
        <p>
          Make A1 Electricals your go-to solution for all your electrical and
          lighting products.
        </p>
      </SplitSection>

      <SplitSection
        media={
          <img
            src="/images/wires-and-cables.webp"
            alt="Leading manufacturers"
            loading="lazy"
            decoding="async"
          />
        }
        heading="Leading Manufacturers"
      >
        <p>
          We only stock products from leading manufacturers like ABB, Siemens
          and VAF Power, so you can be confident they have been manufactured
          to the highest standards.
        </p>
        <p>
          Whatever electrical products you're looking for, our genuine, branded
          stock means quality is never the variable.
        </p>
      </SplitSection>

      <section>
        <div className="wrap">
          <div
            className="specsheet"
            style={{
              background: "var(--paper-2)",
              color: "var(--ink)",
              border: "1px solid var(--line)",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            <div className="eyebrow" style={{ color: "var(--copper)" }}>Get in touch</div>
            <div className="spec">
              <span className="k">Sales enquiries</span>
              <span className="v"><a href={`mailto:${COMPANY.email}`} style={{ color: "var(--copper)" }}>{COMPANY.email}</a></span>
            </div>
            <div className="spec">
              <span className="k">Phone</span>
              <span className="v"><a href={`tel:${COMPANY.phoneRaw}`} style={{ color: "var(--copper)" }}>{COMPANY.phone}</a></span>
            </div>
            <div className="spec">
              <span className="k">Hours</span>
              <span className="v">{COMPANY.openingHours}</span>
            </div>
            <div className="spec">
              <span className="k">Response time</span>
              <span className="v">Within 1 working day</span>
            </div>
            <Link
              to="/contact"
              className="btn btn-copper"
              style={{ marginTop: 22, width: "100%", justifyContent: "center" }}
            >
              Contact our team
            </Link>
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
