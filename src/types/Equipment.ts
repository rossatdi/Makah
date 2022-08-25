import Point from "./Point"
import { StatModifier } from "./StatModifier"
import { StatRequirement } from "./StatRequirement"

export type EquipmentBase = 
{
    name:string
    effect:string
    modifier?:StatModifier,
    requirement?:StatRequirement
}

export type Equipment = EquipmentBase & {
    pt:Point
}

export default Equipment;