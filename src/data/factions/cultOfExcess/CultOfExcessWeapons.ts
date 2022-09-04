import Weapon from "../../../types/Weapon";
import { Frequency, IgnoresCover, Poison, Rending, Stun } from "../../weapons/WeaponSpecialRules";
import { Assault, Heavy, Combat } from "../../weapons/WeaponTypes";

const source: string = "Cult of Excess";

export const SonicBlaster: Weapon = {
    name: "Sonic Blaster",
    profiles: [
      {
        types: [Assault],
        attack: 3,
        dam: 4,
        ap: 0,
        special: [Frequency, IgnoresCover],
      },
    ],
    pt: 4,
    source: source,
  };

  export const DoomSiren: Weapon = {
    name: "Doom Siren",
    profiles: [
      {
        types: [Assault],
        attack: 7,
        dam: 2,
        ap: 0,
        special: [Frequency, IgnoresCover],
      },
    ],
    pt: 5,
    source: source,
  };

  export const Blastmaster: Weapon = {
    name: "Blastmaster",
    profiles: [
      {
        name:"Focused",
        types: [Heavy],
        attack: 2,
        dam: 6,
        ap: -1,
        special: [Frequency, IgnoresCover],
      },
      {
        name:"Varied",
        types: [Assault],
        attack: 4,
        dam: 4,
        ap: -1,
        special: [Frequency, IgnoresCover],
      },
    ],
    pt: 8,
    source: source,
  };

  export const BlessedBlade: Weapon = {
    name: "Blessed Blade",
    profiles: [
      {
        types: [Combat],
        attack: 3,
        dam: 2,
        ap: -1,
        special: [Poison(3)],
      },
    ],
    pt: 5,
    source: source,
  };

  export const PiercingClaws: Weapon = {
    name: "Piercing Claws",
    profiles: [
      {
        types: [Combat],
        attack: 3,
        dam: 3,
        ap: 0,
        special: [Rending],
      },
    ],
    pt: 2,
    source: source,
  };
  
  export const LashOfTorment: Weapon = {
    name: "Lash of Torment",
    profiles: [
      {
        types: [Combat],
        attack: 4,
        dam: 2,
        ap: -1,
        special: [Stun],
      },
    ],
    pt: 3,
    source: source,
  };

  const CultOfExcessWeapons : Weapon[] =
  [
    SonicBlaster,
    DoomSiren,
    Blastmaster,
    BlessedBlade,
    PiercingClaws,
    LashOfTorment
  ]

  export default CultOfExcessWeapons;