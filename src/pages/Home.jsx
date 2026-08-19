import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel.jsx";
import {
  SplitSection,
  SplitList,
  CtaStrip,
  LogoRow,
  Statement,
} from "../components/Shared.jsx";
import { ArrowIcon, PlugIcon } from "../components/icons.jsx";
import { findProduct } from "../data/products.js";

const TILES = [
  { slug: "cables-cable-accessories", photo: "/images/banner.jpeg", bg: null },
  {
    slug: "indoor-outdoor-led-lighting",
    photo: "/images/a1_lights.jpeg",
    bg: "#EAEAE4",
  },
  {
    slug: "electrical-panels-distribution-boards",
    photo: "/images/latestblog.jpeg",
    bg: "var(--ink)",
  },
  {
    slug: "transformers-power-distribution",
    photo: "/images/eaton.jpeg",
    bg: "#EAEAE4",
  },
];

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <section className="tight">
        <div className="wrap">
          <p className="hero-statement">
            A1 Electricals are Kampala's leading supplier and distributor of
            Electrical and Lighting products across Uganda and East Africa
          </p>

          <div className="promogrid">
            <div className="promocard">
              <div className="pimg">
                <img
                  src="/images/hero-banner-2.jpeg"
                  alt="A1 Electricals product range"
                />
              </div>
              <div className="pbody">
                <h3>Product Range</h3>
                <p>
                  We supply a comprehensive range of electrical products. Many
                  are available from stock in our Kampala showroom and can be
                  delivered quickly across Uganda.
                </p>
                <Link to="/products" className="promo-btn">
                  View Products
                </Link>
              </div>
            </div>
            <div className="promocard">
              <div className="pimg">
                <img src="/images/image.png" alt="A1 Electricals showroom" />
              </div>
              <div className="pbody">
                <h3>Leading Brands</h3>
                <p>
                  A1 Electricals only supply products from leading manufacturers
                  like ABB, Siemens and VAF Power so you can be confident they
                  have been manufactured to the highest standards.
                </p>
                <Link to="/brands" className="promo-btn">
                  View Brands
                </Link>
              </div>
            </div>
            <div className="promocard">
              <div className="pimg">
                <img
                  src="/images/a1-storefront.webp"
                  alt="A1 Electricals showroom"
                />
              </div>
              <div className="pbody">
                <h3>About A1 Electricals</h3>
                <p>
                  With years of experience sourcing and supplying genuine
                  electrical products to customers across Uganda, we are well
                  placed to meet your needs.
                </p>
                <Link to="/about" className="promo-btn">
                  About A1 Electricals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SplitSection
        media={
          <img src="/images/drop_lights2.jpeg" alt="A1 Electricals showroom" />
        }
        heading="Trusted Electrical Supplier"
      >
        <p>
          A1 Electricals has been offering a comprehensive range of electrical
          products to customers across Kampala and Uganda.
        </p>
        <p>
          Supplying thousands of electrical and lighting products from leading
          manufacturers, we have experience working with homeowners, contractors
          and businesses of every size.
        </p>
        <p>
          Our prompt service, quality products and fair pricing are the reason
          customers keep coming back to A1 Electricals for their electrical
          supply needs.
        </p>
        <SplitList
          items={[
            <>
              Wide range of electrical and <b>lighting products</b> available
              from stock
            </>,
            "Genuine, branded products from trusted manufacturers",
            "Team of experts available to help with sourcing and orders",
          ]}
        />
        <p>
          No matter which electrical products you are looking for, our team is
          on hand to provide you with a cost-effective, reliable and friendly{" "}
          <b>ordering service</b> — including orders placed over WhatsApp.
        </p>
      </SplitSection>

      <SplitSection
        reverse
        media={
          <img src="/images/a1-storefront.webp" alt="A1 Electricals stock" />
        }
        heading="Showroom &amp; Stock in Kampala"
      >
        <p>
          Our Kampala showroom holds a wide range of electrical and lighting
          lines, so the majority of orders are ready for collection or delivery
          the same day.
        </p>
        <p>
          Whether you're a homeowner picking up a few fittings or a contractor
          placing a bulk order, our team picks and prepares your order in-house
          so nothing gets left behind.
        </p>
        <SplitList
          items={[
            <>
              Showroom stocked with <b>genuine electrical products</b>
            </>,
            "Orders prepared and dispatched from one site",
            "Delivery arranged across Kampala and wider Uganda",
          ]}
        />
        <p>
          Wherever you're ordering from, our team works to the same standard of
          care that's kept customers choosing A1 Electricals{" "}
          <b>year after year</b>.
        </p>
      </SplitSection>

      <Statement heading="Why Choose A1 Electricals?">
        <p>
          A1 Electricals is a trusted supplier of branded electrical equipment
          in Kampala, Uganda, serving homes, businesses and contractors with a
          reputation for quality and service.
        </p>
        <p>
          Our catalogue draws on leading manufacturers including ABB, Siemens,
          VAF Power, Philips &amp; Signify, Marshall-Tufflex, Orient Electric,
          RR Electric, Sollatek, Eaton and Neelkanth Cables.
        </p>
        <p>
          Whatever electrical products you need, our team is on hand to deliver
          a cost-effective, reliable and friendly ordering service.
        </p>
        <p style={{ marginBottom: 12 }}>
          Make A1 Electricals your first call for electrical and lighting supply
          in Kampala.
        </p>
        <Link to="/contact" className="btn-outline-white">
          Contact Us
        </Link>
      </Statement>
      <section className="tight">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">Product range</div>
              <h2>Everything an electrical installation needs, in one place</h2>
            </div>
          </div>
        </div>
        <div className="tilegrid">
          {TILES.map((t) => {
            const p = findProduct(t.slug);
            return (
              <Link key={t.slug} to={`/products/${t.slug}`} className="ptile">
                <div className="ptile-visual">
                  <img
                    src={
                      t.photo || p?.heroImage || "/images/a1-storefront.webp"
                    }
                    alt={p?.name || "A1 Electricals"}
                  />
                </div>
                <div className="ptile-label">
                  <span>{p.name}</span>
                </div>
                <div className="ptile-hover">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <span className="ptile-readmore">Read More</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <CtaStrip />
    </>
  );
}
