import { Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import './Nav.css'
import { Factions } from "../../../data/factions/Factions";
const NavView = () => {
  const factionRoutes = Factions.map(o=>(
    <NavDropdown.Item>
          <LinkContainer to={`/Makah/factions/${o.slug}`}>
            <Nav.Link>{o.name}</Nav.Link>
          </LinkContainer>
        </NavDropdown.Item>
  ))

 return (
<Nav>
      <LinkContainer to="/Makah/">
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/Makah/actions">
        <Nav.Link>Actions</Nav.Link>
      </LinkContainer>
      <NavDropdown title="Weapons">
        <NavDropdown.Item>
          <LinkContainer to="/Makah/weapons/generic">
            <Nav.Link>Generic</Nav.Link>
          </LinkContainer>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <LinkContainer to="/Makah/weapons/imperial">
            <Nav.Link>Imperial</Nav.Link>
          </LinkContainer>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <LinkContainer to="/Makah/weapons/rules">
            <Nav.Link>Special Rules</Nav.Link>
          </LinkContainer>
        </NavDropdown.Item>
      </NavDropdown>
      <LinkContainer to="/Makah/skills">
        <Nav.Link>Skills</Nav.Link>
      </LinkContainer>
      <NavDropdown title="Factions">
        {factionRoutes}
      </NavDropdown>
      <LinkContainer to="/Makah/crew">
        <Nav.Link>Crew</Nav.Link>
      </LinkContainer>
    </Nav>)}

    export default NavView;