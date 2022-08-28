import InquisitionWeaponsList from "../../data/factions/inquisition/InquisitionWeapons";
import SistersWeapons from "../../data/factions/sisters/SistersWeapons";
import GenericWeaponsList from "../../data/weapons/GenericWeapons";
import ImperialWeaponsList from "../../data/weapons/ImperialWeapons";
import { LootedImperialWeaponsList } from "../../data/weapons/LootedImperialWeapons";
import onlyUnique from "../../functions/OnlyUnique";
import Weapon from "../../types/Weapon";
import WeaponBlock from "../components/weaponsBlock/WeaponsBlock";
import AstartesWeaponList from "./../../data/factions/astartes/AstartesWeapons";
import ImperialGuardWeapons from "./../../data/factions/imperialGuard/ImperialGuardWeapons";

const weapons: Weapon[] = [
  ...GenericWeaponsList,
  ...ImperialWeaponsList,
  ...LootedImperialWeaponsList,
  ...InquisitionWeaponsList,
  ...AstartesWeaponList,
  ...ImperialGuardWeapons,
  ...SistersWeapons,
  
].filter(onlyUnique);

const allWeapons = () => (
  <div>
    <h1>ALL WEAPONS</h1>
    {WeaponBlock(weapons, "")}
  </div>
);

export default allWeapons;
