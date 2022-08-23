import { Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import './Nav.css'
import { Factions } from "../data/factions/Factions";
const NavView = () => {
  const factionRoutes = Factions.map(o=>(
    <NavDropdown.Item>
          <LinkContainer to={`/factions/${o.slug}`}>
            <Nav.Link>{o.name}</Nav.Link>
          </LinkContainer>
        </NavDropdown.Item>
  ))

 return (
<Nav>
      <LinkContainer to="/">
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <NavDropdown title="Weapons">
        <NavDropdown.Item>
          <LinkContainer to="/weapons/generic">
            <Nav.Link>Generic</Nav.Link>
          </LinkContainer>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <LinkContainer to="/weapons/imperial">
            <Nav.Link>Imperial</Nav.Link>
          </LinkContainer>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <LinkContainer to="/weapons/rules">
            <Nav.Link>Special Rules</Nav.Link>
          </LinkContainer>
        </NavDropdown.Item>
      </NavDropdown>
      <LinkContainer to="/skills">
        <Nav.Link>Skills</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/crew">
        <Nav.Link>Crew</Nav.Link>
      </LinkContainer>
      <NavDropdown title="Factions">
        {factionRoutes}
      </NavDropdown>
    </Nav>)}

    export default NavView;