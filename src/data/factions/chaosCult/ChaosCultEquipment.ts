import Equipment from "../../../types/Equipment"


export const DarkAura : Equipment =
{
    name:"Dark Aura",
    effect:"Ignore the first -1AP of a weapon.",
    pt:5
}

export const TaintedWeapon : Equipment =
{
    name:"Tainted Weapon",
    effect:"Chosen non-Heavy weapon gains +1 Damage or -1 AP.",
    pt:2
}

export const Operator : Equipment =
{
    name:"Operator",
    effect:"Cultist only, Gain +1 Ws or Bs.",
    pt:4
}

export const ObliteratorMutation : Equipment =
{
    name:"Obliterator mutation",
    effect:"Iron Warriors Only, Possessed Only, Swap Ws and Bs, reduce Movement to 5\" and gain the Tireless skill. Whenever this model activates, choose one Imperial or Chaos Cult weapon that costs 8 points or less – they are equipped with that weapon until their next activation.",
    pt:13
}

export const DefiledTrophies : Equipment =
{
    name:"Defiled trophies",
    effect:"Night Lords Only, Gain the Relentless skill. Enemy Operatives within 4\" of this model can never hit on better than a 4+.",
    pt:6
}

export const VeteranOfTheLongWar : Equipment =
{
    name:"Veteran of the Long War",
    effect:"Black Legion Only, Marine Only, This Operative can re-roll 1s to hit. When targeting Imperial faction Operatives, they ignore the -1 to hit effect of Rapid Fire.",
    pt:5
}

export const Saboteur : Equipment =
{
    name:"Saboteur",
    effect:"Alpha Legion Only, Marine or Cultist Only, This Operative gains the Scout and Assassin or Kill Shot skills. For an additional 5 points, a Marine Saboteur may purchase Special Issue Ammo from the Adeptus Astartes faction.",
    pt:5
}

const ChaosCultEquipment : Equipment[] =
[
    DarkAura,
    TaintedWeapon,
    Operator,
    ObliteratorMutation,
    DefiledTrophies,
    VeteranOfTheLongWar,
    Saboteur
]

export default ChaosCultEquipment;