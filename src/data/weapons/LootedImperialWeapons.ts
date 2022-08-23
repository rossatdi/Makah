import { CombineWeaponsLists } from "../../functions/CombineWeaponsLists"
import { Weapon } from "../../types/Weapon"
import { ImperialWeaponsList } from "./ImperialWeapons"
import { GenericWeaponsList } from "./GenericWeapons"

function MakeLootedImperialWeaponsList() : Weapon[]
{
    return ImperialWeaponsList.map(w=>{
        let pt = w.pt
        if(pt !== "-"){
            pt +=1 
        }
        return {...w, pt:pt, name: "Looted "+w.name}
    })
}

export const LootedImperialWeaponsList : Weapon[] = MakeLootedImperialWeaponsList()
export const GenericAndLootedImperialWeaponsList : Weapon[] = CombineWeaponsLists(LootedImperialWeaponsList, GenericWeaponsList)
