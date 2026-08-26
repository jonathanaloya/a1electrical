import { useRef } from "react";
import { Link } from "react-router-dom";
import { BRANDS } from "../data/brands.js";
import { COMPANY } from "../data/company.js";
import { ArrowIcon } from "./icons.jsx";

export function SplitSection({ reverse, media, heading, children }) {
  return (
    <section className={`split${reverse ? " reverse" : ""}`}>
      <div className="split-media">{media}</div>
      <div className="split-content">
        <h2>{heading}</h2>
        {children}
      </div>
    </section>
  );
}

export function SplitList({ items }) {
  return (
    <ul className="split-list">
      {items.map((item, i) => (
        <li key={i}>
          <ArrowIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaStrip() {
  return (
    <div className="cta-strip">
      <div className="wrap">
        <p>Get in touch with us today for more information:</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href={COMPANY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export function LogoRow() {
  const scrollRef = useRef(null);

  const handleScroll = (dir) => {
    if (scrollRef.current) {
      const scrollAmount = dir === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="logorow-section" aria-label="Authorized Brand Partners">
      <div className="logorow-wrapper">
        <button
          type="button"
          onClick={() => handleScroll("left")}
          className="logorow-nav-btn prev"
          aria-label="Scroll brands left"
          title="Scroll brands left"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="logorow-viewport" ref={scrollRef}>
          <div className="logorow-track">
            {BRANDS.map((b) => (
              <Link
                key={b.slug}
                to={`/brands/${b.slug}`}
                title={`Explore ${b.name} Catalogue`}
                className="logo-chip"
              >
                {b.logo ? (
                  <img src={b.logo} alt={`${b.name} logo`} loading="lazy" decoding="async" />
                ) : (
                  <div className="bmark">{b.init}</div>
                )}
              </Link>
            ))}
            {/* Duplicated set for smooth infinite marquee looping */}
            {BRANDS.map((b) => (
              <Link
                key={`dup-${b.slug}`}
                to={`/brands/${b.slug}`}
                title={`Explore ${b.name} Catalogue`}
                className="logo-chip"
                aria-hidden="true"
                tabIndex={-1}
              >
                {b.logo ? (
                  <img src={b.logo} alt={`${b.name} logo`} loading="lazy" decoding="async" />
                ) : (
                  <div className="bmark">{b.init}</div>
                )}
              </Link>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => handleScroll("right")}
          className="logorow-nav-btn next"
          aria-label="Scroll brands right"
          title="Scroll brands right"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export function Statement({ heading, children }) {
  return (
    <div className="statement">
      <div className="wrap">
        <h2>{heading}</h2>
        {children}
      </div>
    </div>
  );
}
