import WeaponType from "../../types/WeaponType";

export const Rifle : WeaponType =
{
    name:"Rifle",
    effect:"Rifle weapons can take a special Aim action. Taken immediately before a Shoot action, this grants +1 to hit.",
    ordering:3
}

export const Pistol : WeaponType = 
{
    name:"Pistol",
    effect:"Pistol weapons can Shoot if the Operative is engaged at -1 Bs and only choose who they’re engaged with. An operative can shoot two pistols in the same action at -1Bs.",
    ordering:1
}

export const Heavy : WeaponType = 
{
    name:"Heavy",
    effect:"Heavy weapons cannot be used in the same activation that an operative also takes a Movement action, however they can Dash.",
    ordering:4
}

export const Assault : WeaponType = 
{
    name:"Assault",
    effect:"Operatives with an Assault weapon can immediately make a Shoot action for free after making a Dash action. This Shoot action has -1 to Hit.",
    ordering:2
}

export const Combat : WeaponType = 
{
    name:"Combat",
    effect:"Range 1\", can only be used while Engaged.",
    ordering:5
}

export const Grenade : WeaponType = 
{
    name:"Grenade",
    effect:"Grenades are one use only and ignore cover in addition to other rules.",
    ordering:6
}