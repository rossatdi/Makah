import Weapon from "../../../types/Weapon";
import {
  Rapid,
  Aim,
  Headshot,
  Range,
  Only,
} from "../../weapons/WeaponSpecialRules";
import { Assault, Combat, Heavy } from "../../weapons/WeaponTypes";

const source : string = "Adeptus Astartes"


export const BoltCarbine: Weapon = {
  name: "Bolt Carbine",
  profiles: [
    {
      types: [Assault],
      attack: 3,
      dam: 4,
      ap: 0,
      special: [Rapid],
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
      special: [Only('Space Marines and Scouts')],
    },
  ],
  pt: 2,
  source: source,
};

export const MarineShotgun: Weapon = {
  name: "Marine Shotgun",
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
  name: "Marine Sniper Rifle",
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
