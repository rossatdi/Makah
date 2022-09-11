import Weapon from "../../../types/Weapon";
import { Aim, Arc, Blast, Dangerous, Headshot, IgnoresCover, Irradiate, Range, Reckless, Stun } from "../../weapons/WeaponSpecialRules";
import { Assault, Heavy, Pistol, Rifle, Combat } from "../../weapons/WeaponTypes";


const source : string = "Adeptus Mechanicus"

export const ArcPistol: Weapon = {
    name: "Arc Pistol",
    profiles: [
      {
        types: [Pistol],
        attack: 3,
        dam: 3,
        ap: 0,
        special: [Arc,Range(6)],
      },
    ],
    pt: 1,
    source: source,
  };

export const RadiumPistol: Weapon = {
    name: "Radium Pistol",
    profiles: [
      {
        types: [Pistol],
        attack: 3,
        dam: 3,
        ap: 0,
        special: [Irradiate(2),Range(6)],
      },
    ],
    pt: 1,
    source: source,
  };

export const BlastPistol: Weapon = {
    name: "Blast Pistol",
    profiles: [
      {
        types: [Pistol],
        attack: "D3+1",
        dam: 3,
        ap: 0,
        special: [Range(6), IgnoresCover],
      },
    ],
    pt: 2,
    source: source,
  };

export const FlechetteBlaster: Weapon = {
    name: "Flechette Blaster",
    profiles: [
      {
        types: [Pistol],
        attack: 5,
        dam: 2,
        ap: 0,
        special: [Range(6)],
      },
    ],
    pt: 2,
    source: source,
  };

export const Stubcarbine: Weapon = {
    name: "Stubcarbine",
    profiles: [
      {
        types: [Pistol],
        attack: 3,
        dam: 3,
        ap: 0,
        special: [Range(8)],
      },
    ],
    pt: 1,
    source: source,
  };

export const ArcRifle: Weapon = {
    name: "Arc Rifle",
    profiles: [
      {
        types: [Rifle],
        attack: 3,
        dam: 3,
        ap: 0,
        special: [Arc],
      },
    ],
    pt: 2,
    source: source,
  };

export const RadiumCarbine: Weapon = {
    name: "Radium Carbine",
    profiles: [
      {
        types: [Assault],
        attack: 3,
        dam: 3,
        ap: 0,
        special: [Irradiate(2)],
      },
    ],
    pt: 3,
    source: source,
  };

export const PlasmaCaliver: Weapon = {
    name: "Plasma Caliver",
    profiles: [
      {
        types: [Assault],
        attack: 3,
        dam: 4,
        ap: -1,
        special: [Dangerous],
      },
    ],
    pt: 5,
    source: source,
  };

export const GalvanicRifle: Weapon = {
    name: "Galvanic Rifle",
    profiles: [
      {
        types: [Heavy],
        attack: 3,
        dam: 3,
        ap: -1,
        special: [Aim,Arc],
      },
    ],
    pt: 5,
    source: source,
  };

export const TransuranicArquebus: Weapon = {
    name: "Transuranic Arquebus",
    profiles: [
      {
        types: [Heavy],
        attack: 2,
        dam: 5,
        ap: -1,
        special: [Aim,Headshot],
      },
    ],
    pt: 6,
    source: source,
  };

export const VolkiteBlaster: Weapon = {
    name: "Volkite Blaster",
    profiles: [
      {
        types: [Heavy],
        attack: 3,
        dam: 4,
        ap: 0,
        special: [IgnoresCover],
      },
    ],
    pt: 3,
    source: source,
  };

export const EradicationRay: Weapon = {
    name: "Eradication Ray",
    profiles: [
      {
        types: [Heavy],
        attack: "D3+1",
        dam: 4,
        ap: -1,
        special: [Blast(2)],
      },
    ],
    pt: 8,
    source: source,
  };

export const TaserGoad: Weapon = {
    name: "Taser Goad",
    profiles: [
      {
        types: [Combat],
        attack: 4,
        dam: 2,
        ap: -1,
        special: [Stun],
      },
    ],
    pt: 5,
    source: source,
  };

export const Chordclaw: Weapon = {
    name: "Chordclaw",
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
    source: source,
  };

export const TransonicRazor: Weapon = {
    name: "Transonic Razor",
    profiles: [
      {
        types: [Combat],
        attack: 4,
        dam: 3,
        ap: -1,
        special: [Irradiate(1)],
      },
    ],
    pt: 4,
    source: source,
  };

export const TransonicBlades: Weapon = {
    name: "Transonic Blades",
    profiles: [
      {
        types: [Combat],
        attack: 4,
        dam: 4,
        ap: -2,
        special: [Irradiate(2), Reckless],
      },
    ],
    pt: 6,
    source: source,
  };

export const OmnissianAxe: Weapon = {
    name: "Omnissian axe",
    profiles: [
      {
        types: [Combat],
        attack: 3,
        dam: 5,
        ap: -2,
        special: [],
      },
    ],
    pt: 6,
    source: source,
  };

  const MechanicusWeapons : Weapon[] = [
    ArcPistol,
    RadiumPistol,
    BlastPistol,
    FlechetteBlaster,
    Stubcarbine,
    ArcRifle,
    RadiumCarbine,
    PlasmaCaliver,
    GalvanicRifle,
    TransuranicArquebus,
    VolkiteBlaster,
    EradicationRay,
    TaserGoad,
    Chordclaw,
    TransonicRazor,
    TransonicBlades,
    OmnissianAxe
  ]

  export default MechanicusWeapons;
