import { useState } from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";

const NavList = [
  {
    path: "hero",
    title: "Home",
  },
  {
    path: "about",
    title: "About Us",
  },
  {
    path: "activities",
    title: "Activities",
  },
  {
    path: "contact",
    title: "Contact Us",
  },
];

const Navigation = () => {
  const [show, setShow] = useState(false);
  const [navShow, setNavShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  window.onscroll = () => {
    document.documentElement.scrollTop > 500
      ? setNavShow(true)
      : setNavShow(false);
  };

  return (
    <>
      <Navbar
        expand="md"
        collapseOnSelect
        className={`navbar-dark fixed-top ${navShow && "backdrop"}`}
      >
        <Container>
          <Navbar.Brand>
            <a href="/">
              <Image
                src="Logo Fix QLesson.png"
                alt="hero-image"
                width={50}
                height={50}
              />
            </a>
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="ms-auto">
              {NavList.map((nav, i) => (
                <Nav.Link
                  key={i}
                  as={Link}
                  to={nav.path}
                  spy={true}
                  offset={-20}
                  smooth={true}
                  activeClass="active"
                  duration={50}
                >
                  {nav.title}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
          <Button
            onClick={handleShow}
            variant="transparent"
            className="btn-offcanvas text-white"
          >
            <GiHamburgerMenu />
          </Button>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} className="w-100">
        <Offcanvas.Header closeButton>
          <a
            href="/"
            className="d-flex gap-2 text-black text-decoration-none align-items-center"
          >
            <Image
              src="Logo Fix QLesson.png"
              alt="hero-image"
              width={50}
              height={50}
            />
            <Offcanvas.Title>QLesson</Offcanvas.Title>
          </a>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="d-flex flex-column">
            {NavList.map((nav, i) => (
              <div key={i} className="border-black border-bottom">
                <Nav.Link
                  as={Link}
                  to={nav.path}
                  spy={true}
                  smooth={true}
                  activeClass="active"
                  duration={50}
                  className="text-black d-flex justify-content-between "
                  onClick={handleClose}
                >
                  {nav.title}
                  <FaArrowRight />
                </Nav.Link>
              </div>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navigation;
