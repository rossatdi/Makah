import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Nav.css";
import { Factions } from "../../../data/factions/Factions";
import { NavLink } from "react-router-dom";
import Logo from "../../../Images/MakahLogo.svg";

const NavView = () => {
  const factionRoutes = Factions.map((o, i) => (
    <NavDropdown.Item key={i}>
      <Nav.Link eventKey="1" as={NavLink} to={`/factions/${o.slug}`}>
        {o.name}
      </Nav.Link>
    </NavDropdown.Item>
  ));

  return (
    <Navbar collapseOnSelect variant="dark" bg="dark" expand="sm" fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            width="50px"
            height="auto"
            className="img-responsive"
            src={Logo}
            alt="logo"
          />
          Makah
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavDropdown
              title="Factions"
              menuVariant="dark"
            >
              {factionRoutes}
            </NavDropdown>
            <Nav.Link eventKey="1" as={NavLink} to="/skills">Skills</Nav.Link>
            <Nav.Link eventKey="1" as={NavLink} to="/actions">Actions</Nav.Link>
            <Nav.Link eventKey="1" as={NavLink} to="/weapons/all">Weapons</Nav.Link>
            <Nav.Link eventKey="1" as={NavLink} to="/glossary">Glossary</Nav.Link>
            <Nav.Link eventKey="1" as={NavLink} to="/crew">Crew</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavView;
