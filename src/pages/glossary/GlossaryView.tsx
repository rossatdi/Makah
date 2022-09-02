import { Container } from "react-bootstrap";
import GlossaryTerms from "../../data/GlossaryTerms";
import { Skills } from "../../data/Skills";
import onlyUnique from './../../functions/OnlyUnique';

import { WeaponSpecialRules } from "../../data/weapons/WeaponSpecialRules";
import { Factions } from './../../data/factions/Factions';
import './GlossaryView.css'
import { TileProps } from "../components/tile/Tile";
import TileDisplay from "../components/tileDisplay/TileDisplay";
import { Helmet } from "react-helmet";

const factionAbilities: TileProps[] = [...Factions.map(o=> ({skill:o.ability, background:o.background, type:"Faction Ability", faction:o.name}))]
const factionEquipment: TileProps[] = [...Factions.flatMap(o=>o.equipment.map(p=> ({skill:p, background:o.background, type:"Equipment", faction:o.name})))]
const wsr: TileProps[] = [...WeaponSpecialRules.map(o=>({skill:o,type:"Weapon Special Rule"}))]
const skill: TileProps[] = [...Skills.map(o=>({skill:o,type:"Skill"}))]
const terms: TileProps[] = [...GlossaryTerms.map(o=>({skill:o,type:"Term"}))]
const glossaryTerms : TileProps[] = [...terms, ...skill, ...factionEquipment, ...wsr, ...factionAbilities]
.filter(onlyUnique)

export const Page = () => {
  return (<Container className="glossary">
            <Helmet>
            <title>Glossary</title>
        </Helmet>
    <h1>Glossary</h1>
    <TileDisplay items={glossaryTerms} showFilter={true}/>
    </Container>)}

export default Page 