import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products.js";
import { CtaStrip, LogoRow } from "../components/Shared.jsx";
import { ArrowIcon } from "../components/icons.jsx";

export default function ProductsOverview() {
  return (
    <>
      <div className="pagehead">
        <div className="wrap">
          <div className="eyebrow">Product range</div>
          <h1>Wide range of stocked lines.</h1>
          <p className="lead">
            Every category below is stocked at our Kampala showroom. Select a
            category for specifications and availability.
          </p>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="grid-3">
            {PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="card crop"
              >
                <span className="cbl" />
                <span className="cbr" />
                <div className="card-img">
                  <img src={p.heroImage ?? "/images/a1-storefront.webp"} alt={p.name} />
                </div>
                <div className="card-body">
                  <div className="n">{p.n} / 20</div>
                  <h3>{p.name}</h3>
                  <p>{p.blurb}</p>
                  <span className="card-link">
                    View category <ArrowIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaStrip />
    </>
  );
}
