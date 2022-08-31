import Faction from "../../types/Faction";
import { Astartes } from "./astartes/Astartes";
import { Craftworld } from "./craftworld/Craftworld";
import { Deldar } from "./deldar/Deldar";
import { ImperialGuard } from "./imperialGuard/ImperialGuard";
import { Inquisition } from "./inquisition/Inquisition";
import { Mechanicus } from "./mechanicus/Mechanicus";
import { Orks } from "./orks/Orks";
import { SistersOfBattle } from "./sisters/Sisters";
import { Tau } from "./tau/Tau";

export const Factions : Faction[] =
[
    Inquisition,
    Astartes,
    ImperialGuard,
    SistersOfBattle,
    Mechanicus,
    Orks,
    Craftworld,
    Deldar,
    Tau
]

export default Factions;