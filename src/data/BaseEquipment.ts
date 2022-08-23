import { EquipmentBase } from "../types/Equipment";

export const CarapaceArmorBase: EquipmentBase =
{
    name:"Carapace Armor",
    effect:"Increase save from 5+ to 4+.",
    requirement:{sv:5},
    modifier:{sv:-1}
}

export const MediKitBase: EquipmentBase =
{
    name:"Medi-Kit",
    effect:"IWhen using the Stabilise action, operatives returned to winded regain d6 wounds.",
}