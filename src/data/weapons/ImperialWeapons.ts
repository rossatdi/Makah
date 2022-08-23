import { CombineWeaponsLists } from "../../functions/CombineWeaponsLists"
import { Weapon } from "../../types/Weapon"
import { LaspistolBase, BoltPistolBase, HotshotLaspistolBase, InfernoPistolBase, PlasmaPistolBase, NeedlePistolBase, LasgunBase, BolterBase, HotshotLasgunBase, PlasmaGunBase, LasCarbineBase, MeltagunBase, StormbolterBase, LonglasBase, CondemnorStakeBase, NeedleRifleBase, HeavyBolterBase, HeavyFlamerBase, ChainswordBase, StormShieldBase, PowerFistBase, ForceSwordBase, ForceHalberdBase } from "./BaseWeapons"
import { GenericWeaponsList } from "./GenericWeapons"


export const Laspistol : Weapon =
{
    ...LaspistolBase,
    pt:0,
}

export const BoltPistol : Weapon =
{
    ...BoltPistolBase,
    pt:1,
}

export const HotshotLaspistol : Weapon =
{
    ...HotshotLaspistolBase,
    pt:1,
}

export const InfernoPistol : Weapon =
{
    ...InfernoPistolBase,
    pt:4,
}

export const PlasmaPistol : Weapon =
{
    ...PlasmaPistolBase,
    pt:5,
}

export const NeedlePistol : Weapon = 
{
    ...NeedlePistolBase,
    pt:3,
}

export const LasCarbine : Weapon =
{
    ...LasCarbineBase,
    pt:0,
}

export const Meltagun : Weapon =
{
    ...MeltagunBase,
    pt:5,
}

export const Stormbolter : Weapon =
{
    ...StormbolterBase,
    pt:3,
}

export const Lasgun : Weapon =
{
    ...LasgunBase,
    pt:0,
}

export const Bolter : Weapon =
{
    ...BolterBase,
    pt:2,
}

export const HotshotLasgun : Weapon =
{
    ...HotshotLasgunBase,
    pt:1,
}

export const PlasmaGun : Weapon =
{
    ...PlasmaGunBase,
    pt:7
}

export const Longlas : Weapon =
{
    ...LonglasBase,
    pt:5
}

export const CondemnorStake : Weapon =
{
    ...CondemnorStakeBase,
    pt:1
}

export const NeedleRifle : Weapon =
{
    ...NeedleRifleBase,
    pt:5
}

export const HeavyBolter : Weapon =
{
    ...HeavyBolterBase,
    pt:8
}

export const HeavyFlamer : Weapon =
{
    ...HeavyFlamerBase,
    pt:8
}

export const Chainsword : Weapon =
{
    ...ChainswordBase,
    pt:2
}

export const StormShield : Weapon = 
{
    ...StormShieldBase,
    pt:5
}

export const PowerFist : Weapon =
{
    ...PowerFistBase,
    pt:8
}

export const ForceSword : Weapon =
{
    ...ForceSwordBase,
    pt:4
}

export const ForceHalberd : Weapon = 
{
    ...ForceHalberdBase,
    pt:4
}

export const ImperialWeaponsList : Weapon[] =
[
    Laspistol,
    BoltPistol,
    HotshotLaspistol,
    InfernoPistol,
    PlasmaPistol,
    NeedlePistol,
    LasCarbine,
    Meltagun,
    Stormbolter,
    Lasgun,
    Bolter,
    HotshotLasgun,
    PlasmaGun,
    Longlas,
    CondemnorStake,
    NeedleRifle,
    HeavyBolter,
    HeavyFlamer,
    Chainsword,
    StormShield,
    PowerFist,
    ForceSword,
    ForceHalberd
]



export const GenericAndImperialWeaponsList : Weapon[] = CombineWeaponsLists(ImperialWeaponsList, GenericWeaponsList)