import Weapon from "../../../types/Weapon";
import { BoltPistol, InfernoPistol, Meltagun, PlasmaPistol as BasePlasmaPistol } from "../../weapons/ImperialWeapons";
import { Pistol } from "../../weapons/WeaponTypes";
import { IgnoresCover, Reach, Torrent, Reckless, Stun, Defensive } from './../../weapons/WeaponSpecialRules';
import { Bolter, CondemnorStake, Stormbolter as BaseStormbolter, HeavyFlamer as BaseHeavyFlamer } from '../../weapons/ImperialWeapons';
import { Flamer, PowerSword } from './../../weapons/GenericWeapons';
import { HeavyBolter, Chainsword } from './../../weapons/ImperialWeapons';
import { Heavy, Combat } from './../../weapons/WeaponTypes';

export const HandFlamer : Weapon = 
{
    name:"Hand Flamer",
    types:[Pistol],
    attack:3,
    dam:2,
    ap:0,
    special:[IgnoresCover, Torrent],
    pt:3
}

export const PlasmaPistol : Weapon = 
{
    ...BasePlasmaPistol,
    pt:4
}

export const Stormbolter : Weapon = 
{
    ...BaseStormbolter,
    pt:2
}

export const HeavyFlamer : Weapon = 
{
    ...BaseHeavyFlamer,
    pt:2
}

export const Multimelta : Weapon = 
{
    name:"Multimelta",
    types:[Heavy],
    attack:2,
    dam:5,
    ap:-2,
    special:[],
    pt:8
}

export const AnointedHalberd : Weapon = 
{
    name:"Anointed Halberd",
    types:[Combat],
    attack:3,
    dam:4,
    ap:-1,
    special:[Reach],
    pt:7
}

export const ArchoFlails : Weapon = 
{
    name:"Archo-flails",
    types:[Combat],
    attack:5,
    dam:2,
    ap:-1,
    special:[Reckless],
    pt:2,
    notes:"Many obnly be taken by Archo-flagellants"
}

export const Eviscerator : Weapon = 
{
    name:"Eviscerator",
    types:[Combat],
    attack:2,
    dam:5,
    ap:-2,
    special:[Reckless],
    pt:4
}

export const HallowedMace : Weapon = 
{
    name:"Hallowed Mace",
    types:[Combat],
    attack:3,
    dam:4,
    ap:-1,
    special:[Stun],
    pt:7
}

export const SacresantShield : Weapon = 
{
    name:"Sacresant Shield",
    types:[Combat],
    attack:4,
    dam:0,
    ap:0,
    special:[Defensive],
    pt:5
}


export const SistersWeapons : Weapon[] =
[
    BoltPistol,
    HandFlamer,
    InfernoPistol,
    PlasmaPistol,
    Bolter,
    CondemnorStake,
    Meltagun,
    Stormbolter,
    Flamer,
    HeavyFlamer,
    HeavyBolter,
    Multimelta,
    AnointedHalberd,
    ArchoFlails,
    Chainsword,
    Eviscerator,
    HallowedMace,
    PowerSword,
    SacresantShield
]

export default SistersWeapons