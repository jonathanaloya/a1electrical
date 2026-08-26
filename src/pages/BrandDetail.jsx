import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  findBrand,
  brandRangeItems,
  getBrandProducts,
  findBrandProduct,
  BRANDS,
} from "../data/brands.js";
import { COMPANY } from "../data/company.js";
import EnquiryForm from "../components/EnquiryForm.jsx";
import { CtaStrip } from "../components/Shared.jsx";
import {
  ArrowIcon,
  CheckIcon,
  PlugIcon,
  PhoneIcon,
  CloseIcon,
} from "../components/icons.jsx";
import NotFound from "./NotFound.jsx";

export default function BrandDetail() {
  const { slug, productSlug } = useParams();
  const b = findBrand(slug);
  if (!b) return <NotFound />;

  const brandProducts = getBrandProducts(b);
  const items = brandRangeItems(b);
  const highlights = b.highlights || [
    "100% Genuine Manufacturer Certified",
    "International IEC & British Standards Compliant",
    "Held in Stock at Our Kampala Warehouse",
    "Uganda-Wide Site Delivery & Technical Support",
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [enquiryMsg, setEnquiryMsg] = useState(
    `Hello A1 Electricals, I am inquiring about ${b.name} products...`
  );

  // If a direct product sub-route or parameter was opened
  useEffect(() => {
    if (productSlug && b) {
      const matched = findBrandProduct(b, productSlug);
      if (matched) {
        setSelectedProduct(matched);
      }
    }
  }, [productSlug, b]);

  // Lock body scroll and listen for Escape key when modal is active
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") setSelectedProduct(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedProduct]);

  const handleOpenProduct = (product, e) => {
    if (e && e.target.closest("a.brand-product-wa-btn")) {
      return;
    }
    setSelectedProduct(product);
  };

  const handleRequestQuoteFromModal = (product) => {
    setEnquiryMsg(
      `Hello A1 Electricals, I would like to request pricing and availability for: ${b.name} - ${product.name} (${product.model || ""})`
    );
    setSelectedProduct(null);
    const enquiryEl = document.getElementById("enquiry-section");
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: "smooth" });
      const inputEl = enquiryEl.querySelector("input, textarea");
      if (inputEl) inputEl.focus();
    }
  };

  return (
    <>
      {/* Brand Hero Banner */}
      <section className="brand-hero-banner">
        <div className="wrap">
          <div
            className="breadcrumb"
            style={{ marginBottom: 20, color: "rgba(255,255,255,0.7)" }}
          >
            <Link to="/" style={{ color: "rgba(255,255,255,0.7)" }}>
              Home
            </Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>
            <Link to="/brands" style={{ color: "rgba(255,255,255,0.7)" }}>
              Brands
            </Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>
            <span style={{ color: "var(--copper-light, #f5a67c)" }}>
              {b.name}
            </span>
          </div>

          <div className="brand-hero-grid">
            <div className="brand-hero-logo-card">
              {b.logo ? (
                <img src={b.logo} alt={`${b.name} logo`} />
              ) : (
                <div className="bmark">{b.init}</div>
              )}
            </div>

            <div>
              <div className="brand-hero-badges">
                <span className="brand-badge highlight">Authorized Stockist</span>
                <span className="brand-badge">{b.cat}</span>
                <span className="brand-badge">Kampala In-Stock</span>
              </div>
              <h1 className="brand-hero-title">
                {b.catalogueTitle || `${b.name} Electrical & Automation Catalogue`}
              </h1>
              <p className="brand-hero-tagline">
                {b.tagline ||
                  `Genuine ${b.name} electrical equipment & solutions in Uganda.`}
              </p>
            </div>

            <div className="brand-hero-actions">
              <a
                href={`https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
                  `Hello A1 Electricals, I would like to request a quote / catalogue for ${b.name} products.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-action-btn-primary"
              >
                <PhoneIcon style={{ width: 16, height: 16 }} />
                Enquire via WhatsApp
              </a>
              <a href="#enquiry-section" className="brand-action-btn-secondary">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Overview & Technical Highlights */}
      <section className="wrap" style={{ paddingTop: 36, paddingBottom: 36 }}>
        <div className="pdsplit">
          <div>
            <div className="eyebrow" style={{ marginBottom: 6 }}>
              Brand Overview
            </div>
            <h2 style={{ fontSize: 26, marginBottom: 14 }}>
              About {b.name} at A1 Electricals
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--ink)" }}>
              {b.desc}
            </p>

            {/* Key Technical Highlights */}
            <div className="brand-highlights-grid">
              {highlights.map((h, i) => (
                <div key={i} className="brand-highlight-item">
                  <CheckIcon />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Product Range & Series */}
            <h3 style={{ fontSize: 20, marginTop: 28, marginBottom: 12 }}>
              {b.name} Product Range &amp; Series
            </h3>
            <p
              style={{ fontSize: 14, color: "var(--steel)", margin: "0 0 16px" }}
            >
              The complete {b.name} selection supplied through A1 Electricals includes:
            </p>
            <div className="brand-series-grid">
              {items.map((item, i) => (
                <div key={i} className="brand-series-card">
                  <PlugIcon />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Engineering & Compliance Note */}
            <div
              style={{
                marginTop: 28,
                background: "var(--paper-2)",
                padding: "18px 20px",
                borderRadius: "var(--radius)",
                border: "1px solid var(--line)",
              }}
            >
              <h4 style={{ fontSize: 16, margin: "0 0 6px", color: "var(--ink)" }}>
                Genuine Products &amp; Engineering Support
              </h4>
              <p
                style={{
                  fontSize: 13.5,
                  color: "var(--steel)",
                  margin: 0,
                  lineHeight: 1.55,
                }}
              >
                All {b.name} products distributed by A1 Electricals are 100%
                authentic, covered by standard manufacturer warranties and
                certified to international standards (IEC, BS EN, UNBS). Our
                technical sales engineers in Kampala assist with sizing, fault
                coordination, and custom panel configurations.
              </p>
            </div>
          </div>

          {/* Sidebar Enquiry Form */}
          <div className="pdside" id="enquiry-section">
            <div className="pdform" style={{ textAlign: "center" }}>
              {b.logo ? (
                <img
                  src={b.logo}
                  alt={b.name}
                  style={{
                    maxWidth: "70%",
                    maxHeight: 70,
                    margin: "0 auto",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <div
                  className="bmark"
                  style={{
                    width: 84,
                    height: 84,
                    fontSize: 26,
                    margin: "0 auto 4px",
                  }}
                >
                  {b.init}
                </div>
              )}
            </div>
            <EnquiryForm defaultMessage={enquiryMsg} />
          </div>
        </div>
      </section>

      {/* Brand Product Catalogue Section */}
      {brandProducts.length > 0 && (
        <section
          className="tight"
          style={{
            background: "var(--paper-2)",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
            padding: "48px 0",
          }}
        >
          <div className="wrap">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: 28,
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <div>
                <div className="eyebrow">{b.name} Catalogue</div>
                <h2 style={{ fontSize: 28, margin: "4px 0 0" }}>
                  Featured {b.name} Products &amp; Solutions
                </h2>
              </div>
              <p
                style={{
                  margin: 0,
                  color: "var(--steel)",
                  maxWidth: 460,
                  fontSize: 14,
                }}
              >
                Click any product to view its complete specifications, features,
                and technical details.
              </p>
            </div>

            <div className="grid-3">
              {brandProducts.map((p, idx) => (
                <div
                  key={idx}
                  className="brand-product-card"
                  onClick={(e) => handleOpenProduct(p, e)}
                  title={`Click to view all ${p.name} details & specifications`}
                >
                  <div className="brand-product-img">
                    <img
                      src={p.image || "/images/a1-storefront.webp"}
                      alt={p.name}
                      loading="lazy"
                    />
                    <span className="brand-product-badge">{p.cat}</span>
                  </div>

                  <div className="brand-product-body">
                    {p.model && (
                      <div
                        style={{
                          fontSize: 12,
                          color: "var(--copper)",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.03em",
                          marginBottom: 4,
                        }}
                      >
                        {p.model}
                      </div>
                    )}
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>

                    {p.specs && p.specs.length > 0 && (
                      <div className="brand-specs-chips">
                        {p.specs.map(([k, v]) => (
                          <span key={k} className="brand-spec-chip">
                            <strong>{k}:</strong> {v}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="brand-product-actions">
                      <a
                        href={`https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
                          `Hello A1 Electricals, I would like to request a quote / specs for ${b.name} - ${p.name} (${p.model || ""})`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brand-product-wa-btn"
                        style={{ flex: 1, textAlign: "center" }}
                        title="Enquire on WhatsApp"
                      >
                        WhatsApp Quote
                      </a>
                      <button
                        type="button"
                        onClick={() => setSelectedProduct(p)}
                        className="brand-product-link"
                        style={{ flex: 1, textAlign: "center" }}
                      >
                        View Details <ArrowIcon />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="product-modal-backdrop"
          onClick={() => setSelectedProduct(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="product-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="product-modal-header">
              <div className="product-modal-header-tag">
                <span>{b.name}</span>
                <span>/</span>
                <span>{selectedProduct.cat}</span>
              </div>
              <button
                type="button"
                className="product-modal-close-btn"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close product details"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Modal Content */}
            <div className="product-modal-content">
              {/* Left Media Column */}
              <div className="product-modal-media-col">
                <div className="product-modal-img-wrap">
                  <img
                    src={selectedProduct.image || "/images/a1-storefront.webp"}
                    alt={selectedProduct.name}
                  />
                </div>

                <div className="product-modal-trust-list">
                  <div className="product-modal-trust-item">
                    <CheckIcon />
                    <span>100% Genuine Authorized {b.name}</span>
                  </div>
                  <div className="product-modal-trust-item">
                    <CheckIcon />
                    <span>In Stock at Kampala Warehouse</span>
                  </div>
                  <div className="product-modal-trust-item">
                    <CheckIcon />
                    <span>Official Manufacturer Warranty</span>
                  </div>
                  <div className="product-modal-trust-item">
                    <CheckIcon />
                    <span>Uganda-Wide Fast Site Delivery</span>
                  </div>
                </div>
              </div>

              {/* Right Info & Specs Column */}
              <div className="product-modal-info-col">
                {selectedProduct.model && (
                  <div className="product-modal-model-badge">
                    {selectedProduct.model}
                  </div>
                )}
                <h2 className="product-modal-title">{selectedProduct.name}</h2>
                <p className="product-modal-desc">{selectedProduct.desc}</p>

                {selectedProduct.specs && selectedProduct.specs.length > 0 && (
                  <>
                    <div className="product-modal-specs-title">
                      Technical Specifications
                    </div>
                    <table className="product-modal-specs-table">
                      <tbody>
                        {selectedProduct.specs.map(([k, v]) => (
                          <tr key={k}>
                            <th>{k}</th>
                            <td>{v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}

                {/* Action Buttons */}
                <div className="product-modal-actions">
                  <a
                    href={`https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
                      `Hello A1 Electricals, I am inquiring about ${b.name} - ${selectedProduct.name} (${selectedProduct.model || ""}). Please provide pricing and availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-modal-wa-btn"
                  >
                    <PhoneIcon style={{ width: 16, height: 16 }} />
                    WhatsApp Quote
                  </a>
                  <button
                    type="button"
                    className="product-modal-quote-btn"
                    onClick={() => handleRequestQuoteFromModal(selectedProduct)}
                  >
                    Request Quote Online &darr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Value Propositions */}
      <section className="tight" style={{ padding: "48px 0" }}>
        <div className="wrap">
          <div
            style={{
              textAlign: "center",
              maxWidth: 650,
              margin: "0 auto 28px",
            }}
          >
            <div className="eyebrow">Why A1 Electricals</div>
            <h2 style={{ fontSize: 26, margin: "6px 0 10px" }}>
              Why Source {b.name} from Us?
            </h2>
            <p style={{ color: "var(--steel)", fontSize: 14.5, margin: 0 }}>
              We partner with genuine international manufacturers and provide
              Ugandan contractors with dependable stock, fair wholesale rates,
              and dedicated engineering support.
            </p>
          </div>

          <div className="brand-features-grid">
            <div className="brand-feature-card">
              <h4>100% Genuine Guaranteed</h4>
              <p>
                Direct sourcing with official manufacturer documentation and full
                warranty protection against counterfeit goods.
              </p>
            </div>
            <div className="brand-feature-card">
              <h4>Kampala Showroom Stock</h4>
              <p>
                Core inventory held at Bugolobi Industrial Area for immediate
                same-day collection without project delays.
              </p>
            </div>
            <div className="brand-feature-card">
              <h4>Engineering &amp; Sizing</h4>
              <p>
                Experienced technical advisors to help select the correct
                ratings, trip curves, and accessories for your load schedule.
              </p>
            </div>
            <div className="brand-feature-card">
              <h4>Nationwide Site Delivery</h4>
              <p>
                Fast and secure logistics to project sites across Kampala,
                Entebbe, Jinja, Mbarara, Gulu, and East Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Brands */}
      <section
        className="tight"
        style={{
          background: "var(--paper-2)",
          borderTop: "1px solid var(--line)",
          padding: "44px 0",
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <h2 style={{ fontSize: 24, margin: 0 }}>
              Explore Other Leading Brands
            </h2>
            <Link
              to="/brands"
              className="btn-outline"
              style={{ fontSize: 13, padding: "8px 16px" }}
            >
              View All Brands &rarr;
            </Link>
          </div>

          <div className="grid-4">
            {BRANDS.filter((rb) => rb.slug !== b.slug)
              .slice(0, 4)
              .map((rb) => (
                <Link
                  key={rb.slug}
                  to={`/brands/${rb.slug}`}
                  className="brandcard"
                >
                  {rb.logo ? (
                    <img
                      src={rb.logo}
                      alt={rb.name}
                      style={{
                        width: 80,
                        height: 54,
                        objectFit: "contain",
                        margin: "0 auto 14px",
                      }}
                    />
                  ) : (
                    <div className="bmark">{rb.init}</div>
                  )}
                  <h3>{rb.name}</h3>
                  <p>{rb.cat}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}


