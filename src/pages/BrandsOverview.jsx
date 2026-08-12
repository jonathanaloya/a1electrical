import { Link } from 'react-router-dom';
import { BRANDS } from '../data/brands.js';

export default function BrandsOverview() {
  return (
    <>
      <div className="pagehead">
        <div className="wrap">
          <div className="eyebrow">Suppliers</div>
          <h1>Leading manufacturers, one point of contact</h1>
          <p className="lead">We only stock brands manufactured to recognised international standards — so whatever you buy, quality is never the variable.</p>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="grid-4">
            {BRANDS.map((b) => (
              <Link key={b.slug} to={`/brands/${b.slug}`} className="brandcard">
                {b.logo ? (
                  <img src={b.logo} alt={b.name} style={{ width: 80, height: 54, objectFit: 'contain', margin: '0 auto 14px' }} />
                ) : (
                  <div className="bmark">{b.init}</div>
                )}
                <h3>{b.name}</h3>
                <p>{b.cat}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
