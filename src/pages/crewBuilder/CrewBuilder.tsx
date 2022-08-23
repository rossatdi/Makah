import { Stack } from "react-bootstrap";
import { SpaceMarine, SpecialIssueAmmo } from "../../data/factions/Astartes";
import {  CarapaceArmor, Inquisitor, PowerArmor, PsyberEagle, ServoSkull, Warrior } from "../../data/factions/Inquisition";
import { Chainsword, InfernoPistol, LasCarbine, Laspistol, Longlas, NeedlePistol, Stormbolter, StormShield } from "../../data/weapons/ImperialWeapons";
import { ExpertMarksman, Gunfighter, Gunslinger, Killshot } from "../../data/Skills";
import { Operative } from "../../types/Operative";
import OperativeView from "./operative/OperativeView";
import SkillTile from "../components/skillTile/SkillTile";
import './CrewBuilder.css'
import { hasProfiles, Weapon } from "../../types/Weapon";
import { WeaponSpecialRule } from "../../types/WeaponSpecialRule"
import { Veteran } from "../../data/factions/ImperialGuard";
import { Knife } from "../../data/weapons/GenericWeapons";

const example : Operative =
{
    ...SpaceMarine,
    isLeader:false,
    name:"Geoff",
    weapons:[Knife, Stormbolter, StormShield],
    skills:[Killshot],
    equipment:[SpecialIssueAmmo, ServoSkull]
}

const example2 : Operative =
{
    ...Inquisitor,
    isLeader:true,
    name:"Barry",
    weapons:[Knife, InfernoPistol, NeedlePistol],
    skills:[Gunslinger, Gunfighter],
    equipment:[ServoSkull, PowerArmor]
}

const example3 : Operative = {
    ...Veteran,
    isLeader:false,
    name:"Susan",
    weapons:[Knife, PsyberEagle, Laspistol],
    equipment:[CarapaceArmor],
    skills:[]
}

const example4 : Operative = {
    ...Veteran,
    isLeader:false,
    name:"Lilly",
    weapons:[Knife, Longlas, Laspistol],
    equipment:[CarapaceArmor],
    skills:[ExpertMarksman]

}

const example5 : Operative = {
    ...Warrior,
    isLeader:false,
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