import onlyUnique from "../../functions/OnlyUnique";
import Weapon from "../../types/Weapon";
import WeaponBlock from "../components/weaponsBlock/WeaponsBlock";
import { Factions } from './../../data/factions/Factions';

const weapons: Weapon[] = 
[...Factions.flatMap(o=>o.weapons)].filter(onlyUnique);

const allWeapons = () => {
  console.log(weapons);
  return (<div>
    <h1>ALL WEAPONS</h1>
    {WeaponBlock(weapons, "")}
  </div>
)};

export default allWeapons;
