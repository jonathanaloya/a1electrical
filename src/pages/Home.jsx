import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel.jsx";
import {
  SplitSection,
  SplitList,
  CtaStrip,
  Statement,
} from "../components/Shared.jsx";
import {
  ArrowIcon,
  ShieldCheckIcon,
  BoxesIcon,
  WarehouseIcon,
  TagIcon,
  HeadsetIcon,
  TruckIcon,
  SupportIcon,
  WhatsAppIcon,
  PhoneIcon,
  PinIcon,
} from "../components/icons.jsx";
import { findProduct } from "../data/products.js";
import { COMPANY } from "../data/company.js";

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

const WHY_CHOOSE_ITEMS = [
  {
    icon: ShieldCheckIcon,
    tag: "01",
    text: "Genuine branded products from trusted global and regional manufacturers",
  },
  {
    icon: BoxesIcon,
    tag: "02",
    text: "Wide product range covering electrical, lighting, cables, switches, solar and more",
  },
  {
    icon: WarehouseIcon,
    tag: "03",
    text: "Ready stock available at our Kampala showroom and warehouse",
  },
  {
    icon: TagIcon,
    tag: "04",
    text: "Competitive and fair pricing for both individual and bulk requirements",
  },
  {
    icon: HeadsetIcon,
    tag: "05",
    text: "Experienced team to assist with product selection and sourcing",
  },
  {
    icon: WhatsAppIcon,
    tag: "06",
    text: "Fast and convenient ordering through WhatsApp, email and phone",
  },
  {
    icon: TruckIcon,
    tag: "07",
    text: "Flexible collection and delivery options across Kampala and Uganda",
  },
  {
    icon: SupportIcon,
    tag: "08",
    text: "Reliable after-sales service and ongoing customer support",
  },
];

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <section className="tight">
        <div className="wrap">
          <p className="hero-statement">
            A1 Electricals is Kampala’s leading supplier and distributor of
            electrical and lighting products, serving customers across Uganda
            and the wider East African region.
          </p>

          <div className="promogrid">
            <div className="promocard">
              <div className="pimg">
                <img
                  src="/images/products.jpeg"
                  alt="A1 Electricals product range"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="pbody">
                <h3>Product Range</h3>
                <p>
                  We supply a comprehensive range of electrical and lighting
                  products, with many items readily available from stock at our
                  Kampala showroom and fast delivery available across Uganda.
                </p>
                <Link to="/products" className="promo-btn">
                  View Products
                </Link>
              </div>
            </div>
            <div className="promocard">
              <div className="pimg">
                <img
                  src="/images/image.png"
                  alt="A1 Electricals showroom"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="pbody">
                <h3>Leading Brands</h3>
                <p>
                  A1 Electricals supplies products from leading manufacturers
                  such as ABB, Siemens, Philips and VAF Power, giving you
                  confidence in genuine, reliable products manufactured to the
                  highest industry standards.
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
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="pbody">
                <h3>About A1 Electricals</h3>
                <p>
                  About A1 Electricals - With years of experience sourcing and
                  supplying genuine electrical products across Uganda, A1
                  Electricals is well positioned to understand your needs and
                  deliver the right solutions with confidence.
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
          <img
            src="/images/drop_lights2.jpeg"
            alt="A1 Electricals showroom"
            loading="lazy"
            decoding="async"
          />
        }
        heading="Trusted Electrical Supplier"
      >
        <p>
          A1 Electricals has been supplying a comprehensive range of electrical
          and lighting products to customers across Kampala and Uganda.
        </p>
        <p>
          With thousands of products from leading manufacturers, we have
          extensive experience serving industries, contractors, builders,
          businesses and housing projects of every size.
        </p>
        <p>
          Our commitment to prompt service, genuine quality products,
          competitive pricing and, most importantly, reliable after-sales
          support has made A1 Electricals a trusted choice for customers seeking
          dependable electrical supply solutions.
        </p>
        <SplitList
          items={[
            <>
              Wide range of electrical and <b>lighting products</b> readily
              available from stock
            </>,
            "Genuine, branded products from trusted leading manufacturers",
            "Experienced team of professionals ready to assist with sourcing, product selection and orders",
            "Convenient ordering through WhatsApp, email or phone, with flexible collection and delivery options",
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
          <img
            src="/images/item_list.jpeg"
            alt="After-Sales Services"
            loading="lazy"
            decoding="async"
          />
        }
        heading="After-Sales Service"
      >
        <p>
          Our relationship with customers does not end when the sale is
          completed. At A1 Electricals, we take pride in providing reliable and
          responsive after-sales service, ensuring our customers continue to
          receive value, support and confidence in the products they purchase.
        </p>
        <p>
          Our team is available to assist with product guidance, technical
          support, warranty-related matters, troubleshooting and general
          customer assistance whenever required. We work closely with our
          customers and leading suppliers to address concerns efficiently and
          provide practical solutions.
        </p>
        <p>
          We believe that excellent after-sales service is an essential part of
          building long-term customer relationships. Our commitment to
          supporting customers beyond the point of purchase is one of the
          reasons businesses and professionals continue to rely on A1
          Electricals for their electrical supply needs.
        </p>
        <p>
          Whatever electrical products you need, our team is ready to provide a
          reliable, cost-effective and professional service — from helping you
          select the right products to processing your order, arranging prompt
          delivery and supporting you after the purchase.
        </p>
        <b>
          A1 Electricals — Quality Products. Reliable Service. Trusted
          Solutions.
        </b>
      </SplitSection>
      <SplitSection
        media={
          <img
            src="/images/customer-service.png"
            alt="A1 Electricals stock"
            loading="lazy"
            decoding="async"
          />
        }
        heading="Showroom, Stock &amp; Delivery"
      >
        <p>
          Our Kampala showroom and warehouse carry a wide range of electrical
          and lighting products, with many items readily available for same-day
          collection or delivery.
        </p>
        <p>
          Whether you're a homeowner looking for a few fittings or a contractor
          placing a bulk order, our experienced team picks, checks and prepares
          every order in-house, helping ensure that your requirements are
          complete and ready when you need them.
        </p>
        <SplitList
          items={[
            <>
              Showroom and warehouse stocked with{" "}
              <b>genuine electrical products</b>
            </>,
            "Orders picked, checked and prepared in-house from one convenient location",
            "Same-day collection and delivery available for many in-stock products",
            "Delivery arranged across Kampala and throughout Uganda",
          ]}
        />
        <p>
          Wherever you're ordering from, you can expect the same professional
          service, attention to detail and commitment to quality that has kept
          customers choosing A1 Electricals year after year.
        </p>
        <b>A1 Electricals — Your Trusted Electrical Supply Partner.</b>
      </SplitSection>

      <Statement heading="Why Choose A1 Electricals?">
        <p>
          A1 Electricals is a trusted supplier and distributor of branded
          electrical and lighting products in Kampala, Uganda, serving homes,
          businesses, industries and contractors with a strong reputation for
          quality, reliability and excellent customer service.
        </p>
        <p>
          Our extensive product range includes trusted brands such as ABB,
          Siemens, VAF Power, Philips & Signify, Marshall-Tufflex, Orient
          Electric, RR Electric, Sollatek, Eaton and Neelkanth Cables, giving
          our customers access to genuine products from leading manufacturers.
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

      {/* Redesigned "Why Customers Choose Us" Section */}
      <section
        className="why-choose-section"
        id="why-choose-us"
        aria-label="Why Customers Choose Us"
      >
        <div className="wrap">
          {/* Header */}
          <div className="why-choose-header">
            <h2>Why Customers Choose Us</h2>
          </div>

          {/* 8 Feature Advantage Cards */}
          <div className="why-cards-grid">
            {WHY_CHOOSE_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="why-card">
                  <div className="why-card-top">
                    <div className="why-card-icon">
                      <Icon />
                    </div>
                    <span className="why-card-badge">{item.tag}</span>
                  </div>
                  <p className="why-card-text">{item.text}</p>
                </div>
              );
            })}
          </div>

          {/* Visual Customer Service & Action Banner */}
          <div className="why-banner-card">
            <div className="why-banner-content">
              <p className="why-banner-para">
                Whatever electrical or lighting products you need, our team is
                ready to provide a cost-effective, reliable and professional
                ordering experience from product selection through to delivery
                and after-sales support.
              </p>
              <p className="why-banner-para">
                Make A1 Electricals your first call for electrical and lighting
                supplies in Kampala and across Uganda.
              </p>
              <p className="why-banner-tagline">
                A1 Electricals — Quality Products. Reliable Service. Trusted
                Solutions.
              </p>
              <div className="why-banner-actions">
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="why-btn-wa"
                >
                  <WhatsAppIcon style={{ width: 18, height: 18 }} />
                  WhatsApp Us
                </a>
                <a href={`tel:${COMPANY.phoneRaw}`} className="why-btn-phone">
                  <PhoneIcon style={{ width: 16, height: 16 }} />
                  Call {COMPANY.phone}
                </a>
                <Link to="/contact" className="why-btn-contact">
                  Contact Us
                  <ArrowIcon style={{ width: 12, height: 12 }} />
                </Link>
              </div>
            </div>
            <div className="why-banner-media">
              <img
                src="/images/customer-service.png"
                alt="Why Customers Choose Us"
                loading="lazy"
                decoding="async"
              />
              <div className="why-banner-overlay-badge">
                <div className="why-banner-badge-title">
                  <PinIcon
                    style={{ width: 16, height: 16, color: "var(--amber)" }}
                  />
                  Bugolobi Showroom &amp; Warehouse
                </div>
                <p className="why-banner-badge-desc">
                  Plot 49 Luthuli Ave, Industrial Area, Kampala ·{" "}
                  {COMPANY.openingHours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                    loading="lazy"
                    decoding="async"
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
