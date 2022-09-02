import Weapon from "../../types/Weapon";
import { NonLethal, Stun, Range, Dangerous } from "./WeaponSpecialRules";
import { Assault, Combat } from "./WeaponTypes";

export const Webber: Weapon = {
    name: "Webber",
    profiles: [
      {
        types: [Assault],
        attack: 4,
        dam: 1,
        ap: 0,
        special: [Stun, NonLethal, Range(6)],
      },
    ],
    pt: 1,
    source: "UNSET",
  };

  export const DeamonWeapon: Weapon = {
    name: "Deamon Weapon",
    profiles: [
      {
        types: [Combat],
        attack: 3,
        dam: "d6",
        ap: -2,
        special: [Dangerous],
      },
    ],
    pt: 5,
    source: "UNSET",
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
    pt: 0,
    source: "UNSET",
  };