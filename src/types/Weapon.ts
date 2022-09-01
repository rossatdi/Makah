import Point from "./Point"
import WeaponSpecialRule from "./WeaponSpecialRule"
import DiceCalc from "./DiceCalc"
import WeaponType from "./WeaponType"

export type WeaponProfile = 
{
    name?:string
    types:[WeaponType, ...WeaponType[]]
    attack:0|1|2|3|4|5|6 | DiceCalc
    dam:0|1|2|3|4|5|6  | DiceCalc
    ap:0|-1|-2|-3|-4|-5|-6 | `-${DiceCalc}`
    special:WeaponSpecialRule[]
}

export type WeaponModifier = {
    attack?:0|1|2|3|4|5|6 | DiceCalc
    dam?:0|1|2|3|4|5|6  | DiceCalc
    ap?:0|-1|-2|-3|-4|-5|-6 | `-${DiceCalc}`
}

export type Weapon = 
{    
    name:string
    profiles: [WeaponProfile,...WeaponProfile[]]
    notes?:string
    pt:Point
    modifiers?:WeaponModifier[]
    source:string
}

export default Weapon;