import Point from "./Point"
import WeaponSpecialRule from "./WeaponSpecialRule"
import DiceCalc from "./DiceCalc"
import WeaponType from "./WeaponType"

export type WeaponProfile = 
{
    name?:string
    types:[WeaponType, ...WeaponType[]]
    attack:number | DiceCalc
    dam:number | DiceCalc
    ap:number
    special:WeaponSpecialRule[]
}

export type WeaponModifier = {
    attack?:number | DiceCalc
    dam?:number | DiceCalc
    ap?:number
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