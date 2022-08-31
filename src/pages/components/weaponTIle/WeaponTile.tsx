import './WeaponTile.css'
import Weapon from '../../../types/Weapon'
import { Card, Col, Container, Row } from 'react-bootstrap'
import GlossaryOverlay from '../GlossaryOverlay'

export interface WeaponTileProps 
{
    weapon:Weapon
    type?:string
    background?:string
    faction?:string
}

const WeaponTile = ({weapon, type, background, faction}:WeaponTileProps) => {
    return (<Card className={`tile`}>
                <Card.Header>
                    <div className="tileHeader">
                        <span className="title">{weapon.name}</span>
                        {weapon.pt!== undefined && weapon.pt!=="-" && <span className="pt">{`${weapon.pt}pt`}</span>}
                    </div>
                </Card.Header>
                <Card.Body className="body" style={{backgroundImage: background ?`url(${background})`:"none"}} >
                    <Container>
                    {weapon.profiles.map(o=>
                    <>
                        <Row>
                            <Col>Type</Col>
                            <Col>Atk</Col>
                            <Col>Dam</Col>
                            <Col>AP</Col>
                        </Row>
                        <Row>
                            <Col>{o.types.map((p,j)=>GlossaryOverlay({ skill:p, item:<p key={j}>{p.name}</p>}))}</Col>
                            <Col>{o.attack}</Col>
                            <Col>{o.dam}</Col>
                            <Col>{o.ap}</Col>
                        </Row>
                        <Row>
                            {o.special.sort((a,b)=>a.name.localeCompare(b.name)).map((p,j)=>GlossaryOverlay({ skill:p, item:<Col key={j}>{p.name}</Col>}))}
                        </Row>
                        </>
                        )}
                        {weapon.notes && <Row>{weapon.notes}</Row>}
                    </Container>
                </Card.Body>
    </Card>)

}

export default WeaponTile