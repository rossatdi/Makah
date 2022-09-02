import Weapon from "../../types/Weapon";
import { NonLethal, Stun, Range } from "./WeaponSpecialRules";
import { Assault } from "./WeaponTypes";

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