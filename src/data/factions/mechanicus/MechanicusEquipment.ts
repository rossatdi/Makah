import Equipment from "../../../types/Equipment";
import { MIU, ServoSkull } from "../../BaseEquipment";

export const DataTether: Equipment =
{
    name:"Data-tether",
    effect:"One use, remove a suppression token without losing an action.",
    pt:3
}

export const Omnispex: Equipment =
{
    name:"Omnispex",
    effect:"Targets chosen by this Operative can only #Evade# on a 6+.",
    pt:4
}

export const CanticleOverride: Equipment =
{
    name:"Canticle override",
    effect:"Leader only. Unique action: Pick a visible operative and increase its Bs to 3+.",
    pt:5
}

export const MissionOrientationProtocols: Equipment =
{
    name:"Mission orientation protocols",
    effect:"Remove Limited from this Operative.",
    pt:2
}

export const RefractorField: Equipment =
{
    name:"Refractor Field",
    effect:"Ignore the first -1AP of a weapon.",
    pt:5
}

const MechanicusEquipmentList : Equipment[] = 
[
    DataTether,
    Omnispex,
    CanticleOverride,
    ServoSkull,
    MIU,
    MissionOrientationProtocols,
    RefractorField
]
export default MechanicusEquipmentList;

