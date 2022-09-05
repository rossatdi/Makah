import PsychicPower from "../../../types/PsychicPower";

export const OverwhelmingEcstasy : PsychicPower =
{
    name:"Overwhelming ecstasy",
    effect:"Pick a visible enemy Operative with an #Evade# token. Both roll a d6 and add your respective Action characteristic. If you equal or beat your opponent, the next time they activate it requires two Actions to get rid of the #Evade# token. Place a second #Evade# token next to the Operative to help keep track."
}

export const BeguilingTrance : PsychicPower =
{
    name:"Beguiling trance",
    effect:"Pick a visible enemy Operative. Move them 2d3\" towards you."
}

const CultOfExcessPsychicPowers : PsychicPower[] =
[
    OverwhelmingEcstasy,
    BeguilingTrance
]

export default CultOfExcessPsychicPowers;