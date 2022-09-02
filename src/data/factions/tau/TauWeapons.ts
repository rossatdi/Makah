import Weapon from "../../../types/Weapon";
import { Assault, Heavy, Pistol, Rifle, Combat } from "../../weapons/WeaponTypes";
import { Aim, Headshot, Inaccurate, Indirect, Markerlight, Only, Range, SplitFire } from "../../weapons/WeaponSpecialRules";
import {  } from "../../Actions";

export const source : string = "Tau"

export const PulsePistol: Weapon = {
    name: "Pulse pistol",
    profiles: [
      {
        types: [Pistol],
        attack: 2,
        dam: 4,
        ap: -1,
        special: [Range(6)],
      },
    ],
    pt: 1,
    source: source,
  };

  export const PulseCarbine: Weapon = {
    name: "Pulse carbine",
    profiles: [
      {
        types: [Assault],
        attack: 3,
        dam: 4,
        ap: 0,
        special: [],
      },
    ],
    pt: 1,
    source: source,
  };

  export const PulseBlaster: Weapon = {
    name: "Pulse blaster",
    profiles: [
      {
        types: [Assault],
        attack: 3,
        dam: 4,
        ap: -1,
        special: [Range(8)],
      },
    ],
    pt: 2,
    source: source,
  };

  export const FusionBlaster: Weapon = {
    name: "Fusion Blaster",
    profiles: [
      {
        types: [Assault],
        attack: 2,
        dam: 5,
        ap: -2,
        special: [Range(8)],
      },
    ],
    pt: 3,
    source: source,
  };
  
  export const NeutronBlaster: Weapon = {
    name: "Neutron Blaster",
    profiles: [
      {
        types: [Assault],
        attack: 2,
        dam: 4,
        ap: -2,
        special: [Range(8)],
      },
    ],
    pt: 3,
    source: source,
  };

  export const MarkerlightGun: Weapon = {
    name: "Markerlight",
    profiles: [
      {
        types: [Rifle],
        attack: 3,
        dam: 0,
        ap: 0,
        special: [Markerlight],
      },
    ],
    pt: 1,
    source: source,
  };
    
  export const PulseRifle: Weapon = {
    name: "Pulse rifle",
    profiles: [
      {
        types: [Rifle],
        attack: 3,
        dam: 0,
        ap: 0,
        special: [],
      },
    ],
    pt: 2,
    source: source,
  };
      
  export const KrootRifle: Weapon = {
    name: "Kroot Rifle",
    profiles: [
      {
        name:"Rifle",
        types: [Rifle],
        attack: 3,
        dam: 3,
        ap: 0,
        special: [Only('Kroot')],
      },
      {
        name:"Knife",
        types: [Combat],
        attack: 3,
        dam: 3,
        ap: -1,
        special: [Only('Kroot')],
      }
    ],
    pt: 2,
    source: source,
  };

  export const RailRifle: Weapon = {
    name: "Rail Rifle",
    profiles: [
      {
        types: [Heavy],
        attack: 2,
        dam: 5,
        ap: -2,
        special: [Headshot, Aim],
      },
    ],
    pt: 7,
    source: source,
  };

  export const IonRifle: Weapon = {
    name: "Ion Rifle",
    profiles: [
      {
        types: [Heavy],
        attack: 4,
        dam: 3,
        ap: -2,
        special: [ Aim],
      },
    ],
    pt: 8,
    source: source,
  };

  
  export const BurstCannon: Weapon = {
    name: "Burst Cannon",
    profiles: [
      {
        types: [Heavy],
        attack: 5,
        dam: 3,
        ap: 0,
        special: [SplitFire],
      },
    ],
    pt: 8,
    source: source,
  };

    
  export const MissilePod: Weapon = {
    name: "Missile pod",
    profiles: [
      {
        types: [Heavy],
        attack: 4,
        dam: 3,
        ap: -1,
        special: [Indirect],
      },
    ],
    pt: 8,
    source: source,
  };

      
  export const HonourStaff: Weapon = {
    name: "Honour Staff",
    profiles: [
      {
        types: [Combat],
        attack: 3,
        dam: 2,
        ap: -1,
        special: [Inaccurate],
      },
    ],
    pt: 1,
    source: source,
  };

  const TauWeapons : Weapon[] =
  [
    PulsePistol,
    PulseCarbine,
    PulseBlaster,
    FusionBlaster,
    NeutronBlaster,
    MarkerlightGun,
    PulseRifle,
    KrootRifle,
    RailRifle,
    IonRifle,
    BurstCannon,
    MissilePod,
    HonourStaff
  ];

  export default TauWeapons;