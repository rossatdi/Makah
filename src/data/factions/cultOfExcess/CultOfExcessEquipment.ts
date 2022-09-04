import Equipment from "../../../types/Equipment";

export const SonicShrieker : Equipment = 
{
    name:"Sonic Shrieker",
    effect:"Enemy operatives within 1\" cannot fight back.",
    pt:4
}

export const FrequencyModulator : Equipment = 
{
    name:"Frequency modulator",
    effect:"When shooting a weapon with the Frequency special rule, you may increase or decrease the hit roll of one dice each time you Shoot.",
    pt:3
}

export const CombatElixirs : Equipment = 
{
    name:"Combat elixirs",
    effect:"One use only. Immediately before becoming the target of a Fight action, make a Fight action yourself first.",
    pt:5
}

export const CombatStimms : Equipment = 
{
    name:"Combat stimms",
    effect:"Operative can use when activating. Gain 1 action and take d3-1 Damage.",
    pt:5
}

export const NewManOfBile : Equipment = 
{
    name:"New man of Bile",
    effect:"Marine Only, At the start of the game, roll a d6. On 1 this Operative is reduced to 2 Actions. On 2-3 add 1\" to Movement, on a 5 improve Ws by 1, on a 6 add 2 Wounds.",
    pt:4
}

export const Daemonic : Equipment = 
{
    name:"Daemonic",
    effect:"Daemonette Only, This Operative always counts as having an Evade token when Shot at.",
    pt:0
}


const CultOfExcessEquipment : Equipment[] =
[
    SonicShrieker,
    FrequencyModulator,
    CombatElixirs,
    CombatStimms,
    NewManOfBile,
    Daemonic
]

export default CultOfExcessEquipment;