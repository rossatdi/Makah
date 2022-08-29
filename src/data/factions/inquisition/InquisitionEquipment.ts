import { CarapaceArmor as CarapaceArmorBase, ServoSkull, MIU as MIUBase } from "../../BaseEquipment";
import Equipment from "../../../types/Equipment";


export const MIU: Equipment =
{
    ...MIUBase,
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