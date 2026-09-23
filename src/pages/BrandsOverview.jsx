import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { BRANDS } from "../data/brands.js";
import { CtaStrip } from "../components/Shared.jsx";
import { ArrowIcon } from "../components/icons.jsx";

export default function BrandsOverview() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(BRANDS.map((b) => b.cat))).filter(Boolean);
    return ["All", ...cats];
  }, []);

  const filteredBrands = useMemo(() => {
    return BRANDS.filter((b) => {
      const matchCat =
        selectedCat === "All" || b.cat === selectedCat;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        b.name.toLowerCase().includes(q) ||
        b.cat.toLowerCase().includes(q) ||
        (b.tagline && b.tagline.toLowerCase().includes(q)) ||
        (b.desc && b.desc.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [selectedCat, searchQuery]);

  return (
    <>
      <div className="pagehead">
        <div className="wrap">
          <div className="eyebrow">Authorized Suppliers &amp; Partners</div>
          <h1>World-Class Brands, One Point of Contact</h1>
          <p className="lead">
            We stock leading electrical and automation brands manufactured to recognised international standards (IEC, BS EN, UNBS) — ensuring maximum safety, proven performance and long service life.
          </p>
        </div>
      </div>

      <section style={{ paddingTop: 36, paddingBottom: 60 }}>
        <div className="wrap">
          {/* Toolbar: Search and Category Filtering */}
          <div className="brands-toolbar">
            <div className="brands-search-row">
              <div className="brands-search-box">
                <svg
                  className="brands-search-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="16.5"
                    y1="16.5"
                    x2="21.5"
                    y2="21.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search brands, products or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="brands-search-input"
                />
              </div>

              <div style={{ color: "var(--steel)", fontSize: 13.5 }}>
                Showing <strong>{filteredBrands.length}</strong> {filteredBrands.length === 1 ? "brand" : "brands"}
              </div>
            </div>

            <div className="brands-filter-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCat(cat)}
                  className={`brands-filter-btn${selectedCat === cat ? " active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Brands Grid */}
          {filteredBrands.length > 0 ? (
            <div className="grid-3">
              {filteredBrands.map((b) => (
                <Link
                  key={b.slug}
                  to={`/brands/${b.slug}`}
                  className="brand-overview-card"
                >
                  <div className="brand-card-header">
                    <div className="brand-card-logo-wrap">
                      {b.logo ? (
                        <img
                          src={b.logo}
                          alt={`${b.name} logo`}
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div
                          className="bmark"
                          style={{
                            width: 50,
                            height: 50,
                            fontSize: 18,
                            margin: 0,
                          }}
                        >
                          {b.init}
                        </div>
                      )}
                    </div>
                    <span className="brand-card-badge">{b.cat}</span>
                  </div>

                  <h3>{b.name}</h3>
                  <p>{b.tagline || b.desc}</p>

                  <div className="brand-card-footer">
                    <span>Explore {b.name} Catalogue</span>
                    <ArrowIcon />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "48px 24px",
                background: "var(--paper-2)",
                borderRadius: "var(--radius)",
                border: "1px solid var(--line)",
              }}
            >
              <h3 style={{ fontSize: 18, marginBottom: 8, color: "var(--ink)" }}>
                No matching brands found
              </h3>
              <p style={{ color: "var(--steel)", fontSize: 14, margin: "0 0 16px" }}>
                Try adjusting your search query or selecting a different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCat("All");
                  setSearchQuery("");
                }}
                className="btn-primary"
                style={{ fontSize: 13, padding: "8px 16px" }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Brand Sourcing Trust Section */}
      <section
        className="tight"
        style={{
          background: "var(--paper-2)",
          borderTop: "1px solid var(--line)",
          padding: "48px 0",
        }}
      >
        <div className="wrap">
          <div
            style={{
              textAlign: "center",
              maxWidth: 680,
              margin: "0 auto 32px",
            }}
          >
            <div className="eyebrow">Our Supply Standards</div>
            <h2 style={{ fontSize: 26, margin: "6px 0 10px" }}>
              The A1 Electricals Quality Guarantee
            </h2>
            <p style={{ color: "var(--steel)", fontSize: 14.5, margin: 0 }}>
              Counterfeit and sub-standard electrical components carry real fire and safety hazards. We only supply certified genuine products directly backed by global manufacturers.
            </p>
          </div>

          <div className="brand-features-grid">
            <div className="brand-feature-card">
              <h4>100% Genuine Certified</h4>
              <p>Authentic products with verified manufacturer batch codes and compliance documentation.</p>
            </div>
            <div className="brand-feature-card">
              <h4>Extensive Local Inventory</h4>
              <p>Substantial stock held at Bugolobi Industrial Area for immediate collection and dispatch.</p>
            </div>
            <div className="brand-feature-card">
              <h4>Wholesale &amp; Project Rates</h4>
              <p>Competitive pricing for electrical contractors, panel builders, and industrial maintenance teams.</p>
            </div>
            <div className="brand-feature-card">
              <h4>Engineering Support</h4>
              <p>Technical guidance on component sizing, discrimination coordination, and enclosure specifications.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
