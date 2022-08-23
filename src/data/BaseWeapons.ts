import { WeaponBase } from "../types/Weapon";
import { Aim, Blast, Dangerous, Defensive, Headshot, IgnoresCover, NonLethal, OneUse, PsykerOnly, Range, RapidFire, Reach, RerollOneToHit, SplitFire, Torrent } from "./WeaponSpecialRules";

export const NeedlePistolBase : WeaponBase = 
{
    name:"Needle Pistol",
    types:["Pistol"],
    attack:2,
    dam:"d6+1",
    ap:-1,
    special:[NonLethal,Range(8)],
}

export const LaspistolBase : WeaponBase =
{
    name:"Laspistol",
    types:["Pistol"],
    attack:2,
    dam:3,
    ap:0,
    special:[Range(6)],
}

export const BoltPistolBase : WeaponBase =
{
    name:"Bolt Pitol",
    types:["Pistol"],
    attack:3,
    dam:4,
    ap:0,
    special:[Range(6), RapidFire],
}

export const HotshotLaspistolBase : WeaponBase =
{
    name:"Hotshot Laspistol",
    types:["Pistol"],
    attack:2,
    dam:3,
    ap:-1,
    special:[Range(6)],
}

export const InfernoPistolBase : WeaponBase =
{
    name:"Inferno Pistol",
    types:["Pistol"],
    attack:2,
    dam:5,
    ap:-2,
    special:[Range(4)],
}

export const PlasmaPistolBase : WeaponBase =
{
    name:"Plasma Pistol",
    types:["Pistol"],
    attack:3,
    dam:4,
    ap:-1,
    special:[Range(6), Dangerous],
}

export const LasCarbineBase : WeaponBase =
{
    name:"Las Carbine",
    types:["Assault"],
    attack:2,
    dam:3,
    ap:0,
    special:[],
}

export const MeltagunBase : WeaponBase =
{
    name:"Meltagun",
    types:["Assault"],
    attack:2,
    dam:5,
    ap:-1,
    special:[Range(8)],
}

export const StormbolterBase : WeaponBase =
{
    name:"Stormbolter",
    types:["Assault"],
    attack:3,
    dam:4,
    ap:0,
    special:[RerollOneToHit ,RapidFire],
}

export const LasgunBase : WeaponBase = 
{
    name:"Lasgun",
    types:["Rifle"],
    attack:2,
    dam:3,
    ap:0,
    special:[RapidFire],
}

export const HotshotLasgunBase : WeaponBase = 
{
    name:"Hotshot Lasgun",
    types:["Rifle"],
    attack:2,
    dam:3,
    ap:-1,
    special:[],
}

export const BolterBase : WeaponBase = 
{
    name:"Bolter",
    types:["Rifle"],
    attack:3,
    dam:4,
    ap:0,
    special:[RapidFire],
}

export const PlasmaGunBase : WeaponBase =
{
    name:"Plasma Gun",
    types:["Rifle"],
    attack:3,
    dam:4,
    ap:-1,
    special:[Dangerous],
}

export const LonglasBase : WeaponBase =
{
    name:"Longlas",
    types:["Rifle"],
    attack:3,
    dam:3,
    ap:-1,
    special:[Headshot],
}

export const CondemnorStakeBase : WeaponBase = 
{
    name:"Condemnnor Stake",
    types:["Rifle"],
    attack:3,
    dam:4,
    ap:-2,
    special:[OneUse],
    notes:"Added to a Bolter, which must also be paid for."
}

export const NeedleRifleBase : WeaponBase = 
{
    name:"Needle Rifle",
    types:["Heavy"],
    attack:2,
    dam:"d6+1",
    ap:-1,
    special:[NonLethal,Aim],
}

export const HeavyBolterBase : WeaponBase = 
{
    name:"Heavy Bolter",
    types:["Heavy"],
    attack:5,
    dam:4,
    ap:0,
    special:[SplitFire,RapidFire],
}

export const HeavyFlamerBase : WeaponBase = 
{
    name:"Heavy Flamer",
    types:["Heavy"],
    attack:5,
    dam:3,
    ap:-1,
    special:[IgnoresCover,Torrent],
}

export const ChainswordBase : WeaponBase = 
{
    name:"Chainsword",
    types:["Combat"],
    attack:3,
    dam:4,
    ap:0,
    special:[],
}

export const StormShieldBase : WeaponBase = 
{
    name:"Storm Shield",
    types:["Combat"],
    attack:4,
    dam:0,
    ap:0,
    special:[Defensive],
}

export const PowerFistBase : WeaponBase = 
{
    name:"Power Fist",
    types:["Combat"],
    attack:3,
    dam:4,
    ap:-2,
    special:[],
}

export const ForceSwordBase : WeaponBase = 
{
    name:"Force Sword",
    types:["Combat"],
    attack:3,
    dam:"d3+2",
    ap:-2,
    special:[PsykerOnly],
}

export const ForceHalberdBase : WeaponBase = 
{
    name:"Force Halberd",
    types:["Combat"],
    attack:3,
    dam:"d3+2",
    ap:-1,
    special:[PsykerOnly, Reach],
}