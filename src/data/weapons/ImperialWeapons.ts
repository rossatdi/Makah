import CombineWeaponsLists from "../../functions/CombineWeaponsLists"
import Weapon from "../../types/Weapon"
import GenericWeaponsList from "./GenericWeapons"
import { Aim, Dangerous, Defensive, Headshot, IgnoresCover, NonLethal, OneUse, PsykerOnly, Range, RapidFire, Reach, RerollOneToHit, SplitFire, Torrent } from "./WeaponSpecialRules"
import { Assault, Combat, Heavy, Pistol, Rifle } from "./WeaponTypes"


export const Laspistol : Weapon =
{
    name:"Laspistol",
    types:[Pistol],
    attack:2,
    dam:3,
    ap:0,
    special:[Range(6)],
    pt:0,
}

export const BoltPistol : Weapon =
{
    name:"Bolt Pitol",
    types:[Pistol],
    attack:3,
    dam:4,
    ap:0,
    special:[Range(6), RapidFire],
    pt:1,
}

export const HotshotLaspistol : Weapon =
{

    name:"Hotshot Laspistol",
    types:[Pistol],
    attack:2,
    dam:3,
    ap:-1,
    special:[Range(6)],
    pt:1,
}

export const InfernoPistol : Weapon =
{
    name:"Inferno Pistol",
    types:[Pistol],
    attack:2,
    dam:5,
    ap:-2,
    special:[Range(4)],
    pt:4,
}

export const PlasmaPistol : Weapon =
{
    name:"Plasma Pistol",
    types:[Pistol],
    attack:3,
    dam:4,
    ap:-1,
    special:[Range(6), Dangerous],
    pt:5,
}

export const NeedlePistol : Weapon = 
{
    name:"Needle Pistol",
    types:[Pistol],
    attack:2,
    dam:"d6+1",
    ap:-1,
    special:[NonLethal,Range(8)],
    pt:3,
}

export const LasCarbine : Weapon =
{
    name:"Las Carbine",
    types:[Assault],
    attack:2,
    dam:3,
    ap:0,
    special:[],
    pt:0,
}

export const Meltagun : Weapon =
{
    name:"Meltagun",
    types:[Assault],
    attack:2,
    dam:5,
    ap:-1,
    special:[Range(8)],
    pt:5,
}

export const Stormbolter : Weapon =
{
    name:"Stormbolter",
    types:[Assault],
    attack:3,
    dam:4,
    ap:0,
    special:[RerollOneToHit ,RapidFire],
    pt:3,
}

export const Lasgun : Weapon =
{
    name:"Lasgun",
    types:[Rifle],
    attack:2,
    dam:3,
    ap:0,
    special:[RapidFire],
    pt:0,
}

export const Bolter : Weapon =
{
    name:"Bolter",
    types:[Rifle],
    attack:3,
    dam:4,
    ap:0,
    special:[RapidFire],
    pt:2,
}

export const HotshotLasgun : Weapon =
{
    name:"Hotshot Lasgun",
    types:[Rifle],
    attack:2,
    dam:3,
    ap:-1,
    special:[],
    pt:1,
}

export const PlasmaGun : Weapon =
{
    name:"Plasma Gun",
    types:[Rifle],
    attack:3,
    dam:4,
    ap:-1,
    special:[Dangerous],
    pt:7
}

export const Longlas : Weapon =
{
    name:"Longlas",
    types:[Rifle],
    attack:3,
    dam:3,
    ap:-1,
    special:[Headshot],
    pt:5
}

export const CondemnorStake : Weapon =
{
    name:"Condemnnor Stake",
    types:[Rifle],
    attack:3,
    dam:4,
    ap:-2,
    special:[OneUse],
    notes:"Added to a Bolter, which must also be paid for.",
    pt:1
}

export const NeedleRifle : Weapon =
{
    name:"Needle Rifle",
    types:[Heavy],
    attack:2,
    dam:"d6+1",
    ap:-1,
    special:[NonLethal,Aim],
    pt:5
}

export const HeavyBolter : Weapon =
{
    name:"Heavy Bolter",
    types:[Heavy],
    attack:5,
    dam:4,
    ap:0,
    special:[SplitFire,RapidFire],
    pt:8
}

export const HeavyFlamer : Weapon =
{
    name:"Heavy Flamer",
    types:[Heavy],
    attack:5,
    dam:3,
    ap:-1,
    special:[IgnoresCover,Torrent],
    pt:8
}

export const Chainsword : Weapon =
{
    name:"Chainsword",
    types:[Combat],
    attack:3,
    dam:4,
    ap:0,
    special:[],
    pt:2
}

export const StormShield : Weapon = 
{
    name:"Storm Shield",
    types:[Combat],
    attack:4,
    dam:0,
    ap:0,
    special:[Defensive],
    pt:5
}

export const PowerFist : Weapon =
{
    name:"Power Fist",
    types:[Combat],
    attack:3,
    dam:4,
    ap:-2,
    special:[],
    pt:8
}

export const ForceSword : Weapon =
{
    name:"Force Sword",
    types:[Combat],
    attack:3,
    dam:"d3+2",
    ap:-2,
    special:[PsykerOnly],
    pt:4
}

export const ForceHalberd : Weapon = 
{
    name:"Force Halberd",
    types:[Combat],
    attack:3,
    dam:"d3+2",
    ap:-1,
    special:[PsykerOnly, Reach],
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
export default ImperialWeaponsList;


export const GenericAndImperialWeaponsList : Weapon[] = CombineWeaponsLists(ImperialWeaponsList, GenericWeaponsList)