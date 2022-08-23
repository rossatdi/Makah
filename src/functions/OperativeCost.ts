import { Operative } from "../types/Operative";
import { Point } from "../types/Point";
import { Pointed } from "../types/Pointed";
import { SumPoints } from "./SumPoints";

export function OperativeCost(operative:Operative) : Point
{
    let pointedItems : Pointed[] = [operative,...operative.weapons,...operative.equipment,...operative.skills]
    let cost = SumPoints(pointedItems);
    if(operative.isLeader && cost!="-") cost-=10;
    return cost;
}