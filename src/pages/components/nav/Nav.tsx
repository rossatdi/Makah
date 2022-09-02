import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Nav.css";
import { Factions } from "../../../data/factions/Factions";
import { NavLink } from "react-router-dom";
import Logo from "../../../Images/MakahLogo.svg";
import useScreenSize from "../../../hooks/UseScreenSize";
import ScreenSize from "../../../types/ScreenSize";
import KofiButton from "kofi-button";

const factionRoutes = Factions.map((o, i) => (
  <NavDropdown.Item key={i}>
    <Nav.Link eventKey="1" as={NavLink} to={`/factions/${o.slug}`}>
      <div className="factionLink">
       {o.name}<o.icon className={o.slug}/>
      </div>
    </Nav.Link>
  </NavDropdown.Item>
));

const NavView = () => {
  const screenSize = useScreenSize()
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
              className={screenSize < ScreenSize.lg ? "mobile" : "pc"}
            >
              {factionRoutes}
            </NavDropdown>
            <Nav.Link eventKey="1" as={NavLink} to="/skills">Skills</Nav.Link>
            <Nav.Link eventKey="1" as={NavLink} to="/equipment">Equipment</Nav.Link>
            <Nav.Link eventKey="1" as={NavLink} to="/actions">Actions</Nav.Link>
            <Nav.Link eventKey="1" as={NavLink} to="/weapons/all">Weapons</Nav.Link>
            <Nav.Link eventKey="1" as={NavLink} to="/glossary">Glossary</Nav.Link>
            <Nav.Link eventKey="1" as={NavLink} to="/crew">Crew</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {false &&  screenSize >= ScreenSize.lg && <Nav className="justify-content-end">
                <Nav.Item >
                    <KofiButton  color="#0a9396" title="Donate" kofiID="" />
                </Nav.Item>
              </Nav>} 
      </Container>      
    </Navbar>
  );
};

export default NavView;
