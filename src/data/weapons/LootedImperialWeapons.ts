import Weapon from "../../types/Weapon"
import ImperialWeaponsList from "./ImperialWeapons"

function MakeLootedImperialWeaponsList() : Weapon[]
{
    return ImperialWeaponsList.map(w=>{
        let pt = w.pt
        if(pt !== "-"){
            pt +=1 
        }
        return {...w, pt:pt, name: "Looted "+w.name, source:"Looted"}
    })
}

export const LootedImperialWeaponsList : Weapon[] = MakeLootedImperialWeaponsList()

export default LootedImperialWeaponsList;
