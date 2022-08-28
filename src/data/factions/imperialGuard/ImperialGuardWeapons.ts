import Weapon from "../../../types/Weapon";
import { Longlas as ImpLonglas } from "../../weapons/ImperialWeapons";
import { Inaccurate, Range } from "../../weapons/WeaponSpecialRules";
import { Assault, Combat } from "../../weapons/WeaponTypes";

export const source : string = "Imperial Guard"

export const RipperGun: Weapon = {
  name: "Ripper Gun",
  profiles: [
    {
      name: "Gun",
      types: [Assault],
      attack: 5,
      dam: 3,
      ap: 0,
      special: [Range(8), Inaccurate],
    },
    {
      name: "Knife",
      types: [Combat],
      attack: 3,
      dam: 4,
      ap: 0,
      special: [],
    },
  ],
  pt: 3,
  source: source,
};

export const Longlas: Weapon = {
  ...ImpLonglas,
  pt: 4,
  source: source,
};

export const LongKnife: Weapon = {
  name: "Long Knife",
  profiles: [
    {
      types: [Combat],
      attack: 3,
      dam: 3,
      ap: 0,
      special: [],
    },
  ],
  pt: 1,
  source: source,
};

export const ImperialGuardWeapons: Weapon[] = [RipperGun, Longlas, LongKnife];
export default ImperialGuardWeapons;
