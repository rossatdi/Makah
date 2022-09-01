import onlyUnique from "../../../functions/OnlyUnique"
import Faction from "../../../types/Faction"
import FactionAbility from "../../../types/FactionAbility"
import GenericWeaponsList from "../../weapons/GenericWeapons"

import { ReactComponent as icon} from '../../../Images/factionIcons/Necrons.svg'
import background from '../../../Images/factionIcons/Necrons.svg'
import NecronWeapons from "./NecronWeapons"
import NecronOperatives from "./NecronOperatives"
import NecronEquipment from "./NecronEquipment"

const Name : string = "Necrons"

export const ReanimationProtocols: FactionAbility =
{
    name: "Reanimation protocols",
    effect:"Once per game, immediately before rolling to see who goes first, you can activate Reanimation Protocols. This turn get +3 on all Injury Rolls, although a 1 still counts as Critically Injured. In addition, Injured models can activate and but can only use the Stabilise action. In addition, do not remove Injured models at the end of this turn."
}

export const Necrons : Faction =
{
    name:Name,
    slug:"necron",
    icon: icon,
    background:background,
    quote:"The Necrons are a mysterious xenos species of humanoid, robotic skeletal warriors that have lain dormant in their stasis-tombs for more than 60 million Terran years, though they have begun to awaken at last. They are the soulless creations and former servants of the ancient C'tan, the terrible Star Gods of Eldar myth.",
    operativeTypes:NecronOperatives, 
    operativeNotes:["Your Leader must be a Cryptek","Only Crypteks can select equipment"],
    weapons:[...NecronWeapons, ...GenericWeaponsList,].filter(onlyUnique),
    equipment:NecronEquipment,
    ability:ReanimationProtocols
}