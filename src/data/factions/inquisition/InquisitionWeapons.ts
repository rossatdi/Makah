import { Weapon } from "../../../types/Weapon"
import { NeedlePistol as ImpNeedlePistol, CondemnorStake as ImpCondemnorStake, NeedleRifle as ImpNeedleRifle } from "../../weapons/ImperialWeapons";
import { Dangerous, IgnoresCover, Indirect, NonLethal, Range, Stun, Torrent } from "../../weapons/WeaponSpecialRules";
import { Assault, Combat, Rifle } from "../../weapons/WeaponTypes";


export const NeedlePistol : Weapon = 
{
    ...ImpNeedlePistol,
    pt:2,
}

export const Webber : Weapon = 
{
    name:"Webber",
    types:[Assault],
    attack:4,
    dam:1,
    ap:0,
    special:[Stun ,NonLethal,Range(6)],
    pt:1,
}

export const PsyberEagle : Weapon = 
{
    name:"Psyber-eagle",
    types:[Assault],
    attack:"d6",
    dam:4,
    ap:0,
    special:[Indirect],
    pt:3,
}

export const CondemnorStake : Weapon = 
{
    ...ImpCondemnorStake,
    pt:1
}

export const Incinerator : Weapon = 
{
    name:"Incinerator",
    types:[Rifle],
    attack:5,
    dam:2,
    ap:-1,
    special:[IgnoresCover,Torrent],
    pt:8,
}

export const NeedleRifle : Weapon = 
{
    ...ImpNeedleRifle,
    pt:4,
}

export const DeamonWeapon : Weapon = 
{
    name:"Deamon Weapon",
    types:[Combat],
    attack:3,
    dam:"d6",
    ap:-2,
    special:[Dangerous],
    pt:5,
}

export const PhaseBlade : Weapon = 
{
    name:"PhaseBlade",
    types:[Combat],
    attack:3,
    dam:3,
    ap:-4,
    special:[],
    pt:6,
}

export const InquisitionWeaponsList : Weapon[] =
[NeedlePistol,Webber,PsyberEagle,CondemnorStake,Incinerator,NeedleRifle,DeamonWeapon,PhaseBlade]

export default InquisitionWeaponsList;