import Equipment from "../../../types/Equipment";

export const Locus : Equipment = 
{
    name:"Locus",
    effect:"Limit 2, Neophyte Only, Improve Ws to 3+, gain Bodyguard and Save is not modified by AP.",
    pt:7
}

export const Nexos : Equipment = 
{
    name:"Nexos",
    effect:"Limit 1, Neophyte Only, Unique action (2 Actions) – Battlefield Analysis. Assign d3 Marklight tokens to enemy Operatives.",
    pt:5
}

export const Sanctus : Equipment = 
{
    name:"Sanctus",
    effect:"Limit 2, Neophyte Only, Improve Bs to 3+, gain Expert Marksman and a Cult Sniper Rifle.",
    pt:10
}

export const Saboteur : Equipment = 
{
    name:"Saboteur",
    effect:"Limit 1, Neophyte Only, Improve Bs to 3+. Immediately before deploying this model, secretly write down three pieces of terrain. As an action, this character can ‘detonate’ one of the marked pieces of terrain once each. Pick a point on that terrain, all Operatives within 3” suffer a Shooting hit dealing d6 Damage at -1 AP. Operatives can take an Evade token and make Evade saves.",
    pt:10
}

export const Purestrain : Equipment = 
{
    name:"Purestrain",
    effect:"Genestealer Only, This Operative can Charge twice in one Activation. It is always treated as having an Evade token when being Shot at.",
    pt:10
}

const GenestealerCultEquipment : Equipment[] = 
[
    Locus,
    Nexos,
    Sanctus,
    Saboteur,
    Purestrain
]

export default GenestealerCultEquipment;