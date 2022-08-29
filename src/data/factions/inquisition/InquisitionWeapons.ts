import Weapon from "../../../types/Weapon";
import {
  NeedlePistol as ImpNeedlePistol,
  NeedleRifle as ImpNeedleRifle,
} from "../../weapons/ImperialWeapons";
import {
  Dangerous,
  IgnoresCover,
  Indirect,
  NonLethal,
  Range,
  Stun,
  Torrent,
} from "../../weapons/WeaponSpecialRules";
import { Assault, Combat, Rifle } from "../../weapons/WeaponTypes";

const source : string = "Forces of the Inquisition"

export const NeedlePistol: Weapon = {
  ...ImpNeedlePistol,
  pt: 2,
  source: source,
};

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
  source: source,
};

export const PsyberEagle: Weapon = {
  name: "Psyber-eagle",
  profiles: [
    {
      types: [Assault],
      attack: "d6",
      dam: 4,
      ap: 0,
      special: [Indirect],
    },
  ],
  pt: 3,
  source: source,
};

export const Incinerator: Weapon = {
  name: "Incinerator",
  profiles: [
    {
      types: [Rifle],
      attack: 5,
      dam: 2,
      ap: -1,
      special: [IgnoresCover, Torrent],
    },
  ],
  pt: 8,
  source: source,
};

export const NeedleRifle: Weapon = {
  ...ImpNeedleRifle,
  pt: 4,
  source: source,
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
  source: source,
};

export const PhaseBlade: Weapon = {
  name: "PhaseBlade",
  profiles: [
    {
      types: [Combat],
      attack: 3,
      dam: 3,
      ap: -4,
      special: [],
    },
  ],
  pt: 6,
  source: source,
};

export const InquisitionWeaponsList: Weapon[] = [
  NeedlePistol,
  Webber,
  PsyberEagle,
  Incinerator,
  NeedleRifle,
  DeamonWeapon,
  PhaseBlade,
];

export default InquisitionWeaponsList;
