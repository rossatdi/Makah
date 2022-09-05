import Equipment from "../../../types/Equipment";

export const Atavindicator: Equipment =
{
    name:"Atavindicator",
    effect:"Unique action: Pick a visible enemy Operative with an #Evade# token. On a 4+ they take d3 Damage.",
    pt:8
}

export const PhotonicTranssubjector: Equipment =
{
    name:"Photonic Transsubjector",
    effect:"The first time this Operative fails a Save, the total damage of the attack is reduced to 1.",
    pt:5
}

export const MindshackleScarabs: Equipment =
{
    name:"Mindshackle Scarabs",
    effect:"Unique action: Pick a visible enemy Operative within 8\". Both players roll a d6. If you equal or beat their score, immediately make a Shoot or Fight action with that Operative. If you get a lower score, you take an #Evade# token.",
    pt:10
}

export const ResurrectionOrb: Equipment =
{
    name:"ResurrectionOrb",
    effect:"Unique action: Use the Stabilise action on one visible friendly Injured Operative.",
    pt:5
}

export const TranslocationRelay: Equipment =
{
    name:"Translocation Relay",
    effect:"Unique action, one use only: Pick a friendly visible Operative who has not activated this Turn and remove them from the board. That Operative cannot activate this turn, but next turn when they activate place them anywhere on the board more than 6\" away from an enemy Operative.",
    pt:5
}

export const SubatomicAgitator: Equipment =
{
    name:"Subatomic Agitator",
    effect:"When an Operative within 2\" Shoots with a Gauss weapon, it gains the Arc rule.",
    pt:5
}

const NecronEquipment : Equipment[] = 
[
    Atavindicator,
    PhotonicTranssubjector,
    MindshackleScarabs,
    ResurrectionOrb,
    TranslocationRelay,
    SubatomicAgitator
]

export default NecronEquipment;