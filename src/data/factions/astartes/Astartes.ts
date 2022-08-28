import CombineWeaponsLists from "../../../functions/CombineWeaponsLists"
import Faction from "../../../types/Faction"
import FactionAbility from "../../../types/FactionAbility"
import { GenericAndImperialWeaponsList } from "../../weapons/ImperialWeapons"
import AstartesEquipmentList from "./AstartesEquipment"
import AstartesOperatives from "./AstartesOperatives"
import AstartesWeaponList from "./AstartesWeapons"

export const BolterDiscipline :FactionAbility =
{
    name: "Bolter Discipline",
    effect:"Once per game, immediately before rolling to see who goes first, you may enact Bolter Discipline. For that turn you may ignore the restriction of movement on the Rapid sFire pecial rule for Bolt weapons."
}

export const Astartes : Faction =
{
    name:"Adeptus Astartes",
    slug:"astartes",
    quote:"The Adeptus Astartes are one of the most elite and feared fighting forces in the Imperium of Man. There are far too few Space Marines to form the Imperium's main military forces; instead they operate as highly mobile strike forces. While famous for their brazen shock assaults, Space Marines’ physiology and armour makes them the perfect warriors for long range patrols and infiltration work.",
    operativeTypes:AstartesOperatives,
    weapons:CombineWeaponsLists(AstartesWeaponList,GenericAndImperialWeaponsList),
    equipment:AstartesEquipmentList,
    ability:BolterDiscipline
}