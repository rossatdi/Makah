import Faction from "../../types/Faction";
import { Astartes } from "./astartes/Astartes";
import { ImperialGuard } from "./imperialGuard/ImperialGuard";
import { Inquisition } from "./inquisition/Inquisition";
import { Mechanicus } from "./mechanicus/Mechanicus";
import { SistersOfBattle } from "./sisters/Sisters";

export const Factions : Faction[] =
[
    Inquisition,
    Astartes,
    ImperialGuard,
    SistersOfBattle,
    Mechanicus
]

export default Factions;