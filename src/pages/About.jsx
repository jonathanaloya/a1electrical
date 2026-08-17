import { Link } from "react-router-dom";
import { CtaStrip, SplitList, SplitSection, Statement } from "../components/Shared.jsx";
export default function About() {
  return (
    <>
      <section className="pdhero">
        <img src="/images/banner.jpeg" alt="About Us" />
        <div className="pdhero-label">About Us</div>
      </section>
      <SplitSection
        media={
          <img src="/images/products.jpeg" alt="A1 Electricals showroom" />
        }
        heading="Uganda's Leading Electrical Supplier"
      >
        <p>
          A1 Electricals Ltd is one of Uganda's leading importers, stockists,
          and distributors of high-quality electrical products and solutions.
          Established in 2006 and based in Kampala, we've built a strong
          reputation for supplying genuine electrical products to industrial,
          commercial, residential, infrastructure, and government projects
          throughout Kampala and upcountry in Uganda. We can assist you with:
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
        heading="Our Vision & Mission"
      >
        <p>
          <b>Our Vision:</b> To be the most trusted and preferred electrical
          solutions provider in Uganda by delivering innovative, reliable, and
          sustainable products.
        </p>
        <p>
          <b>Our Mission:</b> To provide world-class electrical products and
          technical solutions that meet international quality standards while
          exceeding customer expectations through professional service,
          competitive pricing, and continuous innovation.
        </p>
        <p>
          With years of industry experience, A1 Electricals Ltd has become a
          trusted partner for electrical contractors, consultants, developers,
          manufacturing industries, utility companies, and retail customers by
          delivering reliable products, competitive pricing, and excellent
          customer service.
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
        <SplitList
          items={[
            "Established and trusted supplier since 2006",
            "Large inventory and ready stock",
            "Genuine products from internationally recognized manufacturers",
            "Experienced sales and technical team",
          ]}
        />
      </SplitSection>

      <SplitSection
        reverse
        media={
          <img src="/images/a1-storefront.webp" alt="A1 Electricals team" />
        }
        heading="Our Core Values"
      >
        <p>
          Everything we do at A1 Electricals is guided by a simple set of
          values that shape how we work with customers and suppliers alike:
        </p>
        <SplitList
          items={[
            "Integrity and honesty",
            "Quality without compromise",
            "Customer satisfaction",
            "Innovation and continuous improvement",
            "Professionalism",
            "Teamwork and accountability",
          ]}
        />
      </SplitSection>

      <SplitSection
        reverse
        media={
          <img src="/images/banner2.jpeg" alt="Industries A1 Electricals serves" />
        }
        heading="Industries We Serve"
      >
        <p>
          Our products support projects across a wide range of sectors in
          Uganda, including:
        </p>
        <SplitList
          items={[
            "Commercial buildings",
            "Residential developments",
            "Hotels and hospitality",
            "Hospitals and healthcare facilities",
            "Educational institutions",
            "Manufacturing industries",
            "Government projects",
            "Banks and financial institutions",
            "Infrastructure projects",
            "Oil & gas and utility companies",
          ]}
        />
      </SplitSection>

      <section className="tight">
        <div className="wrap" style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <div className="eyebrow">Quality commitment</div>
          <h2 style={{ marginBottom: 18 }}>Quality Is at the Heart of Everything We Do</h2>
          <p style={{ fontSize: "15.5px", lineHeight: 1.7 }}>
            We source products from reputable international manufacturers and
            ensure that every product supplied meets recognized safety and
            performance standards. Our commitment is to provide dependable
            solutions that deliver long-term value.
          </p>
        </div>
      </section>

      <SplitSection
        media={
          <img src="/images/customer-service.png" alt="Why choose A1 Electricals" />
        }
        heading="Why Choose A1 Electricals Ltd"
      >
        <p>Customers across Uganda choose A1 Electricals because of:</p>
        <SplitList
          items={[
            "Trusted industry experience",
            "Reliable supply chain",
            "Professional customer service",
            "Technical expertise",
            "Wide product portfolio",
            "Competitive pricing",
            "Timely delivery",
            "Long-term business partnerships",
          ]}
        />
      </SplitSection>

      <Statement heading="Our Commitment">
        <p>
          At A1 Electricals Ltd, we believe electricity powers progress. We
          are committed to supporting our customers with quality products,
          technical expertise, and dependable service, helping build safe,
          efficient, and sustainable electrical infrastructure across Uganda.
        </p>
        <Link to="/contact" className="btn-outline-white">
          Contact Us
        </Link>
      </Statement>

      <CtaStrip />
    </>
  );
}