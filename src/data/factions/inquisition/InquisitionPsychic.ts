import PsychicPower from "../../../types/PsychicPower";

export const ManifestFaith : PsychicPower =
{
    name:"Manifest Faith",
    effect:"For the rest of this turn, this character counts as having an #Evade# token for the purpose of Shooting."
}

export const Hammerhand : PsychicPower =
{
    name:"Hammerhand",
    effect:"You may re-roll Impact hits and Impact hits deal +1 damage.",
    restrictons:"Ordo Malleus Only"
}

export const NullZone : PsychicPower =
{
    name:"Null Zone",
    effect:"All enemy Operatives within 6\" get -1 to their #Evade# rolls.",
    restrictons:"Ordo Malleus Only"
}

export const DesecrateTheVanquished : PsychicPower =
{
    name:"Desecrate the Vanquished",
    effect:"Pick a visible critically injured enemy Operative, remove them from play.",
    restrictons:"Ordo Xenos Only"
}

export const TestOfPurity : PsychicPower =
{
    name:"Test of Purity",
    effect:"Pick a visible enemy Operative, roll a dice equal to their remaining Wounds. For each 5+, deal one Damage.",
    restrictons:"Ordo Hereticus Only"

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
