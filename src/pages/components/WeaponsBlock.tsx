import { hasProfiles, Weapon } from "../../types/Weapon"
import  SkillOverlay  from "./SkillOverlay"
import './WeaponsBlock.css'


export const WeaponBlock = (weapons : Weapon[]) => {
    var g = weapons.sort((a,b)=>{
        const h = a.types[0].ordering-b.types[0].ordering
        if(h!==0) return h
        return a.name.localeCompare(b.name);
    })
    return (
        <table className="weaponsBlock">
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Attack</th>
                <th>Dam</th>
                <th>AP</th>
                <th>Special</th>
                <th>Points</th>
            </tr>
            {g.map(weapon=> weaponMap(weapon))}
        </table>
    )
}

export function weaponMap(weapon:Weapon){
    if(hasProfiles(weapon))
    {
        return <><tr>
            <td>{weapon.name}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td rowSpan={3}>{weapon.pt}</td>
        </tr>
        {weapon.profiles.map(o=>{
            return <tr>
            <td>🠺{o.name}</td>
            <td>{weapon.types.map(o=>SkillOverlay(o))}</td>
            <td>{o.attack}</td>
            <td>{o.dam}</td>
            <td>{o.ap}</td>
            <td>{o.special.map(o=>SkillOverlay(o))}</td>
        </tr>
        })}
        </>
    }
    else{
        return <tr>
            <td>{weapon.name}</td>
            <td>{weapon.types.map(o=>SkillOverlay(o))}</td>
            <td>{weapon.attack}</td>
            <td>{weapon.dam}</td>
            <td>{weapon.ap}</td>
            <td>{weapon.special.map(o=>SkillOverlay(o))}</td>
            <td>{weapon.pt}</td>
        </tr>
    }
}
