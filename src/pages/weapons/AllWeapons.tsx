import onlyUnique from "../../functions/OnlyUnique";
import WeaponBlock from "../components/weaponsBlock/WeaponsBlock";
import { Factions } from './../../data/factions/Factions';
import { Link  } from "react-router-dom";

import './AllWeapons.css';
import { WeaponTileProps } from './../components/weaponTIle/WeaponTile';
import { Helmet } from "react-helmet";

const weapons: WeaponTileProps[] = 
[...Factions.flatMap(o=>o.weapons)]
.filter(onlyUnique)
.map(p=>{
  const collection = Factions.filter(o=>o.name===p.source);
  const single = collection.length === 0 ? null : collection[0];
  return {weapon:p, source:"", background:single ? single.background : "none", faction:single ? single.name : ""}
}
  );

const allWeapons = () => {
  return (<div>
    <Helmet>
      <title>Weapons</title>
    </Helmet>
    <h1>WEAPONS</h1>
    <h5><Link to="/weapons/rules">Special Rules</Link></h5>
    <WeaponBlock items={weapons} showFilter={true} showToggles={false}  source={""}/>

  </div>
)};

export default allWeapons;
