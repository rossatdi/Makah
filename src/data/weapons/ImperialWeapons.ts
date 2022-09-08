import Weapon from "../../types/Weapon";
import {
  Aim,
  Dangerous,
  Defensive,
  Headshot,
  IgnoresCover,
  NonLethal,
  OneUse,
  Only,
  Range,
  Rapid,
  Reach,
  SplitFire,
  Torrent,
  Volley,
} from "./WeaponSpecialRules";
import { Assault, Combat, Heavy, Pistol, Rifle } from "./WeaponTypes";

const source: string = "Imperial";

export const Laspistol: Weapon = {
  name: "Laspistol",
  profiles: [
    {
      types: [Pistol],
      attack: 2,
      dam: 3,
      ap: 0,
      special: [Range(6)],
    },
  ],
  pt: 0,
  source: source,
};

export const BoltPistol: Weapon = {
  name: "Bolt Pitol",
  profiles: [
    {
      types: [Pistol],
      attack: 3,
      dam: 4,
      ap: 0,
      special: [Range(6), Rapid],
    },
  ],
  pt: 1,
  source: source,
};

export const HotshotLaspistol: Weapon = {
  name: "Hotshot Laspistol",
  profiles: [
    {
      types: [Pistol],
      attack: 2,
      dam: 3,
      ap: -1,
      special: [Range(6)],
    },
  ],

  pt: 1,
  source: source,
};

export const InfernoPistol: Weapon = {
  name: "Inferno Pistol",
  profiles: [
    {
      types: [Pistol],
      attack: 2,
      dam: 5,
      ap: -2,
      special: [Range(4)],
    },
  ],

  pt: 4,
  source: source,
};

export const PlasmaPistol: Weapon = {
  name: "Plasma Pistol",
  profiles: [
    {
      types: [Pistol],
      attack: 3,
      dam: 4,
      ap: -1,
      special: [Range(6), Dangerous],
    },
  ],

  pt: 5,
  source: source,
};

export const NeedlePistol: Weapon = {
  name: "Needle Pistol",
  profiles: [
    {
      types: [Pistol],
      attack: 2,
      dam: "d6+1",
      ap: -1,
      special: [NonLethal, Range(8)],
    },
  ],

  pt: 3,
  source: source,
};

export const LasCarbine: Weapon = {
  name: "Las Carbine",
  profiles: [
    {
      types: [Assault],
      attack: 2,
      dam: 3,
      ap: 0,
      special: [],
    },
  ],

  pt: 0,
  source: source,
};

export const Meltagun: Weapon = {
  name: "Meltagun",
  profiles: [
    {
      types: [Assault],
      attack: 2,
      dam: 5,
      ap: -1,
      special: [Range(8)],
    },
  ],

  pt: 5,
  source: source,
};

export const Stormbolter: Weapon = {
  name: "Stormbolter",
  profiles: [
    {
      types: [Assault],
      attack: 3,
      dam: 4,
      ap: 0,
      special: [Volley(1), Rapid],
    },
  ],

  pt: 3,
  source: source,
};

export const Lasgun: Weapon = {
  name: "Lasgun",
  profiles: [
    {
      types: [Rifle],
      attack: 2,
      dam: 3,
      ap: 0,
      special: [Rapid],
    },
  ],

  pt: 0,
  source: source,
};

export const Bolter: Weapon = {
  name: "Bolter",
  profiles: [
    {
      types: [Rifle],
      attack: 3,
      dam: 4,
      ap: 0,
      special: [Rapid],
    },
  ],

  pt: 2,
  source: source,
};

export const HotshotLasgun: Weapon = {
  name: "Hotshot Lasgun",
  profiles: [
    {
      types: [Rifle],
      attack: 2,
      dam: 3,
      ap: -1,
      special: [],
    },
  ],

  pt: 1,
  source: source,
};

export const PlasmaGun: Weapon = {
  name: "Plasma Gun",
  profiles: [
    {
      types: [Rifle],
      attack: 3,
      dam: 4,
      ap: -1,
      special: [Dangerous],
    },
  ],

  pt: 7,
  source: source,
};

export const Longlas: Weapon = {
  name: "Longlas",
  profiles: [
    {
      types: [Rifle],
      attack: 3,
      dam: 3,
      ap: -1,
      special: [Headshot],
    },
  ],

  pt: 5,
  source: source,
};

export const CondemnorStake: Weapon = {
  name: "Condemnnor Stake",
  profiles: [
    {
      types: [Rifle],
      attack: 3,
      dam: 4,
      ap: -2,
      special: [OneUse],
    },
  ],

  notes: "Added to a Bolter, which must also be paid for.",
  pt: 1,
  source: source,
};

export const NeedleRifle: Weapon = {
  name: "Needle Rifle",
  profiles: [
    {
      types: [Heavy],
      attack: 2,
      dam: "d6+1",
      ap: -1,
      special: [NonLethal, Aim],
    },
  ],

  pt: 5,
  source: source,
};

export const HeavyBolter: Weapon = {
  name: "Heavy Bolter",
  profiles: [
    {
      types: [Heavy],
      attack: 5,
      dam: 4,
      ap: 0,
      special: [SplitFire, Rapid],
    },
  ],

  pt: 6,
  source: source,
};

export const HeavyFlamer: Weapon = {
  name: "Heavy Flamer",
  profiles: [
    {
      types: [Heavy],
      attack: 5,
      dam: 3,
      ap: -1,
      special: [IgnoresCover, Torrent],
    },
  ],

  pt: 8,
  source: source,
};

export const Chainsword: Weapon = {
  name: "Chainsword",
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

export const StormShield: Weapon = {
  name: "Storm Shield",
  profiles: [
    {
      types: [Combat],
      attack: 4,
      dam: 0,
      ap: 0,
      special: [Defensive],
    },
  ],

  pt: 5,
  source: source,
};

export const PowerFist: Weapon = {
  name: "Power Fist",
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

export const ForceSword: Weapon = {
  name: "Force Sword",
  profiles: [
    {
      types: [Combat],
      attack: 3,
      dam: "d3+2",
      ap: -2,
      special: [Only('Psykers')],
    },
  ],

  pt: 4,
  source: source,
};

export const ForceHalberd: Weapon = {
  name: "Force Halberd",
  profiles: [
    {
      types: [Combat],
      attack: 3,
      dam: "d3+2",
      ap: -1,
      special: [Only('Psykers'), Reach],
    },
  ],

  pt: 4,
  source: source,
};

const ImperialWeaponsList: Weapon[] = [
  Laspistol,
  BoltPistol,
  HotshotLaspistol,
  InfernoPistol,
  PlasmaPistol,
  NeedlePistol,
  LasCarbine,
  Meltagun,
  Stormbolter,
  Lasgun,
  Bolter,
  HotshotLasgun,
  PlasmaGun,
  Longlas,
  CondemnorStake,
  NeedleRifle,
  HeavyBolter,
  HeavyFlamer,
  Chainsword,
  StormShield,
  PowerFist,
  ForceSword,
  ForceHalberd,
];
export default ImperialWeaponsList;
