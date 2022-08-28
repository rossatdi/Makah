import GenericWeaponsList from "../../data/weapons/GenericWeapons";
import WeaponBlock from "../components/weaponsBlock/WeaponsBlock";

const genericWeapons = () => <div>
        <h1>GENERIC WEAPONS</h1>
        <p>Equivalents of these weapons are available to any faction and represent low quality or fundamentally pervasive weapons
designs. Don't mistake ubiquity for inefficiency however, some things are popular for a reason.</p>
        {WeaponBlock(GenericWeaponsList, "")}
    </div>


export default genericWeapons;