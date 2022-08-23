import { CombineWeaponsLists } from "../../functions/CombineWeaponsLists";
import { Equipment } from "../../types/Equipment";
import { Faction } from "../../types/Faction";
import { FactionAbility } from "../../types/FactionAbility";
import { OperativeBase } from "../../types/OperativeBase";
import { Weapon } from "../../types/Weapon";
import { CarapaceArmorBase } from "../BaseEquipment";
import { CondemnorStakeBase, NeedlePistolBase, NeedleRifleBase } from "../weapons/BaseWeapons";
import { GenericAndImperialWeaponsList } from "../weapons/ImperialWeapons";
import { Dangerous, IgnoresCover, Indirect, NonLethal, Range, Stun, Torrent } from "../weapons/WeaponSpecialRules";
import { Assault, Combat, Rifle } from "../weapons/WeaponTypes";

export const NeedlePistol : Weapon = 
{
    ...NeedlePistolBase,
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

export const CondemnnorStake : Weapon = 
{
    ...CondemnorStakeBase,
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
    ...NeedleRifleBase,
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

export const ServoSkull: Equipment =
{
    name:"Servo Skull",
    effect:"When Shooting a target with a Evade token roll a dice, on a 4+ they cannot Evade.",
    pt:4
}

export const MIU: Equipment =
{
    name:"MIU",
    effect:"Add to one pistol or assault weapon. That weapon can be fired as an additional Shoot action at Bs 5+ that neither costs actions or stops the Operative carrying out a normal Shoot. The weapon can be fired normally instead.",
    pt:4
}

export const CombatStimms: Equipment =
{
    name:"CombatStimms",
    effect:"Operative can use when activating. Gain 1 action and take d3-1 Damage.",
    pt:5
}

export const ArtificerWeapon: Equipment =
{
    name:"Artificer Weapon",
    effect:"Chosen weapon gains +1 Damage or -1 AP.",
    pt:2
}

export const RefactorField: Equipment =
{
    name:"Refactor Field",
    effect:"points: Ignore the first -1AP of a weapon.",
    pt:5
}

export const PowerArmor: Equipment =
{
    name:"Power Armor",
    effect:"Increase save from 4+ to 3+.",
    modifier:{sv:-1},
    requirement:{sv:4},
    pt:5
}

export const CarapaceArmor: Equipment =
{...CarapaceArmorBase, pt:2} 

export const UnrelentingHatred : FactionAbility =
{
    name: "Unrelenting Hatred",
    effect:"Once per game, immediately before rolling to see who goes first, your Inquisitor may activate Unrelenting Hatred. Until the end of that turn, your Inquisitors re-rolls all 1s."
}

export const Inquisitor : OperativeBase =
{
    type:"Inquisitor",
    mv:6,
    ws:3,
    bs:3,
    act:3,
    wnd:9,
    sv:4,
    pt:30
}

export const Acolyte : OperativeBase =
{
    type:"Acolyte",
    mv:6,
    ws:4,
    bs:4,
    act:2,
    wnd:6,
    sv:5,
    pt:10
}

export const Warrior : OperativeBase =
{
    type:"Warrior",
    mv:6,
    ws:3,
    bs:4,
    act:2,
    wnd:8,
    sv:5,
    pt:15
}

export const InquisitionWeaponsList : Weapon[] =
[NeedlePistol,Webber,PsyberEagle,CondemnnorStake,Incinerator,NeedleRifle,DeamonWeapon,PhaseBlade]

export const Inquisition : Faction =
{
    name:"Forces of the Inquisition",
    slug:"inquisition",
    operativeTypes:[Inquisitor,Acolyte,Warrior],
    weapons:CombineWeaponsLists(InquisitionWeaponsList,GenericAndImperialWeaponsList),
    equipment:[ServoSkull,MIU,CombatStimms,ArtificerWeapon,RefactorField,PowerArmor,CarapaceArmor],
    ability:UnrelentingHatred
}

