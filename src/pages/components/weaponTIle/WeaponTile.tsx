import './WeaponTile.css'
import Weapon from '../../../types/Weapon'
import { Card, Col, Container, Row } from 'react-bootstrap'
import GlossaryOverlay from '../GlossaryOverlay'
import { getKey } from '../../../functions/keys'
import React from 'react'
import { Attacks, Damage, AP } from "../../../data/GlossaryTerms";

export interface WeaponTileProps 
{
    weapon:Weapon
    type?:string
    background?:string
    faction?:string
}

const WeaponTile = ({weapon, type, background, faction}:WeaponTileProps) => {
    return (<Card className={`tile`} key={getKey()}>
                <Card.Header key={getKey()} >
                    <div className="tileHeader">
                        <span className="title">{weapon.name}</span>
                        {weapon.pt!== undefined && weapon.pt!=="-" && <span className="pt">{`${weapon.pt}pt`}</span>}
                    </div>
                </Card.Header>
                <Card.Body key={getKey()}  className="body" style={{backgroundImage: background ?`url(${background})`:"none"}} >
                    <Container key={getKey()}>
                    {weapon.profiles.map(o=>
                    <React.Fragment key={getKey()}>
                        <Row key={getKey()}>
                            <Col>Type</Col>
                            <GlossaryOverlay skill={Attacks} item={<Col>Atk</Col>}/>
                            <GlossaryOverlay skill={Damage} item={<Col>Dam</Col>}/>
                            <GlossaryOverlay skill={AP} item={<Col>AP</Col>}/>
                        </Row>
                        <Row key={getKey()}>
                            <Col>{o.types.map((p,j)=>GlossaryOverlay({ skill:p, item:<p key={getKey()} >{p.name}</p>}))}</Col>
                            <Col>{o.attack}</Col>
                            <Col>{o.dam}</Col>
                            <Col>{o.ap}</Col>
                        </Row>
                        <Row key={getKey()}>
                            {o.special.sort((a,b)=>a.name.localeCompare(b.name)).map((p,j)=>GlossaryOverlay({ skill:p, item:<Col key={getKey()} >{p.name}</Col>}))}
                        </Row>
                        </React.Fragment>
                        )}
                        {weapon.notes && <Row key={getKey()}>{weapon.notes}</Row>}
                    </Container>
                </Card.Body>
    </Card>)

}

export default WeaponTile