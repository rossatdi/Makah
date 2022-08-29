import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import './Nav.css'
import { Factions } from "../../../data/factions/Factions";
import { NavLink  } from "react-router-dom";

const NavView = () => {
  const factionRoutes = Factions.map((o,i)=>(
    <NavDropdown.Item key={i}>
      <Nav.Link as={NavLink } to={`/factions/${o.slug}`}>{o.name}</Nav.Link>
    </NavDropdown.Item>
  ))

 return (
<Nav>
    <Nav.Link as={NavLink } to="/">Home</Nav.Link>
    <Nav.Link as={NavLink } to="/actions">Actions</Nav.Link>
    <NavDropdown title="Weapons">
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
    <NavDropdown title="Factions">
      {factionRoutes}
    </NavDropdown>
    <Nav.Link as={NavLink } to="/glossary">Glossary</Nav.Link>
    <Nav.Link as={NavLink } to="/crew">Crew</Nav.Link>
    </Nav>)}

    export default NavView;