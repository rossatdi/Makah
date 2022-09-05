import PsychicPower from "../../../types/PsychicPower";

export const MassHypnosis : PsychicPower =
{
    name:"Mass Hypnosis",
    effect:"Until the end of the Turn this Operative cannot be targeted by enemy Operatives if they have target that is closer."
}

export const MentalOnslaught : PsychicPower =
{
    name:"Mental onslaught",
    effect:"Pick a visible enemy operative. Both players roll a d6, psykers gain +1. The operative with the lowest score suffer Damage equal to the difference."
}

export const MindControl : PsychicPower =
{
    name:"Mind Control",
    effect:"You can only use this power if your opponent has at least two Operatives left to activate. Pick a visible enemy operative and guess which initiative card belongs to it. If you guess correctly, you can immediately make that Operative do one Action. Ignore #Evade# tokens on this Operative. The Operative activates as normal when it’s their Activation."
}

const GenestealCultPsychicPowers : PsychicPower[] =
[
    MassHypnosis,
    MentalOnslaught,
    MindControl,
]

export default GenestealCultPsychicPowers;