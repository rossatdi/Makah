import { useState } from "react";
import { Table } from "react-bootstrap";
import AstartesEquipmentList from "../../data/factions/astartes/AstartesEquipment";
import ImperialGuardEquipment from "../../data/factions/imperialGuard/ImperialGuardEquipment";
import SistersEquipmentList from "../../data/factions/sisters/SistersEquipment";
import GlossaryTerms from "../../data/GlossaryTerms";
import { Skills } from "../../data/Skills";
import InquisitionEquipment from './../../data/factions/inquisition/InquisitionEquipment';
import onlyUnique from './../../functions/OnlyUnique';

import { WeaponSpecialRules } from "../../data/weapons/WeaponSpecialRules";
import { compare } from "../../functions/CaseIndifferentStringCompare";

const glossaryTerms = [...GlossaryTerms, ...Skills, ...InquisitionEquipment, ...AstartesEquipmentList, ...SistersEquipmentList, ...ImperialGuardEquipment, ...WeaponSpecialRules]
.filter(onlyUnique)


export const Page = () => {
  const [query, setFilter] = useState("")
  return (<div>
    <h1>Glossary</h1>
    <input placeholder="Filter" onChange={e=>setFilter(e.target.value)}/>
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
            {glossaryTerms.filter(o=>compare(o.name,query))
            .sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(o=><tr><td>{o.name}</td><td>{o.effect}</td></tr>)}  
        </tbody>
      </Table>
      </div>)}

export default Page 