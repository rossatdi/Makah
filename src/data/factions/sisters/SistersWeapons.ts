import Weapon from "../../../types/Weapon";
import WeaponSource from "../../../types/WeaponSource";
import {
  PlasmaPistol as BasePlasmaPistol,
  Stormbolter as BaseStormbolter,
  HeavyFlamer as BaseHeavyFlamer,
} from "../../weapons/ImperialWeapons";
import { Pistol, Heavy, Combat } from "../../weapons/WeaponTypes";
import {
  IgnoresCover,
  Reach,
  Torrent,
  Reckless,
  Stun,
  Defensive,
} from "./../../weapons/WeaponSpecialRules";

const source: WeaponSource = "Faction";

export const HandFlamer: Weapon = {
  name: "Hand Flamer",
  profiles: [
    {
      types: [Pistol],
      attack: 3,
      dam: 2,
      ap: 0,
      special: [IgnoresCover, Torrent],
    },
  ],
  pt: 3,
  source: source,
};

export const PlasmaPistol: Weapon = {
  ...BasePlasmaPistol,
  pt: 4,
  source: source,
};

export const Stormbolter: Weapon = {
  ...BaseStormbolter,
  pt: 2,
  source: source,
};

export const HeavyFlamer: Weapon = {
  ...BaseHeavyFlamer,
  pt: 2,
  source: source,
};

export const Multimelta: Weapon = {
  name: "Multimelta",
  profiles: [
    {
      types: [Heavy],
      attack: 2,
      dam: 5,
      ap: -2,
      special: [],
    },
  ],
  pt: 8,
  source: source,
};

export const AnointedHalberd: Weapon = {
  name: "Anointed Halberd",
  profiles: [
    {
      types: [Combat],
      attack: 3,
      dam: 4,
      ap: -1,
      special: [Reach],
    },
  ],
  pt: 7,
  source: source,
};

export const ArchoFlails: Weapon = {
  name: "Archo-flails",
  profiles: [
    {
      types: [Combat],
      attack: 5,
      dam: 2,
      ap: -1,
      special: [Reckless],
    },
  ],
  pt: 2,
  notes: "Many obnly be taken by Archo-flagellants",
  source: source,
};

export const Eviscerator: Weapon = {
  name: "Eviscerator",
  profiles: [
    {
      types: [Combat],
      attack: 2,
      dam: 5,
      ap: -2,
      special: [Reckless],
    },
  ],
  pt: 4,
  source: source,
};

export const HallowedMace: Weapon = {
  name: "Hallowed Mace",
  profiles: [
    {
      types: [Combat],
      attack: 3,
      dam: 4,
      ap: -1,
      special: [Stun],
    },
  ],
  pt: 7,
  source: source,
};

export const SacresantShield: Weapon = {
  name: "Sacresant Shield",
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

export const SistersWeapons: Weapon[] = [
  HandFlamer,
  PlasmaPistol,
  Stormbolter,
  HeavyFlamer,
  Multimelta,
  AnointedHalberd,
  ArchoFlails,
  Eviscerator,
  HallowedMace,
  SacresantShield,
];

export default SistersWeapons;
