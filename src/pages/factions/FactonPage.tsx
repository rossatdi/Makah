import Faction from "../../types/Faction";
import { OperativeBase } from "../../types/OperativeBase";
import Tile from "../components/tile/Tile";
import WeaponBlock from "../components/weaponsBlock/WeaponsBlock";
import { Table } from 'react-bootstrap';
import Note from "../../types/Note";
import './FactionPage.css'
import { NoteIcons } from "../components/Notes";
import TileDisplay from "../components/tileDisplay/TileDisplay";
import { WeaponTileProps } from "../components/weaponTIle/WeaponTile";
import { getKey } from "../../functions/keys";
import {Helmet} from 'react-helmet'


const OperativesView = (operatives: OperativeBase[]) => {
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
  return (<div>
  <Table striped>
    <thead>
    <tr key={getKey()} >
      <th>Type</th>
      <th>Mv</th>
      <th>Ws</th>
      <th>Bs</th>
      <th>Act</th>
      <th>Wnd</th>
      <th>Sv</th>
      <th>Pt</th>
    </tr>
    </thead>
    <tbody>
    {operatives.map((o,i) => {
      let type = o.type;
      if(o.notes) {
        const n  = addNote(o.notes);
        type = type +" " + n.icon
    }
      return (
      <tr key={getKey()} >
        <td>{type}</td>
        <td>{o.mv}"</td>
        <td>{o.ws}+</td>
        <td>{o.bs}+</td>
        <td>{o.act}</td>
        <td>{o.wnd}</td>
        <td>{o.sv}+</td>
        <td>{o.pt}</td>
      </tr>
    )})}
    </tbody>
  </Table>
  <ul>
    {noteMap.map(o=><li key={getKey()} >{`${o.icon} ${o.text}`}</li>)}
  </ul>
  </div>
)};

const FactionView = ({ faction }: {faction: Faction; }) => {
  const weapons :WeaponTileProps[] = faction.weapons.map(o=>({weapon:o}))

  return (
    <div className="factionView" style={{ backgroundImage:`url(${faction.background})`}}>
      <Helmet>
        <title>{faction.name}</title>
      </Helmet>
      
      <h1>{faction.name}</h1>
      <hr />
      {faction.quote.split("\n").map(o=><p key={getKey()} className="quote">{o}</p>)}
      {faction.attribution && (
          <i>-{faction.attribution}</i>
      )}
      <h3>Operatives</h3>
      {OperativesView(faction.operativeTypes)}
      {faction.operativeNotes && (
        <ul>
          {faction.operativeNotes.map((o) => (
            <li key={getKey()} >{o}</li>
          ))}
        </ul>
      )}
      <h3>Faction Ability</h3>
      {faction.ability.map(o=><Tile key={getKey()} skill={o}/>)}
      
      <h3>Equipment</h3>
      <TileDisplay items={faction.equipment.map(o=> {return{skill:o}})} showFilter={false}></TileDisplay>
      <h3>Weapons</h3>
      <WeaponBlock items={weapons} showFilter={true} source={faction.name}/>
    </div>
  );
};

export default FactionView;
