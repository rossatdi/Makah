import Weapon from "../../../types/Weapon";
import { Brutal, Only, RapidFire, RerollOneToHit, SplitFire } from "../../weapons/WeaponSpecialRules";
import { Combat, Heavy, Rifle } from "../../weapons/WeaponTypes";
import { DeamonWeapon as BaseDeamonWeapon } from '../../weapons/BaseWeapons'

const source : string = "Chaos Cult"


export const CombiBolter: Weapon = {
  name: "Combi-Bolter",
  profiles: [
    {
      types: [Rifle],
      attack: 3,
      dam: 4,
      ap: 0,
      special: [RerollOneToHit,RapidFire],
    },
  ],
  pt: 3,
  source: source,
};

export const ReaperChainCannon: Weapon = {
    name: "Reaper Chain-cannon",
    profiles: [
      {
        types: [Heavy],
        attack: 8,
        dam: 2,
        ap: 0,
        special: [SplitFire,RapidFire],
      },
    ],
    pt: 6,
    source: source,
  };

  export const HorrifyingMutation: Weapon = {
    name: "Horrifying Mutation",
    profiles: [
      {
        types: [Combat],
        attack: 3,
        dam: 4,
        ap: 0,
        special: [Brutal(2)],
      },
    ],
    pt: 5,
    source: source,
  };
 
  export const LightningClaw: Weapon = {
    name: "Lightning Claw",
    profiles: [
      {
        types: [Combat],
        attack: 3,
        dam: 3,
        ap: -1,
        special: [Brutal(2)],
      },
    ],
    pt: 5,
    source: source,
  };

  export const DeamonWeapon: Weapon = {
    ...BaseDeamonWeapon,
    source: source,
  };

  export const MarineCombatKnife: Weapon = {
    name: "Marine Combat Knife",
    profiles: [
      {
        types: [Combat],
        attack: 3,
        dam: 2,
        ap: 0,
        special: [Only('Chaos Marines and Possessed')],
      },
    ],
    pt: 2,
    source: source,
  };

  const ChaosCultWeapons : Weapon[] =
  [
    CombiBolter,
    ReaperChainCannon,
    HorrifyingMutation,
    LightningClaw,
    DeamonWeapon,
    MarineCombatKnife
  ]

  export default ChaosCultWeapons

  