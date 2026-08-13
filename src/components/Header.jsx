import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PRODUCTS } from "../data/products.js";
import { BRANDS } from "../data/brands.js";
import { CaretIcon, BurgerIcon, CloseIcon } from "./icons.jsx";

function Topbar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <a href="mailto:info@a1electricalsltd.com">info@a1electricalsltd.com</a>
        <div className="tb-right">
          <span>Kampala, Uganda — <a href="https://wa.me/256755347100" target="_blank" rel="noopener noreferrer">WhatsApp orders welcome</a></span>
          <a href="tel:+256414347100">+256 414 347100</a>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [closing, setClosing] = useState(null);
  const dropdownRefs = useRef({});

  function closeDropdown(key) {
    setClosing(key);
    setOpenDropdown(null);
    setTimeout(() => setClosing(null), 300);
  }

  const isProductsActive = location.pathname.startsWith("/products");
  const isBrandsActive = location.pathname.startsWith("/brands");

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    function handleOutside(e) {
      if (!e.target.closest(".site")) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }
    function handleScroll() {
      setOpenDropdown(null);
    }
    document.addEventListener("click", handleOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("click", handleOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function positionDropdown(key) {
    const el = dropdownRefs.current[key];
    if (!el || window.innerWidth <= 900) return;
    requestAnimationFrame(() => {
      const parent = el.closest(".navitem");
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const ddHeight = el.offsetHeight;
      const spaceBelow = window.innerHeight - rect.bottom;
      if (spaceBelow < ddHeight + 16) {
        el.style.top = "auto";
        el.style.bottom = "100%";
      } else {
        el.style.top = "calc(100% + 18px)";
        el.style.bottom = "auto";
      }
    });
  }

  function toggleDropdown(key, e) {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown((prev) => {
      const next = prev === key ? null : key;
      if (next) positionDropdown(key);
      return next;
    });
  }

  return (
    <>
      <Topbar />
      <header className="site">
        <div className="wrap navrow">
          <Link to="/" className="logo">
            <img
              className="brandmark"
              src="/images/a1-logo.jpeg"
              alt="A1 Electricals Ltd logo"
            />
            <span>
              <small style={{ marginTop: 0 }}>Quality Guarantee</small>
            </span>
          </Link>

          <input
            type="checkbox"
            id="navToggle"
            className="nav-toggle"
            checked={mobileOpen}
            onChange={(e) => setMobileOpen(e.target.checked)}
          />

          <label
            htmlFor="navToggle"
            className={`burger${mobileOpen ? " open" : ""}`}
            aria-label="Toggle menu"
            onClick={(e) => { e.preventDefault(); setMobileOpen(v => !v); }}
          >
            <span className="icon-open"><BurgerIcon /></span>
            <span className="icon-close"><CloseIcon /></span>
          </label>

          <nav className={`primary${mobileOpen ? " mobile-open" : ""}`}>
            <ul>
              <li className={`navitem${location.pathname === "/" ? " active" : ""}`}>
                <Link to="/">Home</Link>
              </li>

              <li
                className={`navitem${isProductsActive ? " active" : ""}${openDropdown === "products" ? " open" : ""}${closing === "products" ? " closing" : ""}`}
                data-nav="products"
              >
                <Link to="/products" onClick={(e) => toggleDropdown("products", e)}>
                  Products <CaretIcon />
                </Link>
                <div className="dropdown" ref={(el) => (dropdownRefs.current.products = el)}>
                  {PRODUCTS.map((p) => (
                    <Link key={p.slug} to={`/products/${p.slug}`} onClick={() => closeDropdown("products")}>
                      <span>{p.name}</span>
                      <span className="n">{p.n}</span>
                    </Link>
                  ))}
                </div>
              </li>

              <li
                className={`navitem${isBrandsActive ? " active" : ""}${openDropdown === "brands" ? " open" : ""}${closing === "brands" ? " closing" : ""}`}
                data-nav="brands"
              >
                <Link to="/brands" onClick={(e) => toggleDropdown("brands", e)}>
                  Brands <CaretIcon />
                </Link>
                <div className="dropdown" ref={(el) => (dropdownRefs.current.brands = el)}>
                  {BRANDS.map((b) => (
                    <Link key={b.slug} to={`/brands/${b.slug}`} onClick={() => closeDropdown("brands")}>
                      <span>{b.name}</span>
                    </Link>
                  ))}
                </div>
              </li>

              <li className={`navitem${location.pathname === "/customer-service" ? " active" : ""}`}>
                <Link to="/customer-service">Customer service</Link>
              </li>
              <li className={`navitem${location.pathname === "/ordering-delivery" ? " active" : ""}`}>
                <Link to="/ordering-delivery">Ordering &amp; delivery</Link>
              </li>
              <li className={`navitem${location.pathname === "/about" ? " active" : ""}`}>
                <Link to="/about">About</Link>
              </li>
              <li className="navitem">
                <Link to="/contact" className="navcta">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
