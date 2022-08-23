import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkillsPage from './pages/skills/Skills'
import GenericWeaponsPage from './pages/weapons/GenericWeapons'
import ImperialWeaponsPage from './pages/weapons/ImperialWeapons'
import CrewPage from './pages/crewBuilder/CrewBuilder'
import './App.css';
import Nav from "./nav/Nav";
import { Container } from "react-bootstrap";
import FactionView from "./pages/factions/FactonView";
import { Factions } from "./data/factions/Factions";
import  WeaponSpecialRules  from "./pages/weapons/WeaponSpecialRules";
import ActionsPage from './pages/actions/ActionsPage'

function App() 
{
  const factionRoutes = Factions.map(o=>(<Route path={`/Makah/factions/${o.slug}`} element={<FactionView faction={o}/>}/>))

  return (
    <BrowserRouter>
      <Nav/>
      <Container  className="p-3">
      <Routes>
        <Route path="/Makah/" element={<div>hello</div>}/>
        <Route path="/Makah/actions" element={<ActionsPage/>}/>
        <Route path="/Makah/weapons/generic" element={<GenericWeaponsPage/>}/>
        <Route path="/Makah/weapons/imperial" element={<ImperialWeaponsPage/>}/>
        <Route path="/Makah/weapons/rules" element={<WeaponSpecialRules/>}/>
        <Route path="/Makah/skills" element={<SkillsPage/>}/>
        <Route path="/Makah/crew" element={<CrewPage/>}/>
        {factionRoutes}
      </Routes>
      </Container>
  </BrowserRouter>
  );
}

export default App;
