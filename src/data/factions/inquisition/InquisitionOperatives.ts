import OperativeBase from "../../../types/OperativeBase"
import { Bodyguard, Killshot, Relentless } from "../../Skills"
import { Bolter, ForceHalberd, ForceSword } from "../../weapons/ImperialWeapons"
import { SpecialIssueAmmo } from "../astartes/AstartesEquipment"
import { SpaceMarine } from "../astartes/AstartesOperatives"
import { Celestian } from "../sisters/SistersOperatives"
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

export const Deathwatch : OperativeBase =
{
    ...SpaceMarine,
    type:"Deathwatch Veteren",
    weapons:[Bolter],
    skills:[Killshot],
    equipment:[SpecialIssueAmmo],
    isPsyker:false,
    pt:46
}

export const GreyKnightH : OperativeBase =
{
    ...SpaceMarine,
    type:"Grey Knight w/Halberd",
    weapons:[ForceHalberd, Stormbolter],
    skills:[],
    equipment:[],
    isPsyker:true,
    pt:56
}
export const GreyKnightS : OperativeBase =
{
    ...SpaceMarine,
    type:"Grey Knight w/Sword",
    weapons:[ForceSword, Stormbolter],
    skills:[],
    equipment:[],
    isPsyker:true,
    pt:56
}

export const CelestianSacresant : OperativeBase =
{
    ...Celestian,
    type:"Celestian Sacresant",
    weapons:[],
    skills:[Bodyguard, Relentless],
    equipment:[],
    isPsyker:false,
    pt:38
}

//TODO add all imperial operative, and special ordo units
export const ImperialOperatatives : OperativeBase[] =
[Inquisitor,Hound,Acolyte,Warrior, Deathwatch, GreyKnightH, GreyKnightS, CelestianSacresant]

export default ImperialOperatatives;
