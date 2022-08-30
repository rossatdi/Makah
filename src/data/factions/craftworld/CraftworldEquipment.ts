import Equipment from "../../../types/Equipment";
import { CamoCloak } from "../../BaseEquipment";

export const WeaponPlatform : Equipment = 
{
    name:"Weapon platform",
    effect:"Change the type of one weapon from Heavy to Assault.",
    pt:5
}

export const SpiritStones : Equipment = 
{
    name:"Spirit Stones",
    effect:"One use only. The first time this operative makes an Injury roll, add 2.",
    pt:4
}

export const BansheeMask : Equipment = 
{
    name:"Banshee Mask",
    effect:"Enemy operatives within 1\" cannot Fight Back.",
    pt:4
}

export const WarpJumpGeneration : Equipment = 
{
    name:"Warp Jump Generation",
    effect:"points: Instead of a normal move or fall back, you can move 3d6\" ignoring all intervening models and terrain. If a double is rolled on the dice, suffer 1 damage. If a triple is rolled, suffer d3 damage instead.",
    pt:6
}

export const HawkWings : Equipment = 
{
    name:"Hawk Wings",
    effect:"When moving, this Operative can ignore intervening terrain and models.",
    pt:3
}

export const Mandiblasters : Equipment = 
{
    name:"Mandiblasters",
    effect:"When making a Fight action or Impact attack, a roll of a 6 to hit deals 1 Damage with no Save allowed.",
    pt:3
}

export const MeshArmour : Equipment = 
{
    name:"Mesh armour",
    effect:"points: Improve a 5+ save to a 4+.",
    pt:3,
    requirement:{sv:5},
    modifier:{sv:1}
}

export const AspectArmour : Equipment = 
{
    name:"Aspect armour",
    effect:"points: Improve a 4+ save to a 3+.",
    pt:4,
    requirement:{sv:4},
    modifier:{sv:1}
}

const CraftworldEquipment : Equipment[] =
[
    CamoCloak,
    WeaponPlatform,
    SpiritStones,
    BansheeMask,
    WarpJumpGeneration,
    HawkWings,
    Mandiblasters,
    MeshArmour,
    AspectArmour
]

export default CraftworldEquipment;