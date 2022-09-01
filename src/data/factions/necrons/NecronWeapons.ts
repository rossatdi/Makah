import Weapon from "../../../types/Weapon";
import { Aim, Arc, Defensive, Gauss, Headshot, Range, Reckless } from "../../weapons/WeaponSpecialRules";
import { Assault, Combat, Heavy, Pistol, Rifle } from "../../weapons/WeaponTypes";

const source : string = "Necron"

export const EnmiticDisintegrator: Weapon = {
    name: "Enmitic disintegrator",
    profiles: [
      {
        types: [Pistol],
        attack: 2,
        dam: 5,
        ap: -1,
        special: [Range(6)],
      },
    ],
    pt: 3,
    source: source,
  };

  export const DisintegratorMandibles: Weapon = {
    name: "Disintegrator mandibles",
    profiles: [
      {
        types: [Pistol],
        attack: 3,
        dam: 2,
        ap: -1,
        special: [Range(4)],
      },
    ],
    pt: 1,
    source: source,
  };

  export const DisintegratorArray: Weapon = {
    name: "Disintegrator array",
    profiles: [
      {
        types: [Pistol],
        attack: 4,
        dam: 5,
        ap: -1,
        special: [Range(6)],
      },
    ],
    pt: 6,
    source: source,
  };

  export const GaussPistol: Weapon = {
    name: "Gauss Pistol",
    profiles: [
      {
        types: [Pistol],
        attack: 3,
        dam: 4,
        ap: 0,
        special: [Gauss(1), Range(6)],
      },
    ],
    pt: 1,
    source: source,
  };

  export const TeslaPistol: Weapon = {
    name: "Tesla Pistol",
    profiles: [
      {
        types: [Pistol],
        attack: 4,
        dam: 3,
        ap: 0,
        special: [Arc, Range(6)],
      },
    ],
    pt: 2,
    source: source,
  };
  export const GaussFlayer: Weapon = {
    name: "Gauss Flayer",
    profiles: [
      {
        types: [Rifle],
        attack: 3,
        dam: 4,
        ap: 0,
        special: [Gauss(1)],
      },
    ],
    pt: 2,
    source: source,
  };

  export const TeslaCarbine: Weapon = {
    name: "Tesla Carbine",
    profiles: [
      {
        types: [Assault],
        attack: 4,
        dam: 3,
        ap: 0,
        special: [Arc],
      },
    ],
    pt: 4,
    source: source,
  };

  export const GaussReaper: Weapon = {
    name: "Gauss Reaper",
    profiles: [
      {
        types: [Assault],
        attack: 3,
        dam: 4,
        ap: -1,
        special: [Gauss(1), Range(8)],
      },
    ],
    pt: 2,
    source: source,
  };

  export const GaussBlaster: Weapon = {
    name: "Gauss Blaster",
    profiles: [
      {
        types: [Rifle],
        attack: 3,
        dam: 4,
        ap: -1,
        special: [Gauss(1)],
      },
    ],
    pt: 3,
    source: source,
  };

  export const TeslaBlaster: Weapon = {
    name: "Tesla Blaster",
    profiles: [
      {
        types: [Rifle],
        attack: 4,
        dam: 3,
        ap: 0,
        special: [Arc],
      },
    ],
    pt: 5,
    source: source,
  };

  export const SynapticDisintegrator: Weapon = {
    name: "Synaptic disintegrator",
    profiles: [
      {
        types: [Heavy],
        attack: 3,
        dam: 5,
        ap: -1,
        special: [Aim, Headshot],
      },
    ],
    pt: 6,
    source: source,
  };

  export const FeederMandibles: Weapon = {
    name: "Feeder mandibles",
    profiles: [
      {
        types: [Combat],
        attack: 3,
        dam: 2,
        ap: -2,
        special: [Reckless],
      },
    ],
    pt: 1,
    source: source,
  };

  export const DispersionShield: Weapon = {
    name: "Dispersion Shield",
    profiles: [
      {
        types: [Combat],
        attack: 3,
        dam: 0,
        ap: 0,
        special: [Defensive],
      },
    ],
    pt: 4,
    source: source,
  };

  export const Warscythe: Weapon = {
    name: "Warscythe",
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

  export const HyperphaseSword: Weapon = {
    name: "Hyperphase Sword",
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

  export const HypherphaseReaper: Weapon = {
    name: "Hyperphase Reaper",
    profiles: [
      {
        types: [Combat],
        attack: 3,
        dam: 4,
        ap: -2,
        special: [Arc],
      },
    ],
    pt: 8,
    source: source,
  };

  export const Flayingclaws: Weapon = {
    name: "Flaying claws",
    profiles: [
      {
        types: [Combat],
        attack: 5,
        dam: 3,
        ap: -1,
        special: [Reckless],
      },
    ],
    pt: 4,
    notes:"Flayed Ones only.",
    source: source,
  };

  const NecronWeapons : Weapon[] = 
  [
    EnmiticDisintegrator,
    DisintegratorMandibles,
    DisintegratorArray,
    GaussPistol,
    TeslaPistol,
    GaussFlayer,
    TeslaCarbine,
    GaussReaper,
    GaussBlaster,
    TeslaBlaster,
    SynapticDisintegrator,
    FeederMandibles,
    DispersionShield,
    Warscythe,
    HyperphaseSword,
    HypherphaseReaper,
    Flayingclaws
  ]

  export default NecronWeapons;