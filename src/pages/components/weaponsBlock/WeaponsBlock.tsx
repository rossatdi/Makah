import Weapon from "../../../types/Weapon"
import  GlossaryOverlay  from "./../GlossaryOverlay"
import './WeaponsBlock.css'
import {useState} from "react";
import compare from "../../../functions/CaseIndifferentStringCompare";
import { Table } from "react-bootstrap";
import Note from "../../../types/Note";
import { NoteIcons } from "../Notes";



function clamp(val:number, min:number, max:number): number {
    return val > max ? max : val < min ? min : val;
}

export const weaponSorting  = (a:Weapon, b:Weapon) : number => {
        
    const aVal = a.profiles[0].types[0];
    const bVal = b.profiles[0].types[0];
    const h = clamp(aVal.ordering-bVal.ordering, -1,1)
    if(h!==0) return h
    return a.name.localeCompare(b.name);
}


export const weaponFilter = (a:Weapon, str:string) : boolean => {
    return str.split(",").every(s=>{
        s=s.trim()
        let ret : boolean = false;
    
        if(compare(a.name,s)) ret = true;
        if(a.notes && compare(a.notes,s)) ret = true;
        if(compare(a.source,s)) ret = true;
        if(compare(a.pt.toString(),s)) ret = true;
        a.profiles.forEach(p=>{
            if(p.name && compare(p.name,s)) ret = true;
            if(compare(p.attack.toString(),s)) ret = true;
            if(compare(p.dam.toString(),s)) ret = true;
            if(compare(p.ap.toString(),s)) ret = true;
            p.types.forEach(t=>{
                if(compare(t.name,s)) ret = true;
            })
            p.special.forEach(t=>{
                if(compare(t.name,s)) ret = true;
            })
        })
        return ret;
    })
}


export function weaponMap(weapon:Weapon, index:number, bold:boolean, addNote:(str: string) => Note){
    let name = weapon.name;
    if(weapon.notes) {
        const n  = addNote(weapon.notes);
        name = name +" " + n.icon
    }
    if(weapon.profiles.length>1)
    {
        return <><tr className={bold ? "bold" : ""} key={index}>
            <td>{name}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td rowSpan={3}>{weapon.pt}</td>
            <td rowSpan={3}>{weapon.source}</td>
        </tr>
        {weapon.profiles.map((o,i)=>{
            return <tr className={bold ? "bold" : ""} key={index+"-"+i}>
            <td>🠺{o.name}</td>
            <td>{o.types.map((p,j)=>GlossaryOverlay({ skill:p, item:<p key={j} className="skillName">{p.name}</p>}))}</td>
            <td>{o.attack}</td>
            <td>{o.dam}</td>
            <td>{o.ap}</td>
            <td>{o.special.map((p,j)=>GlossaryOverlay({ skill:p, item:<p key={j} className="skillName">{p.name}</p>}))}</td>
        </tr>
        })}
        </>
    }
    else{
        return <tr className={bold ? "bold" : ""} key={index}>
            <td>{name}</td>
            <td>{weapon.profiles[0].types.map((p,j)=>GlossaryOverlay({ skill:p, item:<p key={j} className="skillName">{p.name}</p>}))}</td>
            <td>{weapon.profiles[0].attack}</td>
            <td>{weapon.profiles[0].dam}</td>
            <td>{weapon.profiles[0].ap}</td>
            <td>{weapon.profiles[0].special.map((p,j)=>GlossaryOverlay({ skill:p, item:<p key={j} className="skillName">{p.name}</p>}))}</td>
            <td>{weapon.pt}</td>
            <td>{weapon.source}</td>
        </tr>
    }
}

export const WeaponBlock = (weapons : Weapon[], source:string, showFilter:boolean = true) => {
    const icons = [...NoteIcons]
    const noteMap : Note[] = []
    const [query, setFilter] = useState("")
    const addNote = (str :string) => { 
        let note = noteMap.find(o=>o.text === str)
        if(!note){
            const icon = icons.shift() ?? "";
            note = {icon:icon, text:str}
            noteMap.push(note)
        }
        return note}
    var filteredWeapons = weapons.filter(w=>weaponFilter(w,query)).sort(weaponSorting)
    return (
        <div className="weaponsBlock">
            {showFilter && <input placeholder="Filter" onChange={e=>setFilter(e.target.value)}/>}
            <Table striped responsive>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Atk</th>
                    <th>Dam</th>
                    <th>AP</th>
                    <th>Special</th>
                    <th>Points</th>
                    <th>Source</th>
                </tr>
                </thead>
                <tbody>
                    {filteredWeapons.map((weapon, index)=> weaponMap(weapon, index, weapon.source === source, addNote))}
                </tbody>
            </Table>
            <ul>
                {noteMap.map(o=><li>{`${o.icon} ${o.text}`}</li>)}
            </ul>
        </div>
    )
}

export default WeaponBlock
