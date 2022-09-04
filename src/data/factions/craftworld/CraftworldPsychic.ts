import PsychicPower from "../../../types/PsychicPower";

export const Mindwar : PsychicPower =
{
    name:"Mindwar",
    effect:"Pick a visible enemy operative. Both players roll a d6, you gain +2, targeted psykers gain +1. The operative with the lowest score suffer Damage equal to the difference."
}

export const Doom : PsychicPower =
{
    name:"Doom",
    effect:"Pick a visible enemy operative, place three Doom tokens next to them. Each time a friendly Operative targets them they can remove a Doom token to re-roll one dice. Operatives with a Doom token are at -1 to Evade."
}

const CraftworldPsychicPowers : PsychicPower[] =
[
    Mindwar, 
    Doom
]

export default CraftworldPsychicPowers;