import Point from "../types/Point";
import Pointed from "../types/Pointed";

export function SumPoints(points:Pointed[]) : Point
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