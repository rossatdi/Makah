import Weapon from "../../../types/Weapon";
import { NonLethal, Stun,Range, Aim, Inaccurate, Reckless, Rending, Brutal, Blast, Only, Headshot } from "../../weapons/WeaponSpecialRules";
import { Combat, Grenade, Heavy, Pistol } from "../../weapons/WeaponTypes";
import {Webber as BaseWebber } from '../../weapons/BaseWeapons'

const source : string = "Genestealer Cults"


export const WebPistol: Weapon = {
    name: "Web Pistol",
    profiles: [
      {
        types: [Pistol],
        attack:  4,
        dam: 1,
        ap: 0,
        special: [Stun,NonLethal,Range(4)],
      },
    ],
    pt: 1,
    source: source,
  };

  export const Webber: Weapon = {
    ...BaseWebber,
    source: source,
  };

  export const MiningLaser: Weapon = {
    name: "Mining Laser",
    profiles: [
      {
        types: [Heavy],
        attack:  2,
        dam: 6,
        ap: -3,
        special: [Range(8)],
      },
    ],
    pt: 5,
    source: source,
  };

  export const SeismicCannon: Weapon = {
    name: "Seismic Cannon",
    profiles: [
      {
        name:"Long Wave",
        types: [Heavy],
        attack:  6,
        dam: 3,
        ap: -1,
        special: [],
      },
      {
        name:"Short Wave",
        types: [Heavy],
        attack:  3,
        dam: 4,
        ap: -2,
        special: [],
      },
    ],
    pt: 10,
    source: source,
  };

  export const CultSniperRifle: Weapon = {
    name: "Cult Sniper Rifle",
    profiles: [
      {
        types: [Heavy],
        attack:  3,
        dam: 4,
        ap: -1,
        special: [Aim, Headshot],
      },
    ],
    pt: 5,
    source: source,
  };

  export const SmallBonesword: Weapon = {
    name: "Small Bonesword",
    profiles: [
      {
        types: [Combat],
        attack:  3,
        dam: 3,
        ap: 0,
        special: [],
      },
    ],
    pt: 1,
    source: source,
  };

  export const MiningEquipment: Weapon = {
    name: "Mining equipment",
    profiles: [
      {
        types: [Combat],
        attack:  3,
        dam: 5,
        ap: -1,
        special: [Inaccurate],
      },
    ],
    pt: 5,
    source: source,
  };
  
  export const KnifeAndClaws: Weapon = {
    name: "Knife and claws",
    profiles: [
      {
        types: [Combat],
        attack:  3,
        dam: 2,
        ap: 0,
        special: [],
      },
    ],
    pt: 0,
    source: source,
  };

  export const FrontClaws: Weapon = {
    name: "Front Claws",
    profiles: [
      {
        types: [Combat],
        attack:  3,
        dam: 2,
        ap: 0,
        special: [Only("Genestealers")],
      },
    ],
    pt: 0,
    source: source,
  };

  export const GenestealerClaws: Weapon = {
    name: "Genestealer claws",
    profiles: [
      {
        types: [Combat],
        attack:  5,
        dam: 3,
        ap: -1,
        special: [Reckless, Only("Genestealers")],
      },
    ],
    pt: 5,
    source: source,
  };

  export const PurestrainClaws: Weapon = {
    name: "Purestrain claws",
    profiles: [
      {
        types: [Combat],
        attack:  5,
        dam: 3,
        ap: -1,
        special: [Reckless, Rending, Only("Genestealers")],
      },
    ],
    pt: 7,
    source: source,
  };

  export const HeavyImprovisedWeapon: Weapon = {
    name: "Heavy improvised weapon",
    profiles: [
      {
        types: [Combat],
        attack:  2,
        dam: 4,
        ap: -1,
        special: [Brutal(2)],
      },
    ],
    pt: 5,
    source: source,
  };

  export const HeavyPowerWeapon: Weapon = {
    name: "Heavy power weapon",
    profiles: [
      {
        types: [Combat],
        attack:  2,
        dam: 3,
        ap: -2,
        special: [Brutal(2)],
      },
    ],
    pt: 5,
    source: source,
  };
  export const BlastingCharges: Weapon = {
    name: "Blasting Charges",
    profiles: [
      {
        types: [Grenade],
        attack:  3,
        dam: 4,
        ap: -1,
        special: [Range(4),Blast(1.5)],
      },
    ],
    pt: 5,
    source: source,
  };

  const GenestealerCultsWeapons : Weapon[] =
  [
    WebPistol,
    Webber,
    MiningLaser,
    SeismicCannon,
    CultSniperRifle,
    SmallBonesword,
    MiningEquipment,
    FrontClaws,
    GenestealerClaws,
    PurestrainClaws,
    HeavyImprovisedWeapon,
    HeavyPowerWeapon,
    BlastingCharges
  ]

  export default GenestealerCultsWeapons;