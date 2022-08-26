import Equipment from "../types/Equipment";

export const CarapaceArmor: Equipment =
{
    name:"Carapace Armor",
    effect:"Increase save from 5+ to 4+.",
    requirement:{sv:5},
    modifier:{sv:-1},
    pt:3
}

export const MediKit: Equipment =
{
    name:"Medi-Kit",
    effect:"IWhen using the Stabilise action, operatives returned to winded regain d6 wounds.",
    pt:4
}