import Factions from '../../data/factions/Factions';
import onlyUnique from '../../functions/OnlyUnique';
import './EquipmentPage.css'
import { TileProps } from './../components/tile/Tile';
import TileDisplay from '../components/tileDisplay/TileDisplay';

const equipment: TileProps[] = 
[...Factions.flatMap(o=>o.equipment.map(p=> {return{skill:p, background:o.background, faction:o.name}}))].filter(onlyUnique);

const EquipmentPage = () => {
    return (<div>
      <h1>Equipment</h1>
        <TileDisplay items={equipment} showFilter={true}/>
    </div>
  )};
  
  export default EquipmentPage;