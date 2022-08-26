import { CombineWeaponsLists } from "../../functions/CombineWeaponsLists"
import Equipment from "../../types/Equipment"
import Faction from "../../types/Faction"
import FactionAbility from "../../types/FactionAbility"
import { OperativeBase } from "../../types/OperativeBase"
import { Weapon } from "../../types/Weapon"
import { CarapaceArmor, MediKit } from "../BaseEquipment"
import { Autocannon, MissileLauncher, Mortar } from "../weapons/GenericWeapons"
import { Bolter, BoltPistol, Chainsword, GenericAndImperialWeaponsList, HeavyBolter, HotshotLasgun, HotshotLaspistol, LasCarbine, Lasgun, Laspistol, Meltagun, PlasmaGun, PlasmaPistol, Longlas as ImpLonglas } from "../weapons/ImperialWeapons"
import { Inaccurate, Range } from "../weapons/WeaponSpecialRules"
import { Assault, Combat } from "../weapons/WeaponTypes";

export const Guardsman : OperativeBase =
{
    type:"Guardsman",
    mv:6,
    ws:4,
    bs:4,
    act:2,
    wnd:6,
    sv:5,
    pt:10,
}

export const Veteran : OperativeBase =
{
    type:"Veteran",
    mv:6,
    ws:4,
    bs:3,
    act:2,
    wnd:6,
    sv:5,
    pt:15,
}

export const Scion : OperativeBase =
{
    type:"Scion",
    mv:6,
    ws:4,
    bs:3,
    act:2,
    wnd:7,
    sv:4,
    pt:20,
}

export const Officer : OperativeBase =
{
    type:"Guardsman",
    mv:6,
    ws:3,
    bs:3,
    act:2,
    wnd:8,
    sv:5,
    pt:20,
}

export const Ratling : OperativeBase =
{
    type:"Ratling",
    mv:5,
    ws:4,
    bs:3,
    act:2,
    wnd:4,
    sv:5,
    pt:12,
}

export const Ogryn : OperativeBase =
{
    type:"Ogryn",
    mv:5,
    ws:3,
    bs:5,
    act:2,
    wnd:12,
    sv:5,
    pt:22,
}


export const Orders : FactionAbility = 
{
    name:"Orders",
    effect:"Once per game, immediately before rolling to see who goes first, you can activate an Order. This can have one of the following effects: • Get back in the fight! Remove all Evade tokens from friendly Operatives. • First rank fire, second rank fire! Rapid fire Las weapons do not suffer the -1 penalty for a second Shoot action. • Move, move, move! All Operatives can make a second Move action."
}

export const VoxRelay : Equipment = 
{
    name:"Vox Relay",
    effect:"Unique action – Pick a friendly Operative, the next time they activate they get 1 extra Action.",
    pt:2
}

export const Commissar : Equipment =
{
    name:"Commissar",
    effect:"Gains a Bolt Pistol and a 4+ save. If this Operative does not have an Evade token, when other friendly visible Operatives activate, on a 6+ they do not lose an action for discarding their Evade token. This Operative may use the Finish Off action against friendly Operatives.",
    pt:5,
    modifier:{sv:1}
}

export const CamoCloak : Equipment = 
{
    name:"Camo Cloak",
    effect:"Re-roll 1s when making Evade rolls.",
    pt:3
}

export const GravChute : Equipment = 
{
    name: "Grav Chute",
    effect: "Do not set this Operative up at the start of the game and ignore their activation during Turn 1. During Turn 2, before activating them anywhere on the board beyond 6” of an enemy. Maximum of three per crew.",
    pt:4,
}

export const RipperGun : Weapon = {
    name:"Ripper Gun",
    types:[Assault,Combat],
    profiles:[
        {
            name:"Gun",
            attack:5,
            dam:3,
            ap:0,
            special:[Range(8),Inaccurate],
        },
        {
            name:"Knife",
            attack:3,
            dam:4,
            ap:0,
            special:[],
        }
    ],
    pt:3
}

export const Longlas : Weapon = {
    ...ImpLonglas,
    pt:4
}

export const LongKnife : Weapon = {
    name: "Long Knife",
    types:[Combat],
    attack:3,
    dam:3,
    ap:0,
    special:[],
    pt:1
}

export const GuardWeapons : Weapon[] = 
[
    Laspistol,
    BoltPistol,
    HotshotLaspistol,
    PlasmaPistol,
    LasCarbine,
    Meltagun,
    RipperGun,
    Lasgun,
    Bolter,
    HotshotLasgun,
    PlasmaGun,
    Longlas,
    HeavyBolter,
    Autocannon,
    Mortar,
    MissileLauncher,
    LongKnife,
    Chainsword
]


export const ImperialGuard : Faction =
{
    name:"Imperial Guard",
    slug:"guard",
    quote:"\"Men, we are the first, last and often only line of defence the Imperium has against what is out there. You and that fine piece of Imperial weaponry you hold in your hands is all that is keeping humanity alive. Most of you will probably not live to see your second year in the Guard and most of you will probably never see your homeworlds again, but I can guarantee you that when you do fall, with a prayer to the most high and mighty God-Emperor on your lips, you will have earned the right to call yourself a man!\" ",
    attribution:"Staff Sergeant Vermak, 12th Cadian Shock Regiment",
    operativeTypes:[Guardsman, Veteran,Scion,Officer,Ratling,Ogryn],
    weapons:CombineWeaponsLists(GuardWeapons,GenericAndImperialWeaponsList),
    equipment:[MediKit, VoxRelay, Commissar,CamoCloak,CarapaceArmor,GravChute],
    ability:Orders
}