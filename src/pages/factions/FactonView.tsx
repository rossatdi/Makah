import Faction from "../../types/Faction"
import { OperativeBase } from "../../types/OperativeBase"


export type FactionViewProps = {
    faction:Faction
}



const OperativesView = (operatives:OperativeBase[]) =>(<table>
            <tr>
                <th>Type</th>
                <th>Mv</th>
                <th>Ws</th>
                <th>Bs</th>
                <th>Act</th>
                <th>Wnd</th>
                <th>Sv</th>
                <th>Pt</th>
            </tr>
            {operatives.map(o=>(
                <tr>
                    <td>{o.type}</td>
                    <td>{o.mv}"</td>
                    <td>{o.ws}+</td>
                    <td>{o.bs}+</td>
                    <td>{o.act}</td>
                    <td>{o.wnd}</td>
                    <td>{o.sv}+</td>
                    <td>{o.pt}</td>
                </tr>
            ))}
        </table>
)

const FactionView = ({faction}:FactionViewProps) =>{
    return (<div>
        <h1>{faction.name}</h1>
        <h3>Operatives</h3>
        {OperativesView(faction.operativeTypes)}
        </div>)
}

export default FactionView;