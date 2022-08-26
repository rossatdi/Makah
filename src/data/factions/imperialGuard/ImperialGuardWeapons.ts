import Weapon from "../../../types/Weapon"
import { Autocannon, Mortar, MissileLauncher } from "../../weapons/GenericWeapons"
import { Laspistol, BoltPistol, HotshotLaspistol, PlasmaPistol, LasCarbine, Meltagun, Lasgun, Bolter, HotshotLasgun, PlasmaGun, HeavyBolter, Chainsword , Longlas as ImpLonglas} from "../../weapons/ImperialWeapons"
import { Inaccurate, Range } from "../../weapons/WeaponSpecialRules"
import { Assault, Combat } from "../../weapons/WeaponTypes"

export const RipperGun : Weapon = {
    name:"Ripper Gun",
    profiles:[
        {
            name:"Gun",
            types:[Assault],
            attack:5,
            dam:3,
            ap:0,
            special:[Range(8),Inaccurate],
        },
        {
            name:"Knife",
            types:[Combat],
            attack:3,
            dam:4,
            ap:0,
            special:[],
        }
    ],
    pt:3
}

export const Longlas : Weapon = {
    ...ImpLonglas,
    pt:4
}

export const LongKnife : Weapon = {
    name: "Long Knife",
    types:[Combat],
    attack:3,
    dam:3,
    ap:0,
    special:[],
    pt:1
}

export const GuardWeapons : Weapon[] = 
[
    Laspistol,
    BoltPistol,
    HotshotLaspistol,
    PlasmaPistol,
    LasCarbine,
    Meltagun,
    RipperGun,
    Lasgun,
    Bolter,
    HotshotLasgun,
    PlasmaGun,
    Longlas,
    HeavyBolter,
    Autocannon,
    Mortar,
    MissileLauncher,
    LongKnife,
    Chainsword
]
export default GuardWeapons;