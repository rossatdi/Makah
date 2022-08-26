import CombineWeaponsLists from "../../../functions/CombineWeaponsLists"
import Faction from "../../../types/Faction"
import FactionAbility from "../../../types/FactionAbility"
import OperativeBase from "../../../types/OperativeBase"
import { GenericAndImperialWeaponsList } from "../../weapons/ImperialWeapons"
import GuardEquipment from "./ImperialGuardEquipment"
import GuardWeapons from "./ImperialGuardWeapons"

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
    type:"Officer",
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

export const ImperialGuard : Faction =
{
    name:"Imperial Guard",
    slug:"guard",
    quote:"\"Men, we are the first, last and often only line of defence the Imperium has against what is out there. You and that fine piece of Imperial weaponry you hold in your hands is all that is keeping humanity alive. Most of you will probably not live to see your second year in the Guard and most of you will probably never see your homeworlds again, but I can guarantee you that when you do fall, with a prayer to the most high and mighty God-Emperor on your lips, you will have earned the right to call yourself a man!\" ",
    attribution:"Staff Sergeant Vermak, 12th Cadian Shock Regiment",
    operativeTypes:[Guardsman, Veteran,Scion,Officer,Ratling,Ogryn],
    weapons:CombineWeaponsLists(GuardWeapons,GenericAndImperialWeaponsList),
    equipment:GuardEquipment,
    ability:Orders
}