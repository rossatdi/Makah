import { HashRouter, Routes, Route } from "react-router-dom";
import SkillsPage from './pages/skills/Skills'
import GlossaryPage from './pages/glossary/GlossaryView'
import GenericWeaponsPage from './pages/weapons/GenericWeapons'
import ImperialWeaponsPage from './pages/weapons/ImperialWeapons'
import CrewPage from './pages/crewBuilder/CrewBuilder'
import './App.css';
import Nav from "./pages/components/nav/Nav";
import { Container } from "react-bootstrap";
import FactionView from "./pages/factions/FactonPage";
import { Factions } from "./data/factions/Factions";
import  WeaponSpecialRules  from "./pages/weapons/WeaponSpecialRules";
import ActionsPage from './pages/actions/ActionsPage'
import IntroductionPage from "./pages/introduction/IntroductionPage";
import AllWeaponsPage from './pages/weapons/AllWeapons';
import EquipmentPage from "./pages/equipment/EquipmentPage";

function App() 
{
  const factionRoutes = Factions.map((o,i)=>(<Route key={i}  path={`/factions/${o.slug}`} element={<FactionView faction={o}/>}/>))

  return (
    <HashRouter basename="/">
      <Nav/>
      <Container className="p-3">
      <Routes>
        <Route path="/" element={<IntroductionPage/>}/>
        <Route path="/actions" element={<ActionsPage/>}/>
        <Route path="/weapons/all" element={<AllWeaponsPage/>}/>
        <Route path="/weapons/generic" element={<GenericWeaponsPage/>}/>
        <Route path="/weapons/imperial" element={<ImperialWeaponsPage/>}/>
        <Route path="/weapons/rules" element={<WeaponSpecialRules/>}/>
        <Route path="/skills" element={<SkillsPage/>}/>
        <Route path="/equipment" element={<EquipmentPage/>}/>
        <Route path="/glossary" element={<GlossaryPage/>}/>
        <Route path="/crew" element={<CrewPage/>}/>
        {factionRoutes}
      </Routes>
      </Container>
  </HashRouter>
  );
}

export default App;
