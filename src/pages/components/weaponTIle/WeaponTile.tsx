import './WeaponTile.css'
import Weapon from '../../../types/Weapon'
import { Card, Table } from 'react-bootstrap'

const WeaponTile = ({weapon}:{weapon:Weapon}) => {
    return (<Card className={`weaponTile`}>
                <Card.Body>
                    <Card.Title>{weapon.name} - {weapon.pt}</Card.Title> 
                    <Table>
                    <thead>
                    <tr>
                        <th>Type</th>
                        <th>Atk</th>
                        <th>Dam</th>
                        <th>AP</th>
                    </tr>
                    </thead>
                    <tbody>
                        {weapon.profiles.map(o=>
                            <tr>
                            <td></td>
                            <td>{o.attack}</td>
                            <td>{o.dam}</td>
                            <td>{o.ap}</td>
                        </tr>)}
                        
                    </tbody>
                    </Table>
                </Card.Body>
    </Card>)

}

export default WeaponTile