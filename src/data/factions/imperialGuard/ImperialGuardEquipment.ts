import Equipment from "../../../types/Equipment"
import { CarapaceArmor, MediKit } from "../../BaseEquipment"


export const VoxRelay : Equipment = 
{
    name:"Vox Relay",
    effect:"Unique action – Pick a friendly Operative, the next time they activate they get 1 extra Action.",
    pt:2
}

export const Commissar : Equipment =
{
    name:"Commissar",
    effect:"Gains a Bolt Pistol and a 4+ save. If this Operative does not have an Evade token, when other friendly visible Operatives activate, on a 6+ they do not lose an action for discarding their Evade token. This Operative may use the Finish Off action against friendly Operatives.",
    pt:5,
    modifier:{sv:1}
}

export const CamoCloak : Equipment = 
{
    name:"Camo Cloak",
    effect:"Re-roll 1s when making Evade rolls.",
    pt:3
}

export const GravChute : Equipment = 
{
    name: "Grav Chute",
    effect: "Do not set this Operative up at the start of the game and ignore their activation during Turn 1. During Turn 2, before activating them anywhere on the board beyond 6” of an enemy. Maximum of three per crew.",
    pt:4,
}

export const ImperialGuardEquipment : Equipment[] =
[
    MediKit, 
    VoxRelay, 
    Commissar,
    CamoCloak,
    CarapaceArmor,
    GravChute
]
export default ImperialGuardEquipment;