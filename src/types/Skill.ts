import { StatModifier } from "./StatModifier"
import { StatRequirement } from "./StatRequirement"

export type Skill = {
    name:string
    effect:string
    modifier?:StatModifier,
    requirement?:StatRequirement
    pt:number
}

export default Skill;