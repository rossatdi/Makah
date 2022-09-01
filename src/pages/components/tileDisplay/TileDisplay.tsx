import { useState } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import compare from '../../../functions/CaseIndifferentStringCompare'
import { getKey } from '../../../functions/keys'
import useScreenSize from '../../../hooks/UseScreenSize'
import ScreenSize from '../../../types/ScreenSize'
import Tile, { TileProps } from '../tile/Tile'
import './TileDisplay.css'

export const tileFilter = (a:TileProps, str:string) : boolean => {
  return str.split(",").every(s=>{
      s=s.trim()
      let ret : boolean = false;
  
      if(compare(a.skill.name,s)) ret = true;
      if(compare(a.skill.effect,s)) ret = true;
      if(a.skill.pt && compare(a.skill.pt.toString(),s)) ret = true;
      if(a.type && compare(a.type,s)) ret = true;
      if(a.faction && compare(a.faction,s)) ret = true;
      return ret;
  })
}

export const TileGrid = ({items, showFilter}:{items:TileProps[], showFilter:boolean}) => {
  const [query, setFilter] = useState("")
  const filtered = items.filter(o=>tileFilter(o,query))
  return(
    <Container>
    {showFilter && <input placeholder="Filter" onChange={e=>setFilter(e.target.value)}/>}
    <Row>
      {filtered.map((o) => (
        <Col key={getKey()}  xs={12} md={6} lg={4}><Tile key={o.skill.name} skill={o.skill} background={o.background} type={o.type} /></Col>))}
    </Row>
    </Container>)
}

export const TileTable = ({items, showFilter}:{items:TileProps[], showFilter:boolean}) => {
  const [query, setFilter] = useState("")
  const filtered = items.filter(o=>tileFilter(o,query))
  const showFactions = items.some(o=>o.faction);
  const showType = items.some(o=>o.type);

  return(
    <>
    {showFilter && <input placeholder="Filter" onChange={e=>setFilter(e.target.value)}/>}
    <Table striped responsive key={getKey()} >
      <thead key={getKey()} >
        <tr key={getKey()} >
          <th>Skill</th>
          <th>Effect</th>
          <th>Points</th>
          {showType && <th>Type</th>}
          {showFactions && <th>Faction</th>}
        </tr>
      </thead>
      <tbody>
        {filtered.map(o=><tr key={getKey()} >
        <td>{o.skill.name}</td>
        <td>{o.skill.effect}</td>
        <td>{o.skill.pt}</td>
        {showType && <td>{o.type}</td>}
        {showFactions && <td>{o.faction}</td>}
        </tr>)}
        </tbody>
    </Table>
  </>
)};

const TileDisplay = ({items, showFilter}:{items:TileProps[], showFilter:boolean}) => {
  const size = useScreenSize();
  return (<div>
      {size < ScreenSize.lg &&<TileGrid items={items} showFilter={true}/>}
      {size >= ScreenSize.lg &&<TileTable items={items} showFilter={true}/>}
      </div>)
}

export default TileDisplay;