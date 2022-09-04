import PsychicPower from "../../../types/PsychicPower";

export const BigStomp : PsychicPower =
{
    name:"Big Stomp",
    effect:"Pick a visible point on the battlefield. All Operatives with 3\" suffer d3 Damage unless they Evade or have an Evade token, in which case they take 1 Damage"
}

export const DaJump : PsychicPower =
{
    name:"Da Jump!",
    effect:"Pick a visible friendly Operative. Move him 3d6\" in any direction, they then receive an Evade token and take 1 damage."
}

const OrkPsychicPowers : PsychicPower[] =
[
    BigStomp, 
    DaJump,
]

export default OrkPsychicPowers;