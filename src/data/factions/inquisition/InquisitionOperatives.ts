import Operative from "../../../types/Operative"
import OperativeBase from "../../../types/OperativeBase"
import { Killshot } from "../../Skills"
import { Bolter, ForceHalberd, ForceSword } from "../../weapons/ImperialWeapons"
import { SpecialIssueAmmo } from "../astartes/AstartesEquipment"
import { SpaceMarine } from "../astartes/AstartesOperatives"
import { Stormbolter } from "../sisters/SistersWeapons"
import { Limited } from './../../CommonNotes';


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

export const Hound : OperativeBase =
{
    type:"Hound",
    mv:8,
    ws:3,
    bs:6,
    act:2,
    wnd:6,
    sv:6,
    pt:8,
    notes:Limited
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
    equipment:[SpecialIssueAmmo],
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
//TODO add all imperial operative, and special ordo units
export const ImperialOperatatives : OperativeBase[] =
[Inquisitor,Acolyte,Warrior, Deathwatch, GreyKnightH, GreyKnightS]

export default ImperialOperatatives;