import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { asyncUnsetAuthUser } from "../state/login/action";
import { useDispatch } from "react-redux";
import { useState } from "react";

const menuItems = [
  { name: "Dashboard", path: "/admin-ford" },
  { name: "Vehicle", path: "/admin-ford/vehicle" },
  { name: "Trim", path: "/admin-ford/trim" },
  { name: "Color", path: "/admin-ford/color" },
  { name: "Spec Gallery", path: "/admin-ford/minispec" },
  { name: "Specification", path: "/admin-ford/specification" },
  { name: "Dealer", path: "/admin-ford/dealer" },
  { name: "Message", path: "/admin-ford/message" },
];

function AppNavbar({ authUser }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const logout = () => {
    dispatch(asyncUnsetAuthUser());
    localStorage.removeItem("accessToken");
    navigate("/admin-ford");
  };

  const handleLinkClick = () => {
    handleClose();
  };

  return (
    <Navbar expand="lg" className="bg-dark navbar-custom mb-3">
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/admin-ford/"
          className="text-light fw-bold"
        >
          Admin Dashboard
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className="border-0"
          onClick={handleShow}
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="bg-dark"
          show={showOffcanvas}
          onHide={handleClose} // Menutup Offcanvas saat background diklik
        >
          <Offcanvas.Header closeButton className="text-light">
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {menuItems.map((item, index) => (
                <Nav.Link
                  as={Link}
                  to={item.path}
                  key={index}
                  className="nav-link-custom text-light"
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Nav.Link>
              ))}
              <Nav.Link onClick={logout} className="text-danger">
                <FiLogOut className="me-1" />
                Logout
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
