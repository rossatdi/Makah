import Faction from "../../../types/Faction"
import FactionAbility from "../../../types/FactionAbility"
import GenericWeaponsList from './../../weapons/GenericWeapons';
import onlyUnique from './../../../functions/OnlyUnique';
import CraftworldOperatives from "./CraftworldOperatives";
import CraftWorldWeapons from "./CraftworldWeapons";
import CraftworldEquipment from "./CraftworldEquipment";

import { ReactComponent as icon} from '../../../Images/factionIcons/Craftworld.svg'
import background from '../../../Images/factionIcons/Craftworld.svg'
import CraftworldPsychicPowers from "./CraftworldPsychic";

const Name : string = "Craftworld Eldar"

export const Bladestorm:FactionAbility =
{
    name: "Bladestorm",
    effect:"Once per game, immediately before rolling to see who goes first, you can activate Bladestorm. For that turn, Shuriken weapons trigger the effect of Rending on a 4+ and add 1” to their #Dash#"
}

export const Craftworld : Faction =
{
    name:Name,
    slug:"craftworld",
    icon: icon,
    background:background,
    quote:"The Aeldari Empire was without equal, and they counted themselves masters of the stars. But over ten millennia ago, the Aeldari's overweening pride and their fall into hedonistic practices led to a cataclysm that all but eradicated their kind and led to the birth of the Chaos God Slaanesh.",
    operativeTypes:CraftworldOperatives,
    weapons:[...CraftWorldWeapons, ...GenericWeaponsList].filter(onlyUnique),
    equipment:CraftworldEquipment,
    psychicPowers:CraftworldPsychicPowers,
    ability:[Bladestorm]
}