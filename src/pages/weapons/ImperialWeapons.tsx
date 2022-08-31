import ImperialWeaponsList from "../../data/weapons/ImperialWeapons";
import WeaponBlock from "../components/weaponsBlock/WeaponsBlock";
import { WeaponTileProps } from './../components/weaponTIle/WeaponTile';

const items :WeaponTileProps[] = ImperialWeaponsList.map(o=>({weapon:o}))

const ImperialWeapons = () => <div>
        <h1>IMPERIAL WEAPONS</h1>
        <p>Despite its vast expanses, thanks largely to the technological innovation of the Standard Template Construct, Imperial
forges produce a surprisingly narrow band of weaponry. Any Imperial faction can draw from this list. Because of the sheer
regularity of looting, Orks may also draw from this list but with each weapon costing +1 point.</p>
        <WeaponBlock items={items} showFilter={true} source={""}/>
    </div>


export default ImperialWeapons;