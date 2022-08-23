import { CombineWeaponsLists } from "../../functions/CombineWeaponsLists"
import { Equipment } from "../../types/Equipment"
import { Faction } from "../../types/Faction"
import { FactionAbility } from "../../types/FactionAbility"
import { OperativeBase } from "../../types/OperativeBase"
import { Weapon } from "../../types/Weapon"
import { BolterBase, BoltPistolBase, ChainswordBase, HeavyBolterBase, StormbolterBase } from "../weapons/BaseWeapons"
import { GenericAndImperialWeaponsList } from "../weapons/ImperialWeapons"
import { RapidFire, Range, Aim, Headshot } from "../weapons/WeaponSpecialRules"
import { Assault, Combat, Grenade, Heavy, Pistol, Rifle } from "../weapons/WeaponTypes";

export const BoltPistol : Weapon =
{
    ...BoltPistolBase,
    pt:1    
}

export const Bolter : Weapon =
{
    ...BolterBase,
    pt:2
}

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

export const Stormbolter : Weapon =
{
    ...StormbolterBase,
    pt:3
}

export const HeavyBolter : Weapon =
{
    ...HeavyBolterBase,
    pt:8
}

export const Chainsword : Weapon =
{
    ...ChainswordBase,
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


export const SpaceMarine : OperativeBase =
{
    type:"Space Marine",
    mv:6,
    ws:3,
    bs:3,
    act:3,
    wnd:12,
    sv:3,
    pt:42
}

export const Scout : OperativeBase =
{
    type:"Scout",
    mv:6,
    ws:3,
    bs:3,
    act:2,
    wnd:8,
    sv:4,
    pt:22
}

export const Servitor : OperativeBase =
{
    type:"Servitor",
    mv:6,
    ws:5,
    bs:5,
    act:2,
    wnd:8,
    sv:6,
    pt:7
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

export const BolterDiscipline :FactionAbility =
{
    name: "Bolter Discipline",
    effect:"Once per game, immediately before rolling to see who goes first, you may enact Bolter Discipline. For that turn you may ignore the restriction of movement on the Rapid sFire pecial rule for Bolt weapons."
}

export const SpecialIssueAmmo : Equipment =
{
    name:"Special Issue Ammo",
    effect:"After the target of a Shooting attack from a Bolt weapon has chosen to Evade or not, you may choose of the following bonuses: • Dragon fire – The attack gains Ignore Cover • Vengeance – The attack gains -1 AP and R8\". • Kraken – The attack gains +1 Damage.",
    pt:5
}

export const Auspex : Equipment =
{
    name:"Auspex",
    effect:"This operative counts as being within 1\" of an objective when they're within 3\" of an objective.",
    pt:4
}

export const PuritySeals : Equipment = 
{
    name:"Purity Seal",
    effect:"One use only. When this Operative activates you may remove an Evade token without losing an action.",
    pt:3
}

export const FirstCompanyHonours : Equipment = 
{
    name:"1st Company Honours",
    effect: "Re-roll one dice when fighting or fighting back.",
    pt:4
}

export const CamoCloak : Equipment = 
{
    name:"Camo Cloak",
    effect: "Re-roll 1s when making Evade rolls.",
    pt:3
}


export const Astartes : Faction =
{
    name:"Adeptus Astartes",
    slug:"astartes",
    operativeTypes:[SpaceMarine,Scout,Servitor],
    weapons:CombineWeaponsLists(AstartesWeaponList,GenericAndImperialWeaponsList),
    equipment:[SpecialIssueAmmo,Auspex,PuritySeals,FirstCompanyHonours,CamoCloak],
    ability:BolterDiscipline
}