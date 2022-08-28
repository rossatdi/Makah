import { Nav, NavDropdown } from "react-bootstrap";
import './Nav.css'
import { Factions } from "../../../data/factions/Factions";
import { NavLink  } from "react-router-dom";

const NavView = () => {
  const factionRoutes = Factions.map((o,i)=>(
    <NavDropdown.Item key={i}>
      <Nav.Link as={NavLink } to={`/Makah/factions/${o.slug}`}>{o.name}</Nav.Link>
    </NavDropdown.Item>
  ))

 return (
<Nav>
    <Nav.Link as={NavLink } to="/Makah/">Home</Nav.Link>
    <Nav.Link as={NavLink } to="/Makah/actions">Actions</Nav.Link>
    <NavDropdown title="Weapons">
      <NavDropdown.Item>
        <Nav.Link as={NavLink } to="/Makah/weapons/all">All</Nav.Link>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <Nav.Link as={NavLink } to="/Makah/weapons/generic">Generic</Nav.Link>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <Nav.Link as={NavLink } to="/Makah/weapons/imperial">Imperial</Nav.Link>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <Nav.Link as={NavLink } to="/Makah/weapons/rules">Special Rules</Nav.Link>
      </NavDropdown.Item>
    </NavDropdown>
    <Nav.Link as={NavLink } to="/Makah/skills">Skills</Nav.Link>
    <NavDropdown title="Factions">
      {factionRoutes}
    </NavDropdown>
    <Nav.Link as={NavLink } to="/Makah/glossary">Glossary</Nav.Link>
    <Nav.Link as={NavLink } to="/Makah/crew">Crew</Nav.Link>
    </Nav>)}

    export default NavView;
