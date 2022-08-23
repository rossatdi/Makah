import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SkillsPage from './pages/skills/Skills'
import GenericWeaponsPage from './pages/weapons/GenericWeapons'
import ImperialWeaponsPage from './pages/weapons/ImperialWeapons'
import CrewPage from './pages/crewBuilder/CrewBuilder'
import './App.css';
import Nav from "./nav/Nav";
import { Container } from "react-bootstrap";
import FactionView from "./pages/factions/FactonView";
import { Astartes } from "./data/factions/Astartes";
import { Factions } from "./data/factions/Factions";
import  WeaponSpecialRules  from "./pages/weapons/WeaponSpecialRules";

function App() 
{
  const factionRoutes = Factions.map(o=>(<Route path={`/factions/${o.slug}`} element={<FactionView faction={o}/>}/>))

  return (
    <BrowserRouter>
      <Nav/>
      <Container  className="p-3">
      <Routes>
        <Route path="/" element={<div>hello</div>}/>
        <Route path="/weapons/generic" element={<GenericWeaponsPage/>}/>
        <Route path="/weapons/imperial" element={<ImperialWeaponsPage/>}/>
        <Route path="/weapons/rules" element={<WeaponSpecialRules/>}/>
        <Route path="/skills" element={<SkillsPage/>}/>
        <Route path="/crew" element={<CrewPage/>}/>
        {factionRoutes}
      </Routes>
      </Container>
  </BrowserRouter>
  );
}

export default App;
