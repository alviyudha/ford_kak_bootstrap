

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavbarComp() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <>
      <nav
        className={`navbar sticky-top navbar-expand-lg p-2 z-2  fw-semibold ${visible ? 'shadow' : 'navbar-hidden'}`}
      >
        <div className="container">
          <Link className="navbar-brand ms-5" to="/">
            <img
              src='/images/ford_logo_navbar.png'
              alt="Ford"
              width="220"
              style={{ padding: '0', margin: '0' }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end me-5"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Models">
                  Vehicles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dealer">
                  Dealer Location
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Booking
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/test-drive">
                      Test Drive
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/booking-services">
                      Service
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
