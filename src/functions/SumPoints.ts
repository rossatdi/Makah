import Point from "../types/Point";
import IPointed from "../interfaces/IPointed";

export function SumPoints(points:IPointed[]) : Point
{
    if(points.every(p=>p.pt==="-")) return "-";
    let sum : number = 0;
    points.forEach(point => {
        if(point.pt!=="-"){
            sum += point.pt;
        }
    });
    return sum;
}

export default SumPoints;