import Faction from "../../../types/Faction"
import FactionAbility from "../../../types/FactionAbility"
import AstartesEquipmentList from "./AstartesEquipment"
import AstartesOperatives from "./AstartesOperatives"
import AstartesWeaponList from "./AstartesWeapons"
import GenericWeaponsList from './../../weapons/GenericWeapons';
import ImperialWeaponsList from './../../weapons/ImperialWeapons';
import onlyUnique from './../../../functions/OnlyUnique';

import { ReactComponent as icon} from '../../../Images/factionIcons/Astartes.svg'
import background from '../../../Images/factionIcons/Astartes.svg'

const Name : string = "Adeptus Astartes"

export const BolterDiscipline :FactionAbility =
{
    name: "Bolter Discipline",
    effect:"Once per game, immediately before rolling to see who goes first, you may enact Bolter Discipline. For that turn you may ignore the restriction of movement on the Rapid sFire pecial rule for Bolt weapons."
}

export const Astartes : Faction =
{
    name:Name,
    slug:"astartes",
    icon: icon,
    background:background,
    quote:"The Adeptus Astartes are one of the most elite and feared fighting forces in the Imperium of Man. There are far too few Space Marines to form the Imperium's main military forces; instead they operate as highly mobile strike forces.\nWhile famous for their brazen shock assaults, Space Marines’ physiology and armour makes them the perfect warriors for long range patrols and infiltration work.",
    operativeTypes:AstartesOperatives,
    weapons:[...AstartesWeaponList, ...GenericWeaponsList, ...ImperialWeaponsList].filter(onlyUnique),
    equipment:AstartesEquipmentList,
    ability:BolterDiscipline
}