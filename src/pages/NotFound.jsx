import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="pagehead">
      <div className="wrap">
        <h1>Page not found</h1>
        <p className="lead">
          That page doesn't exist. <Link to="/" style={{ color: 'var(--amber)', fontWeight: 600 }}>Return home →</Link>
        </p>
      </div>
    </div>
  );
}
