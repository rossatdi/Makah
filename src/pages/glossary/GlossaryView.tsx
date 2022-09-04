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

const factionAbilities: TileProps[] = [...Factions.flatMap(o=> o.ability.map(p=>({skill:p, background:o.background, type:"Faction", faction:o.name})) )]
const factionEquipment: TileProps[] = [...Factions.flatMap(o=>o.equipment.map(p=> ({skill:p, background:o.background, type:"Eqp", faction:o.name})))]
const factionPsychic: TileProps[] = [...Factions.flatMap(o=>o.psychicPowers?.map(p=> ({skill:p, background:o.background, type:"Psy", faction:o.name})) ?? [] )]

const wsr: TileProps[] = [...WeaponSpecialRules.map(o=>({skill:o,type:"WSR"}))]
const skill: TileProps[] = [...Skills.map(o=>({skill:o,type:"Skill"}))]
const terms: TileProps[] = [...GlossaryTerms.map(o=>({skill:o,type:"Term"}))]


const glossaryTerms : TileProps[] = [...terms, ...skill, ...factionEquipment, ...wsr, ...factionAbilities, ...factionPsychic]
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