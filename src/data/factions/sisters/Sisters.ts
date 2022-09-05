import Faction from "../../../types/Faction";
import FactionAbility from "../../../types/FactionAbility"
import ImperialWeaponsList from "../../weapons/ImperialWeapons";
import SistersEquipmentList from "./SistersEquipment";
import SistersOperatives from './SistersOperatives';
import SistersWeapons from './SistersWeapons';
import onlyUnique from './../../../functions/OnlyUnique';
import GenericWeaponsList from "../../weapons/GenericWeapons";

import { ReactComponent as icon} from '../../../Images/factionIcons/Sisters.svg'
import background from '../../../Images/factionIcons/Sisters.svg'

const Name : string = "Sisters of Battle"

export const ShieldOfFaith : FactionAbility = 
{
    name:"Shield of Faith",
    effect:"Once per game, immediately before rolling to see who goes first, you can activate Shield of Faith. That turn all of your Operatives can #Evade# without an #Evade# token. This does not remove #Evade# tokens in play."
}

export const SistersOfBattle : Faction =
{
    name:Name,
    slug:"sisters",
    icon: icon,
    background:background,
    quote:"The Adepta Sororitas, colloquially called the \"Sisterhood,\" whose military arm is also known as the Sisters of Battle, are an all-female division of the Imperium of Man's state church known as the Ecclesiarchy.\nThe Sisterhood's Orders Militant serve as the Ecclesiarchy's armed forces, mercilessly rooting out spiritual corruption and heresy within Humanity and every organisation of the Adeptus Terra.",
    operativeTypes:SistersOperatives,
    weapons:[...SistersWeapons, ...GenericWeaponsList, ...ImperialWeaponsList].filter(onlyUnique),
    equipment:SistersEquipmentList,
    ability:[ShieldOfFaith]
}