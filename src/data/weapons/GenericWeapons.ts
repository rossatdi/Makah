import Weapon from "../../types/Weapon";
import {
  Aim,
  Blast,
  Defensive,
  Headshot,
  IgnoresCover,
  Indirect,
  Range,
  RapidFire,
  Reach,
  Reckless,
  Small,
  SplitFire,
  Stun,
  Torrent,
} from "./WeaponSpecialRules";
import { Assault, Combat, Grenade, Heavy, Pistol, Rifle } from "./WeaponTypes";

const source: string = "Generic";

export const Autopistol: Weapon = {
  name: "Autopistol",
  profiles: [
    {
      types: [Pistol],
      attack: 3,
      dam: 2,
      ap: 0,
      special: [Range(6)],
    },
  ],
  pt: 0,
  source: source,
};

export const Stubgun: Weapon = {
  name: "Stubgun",
  profiles: [
    {
      types: [Pistol],
      attack: 1,
      dam: 4,
      ap: 0,
      special: [Range(6)],
    },
  ],
  pt: 0,
  source: source,
};

export const Autogun: Weapon = {
  name: "Autogun",
  profiles: [
    {
      types: [Assault, Rifle],
      attack: 3,
      dam: 2,
      ap: 0,
      special: [RapidFire],
    },
  ],
  pt: 0,
  source: source,
};

export const Shotgun: Weapon = {
  name: "Shotgun",
  profiles: [
    {
      types: [Assault],
      attack: 2,
      dam: 4,
      ap: 0,
      special: [Range(8)],
    },
  ],
  pt: 0,
  source: source,
};

export const Flamer: Weapon = {
  name: "Flamer",
  profiles: [
    {
      types: [Assault],
      attack: 5,
      dam: 2,
      ap: 0,
      special: [IgnoresCover, Torrent],
    },
  ],
  pt: 4,
  source: source,
};

export const SniperRifle: Weapon = {
  name: "Sniper Rifle",
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

export const Autocannon: Weapon = {
  name: "Autocannon",
  profiles: [
    {
      types: [Heavy],
      attack: 4,
      dam: 4,
      ap: -1,
      special: [SplitFire],
    },
  ],
  pt: 8,
  source: source,
};
export const MissileLauncher: Weapon = {
  name: "Missile Launcher",
  profiles: [
    {
      types: [Heavy],
      name: "Frag",
      attack: 3,
      dam: "d6",
      ap: 0,
      special: [Blast(2)],
    },
    {
      types: [Heavy],
      name: "Krak",
      attack: 1,
      dam: "2d6",
      ap: -2,
      special: [Aim],
    },
  ],
  pt: 8,
  source: source,
};
export const Mortar: Weapon = {
  name: "Mortar",
  profiles: [
    {
      types: [Heavy],
      attack: 3,
      dam: "d6",
      ap: 0,
      special: [Indirect, Blast(2)],
    },
  ],
  pt: 5,
  source: source,
};

export const Knife: Weapon = {
  name: "Knife",
  profiles: [
    {
      types: [Combat],
      attack: 2,
      dam: 2,
      ap: 0,
      special: [Small],
    },
  ],
  pt: 0,
  source: source,
};

export const ClawsAndTeeth: Weapon = {
  name: "Claws and teeth",
  profiles: [
    {
      types: [Combat],
      attack: 4,
      dam: 2,
      ap: 0,
      special: [Reckless],
    },
  ],
  pt: 0,
  source: source,
};

export const Sword: Weapon = {
  name: "Sword",
  profiles: [
    {
      types: [Combat],
      attack: 3,
      dam: 3,
      ap: 0,
      special: [],
    },
  ],
  pt: 0,
  source: source,
};

export const Axe: Weapon = {
  name: "Axe",
  profiles: [
    {
      types: [Combat],
      attack: 2,
      dam: 4,
      ap: 0,
      special: [],
    },
  ],
  pt: 0,
  source: source,
};

export const Spear: Weapon = {
  name: "Spear",
  profiles: [
    {
      types: [Combat],
      attack: 3,
      dam: 2,
      ap: 0,
      special: [Reach],
    },
  ],
  pt: 0,
  source: source,
};

export const PowerSword: Weapon = {
  name: "Power Sword",
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

export const PowerAxe: Weapon = {
  name: "Power Axe",
  profiles: [
    {
      types: [Combat],
      attack: 2,
      dam: 4,
      ap: -2,
      special: [],
    },
  ],
  pt: 5,
  source: source,
};

export const PowerMaul: Weapon = {
  name: "Power Maul",
  profiles: [
    {
      types: [Combat],
      attack: 3,
      dam: 4,
      ap: -1,
      special: [],
    },
  ],
  pt: 5,
  source: source,
};

export const CombatShield: Weapon = {
  name: "Combat Shield",
  profiles: [
    {
      types: [Combat],
      attack: 3,
      dam: 0,
      ap: 0,
      special: [Defensive],
    },
  ],
  pt: 3,
  source: source,
};

export const FragGrenade: Weapon = {
  name: "Frag Grenade",
  profiles: [
    {
      types: [Grenade],
      attack: 3,
      dam: "d3",
      ap: 0,
      special: [Blast(2), Range(4)],
    },
  ],
  pt: 1,
  source: source,
};

export const KrakGrenade: Weapon = {
  name: "Krak Grenade",
  profiles: [
    {
      types: [Grenade],
      attack: 2,
      dam: "d3+2",
      ap: -1,
      special: [Range(4)],
    },
  ],
  pt: 2,
  source: source,
};

export const StunGrenade: Weapon = {
  name: "Stun Grenade",
  profiles: [
    {
      types: [Grenade],
      attack: 2,
      dam: 0,
      ap: 0,
      special: [Blast(2), Range(4), Stun],
    },
  ],
  pt: 3,
  source: source,
};

export const GenericWeaponsList: Weapon[] = [
  Autopistol,
  Stubgun,
  Autogun,
  Shotgun,
  Flamer,
  SniperRifle,
  Autocannon,
  MissileLauncher,
  Mortar,
  Knife,
  ClawsAndTeeth,
  Sword,
  Axe,
  Spear,
  PowerSword,
  PowerAxe,
  PowerMaul,
  CombatShield,
  FragGrenade,
  KrakGrenade,
  StunGrenade,
];

export default GenericWeaponsList;
