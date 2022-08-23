import { Weapon } from "../../types/Weapon";
import { Aim, Blast, Defensive, Headshot, IgnoresCover, Indirect, Range, RapidFire, Reach, Reckless, Small, SplitFire, Stun, Torrent } from "./WeaponSpecialRules";
import { Assault, Combat, Grenade, Heavy, Pistol, Rifle } from "./WeaponTypes";

export const Autopistol : Weapon =
{
    name:"Autopistol",
    types:[Pistol],
    attack:3,
    dam:2,
    ap:0,
    special:[Range(6)],
    pt:0,
}

export const Stubgun : Weapon =
{
    name:"Stubgun",
    types:[Pistol],
    attack:1,
    dam:4,
    ap:0,
    special:[Range(6)],
    pt:0,
}

export const Autogun : Weapon =
{
    name:"Autogun",
    types:[Assault,Rifle],
    attack:3,
    dam:2,
    ap:0,
    special:[RapidFire],
    pt:0,
}

export const Shotgun : Weapon =
{
    name:"Shotgun",
    types:[Assault],
    attack:2,
    dam:4,
    ap:0,
    special:[Range(8)],
    pt:0,
}

export const Flamer : Weapon =
{
    name:"Flamer",
    types:[Assault],
    attack:5,
    dam:2,
    ap:0,
    special:[IgnoresCover, Torrent],
    pt:4,
}

export const SniperRifle : Weapon =
{
    name:"Sniper Rifle",
    types:[Heavy],
    attack:3,
    dam:4,
    ap:-1,
    special:[Headshot, Aim],
    pt:5,
}

export const Autocannon : Weapon =
{
    name:"Autocannon",
    types:[Heavy],
    attack:4,
    dam:4,
    ap:-1,
    special:[SplitFire],
    pt:8,
}
export const MissileLauncher : Weapon = 
{
    name:"Missile Launcher",
    types:[Heavy],
    profiles: [ 
        {
            name:"Frag",
            attack:3,
            dam:"d6",
            ap:0,
            special:[Blast(2)],
        },
        {
            name:"Krak",
            attack:1,
            dam:"2d6",
            ap:-2,
            special:[Aim],
        }
    ],
    pt:8
}
export const Mortar : Weapon =
{
    name:"Mortar",
    types:[Heavy],
    attack:3,
    dam:"d6",
    ap:0,
    special:[Indirect, Blast(2)],
    pt:5,
}

export const Knife : Weapon =
{
    name:"Knife",
    types:[Combat],
    attack:2,
    dam:2,
    ap:0,
    special:[Small],
    pt:0,
}

export const ClawsAndTeeth : Weapon =
{
    name:"Claws and teeth",
    types:[Combat],
    attack:4,
    dam:2,
    ap:0,
    special:[Reckless],
    pt:0,
}

export const Sword : Weapon =
{
    name:"Sword",
    types:[Combat],
    attack:3,
    dam:3,
    ap:0,
    special:[],
    pt:0,
}

export const Axe : Weapon =
{
    name:"Axe",
    types:[Combat],
    attack:2,
    dam:4,
    ap:0,
    special:[],
    pt:0,
}

export const Spear : Weapon =
{
    name:"Spear",
    types:[Combat],
    attack:3,
    dam:2,
    ap:0,
    special:[Reach],
    pt:0,
}

export const PowerSword : Weapon =
{
    name:"Power Sword",
    types:[Combat],
    attack:3,
    dam:3,
    ap:-2,
    special:[],
    pt:5,
}

export const PowerAxe : Weapon =
{
    name:"Power Axe",
    types:[Combat],
    attack:2,
    dam:4,
    ap:-2,
    special:[],
    pt:5,
}

export const PowerMaul : Weapon =
{
    name:"Power Maul",
    types:[Combat],
    attack:3,
    dam:4,
    ap:-1,
    special:[],
    pt:5,
}

export const CombatShield : Weapon =
{
    name:"Combat Shield",
    types:[Combat],
    attack:3,
    dam:0,
    ap:0,
    special:[Defensive],
    pt:3,
}

export const FragGrenade : Weapon =
{
    name:"Frag Grenade",
    types:[Grenade],
    attack:3,
    dam:"d3",
    ap:0,
    special:[Blast(2), Range(4)],
    pt:1,
}

export const KrakGrenade : Weapon =
{
    name:"Krak Grenade",
    types:[Grenade],
    attack:2,
    dam:"d3+2",
    ap:-1,
    special:[Range(4)],
    pt:2,
}

export const StunGrenade : Weapon =
{
    name:"Stun Grenade",
    types:[Grenade],
    attack:2,
    dam:0,
    ap:0,
    special:[Blast(2), Range(4), Stun],
    pt:3,
}

export const GenericWeaponsList : Weapon[] =
[
 Autopistol,
 Stubgun,
 Autogun,
 Shotgun,
 Flamer,
 SniperRifle,
 Autocannon,
 MissileLauncher,
 Mortar,
 Knife,
 ClawsAndTeeth,
 Sword,
 Axe,
 Spear,
 PowerSword,
 PowerAxe,
 PowerMaul,
 CombatShield,
 FragGrenade,
 KrakGrenade,
 StunGrenade
]