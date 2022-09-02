import Equipment from "../../../types/Equipment"
import { CamoCloak } from "../../BaseEquipment"


export const SpecialIssueAmmo : Equipment =
{
    name:"Special Issue Ammo",
    effect:"After the target of a Shooting attack from a Bolt weapon has chosen to Evade or not, you may choose of the following bonuses: • Dragon fire – The attack gains Ignore Cover • Vengeance – The attack gains -1 AP and R8\" (Bolt Pistols reduced to R4” instead).. • Kraken – The attack gains +1 Damage.",
    pt:5
}

export const Auspex : Equipment =
{
    name:"Auspex",
    effect:"This operative counts as being within 1\" of an objective when they're within 3\" of an objective.",
    pt:4
}

export const PuritySeals : Equipment = 
{
    name:"Purity Seal",
    effect:"One use only. When this Operative activates you may remove an Evade token without losing an action.",
    pt:3
}

export const FirstCompanyHonours : Equipment = 
{
    name:"1st Company Honours",
    effect: "Re-roll one dice when fighting or fighting back.",
    pt:4
}

export const AstartesEquipmentList : Equipment[] =
[SpecialIssueAmmo,Auspex,PuritySeals,FirstCompanyHonours,CamoCloak]

export default AstartesEquipmentList;