import Equipment from "../../../types/Equipment";

export const Shadowfield : Equipment = 
{
    name:"Shadowfield",
    effect:"One use only, the first time this Operative would suffer 4 or more damage from a single source, on a 2+ ignore that damage.",
    pt:5
}


export const GrislyTrophies : Equipment = 
{
    name:"Grisly trophies",
    effect:"Enemy Operatives attempting Fight Back within 1\" of this Operative are at an additional -1 to hit unless they can roll 4+ on a d6.",
    pt:2
}


export const Dodge : Equipment = 
{
    name:"Dodge",
    effect:"This Operative can always make a save of 6+ against Shooting attacks and 4+ against Combat attacks. This replaces a normal save but is in addition to Evade.",
    pt:4
}

export const SoulTrap : Equipment = 
{
    name:"Soul trap",
    effect:"Operatives within 3” make injury Rolls at -1.",
    pt:2
}


export const Adrenalight : Equipment = 
{
    name:"Adrenalight",
    effect:"Operative can use this when activating. Immediately gain 1 action and take d3-1 Damage.",
    pt:5
}

export const Hypex : Equipment = 
{
    name:"Hypex",
    effect:"One use only, Operative can use this when activation to gain +2” Movement.",
    pt:2
}

export const Painbringer : Equipment = 
{
    name:"Painbringer",
    effect:"One use only, Operative can use this when receiving Damage. Half that Damage, rounding down.",
    pt:2
}

export const Serpentin : Equipment = 
{
    name:"Serpentin",
    effect:"One use only, Operative can use this when about to make a Fight action. +1 Ws.",
    pt:2
}

const DeldarEquipment : Equipment[] =
[
    Shadowfield,
    GrislyTrophies,
    Dodge,
    SoulTrap,
    Adrenalight,
    Hypex,
    Painbringer,
    Serpentin
]

export default DeldarEquipment