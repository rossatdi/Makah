import Equipment from "../../../types/Equipment";
import { MediKit } from "../../BaseEquipment";


export const LaudHailer : Equipment = 
{
    name:"Laud Hailer",
    effect:"Friendly operatives within 4\" can carry out 1 mission actions per activation for free as long as this operative doesn’t have an Evade token.",
    pt:4
}

export const BlessedRelic : Equipment = 
{
    name:"Blessed Relic",
    effect:"This Operative can make Evade saves without a token but cannot Dash. When the Shield of Faith is activated Evade rolls are passed on a 4+.",
    pt:6
}

export const ArmoriumCherub : Equipment = 
{
    name:"Armorium Cherub",
    effect:"One use only. Immediately re-roll all attack dice from a Shoot action (even those that hit).",
    pt:2
}

export const JumpPack : Equipment = 
{
    name:"Jump Pack",
    effect:"When moving, this Operative can ignore intervening terrain and models.",
    pt:3
}

export const DualPistolSpecialist : Equipment = 
{
    name:"Dual Pistol Specialist",
    effect:"Don't suffer the -1 to hit penalty of firing with two pistols as long as they’re the same.",
    pt:1
}

export const SistersEquipmentList : Equipment[] =
[
    MediKit,
    LaudHailer,
    BlessedRelic,
    ArmoriumCherub,
    JumpPack,
    DualPistolSpecialist
]

export default SistersEquipmentList;