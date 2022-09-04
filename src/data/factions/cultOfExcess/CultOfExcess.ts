import Faction from "../../../types/Faction"
import FactionAbility from "../../../types/FactionAbility"
import GenericWeaponsList from './../../weapons/GenericWeapons';
import onlyUnique from './../../../functions/OnlyUnique';

import { ReactComponent as icon} from '../../../Images/factionIcons/Slaanesh.svg'
import background from '../../../Images/factionIcons/Slaanesh.svg'
import CultOfExcessOperatives from "./CultOfExcessOperatives";
import CultOfExcessWeapons from "./CultOfExcessWeapons";
import CultOfExcessEquipment from "./CultOfExcessEquipment";
import ImperialWeaponsList from "../../weapons/ImperialWeapons";
import ChaosCultWeapons from "../chaosCult/ChaosCultWeapons";
import CultOfExcessPsychicPowers from "./CultOfExcessPsychic";

const Name : string = "Cult of Excess"

export const ThePerfectBlow:FactionAbility =
{
    name: "The Perfect Blow:",
    effect:"Once per game, immediately before rolling to see who goes first, you can activate The Perfect Blow. That turn, when each Operative activates they may to gain +1 Bs or +1 Ws for one Shoot or Fight action."
}

export const CultOfExcess : Faction =
{
    name:Name,
    slug:"slaanesh",
    icon: icon,
    background:background,
    quote:"Raise buildings and sing songs in My Glory. In My name, pursue your arts and enshrine all beauty. Let all people follow their every desire, sate their every hunger, and deny themselves no adventure. For it is in these things, and in others, that you will find the greatest pleasure, and it is through these things, and through each other, that you shall rise yourselves higher, even unto the steps of My throne. You will take pleasure in all that is, though your bodies will break and your souls be forfeit. For I am Slaanesh, most jealous of gods, and most demanding of lovers, and My thirst for you shall never be sated...",
    attribution:"The Satin Throne, Verses 1-7, from the Liber Chaotica",
    operativeTypes:CultOfExcessOperatives,
    weapons:[...CultOfExcessWeapons, ...ImperialWeaponsList, ...ChaosCultWeapons, ...GenericWeaponsList].filter(onlyUnique),
    equipment:CultOfExcessEquipment,
    psychicPowers:CultOfExcessPsychicPowers,
    ability:[ThePerfectBlow]
}