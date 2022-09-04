import PsychicPower from "../../../types/PsychicPower";

export const ManifestFaith : PsychicPower =
{
    name:"Manifest Faith",
    effect:"For the rest of this turn, this character counts as having an Evade token for the purpose of Shooting."
}

export const Hammerhand : PsychicPower =
{
    name:"Hammerhand",
    effect:"Ordo Malleus Only, You may re-roll Impact hits and Impact hits deal +1 damage."
}

export const NullZone : PsychicPower =
{
    name:"Null Zone",
    effect:"Ordo Malleus Only, All enemy Operatives within 6\" get -1 to their Evade rolls."
}

export const DesecrateTheVanquished : PsychicPower =
{
    name:"Desecrate the Vanquished",
    effect:"Ordo Xenos Only, Pick a visible critically injured enemy Operative, remove them from play."
}

export const TestOfPurity : PsychicPower =
{
    name:"Test of Purity",
    effect:"Ordo Hereticus Only, Pick a visible enemy Operative, roll a dice equal to their remaining Wounds. For each 5+, deal one Damage."
}

const InquisitionPsychicPowers :PsychicPower[] =
[
    ManifestFaith,
    Hammerhand,
    NullZone,
    DesecrateTheVanquished,
    TestOfPurity,
]

export default InquisitionPsychicPowers;
