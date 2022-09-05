import Equipment from "../../../types/Equipment";

export const CyborkBody : Equipment = 
{
    name:"Cybork body",
    effect:"This Operative gains 2 wounds.",
    pt:5
}


export const BreakinHeads : Equipment = 
{
    name:"Breakin' Heads",
    effect:"When this model is activated they may choose a friendly visible operative with an #Evade# token. That operative loses the token and takes d3 damage.",
    pt:3
}


export const AmmoRunt : Equipment = 
{
    name:"AmmoRunt",
    effect:"When firing a weapon for the second time using More dakka, the weapon can be fired at Bs5+.",
    pt:3
}

export const EavyArmour : Equipment = 
{
    name:"‘Eavy armour",
    effect:"Gain a 4+ save.",
    pt:6
}

export const Snazzy : Equipment = 
{
    name:"Snazzy",
    effect:"Pick one ranged weapon to make 'snazzy'. It gains Dangerous, and each time it fires roll a d3. 1: +1 Attack / 2: +1 Dam / 3: -1 AP.",
    pt:4
}

const OrkEquipment  : Equipment[] =[
    CyborkBody,
    BreakinHeads,
    AmmoRunt,
    EavyArmour,
    Snazzy
]

export default OrkEquipment;