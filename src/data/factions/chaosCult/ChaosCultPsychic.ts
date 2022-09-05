import PsychicPower from "../../../types/PsychicPower";

export const GiftOfChaos : PsychicPower =
{
    name:"Gift of Chaos",
    effect:"Pick a visible enemy operative and roll a d6. If that roll equals or exceeds the number of remaining wounds the Operative has immediately make an injury roll for them. All operatives within 1\" of that model suffer 1 Damage."
}

export const WarpTime : PsychicPower =
{
    name:"Warp time",
    effect:"Pick a friendly visible operative, they may Move and Charge twice in their next activation."
}

export const Possession : PsychicPower =
{
    name:"Possession",
    effect:"One use only. Choose a visible Cultist or Mutant. Replace them with a Daemonic Operative that has already been removed from the board or an Injured on full wounds. That Daemon cannot cost more than 20 points.",
    restrictons:"Word Bearer Only"
}

export const InfernalInvigoration : PsychicPower =
{
    name:"Infernal invigoration",
    effect:"Pick a friendly Daemonic Operative. Roll a number of dice equal to its Wound characteristic, for each 3+ that Operative regains a wound.",
    restrictons:"Word Bearer Only"
}

const ChaosCultPsychicPowers : PsychicPower[] =
[
    GiftOfChaos,
    WarpTime,
    Possession,
    InfernalInvigoration
]

export default ChaosCultPsychicPowers;