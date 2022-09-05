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
    effect:"When using the Stabilise action, operatives returned to winded regain d6 wounds.",
    pt:4
}

export const CamoCloak : Equipment = 
{
    name:"Camo Cloak",
    effect:"Re-roll 1s when making #Evade# rolls.",
    pt:3
}


export const ServoSkull: Equipment =
{
    name:"Servo Skull",
    effect:"When Shooting a target with a #Evade# token roll a dice, on a 4+ they cannot #Evade#",
    pt:4
}

export const MIU: Equipment =
{
    name:"MIU",
    effect:"Add to one pistol or assault weapon. That weapon can be fired as an additional Shoot action at Bs 5+ that neither costs an action or stops the Operative carrying out a normal Shoot. The weapon can be fired normally instead.",
    pt:5
}