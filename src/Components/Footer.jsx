import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="footer mt-5"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>Office</h3>
                <p>
                  Jl. RP. Soeroso No.38, RT.2/RW.2,
                  <br />
                  Gondangdia, Kec. Menteng, Kota Jakarta Pusat Daerah Khusus
                  Ibukota Jakarta 10350 <br />
                  <strong>Phone:</strong>0812-3000-2453
                  <br />
                  <strong>Email:</strong> info@ford-ak.co.id
                  <br />
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-7 footer-links"></div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <img
                src="images/ford_logo_navbar.png"
                alt="Ford AK"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-legal text-center">
        <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
          <div className="d-flex flex-column align-items-center align-items-lg-start">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>PT.Kreasi Auto Kencana</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>

          <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
            <a href="#" className="facebook">
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            <a
              href="https://www.instagram.com/ford.ak.official/"
              target="_blank"
              className="instagram"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faSquareInstagram} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
