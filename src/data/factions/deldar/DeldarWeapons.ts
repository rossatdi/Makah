import Weapon from "../../../types/Weapon";
import { Arc, Blast, Brutal, IgnoresCover, Only, Poison, Range, SplitFire, Stun, Torrent } from "../../weapons/WeaponSpecialRules";
import { Assault, Heavy, Pistol, Rifle,Combat } from "../../weapons/WeaponTypes";

const source: string = "Dark Eldar";

export const SplinterPistol: Weapon = {
    name: "Splinter Pistol",
    profiles: [
      {
        types: [Pistol],
        attack: 4,
        dam: 2,
        ap: 0,
        special: [Poison(2), Range(6)],
      },
    ],
    pt: 1,
    source: source,
  };

  export const StingerPistol: Weapon = {
    name: "Stinger Pistol",
    profiles: [
      {
        types: [Pistol],
        attack: 3,
        dam: 2,
        ap: 0,
        special: [Poison(3), Range(6)],
      },
    ],
    pt: 2,
    source: source,
  };

  export const BlastPistol: Weapon = {
    name: "Blast Pistol",
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
  
  export const SplinterRifle: Weapon = {
    name: "Splinter Rifle",
    profiles: [
      {
        types: [Rifle],
        attack: 4,
        dam: 2,
        ap: 0,
        special: [Poison(4)],
      },
    ],
    pt: 2,
    source: source,
  };

  export const Blaster: Weapon = {
    name: "Blaster",
    profiles: [
      {
        types: [Assault],
        attack: 2,
        dam: 5,
        ap: -2,
        special: [Range(6)],
      },
    ],
    pt: 5,
    source: source,
  };

  export const Shredder: Weapon = {
    name: "Shredder",
    profiles: [
      {
        types: [Assault],
        attack: 4,
        dam: 2,
        ap: -1,
        special: [Blast(1.5), Poison(2)],
      },
    ],
    pt: 6,
    source: source,
  };
  
  export const LiquifierGun: Weapon = {
    name: "Liquifier Gun",
    profiles: [
      {
        types: [Assault],
        attack: 6,
        dam: 1,
        ap: 0,
        special: [Torrent, IgnoresCover,Poison(2)],
      },
    ],
    pt: 5,
    source: source,
  };
    
  export const Baleblast: Weapon = {
    name: "Baleblast",
    profiles: [
      {
        types: [Assault],
        attack: 3,
        dam: 3,
        ap: -1,
        special: [Arc],
      },
    ],
    pt: 4,
    source: source,
  };
      
  export const SplinterCannon: Weapon = {
    name: "Splinter Cannon",
    profiles: [
      {
        types: [Heavy],
        attack: 6,
        dam: 2,
        ap: 0,
        special: [Poison(2), SplitFire],
      },
    ],
    pt: 8,
    source: source,
  };
      
  export const DarkLance: Weapon = {
    name: "Dark Lance",
    profiles: [
      {
        types: [Heavy],
        attack: 2,
        dam: 5,
        ap: -3,
        special: [],
      },
    ],
    pt: 8,
    source: source,
  };

  export const Agoniser: Weapon = {
    name: "Agoniser",
    profiles: [
      {
        types: [Combat],
        attack: 3,
        dam: 2,
        ap: -1,
        special: [Poison(3)],
      },
    ],
    pt: 4,
    source: source,
  };

  export const RaiderBlade: Weapon = {
    name: "Raider blade",
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

  export const BaleBlade: Weapon = {
    name: "Bale blade",
    profiles: [
      {
        types: [Combat],
        attack: 4,
        dam: 2,
        ap: -1,
        special: [],
      },
    ],
    pt: 2,
    source: source,
  };
  
  export const HekatariiWeapons: Weapon = {
    name: "Hekatarii weapons",
    profiles: [
      {
        types: [Combat],
        attack: 4,
        dam: 3,
        ap: 0,
        special: [Poison(2)],
      },
    ],
    pt: 3,
    source: source,
  };
    
  export const Shardnet: Weapon = {
    name: "Shardnet",
    profiles: [
      {
        types: [Combat],
        attack: 3,
        dam: 1,
        ap: -1,
        special: [Stun],
      },
    ],
    pt: 3,
    source: source,
  };
      
  export const Klaive: Weapon = {
    name: "Klaive",
    profiles: [
      {
        types: [Combat],
        attack: 4,
        dam: 3,
        ap: -2,
        special: [Brutal(1), Only('Incubi')],
      },
    ],
    pt: 8,
    source: source,
  };

  const DeldarWeapons : Weapon[]=
  [
    SplinterPistol,
    StingerPistol,
    BlastPistol,
    SplinterRifle,
    Blaster,
    Shredder,
    LiquifierGun,
    Baleblast,
    SplinterCannon,
    DarkLance,
    Agoniser,
    RaiderBlade,
    BaleBlade,
    HekatariiWeapons,
    Shardnet,
    Klaive
  ]

  export default DeldarWeapons;