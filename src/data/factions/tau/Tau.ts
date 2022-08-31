import Faction from "../../../types/Faction"
import FactionAbility from "../../../types/FactionAbility"
import GenericWeaponsList from './../../weapons/GenericWeapons';
import onlyUnique from "../../../functions/OnlyUnique"
import { ReactComponent as icon} from '../../../Images/factionIcons/Tau.svg'
import background from '../../../Images/factionIcons/Tau.svg'
import TauOperatives from "./TauOperatives";
import TauWeapons from "./TauWeapons";
import TauEquipment from "./TauEquipment";

const Name : string = "Tau"

export const TargetingPulse : FactionAbility = 
{
    name:"TargetingPulse",
    effect:"Once per game, immediately before rolling to see who goes first, you can activate a Targeting Pulse. Immediately place d3+2 marker tokens on enemy operatives."
}

export const Tau : Faction =
{
    name:Name,
    slug:"tau",
    icon: icon,
    background:background,
    quote:"The T'au claim to be a peaceful species when possible, asking if others will join their cause voluntarily instead of fighting against them. However, if their peaceful overtures are refused, the T'au may well decide to conquer a planet and add it to their growing interstellar empire for the Greater Good, searing the flesh from the bones of anyone who stands against their benign intentions. Tau infiltration units are often sent ahead of a main force to scout deployment strengths, and in some cases to spread propaganda.",
    operativeTypes:TauOperatives,
    operativeNotes:["Your Leader must be an Officer"],
    weapons:[...TauWeapons,...GenericWeaponsList].filter(onlyUnique),
    equipment:TauEquipment,
    ability:TargetingPulse
}