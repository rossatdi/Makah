import Faction from "../../../types/Faction";
import FactionAbility from "../../../types/FactionAbility";
import onlyUnique from './../../../functions/OnlyUnique';
import GenericWeaponsList from './../../weapons/GenericWeapons';
import LootedImperialWeaponsList from "../../weapons/LootedImperialWeapons";
import OrkEquipment from "./OrkEquipment";
import OrkOperatives from "./OrkOperatives";
import OrkWeapons from "./OrkWeapons";
const Name : string = "Orks"

export const Waaaagh : FactionAbility =
{
    name: "Waaaagh!",
    effect:"Once per game, immediately before rolling to see who goes first, you may call a Waaaagh! That turn you can roll two dice for Impact Hits, and gain +1” to Charge moves."
}

export const Orks : Faction =
{
    name:Name,
    slug:"orks",
    quote:"Orks are the most successful species in the whole Galaxy, outnumbering possibly every other race. However, due to their aggressive and warlike nature, this massive race is split into hundreds of tiny empires, warring as much between themselves as against other races. In the purely theoretical event all the Orks were to unite, they would undoubtedly crush all opposition.\n\n Small Ork warbands often operate ahead of a main force, looking for opportunities to cause mischief and loot.",
    operativeTypes:OrkOperatives, 
    operativeNotes:["Your Leader must be a Nob, unless you’re running pure Grots for some reason."],
    weapons:[...OrkWeapons, ...GenericWeaponsList,...LootedImperialWeaponsList].filter(onlyUnique),
    equipment:OrkEquipment,
    ability:Waaaagh
}

