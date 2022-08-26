import Point from "./Point"
import StatModifier from "./StatModifier"
import StatRequirement from "./StatRequirement"

export type Equipment = {
    name:string
    effect:string
    modifier?:StatModifier,
    requirement?:StatRequirement
    pt:Point
}

export default Equipment;