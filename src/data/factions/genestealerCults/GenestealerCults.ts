import Faction from "../../../types/Faction"
import FactionAbility from "../../../types/FactionAbility"
import GenericWeaponsList from './../../weapons/GenericWeapons';
import onlyUnique from './../../../functions/OnlyUnique';

import { ReactComponent as icon} from '../../../Images/factionIcons/GenestealerCults.svg'
import background from '../../../Images/factionIcons/GenestealerCults.svg'
import GenestealerCultEquipment from "./GenestealerCultEquipment";
import GenestealerCultOperatives from "./GenestealerCultOperatives";
import GenestealerCultsWeapons from "./GenestealerCultWeapons";
import ImperialWeaponsList from "../../weapons/ImperialWeapons";
import GenestealCultPsychicPowers from "./GenestealerCultPsychic";
const Name : string = "Genestealer Cults"

export const SeizeTheInitiative:FactionAbility =
{
    name: "Seize the Initiative",
    effect:"Once per game, immediately before rolling to see who goes first, you can activate Power from Pain. For that turn, +2 on Injury Rolls and the ‘Winded’ result doesn’t confer an Evade token and leaves the Operative on d3 wounds. In addition, for that turn the value of all Poison is increased by 1."
}

export const GenestealerCults : Faction =
{
    name:Name,
    slug:"genestealerCults",
    icon: icon,
    background:background,
    quote:"\"In the sunless body of our Hive, the flock of the faithful grows. We are guided by our Great Father's sacred vision, protected by his loving hands. Within these holy shadows we dwell, while the impure bathe in spire-top starlight. And what lies between those stars? What sails beyond those distant suns? Shrouded in night, borne within that eternal black: Our redeemers, our Gods -- truer than the silent, long-dead Emperor -- the Children of the Void. We hear them in our dreams, we feel them in our blood. They call and we will answer. We will rise and claim the engines of labour that have bound us in servitude. This world will burn. It will be cleansed, purified, made ready, and the Heavens will deliver our reward!\"",
    attribution:"Unknown Genestealer Cult Magus",
    operativeTypes:GenestealerCultOperatives,
    weapons:[...GenestealerCultsWeapons, ...ImperialWeaponsList, ...GenericWeaponsList].filter(onlyUnique),
    equipment:GenestealerCultEquipment,
    psychicPowers:GenestealCultPsychicPowers,
    ability:[SeizeTheInitiative]
}