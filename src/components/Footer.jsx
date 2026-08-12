import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products.js";
import { BRANDS } from "../data/brands.js";

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
            <p style={{ maxWidth: 280, fontSize: "13.5px" }}>
              Kampala's one-stop shop for genuine electrical products and
              accessories, serving homes, businesses and contractors across
              Uganda.
            </p>
            <div
              style={{
                marginTop: 18,
                fontFamily: "var(--mono)",
                fontSize: "12.5px",
              }}
            >
              Plot no. 49 Luthuli Avenue, Industrial Area, Bugolobi, P.O. Box 31503, Kampala, Uganda
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
                <Link to="/ordering-delivery">Ordering &amp; delivery</Link>
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
          <span>© {new Date().getFullYear()} A1 Electricals Ltd</span>
        </div>
      </div>
    </footer>
  );
}
