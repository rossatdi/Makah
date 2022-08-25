import CombineWeaponsLists from "../../../functions/CombineWeaponsLists";
import Faction from "../../../types/Faction";
import FactionAbility from "../../../types/FactionAbility";
import Operative from "../../../types/Operative";
import OperativeBase from "../../../types/OperativeBase";
import { Killshot } from "../../Skills";
import { Bolter, ForceHalberd, ForceSword, GenericAndImperialWeaponsList, Stormbolter } from "../../weapons/ImperialWeapons";
import { SpaceMarine } from "../astartes/Astartes";
import { SpecialIssueAmmo } from "../astartes/AstartesEquipment";
import InquisitionEquipment, { ServoSkull } from "./InquisitionEquipment";
import InquisitionWeaponsList from "./InquisitionWeapons";


export const UnrelentingHatred : FactionAbility =
{
    name: "Unrelenting Hatred",
    effect:"Once per game, immediately before rolling to see who goes first, your Inquisitor may activate Unrelenting Hatred. Until the end of that turn, your Inquisitors re-rolls all 1s."
}

export const Inquisitor : OperativeBase =
{
    type:"Inquisitor",
    mv:6,
    ws:3,
    bs:3,
    act:3,
    wnd:9,
    sv:4,
    pt:30
}

export const Acolyte : OperativeBase =
{
    type:"Acolyte",
    mv:6,
    ws:4,
    bs:4,
    act:2,
    wnd:6,
    sv:5,
    pt:10
}

export const Warrior : OperativeBase =
{
    type:"Warrior",
    mv:6,
    ws:3,
    bs:4,
    act:2,
    wnd:8,
    sv:5,
    pt:15
}

export const Deathwatch : Operative =
{
    name:"",
    ...SpaceMarine,
    type:"Deathwatch Veteren",
    weapons:[Bolter],
    skills:[Killshot],
    equipment:[SpecialIssueAmmo, ServoSkull],
    isLeader:false,
    isPsyker:false,
    pt:46
}

export const GreyKnightH : Operative =
{
    name:"",
    ...SpaceMarine,
    type:"Grey Knight w/Halberd",
    weapons:[ForceHalberd, Stormbolter],
    skills:[],
    equipment:[],
    isLeader:false,
    isPsyker:true,
    pt:56
}
export const GreyKnightS : Operative =
{
    name:"",
    ...SpaceMarine,
    type:"Grey Knight w/Sword",
    weapons:[ForceSword, Stormbolter],
    skills:[],
    equipment:[],
    isLeader:false,
    isPsyker:true,
    pt:56
}

export const Inquisition : Faction =
{
    name:"Forces of the Inquisition",
    slug:"inquisition",
    quote:"The Inquisition, formally called the Holy Orders of the Emperor's Inquisition, is a secret organisation that exists outside of the standard administrative hierarchy of the Imperium of Man. The Inquisition acts as the secret police force of the Imperium, hunting down any and all of the myriad threats to the stability of the God-Emperor's realm.",
    operativeTypes:[Inquisitor,Acolyte,Warrior, Deathwatch, GreyKnightH, GreyKnightS], //todo add all imperial operative, and special ordo units
    weapons:CombineWeaponsLists(InquisitionWeaponsList,GenericAndImperialWeaponsList),
    equipment:InquisitionEquipment,
    ability:UnrelentingHatred
}

