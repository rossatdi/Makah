import { Stack } from "react-bootstrap";
import { Deathwatch, Inquisitor, Warrior } from "../../data/factions/inquisition/Inquisition";
import { Chainsword, InfernoPistol, LasCarbine, Laspistol, Longlas, NeedlePistol, Stormbolter, StormShield } from "../../data/weapons/ImperialWeapons";
import { ExpertMarksman, Gunfighter, Gunslinger } from "../../data/Skills";
import Operative from "../../types/Operative";
import OperativeView from "./operative/OperativeView";
import SkillTile from "../components/skillTile/SkillTile";
import './CrewBuilder.css'
import { hasProfiles, Weapon } from "../../types/Weapon";
import WeaponSpecialRule from "../../types/WeaponSpecialRule"
import { Veteran } from "../../data/factions/imperialGuard/ImperialGuard";
import { Knife } from "../../data/weapons/GenericWeapons";
import { PowerArmor, ServoSkull } from "../../data/factions/inquisition/InquisitionEquipment";
import { PsyberEagle } from "../../data/factions/inquisition/InquisitionWeapons";
import { CarapaceArmor } from './../../data/factions/inquisition/InquisitionEquipment';

const example : Operative =
{
    ...Deathwatch,
    isLeader:false,
    isPsyker:false,
    name:"Geoff",
    weapons:[Knife, Stormbolter, StormShield],
    skills: [...Deathwatch.skills],
    equipment:[...Deathwatch.equipment, ServoSkull]
}

const example2 : Operative =
{
    ...Inquisitor,
    isLeader:true,
    isPsyker:false,
    name:"Barry",
    weapons:[Knife, InfernoPistol, NeedlePistol],
    skills:[Gunslinger, Gunfighter],
    equipment:[ServoSkull, PowerArmor]
}

const example3 : Operative = {
    ...Veteran,
    isLeader:false,
    isPsyker:false,
    name:"Susan",
    weapons:[Knife, PsyberEagle, Laspistol],
    equipment:[CarapaceArmor],
    skills:[]
}

const example4 : Operative = {
    ...Veteran,
    isLeader:false,
    isPsyker:false,
    name:"Lilly",
    weapons:[Knife, Longlas, Laspistol],
    equipment:[CarapaceArmor],
    skills:[ExpertMarksman]

}

const example5 : Operative = {
    ...Warrior,
    isLeader:false,
    isPsyker:false,
    name:"Jerry",
    weapons:[Chainsword, LasCarbine],
    equipment:[CarapaceArmor],
    skills:[]
}

const operatives :Operative[] = [
    example2, example, example3, example4, example5
]

const extractWeaponSkills = (weapon:Weapon) : WeaponSpecialRule[] =>
{
    if(hasProfiles(weapon)){
        return weapon.profiles.flatMap(o=>o.special);
    }
    else{
        return weapon.special;
    }
} 

const CrewBuilderView = () => {
    
    return(
        <Stack>
            {operatives.map(o=><OperativeView operative={o}  />)}
            <h4>Weapon Rules</h4>
            {operatives.flatMap(o=>o.weapons.flatMap(p=>extractWeaponSkills(p))).filter((v,i,a)=>a.indexOf(v)===i).sort((a,b)=>(a.name>b.name ?1:-1)).map(o=><SkillTile skill={o} type="wsr"/>)}
        </Stack>
    )
}

export default CrewBuilderView;