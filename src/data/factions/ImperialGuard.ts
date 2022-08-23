import { CombineWeaponsLists } from "../../functions/CombineWeaponsLists"
import { Equipment } from "../../types/Equipment"
import { Faction } from "../../types/Faction"
import { FactionAbility } from "../../types/FactionAbility"
import { Operative } from "../../types/Operative"
import { OperativeBase } from "../../types/OperativeBase"
import { Weapon } from "../../types/Weapon"
import { CarapaceArmorBase, MediKitBase } from "../BaseEquipment"
import { BolterBase, BoltPistolBase, HeavyBolterBase, HotshotLasgunBase, HotshotLaspistolBase, LasCarbineBase, LasgunBase, LaspistolBase, LonglasBase, MeltagunBase, PlasmaGunBase, PlasmaPistolBase } from "../weapons/BaseWeapons"
import { Autocannon, MissileLauncher, Mortar } from "../weapons/GenericWeapons"
import { Chainsword, GenericAndImperialWeaponsList, HeavyBolter } from "../weapons/ImperialWeapons"
import { Inaccurate, Range, SplitFire } from "../weapons/WeaponSpecialRules"
import { Assault, Combat, Grenade, Heavy, Pistol, Rifle } from "../weapons/WeaponTypes";

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

export const MediKit : Equipment = 
{
    ...MediKitBase,
    pt:4
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

export const CarapaceArmor : Equipment = 
{
    ...CarapaceArmorBase,
    pt:3
}

export const GravChute : Equipment = 
{
    name: "Grav Chute",
    effect: "Do not set this Operative up at the start of the game and ignore their activation during Turn 1. During Turn 2, before activating them anywhere on the board beyond 6” of an enemy. Maximum of three per crew.",
    pt:4,
}

export const LasPistol : Weapon = {
    ...LaspistolBase,
    pt:0
}

export const BoltPistol : Weapon = {
    ...BoltPistolBase,
    pt:1,
}

export const HotshotLaspistol : Weapon = {
    ...HotshotLaspistolBase,
    pt:1
}

export const PlasmaPistol : Weapon = {
    ...PlasmaPistolBase,
    pt:5
}

export const LasCarbine : Weapon = {
    ...LasCarbineBase,
    pt:0
}

export const Meltagun : Weapon = {
    ...MeltagunBase,
    pt:5
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

export const Lasgun : Weapon = {
    ...LasgunBase,
    pt:0
}

export const Bolter : Weapon = {
    ...BolterBase,
    pt:2
}

export const HotshotLasgun : Weapon = {
    ...HotshotLasgunBase,
    pt:1
}

export const PlasmaGun : Weapon = {
    ...PlasmaGunBase,
    pt:5
}

export const Longlas : Weapon = {
    ...LonglasBase,
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
    LasPistol,
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
    operativeTypes:[Guardsman, Veteran,Scion,Officer,Ratling,Ogryn],
    weapons:CombineWeaponsLists(GuardWeapons,GenericAndImperialWeaponsList),
    equipment:[MediKit, VoxRelay, Commissar,CamoCloak,CarapaceArmor,GravChute],
    ability:Orders
}