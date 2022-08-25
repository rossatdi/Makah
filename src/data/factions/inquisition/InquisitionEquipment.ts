import { CarapaceArmorBase } from "../../BaseEquipment";
import Equipment from "../../../types/Equipment";

export const ServoSkull: Equipment =
{
    name:"Servo Skull",
    effect:"When Shooting a target with a Evade token roll a dice, on a 4+ they cannot Evade.",
    pt:4
}

export const MIU: Equipment =
{
    name:"MIU",
    effect:"Add to one pistol or assault weapon. That weapon can be fired as an additional Shoot action at Bs 5+ that neither costs actions or stops the Operative carrying out a normal Shoot. The weapon can be fired normally instead.",
    pt:4
}

export const CombatStimms: Equipment =
{
    name:"CombatStimms",
    effect:"Operative can use when activating. Gain 1 action and take d3-1 Damage.",
    pt:5
}

export const ArtificerWeapon: Equipment =
{
    name:"Artificer Weapon",
    effect:"Chosen weapon gains +1 Damage or -1 AP.",
    pt:2
}

export const RefactorField: Equipment =
{
    name:"Refactor Field",
    effect:"points: Ignore the first -1AP of a weapon.",
    pt:5
}

export const PowerArmor: Equipment =
{
    name:"Power Armor",
    effect:"Increase save from 4+ to 3+.",
    modifier:{sv:-1},
    requirement:{sv:4},
    pt:5
}

export const CarapaceArmor: Equipment =
{...CarapaceArmorBase, pt:2} 

export const InquisitionEquipment : Equipment[] =
[ServoSkull,MIU,CombatStimms,ArtificerWeapon,RefactorField,PowerArmor,CarapaceArmor]

export default InquisitionEquipment;