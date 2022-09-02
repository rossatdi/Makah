import Equipment from "../../../types/Equipment";

export const IntegratedMissionAI : Equipment = 
{
    name:"Integrated Mission AI",
    effect:"Drone Only - Remove Limited",
    pt:2
}

export const ShieldDrone : Equipment = 
{
    name:"Shield Drone",
    effect:"Gain a 4+ Save that cannot be modified by AP. When a friendly operative within 3\" is targeted by a Shooting attack you may force yourself to be the target instead, but you may not Evade. If choosing this option you immediately move to within 1\" of the original target.",
    pt:5
}

export const CamouflageFields : Equipment = 
{
    name:"Camouflage fields",
    effect:"If a Shooting attack originates from more than 6\" away treat this operative as being in cover even if they're not in cover.",
    pt:4
}

export const GravInhibitor : Equipment = 
{
    name:"Grav inhibitor",
    effect:"Enemy operatives attempting to complete a Charge within 2\" of this model are at -2\" movement.",
    pt:5
}

export const StabilisationSystem : Equipment = 
{
    name:"Stabilisation system",
    effect:"This Operative can move up to half its Move characteristic and still fire Heavy weapons.",
    pt:4
}

export const BondingKnife : Equipment = 
{
    name:"Bonding Knife",
    effect:"If this Operative is within 3\" of another friendly Operative with a Bonding Knife when they start their activation, they do not lose an Action fordiscarding a Evade token on a 4+.",
    pt:2
}

const TauEquipment : Equipment[] =
[
    IntegratedMissionAI,
    ShieldDrone,
    CamouflageFields,
    GravInhibitor,
    StabilisationSystem,
    BondingKnife
]

export default TauEquipment
