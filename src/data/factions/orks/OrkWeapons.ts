import Weapon from "../../../types/Weapon";
import { Blast, Dangerous, IgnoresCover, Inaccurate, MoreDakka, Range, Torrent } from "../../weapons/WeaponSpecialRules";
import { Assault, Combat, Grenade, Heavy, Pistol } from "../../weapons/WeaponTypes";

const source : string = "Orks"

export const Slugga: Weapon = {
    name: "Slugga",
    profiles: [
      {
        types: [Pistol],
        attack: 4,
        dam: 2,
        ap: 0,
        special: [Inaccurate, MoreDakka, Range(6)],
      },
    ],
    pt: 0,
    source: source,
  };

  export const BigSlugga: Weapon = {
    name: "Big Slugga",
    profiles: [
      {
        types: [Pistol],
        attack: 3,
        dam: 4,
        ap: 0,
        special: [Inaccurate, MoreDakka, Range(6)],
      },
    ],
    pt: 1,
    source: source,
  };

  export const GrotBlasta: Weapon = {
    name: "Grot Blasta",
    profiles: [
      {
        types: [Pistol],
        attack: 3,
        dam: 2,
        ap: 0,
        special: [Range(8)],
      },
    ],
    pt: 0,
    source: source,
  };

  export const Shoota: Weapon = {
    name: "Shoota",
    profiles: [
      {
        types: [Assault],
        attack: 4,
        dam: 2,
        ap: 0,
        special: [Inaccurate, MoreDakka],
      },
    ],
    pt: 0,
    source: source,
  };
  
  export const BigShoota: Weapon = {
    name: "Big Shoota",
    profiles: [
      {
        types: [Assault],
        attack: 6,
        dam: 3,
        ap: 0,
        special: [Inaccurate, MoreDakka],
      },
    ],
    pt: 4,
    source: source,
  };

  export const Rokkit: Weapon = {
    name: "Rokkit",
    profiles: [
      {
        types: [Assault],
        attack: 2,
        dam: "d6+2",
        ap: -2,
        special: [Inaccurate],
      },
    ],
    pt: 4,
    source: source,
  };

  export const Scorcher: Weapon = {
    name: "Scorcher",
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
  
  export const GrotShoota: Weapon = {
    name: "Grot Shoota",
    profiles: [
      {
        types: [Assault],
        attack: 3,
        dam: 2,
        ap: 0,
        special: [],
      },
    ],
    pt: 0,
    source: source,
  };

  export const KustomMegaBlasta: Weapon = {
    name: "Kustom Mega Blasta",
    profiles: [
      {
        types: [Assault],
        attack: 3,
        dam: 3,
        ap: "D3",
        special: [Dangerous, Inaccurate, MoreDakka],
      },
    ],
    pt: 5,
    source: source,
  };

  export const Deffkannon: Weapon = {
    name: "Deff-kannon",
    profiles: [
      {
        types: [Heavy],
        attack: "D3+3",
        dam: 4,
        ap: -1,
        special: [Inaccurate, MoreDakka],
      },
    ],
    pt: 5,
    source: source,
  };

  export const Chopper: Weapon = {
    name: "Chopper",
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

  export const BigChopper: Weapon = {
    name: "BigChopper",
    profiles: [
      {
        types: [Combat],
        attack: 3,
        dam: 4,
        ap: -1,
        special: [],
      },
    ],
    pt: 4,
    source: source,
  };

  export const PowerKlaw: Weapon = {
    name: "Power Klaw",
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

  export const Stikkbomb: Weapon = {
    name: "Stikkbomb",
    profiles: [
      {
        types: [Grenade],
        attack: "D6",
        dam: "D3+1",
        ap: 0,
        special: [Blast(2), Range(4)],
      },
    ],
    pt: 8,
    source: source,
  };

  const OrkWeapons : Weapon[] =
  [
    Slugga,BigSlugga,
    GrotBlasta,
    Shoota,
    BigShoota,
    Rokkit,
    Scorcher,
    GrotShoota,
    KustomMegaBlasta,
    Deffkannon,
    Chopper,BigChopper,
    PowerKlaw,
    Stikkbomb
  ]

  export default OrkWeapons;