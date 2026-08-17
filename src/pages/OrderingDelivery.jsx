import { Link } from "react-router-dom";
import { CtaStrip, SplitList, SplitSection } from "../components/Shared.jsx";

export default function OrderingDelivery() {
  return (
    <>
      <section className="pdhero">
        <img src="/images/mccb.jpeg" alt="Customer Service"/>
        <div className="pdhero-label">Ordering and Delivery</div>
      </section>
      <SplitSection
        media={
          <img src="/images/products.jpeg" alt="A1 Electricals showroom" />
        }
        heading="Over 1,000 Products Stocked"
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
          <img src="/images/home_brochure.jpeg" alt="A1 Electricals stock" />
        }
        heading="Full-Service Export"
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
          <img src="/images/side.jpeg" alt="Leading manufacturers" />
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
      <CtaStrip />
    </>
  );
}