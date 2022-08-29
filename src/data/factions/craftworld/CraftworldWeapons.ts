import Weapon from "../../../types/Weapon";
import { Aim, Blast, Headshot, IgnoresCover, Range, Rending, SplitFire, Torrent } from "../../weapons/WeaponSpecialRules";
import { Assault, Heavy, Pistol, Combat, Grenade } from "../../weapons/WeaponTypes";

const source: string = "Craftworld Eldar";

export const ShurikenPistol: Weapon = {
    name: "Shuriken Pistol",
    profiles: [
      {
        types: [Pistol],
        attack: 3,
        dam: 3,
        ap: 0,
        special: [Rending, Range(6)],
      },
    ],
    pt: 1,
    source: source,
  };

  export const ShurikenCatapult: Weapon = {
    name: "Shuriken Catapult",
    profiles: [
      {
        types: [Assault],
        attack: 3,
        dam: 3,
        ap: 0,
        special: [Rending],
      },
    ],
    pt: 2,
    source: source,
  };

  export const AvengerCatapult: Weapon = {
    name: "Avenger Catapult",
    profiles: [
      {
        types: [Assault],
        attack: 3,
        dam: 3,
        ap: 0,
        special: [Rending, Aim],
      },
    ],
    pt: 3,
    source: source,
  };

  
  export const Lasblaster: Weapon = {
    name: "Lasblaster",
    profiles: [
      {
        types: [Assault],
        attack: 4,
        dam: 2,
        ap: 0,
        special: [Aim],
      },
    ],
    pt: 1,
    source: source,
  };

  export const WraithCannon: Weapon = {
    name: "Wraith-cannon",
    profiles: [
      {
        types: [Assault],
        attack: 2,
        dam: 6,
        ap: -2,
        special: [],
      },
    ],
    pt: 10,
    source: source,
  };

  export const FusionGun: Weapon = {
    name: "Fusion Gun",
    profiles: [
      {
        types: [Assault],
        attack: 2,
        dam: 5,
        ap: -2,
        special: [Range(8)],
      },
    ],
    pt: 5,
    source: source,
  };

  export const DScythe: Weapon = {
    name: "D-scythe",
    profiles: [
      {
        types: [Assault],
        attack: 4,
        dam: 3,
        ap: -1,
        special: [IgnoresCover, Torrent],
      },
    ],
    pt: 10,
    source: source,
  };

  export const DeathSpinner: Weapon = {
    name: "Death-spinner",
    profiles: [
      {
        types: [Assault],
        attack: 3,
        dam: 4,
        ap: -1,
        special: [Blast(1.5), Range(8)],
      },
    ],
    pt: 5,
    source: source,
  };

  export const ShurikenCannon: Weapon = {
    name: "Shuriken Cannon",
    profiles: [
      {
        types: [Heavy],
        attack: 5,
        dam: 3,
        ap: -1,
        special: [Rending],
      },
    ],
    pt: 8,
    source: source,
  };

  export const Starcannon: Weapon = {
    name: "Starcannon",
    profiles: [
      {
        types: [Heavy],
        attack: 3,
        dam: 4,
        ap: -2,
        special: [],
      },
    ],
    pt: 7,
    source: source,
  };

  export const Scatterlaser: Weapon = {
    name: "Scatterlaser",
    profiles: [
      {
        types: [Heavy],
        attack: 5,
        dam: 4,
        ap: 0,
        special: [SplitFire],
      },
    ],
    pt: 8,
    source: source,
  };

  export const RangerLongRifle: Weapon = {
    name: "Ranger Long Rifle",
    profiles: [
      {
        types: [Heavy],
        attack: 3,
        dam: 4,
        ap: -1,
        special: [Headshot, Aim],
      },
    ],
    pt: 5,
    source: source,
  };

  export const ScorpionsClaw: Weapon = {
    name: "Scorpion’s Claw",
    profiles: [
      {
        types: [Combat],
        attack: 3,
        dam: 4,
        ap: -2,
        special: [],
      },
    ],
    pt: 8,
    source: source,
  };

  export const ScorpionChainsword: Weapon = {
    name: "Scorpion Chainsword",
    profiles: [
      {
        types: [Combat],
        attack: 3,
        dam: 4,
        ap: 0,
        special: [],
      },
    ],
    pt: 2,
    source: source,
  };

  export const RuneBlade: Weapon = {
    name: "Rune Blade",
    profiles: [
      {
        types: [Combat],
        attack: 3,
        dam: "D3+2",
        ap: -1,
        special: [],
      },
    ],
    pt: 3,
    source: source,
    notes:"Psyker Only"
  };


  export const DireSword: Weapon = {
    name: "Dire Sword",
    profiles: [
      {
        types: [Combat],
        attack: 3,
        dam: 3,
        ap: -2,
        special: [],
      },
    ],
    pt: 5,
    source: source,
  };

  export const PlasmaGrenade: Weapon = {
    name: "Plasma Grenade",
    profiles: [
      {
        types: [Grenade],
        attack: 2,
        dam: 4,
        ap: -1,
        special: [Range(4), Blast(1.5)],
      },
    ],
    pt: 3,
    source: source,
  };

const CraftWorldWeapons : Weapon[] = [
  ShurikenPistol,
  ShurikenCatapult,
  AvengerCatapult,
  Lasblaster,
  WraithCannon,
  FusionGun,
  DScythe,
  DeathSpinner,
  ShurikenCannon,
  Starcannon,
  Scatterlaser,
  RangerLongRifle,
  ScorpionsClaw,
  ScorpionChainsword,
  RuneBlade,
  DireSword,
  PlasmaGrenade
]

export default CraftWorldWeapons;

