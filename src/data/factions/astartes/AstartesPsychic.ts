import PsychicPower from "../../../types/PsychicPower";

export const VeilOfTime: PsychicPower =
{
    name:"Veil of Time",
    effect:"Reorder your initiative track."
}

export const FuryOfTheAncients : PsychicPower =
{
    name:"Fury of the Ancients",
    effect:"Pick a visible friendly Operative, they gain +2 Damage to their combat weapons this turn the first time they Fight."
}

const AstartesPsychicPowers : PsychicPower[] =
[
    VeilOfTime,
    FuryOfTheAncients,
]

export default AstartesPsychicPowers;