import Faction from "../../../types/Faction"
import FactionAbility from "../../../types/FactionAbility"
import GenericWeaponsList from './../../weapons/GenericWeapons';
import onlyUnique from './../../../functions/OnlyUnique';
import DeldarOperatives from "./DeldarOperative";
import DeldarWeapons from "./DeldarWeapons";
import DeldarEquipment from "./DeldarEquipment";

import icon from '../../../Images/factionIcons/Deldar.svg'

const Name : string = "Dark Eldar"

export const PowerFromPain:FactionAbility =
{
    name: "Power from Pain",
    effect:"Once per game, immediately before rolling to see who goes first, you can activate Power from Pain. For that turn, +2 on Injury Rolls and the ‘Winded’ result doesn’t confer an Evade token and leaves the Operative on d3 wounds. In addition, for that turn the value of all Poison is increased by 1."
}

export const Deldar : Faction =
{
    name:Name,
    slug:"deldar",
    icon:icon,
    quote:"Dark Eldar revel in piracy, enslavement and torture, and are sadistic in the extreme. Raids make use of various anti-gravity skimmers such as Raiders and Ravagers to launch high speed attacks. They strike with little or no warning, using an interdimensional labyrinth known as the Webway to traverse the galaxy safely and far more quickly than most advanced starfaring species are able to with their Warp jumps.",
    operativeTypes:DeldarOperatives,
    weapons:[...DeldarWeapons, ...GenericWeaponsList].filter(onlyUnique),
    equipment:DeldarEquipment,
    ability:PowerFromPain
}