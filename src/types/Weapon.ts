import { Point } from "./Point"
import { WeaponSpecialRule } from "./WeaponSpecialRule"
import { DiceCalc } from "./DiceCalc"
import { WeaponType } from "./WeaponType"


export type Profile = 
{
    name:string
    attack:number | DiceCalc
    dam:number | DiceCalc
    ap:number
    special:WeaponSpecialRule[]
}

export type WeaponBase = 
{
    name:string
    types:WeaponType[]
    attack:number | DiceCalc
    dam:number | DiceCalc
    ap:number
    special:WeaponSpecialRule[]
    notes?:string
}


export type ProfileWeaponBase =
{
    name:string
    types:WeaponType[]
    profiles:Profile[]
    notes?:string

}

export type Weapon = (WeaponBase | ProfileWeaponBase) & 
{    
    pt:Point
}
export function hasProfiles(value: WeaponBase | ProfileWeaponBase): value is ProfileWeaponBase {
    return value.hasOwnProperty('profiles');
}