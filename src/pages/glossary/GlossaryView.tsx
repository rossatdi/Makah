import { useState } from "react";
import { Container, Table } from "react-bootstrap";
import GlossaryTerms from "../../data/GlossaryTerms";
import { Skills } from "../../data/Skills";
import onlyUnique from './../../functions/OnlyUnique';

import { WeaponSpecialRules } from "../../data/weapons/WeaponSpecialRules";
import { compare } from "../../functions/CaseIndifferentStringCompare";
import { Factions } from './../../data/factions/Factions';
import { IGlossaryItem } from './../../interfaces/IGlossaryItem';
import Point from "../../types/Point";
import './GlossaryView.css'

type GlossaryListItem  = IGlossaryItem & {
  type:string
  source:string
  pt?:Point
}

const factionAbilities = Factions.map(o=>({...o.ability,type:"Faction Ability",source:o.name}));
const factionEquipment = Factions.flatMap(o=>o.equipment.map(p=>({...p,type:"Equipment",source:o.name})))
const wsr = WeaponSpecialRules.map(o=>({...o,type:"Weapon Special Rule",source:""}))
const skill = Skills.map(o=>({...o,type:"Skill",source:""}))
const terms = GlossaryTerms.map(o=>({...o,type:"Term",source:""}))
const glossaryTerms : GlossaryListItem[] = [...terms, ...skill, ...factionEquipment, ...wsr, ...factionAbilities]
.filter(onlyUnique)

export const filterFn = (a:GlossaryListItem, str:string) : boolean => {
  return str.split(",").every(s=>{
    s= s.trim()
    let ret : boolean = false;
    if(compare(a.name,s)) ret = true;
    if(compare(a.effect,s)) ret = true;
    if(compare(a.type,s)) ret = true;
    if(compare(a.source,s)) ret = true;
    if(a.pt && compare(a.pt.toString(),s)) ret = true;
    return ret;
  })
}



export const Page = () => {
  const [query, setFilter] = useState("")
  return (<Container className="glossary">
    <h1>Glossary</h1>
    <input className="filter" placeholder="Filter" onChange={e=>setFilter(e.target.value)}/>
      <Table striped responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Effect</th>
            <th>Points</th>
            <th>Type</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
            {glossaryTerms.filter(o=>filterFn(o,query))
            .sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(o=>
              <tr>
                <td>{o.name}</td>
                <td>{o.effect}</td>
                <td>{o.pt ?? "-"}</td>
                <td>{o.type}</td>
                <td>{o.source}</td>
              </tr>)}  
        </tbody>
      </Table>
      </Container>)}

export default Page 