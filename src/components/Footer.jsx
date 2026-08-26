import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products.js";
import { BRANDS } from "../data/brands.js";
import { COMPANY } from "../data/company.js";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
  WhatsAppIcon,
} from "./icons.jsx";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <img
              className="footer-logo"
              src="/images/a1-logo.jpeg"
              alt="A1 Electricals Ltd logo"
            />
            <p style={{ maxWidth: 280, fontSize: "13.5px", color: "white" }}>
              Kampala's one-stop shop for genuine electrical products and
              accessories, serving homes, businesses and contractors across
              Uganda.
            </p>
            <div
              style={{
                marginTop: 18,
                fontFamily: "var(--mono)",
                fontSize: "12.5px",
                color: "white"
              }}
            >
              {COMPANY.address}
            </div>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              {PRODUCTS.slice(0, 7).map((p) => (
                <li key={p.slug}>
                  <Link to={`/products/${p.slug}`}>{p.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/products">View all products →</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Brands</h4>
            <ul>
              {BRANDS.slice(0, 7).map((b) => (
                <li key={b.slug}>
                  <Link to={`/brands/${b.slug}`}>{b.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/brands">View all brands →</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">About A1 Electricals</Link>
              </li>
              <li>
                <Link to="/customer-service">Customer service</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="fbottom">
          <span>© {new Date().getFullYear()} {COMPANY.name}</span>
          <div className="footer-socials">
            {COMPANY.socials.facebook && (
              <a
                href={COMPANY.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <FacebookIcon />
              </a>
            )}
            {COMPANY.socials.twitter && (
              <a
                href={COMPANY.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                title="X (Twitter)"
              >
                <TwitterIcon />
              </a>
            )}
            {COMPANY.socials.instagram && (
              <a
                href={COMPANY.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramIcon />
              </a>
            )}
            {COMPANY.socials.linkedin && (
              <a
                href={COMPANY.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            )}
            {COMPANY.socials.youtube && (
              <a
                href={COMPANY.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
              >
                <YouTubeIcon />
              </a>
            )}
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
