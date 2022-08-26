import Point from "./Point"
import WeaponSpecialRule from "./WeaponSpecialRule"
import DiceCalc from "./DiceCalc"
import WeaponType from "./WeaponType"

export type Profile = 
{
    name:string
    types:WeaponType[]
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

type WeaponBase = 
{
    types:WeaponType[]
    attack:number | DiceCalc
    dam:number | DiceCalc
    ap:number
    special:WeaponSpecialRule[]

}


type ProfileWeaponBase =
{

    profiles:Profile[]
}

export type Weapon = (WeaponBase | ProfileWeaponBase) & 
{    
    name:string
    notes?:string
    pt:Point
    modifiers?:WeaponModifier[]
}
export function hasProfiles(value: WeaponBase | ProfileWeaponBase): value is ProfileWeaponBase {
    return value.hasOwnProperty('profiles');
}

export default Weapon;