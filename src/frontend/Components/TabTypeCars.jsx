import { Link } from 'react-router-dom';

export default function TabTypeCars({ linkData }) {
  return (
    <ul className="nav tabs-type-cars justify-content-center sticky-top z-3">
      {linkData.map((link, index) => (
        <li className="nav-item" key={index}>
          <Link className="nav-link" to={`/model/details/${link}`}>
            {link.replace(/-/g, ' ').toUpperCase()} {/* Mengubah format string untuk tampilan */}
          </Link>
        </li>
      ))}
    </ul>
  );
}
