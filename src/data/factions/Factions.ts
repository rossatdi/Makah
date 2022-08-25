import Faction from "../../types/Faction";
import { Astartes } from "./astartes/Astartes";
import { ImperialGuard } from "./ImperialGuard";
import { Inquisition } from "./inquisition/Inquisition";

export const Factions : Faction[] =
[
    Inquisition,
    Astartes,
    ImperialGuard
]

export default Factions;