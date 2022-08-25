import Weapon from "../../../types/Weapon"
import { BoltPistol, Bolter, Stormbolter, HeavyBolter, Chainsword } from "../../weapons/ImperialWeapons"
import { RapidFire, Aim, Headshot, Range } from "../../weapons/WeaponSpecialRules"
import { Assault, Combat, Heavy } from "../../weapons/WeaponTypes"

export const BoltCarbine : Weapon =
{
    name:"Bolter",
    types:[Assault],
    attack:3,
    dam:4,
    ap:0,
    special:[RapidFire],
    pt:2
}

export const MarineCombatKnife : Weapon =
{
    name:"Marine Combat Knife",
    types:[Combat],
    attack:3,
    dam:2,
    ap:0,
    special:[],
    pt:2,
    notes:"Space Marines and Scouts only."
}

export const MarineShotgun : Weapon =
{
    name:"Machine Shotgun",
    types:[Assault],
    attack:2,
    dam:5,
    ap:0,
    special:[Range(8)],
    pt:1
}

export const MarineSniperRifle : Weapon =
{
    name:"Machine Sniper Rifle",
    types:[Heavy],
    attack:3,
    dam:4,
    ap:-1,
    special:[Aim, Headshot],
    pt:5
}

export const AstartesWeaponList : Weapon[]=
[
    BoltPistol,
    Bolter,
    BoltCarbine,
    Stormbolter,
    HeavyBolter,
    Chainsword,
    MarineCombatKnife,
    MarineShotgun,
    MarineSniperRifle
]
export default AstartesWeaponList;