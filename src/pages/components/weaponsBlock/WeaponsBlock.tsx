import Weapon from "../../../types/Weapon"
import  GlossaryOverlay  from "./../GlossaryOverlay"
import './WeaponsBlock.css'
import React, {FormEvent, useState} from "react";
import compare from "../../../functions/CaseIndifferentStringCompare";
import { Col, Row, Table, Container, Form } from "react-bootstrap";
import Note from "../../../types/Note";
import { NoteIcons } from "../Notes";
import WeaponTile, { WeaponTileProps } from "../weaponTIle/WeaponTile";
import useScreenSize from '../../../hooks/UseScreenSize'
import ScreenSize from '../../../types/ScreenSize'
import {getKey} from '../../../functions/keys'
import onlyUnique from "../../../functions/OnlyUnique";
import { Attacks, Damage, AP } from "../../../data/GlossaryTerms";



const Selector = ({weapons, state, setFn}:{weapons:Weapon[], state:{ [key: string] : boolean }, setFn(source:string):void}) => {
    return (<Form>
        {weapons.map(o=>o.source).filter(onlyUnique).map(o=><Form.Check key={getKey()}
            type="switch"
            id={`switch-${o}`}
            label={o}
            inline
            checked={state[o]=== undefined || state[o]}
            onChange={(e: FormEvent<HTMLInputElement>) => { setFn(o) }}
        />)}
    
      </Form>)
}

function clamp(val:number, min:number, max:number): number {
    return val > max ? max : val < min ? min : val;
}

export const weaponSorting  = (a:WeaponTileProps, b:WeaponTileProps) : number => {
        
    const aVal = a.weapon.profiles[0].types[0];
    const bVal = b.weapon.profiles[0].types[0];
    const h = clamp(aVal.ordering-bVal.ordering, -1,1)
    if(h!==0) return h
    return a.weapon.name.localeCompare(b.weapon.name);
}

export const weaponTileFilter = (a:WeaponTileProps, str:string) : boolean => {
    return str.split(",").every(s=>{
        s=s.trim()
        let ret : boolean = false;
    
        if(weaponFilter(a.weapon,s)) ret = true
        if(a.type && compare(a.type,s)) ret = true;
        if(a.faction && compare(a.faction,s)) ret = true;
        return ret;
    })
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
        return <React.Fragment key={getKey()} ><tr key={getKey()}   className={bold ? "bold" : ""} >
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
            return <tr key={getKey()}  className={bold ? "bold" : ""}>
            <td>🠺{o.name}</td>
            <td>{o.types.map((p,j)=>GlossaryOverlay({ skill:p, item:<p key={j} className="skillName">{p.name}</p>}))}</td>
            <td>{o.attack}</td>
            <td>{o.dam}</td>
            <td>{o.ap}</td>
            <td>{o.special.map((p,j)=>GlossaryOverlay({ skill:p, item:<p key={j} className="skillName">{p.name}</p>}))}</td>
        </tr>
        })}
        </React.Fragment>
    }
    else{
        return <tr key={getKey()}  className={bold ? "bold" : ""}>
            <td>{name}</td>
            <td>{weapon.profiles[0].types.map((p,j)=>GlossaryOverlay({ skill:p, item:<p key={j} className="skillName">{p.name}</p>}))}</td>
            <td>{weapon.profiles[0].attack}</td>
            <td>{weapon.profiles[0].dam}</td>
            <td>{weapon.profiles[0].ap}</td>
            <td>{weapon.profiles[0].special.sort((a,b)=>a.name.localeCompare(b.name)).map((p,j)=>GlossaryOverlay({ skill:p, item:<p key={j} className="skillName">{p.name}</p>}))}</td>
            <td>{weapon.pt}</td>
            <td>{weapon.source}</td>
        </tr>
    }
}

export const WeaponBlock = ({items, showFilter, showToggles, source}:{items:WeaponTileProps[], showFilter:boolean, showToggles:boolean, source:string}) => {
        const size = useScreenSize();
        const [query, setFilter] = useState("")
        const [sources, setSources] = useState<{ [key: string] : boolean }>({})
        const filtered = items.filter(o=>weaponTileFilter(o,query)).filter(o=>sources[o.weapon.source] === undefined || sources[o.weapon.source] ).sort(weaponSorting)
        const setFn = (source:string) : void =>{ setSources({...sources, [source]:!sources[source]})}
        return (<div className="weaponsBlock">
            {showFilter && <input placeholder="Filter" onChange={e=>setFilter(e.target.value)}/>}
            {showToggles && <Selector weapons={items.map(o=>o.weapon)} state={sources} setFn={setFn} />}
            {size < ScreenSize.lg &&<WeaponTileGrid items={filtered} />}
            {size >= ScreenSize.lg &&<WeaponTable items={filtered} source={source}/>}
            </div>)
      
}

export default WeaponBlock


export const WeaponTileGrid = ({items}:{items:WeaponTileProps[]}) => {
    return(
      <Container>
      <Row>
        {items.map((o) => (
          <Col key={getKey()} xs={12} md={6} lg={4}><WeaponTile key={o.weapon.name} weapon={o.weapon} background={o.background} type={o.type} /></Col>))}
      </Row>
      </Container>)
  }

  export const WeaponTable = ({items, source}:{items:WeaponTileProps[], source:string}) => {
    const icons = [...NoteIcons]
    const noteMap : Note[] = []
    const addNote = (str :string) => { 
        let note = noteMap.find(o=>o.text === str)
        if(!note){
            const icon = icons.shift() ?? "";
            note = {icon:icon, text:str}
            noteMap.push(note)
        }
        return note}
    return(
      <Container>
            <Table striped responsive key={getKey()} >
                <thead key={getKey()} >
                <tr key={getKey()} >
                    <th>Name</th>
                    <th>Type</th>
                    <GlossaryOverlay skill={Attacks} item={<th>Atk</th>}/>
                    <GlossaryOverlay skill={Damage} item={<th>Dam</th>}/>
                    <GlossaryOverlay skill={AP} item={<th>AP</th>}/>
                    <th>Special</th>
                    <th>Points</th>
                    <th>Source</th>
                </tr>
                </thead>
                <tbody>
                    {items.map((x, index)=> weaponMap(x.weapon, index, x.weapon.source === source, addNote))}
                </tbody>
            </Table>
            <ul>
                {noteMap.map(o=><li key={getKey()} >{`${o.icon} ${o.text}`}</li>)}
            </ul>
      </Container>)
  }
