import Weapon from "../../../types/Weapon";
import WeaponSource from "../../../types/WeaponSource";
import {
  RapidFire,
  Aim,
  Headshot,
  Range,
} from "../../weapons/WeaponSpecialRules";
import { Assault, Combat, Heavy } from "../../weapons/WeaponTypes";

const source: WeaponSource = "Faction";

export const BoltCarbine: Weapon = {
  name: "Bolter",
  profiles: [
    {
      types: [Assault],
      attack: 3,
      dam: 4,
      ap: 0,
      special: [RapidFire],
    },
  ],
  pt: 2,
  source: source,
};

export const MarineCombatKnife: Weapon = {
  name: "Marine Combat Knife",
  profiles: [
    {
      types: [Combat],
      attack: 3,
      dam: 2,
      ap: 0,
      special: [],
    },
  ],
  pt: 2,
  notes: "Space Marines and Scouts only.",
  source: source,
};

export const MarineShotgun: Weapon = {
  name: "Machine Shotgun",
  profiles: [
    {
      types: [Assault],
      attack: 2,
      dam: 5,
      ap: 0,
      special: [Range(8)],
    },
  ],
  pt: 1,
  source: source,
};

export const MarineSniperRifle: Weapon = {
  name: "Machine Sniper Rifle",
  profiles: [
    {
      types: [Heavy],
      attack: 3,
      dam: 4,
      ap: -1,
      special: [Aim, Headshot],
    },
  ],
  pt: 5,
  source: source,
};

export const AstartesWeaponList: Weapon[] = [
  BoltCarbine,
  MarineCombatKnife,
  MarineShotgun,
  MarineSniperRifle,
];
export default AstartesWeaponList;
