import { Card, Container, ListGroup, Row } from "react-bootstrap";
import Operative from "../../../types/Operative";
import { Stats } from "../../../types/OperativeBase";
import { StatModifier } from "../../../types/StatModifier";
import WeaponBlock from "../../components/weaponsBlock/WeaponsBlock";
import Tile from "../../components/tile/Tile";
import './OperativeView.css'
import { WeaponTileProps } from "../../components/weaponTIle/WeaponTile";


export type OperativeViewProps = {
    operative:Operative
}

const leader : StatModifier = {
    wnd:2
}

const finalizeStats = (stats : Operative, modifiers : StatModifier[]) : Stats =>{
    return (
        {
            mv: stats.mv, //TODO this is all broke
            ws: stats.ws + modifiers.map(o=>o?.ws ??0).reduce((a,b)=>a+b,0),
            bs:stats.bs + modifiers.map(o=>o?.bs ??0).reduce((a,b)=>a+b,0),
            act:stats.act + modifiers.map(o=>o?.act ??0).reduce((a,b)=>a+b,0),
            wnd:stats.wnd + modifiers.map(o=>o?.wnd ??0).reduce((a,b)=>a+b,0),
            sv:stats.sv + modifiers.map(o=>o?.sv ??0).reduce((a,b)=>a+b,0),
        }
    )
}

const OperativeView = ({operative} : OperativeViewProps) =>{
    let modifiers = [...operative.equipment.map(o=>o.modifier), ...operative.skills.map(o=>o.modifier)].filter((o): o is StatModifier => !!o)
    if(operative.isLeader) modifiers.push(leader)
    const finalStats = finalizeStats(operative,modifiers);
    const weapons :WeaponTileProps[] = operative.weapons.map(o=>({weapon:o}))

return (
    <Card  className="operativeView">
        <Card.Title>{operative.name}{operative.isLeader && " - Leader"}</Card.Title>
        <Card.Subtitle>{operative.type}</Card.Subtitle>
        <Card.Body>
        <Container>
                <Row>
                    <table>
                        <tr>
                            <th>Mv</th>
                            <th>Ws</th>
                            <th>Bs</th>
                            <th>Act</th>
                            <th>Wnd</th>
                            <th>Sv</th>
                        </tr>
                        <tr>
                            <td>{finalStats.mv}"</td>
                            <td>{finalStats.ws}+</td>
                            <td>{finalStats.bs}+</td>
                            <td>{finalStats.act}</td>
                            <td>{finalStats.wnd}</td>
                            <td>{finalStats.sv}+</td>
                        </tr>
                    </table>
                </Row>
                <Row>
                    <table><tr><th>Weapons</th></tr></table>
                    <WeaponBlock items={weapons} showFilter={false} showToggles={false}  source={""}/>
                </Row>
            </Container>
                <ListGroup variant="flush">
                    {operative.skills.map(o=><Tile skill={o} type="skill"/>)}
                    {operative.equipment.map(o=><Tile skill={o} type="equipment"/>)}
                </ListGroup>
        </Card.Body>
    </Card>
    
)
}

export default OperativeView