import { Link } from "react-router-dom";
import { BRANDS } from "../data/brands.js";
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
            href="https://wa.me/256755347100"
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
  return (
    <div className="logorow">
      {BRANDS.map((b) => (
        <Link
          key={b.slug}
          to={`/brands/${b.slug}`}
          title={b.name}
          className="logo-chip"
        >
          {b.logo ? (
            <img src={b.logo} alt={b.name} />
          ) : (
            <div className="bmark">{b.init}</div>
          )}
        </Link>
      ))}
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
