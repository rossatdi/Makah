import { Card, Container, Table } from "react-bootstrap";
import Operative from "../../../types/Operative"
import TileDisplay from "../tileDisplay/TileDisplay";
import WeaponBlock from "../weaponsBlock/WeaponsBlock";

const OperativeView = ({operative}:{operative:Operative}) => {
    return (<Card className="operativeView">
                    <Card.Header>
                <div className="tileHeader">
                    <span className="title">{operative.name}</span>
                    {operative.pt && operative.pt!=="-" && <span className="pt">{`${operative.pt}pt`}</span>}
                </div>
                </Card.Header>
                <Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Mv</th>
                                <th>Ws</th>
                                <th>Bs</th>
                                <th>Act</th>
                                <th>Wnd</th>
                                <th>Sv</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr  >
                            <td>{operative.mv}"</td>
                            <td>{operative.ws}+</td>
                            <td>{operative.bs}+</td>
                            <td>{operative.act}</td>
                            <td>{operative.wnd}</td>
                            <td>{operative.sv}+</td>
                        </tr>
                        </tbody>
                    </Table>
                    <WeaponBlock items={operative.weapons.map(o=>({weapon:o}))} showFilter={false} showToggles={false} source={""}/>
                    <TileDisplay items={operative.skills.map(o=>({skill:o, type:"skill"}))} showFilter={false}/>
                    <TileDisplay items={operative.equipment.map(o=>({skill:o, type:"eqp"}))} showFilter={false}/>
                </Card.Body>
    </Card>)
}

export default OperativeView;