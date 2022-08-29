import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './Nav.css'
import { Factions } from "../../../data/factions/Factions";
import { NavLink  } from "react-router-dom";
import Logo from "../../../Images/MakahLogo.svg"

const NavView = () => {
  const factionRoutes = Factions.map((o,i)=>(
    <NavDropdown.Item key={i}>
      <Nav.Link as={NavLink } to={`/factions/${o.slug}`}>{o.name}</Nav.Link>
    </NavDropdown.Item>
  ))

 return (
    <Navbar variant="dark" bg="dark" expand="lg" fixed="top">
      <Container  fluid>
        <Navbar.Brand  as={NavLink } to="/"><img width="50px" height="auto" className="img-responsive" src={Logo}  alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav className="me-auto" navbarScroll>
          <Nav.Link as={NavLink } to="/actions">Actions</Nav.Link>
          <NavDropdown title="Weapons" id="navbarScrollingWeapons" menuVariant="dark">
            <NavDropdown.Item>
              <Nav.Link as={NavLink } to="/weapons/all">All</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link as={NavLink } to="/weapons/generic">Generic</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link as={NavLink } to="/weapons/imperial">Imperial</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link as={NavLink } to="/weapons/rules">Special Rules</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={NavLink } to="/skills">Skills</Nav.Link>
          <NavDropdown title="Factions" id="navbarScrollingFactions" menuVariant="dark">
            {factionRoutes}
          </NavDropdown>
          <Nav.Link as={NavLink } to="/glossary">Glossary</Nav.Link>
          <Nav.Link as={NavLink } to="/crew">Crew</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
)}

    export default NavView;
