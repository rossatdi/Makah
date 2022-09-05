import Faction from "../../../types/Faction"
import FactionAbility from "../../../types/FactionAbility"
import GenericWeaponsList from '../../weapons/GenericWeapons';
import ImperialWeaponsList from '../../weapons/ImperialWeapons';
import onlyUnique from '../../../functions/OnlyUnique';
import ChaosCultOperatives from './ChaosCultOperatives'
import ChaosCultWeapons from './ChaosCultWeapons'
import ChaosCultEquipment from './ChaosCultEquipment'
import { ReactComponent as icon} from '../../../Images/factionIcons/ChaosCults.svg'
import background from '../../../Images/factionIcons/ChaosCults.svg'
import ChaosCultPsychicPowers from "./ChaosCultPsychic";

const Name : string = "Chaos Cult"


export const SacrificeToTheDarkGods :FactionAbility =
{
    name: "Sacrifice to the Dark Gods",
    effect:"Pick a friendly Operative, immediately make an injury roll for them. The give every enemy Operative that can see them an Evade token.",
    restrictons:"Black Legion / Word Bearer Only"
}

export const TerrorAndDissent :FactionAbility =
{
    name: "Terror and Dissent",
    effect:"Pick three enemy Operative initiative cards and look at them. Put them back in any order.",
    restrictons:"Alpha Legion / Night Lords Only"
}

export const IronWithinIronWithout :FactionAbility =
{
    name: "Iron Within, Iron Without",
    effect:"Ignore the AP of enemy weapons this round.",
    restrictons:"Iron Warrior Only"
}


export const ChaosCult : Faction =
{
    name:Name,
    slug:"chaosCult",
    icon: icon,
    background:background,
    quote:"\"Every moment of anger, hate, deceit, pain, suffering, pleasure, and desire is mirrored in the power of Chaos. When its legions march, they march to return upon us a ruin that is of our own making.\"",
    attribution:"Arenal, Aeldari Farseer",
    operativeTypes:ChaosCultOperatives,
    weapons:[...ChaosCultWeapons, ...GenericWeaponsList, ...ImperialWeaponsList].filter(onlyUnique),
    equipment:ChaosCultEquipment,
    psychicPowers:ChaosCultPsychicPowers,
    ability:[SacrificeToTheDarkGods,TerrorAndDissent,IronWithinIronWithout]
}