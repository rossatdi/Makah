import Faction from "../../types/Faction";
import { Astartes } from "./astartes/Astartes";
import { ImperialGuard } from "./imperialGuard/ImperialGuard";
import { Inquisition } from "./inquisition/Inquisition";
import { SistersOfBattle } from "./sisters/Sisters";

export const Factions : Faction[] =
[
    Inquisition,
    Astartes,
    ImperialGuard,
    SistersOfBattle
]

export default Factions;