import CombineWeaponsLists from "../../../functions/CombineWeaponsLists";
import Faction from "../../../types/Faction";
import FactionAbility from "../../../types/FactionAbility";
import { GenericAndImperialWeaponsList } from "../../weapons/ImperialWeapons";
import InquisitionEquipment from "./InquisitionEquipment";
import ImperialOperatatives from "./InquisitionOperatives";
import InquisitionWeaponsList from "./InquisitionWeapons";

const Name : string = "Forces of the Inquisition"

export const UnrelentingHatred : FactionAbility =
{
    name: "Unrelenting Hatred",
    effect:"Once per game, immediately before rolling to see who goes first, your Inquisitor may activate Unrelenting Hatred. Until the end of that turn, your Inquisitors re-rolls all 1s."
}

export const Inquisition : Faction =
{
    name:Name,
    slug:"inquisition",
    quote:"The Inquisition, formally called the Holy Orders of the Emperor's Inquisition, is a secret organisation that exists outside of the standard administrative hierarchy of the Imperium of Man. The Inquisition acts as the secret police force of the Imperium, hunting down any and all of the myriad threats to the stability of the God-Emperor's realm.",
    operativeTypes:ImperialOperatatives, 
    operativeNotes:["Your Leader must be an Inquisitor","You must pick an Ordo for your faction."],
    weapons:CombineWeaponsLists(InquisitionWeaponsList,GenericAndImperialWeaponsList),
    equipment:InquisitionEquipment,
    ability:UnrelentingHatred
}

