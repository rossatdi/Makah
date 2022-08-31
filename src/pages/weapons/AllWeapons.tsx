import onlyUnique from "../../functions/OnlyUnique";
import Weapon from "../../types/Weapon";
import WeaponBlock from "../components/weaponsBlock/WeaponsBlock";
import { Factions } from './../../data/factions/Factions';
import { Link  } from "react-router-dom";

import './AllWeapons.css';

const weapons: Weapon[] = 
[...Factions.flatMap(o=>o.weapons)].filter(onlyUnique);

const allWeapons = () => {
  return (<div>
    <h1>WEAPONS</h1>
    <h5><Link to="/weapons/rules">Special Rules</Link></h5>
    {WeaponBlock(weapons, "")}
  </div>
)};

export default allWeapons;
