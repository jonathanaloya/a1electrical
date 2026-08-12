import { Link, useParams } from "react-router-dom";
import { findBrand, brandRangeItems } from "../data/brands.js";
import { PRODUCTS } from "../data/products.js";
import EnquiryForm from "../components/EnquiryForm.jsx";
import { CtaStrip, LogoRow } from "../components/Shared.jsx";
import { ArrowIcon, PlugIcon } from "../components/icons.jsx";
import NotFound from "./NotFound.jsx";

export default function BrandDetail() {
  const { slug } = useParams();
  const b = findBrand(slug);
  if (!b) return <NotFound />;

  const relatedProducts = PRODUCTS.filter((p) => p.name === b.cat)
    .concat(PRODUCTS.slice(0, 3))
    .slice(0, 3);
  const items = brandRangeItems(b.cat);

  return (
    <>
      <section className="wrap" style={{ paddingTop: 28 }}>
        <div className="breadcrumb">
          <Link to="/brands">Brands</Link> <span>/</span> <span>{b.name}</span>
        </div>
        <div className="pdsplit">
          <div>
            <h2>{b.name}</h2>
            <p>
              {b.desc} {b.name} products are available through A1 Electricals as
              part of our core catalogue.
            </p>
            <p>The {b.name} range includes:</p>
            <ul className="split-list">
              {items.map((i) => (
                <li key={i}>
                  <ArrowIcon />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <p>
              As suppliers of electrical and lighting products from trusted
              manufacturers, we have a solution for most applications.
            </p>
            <p>
              Our prompt service, genuine products and fair pricing are the
              reasons customers trust A1 Electricals for their electrical supply
              needs. Make A1 Electricals your go-to solution for electrical and
              lighting products in Uganda.
            </p>
            <p>
              We supply electrical products from leading brand manufacturers,
              built to recognised international standards, to ensure both safety
              and quality.
            </p>
            <p>
              All {b.name} products meet recognised standards for quality and
              reliability and comply with relevant regulations.
            </p>
            <h2 style={{ marginTop: 8 }}>A1 Electricals&rsquo; Expertise</h2>
            <p>
              At A1 Electricals we have experience sourcing and supplying
              leading brand electrical equipment to customers across Kampala and
              Uganda.
            </p>
            <p>
              Our team has good knowledge of the market and can help you choose
              the right products for your project.
            </p>
            <p>
              For further information about the range of {b.name} products we
              stock, or for any other requirements, please complete the enquiry
              form.
            </p>
          </div>
          <div className="pdside">
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
            <EnquiryForm defaultMessage={`I'm interested in ${b.name}...`} />
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <h2 style={{ fontSize: 28, marginBottom: 28 }}>More Products</h2>
          <div className="mp-grid">
            {relatedProducts.map((r, i) => {
              const usePhoto = r.slug === "cables-wires";
              const tone = i % 2 === 0 ? "#EAEAE4" : "var(--ink)";
              const stroke = i % 2 === 0 ? "var(--steel)" : "#fff";
              return (
                <Link
                  key={r.slug}
                  to={`/products/${r.slug}`}
                  className="mp-card"
                >
                  {usePhoto ? (
                    <img src="/images/wires-and-cables.webp" alt={r.name} />
                  ) : (
                    <div className="icon-fill" style={{ background: tone }}>
                      <PlugIcon stroke={stroke} strokeWidth={1} />
                    </div>
                  )}
                  <span className="mp-pill">{r.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
