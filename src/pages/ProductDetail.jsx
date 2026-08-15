import { Link, useParams } from "react-router-dom";
import { findProduct } from "../data/products.js";
import { getSubCategories, getLeadingBrand } from "../data/brands.js";
import EnquiryForm from "../components/EnquiryForm.jsx";
import {
  CtaStrip,
  LogoRow,
  Statement,
  SplitSection,
} from "../components/Shared.jsx";
import {
  PeopleIcon,
  TruckIcon,
  CheckIcon,
} from "../components/icons.jsx";
import NotFound from "./NotFound.jsx";

export default function ProductDetail() {
  const { slug } = useParams();
  const p = findProduct(slug);
  if (!p) return <NotFound />;

  const specLine = p.specs.map(([k, v]) => `${k}: ${v}`).join("  ·  ");
  const heroImage = p.heroImage ?? "/images/a1-storefront.webp";

  return (
    <>
      <section className="pdhero">
        <img src={heroImage} alt={p.name} />
        <div className="pdhero-label">{p.name}</div>
      </section>

      <div className="pdfeatures">
        <div className="pdfeature">
          <div className="fi">
            <PeopleIcon />
          </div>
          <div>
            <h4>Trusted locally</h4>
            <p>Kampala's electrical supplier</p>
          </div>
        </div>
        <div className="pdfeature">
          <div className="fi">
            <TruckIcon />
          </div>
          <div>
            <h4>Fast delivery</h4>
            <p>Prompt delivery across Kampala</p>
          </div>
        </div>
        <div className="pdfeature">
          <div className="fi">
            <CheckIcon />
          </div>
          <div>
            <h4>High stock levels</h4>
            <p>Wide range available in-store</p>
          </div>
        </div>
      </div>

      <section className="wrap" style={{ paddingTop: 28 }}>
        <div className="breadcrumb">
          <Link to="/products">Products</Link> <span>/</span>{" "}
          <span>{p.name}</span>
        </div>
        <div className="pdsplit">
          <div>
            <h2>{p.name}</h2>
            <p>{p.desc}</p>
            {p.bullets && (
              <ul className="pd-bullets">
                {p.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            )}
            <p>
              All products are sourced from trusted manufacturers and held in
              stock at our Kampala showroom, ready for same-day collection or
              prompt delivery across Uganda.
            </p>
            <p>
              To discuss your requirements or request a quote, message us
              directly on WhatsApp — we typically respond within the hour.
            </p>
            <div className="pdcontact-row">
              <a
                href="https://wa.me/256755347100"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp us
              </a>
              <a href="tel:+256414347100">+256 414 347100</a>
              <a href="mailto:info@a1electricalsltd.com">
                info@a1electricalsltd.com
              </a>
            </div>
          </div>
          <EnquiryForm defaultMessage={`I'm interested in ${p.name}...`} />
        </div>
      </section>

      <Statement heading="Why Choose A1 Electricals?">
        <p>
          A1 Electricals is a trusted supplier of branded electrical equipment
          in Kampala, Uganda, serving homes, businesses and contractors with a
          reputation for quality and service.
        </p>
        <p>
          Our catalogue draws on leading manufacturers including ABB, Schneider
          Electric, Havells, Crabtree, Thorn, Osram, LEDVANCE, Philips, Marshall
          Tufflex, Sollatek, Crompton Greaves and Larsen &amp; Toubro.
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
        <a
          href="https://wa.me/256755347100"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-white"
          style={{ marginLeft: 12 }}
        >
          WhatsApp Us
        </a>
      </Statement>

      {(() => {
        const subCats = getSubCategories(p.name);
        const leadingBrand = getLeadingBrand(p.name);
        const sections = [];

        subCats.forEach((subCat, i) => {
          sections.push(
            <SplitSection
              key={subCat.heading}
              reverse={i % 2 === 1}
              media={<img src={heroImage} alt={p.name} />}
              heading={subCat.heading}
            >
              <p>{subCat.content}</p>
            </SplitSection>
          );
        });

        if (leadingBrand) {
          sections.push(
            <SplitSection
              key="manufacturer"
              reverse={subCats.length % 2 === 1}
              media={
                leadingBrand.logo ? (
                  <img src={leadingBrand.logo} alt={leadingBrand.name} />
                ) : (
                  <div className="bmark">{leadingBrand.init}</div>
                )
              }
              heading={`Leading ${leadingBrand.name} Quality`}
            >
              <p>{leadingBrand.desc}</p>
            </SplitSection>
          );
        }

        return sections;
      })()}

      <CtaStrip />
    </>
  );
}
