import Operative from "../types/Operative";
import Point from "../types/Point";
import IPointed from "../interfaces/IPointed";
import SumPoints from "./SumPoints";

export function OperativeCost(operative:Operative) : Point
{
    let pointedItems : IPointed[] = [operative,...operative.weapons,...operative.equipment,...operative.skills]
    let cost = SumPoints(pointedItems);
    if(operative.isLeader && cost!=="-") cost-=10;
    return cost;
}

export default OperativeCost;